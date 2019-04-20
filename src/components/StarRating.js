import React, { Component } from "react";
import Star from './Star';

class StarRating extends Component {

  // Each instance of starRating component will manage it's own state
	state = {
		rating: 0
	};

	// Function to return 5 Star components
	// Needed to create this here because for loops are 
	// not allowed within the render() method
	renderStars = () => {
		let stars = [];
		let maxRating = 5;
		for(let i = 0; i < maxRating; i++) {
			stars.push(
				<Star 
					key={i}
					index={i}
					// true if rating state is greater than i
					isSelected={ this.state.rating > i }
					// Call handleSetRating function when li is clicked
					// passing in i+1 as the rating
					setRating={ () => this.handleSetRating(i + 1) }
				/>
			);
		}
		return stars;
	}

// Update rating state.
// Function is passed to each Star component via props
handleSetRating = (rating) => {
	// if rating entered is already the rating, reset rating
	if(this.state.rating === rating) {
		this.setState({ rating: 0 });
	}
	else {
		// Set rating state to the star rating selected by user
		this.setState({ rating });
	}
}

  render() {
    return (
      <ul className="course--stars">
				{/* Render 5 star component */}
				{ this.renderStars() }
      </ul>
    );
  }
}

export default StarRating;