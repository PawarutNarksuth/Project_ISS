$(document).ready(function(){
    $('#name_x').keyup(function(){
        // console.log($('#name_x').val())

        var arr_text = $('#name_x').val().split("")
        temp_text = ""
        
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
    })
    
    $("#clear_text").click(function(){
        $("#name_x").val("")
        $("#get_name").html("")
    })
})