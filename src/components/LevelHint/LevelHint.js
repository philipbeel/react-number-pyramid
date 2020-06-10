import React from 'react';
import styled from 'astroturf';
import { Modal, Button, Icon } from 'semantic-ui-react';

const Title = styled('span')`
  font-family: var(--token-primary-font);
  line-height: 3.8rem;
  font-size: 4rem;
  font-weight: 400;
  color: var(--token-primary-color);
  text-shadow: 2px 1px var(--token-secondary-color);
  margin-bottom: 3rem;
`;

const Desc = styled('span')`
  font-family: var(--token-secondary-font);
  font-size: 1.2rem;
`;

const ButtonLabel = styled('span')`
  font-family: var(--token-primary-font);
  font-weight: 500;
  text-shadow: 1px 1px var(--token-secondary-color);
  color: #ffde03;
`;

export const LevelHint = ({ isOpen, incorrectAnswers, onContinue }) => {
  return (
    <Modal open={isOpen} basic centered={false} size="tiny">
      <Modal.Header>
        <Title>Incorrect answers</Title>
      </Modal.Header>
      <Modal.Content>
        <Desc>You have {incorrectAnswers} incorrect answers. Keep going!</Desc>
      </Modal.Content>

      <Modal.Actions>
        <Button basic color="yellow" inverted size="huge" onClick={onContinue}>
          <Icon name="play" />
          <ButtonLabel>Keep playing</ButtonLabel>
        </Button>
      </Modal.Actions>
    </Modal>
  );
};
