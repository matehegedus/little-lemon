import "./UserCard.css";

const UserCard = ({ name, review, rating }) => {
  const ratingArr = new Array(5).fill(1);

  return (
    <section className="user-card-container">
      <summary className="rating">
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
      </summary>
      <section className="profile">
        <img width={45} src="user1.png" alt="user pic"></img>
        <section>{name}</section>
      </section>
      <section className="review">{review}</section>
    </section>
  );
};

export default UserCard;
