import React from 'react';
import classes from './ItemShow.module.css'
import Button from "../UI/Button";



const ItemShow = props => {

  const copyHandler = () => {
    props.onCopy(props.id)
  }

  return (
    <li className={classes['showitem']}>
      {props.children}
      <Button onClick={copyHandler}> Copy To Clipboard </Button>
      
    </li>
  );
};

export default ItemShow;