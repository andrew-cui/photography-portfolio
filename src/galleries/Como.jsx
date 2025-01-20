import '../css/index.css'
import '../css/galleries.css'
import NavBar from '../components/NavBar.jsx'
import Header from '../components/Header.jsx'
import Gallery from '../components/Gallery.jsx'

// Homepage - destination URL /
const image_json = [
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/travel/como/como-villabalbianello2.avif', 
    orientation: 'img-vertical',
    location: 'villa balbianello',
    camera: 'sony a7iii / 35mm'
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/travel/como/como-villabalbianello1.avif', 
    orientation: 'img-horizontal',
    caption: 'viewpoint from attack of the clones',
    location: 'villa balbianello',
    camera: 'sony a7iii / 35mm'
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/travel/como/como1.avif', 
    orientation: 'img-vertical',
    caption: 'villa monastero',
    location: 'varenna, como',
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/travel/como/como2.avif', 
    orientation: 'img-vertical',
    caption: 'gardens of villa melzi',
    location: 'bellagio, como',
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/travel/como/como3.avif', 
    orientation: 'img-vertical',
    caption: 'sailboats on the lake',
    location: 'como, italy',
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/travel/como/como-gelato.avif', 
    orientation: 'img-vertical',
    caption: 'the best gelato of the trip: lulivobysedar.com',
    location: 'como, italy',
  },
]


const Como = () => {
  const data = {siteName: 'lake como, italy'}
  return (
    <div>
      <Header data={data}/>

      <Gallery 
        title = 'june 2024'
        subtitle = {
          <>
            trying to recreate <u>attack of the clones</u>. bellagio, varenna & menaggio
          </>}
        images = {image_json}
      />

      <NavBar/>
    </ div>
  )
}

export default Como