//JMVH
document.addEventListener('DOMContentLoaded', function () {
    const boton9 = document.getElementById('9');
    const boton8 = document.getElementById('8');
    const boton7 = document.getElementById('7');
    const boton6 = document.getElementById('6');
    const boton5 = document.getElementById('5');
    const boton4 = document.getElementById('4');
    const boton3 = document.getElementById('3');
    const boton2 = document.getElementById('2');
    const boton1 = document.getElementById('1');
    const boton0 = document.getElementById('0');
    const botonx = document.getElementById('x');
    const botonme = document.getElementById('-');
    const botonma = document.getElementById('+');
    const botondiv = document.getElementById('/');
    const botonpun = document.getElementById('.');
    const entrada = document.getElementById('entrada');
    const elim_char = document.getElementById('eliminar-char');
    const reset = document.getElementById('reset');
    const calc = document.getElementById('calc');
    const rangoTemaCambio = document.getElementById('rangotema');
    boton9.onclick = valor;
    boton8.onclick = valor;
    boton7.onclick = valor;
    boton6.onclick = valor;
    boton5.onclick = valor;
    boton4.onclick = valor;
    boton3.onclick = valor;
    boton2.onclick = valor;
    boton1.onclick = valor;
    boton0.onclick = valor;
    let operador = 0;
    botonx.onclick = valor;
    botonme.onclick = valor;
    botonma.onclick = valor;
    botondiv.onclick = valor;
    botonpun.onclick = valor;

    elim_char.onclick = quitarChar;

    reset.onclick = borrar => (entrada.value = '', operador=0);
    calc.onclick = calcular;
    rangoTemaCambio.onchange = cambiartema;
    
    function valor() {
        if (entrada.value === 'Infinity' || entrada.value === 'NaN' || entrada.value === 'Syntaxis Error') {
            entrada.value = ''
            entrada.value += this.textContent;
            console.log('s');
        } else {
            regular = /[-|+|x]/
            if (operador!==0) {
                console.log('Valor');
                let cadena = entrada.value.toString();

                if (regular.test((this.textContent)) || (this.textContent)==='/') {
                    operador +=1
                    if (regular.test((cadena[cadena.length - 1])) || (cadena[cadena.length - 1])==='/') {
                            quitarChar()
                            entrada.value += this.textContent;
                    }else{
                        calcular()
                        entrada.value += this.textContent;
                        operador =1
                    }
                }else{
                    entrada.value += this.textContent;
                }  
            }else {
                if (regular.test(this.textContent) || this.textContent==='/') {
                    console.log('Entro')
                    operador += 1
                }
                entrada.value += this.textContent;
            }
            
        }
    }
    function quitarChar() {
        regular = /[-|+|x]/
        let cadena = entrada.value.toString();
        if (regular.test((cadena[cadena.length - 1])) || (cadena[cadena.length - 1])==='/') { 
            operador-=1
            
        }
        
      
        entrada.value = (cadena.substring(0, cadena.length - 1));
    }
    function calcular() {
        let operacion = entrada.value.toString();
        num1 = 0;
        num2 = 0;
        operador = null;
        rango = /[0-9]/;
        for (let i = 0; i < operacion.length; i++) {
            if (operador === null) {
                if (rango.test(operacion[i]) || operacion[i] === '.') {
                    num1 += operacion[i];

                } else {
                    if (i === 0) {
                        num1 += operacion[i];
                    } else {
                        operador = operacion[i];
                    }

                }
            } else {

                num2 += operacion[i];

            }


        }
        if (operador === null || num2 === 0) {

        } else {
            num1 = num1.replace(0, '');
            num2 = num2.replace(0, '');
            operador = operador.replace(0, '');

            try {
                switch (operador) {
                    case '-':
                        entrada.value = (Number(num1) - Number(num2));
                        break;
                    case '+':
                        entrada.value = (Number(num1) + Number(num2));
                        break;
                    case '/':
                        entrada.value = (Number(num1) / Number(num2));
                        break;
                    case 'x':
                        entrada.value = (Number(num1) * Number(num2));
                        break;
                }
            } catch (error) {
                entrada.value = 'Syntaxis Error';
            }
        }
        operador=null


    }
    function cambiartema() {
        
        switch (Number(this.value)) {
            case 1:
                const elems = document.getElementsByClassName('color-num');
                for(var i = 0; i < elems.length; i++)
                {
                    elems[i].style.backgroundColor = "hsl(30, 25%, 89%)";
                    elems[i].style.color = "black";
                }
                const elemback = document.getElementsByClassName('principal-color');
                for(var i = 0; i < elemback.length; i++)
                {
                    elemback[i].style.backgroundColor = "hsl(222, 26%, 31%)";
                }
                const elemsec = document.getElementsByClassName('secondary-color');
                for(var i = 0; i < elemsec.length; i++)
                {
                    elemsec[i].style.backgroundColor = "hsl(223, 31%, 20%)";
                }
                const elempan= document.getElementsByClassName('pantallita');
                for(var i = 0; i < elempan.length; i++)
                {
                    elempan[i].style.backgroundColor = "hsl(224, 36%, 15%)";
                }
                const elemelim = document.getElementsByClassName('btn-color-elim');
                for(var i = 0; i < elemelim.length; i++)
                {
                    elemelim[i].style.backgroundColor = "hsl(224, 36%, 15%)";
                }
                const elemig = document.getElementsByClassName('igual');
                for(var i = 0; i < elemig.length; i++)
                {
                    elemig[i].style.backgroundColor = "hsl(6, 63%, 50%)";
                }
                const fuente1 = document.getElementsByClassName('fuente');
                for(var i = 0; i < fuente1.length; i++)
                {
                    fuente1[i].style.color = "white";
                }
                break;
            case 2:

                const elems2 = document.getElementsByClassName('color-num');
                for(var i = 0; i < elems2.length; i++)
                {
                    elems2[i].style.backgroundColor = "hsl(45, 7%, 89%)";
                    elems2[i].style.color = "black";
                }
                const elemback2 = document.getElementsByClassName('principal-color');
                for(var i = 0; i < elemback2.length; i++)
                {
                    elemback2[i].style.backgroundColor = "hsl(0, 0%, 90%)";
                }
                const elemsec2 = document.getElementsByClassName('secondary-color');
                for(var i = 0; i < elemsec2.length; i++)
                {
                    elemsec2[i].style.backgroundColor = "hsl(0, 5%, 81%)";
                }
                const elempan2= document.getElementsByClassName('pantallita');
                for(var i = 0; i < elempan2.length; i++)
                {
                    elempan2[i].style.backgroundColor = "hsl(0, 0%, 93%)";
                }
                const elemelim2 = document.getElementsByClassName('btn-color-elim');
                for(var i = 0; i < elemelim2.length; i++)
                {
                    elemelim2[i].style.backgroundColor = "hsl(185, 42%, 37%)";
                }
                const elemig2 = document.getElementsByClassName('igual');
                for(var i = 0; i < elemig2.length; i++)
                {
                    elemig2[i].style.backgroundColor = "hsl(25, 98%, 40%)";
                }
                const fuente = document.getElementsByClassName('fuente');
                for(var i = 0; i < fuente.length; i++)
                {
                    fuente[i].style.color = "black";
                }
                break;
            case 3:
                const elems3 = document.getElementsByClassName('color-num');
                for(var i = 0; i < elems3.length; i++)
                {
                    elems3[i].style.backgroundColor = "hsl(281, 89%, 26%)";
                    elems3[i].style.color = "hsl(52, 100%, 62%)";
                }
                const elemback3 = document.getElementsByClassName('principal-color');
                for(var i = 0; i < elemback3.length; i++)
                {
                    elemback3[i].style.backgroundColor = "hsl(268, 75%, 9%)";
                }
                const elemsec3 = document.getElementsByClassName('secondary-color');
                for(var i = 0; i < elemsec3.length; i++)
                {
                    elemsec3[i].style.backgroundColor = "hsl(268, 71%, 12%)";
                }
                const elempan3= document.getElementsByClassName('pantallita');
                for(var i = 0; i < elempan3.length; i++)
                {
                    elempan3[i].style.backgroundColor = "hsl(268, 71%, 12%)";
                }
                const elemelim3 = document.getElementsByClassName('btn-color-elim');
                for(var i = 0; i < elemelim3.length; i++)
                {
                    elemelim3[i].style.backgroundColor = "hsl(268, 47%, 21%)";
                }
                const elemig3 = document.getElementsByClassName('igual');
                for(var i = 0; i < elemig3.length; i++)
                {
                    elemig3[i].style.backgroundColor = "hsl(176, 100%, 44%)";
                }
                const fuente3 = document.getElementsByClassName('fuente');
                for(var i = 0; i < fuente3.length; i++)
                {
                    fuente3[i].style.color = "hsl(52, 100%, 62%)";
                }
                break;
        }
    }
});