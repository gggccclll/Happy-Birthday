class Firework {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);
        this.setupCanvas();
        this.particles = [];
        this.animate();
    }

    setupCanvas() {
        this.canvas.style.position = 'fixed';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.zIndex = '-1';
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createParticle(x, y) {
        const colors = ['#ff9a9e', '#fad0c4', '#a1c4fd', '#c2e9fb', '#ffecd2'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        const size = Math.random() * 3 + 2;
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 3 + 2;

        return {
            x,
            y,
            size,
            color,
            angle,
            speed,
            life: 1,
            decay: Math.random() * 0.02 + 0.01
        };
    }

    explode(x, y) {
        for (let i = 0; i < 100; i++) {
            this.particles.push(this.createParticle(x, y));
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Create new fireworks
        if (Math.random() < 0.05) {
            const x = Math.random() * this.canvas.width;
            const y = Math.random() * this.canvas.height / 2;
            this.explode(x, y);
        }

        // Update and draw particles
        this.particles.forEach((p, i) => {
            p.x += Math.cos(p.angle) * p.speed;
            p.y += Math.sin(p.angle) * p.speed;
            p.life -= p.decay;

            if (p.life <= 0) {
                this.particles.splice(i, 1);
            } else {
                this.ctx.beginPath();
                this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                this.ctx.fillStyle = p.color;
                this.ctx.globalAlpha = p.life;
                this.ctx.fill();
            }
        });

        requestAnimationFrame(() => this.animate());
    }
}

// 初始化烟花效果
new Firework();
