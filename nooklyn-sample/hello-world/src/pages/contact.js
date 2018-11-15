import React from "react";
import { Link } from "gatsby";
import Header from "../components/header";
import Container from "../components/container";

const ListLink = props => (
  <l1 style={{ display: "inline-block", marginRight: "1rem" }}>
    <Link to={props.to}>{props.children}</Link>
  </l1>
);

export default () => (
  <Container>
    <Header>
      <ul style={{ marginBottom: "3rem", listStyle: "none", float: "right" }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about">About</ListLink>
      </ul>
    </Header>
    <div style={{ margin: "3rem auto", color: `teal`, maxWidth: "1000px" }}>
      <Header headerText="Contact" />
      <p>Send us a message!</p>
      <img src={require("../pictures/background_photo.jpg")} />
    </div>
  </Container>
);
