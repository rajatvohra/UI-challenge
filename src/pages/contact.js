import React, { Component } from 'react';
import Group69 from '../images/Group69.svg';
import fb from '../images/facebook.svg';
import tw from '../images/twitter.svg';
import lk from '../images/linkedin.svg';
import inst from '../images/instagram.svg';
import dummyText from "../DummyText";

import { Link, animateScroll as scroll } from "react-scroll";
<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"></link>

export default class Contact extends Component {
    scrollToTop = () => {
        scroll.scrollToTop();
      };
  render() {
    return (
        <div>
        <div className="grid grid-rows-6 h-screen-90 ">
            <div className=" grid grid-cols-3 row-span-2 ">
                <p className="ml-40 font-bold font-poppins text-4xl col-span-2 w-4/6">
                    Feel Free to get in touch with us.
                    <h2 className="text-lg  font-normal mt-4">
                    If you have an idea let's discuss it. Just drop us an email or call and we'll find a suitable time for a meeting.
                    </h2>
                    <input placeholder=" Your Email or phone" className=" bg-gray-100 h-16 w-64 rounded-lg  text-xl font-light">
                    </input>
                    <button className=" ml-6 py-4 px-2 bg-transparent text-blue-500 font-semibold text-xl  rounded hover:bg-blue-700 hover:text-white hover:border-transparent transition ease-out duration-200 transform hover:-translate-y-1 active:translate-y-0">Contact Me &rarr;</button>
                </p>
                <img className="col-span-1 mr-4 h-97 mt-2" src={Group69}></img>

            </div>
            <div className='bg-black grid  grid-cols-10 row-span-4'>
                <div className="grid grid-rows-2 ml-80 mt-16 col-span-5">
                    <p className="text-white text-2xl font-semibold">The IT Company</p>
                    <p className="text-white text-lg mt-16 font-semibold">Follow us at
                        <div className="grid grid-cols-4 w-1/2">
                            <img className="w-5 h-5 mt-4 " src={fb}></img>
                            <img  className="w-5 h-5 mt-4"src={inst}></img>
                            <img  className="w-5 h-5 mt-4"src={tw}></img>
                            <img  className="w-5 h-5 mt-4"src={lk}></img>
                        </div>
                        <div className="bg-gray-500 h-0.5 mt-62">
                            <p>

                            </p>
                        </div>
                    </p>
                </div>
                <div className="grid grid-rows-2 mt-16 text-white col-span-4">
                    <div className="text-2xl font-semibold ">
                        Get in touch
                        <p className="mt-4 text-red-700 font-normal">Email@Email.com</p>
                        <p className="mt-4 text-red-700 font-normal">9560289565</p>
                    </div>
                    <div className="text-3xl font-semibold mb-6">
                        Explore
                        <div className="grid grid-cols-5 text-base mt-6 text-gray-400">
                            <div>Home</div>
                            <div>Work</div>
                            <div>Services</div>
                            <div>About</div>
                            <div>Contact</div>
                        </div>
                        <p className="text-base font-light mt-6 text-gray-500">
                        Loremipsum address
                        </p>
                        <div className="bg-gray-500 h-0.5 mt-6">
                            <p>

                            </p>
                        </div>
                    </div>
                </div>
                <div className="text-white text-5xl p-20 mt-80  ">
                    <button >&uarr;</button>

                </div>
            </div>

        </div>
        </div>
    );
  }
}