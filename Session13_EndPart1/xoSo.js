
    let input = document.getElementById("input");
    let button = document.getElementById("button");

    
    let randomNumber = Math.floor(Math.random() *10) + 1;
    let soLanDuDoan = 0;

    button.addEventListener("click", function(){
        
        let inputNumber = parseInt(input.value);

        if (inputNumber === randomNumber){
            alert ("Bạn đã trúng thưởng");
            let randomNumber = Math.floor(Math.random() *10) + 1;
            console.log(randomNumber);
            soLanDuDoan = 0;
            return;
        }

        else if ( soLanDuDoan === 3){
            alert (`Bạn đã nhập quá số lần, số đúng là ${randomNumber}`);
            soLanDuDoan = 0;
        }  

        else {
            alert (`Bạn đã dự đoán sai, vui lòng nhập lại`)
            soLanDuDoan ++;
        }

    })

