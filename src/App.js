import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import ScrollableContainer from "react-full-page-scroll";
import Info from "./pages/info";
import Leadership from "./pages/leadership";
import People from "./pages/people";
import Contact from "./pages/contact";

function PageComponent  ({children}) {
  console.log(children.length);
  return (<div className=" h-screen  "><div className="" >{children}</div></div>)
}

class App extends Component {
  render() {
    return (
        <ScrollableContainer >

          <PageComponent><Navbar/><Home/></PageComponent>
          <PageComponent><Info/></PageComponent>
          <PageComponent><Leadership/></PageComponent>
          <PageComponent><People/></PageComponent>
          <PageComponent><Contact/></PageComponent>

        </ScrollableContainer>




    );
  }
}

export default App;