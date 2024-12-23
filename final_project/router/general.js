const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
let register = require("./auth_users.js").register;
const public_users = express.Router();


public_users.post("/register", (req,res) => {
    const username = req.body.username;
    const password = req.body.password;

    // Check if both username and password are provided
    if (username && password) {
        // Check if the user does not already exist
        const check = register(username, password)
        if (check) 
            return res.status(200).json({message: "User successfully registered. Now you can login"});
        else 
            return res.status(404).json({message: "User already exists!"});
    }
    // Return error if username or password is missing
    return res.status(404).json({message: "Unable to register user."});
});


public_users.get('/',function (req, res) {
  return res.send(JSON.stringify(books,null,4));
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res) {
 const isbn = req.params.isbn;
 return res.send(books[isbn])
 });
  
// Get book details based on author
public_users.get('/author/:author',function (req, res) {
  const author = req.params.author;
 let respuesta = [];
  for (let key in books) {
    if(books[key].author == author)
    respuesta.push(books[key])
    }
  return res.send(respuesta);
});

// Get all books based on title
public_users.get('/title/:title',function (req, res) {
    const title = req.params.title;
    let respuesta = [];
     for (let key in books) {
       if(books[key].title == title)
       respuesta.push(books[key])
       }
     return res.send(respuesta);
});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
    const isbn = req.params.isbn;
    return res.send(books[isbn].reviews)
});

module.exports.general = public_users;
