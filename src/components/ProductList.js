import react,{ Component } from 'react'
import { connect } from 'react-redux';


class ProductList extends Component {
  render(){
    const { produc } = this.props
    return(
      <>
      {produc.map(({product,value},index)=>(
        <p>{product}</p>
      ))}
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  produc: state.cart.products
})
export default connect(mapStateToProps)(ProductList);
