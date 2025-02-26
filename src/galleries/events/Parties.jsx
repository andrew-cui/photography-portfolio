import '../../css/index.css'
import NavBar from '../../components/NavBar.jsx'
import Header from '../../components/Header.jsx'
import Gallery from '../../components/Gallery.jsx'
import ScrollKey from '../../components/Scroll.jsx'

const image_ivorypeacock = [
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/events/parties/ivorypeacock-1.avif', 
    orientation: 'img-horizontal',
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/events/parties/ivorypeacock-2.avif', 
    orientation: 'img-horizontal',
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/events/parties/ivorypeacock-3.avif', 
    orientation: 'img-horizontal',
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/events/parties/ivorypeacock-5.avif', 
    orientation: 'img-horizontal',
  },
]


const iamge_jadeclover = [
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/events/parties/jadeandclover-2.avif', 
    orientation: 'img-horizontal',
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/events/parties/jadeandclover-4.avif', 
    orientation: 'img-horizontal',
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/events/parties/jadeandclover-3.avif', 
    orientation: 'img-horizontal',
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/events/parties/jadeandclover-1.avif', 
    orientation: 'img-horizontal',
  },
]

const Parties = () => {
  const data = {siteName: 'parties & events'}

  return (
    <div>
      <Header data={data}/>

      <Gallery 
        title = 'ivory peacock'
        subtitle = {
          <>
            flatiron, manhattan • 2025<br/><br/>
          </>}
        images = {image_ivorypeacock}
        top_spacer = {false}
        end_spacer = {"medium"}
      />

      <Gallery 
        title = 'jade & clover'
        subtitle = {
          <>
            lower east side, manhattan • 2024<br/>
          </>}
        images = {iamge_jadeclover}
        top_spacer = {false}
        end_spacer = {"xl"}
      />
     
      <ScrollKey />

      <NavBar/>
    </ div>
  )
}

export default Parties