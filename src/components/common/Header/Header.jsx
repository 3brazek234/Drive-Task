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
import useModelsStore from "../../../store/useModelsStore";
import Models from "../../ui/Models";

import { Select } from "../../ui/Select";
import {
  commentFilterOptions,
  googleApps,
  modifiedDateOptions,
  ownershipOptions,
  sourceOptions,
} from "../../../constants/constants";
import Input from "../../ui/Input";
const fileOptions = [
  {
    label: "صور فوتوغرافية",
    value: "images",
  },
  {
    label: "ملفات PDF",
    value: "pdf",
  },
  {
    label: "المستندات",
    value: "docs",
  },
  {
    label: "جداول البيانات",
    value: "sheets",
  },
  {
    label: "العروض التقديمية",
    value: "slides",
  },
  {
    label: "نماذج",
    value: "forms",
  },
  {
    label: "صوت",
    value: "audio",
  },
  {
    label: "الفيديوهات",
    value: "video",
  },
  {
    label: "أرشيفات (zip)",
    value: "archive",
  },
];

const Header = () => {
  const toggle = useModelsStore((state) => state.toggle);
  return (
    <>
      <header className={`${styles.header}`}>
        <div className={styles.searchContainer}>
          <MdFormatListBulleted
            className={styles.listIcon}
            onClick={() => toggle("search")}
          />
          <input
            className={styles.search}
            placeholder="البحث في Google Drive"
          />
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
              <MdApps onClick={() => toggle("list")} />
            </button>
          </div>
          <div className={styles.profileContainer}>
            <img src={userImg} alt="profile" className={styles.profileImg} />
          </div>
        </div>
      </header>
      <Models
        title="بحث متقدم"
        id="search"
        width="70%"
        height="500px"
        tranlateX="-50%"
        translateY="-50%"
      >
        <Select label="النوع" arr={fileOptions} />
        <Select label="المالك" arr={ownershipOptions} />
        <Input
          label="يحتوي على الكلمات التالية"
          placeholder="أدخل كلمات موجودة في الملف"
        />
        <Input label="اسم الملف" placeholder="أدخل عباره تطابق اسم الملف" />
        <Select label="الموقع" arr={sourceOptions} />
        <Select label="تاريخ التعديل" arr={modifiedDateOptions} />
        <Input
          label="تمت المشاركه مع"
          placeholder="أدخل اسمااو عنوان بؤيد الكتروني"
        />
        <Select label="المتابعات" arr={commentFilterOptions} />
        <div className={`${styles.foot} between-row`}>
          <div>
            <p>مزيد من المعلومات</p>
          </div>
          <div className={`${styles.btns} center`}>
            <p>اعاده الضبط</p>
            <button>بحث</button>
          </div>
        </div>
      </Models>
      <Models
        align="flex-end"
        valign="flex-start"
        id="list"
        width="30%"
        height="400px"
      >
        <div className={styles.grid}>
          {googleApps.map(({ value, label, icon: Icon, color }) => (
            <button key={value} className={styles.item}>
              <div className={styles.iconWrap} style={{ color }}>
                <Icon size={32} />
              </div>
              <span className={styles.label}>{label}</span>
            </button>
          ))}
        </div>
      </Models>
    </>
  );
};

export default Header;
