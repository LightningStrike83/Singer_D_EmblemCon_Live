export function drawing() {
    const canvas = document.querySelector("#drawing-board");
    const toolbar = document.querySelector("#toolbar");
    const context = canvas.getContext('2d');

    let savedStyle = "rgb(0,0,0)"

    const setCanvasSize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };

    setCanvasSize();

    let isPainting = false;
    let lineWidth = 5;

    function getMousePos(event) {
        const rect = canvas.getBoundingClientRect();
        const scaleX = canvas.width / rect.width;   
        const scaleY = canvas.height / rect.height;

        const x = (event.touches ? event.touches[0].clientX : event.clientX) - rect.left;
        const y = (event.touches ? event.touches[0].clientY : event.clientY) - rect.top;
    
        return { x: x * scaleX, y: y * scaleY };
    }
    
    
    function startDraw(event) {
        isPainting = true;
        const { x, y } = getMousePos(event);
        context.beginPath();
        context.moveTo(x, y);
        event.preventDefault()
    }

    function drawLine(event) {
        if (!isPainting) return;
        const { x, y } = getMousePos(event);
        context.lineWidth = lineWidth;
        context.lineCap = 'round';
        context.lineTo(x, y);
        context.stroke();
        event.preventDefault()
    }

    function stopDraw() {
        if (!isPainting) return;
        isPainting = false;
        context.closePath();
        event.preventDefault()
    }

    function clearCanvas(event) {
        if (event.target.id === 'clear-button') {
            context.clearRect(0, 0, canvas.width, canvas.height);
        }
    }

    function activateErase(event) {
        if (event.target.id === 'eraser') {
            if (event.target.classList.contains("clicked")) {
                event.target.classList.remove("clicked")
                context.strokeStyle = savedStyle
            } else {
                event.target.classList.add("clicked")
                context.strokeStyle = "rgb(242, 242, 242)"
            }
        }
    }

    function inputChanges(event) {
        if (event.target.id === 'stroke') {
            context.strokeStyle = event.target.value;
            savedStyle = event.target.value;
        }

        if (event.target.id === 'line-width') {
            lineWidth = Number(event.target.value);
        }
    }

    function resizeCheck() {
        const tempCanvas = document.createElement('canvas');
        tempCanvas.width = canvas.width;
        tempCanvas.height = canvas.height;
        const tempCtx = tempCanvas.getContext('2d');
        tempCtx.drawImage(canvas, 0, 0);

        setCanvasSize();
        context.drawImage(tempCanvas, 0, 0);
    }

    toolbar.addEventListener("click", clearCanvas);
    toolbar.addEventListener("change", inputChanges);
    toolbar.addEventListener("click", activateErase)
    canvas.addEventListener("mousedown", startDraw);
    canvas.addEventListener("touchstart", startDraw)
    canvas.addEventListener("mousemove", drawLine);
    canvas.addEventListener("touchmove", drawLine)
    canvas.addEventListener("mouseup", stopDraw);
    canvas.addEventListener("touchend", stopDraw)
    canvas.addEventListener("mouseleave", stopDraw);
    canvas.addEventListener("touchcancel", stopDraw)
    window.addEventListener("resize", resizeCheck)
}
