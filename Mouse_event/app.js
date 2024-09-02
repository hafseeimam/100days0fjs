'use strict';
const container = document.querySelector('.container')

window.addEventListener('mousemove', function (e) {
    const Xaxis = e.clientX
    const Yaxis = e.clientY
    return container.innerHTML = `
<div class="mouse_event">
            ${Xaxis}
            <h2>Mouse X Position(px)</h2>
        </div>
        <div class="mouse_event">
            ${Yaxis}
            <h2>Mouse Y Position(px)</h2>
        </div>
`
})