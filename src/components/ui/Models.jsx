import useModelsStore from "../../store/useModelsStore";
import styles from "./models.module.css";
import { IoMdClose } from "react-icons/io";

const Models = ({
  children,
  title,
  /**
   * align: 'center' | 'flex-start' | 'flex-end'
   * valign: 'center' | 'flex-start' | 'flex-end'
   */
  align = "center",
  valign = "center",
}) => {
  const { isOpen, toggle } = useModelsStore();

  if (!isOpen) return null;

  return (
    <div
      className={styles.main_cont}
      onClick={toggle} // إغلاق عند الضغط على الخلفية
      style={{
        justifyContent: align,
        alignItems: valign,
      }}
    >
      <div
        className={styles.model}
        onClick={(e) => e.stopPropagation()} // لمنع إغلاق عند الضغط داخل المودال
      >
        <div className={`${styles.header} between-row`}>
          <h6>{title}</h6>
          <div className={styles.close_icon} onClick={toggle}>
            <IoMdClose />
          </div>
        </div>
        <div className={styles.children}>{children}</div>
      </div>
    </div>
  );
};

export default Models;
