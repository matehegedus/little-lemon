import UserCard from "../userCard/UserCard";

import "./Testimonials.css";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h3>Testimonials</h3>
      <section className="ratings-container">
        <UserCard
          rating={5}
          review={"Lovely restaurant with nice atmosphere!"}
          name={"Petra"}
        ></UserCard>
        <UserCard
          rating={3}
          review={"Nice restaurant with a bit loud music."}
          name={"Columbo"}
        ></UserCard>
        <UserCard
          rating={1}
          review={"Food arrived cold and the staff is rude. Avoid!"}
          name={"Peter"}
        ></UserCard>
      </section>
    </section>
  );
};

export default Testimonials;
