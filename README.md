# React application - Full Stack JavaScript Techdegree

### Star Rating application
This project was a way for me to practice initializing and managing state in React by building a star rating component.

***
<!-- <img src="https://res.cloudinary.com/dtqevfsxh/image/upload/v1554485395/portfolio/expressDoubler.png" width="700px"> -->

## View project
:mag: Live version available at [nickhericks.github.io/reactStarRating/](https://nickhericks.github.io/reactStarRating/)

<!-- ## Project objective -->
<!-- To complete this project I created JavaScript classes (Game, Board, Space, Player, Token) to organize the code. Each class, with its constructor function, methods, getters and setters is in its own .js file, and the app.js file handles the interaction with DOM elements. -->
<!-- 
## Techniques and concepts
- Express web framework -->

## Code example
```javascript
module.exports = (config) => {
	return (req, res, next) => {
		if (req.body.number === undefined) {
			return next();
		}
		const num = parseFloat(req.body.number);
		if (isNaN(num)) {
			const err = new Error('submitted value is not a number');
			return next(err);
		}
		const result = num * config.by;
		req.multiplied = result;
		next();
	}
}
```

## Acknowledgements
This project was built as part of the [Full Stack JavaScript Techdegree](https://join.teamtreehouse.com/techdegree/) offered by [Treehouse](https://teamtreehouse.com) :raised_hands:
