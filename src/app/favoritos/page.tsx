import styles from "./page.module.css";
import homeStyles from "../page.module.css"; // Reutilizando estilos da Home
import {
  FaStar,
  FaLayerGroup,
} from "react-icons/fa";
import Link from "next/link";
import ClientUserInfo from "@/components/UserInfo/ClientUserInfo";

export default function Favoritos() {
  return (


    <div className={homeStyles.container}>
      {/* Sidebar permanece igual */}
      <aside className={homeStyles.sidebar}>
        <div className={homeStyles.logo}>LOGO</div>
        <nav>
          <ul>
           <Link href="favoritos"> <li><span className={homeStyles.icon}><FaStar /></span> Favoritos</li></Link>
           <Link href="/"> <li><span className={homeStyles.icon}>< FaLayerGroup /></span> Outros</li></Link>
          </ul>
        </nav>
      </aside>

      {/* Conteúdo principal */}
      <main className={homeStyles.mainContent}>
        <header className={homeStyles.header}>
          <h1 className={styles.pageTitle}>  Favoritos</h1>
          <ClientUserInfo/>
        </header>
   

        {/* Conteúdo específico da página */}
        <section>
          <h2 className={styles.sectionTitle}>Seus Favoritos</h2>
          <div className={styles.favoriteGrid}>
            <div className={styles.favoriteCard}>
              <h3>Item Favorito 1</h3>
              <p>Detalhes sobre o item.</p>
            </div>
            <div className={styles.favoriteCard}>
              <h3>Item Favorito 2</h3>
              <p>Detalhes sobre o item.</p>
            </div>
          </div>
        </section>
      </main>
    </div>

  );
}
