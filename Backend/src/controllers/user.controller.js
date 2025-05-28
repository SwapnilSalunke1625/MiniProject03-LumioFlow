// Controllers/User.controller.js
// export const registerUser = async (req, res) => {
//   try {
//     console.log("Inside registerUser");  // Add this line to check if the function is being called

//     // Your logic for registering a user will go here.
//     res.status(200).json({
//       success: true,
//       message: "OK from registerUser"
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({
//       success: false,
//       message: "Internal Server Error"
//     });
//   }
// };



import {asyncHandler} from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js"
import {User} from "../models/User.model.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import bcrypt from "bcrypt"




const registerUser=asyncHandler(async (req, res)=>{ 


  // step 01: getting data from frontend

    const { fullName, email, phone, country, state, city, userType, preferredNotification, password}=req.body 
    console.log(" Incoming Registration Request:", req.body);
    

    // step 02: validations

    if(
      [fullName,email,phone,state,city,userType,preferredNotification,password].some((field)=> field?.trim()==="")
    ) {
      throw new ApiError(400, "all fields are required")
    }

    // step 03: user exist or not check

    const existedUser=await User.findOne({
      $or:[{email},{phone}]

    })
    if(existedUser){
      console.warn("Email or phone is already exists:", email, phone);
      throw new ApiError(409, "email is already exist")
    }


    const hashedPassword = await bcrypt.hash(password, 10);


    // databaase entry
    const user=await User.create({
      fullName: fullName.toLowerCase(),
      email,
      phone,
      country,
      state,
      city,
      userType,
      preferredNotification,
      password:hashedPassword      
    })

    const createdUser=await User.findById(user._id).select(
      "-password -refreshToken"   // this is for not taking into db
    )
  

    if(!createdUser){
      console.error(" User creation failed in DB");
      throw new ApiError(500, "something went wrong while registration user")
    }

     console.log("User created successfully:", createdUser);

    // final step : return response
    return res.status(201).json(
      new ApiResponse(200, createdUser, "User registered successfully !!!")
    )


  })

  export {
  registerUser
  }


/*

Registration  steps :
1)get users details from frontend
2)validation - not empty
3) check if user already exist : username, email
4) check for avatar check for images 
5)upload on cloudinary, check avatar
6) create user object create entry in DB
7) reomove pass word and refresh token field from response
8)chek for userr creation 
9) return response 



 */