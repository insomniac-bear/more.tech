/* eslint-disable no-unused-vars */
import { FC } from 'react';
import styles from './ProgressBar.module.css';
import { IProgressBarProps } from './ProgressBar.props';

const ProgressBar: FC<IProgressBarProps> = ({
  className = '', size = 118, progress, skill,
}) => {
  // eslint-disable-next-line no-unused-vars
  const dash = 134;
  const progressDash = 243;
  const userProgress = (243 / 100) * progress - progressDash;
  const calculatedProgress = dash - userProgress;

  return (
    <svg className={className} id="svg1" xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 140 140">
      <circle
        cx="70"
        cy="70"
        r="60"
        fill="none"
        stroke="#E1E1E1"
        strokeWidth="15"
        strokeDashoffset="80"
        strokeDasharray="180 134"
        transform="rotate(-70 70 70)"
      />
      <circle
        cx="70"
        cy="70"
        r="60"
        transform="rotate(-206 70 70)"
        fill="none"
        strokeDashoffset={calculatedProgress} // 377
        strokeDasharray="377" // так не видно 377
        stroke="url(#paint0_radial_404_6525)"
        strokeWidth="15"
      >
        {/* <animate attributeName="stroke-dashoffset" dur="4s" begin="svg1.click" values="377;134" /> */}
      </circle>
      <text className={styles.svg__textPercent} id="count" x="50%" y="50%" fill="#FDFDFD" textAnchor="middle" dy="7">
        {`${progress}%`}
      </text>
      <text className={styles.svg__textSkill} id="count" x="50%" y="78%" fill="#FDFDFD" textAnchor="middle">
        {skill}
      </text>
      <defs>
        <radialGradient
          id="paint0_radial_404_6525"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(10.4268 82.1351) rotate(0.558968) scale(102.109 172.94)"
        >
          <stop stopColor="#FD4B4B" />
          <stop offset="0.505682" stopColor="#FAFF01" />
          <stop offset="0.677557" stopColor="#AADE01" />
          <stop offset="0.974432" stopColor="#21A500" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default ProgressBar;
