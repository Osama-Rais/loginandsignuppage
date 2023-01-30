import React from "react";
import { Form, Container, Button, Row, Col } from "react-bootstrap";
import Card from "../UI/Card/Card";
import classes from "./Home.module.css";

const Home = (props) => {
   return (
      <form className={classes.home}>
         <label htmlFor="predicition">Real Time Rendering</label>
         <input type="text" id="text" />
      </form>
   );
};

export default Home;
