import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function NavBar(props) {
    const [mode,setMode]=useState('white');
    const [textColor,setTextColor]=useState('black');
    const [textMode,setTextMode]=useState('Enable DarkMode');

    const changeMode = () =>{
        if(mode==='white'){
            setMode('#100125');
            setTextColor('white');
            setTextMode('Disable DarkMode');
            document.body.style.backgroundColor='#0d0e1c';
            document.body.style.color=textColor;
        }else{
            setMode('white');
            setTextColor('black');
            setTextMode('Enable DarkMode');
            document.body.style.backgroundColor='white';
            document.body.style.color=textColor;  
        }
    }
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary p-0">
        <div className="container-fluid " style={{backgroundColor:`${mode}`}}>
            <a className="navbar-brand" href="/" style={{color:(textColor)}}>{props.title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon "></span>
            </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/" style={{color:(textColor)}}>Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/" style={{color:(textColor)}}>About</a>
                </li>
            </ul>
            <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={changeMode}/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{color:(textColor)}}>{textMode}</label>
        </div>
        </div>
        </div>
        </nav>
    </div>
  )
}

NavBar.propTypes={
    title:PropTypes.string
}