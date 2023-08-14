const ConfirmedBooking = () => {
  return (
    <section className="about">
      <div className="about-left">
        <h1>Booking Confirmed</h1>
        <br />
        <p>
          Dear Guest, We're excited to confirm your reservation. Your booking is
          now confirmed for the specified date and time. We look forward to
          serving you at our restaurant. Thank you for choosing us. We're
          dedicated to making your dining experience special. Best regards, The
          Little Lemons Restaurant Team
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
  );
};

export default ConfirmedBooking;
