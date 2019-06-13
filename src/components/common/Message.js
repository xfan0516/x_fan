
export default {
    info(msg){
       let p = document.createElement('p'); 
        p.className = 'toast'
       let span = document.createElement('span'); 
       span.innerHTML = msg;
       p.append(span)
       document.body.append(p)
       setTimeout(() => {
           p.style.opacity = 0
       }, 2000);
       setTimeout(() => {
           p.remove()
       }, 2300);
    }
}

