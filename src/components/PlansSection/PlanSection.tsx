import React from 'react'
import styles from "@/styles/planssection.module.scss"
import Card from '../Card/Card'

export default function PlanSection() {
    
    const plans = [
        { plan: "Básico", price: "$19/mes", features: ["Perfil de cancha","Partidos libres","Promoción básica"], cta: { text: "Probar", link: "#", primary: false } },
        { plan: "Pro ⭐", price: "$39/mes", features: ["Todo lo del Básico","Gestión de torneos","Fixture y tabla", "Reportes y exportación"], cta: { text: "Quiero mi cancha", link: "#", primary: true } },
        { plan: "Empresas", price: "Custom", features: ["Múltiples sucursales","Integraciones", "Soporte prioritario"], cta: { text: "Hablar con ventas", link: "#", primary: false } },
    ]
  return (
    <section id="planes" className={styles.container}>
      <h2>Planes para canchas</h2>
      <p>Empezá simple y escalá cuando lo necesites.</p>
      <div className={styles.grid_container}>
        {plans.map((plan, index) => (
            index === 1 ? 
                <div key={index} className={styles.betterplan}>
                    <Card title={plan.plan} price={plan.price} ul={plan.features} cta={plan.cta} />
                </div>
            :
                <Card key={index} title={plan.plan} price={plan.price} ul={plan.features} cta={plan.cta} />
        ))}
      </div>
    </section>
  )
}
