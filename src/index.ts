import { createUser, createItem, addToCart, removeFromCart, removeQuantityFromCart, cartTotal, printCart } from './cart-functions'

// create instance of User called user
const david = createUser('David', 25)

console.log(david)



const bananas = createItem('Bananas', 1.50, 'fruit', 5)
const milk = createItem('Milk', 4, 'dairy', 2)
const ribeye = createItem('Ribeye', 12, 'meat', 6)

addToCart (bananas, david)
printCart(david)

addToCart(milk, david)
addToCart(milk, david)
addToCart(milk, david)
printCart(david)

addToCart(ribeye, david)
addToCart(ribeye, david)
addToCart(ribeye, david)
printCart(david)

removeFromCart(milk, david)
printCart(david)

removeQuantityFromCart(ribeye, david, 2)
printCart(david)

cartTotal(david)