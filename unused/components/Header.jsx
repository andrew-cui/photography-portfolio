import '../css/index.css'
import '../css/header.css'
import {
  Link
} from 'react-router-dom'

// Header bar
const Header = ({data}) => {
  return (
    <div className="header">
      <div className="flex-container">
        <div className="site-text"><Link to={'/'} className="header-link">
            <h2>{data.siteName}</h2>
        </Link></div>
        <div className="header-text px-5 my-4">
          <Link to={'/'} className="header-link">
              <h1>andrew cui</h1>
              <p>photographer &nbsp; | &nbsp; nyc</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header

