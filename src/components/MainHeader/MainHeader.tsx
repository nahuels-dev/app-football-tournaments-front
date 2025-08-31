import React from 'react'
import styles from "@/styles/mainheader.module.scss"
import Button from '../Button/Button'

export default function MainHeader() {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.brand}>
            <div className={styles.brand_logo} aria-hidden="true"></div>
            <p>Falta <span>Uno</span></p>
        </div>
        <div className={styles.nav_links}>
            <a href="#como">Cómo funciona</a>
            <a href="#planes">Planes</a>
            <a href="#perfiles">Perfiles</a>
            <a href="#libres">Partidos libres</a>
        </div>
        <div>
            <Button url="#cta" primary={false} txt="Descargar app" />
        </div>
      </div>
    </nav>
  )
}
