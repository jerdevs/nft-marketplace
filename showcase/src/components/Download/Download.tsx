import React from "react";
import styles from "../../styles/Global";
import assets from "../../assets";
import Button from "../Button/Button";

const Download: React.FC = (): React.ReactElement => {
  return (
    <div className={`${styles.section} ${styles.bgWhite}`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.blackText}`}>
            Download Source Code
          </h1>
          <p className={`${styles.pText} ${styles.blackText}`}>
            Get the full source code on GitHub
          </p>
        </div>
        <button
          className={styles.btnPrimary}
          onClick={(): void => {
            window.open(
              "https://github.com/jerdevs/nft-app/tree/master/showcase",
              "_blank"
            );
          }}
        >
          Source Code
        </button>
        <div className="pt-6">
          <Button
            assetUrl={assets.expo}
            link="https://expo.dev/@jerdevs/nft-app?serviceType=classic&distribution=expo-go"
          />
        </div>
        <div className={styles.flexCenter}>
          <img src={assets.scene} alt="download" className={styles.fullImg} />
        </div>
      </div>
    </div>
  );
};

export default Download;
