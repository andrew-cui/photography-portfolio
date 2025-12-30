import '../../css/index.css'
import NavBar from '../../components/NavBar.jsx'
import Header from '../../components/Header.jsx'
import Gallery from '../../components/Gallery.jsx'

// Homepage - destination URL /
const image_json = [
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/travel/japan/japan4.avif', 
    orientation: 'img-vertical',
    caption: 'asakusa temple',
    camera: 'sony a7iii / various focal, digital',
    location: 'tokyo',
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/travel/japan/japan7.avif', 
    orientation: 'img-vertical',
    caption: 'dotonbori',
    location: 'osaka',
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/travel/japan/japan5.avif', 
    orientation: 'img-vertical',
    caption: "street foods",
    location: 'tokyo',
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/travel/japan/japan3.avif', 
    orientation: 'img-vertical',
    caption: 'kimonos near arashiyama',
    location: 'kyoto',
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/travel/japan/japan9.avif', 
    orientation: 'img-vertical',
    caption: 'experiencing kimonos in ninenzaka',
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/travel/japan/japan1.avif', 
    orientation: 'img-horizontal',
    caption: 'yoyogi park',
    location: 'tokyo',
  },
  {
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/travel/japan/japan14.avif', 
    orientation: 'img-vertical',
    caption: 'say cheese - deer!',
    location: 'nara',
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/travel/japan/japan2.avif', 
    orientation: 'img-horizontal',
    caption: 'kinkaku-ji - the golden palace',
    location: 'tokyo',
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/travel/japan/japan10.avif', 
    orientation: 'img-horizontal',
    caption: 'lost in bamboo / arashiyama forest',
    location: 'kyoto',
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/travel/japan/japan16.avif', 
    orientation: 'img-horizontal',
    caption: 'fish',
    location: 'tokyo',
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/travel/japan/japan15.avif', 
    orientation: 'img-vertical',
    caption: 'katsu',
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/travel/japan/japan12.avif', 
    orientation: 'img-horizontal',
    caption: 'osaka castle',
    location: 'osaka',
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/travel/japan/japan13.avif', 
    orientation: 'img-vertical',
    caption: 'osaka castle (from the other side)',
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/travel/japan/japan17.avif', 
    orientation: 'img-vertical',
    caption: 'unagi & tamago',
  },

]


const Japan = () => {
  const data = {siteName: 'japan 🇯🇵'}
  return (
    <div>
      <Header data={data}/>

      <Gallery 
        title = 'september 2023'
        subtitle = 'two weeks in tokyo, kyoto & osaka'
        images = {image_json}
      />

      <NavBar/>
    </ div>
  )
}

export default Japan

{/* <div className="flex flex-row gallery-container display-gallery gap-y-8">
{image_json.map((image, index) => (
  <div key={index} className="gallery-image-wrapper">
    <img src={image.src} className={`gallery-image py-1 ${image.orientation}`} loading="lazy"></img>
    <div className="">
      <p className="flex-1 gallery-caption">{image.caption}</p>
      {image.camera && (image.camera != "") &&
        <p className="flex-1 text-left gallery-caption-meta">{image.camera}</p>
      }
    </div>
  </div>
))}
</div> */}