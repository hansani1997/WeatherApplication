import  express  from "express";
import mongoose from "mongoose"
import userRouter from "./routes/userRoutes";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/weatheruser",userRouter);

//connect the database
mongoose.connect('mongodb+srv://hansanipwijeweera:eZEhrlO1hcLEEoF6@cluster0.nwiyvo1.mongodb.net/Blog?retryWrites=true&w=majority'
).then(()=> app.listen(5000) //port
).then(() => console.log("Connected to Database and listening to localhost port of the 5000")
).catch((err) => console.log(err));
