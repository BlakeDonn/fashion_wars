import "./Homepage.scss";

export const Homepage = () => {
  return (
    <div className="parent">
      <section className="container">
        <header className="home-header">Header</header>
        <main className="home-main">
          <h1>Welcome To Fasion Wars !</h1>
          <div className="checkbox-container">
            <h3 className ="check-header">Which skins would you like to find?</h3>
            <input type="checkbox" className="armor" name="armor" value="armor"></input>
            <label for="armor" className="armor-label">Armor</label>
            <input type="checkbox"className="weapons"></input>
            <label for="weapons" className="weapons-label">Weapons</label>
            <input type="checkbox"className="dyes"></input>
            <label for="dyes" className="dyes-label">Dyes</label>
            <button>Find skins!</button>
          </div>
        </main>
        <footer className="home-footer">Footer Content</footer>
      </section>
    </div>
  );
};
