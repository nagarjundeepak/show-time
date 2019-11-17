import React from 'react';
import {IMG_PATH} from '../../store/utils/keys';

function MovieCard({data}) {
  return (
    <div className="movieCard">
      <div className="movieCard__front">
        <img alt={data.original_title} src={`${IMG_PATH}${data.poster_path}`} />
      </div>
      <div className="movieCard__back">
        <div>
          <h5>
            {data.original_title ? data.original_title : data.original_name}
          </h5>
        </div>
        <div>{data.release_date}</div>
        <div>{data.media_type}</div>
      </div>
    </div>
  );
}

export default MovieCard;
