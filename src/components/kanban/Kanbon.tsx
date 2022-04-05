import React from 'react';
import styled from 'styled-components';
import Headline from '../Headline/Headline';
import { Board, Ul, Li } from './styles';

type Props = {
  user: string;
};

const Konbon: React.FC<Props> = ({ user }) => {
  const [userData, setUserData] = React.useState([]);

  async function getUserRepo(userId: string) {
    const rawRepos = await fetch(`https://api.github.com/users/${user}/repos`);
    const repos = await rawRepos.json();

    setUserData(repos);
  }

  React.useEffect(() => {
    console.log(user);
    getUserRepo(user);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <p>In progress (9)</p>
        <p>Review (1)</p>
        <p>Ready to merge (1)</p>
        <Ul>
          {userData.map((repo: any) => (
            <Li>
              <svg
                width="15"
                height="16"
                viewBox="0 0 15 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7.35413 1.68681C7.54939 1.49154 7.54939 1.17496 7.35413 0.979699C7.15887 0.784436 6.84228 0.784436 6.64702 0.979699L0.333909 7.29281C-0.0566163 7.68334 -0.0566147 8.3165 0.333909 8.70703L6.64702 15.0201C6.84228 15.2154 7.15887 15.2154 7.35413 15.0201C7.54939 14.8249 7.54939 14.5083 7.35413 14.313L1.5411 8.5H14.334C14.6101 8.5 14.834 8.27614 14.834 8C14.834 7.72386 14.6101 7.5 14.334 7.5H1.54093L7.35413 1.68681Z" />
              </svg>
              <span>{repo.name}</span>
              <svg
                width="15"
                height="16"
                viewBox="0 0 15 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7.35413 1.68681C7.54939 1.49154 7.54939 1.17496 7.35413 0.979699C7.15887 0.784436 6.84228 0.784436 6.64702 0.979699L0.333909 7.29281C-0.0566163 7.68334 -0.0566147 8.3165 0.333909 8.70703L6.64702 15.0201C6.84228 15.2154 7.15887 15.2154 7.35413 15.0201C7.54939 14.8249 7.54939 14.5083 7.35413 14.313L1.5411 8.5H14.334C14.6101 8.5 14.834 8.27614 14.834 8C14.834 7.72386 14.6101 7.5 14.334 7.5H1.54093L7.35413 1.68681Z" />
              </svg>
            </Li>
          ))}
        </Ul>
        <Ul></Ul>
        <Ul></Ul>
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
