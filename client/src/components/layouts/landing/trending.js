import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {URL, API_KEY} from '../../../store/utils/keys';
import MovieCard from '../../containers/movieCard';
import {deleteCurrent} from '../../../store/actions/currentMovieActions';

function Trendingblock (props) {
  // props.removeCurrent();
  const [items, setItems] = useState ([]);
  const [isLoading, setIsLoading] = useState (false);
  const url = props.query !== null
    ? `${URL}search/multi?api_key=${API_KEY}&query=${props.query}&page=1`
    : `${URL}trending/all/day?api_key=${API_KEY}`;
  useEffect (
    () => {
      setIsLoading (true);
      const fetchData = async () => {
        const result = await axios (url);
        setItems (result.data.results);
        setIsLoading (false);
      };
      fetchData ();
    },
    [url]
  );
  let data = [];
  Object.keys (items).forEach (function (key) {
    data.push (<MovieCard key={items[key].id} data={items[key]} />);
  });

  return (
    <div className="trendingBlock container mt-3">
      {isLoading ? <div>loading...</div> : data}
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    removeCurrent: () => {
      dispatch (deleteCurrent ());
    },
  };
};

let TrendingBlock = connect (null, mapDispatchToProps) (Trendingblock);

export {TrendingBlock};
