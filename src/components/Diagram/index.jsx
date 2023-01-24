import React from 'react';

import styles from './Diagram.module.scss';

const Diagram = ({ value, color }) => {
  const strokeValue = value === null ? 0 : 100 - value;
  return (
    <div className={styles.diagramWrapper}>
      <svg width="100%" height="100%" viewBox="0 0 42 42" className={styles.diagram}>
        <circle className="donut-hole" cx="21" cy="21" r="15.91549430918954" fill="#fff"></circle>
        <circle
          className="donut-ring"
          cx="21"
          cy="21"
          r="15.91549430918954"
          fill="transparent"
          stroke="transparent"
          strokeWidth="3"></circle>
        <circle
          id="donut-segment"
          className={styles.donutSegment}
          cx="21"
          cy="21"
          r="15.91549430918954"
          fill="transparent"
          stroke={color}
          strokeWidth="3"
          strokeDasharray={`${value} ${strokeValue}`}
          strokeDashoffset="70"></circle>
        <g className={styles.chartText}>
          <text x="50%" y="50%" className={styles.chartNumber}>
            {value}%
          </text>
        </g>
      </svg>
      <div className={styles.diagramCount}>
        <span>0</span>
        <span>100</span>
      </div>
    </div>
  );
};

export default Diagram;
