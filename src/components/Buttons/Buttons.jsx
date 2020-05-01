import React from 'react';

import Button from '@material-ui/core/Button';
import styles from '../../App.module.css';

const Buttons = ({ handleClick }) => {
  return (
    <div className={styles.flex}>
      <Button color="secondary" onClick={() => handleClick('en')}>
        English
        </Button>
      <Button color="secondary" onClick={() => handleClick('chi')}>
        中文
        </Button>
    </div>
  );
}

export default Buttons;