import './css/index.css'
import './css/galleries.css'
import {
  Link
} from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import Header from './components/Header.jsx'
import imageData from './assets/home_images.json'


// Homepage - destination URL /
const Home = () => {
  const data = {siteName: ''}
  const travelPhotos = imageData[0]
  const portraitPhotos = imageData[1]
  const eventPhotos = imageData[2]
  
  return (
    <div>
        <Header data={data}/>

        {/* Image gallery - 3 columns */}
        <div className="flex flex-wrap image-gallery"> 
          {/* Travel */}
          <div className="flex-column image-gallery-col3">
            <h3 className="image-gallery-header">landscape & travel</h3>
            {travelPhotos.map((image, index) => (
              <div key={index} className="image-container" style={{height: '240px'}}>
                <Link to={image.destination}>
                  <img src={image.src} className={`hover-image`} loading="lazy"/>
                  <div className="hover-text">
                    <h3>{image.title}</h3>
                    <p>{image.caption}</p>
                  </div>
                </Link>
              </div>
            ))}
            <p>+ more in the links!</p>
          </div>

          {/* Portraits */}
          <div className="flex-column image-gallery-col3">
            <h3 className="image-gallery-header">portraits</h3>
            {portraitPhotos.map((image, index) => (
              <div key={index} className="image-container">
                <Link to={image.destination}>
                  <img src={image.src} className={`hover-image`} />
                  <div className="hover-text">
                    <h3>{image.title}</h3>
                    <p>{image.caption}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Events */}
          <div className="flex-column image-gallery-col3">
            <h3 className="image-gallery-header">events</h3>
            {eventPhotos.map((image, index) => (
              <div key={index} className="image-container">
                <Link to={image.destination}>
                  <img src={image.src} className={`hover-image`}/>
                  <div className="hover-text">
                    <h3>{image.title}</h3>
                    <p>{image.caption}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <NavBar />
      </ div>
  )
}

export default Home
