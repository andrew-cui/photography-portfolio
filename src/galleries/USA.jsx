import '../css/index.css'
import '../css/galleries.css'
import NavBar from '../components/NavBar.jsx'
import Header from '../components/Header.jsx'
import Gallery from '../components/Gallery.jsx'

// Homepage - destination URL /
const image_json = [
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/travel/usa/nyc-oculus-3wtc.avif', 
    orientation: 'img-vertical',
    caption: 'looking up @ 3 wtc from the oculus - nyc',
    camera: 'sony a7iii / 17mm'
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/travel/usa/dc-lincolnmemorial2.avif', 
    orientation: 'img-horizontal',
    caption: "photoshop work: starry night at the lincoln monument - dc",
    camera: 'sony a7iii / 17mm / composite'
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/travel/usa/dc-lincolnmemorial1.avif', 
    orientation: 'img-horizontal',
    caption: "the reflecting pool from lincoln's steps - dc",
    camera: 'sony a7iii / 17mm'
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/travel/usa/milkyway.avif', 
    orientation: 'img-vertical',
    caption: "milky way in virginia, shot while hunting comet neowise",
    camera: 'sony a7iii / 17mm. single shot'
  },
]


const USA = () => {
  const data = {siteName: 'nyc & usa'}
  return (
    <div>
      <Header data={data}/>

      <Gallery 
        title = 'usa, 2021-present'
        subtitle = 'street photography around the city & the rest of the usa'
        images = {image_json}
      />

      <NavBar/>
    </ div>
  )
}

export default USA