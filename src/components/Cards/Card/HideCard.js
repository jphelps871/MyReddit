import React from 'react';
import SnooIcon from '../../../assets/icons/aside-images/snooIcon.svg';
import './Card.css';

const HideCard = () => (
  <>
    <div className="card hide-card">
      <h3 classame="title">Sensitive Material</h3>
      <div className="blur">
        <div className="info">
          <button className="subreddit anchor-subreddit" type="button">
            Not Active
          </button>
        </div>
        <div className="media">
          <img
            src={SnooIcon}
            style={{
              backgroundColor: 'lightGrey',
              height: 200,
              width: '100%',
            }}
            alt="Sensitive Material"
          />
        </div>
      </div>
    </div>
  </>
);

export default HideCard;
