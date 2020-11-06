import "./Homepage.scss";

export const Homepage = (props) => {
  const skinTypes = () => {
    let skins = ["armor", "weapons", "dyes"];
    return skins.map((skin, i) => {
      return (
        <div className={skin}>
          <input
            key={i}
            type="checkbox"
            className={skin}
            data-testid={`${skin}-test`}
            name={skin}
            onClick={(e) => props.updateSelections(e)}
          ></input>
          <label htmlFor="armor" className={`${skin}-label`}>
            {skin}
          </label>
        </div>
      );
    });
  };
  return (
    <div className="parent">
      <section className="container">
        <header className="home-header">Header</header>
        <main className="home-main">
          <h1>Welcome To Fashion Wars !</h1>
          <div className="checkbox-container">
            <h3 className="check-header">
              Which skins would you like to find?
            </h3>
            {skinTypes()}
            <button className="skin-submit">Find skins!</button>
          </div>
        </main>
        <footer className="home-footer">Footer Content</footer>
      </section>
    </div>
  );
};
