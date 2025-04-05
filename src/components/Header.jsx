import foodLogo from "../images/food-logo.jpg"
const Header = () =>{
    return(
      <div className="header">
        <img src={foodLogo}/>
        <ul className="navList">
              <li>Home</li>
              <li>Contact Us</li>
              <li>About Us</li>
              <li>Cart</li>
              <li>LogIn</li>
        </ul>
      </div>
    )
}

export default Header;