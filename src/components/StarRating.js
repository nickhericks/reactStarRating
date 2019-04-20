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
					updateStars={this.handleSetRating}
				/>
			);
		}
		return stars;
	}

  // Write an event handler that updates the rating state.
  // Pass the function to a Star component via props
handleSetRating = (rating) => {
	this.setState({ rating });
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