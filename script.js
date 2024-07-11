const container=document.querySelector('.container')
const btns=document.querySelectorAll('.btn')
const imglist=["image1.jpg","image2.jpeg","image3.jpg","image4.jpg"]

let index=0;
btns.forEach((button)=>{
    console.log('clicked')
    button.addEventListener('click',()=>{
       if(button.classList.contains('btn-left')){
        index--;
        if(index<0){
            index=imglist.length-1;
        }
        container.style.background=`url(${imglist[index]}) center/cover fixed no-repeat`;
       }
        else{
            index++;
            if(index===imglist.length-1){
                index=0
            }
            container.style.background=`url(${imglist[index]}) center/cover fixed no-repeat`;

        }
    })
})