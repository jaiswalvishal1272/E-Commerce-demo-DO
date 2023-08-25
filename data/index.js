const express = require("express");
require("./db/config");
const cors = require("cors");
const Products = require("./db/Products");
const Cart = require("./db/cart");
const User = require("./db/User");


const app = express();
app.use(cors());
app.use(express.json());


// Product list
app.get("/products", async (req, resp) => {
  let products = await Products.find();
  console.log(products);
  resp.send(products);
});

// Cart list
app.get("/getCart", async (req, resp) => {
  let cart = await Cart.find();
  if(cart.length > 0) {
    console.log(cart);
    resp.send(cart);
  }
  else {
    console.log("No Records Found");
    resp.send("No Records Found");
  }

  
});

// addCart
app.post("/addCart", async (req, resp) => {
    console.log(req.body);
    let cart = new Cart(req.body);
    let result = await cart.save();
    console.log(cart);
    resp.send(result);
})

// remove from cart
app.delete("/removeCart/:id", async (req, resp) => {
    const result = await Cart.deleteOne({_id:req.params.id});
    resp.send(result);
});

// login
app.post("/login", async(req, resp) => {
    console.log(req.body);
    if(req.body.Email && req.body.Password) {
        let user =  await User.findOne(req.body).select("-Password");
        if(user) {
            resp.send(user);
        }
        else {
            resp.send({"result":"No User Found"});
        }
    }
    else {
        resp.send({"result":"No User Found"});
    }
    
})

// Register
app.post("/signup", async (req, resp) => {
  console.log(req.body);
  if(req.body.Name && req.body.Email && req.body.Password) {
    let user = new User(req.body);
    let result = await user.save();
    console.log("user: " + user);
    resp.send(result);
  }
  else {
    resp.send({"result":"Something went wrong."});
  }
})

app.listen(5004);
