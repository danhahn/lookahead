import React from 'react';
import { Columns } from './Kanbon';
import { Li } from './styles';

type Props = {
  repo: any;
  leftArrow?: boolean;
  rightArrow?: boolean;
  moveRight?: (id?: string, column?: Columns) => void;
  moveLeft?: (id?: string, column?: Columns) => void;
  fromColumn?: Columns;
  toColumn?: Columns;
};

const RepoItem: React.FC<Props> = ({
  repo,
  leftArrow,
  rightArrow,
  moveRight,
  moveLeft,
  fromColumn,
}) => {
  return (
    <Li>
      <svg
        width="15"
        height="16"
        viewBox="0 0 15 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={leftArrow ? 'active' : ''}
        onClick={() => moveLeft?.(repo.id)}
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
        className={rightArrow ? 'active' : ''}
        onClick={() => moveRight?.(repo.id, fromColumn)}
      >
        <path d="M7.35413 1.68681C7.54939 1.49154 7.54939 1.17496 7.35413 0.979699C7.15887 0.784436 6.84228 0.784436 6.64702 0.979699L0.333909 7.29281C-0.0566163 7.68334 -0.0566147 8.3165 0.333909 8.70703L6.64702 15.0201C6.84228 15.2154 7.15887 15.2154 7.35413 15.0201C7.54939 14.8249 7.54939 14.5083 7.35413 14.313L1.5411 8.5H14.334C14.6101 8.5 14.834 8.27614 14.834 8C14.834 7.72386 14.6101 7.5 14.334 7.5H1.54093L7.35413 1.68681Z" />
      </svg>
    </Li>
  );
};

export default RepoItem;
