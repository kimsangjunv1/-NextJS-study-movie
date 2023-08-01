import styled from "styled-components";

const Test = styled.button`
  background: red;
  color: white;
`;

export default function Potato() {
  return (
    <>
      <Test>빨간색 배경</Test>
      <p>나옴!</p>
    </>
  );
}
