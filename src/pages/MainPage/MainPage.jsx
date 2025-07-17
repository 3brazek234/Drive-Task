import styles from "./mainPage.module.css";
import { useState, useRef, useEffect } from "react";
// استدعاء ال dummy data هنا لانها تحل محل الداتا اللي يتم استدعاؤها من السيرفر
import { menuOptions } from "../../constants/constants";
import { dummyFiles } from "../../data/dummyData";
import FileTable from "../../components/pages/MainPage/Table";
import FileDetails from "../../components/pages/MainPage/FileDetails";
import { MdApps } from "react-icons/md";
import { BsList } from "react-icons/bs";
import { AiOutlineInfoCircle } from "react-icons/ai";
import useFileStore from "../../store/useFileStore ";
import Grid from "../../components/pages/MainPage/Grid";
import { FaCheck } from "react-icons/fa";

const MainPage = () => {
  const [view, setView] = useState("list");
  const [menu, setMenu] = useState({ open: false, index: null, x: 0, y: 0 });
  const menuRef = useRef();

  const selectedFile = useFileStore((state) => state.selectedFile);
  const detailsOpen = useFileStore((state) => state.detailsOpen);
  const setDetailsOpen = useFileStore((state) => state.setDetailsOpen);
  const setSelectedFile = useFileStore((state) => state.setSelectedFile);

  useEffect(() => {
    const handleClick = (e) => {
      if (menu.open && menuRef.current && !menuRef.current.contains(e.target)) {
        setMenu({ open: false, index: null, x: 0, y: 0 });
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [menu.open]);

  const handleMenuOpen = (index, event) => {
    const rect = event.target.getBoundingClientRect();
    setMenu({
      open: true,
      index,
      x: rect.right + window.scrollX,
      y: rect.bottom + window.scrollY,
    });
  };

  return (
    <>
      <div className={`${styles.header} between-row`}>
        <h1>مرحبا بك في Drive</h1>
        <AiOutlineInfoCircle
          onClick={() => {
            setSelectedFile(null);
            setDetailsOpen(true);
          }}
          className={styles.info_icon}
        />
      </div>
      <div className={`${styles.sectionTitleContainer} between-row`}>
        <h2 className={styles.sectionTitle}>الملفات المقترحة</h2>
        <div className={styles.viewToggle}>
          <button
            className={`center ${view === "grid" ? styles.activeToggle : ""}`}
            onClick={() => setView("grid")}
            aria-label="عرض شبكي"
          >
            {view === "grid" && <FaCheck size={12} />}
            <MdApps />
          </button>
          <button
            className={`center ${view === "list" ? styles.activeToggle : ""}`}
            onClick={() => setView("list")}
            aria-label="عرض قائمة"
          >
            <BsList />
            {view === "list" && <FaCheck size={12} />}
          </button>
        </div>
      </div>
      {view === "list" && (
        <FileTable files={dummyFiles} onMenuOpen={handleMenuOpen} />
      )}
      {view === "grid" && (
        <Grid files={dummyFiles} onMenuOpen={handleMenuOpen} />
      )}
      {menu.open && (
        <div
          className={styles.menu}
          ref={menuRef}
          style={{ top: menu.y, left: menu.x, position: "absolute" }}
        >
          <ul>
            {menuOptions.map((opt, i) => (
              <li
                key={i}
                onClick={() =>
                  setMenu({ open: false, index: null, x: 0, y: 0 })
                }
              >
                <span style={{ marginLeft: 8 }}>{opt.icon}</span>
                {opt.label}
              </li>
            ))}
          </ul>
        </div>
      )}
      {detailsOpen && (
        <FileDetails
          file={selectedFile}
          onClose={() => setDetailsOpen(false)}
        />
      )}
    </>
  );
};

export default MainPage;
