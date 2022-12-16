import Particles from 'react-particles'
import type { Engine } from 'tsparticles-engine'
import { loadFull } from 'tsparticles'

function Particle() {
  const particlesInit = async (main: Engine) => {
    console.log(main)

    await loadFull(main)
  }

  const particlesLoaded = (container: any) => {
    console.log(container)
  }

  return (
    <Particles
      id='tsparticles'
      init={particlesInit}
      options={{
        fpsLimit: 60,
        interactivity: {
          detectsOn: 'canvas',
          events: {
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 30,
            },
            push: {
              quantity: 4,
            },
          },
        },
        particles: {
          color: {
            value: '#09cfee',
          },
          links: {
            color: '#019fb6',
            distance: 110,
            enable: true,
            opacity: 0.3,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: 'none',
            enable: true,
            outMode: 'bounce',
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 800,
            },
            value: 40,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: 'circle',
          },
          size: {
            random: true,
            value: 3,
          },
        },
        detectRetina: true,
      }}
    />
  )
}

export default Particle
