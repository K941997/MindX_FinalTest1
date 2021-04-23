
    //!Câu A:
        //1.
            function findOppositeNumber(n, inputNumber){
                let result;

                let halfOfCircle = n / 2;

                let oppositeTest = inputNumber + halfOfCircle;

                if (inputNumber >= halfOfCircle){

                    result = oppositeTest.toString().charAt(1);
                    console.log(result);
                }

                else{

                    result = oppositeTest;
                    console.log(result);
                }

                return result;
            }

           findOppositeNumber(10, 9);


        //2.
            function merge2String(s1, s2){
                let result = "";

                let str1 = s1.split("");
                console.log(str1);

                let str2 = s2.split("");
                console.log(str2);

                for (i = 0; i < str1.length || i < str2.length; i++){

                    if (i < str1.length){
                        result += str1[i];
                    }

                    if (i < str2.length){
                        result += str2[i];
                    }
                }

                return result;
            }

            let a = merge2String("abcd", "0124");
            console.log(a)



    