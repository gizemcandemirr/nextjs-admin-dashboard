import React, { useEffect, useState } from "react";
import styles from "../../styles/LanguageMenu.module.css";

import { useDispatch } from "react-redux";
import LanguageAction from "../../redux/actions/LanguageAction";
import Link from "next/link";

const LanguageMenu = () => {
  const [isListOpen, setIsListOpen] = useState(false);
  // const [currLang, setCurrLang] = useState('tr');
  // const dispatch = useDispatch()

  //   setCurrLang= lang => {

  //     localStorage.setItem('language', currLang)
  //     dispatch(ThemeAction.setMode(mode.class))  }

 
  return (
    <div>
      <button
        className={styles.dropdownToggle}
        onClick={() => setIsListOpen(!isListOpen)}
      >
        <Link href="/tr" >
          <a>
            <div className={styles.toggle}>
              <img src="/icon/tr.svg" width={24} />
              <span className={styles.span}>Tr </span>
            </div>
          </a>
        </Link>
      </button>
      {isListOpen && (
        <div>
          <ul>
            <li>
              <Link href="/en">
                <a>
                  <div className={styles.toggle}>
                    <img src="/icon/us.svg" width={24} />
                    <span className={styles.span}>En</span>
                  </div>
                </a>
              </Link>
            </li>

            <li>
              <Link href="./en">
                <a>
                  <div className={styles.toggle}>
                    <img src="/icon/fr.svg" width={24} />
                    <span className={styles.span}>Fr</span>
                  </div>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageMenu;
