import Package from "../models/Package.js";
// import Room from "../models/Room.js";

export const createPackage = async (req, res, next) => {
  const newPackage = new Package(req.body);

  try {
    const savedPackage = await newPackage.save();
    res.status(200).json(savedPackage);
  } catch (err) {
    next(err);
  }
};
export const updatePackage = async (req, res, next) => {
  try {
    const updatedPackage = await Package.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedPackage);
  } catch (err) {
    next(err);
  }
};
export const deletePackage = async (req, res, next) => {
  try {
    await Package.findByIdAndDelete(req.params.id);
    res.status(200).json("Package Done");
  } catch (err) {
    next(err);
  }
};
export const getPackage = async (req, res, next) => {
  try {
    const Package = await Package.findById(req.params.id);
    res.status(200).json(Package);
  } catch (err) {
    next(err);
  }
};
export const getAllPackage = async (req, res, next) => {
  try {
    const Packages = await Package.find();
    res.status(200).json(Packages);
  } catch (err) {
    next(err);
  }
  //   const { min, max, ...others } = req.query;
  //   try {
  //     const hotels = await Hotel.find({
  //       ...others,
  //       cheapestPrice: { $gt: min | 1, $lt: max || 999 },
  //     }).limit(req.query.limit);
  //     res.status(200).json(hotels);
  //   } catch (err) {
  //     next(err);
  //   }
};
// export const countByCity = async (req, res, next) => {
//   const cities = req.query.cities.split(",");
//   try {
//     const list = await Promise.all(
//       cities.map((city) => {
//         return Hotel.countDocuments({ city: city });
//       })
//     );
//     res.status(200).json(list);
//   } catch (err) {
//     next(err);
//   }
// };
// export const countByType = async (req, res, next) => {
//   try {
//     const hotelCount = await Hotel.countDocuments({ type: "hotel" });
//     const apartmentCount = await Hotel.countDocuments({ type: "apartment" });
//     const resortCount = await Hotel.countDocuments({ type: "resort" });
//     const villaCount = await Hotel.countDocuments({ type: "villa" });
//     const cabinCount = await Hotel.countDocuments({ type: "cabin" });

//     res.status(200).json([
//       { type: "hotel", count: hotelCount },
//       { type: "apartments", count: apartmentCount },
//       { type: "resorts", count: resortCount },
//       { type: "villas", count: villaCount },
//       { type: "cabins", count: cabinCount },
//     ]);
//   } catch (err) {
//     next(err);
//   }
// };

// export const getHotelRooms = async (req, res, next) => {
//   try {
//     const hotel = await Hotel.findById(req.params.id);
//     const list = await Promise.all(
//       hotel.rooms.map((room) => {
//         return Room.findById(room);
//       })
//     );
//     res.status(200).json(list)
//   } catch (err) {
//     next(err);
//   }
// };
