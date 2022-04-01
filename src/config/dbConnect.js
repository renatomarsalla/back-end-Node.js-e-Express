import mongoose from "mongoose";

mongoose.connect("mongodb+srv://alura:222803@alura.cs9nb.mongodb.net/Alura-Node");

let db = mongoose.connection;

export {db}