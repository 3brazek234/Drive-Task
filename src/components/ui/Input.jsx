import styles from "./input.module.css";

export default function Input({ label }) {
  return (
    <div className={styles.field}>
      <label>{label}</label>
      <input
        type="text"
        placeholder="أدخل كلمات موجودة في الملف"
        className={styles.input}
      />
    </div>
  );
}
