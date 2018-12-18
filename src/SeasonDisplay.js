import React from 'react';
import ReactDOM from 'react-dom';

const SeasonDisplay = (props) => {
  console.log(props.lat);
  return <div>Season Display</div>;
}

ReactDOM.render(
  <SeasonDisplay />,
  document.getElementById('root')
);

export default SeasonDisplay