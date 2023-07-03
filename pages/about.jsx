
import Image from 'next/image'
import React from 'react'
import styles from '../styles/About.module.css'

const About = () => {
  return (
    <div className={styles.about}>
      <h1>Sobre o Projeto</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, nulla.
         Nobis rerum ratione incidunt odit veniam similique autem tenetur,
          accusamus totam quaerat qui ipsum dolor cupiditate itaque atque 
          voluptas sapiente dolores, nostrum voluptate necessitatibus temporibus, 
        blanditiis quasi animi asperiores. Voluptate ex quas accusamus dolores iusto.
      </p>
      <Image 
        src="/charizard.jpg"
        width={300}
        height={300}
        alt='Charizard'
      />
    </div>
  )
}

export default About