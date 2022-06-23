import React from "react";
import styles from "../../styles/Global";
import assets from "../../assets";
import Button from "../Button/Button";

interface SectionWrapperProps {
  title: string;
  description: string;
  mockupImg: string;
  banner?: string;
  showBtn?: boolean;
  reverse?: boolean;
}

const SectionWrapper: React.FC<SectionWrapperProps> = (
  props: SectionWrapperProps
): React.ReactElement => {
  const { title, description, mockupImg, banner, showBtn, reverse } = props;
  return (
    <div
      className={`min-h-screen ${styles.section} ${styles.bgWhite} ${banner} ${
        reverse ? styles.bgWhite : styles.bgPrimary
      }`}
    >
      <div
        className={`flex items-center ${
          reverse ? styles.boxReverseClass : styles.boxClass
        } w-11/12 sm:w-full minmd:w-3/4`}
      >
        <div
          className={`${styles.descDiv} ${
            reverse
              ? `fade ${styles.textRight}`
              : `fadeLeftMini ${styles.textLeft}`
          }`}
        >
          <h1
            className={`${reverse ? styles.blackText : styles.whiteText} ${
              styles.h1Text
            }`}
          >
            {title}
          </h1>
          <h1
            className={`${reverse ? styles.blackText : styles.whiteText} ${
              styles.descriptionText
            }`}
          >
            {description}
          </h1>
          {showBtn && (
            <div className={`text-start ${reverse ? "flex justify-end" : ""}`}>
              <Button
                assetUrl={assets.expo}
                link="https://expo.dev/@jerdevs/nft-marketplace"
              />
            </div>
          )}
        </div>
        <div className={`flex-1 ${styles.flexCenter} p-8 sm:px-0`}>
          <img
            src={mockupImg}
            alt="mockup"
            className={`${
              reverse
                ? `fade ${styles.textRight}`
                : `fadeLeftMini ${styles.textLeft}`
            } ${styles.sectionImg}`}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper;
