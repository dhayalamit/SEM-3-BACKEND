//Wednesday, August 12, 2026
const fs = require("fs");

// // Question 1:
// fs.writeFileSync("welcome.txt", "Welcome to Backend Development!");

// console.log("File created successfully");

// // Question 2:
// const data = fs.readFileSync("welcome.txt", "utf-8");

// console.log(data);
//--------------------------------------------------------------------

// // Question 3:

// fs.writeFileSync("tasks.txt", "Task 1: Learn Node");
// fs.appendFileSync("tasks.txt", "\nTask 2: Learn fs module");
// const tasksData = fs.readFileSync("tasks.txt", "utf-8");

// console.log(tasksData);

// //Question 4:
// fs.writeFileSync("demo.txt", "AAA");

// let demoData = fs.readFileSync("demo.txt", "utf-8");

// console.log(demoData);
// //--
// fs.writeFileSync("demo.txt", "BBB");

// demoData = fs.readFileSync("demo.txt", "utf-8");

// console.log(demoData);
// //---
// fs.appendFileSync("demo.txt", "CCC");

// demoData = fs.readFileSync("demo.txt", "utf-8");

// console.log(demoData);

//-----------------------------------------------------------------------------------
// // Question 5 — Directory CRUD
// fs.mkdirSync("myProject");
// fs.writeFileSync("myProject/info.txt", "This is inside a folder");
// const files = fs.readdirSync("myProject");

// console.log(files);

//--------------------------------------------------------------------------------------

// // Question 6 — Sync vs Async
// console.log("1. Start");
// fs.readFile("welcome.txt", "utf-8", (err, data) => {
//     if (err) {
//         console.log(err);
//         return;
//     }

//     console.log(data);
// });
// console.log("3. End");

//---------------------------------------------------------------------------------------

// // Question 7 — Notes Manager
// fs.mkdirSync("data", { recursive: true });
// fs.writeFileSync(
//     "data/notes.txt",
//     "Note 1: Backend is fun"
// );
// fs.appendFileSync(
//     "data/notes.txt",
//     "\nNote 2: fs module learned\nNote 3: CRUD done"
// );
// const notes = fs.readFileSync("data/notes.txt", "utf-8");
// console.log("All Notes:");
// console.log(notes);

// const noteCount = notes.split("\n").length;
// console.log("Total Notes:", noteCount);

// fs.rmSync("data", { recursive: true });

// console.log("Data folder deleted successfully");

//----------------------------------------------------------------------------------------------------------------------------
//Thursday, August 13, 2026
const os = require("os");
const http = require("http");
const express = require("express");

//----------------------------------------------------------
// // Question 1 — System Info
// console.log("Platform:", os.platform());
// console.log("CPU Architecture:", os.arch());
// console.log(
//     "Total RAM:",
//     (os.totalmem() / 1024 ** 3).toFixed(2),
//     "GB"
// );
// console.log(
//     "Free RAM:",
//     (os.freemem() / 1024 ** 3).toFixed(2),
//     "GB"
// );
// console.log(
//     "System Uptime:",
//     (os.uptime() / 3600).toFixed(2),
//     "hours"
// );

//--------------------------------------------------------------

// // Question 2 — Basic HTTP Server
// const server = http.createServer((req, res) => {

//     console.log("URL:", req.url);
//     console.log("Method:", req.method);

//     res.end("Welcome to my server");
// });

// server.listen(4000, () => {
//     console.log("Server running on http://localhost:4000");
// });

//--------------------------------------------------------------

// // Question 3- Routing with http

// const server = http.createServer((req, res) => {

//     if (req.url === "/" && req.method === "GET") {
//         res.end("Home Page");
//     }

//     else if (req.url === "/products" && req.method === "GET") {
//         res.end("Our Products");
//     }

//     else if (req.url === "/login" && req.method === "GET") {
//         res.end("Login Page");
//     }

//     else {
//         res.statusCode = 404;
//         res.end("Page Not Found");
//     }
// });

// server.listen(4000, () => {
//     console.log("Server running on http://localhost:4000");
// });

//--------------------------------------------------------------

// // Question 4 — Express Server
// const app = express();

// app.get("/", (req, res) => {
//     res.send("Home Page");
// });

// app.get("/products", (req, res) => {
//     res.send("Our Products");
// });

// app.get("/login", (req, res) => {
//     res.send("Login Page");
// });

// app.get("/contact", (req, res) => {
//     res.send("Contact Page");
// });

// app.listen(4000, () => {
//     console.log("Express server running on http://localhost:4000");
// });

//--------------------------------------------------------------
// // Question 5 — Express Middleware
// const app = express();

// // Middleware
// app.use((req, res, next) => {
//     console.log(req.method, req.url);
//     next();
// });

// // Routes
// app.get("/", (req, res) => {
//     res.send("Home Page");
// });

// app.get("/products", (req, res) => {
//     res.send("Our Products");
// });

// app.get("/login", (req, res) => {
//     res.send("Login Page");
// });

// app.get("/contact", (req, res) => {
//     res.send("Contact Page");
// });

// app.listen(4000, () => {
//     console.log("Express server running on http://localhost:4000");
// });

//--------August 19, 2026-------------------------------------------------------------------------

// const app = express();

// // Middleware
// app.use(express.json());

// // Starting books data
// let books = [
//     {
//         id: 1,
//         title: "Atomic Habits",
//         author: "James Clear",
//         genre: "self-help",
//         price: 499
//     },
//     {
//         id: 2,
//         title: "Deep Work",
//         author: "Cal Newport",
//         genre: "self-help",
//         price: 450
//     },
//     {
//         id: 3,
//         title: "1984",
//         author: "George Orwell",
//         genre: "fiction",
//         price: 350
//     },
//     {
//         id: 4,
//         title: "Sapiens",
//         author: "Yuval Noah Harari",
//         genre: "history",
//         price: 599
//     }
// ];

// // Question 1 — Read All //1
// app.get("/books", (req, res) => {
//     res.send(books);
// });
// //2
// app.get("/books/:id", (req, res) => {

//     const id = Number(req.params.id);

//     const book = books.find((book) => book.id === id);

//     if (!book) {
//         return res.status(404).send("book not found");
//     }

//     res.send(book);
// });
// // Question 2 — Search by Genre

// app.get("/search", (req, res) => {

//     const genre = req.query.genre;

//     const result = books.filter((book) => book.genre === genre);

//     res.send(result);
// });

// // Question 3 — Add a Book

// app.post("/books", (req, res) => {

//     const newBook = req.body;

//     books.push(newBook);

//     res.send({
//         message: "Book added successfully",
//         book: newBook
//     });
// });

// // Question 4 — Update Price
// app.put("/books/:id", (req, res) => {

//     const id = Number(req.params.id);

//     const newPrice = req.body.price;

//     const book = books.find((book) => book.id === id);

//     if (!book) {
//         return res.status(404).send("book not found");
//     }

//     book.price = newPrice;

//     res.send(book);
// });

// // Question 5 — Delete a Book
// app.delete("/books/:id", (req, res) => {

//     const id = Number(req.params.id);

//     const bookExists = books.some((book) => book.id === id);

//     if (!bookExists) {
//         return res.status(404).send("book not found");
//     }

//     books = books.filter((book) => book.id !== id);

//     res.send({
//         message: "Book deleted successfully"
//     });
// });

// //sever
// app.listen(4000, () => {
//     console.log("Server running on http://localhost:4000");
// });

//--------August 25, 2026-------------------------------------------------------------------------

let mongoose = require("mongoose");
let bcrypt = require("bcryptjs");

let User = require("./db/db");
let app = express();

app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/db").then(() => {
  console.log("db connected");
});


app.post("/signup", async (req, res) => {

    let { name, email, passWord } = req.body;

    let findData = await User.findOne({ email });

    console.log(findData);

    if (findData) {
        return res.send("User already exists");
    }
    else {

        let updatedP = await bcryptjs.hash(passWord, 10);

        console.log(updatedP);

        let userinfo = new User({
            name,
            email,
            passWord: updatedP
        });

        await userinfo.save();

        res.send("User registered successfully");
    }
});

// POST /signUp par user ka data req.body se liya jata hai aur User.findOne({ email }) se check kiya jata hai ki email pehle se registered hai ya nahi.
//  Agar user exist karta hai to "User already exists" response milta hai. Agar nahi karta, password hash karke new User() se user banaya jata hai,
//  save() se MongoDB mein store kiya jata hai aur success response bheja jata hai.

//----------------------------------
app.listen(4000, () => {
  console.log("Server running on port 4000");
});
