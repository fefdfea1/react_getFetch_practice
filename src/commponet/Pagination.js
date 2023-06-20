import style from "./Pagination.module.css";
import cx from "clsx";

export default function Pagination({
  currentPage,
  maxPage,
  onClickPageButton,
}) {
  return (
    <div>
      <button
        className={cx(style.button, style.blueButton)}
        disabled={currentPage === 1}
      >
        {"< Previous"}
      </button>
      {new Array(maxPage).fill(null).map((_, i) => (
        <PageButton
          number={i + 1}
          onClick={onClickPageButton}
          selected={i + 1 === currentPage}
          key={i}
        />
      ))}
      <button
        className={cx(style.button, style.blueButton)}
        disabled={currentPage === maxPage}
      >
        {"Next >"}
      </button>
    </div>
  );
}

function PageButton({ number, onClick, selected }) {
  return (
    <button
      className={cx(style.button, { [style.selected]: selected })}
      onClick={() => {
        onClick(number);
      }}
    >
      {number}
    </button>
  );
}
