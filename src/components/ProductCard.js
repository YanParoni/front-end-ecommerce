import React, { Component } from 'react';
import IncreaseBtn from './IncreaseBtn';
import { Link } from 'react-router-dom';
import { addToCart, loadCurrentItem } from '../actions';
import { connect } from 'react-redux';

class ProductCard extends Component {
  constructor() {
    super();
    this.state = {
      cart: [],
    };
  }

  render() {
    const {
      index,
      product,
      thumb,
      value,
      perma,
      available,
      productId,
      clickable,
      amount,
      sellerId,
      address
    } = this.props;
    
    const item = {index,
      product,
      thumb,
      value,
      perma,
      available,
      productId,
      clickable,
      amount,
      sellerId,
      address,
    }
    return (
      <div>
        {clickable ? (
          <div>
            <Link to={`/product/${productId}`}>
              <button
                onClick={() => this.props.loadCurrentItem(item)}
              >
                <div
                  className="flex flex-col flex-wrap w-44 ml-16 my-9"
                  key={index}
                >
                  <img src={thumb} />

                  <div>{product}</div>
                  <div>R${value}</div>
                </div>
              </button>
            </Link>

            <a href={perma} target="blank">
              <img className="w-9 h-9 " src="/imgs/mercado.png" />
            </a>

            <div>{amount}</div>
          </div>
        ) : (
          <img src={thumb} alt="moviethumb" />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  produc: state.cart.products,
});

const mapDispatchToProps = (dispatch) => ({
  sendToCart: (state) => dispatch(addToCart(state)),
  loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
