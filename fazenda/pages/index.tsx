import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Particles from 'react-tsparticles'
import styles from '../styles/Home.module.css'
import Animation from '../utils/animation';

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
        <Particles 
          id="tsparticles" 
          width="100%" 
          height="100%" 
          className={styles['animation']} 
          options={{
            "background": {
              "color": {
                "value": ""
              },
              "image": "url('/perfeicao2.png')",
              "position": "",
              "repeat": "no-repeat",
              "size": "100vw 100vh",
              "opacity": 1
            },
            "backgroundMask": {
              "cover": {
                "color": {
                  "value": "#fff"
                },
                "opacity": 1
              },
              "enable": false
            },
            "detectRetina": true,
            "fpsLimit": 60,
            "infection": {
              "cure": false,
              "delay": 0,
              "enable": false,
              "infections": 0,
              "stages": []
            },
            "particles": {
              "collisions": {
                "enable": false,
                "mode": "bounce"
              },
              "color": {
                "value": "#ffffff",
                "animation": {
                  "enable": false,
                  "speed": 1,
                  "sync": true
                }
              },
              "links": {
                "blink": false,
                "color": {
                  "value": "#000"
                },
                "consent": false,
                "distance": 150,
                "enable": false,
                "opacity": 0.4,
                "shadow": {
                  "blur": 5,
                  "color": {
                    "value": "#00ff00"
                  },
                  "enable": false
                },
                "triangles": {
                  "enable": false
                },
                "width": 1,
                "warp": false
              },
              "move": {
                "angle": 90,
                "attract": {
                  "enable": false,
                  "rotate": {
                    "x": 600,
                    "y": 1200
                  }
                },
                "direction": "bottom",
                "enable": true,
                "noise": {
                  "delay": {
                    "random": {
                      "enable": false,
                      "minimumValue": 0
                    },
                    "value": 0
                  },
                  "enable": false
                },
                "outMode": "out",
                "random": false,
                "speed": 5,
                "straight": false,
                "trail": {
                  "enable": false,
                  "length": 10,
                  "fillColor": {
                    "value": "#000000"
                  }
                },
                "vibrate": false,
                "warp": false
              },
              "number": {
                "density": {
                  "enable": true,
                  "area": 800,
                  "factor": 1000
                },
                "limit": 0,
                "value": 80
              },
              "opacity": {
                "animation": {
                  "enable": false,
                  "minimumValue": 0.2,
                  "speed": 1,
                  "sync": false
                },
                "random": {
                  "enable": false,
                  "minimumValue": 1
                },
                "value": 0.5
              },
              "rotate": {
                "animation": {
                  "enable": true,
                  "speed": 5,
                  "sync": false
                },
                "direction": "random",
                "path": false,
                "random": true,
                "value": 0
              },
              "shadow": {
                "blur": 0,
                "color": {
                  "value": "#000000"
                },
                "enable": false,
                "offset": {
                  "x": 0,
                  "y": 0
                }
              },
              "shape": {
                "options": {
                  "character": {
                    "fill": false,
                    "font": "Verdana",
                    "style": "",
                    "value": "*",
                    "weight": "400"
                  },
                  "char": {
                    "fill": false,
                    "font": "Verdana",
                    "style": "",
                    "value": "*",
                    "weight": "400"
                  },
                  "polygon": {
                    "sides": 5
                  },
                  "star": {
                    "sides": 5
                  },
                  "image": [
                    {
                      "src": "/dolar.jpg",
                      "width": 799,
                      "height": 341
                    }
                  ],
                  "images": [
                    {
                      "src": "/dolar.jpg",
                      "width": 799,
                      "height": 341
                    }
                  ]
                },
                "type": "image"
              },
              "size": {
                "animation": {
                  "destroy": "none",
                  "enable": false,
                  "minimumValue": 0.1,
                  "speed": 40,
                  "startValue": "max",
                  "sync": false
                },
                "random": {
                  "enable": false,
                  "minimumValue": 1
                },
                "value": 16
              },
              "twinkle": {
                "lines": {
                  "enable": false,
                  "frequency": 0.05,
                  "opacity": 1
                },
                "particles": {
                  "enable": false,
                  "frequency": 0.05,
                  "opacity": 1
                }
              }
            },
            "pauseOnBlur": true
          }} 
		    />
        <div className={styles['timer-container']}>
        <h1 className={styles['titulo']}>Fazenda da Titi</h1>
        
        {timerComponents.length ? timerComponents : <span>Time`&apos;`s up!</span>}
        
        
        </div>
      </div>
    </>
  )
}

export default Home
