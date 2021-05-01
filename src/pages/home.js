import React, { Component } from 'react';
import photo from '../images/group-photo.png';
import mouseimg from '../images/scroll-mouse.svg';
import dummyText from "../DummyText";
<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"></link>

export default class Home extends Component {
  render() {
    return (
      <div className="  bg-cover h-screen-90 " style={{
        backgroundImage: `url(${photo})`,
      }}>
        <div className=" relative top-46 left-1/3 w-5/12 ">
        <h1  className="font-poppins font-bold text-white text-4xl  ">
          We are a Modern IT Company
        </h1>
        <h1 className="font-poppins font-light  text-white  text-base w-10/12 ">
        {/* mt-6 ml-12 */}
            {dummyText}
          </h1>
          </div>
          <div className=" relative top-60 left-1/3">
        <h1  className="font-poppins font-bold text-white text-xl w-1/3  object-center text-center">
          Scroll down
        </h1>
        <img className="left-16 relative w-7 h-12 pt-4" src={mouseimg}></img>
          </div>
        </div>
    );
  }
}