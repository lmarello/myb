import styles from "./Button.module.css";

interface Props {
  text: string;
}

export const Button = ({ text }: Props) => {
  return <button className={styles.button}>{text}</button>;
};
