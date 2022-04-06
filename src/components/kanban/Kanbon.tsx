import React from 'react';
import styled from 'styled-components';
import Headline from '../Headline/Headline';
import RepoItem from './RepoItem';
import { Board, Ul } from './styles';

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

  const moveToInProgress = (id: string, columnName: Columns) => {
    if (columnName === 'inReview') {
      const filterColumn = inReview.filter((item: any) => item.id !== id);
      const item = inReview.find((item: any) => item.id === id);
      setInProgress((preState: any) => [...preState, item]);
      setInReview(filterColumn);
    }
  };
  const moveToInReview = (id: string, columnName: Columns) => {
    if (columnName === 'inProgress') {
      const filterColumn = inProgress.filter((item: any) => item.id !== id);
      const item = inProgress.find((item: any) => item.id === id);
      setInReview((prevState: any) => [...prevState, item]);
      setInProgress(filterColumn);
    }
    if (columnName === 'complete') {
      const filterColumn = complete.filter((item: any) => item.id !== id);
      const item = complete.find((item: any) => item.id === id);
      setInReview((inReview: any) => [...inReview, item]);
      setComplete(filterColumn);
    }
  };
  const moveToComplete = (id: string, columnName: Columns) => {
    if (columnName === 'inReview') {
      const filterColumn = inReview.filter((item: any) => item.id !== id);
      const item = inReview.find((item: any) => item.id === id);
      setComplete((inReview: any) => [...inReview, item]);
      setInReview(filterColumn);
    }
  };

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
              key={`p-${repo.id}`}
              repo={repo}
              rightArrow
              progress={moveToInReview}
              columnName="inProgress"
            />
          ))}
        </Ul>
        <Ul>
          {inReview.map(repo => (
            <RepoItem
              key={`r-${repo.id}`}
              repo={repo}
              rightArrow
              leftArrow
              progress={moveToComplete}
              degrees={moveToInProgress}
              columnName="inReview"
            />
          ))}
        </Ul>
        <Ul>
          {complete.map(repo => (
            <RepoItem
              key={`c-${repo.id}`}
              repo={repo}
              leftArrow
              columnName="complete"
              degrees={moveToInReview}
            />
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
