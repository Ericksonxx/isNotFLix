import React, { useEffect, useState }from 'react';
import './Nav.css';

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return() => {
            window.removeEventListener("scroll");
        }
    }, []);

    return(
       <div className={`nav ${show && "nav__black"}`}>
            <img 
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"
        alt="Netflix" />;

        <img 
        className="nav__avatar"
        src="https://i.pinimg.com/originals/34/62/d2/3462d27440aa255b1c314ff16f4032b4.png"
        alt="user" />
       </div>

    )
}

export default Nav;