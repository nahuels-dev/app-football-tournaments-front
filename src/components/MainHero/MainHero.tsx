import React from 'react'
import styles from "@/styles/mainhero.module.scss"
import Badge from '../Badge/Badge'
import Button from '../Button/Button'

export default function MainHero() {
  return (
    <div className={styles.hero}>
      <div className={styles.glow}></div>
      <div className={styles.hero_inner}>
        <div>
            <Badge txt={"⚽ Plataforma de torneos &amp; partidos"}/>
            <div className={styles.badge}></div>
            <h1 className={styles.hero_inner_title}>
            Organizá tus torneos. Jugá tus partidos. <span className={styles.accent}>Falta uno</span> nunca más.
            </h1>
            <p className={styles.hero_inner_subtitle}>Conectamos <b>canchas</b>, <b>equipos</b> y <b>jugadores</b>. Creá torneos, abrí partidos libres y llevá tu perfil público con historial y stats.</p>
            <div className={styles.hero_inner_ctas}>
                <Button url="#libres" primary={true} txt="Soy jugador" />
                <Button url="#planes" primary={false} txt="Soy cancha" />
            </div>
            <div className={styles.badges}>
                <Badge txt={"📍 Canchas verificadas"} />
                <Badge txt={"🔒 Pagos seguros"} />
                <Badge txt={"🎥 Teaser IA de video"} />
            </div>
        </div>
        <div className={styles.hero_canvas}>
        </div>
      </div>
    </div>
  )
}
