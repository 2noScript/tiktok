import Button from "~/components/ Button";

import classNames from "classnames/bind";
import styles from './Menu.module.scss'
const cx = classNames.bind(styles)
function MenuItem({ data, onClick, to }) {
    return <Button leftIcon={data.icon} className={cx('menu-item')} onClick={onClick} to={to}>
        {data.title}
    </Button>;
}

export default MenuItem;