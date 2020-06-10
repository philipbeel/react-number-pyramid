import React from 'react';
import styled from 'astroturf';
import pyramidPuzzleIcon from '../../assets/pyramid-puzzle-icon.svg';
import { Header, Image } from 'semantic-ui-react';
import { HowToPlay, LevelSelect } from '../../components';

const Container = styled('div')`
  margin: 2rem;
`;

const Title = styled(Header.Content)`
  font-family: var(--token-primary-font);
  font-weight: 400;
  font-size: 4rem;
  line-height: 3.8rem;
  color: var(--token-primary-color);
  text-shadow: 2px 1px var(--token-secondary-color);
`;

const Buttons = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export function Home() {
  return (
    <Container>
      <Header as="h2" icon textAlign="center">
        <Title>React Number Pyramid</Title>
      </Header>
      <Image centered size="large" src={pyramidPuzzleIcon} />
      <Buttons>
        <HowToPlay />
        <LevelSelect />
      </Buttons>
    </Container>
  );
}
