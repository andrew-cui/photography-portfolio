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
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/travel/banff/banff-2025-assiniboine.avif', 
    orientation: 'img-vertical',
    caption: "mt. assiniboine",
    camera: '70-180m',
    location: 'banff sunrise resort'
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/travel/banff/banff-2025-northernlights-1.avif', 
    orientation: 'img-horizontal',
    caption: 'northern lights',
    camera: 'sony a7iii / 17mm',
    location: 'vermillion lakes'
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/travel/banff/banff-2025-northernlights-2.avif', 
    orientation: 'img-horizontal',
    caption: 'light painting',
    camera: 'sony a7iii / 17mm',
    location: 'vermillion lakes'
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
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/travel/banff/banff-2025-sunshine.avif', 
    orientation: 'img-horizontal',
    caption: 'skiing @ banff sunshine',
    location: 'banff sunshine resort'
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

// const image_json_2025 = [
//   { 
//     src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/travel/banff/banff-2025-northernlights-1.avif', 
//     orientation: 'img-horizontal',
//   },
// ]


const Banff = () => {
  const data = {siteName: "banff nat'l park, canada 🇨🇦"}
  return (
    <div>
      <Header data={data}/>

      <Gallery 
        title = 'march 2025 & september 2022'
        subtitle = 'hiking, skiing and aurora hunting in banff'
        images = {image_json}
      />

      <NavBar/>
    </ div>
  )
}

export default Banff