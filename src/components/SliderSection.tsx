0
import styles from './SliderSection.module.css';

const SliderSection: React.FC = () => {
  return (
    <section className={styles['slider-section']}>
      <h2>Наши лидеры</h2>
      <div className={styles['swiper-container']}>
        <div className={styles['swiper-wrapper']}>
          <div className={styles['swiper-slide']}>
            <img src="/img/Candidates.png" alt="Candidate 1" />
            <h3>Candidate 1</h3>
            <p>Software Engineer</p>
          </div>
          {/* Можно добавить другие слайды по аналогии */}
        </div>
        <div className={styles['swiper-button-next']}>&#10095;</div>
        <div className={styles['swiper-button-prev']}>&#10094;</div>
        <div className={styles['swiper-pagination']}></div>
      </div>
    </section>
  );
};

export default SliderSection;