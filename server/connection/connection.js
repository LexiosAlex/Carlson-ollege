import mongoose from "mongoose";

const devDbUrl =
  "mongodb+srv://Agent070:Agent070@myapptestcluster-rhaak.mongodb.net/examdb?retryWrites=true&w=majority";

mongoose.connect(devDbUrl, {
  dbName: "examdb",
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: true
});
mongoose.set("useCreateIndex", true);
mongoose.Promise = global.Promise;
export const connection = mongoose.connection;

connection.on(
  "error",
  console.error.bind(console, "MongoDB connection error:")
);
