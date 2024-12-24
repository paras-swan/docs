import cn from 'classnames';

import styles from './ArgumentList.module.scss';

function ArgumentList({ children, title, className }) {
  return (
    <div className={cn(styles.container, className)}>
      <h6>{title}</h6>
      <div className={styles.list}>{children}</div>
    </div>
  );
}

function Item({ children, title }) {
  return (
    <div className={styles.item}>
      <div className={styles.argumentTitle}>{title}</div>
      <div className={styles.argumentDescription}>{children}</div>
    </div>
  );
}

ArgumentList.Item = Item; 

export default ArgumentList;
