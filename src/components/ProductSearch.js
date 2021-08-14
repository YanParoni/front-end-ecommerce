import React, { Component } from 'react';
import { sendProducts } from '../actions';
import { connect } from 'react-redux';
import { searchInput } from '../actions';
import { getProduct } from '../services/api';
import { Link } from 'react-router-dom';

class ProductSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      cartCount: 0,
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchProduct = this.fetchProduct.bind(this);
    this.counter = this.counter.bind(this);
  }

  async fetchProduct() {
    const product = 'product';
    const value = 'value';
    const thumb = 'thumb';
    const perma = 'perma';
    const { input } = this.state;
    const { prod } = this.props;
    const cu = await getProduct(input);
    console.log(cu);
    const formatData = cu.results.map(
      ({ title, price, permalink, thumbnail }) => {
        return {
          [product]: title,
          [value]: price,
          [thumb]: thumbnail,
          [perma]: permalink,
        };
      }
    );
    prod(formatData);
    console.log(cu);
  }

  handleInput({ target }) {
    const { value } = target;
    this.setState({ input: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { search } = this.props;
    const { input } = this.state;
    search(input);
    this.fetchProduct();
  }

  counter() {
    const { cart } = this.props;
    let count = 0;

    cart.forEach((item) => {
      count += item.amount;
    });

    return(
      <div>{count}</div>
    )
  }

  componentDidMount(){
    this.counter();

  }

  render() {
    const { input } = this.state;
    return (
      <div className="flex justify-center ...">
        <form>
          <button
            type="submit"
            onClick={this.handleSubmit}
            data-testid="query-button"
          >
            Buscar
          </button>
          <input type="text" onChange={this.handleInput} value={input} />
        </form>
        <Link to='/cart'>
        <img className="w-9 h-9 " src={"/imgs/cart.png"} />
        </Link>
        {this.counter()}

      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  search: (value) => dispatch(searchInput(value)),
  prod: (state) => dispatch(sendProducts(state)),
});

const mapStateToProps = (state) => ({
  cart: state.cart.cart
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductSearch);
