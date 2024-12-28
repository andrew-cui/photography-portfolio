import '../css/index.css'
import '../css/galleries.css'
import NavBar from '../NavBar.jsx'
import Header from '../Header.jsx'
import ScrollKey from '../Scroll.jsx'

// Homepage - destination URL /
const images = [
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/travel/marrakech/marrakech-koutoubia.jpg', 
    orientation: 'img-vertical',
    caption: 'villa balbianello',
    camera: 'koutoubia mosque'
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/travel/marrakech/marrakech-jardinsecret.jpg', 
    orientation: 'img-vertical',
    caption: 'dans le jardin secret',
    camera: ''
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/travel/marrakech/marrakech-souk2.jpg', 
    orientation: 'img-vertical',
    caption: 'exploring the souks of the medina',
    camera: ''
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/travel/marrakech/marrakech-souk1.jpg', 
    orientation: 'img-vertical',
    caption: 'silks for sale',
    camera: 'sony a7iii / 17mm'
  },
  
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/travel/marrakech/marrakech-elbadi.jpg', 
    orientation: 'img-vertical',
    caption: 'el badi palace',
    camera: ''
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/travel/marrakech/marrakech-bahia.jpg', 
    orientation: 'img-vertical',
    caption: 'bahia palace - surprisingly empty shot!',
    camera: ''
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/travel/marrakech/marrakech-ysl.jpg', 
    orientation: 'img-vertical',
    caption: 'jardin majorelle of yves st laurent',
    camera: ''
  },
]


const Marrakech = () => {
  const data = {siteName: 'marrakech, morocco'}
  return (
    <div>
      <Header data={data}/>

      {/* Primary gallery code */}
      <div className="gallery-container">
        <h4 className="gallery-title">june 2024</h4>
        <h5 className="gallery-subtitle">couples trip staying in the marrakech medina (i have the best riad to recommend!)</h5>
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

export default Marrakech