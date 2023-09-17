import styles from './header.module.scss';
import logo from '../../assets/img/image 4.png';
import cart from '../../assets/svg/cart.svg';
import heart from '../../assets/svg/heart.svg';
import user from '../../assets/svg/user.svg';

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.headerLeft}>
        <img className={styles.logo} src={logo} alt="logo" />
        <div>
          <p>REACT SNEAKERS</p>
          <p>Магазин лучших кроссовок</p>
        </div>
      </div>

      <ul className={styles.headerRight}>
        <li>
          <img src={cart} alt="" />
        </li>
        <li>price</li>
        <li>
          <img src={heart} alt="" />
        </li>
        <li>
          <img src={user} alt="" />
        </li>
      </ul>
    </div>
  );
}

export default Header;
