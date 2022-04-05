const Animation = {
  "background": {
    "color": {
      "value": "#ffeaa7"
    },
    "image": "",
    "position": "",
    "repeat": "",
    "size": "",
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
  "interactivity": {
    "detectsOn": "canvas",
    "events": {
      "onClick": {
        "enable": true,
        "mode": "push"
      },
      "onHover": {
        "enable": false,
        "mode": "bubble",
        "parallax": {
          "enable": false,
          "force": 60,
          "smooth": 10
        }
      },
      "resize": true
    },
    "modes": {
      "attract": {
        "distance": 200,
        "duration": 0.4,
        "speed": 1
      },
      "bubble": {
        "distance": 400,
        "duration": 2,
        "opacity": 0.8,
        "size": 40
      },
      "connect": {
        "distance": 80,
        "links": {
          "opacity": 0.5
        },
        "radius": 60
      },
      "grab": {
        "distance": 400,
        "links": {
          "opacity": 1
        }
      },
      "push": {
        "quantity": 4
      },
      "remove": {
        "quantity": 2
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4,
        "speed": 1
      },
      "slow": {
        "factor": 3,
        "radius": 200
      },
      "trail": {
        "delay": 1,
        "quantity": 1
      }
    }
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
      "direction": "none",
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
      "speed": 2,
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
      "value": 0.18
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
            "src": "/dolar.png",
            "width": 500,
            "height": 240
          },
          {
            "src": "/dolar2.jpg",
            "width": 100,
            "height": 42
          }
        ],
        "images": [
          {
            "src": "/dolar.png",
            "width": 300,
            "height": 120
          },
          {
            "src": "/dolar2.jpg",
            "width": 100,
            "height": 42
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
}

export default Animation;