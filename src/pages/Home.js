import React, { Component } from 'react';
import { sendProducts } from '../actions';
import { connect } from 'react-redux';
import ProductList from '../components/ProductList';
import Header from '../components/Header';
import { getCategories, getCategorie } from '../services/api';
import Footer  from '../components/Footer';

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
    const { prod } = this.props;
    const product = 'product';
    const value = 'value';
    const thumb = 'thumb';
    const perma = 'perma';
    const available = 'available';
    const productId = 'productId';
    const sellerId = 'sellerId'
    const cu = await getCategorie(id);
    console.log(cu)

    const formatData = cu.results.map(
      ({ title, price, permalink, thumbnail, available_quantity, id,seller,address }) => {
        return {
          [product]: title,
          [value]: price,
          [thumb]: thumbnail,
          [perma]: permalink,
          [available]: available_quantity,
          [productId]: id,
          [sellerId]: seller,
          address,        };
      }
    );
    prod(formatData);
    this.setState({ products: formatData });
  }
  render() {
    const { categories, cartCount } = this.state;
    return (
      <div className='flex flex-col min-h-screen justify-between'>
        <Header />
        <div className='flex flex-row'>
        <ul className="flex flex-col ">
          {categories.map(({ id, name }) => (
            <li key={id}>
              <button type="button" onClick={() => this.fetchCategory(id)}>
                {name}
              </button>
            </li>
          ))}
        </ul>
        <div className="flex flex-col ">
          <ProductList />
        </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  prod: (state) => dispatch(sendProducts(state)),
});

const mapStateToProps = (state) => ({
  produc: state.cart.products,
  input: state.cart.input,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
