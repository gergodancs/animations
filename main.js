function hide() {
    document.getElementById('animation').style.display = 'none'; 
    document.getElementById('vonal').style.display = 'none'; 
    document.getElementById('feri').style.display = 'none'; 
    document.getElementById('loader').style.display = 'none'; 
    document.getElementById('andi').style.display = 'none'; 
    document.getElementById('loader2').style.display = 'none'; 
    document.getElementById('content').style.visibility = 'visible'; 
}
 
window.addEventListener ("load", function() {
    setTimeout(hide, 10500);
})