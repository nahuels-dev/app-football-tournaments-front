import React from 'react'
import styles from "@/styles/howsection.module.scss"
import Card from '../Card/Card'

export default function HowSection() {

    const cards = [
        {
            title: "Para jugadores",
            desc: "Registrate, sumate a un partido libre o unite a tu equipo.",
            steps: [
                {num: 1, title: "Registrate", desc: "Perfil público con foto y posición."},
                {num: 2, title: "Entrá a un partido libre", desc: "Sin equipo, cuando quieras."},
                {num: 3, title: "Guardá tu historial", desc: "Partidos jugados y stats básicas."},
            ]},
        {
            title: "Para canchas",
            desc: "Suscripción mensual y herramientas para llenar turnos.",
            steps: [
                {num: 1, title: "Suscribite", desc: "Perfil de cancha con info y agenda."},
                {num: 2, title: "Creá Creá torneos & libres", desc: "Gestioná equipos, fixtures y salas."},
                {num: 3, title: "Promocionate", desc: "Aparecé en la app y llená tu cancha."},
            ]}
    ];
  return (
    <section id="como">
      <div className={styles.container}>
        {cards.map( (card, index) => (
            <Card 
                key={index}
                title={card.title}
                desc={card.desc}
                steps={card.steps}
            />
        ))}
      </div>
    </section>
  )
}
