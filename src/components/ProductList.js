import React,{ Component } from 'react'
import { connect } from 'react-redux';

class ProductList extends Component {
  render(){
    const { produc } = this.props
    return(
      <div className='flex flex-row flex-wrap'>
      {produc.map(({product,value,thumb,perma},index)=>(
        <div className="flex flex-col flex-wrap w-44 ml-16 my-9" key={index}>
          <div>{product}</div>
          <img src={thumb}/>
          <div>R${value}</div>
          <a href={perma}>
            link pro ml
            </a>
        </div>
      ))}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  produc: state.cart.products
})
export default connect(mapStateToProps)(ProductList);
