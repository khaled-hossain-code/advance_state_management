import React, {
  Component
} from 'react';

export default function withCountHOC(WrappedComponent) {

  return class extends Component {
    static displayName = `withCountHOC(${(WrappedComponent.displayName || WrappedComponent.name)})`
    state = {
      count: 0
    }

    handleIncrement = () => {
      this.setState({
        count: this.state.count + 1
      })
    }

    handleDecrement = () => {
      this.setState({
        count: this.state.count - 1
      })
    }

    handleReset = () => {
      this.setState({
        count: 0
      })
    }

    render() {
      return < WrappedComponent 
      { ...this.props }
      count = { this.state.count }
      onIncrement = { this.handleIncrement }
      onDecrement = { this.handleDecrement }
      onReset = { this.handleReset }
      />
    }
  }
}