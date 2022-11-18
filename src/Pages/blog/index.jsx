import React from 'react'
import Banner from "../../components/banners/Banner";
import Profile from "../../components/Profile";
import { Link } from 'react-router-dom'
import { Images } from "../../Icons&Images";
import '../../scss/blog.scss';

const index = () => {
    const blogs = ['a', 'b', 'c', 'd']
  return (
    <div>
        <div
      style={{height: '524px' }}
      className="bg-contact banner px-1 d-flex flex-column flex-lg-row align-items-center justify-content-center gap-10 justify-content-lg-between p-t-10  ">
        <div className='container d-flex align-items-center justify-content-between'>
            <div>
            <p className="text-white f-s-16">
                Get First hand weekly updates from our Team
            </p>
            <h1 className='text-white  f-s-40 f-w-700'>Welcome to Techstudio <br/> Blog</h1>
             
            <div className='m-t-30'>
                <input className= 'input_field m-t-2 bg-white p-l-10 text-muted f-s-14'  type="text" placeholder='Email Address' />
                <button className='blue-btn m-b-4 btn btn-another-blue text-white text-center f-s-13 ' >Subscribe</button>
            </div>
        </div>
      <div className="d-flex align-items-center justify-content-center d-none d-md-block ">
        <img
          className="hero_img"
          src={Images.coffee}
          alt="Coffee"
        />
      </div>
        </div>
        
    </div>
    <section className="container  m-t-50 px-5   d-flex align-items-center justify-content-between gap-10 ">
        <div className=''>
            <div>
                <p className='f-s-14'>14th February, 2021</p>
            </div>
            <div className='m-t-15'>
                <h1 className='text-dark  f-w-700'>Techstudio Wins 2021 Africa Freedom <br/> Innovation Challenge</h1>
                <p className='m-t-30 f-s-16 first_p'>
                    Request for unavailable documents across sectors and countries. Our team is<br /> 
                    committed to fast turn-around.Request for unavailable documents across sectors <br />
                    and countries. <button className = ' btn text-another-blue f-w-600 f-s-16'> Read All</button>
                </p>
            </div>
        </div>
        <div>
            <img
          className="d-none d-md-block"
          src={Images.paper}
          alt="News Paper"
        />
        </div>
    </section>
    <section className='container'>
        <div className='m-t-40 px-0 d-flex align-items-center justify-content-start'>
            <h1 className='f-s-35 f-w-600 h1-blog'>Older Posts</h1>
            <div className='d-flex align-items-center justify-content-center first-line m-l-20'>
                <div className='line'> </div>
            </div>
        </div>
    </section>
    <section className='blog-posts container'>
        {
            blogs.map((blog, index)=>{
                return (
                    <div key={index} className = 'main-blog p-b-30 m-t-20 m-b-30 px-2 d-flex align-items-center justify-content-between gap-10'>
                        <div>
                            <img className="d-none d-md-block" src={Images.paper} alt="News Paper" />
                        </div>
                        <div className='m-t-15'>
                            <div>
                            <p className='f-s-14'>14th February, 2021</p>
                            </div>
                            <h1 className='text-dark f-w-700'>Techstudio Wins 2021 Africa Freedom <br/> Innovation Challenge</h1>
                            <p className='m-t-30 f-s-16 first_p'>
                                Request for unavailable documents across sectors and countries. Our team is<br /> 
                                committed to fast turn-around.Request for unavailable documents across sectors <br />
                                and countries. <button className = ' btn text-another-blue f-w-600 f-s-16'> Read All</button>
                            </p>
                        </div>
                    </div>
                )})
        }
    </section>
    
    <section className="container mt-60 mb-52 px-0 px-lg-10">
        <Banner>
          <div className="text-white text-center d-flex flex-column align-items-lg-center gap-10 p-20 px-lg-72">
            <p className="text-start text-lg-center lh-lg f-s-16">
              I have been trying to figure out a way to kickstart my career in
              tech to no avail. I <br /> tried self tutorial, still nothing. When I
              tried techstudio 10 weeks training, my story <br /> changed for better
            </p>
            <Profile />
          </div>
        </Banner>
      </section>
    </div>
  )
}

export default index