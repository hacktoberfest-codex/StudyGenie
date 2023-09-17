import React from "react"
import { blog } from "../../../dummydata"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <section className='newletter'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>Newsletter - Stay tune and get the latest update</h1>
            <span>Know about new stuff everyday</span>
          </div>
          <div className='right row'>
            <input type='text' placeholder='Enter email address' />
            <i className='fa fa-paper-plane'></i>
          </div>
        </div>
      </section>
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1>SMARTLEARNHUB</h1>
            <span>ONLINE EDUCATION & LEARNING</span>
            <p>A smart AI assisted website to help you generate precise notes and help you with your studies.</p>

            <a href="https://www.facebook.com/" target="_blank"><i className='fab fa-facebook-f icon'></i></a>
            <a href="https://www.twitter.com/" target="_blank"><i className='fab fa-twitter icon'></i></a>
            <a href="https://www.instagram.com/" target="_blank"><i className='fab fa-instagram icon'></i></a>
          </div>
          <div className='box link'>
            <h3>Explore</h3>
            <ul>
              <a href="http://localhost:3000/about"><li>About Us</li></a>
              <a href="http://localhost:3000/team"><li>Services</li></a>
              <a href="http://localhost:3000/courses"><li>Courses</li></a>
              <a href="http://localhost:3000/journal"><li>Blog</li></a>
              <a href="http://localhost:3000/contact"><li>Contact us</li></a>
            </ul>
          </div>
          <div className='box link'>
            <h3>Quick Links</h3>
            <ul>
              <a href="http://localhost:3000/contact"><li>Contact Us</li></a>
              <a href="http://localhost:3000/courses"><li>Pricing</li></a>
              <a href="http://localhost:3000/team"><li>Terms & Conditions</li></a>
              <a href="http://localhost:3000/team"><li>Privacy</li></a>
              <a href="http://localhost:3000/team"><li>Feedbacks</li></a>
            </ul>
          </div>
          <div className='box'>
            <h3>Recent Post</h3>
            {blog.slice(0, 3).map((val) => (
              <div className='items flexSB'>
                <div className='img'>
                  <img src={val.cover} alt='' />
                </div>
                <div className='text'>
                  <span>
                    <i className='fa fa-calendar-alt'></i>
                    <label htmlFor=''>{val.date}</label>
                  </span>
                  <span>
                    <i className='fa fa-user'></i>
                    <label htmlFor=''>{val.type}</label>
                  </span>
                  <h4>{val.title.slice(0, 40)}...</h4>
                </div>
              </div>
            ))}
          </div>
          <div className='box last'>
            <h3>Have a Question?</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                Iter College, Jagmohan Nagar, Jagamara, Bhubneshwar, Odisha-751030
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                +1 234 567 8910
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                codecrusaders@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©2023 All rights reserved | This website is made with <i className='fa fa-heart'></i> by Code Crusaders
        </p>
      </div>
    </>
  )
}

export default Footer
