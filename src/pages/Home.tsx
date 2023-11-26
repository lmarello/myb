import { motion } from "framer-motion";
import { Button } from "@/components/ui";
import { Burger } from "@/components/images";

import styles from "./Home.module.css";

export const HomePage = () => {
  return (
    <main className={styles.main}>
      <div className="title-wrapper">
        <h1 className={styles.title}>
          <span className={styles.titleFirstRow}>Are you</span>
          <span className={styles.titleSecondRow}>hungry?</span>
        </h1>
      </div>
      <section>
        <div
          style={{
            width: "100%",
            height: "480px",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            padding: 0,
            margin: 0,
          }}
        >
          <Burger />
        </div>
      </section>

      <motion.div
        className={styles.buttonContainer}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        <Button size="md" text="Let's make a burger" />
      </motion.div>
    </main>
  );
};
