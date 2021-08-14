import React, { Component } from 'react';
import { connect } from 'react-redux';
import IncreaseBtn from './IncreaseBtn';
import { Link } from 'react-router-dom';
import { addToCart, loadCurrentItem } from '../actions';
import ProductCard from './ProductCard';

class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      cart: [],
    };
  }

  render() {
    const { produc, sendToCart, loadCurrentItem } = this.props;

    return (
      <div className="flex flex-row flex-wrap">
        {produc.map((item, index) => (
          <div key={index}>
                <ProductCard
                  clickable={true}
                  index={item.index}
                  product={item.product}
                  value={item.value}
                  thumb={item.thumb}
                  perma={item.perma}
                  available={item.available}
                  productId={item.productId}
                  sellerId={item.sellerId}
                  address={item.address}
                />
              
            <IncreaseBtn
              product={item.product}
              value={item.value}
              thumb={item.thumb}
              perma={item.perma}
              available={item.available}
              productId={item.productId}
              amount={item.amount}
              onClick={() => sendToCart(item.productId)}
            />
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  produc: state.cart.products,
});

const mapDispatchToProps = (dispatch) => ({
  sendToCart: (state) => dispatch(addToCart(state)),
  loadCurrentItem: (state) => dispatch(loadCurrentItem(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
//onClick={()=>handleBtn({product,thumb,value,perma,available})}
