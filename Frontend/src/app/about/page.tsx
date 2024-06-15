import styles from "./page.module.css";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function About() {
  return (
    <div>
      <Navbar />
      <div className={styles.aboutcontainer}>
        <div className={styles.about}>
          <div className={styles.about2}>
            <h2>About</h2>
            <p>
              Microsoft Certified Professional having significant years of work
              experience in Microsoft Azure technology, Kubernetes, Databases,
              Infrastructure/Systems, Site Reliability, Kafka, Monitoring and
              Deployment. Experience with Helm Charts,ArgoCD, Powershell and
              developing tools as well. Strong communication and collaboration
              skills, with a track record of successful project delivery in
              fast-paced, agile environments.
            </p>
          </div>
          <Image className={styles.image}
            src="/devops3.png"
            alt="Your logo description"
            width={450}
            height={300}
          />
        </div>

        <div className={styles.emptySpace}></div>

        <div className={styles.expcontainer}>
          <h2>Experience</h2>

          <div className={styles.experienceCompany}>
            <div className={styles.experienceDesc}>
              <h3>Cloud Engineer</h3>
              <h4>IBM</h4>
            </div>
            <ul>
              <li>
                Monitored and optimized system performance, ensuring system
                availability and reliability of OpenShift platform
              </li>
              <li>
                Designing and building the underlying infrastructure, such as
                servers, networks, and storage systems, that support the
                software applications and services.
              </li>
              <li>
                Worked in Kubernetes and implemented GitOps practices using Helm
                Charts
              </li>
              <li>
                Developing and managing the tools and services necessary for
                continuous integration, continuous delivery, and deployment
                automation.
              </li>
            </ul>
          </div>

          <div className={styles.experienceCompany}>
            <div className={styles.experienceDesc}>
              <h3>Senior Systems Engineer</h3>
              <h4>RM ESI Pvt Ltd</h4>
            </div>
            <ul>
              <li>
                Managing the platform’s lifecycle, including installs, upgrades,
                patching, and retirement
              </li>
              <li>Automate tasks using Powershell and Python and C#</li>
              <li>
                Familiarity in integration of heterogenous services in a hybrid
                environment
              </li>
              <li>
                Managed Docker Orchestration and Docker Containerization using
                Kubernetes, Openshift etc
              </li>
              <li>
                Worked in Kubernetes and implemented GitOps practices using Helm
                Charts.
              </li>
            </ul>
          </div>

          <div className={styles.experienceCompany}>
            <div className={styles.experienceDesc}>
              <h3>SDE - 1 </h3>
              <h4>Carestack (Good Methods Global)</h4>
            </div>
            <ul>
              <li>
                Collaborating with software development teams t to help them
                build and deploy their services on the platform
              </li>
              <li>
                Designing and building the underlying infrastructure, such as
                servers, networks, and storage systems, that support the
                software applications and services.
              </li>
              <li>
                Defining and implementing the best practices for system
                configuration, health check monitoring, and performance
                optimization (using Azure Alerts,Graphana,Redgate).
              </li>
              <li>Incidence management and root cause analysis</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
