import { LOGO_URL } from "../utils/const";

const Header = () => (
    <div className='header'>
      <div className='logo-container'>
        <img className='logo' src={LOGO_URL}></img>
      </div>
      <div className='nav-container'>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )

  export default Header;