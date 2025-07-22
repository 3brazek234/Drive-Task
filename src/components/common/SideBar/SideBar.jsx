import { useState } from "react";
import SidebarModal from "./SidebarModal";
import styles from "./sideBar.module.css";
import {
  FaHome,
  FaFolder,
  FaDesktop,
  FaUserFriends,
  FaClock,
  FaStar,
  FaExclamationCircle,
  FaTrash,
  FaCloud,
} from "react-icons/fa";
import { sidebarItems } from "../../../constants/constants";
import logo from "../../../assets/logo.webp";
import { FaList } from "react-icons/fa6";

const SideBar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const icons = {
    FaHome,
    FaFolder,
    FaDesktop,
    FaUserFriends,
    FaClock,
    FaStar,
    FaExclamationCircle,
    FaTrash,
    FaCloud,
  };


  const sidebarContent = (
    <>
      <div className={`${styles.logo} center`}>
        <img src={logo} alt="logo" />
        <p>Drive</p>
      </div>
      <div className={`${styles.btn_contain} center`}>
        <button className={styles.newButton}>+ جديد</button>
      </div>
      <nav className={styles.menu}>
        <ul>
          {sidebarItems.map((item, index) => {
            const IconComponent = icons[item.icon];
            return (
              <li key={index} className={item.active ? styles.active : ""}>
                <IconComponent style={{ marginLeft: "8px" }} />
                {item.label}
                {item.storage && (
                  <span style={{ color: "#888", fontSize: "0.85rem" }}>
                    {" "}
                    ({item.storage})
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
      <div className={styles.storage}>
        <div className={styles.storageBar}>
          <div className={styles.storageFill} style={{ width: "84%" }}></div>
        </div>
        <div className={styles.storageText}>مساحة التخزين (84%)</div>
      </div>
      <div className={`${styles.footer} center`}>
        <button>
            الحصول علي مزيد من سعه التخزين
        </button>
      </div>
    </>
  );

  return (
    <>
      <aside className={styles.sidebar}>{sidebarContent}</aside>
      <button className={styles.menuIcon} onClick={() => setModalOpen(true)}>
        <FaList/>
      </button>
      <SidebarModal open={modalOpen} onClose={() => setModalOpen(false)}>
        {sidebarContent}
      </SidebarModal>
    </>
  );
};
export default SideBar;
