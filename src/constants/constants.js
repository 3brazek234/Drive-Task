import { MdCalendarToday, MdLightbulbOutline, MdPerson, MdTaskAlt } from "react-icons/md";

export const leftSidebarIcons = [
  {
    label: "Calendar",
    icon: MdCalendarToday,
    bgColor: "#fff",
    color: "#4285F4"
  },
  {
    label: "Keep",
    icon: MdLightbulbOutline,
    bgColor: "#FEEFC3",
    color: "#FBC02D"
  },
  {
    label: "Tasks",
    icon: MdTaskAlt ,
    bgColor: "#E8F0FE",
    color: "#4285F4"
  },
  {
    label: "Contacts",
    icon: MdPerson,
    bgColor: "#E8F0FE",
    color: "#4285F4"
  }
];

export const sidebarItems = [
  { label: "الصفحة الرئيسية", icon: "FaHome", active: true },
  { label: "ملفاتي", icon: "FaFolder" },
  { label: "أجهزة الكمبيوتر", icon: "FaDesktop" },
  { label: "تمت مشاركتها معي", icon: "FaUserFriends" },
  { label: "الأخيرة", icon: "FaClock" },
  { label: "المميزة بنجمة", icon: "FaStar" },
  { label: "المحتوى غير المرغوب فيه", icon: "FaExclamationCircle" },
  { label: "المهملات", icon: "FaTrash" },
  { label: "مساحة التخزين", icon: "FaCloud", storage: "84%" }
];



export const menuOptions = [
  { label: "تنزيل", icon: "⬇️" },
  { label: "إعادة تسمية", icon: "✏️" },
  { label: "إنشاء نسخة", icon: "📋" },
  { label: "مشاركة", icon: "👤" },
  { label: "تنظيم", icon: "📁" },
  { label: "معلومات الملف", icon: "ℹ️" },
  { label: "Delete", icon: "🗑️" },
];