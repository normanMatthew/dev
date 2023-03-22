import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row noPadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        The purpose of this website is to demonstrate my programming knowledge by showcasing important projects that I've built throughout my programming journey. 
      </SectionText>
      {/* <Button>
      <a href="mailto:jobs.matthew@protonmail.com">
      Email 
      </a> 
      </Button> */}
    </LeftSection>
  </Section>
);

export default Hero;