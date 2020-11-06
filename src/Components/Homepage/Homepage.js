import "./Homepage.scss";

export const Homepage = () => {
  return (
    <div className="parent">
      <section className="container">
        <header className="home-header">Header</header>
        <main className="home-main">
          <h1>Welcome To Fasion Wars !</h1>
          <container>
            <h3>Which skins would you like to find?</h3>
            <input type="checkbox"></input>Armor
            <input type="checkbox"></input>Weapons
            <input type="checkbox"></input>Dyes
            <button>Find skins!</button>
          </container>

          
        </main>
        <footer className="home-footer">Footer Content</footer>
      </section>
    </div>
  );
};
