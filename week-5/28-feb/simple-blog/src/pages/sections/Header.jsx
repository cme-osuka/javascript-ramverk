import React from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { authState } from "../../recoil/auth/atom";

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-around",
    background: "#f3f3f3",
    padding: "24px 12px",
  },
};

function Header() {
  const { token } = useRecoilValue(authState);

  return (
    <div style={styles.container}>
      <div>Oscars Blogg</div>
      <nav>
        <Link to="/">Hem</Link>
        {!token ? (
          <Link to="/login">Login</Link>
        ) : (
          <Link to="/post/new">New post</Link>
        )}
      </nav>
    </div>
  );
}

export default Header;
