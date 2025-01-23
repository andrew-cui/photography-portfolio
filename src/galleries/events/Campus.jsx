import '../../css/index.css'
import NavBar from '../../components/NavBar.jsx'
import Header from '../../components/Header.jsx'
import Gallery from '../../components/Gallery.jsx'
import ScrollKey from '../../components/Scroll.jsx'

// Homepage - destination URL /
const apahw_json = [
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/events/upenn-apahw/apahw1.avif', 
    orientation: 'img-horizontal',
    caption: 'apahw 2019, generations • "big asian" talent show',
    camera: 'sony a7iii / 70-200mm',
    location: 'arch building, upenn'
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/events/upenn-apahw/apahw2.avif', 
    orientation: 'img-vertical',
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/events/upenn-apahw/apahw3.avif', 
    orientation: 'img-horizontal',
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/events/upenn-apahw/apahw4.avif', 
    orientation: 'img-horizontal',
  },
]


const Campus = () => {
  const data = {siteName: 'campus events'}
  return (
    <div>
      <Header data={data}/>

      <Gallery 
        title = 'upenn • asian-pacific-american heritage week'
        subtitle = "fall 2019 • shooting photos for a student talent show celebrating asian heritage on campus"
        images = {apahw_json}
      />
      <ScrollKey/>
      <NavBar/>
    </ div>
  )
}

export default Campus