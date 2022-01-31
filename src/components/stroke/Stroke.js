// https://www.cluemediator.com/draw-a-line-on-canvas-using-react
import React, { useRef, useEffect } from 'react';

const Stroke = (props) => {
    const { left: x, top: y, right: x1, bottom: y1 } = props
    const canvas = useRef();
    let ctx = null;

    // initialize the canvas context
    useEffect(() => {
        // dynamically assign the width and height to canvas
        const canvasEle = canvas.current;
        canvasEle.width = canvasEle.clientWidth;
        canvasEle.height = canvasEle.clientHeight;

        // get context of the canvas
        ctx = canvasEle.getContext("2d");
    }, []);

    function drawLine(info, style = {}) {
        const { x, y, x1, y1 } = info;
        const { color = 'black', width = 1 } = style;

        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x1, y1);
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.stroke();
    }

    useEffect(() => {
        drawLine({ x, y, x1, y1 }, { color: 'red', width: 10 });

    }, []);


    return (
        <>
            <canvas ref={canvas} ></canvas>
        </>
    );
}




export default Stroke;