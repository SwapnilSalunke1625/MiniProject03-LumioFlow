import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/User.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import bcrypt from "bcryptjs";
import { sendWelcomeEmail } from "../utils/EmailSender.js";
import jwt from "jsonwebtoken";

// Token generator
const generateAccessAndRefreshToken = async (userId) => {
  try {
    const user = await User.findById(userId);
    const refreshToken = user.generateRefreshToken();
    const accessToken = user.generateAccessToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(500, "Something went wrong while generating tokens");
  }
};

// Register user
const registerUser = asyncHandler(async (req, res) => {
  const {
    fullName = "",
    email = "",
    phone = "",
    country = "",
    state = "",
    city = "",
    userType = "",
    preferredNotification = [],
    password = "",
  } = req.body;

  console.log("Incoming Registration Request:", req.body);

  if (
    [fullName, email, phone, state, city, userType, password, preferredNotification].some(
      (field) => typeof field === "string" && field.trim() === ""
    )
  ) {
    throw new ApiError(400, "All fields are required");
  }

  const allowedTypes = ["Residential", "Commercial", "Industrial"];
  if (!allowedTypes.includes(userType)) {
    throw new ApiError(400, "Invalid userType. Allowed: Residential, Commercial, Industrial");
  }

  const existedUser = await User.findOne({ $or: [{ email }, { phone }] });
  if (existedUser) {
    throw new ApiError(409, "Email or phone already exists");
  }

  if (
    Array.isArray(preferredNotification) &&
    preferredNotification.includes("email")
  ) {
    try {
      const mailResponse = await sendWelcomeEmail(email, fullName);
      console.log(mailResponse);
    } catch (emailError) {
      console.error("Email sending failed:", emailError);
      throw new ApiError(500, "Failed to send welcome email. Registration aborted.");
    }
  }

  const user = await User.create({
    fullName: fullName.toLowerCase(),
    email,
    phone,
    country,
    state,
    city,
    userType,
    preferredNotification,
    password,
  });

  const createdUser = await User.findById(user._id).select("-password -refreshToken");

  if (!createdUser) {
    throw new ApiError(500, "User creation failed");
  }

  return res.status(201).json(
    new ApiResponse(200, createdUser, "User registered successfully!")
  );
});

// Login user
const LoginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new ApiError(400, "Email and password are required");
  }

  const user = await User.findOne({ email });

  if (!user) {
    throw new ApiError(400, "User does not exist, please register");
  }

  const isPasswordValid = await user.isPasswordCorrect(password);

  if (!isPasswordValid) {
    throw new ApiError(401, "Invalid password");
  }

  const { accessToken, refreshToken } = await generateAccessAndRefreshToken(user._id);

  const loggedInUser = await User.findById(user._id).select("-password -refreshToken");

  const options = {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
  };

  return res.status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      new ApiResponse(
        200,
        {
          user: loggedInUser,
          accessToken,
          refreshToken,
        },
        "User logged in successfully"
      )
    );
});

// Logout user
const LogOutUser = asyncHandler(async (req, res) => {
  await User.findByIdAndUpdate(
    req.user._id,
    {
      $set: {
        refreshToken: undefined,
      },
    },
    {
      new: true,
    }
  );

  const options = {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
  };

  return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, {}, "User logged out successfully"));
});

export { registerUser, LoginUser, LogOutUser };
