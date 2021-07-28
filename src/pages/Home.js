import React, { Component } from 'react';
import { sendProducts } from '../actions';
import { connect } from 'react-redux';
import ProductList from '../components/ProductList'
import ProductSearch from '../components/ProductSearch'
import {
  getCategories,
  getCategorie,
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
    const thumb = 'thumb';
    const perma = 'perma'
    const cu = await getCategorie(id);
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
    this.setState({ products: formatData });
  }

  render() {
    const { categories } = this.state;
    return (
      <div className="flex flex-row   ">
        <ul className='flex flex-col '>
          {categories.map(({ id, name }) => (
            <li key={id}>
              <button type="button" onClick={() => this.fetchCategory(id)}>
                {name}
              </button>
            </li>
          ))}
        </ul>

        <ProductList />
        <ProductSearch/>

      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  prod: (state) => dispatch(sendProducts(state)),
});
const mapStateToProps = (state) => ({
  produc: state.cart.products,
  input: state.cart.input
})
export default connect(mapStateToProps,mapDispatchToProps)(Home);
