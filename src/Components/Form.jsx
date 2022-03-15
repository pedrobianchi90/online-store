import React from 'react';
import Reviews from './Reviews';
// import { mudarBD, getBD } from '../services/reviews';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      review: '',
      email: '',
      rating: '',
      reviewList: [],
    };
  }

  componentDidMount() {
    // const list = await getBD();
    const list = localStorage.getItem('list');
    this.setState((prevState) => ({
      reviewList: [...prevState.reviewList, list],
    }));
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  addItemList = async () => {
    const { reviewList } = this.state;
    console.log(reviewList);
    const { review, email, rating } = this.state;
    const obj = {
      review,
      email,
      rating,
    };
    // await mudarBD(obj);
    await this.setState((prevState) => ({
      reviewList: [...prevState.reviewList, obj],
    }));
    localStorage.setItem('list', reviewList);
  }

  // useEffect(() => {
  //   window.localStorage.setItem('item',item);
  // }[item])

  render() {
    const { reviewList } = this.state;
    return (
      <div>
        <form>
          <p>Avaliação</p>
          <label htmlFor="email">
            Email
            <input
              type="email"
              name="email"
              data-testid="product-detail-email"
              onChange={ this.handleChange }
            />
          </label>
          <div>
            <select name="rating" id="select" onChange={ this.handleChange }>
              <option
                value="1"
                data-testid="1-rating"
              >
                1
              </option>
              <option
                value="2"
                name="rating"
                data-testid="2-rating"
              >
                2
              </option>
              <option
                value="3"
                name="rating"
                data-testid="3-rating"
              >
                3
              </option>
              <option
                value="4"
                name="rating"
                data-testid="4-rating"
              >
                4
              </option>
              <option
                value="5"
                name="rating"
                data-testid="5-rating"
              >
                5
              </option>
            </select>
          </div>
          <label htmlFor="opnion">
            Deixe sua opinião:
            <textarea
              name="review"
              data-testid="product-detail-evaluation"
              onChange={ this.handleChange }
            />
          </label>
          <button
            data-testid="submit-review-btn"
            type="button"
            onClick={ this.addItemList }
          >
            Enviar
          </button>
        </form>
        {reviewList.length === 0 ? false : (
          reviewList.map((opinion, index) => (
            <Reviews
              key={ index }
              review={ opinion.review }
              email={ opinion.email }
              rating={ opinion.rating }
            />))
        )}
      </div>
    );
  }
}

export default Form;
