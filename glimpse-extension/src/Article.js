import React from 'react';
import logo from './logo.svg';
import './Article.css';
import cnnImage from './assets/cnn.png';
import { postRequestFunc } from './PostRequest';
import foxImage from './assets/fox.png';
import reutersImage from './assets/reutersTest.png';
import msnbcImage from './assets/msnbc.png';
import dailyImage from './assets/daily.png';
import { Button, Card, CardGroup } from 'react-bootstrap';


class Article extends React.Component{

	constructor(props) {
		super(props);
		console.log('article constructor!');
		console.trace();
  		this.state = {
  			has_fetched_data: false,
  			fetching_data: false,
  			similar_articles: []
  		};
	 	this.fetchArticleData();
	}

	fetchArticleData() {
	   const { has_fetched_data, fetching_data } = this.state;

	   if (!fetching_data) {
	   	this.setState({ fetching_data: true });
	   	 postRequestFunc((serverResult) => {
	   		console.log('in article callback where serverResult = ', serverResult);	
	   		if (serverResult) {
	   			this.setState({ has_fetched_data: true });
	   			this.setState({ similar_articles: serverResult });	
	   		}
	     });
	   } 

	  
	}


	render() {
		const { has_fetched_data, similar_articles } = this.state;
		const { title1, title2, title3 } = this.props;
		const { link1 } = this.props;
		const { link2 } = this.props;
		const { link3 } = this.props;

		console.log('has_fetched_data =', has_fetched_data);
		if (!has_fetched_data) {
			console.log('early return!');
			return (
				<div>
					LOADING
				</div>
			);
		};

		console.log('im inside article.js and state.similar_articles = ', similar_articles);

		const linkStyle = {
	      color: "darkgray",
	      fontSize: 10,
	    };

	    const imgStyle = {
	    	height: "40px",
	    	width: "auto",
	    	align: "center"

	    }

	    const titleStyle = {
	    	color: "black",
	    	fontSize: 20
	    }

	    const textStyle = {
	    	fontSize: 10,
	    	color: "black"
	    }

	    let linkOne = link1;
	    if (similar_articles && similar_articles.length > 0) {
	       linkOne = similar_articles[0].other_article;
	    }
	    let linkTwo = link2;
	    if (similar_articles && similar_articles.length > 1) {
	    	console.log("hit", linkTwo);
	       linkTwo = similar_articles[4].other_article;
	       console.log("hit", linkTwo);
	    }
	    let linkThree = link3;
	    if (similar_articles && similar_articles.length > 2) {
	       linkThree= similar_articles[3].other_article;
	    }


	    let titleOne = title1;
	    if (similar_articles && similar_articles.length > 0) {
	       titleOne = similar_articles[0].title;
	       titleOne = "Trump says he 'strongly' disagreed with move to reopen Georgia -- contradicting source..."
	    }
	    let titleTwo = title2;
	    if (similar_articles && similar_articles.length > 1) {
	       titleTwo = similar_articles[4].title;
	    }
	    let titleThree = title3;
	    if (similar_articles && similar_articles.length > 2) {
	       titleThree= similar_articles[3].title;
	    }         

	    const image1 =  linkOne.includes("foxnews.com") ? foxImage :
	    				linkOne.includes("msnbc.com") ? msnbcImage :
	    				linkOne.includes("reuters.com") ? reutersImage :
	    				linkOne.includes("dailymail.co") ? dailyImage :
	    				cnnImage   
	    const image2 =  linkTwo.includes("foxnews.com") ? foxImage :
	    				linkTwo.includes("msnbc.com") ? msnbcImage :
	    				linkTwo.includes("reuters.com") ? reutersImage :
	    				linkTwo.includes("dailymail.co") ? dailyImage :
	    				cnnImage    
	    const image3 =  linkThree.includes("foxnews.com") ? foxImage :
	    				linkThree.includes("msnbc.com") ? msnbcImage :
	    				linkThree.includes("reuters.com") ? reutersImage :
	    				linkThree.includes("dailymail.co") ? dailyImage :
	    				cnnImage    	

	    const source1 = linkOne.includes("foxnews.com") ? "Fox News" :
	    				linkOne.includes("msnbc.com") ? "MSNBC" :
	    				linkOne.includes("reuters.com") ? "Reuters" :
	    				linkOne.includes("dailymail.co") ? "Daily Mail" :
	    				"CNN"  
	    const source2 =  linkTwo.includes("foxnews.com") ? "Fox News" :
	    				linkTwo.includes("msnbc.com") ? "MSNBC" :
	    				linkTwo.includes("reuters.com") ? "Reuters" :
	    				linkTwo.includes("dailymail.co") ? "Daily Mail" :
	    				"CNN"   
	    const source3 = linkThree.includes("foxnews.com") ? "Fox News" :
	    				linkThree.includes("msnbc.com") ? "MSNBC" :
	    				linkThree.includes("reuters.com") ? "Reuters" :
	    				linkThree.includes("dailymail.co") ? "Daily Mail" :
	    				"CNN"  					   				


	  return (
	    <div >
			<CardGroup>
			  <Card className="articleCard" >
			    <Card.Body>
			      <Card.Title style={titleStyle}>{titleOne}</Card.Title>
			      <Card.Subtitle className="mb-2 text-muted">{source1}</Card.Subtitle>
			      <Card.Text style={textStyle}>
			        {text1}
			      </Card.Text>
			      <Card.Link href={linkOne} style={linkStyle}>View Full Article</Card.Link>
			      <br/>
			      <Card.Img variant="bottom" style={imgStyle} src={image1} />
			      
			    </Card.Body>
			  </Card>
			  <Card className="articleCard">
			    <Card.Body>
			      <Card.Title style={titleStyle}>{titleTwo}</Card.Title>
			      <Card.Subtitle className="mb-2 text-muted">{source2}</Card.Subtitle>
			      <Card.Text style={textStyle}>
			        {text2}
			      </Card.Text>
			       <Card.Link href={linkTwo} style={linkStyle}>View Full Article</Card.Link>
			       <br/>
			      <Card.Img variant="bottom" style={imgStyle} src={image2} /> 
			    </Card.Body>
			  </Card>
			  <Card className="articleCard">
			    <Card.Body>
			      <Card.Title style={titleStyle}>{titleThree}</Card.Title>
			      <Card.Subtitle className="mb-2 text-muted">{source3}</Card.Subtitle>
			      <Card.Text style={textStyle}>
			        {text3}
			      </Card.Text>
			       <Card.Link href={linkThree} style={linkStyle}>View Full Article</Card.Link>
			       <br/>
			      <Card.Img variant="bottom" style={imgStyle} src={image3} />
			    </Card.Body>
			  </Card>
			</CardGroup>
	    </div>
	  );
	}
}

export default Article;
