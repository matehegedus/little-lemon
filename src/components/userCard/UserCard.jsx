import "./UserCard.css";

const UserCard = ({ name, review, rating }) => {
  const ratingArr = new Array(5).fill(1);

  return (
    <div className="user-card-container">
      <div className="rating">
        {ratingArr.map((elem, idx) => {
          return (
            <img
              src={`${
                idx + 1 <= rating ? "rating_empty.svg" : "rating_filled.svg"
              }`}
              alt="_"
            />
          );
        })}
      </div>
      <section className="profile">
        <img width={45} src="user1.png" alt="user pic"></img>
        <div>{name}</div>
      </section>
      <section className="review">{review}</section>
    </div>
  );
};

export default UserCard;
