import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = (props) => {
  const { Component, notification, path } = props;
  return !(localStorage.getItem('token'))
    ? (<Route render={ () => <Component notification={notification} path={path} />} />)
    : (<Redirect to='/home'/>);
};

export default PublicRoute;
