import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchInput } from '../actions';


 class ProductSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleInput({ target }) {
    const { value } = target;
    const { search } =this.props
    this.setState({ input: value });
    const { input } = this.state
    console.log(input)
  }

handleSubmit(event){
  console.log(event)
  event.preventDefault()
  const { search } = this.props;
  console.log(this)

  const { input } = this.state;
  search(input)
}

  render() {
    const { input } =this.state
    return (
      <div>
        <form>
          <input type="text"
          onChange={this.handleInput}
          value={input}/>
         <button
          type="submit"
          onClick={ this.handleSubmit }
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
});

export default connect(null,mapDispatchToProps)(ProductSearch)