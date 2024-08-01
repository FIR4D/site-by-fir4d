particlesJS('particles-js', {
    "particles": {
      "number": {
        "value": 50, // Уменьшено количество частиц для более спокойного эффекта
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": ["#ff4500", "#ff6347", "#ff8c00"] // Использование нескольких оттенков красного
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#ff4500"
        },
        "polygon": {
          "nb_sides": 5
        }
      },
      "opacity": {
        "value": 0.6, // Увеличена непрозрачность для более яркого эффекта
        "random": true,
        "anim": {
          "enable": true,
          "speed": 0.5, // Снижена скорость анимации непрозрачности
          "opacity_min": 0.2,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 1, // Уменьшена скорость изменения размера
          "size_min": 0.5,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false
      },
      "move": {
        "enable": true,
        "speed": 2, // Снижена скорость перемещения частиц
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false // Отключено взаимодействие при наведении
        },
        "onclick": {
          "enable": false // Отключено взаимодействие при клике
        },
        "resize": true
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#000000", // Цвет фона
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  });
  