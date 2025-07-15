import { BsFileText } from "react-icons/bs";
import styles from "./childDetails.module.css";

const ChildDetails = () => {
  return (
    <div className={styles.childDetailsContainer}>
      <div className={styles.field}>
        <span className={styles.label}>النوع</span>
        <span className={styles.value}>CSS</span>
      </div>

      <div className={styles.field}>
        <span className={styles.label}>الحجم</span>
        <span className={styles.value}>15 كيلوبايت</span>
      </div>

      <div className={styles.field}>
        <span className={styles.label}>مساحة التخزين المستخدمة</span>
        <span className={styles.value}>15 كيلوبايت</span>
      </div>

      <div className={styles.field}>
        <span className={styles.label}>الموقع</span>
        <button className={styles.fileButton}>
          <BsFileText className={styles.folder_icon} />
          <span>offers</span>
        </button>
      </div>

      <div className={styles.field}>
        <span className={styles.label}>المالك</span>
        <span className={styles.value}>أنا</span>
      </div>

      <div className={styles.dateSection}>
        <div className={`${styles.dateField} between-row`}>
          <span className={styles.label}>تاريخ التعديل</span>
          <span className={styles.value}>
           
            2025/07/15 
          </span>
        </div>
        <div className={`${styles.dateField} between-row`}>
          <span className={styles.label}>تم فحصه</span>
          <span className={styles.value}>2025/07/15</span>
        </div>
        <div className={`${styles.dateField} between-row`}>
          <span className={styles.label}>تاريخ الإنشاء</span>
          <span className={styles.value}>2025/07/03</span>
        </div>
      </div>

      <div className={styles.statusField}>
        <div className={styles.field}>
          <span className={styles.label}>الوصف</span>
        </div>
        <input
          type="text"
          placeholder="إضافة وصف..."
          className={styles.statusInput}
        />
        <div className={styles.sizeInfo}>25,000/0</div>
      </div>
    </div>
  );
};

export default ChildDetails;
