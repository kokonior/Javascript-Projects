const tl = gsap.timeline({defaults: { ease: 'power2.out'}});

tl.fromTo('nav', {y: '-100px'}, {y:'0px'})
.fromTo('#logo', {opacity:0}, {opacity:1})
.fromTo('ul a', {opacity:0}, {opacity:1, stagger:0.1})
.fromTo('.header-text h1', {y:'100px', opacity:0, x:'-100px'}, {y:'0px' ,opacity:1, x:'0px'})
.fromTo('.header-text p', {y: '100px', opacity:0}, {y:'0px', opacity:1})
.fromTo('.header-text button', {y:'100px', opacity:0}, {y:'0px', opacity:1})
.fromTo('img', {scale:1.5, opacity:0}, {scale:1, opacity:1, duration:0.8})