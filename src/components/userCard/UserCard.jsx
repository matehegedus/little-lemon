import "./UserCard.css";

const UserCard = ({ name, review, rating }) => {
  return (
    <div className="user-card-container">
      <div className="rating">5/{rating}</div>
      <section className="profile">
        <img width={45} src="user1.png"></img>
        <div>{name}</div>
      </section>
      <section>{review}</section>
    </div>
  );
};

export default UserCard;
