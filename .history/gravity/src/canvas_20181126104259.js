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


var gravity = 1;
var friction = 0.99;


// Event Listeners
addEventListener('mousemove', event => {
    mouse.x = event.clientX
    mouse.y = event.clientY
})

addEventListener('resize', () => {
    canvas.width = innerWidth
    canvas.height = innerHeight

    init()
})

// Objects
function Ball(x, y, dy, radius, color) {
    this.x = x
    this.y = y
    this.dy = dy
    this.radius = radius
    this.color = color
}

Object.prototype.draw = function() {
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.fillStyle = this.color
    c.fill()
    c.closePath()
}

Object.prototype.update = function() {
    if(this.y + this.radius> canvas.height){
        this.dy = -this.dy * friction;
    } else {
        this.dy += gravity;
    }
    this.y += this.dy;
    this.draw()
}

// Implementation
let objects

var ball; 
var ballArray = [];
function init() {

    for( var i = 0; i <500; i++){
        var x = ramdomIntFromRange(0, canvas.width);
        ballArray.push(new Ball(x, 200, 2, 30, 'red'));
    } 
    console.log(ballArray);


    // ball = new Ball(canvas.width/2, canvas.height/2, 2,30, 'red');
    // console.log(ball);
    /* objects = []

    for (let i = 0; i < 400; i++) {
        // objects.push();
    } */
}

// Animation Loop
function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)
    ball.update();
    // c.fillText('HTML CANVAS BOILERPLATE', mouse.x, mouse.y)
    // objects.forEach(object => {
    //  object.update();
    // });
}

init()
animate()
