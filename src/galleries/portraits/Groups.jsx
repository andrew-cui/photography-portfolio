import '../../css/index.css'
import NavBar from '../../components/NavBar.jsx'
import Header from '../../components/Header.jsx'
import Gallery from '../../components/Gallery.jsx'

// Homepage - destination URL /
const image_json = [
    { 
        src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/portraits/upenn-akdphi/akdphi1.avif', 
        orientation: 'img-horizontal',
        caption: 'full group',
        location: 'dilworth park & city hall, philadelphia',
        camera: 'sony a9 / 85mm',
    },
    { 
      src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/portraits/upenn-akdphi/akdphi2.avif', 
      orientation: 'img-horizontal',
    },
    { 
      src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/portraits/upenn-akdphi/akdphi3.avif', 
      orientation: 'img-horizontal',
    },
    { 
      src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/portraits/upenn-akdphi/akdphi4.avif', 
      orientation: 'img-horizontal',
    },
    { 
      src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/portraits/upenn-akdphi/akdphi5.avif', 
      orientation: 'img-horizontal',
    },
    { 
      src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/portraits/upenn-akdphi/akdphi6.avif', 
      orientation: 'img-horizontal',
    },
    { 
      src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/portraits/upenn-akdphi/akdphi7.avif', 
      orientation: 'img-horizontal',
    },
  ]

const Groups = () => {
  const data = {siteName: 'group shoots!'}

  return (
    <div>
      <Header data={data}/>

      <Gallery 
        title = 'upenn akdphi'
        subtitle = {"philadelphia • fall 2019 sisterhood shoot"}
        images = {image_json}
      />

      <NavBar/>
    </ div>
  )
}

export default Groups