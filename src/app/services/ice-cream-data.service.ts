import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IceCreamDataService {

  

  iceCreamData = [
    {
      "name": "Ice Cream Dream",
      "price": 4.99,
      "quantity": 50,
      "imgurl": "assets/ice/15.png",
      "iconurl": "assets/pattern/1.png",
      "description": "Classic ice cream with a rich and creamy texture.",
      "flavor": "Strawberry",
      "allergens": ["Milk"],
      "rating": 4.8
    },
    {
      "name": "Musty Mint",
      "price": 5.49,
      "quantity": 40,
      "imgurl": "assets/ice/6.png",
      "iconurl": "assets/pattern/4.png",
      "description": "Ice Cream made by the finest Wilson & Sons.",
      "flavor": "Mint",
      "allergens": ["Milk", "Soy"],
      "rating": 4.9
    },
    {
      "name": "Strawberry Bliss",
      "price": 4.75,
      "quantity": 30,
      "imgurl": "assets/ice/13.png",
      "iconurl": "assets/pattern/9.png",
      "description": "Refreshing strawberry ice cream filled with real fruit chunks.",
      "flavor": "Strawberry",
      "allergens": ["Milk"],
      "rating": 4.7
    },
    {
      "name": "Mint Chip Euphoria",
      "price": 5.99,
      "quantity": 25,
      "imgurl": "assets/ice/1.png",
      "iconurl": "assets/pattern/12.png",

      "description": "Cool mint ice cream loaded with delightful chocolate chips.",
      "flavor": "Mint",
      "allergens": ["Milk"],
      "rating": 4.6
    },
    {
      "name": "Sexy Coffee",
      "price": 6.25,
      "quantity": 35,
      "imgurl": "assets/ice/7.png",
      "iconurl": "assets/pattern/11.png",
      "description": "Quality Coffee flavoured ice cream.",
      "flavor": "Coffee",
      "allergens": ["Milk"],
      "rating": 4.7
    },
    // will add more
  ]

  selectedIceCream = this.iceCreamData[0];



  constructor() { }

  // should query based on flavor, rating, and price
  filter() { }

  getPatternIceCreams(){
    return this.iceCreamData.filter(iceCream => iceCream.iconurl != null);
  }

}
