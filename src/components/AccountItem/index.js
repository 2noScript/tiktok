import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { MdCheckCircle } from "react-icons/md";
const cx = classNames.bind(styles);
function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <img
        src='https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/3883322ef19a788ecd602ee34a22a810~c5_100x100.jpeg?x-expires=1652533200&x-signature=xx8ZLQ5xWwuwO7TQBvcofA3ib6k%3D'
        alt=""
        className={cx("avatar")}
      />
      <div className={cx("info")}>
        <div className={cx("name")}>
          <span>2noscript</span>
          <MdCheckCircle className={cx('check')} />
        </div>
        <span className={cx("username")}>2 noscript</span>
      </div>
    </div>
  );
}

export default AccountItem;
