import { React, useState } from "react";
import UrlInput from "../Input/Input";
import Item from "./Item";
import axios from "axios";
import Card from "../UI/Card";

export const Home = (props) => {
  const [shortenLink, setShortenLink] = useState([]);
  const [isLoading, setIsLoading]= useState(false)

  const addUrlHandler = (URL) => {
    const urlLink = URL;
    setIsLoading(true)
    try {
      axios(`https://api.shrtco.de/v2/shorten?url=${urlLink}`).then(
        (response) => {
          console.log(response.data.result.full_short_link);
          setShortenLink((prevItem) => {
            const updatedItems = [...prevItem];
            updatedItems.unshift({
              slink: response.data.result.full_short_link,
              id: Math.random().toString(),
            });
            return updatedItems;
          });
          setIsLoading(false)
        }
      );
    } catch (err) {
      console.log(err);
    }
  };


  console.log(shortenLink);
  

  return (
    <Card>
      <h4>Hi {props.name}, Welcome to URL Shortner App</h4>
      <br></br>
      <UrlInput onAdd={addUrlHandler}/>
      {isLoading && <p style={{textAlign:'center', fontSize:'larger'}}> Shortening the url...</p>}
      <Item items={shortenLink}></Item>
    </Card>
  );
};

export default Home;
