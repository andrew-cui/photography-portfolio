import '../css/index.css'
import '../css/galleries.css'
import NavBar from '../components/NavBar.jsx'
import Header from '../components/Header.jsx'
import Gallery from '../components/Gallery.jsx'
import ScrollKey from '../components/Scroll.jsx'

// Homepage - destination URL /
const image_json_solo = [
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/grads/grad-lk1.avif', 
    orientation: 'img-vertical',
    caption: 'lucia',
    camera: 'penn • 2020'
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/grads/grad-kl.avif', 
    orientation: 'img-vertical',
    caption: 'katherine',
    camera: 'penn • 2020'
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/grads/grad-rp.avif', 
    orientation: 'img-vertical',
    caption: 'rupa',
    camera: 'penn • 2021'
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/grads/grad-ch.avif', 
    orientation: 'img-vertical',
    caption: 'carol',
    camera: 'penn • 2020'
  },
]

const image_json_groups = [
    { 
        src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/grads/grad-akpsi1.avif', 
        orientation: 'img-vertical',
        caption: 'upenn akpsi',
        camera: 'penn • 2020'
    },
    { 
        src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/grads/grad-akpsi2.avif', 
        orientation: 'img-vertical',
        caption: 'upenn akpsi',
        camera: 'penn • 2020'
    },
    { 
        src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/grads/grad-lk6.avif', 
        orientation: 'img-vertical',
        caption: '',
        camera: 'penn • 2020'
    },
    { 
      src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/grads/grad-lk5.avif', 
      orientation: 'img-vertical',
      caption: '',
      camera: 'penn • 2020'
    },
    { 
        src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/grads/grad-lk3.avif', 
        orientation: 'img-vertical',
        caption: '',
        camera: 'penn • 2020'
    },
    { 
        src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/grads/grad-lk4.avif', 
        orientation: 'img-vertical',
        caption: '',
        camera: 'penn • 2020'
    },
    { 
        src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/grads/grad-kw.avif', 
        orientation: 'img-vertical',
        caption: '',
        camera: 'penn • 2020'
    },
    { 
        src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/grads/grad-ywh.avif', 
        orientation: 'img-vertical',
        caption: '',
        camera: 'penn • 2020'
    },
    { 
        src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/grads/grad-padt2.avif', 
        orientation: 'img-vertical',
        caption: 'upenn padt seniors',
        camera: 'penn • 2020'
    },
    { 
        src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/grads/grad-padt1.avif', 
        orientation: 'img-vertical',
        caption: 'upenn padt seniors',
        camera: 'penn • 2020'
    },
  ]

const Graduation = () => {
  const data = {siteName: 'grad photos'}

  return (
    <div>
      <Header data={data}/>

      <div className="gallery-container">
        <h4 className="gallery-title">solo shoots</h4>
        <h5 className="gallery-subtitle">classes of 2019-2021 | primarily shot in 2022</h5>
      <br></br>
      </div>

      {/* first image gallery */}
      <div className="flex flex-row gallery-container display-gallery gap-y-8" style={{marginBottom: '7.5em'}}>
          {image_json_solo.map((image, index) => (
            <div key={index} className={`gallery-image-wrapper ${image.orientation}`} >
              <img src={image.src} className={`gallery-image py-1`} loading="lazy"></img>
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

    {/* second image gallery */}
      <div className="gallery-container">
        <h4 className="gallery-title">groups</h4>
        <h5 className="gallery-subtitle">classes of 2019-2021 | primarily shot in 2022</h5>
      <br></br>
      </div>
      <div className="flex flex-row gallery-container display-gallery gap-y-8">
          {image_json_groups.map((image, index) => (
            <div key={index} className={`gallery-image-wrapper ${image.orientation}`} >
              <img src={image.src} className={`gallery-image py-1`} loading="lazy"></img>
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

export default Graduation