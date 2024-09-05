import UserCard from "../userCard/UserCard";

import "./Testimonials.css";

const Testimonials = () => {
  return (
    <div>
      <h3>Testimonials</h3>
      <section className="ratings-container">
        <UserCard rating={5} review={"review text"} name={"Petra"}></UserCard>
        <UserCard
          rating={3}
          review={"review text 2"}
          name={"Columbo"}
        ></UserCard>
        <UserCard rating={1} review={"review text 4"} name={"Peter"}></UserCard>
      </section>
    </div>
  );
};

export default Testimonials;
