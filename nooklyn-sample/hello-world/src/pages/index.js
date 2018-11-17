import React from "react";
import { Link } from "gatsby";
import Header from "../components/header";
import background from "../pictures/background_photo.jpg";
import Container from "../components/container";

const ListLink = props => (
  <l1 style={{ display: "inline-block", marginRight: "1rem" }}>
    <Link to={props.to}>{props.children}</Link>
  </l1>
);

export default ({ children }) => (
  <Container>
    <header style={{ marginBottom: `1.5rem` }}>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/subwaymap">subwaymap</ListLink>
        <ListLink to="/about">about</ListLink>
      </ul>
    </header>
    <div style={{ margin: `3rem auto`, maxWidth: 1000 }}>
      <h1>New York subway</h1>
      <div>
        <p>
          You can also find me with this URL “
          <a href="https://xl2590.wixsite.com/rubyrubywithp"></a>
          ”.
        </p>
        <blockquote>
          <p>
            This is a website for showing the NY subyway.{" "}
          </p>
        </blockquote>
      </div>
      <p>Posted Nov 15, 2018</p>
      <div>
        <img src={require("../pictures/background_photo.jpg")} />
      </div>
    </div>
  </Container>
);
