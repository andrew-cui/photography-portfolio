import '../css/index.css'
import '../css/galleries.css'
import NavBar from '../components/NavBar.jsx'
import Header from '../components/Header.jsx'
import Gallery from '../components/Gallery.jsx'
import ScrollKey from '../components/Scroll.jsx'

// Homepage - destination URL /
const image_zoha_nabil = [
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/portraits/couples-z%2Bn1.avif', 
    orientation: 'img-horizontal',
    caption: '',
    location: 'seaport, fidi, nyc',
    camera: 'sony a7iii / 70-180mm'
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/portraits/couples-z%2Bn2.avif', 
    orientation: 'img-horizontal',
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/portraits/couples-z%2Bn3.avif', 
    orientation: 'img-horizontal',
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/portraits/couples-z%2Bn4.avif', 
    orientation: 'img-horizontal',
  },
]

const image_may_matt = [
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/portraits/couples-m%2Bm1.avif', 
    orientation: 'img-horizontal',
    location: 'central park, nyc',
    camera: 'sony a7iii / 70-180mm'
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/portraits/couples-m%2Bm2.avif', 
    orientation: 'img-horizontal',
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/portraits/couples-m%2Bm3.avif', 
    orientation: 'img-vertical',
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/portraits/couples-m%2Bm4.avif', 
    orientation: 'img-horizontal',
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/portraits/couples-m%2Bm5.avif', 
    orientation: 'img-vertical',
  },
  ]

const Couples = () => {
  const data = {siteName: 'love'}

  return (
    <div>
      <Header data={data}/>

      <div className="gallery-container">
        <h4 className="gallery-title">zoha & nabil</h4>
        <h5 className="gallery-subtitle">seaport • december 2023</h5>
      {/* <br></br> */}
      </div>

      {/* first image gallery */}
      <div className="flex flex-row gallery-container display-gallery gap-y-8" style={{marginBottom: '5em'}}>
          {image_zoha_nabil.map((image, index) => (
            <div key={index} className={`gallery-image-wrapper ${image.orientation}`} >
              <img src={image.src} className={`gallery-image py-1`} loading="lazy"></img>
              <div className="">
                <p className="flex-1 gallery-caption">{image.caption}</p>
                {image.location && (image.location != "") &&
                  <p className="flex-1 text-left gallery-caption-location">{image.location}</p>
                }
                {image.camera && (image.camera != "") &&
                  <p className="flex-1 text-left gallery-caption-meta">{image.camera}</p>
                }
              </div>
            </div>
          ))}
      </div>

    {/* second image gallery */}
      <div className="gallery-container">
        <h4 className="gallery-title">may & matt</h4>
        <h5 className="gallery-subtitle">central park • november 2022</h5>
      {/* <br></br> */}
      </div>
      <div className="flex flex-row gallery-container display-gallery gap-y-8">
          {image_may_matt.map((image, index) => (
            <div key={index} className={`gallery-image-wrapper ${image.orientation}`} >
              <img src={image.src} className={`gallery-image py-1`} loading="lazy"></img>
              <div className="">
                <p className="flex-1 gallery-caption">{image.caption}</p>
                {image.location && (image.location != "") &&
                  <p className="flex-1 text-left gallery-caption-location">{image.location}</p>
                }
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

export default Couples