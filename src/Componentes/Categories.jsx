import React from 'react';
import PropTypes from 'prop-types';
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
    const list = await getCategories();
    this.setState({
      categoriesList: list,
    });
  }

  render() {
    const { categoriesList } = this.state;
    const { handleRadio } = this.props;

    return (
      <div>
        {categoriesList.map((categorie) => (
          <label data-testid="category" key={ categorie.id } htmlFor={ categorie.id }>
            <button
              type="button"
              id={ categorie.id }
              onClick={ handleRadio }
            >
              {categorie.name}
            </button>
          </label>
        ))}
      </div>
    );
  }
}

Categories.propTypes = {
  handleRadio: PropTypes.func.isRequired,
};

export default Categories;
