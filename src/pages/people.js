import React, { Component } from 'react';
import people1 from '../images/poeple1.png';
import people2 from '../images/poeple2.png';
import dummyText from "../DummyText";
<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"></link>

export default class People extends Component {
  render() {
    return (
    <div className=" mt-10 ">
      <div>
          <h1 className="text-2xl font-poppins font-semibold mx-8 ml-40 ">Our People</h1>
      </div>
      <div className="grid grid-cols-6   mt-10">
            <img className="col-span-2 h-2/3 " src={people1}></img>
            <img className="col-span-4  h-2/3 " src={people2}></img>
      </div>
      </div>
    );
  }
}