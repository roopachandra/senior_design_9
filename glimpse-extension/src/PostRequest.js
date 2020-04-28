import React from 'react';
import axios from 'axios';
/*global chrome*/


export const postRequestFunc = (callback) => {

	chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
	    let url = tabs[0].url;
	    axios.post('http://localhost:3001/get_similar_articles?article=${url}')
		.then(res => {
		console.log("response: ")
	    console.log(res);
	    console.log(res.score);
	    console.log(res.other_article);

	    if (res.data) {
	    	console.log('returning res.data = ', res.data);
	    	callback(res.data);
	    }
	  })
		
	})
	

}

