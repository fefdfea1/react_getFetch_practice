import { useState } from "react";
import styles from "./Tabs.module.css";
import { Link, useLocation } from "react-router-dom";
import cx from "clsx";

const TabList = [
  { name: "Code", pathName: "/code" },
  { name: "Issues", pathName: "/issue" },
  { name: "Pull Request", pathName: "/pulls" },
  { name: "Actions", pathName: "/actions" },
  { name: "Projects", pathName: "/projects" },
  { name: "Security", pathName: "/security" },
];

export default function Tabs() {
  const { pathname } = useLocation();
  return (
    <ul className={styles.tabList}>
      {TabList.map((tab, i) => (
        <Tab
          key={`${i}`}
          item={tab}
          selected={(pathname === "/" ? "/issue" : pathname) === tab.pathName}
        />
      ))}
    </ul>
  );
}

function Tab({ item, selected, onClick, number }) {
  return (
    <li>
      <Link to={`${item.pathName}`}>
        <button
          className={cx(styles.tab, { [styles.selected]: selected })}
          onClick={onClick}
        >
          <span>{item.name}</span>
          {number && <div className={styles.circle}>{number}</div>}
        </button>
      </Link>
    </li>
  );
}
