const input_datas = document.querySelectorAll('.input-data');
const password_visible = document.querySelector('.password-visible');

password_visible.onclick = () => {
    //input type = text (attribute) / 비밀번호표시 숨기기(innerhtml,inntertext)
}


for(let i =0; i<input_datas.length; i++){
    const label = input_datas[i].querySelector('label');
    const input = input_datas[i].querySelector('input');

    input.onkeydown = () => {
        label.style.top = '2px';
        label.style.fontSize = '11px';
        input.style.padding = '16px 0 2px 8px';

    }

    input.onkeyup = () => {
        if(input.value.length==0){
            label.style.top = '9px';
            label.style.fontSize = '13px';
            input.style.padding = '9px 0 7px 8px';
        }
    }

    input.onblur = () => { //onblur :포커스가 벗어났을때
        const inputMsg = document.querySelectorAll('.input-msg');
        if(input.value.length==0 ){
            inputMsg[i].innerHTML = `<i class="fa-solid fa-circle-xmark"></i>`;         
        }else{
            inputMsg[i].innerHTML = `<i class="fa-solid fa-circle-check" style="color:#8e8e8e;"></i>`;
            
        }
    }
}