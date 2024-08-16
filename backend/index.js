import express from 'express';
import cors from 'cors';
import mysql2 from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({
    origin: '*'
}));

let con = mysql2.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DBNAME
});

con.connect((err) => {
    if (err) {
        console.error("Database connection failed:", err);
    } else {
        console.log("Database connected");
    }
});

app.post("/sendData", (req, res) => {
    console.log("***** Received Data:", req.body);
    let { name, email,phone,message } = req.body;

    if (!name || !email || !phone || !message) {
        res.status(400).send("Invalid data received");
        return;
    }

    let dataQuery = "INSERT INTO notes (name, email,phone,message) VALUES (?, ?,?,?)";
    con.query(dataQuery, [name,email,phone,message], (err, result) => {
        if (err) {
            console.error("Error saving data:", err);
            res.status(500).send("Error saving data");
        } else {
            res.status(200).json({ message: "Data Saved Successfully" });
            console.log("Data saved");
        }
    });
});



app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});
