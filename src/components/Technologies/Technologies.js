import React from 'react';
import { DiFirebase, DiReact, DiZend, DiDatabase, DiMongodb, DiJavascript, DiCodeBadge, DiComposer, DiCompass, DiOpensource } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="technologies">
    <SectionDivider />
    <SectionTitle main>Technologies</SectionTitle>
    <SectionText>
      I've worked with a dynamic range of technologies within the web development world including Front-end, Back-end, and Design.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem"/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiMongodb size="3rem"/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            MongoDB <br />
            
            NodeJS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiOpensource size="3rem"/>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiCodeBadge size="3rem"/>
        <ListContainer>
          <ListTitle>Frameworks</ListTitle>
          <ListParagraph>
            NextJS<br />
            TailwindCSS<br />
            ExpressJS <br />
            Bootstrap
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiJavascript size="3rem"/>
        <ListContainer>
          <ListTitle>Programming Languages</ListTitle>
          <ListParagraph>
            JavaScript<br />
            TypeScript<br />
            C#
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
