import React from 'react';
import styled from 'astroturf';
import { Button, Modal } from 'semantic-ui-react';

const Title = styled('span')`
  font-family: var(--token-primary-font);
  font-size: 4rem;
  font-weight: 400;
  color: var(--token-primary-color);
  text-shadow: 2px 1px var(--token-secondary-color);
  margin-bottom: 3rem;
`;

const ButtonLabel = styled('span')`
  font-family: var(--token-primary-font);
  font-weight: 500;
  text-shadow: 1px 1px var(--token-secondary-color);
  color: #ffde03;
`;

const Description = styled(Modal.Description)`
  font-family: var(--token-secondary-font);
  font-size: 1.3rem;
  line-height: 2rem;
`;

export const HowToPlay = () => (
  <Modal
    basic
    centered={false}
    size="tiny"
    trigger={
      <Button basic inverted size="large" color="yellow">
        <ButtonLabel>Rules</ButtonLabel>
      </Button>
    }
  >
    <Modal.Header>
      <Title>How to play</Title>
    </Modal.Header>
    <Modal.Content>
      <Description>
        <ol>
          <li>Add adjacent numbers to fill in parent blocks</li>
          <li>
            Subtract numbers from direct parent blocks to fill in empty adjacent
            blocks
          </li>
          <li>A level is complete when all numbers reconcile</li>
        </ol>
      </Description>
    </Modal.Content>
  </Modal>
);
