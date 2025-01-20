import '../css/index.css'
import '../css/galleries.css'
import NavBar from '../components/NavBar.jsx'
import Header from '../components/Header.jsx'
import Gallery from '../components/Gallery.jsx'

// Homepage - destination URL /
const image_json = [
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/travel/marrakech/marrakech-koutoubia.avif', 
    orientation: 'img-vertical',
    caption: 'koutoubia mosque',
    camera: 'sony a7iii / 35mm',
    location: 'marrakech, morocco',
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/travel/marrakech/marrakech-jardinsecret.avif', 
    orientation: 'img-vertical',
    caption: 'dans le jardin secret',
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/travel/marrakech/marrakech-souk2.avif', 
    orientation: 'img-vertical',
    caption: 'exploring the souks of the medina',
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/travel/marrakech/marrakech-souk1.avif', 
    orientation: 'img-vertical',
    caption: 'silks for sale',
    camera: 'sony a7iii / 17mm'
  },
  
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/travel/marrakech/marrakech-elbadi.avif', 
    orientation: 'img-vertical',
    caption: 'el badi palace',
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/travel/marrakech/marrakech-bahia.avif', 
    orientation: 'img-horizontal',
    caption: 'bahia palace - luckily tourist free in this moment...',
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/travel/marrakech/marrakech-ysl.avif', 
    orientation: 'img-vertical',
    caption: 'jardin majorelle of yves st laurent',
  },
]


const Marrakech = () => {
  const data = {siteName: 'marrakech, morocco'}
  return (
    <div>
      <Header data={data}/>

      <Gallery 
        title = 'june 2024'
        subtitle = {
          <>
            couples trip staying in the marrakech medina (stay at <a href="https://darassiya.com/en/" target="_blank">dar assiya riad</a>!)
          </>}
        images = {image_json}
      />

      <NavBar/>
    </ div>
  )
}

export default Marrakech