import styles from "./Button.module.css";

interface Props {
  text: string;
  size: "xs" | "sm" | "md" | "lg" | "xl";
}

const fontSizes = {
  xs: "0.75rem",
  sm: "1rem",
  md: "1.5rem",
  lg: "2rem",
  xl: "2.5rem",
};

export const Button = ({ text, size = "md" }: Props) => {
  return (
    <button style={{ fontSize: fontSizes[size] }} className={styles.button}>
      {text}
    </button>
  );
};
