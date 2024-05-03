/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import card1 from "../assets/card1.jpg";
import card2 from "../assets/card2.jpg";
import card3 from "../assets/card3.jpg";

function Card() {
  return (
    <div className="cards">
      <p>Up to 40% Off Home</p>
      <div className="row">
      <div className="card">
        <img src={card1} />
        <p className="card-p">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>
        <button>Show more</button>
      </div>
      <div className="card">
        <img src={card2} />
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>
        <button>Show more</button>
      </div>
      <div className="card">
        <img src={card3} />
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>
        <button>Show more</button>
      </div>
      </div>
    </div>
  );
}

export default Card;
