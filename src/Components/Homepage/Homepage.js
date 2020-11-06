import "./Homepage.scss";

export const Homepage = () => {
  return (
    <div className="parent">
      <section className="container">
        <header className="home-header">Header</header>
        <main className="home-main">
          <h2>Welcome To Fasion Wars !</h2>
          <ul>
            <li><input type="checkbox"
          ></input>Armor
            </li>

            <li><input type="checkbox"
          ></input>Armor
            </li>
            <li><input type="checkbox"
          ></input>Armor
            </li>
          </ul>
        </main>
        <footer className="home-footer">Footer Content</footer>
      </section>
    </div>
  );
};
