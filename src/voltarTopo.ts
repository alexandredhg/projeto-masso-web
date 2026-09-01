function scrollFunction(): void {
    const btnVoltarTopo = document.getElementById("btnVoltarTopo") as HTMLButtonElement | null;
    
    if (btnVoltarTopo) {
        if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
            btnVoltarTopo.style.display = "block";
        } else {
            btnVoltarTopo.style.display = "none";
        }
    }
}