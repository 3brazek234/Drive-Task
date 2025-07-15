import Header from "../components/common/Header/Header";
import LeftSideBar from "../components/common/LeftSideBar/LeftSideBar";
import SideBar from "../components/common/SideBar/SideBar";
import MainPage from "../pages/MainPage/MainPage";
import styles from "./mainLayout.module.css";

const MainLayout = () => {
  return (
    <div className={styles.container}>
      <SideBar />
      <main className={styles.mainContent}>
        <div className={styles.head}>
          <Header />
        </div>
        <div className={styles.content}>
          <section className={styles.filesSection}>
            <MainPage />
          </section>
          <LeftSideBar />
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
