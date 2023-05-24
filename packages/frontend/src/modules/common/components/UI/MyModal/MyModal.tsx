import React from 'react';
import classes from './MyModal.module.css';

interface MyModalProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactChild;
}
function MyModal({ children, visible, setVisible }: MyModalProps) {
  const rootClasses = [classes.myModal];
  if (visible) {
    rootClasses.push(classes.active);
  }
  const setVisibleHandler = () => {
    setVisible(false);
  };
  const stopPropagationHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };
  return (
    /* eslint-disable */
    <div className={rootClasses.join(' ')} onClick={setVisibleHandler}>
      <div className={classes.myModalContent} onClick={stopPropagationHandler}>
        {children}
      </div>
    </div>
    /* eslint-disable */
  );
}

export default MyModal;
