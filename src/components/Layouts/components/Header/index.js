//components
import Button from "~/components/ Button";
import { SearchMain } from "~/components/Search";
import { Menu } from "~/components/Popper";
import Logo from "~/components/Logo";
// import Tippy from '@tippyjs/react';
import Tippy from "@tippyjs/react";
//hooks
import classNames from "classnames/bind";
import { useState } from "react";
//images

// ico
import { BsPlus } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { IoMdMore } from "react-icons/io";
import { MdOutlineLanguage, MdOutlinePerson } from "react-icons/md";
import {
  AiOutlineQuestionCircle,
  AiOutlineMessage,
  AiOutlineSetting,
} from "react-icons/ai";
import { CgKeyboard } from "react-icons/cg";
import { BiMessageAltMinus } from "react-icons/bi";
//styles
import "tippy.js/dist/tippy.css";
import styles from "./Header.module.scss";
const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <MdOutlineLanguage />,
    title: "English",
    children: {
      title: "language",
      data: [
        {
          code: "en",
          title: "english",
        },
        {
          code: "vi",
          title: "Tiếng Việt",
        },
        {
          code: "en",
          title: "english",
        },
        {
          code: "vi",
          title: "Tiếng Việt",
        },
        {
          code: "en",
          title: "english",
        },
        {
          code: "vi",
          title: "Tiếng Việt",
        },
        {
          code: "en",
          title: "english",
        },
        {
          code: "vi",
          title: "Tiếng Việt",
        },
        {
          code: "en",
          title: "english",
        },
        {
          code: "vi",
          title: "Tiếng Việt",
        },
        {
          code: "en",
          title: "english",
        },
        {
          code: "vi",
          title: "Tiếng Việt",
        },
        {
          code: "en",
          title: "english",
        },
        {
          code: "vi",
          title: "Tiếng Việt",
        },
      ],
    },
  },
  {
    icon: <AiOutlineQuestionCircle />,
    title: "Feedback and help",
    to: "/feedback",
  },
  {
    icon: <CgKeyboard />,
    title: "Keyboard shortcuts",
    to: "profile",
  },
];

const USER_MENU = [
  {
    icon: <MdOutlinePerson />,
    title: "View Profile",
    to: "view-profile",
  },
  {
    icon: <FaTiktok />,
    title: "Get coins",
    to: "get_coins",
  },
  {
    icon: <AiOutlineSetting />,
    title: "Setting",
    to: "setting",
  },
  ...MENU_ITEMS,
  {
    icon: <FiLogIn />,
    title: "Log out",
  },
];
function Header() {
  const [isLogin, setiIsLogin] = useState(true);
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <Logo />
        <SearchMain />
        <div className={cx("actions")}>
          {!isLogin ? (
            <>
              <Button outlineBrown leftIcon={<BsPlus />}>
                upload
              </Button>
              <Button primary>Login</Button>
              <Menu items={MENU_ITEMS}>
                <button className={cx("more-btn")}>
                  <IoMdMore />
                </button>
              </Menu>
            </>
          ) : (
            <>
              <Button outlineBrown leftIcon={<BsPlus />}>
                upload
              </Button>

              <Tippy content="Message" placement="bottom">
                <button className={cx("actions-btn")}>
                  <AiOutlineMessage />
                </button>
              </Tippy>
              <Tippy content="Inbox" placement="bottom">
                <button className={cx("actions-btn")}>
                  <BiMessageAltMinus />
                </button>
              </Tippy>
              <Menu items={USER_MENU}>
                {/* <button className={cx('more-btn')}>
                  <IoMdMore />
                </button> */}
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8bZi-aqdC48WJ6ZYyrrfOWETwItNIUO-PAUczUD04j-bGYXclsluGXN87Prmt5wzezWs&usqp=CAU"
                  alt=""
                  className={cx("account-avatar")}
                />
              </Menu>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
