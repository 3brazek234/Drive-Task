import styles from "./leftSideBar.module.css";
import { useState } from "react";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdAdd,
} from "react-icons/md";
import { leftSidebarIcons } from "../../../constants/constants";

const LeftSideBar = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <div
        className={`${
          open ? styles.sidebarOpen : styles.sidebarClosed
        } between-column`}
      >
        <div className={`${styles.iconsContainer} column`}>
          {leftSidebarIcons.map((item) => {
            const Icon = item.icon;
            return (
              <span
                key={item.label}
                className={`${styles.iconWrapper} center`}
                style={{ background: item.bgColor }}
              >
                <Icon style={{ color: item.color, fontSize: 22 }} />
              </span>
            );
          })}
          <span
            className={`${styles.iconWrapper} center`}
            style={{ background: "#fff" }}
          >
            <MdAdd style={{ color: "#222", fontSize: 22 }} />
          </span>
        </div>
        <div className={`${styles.foot_icon} center`}>
          {open && (
            <button
              className={`${styles.arrowButton} center`}
              onClick={() => setOpen((o) => !o)}
            >
              <MdKeyboardArrowLeft />
            </button>
          )}
          {!open && (
            <button
              className={`${styles.arrowButtonClosed} center`}
              onClick={() => setOpen(true)}
            >
              <MdKeyboardArrowRight />
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default LeftSideBar;
