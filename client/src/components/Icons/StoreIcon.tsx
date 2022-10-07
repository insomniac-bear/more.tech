import { FC } from 'react';

const StoreIcon: FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="30" height="25" viewBox="0 0 30 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      // eslint-disable-next-line max-len
      d="M14.9976 18.5H5.9976V11H2.9976V23C2.9976 23.8297 3.66791 24.5 4.4976 24.5H16.4976C17.3273 24.5 17.9976 23.8297 17.9976 23V11H14.9976V18.5ZM29.7445 7.16562L25.746 1.16562C25.4648 0.748438 24.996 0.5 24.4945 0.5H5.50073C4.99916 0.5 4.53041 0.748438 4.25385 1.16562L0.255413 7.16562C-0.410212 8.16406 0.302288 9.5 1.50229 9.5H28.4976C29.6929 9.5 30.4054 8.16406 29.7445 7.16562ZM23.9976 23.75C23.9976 24.1625 24.3351 24.5 24.7476 24.5H26.2476C26.6601 24.5 26.9976 24.1625 26.9976 23.75V11H23.9976V23.75Z"
      fill="#002882"
    />
  </svg>
);

StoreIcon.defaultProps = {
  className: undefined,
};

export default StoreIcon;
