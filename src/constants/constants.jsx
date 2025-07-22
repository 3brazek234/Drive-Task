import {
  MdCalendarToday,
  MdLightbulbOutline,
  MdPerson,
  MdTaskAlt,
} from "react-icons/md";

export const leftSidebarIcons = [
  {
    label: "Calendar",
    icon: MdCalendarToday,
    bgColor: "#fff",
    color: "#4285F4",
  },
  {
    label: "Keep",
    icon: MdLightbulbOutline,
    bgColor: "#FEEFC3",
    color: "#FBC02D",
  },
  {
    label: "Tasks",
    icon: MdTaskAlt,
    bgColor: "#E8F0FE",
    color: "#4285F4",
  },
  {
    label: "Contacts",
    icon: MdPerson,
    bgColor: "#E8F0FE",
    color: "#4285F4",
  },
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
  { label: "مساحة التخزين", icon: "FaCloud", storage: "84%" },
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

export const fileOptions = [
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

export const ownershipOptions = [
  { value: "any", label: "أي شخص" },
  { value: "mine", label: "أملكها" },
  { value: "not_mine", label: "لا أملكها" },
  { value: "specific", label: "شخص معين" },
];
 

export const sourceOptions = [
  { value: "anywhere", label: "من أي مكان" },
  { value: "mine",     label: "ملفاتي" },
  { value: "shared",   label: "تمت مشاركتها معي" },
  { value: "more",     label: "المزيد من المواقع..." },
];
export const modifiedDateOptions = [
  { value: "any_time", label: "في أي وقت" },
  { value: "today",    label: "اليوم" },
  { value: "yesterday",label: "أمس" },
  { value: "last_7",   label: "آخر 7 أيام" },
  { value: "last_30",  label: "آخر 30 يومًا" },
  { value: "last_90",  label: "آخر 90 يومًا" },
  { value: "custom",   label: "مخصص..." },
];
export const commentFilterOptions = [
  { value: "-",               label: "-" },
  { value: "any",             label: "أي قيمة" },
  { value: "suggestions",     label: "اقتراحات فقط" },
  { value: "assigned_to_me",  label: "التعليقات المعيَّنة إليَّ فقط" },
];
