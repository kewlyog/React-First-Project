import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">{props.title}</a>
                <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                    <input onClick={props.toggleMode} className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault"> {props.btnText} </label>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" href="/about">{props.aboutUs}</a>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutUs: PropTypes.string
}

Navbar.defaultProps = {
    title: 'Set title here'
}


// import React from 'react'
// import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';

// export default function Navbar(props) {
//     return (
//         <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
//             <div className="container-fluid">
//                 <Link className="navbar-brand" to="/">{props.title}</Link>
//                 <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
//                     <input onClick={props.toggleMode} className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
//                     <label className="form-check-label" htmlFor="flexSwitchCheckDefault"> {props.btnText} </label>
//                 </div>
//                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className="collapse navbar-collapse" id="navbarNavDropdown">
//                     <ul className="navbar-nav">
//                         <li className="nav-item">
//                             <Link className="nav-link active" aria-current="page" to="/">Home</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link" to="/about">{props.aboutUs}</Link>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </nav>
//     )
// }

// Navbar.propTypes = {
//     title: PropTypes.string.isRequired,
//     aboutUs: PropTypes.string
// }

// Navbar.defaultProps = {
//     title: 'Set title here'
// }