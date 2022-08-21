import type { NextPage } from 'next'
import { motion } from 'framer-motion'
import styles from '../styles/Galeria.module.css'

const Home: NextPage = () => {

  return (
    <div className={styles.container}>
      <div className={styles["container-container"]}>
      <div className={styles["container-titulo"]} id={styles["galeria"]}>
      <motion.h1
      className={styles.titulo}
      transition={{
        duration: 2,
        repeat: Infinity,
      }}
      animate={{ 
        transform:["translateY(-5px)","translateY(10px)","translateY(-5px)"]
      }}
      >
        G
      </motion.h1>
      <motion.h1
      className={styles.titulo}
      transition={{
        duration: 1.8,
        repeat: Infinity,
      }}
      animate={{ 
        transform:["translateY(-5px)","translateY(10px)","translateY(-5px)"]
      }}
      >
        a
      </motion.h1>
      <motion.h1
      className={styles.titulo}
      transition={{
        duration: 1.75,
        repeat: Infinity,
      }}
      animate={{ 
        transform:["translateY(-5px)","translateY(10px)","translateY(-5px)"]
      }}
      >
        l
      </motion.h1>
      <motion.h1
      className={styles.titulo}
      transition={{
        duration: 2.1,
        repeat: Infinity,
      }}
      animate={{ 
        transform:["translateY(-5px)","translateY(10px)","translateY(-5px)"]
      }}
      >
        e
      </motion.h1>
      <motion.h1
      className={styles.titulo}
      transition={{
        duration: 1.86,
        repeat: Infinity,
      }}
      animate={{ 
        transform:["translateY(-5px)","translateY(10px)","translateY(-5px)"]
      }}
      >
        r
      </motion.h1>
      <motion.h1
      className={styles.titulo}
      transition={{
        duration: 2.05,
        repeat: Infinity,
      }}
      animate={{ 
        transform:["translateY(-5px)","translateY(10px)","translateY(-5px)"]
      }}
      >
        i
      </motion.h1>
      <motion.h1
      className={styles.titulo}
      transition={{
        duration: 1.94,
        repeat: Infinity,
      }}
      animate={{ 
        transform:["translateY(-5px)","translateY(10px)","translateY(-5px)"]
      }}
      >
        a
      </motion.h1>
      </div>
      <div className={styles["container-titulo"]} id={styles["fazenda"]}>
      <motion.h1
      className={styles.titulo}
      transition={{
        duration: 2.06,
        repeat: Infinity,
      }}
      animate={{ 
        transform:["translateY(-5px)","translateY(10px)","translateY(-5px)"]
      }}
      >
        F
      </motion.h1>
      <motion.h1
      className={styles.titulo}
      transition={{
        duration: 1.99,
        repeat: Infinity,
      }}
      animate={{ 
        transform:["translateY(-5px)","translateY(10px)","translateY(-5px)"]
      }}
      >
        a
      </motion.h1>
      <motion.h1
      className={styles.titulo}
      transition={{
        duration: 1.88,
        repeat: Infinity,
      }}
      animate={{ 
        transform:["translateY(-5px)","translateY(10px)","translateY(-5px)"]
      }}
      >
        z
      </motion.h1>
      <motion.h1
      className={styles.titulo}
      transition={{
        duration: 2,
        repeat: Infinity,
      }}
      animate={{ 
        transform:["translateY(-5px)","translateY(10px)","translateY(-5px)"]
      }}
      >
        e
      </motion.h1>
      <motion.h1
      className={styles.titulo}
      transition={{
        duration: 1.92,
        repeat: Infinity,
      }}
      animate={{ 
        transform:["translateY(-5px)","translateY(10px)","translateY(-5px)"]
      }}
      >
        n
      </motion.h1>
      <motion.h1
      className={styles.titulo}
      transition={{
        duration: 1.83,
        repeat: Infinity,
      }}
      animate={{ 
        transform:["translateY(-5px)","translateY(10px)","translateY(-5px)"]
      }}
      >
        d
      </motion.h1>
      <motion.h1
      className={styles.titulo}
      transition={{
        duration: 2.01,
        repeat: Infinity,
      }}
      animate={{ 
        transform:["translateY(-5px)","translateY(10px)","translateY(-5px)"]
      }}
      >
        a
      </motion.h1>
      </div>
      <div className={styles["container-titulo"]} id={styles["da"]}>
      <motion.h1
      className={styles.titulo}
      transition={{
        duration: 1.9,
        repeat: Infinity,
      }}
      animate={{ 
        transform:["translateY(-5px)","translateY(10px)","translateY(-5px)"]
      }}
      >
        d
      </motion.h1>
      <motion.h1
      className={styles.titulo}
      transition={{
        duration: 2.06,
        repeat: Infinity,
      }}
      animate={{ 
        transform:["translateY(-5px)","translateY(10px)","translateY(-5px)"]
      }}
      >
        a
      </motion.h1>
      </div>
      <div className={styles["container-titulo"]} id={styles["titi"]}>
      <motion.h1
      className={styles.titulo}
      transition={{
        duration: 2.03,
        repeat: Infinity,
      }}
      animate={{ 
        transform:["translateY(-5px)","translateY(10px)","translateY(-5px)"]
      }}
      >
        T
      </motion.h1>
      <motion.h1
      className={styles.titulo}
      transition={{
        duration: 1.87,
        repeat: Infinity,
      }}
      animate={{ 
        transform:["translateY(-5px)","translateY(10px)","translateY(-5px)"]
      }}
      >
        i
      </motion.h1>
      <motion.h1
      className={styles.titulo}
      transition={{
        duration: 1.95,
        repeat: Infinity,
      }}
      animate={{ 
        transform:["translateY(-5px)","translateY(10px)","translateY(-5px)"]
      }}
      >
        t
      </motion.h1>
      <motion.h1
      className={styles.titulo}
      transition={{
        duration: 2.02,
        repeat: Infinity,
      }}
      animate={{ 
        transform:["translateY(-5px)","translateY(10px)","translateY(-5px)"]
      }}
      >
        i
      </motion.h1>
      </div>
      </div>
      <div className={styles.gallery}>
        <motion.img
          layout
          src={"fazenda_1.jpg"}
          className={styles.image}
          whileInView={{filter:"grayscale(0%)"}}
          initial={{filter:"grayscale(100%)"}}
          whileHover={{scale:1.03, filter:"grayscale(0%)"}}
          transition={{duration:0.6}}
          id={styles["fazenda_1"]}
        >
        </motion.img>
        <motion.img
          layout
          src={"fazenda_2.jpg"}
          className={styles.image}
          whileInView={{ filter:"grayscale(0%)" }}
          whileHover={{scale:1.03, filter:"grayscale(0%)"}}
          initial={{filter:"grayscale(100%)"}}
          transition={{duration:0.6}}
          id={styles["fazenda_2"]}
        >
        </motion.img>
        <motion.img
          layout
          src={"fazenda_3.jpg"}
          className={styles.image}
          whileInView={{ filter:"grayscale(0%)" }}
          whileHover={{scale:1.03, filter:"grayscale(0%)"}}
          initial={{filter:"grayscale(100%)"}}
          transition={{duration:0.6}}
          id={styles["fazenda_3"]}
        >
        </motion.img>
        <motion.img
          layout
          src={"fazenda_4.jpg"}
          className={styles.image}
          whileInView={{ filter:"grayscale(0%)" }}
          whileHover={{scale:1.03, filter:"grayscale(0%)"}}
          initial={{filter:"grayscale(100%)"}}
          transition={{duration:0.6}}
          id={styles["fazenda_4"]}
        >
        </motion.img>
        <motion.img
          layout
          src={"fazenda_5.jpg"}
          className={styles.image}
          whileInView={{ filter:"grayscale(0%)" }}
          whileHover={{scale:1.03, filter:"grayscale(0%)"}}
          initial={{filter:"grayscale(100%)"}}
          transition={{duration:0.6}}
          id={styles["fazenda_5"]}
        >
        </motion.img>
        <motion.img
          layout
          src={"fazenda_6.jpg"}
          className={styles.image}
          whileInView={{ filter:"grayscale(0%)" }}
          whileHover={{scale:1.03, filter:"grayscale(0%)"}}
          initial={{filter:"grayscale(100%)"}}
          transition={{duration:0.6}}
          id={styles["fazenda_6"]}
        >
        </motion.img>
        <motion.img
          layout
          src={"fazenda_7.jpg"}
          className={styles.image}
          whileInView={{ filter:"grayscale(0%)" }}
          whileHover={{scale:1.03, filter:"grayscale(0%)"}}
          initial={{filter:"grayscale(100%)"}}
          transition={{duration:0.6}}
          id={styles["fazenda_7"]}
        >
        </motion.img>
        <motion.img
          layout
          src={"fazenda_8.jpg"}
          className={styles.image}
          whileInView={{ filter:"grayscale(0%)" }}
          whileHover={{scale:1.03, filter:"grayscale(0%)"}}
          initial={{filter:"grayscale(100%)"}}
          transition={{duration:0.6}}
          id={styles["fazenda_8"]}
        >
        </motion.img>
        <motion.img
          layout
          src={"fazenda_9.jpg"}
          className={styles.image}
          whileInView={{ filter:"grayscale(0%)" }}
          whileHover={{scale:1.03, filter:"grayscale(0%)"}}
          initial={{filter:"grayscale(100%)"}}
          transition={{duration:0.6}}
          id={styles["fazenda_9"]}
        >
        </motion.img>
        <motion.img
          layout
          src={"fazenda_10.jpg"}
          className={styles.image}
          whileInView={{ filter:"grayscale(0%)" }}
          whileHover={{scale:1.03, filter:"grayscale(0%)"}}
          initial={{filter:"grayscale(100%)"}}
          transition={{duration:0.6}}
          id={styles["fazenda_10"]}
        >
        </motion.img>
        <motion.img
          layout
          src={"fazenda_11.jpg"}
          className={styles.image}
          whileInView={{ filter:"grayscale(0%)" }}
          whileHover={{scale:1.03, filter:"grayscale(0%)"}}
          initial={{filter:"grayscale(100%)"}}
          transition={{duration:0.6}}
          id={styles["fazenda_11"]}
        >
        </motion.img>
        <motion.img
          layout
          src={"fazenda_12.jpg"}
          className={styles.image}
          whileInView={{ filter:"grayscale(0%)" }}
          whileHover={{scale:1.03, filter:"grayscale(0%)"}}
          initial={{filter:"grayscale(100%)"}}
          transition={{duration:0.6}}
          id={styles["fazenda_12"]}
        >
        </motion.img>
        <motion.img
          layout
          src={"fazenda_13.jpg"}
          className={styles.image}
          whileInView={{ filter:"grayscale(0%)" }}
          whileHover={{scale:1.03, filter:"grayscale(0%)"}}
          initial={{filter:"grayscale(100%)"}}
          transition={{duration:0.6}}
          id={styles["fazenda_13"]}
        >
        </motion.img>
        <motion.img
          layout
          src={"fazenda_14.jpg"}
          className={styles.image}
          whileInView={{ filter:"grayscale(0%)" }}
          whileHover={{scale:1.03, filter:"grayscale(0%)"}}
          initial={{filter:"grayscale(100%)"}}
          transition={{duration:0.6}}
          id={styles["fazenda_14"]}
        >
        </motion.img>
        <motion.img
          layout
          src={"fazenda_15.jpg"}
          className={styles.image}
          whileInView={{ filter:"grayscale(0%)" }}
          whileHover={{scale:1.03, filter:"grayscale(0%)"}}
          initial={{filter:"grayscale(100%)"}}
          transition={{duration:0.6}}
          id={styles["fazenda_15"]}
        >
        </motion.img>
        <motion.img
          layout
          src={"fazenda_16.jpg"}
          className={styles.image}
          whileInView={{ filter:"grayscale(0%)" }}
          whileHover={{scale:1.03, filter:"grayscale(0%)"}}
          initial={{filter:"grayscale(100%)"}}
          transition={{duration:0.6}}
          id={styles["fazenda_16"]}
        >
        </motion.img>
        <motion.img
          layout
          src={"fazenda_17.jpg"}
          className={styles.image}
          whileInView={{ filter:"grayscale(0%)" }}
          whileHover={{scale:1.03, filter:"grayscale(0%)"}}
          initial={{filter:"grayscale(100%)"}}
          transition={{duration:0.6}}
          id={styles["fazenda_17"]}
        >
        </motion.img>
        <motion.img
          layout
          src={"fazenda_18.jpg"}
          className={styles.image}
          whileInView={{ filter:"grayscale(0%)" }}
          whileHover={{scale:1.03, filter:"grayscale(0%)"}}
          initial={{filter:"grayscale(100%)"}}
          transition={{duration:0.6}}
          id={styles["fazenda_18"]}
        >
        </motion.img>
        <motion.img
          layout
          src={"fazenda_19.jpg"}
          className={styles.image}
          whileInView={{ filter:"grayscale(0%)" }}
          whileHover={{scale:1.03, filter:"grayscale(0%)"}}
          initial={{filter:"grayscale(100%)"}}
          transition={{duration:0.6}}
          id={styles["fazenda_19"]}
        >
        </motion.img>
        <motion.img
          layout
          src={"fazenda_20.jpg"}
          className={styles.image}
          whileInView={{ filter:"grayscale(0%)" }}
          whileHover={{scale:1.03, filter:"grayscale(0%)"}}
          initial={{filter:"grayscale(100%)"}}
          transition={{duration:0.6}}
          id={styles["fazenda_20"]}
        >
        </motion.img>
        <motion.img
          layout
          src={"fazenda_21.jpg"}
          className={styles.image}
          whileInView={{ filter:"grayscale(0%)" }}
          whileHover={{scale:1.03, filter:"grayscale(0%)"}}
          initial={{filter:"grayscale(100%)"}}
          transition={{duration:0.6}}
          id={styles["fazenda_21"]}
        >
        </motion.img>
        <motion.img
          layout
          src={"fazenda_22.jpg"}
          className={styles.image}
          whileInView={{ filter:"grayscale(0%)" }}
          whileHover={{scale:1.03, filter:"grayscale(0%)"}}
          initial={{filter:"grayscale(100%)"}}
          transition={{duration:0.6}}
          id={styles["fazenda_22"]}
        >
        </motion.img>
        <motion.img
          layout
          src={"fazenda_23.jpg"}
          className={styles.image}
          whileInView={{ filter:"grayscale(0%)" }}
          whileHover={{scale:1.03, filter:"grayscale(0%)"}}
          initial={{filter:"grayscale(100%)"}}
          transition={{duration:0.6}}
          id={styles["fazenda_23"]}
        >
        </motion.img>
        <motion.img
          layout
          src={"fazenda_24.jpg"}
          className={styles.image}
          whileInView={{ filter:"grayscale(0%)" }}
          whileHover={{scale:1.03, filter:"grayscale(0%)"}}
          initial={{filter:"grayscale(100%)"}}
          transition={{duration:0.6}}
          id={styles["fazenda_24"]}
        >
        </motion.img>
        <motion.img
          layout
          src={"fazenda_25.jpg"}
          className={styles.image}
          whileInView={{ filter:"grayscale(0%)" }}
          whileHover={{scale:1.03, filter:"grayscale(0%)"}}
          initial={{filter:"grayscale(100%)"}}
          transition={{duration:0.6}}
          id={styles["fazenda_25"]}
        >
        </motion.img>
        <motion.img
          layout
          src={"fazenda_26.jpg"}
          className={styles.image}
          whileInView={{ filter:"grayscale(0%)" }}
          whileHover={{scale:1.03, filter:"grayscale(0%)"}}
          initial={{filter:"grayscale(100%)"}}
          transition={{duration:0.6}}
          id={styles["fazenda_26"]}
        >
        </motion.img>
        <motion.img
          layout
          src={"fazenda_27.jpg"}
          className={styles.image}
          whileInView={{ filter:"grayscale(0%)" }}
          whileHover={{scale:1.03, filter:"grayscale(0%)"}}
          initial={{filter:"grayscale(100%)"}}
          transition={{duration:0.6}}
          id={styles["fazenda_27"]}
        >
        </motion.img>
        <motion.img
          layout
          src={"fazenda_28.jpg"}
          className={styles.image}
          whileInView={{ filter:"grayscale(0%)" }}
          whileHover={{scale:1.03, filter:"grayscale(0%)"}}
          initial={{filter:"grayscale(100%)"}}
          transition={{duration:0.6}}
          id={styles["fazenda_28"]}
        >
        </motion.img>
        <motion.img
          layout
          src={"fazenda_29.jpg"}
          className={styles.image}
          whileInView={{ filter:"grayscale(0%)" }}
          whileHover={{scale:1.03, filter:"grayscale(0%)"}}
          initial={{filter:"grayscale(100%)"}}
          transition={{duration:0.6}}
          id={styles["fazenda_29"]}
        >
        </motion.img>
        <motion.img
          layout
          src={"fazenda_30.jpg"}
          className={styles.image}
          whileInView={{ filter:"grayscale(0%)" }}
          whileHover={{scale:1.03, filter:"grayscale(0%)"}}
          initial={{filter:"grayscale(100%)"}}
          transition={{duration:0.6}}
          id={styles["fazenda_30"]}
        >
        </motion.img>
        <motion.img
          layout
          src={"fazenda_31.jpg"}
          className={styles.image}
          whileInView={{ filter:"grayscale(0%)" }}
          whileHover={{scale:1.03, filter:"grayscale(0%)"}}
          initial={{filter:"grayscale(100%)"}}
          transition={{duration:0.6}}
          id={styles["fazenda_31"]}
        >
        </motion.img>
      </div>
    </div>
  )
}

export default Home
