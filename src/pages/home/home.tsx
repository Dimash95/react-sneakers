import styles from './home.module.scss';
import Header from '../../components/header';
import mainPic from '../../assets/img/main-pic.png';

function Home() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <img className={styles.mainPic} src={mainPic} alt="" />

      <div className={styles.allSneakers}>
        <h1 className={styles.title}>Все кроссовки</h1>
        <div className={styles.cardWrapper}>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
