import React from "react";
import "./styles/Specials.css";

/* If your images are in src/images/, import them */
import greekSalad from "./images/greeksalad.jpg";
import bruchetta from "./images/bruchetta.svg";
import lemonDessert from "./images/lemondessert.jpg";

function Specials() {
  const specials = [
    {
      id: 1,
      title: "Greek Salad",
      description:
        "The famous Greek salad with crispy lettuce, peppers, olives and feta cheese garnished with garlic and rosemary croutons.",
      price: "$12.99",
      img: greekSalad,
    },
    {
      id: 2,
      title: "Bruschetta",
      description:
        "Grilled bread smeared with garlic, seasoned with salt and olive oil. Perfect starter to any meal!",
      price: "$5.99",
      img: bruchetta,
    },
    {
      id: 3,
      title: "Lemon Dessert",
      description:
        "A sweet treat with a refreshing taste of lemon, topped with a sprinkle of powdered sugar.",
      price: "$4.99",
      img: lemonDessert,
    },
  ];

  return (
    <section className="specials">
      <h2>This Week’s Specials!</h2>
      <button className="menu-btn">Online Menu</button>

      <div className="cards">
        {specials.map((item) => (
          <article className="card" key={item.id}>
            <img className="card-img" src={item.img} alt={item.title} />

            <div className="card-content">
              <div className="card-header">
                <h3>{item.title}</h3>
                <span className="price">{item.price}</span>
              </div>

              <p>{item.description}</p>
            </div>

            <div className="card-footer">
              <button className="order-btn">Order a delivery</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Specials;
