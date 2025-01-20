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
        <Link to={'/'} className="header-link"><div className="site-text">
            <h2>{data.siteName}</h2>
        </div></Link>
        <Link to={'/'} className="header-link"><div className="header-text px-5 my-4">
            <h1>andrew cui</h1>
            <p>photographer &nbsp; | &nbsp; nyc</p>
        </div></Link>
      </div>
    </div>
  )
}

export default Header

