import React, {
  Component
} from 'react';
import Counter from './Counter';

export default class CounterContainer extends Component {
  state = {
    count: 0
  }

  onIncrement = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  onDecrement = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  onReset = () => {
    this.setState({
      count: 0
    })
  }
  
  render() {
    const {
      count
    } = this.state;

    return ( <
      Counter count = {
        count
      }
      onIncrement = {
        this.onIncrement
      }
      onDecrement = {
        this.onDecrement
      }
      onReset = {
        this.onReset
      }
      />
    );
  }
}