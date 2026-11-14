# 🌲 room-man — *The Forgotten Man's Tree*

> *"There is a man here. He might be happy to see you."*

Una experiencia web interactiva inspirada en la habitación secreta del **Hombre Olvidado (*The Forgotten Man*)** de *Deltarune*, construida con estética pixel art, diálogos ramificados en tiempo real y síntesis de audio retro generada directamente en el navegador.

---

## ✨ Características principales

* **Motor de diálogos en JSON:** Árbol narrativo modular con efecto *typewriter* (máquina de escribir) e interacciones dinámicas con el árbol y la figura detrás de él.
* **Audio retro con Web Audio API:** Generador de efectos de sonido (voces estilo *blip* de 8-bit y atmósfera ambiental) sin depender de archivos de audio externos pesados.
* **Arquitectura Atomic Design:** Componentes organizados de forma escalable (`atoms`, `molecules`, `organisms`, `templates`, `pages`).
* **Estética Pixel Art & CSS Modular:** Renderizado nítido (`image-rendering: pixelated`) y estilos aislados mediante CSS Modules.

---

## 🛠️ Stack Tecnológico

* **React (JSX)** + **Vite**
* **CSS Modules**
* **Web Audio API**
* **JSON** (estructuración de eventos y diálogos)

---

## 📁 Estructura del Proyecto (`src/`)

```text
src/
├── components/
│   ├── atoms/        # Botones retro, texto pixelado, sprites base
│   ├── molecules/    # Caja de diálogo, opciones de interacción, retrato
│   ├── organisms/    # Escena del árbol, controlador de audio, menú
│   ├── templates/    # Layout de pantalla CRT / marco de juego
│   └── pages/        # Habitación principal (RoomManPage)
├── data/             # Guiones y estados de diálogo en JSON
├── hooks/            # Lógica de typewriter y sintetizador Web Audio
└── styles/           # Variables globales, fuentes y reset pixel-art
```

---

## 🚀 Ejecución local

1. Clona el repositorio:
   ```bash
   git clone https://github.com/N03113-15-D34D/room-man.git
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

---

## 📄 Licencia

Este proyecto está bajo la licencia **MIT** — consulta el archivo [LICENSE](LICENSE) para más detalles.

o usan eso 