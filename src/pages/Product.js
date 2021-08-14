import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addToCart } from '../actions';
import Header from '../components/Header';
import Footer  from '../components/Footer';

 class Product extends Component {
  render() {
    const { item,sendToCart } = this.props;
    console.log(item.address)
    

    return (
      <div className="flex flex-col min-h-screen justify-between">
        <Header/>
        <div className='flex flex-1'>
      <div >{item.product}</div>

      <img src={item.thumb} />
      <div>{item.value}</div>
      <a href={item.perma} target="blank">
      <img className="w-9 h-9 " src="/imgs/mercado.png" />
      </a>
      <a href={item.sellerId.permalink} target="blank">
      <img className="w-9 h-9 " src="/imgs/mercado.png" />
      </a>
      </div>
      <Footer />
    </div>
    )
  }
}

const mapStateToProps = (state) => ({
  item: state.cart.currentItem,
});


const mapDispatchToProps = (dispatch) => ({
  sendToCart: (state) => dispatch(addToCart(state)),
});


export default connect(mapStateToProps,mapDispatchToProps)(Product)