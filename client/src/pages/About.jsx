import React from 'react'
import aboutpic from '../assets/pngegg.png'
import Aditya from "../assets/Aditya.png"
import Alisha from "../assets/Alisha.png"
import Jigmet from "../assets/Jigmet.jpg"
import Anubhav from "../assets/Anubhav.jpg"

import { SocialIcon } from 'react-social-icons'
const About = () => {
  return (
    <><h1 className="text-white text-center font-serif text-4xl mt-6 mb-4">Welcome, To Space Share</h1>
    
    <div className="h-50 w-50 blue-glassmorphism rounded-md
     bg-clip-padding backdrop-filter backdrop-blur-xl 
    bg-opacity-10 border border-gray-100 md:mx-20 mx-2  grid grid-cols-1 lg:grid-cols-2
    items-center">

        <div>
        <h1 className='text-white text-center md:text-left-top ml-5 text-4xl mt-6 '>Our Vision</h1>
        <ul>
        <p className='mt-4 ml-5 mb-3 text-left-top text-xl text-justify
        text-slate-200 mr-2 font-normal'>A disk space renting system using blockchain technology is a platform that allows users to rent out or lease unused storage space on their devices, such as computers, to other users who need it. 
        The platform is built on a blockchain network, which provides secure and transparent transactions between the renters and the providers. 
        The blockchain-based disk space renting system can solve the problem of unused storage space, which is a prevalent issue in today's digital world. 
        Many users have unused storage space on their devices, while others need extra storage space for their data. The platform can connect these users and allow them to transact in a decentralized, secure, and efficient manner. 
        The system works by creating a marketplace where users can list their available storage space and set their rental prices. Other users who need storage space can browse the listings and rent the space they need for a specified period. 
        The rental transactions are recorded on the blockchain, providing transparency and security for all parties involved.</p>
        </ul>
        </div>
        <img src = {aboutpic} alt = "aboutPic"/>
     
      
    </div>
    <><h1 className="text-white text-center font-serif text-4xl mt-6 mb-4">Development Team</h1>
    <p className='text-slate-200 text-center font-serif text-xl'>"Empowering Innovation, Building Tomorrow."</p>
    </>
    <div className='h-50 w-50 pink-glassmorphism rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10 md:mx-20 grid grid-cols-1 lg:grid-cols-4 md:mt-2'>
    <div className="shadow-xl mx-3 my-3 rounded-md blue-glassmorphism">
  <figure><img src={Alisha} alt="Alisha" /></figure>
  <div className="card-body bg-transparent items-center text-white">
    <h2 className="card-title">Alisha</h2>
    <p>Team Member</p>
    <div>
    <SocialIcon network='github' target='_blank' url=''/>
    <SocialIcon network='linkedin' target='_blank' url=''/>
    <SocialIcon network='instagram' target='_blank' url=''/>
    </div>
  </div>
</div>
<div className="blue-glassmorphism shadow-xl mx-3 my-3 rounded-md">
  <figure><img src={Aditya} alt="Aditya" /></figure>
  <div className="card-body bg-transparent items-center text-white">
    <h2 className="card-title">Aditya Pratap Singh</h2>
    <p>Team Member</p>
    <div>
    <SocialIcon network='github' target='_blank' url=''/>
    <SocialIcon network='linkedin' target='_blank' url=''/>
    <SocialIcon network='instagram' target='_blank' url=''/>
    </div>
  </div>
</div>
<div className="blue-glassmorphism shadow-xl mx-3 my-3 rounded-md">
  <figure><img src={Jigmet} alt="Jigmet" /></figure>
  <div className="card-body bg-transparent items-center text-white">
    <h2 className="card-title">Jigmet</h2>
    <p>Team Member</p>
    <div>
    <SocialIcon network='github' target='_blank' url=''/>
    <SocialIcon network='linkedin' target='_blank' url=''/>
    <SocialIcon network='instagram' target='_blank' url=''/>
    </div>
  </div>
</div>
<div className="blue-glassmorphism shadow-xl mx-3 my-3 rounded-md">
  <figure><img src={Anubhav} alt="Anubhav" /></figure>
  <div className="card-body bg-transparent items-center text-white">
    <h2 className="card-title">Anubhav Kherwa</h2>
    <p>Team Member</p>
    <div>
    <SocialIcon network='github' target='_blank' url=''/>
    <SocialIcon network='linkedin' target='_blank' url=''/>
    <SocialIcon network='instagram' target='_blank' url=''/>
    </div>
  </div>
</div>

    </div>
    </>
    
  )
}

export default About