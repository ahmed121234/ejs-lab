// server.js
const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.set('view', '/views')

const RESTAURANT = {
  name: 'The Green Byte Bistro',
  isOpen: true,
  address: '742 Evergreen Rd, Mapleview, OS 45502',
  phone: '555-321-9876',
  menu: [
    {
      id: 1,
      name: 'Quantum Quinoa Mushroom Burger',
      price: 13.0,
      rating: 4,
      category: 'mains',
      details:
        'A vegetarian burger made with a quinoa and mushroom patty, it will take you to another realm.'
    },
    {
      id: 2,
      name: 'Binary Berry Cheesecake',
      price: 10.11,
      rating: 3,
      category: 'desserts',
      details:
        'A creamy cheesecake bursting with flavor. A mix of berries in every byte.'
    },
    {
      id: 3,
      name: 'Recursive Rigatoni',
      price: 17.0,
      rating: 5,
      category: 'mains',
      details:
        "A classic rigatoni pasta dish, layered with rich tomato sauce and herbs. You'll keep coming back for more."
    },
    {
      id: 4,
      name: 'Pumpkin Pi Squared',
      price: 3.14,
      rating: 5,
      category: 'desserts',
      details: 'A delightful pumpkin dessert, squared and spiced to perfection.'
    },
    {
      id: 5,
      name: 'Fibonacci String Bean Fries',
      price: 11.23,
      rating: 5,
      category: 'sides',
      details:
        'Crispy and lightly seasoned string bean fries, served in a pattern for a fun twist.'
    }
  ]
}
// add the following:
const inventory = [
  { name: 'Candle', qty: 4 },
  { name: 'Cheese', qty: 10 },
  { name: 'Phone', qty: 1 },
  { name: 'Tent', qty: 0 },
  { name: 'Torch', qty: 5 }
]

app.get('/', (req, res) => {
  res.render('home.ejs', {
    msg: 'Here is your inventory',
    player: {
      name: 'friend'
    },
    // change the following line to:
    inventory: inventory
  })
})

app.get('/', (req, res) => {
  res.render('home.ejs', {
    msg: 'Here is your inventory',
    player: {
      name: 'friend'
    },
    inventory: [
      { name: 'Candle', qty: 4 },
      { name: 'Cheese', qty: 10 },
      { name: 'Phone', qty: 1 },
      { name: 'Tent', qty: 0 },
      { name: 'Torch', qty: 5 }
    ]
  })
})

app.get('/', (req, res) => {
  res.render('home.ejs', { msg: 'Welcome to the home page', inventory })
})

app.get('/:itemId', (req, res) => {
  const index = req.params.itemId
  res.render('show.ejs', { item: inventory[index] })
})
app.listen(3000, () => {
  console.log('EJS App is Listening on port 3000')
})
