import React from 'react';
import pic from './img/carsol 1.png';
import pic1 from './img/corosal.jpg';
import pic2 from './img/api image.jpg';
import pic3 from'./img/women.webp';
 
export default function Home() {
  return (
    <>
      <div className="container-fluid">
        <div className="row bg-dark">
          <div className="col-md-12">
            <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={pic}width={400}height={500} alt="slide 1" className="d-block w-100" />
                </div>
                <div className="carousel-item">
                  <img src={pic1}width={400}height={500} alt="slide 2" className="d-block w-100" />
                </div>
                <div className="carousel-item">
                  <img src={pic2}width={400}height={500} alt="slide 3" className="d-block w-100" />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    
    <div className='container'>
        <div className='row'>
            <div className='col-md-6'>
    <h1 className='m-3 p-2'>HI<br/>
    <span style={{color:'green'}}> Front End </span>Developer</h1>
    
    <p>I design and develop expeeriences that make people's lives<br />
                simpler  through  Web and Mobile apps.I work   with  Flgma ,<br/>
                HTML5, CSS3, JavaScript,  React, ReactNative  and  Flutter.</p>
         {/* <button style={{background:'green'}}>start now</button> */}
         </div>
         <div className='col-md-6'>
          <img src={pic3}width={500}height={300}padding left={4} alt=''/> 
         </div>    
    </div>
            </div>



            <div className='footer bg-dark text-light'textalign='center' style={{height:100, padding:30 }}>
                <h5 align='center'>send us a message@trinee.me</h5>
                </div>
            

               
            
            </>
            )
            }

