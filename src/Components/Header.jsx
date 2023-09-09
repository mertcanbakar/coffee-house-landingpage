/* eslint-disable react/no-unescaped-entities */
import LOGO from '../img/logo.png'
import coffee from '../img/coffee-cups.png'

const Header = () => {
  return (
    <>
    <div className="container">
      <header>
        <img src={LOGO} alt="Logo" width='50px'/>
        <nav>
          <a href="#" className='active'>Home</a>
          <a href="#">About Us</a>
          <a href="#">Features</a>
          <a href="#">Purchase</a>
          <a href="#">Contact Us</a>
        </nav>
      </header>
      <div className="message">
        <div className="messages">
      <h1>Coffee Makes Mood</h1>
      <h2> "Indulge in Every Sip: Experience the Richness of Coffee!"</h2>
        </div>
        <div className="img">
          <img src={coffee} alt="Coffee Cups" />
        </div>
      </div>
    </div>
    </>
  )
}

export default Header