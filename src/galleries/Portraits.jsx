import '../css/index.css'
import '../css/galleries.css'
import NavBar from '../components/NavBar.jsx'
import Header from '../components/Header.jsx'
import Gallery from '../components/Gallery.jsx'
import ScrollKey from '../components/Scroll.jsx'

// Homepage - destination URL /
const image_json = [
    { 
        src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/portraits/portraits-tw.avif', 
        orientation: 'img-vertical',
        caption: 'tiff • author photos: tiffanyjwang.com',
        location: 'little island, nyc',
        camera: 'sony a7iii / 35mm',
    },
    { 
      src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/portraits/portraits-yh.avif', 
      orientation: 'img-vertical',
      caption: 'yunhee • changing colors in williamsburg',
      location: 'williamsburg, nyc',
      camera: 'sony a7iii / 70-180mm',
    },
    { 
      src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/portraits/portraits-ms.avif', 
      orientation: 'img-vertical',
      caption: 'malu • lilac festival',
      location: 'rochester, ny',
      camera: 'sony a7iii / 50mm',
    },
    { 
      src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/portraits/portraits-kc.avif', 
      orientation: 'img-vertical',
      caption: 'karina • desserts @ aubaine selfridges',
      location: 'london, uk',
      camera: 'sony a7ii / 50mm',
    },
    { 
      src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/portraits/portraits-yp.avif', 
      orientation: 'img-vertical',
      caption: 'younghu • prof headshots',
      location: 'upenn',
    },
    { 
      src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/portraits/portraits-kl.avif', 
      orientation: 'img-vertical',
      caption: 'katherine • prof headshots',
      location: 'upenn',
    },
    { 
      src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/portraits/portraits-vs.avif', 
      orientation: 'img-vertical',
      caption: 'victoria • prof headshots',
      location: 'seaport, fidi, nyc',
    },
  ]

const Portraits = () => {
  const data = {siteName: 'solo portraits'}

  return (
    <div>
      <Header data={data}/>

      <Gallery 
        title = ''
        subtitle = {""}
        images = {image_json}
      />

      <NavBar/>
    </ div>
  )
}

export default Portraits