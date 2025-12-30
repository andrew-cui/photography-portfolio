import React, { useState } from "react";
import '../../css/index.css'
import NavBar from '../../components/NavBar.jsx'
import Header from '../../components/Header.jsx'
import Gallery from '../../components/Gallery.jsx'
import ScrollKey from '../../components/Scroll.jsx'
import { MD_Spacer } from '../../components/Spacers.jsx'

const image_jchalf = [
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/events/running/jerseycity1.avif', 
    orientation: 'img-vertical',
    location: 'jersey city, nj',
    camera: 'sony a7iii / 70-180mm'
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/events/running/jerseycity2.avif', 
    orientation: 'img-vertical',
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/events/running/jerseycity3.avif', 
    orientation: 'img-horizontal',
  },
]

const image_nychalf = [
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/events/running/nychalf1.avif', 
    orientation: 'img-vertical',
    location: 'manhattan, nyc',
    camera: 'sony a7iii / 70-180mm'
  },
]

const image_rfc = [
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/events/running/rfctrack1.avif', 
    orientation: 'img-horizontal',
    location: 'chinatown, nyc',
    camera: 'sony a7iii / 70-180mm'
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/events/running/rfctrack2.avif', 
    orientation: 'img-vertical',
  },
]

const Running = () => {
  const data = {siteName: 'running'}
  const [isVisible, setIsToggled] = useState(false);
  const toggleDisclaimer = () => {
    setIsToggled(!isVisible);
  }

  return (
    <div>
      <Header data={data}/>

      <div className="resume-button disclaimer-button"><button onClick={toggleDisclaimer}><i>
        {isVisible ? 
            <svg className="inline-block" width="12" height="12" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 16 L12 8 L20 16" fill="none" stroke="#27272a" strokeWidth={1}/>
            </svg> :
            <svg className="inline-block" width="12" height="12" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
                <path d="M4 8 L12 16 L20 8" fill="none" stroke="#27272a" strokeWidth={1}/>
            </svg> 
          }&nbsp;&nbsp;
        {isVisible ? 'hide' : 'show'} disclaimer
      </i></button></div>

      <div className={`gallery-container text-left disclaimer ${isVisible ? 'disclaimer-show' : ''}`}><p style={
        {fontSize: '0.85em', fontWeight: '300', lineHeight: '1.5em', 'marginTop': 0, color: 'gray'}}>
        <ul className="list">
          <li>photos below are independent work only</li>
          <li><span style={{fontWeight: 500}}>images are free for personal use</span> - please credit (<a href="https://www.instagram.com/andrew.cui/" target="_blank">ig: @andrew.cui</a>)</li>
          <li><a href="https://buymeacoffee.com/andrew.cui" target="_blank">donations</a> are appreciated but in no way expected!</li>
        </ul>
      </p></div>
      <MD_Spacer/>

      <Gallery 
        title = 'jersey city half marathon'
        subtitle = {
          <>
            jersey city, nj • april 2024<br/><br/>
            all photos can be found here: &nbsp;
            <a href="https://www.flickr.com/photos/andrewcui/albums/72177720316235319/" target="_blank"> 
            flickr &nbsp;
            <svg xmlns="http://www.w3.org/2000/svg" className="inline-block" height="20" width="20" fill="currentColor" viewBox="0 0 50 50">
              <path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 16 17 C 11.59 17 8 20.59 8 25 C 8 29.41 11.59 33 16 33 C 20.41 33 24 29.41 24 25 C 24 20.59 20.41 17 16 17 z M 34 17 C 29.59 17 26 20.59 26 25 C 26 29.41 29.59 33 34 33 C 38.41 33 42 29.41 42 25 C 42 20.59 38.41 17 34 17 z"></path>
              </svg>
            </a>
          </>}
        images = {image_jchalf}
        top_spacer = {false}
        end_spacer = {"medium"}
      />

      <Gallery 
        title = 'united airlines new york city half'
        subtitle = {
          <>
            manhattan, ny • march 2024<br/>
            <a href="https://www.flickr.com/photos/andrewcui/albums/72177720316217650/" target="_blank"> 
            flickr &nbsp;
            <svg xmlns="http://www.w3.org/2000/svg" className="inline-block" height="20" width="20" fill="currentColor" viewBox="0 0 50 50">
              <path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 16 17 C 11.59 17 8 20.59 8 25 C 8 29.41 11.59 33 16 33 C 20.41 33 24 29.41 24 25 C 24 20.59 20.41 17 16 17 z M 34 17 C 29.59 17 26 20.59 26 25 C 26 29.41 29.59 33 34 33 C 38.41 33 42 29.41 42 25 C 42 20.59 38.41 17 34 17 z"></path>
              </svg>
            </a>
          </>}
        images = {image_nychalf}
        top_spacer = {false}
        end_spacer = {"medium"}
      />

      <Gallery 
        title = 'run for chinatown track meet'
        subtitle = {
          <>
            murry bergtraum track, ny • may 2024<br/>
            <a href="https://www.flickr.com/photos/andrewcui/albums/72177720317060458/" target="_blank"> 
            flickr &nbsp;
            <svg xmlns="http://www.w3.org/2000/svg" className="inline-block" height="20" width="20" fill="currentColor" viewBox="0 0 50 50">
              <path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 16 17 C 11.59 17 8 20.59 8 25 C 8 29.41 11.59 33 16 33 C 20.41 33 24 29.41 24 25 C 24 20.59 20.41 17 16 17 z M 34 17 C 29.59 17 26 20.59 26 25 C 26 29.41 29.59 33 34 33 C 38.41 33 42 29.41 42 25 C 42 20.59 38.41 17 34 17 z"></path>
              </svg>
            </a>
          </>}
        images = {image_rfc}
        top_spacer = {false}
        end_spacer = {"xl"}
      />
     
      <ScrollKey />

      <NavBar/>
    </ div>
  )
}

export default Running