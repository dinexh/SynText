import './nav.css'
const Nav = () => {
    return ( 
        <nav>
            <div className="nav-in">
                <div className="nav-in-one">
                    <h1>Syntext</h1>
                </div>
                <div className="nav-in-two">
                    <p>Home</p>
                    <p>Chat</p>
                    <p>Contacts</p>
                    <p>Calls</p>
                </div>
                <div className="nav-in-three">
                    <div className="nav-in-three-user">

                    </div>
                    <div className="nav-in-three-settings">
                        Settings
                    </div>
                </div>
            </div>
        </nav>
     );
}
 
export default Nav;