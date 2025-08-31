import React from 'react'
import styles from "@/styles/card.module.scss"
import Button from '../Button/Button';

type Step = {
  num: number;
  title: string;
  desc: string;
};

type CardProps = {
  title: string;
  desc?: string;
  price?: string;
  steps?: Step[];
  ul?: string[];
  cta?: { text: string; link: string; primary?: boolean };
};

export default function Card({ title, desc, steps, cta, ul, price}: CardProps) {

  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      {desc && 
        <p>{desc}</p>
      }
      {price && 
        <p className={styles.price}>{price}</p>
      }
      <div className={styles.steps}>
        { steps && steps.map( step => (
            <div className={styles.step} key={step.num}>
                <div className={styles.step_num}>{step.num}</div>
                <div><b>{step.title}</b><br />{step.desc}</div>
            </div>
        ))}
        { ul &&
          <ul>
            {ul.map( (item, index) => (
                <li key={index}>{item}</li>
            ))}
          </ul>
        }
        { cta && 
          <div className={styles.cta}>
              <Button url={cta.link} primary={cta.primary} txt={cta.text} />
          </div>
        }
      </div>
    </div>
  )
}
