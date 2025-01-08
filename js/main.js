// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Detect if device is mobile
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    particlesJS('particles-js', {
        particles: {
            number: {
                value: isMobile ? 30 : 80,
                density: {
                    enable: true,
                    value_area: 1000
                }
            },
            color: {
                value: ["#ffffff", "#e0f2fe", "#bae6fd"]
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0
                }
            },
            opacity: {
                value: 0.9,
                random: false,
                anim: {
                    enable: false
                }
            },
            size: {
                value: isMobile ? 3 : 4,
                random: true,
                anim: {
                    enable: false
                }
            },
            line_linked: {
                enable: true,
                distance: isMobile ? 150 : 200,
                color: "#e0f2fe",
                opacity: 0.4,
                width: isMobile ? 1 : 2
            },
            move: {
                enable: true,
                speed: 1.5,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "bounce",
                bounce: true,
                attract: {
                    enable: true,
                    rotateX: 1500,
                    rotateY: 1500
                }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: !isMobile,
                    mode: "grab"
                },
                onclick: {
                    enable: !isMobile,
                    mode: "push"
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 200,
                    line_linked: {
                        opacity: 0.8
                    }
                },
                push: {
                    particles_nb: 3
                }
            }
        },
        retina_detect: true,
        fps_limit: 60
    });

    console.log(`Website loaded successfully with high-resolution particle effects!`);
}); 