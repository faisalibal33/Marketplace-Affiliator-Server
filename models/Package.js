import mongoose from "mongoose";

const PackageSchema = new mongoose.Schema(
  {
    packageName: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    images: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Package", PackageSchema);
