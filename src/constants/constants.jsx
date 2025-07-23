import {
  MdCalendarToday,
  MdLightbulbOutline,
  MdPerson,
  MdTaskAlt,
  MdAutoAwesome
} from "react-icons/md";
import {
  SiGooglemaps,
  SiYoutube,
  SiGooglenews,
  SiGooglecalendar,
  SiGoogle,
  SiGoogletranslate,
  SiGooglemeet,
  SiGooglephotos,
  SiGoogledrive,
  SiGmail,
} from "react-icons/si";

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
  { value: "mine", label: "ملفاتي" },
  { value: "shared", label: "تمت مشاركتها معي" },
  { value: "more", label: "المزيد من المواقع..." },
];
export const modifiedDateOptions = [
  { value: "any_time", label: "في أي وقت" },
  { value: "today", label: "اليوم" },
  { value: "yesterday", label: "أمس" },
  { value: "last_7", label: "آخر 7 أيام" },
  { value: "last_30", label: "آخر 30 يومًا" },
  { value: "last_90", label: "آخر 90 يومًا" },
  { value: "custom", label: "مخصص..." },
];
export const commentFilterOptions = [
  { value: "-", label: "-" },
  { value: "any", label: "أي قيمة" },
  { value: "suggestions", label: "اقتراحات فقط" },
  { value: "assigned_to_me", label: "التعليقات المعيَّنة إليَّ فقط" },
];


export const googleApps = [
  { value: "gmail",    label: "Gmail",          icon: SiGmail,           color: "#EA4335" },
  { value: "drive",    label: "Drive",          icon: SiGoogledrive,     color: "#0F9D58" },
  { value: "account",  label: "الحساب",         icon: SiGoogle,          color: "#4285F4" },
  { value: "maps",     label: "خرائط Google",   icon: SiGooglemaps,      color: "#34A853" },
  { value: "gemini",   label: "Gemini",         icon: MdAutoAwesome,     color: "#4C6CFF" },
  { value: "youtube",  label: "YouTube",        icon: SiYoutube,         color: "#FF0000" },
  { value: "news",     label: "الأخبار",        icon: SiGooglenews,      color: "#0F9D58" },
  { value: "calendar", label: "تقويم Google",   icon: SiGooglecalendar,  color: "#4285F4" },
  { value: "search",   label: "بحث",            icon: SiGoogle,          color: "#4285F4" },
  { value: "translate",label: "ترجمة",          icon: SiGoogletranslate, color: "#4285F4" },
  { value: "meet",     label: "Meet",           icon: SiGooglemeet,      color: "#188038" },
  { value: "photos",   label: "الصور",          icon: SiGooglephotos,    color: "#FBBC05" },
];