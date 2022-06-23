import React from "react";
import assets from "../../assets";
import styles from "../../styles/Global";
import FeatureCard from "../FeatureCard/FeatureCard";

const Features: React.FC = (): React.ReactElement => {
  return (
    <div className={`${styles.section} ${styles.bgPrimary} banner03`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.whiteText}`}>
            Technologies
          </h1>
          <p className={`${styles.pText} ${styles.whiteText}`}>
            NFT Marketplace has been developed using a cross-platform technology
            - React Native.
          </p>
        </div>
        <div className={styles.flexWrap}>
          <FeatureCard iconUrl={assets.typescript} iconText="TypeScript" />
          <FeatureCard iconUrl={assets.react} iconText="React Native" />
          <FeatureCard iconUrl={assets.expo02} iconText="Expo" />
        </div>
      </div>
    </div>
  );
};

export default Features;
