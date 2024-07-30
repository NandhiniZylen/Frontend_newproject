import Logo from "./image/logo192.png";
import {Link} from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src={Logo}></img>
      </div>

      <ul className="list">
       <Link  to ='/'> <li>Home</li> </Link>
       <Link to ='/about'> <li>About</li> </Link>
       <Link to ='/menu'> <li>Menu</li> </Link>
        <Link to ='/support'><li>Support</li> </Link>
      </ul>
    </div>
  );
}

export default Header;
