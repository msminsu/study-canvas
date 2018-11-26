import utils from './utils'

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

const mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
}

const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66']

// Event Listeners
addEventListener('mousemove', event => {
    mouse.x = event.clientX
    mouse.y = event.clientY
})

addEventListener('resize', () => {
    canvas.width = innerWidth
    canvas.height = innerHeight

    init()
});


function getDistance(x1, y1, x2, y2){
    let xDistance = x2 - x1;
    let yDistance = y2 - y1;

    return  Math.sqrt(Math.pow(xDistance , 2 ) + Math.pow(yDistance , 2));
}

function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)]
}

function distance(x1, y1, x2, y2) {
    const xDist = x2 - x1
    const yDist = y2 - y1

    return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))
}

// Objects
function Particle(x, y, radius, color) {
    this.x = x
    this.y = y;
    this.velocity = {
        x:Math.random() - 0.5 ,
        y:Math.random() - 0.5
    }
    this.radius = radius
    this.color = color
}

Object.prototype.draw = function() {
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.strokeStyle = this.color
    c.stroke()
    c.closePath()
}

Object.prototype.update = function() {
    this.draw();

    for( var i = 0; i< particles.length; i++){
        if(this === particles[i]) continue;
        if( distance(this.x, this.y, particles[i].x, particles[i].y) - this.radius * 2 < 0){

        }
    }
    this.x += this.velocity.x;
    this.y += this.velocity.y;
         
}

// Implementation
var particles = [];
function init() {    
    particles = [];

    for(let i =0; i<40; i++){

        var x = randomIntFromRange(radius, canvas.width -radius); //Math.random() * innerWidth;
        var y =  randomIntFromRange(radius, canvas.height -radius); //Math.random() * innerHeight;
        var radius = 100;
        var color = 'blue';
        
        if( i !== 0 ){
            for (let j = 0; j< particles.length; j++){
                if( distance (x ,y, particles[j].x, particles[j].y ) - radius * 2 < 0 ){
                    x = randomIntFromRange(radius, canvas.width - radius);//Math.random() * innerWidth;
                    y = randomIntFromRange(radius, canvas.height - radius);//Math.random() * innerHeight;
                    j = -1;

                }
            }
        }

        particles.push(new Particle(x, y, radius, color));
    }
}
    
// Animation Loop
function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height);

    for(var i = 0; i<particles.length; i++){
        particles[i].updat();
    }

   /*  circle1.update();
    circle2.x = mouse.x;
    circle2.y = mouse.y;
    circle2.update();

    if(getDistance(circle1.x, circle1.y, circle2.x, circle2.y) < circle1.radius + circle2.radius ){
        circle1.color = 'red';
    }else{
        circle1.color = 'black';
    } */

    // c.fillText('HTML CANVAS BOILERPLATE', mouse.x, mouse.y)
    // objects.forEach(object => {
    //  object.update();
    // });
}

init()
animate()
