import React from 'react'
import styles from "@/styles/card.module.scss"

type Step = {
  num: number;
  title: string;
  desc: string;
};

type CardProps = {
  title: string;
  desc: string;
  steps: Step[];
};

export default function Card({ title, desc, steps }: CardProps) {

  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <p>{desc}</p>
      <div className={styles.steps}>
        { steps.map( step => (
            <div className={styles.step} key={step.num}>
                <div className={styles.step_num}>{step.num}</div>
                <div><b>{step.title}</b><br />{step.desc}</div>
            </div>
        ))}
      </div>
    </div>
  )
}
