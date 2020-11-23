import { Fragment, useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import Episodes from "./Episodes";
import './searchBar.scss'
const axios = require('axios');

// PodcastSearch Component fetches podcast data from the Itunes API, passing down the results and the user input as props
export default function PodcastSearch(props) {

  // Name to insert into Itunes API 
  const [term, setTerm] = useState("");
  // The results fetched from the API
  const [results, setResults] = useState([]);
  // The value of the selected podcast
  const [value, setValue] = useState("");
  // Episodes of the selected podcast
  const [episodes, setEpisodes] = useState([{}]);
  // // Titles of the episodes in the episodes state
  // const [titles, setTitles] = useState([]);

  // Stores the setValue function to pass down as props
  const changeValue = val => {
    setValue(val);
  }

  useEffect(() => {
    const url = `https://itunes.apple.com/search?term=${term}&entity=podcast`;
    axios.get(url).then(response => {
      setResults([...response.data.results])
      // Make second api call for specific podcasts
      const feedUrl = response.data.results[0].feedUrl;
      const url =  `https://api.rss2json.com/v1/api.json?rss_url=${feedUrl}`
      console.log('feedUrl', url);
      axios.get(url).then(response => {
        console.log('data items', response.data.items)
        setEpisodes(response.data.items)
      })
    })
    .catch(err => console.log('Error: ', err));
  }, [term]);

  // useEffect(() => {
  //   const options = [];
  //   episodes.forEach(episode => options.push(episode.title));
  //   setTitles(options);
  // }, [titles, episodes]);

  return (
    <Fragment>
      <div>
        <SearchBar 
          onSearch={term => setTerm(term)}
          changeValue = {changeValue}
          value = {value}
         />
        <select class='episode-list'>
          <option>Episodes:</option>
          <Episodes episodes = {episodes} />
        </select>
        <SearchResults 
          results={results}
          state={props.state}
          changeValue = {changeValue}
          changePodcastInfo = {props.changePodcastInfo}
          changeInput = {props.changeInput}
        />
      </div>
    </Fragment>
  );
}