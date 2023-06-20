import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import styles from "./ListContainer.module.css";
import Button from "./Button";
import ListItem from "./ListItem";
import ListItemLayout from "./ListItemLayout";
import Pagination from "./Pagination";
import ListFilter from "./ListFilter";
import OpenClosedFilters from "./OpenClosedFilters";
export default function ListContainer() {
  const [inputValue, setInputValue] = useState("is:pr is:open");
  const [list, setList] = useState([]);

  const [searchParams, setSerchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page"), 10) || 1;
  const state = searchParams.get("state");

  const getData = async (params) => {
    const { data } = await axios.get(
      "https://api.github.com/repos/facebook/react/issues",
      { params },
    );
    setList(data);
  };

  useEffect(() => {
    getData(searchParams);
  }, [searchParams]);

  return (
    <>
      <div className={styles.listContainer}>
        <div className={styles.topSection}>
          <input
            className={styles.input}
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
          <Link to={"/new"} className={styles.link}>
            <Button
              style={{
                fontSize: "14px",
                backgroundColor: "green",
                color: "white",
              }}
            >
              New Issue
            </Button>
          </Link>
        </div>
        <OpenClosedFilters
          isOpendMode={state !== "closed"}
          onClickMode={(state) => setSerchParams({ state })}
        />
        <ListItemLayout className={styles.listFilter}>
          <ListFilter
            onChangeFilter={(params) => {
              setSerchParams(params);
              //modal 검색창에서 유저가 검색해서 해당 결과를 클릭했을떄의 값
            }}
          />
        </ListItemLayout>
        <div className={styles.conatiner}>
          {list.map((listItem, index) => (
            <ListItem
              data={listItem}
              key={index}
              badges={[
                {
                  color: "red",
                  title: "Bug2",
                },
              ]}
            />
          ))}
        </div>
      </div>
      <div className={styles.paginationContainer}>
        <Pagination
          maxPage={10}
          currentPage={page}
          onClickPageButton={(number) => setSerchParams({ page: number })}
        />
      </div>
    </>
  );
}
