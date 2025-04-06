const Footer= () =>{
    return(
        <footer>
            <div><ul className="navList">
              <li>Home</li>
              <li>Contact Us</li>
              <li>About Us</li>
              <li>Cart</li>
              <li>LogIn</li>
        </ul></div>
            <div>
                <p>Fresh Food crafted with love</p>
                <p>©<script>document.write(current_year);</script>FoodApp.</p>
            </div>
        </footer>
    )
}
export default Footer;