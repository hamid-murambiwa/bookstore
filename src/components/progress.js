import React from 'react';
import PropTypes from 'prop-types';
import '../styling/progress.css';

const Progress = () => (
  <div className="grid-center">
    <div className="grid-item">
      <div className="percentage">
        <div className="progress-circle" />
        <div>
          <span>0%</span>
          <p className="completed">Completed</p>
        </div>
      </div>
    </div>
    <div className="grid-item-1">
      <p className="current-chapter">CURRENT CHAPTER</p>
      <p className="chapter" />
      <button className="update-progress" type="button">
        UPDATE PROGRESS
      </button>
    </div>
  </div>
);

Progress.propTypes = {
  progress: PropTypes.shape({
    currentChapter: PropTypes.string.isRequired,
    completed: PropTypes.string.isRequired,
  }).isRequired,
};

export default Progress;
