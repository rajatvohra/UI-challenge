import React, { Component } from 'react';
import photo from '../images/group-photo.png';
import img2 from '../images/3monitor.png';
import dummyText from "../DummyText";
<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"></link>

export default class Info extends Component {
  render() {
    return (
      <div className="grid grid-cols-2  mx-10">
          <div className="ml-20 mt-10">
              <h1 className="text-3xl font-poppins font-semibold mt-40">
                Engineering Impact
              </h1>
              <h2 className='w-4/6 mt-6'>
                  {dummyText}
              </h2>

          </div>
          <div className="mt-10">
              <img className="mt-20 mr-10" src={img2}></img>
          </div>
      </div>
    );
  }
}