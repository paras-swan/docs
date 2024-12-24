import cn from 'classnames';
import styles from './Image.module.scss';

export default function Image({ className, ...props }) {
  return <img className={cn(styles.container, className)} {...props} />;
}
