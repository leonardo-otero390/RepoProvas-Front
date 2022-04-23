import styled from "styled-components";
import testIcon from "../assets/testIcon.svg";

export default function Logo() {
  return (
    <Container>
      <img src={testIcon} alt="testIcon"></img>
      <h1>
        <strong>
          Repo<span>Provas</span>
        </strong>
      </h1>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  h1 {
    font-family: "Lexend";
    font-size: 36px;
    color: #000000;
  }
  span {
    color: #3f61d8;
  }
`;
