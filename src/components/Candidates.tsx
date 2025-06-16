
import styles from './Candidates.module.css';

const Candidates: React.FC = () => {
  return (
    <div className={styles.Candidates}>
      <div className={styles['Candidates-content']}>
        <h1>Кандидаты с творческим и техническим опытом</h1>
        <p>Это место, где вы можете представить себя и найти начальный уровень работы...</p>
        <button className={styles.can}>Присоединиться</button>
        <p>Ищете кандидатов? Нанимайте сейчас</p>

        <div className={styles.gradient}>
          <img className={styles.img} src="/img/Candidates.png" alt="Candidate" />
        </div>

        <div className={styles['quote-container']}>
          <img className={styles.img_dop1} src="/img/11-11%20140357.png" alt="Quote 1" />
          <img className={styles.img_dop2} src="/img/140431.png" alt="Quote 2" />
        </div>

        <h1>
          Создание онлайн-присутствия — это сложно.
          <br /> Jobly делает это легким для рекрутеров
        </h1>
        <p>Чжао Цуй</p>
        <p>Основатель Jobly.co</p>
      </div>
    </div>
  );
};

export default Candidates;