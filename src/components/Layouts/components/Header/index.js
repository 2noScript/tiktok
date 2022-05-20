//components
import Tippy from "@tippyjs/react/headless";
import { Wrapper as PropperWrapper } from "~/components/Propper";
import AccountItem from "~/components/AccountItem";
import Button from "~/components/ Button";
//hooks
import classNames from "classnames/bind";
import { useState, useEffect } from "react";
//images
import imgs from "~/assets/images";

// ico
import { IoIosCloseCircle } from "react-icons/io";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
//styles
import styles from "./Header.module.scss";
const cx = classNames.bind(styles);
function Header() {
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1, 2, 3]);
    }, 0);
  }, []);
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img src={imgs.logo} alt="tiktok" />
        </div>
        <Tippy
          interactive={true}
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div className={cx("search-results")} tabIndex="-1" {...attrs}>
              <PropperWrapper>
                <h4 className={cx("search-title")}>Accounts</h4>
                <AccountItem />
              </PropperWrapper>
            </div>
          )}
        >
          <div className={cx("search")}>
            <input
              type="text"
              placeholder="Search accounts and videos"
              spellCheck={false}
            ></input>
            <button className={cx("clear-btn")}>
              <IoIosCloseCircle />
            </button>
            <div className={cx("loading")}>
              <AiOutlineLoading3Quarters />
            </div>
            <div className={cx("search-btn")}>
              <BiSearch />
            </div>
          </div>
        </Tippy>
        <div className={cx("actions")}>

          <Button round
            leftIcon={<IoIosCloseCircle />}>
            upload
          </Button>
          <Button round >
            Login
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
