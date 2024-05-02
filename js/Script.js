import { tshmishek, motivprf, alerts, 
         cont, world, form_ansver, analiz} from "./func.js";
import{golomst} from './var.js';

export {beginTest, backQue, nextQuestion, onClik, 
         dehour, onhour, demin, onmin, desek, onsek, 
         demist, zastreg, pedan, neurav, giper, distin, trev, ciklot, afect, amotiv, timer, aczentual};

let inc = 0;
let yesno = [];
yesno.length = 88;
 
// let initTest = false;
let begintest = false;
let demist = 0;     //'Демонстративность, истероидность';
let zastreg = 0;    //'Застревание, регидность';
let pedan = 0;      //'Педантичность';
let neurav = 0;     //'Неуравновешенность, возбудимость';
let giper = 0;      //'Гипертимность';
let distin = 0;     //'Дистиммичность';
let trev = 0;       //'Тревожность, боязливость';
let ciklot = 0;     //'Циклотимичность';
let afect = 0;      //'Аффективность, экзальтированность';
let amotiv = 0;       //'Эмотивность, лабильность';

let dehour = 0;
let onhour = 0;
let demin = 0;
let onmin = 0;
let desek = 0;
let onsek = 0;

let aczentual=[];
aczentual.length=10;

let timer;
let elem = document.getElementById('timer');


// ==================================
let tshm = document.getElementById("smishek");
tshm.onClik = function pclik()
{//создание новой панели тестшмишека
    let div_1 = document.getElementById("testshm");
    let div_2 = document.getElementById("testgl");
    let div_3 =document.getElementById("testmotiv");

    let alert = document.getElementById("alert");

    if(div_2)
     {
       alerts(1);
     }
    if (div_1)
     {
       alerts(1);
     }if (div_3)
     {
       alerts(1);
     }
     else if(div_1===null && div_2===null && div_3===null)
     {
        tshmishek();
     }
    // numbtest = 1;
}


tshm.mouseov = function mouseov() 
{
    tshm.style = "color:red; cursor:pointer";
}
tshm.mouseout = function mouseout() 
{
    tshm.style = "color:black;";
}

// ===========================================
let goloms = document.getElementById("golom");
goloms.onclick = function gclik()
{
    let div_1 = document.getElementById("testgl");
    let div_2 = document.getElementById("testshm");
    let div_3 =document.getElementById("testmotiv");

    let alert = document.getElementById("alert");

    if(div_2)
     {
      alerts(2);
     }
     if(div_1)
     {
      alerts(2);
     }
     if(div_3)
     {
      alerts(2);
     }     else if(div_1===null && div_2===null && div_3===null)
     {
        golomst();
     }
    //  numbtest = 2;
}

goloms.mouseov = function mouseov() 
{
    goloms.style = "color:red; cursor:pointer";
}
goloms.mouseout=function mouseout() 
{
    goloms.style = "color:black;";
}


let motiv = document.getElementById("motivd");
motiv.onclick = function mclik()
{
    let div_1 = document.getElementById("testgl");
    let div_2 = document.getElementById("testshm");
    let div_3 =document.getElementById("testmotiv");

    if(div_1)
    {
     alerts(3);
    }
    if(div_2)
    {
     alerts(3);
    }
    if(div_3)
    {
     alerts(3);
    }
    else if(div_1===null && div_2===null && div_3===null)
    {
      motivprf();
    }
}

motiv.mouseov = function mouseov() 
{
    motiv.style = "color:red; cursor:pointer";
}
motiv.mouseout=function mouseout() 
{
    motiv.style = "color:black;";
}
// =================================


function beginTest() {
   
      inc = 0;
      let elem2 = document.getElementById("result2");
      let elem3 = document.getElementById("result3");
      let elem4 = document.getElementById("result4");
      let elem5 = document.getElementById("result5"); //'Демонстративность, истероидность';
      let elem6 = document.getElementById("result6");
      let elem7 = document.getElementById("result7");
      let elem8 = document.getElementById("result8");
      let elem9 = document.getElementById("result9");
      let elem10 = document.getElementById("result10");
      let elem11 = document.getElementById("result11");
      let elem12 = document.getElementById("result12");
      let elem13 = document.getElementById("result13");
      let elem14 = document.getElementById("result14");
      let testend = document.getElementById("testend");
      let dend = document.getElementById("dend");

      let canv = document.getElementById("canv1");


      let radioButtons1 = document.getElementsByName("chbox1");
      let radioButtons2 = document.getElementsByName("chbox2");
      let butnext = document.getElementById("butNext");

      elem3.innerHTML = inc+1;
      elem4.innerHTML = world[inc];


      for (let index = 0; index < aczentual.length; index++) 
          aczentual[index] = 0 ;


      if (testend) {
        testend.remove();
       }

       if (dend) {
        dend.remove();
       }
      if (canv) {
        canv.remove();
       }

      if (timer) {
        clearInterval(timer);
        timer = setInterval(watch, 1000, elem2); 
       }
      else {
        timer = setInterval(watch, 1000, elem2); 
         }

    demist = 0;     //'Демонстративность, истероидность';
    zastreg = 0;    //'Застревание, регидность';
    pedan = 0;      //'Педантичность';
    neurav = 0;     //'Неуравновешенность, возбудимость';
    giper = 0;      //'Гипертимность';
    distin = 0;     //'Дистиммичность';
    trev = 0;       //'Тревожность, боязливость';
    ciklot = 0;     //'Циклотимичность';
    afect = 0;      //'Аффективность, экзальтированность';
    amotiv = 0;       //'Эмотивность, лабильность';

    elem5.innerHTML = demist;
    elem6.innerHTML = zastreg;
    elem7.innerHTML = pedan;
    elem8.innerHTML = neurav;
    elem9.innerHTML = giper;
    elem10.innerHTML = distin;
    elem11.innerHTML = trev;
    elem12.innerHTML = ciklot;
    elem13.innerHTML = afect;
    elem14.innerHTML = amotiv;

    radioButtons1[0].checked = false;
    radioButtons2[0].checked = false;
    butnext.style.color = '#ff00ff';

    dehour = 0;
    onhour = 0;
    demin = 0;
    onmin = 0;
    desek = 0;
    onsek = 0;

    begintest = true;
}


function nextQuestion(bNext) {

    let elem1 = document.getElementById("result3");//номер вопроса
    let elem2 = document.getElementById("result4");//текст вопроса
    let elem3 = document.getElementById("result5");
    let elem4 = document.getElementById("result6");
    let elem5 = document.getElementById("result7");
    let elem6 = document.getElementById("result8");
    let elem7 = document.getElementById("result9");
    let elem8 = document.getElementById("result10");
    let elem9 = document.getElementById("result11");
    let elem10 = document.getElementById("result12");
    let elem11 = document.getElementById("result13");
    let elem12 = document.getElementById("result14");

    if (begintest)
    {
        var radioButtons1 = document.getElementsByName("chbox1"); 
        var radioButtons2 = document.getElementsByName("chbox2"); 

        if (radioButtons1[0].checked === false && radioButtons2[0].checked === false ||
            radioButtons1[0].checked === true && radioButtons2[0].checked === true)
        {
            alert("Необходимо выбрать вариант ответа Да или Нет");
        }
        else
        {
            // inc = 84;
            if (inc === 87)
            {
                begintest = false;
                let testend = document.getElementById("testend");
                if (testend===null) 
                {
                    let ansver = '';
                    let testshmk = document.getElementById("testshm");

                    let aklab21 = document.createElement("label");
                    aklab21.style = "width:180px;height:30px;background:red; font-size: 25px; position: absolute; left: 310px;top: 400px; text-align:center;";
                    aklab21.id = "testend";
                    aklab21.textContent = "Тест закончен";
                    testshmk.appendChild(aklab21);

                    let divend = document.createElement("div");
                    divend.style = "width:770px;height:600px;background:green; font-size: 25px; position: absolute; left: 10px;top: 450px; text-align:left; overflow: auto;";
                    divend.id ="dend";
                    testshmk.appendChild(divend);

// demist = 8;
// zastreg = 12;
// pedan = 4;
// neurav = 7;
// giper = 15;
// distin = 9;
// trev = 8;
// ciklot = 9;
// afect = 21;
// amotiv = 14;

                    for (let index = 0; index < aczentual.length; index++) 
                    {
                         switch (index) {
                            case 0:
                             aczentual[index] = demist;
                            break;
                            case 1:
                             aczentual[index] = zastreg;
                            break;
                            case 2:
                             aczentual[index] = pedan;
                            break;
                            case 3:
                             aczentual[index] = neurav;
                            break;
                            case 4:
                             aczentual[index] = giper;
                            break;
                            case 5:
                             aczentual[index] = distin;
                            break;
                            case 6:
                             aczentual[index] = trev;
                            break;
                            case 7:
                             aczentual[index] = ciklot;
                            break;
                            case 8:
                             aczentual[index] = afect;
                            break;
                            case 9:
                             aczentual[index] = amotiv;
                            break;
                            default:
                                break;
                         }
                    }
                   
                    ansver = form_ansver(analiz);

                    const vuvod = document.createElement("p");
                    vuvod.id ="analiz";
                    vuvod.style ="width:750px;height:300px;color:black; font-size: 18px;  white-space: pre-wrap;" // white-space: pre-wrap;
                    vuvod.textContent = ansver;
                    divend.appendChild(vuvod);
                   
                }
            }
            else
            {
                switch (inc) {
                    case 0:
                        {
                            if (radioButtons1[0].checked) { giper += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 1:
                        {

                            if (radioButtons1[0].checked) { zastreg += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 2:
                        {

                            if (radioButtons1[0].checked) { amotiv += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 3:
                        {
                            if (radioButtons1[0].checked) { pedan += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 4:
                        {
                            if (radioButtons1[0].checked) { yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { trev -= cont[inc]; yesno[inc] = 0; }
                        }
                        break;

                    case 5:
                        {
                            if (radioButtons1[0].checked) { ciklot += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 6:
                        {
                            if (radioButtons1[0].checked) { demist += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 7:
                        {
                            if (radioButtons1[0].checked) { neurav += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 8:
                        {
                            if (radioButtons1[0].checked) { distin += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 9:
                        {
                            if (radioButtons1[0].checked) { afect += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 10:
                        {
                            if (radioButtons1[0].checked) { giper += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 11:
                        {
                            if (radioButtons2[0].checked) { yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { zastreg -= cont[inc]; yesno[inc] = 0; }
                        }
                        break;

                    case 12:
                        {
                            if (radioButtons1[0].checked) { amotiv += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 13:
                        {
                            if (radioButtons1[0].checked) { pedan += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 14:
                        {
                            if (radioButtons1[0].checked) { zastreg += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 15:
                        {
                            if (radioButtons1[0].checked) { trev += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 16:
                        {
                            if (radioButtons1[0].checked) { pedan += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 17:
                        {
                            if (radioButtons1[0].checked) { ciklot += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 18:
                        {
                            if (radioButtons1[0].checked) { demist += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 19:
                        {
                            if (radioButtons1[0].checked) { neurav += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 20:
                        {
                            if (radioButtons1[0].checked) { distin += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { distin -= 3; yesno[inc] = 0; }
                        }
                        break;

                    case 21:
                        {
                            if (radioButtons1[0].checked) { demist += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 22:
                        {
                            if (radioButtons1[0].checked) { giper += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 23:
                        {
                            if (radioButtons1[0].checked) { zastreg += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 24:
                        {
                            if (radioButtons1[0].checked) { yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { amotiv -= cont[inc]; yesno[inc] = 0; }
                        }
                        break;

                    case 25:
                        {
                            if (radioButtons1[0].checked) { pedan += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 26:
                        {
                            if (radioButtons1[0].checked) { trev += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 27:
                        {
                            if (radioButtons1[0].checked) { ciklot += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 28:
                        {
                            if (radioButtons1[0].checked) { demist += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 29:
                        {
                            if (radioButtons1[0].checked) { neurav += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 30:
                        {
                            if (radioButtons2[0].checked) { yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { distin -= cont[inc]; yesno[inc] = 0; }
                        }
                        break;

                    case 31:
                        {
                            if (radioButtons1[0].checked) { afect += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 32:
                        {
                            if (radioButtons1[0].checked) { giper += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 33:
                        {
                            if (radioButtons1[0].checked) { zastreg += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 34:
                        {
                            if (radioButtons1[0].checked) { amotiv += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 35:
                        {
                            if (radioButtons2[0].checked) { pedan += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 36:
                        {
                            if (radioButtons1[0].checked) { zastreg += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 37:
                        {
                            if (radioButtons1[0].checked) { trev += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 38:
                        {
                            if (radioButtons1[0].checked) { yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { pedan -= cont[inc]; yesno[inc] = 0; }
                        }
                        break;

                    case 39:
                        {
                            if (radioButtons1[0].checked) { ciklot += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 40:
                        {
                            if (radioButtons1[0].checked) { demist += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 41:
                        {
                            if (radioButtons1[0].checked) { neurav += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 42:
                        {
                            if (radioButtons1[0].checked) { distin += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 43:
                        {
                            if (radioButtons1[0].checked) { demist += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 44:
                        {
                            if (radioButtons1[0].checked) { giper += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 45:
                        {
                            if (radioButtons2[0].checked) { yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { zastreg -= cont[inc]; yesno[inc] = 0; }
                        }
                        break;

                    case 46:
                        {
                            if (radioButtons1[0].checked) { amotiv += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 47:
                        {
                            if (radioButtons1[0].checked) { pedan += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 48:
                        {
                            if (radioButtons1[0].checked) { trev += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 49:
                        {
                            if (radioButtons1[0].checked) { ciklot += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 50:
                        {
                            if (radioButtons2[0].checked) { yesno[inc] = 0; }
                            else if (radioButtons2[0].checked) { demist -= cont[inc]; yesno[inc] = 0; }
                        }
                        break;

                    case 51:
                        {
                            if (radioButtons1[0].checked) { neurav += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 52:
                        {
                            if (radioButtons2[0].checked) { yesno[inc] = 0; }
                            else if (radioButtons2[0].checked) { distin -= cont[inc]; yesno[inc] = 0; }
                        }
                        break;

                    case 53:
                        {
                            if (radioButtons1[0].checked) { afect += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 54:
                        {
                            if (radioButtons1[0].checked) { giper += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 55:
                        {
                            if (radioButtons1[0].checked) { zastreg += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 56:
                        {
                            if (radioButtons1[0].checked) { amotiv += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 57:
                        {
                            if (radioButtons1[0].checked) { pedan += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 58:
                        {
                            if (radioButtons2[0].checked) { yesno[inc] = 0; }
                            else if (radioButtons2[0].checked) { zastreg -= cont[inc]; yesno[inc] = 0; }
                        }
                        break;

                    case 59:
                        {
                            if (radioButtons1[0].checked) { trev += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 60:
                        {
                            if (radioButtons1[0].checked) { pedan += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 61:
                        {
                            if (radioButtons1[0].checked) { ciklot += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 62:
                        {
                            if (radioButtons1[0].checked) { demist += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 63:
                        {
                            if (radioButtons1[0].checked) { neurav += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 64:
                        {
                            if (radioButtons2[0].checked) { yesno[inc] = 0; }
                            else if (radioButtons2[0].checked) { distin -= cont[inc]; yesno[inc] = 0; }
                        }
                        break;

                    case 65:
                        {
                            if (radioButtons1[0].checked) { demist += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 66:
                        {
                            if (radioButtons1[0].checked) { giper += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;
                    case 67:
                        {
                            if (radioButtons1[0].checked) { zastreg += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 68:
                        {
                            if (radioButtons1[0].checked) { amotiv += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 69:
                        {
                            if (radioButtons1[0].checked) { pedan += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 70:
                        {
                            if (radioButtons1[0].checked) { trev += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 71:
                        {
                            if (radioButtons1[0].checked) { ciklot += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 72:
                        {
                            if (radioButtons1[0].checked) { demist += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 73:
                        {
                            if (radioButtons1[0].checked) { distin += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 74:
                        {
                            if (radioButtons1[0].checked) { neurav += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 75:
                        {
                            if (radioButtons1[0].checked) { afect += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 76:
                        {
                            if (radioButtons1[0].checked) { giper += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 77:
                        {
                            if (radioButtons1[0].checked) { zastreg += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 78:
                        {
                            if (radioButtons1[0].checked) { amotiv += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 79:
                        {
                            if (radioButtons1[0].checked) { pedan += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 80:
                        {
                            if (radioButtons1[0].checked) { zastreg += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 81:
                        {
                            if (radioButtons1[0].checked) { trev += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 82:
                        {
                            if (radioButtons1[0].checked) { pedan += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 83:
                        {
                            if (radioButtons1[0].checked) { ciklot += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 84:
                        {
                            if (radioButtons1[0].checked) { demist += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 85:
                        {
                            if (radioButtons1[0].checked) { neurav += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 86:
                        {
                            if (radioButtons1[0].checked) { distin += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 87:
                        {
                            if (radioButtons1[0].checked) { demist += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;
                }
                inc++;
                elem1.innerHTML = inc+1; //номер вопроса
                elem2.innerHTML = world[inc]; //текст вопроса
                elem3.innerHTML = demist;
                elem4.innerHTML = zastreg;
                elem5.innerHTML = pedan;
                elem6.innerHTML = neurav;
                elem7.innerHTML = giper;
                elem8.innerHTML = distin;
                elem9.innerHTML = trev;
                elem10.innerHTML = ciklot;
                elem11.innerHTML = afect;
                elem12.innerHTML = amotiv;
 
            }
        }
        let butnext = document.getElementById("butNext");
        butnext.style.color = 'red';/*style.background = 'color:green';*/
        radioButtons1[0].checked = false;
        radioButtons2[0].checked = false;
    }
    else
    {
        if (inc===2) 
        {
            alert("Тест закончен. Хотите повторить, нажмите кнопку сначало");
        }
        else
        {
            alert("нажмите кнопку начало");
        }
    }

}

function onClik(rButon) 
{
    var radioButtons1 = document.getElementsByName("chbox1");
    var radioButtons2 = document.getElementsByName("chbox2");
    let butnext = document.getElementById("butNext");

    if (radioButtons1[0].checked == true && radioButtons2[0].checked == false ||
        radioButtons1[0].checked == false && radioButtons2[0].checked == true) {
        butnext.style.color = 'aqua';/*style.background = 'color:green';*/
        butnext.focus();
    }
    else
    {
        alert("Необходимо выбрать вариант ответа Да или Нет");
        radioButtons1[0].checked = false;
        radioButtons2[0].checked = false;
        butnext.style.color = '#ff00ff';
    }
}

function watch(res) {
    onsek++;
    if (onsek === 10)
    {
        desek++;
        onsek = 0;
    }
    if (desek === 6)
    {
        onmin++;
        desek = 0;
    }
    if (onmin === 10) { demin++; onmin = 0; }

    res.innerText = dehour + onhour + ":" + demin + onmin + ":" + desek + onsek;
}

function backQue() {

if (begintest) 
{
    
       let elem1 = document.getElementById("result3");//номер вопроса
       let elem2 = document.getElementById("result4");//текст вопроса
       let elem3 = document.getElementById("result5");
       let elem4 = document.getElementById("result6");
       let elem5 = document.getElementById("result7");
       let elem6 = document.getElementById("result8");
       let elem7 = document.getElementById("result9");
       let elem8 = document.getElementById("result10");
       let elem9 = document.getElementById("result11");
       let elem10 = document.getElementById("result12");
       let elem11 = document.getElementById("result13");
       let elem12 = document.getElementById("result14");

       var radioButtons1 = document.getElementsByName("chbox1");
       var radioButtons2 = document.getElementsByName("chbox2"); 


    if (inc != 0)
    {
        inc--;
        switch (inc)
        {
            case 0:
                {
                    if (yesno[inc] === 1) { giper -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 1:
                {
                    if (yesno[inc] == 1) { zastreg -= cont[inc]; yesno[inc] = 0; }
                }
                break;
            case 2:
                {
                    if (yesno[inc] == 1) { amotiv -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 3:
                {
                    if (yesno[inc] == 1) { pedan -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 4:
                {
                    if (yesno[inc] == 0) { trev += cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 5:
                {
                    if (yesno[inc] == 1) { ciklot -= cont[inc]; yesno[inc] = 0; }
                }
                break;
            case 6:
                {
                    if (yesno[inc] == 1) { demist -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 7:
                {
                    if (yesno[inc] == 1) { neurav -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 8:
                {
                    if (yesno[inc] == 1) { distin -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 9:
                {
                    if (yesno[inc] == 1) { afect -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 10:
                {
                    if (yesno[inc] == 1) { giper -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 11:
                {
                    if (yesno[inc] == 0) { zastreg += cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 12:
                {
                    if (yesno[inc] == 1) { amotiv -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 13:
                {
                    if (yesno[inc] == 1) { pedan -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 14:
                {
                    if (yesno[inc] == 1) { zastreg -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 15:
                {
                    if (yesno[inc] == 1) { trev -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 16:
                {
                    if (yesno[inc] == 1) { pedan -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 17:
                {
                    if (yesno[inc] == 1) { ciklot -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 18:
                {
                    if (yesno[inc] == 1) { demist -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 19:
                {
                    if (yesno[inc] == 1) { neurav -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 20:
                {
                    if (yesno[inc] == 1) { distin -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 21:
                {
                    if (yesno[inc] == 1) { demist -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 22:
                {
                    if (yesno[inc] == 1) { giper -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 23:
                {
                    if (yesno[inc] == 1) { zastreg -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 24:
                {
                    if (yesno[inc] == 0) { amotiv += cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 25:
                {
                    if (yesno[inc] == 1) { pedan -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 26:
                {
                    if (yesno[inc] == 1) { trev -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 27:
                {
                    if (yesno[inc] == 1) { ciklot -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 28:
                {
                    if (yesno[inc] == 1) { demist -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 29:
                {
                    if (yesno[inc] == 1) { neurav -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 30:
                {
                    if (yesno[inc] == 0) { distin += cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 31:
                {
                    if (yesno[inc] == 1) { afect -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 32:
                {
                    if (yesno[inc] == 1) { giper -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 33:
                {
                    if (yesno[inc] == 1) { zastreg -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 34:
                {
                    if (yesno[inc] == 1) { amotiv -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 35:
                {
                    if (yesno[inc] == 1) { pedan -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 36:
                {
                    if (yesno[inc] == 1) { zastreg -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 37:
                {
                    if (yesno[inc] == 1) { trev -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 38:
                {
                    if (yesno[inc] == 0) { pedan += cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 39:
                {
                    if (yesno[inc] == 1) { ciklot -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 40:
                {
                    if (yesno[inc] == 1) { demist -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 41:
                {
                    if (yesno[inc] == 1) { neurav -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 42:
                {
                    if (yesno[inc] == 1) { distin -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 43:
                {
                    if (yesno[inc] == 1) { demist -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 44:
                {
                    if (yesno[inc] == 1) { giper -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 45:
                {
                    if (yesno[inc] == 0) { zastreg += cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 46:
                {
                    if (yesno[inc] == 1) { amotiv -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 47:
                {
                    if (yesno[inc] == 1) { pedan -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 48:
                {
                    if (yesno[inc] == 1) { trev -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 49:
                {
                    if (yesno[inc] == 1) { ciklot -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 50:
                {
                    if (yesno[inc] == 0) { demist += cont[inc]; yesno[inc] = 0; }
                }
                break;
            case 51:
                {
                    if (yesno[inc] == 1) { neurav -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 52:
                {
                    if (yesno[inc] == 0) { distin += cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 53:
                {
                    if (yesno[inc] == 1) { afect -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 54:
                {
                    if (yesno[inc] == 1) { giper -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 55:
                {
                    if (yesno[inc] == 1) { zastreg -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 56:
                {
                    if (yesno[inc] == 1) { amotiv -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 57:
                {
                    if (yesno[inc] == 1) { pedan -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 58:
                {
                    if (yesno[inc] == 0) { zastreg += cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 59:
                {
                    if (yesno[inc] == 1) { trev -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 60:
                {
                    if (yesno[inc] == 1) { pedan -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 61:
                {
                    if (yesno[inc] == 1) { ciklot -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 62:
                {
                    if (yesno[inc] == 1) { demist -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 63:
                {
                    if (yesno[inc] == 1) { neurav -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 64:
                {
                    if (yesno[inc] == 0) { distin += cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 65:
                {
                    if (yesno[inc] == 1) { demist -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 66:
                {
                    if (yesno[inc] == 1) { giper -= cont[inc]; yesno[inc] = 0; }
                }
                break;
            case 67:
                {
                    if (yesno[inc] == 1) { zastreg -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 68:
                {
                    if (yesno[inc] == 1) { amotiv -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 69:
                {
                    if (yesno[inc] == 1) { pedan -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 70:
                {
                    if (yesno[inc] == 1) { trev -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 71:
                {
                    if (yesno[inc] == 1) { ciklot -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 72:
                {
                    if (yesno[inc] == 1) { demist -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 73:
                {
                    if (yesno[inc] == 1) { distin -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 74:
                {
                    if (yesno[inc] == 1) { neurav -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 75:
                {
                    if (yesno[inc] == 1) { afect -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 76:
                {
                    if (yesno[inc] == 1) { giper -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 77:
                {
                    if (yesno[inc] == 1) { zastreg -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 78:
                {
                    if (yesno[inc] == 1) { amotiv -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 79:
                {
                    if (yesno[inc] == 1) { pedan -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 80:
                {
                    if (yesno[inc] == 1) { zastreg -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 81:
                {
                    if (yesno[inc] == 1) { trev -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 82:
                {
                    if (yesno[inc] == 1) { pedan -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 83:
                {
                    if (yesno[inc] == 1) { ciklot -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 84:
                {
                    if (yesno[inc] == 1) { demist -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 85:
                {
                    if (yesno[inc] == 1) { neurav -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 86:
                {
                    if (yesno[inc] == 1) { distin -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 87:
                {
                    if (yesno[inc] == 1) { demist -= cont[inc]; yesno[inc] = 0; }
                }
                break;
        }

        elem1.innerHTML = inc; //номер вопроса
        elem2.innerHTML = world[inc - 1]; //текст вопроса
        elem3.innerHTML = demist;
        elem4.innerHTML = zastreg;
        elem5.innerHTML = pedan;
        elem6.innerHTML = neurav;
        elem7.innerHTML = giper;
        elem8.innerHTML = distin;
        elem9.innerHTML = trev;
        elem10.innerHTML = ciklot;
        elem11.innerHTML = afect;
        elem12.innerHTML = amotiv;
    }
}


}
