const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth;
canvas.height = innerHeight;

const mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
}

const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66']

// Event Listeners
addEventListener('mousemove', event => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
})

addEventListener('resize', () => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;

    init()
});


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
    

init()