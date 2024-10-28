import express from "express";
import { countByCity, countByType, createHouse, deleteHouse, getHouse, getHouses, updateHouse } from "../controllers/house.js";
import { verifyAdmin } from "../utils/verifytoken.js";
const router = express.Router();

router.post("/",verifyAdmin,createHouse)
router.put("/:id",verifyAdmin,updateHouse)
router.delete("/:id",verifyAdmin,deleteHouse)
router.get("/find:id",getHouse)
 router.get("/",getHouses)
 router.get("/countByCity",countByCity);
 router.get("/countByType",countByType);

export default router;