import Product from "./Product"
import products from "../data/seed"

export default function ProductList(props) {
    const productComponents = products.map((product, index) => {
        return (
            <Product
                key={index}
                product={product}
                Wishlist={props.Wishlist}
                setWishlist={props.setWishlist}
            />
        )
    })

    return <div className="ui unstackable items">{productComponents}</div>
}
