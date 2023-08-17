import styles from './styles.module.css';

export const BattleMenu = ({ onAttack, onMagic, onHeal }) => (
  <div className={styles.main}>
    <div onClick={onAttack} className={styles.option}>
    God does not play dice!!
    </div>
    <div onClick={onMagic} className={styles.option}>
    Spooky action???
    </div>
    <div onClick={onHeal} className={styles.option}>
      Back up
    </div>
  </div>
);