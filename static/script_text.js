$(document).ready(function(){

    var test = [] //ตัวแปร global ที่เก็บว่าตอนนี้แสดงรูปอะไรอยู่
    
    $('#name_x').keyup(function(){
        // console.log($('#name_x').val())

        var arr_text = $('#name_x').val().split("")
        test = arr_text
        var temp_text = ""

        for(let index = 0 ; index < arr_text.length ; index++){
            if( arr_text[index] == "a" || arr_text[index] == "A"){
                temp_text += "<img src='./static/images/cipher_A_re.png'>"
            }
            else if (arr_text[index] == "b" || arr_text[index] == "B"){
                temp_text += "<img src='./static/images/cipher_B_re.png'>"
            }
            else if (arr_text[index] == "c" || arr_text[index] == "C"){
                temp_text += "<img src='./static/images/cipher_C_re.png'>"
            }
            else if (arr_text[index] == "d" || arr_text[index] == "D"){
                temp_text += "<img src='./static/images/cipher_D_re.png'>"
            }
            else if (arr_text[index] == "e" || arr_text[index] == "E"){
                temp_text += "<img src='./static/images/cipher_E_re.png'>"
            }
            else if (arr_text[index] == "f" || arr_text[index] == "F"){
                temp_text += "<img src='./static/images/cipher_F_re.png'>"
            }
            else if (arr_text[index] == "g" || arr_text[index] == "G"){
                temp_text += "<img src='./static/images/cipher_G_re.png'>"
            }
            else if (arr_text[index] == "h" || arr_text[index] == "H"){
                temp_text += "<img src='./static/images/cipher_H_re.png'>"
            }
            else if (arr_text[index] == "i" || arr_text[index] == "I"){
                temp_text += "<img src='./static/images/cipher_I_re.png'>"
            }
            else if (arr_text[index] == "j" || arr_text[index] == "J"){
                temp_text += "<img src='./static/images/cipher_J_re.png'>"
            }
            else if (arr_text[index] == "k" || arr_text[index] == "K"){
                temp_text += "<img src='./static/images/cipher_K_re.png'>"
            }
            else if (arr_text[index] == "l" || arr_text[index] == "L"){
                temp_text += "<img src='./static/images/cipher_L_re.png'>"
            }
            else if (arr_text[index] == "m" || arr_text[index] == "M"){
                temp_text += "<img src='./static/images/cipher_M_re.png'>"
            }
            else if (arr_text[index] == "n" || arr_text[index] == "N"){
                temp_text += "<img src='./static/images/cipher_N_re.png'>"
            }
            else if (arr_text[index] == "o" || arr_text[index] == "O"){
                temp_text += "<img src='./static/images/cipher_O_re.png'>"
            }
            else if (arr_text[index] == "p" || arr_text[index] == "P"){
                temp_text += "<img src='./static/images/cipher_P_re.png'>"
            }
            else if (arr_text[index] == "q" || arr_text[index] == "Q"){
                temp_text += "<img src='./static/images/cipher_Q_re.png'>"
            }
            else if (arr_text[index] == "r" || arr_text[index] == "R"){
                temp_text += "<img src='./static/images/cipher_R_re.png'>"
            }
            else if (arr_text[index] == "s" || arr_text[index] == "S"){
                temp_text += "<img src='./static/images/cipher_S_re.png'>"
            }
            else if (arr_text[index] == "t" || arr_text[index] == "T"){
                temp_text += "<img src='./static/images/cipher_T_re.png'>"
            }
            else if (arr_text[index] == "u" || arr_text[index] == "U"){
                temp_text += "<img src='./static/images/cipher_U_re.png'>"
            }
            else if (arr_text[index] == "v" || arr_text[index] == "V"){
                temp_text += "<img src='./static/images/cipher_V_re.png'>"
            }
            else if (arr_text[index] == "w" || arr_text[index] == "W"){
                temp_text += "<img src='./static/images/cipher_W_re.png'>"
            }
            else if (arr_text[index] == "x" || arr_text[index] == "X"){
                temp_text += "<img src='./static/images/cipher_X_re.png'>"
            }
            else if (arr_text[index] == "y" || arr_text[index] == "Y"){
                temp_text += "<img src='./static/images/cipher_Y_re.png'>"
            }
            else if (arr_text[index] == "z" || arr_text[index] == "Z"){
                temp_text += "<img src='./static/images/cipher_Z_re.png'>"
            }

        }
        // console.log(temp_text)
        $("#get_name").html(temp_text)
        console.log(test)
    })
    
    $("#clear_text").click(function(){
        $("#name_x").val("")
        $("#get_name").html("")
        test = []
    })

    function check(){
        var temp_img = ""

        for(let index = 0 ; index < test.length ; index++){
            if( test[index] == "a" || test[index] == "A"){
                temp_img += "<img src='./static/images/cipher_A_re.png'>"
            }
            else if (test[index] == "b" || test[index] == "B"){
                temp_img += "<img src='./static/images/cipher_B_re.png'>"
            }
            else if (test[index] == "c" || test[index] == "C"){
                temp_img += "<img src='./static/images/cipher_C_re.png'>"
            }
            else if (test[index] == "d" || test[index] == "D"){
                temp_img += "<img src='./static/images/cipher_D_re.png'>"
            }
            else if (test[index] == "e" || test[index] == "E"){
                temp_img += "<img src='./static/images/cipher_E_re.png'>"
            }
            else if (test[index] == "f" || test[index] == "F"){
                temp_img += "<img src='./static/images/cipher_F_re.png'>"
            }
            else if (test[index] == "g" || test[index] == "G"){
                temp_img += "<img src='./static/images/cipher_G_re.png'>"
            }
            else if (test[index] == "h" || test[index] == "H"){
                temp_img += "<img src='./static/images/cipher_H_re.png'>"
            }
            else if (test[index] == "i" || test[index] == "I"){
                temp_img += "<img src='./static/images/cipher_I_re.png'>"
            }
            else if (test[index] == "j" || test[index] == "J"){
                temp_img += "<img src='./static/images/cipher_J_re.png'>"
            }
            else if (test[index] == "k" || test[index] == "K"){
                temp_img += "<img src='./static/images/cipher_K_re.png'>"
            }
            else if (test[index] == "l" || test[index] == "L"){
                temp_img += "<img src='./static/images/cipher_L_re.png'>"
            }
            else if (test[index] == "m" || test[index] == "M"){
                temp_img += "<img src='./static/images/cipher_M_re.png'>"
            }
            else if (test[index] == "n" || test[index] == "N"){
                temp_img += "<img src='./static/images/cipher_N_re.png'>"
            }
            else if (test[index] == "o" || test[index] == "O"){
                temp_img += "<img src='./static/images/cipher_O_re.png'>"
            }
            else if (test[index] == "p" || test[index] == "P"){
                temp_img += "<img src='./static/images/cipher_P_re.png'>"
            }
            else if (test[index] == "q" || test[index] == "Q"){
                temp_img += "<img src='./static/images/cipher_Q_re.png'>"
            }
            else if (test[index] == "r" || test[index] == "R"){
                temp_img += "<img src='./static/images/cipher_R_re.png'>"
            }
            else if (test[index] == "s" || test[index] == "S"){
                temp_img += "<img src='./static/images/cipher_S_re.png'>"
            }
            else if (test[index] == "t" || test[index] == "T"){
                temp_img += "<img src='./static/images/cipher_T_re.png'>"
            }
            else if (test[index] == "u" || test[index] == "U"){
                temp_img += "<img src='./static/images/cipher_U_re.png'>"
            }
            else if (test[index] == "v" || test[index] == "V"){
                temp_img += "<img src='./static/images/cipher_V_re.png'>"
            }
            else if (test[index] == "w" || test[index] == "W"){
                temp_img += "<img src='./static/images/cipher_W_re.png'>"
            }
            else if (test[index] == "x" || test[index] == "X"){
                temp_img += "<img src='./static/images/cipher_X_re.png'>"
            }
            else if (test[index] == "y" || test[index] == "Y"){
                temp_img += "<img src='./static/images/cipher_Y_re.png'>"
            }
            else if (test[index] == "z" || test[index] == "Z"){
                temp_img += "<img src='./static/images/cipher_Z_re.png'>"
            } 
            
            $("#get_name").html(temp_img)
        }
    }

    $("#picture_A").click(function(){
        test.push("A")
        
        $("#name_x").val($("#name_x").val()+"A");
        check()
        
    })
    $("#picture_B").click(function(){
        test.push("B")
        
        $("#name_x").val($("#name_x").val()+"B");
        check()
        
    })
    $("#picture_C").click(function(){
        test.push("C")
        
        $("#name_x").val($("#name_x").val()+"C");
        check()
        
    })
    $("#picture_D").click(function(){
        test.push("D")
        
        $("#name_x").val($("#name_x").val()+"D");
        check()
        
    })
    $("#picture_E").click(function(){
        test.push("E")
        
        $("#name_x").val($("#name_x").val()+"E");
        check()
        
    })
    $("#picture_F").click(function(){
        test.push("F")
        
        $("#name_x").val($("#name_x").val()+"F");
        check()
        
    })
    $("#picture_G").click(function(){
        test.push("G")
        
        $("#name_x").val($("#name_x").val()+"G");
        check()
        
    })
    $("#picture_H").click(function(){
        test.push("H")
        
        $("#name_x").val($("#name_x").val()+"H");
        check()
        
    })
    $("#picture_I").click(function(){
        test.push("I")
        
        $("#name_x").val($("#name_x").val()+"I");
        check()
        
    })
    $("#picture_J").click(function(){
        test.push("J")
        
        $("#name_x").val($("#name_x").val()+"J");
        check()
        
    })
    $("#picture_K").click(function(){
        test.push("K")
        
        $("#name_x").val($("#name_x").val()+"K");
        check()
        
    })
    $("#picture_L").click(function(){
        test.push("L")
        
        $("#name_x").val($("#name_x").val()+"L");
        check()
        
    })
    $("#picture_M").click(function(){
        test.push("M")
        
        $("#name_x").val($("#name_x").val()+"M");
        check()
        
    })
    $("#picture_N").click(function(){
        test.push("N")
        
        $("#name_x").val($("#name_x").val()+"N");
        check()
        
    })
    $("#picture_O").click(function(){
        test.push("O")
        
        $("#name_x").val($("#name_x").val()+"O");
        check()
        
    })
    $("#picture_P").click(function(){
        test.push("P")
        
        $("#name_x").val($("#name_x").val()+"P");
        check()
        
    })
    $("#picture_Q").click(function(){
        test.push("Q")
        
        $("#name_x").val($("#name_x").val()+"Q");
        check()
        
    })
    $("#picture_R").click(function(){
        test.push("R")
        
        $("#name_x").val($("#name_x").val()+"R");
        check()
        
    })
    $("#picture_S").click(function(){
        test.push("S")
        
        $("#name_x").val($("#name_x").val()+"S");
        check()
        
    })
    $("#picture_T").click(function(){
        test.push("T")
        
        $("#name_x").val($("#name_x").val()+"T");
        check()
        
    })
    $("#picture_U").click(function(){
        test.push("U")
        
        $("#name_x").val($("#name_x").val()+"U");
        check()
        
    })
    $("#picture_V").click(function(){
        test.push("V")
        
        $("#name_x").val($("#name_x").val()+"V");
        check()
        
    })
    $("#picture_W").click(function(){
        test.push("W")
        
        $("#name_x").val($("#name_x").val()+"W");
        check()
        
    })
    $("#picture_X").click(function(){
        test.push("X")
        
        $("#name_x").val($("#name_x").val()+"X");
        check()
        
    })
    $("#picture_Y").click(function(){
        test.push("Y")
        
        $("#name_x").val($("#name_x").val()+"Y");
        check()
        
    })
    $("#picture_Z").click(function(){
        test.push("Z")
        
        $("#name_x").val($("#name_x").val()+"Z");
        check()
        
    })
    
    //การเปลี่ยน cursor เมื่อเอาเมาส์ไปโดนรูปภาพ
    alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');

    for (let index = 0; index < alphabet.length; index++) {
        tmp = "#picture_" + alphabet[index]
        $(tmp).css({
            "cursor": "pointer"
        })
    }
})