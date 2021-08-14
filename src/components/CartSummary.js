import React, { Component } from 'react'
import { connect } from 'react-redux';

 class CartSummary extends Component {
   constructor(){
     super();
     this.state = {
       totalPrice:0,
       totalItems:0,
     }
     this.mapData = this.mapData.bind(this);
     this.renderData = this.renderData.bind(this);
   }

   componentDidMount(){
     this.mapData()
   }
   componentDidUpdate(prevProp,prevState){
     if (prevProp.products !== this.props.products){
       this.mapData()
     }
   }
  
   mapData(){
    const { products } = this.props;
    let count = 0;
    let items=0
    products.forEach((item)=>{
      items+=item.amount
      count+=item.value * item.amount
    })
    this.setState({totalPrice:count.toFixed(2),totalItems:items})
    console.log(products)
  }

  renderData(){
    const { totalItems,totalPrice } = this.state;
    return (
      <div>
        <h1>Meu Carrinho</h1>
        <div>
         Total de Items: {totalItems}
        </div>
        <div>
          Preço: R${totalPrice}
        </div>
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.renderData()}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  products: state.cart.cart,
});


export default connect(mapStateToProps)(CartSummary)