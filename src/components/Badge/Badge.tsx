import React from 'react'
import styles from "@/styles/badge.module.scss"

export default function Badge({txt}: {txt: string}) {
  return (
    <div className={styles.badge}>
      {txt}
    </div>
  )
}
