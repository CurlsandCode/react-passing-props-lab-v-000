import React, { Component } from 'react';

import FruitBasket from './FruitBasket';

class App extends Component {
  constructor() {
    super();

    this.state = {
      filters: [],
      currentFilter: null,
      fruit: []
    };
  }
  componentWillMount() {
    this.fetchFilters();
    this.fetchFruit();
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  fetchFruit = () => {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(items => this.setState({ items }));
  }

  updateFilter = event => {
    console.log('update filter to: ', event.target.value);
    this.setState({ currentFilter: event.target.value });
  }

  render() {
    return (
      <FruitBasket
        fruit={this.state.items}
        filters={this.state.filters}
        currentFilter={this.state.currentFilter}
          onUpdateFilter={this.state.updateFilter} />
    );
  }
}

export default App;
