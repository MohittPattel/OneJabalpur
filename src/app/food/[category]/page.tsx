import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ComingSoon from "@/components/ComingSoon";
import { buildMetadata } from "@/lib/metadata";
import { cafes, foodAreas, foodByMeal, foodCategories, jabalpurSpecials, jabalpurSweets, restaurants, streetFoodPlaces } from "@/lib/food-data";
import styles from "@/app/page.module.css";

const restaurantSearchQuery = encodeURIComponent("restaurants in Jabalpur Madhya Pradesh");

interface PageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return foodCategories.map((cat) => ({ category: cat.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category } = await params;
  const cat = foodCategories.find((c) => c.id === category);

  return buildMetadata({
    path: `/food/${category}`,
    title: cat ? `${cat.label} in Jabalpur` : "Category Not Found",
    description: cat
      ? `${cat.label} in Jabalpur — coming soon.`
      : undefined,
    // Coming Soon placeholder — unindex until real content ships (SEO doc §21).
    robots: { index: false, follow: true },
  });
}

export default async function FoodCategoryPage({ params }: PageProps) {
  const { category } = await params;
  const cat = foodCategories.find((c) => c.id === category);

  if (!cat) {
    notFound();
  }

  if (category === "restaurants") {
    return (
      <div className={styles.page}>
        <Header />
        <section className={styles.pageHero}>
          <div className={styles.container}>
            <div className={styles.eyebrow}>CURATED DINING</div>
            <h1>Restaurants in Jabalpur</h1>
            <p>A handpicked selection of restaurants for your next meal in Jabalpur.</p>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${restaurantSearchQuery}`}
              className={`${styles.filter} ${styles.active}`}
              style={{ display: "inline-block", marginTop: "20px" }}
            >
              Find restaurants on Google Maps
            </a>
          </div>
        </section>
        <main className={styles.pageContent}>
          <div className={styles.cards}>
            {restaurants.map((restaurant) => (
              <article key={restaurant.title} className={styles.card}>
                <img src={restaurant.image} alt={restaurant.title} className={styles.cardImage} loading="lazy" />
                <div className={styles.cardBody}>
                  <span className={styles.badge}>{restaurant.badge}</span>
                  <h3>{restaurant.title}</h3>
                  <p>{restaurant.desc}</p>
                  <div className={styles.meta}>{restaurant.meta}</div>
                </div>
              </article>
            ))}
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (category === "jabalpur-special") {
    return (
      <div className={styles.page}>
        <Header />
        <section className={styles.pageHero}>
          <div className={styles.container}>
            <div className={styles.eyebrow}>JABALPUR FOOD GUIDE</div>
            <h1>What&apos;s Special About Jabalpur?</h1>
            <p>Start with the food experiences that make Jabalpur memorable, not just the highest-rated restaurant.</p>
          </div>
        </section>
        <main className={styles.pageContent}>
          <div className={styles.cards}>
            {jabalpurSpecials.map((special) => (
              <article key={special.title} className={styles.card}>
                <img src={special.image} alt={special.title} className={styles.cardImage} loading="lazy" />
                <div className={styles.cardBody}>
                  <span className={styles.badge}>{special.badge}</span>
                  <h3>{special.title}</h3>
                  <p>{special.desc}</p>
                  <div className={styles.meta}>{special.meta}</div>
                </div>
              </article>
            ))}
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (category === "street-food") {
    return (
      <div className={styles.page}>
        <Header />
        <section className={styles.pageHero}>
          <div className={styles.container}>
            <div className={styles.eyebrow}>ICONIC FOOD PLACES</div>
            <h1>Jabalpur Street Food</h1>
            <p>Discover food markets, parathas, chaat and local stops that make Jabalpur&apos;s food scene worth exploring.</p>
          </div>
        </section>
        <main className={styles.pageContent}>
          <div className={styles.cards}>
            {streetFoodPlaces.map((place) => (
              <article key={place.title} className={styles.card}>
                <img src={place.image} alt={place.title} className={styles.cardImage} loading="lazy" />
                <div className={styles.cardBody}>
                  <span className={styles.badge}>{place.badge}</span>
                  <h3>{place.title}</h3>
                  <p>{place.desc}</p>
                  <div className={styles.meta}>{place.meta}</div>
                </div>
              </article>
            ))}
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (category === "cafes") {
    return (
      <div className={styles.page}>
        <Header />
        <section className={styles.pageHero}>
          <div className={styles.container}>
            <div className={styles.eyebrow}>CURATED CAFES</div>
            <h1>Cafes in Jabalpur</h1>
            <p>Discover a curated mix of modern coffee stops, art cafes, bakery cafes and classic Jabalpur experiences.</p>
          </div>
        </section>
        <main className={styles.pageContent}>
          <div className={styles.cards}>
            {cafes.map((cafe) => (
              <article key={cafe.title} className={styles.card}>
                <img src={cafe.image} alt={cafe.title} className={styles.cardImage} loading="lazy" />
                <div className={styles.cardBody}>
                  <span className={styles.badge}>{cafe.badge}</span>
                  <h3>{cafe.title}</h3>
                  <p>{cafe.desc}</p>
                  <div className={styles.meta}>{cafe.meta}</div>
                </div>
              </article>
            ))}
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (category === "sweets") {
    return (
      <div className={styles.page}>
        <Header />
        <section className={styles.pageHero}>
          <div className={styles.container}>
            <div className={styles.eyebrow}>JABALPUR SWEET GUIDE</div>
            <h1>Jabalpur&apos;s Sweets</h1>
            <p>Begin with Khoya Jalebi, Jabalpur&apos;s signature sweet, then explore the city&apos;s traditional mithai and dessert stops.</p>
          </div>
        </section>
        <main className={styles.pageContent}>
          <div className={styles.cards}>
            {jabalpurSweets.map((sweet) => (
              <article key={sweet.title} className={styles.card}>
                <img src={sweet.image} alt={sweet.title} className={styles.cardImage} loading="lazy" />
                <div className={styles.cardBody}>
                  <span className={styles.badge}>{sweet.badge}</span>
                  <h3>{sweet.title}</h3>
                  <p>{sweet.desc}</p>
                  <div className={styles.meta}>{sweet.meta}</div>
                </div>
              </article>
            ))}
          </div>

          <section style={{ marginTop: "64px" }}>
            <div className={styles.eyebrow}>LOCAL FOOD BY MEAL</div>
            <h2 style={{ marginBottom: "12px" }}>Plan Your Jabalpur Food Day</h2>
            <p style={{ color: "var(--color-text-secondary)", marginBottom: "28px" }}>From an early poha breakfast to a late-night food trail, here&apos;s what to look for.</p>
            <div className={styles.cards}>
              {foodByMeal.map((meal) => (
                <article key={meal.title} className={styles.card}>
                  <div className={styles.cardBody}>
                    <span className={styles.badge}>{meal.badge}</span>
                    <h3>{meal.title}</h3>
                    <p>{meal.desc}</p>
                    <div className={styles.meta}>{meal.meta}</div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  if (category === "food-trails") {
    return (
      <div className={styles.page}>
        <Header />
        <section className={styles.pageHero}>
          <div className={styles.container}>
            <div className={styles.eyebrow}>FOOD BY AREA</div>
            <h1>Jabalpur Food Trails</h1>
            <p>Explore the city one neighbourhood at a time, from classic cafés and kebabs to chaat, sweets and late-evening food.</p>
          </div>
        </section>
        <main className={styles.pageContent}>
          <div className={styles.cards}>
            {foodAreas.map((area) => (
              <article key={area.title} className={styles.card}>
                <div className={styles.cardBody}>
                  <span className={styles.badge}>📍 {area.number}</span>
                  <h3>{area.title}</h3>
                  <p><strong>Known for:</strong> {area.knownFor.join(", ")}</p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${area.title} Jabalpur food cafes`)}`}
                    className={`${styles.filter} ${styles.active}`}
                    style={{ display: "inline-block", marginTop: "8px" }}
                  >
                    Explore {area.title}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <Header />
      <section className={styles.pageHero}>
        <div className={styles.container}>
          <div className={styles.eyebrow}>EAT &amp; EXPLORE</div>
          <h1>{cat.label} in Jabalpur</h1>
          <p>Discover the best {cat.label.toLowerCase()} in Jabalpur.</p>
        </div>
      </section>
      <main className={styles.pageContent}>
        <ComingSoon
          icon="🍴"
          title={`${cat.label} Coming Soon`}
          message={`We're curating the best ${cat.label.toLowerCase()} in Jabalpur. Check back soon!`}
        />
      </main>
      <Footer />
    </div>
  );
}
