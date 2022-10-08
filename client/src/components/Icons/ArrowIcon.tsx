import { FC } from 'react';

export const ArrowIcon: FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.2827 11.469L3.7832 3.96948L11.2827 11.469ZM5.03312 11.469H11.2827V5.2194" fill="#FF5E5E" />
    <path
      d="M11.2827 11.469L3.7832 3.96948M5.03312 11.469H11.2827V5.2194"
      stroke="#FF5E5E"
      strokeWidth="1.24992"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

ArrowIcon.defaultProps = {
  className: undefined,
};

export default ArrowIcon;
