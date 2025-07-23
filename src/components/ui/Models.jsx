import useModelsStore from "../../store/useModelsStore";
import styles from "./models.module.css";
import { IoMdClose } from "react-icons/io";

const Models = ({
  children,
  title,
  align = "center",
  valign = "center",
  width,
  height,
  id,
}) => {
  const { toggle } = useModelsStore();
  const isOpen = useModelsStore((s) => !!s.modals[id]);

  if (!isOpen) return null;

  return (
    <div
      className={styles.main_cont}
      onClick={() => toggle(id)}
      style={{
        justifyContent: align,
        alignItems: valign,
      }}
    >
      <div
        className={styles.model}
        onClick={(e) => e.stopPropagation()}
        style={{
          width: width,
          height: height,
        }}
      >
        <div className={`${styles.header} between-row`}>
          <h6>{title}</h6>
          <div className={styles.close_icon} onClick={() => toggle(id)}>
            <IoMdClose />
          </div>
        </div>
        <div className={styles.children}>{children}</div>
      </div>
    </div>
  );
};

export default Models;
