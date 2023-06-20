import styles from "./ListFilter.module.css";
import Modal from "./Modal";
import axios from "axios";
import { useEffect, useState } from "react";
import { GITHUB_API } from "../api";

export default function ListFilter({ onChangeFilter }) {
  const [showModal, setShowModal] = useState();
  const [list, setList] = useState([]);
  const filterList = ["Label", "Milestone", "Assignee"];

  const getData = async (apiPath) => {
    const data = await axios.get(
      `${GITHUB_API}/repos/facebook/react/${apiPath}`,
    );

    let result = [];
    // 데이터 가공 name , title, login -> name으로 통일
    switch (apiPath) {
      case "assigness":
        result = data.data.map((d) => ({
          name: d.login,
        }));
        break;
      case "milestones":
        result = data.data.map((d) => ({
          name: d.title,
        }));
        break;
      case "labels":
      default:
        result = data.data;
    }

    setList(result);
  };

  useEffect(() => {
    if (showModal) {
      const apiPath = `${showModal.toLowerCase()}s`;
      getData(apiPath);
    }
  }, [showModal]);

  return (
    <div className={styles.filterList}>
      {filterList.map((filter) => (
        <ListFilterItem
          key={filter}
          onChangeFilter={onChangeFilter}
          searchDataList={list}
          onClick={() => {
            setShowModal(filter);
          }}
          onClose={() => setShowModal()}
          showModal={showModal === filter}
        >
          {filter}
        </ListFilterItem>
      ))}
    </div>
  );
}

function ListFilterItem({
  onClick,
  children,
  onChangeFilter,
  searchDataList,
  showModal,
  onClose,
}) {
  const [list, setList] = useState(searchDataList);
  useEffect(() => {
    setList(searchDataList);
  }, [searchDataList]);
  return (
    <div className={styles.filterItem}>
      <span role="button" onClick={onClick}>
        {children} ▽
      </span>
      <div className={styles.modalContainer}>
        <Modal
          title={children}
          opened={showModal}
          onClose={onClose}
          placeholder="Filter labels"
          searchDataList={list}
          onClickCell={(params) => {
            onChangeFilter(params);
          }}
        />
      </div>
    </div>
  );
}
