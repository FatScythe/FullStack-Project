require("dotenv").config();

const connectDB = require("./db/connect");
const Job = require("./models/Job");
const mockData = require("./MOCK_DATA");

const populate = async () => {
  try {
    await connectDB(process.env.MONGO_URI_035);
    await Job.deleteMany();
    await Job.create(mockData);
    console.log("Success!!!");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

populate();