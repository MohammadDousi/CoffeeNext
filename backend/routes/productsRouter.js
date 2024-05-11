const express = require("express");
const fs=require('fs')
const path=require('path')
const photosPath=path.join(__dirname,'../public/image/products')
const productsRouter = express.Router();


const products = [
  {
    uuid: 1,
    image: 'p1',
    product: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
    amount: 175000,
    rating: 4,
    offer: 0,
    offer_amount: 0,
  },
  {
    uuid: 2,
    image: 'p2',
    product: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
    amount: 175000,
    rating: 5,
    offer: 12,
    offer_amount: 154000,
  },
  {
    uuid: 3,
    image: 'p3',
    product: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
    amount: "-1",
    rating: 3,
    offer: 0,
    offer_amount: 0,
  },
  {
    uuid: 4,
    image: 'p4',
    product: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
    amount: 175000,
    rating: 4,
    offer: 0,
    offer_amount: 0,
  },
  {
    uuid: 5,
    image: 'p3',
    product: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
    amount: 175000,
    rating: 4,
    offer: 0,
    offer_amount: 0,
  },
  {
    uuid: 6,
    image: 'p4',
    product: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
    amount: 175000,
    rating: 5,
    offer: 12,
    offer_amount: 154000,
  },
  {
    uuid: 7,
    image: 'p1',
    product: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
    amount: "-1",
    rating: 3,
    offer: 0,
    offer_amount: 0,
  },
  {
    uuid: 8,
    image: 'p2',
    product: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
    amount: 175000,
    rating: 4,
    offer: 0,
    offer_amount: 0,
  },
];

fs.readdir(photosPath, (err, photos) => {
    if (err) console.log(err);
    else {
        products.forEach((product,index) => {
        product.image=photos[index]
      })
    }
  });




  

productsRouter.get("/", (req, res) => {
  try {
    res.send(products)
  } catch (error) {
    res.send(JSON.stringify("route is wrong request"));
  }
});

module.exports = productsRouter;
