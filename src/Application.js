import React, { Component } from 'react';

import Counter from './Counter';
// import CounterContainer from './CounterContainer';
import withCount from './withCount';

const WrappedCounter = withCount(Counter);

export default class Application extends Component {
  render() {
    return (
      <main className="Application">
        <WrappedCounter />
      </main>
    );
  }
}
