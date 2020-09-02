import React from 'react';
import './SearchPage.css'
import { useStateValue } from '../StateProvider';
import useGoogleSearch from '../useGoogleSearch';
import Response from "../response";
import { Link } from 'react-router-dom';
import Search from '../components/Search';

function SearchPage() {
	const [{ term }, dispatch] = useStateValue();
	//term comes from data layer: LIVE API CALL
	//const { data } = useGoogleSearch(term); 
	const data  = Response;

	//https://developers.google.com/custom-search/v1/using_rest <-- get api key from here

	//https://cse.google.com/cse/create/new
	console.log(data);
	return (
		<div className='search-page'>
			<div className='search-page-header'>
				<Link to="/">
					<img className="search-page-logo" 
					src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
					alt=""/>
				</Link>
				<div className="search-page-header-body">
					<Search hideButtons/>
				</div>
			</div>
			<div className="search-page-results">

			</div>
		</div>
	);
}

export default SearchPage;