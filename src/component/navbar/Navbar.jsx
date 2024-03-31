import {Link, NavLink} from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
    return(
        <>
            <div id="Parent">
                <div id="child">
                    <h1>logo</h1>
                    <div id="navdiv">
                        <Link to ={"./"}><div>Home</div></Link>
                        <Link to = {"./about"}><div>About</div></Link>
                       <Link to = {"./services"}> <div>Services</div></Link>
                       <Link to={"./contact"}> <div>Contact</div></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar