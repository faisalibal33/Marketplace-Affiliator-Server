import express from "express";
import {
  createPackage,
  deletePackage,
  getAllPackage,
  getPackage,
  updatePackage,
} from "../controllers/Package.js";
const router = express.Router();

//CREATE
router.post("/", createPackage);

//UPDATE
router.put("/:id", updatePackage);
//DELETE
router.delete("/:id", deletePackage);
//GET

router.get("/find/:id", getPackage);
//GET ALL

router.get("/", getAllPackage);

export default router;
