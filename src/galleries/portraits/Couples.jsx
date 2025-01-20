import '../../css/index.css'
import NavBar from '../../components/NavBar.jsx'
import Header from '../../components/Header.jsx'
import Gallery from '../../components/Gallery.jsx'
import ScrollKey from '../../components/Scroll.jsx'

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

      <Gallery 
        title = 'zoha & nabil'
        subtitle = {
          <>
            seaport • december 2023
          </>}
        images = {image_zoha_nabil}
        top_spacer = {false}
        end_spacer = {"medium"}
      />

      <Gallery 
        title = 'may & matt'
        subtitle = {
          <>
            central park • november 2022
          </>}
        images = {image_may_matt}
        top_spacer = {false}
      />
      <ScrollKey />

      <NavBar/>
    </ div>
  )
}

export default Couples