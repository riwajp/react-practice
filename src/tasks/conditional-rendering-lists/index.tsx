import { useEffect, useMemo, useState } from "react";
import { ListRenderer } from "./components/ListRenderer";
import showsData from "./shows.json";
import styles from "./styles.module.css";

function App() {
  const [shows, setShows] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [selectedGenre, setSelectedGenre] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    setShows(showsData);
    setIsLoading(false);
  }, []);

  const allGenres = useMemo(() => {
    return Array.from(new Set(shows.flatMap((show) => show.genres))).sort();
  }, [shows]);

  const filteredShows = shows.filter((show) => {
    const matchesGenre =
      selectedGenre === "All" || show.genres.includes(selectedGenre);
    const matchesSearch = show.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesGenre && matchesSearch;
  });

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>TV Shows</h1>

      <div className={styles.controls}>
        <input
          type="text"
          placeholder="Search shows..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={styles.input}
        />
        <select
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
          className={styles.select}
        >
          <option value="All">All Genres</option>
          {allGenres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>

      <ListRenderer
        isLoading={isLoading}
        items={filteredShows}
        renderItem={(show) => (
          <div key={show.id} className={styles.card}>
            <img
              src={show.image.original || show.image.medium}
              alt={show.name}
              className={styles.image}
            />
            <h2 className={styles.title}>{show.name}</h2>
            <p className={styles.rating}>
              Rating: {show.rating.average ?? "N/A"}
            </p>
            <p className={styles.genres}>Genres: {show.genres.join(", ")}</p>
            <div
              className={styles.summary}
              dangerouslySetInnerHTML={{ __html: show.summary }}
            ></div>
          </div>
        )}
      />
    </div>
  );
}

export default App;
