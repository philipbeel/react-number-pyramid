import React from 'react';
import { bool, string, func } from 'prop-types';
import styled from 'astroturf';
import { Modal, Icon, Button } from 'semantic-ui-react';

const Title = styled('span')`
  font-family: var(--token-primary-font);
  line-height: 3.8rem;
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

export const LevelComplete = ({
  isOpen,
  level,
  onRepeatLevel,
  onNextLevel,
}) => {
  const isNotLastLevel = () => level !== 'advanced';

  return (
    <Modal open={isOpen} basic centered={false} size="tiny">
      <Modal.Header>
        <Title>Level Complete</Title>
      </Modal.Header>
      <Modal.Actions>
        <Button color="blue" inverted size="huge" onClick={onRepeatLevel}>
          <Icon name="repeat" />
          <ButtonLabel>Go again</ButtonLabel>
        </Button>
        {isNotLastLevel() && (
          <Button color="green" inverted size="huge" onClick={onNextLevel}>
            <Icon name="bolt" />
            <ButtonLabel>Next level</ButtonLabel>
          </Button>
        )}
      </Modal.Actions>
    </Modal>
  );
};

LevelComplete.propTypes = {
  isOpen: bool,
  level: string,
  onRepeatLevel: func,
  onNextLevel: func,
};
