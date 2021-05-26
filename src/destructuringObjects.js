"use strict";
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  
    openingHours: {
      thu: {
        open: 12,
        close: 22,
      },
      fri: {
        open: 11,
        close: 23,
      },
      sat: {
        open: 0, // Open 24 hours
        close: 24,
      },
    },
  };

const {name ,categories,openingHours}= restaurant;
console.log(name,categories,openingHours);

const{name:restaurantName,categories:tags,openingHours:hours,menu=[],}= restaurant;
console.log(name,categories,openingHours,menu);

//Mutating variables
let a =10;
let b= 20;

const obj={a:2,b:3};

({a,b}=obj);
console.log(a,b);
