import './css/index.css'
import './css/header.css'

// Header bar
const Header = ({data}) => {
  return (
    <div className="flex-container">
        <div className="site-text">
            <h2>{data.siteName}</h2>
        </div>
        <div className="header-text px-5 my-4">
            <h1>andrew cui</h1>
            <p>photographer &nbsp; | &nbsp; nyc</p>
        </div>
    </div>
  )
}

export default Header

