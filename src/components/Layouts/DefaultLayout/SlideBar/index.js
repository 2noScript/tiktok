import classNames from "classnames/bind";
import styles from "./SlideBar.module.scss";
const cx = classNames.bind(styles);
function SlideBar() {
  return (
    <aside className={cx("wrapper")}>
      <h2>slideBar</h2>
    </aside>
  );
}

export default SlideBar;
