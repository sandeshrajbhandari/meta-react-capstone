const AboutPage = () => {
  return (
    <div>
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
    </div>
  );
};

export default AboutPage;
