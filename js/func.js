export {tshmishek, motivprf, alerts, form_ansver, cont, world, akzent, analiz};
import{beginTest, backQue, nextQuestion, onClik, 
       dehour, onhour, demin, onmin, desek, onsek, timer,
       demist, zastreg, pedan, neurav, giper, distin, trev, ciklot, afect, amotiv, aczentual} from './Script.js';
import{golomst} from './var.js';
      //  let world = [];

const cont = new Uint8Array
    ([
        3, 2, 3, 2, 3, 3, 2, 3, 3, 6,
        3, 2, 3, 2, 2, 3, 2, 3, 2, 3,
        3, 2, 3, 3, 3, 2, 3, 3, 2, 3,
        3, 6, 3, 2, 3, 2, 2, 3, 2, 3,
        2, 3, 3, 2, 3, 2, 3, 2, 3, 3,
        2, 3, 3, 6, 3, 2, 3, 2, 2, 3,
        2, 3, 2, 3, 3, 2, 3, 2, 3, 2,
        3, 3, 2, 3, 3, 6, 3, 2, 3, 2,
        2, 3, 2, 3, 2, 3, 3, 2
    ]);

    let world = [
        'У вас чаще веселое и беззаботное настроение?',
        'Вы чувствительны к оскорблениям?',
        'Бывает ли так, что у вас на глаза навертываются слезы в кино, театре, беседе?',
        'Сделав что-то, вы сомневаетесь, все ли сделано правильно и не успокаиваетесь до тех пор, пока не убедитесь еще раз в том, что все сделано правильно?',
        'В детстве вы были таким же смелым и отчаянным как ваши сверстники?',
        'Часто ли у вас меняется настроение от состояния безграничного ликования до отвращения к жизни, себе?',
        'Являетесь ли вы обычно центром внимания в обществе, компании?',
        'Бывает ли так, что вы беспричинно находитесь в таком ворчливом состоянии, что с вами лучше не разговаривать?',
        ' Вы серьезный человек?',
        'Способны ли вы восторгаться, восхищаться чем-то?',
        'Предприимчивы ли вы?',
        'Вы быстро забываете, если вас кто-то обидит?',
        'Мягкосердечны ли вы?',
        'Опуская письмо в почтовый ящик, проверяете ли вы, проводя рукой по щели, что письмо полностью упало в него?',
        'Стремитесь ли вы всегда считаться в числе лучших?',
        'Бывало ли вам страшно в детстве во время грозы или при встрече с незнакомой собакой (а может такое чувство бывает в зрелом возрасте и теперь)?',
        'Стремитесь ли вы во всем и всюду соблюдать порядок?',
        'Зависит ли ваше настроение от внешних обстоятельств?',
        'Любят ли вас ваши знакомые?',
        'Часто ли у вас бывает чувство сильного внутреннего беспокойства?',
        'У вас несколько подавленное настроение?',
        'Бывало ли у вас истерика (нервный срыв) хоть раз?',
        'Трудно ли вам долго усидеть на одном месте?',
        'Если по отношению к вам поступили несправедливо, энергично ли вы отстаиваете свои интересы?',
        'Можете ли вы зарезать курицу (овцу)?',
        'Раздражает ли вас, если долго скатерть/занавес висят неровно и вы стремитесь их поправить сразу?',
        'Вы в детстве боялись остаться один в доме?',
        'Часто ли у вас бывают колебания настроения без причин?',
        'Всегда ли вы стремитесь быть сильным работником в своей профессии?',
        'Быстро ли вы начинаете злиться/впадать в гнев?',
        'Можете ли вы быть беззаботно веселым?',
        'Бывает ли так, что ощущение полного счастья буквально пронизывает вас?',
        'Как вы думаете, получился бы из вас ведущий юмористической программы?',
        'Вы обычно высказываете свое мнение людям достаточно откровенно, прямо и недвусмысленно?',
        'Вам трудно переносить вид вашей крови? Не вызывает ли это у вас неприятных ощущений?',
        'Любите ли вы работу с высокой ответственностью?',
        'Склонны ли вы выступать в защиту лиц по отношению к которым несправедливо поступили?',
        'Вам страшно (трудно) спускаться в темный подвал?',
        'Предпочитаете ли вы такую работу, где действовать надо быстро, но требования к качеству выполнения невысокие?',
        'Общительный ли вы человек?',
        'В школе вы охотно декларировали стихи?',
        'Убегали ли вы в детстве из дома?',
        'Кажется ли вам жизнь трудной?',
        'Бывали ли так, что после конфликта (обиды) вы были до того расстроены, что идти на работу/учеб было невозможно?',
        'Можно ли сказать, что при неудаче вы теряете чувство юмора?',
        'Предприняли бы вы первые шаги к примирению, если бы вас кто-нибудь обидел?',
        'Вы очень любите животных?',
        'Возвращаетесь ли вы, чтобы убедиться, что оставили дом (место работы) в таком состоянии, что там ничего не случится?',
        'Преследует ли вас мысль иногда, что с вами (вашими близкими) может случиться что-то страшное?',
        'Считаете ли вы, что ваше настроение очень изменчиво?',
        'Трудно ли вам докладывать (выступать на сцене) перед большим количеством людей?',
        'Вы можете ударить обидчика, если он вас оскорбил?',
        'У вас очень велика потребность общения с другими людьми?',
        'Вы относитесь к тем, то при каких либо обстоятельствах впадает в глубокое отчаянье?',
        'Вам нравится работа, требующая организаторской деятельности?',
        'Настойчиво ли вы добиваетесь намеченной цели, если на пути к ней приходится преодолевать массу препятствий?',
        'Может ли трагический фильм взволновать вас так, что на глазах выступят слезы?',
        'Часто ли вам бывает трудно уснуть из-за того, что проблемы прожитого дня или будущего крутятся в голове?',
        'В школе вы иногда подсказывали своим товарищам или давали списывать?',
        'Потребуется ли вам большое напряжение воли, чтобы ночью одному пройти через кладбище?',
        'Бывает ли так, что, ложась спать в хорошем настроении вы на следующий день встаете в подавленном состоянии длящемся несколько часов?',
        'Тщательно ли вы следите за тем, чтобы каждая вещь в вашем доме была на одном и том же месте?',
        'Легко ли вы привыкаете к новым ситуациям?',
        'Бывают ли у вас головные боли?',
        'Вы часто смеетесь?',
        'Можете ли вы быть приветливыми даже с теми, кого вы явно не цените, не любите и не уважаете?',
        'Вы подвижный человек?',
        'Вы очень переживаете из-за несправедливости?',
        'Вы настолько любите природу, что можете назвать ее своим другом?',
        'Уходя их дома, ложась спать, проверяете ли вы закрыт газ, погашен свет, заперты двери?',
        'Вы очень боязливы?',
        'Изменяется ли ваше настроение при приеме алкоголя?',
        'В молодости вы охотно участвовали в кружках художественной самодеятельности?',
        'Вы расцениваете жизнь несколько пессимистично без ожидания радости?',
        'Часто ли вас тянет путешествовать?',
        'Может ли ваше настроение измениться так резко, что ваше состояние радости вдруг сменится на угрюмое и подавленное?',
        'Легко ли вам удается поднять настроение друзей в компании?',
        'Долго ли вы переживаете обиду?',
        'Переживаете ли вы длительное время горести других людей?',
        'Часто ли вы, будучи школьником, переписывали страницу вашей тетради, если случайно ставили на ней помарку?',
        'Относитесь ли вы к людям скорее с недоверием и неосторожностью, чем с доверием?',
        'Часто ли вы видите страшные сны?',
        'Бывает ли, что стоя у окна многоэтажного дома, остерегаетесь того, что можете внезапно выпасть из окна?',
        'В веселой компании вы обычно веселы?',
        'Способны ли вы отвлечься от трудных проблем, требующих решения?',
        'Вы становитесь менее сдержанным и чувствуете себя более свободно, если примите алкоголь?',
        'В беседы вы скудны на слова?',
        'Если бы вам необходимо было играть на сцене, вы смогли бы так войти в роль, чтобы позабыть о том, что это только игра?'
    ];


let akzent=[33, 33, 33, 33, 33, 33, 33, 33, 33, 33];

let analiz=[
   'Акцентуация темпераметра или характера',
   'Акцентуация характера',
   'Акцентуация темпераметра',
   'не выражена',
   'полностью',
   'выражена',
   '.',
   ' '
];


let digital=['ноль','один','два','три','четыре','пять','шесть','семь','восем','девять'];

let ochered=[10];
let row=[];
row.length=6;
let check=[];
check.length = 34;

let numtest = 0;
let resvnutmotiv = 0;
let vneshpm1 = 0;
let vneshpm2 = 0;
let vneshotrm3 = 0;
let vneshotrm4 = 0;//
let vneshpm5 = 0;//внешняя положительная мотивация
let vnutmotiv6 = 0;
let vnutmotiv7 = 0;

let vnutrmotiv = 0; //внутренняя мотивация
let vneshpolmotiv = 0;//внешняя положительная мотивация
let vneshotrmotiv =0;


function motivprf()
{
  let motivprof = document.createElement("div");
  motivprof.className='MotivProf'
  // motivprof.style = "color:#000000; position:absolute;left: 290px;top:150px; width:900px;height:800px;background-color:#557878; ";
  motivprof.id = "testmotiv";
  document.body.appendChild(motivprof);

  var label = document.createElement("label");//создание label заголопок теста
  label.style = "position: absolute; left:250px;top:5px;font-size:30px; ";
  label.textContent = "Мотивация проф деятельности";
  motivprof.appendChild(label);

  let tablemotprof = document.createElement("table"); //создание таблицы
  tablemotprof.style = "position: absolute; left:20px;top:40px;border:2px solid black;";//height:350px; width:800px
  tablemotprof.id = "tabprofm";
  motivprof.appendChild(tablemotprof);

  let tabhead = document.createElement("thead"); //создаине шапки таблицы
  tabhead.style = "color:#ffffff"; //"height:50px";
  tablemotprof.appendChild(tabhead);

  let th1 = document.createElement("th"); //создание ячейки в ряде шапки таблицы
  th1.style = "height:50px; width:200px; border:1px solid black;";//background-color:#236590;
  th1.innerText ="Мотив";
  tabhead.appendChild(th1);

  let th2 = document.createElement("th"); //создание ячейки в ряде шапки таблицы
  th2.style = "height:50px; width:120px; border:1px solid black;";
  th2.innerText ="очень небольшая значимость";
  tabhead.appendChild(th2);

  let th3 = document.createElement("th"); //создание ячейки в ряде шапки таблицы
  th3.style = "height:50px; width:120px; border:1px solid black;";
  th3.innerText ="небольшая значимость";
  tabhead.appendChild(th3);

  let th4 = document.createElement("th"); //создание ячейки в ряде шапки таблицы
  th4.style = "height:50px; width:120px; border:1px solid black;";
  th4.innerText ="неопределенная значимость";
  tabhead.appendChild(th4);

  let th5 = document.createElement("th"); //создание ячейки в ряде шапки таблицы
  th5.style = "height:50px; width:120px; border:1px solid black;";
  th5.innerText ="большая значимость";
  tabhead.appendChild(th5);

  let th6 = document.createElement("th"); //создание ячейки в ряде шапки таблицы
  th6.style = "height:50px; width:120px; border:1px solid black;";
  th6.innerText ="очень большая значимость";
  tabhead.appendChild(th6);


  row[0] = document.createElement("tr"); //создание ряда таблицы
  row[0].style = "height:30px; border:1px solid black;";
  tablemotprof.appendChild(row[0]);
 
  let td = "td";
  let stl = "color:#ffffff;height:30px; border:1px solid black;";
  let intrxt = "1. Денежный заработок";
  row[0].appendChild(createCell(td, stl, intrxt));

  let td12 = document.createElement("td");
  td12.style = "height:30px; border:1px solid black;";
  row[0].appendChild(td12);
  check[0] = document.createElement("input");
  check[0].type = "checkbox";
  check[0].id = "chekb12";
  check[0].name = "chbox12";
  check[0].title="поставте отметку";
  check[0].addEventListener("click", chbxClik1, this, false);
  td12.append(check[0]);

  let td13 = document.createElement("td");
  td13.style = "height:30px; border:1px solid black;";
  row[0].appendChild(td13);
  check[1] = document.createElement("input");
  check[1].type = "checkbox";
  check[1].id = "chekb13";
  check[1].name = "chbox13";
  check[1].title="поставте отметку";
  check[1].addEventListener("click", chbxClik1, this, false);
  td13.append(check[1]);

  let td14 = document.createElement("td");
  td14.style = "height:30px; border:1px solid black;";
  row[0].appendChild(td14);
  check[2] = document.createElement("input");
  check[2].type = "checkbox";
  check[2].id = "chekb14";
  check[2].name = "chbox14";
  check[2].title="поставте отметку";
  check[2].addEventListener("click", chbxClik1, this, false);
  td14.append(check[2]);

  let td15 = document.createElement("td");
  td15.style = "height:30px; border:1px solid black;";
  row[0].appendChild(td15);
  check[3] = document.createElement("input");
  check[3].type = "checkbox";
  check[3].id = "chekb15";
  check[3].name = "chbox15";
  check[3].title="поставте отметку";
  check[3].addEventListener("click", chbxClik1, this, false);
  td15.append(check[3]);

  let td16 = document.createElement("td");
  td16.style = "height:30px; border:1px solid black;";
  row[0].appendChild(td16);
  check[4] = document.createElement("input");
  check[4].type = "checkbox";
  check[4].id = "chekb16";
  check[4].name = "chbox16";
  check[4].title="поставте отметку";
  check[4].addEventListener("click", chbxClik1, this, false);
  td16.append(check[4]);


  row[1]= document.createElement("tr"); //создание 2 ряда таблицы
  row[1].style = "height:20px; border:1px solid black;";
  tablemotprof.appendChild(row[1]);

  let td21 = document.createElement("td");
  td21.style = "color:#ffffff;height:30px; border:1px solid black;";
  td21.innerText="2. Стремление к продвижению по службе";
  row[1].appendChild(td21);
  let td22 = document.createElement("td");
  td22.style = "height:30px; border:1px solid black;";
  row[1].appendChild(td22);
  check[5] = document.createElement("input");
  check[5].type = "checkbox";
  check[5].id = "chekb22";
  check[5].name = "chbox22";
  check[5].title="поставте отметку";
  check[5].addEventListener("click", chbxClik2, this, false);
  td22.append(check[5]);

  let td23 = document.createElement("td");
  td23.style = "height:30px; border:1px solid black;";
  row[1].appendChild(td23);
  check[6]= document.createElement("input");
  check[6].type = "checkbox";
  check[6].id = "chekb23";
  check[6].name = "chbox23";
  check[6].title="поставте отметку";
  check[6].addEventListener("click", chbxClik2, this, false);
  td23.append(check[6]);

  let td24 = document.createElement("td");
  td24.style = "height:30px; border:1px solid black;";
  row[1].appendChild(td24);
  check[7] = document.createElement("input");
  check[7].type = "checkbox";
  check[7].id = "chekb24";
  check[7].name = "chbox24";
  check[7].title="поставте отметку";
  check[7].addEventListener("click", chbxClik2, this, false);
  td24.append(check[7]);

  let td25 = document.createElement("td");
  td25.style = "height:30px; border:1px solid black;";
  row[1].appendChild(td25);
  check[8] = document.createElement("input");
  check[8].type = "checkbox";
  check[8].id = "chekb25";
  check[8].name = "chbox25";
  check[8].title="поставте отметку";
  check[8].addEventListener("click", chbxClik2, this, false);
  td25.append(check[8]);

  let td26 = document.createElement("td");
  td26.style = "height:30px; border:1px solid black;";
  row[1].appendChild(td26);
  check[9] = document.createElement("input");
  check[9].type = "checkbox";
  check[9].id = "chekb26";
  check[9].name = "chbox26";
  check[9].title="поставте отметку"; 
  check[9].addEventListener("click", chbxClik2, this, false);
  td26.append(check[9]);
  
  row[2]= document.createElement("tr"); //создание ряда таблицы
  row[2].style = "height:20px; border:1px solid black;";
  tablemotprof.appendChild(row[2]);
  let td31 = document.createElement("td");
  td31.style = "color:#ffffff;height:30px; border:1px solid black;";
  td31.innerText="3. Стремление избежать критики со стороны руководителя или коллег";
  row[2].appendChild(td31);

  let td32 = document.createElement("td");
  td32.style = "height:30px; border:1px solid black;";
  row[2].appendChild(td32);
  check[10] = document.createElement("input");
  check[10].type = "checkbox";
  check[10].id = "chekb32";
  check[10].name = "chbox32";
  check[10].title="поставте отметку";
  check[10].addEventListener("click", chbxClik3, this, false);
  td32.append(check[10]);

  let td33 = document.createElement("td");
  td33.style = "height:30px; border:1px solid black;";
  row[2].appendChild(td33);
  check[11] = document.createElement("input");
  check[11].type = "checkbox";
  check[11].id = "chekb33";
  check[11].name = "chbox33";
  check[11].title="поставте отметку";
  check[11].addEventListener("click", chbxClik3, this, false);
  td33.append(check[11]);

  let td34 = document.createElement("td");
  td34.style = "height:30px; border:1px solid black;";
  row[2].appendChild(td34);
  check[12] = document.createElement("input");
  check[12].type = "checkbox";
  check[12].id = "chekb34";
  check[12].name = "chbox34";
  check[12].title="поставте отметку";
  check[12].addEventListener("click", chbxClik3, this, false);
  td34.append(check[12]);

  let td35 = document.createElement("td");
  td35.style = "height:30px; border:1px solid black;";
  row[2].appendChild(td35);
  check[13] = document.createElement("input");
  check[13].type = "checkbox";
  check[13].id = "chekb35";
  check[13].name = "chbox35";
  check[13].title="поставте отметку";
  check[13].addEventListener("click", chbxClik3, this, false);
  td35.append(check[13]);

  let td36 = document.createElement("td");
  td36.style = "height:30px; border:1px solid black;";
  row[2].appendChild(td36);
  check[14] = document.createElement("input");
  check[14].type = "checkbox";
  check[14].id = "chekb36";
  check[14].name = "chbox36";
  check[14].title="поставте отметку";
  check[14].addEventListener("click", chbxClik3, this, false);
  td36.append(check[14]);

  row[3]= document.createElement("tr"); //создание ряда в шапке таблицы
  row[3].style = "height:20px; border:1px solid black;";
  tablemotprof.appendChild(row[3]);
  let td41 = document.createElement("td"); //создание ячейки
  td41.style = "color:#ffffff;height:30px; border:1px solid black;";
  td41.innerText="4. Стремление избежать возможных наказаний или неприятностей";
  row[3].appendChild(td41);

  let td42 = document.createElement("td");
  td42.style = "height:30px; border:1px solid black;";
  row[3].appendChild(td42);
  check[15] = document.createElement("input");
  check[15].type = "checkbox";
  check[15].id = "chekb42";
  check[15].name = "chbox42";
  check[15].title="поставте отметку";
  check[15].addEventListener("click", chbxClik4, this, false);
  td42.append(check[15]);

  let td43 = document.createElement("td");
  td43.style = "height:30px; border:1px solid black;";
  row[3].appendChild(td43);
  check[16] = document.createElement("input");
  check[16].type = "checkbox";
  check[16].id = "chekb43";
  check[16].name = "chbox43";
  check[16].title="поставте отметку";
  check[16].addEventListener("click", chbxClik4, this, false);
  td43.append(check[16]);

  let td44 = document.createElement("td");
  td44.style = "height:30px; border:1px solid black;";
  row[3].appendChild(td44);
  check[17] = document.createElement("input");
  check[17].type = "checkbox";
  check[17].id = "chekb44";
  check[17].name = "chbox44";
  check[17].title="поставте отметку";
  check[17].addEventListener("click", chbxClik4, this, false);
  td44.append(check[17]);

  let td45 = document.createElement("td");
  td45.style = "height:30px; border:1px solid black;";
  row[3].appendChild(td45);
  check[18] = document.createElement("input");
  check[18].type = "checkbox";
  check[18].id = "chekb45";
  check[18].name = "chbox45";
  check[18].title="поставте отметку";
  check[18].addEventListener("click", chbxClik4, this, false);
  td45.append(check[18]);

  let td46 = document.createElement("td");
  td46.style = "height:30px; border:1px solid black;";
  row[3].appendChild(td46);
  check[19] = document.createElement("input");
  check[19].type = "checkbox";
  check[19].id = "chekb46";
  check[19].name = "chbox46";
  check[19].title="поставте отметку";
  check[19].addEventListener("click", chbxClik4, this, false);
  td46.append(check[19]);

  row[4]= document.createElement("tr"); //создание ряда в шапке таблицы
  row[4].style = "height:20px; border:1px solid black;";
  tablemotprof.appendChild(row[4]);
  let td51 = document.createElement("td"); //создание ячейки
  td51.style = "color:#ffffff;height:30px; border:1px solid black;";
  td51.innerText="5. Потребность в достижении социального престижа и уважения со стороны других";
  row[4].appendChild(td51);

  let td52 = document.createElement("td");
  td52.style = "height:30px; border:1px solid black;";
  row[4].appendChild(td52);
  check[20] = document.createElement("input");
  check[20].type = "checkbox";
  check[20].id = "chekb52";
  check[20].name = "chbox52";
  check[20].title="поставте отметку";
  check[20].addEventListener("click", chbxClik5, this, false);
  td52.append(check[20]);

  let td53 = document.createElement("td");
  td53.style = "height:30px; border:1px solid black;";
  row[4].appendChild(td53);
  check[21] = document.createElement("input");
  check[21].type = "checkbox";
  check[21].id = "chekb53";
  check[21].name = "chbox53";
  check[21].title="поставте отметку";
  check[21].addEventListener("click", chbxClik5, this, false);
  td53.append(check[21]);

  let td54 = document.createElement("td");
  td54.style = "height:30px; border:1px solid black;";
  row[4].appendChild(td54);
  check[22] = document.createElement("input");
  check[22].type = "checkbox";
  check[22].id = "chekb54";
  check[22].name = "chbox54";
  check[22].title="поставте отметку";
  check[22].addEventListener("click", chbxClik5, this, false);
  td54.append(check[22]);

  let td55 = document.createElement("td");
  td55.style = "height:30px; border:1px solid black;";
  row[4].appendChild(td55);
  check[23] = document.createElement("input");
  check[23].type = "checkbox";
  check[23].id = "chekb55";
  check[23].name = "chbox55";
  check[23].title="поставте отметку";
  check[23].addEventListener("click", chbxClik5, this, false);
  td55.append(check[23]);

  let td56 = document.createElement("td");
  td56.style = "height:30px; border:1px solid black;";
  row[4].appendChild(td56);
  check[24] = document.createElement("input");
  check[24].type = "checkbox";
  check[24].id = "chekb56";
  check[24].name = "chbox56";
  check[24].title="поставте отметку";
  check[24].addEventListener("click", chbxClik5, this, false);
  td56.append(check[24]);

  row[5] = document.createElement("tr"); //создание 5 ряда таблицы
  row[5].style = "height:20px; border:1px solid black;";
  tablemotprof.appendChild(row[5]);
  let td61 = document.createElement("td"); //создание ячейки
  td61.style = "color:#ffffff;height:30px; border:1px solid black;";
  td61.innerText="6. Удовлетворение от самого процесса и результата работы";
  row[5].appendChild(td61);

  let td62 = document.createElement("td");
  td62.style = "height:30px; border:1px solid black;";
  row[5].appendChild(td62);
  check[25] = document.createElement("input");
  check[25].type = "checkbox";
  check[25].id = "chekb62";
  check[25].name = "chbox62";
  check[25].title="поставте отметку";
  check[25].addEventListener("click", chbxClik6, this, false);
  td62.append(check[25]);

  let td63 = document.createElement("td");
  td63.style = "height:30px; border:1px solid black;";
  row[5].appendChild(td63);
  check[26] = document.createElement("input");
  check[26].type = "checkbox";
  check[26].id = "chekb63";
  check[26].name = "chbox63";
  check[26].title="поставте отметку";
  check[26].addEventListener("click", chbxClik6, this, false);
  td63.append(check[26]);

  let td64 = document.createElement("td");
  td64.style = "height:30px; border:1px solid black;";
  row[5].appendChild(td64);
  check[27] = document.createElement("input");
  check[27].type = "checkbox";
  check[27].id = "chekb64";
  check[27].name = "chbox64";
  check[27].title="поставте отметку";
  check[27].addEventListener("click", chbxClik6, this, false);
  td64.append(check[27]);

  let td65 = document.createElement("td");
  td65.style = "height:30px; border:1px solid black;";
  row[5].appendChild(td65);
  check[28] = document.createElement("input");
  check[28].type = "checkbox";
  check[28].id = "chekb65";
  check[28].name = "chbox65";
  check[28].title="поставте отметку";
  check[28].addEventListener("click", chbxClik6, this, false);
  td65.append(check[28]);

  let td66 = document.createElement("td");
  td66.style = "height:30px; border:1px solid black;";
  row[5].appendChild(td66);
  check[29] = document.createElement("input");
  check[29].type = "checkbox";
  check[29].id = "chekb66";
  check[29].name = "chbox66";
  check[29].title="поставте отметку";
  check[29].addEventListener("click", chbxClik6, this, false);
  td66.append(check[29]);

  row[6] = document.createElement("tr"); //создание 7 ряда таблицы
  row[6].style = "height:20px; border:1px solid black;";
  tablemotprof.appendChild(row[6]);
  let td71 = document.createElement("td"); //создание ячейки
  td71.style = "color:#ffffff;height:30px; border:1px solid black;";
  td71.innerText="7. Возможность наиболее полной самореализации именно в данной деятельности";
  row[6].appendChild(td71);

  let td72 = document.createElement("td");
  td72.style = "height:30px; border:1px solid black;";
  row[6].appendChild(td72);
  check[30] = document.createElement("input");
  check[30].type = "checkbox";
  check[30].id = "chekb72";
  check[30].name = "chbox72";
  check[30].title="поставте отметку";
  check[30].addEventListener("click", chbxClik7, this, false);
  td72.append(check[30]);

  let td73 = document.createElement("td");
  td73.style = "height:30px; border:1px solid black;";
  row[6].appendChild(td73);
  check[31] = document.createElement("input");
  check[31].type = "checkbox";
  check[31].id = "chekb73";
  check[31].name = "chbox73";
  check[31].title="поставте отметку";
  check[31].addEventListener("click", chbxClik7, this, false);
  td73.append(check[31]);

  let td74 = document.createElement("td");
  td74.style = "height:30px; border:1px solid black;";
  row[6].appendChild(td74);
  check[32] = document.createElement("input");
  check[32].type = "checkbox";
  check[32].id = "chekb74";
  check[32].name = "chbox74";
  check[32].title="поставте отметку";
  check[32].addEventListener("click", chbxClik7, this, false);
  td74.append(check[32]);

  let td75 = document.createElement("td");
  td75.style = "height:30px; border:1px solid black;";
  row[6].appendChild(td75);
  check[33] = document.createElement("input");
  check[33].type = "checkbox";
  check[33].id = "chekb75";
  check[33].name = "chbox75";
  check[33].title="поставте отметку";
  check[33].addEventListener("click", chbxClik7, this, false);
  td75.append(check[33]);

  let td76 = document.createElement("td");
  td76.style = "height:30px; border:1px solid black;";
  row[6].appendChild(td76);
  check[34] = document.createElement("input");
  check[34].type = "checkbox";
  check[34].id = "chekb76";
  check[34].name = "chbox76";
  check[34].title="поставте отметку";
  check[34].addEventListener("click", chbxClik7, this, false);
  td76.append(check[34]);
   
  let butresult = document.createElement("button");
  butresult.style="width: 140px; height: 30px; position: relative ; left:250px; top:610px; background-color: #75552f; color:#14ffff;font-size:18px;";
  butresult.id = "motres";
  butresult.addEventListener("click", motivResult, this, false);
  butresult.textContent = "РЕЗУЛЬТАТ";
  motivprof.appendChild(butresult);

  let beginresult = document.createElement("button");
  /*beginresult.style="width: 140px; height: 30px; position: Relative ; left:400px; top:610px; background-color: #75552f; color:#14ffff;font-size:18px;";*/
  beginresult.id = "motbegin";
  beginresult.id = "motbegin";
  beginresult.addEventListener("click", motivBegin, this, false);
  beginresult.textContent = "СНАЧАЛА";
  motivprof.appendChild(beginresult);
}

function alerts(numb)
{
  let div = document.createElement('div');//создание сообщения
  div.id = "alert";
  div.innerHTML = "Продолжить тест!!!";
  div.style = "color:#000000; z-index:100; position:absolute;left: 540px;top:300px; width:280px;height:100px;background-color: #002378;font-size:30px;text-align: center; border-radius:10px; ";
  document.body.append(div);

  let lbut1 = document.createElement("button");
  lbut1.style = "position: absolute; left:25px;top:70px;width:50px;height:25px;font-size:15px;background-color: #00302f; color:#ff00ff;";
  lbut1.id="alertshy";
  lbut1.textContent = "Yes";
  lbut1.addEventListener("click", closeYes,this, false);//onclick = beginTest();
  div.append(lbut1);

  let lbut2 = document.createElement("button");
  lbut2.style = "position: absolute; left:100px;top:70px;width:50px;height:25px;font-size:15px;background-color: #00302f; color:#ff00ff;";
  lbut2.id="alertshn";
  lbut2.textContent = "No";
  lbut2.addEventListener("click", closeNo,this, false);//onclick = beginTest();
  div.append(lbut2);

  clearInterval(timer);
  numtest = numb;
}

function closeYes()
{
  let smishek = document.getElementById("testshm");
  let golom = document.getElementById("testgl");
  let alertsh = document.getElementById("alert");

  switch(numtest)
  {
    case 1:
      {

      }
      break;
      case 2:
      {

      }
      break;
  }
  
  alertsh.remove();
}

function closeNo()
{
  let smishekt = document.getElementById("testshm");
  let golomt = document.getElementById("testgl");
  let motpfd = document.getElementById("testmotiv");
  let alertsh = document.getElementById("alert");

  switch(numtest)
  {
    case 1:
      {
        if(golomt) 
        {
          golomt.remove();
          tshmishek();
        }
        else if(motpfd) 
        {
          motpfd.remove();
          tshmishek();
        }
        else if (smishekt) 
        {
          smishekt.remove();
          // tshmishek();
        }
        else if(smishekt===null)
        {
          tshmishek();
        }
      }
      break;
      case 2:
      {
       if(smishekt)
       {
          smishekt.remove();
          golomst();
       }
       else if(motpfd) 
        {
          motpfd.remove();
          golomst();
        }
        else if (golomt)
        {
          golomt.remove();
        }
        else if(golomt===null)
        {
          golomst();
        }
      }
      break;
      case 3:
      {
       if(smishekt)
       {
          smishekt.remove();
          motivprf();
       }
       else if (golomt)
        {
          golomt.remove();
          motivprf();
        }
        else if(motpfd) 
        {
          motpfd.remove();
        }
        else if(golomt===null)
        {
          motivprf();
        }
      }
      break;
  }

  if(alertsh)
  {
    alertsh.remove();
  }
}

function tshmishek()
{
  let testsmishek = document.createElement("div");
  testsmishek.style = "color:#000000; position:absolute;left: 300px;top:150px; width:800px;height:1250px;background:rgba(156,188,197,1) ";
  testsmishek.id = "testshm";
  document.body.append(testsmishek);

  var label = document.createElement("label");//создание label заголопок теста
  label.style = "position: absolute; left:350px;top:5px;font-size:30px; ";
  label.textContent = "Тест Шмишека";
  testsmishek.append(label);

  var hr = document.createElement("hr");//разделительная линия
  hr.style = "position: absolute;top:35px;width:797px;";
  testsmishek.append(hr);

  let result = document.createElement("output");
  result.id = "result";
  result.innerText = "Время теста";
  result.style ="position: absolute;top:50px; left:20px; width:50px; height:40px;"
  testsmishek.append(result);

  let result1 = document.createElement("output");
  result1.id = "result1";
  result1.innerText = "Номер вопроса";
  //result1.setAttribute("class", "result");
  result1.style = "position: absolute;top:50px; left:100px; width:50px; height:40px; "
  testsmishek.append(result1);



  let yesno = document.createElement("div");
  yesno.style = "color:#000000; position:absolute;left: 270px;top:45px; width:520px;height:50px;background-color: #00302f; ";
  yesno.id = "yesno";
  testsmishek.append(yesno);

  let lbut1 = document.createElement("button");
  lbut1.style = "position: absolute; left:25px;top:10px;width:100px;height:25px;font-size:15px;background-color: #00302f; color:#ff00ff;";
  lbut1.id="butBegin";
  lbut1.textContent = "Сначала";
  lbut1.addEventListener("click", beginTest,this, false);
  yesno.append(lbut1);

  let lbut2 = document.createElement("button");
  lbut2.style = "position: absolute; left:140px;top:10px;width:100px;height:25px;font-size:15px;background-color: #00302f; color:#ff00ff;";
  lbut2.id = "butBack";
  lbut2.addEventListener("click", backQue, this, false);
  lbut2.textContent = "Назад";
  yesno.append(lbut2);

  let lbut3 = document.createElement("button");
  lbut3.style = "position: absolute; left:260px;top:10px;width:100px;height:25px;font-size:15px;background-color: #00302f; color:#ff00ff;";
  lbut3.id = "butNext";
  lbut3.addEventListener("click", nextQuestion, this, false);
  lbut3.textContent = "Дальше";
  yesno.append(lbut3);

  let lab1 = document.createElement("label");
  lab1.style = "position: absolute; left:375px;top:5px;font-size:15px; color:#ff00ff;";
  lab1.textContent = "Да";
  yesno.append(lab1);

  let lab2 = document.createElement("label");
  lab2.style = "position: absolute; left:425px;top:5px;font-size:15px; color:#ff00ff;";
  lab2.textContent = "Нет";
  yesno.append(lab2);

  let chekbox1 = document.createElement("input");
  chekbox1.type = "checkbox";
  chekbox1.id = "chekb1";
  chekbox1.name = "chbox1";
  chekbox1.style = "position: absolute; left:400px;top:5px;font-size:15px;";
  chekbox1.addEventListener("click", onClik, this, false);
  chekbox1.textContent = "Нет";
  yesno.append(chekbox1);

  let chekbox2 = document.createElement("input");
  chekbox2.type = "checkbox";
  chekbox2.id = "chekb2";
  chekbox2.name = "chbox2";
  chekbox2.style = "position: absolute; left:450px;top:5px;font-size:15px;";
  chekbox2.addEventListener("click", onClik, this, false);
  chekbox2.textContent = "Нет";
  yesno.append(chekbox2);

  let result2 = document.createElement("output"); //Timer
  result2.id = "result2";
  result2.innerText = dehour + onhour + ":" + demin + onmin + ":" + desek + onsek;
  result2.style = "position: absolute; left:15px;top:100px;"
  testsmishek.append(result2);

  let result3 = document.createElement("output");//номер вопроса
  result3.id = "result3";
  result3.innerText = "NumQue";
  result3.style = "position: absolute; left:110px;top:100px;"
  testsmishek.append(result3);

  let result4 = document.createElement("output");//вопрос
  result4.id = "result4";
  //result4.innerText = "У вас чаще веселое и беззаботное настроение?";
  result4.style = "position: absolute; left:170px;top:100px; font-size: 18px;"
  testsmishek.append(result4);


  let akcent = document.createElement("div");
  akcent.style = "color:#000000; position:absolute;left:5px;top:150px; width:790px;height:245px;background-color: #00302f; ";
  akcent.id = "akcent";
  testsmishek.append(akcent);

  let aklab1 = document.createElement("label");
  aklab1.setAttribute("class", "akcents");
  aklab1.textContent = 'Демонстративность, истероидность';
  akcent.append(aklab1);

  let aklab2 = document.createElement("label");
  aklab2.setAttribute("class", "akcents");
  aklab2.style = "width:30px; text-align:center;";
  aklab2.id = "result5";
  aklab2.textContent = demist;
  akcent.append(aklab2);

  let aklab3 = document.createElement("label");
  aklab3.setAttribute("class", "akcents");
  aklab3.textContent = 'Застревание, регидность';
  akcent.append(aklab3);

  let aklab4 = document.createElement("label");
  aklab4.setAttribute("class", "akcents");
  aklab4.style = "width:30px; text-align:center;";
  aklab4.id = "result6";
  aklab4.textContent = zastreg;
  akcent.append(aklab4);

  let aklab5 = document.createElement("label");
  aklab5.setAttribute("class", "akcents");
  aklab5.textContent = 'Педантичность';
  akcent.append(aklab5);

  let aklab6 = document.createElement("label");
  aklab6.setAttribute("class", "akcents");
  aklab6.style = "width:30px; text-align:center;";
  aklab6.id = "result7";
  aklab6.textContent = pedan;
  akcent.append(aklab6);

  let aklab7 = document.createElement("label");
  aklab7.setAttribute("class", "akcents");
  aklab7.textContent = 'Неуравновешенность, возбудимость';
  akcent.append(aklab7);

  let aklab8 = document.createElement("label");
  aklab8.setAttribute("class", "akcents");
  aklab8.style = "width:30px; text-align:center;";
  aklab8.id = "result8";
  aklab8.textContent = neurav;
  akcent.append(aklab8);

  let aklab9 = document.createElement("label");
  aklab9.setAttribute("class", "akcents");
  aklab9.textContent = 'Гипертимность';
  akcent.append(aklab9);

  let aklab10 = document.createElement("label");
  aklab10.setAttribute("class", "akcents");
  aklab10.style = "width:30px; text-align:center;";
  aklab10.id = "result9";
  aklab10.textContent = giper;
  akcent.append(aklab10);

  let aklab11 = document.createElement("label");
  aklab11.setAttribute("class", "akcents");
  aklab11.textContent = 'Дистиммичность';
  akcent.append(aklab11);

  let aklab12 = document.createElement("label");
  aklab12.setAttribute("class", "akcents");
  aklab12.style = "width:30px; text-align:center;";
  aklab12.id = "result10";
  aklab12.textContent = distin;
  akcent.append(aklab12);

  let aklab13 = document.createElement("label");
  aklab13.setAttribute("class", "akcents");
  aklab13.textContent = 'Тревожность, боязливость';
  akcent.append(aklab13);

  let aklab14 = document.createElement("label");
  aklab14.setAttribute("class", "akcents");
  aklab14.style = "width:30px; text-align:center;";
  aklab14.id = "result11";
  aklab14.textContent = trev;
  akcent.append(aklab14);

  let aklab15 = document.createElement("label");
  aklab15.setAttribute("class", "akcents");
  aklab15.textContent = 'Циклотимичность';
  akcent.append(aklab15);

  let aklab16 = document.createElement("label");
  aklab16.setAttribute("class", "akcents");
  aklab16.style = "width:30px; text-align:center;";
  aklab16.id = "result12";
  aklab16.textContent = ciklot;
  akcent.append(aklab16);

  let aklab17 = document.createElement("label");
  aklab17.setAttribute("class", "akcents");
  aklab17.textContent = 'Аффективность, экзальтированность';
  akcent.append(aklab17);

  let aklab18 = document.createElement("label");
  aklab18.setAttribute("class", "akcents");
  aklab18.style = "width:30px; text-align:center;";
  aklab18.id = "result13";
  aklab18.textContent = afect;
  akcent.append(aklab18);

  let aklab19 = document.createElement("label");
  aklab19.setAttribute("class", "akcents");
  aklab19.textContent = 'Эмотивность, лабильность';
  akcent.append(aklab19);

  let aklab20 = document.createElement("label");
  aklab20.setAttribute("class", "akcents");
  aklab20.style = "width:30px; text-align:center;";
  aklab20.id = "result14";
  aklab20.textContent = amotiv;
  akcent.append(aklab20);
}

function createCell(td1, stl, intrxt, tr )
{
  let td = document.createElement(td1); //создание ячейки
  td.style = stl;
  td.id = "td11";
  td.innerText=intrxt;
  return td;
}

function chbxClik1()
{
if (this.id==="chekb12") 
{
  check[1].checked = false;
  check[2].checked = false;
  check[3].checked = false;
  check[4].checked = false;
  vneshpm1 = 1;
}
else if (this.id==="chekb13") 
{
  check[0].checked = false;
  check[2].checked = false;
  check[3].checked = false;
  check[4].checked = false;
  vneshpm1 = 2;
}
else if (this.id==="chekb14") 
{
  check[0].checked = false;
  check[1].checked = false;
  check[3].checked = false;
  check[4].checked = false;
  vneshpm1 = 3;
}
else if (this.id==="chekb15") 
{
  check[0].checked = false;
  check[1].checked = false;
  check[2].checked = false;
  check[4].checked = false;
  vneshpm1 = 4;
}
else if (this.id==="chekb16") 
{
  check[0].checked = false;
  check[1].checked = false;
  check[2].checked = false;
  check[3].checked = false;
  vneshpm1 = 5;
}
}

function chbxClik2()
{
if (this.id==="chekb22") 
{
  check[6].checked = false;
  check[7].checked = false;
  check[8].checked = false;
  check[9].checked = false;
  vneshpm2 = 1;
}
else if (this.id==="chekb23") 
{
  check[5].checked = false;
  check[7].checked = false;
  check[8].checked = false;
  check[9].checked = false;
  vneshpm2 = 2;
}
else if (this.id==="chekb24") 
{
  check[5].checked = false;
  check[6].checked = false;
  check[8].checked = false;
  check[9].checked = false;
  vneshpm2 = 3;
}
else if (this.id==="chekb25") 
{
  check[5].checked = false;
  check[6].checked = false;
  check[7].checked = false;
  check[9].checked = false;
  vneshpm2 = 4;
}
else if (this.id==="chekb26") 
{
  check[5].checked = false;
  check[6].checked = false;
  check[7].checked = false;
  check[8].checked = false;
  vneshpm2 = 5;
}
}

function chbxClik3()
{
if (this.id==="chekb32") 
{
  check[11].checked = false;
  check[12].checked = false;
  check[13].checked = false;
  check[14].checked = false;
  vneshotrm3 = 1;
}
else if (this.id==="chekb33") 
{
  check[10].checked = false;
  check[12].checked = false;
  check[13].checked = false;
  check[14].checked = false;
  vneshotrm3 = 2;
}
else if (this.id==="chekb34") 
{
  check[10].checked = false;
  check[11].checked = false;
  check[13].checked = false;
  check[14].checked = false;
  vneshotrm3 = 3;
}
else if (this.id==="chekb35") 
{
  check[10].checked = false;
  check[11].checked = false;
  check[12].checked = false;
  check[14].checked = false;
  vneshotrm3 = 4;
}
else if (this.id==="chekb36") 
{
  check[10].checked = false;
  check[11].checked = false;
  check[12].checked = false;
  check[13].checked = false;
  vneshotrm3 = 5;
}
}

function chbxClik4()
{
if (this.id==="chekb42") 
{
  check[16].checked = false;
  check[17].checked = false;
  check[18].checked = false;
  check[19].checked = false;
  vneshotrm4 = 1;
}
else if (this.id==="chekb43") 
{
  check[15].checked = false;
  check[17].checked = false;
  check[18].checked = false;
  check[19].checked = false;
  vneshotrm4 = 2;
}
else if (this.id==="chekb44") 
{
  check[15].checked = false;
  check[16].checked = false;
  check[18].checked = false;
  check[19].checked = false;
  vneshotrm4 = 3;
}
else if (this.id==="chekb45") 
{
  check[15].checked = false;
  check[16].checked = false;
  check[17].checked = false;
  check[19].checked = false;
  vneshotrm4 = 4;
}
else if (this.id==="chekb46") 
{
  check[15].checked = false;
  check[16].checked = false;
  check[17].checked = false;
  check[18].checked = false;
  vneshotrm4 = 5;
}
}

function chbxClik5()
{
if (this.id==="chekb52") 
{
  check[21].checked = false;
  check[22].checked = false;
  check[23].checked = false;
  check[24].checked = false;
  vneshpm5 = 1;
}
else if (this.id==="chekb53") 
{
  check[20].checked = false;
  check[22].checked = false;
  check[23].checked = false;
  check[24].checked = false;
  vneshpm5 = 2;
}
else if (this.id==="chekb54") 
{
  check[20].checked = false;
  check[21].checked = false;
  check[23].checked = false;
  check[24].checked = false;
  vneshpm5 = 3;
}
else if (this.id==="chekb55") 
{
  check[20].checked = false;
  check[21].checked = false;
  check[22].checked = false;
  check[24].checked = false;
  vneshpm5 = 4;
}
else if (this.id==="chekb56") 
{
  check[20].checked = false;
  check[21].checked = false;
  check[22].checked = false;
  check[23].checked = false;
  vneshpm5 = 5;
}
}

function chbxClik6()
{
if (this.id==="chekb62") 
{
  check[26].checked = false;
  check[27].checked = false;
  check[28].checked = false;
  check[29].checked = false;
  vnutmotiv6 = 1;
}
else if (this.id==="chekb63") 
{
  check[25].checked = false;
  check[27].checked = false;
  check[28].checked = false;
  check[29].checked = false;
  vnutmotiv6 = 2;
}
else if (this.id==="chekb64") 
{
  check[25].checked = false;
  check[26].checked = false;
  check[28].checked = false;
  check[29].checked = false;
  vnutmotiv6 = 3;
}
else if (this.id==="chekb65") 
{
  check[25].checked = false;
  check[26].checked = false;
  check[27].checked = false;
  check[29].checked = false;
  vnutmotiv6 = 4;
}
else if (this.id==="chekb66") 
{
  check[25].checked = false;
  check[26].checked = false;
  check[27].checked = false;
  check[28].checked = false;
  vnutmotiv6 = 5;
}
}

function chbxClik7()
{
  if (this.id==="chekb72") 
{
  check[31].checked = false;
  check[32].checked = false;
  check[33].checked = false;
  check[34].checked = false;
  vnutmotiv7 = 1;
}
else if (this.id==="chekb73") 
{
  check[30].checked = false;
  check[32].checked = false;
  check[33].checked = false;
  check[34].checked = false;
  vnutmotiv7 = 2;
}
else if (this.id==="chekb74") 
{
  check[30].checked = false;
  check[31].checked = false;
  check[33].checked = false;
  check[34].checked = false;
  vnutmotiv7 = 3;
}
else if (this.id==="chekb75") 
{
  check[30].checked = false;
  check[31].checked = false;
  check[32].checked = false;
  check[34].checked = false;
  vnutmotiv7 = 4;
}
else if (this.id==="chekb76") 
{
  check[30].checked = false;
  check[31].checked = false;
  check[32].checked = false;
  check[33].checked = false;
  vnutmotiv7 = 5;
}
}

function motivResult()
{
  let iddiv = document.getElementById("testmotiv");


  vnutrmotiv = (vnutmotiv6 + vnutmotiv7)/2; //внутренняя мотивация
  vneshpolmotiv = (vneshpm1 + vneshpm2 + vneshpm5)/3;//внешняя положительная мотивация
  vneshotrmotiv = (vneshotrm3 + vneshotrm4)/2;//внешняя отрицательная мотивация

  let resvnutm = document.createElement("label");
  resvnutm.style = "position: absolute; left:20px;top:650px;font-size:15px; color:#ffff00;font-size:25px;";
  resvnutm.textContent = "внутренняя мотивация";
  iddiv.append(resvnutm);

  let resvnpm = document.createElement("label");
  resvnpm.style = "position: absolute; left:20px;top:680px;font-size:15px; color:#ffff00;font-size:25px;";
  resvnpm.textContent = "внешняя положительная мотивация";
  iddiv.append(resvnpm);

  let resvneshotm = document.createElement("label");
  resvneshotm.style = "position: absolute; left:20px;top:710px;font-size:15px; color:#ffff00;font-size:25px;";
  resvneshotm.textContent = "внешняя отрицательная мотивация";
  iddiv.append(resvneshotm);

  let vnutm = document.createElement("label");
  vnutm.style = "position: absolute; left:530px;top:650px;font-size:15px; color:#ffff00;font-size:25px;";
  vnutm.id = "vnmot";
  vnutrmotiv = vnutrmotiv.toFixed(1);
  vnutm.innerText = vnutrmotiv;
  iddiv.append(vnutm);

  let vnpm = document.createElement("label");
  vnpm.style = "position: absolute; left:530px;top:680px;font-size:15px; color:#ffff00;font-size:25px;";
  vnpm.id = "vnpolm";
  vneshpolmotiv = vneshpolmotiv.toFixed(1);
  vnpm.innerText = vneshpolmotiv;
  iddiv.append(vnpm);

  let vneshotm = document.createElement("label");
  vneshotm.style = "position: absolute; left:530px;top:710px;font-size:15px; color:#ffff00;font-size:25px;";
  vneshotm.id = "vneshotr";
  vneshotrmotiv = vneshotrmotiv.toFixed(1);
  vneshotm.innerText = vneshotrmotiv;
  iddiv.append(vneshotm);
}

function motivBegin()
{
  let vnutmot = document.getElementById("vnmot");
  let vneshpolmot = document.getElementById("vnpolm");
  let vneshotrmot = document.getElementById("vneshotr");

  vnutmot.remove();
  vneshpolmot.remove();
  vneshotrmot.remove();

  vnutrmotiv = 0;
  vneshpolmotiv = 0;
  vneshotrmotiv = 0;
  vneshpm1 = 0;
  vneshpm2 = 0;
  vneshotrm3 = 0;
  vneshotrm4 = 0;
  vneshpm5 = 0;//внешняя положительная мотивация
  vnutmotiv6 = 0;
  vnutmotiv7 = 0; //внутренняя мотивация

  for (let index = 0; index < 35; index++) 
  {
    check[index].checked = false;
   }
}

function test_bolshe(array, bolshe)
{
  const leng = array.length;
  let bol = 0;
  for (let index = 0; index < leng; index++) 
  {
    if (array[index]===bolshe) 
    {
      return false;
    }    
  }
  return true;
}

function form_ansver(arr)   //формирование ответа
{
  let strings ='';
  let bolshe = 0;
  let count=0;

let akz_charakter = 0;
let akz_temperam = 0;

  while(count<10)
 {
  for (let a = 0; a < 10; a++) 
   {
     for (let index = 1; index < 10; index++)
      { 
        if (index < 10) 
        {
          while (true!= test_bolshe(akzent, bolshe)) 
              bolshe++;
          if (aczentual[bolshe] < aczentual[index] && true===test_bolshe(akzent, index))
             bolshe = index;
          else if (aczentual[bolshe] === aczentual[index] && false===test_bolshe(akzent, bolshe))
             bolshe = index;
          else if(aczentual[index] === 0 && false===test_bolshe(akzent, bolshe))
             bolshe = index;
        }
       
      }
        if (true===test_bolshe(akzent, bolshe)) 
        {
         akzent[count] = bolshe;
         count++;
         bolshe = 0;
        }
   }
  }

  //demist, zastreg, pedan, neurav, giper, distin, trev, ciklot, afect, amotiv

  for (let index = 0; index < akzent.length; index++) 
  {
    const element = aczentual[index];
    if ((index === 0 || index === 2 || index === 1 || index === 3  ) && element > 12)
    {
      akz_charakter ++;
    }

    if ((index === 4 || index === 5 || index === 6 || index === 7 || index === 8 || index === 9 ) && element > 12)
    {
      akz_temperam ++;
    }
  }

  if (akz_charakter!=0 || akz_temperam!=0)     
    strings = '  Тестом выявлено'; 

    if (akz_charakter!=0) 
    {
      switch (akz_charakter) 
       {
        case 1:
          strings += analiz[7] + digital[akz_charakter];  //analiz[7] - пробел digital[akz_charakter] - число
          break;
        case 2:
          strings += analiz[7] + digital[akz_charakter];
          break;
        case 3:
          strings += analiz[7] + digital[akz_charakter];
          break;
        case 4:
          strings += analiz[7] + digital[akz_charakter];
          break;
      
      default:
        break;
      }
      if (akz_charakter===1) 
        strings += analiz[7] + 'тип акцентуации характера';
      else
        strings += analiz[7] + 'типа акцентуации характера';

        if (akz_temperam===0) 
          strings += analiz[7] + analiz[6];
        else
        strings += analiz[7] + 'и';
    }

   if (akz_temperam!=0) 
   {
      switch (akz_temperam) 
       {
        case 1:
          strings += analiz[7] + digital[akz_temperam]; //analiz[7] - пробел digital[akz_charakter] - число
          break;
        case 2:
          strings += analiz[7] + digital[akz_temperam];
          break;
        case 3:
          strings += analiz[7] + digital[akz_temperam];
          break;
        case 4:
          strings += analiz[7] + digital[akz_temperam];
          break;
        case 5:
          strings += analiz[7] + digital[akz_temperam];
          break;
        case 6:
          strings += analiz[7] + digital[akz_temperam];
          break;
     
        default:
        break;
       }

        if (akz_temperam===1) 
          strings += analiz[7] + 'тип акцентуации темпераметра.';
        else if (akz_temperam===5 || akz_temperam===6) 
          strings += analiz[7] + 'типов акцентуации темпераметра.';
        else
          strings += analiz[7] + 'типа акцентуации темпераметра.';
    }
         strings +='\n';


  if(demist > 12)  //'Демонстративность, истероидность';
  {
    strings +='   Присутствует тенденция к Демонстративному типу акцентуации характера.' +
               'Характеризуется повышенной способностью к вытеснению, демонстративностью ' +
               'поведения, живостью, подвижностью, легкостью в установлении контактов. ' +
               'Склонен к фантазерству, лживости и притворству, направленным на приукрашивание '+
               'своей персоны, к авантюризму, артистизму, позерству. Им движет стремление к лидерству, '+
               'потребность в признании, жажда постоянного внимания к своей персоне, жажда власти, '+
               'похвалы; перспектива быть незамеченным отягощает его. Он демонстрирует высокую приспосабливаемость к людям.'+
               '\n';
  }

  if (zastreg > 12) //'Застревание, регидность';
  {
    strings +='   Присутствует тенденция к Застревающему типу акцентуации характера.'+
               'Его характеризует умеренная общительность, занудство, склонность к нравоучениям, '+
               'неразговорчивость. Часто страдает от мнимой несправедливости по отношению к нему. '+
               'В связи с этим проявляет настороженность и недоверчивость по отношению к людям, чувствителен '+
               'к обидам и огорчениям, уязвим, подозрителен, отличается мстительностью, долго переживает '+
               'происшедшее, не способен легко отходить от обид. Для него характерна заносчивость, часто ' +
               'выступает инициатором конфликтов. Самонадеянность, жесткость установок и взглядов, сильно '+
               'развитое честолюбие часто приводят к настойчивому утверждению своих интересов, которые он '+
               'отстаивает с особой энергичностью. Стремится добиться высоких показателей в любом деле, за '+
               'которое берется, и проявляет большое упорство в достижении своих целей. Основной чертой '+
               'является склонность к аффектам (правдолюбие, обидчивость, ревность, подозрительность), '+
               'инертность в проявлении аффектов, в мышлении, в моторике.'+
               '\n';
  }

  if (pedan > 12) //'Педантичность';
  {
    strings +='   Присутствует тенденция к Ппедантичному типу акцентуации характера.'+
              'Характеризуется ригидностью, инертностью психических процессов, тяжелостью на подъем, долгим '+
              'переживанием травмирующих событий. В конфликты вступает редко, выступая скорее пассивной, чем '+
              'активной стороной. В то же время очень сильно реагирует на любое проявление нарушения порядка. '+
              'На службе ведет себя как бюрократ, предъявляя окружающим много формальных требований. Пунктуален, '+
              'аккуратен, особое внимание уделяет чистоте и порядку, скрупулезен, добросовестен, склонен жестко '+
              'следовать плану, в выполнении действий нетороплив, усидчив, ориентирован на высокое качество '+
              'работы и особую аккуратность, склонен к частым самопроверкам, сомнениям в правильности выполненной '+
              'работы, брюзжанию, формализму. С охотой уступает лидерство другим людям.'+
              '\n';
  }

  if (neurav > 12) //'Неуравновешенность, возбудимость';
  {
    strings +='   Присутствует тенденция к Неуравновешенному, возбудимому типу акцентуации характера.'+
              'Его особенности: недостаточная управляемость, ослабление контроля над влечениями и '+
              'побуждениями сочетаются у людей такого типа с властью физиологических влечений. '+
              'Ему характерна повышенная импульсивность, инстинктивность, грубость, занудство, угрюмость, '+
              'гневливость, склонность к хамству и брани, к трениям и конфликтам, в которых сам и является '+
              'активной, провоцирующей стороной. Раздражителен, вспыльчив, часто меняет место работы, '+
              'неуживчив в коллективе. Отмечается низкая контактность в общении, замедленность вербальных и '+
              'невербальных реакций, тяжеловесность поступков. Для него никакой труд не становится '+
              'привлекательным, работает лишь по мере необходимости, проявляет такое же нежелание учиться. '+
              'Равнодушен к будущему, целиком живет настоящим, желая извлечь из него массу развлечений. '+
              'Повышенная импульсивность или возникающая реакция возбуждения гасятся с трудом и могут быть '+
              'опасны для окружающих. Он может быть властным, выбирая для общения наиболее слабых.'+
              '\n';
  }

  if (giper > 12) //'Гипертимность';
  {
    strings += '   Присутствует тенденция к Гипертимическому типу акцентуации темперамета.'+
               'Людей этого типа отличает большая подвижность, общительность, болтливость, выраженность '+
               'жестов, мимики, пантомимики, чрезмерная самостоятельность, склонность к озорству, недостаток '+
               'чувства дистанции в отношениях с другими. Часто спонтанно отклоняются от первоначальной '+
               'темы в разговоре. Везде вносят много шума, любят компании сверстников, стремятся ими '+
               'командовать. Они почти всегда имеют очень хорошее настроение, хорошее самочувствие, '+
               'высокий жизненный тонус, нередко цветущий вид, хороший аппетит, здоровый сон, склонность к '+
               'чревоугодию и иным радостям жизни. Это люди с повышенной самооценкой, веселые, легкомысленные, '+
               'поверхностные и вместе с тем деловитые, изобретательные, блестящие собеседники; люди, '+
               'умеющие развлекать других, энергичные, деятельные, инициативные. Большое стремление к '+
               'самостоятельности может служить источником конфликтов. Им характерны вспышки гнева, '+
               'раздражения, особенно когда они встречают сильное противодействие, терпят неудачу. '+
               '\n';
  }

  if (distin > 12) //'Дистиммичность';
  {
    strings +='   Присутствует тенденция к Дистимическому типу акцентуации темперамета.'+
              'Люди этого типа отличаются серьезностью, даже подавленностью настроения, медлительностью '+
              'слабостью волевых усилий. Для них характерны пессимистическое отношение к будущему, '+
              'заниженная самооценка, а также низкая контактность, немногословность в беседе, '+
              'даже молчаливость. Такие люди являются домоседами, индивидуалистами; общества, шумной компании '+
              'обычно избегают, ведут замкнутый образ жизни. Часто угрюмы, заторможенны, склонны '+
              'фиксироваться на теневых сторонах жизни. Они добросовестны, ценят тех, кто с ними дружит, '+
              'и готовы им подчиниться, располагают обостренным чувством справедливости, а также '+
              'замедленностью мышления.'+
              '\n';
  }

  if (trev > 12) //'Тревожность, боязливость';
  {
    strings +='   Присутствует тенденция к Тревожному типу акцентуации темперамета.'+
              'Людям данного типа свойственны низкая контактность, минорное настроение, робость, пугливость, '+
              'неуверенность в себе. Дети тревожного типа часто боятся темноты, животных, страшатся оставаться '+
              'одни. Они сторонятся шумных и бойких сверстников, не любят чрезмерно шумных игр, испытывают '+
              'чувство робости и застенчивости, тяжело переживают контрольные, экзамены, проверки. Часто '+
              'стесняются отвечать перед классом. Охотно подчиняются опеке старших, нотации взрослых могут '+
              'вызвать у них угрызения совести, чувство вины, слезы, отчаяние. У них рано формируется чувство '+
              'долга, ответственности, высокие моральные и этические требования. Чувство собственной '+
              'неполноценности стараются замаскировать в самоутверждении через те виды деятельности, где они '+
              'могут в большей мере раскрыть свои способности. Свойственные им с детства обидчивость, '+
              'чувствительность, застенчивость мешают сблизиться с теми, с кем хочется, особо слабым звеном '+
              'является реакция на отношение к ним окружающих.'+
              '\n';
  }

  if (ciklot > 12) //'Циклотимичность';
  {
    strings +='   Присутствует тенденция к Циклотимическому типу акцентуации темперамета.'+
              'Характеризуется сменой гипертимных и дистимных состояний. Им свойственны частые периодические '+
              'смены настроения, а также зависимость от внешних событий. Радостные события вызывают у них '+
              'картины гипертимии: жажда деятельности, повышенная говорливость, скачка идей; '+
              'печальные — подавленность, замедленность реакций и мышления, так же часто меняется их манера '+
              'общения с окружающими людьми. В подростковом возрасте можно обнаружить два варианта '+
              'циклотимической акцентуации: типичные и лабильные циклоиды. Типичные циклоиды в детстве обычно '+
              'производят впечатление гипертимных, но затем проявляется вялость, упадок сил, то что раньше '+
              'давал ось легко, теперь требует непомерных усилий. Прежде шумные и бойкие, они становятся вялыми '+
              'домоседами, наблюдается падение аппетита, бессонница или, наоборот, сонливость. На замечания '+
              'реагируют раздражением, даже грубостью и гневом, в глубине души, однако, впадая при этом в уныние, '+
              'глубокую депрессию, не исключены суицидальные попытки. Учатся неровно, случившиеся упущения '+
              'наверстывают с трудом, порождают в себе отвращение к занятиям. '+
              '\n';
  }

  if (afect >12) //'Аффективность, экзальтированность';
  {
    strings +='   Присутствует тенденция к Экзальтированному типу акцентуации темперамета.'+
              'Яркая черта этого типа — способность восторгаться, восхищаться, а также улыбчивостъ, ощущение '+
              'счастья, радости, наслаждения. Эти чувства у них могут часто возникать по причине, которая '+
              'у других не вызывает большого подъема, они легко приходят в восторг от радостных событий и в '+
              'полное отчаяние — от печальных. Им свойственна высокая контактность, словоохотливость, '+
              'влюбчивость. Такие люди часто спорят, но не доводят дела до открытых конфликтов. В конфликтных '+
              'ситуациях они бывают как активной, так и пассивной стороной. Они привязаны к друзьям и близким, '+
              'альтруистичны, имеют чувство сострадания, хороший вкус, проявляют яркость и искренность чувств. '+
              'Могут быть паникерами, подвержены сиюминутным настроениям, порывисты, легко переходят от состояния '+
              'восторга к состоянию печали, обладают лабильностью психики. '+
              '\n';
  }

  if (amotiv > 12)  //'Эмотивность, лабильность';
  {
    strings +='   Присутствует тенденция к Эмотивному типу акцентуации темперамета.'+
              'Для этого типа характерны эмоциональность, чувствительность, тревожность, болтливость, '+
              'боязливость, глубокие реакции в области тонких чувств. Наиболее сильно выраженная их '+
              'черта — гуманность, сопереживание другим людям или животным, отзывчивость, мягкосердечность, '+
              'они радуются чужим успехам. Впечатлительны, слезливы, любые жизненные события воспринимают '+
              'серьезнее, чем другие люди. Подростки остро реагируют на сцены из фильмов, где кому-либо '+
              'угрожает опасность, сцена насилия может вызвать у них сильное потрясение, которое долго не '+
              'забудется и может нарушить сон. Редко вступают в конфликты, обиды носят в себе, не выплескивая '+
              'их наружу. Им свойственно обостренное чувство долга, исполнительность. Бережно относятся к '+
              'природе, любят выращивать растения, ухаживать за животными,'+
              '\n';
  }
  return strings;
}
