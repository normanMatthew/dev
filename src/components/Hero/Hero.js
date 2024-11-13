import React from 'react';
import { devIntro } from '@/constants/constants';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row noPadding>
    <LeftSection>
      <SectionTitle main center>
        Matthew Norman
      </SectionTitle>
      <SectionText>
      {devIntro}
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;