import SearchBox from "./SearchBox";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.eyebrow}>Discover &bull; Explore &bull; Experience</div>
        <h1>
          Everything <span>Jabalpur</span>,<br />
          in one place.
        </h1>
        <p>
          Find the best places, events, cafes, restaurants, businesses and
          experiences in Jabalpur, Madhya Pradesh.
        </p>
        <SearchBox />
      </div>
    </section>
  );
}
