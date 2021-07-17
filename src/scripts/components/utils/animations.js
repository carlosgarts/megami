import ScrollTrigger from 'gsap/ScrollTrigger.js';
import ScrollToPlugin from 'gsap/ScrollToPlugin.js';
import * as ThreePlugin from './ThreePlugin.js';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger, ThreePlugin, ScrollToPlugin);

// const menuTl = gsap.timeline()
//     .from('.linkbox', {
//         width: "0vw",
//         duration: 0.5
//     })
//     .to('.linkbox', {
//         width: "90vw",
//         duration: 0.5
//     });

function simpleAnimation(camera, keyCollection, Keyframe){
    gsap.to(camera, {
        three: {
            x: keyCollection.position.x[Keyframe],
            y: keyCollection.position.y[Keyframe],
            z: keyCollection.position.z[Keyframe],
            rotationX: keyCollection.rotation.x[Keyframe],
            rotationY: keyCollection.rotation.y[Keyframe],
            rotationZ: keyCollection.rotation.z[Keyframe]
        },
        delay:0.5,
        duration:3.5,
        ease: "power2.out"
    });
};

function moveGlasses(){
    gsap.to("#banner01", {
    xPercent: -25,
    ease: "none",
    scrollTrigger: {
        trigger: "#trend-banner",
        // start: "top bottom", // the default values
        // end: "bottom top",
        scrub: true
    }, 
    });
}

function scrollToSection(section){
    gsap.to(window, 1,{scrollTo:section,
        delay:0,
        duration:3.5,
        ease: "power2.out"});
};

function scrollToTop(){
    gsap.to(window, 1,{scrollTo:{y:0},
        delay:0,
        duration:3.5,
        ease: "power2.out"});
};

function revealMenu(value) {
    // const timeline = gsap.timeline()
    // .from('.linkline', { width: "0vw", duration: 0.2 })
    // .to('.linkline', { width: "200vw", duration: 0.2 })
    // .from('.linkbox', { width: "0vw", duration: 0.5 })
    // .to('.linkbox', { width: "90vw", duration: 0.5, stagger: 0.1, ease: "back"});

    if (value == true) {
        gsap.timeline()
        .to('#menu-bars', { transform: "rotate(-30deg) scale(90%)", duration: 0.2 }, 0)
        .to('.links', {right: "-50vw", duration: 0 })
        .to('.linkline', { width: "250vw", duration: 0.2 })
        .to('.linkbox', { width: "90vw", duration: 0.4, stagger: 0.08, ease: "back"});
    } else {
        gsap.timeline()
        .to('#menu-bars', { transform: "rotate(0deg) scale(100%)", duration: 0.2 }, 0)
        .to('.linkline', { width: "0vw", duration: 0.15 }, 0)
        .to('.linkbox', { width: "0vw", duration: 0.15 }, 0)
        .to('.links', {right: "-100vw", duration: 0 });
    }
};

function scrollingAnimation(camera, container, Keyframes) {
    /* var tl = */ 
    gsap.timeline({
        defaults: {
            duration: 0.05,
            transformOrigin: 'top center',
            ease: "none"
        },
        scrollTrigger: {
            trigger: container,
            scrub: true,
            start: "top center",
            end: "35%",
            markers: true
        }
    })
    .from(camera, {
        three: {
        x: Keyframes.position.x[0],
        y: Keyframes.position.y[0],
        z: Keyframes.position.z[0],
        rotationX: Keyframes.rotation.x[0],
        rotationY: Keyframes.rotation.y[0],
        rotationZ: Keyframes.rotation.z[0]
        },
        ease: "none"
    })
    .to(camera, {
        three: {
        x: Keyframes.position.x[1],
        y: Keyframes.position.y[1],
        z: Keyframes.position.z[1],
        rotationX: Keyframes.rotation.x[1],
        rotationY: Keyframes.rotation.y[1],
        rotationZ: Keyframes.rotation.z[1]
        },
        ease: "none"
    });
};

export {simpleAnimation, scrollingAnimation, scrollToTop, revealMenu, scrollToSection, moveGlasses };