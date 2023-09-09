/* eslint-disable react/no-unescaped-entities */
import coffee from '../img/Coffee.png'

const Content = () => {
  return (
    <>
    <div className="content">
      <div className="content-img">
        <img src={coffee} alt="coffee" />
      </div>
      <div className="content-message">
        <h1>Discover Coffee House</h1>
        <h3>Elevating Your Coffee Experience</h3>
        <p>At Coffee House, we are on a mission to redefine your coffee moments. Our carefully curated selection of premium beans, sourced from the world's most renowned coffee regions</p>
        <p>With expert craftsmanship and a commitment to quality, Join us in savoring the art of coffee, one cup at a time</p>
        <button>Read More</button>
      </div>
    </div>
    </>
  )
}

export default Content