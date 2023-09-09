/* eslint-disable react/no-unescaped-entities */

const Reviews = () => {
  return (
    <div className="reviews">
      <div className="reviews-header">
        <h1>Reviews ☕</h1>
        <h2>What other people are saying!</h2>
      </div>
      <div className="reviews-comments">
        <div className="comments">
          <p className="comment">It was the best coffee I've ever had in my life. I have never seen a better coffee in my life. You can never buy this flavor anywhere else.</p>
          <p className="author">@elonmusk</p>
        </div>
        <div className="comments">
          <p className="comment">An amazing experience. A flavor everyone should definitely try. A wonderful and comfortable place. In a word, it's magnificent.</p>
          <p className="author">@JeffBezos</p>
        </div>
        <div className="comments">
          <p className="comment">Bu lezzeti yalnızca burada bulabilirsiniz. Bütün servetimi isteseler dahi veririm. Biliyorsunuz ben dünyanın en zenginiyim.</p>
          <p className="author">@MelikeCananCaglar</p>
        </div>
        
      </div>
    </div>
  )
}

export default Reviews