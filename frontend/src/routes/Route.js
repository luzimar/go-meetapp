import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  isNotFound,
  ...rest
}){
  const signed = false;

  if(isNotFound){
    return <Route { ...rest } component={Component}/>
  }
  if(!signed && isPrivate)
  {
    return <Redirect to="/"/>
  }

  if(signed && !isPrivate)
  {
    return <Redirect to="/dashboard"/>
  }

  return <Route { ...rest } component={Component}/>
}


RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  isNotFound: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
  .isRequired,
}

RouteWrapper.defaultProps = {
  isPrivate: false,
  isNotFound: false
}