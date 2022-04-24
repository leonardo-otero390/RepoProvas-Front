import Logo from "./Logo";
import LogoutIcon from "@mui/icons-material/Logout";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  function logOut() {
    localStorage.removeItem("token");
    navigate("/");
  }
  return (
    <Container>
      <button onClick={() => navigate("/home")}>
        <Logo />
      </button>
      <button onClick={logOut}>
        <LogoutIcon sx={{ fontSize: 48 }} />
      </button>
    </Container>
  );
}

const Container = styled.nav`
  display: flex;
  width: 100%;
  height: 100px;
  padding: 36px;
  align-items: center;
  justify-content: space-between;
  button {
    border: none;
    background: none;
  }
`;
