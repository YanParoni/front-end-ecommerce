import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../actions';


class DeleteBtn extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) =>({
  removeFromCart:(id)=> dispatch(removeFromCart(id))
})

export default connect(null,mapDispatchToProps)(DeleteBtn)