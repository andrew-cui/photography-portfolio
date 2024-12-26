import './css/index.css'
import './css/galleries.css'
import NavBar from './NavBar.jsx'
import Header from './Header.jsx'

// Homepage - destination URL /
// const images = [
//   { name: './images/europe1.jpg', orientation: 'img-vertical' },
//   { name: './images/europe2.jpg', orientation: 'img-vertical' },
//   { name: './images/europe3.jpg', orientation: 'img-vertical' },
//   { name: './images/europe4.jpg', orientation: 'img-vertical' },
//   { name: './images/europe5.jpg', orientation: 'img-vertical' },
//   { name: './images/europe6.jpg', orientation: 'img-vertical' },
//   { name: './images/europe7.jpg', orientation: 'img-vertical' },
//   { name: './images/europe8.jpg', orientation: 'img-vertical' },
//   { name: './images/europe9.jpg', orientation: 'img-vertical' },
//   { name: './images/europe10.jpg', orientation: 'img-vertical' },
//   { name: './images/europe11.jpg', orientation: 'img-vertical' },
//   { name: './images/europe12.jpg', orientation: 'img-vertical' },
//   { name: './images/europe13.jpg', orientation: 'img-vertical' },
// ]


const Home = () => {
  const data = {siteName: ''}
  return (
    <div>
        <Header data={data}/>
        <div className="flex flex-row flex-wrap">
          {/* {images.map((item, index) => (
              <img key={index} src={item.name} className={`gallery-image ${item.orientation}`}/>
          ))} */}
        </div>
        <NavBar/>
      </ div>
  )
}

export default Home
