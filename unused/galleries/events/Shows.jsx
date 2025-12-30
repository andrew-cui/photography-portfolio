import '../../css/index.css'
import NavBar from '../../components/NavBar.jsx'
import Header from '../../components/Header.jsx'
import Gallery from '../../components/Gallery.jsx'
import ScrollKey from '../../components/Scroll.jsx'

// Homepage - destination URL /
const padt_json = [
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/events/upenn-padt/padt1.avif', 
    orientation: 'img-horizontal',
    caption: 'pan-asian dance troupe: phoenix rising',
    camera: 'sony a7iii / 70-200mm',
    location: 'iron gate theatre, upenn'
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/events/upenn-padt/padt2.avif', 
    orientation: 'img-horizontal',
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/events/upenn-padt/padt3.avif', 
    orientation: 'img-horizontal',
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/events/upenn-padt/padt4.avif', 
    orientation: 'img-vertical',
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/events/upenn-padt/padt5.avif', 
    orientation: 'img-horizontal',
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/events/upenn-padt/padt8.avif', 
    orientation: 'img-horizontal',
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/events/upenn-padt/padt6.avif', 
    orientation: 'img-vertical',
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/events/upenn-padt/padt7.avif', 
    orientation: 'img-vertical',
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/events/upenn-padt/padt9.avif', 
    orientation: 'img-horizontal',
    caption: 'full troupe photo!'
  },
]


const Shows = () => {
  const data = {siteName: 'shows'}
  return (
    <div>
      <Header data={data}/>

      <Gallery 
        title = 'upenn • pan-asian dance troupe'
        subtitle = "spring 2020 • got to be one of the photographers for many of my friends in penn's asian dance troupe!"
        images = {padt_json}
      />

      <ScrollKey/>
      <NavBar/>
    </ div>
  )
}

export default Shows