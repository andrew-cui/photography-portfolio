import '../../css/index.css'
import NavBar from '../../components/NavBar.jsx'
import Header from '../../components/Header.jsx'
import Gallery from '../../components/Gallery.jsx'
import ScrollKey from '../../components/Scroll.jsx'

// Homepage - destination URL /
const image_json_solo = [
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/grads/grad-lk1.avif', 
    orientation: 'img-vertical',
    caption: 'lucia',
    location: 'penn • 2020',
    camera: 'sony a7iii / 70-180mm'
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/grads/grad-kl.avif', 
    orientation: 'img-vertical',
    caption: 'katherine',
    location: 'penn • 2020'
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/grads/grad-rp.avif', 
    orientation: 'img-vertical',
    caption: 'rupa',
    location: 'penn • 2021'
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/grads/grad-ec.avif', 
    orientation: 'img-vertical',
    caption: 'emily',
    location: 'cornell • 2019'
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/grads/grad-ch.avif', 
    orientation: 'img-vertical',
    caption: 'carol',
    location: 'penn • 2020'
  },
  { 
    src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/grads/grad-jl.avif', 
    orientation: 'img-vertical',
    caption: 'janine',
    location: 'penn • 2021'
  },
]

const image_json_groups = [
    { 
        src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/grads/grad-akpsi1.avif', 
        orientation: 'img-horizontal',
        caption: 'upenn akpsi',
        location: 'penn • 2020'
    },
    { 
        src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/grads/grad-akpsi2.avif', 
        orientation: 'img-horizontal',
        // caption: 'upenn akpsi',
        // location: 'penn • 2020'
    },
    { 
        src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/grads/grad-lk6.avif', 
        orientation: 'img-horizontal',
        location: 'penn • 2020'
    },
    { 
        src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/grads/grad-lk5.avif', 
        orientation: 'img-horizontal',
        // location: 'penn • 2020'
    },
    { 
        src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/grads/grad-lk3.avif', 
        orientation: 'img-horizontal',
        // location: 'penn • 2020'
    },
    { 
        src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/grads/grad-lk4.avif', 
        orientation: 'img-horizontal',
        // location: 'penn • 2020'
    },
    { 
        src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/grads/grad-kw.avif', 
        orientation: 'img-horizontal',
        caption: 'kate & family',
        location: 'penn • 2020'
    },
    { 
        src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/grads/grad-ywh.avif', 
        orientation: 'img-horizontal',
        caption: 'yunhee, helen & wing',
        location: 'penn • 2020'
    },
    { 
        src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/grads/grad-padt2.avif', 
        orientation: 'img-horizontal',
        caption: 'padt seniors',
        location: 'penn • 2020'
    },
    { 
        src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/grads/grad-padt3.avif', 
        orientation: 'img-vertical',
        // caption: 'padt seniors',
        // location: 'penn • 2020'
    },
    { 
        src: 'https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/grads/grad-padt1.avif', 
        orientation: 'img-horizontal',
        // caption: 'padt seniors',
        // location: 'penn • 2020'
    },
  ]

const Graduation = () => {
  const data = {siteName: 'grad photos'}

  return (
    <div>
      <Header data={data}/>

      <Gallery 
        title = {
          <>
            solo shoots
          </>
        }
        subtitle = {
          <>
            classes of 2019-2021 | primarily shot in 2022
          </>}
        images = {image_json_solo}
        top_spacer = {"small"}
        end_spacer = {"large"}
      />

      <Gallery 
        title = {
          <>
            groups
          </>
        }
        subtitle = {
          <>
            classes of 2019-2021 | primarily shot in 2022
          </>}
        images = {image_json_groups}
        top_spacer = {false}
        end_spacer = {"xl"}
      />

      <ScrollKey scrollPercentage={75} />
      <NavBar/>
    </ div>
  )
}

export default Graduation