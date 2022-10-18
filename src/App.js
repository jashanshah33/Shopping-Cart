import React from 'react';
import Cart from './cart'
import Navbar from "./Navbar"
import firebase from 'firebase/compat/app';



class App extends React.Component {

  constructor(){
    super();
    this.state ={
        products:[],
        loading:true
    }
    this.db =firebase.firestore()
} 

componentDidMount () {
  // firebase
  // .firestore()
  // .collection("products")
  // .get()
  // .then( (snapshot) =>{
  //   // console.log(snapshot);
  //   snapshot.docs.map( (doc) =>{
  //     console.log(doc.data());
  //   })
  //   const products =  snapshot.docs.map( (doc) =>{

  //     const data = doc.data();
  //     data['id']=doc.id
  //     return data
  //   })

  //   this.setState({
  //     products,
  //     loading: false

  //   })
  // })

  this.db
  .collection('products')
  .onSnapshot( (snapshot) => {
   const products = snapshot.docs.map( (doc) => {
      let data = doc.data();
      data['id']=doc.id
      return data
    })
    this.setState({
      products,
      loading: false
    })
  })
}

addProduct = () => {
this.db
.collection('products')
.add({
  qty:2,
  img:"https://tse2.mm.bing.net/th?id=OIP.4bZ7a51LDXK6HBH2b6fGdAHaHa&pid=Api&P=0",
  price:970,
  title:"Smart TV"
})
.then((docReff) => {
  console.log(docReff);
})
}
handleIncreaseQuantity = (product) =>{
    const {products} = this.state;

    const indexNumber = products.indexOf(product);

    const docRef = this.db.collection('products').doc(products[indexNumber].id);

    docRef
    .update({
      qty: products[indexNumber].qty +1
    })
}

handleDecreaseQuantity = (product) => {
    
    const{products}=this.state;
    const indexNumber = products.indexOf(product);

    const docRef = this.db.collection('products').doc(products[indexNumber].id);

    if (products[indexNumber].qty === 0) {
      return;
    }
    docRef
    .update({
      qty: products[indexNumber].qty -1
    })
}
handleDelete =(id) => {
    // const{products}=this.state;

   const docRef = this.db.collection('products').doc(id);

   docRef
   .delete()
}
getCount = () => {
  const{products}=this.state;

  let count = 0;

  products.forEach( (product) => {
    count += product.qty;
  })

  return count;
}

getTotalPrice =() => {
  const{products}=this.state;

  let Total = 0;

  products.forEach( (product) =>{
    Total = Total + product.qty * product.price
  })

  return Total;
}

render(){
  const {products, loading} = this.state;
  return (
    <div className="App">
      <Navbar count={this.getCount()} />
      {/* <button onClick={this.addProduct} style={{padding:10, fontSize:20, backgroundColor:"blue", color:"white", border:"none"}}>Add a Product</button> */}
     <Cart 
       products={products}
       onIncreaseQuantity={this.handleIncreaseQuantity}
       onDecreaseQuantity={this.handleDecreaseQuantity}
       onDelete={this.handleDelete}
     />
     {loading && <h1>Loading Products...</h1>}
     <div style={{fontSize:25, padding:10}}>Total: {this.getTotalPrice()}</div>
    </div>
  )
}
}

export default App;

