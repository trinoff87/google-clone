import {useState, useEffect} from 'react'
import API_KEY from './keys'

const CONTEXT_KEY = 'ca28591009665319f';

//This is a custom hook e.g. useState useEffect

const useGoogleSearch = (term) => {
	const [data, setData] = useState(null);

	useEffect(() => {
		//whenever term changes trigger this code
		const fetchData = async() => {
			fetch(
				`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
			)
			.then(response => response.json())
			.then(result => {
				//pushes data to data layer
				setData(result)
			});
		}
		fetchData();
	}, [term]);
	return {data};
}

export default useGoogleSearch;