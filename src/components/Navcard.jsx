import React from 'react'
import { Dropdown } from 'react-bootstrap'
import './Header.css';
const Navcard = () => {
  return (
   <div className="container-fluid ">
     <div className="card text-center text-bg-light ">
        <div className="card-header d-flex justify-content-center">
            <ul className="nav nav-tabs card-header-tabs">
                <li className="nav-item ">
                    <a className="nav-link" 
                       href="https://geeksforgeeks.org">
                        <img src="https://rukminim2.flixcart.com/flap/80/80/image/29327f40e9c4d26b.png?q=100"/>
                         <p className='text-dark'> Television</p>
                      </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" 
                           href="https://practice.geeksforgeeks.org">
                            <img src="https://rukminim2.flixcart.com/flap/80/80/image/22fddf3c7da4c4f4.png?q=100" alt="" srcSet="" />
                        <p className='text-dark'>  Air-conditioner</p>
                  </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" 
                           href="https://write.geeksforgeeks.org/my-posts/">
                            <img src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/0d75b34f7d8fbcb3.png?q=100" alt="" srcSet="" />
                          <p className='text-dark'>Washing Machines</p>
                      </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" 
                           href="">
                          <img src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/0d75b34f7d8fbcb3.png?q=100" alt="" srcSet="" />
                          <p className='text-dark'>Refridgerator </p>
                          </a>      
                      
                </li>
                <li className="nav-item">
                    <a className="nav-link" 
                           href="https://www.geeksforgeeks.org/explore">
                          <img src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/0d75b34f7d8fbcb3.png?q=100" alt="" srcSet="" />
                          <p className='text-dark'>Water Purifier</p>
                      </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" 
                           href="https://www.geeksforgeeks.org/explore">
                          <img src="	https://rukminim2.flixcart.com/fk-p-flap/80/80/image/0d75b34f7d8fbcb3.png?q=100" alt="" srcSet="" />
                          <p className='text-dark'>Commercial AC</p>
                      </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" 
                           href="https://www.geeksforgeeks.org/explore">
                          <img src="	https://rukminim2.flixcart.com/flap/80/80/image/71050627a56b4693.png?q=100" alt="" srcSet="" />
                          <p className='text-dark'>Mixer Juicer</p>
                      </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" 
                           href="https://www.geeksforgeeks.org/explore">
                          <img src="	https://rukminim2.flixcart.com/flap/80/80/image/71050627a56b4693.png?q=100" alt="" srcSet="" />
                          <p className='text-dark'>Micro Wave</p>
                      </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" 
                           href="https://www.geeksforgeeks.org/explore">
                          <img src="	https://rukminim2.flixcart.com/flap/80/80/image/71050627a56b4693.png?q=100" alt="" srcSet="" />
                          <p className='text-dark'>Atta Chakki</p>
                      </a>
                </li>
            </ul>
        </div>
   </div>
  
   </div>
  )
}

export default Navcard