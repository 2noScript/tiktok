import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Button.module.scss";
const cx = classNames.bind(styles);
function Button({
    to,
    href,
    children,
    primary,
    small,
    large,
    round,
    disable,
    center,
    leftIcon,
    rightIcon,
    outline,
    onClick,
    className,
    ...passProps
}) {
    let Comp = "button";
    const props = {
        to,
        href,
        onClick,
        ...passProps,
    };
    if (disable) {
        // delete props.onClick
        Object.keys(props).forEach((key) => {
            if (key.startsWith("on") && typeof props[key] === "function") {
                delete props[key];
            }
        });
    }
    const classes = cx("wrapper", {
        primary,
        outline,
        small,
        large,
        center,
        disable,
        round,
        [className]: className

    });
    if (to) {
        Comp = Link;
    } else if (href) {
        Comp = "a";
    }
    return (
        <Comp className={classes} {...props}>
            {
                leftIcon && <span className={cx('icon')}>
                    {leftIcon}
                </span>
            }
            <span className={cx('title')}>{children}</span>
            {
                rightIcon && <span className={cx('icon')}>
                    {rightIcon}
                </span>
            }
        </Comp>
    );
}

export default Button;
