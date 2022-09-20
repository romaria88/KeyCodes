const main = document.querySelector('.main');

window.addEventListener('keydown', (e) => {
    console.log(e);
    const {key, keyCode, code} = e;
   
    main.innerHTML = `
    <div class='key'>
        ${e.key === ' ' ? 'Space' : key}
        <span>event.key</span>
    </div>
    
    <div class='key'>
        ${code}
        <span>event.code</span>
    </div>
    `;
});