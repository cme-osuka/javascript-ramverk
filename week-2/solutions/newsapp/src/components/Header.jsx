

const headerStyles = {
  height: "80px",
  width: "100%",
  background: "#f3f3f3",
  display: "flex"
}

const titleStyles = {
  fontSize: "24px",
}

function Header() {
  return (
    <header style={headerStyles}>
      <img src="https://placekitten.com/50/50" />
      <p style={titleStyles} >Cat news</p>
    </header>
  );
}

export default Header;
