import '../../css/index.css'
import NavBar from '../../components/NavBar.jsx'
import Header from '../../components/Header.jsx'
import Gallery from '../../components/Gallery.jsx'

// Homepage - destination URL /
const image_json = [
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/travel/alps/neuschwanstein.avif', 
    orientation: 'img-horizontal',
    caption: 'neuschwanstein castle from marienbrucke',
    camera: 'sony a7iii / 85mm / composite',
    location: 'füssen, germany 🇩🇪'
  },
]


const Shows = () => {
  const data = {siteName: 'alps'}
  return (
    <div>
      <Header data={data}/>

      <Gallery 
        title = 'swiss, austria, slovenia, germany - 2019, 2022, 2023'
        subtitle = 'outtakes from solo trip, couples trip & family trip across the years'
        images = {image_json}
      />

      <NavBar/>
    </ div>
  )
}

export default Shows