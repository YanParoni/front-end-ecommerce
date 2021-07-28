import React, { Component } from 'react';
import { sendProducts } from '../actions';
import { connect } from 'react-redux';
import ProductList from '../components/ProductList'
import {
  getCategories,
  getCategorie,
  getProductsFromCategoryAndQuery,
  getProduct,
} from '../services/api';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: '',
      selectedCategory: '',
      loading: true,
      categories: [],
      products: {},
    };
    this.fetchCategory = this.fetchCategory.bind(this);
    this.fetchCategories = this.fetchCategories.bind(this);
  }
  componentDidMount() {
    this.fetchCategories();
  }

  async fetchCategories() {
    const categories = await getCategories();
    this.setState({ categories });
  }

  async fetchCategory(id) {
    this.setState({ selectedCategory: id });
    const { prod } = this.props
    const product = 'product';
    const value = 'value';
    const cu = await getCategorie(id);
    const formatData = cu.results.map(({ title, price }) => {
      return {
        [product]: title,
        [value]: price,
      };
    });
    prod(formatData)
    this.setState({ products: formatData });
  }

  render() {
    const { categories } = this.state;
    return (
      <>
        <ul>
          {categories.map(({ id, name }) => (
            <li key={id}>
              <button type="button" onClick={() => this.fetchCategory(id)}>
                {name}
              </button>
            </li>
          ))}
        </ul>
        <ProductList/>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  prod: (state) => dispatch(sendProducts(state)),
});
const mapStateToProps = (state) => ({
  produc: state.cart.products
})
export default connect(mapStateToProps,mapDispatchToProps)(Home);
