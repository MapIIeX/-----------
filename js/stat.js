function renderStatistics(ctx, names, times) {
    const MAX_TIME = Math.max(...times);
    let _x = 140;

    ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
    ctx.fillRect(110, 20, 420, 270);
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(100, 10, 420, 270);
    ctx.strokeRect(100, 10, 420, 270);
    ctx.font = "16px PT Mono";
    ctx.fillStyle='#000000';
    ctx.fillText("Ура вы победили!", 120, 35);
    ctx.fillText("Список результатов:", 120, 55);

    const drawGuistogramm = function(x, y, height, name, time) {
        ctx.fillRect(x, y, 40, height);
        ctx.fillStyle = "#000000";
        ctx.fillText(name, x, y + height + 20);
        ctx.fillText(time, x, 235 - height);
    };
    
    for(let i = 0; i < names.length; i++) {
        const CURRENT_HEIGHT = (times[i] / MAX_TIME) * 150;
        ctx.fillStyle = names[i] === "Вы" ? "rgba(255, 0, 0, 1)" : `rgba(0, 0, 255, ${Math.random()})`; 
        drawGuistogramm(_x, 240 - CURRENT_HEIGHT, CURRENT_HEIGHT, names[i], Math.floor(times[i]));
        _x += 100;
    }    
}