const btnTop = document.createElement('button');
btnTop.classList.add("btnVoltarTopo");
btnTop.innerHTML = "↑<br>Topo";
//btnTop.textContent = "↑\nTopo";
document.body.appendChild(btnTop);
btnTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        btnTop.style.display = 'block';
    }
    else {
        btnTop.style.display = 'none';
    }
});
export {};
//# sourceMappingURL=voltarTopo.js.map