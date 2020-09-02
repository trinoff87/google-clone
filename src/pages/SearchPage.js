import React from 'react';
import './SearchPage.css'
import { useStateValue } from '../StateProvider';
import useGoogleSearch from '../useGoogleSearch';
import Response from "../response";
import { Link } from 'react-router-dom';
import Search from '../components/Search';
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";


function SearchPage() {
	const [{ term }, dispatch] = useStateValue();
	//term comes from data layer: LIVE API CALL
	//const { data } = useGoogleSearch(term); 
	const data = Response;

	//https://developers.google.com/custom-search/v1/using_rest <-- get api key from here

	//https://cse.google.com/cse/create/new
	console.log(data);
	return (
		<div className='search-page'>
			<div className='search-page-header'>
				<Link to="/">
					<img className="search-page-logo"
						src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
						alt="" />
				</Link>
				<div className="search-page-header-body">
					<Search hideButtons />
					<div className="search-page-options">
						<div className="search-page-options-left">
							<div className="search-page-option">
								<SearchIcon />
								<Link to="/all">All</Link>
							</div>
							<div className="search-page-option">
								<DescriptionIcon />
								<Link to="/all">News</Link>
							</div>
							<div className="search-page-option">
								<ImageIcon />
								<Link to="/all">Images</Link>
							</div>
							<div className="search-page-option">
								<LocalOfferIcon />
								<Link to="/all">Shopping</Link>
							</div>
							<div className="search-page-option">
								<RoomIcon />
								<Link to="/all">maps</Link>
							</div>
							<div className="search-page-option">
								<MoreVertIcon />
								<Link to="/all">more</Link>
							</div>
						</div>
						<div className="search-page-options-right">
							<div className="search-page-option">
								<Link to="/settings">Settings</Link>
							</div>
							<div className="search-page-option">
								<Link to="/tools">Tools</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			{
				term && (
					<div className="search-page-results">
						<p className="search-page-result-count">
							About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {term}
						</p>
						{data?.items.map(item => (
							<div className='search-page-result'>
								<a href={item.link}>
								{item.displayLink}
								</a>
								<a className="search-page-result-title" href={item.link}>
									<h2>{item.title}</h2>
								</a>
								<p className="search-page-result-snippet">
									{item.snippet}
								</p>
							</div>
						))}
					</div>
				)
			}
		</div>
	);
}

export default SearchPage;