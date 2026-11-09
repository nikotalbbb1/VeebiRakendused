function joon(){
    const canvas = document.getElementById('canvas'); //määrame canvas element
    if(canvas.getContext){
        let tx = canvas.getContext('2d');
        tx.beginPath();
        tx.strokeStyle="blue";
        tx.lineWidth = 3;
        tx.moveTo(50, 50); //algus
        tx.lineTo(200, 280); //lõpp punkt
        tx.stroke();
    }
}
function puhasta(){
    const canvas = document.getElementById('canvas'); //määrame canvas element
    if(canvas.getContext){
        let tx = canvas.getContext('2d');
        tx.clearRect(0, 0, 400, 400);
    }
}
function kolmnurk(){
    const canvas = document.getElementById('canvas'); //määrame canvas element
    if(canvas.getContext){
        let tx = canvas.getContext('2d');
        tx.beginPath();
        tx.fillStyle="black";
        tx.strokeStyle="white";
        tx.lineWidth = 3;
        tx.moveTo(50, 50); //algus
        tx.lineTo(200, 280);
        tx.lineTo(30,350);
        tx.lineTo(50,50);//lõpp punkt
        tx.fill();
        tx.stroke();
    }
}

function ristkylik(){
    const canvas = document.getElementById('canvas'); //määrame canvas element
    const l = document.getElementById('laius');
    const k = document.getElementById('kõrgus');
    if(canvas.getContext){
        let tx = canvas.getContext('2d');
        tx.fillStyle="black";
        tx.fillRect(100, 150, l.value, k.value);
        tx.fill();
    }
}
function ring(){
    const canvas = document.getElementById('canvas'); //määrame canvas element
    const r = document.getElementById('radius');
    if(canvas.getContext){
        let tx = canvas.getContext('2d');
        tx.beginPath();
        tx.fillStyle="black";
        tx.strokeStyle="white";
        tx.arc(100, 100, r.value, 0,2*Math.PI,true);
        tx.fill();
        tx.stroke();
    }
}
function pilt(){
    const canvas = document.getElementById('canvas');
    if(canvas.getContext){
        let tx = canvas.getContext('2d');
        const fail = new Image();
        fail.src="https://picsum.photos/200/300?random=1";
        fail.onload = ()=>{
            tx.drawImage(fail, 50,50,100,100);
        }
    }
}
function ratas1(){
    const canvas = document.getElementById('canvas');
    if(canvas.getContext){
        let tx = canvas.getContext('2d');
        tx.beginPath();
        tx.fillStyle="black";
        tx.arc(132, 130, 15, 0,2*Math.PI,true);
        tx.fill();
    }
}
function ratas2(){
    const canvas = document.getElementById('canvas');
    if(canvas.getContext){
        let tx = canvas.getContext('2d');
        tx.beginPath();
        tx.fillStyle="black";
        tx.arc(198, 130, 15, 0,2*Math.PI,true);
        tx.fill();
    }
}
function vaikeratas1(){
    const canvas = document.getElementById('canvas');
    if(canvas.getContext){
        let tx = canvas.getContext('2d');
        tx.beginPath();
        tx.fillStyle="white";
        tx.arc(132, 130, 5, 0,2*Math.PI,true);
        tx.fill();
    }
}
function vaikeratas2(){
    const canvas = document.getElementById('canvas');
    if(canvas.getContext){
        let tx = canvas.getContext('2d');
        tx.beginPath();
        tx.fillStyle="white";
        tx.arc(198, 130, 5, 0,2*Math.PI,true);
        tx.fill();
    }
}

function kere(){
    const canvas = document.getElementById('canvas');
    if(canvas.getContext){
        let tx = canvas.getContext('2d');
        tx.fillStyle="white";
        tx.fillRect(122, 85, 90, 30);

    }
}
function kere2(){
    const canvas = document.getElementById('canvas');
    if(canvas.getContext){
        let tx = canvas.getContext('2d');
        tx.fillStyle="white";
        tx.strokeStyle="black";
        tx.lineWidth = 3;
        tx.fillRect(134, 60, 60, 30);
    }
}

function koik(){
    ratas1(),
        ratas2(),
        vaikeratas1(),
        vaikeratas2(),
        kere(),
        kere2();
}
