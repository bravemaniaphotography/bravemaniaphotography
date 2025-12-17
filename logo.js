// Logo Drawing Functions for Bravemania Photography

function draw3DCamera(x, y, size, ctx) {
    const scale = size / 300;
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);

    // Camera grip with 3D depth
    const gripGrad = ctx.createLinearGradient(0, 90, 0, 210);
    gripGrad.addColorStop(0, '#FF7700');
    gripGrad.addColorStop(0.3, '#FF6600');
    gripGrad.addColorStop(0.7, '#DD4400');
    gripGrad.addColorStop(1, '#CC3300');
    
    ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
    ctx.shadowBlur = 25;
    ctx.shadowOffsetX = 15;
    ctx.shadowOffsetY = 20;
    
    ctx.fillStyle = gripGrad;
    ctx.beginPath();
    ctx.roundRect(-25, 90, 160, 120, 20);
    ctx.fill();
    ctx.shadowBlur = 0;

    // Camera body with gradient
    const bodyGrad = ctx.createLinearGradient(0, 0, 300, 300);
    bodyGrad.addColorStop(0, '#FF8800');
    bodyGrad.addColorStop(0.4, '#FF7700');
    bodyGrad.addColorStop(0.7, '#FF6600');
    bodyGrad.addColorStop(1, '#DD5500');
    
    ctx.shadowColor = 'rgba(0, 0, 0, 0.8)';
    ctx.shadowBlur = 30;
    ctx.shadowOffsetX = 15;
    ctx.shadowOffsetY = 20;
    
    ctx.fillStyle = bodyGrad;
    ctx.beginPath();
    ctx.roundRect(0, 0, 300, 250, 25);
    ctx.fill();

    // Add edge lighting for 3D effect
    ctx.shadowBlur = 0;
    const edgeLight = ctx.createLinearGradient(0, 0, 300, 0);
    edgeLight.addColorStop(0, 'rgba(255, 200, 100, 0.4)');
    edgeLight.addColorStop(0.5, 'rgba(255, 200, 100, 0)');
    edgeLight.addColorStop(1, 'rgba(150, 50, 0, 0.3)');
    ctx.fillStyle = edgeLight;
    ctx.fillRect(0, 0, 300, 250);

    // Lens mount with 3D depth
    ctx.shadowColor = 'rgba(0, 0, 0, 0.9)';
    ctx.shadowBlur = 35;
    ctx.shadowOffsetX = 12;
    ctx.shadowOffsetY = 15;

    const lensGrad = ctx.createRadialGradient(150, 150, 30, 150, 150, 100);
    lensGrad.addColorStop(0, '#333333');
    lensGrad.addColorStop(0.7, '#1a1a1a');
    lensGrad.addColorStop(1, '#000000');
    
    ctx.fillStyle = lensGrad;
    ctx.beginPath();
    ctx.arc(150, 150, 100, 0, Math.PI * 2);
    ctx.fill();

    // Inner lens rings
    ctx.shadowBlur = 0;
    [85, 70, 55].forEach((radius, i) => {
        const ringGrad = ctx.createRadialGradient(150, 150, radius - 10, 150, 150, radius);
        ringGrad.addColorStop(0, i === 0 ? '#2a2a2a' : '#1a1a1a');
        ringGrad.addColorStop(1, '#000000');
        ctx.strokeStyle = ringGrad;
        ctx.lineWidth = 6;
        ctx.beginPath();
        ctx.arc(150, 150, radius, 0, Math.PI * 2);
        ctx.stroke();
    });

    // Aperture
    ctx.fillStyle = '#000000';
    ctx.beginPath();
    ctx.arc(150, 150, 40, 0, Math.PI * 2);
    ctx.fill();

    // Lens reflections
    const refl1 = ctx.createRadialGradient(128, 128, 0, 128, 128, 45);
    refl1.addColorStop(0, 'rgba(255, 255, 255, 0.85)');
    refl1.addColorStop(0.4, 'rgba(255, 255, 255, 0.4)');
    refl1.addColorStop(1, 'rgba(255, 255, 255, 0)');
    ctx.fillStyle = refl1;
    ctx.save();
    ctx.translate(128, 128);
    ctx.rotate(-35 * Math.PI / 180);
    ctx.beginPath();
    ctx.ellipse(0, 0, 32, 45, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    // Additional reflections
    const refl2 = ctx.createRadialGradient(175, 168, 0, 175, 168, 15);
    refl2.addColorStop(0, 'rgba(255, 255, 255, 0.5)');
    refl2.addColorStop(1, 'rgba(255, 255, 255, 0)');
    ctx.fillStyle = refl2;
    ctx.beginPath();
    ctx.arc(175, 168, 12, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.beginPath();
    ctx.arc(118, 175, 7, 0, Math.PI * 2);
    ctx.fill();

    // LCD Screen
    ctx.shadowColor = 'rgba(0, 0, 0, 0.6)';
    ctx.shadowBlur = 8;
    ctx.fillStyle = '#0a2a0a';
    ctx.beginPath();
    ctx.roundRect(178, 208, 105, 38, 5);
    ctx.fill();
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 4;
    ctx.stroke();

    ctx.shadowBlur = 0;
    ctx.fillStyle = '#1a3a1a';
    ctx.fillRect(183, 213, 95, 28);

    // Screen reflection
    ctx.fillStyle = 'rgba(100, 255, 100, 0.1)';
    ctx.fillRect(185, 215, 40, 10);

    ctx.restore();
}

function draw3DTextUnderCamera(ctx, centerX, cameraBottomY, radius) {
    ctx.save();
    
    const textStartY = cameraBottomY + radius * 0.08;
    const mainSize = radius * 0.22;

    // Deep 3D shadows
    ctx.shadowColor = 'rgba(0, 0, 0, 0.95)';
    ctx.shadowBlur = 35;
    ctx.shadowOffsetX = 18;
    ctx.shadowOffsetY = 24;

    ctx.font = `900 ${mainSize}px Arial Black, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';

    // Text gradient
    const textGrad = ctx.createLinearGradient(centerX - radius * 0.8, 0, centerX + radius * 0.8, 0);
    textGrad.addColorStop(0, '#FFB347');
    textGrad.addColorStop(0.25, '#FF8C00');
    textGrad.addColorStop(0.5, '#FF7F00');
    textGrad.addColorStop(0.75, '#FF6600');
    textGrad.addColorStop(1, '#FF4500');

    // Stroke for depth
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 8;
    ctx.lineJoin = 'round';
    ctx.miterLimit = 2;

    // BRAVEMANIA
    const mainText = 'BRAVEMANIA';
    ctx.strokeText(mainText, centerX, textStartY);
    ctx.fillStyle = textGrad;
    ctx.fillText(mainText, centerX, textStartY);

    // Highlight
    ctx.shadowBlur = 0;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.strokeStyle = 'rgba(255, 200, 100, 0.3)';
    ctx.lineWidth = 2;
    ctx.strokeText(mainText, centerX - 2, textStartY - 2);

    // PHOTOGRAPHY
    ctx.shadowColor = 'rgba(0, 0, 0, 0.9)';
    ctx.shadowBlur = 20;
    ctx.shadowOffsetX = 10;
    ctx.shadowOffsetY = 14;

    const subSize = mainSize * 0.55;
    const subY = textStartY + mainSize + radius * 0.02;
    
    ctx.font = `700 ${subSize}px Arial, sans-serif`;
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 4;
    
    const letters = 'PHOTOGRAPHY'.split('');
    const spacing = subSize * 0.18;
    const photoText = 'PHOTOGRAPHY';
    const totalWidth = ctx.measureText(photoText).width + (letters.length - 1) * spacing;
    
    let xPos = centerX - totalWidth / 2;
    
    ctx.fillStyle = '#FF8C00';
    letters.forEach(letter => {
        const w = ctx.measureText(letter).width;
        const letterX = xPos + w / 2;
        ctx.strokeText(letter, letterX, subY);
        ctx.fillText(letter, letterX, subY);
        xPos += w + spacing;
    });

    ctx.restore();
}

function drawCircleLogo(canvasId, size = 1200, transparent = true) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = size;
    canvas.height = size;
    
    const center = size / 2;
    const radius = size / 2 - 25;

    // Clear or fill background
    if (transparent) {
        ctx.clearRect(0, 0, size, size);
    } else {
        ctx.fillStyle = '#1a1a1a';
        ctx.fillRect(0, 0, size, size);
    }

    // Clip to circle
    ctx.save();
    ctx.beginPath();
    ctx.arc(center, center, radius, 0, Math.PI * 2);
    ctx.clip();

    // Fill circle background
    ctx.fillStyle = '#1a1a1a';
    ctx.fillRect(0, 0, size, size);

    // Camera
    const cameraSize = size * 0.48;
    const cameraX = center - cameraSize * 0.52;
    const cameraY = size * 0.08;
    draw3DCamera(cameraX, cameraY, cameraSize, ctx);

    // Text
    const cameraBottomY = cameraY + cameraSize * 0.83;
    draw3DTextUnderCamera(ctx, center, cameraBottomY, radius);

    ctx.restore();

    // Circle border
    ctx.shadowColor = 'rgba(0, 0, 0, 0.8)';
    ctx.shadowBlur = 20;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 10;
    
    const borderGrad = ctx.createLinearGradient(0, 0, 0, size);
    borderGrad.addColorStop(0, '#FFB347');
    borderGrad.addColorStop(0.5, '#FF8C00');
    borderGrad.addColorStop(1, '#FF6600');
    ctx.strokeStyle = borderGrad;
    ctx.lineWidth = 16;
    ctx.beginPath();
    ctx.arc(center, center, radius, 0, Math.PI * 2);
    ctx.stroke();

    // Inner highlight
    ctx.shadowBlur = 0;
    ctx.strokeStyle = 'rgba(255, 179, 71, 0.5)';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(center, center, radius - 10, 0, Math.PI * 2);
    ctx.stroke();
}

// Initialize logos when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Nav logo
    if (document.getElementById('logo-canvas')) {
        drawCircleLogo('logo-canvas', 80);
    }
    
    // About logo
    if (document.getElementById('about-logo')) {
        drawCircleLogo('about-logo', 400);
    }
    
    // Footer logo
    if (document.getElementById('footer-logo')) {
        drawCircleLogo('footer-logo', 150);
    }
});
