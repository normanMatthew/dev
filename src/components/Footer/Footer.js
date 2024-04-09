import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper id="about">
      <LinkList>
        <LinkColumn>
          <LinkTitle>Contact Me</LinkTitle>
          <LinkItem href="mailto:jobs.matthew@protonmail.com">jobs.matthew@protonmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        {/* <CompanyContainer>
          <Slogan>“The secret of getting ahead is getting started.” —Mark Twain</Slogan>
        </CompanyContainer> */}
        
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
