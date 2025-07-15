import styles from "./header.module.css";
import { CiSearch } from "react-icons/ci";
import {
  MdApps,
  MdAutoAwesome,
  MdFormatListBulleted,
  MdHelpOutline,
  MdSettings,
} from "react-icons/md";
import userImg from "../../../assets/user.png";

const Header = () => {
  return (
    <header className={`${styles.header}`}>
      <div className={styles.searchContainer}>
        <MdFormatListBulleted className={styles.listIcon} />
        <input className={styles.search} placeholder="البحث في Google Drive" />
        <CiSearch className={styles.searchIcon} />
      </div>
      <div className={styles.left_side}>
        <div className={styles.topIcons}>
          <button>
            <MdHelpOutline />
          </button>
          <button>
            <MdSettings />
          </button>
          <button>
            <MdAutoAwesome />
          </button>

          <button>
            <MdApps />
          </button>
        </div>
        <div className={styles.profileContainer}>
          <img src={userImg} alt="profile" className={styles.profileImg} />
        </div>
      </div>
    </header>
  );
};

export default Header;
