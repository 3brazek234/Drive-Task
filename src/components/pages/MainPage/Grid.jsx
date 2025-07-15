import styles from "../../../pages/MainPage/mainPage.module.css";
import useFileStore from "../../../store/useFileStore ";
import FileTypeIcon from "./TypeIcon";
import { MdMoreVert } from "react-icons/md";

const Grid = ({ files, onMenuOpen }) => {
  const setSelectedFile = useFileStore((state) => state.setSelectedFile);
  const setDetailsOpen = useFileStore((state) => state.setDetailsOpen);

  const handleRowClick = (e, file) => {
    if (e.target.closest(".menu-icon")) return;
    setSelectedFile(file);
    setDetailsOpen(true);
  };
  return (
    <div className={styles.gridContainer}>
      {files.map((file, idx) => (
        <div
          key={file.name + idx}
          className={styles.gridItem}
          onClick={(e) => handleRowClick(e, file)}
        >
          <div className={styles.gridIconRow}>
            <FileTypeIcon type={file.type} extension={file.extension} />
            <MdMoreVert
              style={{ color: "#757575", fontSize: 20, marginRight: "auto" }}
              className="menu-icon"
              onClick={(e) => onMenuOpen(e, file)}
            />
          </div>
          <div className={styles.gridName}>{file.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Grid;
