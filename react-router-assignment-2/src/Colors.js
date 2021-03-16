import React from 'react'
import { Link } from 'react-router-dom';
import CurrentColors from "./CurrentColors"

const Colors = ({colors}) => {
  console.log(colors)
  return (
    <div>
      <h1>Find your perfect color!</h1>
      <Link to="colors/new"><h3>Add New Color</h3></Link>
      <CurrentColors colors={colors}/>
    </div>
  );
};

export default Colors;
