import '../css/index.css'
import '../css/galleries.css'
import NavBar from '../NavBar.jsx'
import Header from '../Header.jsx'
import ScrollKey from '../Scroll.jsx'

// Homepage - destination URL /
const images = [
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/travel/como/como-villabalbianello2.jpg', 
    orientation: 'img-vertical',
    caption: 'villa balbianello',
    camera: 'sony a7iii / 35mm'
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/travel/como/como-villabalbianello1.jpg', 
    orientation: 'img-vertical',
    caption: 'viewpoint from attack of the clones',
    camera: 'sony a7iii / 35mm'
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/travel/como/como1.jpg', 
    orientation: 'img-vertical',
    caption: 'villa monastero',
    camera: ''
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/travel/como/como2.jpg', 
    orientation: 'img-vertical',
    caption: 'gardens of villa melzi',
    camera: ''
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/travel/como/como3.jpg', 
    orientation: 'img-vertical',
    caption: 'sailboats on the lake',
    camera: ''
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/travel/como/como-gelato.jpg', 
    orientation: 'img-vertical',
    caption: 'the best gelato of the trip: lulivobysedar.com',
    camera: ''
  },
]


const Como = () => {
  const data = {siteName: 'lake como, italy'}
  return (
    <div>
      <Header data={data}/>

      {/* Primary gallery code */}
      <div className="gallery-container">
        <h4 className="gallery-title">june 2024</h4>
        <h5 className="gallery-subtitle">trying to recreate <i>attack of the clones</i>. bellagio, varenna & menaggio</h5>
      <br></br>
      </div>
      <div className="flex flex-row gallery-container display-gallery gap-y-8">
          {images.map((image, index) => (
            <div key={index} className="gallery-image-wrapper">
              <img src={image.src} className={`gallery-image py-1 ${image.orientation}`}></img>
              <div className="">
                {/* flex flex-row align-items-stretch */}
                <p className="flex-1 gallery-caption">{image.caption}</p>
                {image.camera && (image.camera != "") &&
                  <p className="flex-1 text-left gallery-caption-meta">{image.camera}</p>
                }
              </div>
            </div>
          ))}
      </div>
      <ScrollKey />
      <NavBar/>
    </ div>
  )
}

export default Como