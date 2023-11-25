import styles from "./App.module.css";
import { motion } from "framer-motion";
import { Burguer } from "./components/images";
import { Button } from "./components/ui";

function App() {
  return (
    <main className={styles.main}>
      <div className="title-wrapper">
        <h1 className={styles.title}>Are you hungry ?</h1>
        <h2 className={styles.subtitle}>Let's make a burguer!</h2>
      </div>
      <section>
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Burguer />
        </div>
      </section>

      <motion.div
        className={styles.buttonContainer}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        <Button text="START NOW" />
      </motion.div>
    </main>
  );
}

export default App;
