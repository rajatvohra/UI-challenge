import React, { Component } from 'react';
import p1 from '../images/p1.png';
import p2 from '../images/p2.png';
import p3 from '../images/p3.png';
<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"></link>

export default class Leadership extends Component {
  render() {
    return (
      <div className=" mt-10 mx-20">
          <h1 className="text-5xl font-poppins font-semibold mx-8 ">Leadership Team.</h1>
          <div className="grid grid-cols-3 mt-10  ">
            <div className="mx-8 ">
                <img className="h-96 w-96" src={p1}></img>
                <h2 className="text-4xl font-poppins font-bold mt-6">Name</h2>
                <h3 className="text-4xl font-poppins  mt-2 ">Ceo,Founder</h3>
                <h6 className="text-xl font-poppins mt-1 ml-1 "> Linkdin</h6>
            </div>
            <div className="mx-8">
                <img className="h-96 w-96" src={p2}></img>
                <h2 className="text-4xl font-poppins font-bold mt-6">Name</h2>
                <h3 className="text-4xl font-poppins  mt-2 ">Ceo,Founder</h3>
                <h6 className="text-xl font-poppins mt-1 ml-1 "> Linkdin</h6>
            </div>
            <div className="mx-8">
                <img className="h-96 w-96" src={p3}></img>
                <h2 className="text-4xl font-poppins font-bold mt-6">Name</h2>
                <h3 className="text-4xl font-poppins  mt-2 ">Ceo,Founder</h3>
                <h6 className="text-xl font-poppins mt-1 ml-1 "> Linkdin</h6>
            </div>
          </div>
      </div>
    );
  }
}