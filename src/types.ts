// create types for User and Item taking in specified properties
// use export to make sure they are accessible throughout project

export type Item = {
    id: string
    name: string
    price: number
    description: string
    quantity: number
}

// cart should be an empty array 
export type User = {
    id: string
    name: string
    age: number
    cart: Item[]
}