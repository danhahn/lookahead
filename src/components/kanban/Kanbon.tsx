import React from 'react';
import styled from 'styled-components';
import Headline from '../Headline/Headline';
import RepoItem from './RepoItem';
import { Board, Ul, Li } from './styles';

export type Columns = 'inProgress' | 'inReview' | 'complete';

type Props = {
  user: string;
};

type Repo = {
  id: string;
  name: string;
};

function cleanData(rawData: any) {
  return rawData.map(({ id, name }: any) => ({ id, name }));
}

const Konbon: React.FC<Props> = ({ user }) => {
  const [inProgress, setInProgress] = React.useState<Repo[]>([]);
  const [inReview, setInReview] = React.useState<Repo[]>([]);
  const [complete, setComplete] = React.useState<Repo[]>([]);

  const moveToInProgress = (id: string | undefined) => {};
  const moveToInReview = (id: string | undefined, fromColumn?: Columns) => {
    if (!id) return;
    console.log(id, fromColumn);
    if (fromColumn === 'inProgress') {
      const filterColumn = inProgress.filter((item: any) => item.id !== id);
      const item = inProgress.find((item: any) => item.id === id);
      console.log(filterColumn);
      setInReview((inReview: any) => [...inReview, item]);
      setInProgress(filterColumn);
    }
  };
  const moveToCompleate = (id: string | undefined) => {};

  React.useEffect(() => {
    async function getUserRepo(userId: string) {
      const rawRepos = await fetch(`https://api.github.com/users/${userId}/repos`);
      const repos = await rawRepos.json();
      const data = cleanData(repos);

      setInProgress(data);
    }
    getUserRepo(user);
  }, [user]);

  return (
    <>
      <Header>
        <Headline>{user}</Headline>
        <p>
          A component toolkit for creating live-running code editing experiences, using
          the power of CodeSandbox.
        </p>
      </Header>
      <Board>
        <p>In progress ({inProgress.length})</p>
        <p>Review ({inReview.length})</p>
        <p>Ready to merge ({complete.length})</p>
        <Ul>
          {inProgress.map(repo => (
            <RepoItem
              repo={repo}
              rightArrow
              moveRight={moveToInReview}
              fromColumn="inProgress"
            />
          ))}
        </Ul>
        <Ul>
          {inReview.map(repo => (
            <RepoItem repo={repo} rightArrow leftArrow />
          ))}
        </Ul>
        <Ul>
          {complete.map(repo => (
            <RepoItem repo={repo} rightArrow />
          ))}
        </Ul>
      </Board>
    </>
  );
};

export default Konbon;

const Header = styled.div`
  display: grid;
  gap: 20px;
  max-width: 370px;
  p {
    color: var(--color2);
  }
`;
