import '../css/index.css'
import '../css/galleries.css'
import ScrollKey from './Scroll.jsx'


const Gallery = ({title, subtitle, images}) => {
  return (
    <div>
      {/* Primary gallery code */}
      <div className="gallery-container">
        <h4 className="gallery-title">{title}</h4>
        <h5 className="gallery-subtitle">{subtitle}</h5>
      <br></br>
      </div>
      <div className="flex flex-row gallery-container display-gallery gap-y-8">
          {images.map((image, index) => (
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
    </ div>
  )
}

export default Gallery