// import statements to use uuid and import from types file
import { v4 as uuidv4 } from 'uuid'
import {Item, User} from './types'

// user should contain name and age, also create random id (uuid)
// function needs to return User object
// call uuid method to generate random id num for item
// create an empty cart as an array for the new user
export function createUser(name: string, age: number): User {
    return {
        id: uuidv4(),
        name,
        age,
        cart: [],
    }
}

// each new item should contain the name, desc, and quanitity
// function needs to return Item object
// call uuid method to generate random id num for item
export function createItem(name: string, price: number, description: string, quantity: number): Item {
    return {
        id: uuidv4(),
        name,
        price,
        description,
        quantity,
    }
}

// function must take in Item and User types
// should return an item added to the empty cart array (use .push())
export function addToCart(item: Item, user: User): void {
    user.cart.push(item)
}

// function must take in Item and User types
// remove insances of an specific item id and return new list with everything but that id (use .filter())
export function removeFromCart(item: Item, user: User): void {
    user.cart = user.cart.filter(anItem => anItem.id !== item.id)
}

// 
export function removeQuantityFromCart(item: Item, user: User, quantity: number): void {
    const itemIndex = user.cart.findIndex(anItem => anItem.id === item.id)
    if (itemIndex !== -1) {
        if (user.cart[itemIndex].quantity <= quantity) {
            user.cart.splice(itemIndex, 1)
    } else {
        user.cart[itemIndex].quantity -= quantity
    }
}
}

// function takes in User type
// .reduce() method adds the total of item price and item quantity from inside the cart array
export function cartTotal(user: User): number {
    return user.cart.reduce((total, item) => total + item.price * item.quantity, 0)
}

// function to print out what is in the cart and how much the total is
// take in User type
// return the item name and price and call the cartTotal function
export function printCart(user: User): void {
    user.cart.forEach(item =>{
        console.log(`Item ${item.name}, Price: ${item.price}`)
    })
    console.log(`Cart Total ${cartTotal(user)}`)
}

