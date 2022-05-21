import Item from "../Item/Item"


function ItemList ({products}) {
    return (
        products.map(products => (
            <Item

            key = {products.id}
            name ={ products.name}
            img = {products.img}
            price = {products.price}
            stock = {products.stock}
            desc = {products.desc}
            />
        )
    ))
}

export default ItemList