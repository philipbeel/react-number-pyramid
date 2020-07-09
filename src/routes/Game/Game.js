import React, { useState } from 'react';
import styled from 'astroturf';
import compare from 'just-compare';
import { useHistory } from 'react-router-dom';
import { Header, Input, Grid, Form, Button } from 'semantic-ui-react';
import { useQuery, usePyramidAnswers } from '../../hooks';
import { LevelComplete } from '../../components';

const Container = styled('div')`
  margin: 4rem 0;
`;

const Title = styled(Header.Content)`
  font-family: var(--token-primary-font);
  text-transform: capitalize;
  font-size: 3.6rem;
  line-height: 4rem;
  font-weight: 400;
  color: var(--token-primary-color);
  text-shadow: 2px 1px var(--token-secondary-color);
  margin-bottom: 3rem;
`;

const Buttons = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin: 2rem;
`;

const ButtonLabel = styled('span')`
  font-family: var(--token-primary-font);
  font-weight: 500;
  text-shadow: 1px 1px var(--token-secondary-color);
  color: #ffde03;
`;
const PyramidInput = styled(Input)`
  padding: 0.1rem;
`;

const LevelMap = {
  beginner: 3,
  intermediate: 4,
  advanced: 5,
};

function GeneratePyramid({
  level,
  providedAnswers,
  userAnswers,
  pyramidAnswers,
}) {
  const levelRows = LevelMap[level] || LevelMap.beginner;

  const InputFragment = ({ columns }) =>
    [...Array(columns).keys()].map((i) => (
      <Grid.Column key={i} mobile={4}>
        <Form.Field>
          <PyramidInput
            error={true}
            ref={(input) =>
              input && input.props.tabIndex === LevelMap[level]
                ? input.focus()
                : undefined
            }
            type="number"
            size="huge"
            value={providedAnswers.pop()}
            tabIndex={providedAnswers.length}
            onChange={(event) => {
              if (
                Number(event.currentTarget.value) ===
                pyramidAnswers[event.target.tabIndex]
              ) {
                userAnswers.splice(
                  Number(event.target.tabIndex),
                  1,
                  Number(event.currentTarget.value)
                );
              }
            }}
          />
        </Form.Field>
      </Grid.Column>
    ));

  const GridRows = () =>
    [...Array(levelRows).keys()].map((item) => (
      <Grid.Row centered columns={6} key={item}>
        <InputFragment columns={item + 1} />
      </Grid.Row>
    ));

  return (
    <Grid centered textAlign="center" columns={6}>
      <GridRows />
    </Grid>
  );
}

export function Game() {
  const [levelComplete, setLevelComplete] = useState(false);

  const history = useHistory();
  const query = useQuery();
  const level = query.get('level');
  const levelRows = LevelMap[level] || LevelMap.beginner;
  const pyramidAnswers = usePyramidAnswers(level);
  const baseRowAnswers = pyramidAnswers.filter((_, i) => i < levelRows);
  const providedAnswers = [
    ...baseRowAnswers,
    ...Array(pyramidAnswers.length - baseRowAnswers.length),
  ];
  const userAnswers = [
    ...baseRowAnswers,
    ...Array(pyramidAnswers.length - baseRowAnswers.length),
  ];

  const exitHandler = () => history.replace('/');

  const onRepeatLevel = () => {
    history.push({
      pathname: '/game',
      search: `?level=${level}`,
    });
    setLevelComplete(false);
  };

  const onNextLevel = () => {
    const nextLevel = Object.keys(LevelMap).find(
      (key) => LevelMap[key] > LevelMap[level]
    );

    history.push({
      pathname: '/game',
      search: `?level=${nextLevel}`,
    });
    setLevelComplete(false);
  };

  const submitHandler = () => {
    if (compare(userAnswers, pyramidAnswers)) {
      setLevelComplete(true);
    } else {
      // @TODO: add support for level hints
    }
  };

  return (
    <Container>
      <LevelComplete
        isOpen={levelComplete}
        level={level}
        onRepeatLevel={onRepeatLevel}
        onNextLevel={onNextLevel}
      />

      <Header as="h2" icon textAlign="center">
        <Title>Level: {level}</Title>
      </Header>

      <Form>
        <GeneratePyramid
          level={level}
          providedAnswers={providedAnswers}
          userAnswers={userAnswers}
          pyramidAnswers={pyramidAnswers}
        />
        <Buttons>
          <Button
            basic
            inverted
            size="large"
            color="yellow"
            onClick={exitHandler}
          >
            <ButtonLabel>Quit</ButtonLabel>
          </Button>

          <Button size="huge" primary onClick={submitHandler}>
            <ButtonLabel>Submit</ButtonLabel>
          </Button>
        </Buttons>
      </Form>
    </Container>
  );
}
