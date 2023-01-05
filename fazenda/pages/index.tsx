import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import styles from '../styles/Home.module.css'
import Image from 'next/image';
import Link from 'next/link'

type Time = {
  dias?: number;
  horas?: number;
  minutos?: number;
  segundos?: number;
}

const Home: NextPage = () => {
  
  const calculateTimeLeft = () => {
    const difference = new Date(2023, 0, 6, 14, 0, 0).getTime() - new Date().getTime();
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

    <div className={styles['container']}>
      <a href='#' className={styles['link']}>
        <h1 className={styles['titulo']} id={styles.titulo}>Fazenda da Titi <b>4.0</b></h1>
      </a>
      
      {/*
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
            Chegou a hora!!
          </span>
        </>)}
        */}
        {timeLeft.dias!=null && timeLeft.horas!=null && timeLeft.minutos!=null && timeLeft.segundos!=null? 
        (<>
          <span className={styles['timer']}>
            0 dias
          </span>
          <span className={styles['timer']}>
            18 horas
          </span>
          <span className={styles['timer']}>
            48 minutos
          </span>
          <span className={styles['timer']}>
            18 segundos
          </span>
        </>)
        :
        (<>
          <span className={styles['timer']}>
            Chegou a hora!!
          </span>
        </>)}
        <h3 className={styles['adiada']}>
            Adiada
        </h3>
      
      {/*
      <span className={styles['timer']}>
          Vivemo tá
          <Image src='/coracao-2.svg' style={{marginLeft:4}} height='30px' width='40px' color='red'/>
      </span>
      */}
        
        <Link href="/galeria">
          <a className={styles["redirect"]} >
            Album
          </a>
      </Link>
      
      {/*<Link href="/memorial">
          <a className={styles["redirect"]} >
            Algumas memórias
          </a>
    </Link>*/}
    </div>
  )
}

export default Home
