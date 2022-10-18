import React from "react";
import CartItem from "./cartItems"

const Cart = (props) =>{
  
        const {products} = props;
        return(
            <div className="cart-container">
           {products.map( (product) => {
           return  <CartItem 
           product={product} 
           key={product.id}
           onIncreaseQuantity={props.onIncreaseQuantity}
           onDecreaseQuantity={props.onDecreaseQuantity}
           onDelete={props.onDelete}
           />
           })}
            </div>
        )
    }


export default Cart

