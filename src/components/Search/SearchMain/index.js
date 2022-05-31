import Tippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountItem from "~/components/AccountItem";
import classNames from "classnames/bind";
import { useState, useEffect, useRef } from "react";
import { useDebounce } from "~/hooks";
import request from "~/utils/request";
import routesConfig from "~/configs/routes";
//icon
import { IoIosCloseCircle } from "react-icons/io";
import { BiSearch, BiLoaderCircle } from "react-icons/bi";
import styles from "./SearchMain.module.scss";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);
function SearchMain(props) {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);
    const debounced = useDebounce(searchValue, 500);
    const input = useRef();
    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([]);
            return;
        }
        setLoading(true);
        request.get('users/search', {
            params: {
                q: debounced,
                type: "less",
            },
        }).then(res => {
            setSearchResult(res.data.data)
            setLoading(false)

        })
    }, [debounced]);
    return (
        <Tippy
            onClickOutside={() => {
                setShowResult(false);
            }}
            interactive={true}
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx("search-results")} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx("search-title")}>Accounts</h4>
                        {searchResult.map((item) => (
                            <AccountItem key={item.id} data={item} />
                        ))}
                    </PopperWrapper>
                </div>
            )}
        >
            <div className={cx("search")}>
                <input
                    ref={input}
                    onChange={(e) => {
                        setSearchValue(e.target.value);
                    }}
                    onFocus={() => {
                        setShowResult(true);
                    }}
                    value={searchValue}
                    type="text"
                    placeholder="Search accounts and videos"
                    spellCheck={false}
                ></input>
                {!!searchValue && !loading && (
                    <button
                        className={cx("clear-btn")}
                        onClick={() => {
                            setSearchValue("");
                            setSearchResult([]);
                            input.current.focus();
                        }}
                    >
                        <IoIosCloseCircle />
                    </button>
                )}
                {loading && (
                    <div className={cx("loading")}>
                        <BiLoaderCircle />
                    </div>
                )}
                <Link className={cx("search-btn")} to={routesConfig.search}>
                    <BiSearch />
                </Link>
            </div>
        </Tippy>
    );
}

export default SearchMain;
