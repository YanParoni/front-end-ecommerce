import React, { Component } from 'react'
import { connect } from 'react-redux';
import ProductSearch from './ProductSearch';

export default class Header extends Component {
  render() {
    return (
      <header className='w-screen h-16'>
        <ProductSearch/>
        
      </header>
    )
  }
}
