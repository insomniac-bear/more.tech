import { FC } from 'react';

const CrossIcon: FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="17" height="16" viewBox="0 0 17 16" stroke="black" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M15.2318 14.4931L1.89844 1.15979M15.2318 1.15979L1.89844 14.4931"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

CrossIcon.defaultProps = {
  className: undefined,
};

export default CrossIcon;
