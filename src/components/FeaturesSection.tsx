
import React from 'react';
import FeatureCard from './FeatureCard'; 
import styles from './FeaturesSection.module.css';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      title: 'Professional Profile 1',
      description:
        'We know finding the right job is stressful, so we’ve made it simple...',
    },
    {
      title: 'Professional Profile 2',
      description:
        'Create a free portfolio on briefolio to show your best self and get discovered by recruiters.',
    },
    {
      title: 'Professional Profile 3',
      description:
        'Let jobs find you through our platform and land entry-level positions at top companies.',
    },
  ];

  return (
    <section className={styles.featuresSection}>
      <h2>Everything you want to know in one place.</h2>
      <div className={styles.cardDisplay}>
        <div className={styles.featuresSlider}>
          {features.map((feature, index) => (
            <FeatureCard key={index} title={feature.title} description={feature.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;