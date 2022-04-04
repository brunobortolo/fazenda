import { useEffect, useState } from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

type Time = {
  dias?: number;
  horas?: number;
  minutos?: number;
  segundos?: number;
  [key: string]: number | undefined;
}

const Home: NextPage = () => {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(year, 3, 8, 12, 0, 0) - +new Date();
    let timeLeft = {
      
    };

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

  const [timeLeft, setTimeLeft] = useState<Time>(calculateTimeLeft());
  const [year] = useState(new Date().getFullYear());
  

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [<></>];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      <span className={styles['timer']}>
        {0} {interval}{" "}
      </span>
    }

    timerComponents.push(
      <span className={styles['timer']}>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );

  });
  return (
    <>
      <Head>
        <title> Fazenda </title>
      </Head>
      <div className={styles['container']}>
        <h1 className={styles['titulo']}>Fazenda da Titi</h1>
        {timerComponents.length ? timerComponents : <span>Time's up!</span>}
        <img src='/convite.png' alt='convite' className={styles['convite']}></img>
      </div>
    </>
  )
}

export default Home
