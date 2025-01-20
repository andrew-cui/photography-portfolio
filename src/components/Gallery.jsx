import '../css/index.css'
import '../css/galleries.css'
import ScrollKey from './Scroll.jsx'
import { SM_Spacer, MD_Spacer, LG_Spacer, XL_Spacer } from './Spacers.jsx'


const Gallery = ({title, subtitle, images, top_spacer = "medium", end_spacer = "xl"}) => {
  return (
    <div>
      {/* Primary gallery code */}
      <div className="gallery-container">
        <h4 className="gallery-title">{title}</h4>
        <h5 className="gallery-subtitle">{subtitle}</h5>
      </div>
      {top_spacer && (top_spacer == 'small') && <SM_Spacer/>}
      {top_spacer && (top_spacer == 'medium') && <MD_Spacer/>}
      {top_spacer && (top_spacer == 'large') && <LG_Spacer/>}
      <div className="flex flex-row gallery-container display-gallery gap-y-8">
          {images.map((image, index) => (
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
      {end_spacer && <SM_Spacer/>}
      {end_spacer && (end_spacer == 'medium') && <MD_Spacer/>}
      {end_spacer && (end_spacer == 'large') && <LG_Spacer/>}
      {end_spacer && (end_spacer == 'xl') && <XL_Spacer/>}
      <ScrollKey />
    </ div>
  )
}

export default Gallery