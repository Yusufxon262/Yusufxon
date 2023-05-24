import menu from "./menu.css";

function Menu() {
  return (
    <div className="menu" style={menu}>
      <div className="left">
        <div>
          <a href="https://www.instagram.com/">
            <img src="maluba.jpg" width="50" height="50" />
          </a>
        </div>

        <div>
          <a href="https://www.facebook.com/">
            <img src="../src/maluba.jpg" width="50" height="50" />
          </a>
        </div>

        <div>
          <a href="https://www.instagram.com/">
            <img src="maluba.jpg" width="50" height="50" />
          </a>
        </div>

        <div>
          <a href="https://www.facebook.com/">
            <img src="maluba.jpg" width="50" height="50" />
          </a>
        </div>

        <div>
          <a href="https://www.instagram.com/">
            <img src="maluba.jpg" width="50" height="50" />
          </a>
        </div>
      </div>

      <div className="right">
        <a href="first-list">Projecnts</a>

        <a href="#second">Contact Me</a>
      </div>
    </div>
  );
}

export default Menu;
