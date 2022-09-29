import React, { FC } from 'react';
import styles from './UserStatusLogo.module.css';
import { IUserStatusLogoProps } from './UserStatusLogo.props';

export const UserStatusLogo: FC<IUserStatusLogoProps> = ({ width, status, className = '', ...props }) => {
  return (
    <svg
      className={`${styles.image} ${className}`}
      aria-label={'Пользовательская иконка статуса в Лиге ВТБ'}
      {...props}
      width={width}
      height={width * 0.72}
      viewBox="0 0 61 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_51_419)">
        <path
          d="M49.9898 8.79799H9.04509L11.9947 0.769775H52.9395L49.9898 8.79799ZM48.515 12.8121H7.55184L4.6022 20.8403H45.5469L48.515 12.8121ZM44.0905 24.8179H3.12738L0.177734 32.8461H41.0856L44.0905 24.8179Z"
          fill="url(#paint0_linear_51_419)"
          shapeRendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_51_419"
          x="0.177734"
          y="0.769775"
          width="60.7617"
          height="43.0764"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="4" dy="7" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_51_419" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_51_419" result="shape" />
        </filter>
        <linearGradient
          className={styles.image__gradient}
          id="paint0_linear_51_419"
          x1="77.2364"
          y1="50.4841"
          x2="-23.9605"
          y2="16.808"
          gradientUnits="userSpaceOnUse"
        >
          <animateTransform
            attributeName="gradientTransform"
            type="translate"
            from="-90"
            to="90"
            dur="6s"
            repeatCount="indefinite"
          ></animateTransform>
          <stop offset="0.408215" stopColor="#00AAFF" className={styles[`image__mainColor_${status}`]} />
          <stop
            className={styles[`image__shadeColor_${status}`]}
            offset="0.567048"
            stopColor="#00AAFF"
            stopOpacity="0.03"
          />
          <stop offset="0.703395" stopColor="#00AAFF" className={styles[`image__mainColor_${status}`]} />
        </linearGradient>
      </defs>
    </svg>
  );
};
