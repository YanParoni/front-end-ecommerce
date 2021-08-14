import React, { Component } from 'react';
import { connect } from 'react-redux';
import { adjustItemQty, removeFromCart } from '../actions';
import CartSummary from '../components/CartSummary';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';
import Footer  from '../components/Footer';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      input: this.props.cartItems.amount,
    };
    this.fetchRedux = this.fetchRedux.bind(this);
    this.mapData = this.mapData.bind(this);
  }

  componentDidMount() {
    this.fetchRedux();
  }

  fetchRedux() {
    this.setState({ cart: this.props.cartItems });
  }

  mapData() {
    const { removeFromCart, adjustItemQty } = this.props;
    return (
      <div className="flex flex-col min-h-screen justify-between">
        <Header/>
        <div className='flex flex-row'>
        {this.props.cartItems.map(
          ({ product, value, thumb, perma, available, amount, productId,sellerId,address }) => (
            <div>
              <ProductCard
                product={product}
                clickable={true}
                value={value}
                thumb={thumb}
                perma={perma}
                available={available}
                productId={productId}
                sellerId={sellerId}
                address={address}
              />
              <button onClick={() => removeFromCart(productId)}>
                deletarrrr
              </button>
              <input
                min="1"
                type="number"
                value={amount}
                onChange={(e) => {
                  this.setState({ input: e.target.value });
                  adjustItemQty(productId, e.target.value);
                }}
              ></input>{' '}
            </div>
          )
        )}
        <CartSummary />
        </div>
        <Footer />
      </div>
    );
  }

  render() {
    const { cart } = this.state;
    return <div>{cart ? this.mapData() : console.log('cuelhi')}</div>;
  }
}

const mapStateToProps = (state) => ({
  cartItems: state.cart.cart,
});
const mapDispatchToProps = (dispatch) => ({
  adjustItemQty: (id,value) => dispatch(adjustItemQty(id,value)),
  removeFromCart: (state) => dispatch(removeFromCart(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
