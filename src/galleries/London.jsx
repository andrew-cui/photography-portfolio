import '../css/index.css'
import '../css/galleries.css'
import NavBar from '../components/NavBar.jsx'
import Header from '../components/Header.jsx'
import Gallery from '../components/Gallery.jsx'

// Homepage - destination URL /
const image_json = [
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/travel/london/london-stpauls.avif', 
    orientation: 'img-vertical',
    caption: "light streaks with the double deckers @ st. paul's",
    camera: 'sony a7iii / 20mm / composite'
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/travel/london/london-stpauls-cherryblossoms.avif', 
    orientation: 'img-horizontal',
    caption: 'cherry blossoms in the daytime',
    camera: 'sony a7iii / 50mm'
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/travel/london/london-boroughmarket.avif', 
    orientation: 'img-vertical',
    caption: 'borough market',
    camera: ''
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/travel/london/london-nealsyard.avif', 
    orientation: 'img-vertical',
    caption: "neal's yard",
    camera: ''
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/travel/london/london-coventgarden.avif', 
    orientation: 'img-horizontal',
    caption: 'nighttime walks in convent garden',
    camera: 'sony a7iii / 20mm / composite'
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/travel/london/london-night-shard.avif', 
    orientation: 'img-vertical',
    caption: 'long exposures on the millennium bridge',
    camera: ''
  },
]


const London = () => {
  const data = {siteName: 'london, uk'}
  return (
    <div>
      <Header data={data}/>

      <Gallery 
        title = '2019'
        subtitle = {
          <>
            street & nighttime photography in london
          </>}
        images = {image_json}
      />

      <NavBar/>
    </ div>
  )
}

export default London