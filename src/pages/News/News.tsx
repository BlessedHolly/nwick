import { useState } from "react";
import styles from "./News.module.scss";
import { news } from "../../NewsArray";
import { Link, useSearchParams } from "react-router-dom";

function News() {
  const [showOptions, setShowOptions] = useState(false);
  const [category, setCategory] = useState<
    | "politic"
    | "economy"
    | "sport"
    | "technologies"
    | "local"
    | "U.S. news"
    | null
  >(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get("filter");
  const [sort, setSort] = useState<"popular" | "latest">("latest");
  const targetNewsFilter = filter
    ? news.filter((el) =>
        el.title.toLocaleLowerCase().includes(filter.toLowerCase())
      )
    : news;

  const targetNewsCategory = category
    ? targetNewsFilter.filter((el) => el.category === category)
    : targetNewsFilter;

  const targetNews = sort
    ? targetNewsCategory.filter((el) => el.sort === sort)
    : targetNewsCategory;

  return (
    <div className={`globalPadding ${styles.newsContainer}`}>
      <div>
        <h1 className={styles.newsTitle1}>Latest UK news</h1>
        <h2 className={styles.newsTitle2}>
          The most important news from the world of UK news
        </h2>

        <div className={styles.formContainer}>
          <form className={styles.searchForm} role="search">
            <div className={styles.searchWrapper}>
              <input
                id="search-input"
                type="text"
                placeholder="What are you looking for?"
                autoComplete="off"
                className={styles.searchInput}
                value={filter || ""}
                onChange={(e) => setSearchParams({ filter: e.target.value })}
              />
            </div>
            <button
              onClick={() => setSearchParams({ filter: "" })}
              type="reset"
              className={styles.resetBtn}
            >
              ✖
            </button>

            <button type="submit" className={styles.submitBtn}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                role="img"
              >
                <path
                  d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </form>
        </div>
      </div>
      <div className={styles.popularSearchContainer}>
        <span className={styles.popularSearchInfo}>Popular search queries</span>
        <button
          onClick={() => setSearchParams({ filter: "elections" })}
          className={styles.popularSearch}
        >
          elections
        </button>
        <button
          onClick={() => setSearchParams({ filter: "immigration" })}
          className={styles.popularSearch}
        >
          immigration
        </button>
        <button
          onClick={() => setSearchParams({ filter: "duties" })}
          className={styles.popularSearch}
        >
          duties
        </button>
        <button
          onClick={() => setSearchParams({ filter: "war" })}
          className={styles.popularSearch}
        >
          war
        </button>
        <button
          onClick={() => setSearchParams({ filter: "European Union" })}
          className={styles.popularSearch}
        >
          European Union
        </button>
        <button
          onClick={() => setSearchParams({ filter: "Hamas" })}
          className={styles.popularSearch}
        >
          Hamas
        </button>
      </div>
      <div className={styles.optionsSearchContainer}>
        <div>
          <button
            className={styles.optionsBtn}
            onClick={() => setShowOptions((prev) => !prev)}
          >
            {sort === "popular" ? "Popular" : "latest"}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              role="img"
            >
              <path d="M21.5265 8.77171C22.1578 8.13764 22.1578 7.10962 21.5265 6.47555C20.8951 5.84148 19.8714 5.84148 19.24 6.47555L11.9999 13.7465L4.75996 6.47573C4.12858 5.84166 3.10492 5.84166 2.47354 6.47573C1.84215 7.10979 1.84215 8.13782 2.47354 8.77188L10.8332 17.1671C10.8408 17.1751 10.8486 17.183 10.8565 17.1909C11.0636 17.399 11.313 17.5388 11.577 17.6103C11.5834 17.6121 11.5899 17.6138 11.5964 17.6154C12.132 17.7536 12.7242 17.6122 13.1435 17.1911C13.1539 17.1807 13.1641 17.1702 13.1742 17.1596L21.5265 8.77171Z"></path>
            </svg>
          </button>
          {showOptions ? (
            <div className={styles.options}>
              <button
                className={`${styles.optionBtn} ${
                  sort === "popular" ? styles.activeOption : ""
                }`}
                onClick={() => {
                  setSort("popular");
                  setShowOptions(false);
                }}
              >
                Popular
              </button>
              <button
                className={`${styles.optionBtn} ${
                  sort === "latest" ? styles.activeOption : ""
                }`}
                onClick={() => {
                  setSort("latest");
                  setShowOptions(false);
                }}
              >
                Latest
              </button>
            </div>
          ) : null}
        </div>
        <div>
          <button
            onClick={() => setCategory("politic")}
            className={`${styles.optionsSearch} ${
              category === "politic" ? styles.currentCategory : ""
            }`}
          >
            politic
          </button>
          <button
            onClick={() => setCategory("economy")}
            className={`${styles.optionsSearch} ${
              category === "economy" ? styles.currentCategory : ""
            }`}
          >
            economy
          </button>
          <button
            onClick={() => setCategory("sport")}
            className={`${styles.optionsSearch} ${
              category === "sport" ? styles.currentCategory : ""
            }`}
          >
            sport
          </button>
          <button
            onClick={() => setCategory("technologies")}
            className={`${styles.optionsSearch} ${
              category === "technologies" ? styles.currentCategory : ""
            }`}
          >
            technologies
          </button>
          <button
            onClick={() => setCategory("local")}
            className={`${styles.optionsSearch} ${
              category === "local" ? styles.currentCategory : ""
            }`}
          >
            local
          </button>
          <button
            onClick={() => setCategory("U.S. news")}
            className={`${styles.optionsSearch} ${
              category === "U.S. news" ? styles.currentCategory : ""
            }`}
          >
            U.S. news
          </button>
        </div>
        <div>
          <button
            onClick={() => setCategory(null)}
            className={styles.filtersBtn}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              role="img"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 6C0 5.17157 0.671573 4.5 1.5 4.5H22.5C23.3284 4.5 24 5.17157 24 6C24 6.82843 23.3284 7.5 22.5 7.5H1.5C0.671573 7.5 0 6.82843 0 6ZM3 12C3 11.1716 3.67157 10.5 4.5 10.5H19.5C20.3284 10.5 21 11.1716 21 12C21 12.8284 20.3284 13.5 19.5 13.5H4.5C3.67157 13.5 3 12.8284 3 12ZM7.5 16.5C6.67157 16.5 6 17.1716 6 18C6 18.8284 6.67157 19.5 7.5 19.5H16.5C17.3284 19.5 18 18.8284 18 18C18 17.1716 17.3284 16.5 16.5 16.5H7.5Z"
              ></path>
            </svg>
            Filters
          </button>
        </div>
      </div>
      <div className={styles.newsContainerContent}>
        {targetNews.map((pieceOfNews) => (
          <div key={pieceOfNews.id} className={styles.pieceOfNews}>
            <div className={styles.imageContainer}>
              <Link to={`${pieceOfNews.id}`}>
                <img src={pieceOfNews.image} alt="" />
              </Link>
            </div>
            <p>{pieceOfNews.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
