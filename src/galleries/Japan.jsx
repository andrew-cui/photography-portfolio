import '../css/index.css'
import '../css/galleries.css'
import NavBar from '../NavBar.jsx'
import Header from '../Header.jsx'
import ScrollKey from '../Scroll.jsx'

// Homepage - destination URL /
const images = [
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/travel/japan/japan4.jpg', 
    orientation: 'img-vertical',
    caption: 'asakusa temple, tokyo',
    camera: 'sony a7iii / various focal lengths, digital'
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/travel/japan/japan7.jpg', 
    orientation: 'img-vertical',
    caption: 'dotonbori, osaka',
    camera: ''
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/travel/japan/japan5.jpg', 
    orientation: 'img-vertical',
    caption: "tasting tokyo's market street foods",
    camera: ''
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/travel/japan/japan3.jpg', 
    orientation: 'img-vertical',
    caption: 'outside kyoto',
    camera: ''
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/travel/japan/japan9.jpg', 
    orientation: 'img-vertical',
    caption: 'experiencing kimonos in ninenzaka, kyoto',
    camera: ''
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/travel/japan/japan1.jpg', 
    orientation: 'img-vertical',
    caption: 'yoyogi park, tokyo',
    camera: ''
  },
  {
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/travel/japan/japan14.jpg', 
    orientation: 'img-vertical',
    caption: 'say cheese - deer in nara!',
    camera: ''
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/travel/japan/japan2.jpg', 
    orientation: 'img-vertical',
    caption: 'kinkaku-ji - the golden palace',
    camera: ''
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/travel/japan/japan10.jpg', 
    orientation: 'img-vertical',
    caption: 'lost in bamboo / arashiyama forest',
    camera: ''
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/travel/japan/japan16.jpg', 
    orientation: 'img-vertical',
    caption: 'fish',
    camera: ''
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/travel/japan/japan15.jpg', 
    orientation: 'img-vertical',
    caption: 'katsu',
    camera: ''
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/travel/japan/japan12.jpg', 
    orientation: 'img-vertical',
    caption: 'osaka castle',
    camera: ''
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/travel/japan/japan13.jpg', 
    orientation: 'img-vertical',
    caption: 'osaka castle (from the other side)',
    camera: ''
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/travel/japan/japan17.jpg', 
    orientation: 'img-vertical',
    caption: 'unagi & tamago',
    camera: ''
  },

]


const Marrakech = () => {
  const data = {siteName: 'japan'}
  return (
    <div>
      <Header data={data}/>

      {/* Primary gallery code */}
      <div className="gallery-container">
        <h4 className="gallery-title">september 2023</h4>
        <h5 className="gallery-subtitle">two weeks in tokyo, kyoto & osaka</h5>
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