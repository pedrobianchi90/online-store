import React from 'react';
import { getCategories } from '../services/api';

class Categories extends React.Component {
  constructor() {
    super();

    this.state = {
      categories: [],
    };
    this.cat = this.cat.bind(this);
  }

  componentDidMount() {
    this.cat();
  }

  async cat() {
    this.setState({
      categories: await getCategories(),
    });
  }

  render() {
    const { categories } = this.state;

    return (
      <div>
        {categories.map((index) => (
          <label data-testid="category" key={ index.id } htmlFor={ index.id }>
            <button type="button" id={ index.id }>
              {index.name}
            </button>
          </label>
        ))}
      </div>
    );
  }
}

export default Categories;
