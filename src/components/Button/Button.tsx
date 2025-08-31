import React from 'react'
import styles from "@/styles/button.module.scss"

export default function Button({url, primary, txt}: {url: string, primary?: boolean, txt: string}) {
  return (
    <div className={styles.button}>
      <a href={url} className={primary ? styles.primary : styles.outline}>{txt}</a>
    </div>
  )
}
