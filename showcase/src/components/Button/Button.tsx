import React from "react";
import styles from "../../styles/Global";

interface ButtonProps {
  assetUrl: string;
  link: string;
}

const Button: React.FC<ButtonProps> = (
  props: ButtonProps
): React.ReactElement => {
  const { assetUrl, link } = props;
  return (
    <div
      className={styles.btnBlack}
      onClick={(): void => {
        window.open(link, "_blank");
      }}
    >
      <img src={assetUrl} alt="btnIcon" className={styles.btnIcon} />
      <div className="flex flex-col justify-start ml-4">
        <p className={`${styles.btnText} font-normal text-xs`}>View it on</p>
        <p className={`${styles.btnText} font-bold text-sm`}>Expo Store</p>
      </div>
    </div>
  );
};

export default Button;
