import React from 'react';
import styled from 'astroturf';
import beginner from '../../assets/level-beginner.svg';
import intermediate from '../../assets/level-intermediate.svg';
import advanced from '../../assets/level-advanced.svg';
import { Button, List, Modal, Image } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';

const ButtonLabel = styled('span')`
  font-family: var(--token-primary-font);
  font-weight: 500;
  text-shadow: 1px 1px var(--token-secondary-color);
  color: #ffde03;
`;

const Title = styled('span')`
  font-family: var(--token-primary-font);
  line-height: 3.8rem;
  font-size: 4rem;
  font-weight: 400;
  color: var(--token-primary-color);
  text-shadow: 2px 1px var(--token-secondary-color);
  margin-bottom: 3rem;
`;

const ListLevel = styled(List.Header)`
  font-family: var(--token-primary-font) !important;
  font-weight: 400 !important;
  font-size: 2rem;
  padding: 0.5rem 0;
`;

export const LevelSelect = () => {
  let history = useHistory();

  return (
    <Modal
      basic
      centered={false}
      size="tiny"
      trigger={
        <Button primary size="huge">
          <ButtonLabel>Play</ButtonLabel>
        </Button>
      }
    >
      <Modal.Header>
        <Title>Select difficulty</Title>
      </Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <List divided relaxed>
            <List.Item>
              <Image size="mini" src={beginner} />
              <List.Content>
                <div onClick={() => history.push('/game?level=beginner')}>
                  <ListLevel as="a">Beginner</ListLevel>
                </div>
              </List.Content>
            </List.Item>
            <List.Item>
              <Image size="mini" src={intermediate} />

              <List.Content>
                <div onClick={() => history.push('/game?level=intermediate')}>
                  <ListLevel as="a">Intermediate</ListLevel>
                </div>
              </List.Content>
            </List.Item>
            <List.Item>
              <Image size="mini" src={advanced} />
              <List.Content>
                <div onClick={() => history.push('/game?level=advanced')}>
                  <ListLevel as="a">Advanced</ListLevel>
                </div>
              </List.Content>
            </List.Item>
          </List>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};
