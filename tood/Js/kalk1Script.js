function teisendamine(){
    let vastus=document.getElementById("vastus");
    let valik=document.getElementsByName("valik");
    let arv=document.getElementById("arv");

    const toll=39.37;
    const meeter=0.0254;
    //tsükli
    for(let i=0;i<valik.length;i++){
        if(valik[i].checked){
            if(valik[i].value==="meeter"){
                vastus.innerHTML= arv.value + ' meetri = '+ (arv.value*toll).toFixed(1) + ' tolli';
                vastus.style.color="green";
                vastusepilt.src="https://omid.az/cdn/shop/files/TM.241103020344.jpg?v=1742607828";
            }
            else if(valik[i].value==="tolli"){
                vastus.innerHTML= arv.value + ' tolli = '+ arv.value*meeter + ' meetri';
                vastus.style.color= "red";
                vastusepilt.src="https://tooriistamarket.ee/media/catalog/product/cache/b9986e17947c034c2ccb7dbd25369a81/H/U/HU002_S_1_web_2675.jpg";
            }
            else{
                vastus.innerHTML= " Vali ühiku - kas meeter või toll";
            }

        }
    }
}