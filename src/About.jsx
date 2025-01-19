import './css/index.css'
import NavBar from './components/NavBar.jsx'

// About - destination URL /me
const About = () => {
  return (
    <div>
        {/* <div className="hero absolute text-center"><h1>Andrew Cui</h1></div> */}
        <div className="app text-center my-4 py-6">
          <h2>About Me!</h2>
        </div>

        <NavBar/>
      </ div>
  )
}

export default About
