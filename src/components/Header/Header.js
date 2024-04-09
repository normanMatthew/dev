import Link from "next/link";
import React from "react";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  Span
} from "./HeaderStyles";



const Header = () => (

  <Container>
    <Div1>
      <Link legacyBehavior href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: "19px" }}>
        <Span>Portfolio</Span>
        </a>
        
      </Link>
    </Div1>
    <Div2>
    <li>
          <Link legacyBehavior href="#projects">
            <NavLink>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="#technologies">
            <NavLink>Technologies</NavLink>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="#about">
            <NavLink>Contact</NavLink>
          </Link>
        </li> 
    </Div2>
    {/* <Div3>
      <SocialIcons href="https://github.com">
          <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://github.com">
          <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://github.com">
          <AiFillGithub size="3rem" />
      </SocialIcons>
    </Div3> */}
  </Container>
);


 

export default Header;
