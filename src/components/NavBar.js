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
            document.body.style.color='white';
        }else{
            setMode('white');
            setTextColor('black');
            setTextMode('Enable DarkMode');
            document.body.style.backgroundColor='white';
            document.body.style.color='black';  
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
                <a className="nav-link active" aria-current="page" href="/" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{color:(textColor)}}>About</a>
                </li>
            </ul>
            <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={changeMode}/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{color:(textColor)}}>{textMode}</label>
        </div>
        </div>
        </div>
        </nav>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content" style={{backgroundColor:`${mode}`}}>
                <div class="modal-header" style={{backgroundColor:`${mode}`}}>
                    <h1 class="modal-title fs-5" id="exampleModalLabel" style={{color:(textColor)}}>About Us</h1>
                    {/* <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
                </div>
                <div class="modal-body" style={{color:(textColor), backgroundColor:`${mode}`}}>
                In this project I used React with the help of React I created a project and the topics
                used were is Components, props, and State(hooks) some parts of the router were not used 
                because have to make a static without another page cause item gave us a problem in git 
                deployment so.....
                <br/>
                    In this project, just we can manipulate our text.<br/>
                    <strong><em>Happy to see you!</em></strong>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    {/* <button type="button" class="btn btn-primary">Save changes</button> */}
                </div>
                </div>
            </div>
            </div>
    </div>
  )
}

NavBar.propTypes={
    title:PropTypes.string
}