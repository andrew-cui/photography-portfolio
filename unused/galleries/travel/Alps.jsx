import '../../css/index.css'
import NavBar from '../../components/NavBar.jsx'
import Header from '../../components/Header.jsx'
import Gallery from '../../components/Gallery.jsx'

// Homepage - destination URL /
const image_json = [
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/travel/alps/neuschwanstein.avif', 
    orientation: 'img-horizontal',
    caption: 'neuschwanstein castle from marienbrucke',
    camera: 'sony a7iii / 85mm / composite',
    location: 'füssen, germany 🇩🇪'
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/travel/alps/hallstatt.avif', 
    orientation: 'img-vertical',
    caption: 'morning in hallstatt',
    camera: 'sony a7ii / 20mm',
    location: 'hallstatt, austria 🇦🇹'
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/travel/alps/lakebled3.avif', 
    orientation: 'img-vertical',
    caption: "afternoon at lake bled",
    camera: 'sony a7iii / 50mm',
    location: 'bled, slovenia 🇸🇮'
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/travel/alps/lakebled4.avif', 
    orientation: 'img-vertical',
    caption: "lake bled from ojstrica (with some creative liberty)",
    camera: 'sony a7iii / 50mm',
    location: 'bled, slovenia 🇸🇮'
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/travel/alps/lakebled2.avif', 
    orientation: 'img-vertical',
    caption: "final view of lake bled",
    camera: 'sony a7iii / 50mm',
    location: 'bled, slovenia 🇸🇮'
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/travel/alps/jungfraubahn.avif', 
    orientation: 'img-vertical',
    caption: "taking the jungfraubahn up to jungfraujoch",
    camera: 'sony a7iii / 50mm',
    location: 'kleine-schdeigg / lauterbrunnen, switzerland 🇨🇭'
  },  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/travel/alps/lucerne.avif', 
    orientation: 'img-horizontal',
    caption: "composite of the kapelbrucke",
    camera: 'sony a7iii / 17mm / composite',
    location: 'lucerne, switzerland 🇨🇭'
  },
]


const Alps = () => {
  const data = {siteName: 'alps 🏔️'}
  return (
    <div>
      <Header data={data}/>

      <Gallery 
        title = 'swiss, austria, slovenia, germany - 2019, 2022, 2023'
        subtitle = 'outtakes from solo trip, couples trip & family trip across the years'
        images = {image_json}
      />

      <NavBar/>
    </ div>
  )
}

export default Alps