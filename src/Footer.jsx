import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
export const Footer = () => {
  return (
    <>
    <div className='flex py-5 text-[14px] px-5 bg-black text-white gap-[80px]'>
        <div className='flex leading-10 flex-col ga-3'>
            <p className='text-sm text-gray-300'>Features</p>
            <p>Strategize</p>
            <p>Collobaration</p>
            <p>Tracking</p>
            <p>Reporting</p>
        </div>
        <div className='flex leading-6 flex-col gap-3'>
            <p className='text-sm text-gray-300'>What's in it for you</p>
            <p>By Role</p>
            <ul className='list-disc pl-7 leading-5'>
            <li>CFOs and Directors of Finance</li>
            <li>Controllers</li>
            <li>AR Managers</li>
            <li>Collection Teams</li>
            <li>CSMs, AEs and AMs</li>
            </ul>
            <p>By Tech Stack</p>
        </div>
        <div className='flex leading-6 flex-col gap-3'>
            <p className='text-sm text-gray-300'>Resources</p>
            <p>Blog</p>
            <p>Webinars</p>
            <p>The Casheroes</p>
            <p>ROI Calculator</p>
        </div>
        <div className='flex leading-6 flex-col gap-3'>
            <p className='text-sm text-gray-300'>Company</p>
            <p>About us</p>
            <p>Careers</p>
            <p>Book a demo</p>
        </div>
        <div className='flex leading-6 flex-col gap-3'>
            <p className='text-sm text-gray-300'>Contact us</p>
           <a href='hello@growfin.ai'> <p className='cursor-pointer text-[#05FFFF]'>hello@growfin.ai</p></a>
            <p>3082, Moser Way,
            <br />
            Marietta, GA 30060</p>
        </div>
        <div className='flex leading-6 flex-col gap-3'>
            <p className='text-sm text-gray-300'>Legal</p>
            <p>Terms of use</p>
            <p>Privacy Policy</p>
        </div>
    </div>
    <div className='py-6 bg-black text-white flex gap-8'>
        <FaLinkedin />
        <BsTwitterX />
        <FaSquareInstagram />
        <FaFacebookSquare />
        <p className='text-sm text-gray-300'>Copyright © 2023 Growfin. All rights reserved.</p>
    </div>
    </>
  )
}
