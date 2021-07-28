import React, { Component } from 'react';
import { sendProducts } from '../actions';
import { connect } from 'react-redux';
import { searchInput } from '../actions';
import { getProduct } from '../services/api';

class ProductSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchProduct = this.fetchProduct.bind(this);
  }

  async fetchProduct() {
    const product = 'product';
    const value = 'value';
    const thumb = 'thumb';
    const perma = 'perma'
    const { input } = this.state
    const { prod } =this.props
    const cu = await getProduct(input);
    console.log(cu)
    const formatData = cu.results.map(({ title, price,permalink,thumbnail }) => {
      return {
        [product]: title,
        [value]: price,
        [thumb]: thumbnail,
        [perma]: permalink
      };
    });
    prod(formatData)
console.log(cu)  }

  handleInput({ target }) {
    const { value } = target;
    this.setState({ input: value });
    this.fetchProduct();
  }

  handleSubmit(event) {
    event.preventDefault();
    const { search } = this.props;
    const { input } = this.state;
    search(input);
  }

  render() {
    const { input } = this.state;
    return (
      <div>
        <form>
          <input type="text" onChange={this.handleInput} value={input} />
          <button
            type="submit"
            onClick={this.handleSubmit}
            data-testid="query-button"
          >
            Buscar
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  search: (value) => dispatch(searchInput(value)),
  prod: (state) => dispatch(sendProducts(state)),
});

export default connect(null, mapDispatchToProps)(ProductSearch);
