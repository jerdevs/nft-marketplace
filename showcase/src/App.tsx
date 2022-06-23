import SectionWrapper from "./components/SectionWrapper/SectionWrapper";
import assets from "./assets";
import Features from "./components/Features/Features";
import Download from "./components/Download/Download";
import styles from "./styles/Global";

const App: React.FC = (): React.ReactElement => {
  return (
    <>
      <SectionWrapper
        title="Your personal store of Nifty NFTs. Begin selling, collecting and growing."
        description="Buy, store, collect, exchange NFTs and earn crypto. Join over 10+ million people using NFT Marketplace."
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper
        title="Smart User Interface Marketplace"
        description="Experience a slick UI of NFT Marketplace. Clean and smooth constant colors of a fluent UI design."
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper
        title="Deployment"
        description="NFT Marketplace is built using Expo which runs natively on all users' devices. You can easily get this app on your hands via the Expo store."
        mockupImg={assets.feature}
        reverse
        showBtn
      />
      <SectionWrapper
        title="Creative way to showcase the store"
        description="The app contains three screens. The first screen is a personalized login, the second screen lists all available NFTs for bidding and the third screen shows the details of a specific NFT."
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Download />
      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>
          Made by{" "}
          <span
            className="bold underline cursor-pointer"
            onClick={(): void => {
              window.open("https://jeremychua.netlify.app/", "_blank");
            }}
          >
            Jeremy
          </span>{" "}
          &amp; credits to{" "}
          <span
            className="bold underline cursor-pointer"
            onClick={(): void => {
              window.open("https://youtu.be/_ivIUCSOZ78", "_blank");
            }}
          >
            JavaScript Mastery
          </span>{" "}
          for the development of this project
        </p>
      </div>
    </>
  );
};

export default App;
