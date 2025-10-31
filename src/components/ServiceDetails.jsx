"use client";
import React from 'react';
import PrimaryButton from './buttons/PrimaryButton';
import SecondaryButton from './buttons/SecondaryButton';
import { mobileAppShapes } from '@/app/servicesdetailes/services_detailes_model';
import { ourProcess } from '@/app/servicesdetailes/services_detailes_model';
import  MainTech from '@/app/servicesdetailes/services_detailes_model';

const ServiceDetails = ({ styles }) => {
  return (
    <div className={styles.sub_body}>
    <section className={styles.herosection} >

      <div className={styles.texthoc}>
      <h1>
        We build smooth and
        <br/>
        practical mobile applications
        <br/>
        that serve your project and
        <br/>
        earn your customers'<br/>satisfaction.
      </h1>
      <h4>
        From the idea to the App Store & Google Play,
        <br/>
        our team is with you every step of the way.
      </h4>
      <div className={styles.buttons}>
      <PrimaryButton text={"START YOUR PROJECT NOW"} href={"#"}/>
      <SecondaryButton text={"CONTUCT US"} href={"#"}/>
      </div>

      </div>

      <div className={styles.imghoc}>
        <img src="/sdp_images/img1.png" alt=""/>
      </div>
    </section>

    <div className={styles.whitesection}>
      <p>
        We design and develop custom mobile applications
         tailored to your business needs, with a
        <br/>
        full focus on user experience and performance.
      </p>
    </div>

    <div className={styles.whySection}>
      <h1>Why choose us in Mobile Apps</h1>
      <div className={styles.whyCards}>

        {mobileAppShapes.map((shape) => (
          <div key={shape.id} className={styles.card}>
            <img src={shape.image} alt="" />
            <h4>{shape.title}</h4>
          </div>
        ))}
      </div>

    </div>
        <section className={styles.ourProcess}>
          <h1>Our Process (How We Work With You in This Service)</h1>
          <div className={styles.processCards}>
            {ourProcess.map((process) => (
              <div key={process.id} className={styles.processCards}>
                <div className={styles.singlecard}>
                <h2>{process.title}</h2>
                <p>{process.description}</p>
                </div>
                </div>
                
              ))}
          </div>
        </section>

    <div className={styles.technologies}>
      <h1>Technologies We Use</h1>
            {MainTech.data.map((item, index) => (
        <div className={styles.mainTech} key={index}>
          <div className={styles.content}>
            <img src={item.image} alt="" />

            <div className={styles.sidecontent}>
              <div className={styles.titleshub}>
                {item.titles.map((title, i) => (
                  <div className={styles.titles} key={i}>
                    <h2>{title}</h2>
                  </div>
                ))}
                <br />
              </div>

              <div className={styles.icons}>
                {item.icons.map((icon, i) => (
                  <img src={icon} alt="" key={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}

      </div>
    <div className={styles.buttonsFot}>
      <PrimaryButton text={"START YOUR PROJECT NOW"} href={"#"}/>
      <SecondaryButton text={"CONTUCT US"} href={"#"}/>
      </div>  

    </div>

  );
};

export default ServiceDetails;