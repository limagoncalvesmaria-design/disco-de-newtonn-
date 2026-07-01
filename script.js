document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('newton-disc');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const size = canvas.width;
    const radius = size / 2 - 10;
    const colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#8b00ff'];
    let angle = 0;

    function drawDisc(rotation) {
        ctx.clearRect(0, 0, size, size);
        ctx.save();
        ctx.translate(size / 2, size / 2);
        ctx.rotate(rotation);

        const segmentAngle = (Math.PI * 2) / colors.length;
        colors.forEach((color, index) => {
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.arc(0, 0, radius, index * segmentAngle, (index + 1) * segmentAngle);
            ctx.closePath();
            ctx.fillStyle = color;
            ctx.fill();
        });

        ctx.beginPath();
        ctx.arc(0, 0, radius * 0.25, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.fill();

        ctx.restore();
    }

    function animate() {
        angle += 0.03;
        drawDisc(angle);
        requestAnimationFrame(animate);
    }

    animate();

    const rgb = document.getElementById('rgb');
    if (rgb) {
        const rgbSteps = [
            'rgb(255, 0, 0)',
            'rgb(255, 128, 0)',
            'rgb(255, 255, 0)',
            'rgb(0, 255, 0)',
            'rgb(0, 255, 255)',
            'rgb(128, 0, 255)',
            'rgb(255, 0, 255)',
            'rgb(255, 255, 255)'
        ];
        let step = 0;
        rgb.textContent = 'RGB LED';
        setInterval(() => {
            rgb.style.backgroundColor = rgbSteps[step];
            step = (step + 1) % rgbSteps.length;
        }, 1200);
    }
});