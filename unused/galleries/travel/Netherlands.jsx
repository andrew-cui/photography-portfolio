import '../../css/index.css'
import NavBar from '../../components/NavBar.jsx'
import Header from '../../components/Header.jsx'
import Gallery from '../../components/Gallery.jsx'

// Homepage - destination URL /
const image_json = [
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/travel/amsterdam/amsterdam3.avif', 
    orientation: 'img-vertical',
    location: 'bikes over the canal',
    camera: 'sony a7iii / 35mm / 17-28mm',
    location: 'amsterdam',
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/travel/amsterdam/amsterdam7.avif', 
    orientation: 'img-vertical',
    caption: 'amstel river',
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/travel/amsterdam/amsterdam8.avif', 
    orientation: 'img-vertical',
    caption: '🧀',
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/travel/amsterdam/amsterdam9.avif', 
    orientation: 'img-vertical',
    caption: 'golden hour in amsterdam',
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/travel/amsterdam/amsterdam2.avif', 
    orientation: 'img-horizontal',
    caption: 'portraits with windmills',
    location: 'zaanse schans',
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/travel/amsterdam/amsterdam1.avif', 
    orientation: 'img-horizontal',
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/travel/amsterdam/amsterdam4.avif', 
    orientation: 'img-vertical',
    caption: 'winkel dutch apple pie',
    location: 'amsterdam',
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/travel/amsterdam/amsterdam5.avif', 
    orientation: 'img-vertical',
    caption: 'the best gelato of the trip: lulivobysedar.com',
    location: 'gouda',
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/travel/amsterdam/amsterdam6.avif', 
    orientation: 'img-vertical',
    caption: 'the best gelato of the trip: lulivobysedar.com',
    location: 'amsterdam',
  },
]


const NL = () => {
  const data = {siteName: 'netherlands 🇳🇱'}
  return (
    <div>
      <Header data={data}/>

      <Gallery 
        title = 'june 2024'
        subtitle = {
          <>
            3 days in amsterdam, with stops in zaanse schans and gouda
          </>}
        images = {image_json}
      />

      <NavBar/>
    </ div>
  )
}

export default NL