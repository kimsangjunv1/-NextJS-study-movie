"use client";

import Link from "next/link";
import styled from "styled-components";

const FlexNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  a{
    color: ${(props) => props.color || "gray"};
    text-transform: uppercase;
  }}
`;

const NavigationBar = styled(FlexNav)`
  background: black;
  padding: 20px;
  margin-bottom: 20px;
`;

export default function NavBar() {
  return (
    <NavigationBar color={"green"}>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </NavigationBar>
  );
}
