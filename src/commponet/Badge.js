import style from "./Badge.module.css";

export default function Badge({ name, color }) {
  return (
    <span className={style.badge} style={{ background: `#${color}` }}>
      {name}
    </span>
  );
}
