const productStock = [

    {
        id: 1,
        name: "Cheesecake",
        price: 3500,
        img: "../images/cheesecake.jpg",
        desc: "Base de galletitas húmedas, riquísima y esponjosa crema de queso, coronada con frutillas y salsa de frutos rojos.",
        stock: 10,
        category: "tortas"
    },
    {
        id: 2,
        name: "Lemonpie",
        price: 2200,
        img: "../images/lemonpie.jpg",
        desc: "Masa suave, sablée con crema de limón, y merengue para el toque final.",
        stock: 4,
        category: "tortas"
    },
    {
        id: 3,
        name: "Torta brownie",
        price: 2200,
        img: "../images/brownie.jpg",
        desc: "Una bomba. Base de brownie con nueces, dulce de leche, y merengue.",
        stock: 9,
        category: "tortas"
    },
    {
        id: 4,
        name: "Carrotcake",
        price: 3000,
        img: "../images/carrotcake.jpg",
        desc: "Una torta húmeda y fresca a base de zanahorias saborizadas con canela y jengibre, rellena de una crema de queso y naranja.",
        stock: 6,
        category: "tortas"
    },
    {
        id: 5,
        name: "Torta manzana",
        price: 2200,
        img: "../images/manzana.jpg",
        desc: "Clasico bizcochuelo de vainilla con trozos de manzana que le dan una humedad y sabor especial.",
        stock: 8,
        category: "tortas"
    },
    {
        id: 6,
        name: "Red velvet",
        price: 2500,
        img: "../images/redvelvet.jpg",
        desc: "Este clásico bizcochuelo escarlata sorprende por su color y sabores. Rellena de crema de leche y queso.",
        stock: 5,
        category: "tortas"
    },   
    {
        id: 7,
        name: "Marquise",
        price: 2200,
        img: "../images/marquise.jpg",
        desc: "Base de chocolate liviana, sin harina con dulce de leche, crema y cubierta con chocolate amargo rallado.",
        stock: 4,
        category: "tortas"
    },
    {
        id: 8,
        name: "Rogel",
        price: 3500,
        img: "../images/rogel.jpg",
        desc: "Contiene sucesivas galletas neutras alternando con abundante dulce de leche, cubierto por una capa de merengue.",
        stock: 6,
        category: "tortas"
    }, 
    {
        id: 9,
        name: "Torta oreo",
        price: 2800,
        img: "../images/oreo.jpg",
        desc: "Bizcochuelo de chocolate con relleno de crema de oreos, cubierto por ganache de chocolate y trozos de galletita oreo.",
        stock: 8,
        category: "tortas"
    }           
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve (productStock)
        }, 2000)
    })
}