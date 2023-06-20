import styles from "./OpenClosedFilter.module.css";
import cx from "clsx";

export default function OpenClosedFilters({ isOpendMode, onClickMode }) {
  return (
    <div className={styles.selectButton}>
      <OpenClosedFilter
        state={"open"}
        selected={isOpendMode}
        onClick={() => onClickMode("open")}
      />

      <OpenClosedFilter
        state={"Closed"}
        selected={!isOpendMode}
        onClick={() => onClickMode("closed")}
      />
    </div>
  );
}

function OpenClosedFilter({ state, onClick, selected }) {
  return (
    <>
      <div className={styles.filterList}></div>
      <span
        role="button"
        className={cx(styles.textFilter, { [styles.selected]: selected })}
        onClick={() => onClick(state)}
      >
        {state}
      </span>
    </>
  );
}
