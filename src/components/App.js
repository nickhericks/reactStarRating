import React, { Component } from 'react';
import Course from './Course';

class App extends Component {



	render() {
		return (
			<div className="container">
				{this.props.courses.map( course => 
					<Course
						{...course}
						key={course.id}
					/>      
				)}
			</div>
		);
	}
}

export default App;
