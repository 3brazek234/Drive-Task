import FileTypeIcon from "./TypeIcon";
import { IoIosArrowBack } from "react-icons/io";

import { MdDevices, MdFolder, MdMoreVert } from "react-icons/md";
import styles from "./tableRow.module.css";
import useFileStore from "../../../store/useFileStore ";
const FileTableRow = ({ file, index, onMenuOpen }) => {
  const setSelectedFile = useFileStore((state) => state.setSelectedFile);
  const setDetailsOpen = useFileStore((state) => state.setDetailsOpen);

  const handleRowClick = (e) => {
    // Prevent opening details if menu icon is clicked
    if (e.target.closest(".menu-icon")) return;
    setSelectedFile(file);
    setDetailsOpen(true);
  };

  return (
    <tr onClick={handleRowClick} style={{ cursor: "pointer" }}>
      <td style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <FileTypeIcon type={file.type} extension={file.extension} />
        <span>{file.name}</span>
      </td>
      <td>{file.reason}</td>
      <td>
   <div className={`${styles.owner} `}>
         <img src={file.img} alt="user" />
        {file.owner}
   </div>
      </td>

      <td
        className={`center-column ${styles.hovered_td}`}
        style={{ gap: "8px" }}
      >
        <MdFolder />
        <span>{file.source}</span>
        <div className={`${styles.hidden} between-row`}>
          <div className={`${styles.right_icon} center`}>
            <MdDevices />
            <span>أجهزه الكومبيوتر</span>
          </div>
          <div className="center-column">
            <IoIosArrowBack />
            <span>...</span>
            <IoIosArrowBack />
          </div>
          <div className={`${styles.left_side} center`}>
            <MdFolder />
            <span>{file.source}</span>
          </div>
        </div>
      </td>

      <td>
        <MdMoreVert
          className="menu-icon"
          style={{
            color: "#757575",
            fontSize: 20,
            marginLeft: 4,
            cursor: "pointer",
          }}
          onClick={(e) => onMenuOpen(index, e)}
        />
      </td>
    </tr>
  );
};

export default FileTableRow;
