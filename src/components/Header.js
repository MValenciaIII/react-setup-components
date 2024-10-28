import React from 'react'


function Header() {


    return(
        <div className="row headerBackground">
            <Logo />
            <Nav />
        </div>
    )
}

function Logo() {

    return(
        <div className="col-6 logoWords">
            <h1>Top 5 Movie List</h1>
        </div>
    )
}

function Nav() {

    return(
        <div className="col-6">
            <ul className='list-group list-group-horizontal'>
                <li className="list-group-item">Lorem</li>
                <li className="list-group-item">About</li>
                <li className="list-group-item">Content</li>
            </ul>
        </div>
    )
}

export default Header;