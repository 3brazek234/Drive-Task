import React from "react";
import { BsFileTextFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import styles from "./Activity.module.css";

const Activity = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>هذا الشهر</div>

      <div className={styles.notification}>
        <div className={styles.notificationHeader}>
          <div className={styles.avatar}></div>
          <div className={styles.notificationContent}>
            <div className={styles.notificationText}>شاركت عضواً واحداً</div>
            <div className={styles.notificationTime}>12:30 من 3 يوليو</div>
          </div>
        </div>

        <button className={styles.fileButton}>
          <BsFileTextFill size={16} />
          <span>ahmedhamdy.pdf</span>
          <span className={styles.pdfIcon}>PDF</span>
        </button>
      </div>

      <div className={styles.shareNotification}>
        <div className={`${styles.shareIcon} center`}>
          <FaUsers size={16} color="white" />
        </div>
        <div className={styles.shareContent}>
          <div className={styles.shareText}>
            جميع المستخدمين على الإنترنت الآن
          </div>
          <div className={styles.shareSubtext}>بالملكية الرقمية</div>
          <div className={styles.shareSubtext}>مشاهد</div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
