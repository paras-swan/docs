import cn from "classnames";
import styles from "./Callout.module.scss";
import { Icons } from "../../../../public/Icons";

export default function Callout({ children, className }) {
  return (
    <div className={cn(styles.container, className)}>
      <div className={styles.iconContainer}>
        <Icons.Info size={24} fill="var(--grey-700)" />
      </div>
      {children}
    </div>
  );
}
