import User from '../models/Users.js'
import { createError } from '../utils/error.js';
import bcrypt from "bcryptjs";

export const createUser=async(req,res,next)=>
{
    try{
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
  const newUser=new User(
    {
         ...req.body,
        password:hash,
    }  );
    await newUser.save()
    res.status(200).send("USer has been created")
    }
    catch(err)
    {
        next(err);
    }
}
export const updateUser = async (req, res, next) => {
   try {
     const updatedUser = await User.findByIdAndUpdate(
       req.params.id,
       { $set: req.body },
       { new: true }
     );
     res.status(200).json(updatedUser);
   } catch (err) {
     next(createError(401,"Ur Not A admin"));
   }
 };
 export const deleteUser = async (req, res, next) => {
   try {
     await User.findByIdAndDelete(req.params.id);
     res.status(200).json("User has been deleted.");
   } catch (err) {
     next(err);
   }
 };
 export const getUser = async (req, res, next) => {
   try {
     const user = await User.findById(req.params.id);
     res.status(200).json(user);
   } catch (err) {
     next(err);
   }
 };
 export const getUsers = async (req, res, next) => {
   try {
     const users = await User.find()
     res.status(200).json(users);
   } catch (err) {
     next(err);
   }
 };
