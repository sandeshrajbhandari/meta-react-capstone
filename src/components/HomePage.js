import Main from "../components/Main";
import Footer from "../components/Footer";
import Header from "../components/Header";
//Header and Footer added in App.js along with routes.
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-left">
          <div>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
          </div>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>

          <button>
            <Link to="/order-online">Reserve a Table</Link>
          </button>
        </div>
        <div>
          <img
            src={process.env.PUBLIC_URL + "/assets/restauranfood.jpg"}
            alt="chef holding dish"
            width={200}
          />
        </div>
      </section>
      {/* section change */}
      <section className="specials">
        <div className="special-title">
          <h1>This weeks specials!</h1>
          <button>Online Menu</button>
        </div>
        <div className="specials-container">
          <div className="specials-card">
            <img
              src={process.env.PUBLIC_URL + "/assets/greek salad.jpg"}
              alt="food"
            />

            <div>
              <span>
                <h3>Greek Salad</h3>
                <p className="specials-price">$12.99</p>
              </span>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam voluptatum, quibusdam, quia, quod voluptates voluptate
                exercitationem quos voluptatibus quae doloribus quas. Quisquam
                voluptatum, quibusdam, quia, quod voluptates voluptate
              </p>

              <p style={{ fontWeight: "bold", color: "black" }}>
                Order a deilvery
              </p>
            </div>
          </div>
          <div className="specials-card">
            <img
              src={process.env.PUBLIC_URL + "/assets/bruchetta.svg"}
              alt="food"
            />

            <div>
              <span>
                <h3>Bruchetta</h3>
                <p className="specials-price">$22.99</p>
              </span>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam voluptatum, quibusdam, quia, quod voluptates voluptate
                exercitationem quos voluptatibus quae doloribus quas. Quisquam
                voluptatum, quibusdam, quia, quod voluptates voluptate
              </p>

              <p style={{ fontWeight: "bold", color: "black" }}>
                Order a deilvery
              </p>
            </div>
          </div>
          <div className="specials-card">
            <img
              src={process.env.PUBLIC_URL + "/assets/lemon dessert.jpg"}
              alt="food"
            />

            <div>
              <span>
                <h3>Lemon Dessert</h3>
                <p className="specials-price">$9.99</p>
              </span>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam voluptatum, quibusdam, quia, quod voluptates voluptate
                exercitationem quos voluptatibus quae doloribus quas. Quisquam
                voluptatum, quibusdam, quia, quod voluptates voluptate
              </p>

              <p style={{ fontWeight: "bold", color: "black" }}>
                Order a delivery
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* section change */}

      <section className="testimonials">
        <h1>Testimonials</h1>
        <div className="testimonial-container">
          <div className="testimonial-card">
            <img
              src={process.env.PUBLIC_URL + "/assets/star.png"}
              alt="testimonial placeholder image"
            />
            <span>Michael Burry</span>
            <p>
              Every bite felt like a dance of flavors on my palate. A culinary
              haven that promises a delightful experience in every dish. Have
              you tried their weekend brunch?
            </p>
          </div>
          <div className="testimonial-card">
            <img
              src={process.env.PUBLIC_URL + "/assets/star.png"}
              alt="testimonial placeholder image"
            />
            <span>Sasa Cohan</span>
            <p>
              An elegant escape where each plate is a work of art. The perfect
              blend of ambiance, taste, and attentive staff. Which dessert won
              your heart?
            </p>
          </div>
          <div className="testimonial-card">
            <img
              src={process.env.PUBLIC_URL + "/assets/star.png"}
              alt="testimonial placeholder image"
            />
            <span>Magic Mike</span>
            <p>
              A symphony of tastes that left me craving more. The restaurant's
              attention to quality ingredients is evident in every mouthful. How
              was the presentation of the dishes you enjoyed?
            </p>
          </div>
          <div className="testimonial-card">
            <img
              src={process.env.PUBLIC_URL + "/assets/star.png"}
              alt="testimonial placeholder image"
            />
            <span>John Watson</span>
            <p>
              From the moment I stepped in, I knew I was in for a treat. The
              menu's creativity and the staff's warmth combined for an
              exceptional evening. Did you have a chance to meet the chef during
              your visit?
            </p>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="about-left">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            Little Lemon opened in 1995 by two Italian brothers, Adrian and
            Mario. Despite the city's diversity, the two brothers recognized the
            lack of Mediterranean cuisine in Chicago, and were inspired to bring
            the flavors of their hometown in Italy to the people of Chicago. The
            two brothers continue to oversee the Little Lemon restaurant, nearly
            thirty years later.
          </p>
        </div>
        <div className="about-right">
          <img
            src={process.env.PUBLIC_URL + "/assets/restaurant.jpg"}
            alt=""
            id="img1"
          />
          <img
            src={process.env.PUBLIC_URL + "/assets/restaurant chef B.jpg"}
            alt=""
            id="img2"
          />
        </div>
      </section>
    </>
  );
};

export default HomePage;
