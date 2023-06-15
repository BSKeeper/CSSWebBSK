//declaraciones

const fullImgBox=document.getElementById("cajaImgCompleta"),
fullImg=document.getElementById("imgCompleta");

//función abrir
function openImg(imgRef){
    fullImgBox.style.display="flex";
    fullImg.src =imgRef;
}


//función cerrar
function closeImg(){
    fullImgBox.style.display="none";
}
