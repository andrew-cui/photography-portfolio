import '../../css/index.css'
import NavBar from '../../components/NavBar.jsx'
import Header from '../../components/Header.jsx'
import Gallery from '../../components/Gallery.jsx'

// Homepage - destination URL /
const image_json = [
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/events/upenn-pwh/pwh1.avif', 
    orientation: 'img-horizontal',
    caption: 'ambassador susan rice & upenn provost wendell pritchett',
    camera: 'sony a7ii & a7iii / 70-200mm & 85mm',
    location: 'perry world house, upenn'
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/events/upenn-pwh/pwh2.avif', 
    orientation: 'img-vertical',
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/events/upenn-pwh/pwh3.avif', 
    orientation: 'img-vertical',
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/events/upenn-pwh/pwh4.avif', 
    orientation: 'img-vertical',
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/events/upenn-pwh/pwh5.avif', 
    orientation: 'img-vertical',
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/events/upenn-pwh/pwh6.avif', 
    orientation: 'img-vertical',
    caption: 'pwh regularly hosts events discussing foreign policy & global affairs for students',
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/events/upenn-pwh/pwh7.avif', 
    orientation: 'img-vertical',
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/events/upenn-pwh/pwh8.avif', 
    orientation: 'img-vertical',
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/events/upenn-pwh/pwh9.avif', 
    orientation: 'img-vertical',
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/events/upenn-pwh/pwh10.avif', 
    orientation: 'img-horizontal',
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/events/upenn-pwh/pwh11.avif', 
    orientation: 'img-horizontal',
  },
  

]


const Academia = () => {
  const data = {siteName: 'academic events'}
  return (
    <div>
      <Header data={data}/>

      <Gallery 
        title = 'upenn • events at the perry world house'
        subtitle = '2019-2020 • covered multiple events (and even got to meet ambassador susan rice) for the perry world house'
        images = {image_json}
      />

      <NavBar/>
    </ div>
  )
}

export default Academia