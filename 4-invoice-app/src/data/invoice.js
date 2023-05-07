export const invoice = {
    id: 10,
    name: 'Componentes PC',
    client: {
        name: 'Pepe',
        lastName: 'John',
        address: {
            country: 'USA',
            city: 'Los Angeles',
            street: 'One Street',
            number: 12
        },
    },
    company: {
        name: 'New Egg',
        fiscalNumber: 1234567,
    },
    items: [
        {
            id: 1,
            product: 'CPU Intel i7',
            price: 499,
            quantity: 2
        },
        {
            id: 2,
            product: 'Corsair Keyboard Mecanico',
            price: 150,
            quantity: 1
        },
        {
            id: 3,
            product: 'onitor Asus',
            price: 250,
            quantity: 1
        }
    ]
}