import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/twitter`
    );

    console.log(
      `successfully connected to DB || ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log(`connection error on database.js file || ${error}`);
  }
};

export default connectDB;
