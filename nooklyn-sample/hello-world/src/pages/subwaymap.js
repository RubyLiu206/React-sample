import React from "react";
import { Link } from "gatsby";
import Header from "../components/header";
import Container from "../components/container";
import body2 from "../components/body2";
import body1 from "../components/body1";

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
      <p>left is the list,right is the map</p>
    </div>
    <div style = {{float : 'left', backgroundcolor : "teal", width: '50%' , height: '500px' }}>
      <p>this is body1</p>
      <p>this is body1</p>
      <p>this is body1</p>
    </div>
    <div style =  {{float : 'right', backgroundcolor : "teal", width: '50%', height: '500px' }}>
      <p>tstyle =his is body2</p>
      <p>this is body2</p>
    </div>
  </Container>
  
);
