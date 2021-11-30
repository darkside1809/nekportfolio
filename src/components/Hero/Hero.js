import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Portfolio
        </SectionTitle>
        <SectionText>Back-end Developer</SectionText>
        <a href="https://darkside1809.github.io/resume/" target="_blank">
          <Button onClick={props.handleClick}>Download CV</Button>
        </a>
      </LeftSection>
    </Section>
  </>
);

export default Hero;