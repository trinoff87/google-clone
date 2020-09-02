import React, { useState } from 'react';
import './Search.css';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import {useStateValue} from "../StateProvider";
import {actionTypes} from "../reducer";


function Search({ hideButtons = false }) {
	const [{}, dispatch] = useStateValue();
	//This is a functional component, using useState hook

	//how to make the enter key trigger the search

	const [input, setInput] = useState('')
	const history = useHistory();

	const search = e => {
		e.preventDefault(); // we dont want to refresh or do anything funky
		// do something with input...come back and fix
		console.log('You hit search button >> ', input);

		dispatch(
			{
				type: actionTypes.SET_SEARCH_TERM,
				term: input
			}
		)
		history.push("/search")

	}
	return (
		<form className="search">
			<div className="search-input">
				<SearchIcon className="search-input-icon" />
				<input value={input} onChange={e => setInput(e.target.value)} />
				<MicIcon />
			</div>

			{!hideButtons ? (
				<div className="search-buttons">
					<Button type="submit" onClick={search} variant="outlined">Google Search</Button>
					<Button variant="outlined">I'm Feeling Lucky</Button>
				</div>
			) : (
					<div className="search-buttons">
						<Button className="search-buttons-hidden" type="submit" onClick={search} variant="outlined">Google Search</Button>
						<Button className="search-buttons-hidden" variant="outlined">I'm Feeling Lucky</Button>
					</div>
				)
			}
		</form>
	)
}

export default Search;