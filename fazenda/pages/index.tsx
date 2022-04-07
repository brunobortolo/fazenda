import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'

type Time = {
  dias?: number;
  horas?: number;
  minutos?: number;
  segundos?: number;
}

const Home: NextPage = () => {
  const calculateTimeLeft = () => {
    const difference = new Date(2022, 3, 8).getTime() - new Date().getTime();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((difference / 1000 / 60) % 60),
        segundos: Math.floor((difference / 1000) % 60),
      };
    }
    
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<Time>({dias:0,horas:0,minutos:0,segundos:0});
  
  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 500);
  },[timeLeft]);

  return (
    <>
      <div className={styles['container']}>
        <a href='https://youtu.be/FW9u6IgKX_M' className={styles['link']}>
          <h1 className={styles['titulo']}>Fazenda da Titi</h1>
        </a>
        {timeLeft.dias!=null && timeLeft.horas!=null && timeLeft.minutos!=null && timeLeft.segundos!=null? 
          (<>
            <span className={styles['timer']}>
              {timeLeft.dias} dias
            </span>
            <span className={styles['timer']}>
              {timeLeft.horas} horas
            </span>
            <span className={styles['timer']}>
              {timeLeft.minutos} minutos
            </span>
            <span className={styles['timer']}>
              {timeLeft.segundos} segundos
            </span>
          </>)
          :
          (<>
            <span className={styles['timer']}>
              Chegou o Dia!!
            </span>
          </>)
        }
      </div>
    </>
  )
}

export default Home
