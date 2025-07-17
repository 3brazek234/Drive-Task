import styles from "../../../pages/MainPage/mainPage.module.css";
import FileTableRow from "./TableRow";

const FileTable = ({ files, onMenuOpen }) => (
  <table className={styles.filesTable}>
    <thead>
      <tr>
        <th>الاسم</th>
        <th>السبب المقترح</th>
        <th>المالك</th>
        <th>الموقع</th>
      
      
      </tr>
    </thead>
    <tbody>
      {files.map((file, idx) => (
        <FileTableRow
          key={file.name + idx}
          file={file}
          index={idx}
          onMenuOpen={onMenuOpen}
        />
      ))}
    </tbody>
  </table>
);

export default FileTable;
