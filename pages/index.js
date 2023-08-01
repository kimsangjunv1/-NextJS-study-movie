"use client";

import { useState } from "react";
import styled from "styled-components";

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const ReverseFlexBox = styled(FlexBox)`
  flex-direction: column;
`;

const BlackButton = styled.button`
  background: black;
  color: white;
  width: 100px;
  border: none;
  border-radius: 100px;
  padding: 20px;
  transition: 0.25s;
  cursor: pointer;
`;

const BlueHoverButton = styled(BlackButton)`
  &:hover {
    background: blue;
  }
`;

const RedHoverButton = styled(BlackButton)`
  &:hover {
    background: red;
  }
`;

const BigTitle = styled.h2`
  font-size: 52px;
  color: black;
`;
export default function Home() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <ReverseFlexBox>
        <BigTitle>상태 : {counter}</BigTitle>
        <FlexBox>
          <BlueHoverButton
            onClick={() => {
              setCounter((prev) => prev + 1);
            }}
          >
            증가
          </BlueHoverButton>
          <RedHoverButton
            onClick={() => {
              setCounter((prev) => (prev = 0));
            }}
          >
            초기화
          </RedHoverButton>
        </FlexBox>
      </ReverseFlexBox>
    </>
  );
}
