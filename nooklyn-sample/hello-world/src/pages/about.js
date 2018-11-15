import React from "react";
import styles from "./about-css-modules.module.css";
import Container from "../components/container";
import Header from "../components/header";
import { Link } from "gatsby";

console.log(styles);

const User = props => (
  <div className={styles.user}>
    <img src={props.avatar} className={styles.avatar} alt="" />
    <div className={styles.description}>
      <h2 className={styles.username}>{props.username}</h2>
      <p className={styles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
);

const ListLink = props => (
  <l1 style={{ display: "inline-block", marginRight: "1rem" }}>
    <Link to={props.to}>{props.children}</Link>
  </l1>
);

export default () => (
  <Container>
    <Header>
      <header style={{ marginBottom: "1.5rem" }}>
        <ul style={{ listStyle: "none", float: "right" }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/contact">Contact</ListLink>
        </ul>
      </header>
    </Header>
    <h1>About Ruby / Peter</h1>
    <p>They now study in New York City</p>
    <User
      username="Ruby Liu"
      avatar={require("../pictures/myself.jpg")}
      excerpt="I'm Ruby Liu, and I am study in New York University, major in computer science"
    />
  </Container>
);
