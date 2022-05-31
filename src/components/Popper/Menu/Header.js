
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from '~/components/Popper'
import { AiFillCaretLeft } from "react-icons/ai"
import styles from './Menu.module.scss'
const cx = classNames.bind(styles)
function Header(props) {
    const { title, onBack } = props
    return <header className={cx('header')}>
        <button className={cx('btn-back')} onClick={onBack}>
            <AiFillCaretLeft />
        </button>
        <h4 className={cx('header-title')}>
            {title}
        </h4>
    </header>

}

export default Header;