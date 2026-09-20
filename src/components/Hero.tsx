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
          Explore Jabalpur through its Narmada ghats, heritage forts, waterfalls,
          cafés, local food trails and weekend experiences across the city.
        </p>
        <SearchBox />
      </div>
    </section>
  );
}
