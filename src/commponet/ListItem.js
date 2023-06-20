import styles from "./ListItem.module.css";
import ListItemLayout from "./ListItemLayout";
import Badge from "./Badge";
export default function ListItem({
  checked,
  onChangeCheckBox,
  onClickTitle,
  data,
}) {
  const badges = data.labels;
  const state = (data.state = "opend" ? "opend" : "closed");
  const date = data.state === "opend" ? data.created_at : data.closed_at;
  return (
    <ListItemLayout checked={checked} onClick={onChangeCheckBox}>
      <div>
        <div role="button" onClick={onClickTitle} className={styles.title}>
          {data.title}
          {badges.length > 0 &&
            badges.map((badgeProps, index) => (
              <Badge {...badgeProps} key={index} />
            ))}
        </div>
        <div className={styles.description}>
          # {data.number} {state} {date}
        </div>
      </div>
    </ListItemLayout>
  );
}
