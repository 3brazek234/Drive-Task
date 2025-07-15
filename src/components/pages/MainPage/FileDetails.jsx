import React, { useState } from "react";
import styles from "./fileDetails.module.css";
import searh from "../../../assets/search.jpg";
import details from "../../../assets/details.png";
import user from "../../../assets/user.png";
import { FaGlobe } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
import ChildDetails from "./childDetails/ChildDetails";
import Activity from "./activity/Activity";
const FileDetails = ({ file, onClose }) => {
  console.log(file);
  const [activeTab, setActiveTab] = useState("details");
  if (!file) {
    return (
      <aside className={styles.detailsSidebar}>
        <button className={styles.closeBtn} onClick={onClose}>
          &times;
        </button>
        <div className={styles.emptyStateContainer}>
          <img
            src={searh}
            alt="اختر عنصرًا للاطلاع على التفاصيل"
            className={styles.emptyStateImg}
          />
          <div className={styles.emptyStateText}>
            اختر عنصرًا للاطلاع على التفاصيل.
          </div>
        </div>
      </aside>
    );
  }
  return (
    <aside className={styles.detailsSidebar}>
      <div className={styles.previewSection}>
        <div className={`${styles.previewHeader} between-row`}>
          <div>
            {" "}
            <span className={styles.fileName}>{file.name}</span>
          </div>
          <div>
            <button className={styles.closeBtn} onClick={onClose}>
              &times;
            </button>
          </div>
        </div>
        <div className={styles.tabs}>
          <ul className="center">
            <li
              onClick={() => setActiveTab("details")}
              className={activeTab === "details" ? styles.activeTab : ""}
            >
              تفاصيل
            </li>
            <li
              onClick={() => setActiveTab("activity")}
              className={activeTab === "activity" ? styles.activeTab : ""}
            >
              النشاط
            </li>
          </ul>
        </div>
        {activeTab === "details" && (
          <>
            <div className={styles.filePreview}>
              <img src={details} alt="file-image" />
            </div>
            <div className={`${styles.perm} `}>
              <h6>من لديه اذن الوصول</h6>
              <div className={`${styles.icons}`}>
                <img src={user} alt="user" />
                <FaGlobe className={styles.globe} />
              </div>
              <p>الملف الخاص بك</p>
              <button className={styles.permBtn}>ادارة اذونات الوصول</button>
              <div className={styles.border}></div>
            </div>
            <div className={styles.security}>
              <div className={styles.security_container}>
                <MdSecurity className={styles.security_icon} />
                <h6>قيود الأمان</h6>
              </div>
              <p>الملف محمي بكلمة المرور</p>
              <div className={styles.constraints}>
                <p>لم يتم فرض أي قيود</p>
                <p>اذا تم تطبيق اي قيود ستظهر هنا</p>
              </div>
              <div className={styles.border}></div>
            </div>
            <div className={styles.infoSection}>
              <div className={styles.container}>
                <div className={styles.header}>تفاصيل الملف</div>
                <ChildDetails />
              </div>
            </div>
          </>
        )}
        {
          activeTab === 'activity' && (
            <Activity/>
          )
        }
      </div>
    </aside>
  );
};

export default FileDetails;
