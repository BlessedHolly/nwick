import { Navigate, useParams } from "react-router-dom";
import { allId, news } from "../../NewsArray";
import styles from "./PieceOfNews.module.scss";

function PieceOfNews() {
  const { id } = useParams();
  if (!id) return <Navigate to="/not-found" />;

  if (!allId.includes(parseInt(id))) return <Navigate to="/not-found" />;
  const pieceOfNews = news.find((el) => el.id === parseInt(id));

  return (
    <div className={`globalPadding ${styles.pieceOfNewsContainer}`}>
      <div className={styles.headOfNews}>
        <h1 className={styles.title}>{pieceOfNews?.title}</h1>
        <p className={styles.title}>{pieceOfNews?.data}</p>
        <img className={styles.image} src={pieceOfNews?.image} alt="" />
        <p className={styles.text}>{pieceOfNews?.text}</p>
      </div>
    </div>
  );
}

export default PieceOfNews;
