const d = document

export default function detectDevice (div) {

const deviceInfo = navigator,
    $div = d.querySelector(div)
    
const userAgent = deviceInfo.userAgent

    $div.innerHTML = `
    <p><strong>User Agent: </strong> ${userAgent}</p>
    `
}