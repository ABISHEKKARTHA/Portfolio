import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/navbar";
import LinkButton from "@/components/button";
import Button from "@/components/button";

export default function Home() {
  return (
    <div>
      <Navbar />

      <div className={styles.container}>
      <div className={styles.emptydiv}>

      <Image src="/devopsgif2.gif" alt="Your logo description" width={550} height={500} />
        
      </div>
        <div className={styles.textcontainer}>
          <div className={styles.heroContent}>
            <h2>DevOps & SRE Specialist :</h2>
            <h3>Building resilient systems</h3>
            <p>With a strong foundation in continuous integration/continuous deployment (CI/CD) pipelines, cloud infrastructure, and monitoring tools, I thrive in fast-paced environments where precision and reliability are paramount. My proactive approach to problem-solving and my commitment to best practices in DevOps enable me to deliver solutions that not only meet but exceed organizational goals.
            Let's work together to build resilient systems that stand the test of time.</p>

            <Button label="Learn more" link="/about"/>

          </div>
        </div>
        
      </div>
    </div>
  );
}
