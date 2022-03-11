import React from 'react';
import { getCategories } from '../services/api';

class Categories extends React.Component {
  constructor() {
    super();

    this.state = {
      categoriesList: [],
    };
    this.cat = this.cat.bind(this);
  }

  componentDidMount() {
    this.cat();
  }

  async cat() {
    this.setState({
      categoriesList: await getCategories(),
    });
  }

  render() {
    const { categoriesList } = this.state;
    const { categories } = this.props;
  
    return (
      <div>
        {categories.map((index) => (
          <label data-testid="category" key={ index.id } htmlFor={ index.id }>
            <button
              type="button"
              id={ index.id }
              onClick={  }
            >
              {index.name}
            </button>
          </label>
        ))}
      </div>
    );
  }
}

export default Categories;
