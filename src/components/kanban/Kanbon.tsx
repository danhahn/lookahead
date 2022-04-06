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

function getStarCount(rawData: any[]) {
  return rawData.reduce((prev, curr) => prev + curr.stargazers_count, 0);
}

const Konbon: React.FC<Props> = ({ user }) => {
  const [inProgress, setInProgress] = React.useState<Repo[]>([]);
  const [inReview, setInReview] = React.useState<Repo[]>([]);
  const [complete, setComplete] = React.useState<Repo[]>([]);
  const [stars, setStars] = React.useState(0);

  const moveToInProgress = (id: string, columnName: Columns) => {
    if (columnName === 'inReview') {
      const filterColumn = inReview?.filter(item => item.id !== id);
      const item = inReview?.find(item => item.id === id);
      setInProgress((prevState: any) => [...prevState, item]);
      setInReview(filterColumn);
    }
  };
  const moveToInReview = (id: string, columnName: Columns) => {
    if (columnName === 'inProgress') {
      const filterColumn = inProgress?.filter(item => item.id !== id);
      const item = inProgress?.find(item => item.id === id);
      setInReview((prevState: any) => [...prevState, item]);
      setInProgress(filterColumn);
    }
    if (columnName === 'complete') {
      const filterColumn = complete?.filter(item => item.id !== id);
      const item = complete?.find(item => item.id === id);
      setInReview((prevState: any) => [...prevState, item]);
      setComplete(filterColumn);
    }
  };
  const moveToComplete = (id: string, columnName: Columns) => {
    if (columnName === 'inReview') {
      const filterColumn = inReview?.filter(item => item.id !== id);
      const item = inReview?.find(item => item.id === id);
      setComplete((prevState: any) => [...prevState, item]);
      setInReview(filterColumn);
    }
  };

  React.useEffect((): any => {
    let isSubscribed = true;
    async function getUserRepo(userId: string) {
      const rawRepos = await fetch(`https://api.github.com/users/${userId}/repos`);
      const repos = await rawRepos.json();
      const data = cleanData(repos);
      if (isSubscribed) {
        setInProgress(data);
        setStars(getStarCount(repos));
      }
    }
    getUserRepo(user).catch(console.error);
    return () => (isSubscribed = false);
  }, [user]);

  return (
    <>
      <Header>
        <Headline>{user}</Headline>
        <Stars>
          <svg
            width="16"
            height="15"
            viewBox="0 0 16 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.33482 1.02736C7.54493 0.383625 8.45561 0.383617 8.66572 1.02736L10.0244 5.19022H14.4203C15.0992 5.19022 15.3806 6.05956 14.8305 6.45741L11.2769 9.02763L12.6345 13.1869C12.8448 13.8313 12.108 14.3685 11.5588 13.9713L8.00027 11.3975L4.44175 13.9713C3.89253 14.3685 3.15575 13.8313 3.36606 13.1869L4.72361 9.02763L1.17001 6.45741C0.619938 6.05956 0.901374 5.19022 1.58025 5.19022H5.97611L7.33482 1.02736ZM8.00027 2.21142L6.85921 5.70742C6.76523 5.99538 6.49668 6.19022 6.19376 6.19022H2.50693L5.48692 8.34555C5.73337 8.5238 5.83651 8.8408 5.74214 9.12994L4.6028 12.6207L7.59004 10.4601C7.83487 10.283 8.16568 10.283 8.41051 10.4601L11.3978 12.6207L10.2584 9.12994C10.164 8.8408 10.2672 8.5238 10.5136 8.34555L13.4936 6.19022H9.80678C9.50387 6.19022 9.23532 5.99538 9.14133 5.70742L8.00027 2.21142Z"
            />
          </svg>
          {stars}
        </Stars>
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
  grid-template-columns: 1fr auto;
  gap: 20px;
  p {
    max-width: 370px;
    color: var(--color2);
  }
`;

const Stars = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  svg {
    fill: var(--color1);
  }
`;
