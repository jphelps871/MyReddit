import React from 'react';
import PropTypes from 'prop-types';
import './AsideBody.css';
import SnooImg from '../../../../assets/icons/aside-images/snooIcon.svg';

const Icon = ({ srcIcon }) => (
  <div className="imgIcon">
    {srcIcon ? <img src={srcIcon} alt="" /> : <img src={SnooImg} alt="" />}
  </div>
);

Icon.defaultProps = {
  srcIcon: '',
};

Icon.propTypes = {
  srcIcon: PropTypes.string,
};

export default Icon;
