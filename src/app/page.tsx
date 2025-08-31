import HowSection from "@/components/HowSection/HowSection";
import styles from "./page.module.scss";
import MainHeader from "@/components/MainHeader/MainHeader";
import MainHero from "@/components/MainHero/MainHero";
import PlanSection from "@/components/PlansSection/PlanSection";

export default function Home() {
  return (
    <div className={styles.page}>
      <MainHeader />
      <MainHero />
      <HowSection />
      <PlanSection />
    </div>
  );
}
