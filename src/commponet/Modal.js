import { useEffect, useState } from "react";
import style from "./Modal.module.css";
import cx from "clsx";

export default function Modal({
  opened,
  title,
  onClose,
  placeholder,
  searchDataList,
  onClickCell,
}) {
  const [filteredData, setFilteredData] = useState(searchDataList);
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    setFilteredData(searchDataList);
  }, [searchDataList]);
  //모달의 검색을 구현
  useEffect(() => {
    if (searchValue !== "") {
      const filteredSearchList = searchDataList.filter((item) =>
        item.name.toLowerCase().includes(searchValue.toLowerCase()),
      );
      setFilteredData(filteredSearchList);
    } else {
      setFilteredData(searchDataList);
    }
  }, [searchDataList, searchValue]);
  return (
    <div className={cx(style.modal, { [style.opened]: opened })}>
      <div className={style.header}>
        <span>{title}</span>
        <button onClick={onClose}>X</button>
      </div>
      <div className={style.input}>
        <input
          type="text"
          placeholder={placeholder}
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
      </div>
      <div className={style.list}>
        {filteredData.map((data) => (
          <div
            key={data.name}
            onClick={() => {
              const isLabel = title.toLowerCase() === "label";
              const apramKey = isLabel ? "labels" : title.toLowerCase();
              onClickCell({ [apramKey]: data.name });
            }}
            role="button"
            className={style.item}
          >
            {data.name}
          </div>
        ))}
      </div>
    </div>
  );
}
