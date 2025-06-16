
import styles from './ProfileBanner.module.css';

const ProfileBanner: React.FC = () => {
  return (
    <div className={styles['profile-section']}>
      <div className={styles['profile-content']}>
        <div className={styles['profile-text']}>
          <h1>
            Заполните свой профиль.
            <br /> Пусть работа найдет вас.
          </h1>
          <a href="#" className={styles['join-now']}>
            Присоединиться
          </a>
        </div>
        <div className={styles['profile-image']}>
          <img src="/img/photo_2024-11-20_18-49-23.jpg" alt="Set up your profile" />
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;