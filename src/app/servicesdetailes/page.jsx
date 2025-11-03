import React from 'react';
import ServiceDetails from '../../components/ServiceDetails';
import styles from './serviceDetails.module.css';

const ServiceDetailesPage = () => {
  return (
    <div className={styles.container}>
      <ServiceDetails styles={styles}/>
      
    </div>
  );
};

export default ServiceDetailesPage;
