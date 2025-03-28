import House from '../models/House.js'
export const createHouse=async(req,res,next)=>{
    const newHouse=new House(req.body);
 try {
    const savedHouse=await newHouse.save()
    res.status(200).json(savedHouse)
 } catch (err) {
    next(err);
 }
};
export const updateHouse = async (req, res, next) => {
   try {
     const updatedHotel = await House.findByIdAndUpdate(
       req.params.id,
       { $set: req.body },
       { new: true }
     );
     res.status(200).json(updatedHotel);
   } catch (err) {
     next(err);
   }
 };
 export const deleteHouse = async (req, res, next) => {
   try {
     await House.findByIdAndDelete(req.params.id);
     res.status(200).json("House has been deleted.");
   } catch (err) {
     next(err);
   }
 };
 export const getHouse = async (req, res, next) => {
   try {
     const house = await House.findById(req.params.id);
     res.status(200).json(house);
   } catch (err) {
     next(err);
   }
 };
 export const getHouses = async (req, res, next) => {

   try {
     const houses = await House.find()
     res.status(200).json(houses);
   } catch (err) {
     next(err);
   }
 };
 export const countByCity=async(req,res,next)=>

 {
  const cities=req.query.cities.split(",");
  try
  {
    const list=await Promise.all(
      cities.map((city)=>
    {
      return House.countDocuments({city:city});
    })
    );
   res.status(200).json(list);
  }
  catch(err)
  {
    next(err);
  }
 }
 export const countByType = async (req, res, next) => {
  try {
    const apartmentCount = await House.countDocuments({ type: "Apartment" });
    const pgCount = await House.countDocuments({ type: "PG" });
    const dormitoryCount = await House.countDocuments({ type: "Dormitory" });
    const lodgeCount = await House.countDocuments({ type: "Lodge" });
    const hostelCount = await House.countDocuments({ type: "Hostel" });

    res.status(200).json([
      { type: "Hostel", count: hostelCount },
      { type: "Apartment", count: apartmentCount },
      { type: "Dormitory", count: dormitoryCount },
      { type: "PG", count: pgCount },
      { type: "Lodge", count: lodgeCount },
      
    ]);
  } catch (err) {
    next(err);
  }
};

