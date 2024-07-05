import Image from "next/image";
import styles from "./page.module.css";
import IconLoader from "./components/Utils/IconLoader";
import TopBar from "./components/NavBar/topbar";
import Header from "./components/Header/header";


export default function Home() {
  return (
    <main className={styles.main}>
      <TopBar />
      <Header />
    </main>
  );
}