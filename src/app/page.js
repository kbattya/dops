'use client';
import React from "react";
import styles from "./page.module.scss";
import { gsap } from "gsap";
  
import { SplitText } from "gsap-trial/SplitText";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
import Preloader from "./componetns/preloader/preloader";

gsap.registerPlugin(SplitText, ScrollTrigger) 

export default function Home() {
  return (
    <main className={styles.main}>
			<Preloader />
    </main>
  );
}
