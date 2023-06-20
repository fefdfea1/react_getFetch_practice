import styles from "./Footer.module.css";

const URL_PREFIX = "https://docs.github.com/en/site-policy";

const footerItems = [
  {
    title: "Terms",
    link: `${URL_PREFIX}/github-terms/github-terms-of-service`,
  },
  {
    title: "Privacy",
    link: `${URL_PREFIX}/github-terms/github-terms-of-service`,
  },
  {
    title: "Security",
    link: `${URL_PREFIX}/github-terms/github-terms-of-service`,
  },
  {
    title: "Status",
    link: `${URL_PREFIX}/github-terms/github-terms-of-service`,
  },
  { title: "Docs", link: `${URL_PREFIX}/github-terms/github-terms-of-service` },
  {
    title: "Contact Github",
    link: `${URL_PREFIX}/github-terms/github-terms-of-service`,
  },
  {
    title: "Pricing",
    link: `${URL_PREFIX}/github-terms/github-terms-of-service`,
  },
  { title: "API", link: `${URL_PREFIX}/github-terms/github-terms-of-service` },
  {
    title: "Training",
    link: `${URL_PREFIX}/github-terms/github-terms-of-service`,
  },
  { title: "BLog", link: `${URL_PREFIX}/github-terms/github-terms-of-service` },
  {
    title: "About",
    link: `${URL_PREFIX}/github-terms/github-terms-of-service`,
  },
];

export default function Footer() {
  return (
    <ul className={styles.footer}>
      {footerItems.map((item, i) => (
        <li className={styles.item} key={item.title}>
          <a className={styles.link} href={item.link}>
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
}
