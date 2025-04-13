import { useState } from "react";
import styles from "./News.module.scss";
import news1 from "/images/image.png";
import news2 from "/images/image2.png";
import news3 from "/images/image3.png";
import news4 from "/images/image4.png";

function News() {
  const [showOptions, setShowOptions] = useState(false);

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
              />
            </div>
            <button type="reset" className={styles.resetBtn}>
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
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
          </form>
        </div>
      </div>
      <div className={styles.popularSearchContainer}>
        <span className={styles.popularSearchInfo}>Popular search queries</span>
        <a className={styles.popularSearch} href="">
          elections
        </a>
        <a className={styles.popularSearch} href="">
          immigration
        </a>
        <a className={styles.popularSearch} href="">
          economy
        </a>
        <a className={styles.popularSearch} href="">
          war
        </a>
        <a className={styles.popularSearch} href="">
          European Union
        </a>
        <a className={styles.popularSearch} href="">
          duties
        </a>
      </div>
      <div className={styles.optionsSearchContainer}>
        <div>
          <button
            className={styles.optionsBtn}
            onClick={() => setShowOptions((prev) => !prev)}
          >
            Popular
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
              <span>Popular</span>
            </div>
          ) : null}
        </div>
        <div>
          <a className={styles.optionsSearch} href="">
            elections
          </a>
          <a className={styles.optionsSearch} href="">
            immigration
          </a>
          <a className={styles.optionsSearch} href="">
            economy
          </a>
          <a className={styles.optionsSearch} href="">
            war
          </a>
          <a className={styles.optionsSearch} href="">
            European Union
          </a>
          <a className={styles.optionsSearch} href="">
            duties
          </a>
        </div>
        <div>
          <button className={styles.filtersBtn}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              role="img"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 6C0 5.17157 0.671573 4.5 1.5 4.5H22.5C23.3284 4.5 24 5.17157 24 6C24 6.82843 23.3284 7.5 22.5 7.5H1.5C0.671573 7.5 0 6.82843 0 6ZM3 12C3 11.1716 3.67157 10.5 4.5 10.5H19.5C20.3284 10.5 21 11.1716 21 12C21 12.8284 20.3284 13.5 19.5 13.5H4.5C3.67157 13.5 3 12.8284 3 12ZM7.5 16.5C6.67157 16.5 6 17.1716 6 18C6 18.8284 6.67157 19.5 7.5 19.5H16.5C17.3284 19.5 18 18.8284 18 18C18 17.1716 17.3284 16.5 16.5 16.5H7.5Z"
              ></path>
            </svg>
            Filters
          </button>
        </div>
      </div>
      <div className={styles.newsContainerContent}>
        <div className={styles.pieceOfNews}>
          <div className={styles.imageContainer}>
            <img src={news1} alt="" />
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            ratione enim aperiam assumenda explicabo{" "}
          </p>
        </div>
        <div className={styles.pieceOfNews}>
          <div className={styles.imageContainer}>
            <img src={news2} alt="" />
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            ratione enim aperiam assumenda explicabo{" "}
          </p>
        </div>
        <div className={styles.pieceOfNews}>
          <div className={styles.imageContainer}>
            <img src={news3} alt="" />
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            ratione enim aperiam assumenda explicabo{" "}
          </p>
        </div>
        <div className={styles.pieceOfNews}>
          <div className={styles.imageContainer}>
            <img src={news4} alt="" />
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            ratione enim aperiam assumenda explicabo{" "}
          </p>
        </div>
        <div className={styles.pieceOfNews}>
          <div className={styles.imageContainer}>
            <img src={news1} alt="" />
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            ratione enim aperiam assumenda explicabo{" "}
          </p>
        </div>
        <div className={styles.pieceOfNews}>
          <div className={styles.imageContainer}>
            <img src={news2} alt="" />
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            ratione enim aperiam assumenda explicabo{" "}
          </p>
        </div>
        <div className={styles.pieceOfNews}>
          <div className={styles.imageContainer}>
            <img src={news3} alt="" />
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            ratione enim aperiam assumenda explicabo{" "}
          </p>
        </div>
        <div className={styles.pieceOfNews}>
          <div className={styles.imageContainer}>
            <img src={news4} alt="" />
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            ratione enim aperiam assumenda explicabo{" "}
          </p>
        </div>
        <div className={styles.pieceOfNews}>
          <div className={styles.imageContainer}>
            <img src={news1} alt="" />
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            ratione enim aperiam assumenda explicabo{" "}
          </p>
        </div>
        <div className={styles.pieceOfNews}>
          <div className={styles.imageContainer}>
            <img src={news2} alt="" />
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            ratione enim aperiam assumenda explicabo{" "}
          </p>
        </div>
        <div className={styles.pieceOfNews}>
          <div className={styles.imageContainer}>
            <img src={news3} alt="" />
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            ratione enim aperiam assumenda explicabo{" "}
          </p>
        </div>
        <div className={styles.pieceOfNews}>
          <div className={styles.imageContainer}>
            <img src={news4} alt="" />
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            ratione enim aperiam assumenda explicabo{" "}
          </p>
        </div>
        <div className={styles.pieceOfNews}>
          <div className={styles.imageContainer}>
            <img src={news1} alt="" />
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            ratione enim aperiam assumenda explicabo{" "}
          </p>
        </div>
        <div className={styles.pieceOfNews}>
          <div className={styles.imageContainer}>
            <img src={news2} alt="" />
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            ratione enim aperiam assumenda explicabo{" "}
          </p>
        </div>
        <div className={styles.pieceOfNews}>
          <div className={styles.imageContainer}>
            <img src={news3} alt="" />
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            ratione enim aperiam assumenda explicabo{" "}
          </p>
        </div>
        <div className={styles.pieceOfNews}>
          <div className={styles.imageContainer}>
            <img src={news4} alt="" />
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            ratione enim aperiam assumenda explicabo{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default News;
