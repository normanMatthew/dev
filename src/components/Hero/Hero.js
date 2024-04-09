import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row noPadding>
    <LeftSection>
      <SectionTitle main center>
        Matthew Norman
      </SectionTitle>
      <SectionText>
      Full Stack Web Developer with five years of experience working with both front-end and back-end technologies.
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