import "./Chicago.css";

const Chicago = () => {
  return (
    <div className="chicago" id="chicago">
      <section className="section-description">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint. Velit officia consequat
          duis enim velit mollit.
        </p>
      </section>
      <section className="image-container">
        <img
          className="img-a"
          src="Mario and Adrian A.jpg"
          width={200}
          height={300}
        ></img>
        <img
          className="img-b"
          src="Mario and Adrian B.jpg"
          width={200}
          height={300}
        ></img>
      </section>
    </div>
  );
};

export default Chicago;
