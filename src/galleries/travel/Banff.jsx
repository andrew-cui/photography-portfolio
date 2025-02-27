import '../../css/index.css'
import NavBar from '../../components/NavBar.jsx'
import Header from '../../components/Header.jsx'
import Gallery from '../../components/Gallery.jsx'

// Homepage - destination URL /
const image_json = [
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/travel/banff/morainelake.avif', 
    orientation: 'img-horizontal',
    caption: 'moraine lake at sunrise',
    camera: 'sony a7iii / 17mm, 6 shot composite',
    location: 'moraine lake'
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/travel/banff/larchvalley.avif', 
    orientation: 'img-vertical',
    caption: "arriving just in time for the larches to bloom",
    camera: '70-180m',
    location: 'larch valley trail'
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/travel/banff/minnewankawildlife.avif', 
    orientation: 'img-horizontal',
    caption: 'wildlife in the park!',
    location: 'lake minnewanka'
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/travel/banff/morainelakecanoeclub.avif', 
    orientation: 'img-horizontal',
    caption: 'coming down from the larches to see everyone canoeing on the lake',
    location: 'moraine lake'
  },
  
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/travel/banff/threesisters.avif', 
    orientation: 'img-horizontal',
    caption: 'three sisters hike',
    location: 'canmore'
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/travel/banff/canmore.avif', 
    orientation: 'img-vertical',
    location: 'canmore',
  },

]


const Banff = () => {
  const data = {siteName: 'banff national park, canada 🇨🇦'}
  return (
    <div>
      <Header data={data}/>

      <Gallery 
        title = 'september 2022'
        subtitle = 'hiking in banff ft. 3am drives to moraine lake'
        images = {image_json}
      />

      <NavBar/>
    </ div>
  )
}

export default Banff