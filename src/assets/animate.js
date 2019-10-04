import anime from 'animejs';

export function startAnimation(element) {
  anime({
    targets: element,
    translateX: [150, 0],
    translateY: [150, 0],
    opacity: 1,
    delay: function(el, i) {return anime.random(1, 20) * 150 },
    duration: 150,
    easing: 'linear',
    offset: "-=1000"
  });
}
