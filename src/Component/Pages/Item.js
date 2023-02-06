import React from "react";
import ItemShow from "./ItemShow";
import classes from "./Item.module.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text).then(
    function() {
      console.log('Copying to clipboard was successful!');
    },
    function(err) {
      console.error('Could not copy text: ', err);
    }
  );
};


const Item = (props) => {
  
  const textCopyHandler = (id) => {
    const ItemIndex = props.items.findIndex((item) => (item.id === id))
    copyToClipboard(props.items[ItemIndex].slink)
    console.log(props.items[ItemIndex].slink)
    toast("Copied successfully");
  }



  return (
    <ul className={classes['item']}>
      {props.items.map((item) => (
        <ItemShow key={item.id} id={item.id} onCopy={textCopyHandler}>
          {item.slink}
          <ToastContainer className={classes['toast']}/>

        </ItemShow>
      ))}
      
    </ul>
  );
};

export default Item;
