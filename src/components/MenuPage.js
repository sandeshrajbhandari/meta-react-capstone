const MenuPage = () => {
  return (
    <div>
      <section className="about menu">
        <div className="about-left">
          <h1>Little Lemon Restaurant Menu</h1>

          <h2>Appetizers</h2>
          <ul>
            <li>Zesty Bruschetta</li>
            <li>Crispy Calamari</li>
            <li>Lemon Herb Hummus</li>
          </ul>

          <h2>Salads</h2>
          <ul>
            <li>Citrus Garden Salad</li>
            <li>Mediterranean Quinoa Salad</li>
            <li>Grilled Chicken Caesar</li>
          </ul>

          <h2>Main Courses</h2>
          <ul>
            <li>Lemon Butter Salmon</li>
            <li>Lemon Herb Roast Chicken</li>
            <li>Pasta Primavera</li>
          </ul>

          <h2>Burgers and Sandwiches</h2>
          <ul>
            <li>Lemon Pepper Turkey Burger</li>
            <li>Grilled Vegetable Panini</li>
            <li>Crispy Fish Tacos</li>
          </ul>

          <h2>Desserts</h2>
          <ul>
            <li>Lemon Tart</li>
            <li>Lemon Blueberry Parfait</li>
            <li>Lemon Meringue Cupcakes</li>
          </ul>

          <h2>Beverages</h2>
          <ul>
            <li>Lemonade Spritzer</li>
            <li>Citrus Iced Tea</li>
            <li>Lemon Basil Mocktail</li>
          </ul>
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
    </div>
  );
};

export default MenuPage;
