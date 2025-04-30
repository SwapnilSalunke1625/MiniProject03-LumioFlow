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

const registerUser=asyncHandler(async (req, res)=>{
  res.status(200).json({
   message: "ok"
    })
  })

  export {
  registerUser
  }


/*

 */