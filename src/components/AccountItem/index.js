import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { MdCheckCircle } from "react-icons/md";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);
function AccountItem({ data }) {
  return (

    <Link to={`/@${data.nickname}`} className={cx("wrapper")}>
      <img
        src={data.avatar}
        alt=""
        className={cx("avatar")}
      />
      <div className={cx("info")}>
        <div className={cx("name")}>
          <span>{data.nickname}</span>
          {
            data.tick &&
            <MdCheckCircle className={cx('check')} />
          }
        </div>
        <span className={cx("username")}>data.full_name</span>
      </div>
    </Link>
  );
}

export default AccountItem;
