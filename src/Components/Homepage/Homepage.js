import "./Homepage.scss";

export const Homepage = (props) => {
  return (
    <div className="parent">
      <section className="container">
        <header className="home-header">Header</header>
        <main className="home-main">
          <h1>Welcome To Fashion Wars !</h1>
          <div className="checkbox-container">
            <h3 className="check-header">Which skins would you like to find?</h3>
            <input type="checkbox" className="armor" name="armor" value="armor" onChange={(e) => props.updateSelections(e)}></input>
            <label for="armor" className="armor-label" >Armor</label>
            <input type="checkbox" className="weapons" name="weapons" onChange={(e) => props.updateSelections(e)}></input>
            <label for="weapons" className="weapons-label" >Weapons</label>
            <input type="checkbox" className="dyes" name="dyes" onChange={(e) => props.updateSelections(e)}></input>
            <label for="dyes" className="dyes-label">Dyes</label>
            <button className='skin-submit'>Find skins!</button>
          </div>
        </main>
        <footer className="home-footer">Footer Content</footer>
      </section>
    </div>
  );
};
