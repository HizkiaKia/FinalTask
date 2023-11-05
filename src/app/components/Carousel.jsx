import React, { Component } from 'react'; 
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel'; 

export default class NextJsCarousel extends Component { 
	render() { 
		return ( 
			<div> 
			<h2></h2> 
			<Carousel> 
				<div> 
					<img src="/jumbotron.png" alt="image1"/> 
					<p className="legend">K14 Films</p> 

				</div> 
				<div> 
					<img src="/watch.png" alt="image2" /> 
					<p className="legend">Lets Watch</p> 

				</div> 
				<div> 
					<img src="/movie.png" alt="image3"/> 
					<p className="legend">The Movie</p> 

				</div> 
			</Carousel> 
			</div> 
		); 
	} 
};
