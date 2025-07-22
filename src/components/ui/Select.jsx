    import styles from "./select.module.css";
    import { IoIosArrowDown } from "react-icons/io";

    export const Select = ({ arr, label }) => {
    return (
        <div className={`${styles.sort}`}>
        <label>{label}</label>
        <select>
            {arr.map((opt) => (
            <div className={styles.container}>
                <option key={opt.value} value={opt.value}>
                {opt.label}
                <IoIosArrowDown className={styles.arrow_icon} />
                </option>
            </div>
            ))}
        </select>
        </div>
    );
    };
