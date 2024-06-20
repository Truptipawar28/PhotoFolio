import { Link } from 'react-router-dom'
import './App.css'

const Navbar = () => {

    return (
        <>
            <header className='header_nav'>
                <nav className="navbar bg-black navbar-expand-lg ">
                    <div className="container">
                        <Link to="/" className="nav-brand">
                        <i className="fa-solid fa-camera pe-3"></i>
                        <span className='logo text-white'>PhotoFolio</span>
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#header_nav" aria-controls="header_nav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className=""><i className="fa-solid fa-bars text-white" id="menu-icon"></i></span>
                        </button>
                        <div className="collapse navbar-collapse" id="header_nav">
                            <ul className="navbar-nav justify-content-center">
                                <li className="nav-item" >
                                    <Link className='nav-link text-white' to='/'>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className='nav-link text-white' to='/about'>About</Link> </li>
                                <li className="nav-item">
                                    <Link className='nav-link text-white' to='/services'>Services</Link> </li>
                                <li className="nav-item">
                                    <Link className='nav-link text-white' to='/gallery'>Gallery</Link> </li>
                                <li className="nav-item">
                                    <Link className='nav-link text-white' to='/contact'>Contact</Link></li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar