import { MdFolder, MdInsertDriveFile, MdPictureAsPdf } from 'react-icons/md';

const FileTypeIcon = ({ type, extension }) => {
  if (type === 'folder') return <MdFolder style={{ color: '#757575', fontSize: 22 }} />;
  if (extension === 'pdf') return <MdPictureAsPdf style={{ color: '#e53935', fontSize: 22 }} />;
  return <MdInsertDriveFile style={{ color: '#1a73e8', fontSize: 22 }} />;
};

export default FileTypeIcon; 