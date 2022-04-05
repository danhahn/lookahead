import React from 'react';
import { StyledNavigation } from './style';

type Props = {
  active: boolean;
  onClick: () => void;
};

const Navigation: React.FC<Props> = ({ active, onClick }) => {
  return (
    <StyledNavigation onClick={onClick}>
      {active ? (
        <svg
          width="15"
          height="16"
          viewBox="0 0 15 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7.35413 1.68681C7.54939 1.49154 7.54939 1.17496 7.35413 0.979699C7.15887 0.784436 6.84228 0.784436 6.64702 0.979699L0.333909 7.29281C-0.0566163 7.68334 -0.0566147 8.3165 0.333909 8.70703L6.64702 15.0201C6.84228 15.2154 7.15887 15.2154 7.35413 15.0201C7.54939 14.8249 7.54939 14.5083 7.35413 14.313L1.5411 8.5H14.334C14.6101 8.5 14.834 8.27614 14.834 8C14.834 7.72386 14.6101 7.5 14.334 7.5H1.54093L7.35413 1.68681Z" />
        </svg>
      ) : (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 2.04816e-07L16 0V16H0V2.04816e-07ZM14.3636 1.63636V14.3636H1.63636V1.63636H14.3636Z"
          />
        </svg>
      )}
    </StyledNavigation>
  );
};

export default Navigation;
