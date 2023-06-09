import React from "react";
import style from "./style.module.css";
import Image from '../../Images/Logo.png'

const WhatWeDo = () => {
  return (
    <div>
      <div className={style.WhatWeDo}>
        <section className={style.leftSection}>
          <h3 data-aos="fade-up">Services</h3>
          <h2 data-aos="fade-up">What we do</h2>
          <p data-aos="fade-up">
            We have a vision of helping as many budding DeFi projects as possible, <br /> to
            easily connect with their target audience, by helping narrate and
            express <br /> their stories. So what we do basically is
          </p>
          <span className={style.imageBox} data-aos="fade-up">
            <img src={Image} alt="" />
          </span>
        </section>
        <section className={style.rightSection}>
          <span data-aos="fade-up">
            <h2>Level Up</h2>
            <p>We take your brand to the next level</p>
          </span>
          <span data-aos="fade-up">
            <h2>STORY TELLING</h2>
            <p>
              We communicate your goals, aims and objectives to your ideal
              audience in the language they’d understand and connect with
            </p>
          </span>
          <span data-aos="fade-up">
            <h2>ENSURE GREATNESS</h2>
            <p>
              We adopt strategies that ensure your project’s aims are achieved
            </p>
          </span>
          <span data-aos="fade-up">
            <h2>ONLINE-OFFLINE CONNECTIONS</h2>
            <p>
              We facilitate a connection between the online and offline space by
              hosting online and offline events for your project
            </p>
          </span>
        </section>
      </div>
    </div>
  );
};
export default WhatWeDo;
