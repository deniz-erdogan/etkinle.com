// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Particles.js configuration
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 300,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: ["#ffffff", "#a5f3fc"]
            },
            shape: {
                type: "circle"
            },
            opacity: {
                value: 0.8,
                random: true,
                anim: {
                    enable: true,
                    speed: 0.5,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 2,
                random: true,
                anim: {
                    enable: true,
                    speed: 1,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 120,
                color: "#a5f3fc",
                opacity: 0.2,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "bounce",
                bounce: true,
                attract: {
                    enable: true,
                    rotateX: 3000,
                    rotateY: 3000
                }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "repulse"
                },
                onclick: {
                    enable: true,
                    mode: "push"
                },
                resize: true
            },
            modes: {
                repulse: {
                    distance: 150,
                    duration: 0.4
                },
                push: {
                    particles_nb: 10
                }
            }
        },
        retina_detect: true,
        fps_limit: 60
    });

    // Create a spherical distribution of particles
    const canvas = document.querySelector('#particles-js canvas');
    const ctx = canvas.getContext('2d');
    const particles = [];
    
    function createSpherePoints() {
        const numPoints = 200;
        const radius = Math.min(canvas.width, canvas.height) * 0.3;
        
        for (let i = 0; i < numPoints; i++) {
            const theta = Math.random() * 2 * Math.PI;
            const phi = Math.acos(2 * Math.random() - 1);
            
            const x = radius * Math.sin(phi) * Math.cos(theta) + canvas.width / 2;
            const y = radius * Math.sin(phi) * Math.sin(theta) + canvas.height / 2;
            const z = radius * Math.cos(phi);
            
            particles.push({ x, y, z });
        }
    }

    // Initial setup
    function init() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        createSpherePoints();
    }

    // Animation
    let angle = 0;
    function animate() {
        angle += 0.002;
        
        particles.forEach(particle => {
            particle.x = particle.x * Math.cos(angle) - particle.z * Math.sin(angle);
            particle.z = particle.x * Math.sin(angle) + particle.z * Math.cos(angle);
        });
        
        requestAnimationFrame(animate);
    }

    init();
    animate();

    // Handle window resize
    window.addEventListener('resize', init);

    console.log('Website loaded successfully with 3D sphere particle effects!');
}); 