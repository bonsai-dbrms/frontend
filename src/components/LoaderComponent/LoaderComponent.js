import React from 'react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import classes from './LoaderComponent.module.css';
import Loader from 'react-loader-spinner';

const LoaderComponent = ({loading}) => {
  
  const targetElement = document.getElementById('root');
  if (loading) {
    disableBodyScroll(targetElement);
  } else enableBodyScroll(targetElement);
  return loading ? (
    <div className={classes.LoaderParent}>
      <Loader type='Puff' color={'#0c0c1852 '} height={100} width={100} />
    </div>
  ) : null;
};

export default LoaderComponent;
