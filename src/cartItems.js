import React from "react";

const CartItem = (props) => {
  
        const {price, title, qty} = props.product;
        const {product, onDecreaseQuantity, onIncreaseQuantity,onDelete} = props
     
        return( 
        <div className="cart-item">
            <div style={style.image} className="left-block">
                <img src={product.img} alt="product" />
            </div>
            <div className="right-block">
            <div style={ { fontSize: 25 } }>{title} </div>
            <div  style={{color:"#777"}}>Rs {price} </div>
            <div  style={{color:"#777"}}>Qty: {qty} </div>
            <div className="cart-item-actions">
            <img onClick={ () => onDecreaseQuantity(product)} alt="Minus" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/992/992683.png" />
            <img onClick={() => onIncreaseQuantity(product)} alt="Plus" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/3303/3303893.png" />
            <img onClick={() => onDelete(product.id)} alt="Delete" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/3096/3096673.png" />
            </div>
            </div >
        </div>)
}

const style = {
    image:{
        height:115,
        width:115,
        borderRadius: 10,
        backgroundColor:'#ccc'
    }
}

export default CartItem