import React from 'react';
import './Light.css';

export default function Light({className}) {
  let classes = ['circle'];

  classes.push(className);

  return (
    <div className={classes.join(' ')}></div>
  )
}

Light.propTypes = {
  className: React.PropTypes.string.isRequired
};
