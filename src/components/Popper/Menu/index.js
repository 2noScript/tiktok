
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from '~/components/Popper'
import { useState } from "react";
import MenuItem from "./MenuItem";
import styles from './Menu.module.scss'
import Header from "./Header";
const cx = classNames.bind(styles)
function Menu(props) {
    const { children, items } = props
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1]
    const renderItems = () => {
        return current.data.map((item, index) => {
            const hasChildren = !!item.children
            if (hasChildren)
                return < MenuItem key={index} data={item} onClick={() => {
                    setHistory([...history, item.children])
                }} />
            return < MenuItem key={index} data={item} to={item.to} />
        }
        )
    }
    return <Tippy
        offset={[15, 10]}
        visible
        hideOnClick={
            false
        }
        onHide={
            () => {
                setHistory(history.slice(0, 1))
            }
        }
        interactive={true}
        delay={[100, 600]}
        placement='bottom-end'
        render={(attrs) => (
            <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
                <PopperWrapper className={cx('menu-popper')}>
                    {history.length > 1 && <Header title='Language' onBack={() => {
                        setHistory(history.slice(0, history.length - 1))
                    }} />}
                    <div className={cx('content')}>
                        {renderItems()}

                    </div>
                </PopperWrapper>
            </div>
        )}
    >
        {children}
    </Tippy >

}

export default Menu;