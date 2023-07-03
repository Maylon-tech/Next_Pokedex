import React from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Card from '../components/Card'

export async function getStaticProps() {

  const maxPokemons = 40
  const api = 'https://pokeapi.co/api/v2/pokemon/'

  const res = await fetch(`${api}/?limit=${maxPokemons}`)
  const data = await res.json()

  data.results.forEach((item, index) => {
    item.id = index + 1
  })

  return {
    props: {
      pokemons: data.results,
    },
  }

}


const Home = ({ pokemons }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>
          Poke
          <span>Next</span>
        </h1>
        <Image src="/navlogo.png" width={60} height={60} />
      </div>

      <div className={styles.cardContainer}>
        {
          pokemons.map((pokemon) => (
            <Card key={pokemon.id} pokemon={pokemon} />
          ))
        }
      </div>
    </div>
  )
}


export default Home