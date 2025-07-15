import FileTypeIcon from "./TypeIcon";
import { MdMoreVert } from "react-icons/md";
import useFileStore from "../../../store/useFileStore ";

const FileTableRow = ({ file, index, onMenuOpen }) => {
  const setSelectedFile = useFileStore((state) => state.setSelectedFile);
  const setDetailsOpen = useFileStore((state) => state.setDetailsOpen);

  const handleRowClick = (e) => {
    // Prevent opening details if menu icon is clicked
    if (e.target.closest('.menu-icon')) return;
    setSelectedFile(file);
    setDetailsOpen(true);
  };

  return (
    <tr onClick={handleRowClick} style={{ cursor: 'pointer' }}>
      <td style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <FileTypeIcon type={file.type} extension={file.extension} />
        <span>{file.name}</span>
      </td>
      <td>{file.reason}</td>
   
      <td>{file.date}</td>
      <td>
        <MdMoreVert
          className="menu-icon"
          style={{ color: "#757575", fontSize: 20, marginLeft: 4, cursor: 'pointer' }}
          onClick={e => onMenuOpen(index, e)}
        />
      </td>
    </tr>
  );
};

export default FileTableRow;
