export{golomst, worldgolom, smish, golom, initTest};

let smish=0;
let golom=0;
let initTest=0;
let number = 0;  //общий номер вопроса
let max = 0;
let begint = false;
let numbcheck = 0;
let nqs =0;     //номер вопроса в цикле
let testendgolom = false; //индикатор окончания теста
let strin_golom = 'У тестируемого следующие степени выраженности интересов в порядке убывания: ';

let Num_Inter = 0;



let biologiya = 0; //1.Биология
let geograf = 0;  //2. География
let geologiya = 0; //3. Геология
let medicina = 0; //4. Медицина
let lpromish = 0; //5. Легкая промышленность и пищевая промышленность
let fizika = 0; //6. Физика
let chimiya = 0; //7. Химия
let technika = 0; //8. Техника
let elektroradio = 0; // 9. Электро- и радиотехника
let metaloobr = 0; // 10. Металлообработка
let derevoobr = 0; //11. Деревообработка
let stroitel = 0; // 12. Строительство
let transport = 0; // 13. Транспорт
let aviaciyamorsk = 0; //14. Авиация, морское дело
let voenspec = 0; //15. Военные специальности
let history = 0; //16. История
let literatura = 0; //17. Литература
let gurnal = 0; //18. Журналистика
let obshesde = 0; //19. Общественная деятельность
let pedagog = 0; //20. Педагогика
let pravo = 0; //21. Право, юриспруденция
let obsltorg = 0; //22. Сфера обслуживания, торговля
let matematic = 0; //23. Математика
let ekonomic = 0; //24. Экономика
let langvage = 0; //25. Иностранные языки
let izobr = 0; //26. Изобразительное искусство
let scenisk = 0; // 27. Сценическое искусство
let muzuka = 0; //28. Музыка
let fizkultura = 0; //29. Физкультура и спорт

let interes = [
  'Биология','Военные специальности','География','История',
  'Геология','Литература','Медицина','Журналистика',
  'Легкая промышленность и пищевая промышленность','Общественная деятельность',
  'Педагогика','Физика','Право, юриспруденция','Химия','Сфера обслуживания, торговля',
  'Техника','Математика','Электро- и радиотехника','Экономика','Металлообработка',
  'Иностранные языки','Деревообработка','Изобразительное искусство','Строительство',
  'Сценическое искусство','Транспорт','Музыка','Авиация, морское дело','Физкультура и спорт',
  'Высшая степень отрицания','Интерес отрицается','Интерес выражен слабо', 
  'Выраженный интерес', 'Ярко выраженный интерес',' ','\n',':','.'
];

let worldgolom = ['Знакомиться с жизнью растений и животных',
'Уроки по географии, чтение учебника географии.',
'Читать художественную или научно-популярную литературу о геологических экспедициях.',
'Уроки и учебник анатомии и физиологии человека',
'Уроки домоводства или домашние задания по домоводству',
'Читать об открытиях в химии, о жизни и деятельности выдающихся химиков.',
'Читать технические журналы (например, «Техника молодежи», «Юный техник»).',
'Читать статьи в научно-популярных журналах о достижениях в области электроники и радиотехники.',
'Знакомиться с различными металлами и их свойствами.',
'Узнавать о разных породах древесины и об их практическом применении.',
'Узнавать о достижениях в области строительства.',
'Читать книги, смотреть фильмы о водителях различных видов транспорта (автомобильного, железнодорожного и т.д.)',
'Читать книги, смотреть фильмы о летчиках и космонавтах.',
'Знакомиться с военной техникой.',
'Читать книги об исторических событиях и исторических деятелях.',
'Читать классиков советской и зарубежной литературы.',
'Читать и обсуждать газетно-журнальные статьи и очерки.',
'Обсуждать текущие дела и события в классе и школе.',
'Читать книги о жизни школы (о работе воспитателя, учителя и т.д.).',
'Читать книги, смотреть фильмы о работе милиции.',
'Заботиться о порядке в вещах, красивом виде помещения, в котором учитесь, живете, работаете.',
'Читать книги типа «Занимательная математика», «Математический досуг».',
'Изучать экономическую географию.',
'Занятия иностранным языком.',
'Знакомиться с жизнью выдающихся художников, с историей развития изобразительного искусства.',
'Знакомиться с жизнью выдающихся мастеров сцены и кино, встречаться с артистами, коллекционировать их фотографии.',
'Знакомиться с жизнью и творчеством выдающихся музыкантов, с вопросами теории музыкального искусства.',
'Читать спортивные журналы, газеты, книги о спорте, о выдающихся спортсменах.',
'Изучать биологию, ботанику, зоологию.',
'Знакомиться с различными странами по описаниям и географическим открытиям.',
'Читать о жизни и деятельности знаменитых геологов.',
'Читать о том, как люди научились бороться с болезнями, о врачах и достижениях в области медицины.',
'Посещать с экскурсиями предприятия легкой промышленности.',
'Читать книги типа «Занимательная физика», «Физики шутят».',
'Находить химические явления в природе, производить опыты по химии, следить за ходом химических реакций.',
'Знакомиться с новейшими достижениями современной техники (слушать и смотреть радио- и телепередачи, читать статьи в газетах).',
'Посещать радиотехнические кружки или знакомиться с работой электрика.',
'3накомиться с различными измерительными инструментами для металлообработки и работать с ними.',
'Наблюдать за изготовлением изделий из дерева, рассматривать новые образцы мебели.',
'Встречаться со строителями, наблюдать за их работой.',
'Читать популярную литературу о средствах передвижения.',
'Читать книги, смотреть фильмы о речниках, моряках.',
'Читать книги, смотреть фильмы на военные темы, знакомиться с историей войн, крупных сражений.',
'Обсуждать текущие политические события в стране и за рубежом.',
'Читать литературно-критические статьи.',
'Слушать радио и смотреть теленовости и тематические телепередачи.',
'Узнавать о событиях, происходящих в городе, республике, стране.',
'Давать объяснение товарищам, как выполнить учебное задание, если они не могут сделать его сами.',
'Справедливо рассудить поступок друга, знакомого или литературного героя.',
'Обеспечивать семью продуктами; организовывать питание для всех во время похода.',
'Читать научно-популярную литературу об открытиях в математике, о жизни и деятельности выдающихся математиков.',
'Интересоваться выполнением плана народного хозяйства.',
'Читать художественную литературу на иностранном языке.',
'Быть членом редколлегии, заниматься художественным оформлением газет.',
'Посещать драматический театр или театр юного зрителя.',
'Слушать оперную или симфоническую музыку.',
'Посещать спортивные соревнования, слушать и смотреть спортивные радио и телепередачи.',
'Посещать биологический кружок.',
'Заниматься в географическом кружке.',
'Составлять и собирать описания и изображения геологических объектов земли, минералов.',
'Изучать функции организма человека, причины возникновения, болезней и пути лечения.',
'Посещать кружок кулинаров, готовить дома обед.',
'Проводить опыты по физике.',
'Готовить растворы, взвешивать реактивы.',
'Разбирать и ремонтировать различные механизмы (например, часы, утюг).',
'Пользоваться точными измерительными приборами (осциллографом, вольтметром, амперметром); производить разнообразные подсчеты.',
'Мастерить различные предметы и детали из металла.',
'Мастерить различные предметы и детали из древесины или художественно обрабатывать дерево (выпиливать, выжигать, вырезать).',
'Набрасывать строительный эскиз или выполнять чертежи различных построек.',
'Посещать кружок юных железнодорожников и автолюбителей.',
'Участвовать в секции парашютистов и в кружке авиамоделистов или в работе авиаклубов.',
'Заниматься в стрелковой секции.',
'Изучать историю возникновения различных народов и государств.',
'Писать классные и домашние сочинения по литературе.',
'Наблюдать за поступками, поведением, жизнью других людей.',
'Выполнять общественную работу, организовывать, сплачивать товарищей на какое-либо дело.',
'Проводить время с маленькими детьми, читать им книги, что-либо им рассказывать, помогать» в чем-либо.',
'Устанавливать дисциплину среди сверстников и младших.',
'Наблюдать за работой продавца, повара, официанта.',
'Заниматься в математическом кружке.',
'Изучать вопросы развития промышленности, узнавать о новых достижениях в области планирования и учета на промышленном предприятии.',
'Работать с иностранными словарями, разбираться в оборотах речи малознакомого языка.',
'Посещать музеи, художественные выставки.',
'Выступать на сцене перед зрителями.',
'Играть на одном из музыкальных инструментов.',
'Играть в спортивные игры.',
'Наблюдать за ростом и развитием животных, растений, вести записи наблюдений.',
'Самостоятельно составлять географические карты, собирать различные географические материалы.',
'Собирать коллекции минералов, экспонаты для геологического музея.',
'Знакомиться с работой врача, медсестры, фармацевта.',
'Посещать кружок по кройке и шитью, шить себе и членам семьи.',
'Заниматься в физическом кружке или посещать факультативные занятия по физике.',
'Заниматься в химическом кружке или посещать факультативы по химии.',
'Заниматься в одном из технических кружков (моделировать самолеты, корабли и т.д.).',
'Знакомиться с устройствами электроприборов, электроаппаратов, электрических машин; собирать, контролировать радиоприборы, приемники, проигрыватели и пр.',
'Заниматься на уроках труда в школьных и слесарно-станочных мастерских.',
'Участвовать в кружке «Умелые руки» или в столярном кружке.',
'Бывать на стройке, наблюдать за ходом строительства, за отделочными работами.',
'Смотреть за соблюдением правил передвижения пешеходов и транспортных средств.',
'Участвовать в секции гребцов, парусников, аквалангистов, в бригаде по спасению утопающих.',
'Участвовать в военизированных играх (например, в «Зарнице»).',
'Посещать исторические музеи, знакомиться с памятниками культуры.',
'Заниматься в литературном кружке, посещать факультативные занятия по литературе.',
'Вести личный дневник.',
'Выступать в классе с сообщениями о международном положении.',
'Быть пионервожатым.',
'Выяснять причины поведения и поступков людей, которые они хотят скрыть.',
'Помогать покупателю выбрать в магазине покупку, которая ему нужна.',
'Решать сложные задачи по математике.',
'Точно вести расчет своих денежных расходов и доходов.',
'Заниматься в кружке иностранного языка или посещать факультативные занятия.',
'Заниматься в художественном кружке.',
'Участвовать в смотре художественной самодеятельности.',
'Петь в хоре или посещать музыкальный кружок.',
'Заниматься в какой-либо спортивной секции.',
'Участвовать в биологических олимпиадах или готовить выставки растений или животных.',
'Участвовать в географической экспедиции.',
'Участвовать в геологической экспедиции.',
'Наблюдать и ухаживать за больными, оказывать им помощь, облегчать их состояние.',
'Участвовать в выставках кулинарных или кондитерских работ или посещать их.',
'Участвовать в физических олимпиадах.',
'Решать сложные задачи по химии, участвовать в химических олимпиадах.',
'Разбираться в технических чертежах и схемах, самому выполнять чертежи.',
'Разбираться в сложных радиосхемах.',
'Посещать с экскурсией промышленные предприятия, знакомиться с новыми типами станков, наблюдать за работой на них или за их ремонтом.',
'Мастерить что-нибудь из дерева своими руками.',
'Помогать по возможности в строительных работах.',
'Принимать посильное участие в обслуживании и ремонте автомобиля, троллейбуса и т.п.',
'Летать на самолетах неотложной помощи в любую погоду или управлять сверхскоростными самолетами.',
'Жить по жестко установленному режиму, строго выполнять распорядок дня.',
'Заниматься в историческом кружке, собирать материалы, выступать с докладами на исторические темы.',
'Работать с литературными источниками, вести дневник впечатленийо прочитанном.',
'Участвовать в диспутах и читательских конференциях.',
'Подготавливать и проводить сборы или собрания.',
'Шефствовать над трудновоспитуемыми, обсуждать с кем-либо вопросы воспитания детей и подростков.',
'Помогать работникам милиции.',
'Постоянно общаться с различными людьми.',
'Участвовать в математических олимпиадах.',
'Интересоваться стоимостью товаров, пытаться понять вопросы ценообразования, заработной платы, организации труда.',
'Беседовать с друзьями на иностранном языке.',
'Участвовать в выставках изобразительного искусства.',
'Посещать театральный кружок.',
'Участвовать в театральных смотрах-конкурсах.',
'Принимать личное участие в спортивных соревнованиях.',
'Выращивать в саду или в огороде растения, воспитывать животных, ухаживать за ними.',
'Производить топографические съемки местности.',
'Совершать длительные трудные походы, во время которых приходится напряженно работать по заданной программе.',
'Работать в больнице, поликлинике или аптеке.',
'Работать специалистом на предприятии пищевой или легкой промышленности (швеей, закройщицей, кондитером и т.д.).',
'Решать сложные задачи по химии.',
'Работать на химическом производстве.',
'Участвовать в выставках технического творчества.',
'Работать в области электроэнергетики или радиоэлектроники.',
'Работать у станка, изготавливать различные детали и изделия.',
'Выполнять по чертежам столярные или модельные работы.',
'Работать в строительной бригаде.',
'Возить пассажиров или грузы, соблюдать правила уличного движения.',
'Работать в штормовую погоду на большой реке или в открытом море.',
'Быть военным инженером или командиром.',
'Ходить в походы по историческим местам родного края.',
'Писать рассказы, сочинять стихи, басни и т.д.',
'Писать заметки или очерки в стенгазету или периодическую печать.',
'Руководить бригадой во время трудового десанта.',
'Организовывать игры или праздники для детей, создавать «тимуровские команды».',
'Работать в юридическом учреждении (в суде, прокуратуре, адвокатуре, юридической консультации).',
'Оказывать людям различные большие и малые услуги.',
'Выполнять работу, постоянно требующую применения математических знаний.',
'Работать в области планирования, финансирования, экономики предприятий народного хозяйства.',
'Участвовать в олимпиадах, конкурсах, конференциях на иностранном языке.',
'Участвовать в выставках изобразительного искусства.',
'Играть на сцене или сниматься в кино.',
'Быть музыкантом, музыкальным режиссером или преподавателем музыки.',
'Работать преподавателем физкультуры или тренером.']; //массив вопросов
let ansver = []; //массив значений ответов
ansver.length = 173;


let massvar=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let massvarsort = [];
massvarsort.length = 29;

let yarkvurinter = [33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33];
let vurinter = [33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33];
let lightvurinter = [33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33];
let otrinter = [33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33];
let vusstepotr = [33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33];


function golomst()
{
    number = 0;
    begint = false;
    let tesgolomst = document.createElement("div");
    tesgolomst.style = "color:#000000; position:absolute;left: 290px;top:150px; width:900px;height:800px;background-color: #ff2378; ";
    tesgolomst.id = "testgl";
    document.body.append(tesgolomst);

    var label = document.createElement("label");//создание label заголопок теста
    label.style = "position: absolute; left:250px;top:5px;font-size:30px; ";
    label.textContent = "Карта интересов Голомштока";
    tesgolomst.append(label);

    var hr = document.createElement("hr");//разделительная линия
    hr.style = "position: absolute;top:35px;width:797px;";
    tesgolomst.append(hr);

    let numbquery = document.createElement("output");
    numbquery.id = "result1";
    numbquery.innerText = "Номер вопроса";
    numbquery.style = "position: absolute;top:50px; left:20px; width:50px; height:40px; "
    tesgolomst.append(numbquery);

  let yesno = document.createElement("div");
  yesno.style = "color:#000000; position:absolute;left: 90px;top:45px; width:810px;height:50px;background-color: #00302f; ";
  yesno.id = "yesno";
  tesgolomst.append(yesno);
//===================================================================
  let lbut1 = document.createElement("button");
  lbut1.style = "position: absolute; left:15px;top:10px;width:80px;height:25px;font-size:15px;background-color: #00302f; color:#ff00ff;";
  lbut1.id="butBegin";
  lbut1.textContent = "Сначала";
  lbut1.addEventListener("click", beginTestGolom,this, false);
  yesno.append(lbut1);

  let lbut2 = document.createElement("button");
  lbut2.style = "position: absolute; left:110px;top:10px;width:80px;height:25px;font-size:15px;background-color: #00302f; color:#ff00ff;";
  lbut2.id = "butBack";
  lbut2.addEventListener("click", backQue, this, false);
  lbut2.textContent = "Назад";
  yesno.append(lbut2);

  let lbut3 = document.createElement("button");
  lbut3.style = "position: absolute; left:200px;top:10px;width:80px;height:25px;font-size:15px;background-color: #00302f; color:#ff00ff;";
  lbut3.id = "butNext";
  lbut3.addEventListener("click", nextQuestionGolom, this, false);
  lbut3.textContent = "Дальше";
  yesno.append(lbut3);

  let lab1 = document.createElement("label");
  lab1.style = "position: absolute; left:290px;top:5px;font-size:15px; color:#ff00ff;";
  lab1.textContent = "очень нравится";
  yesno.append(lab1);

  let lab2 = document.createElement("label");
  lab2.style = "position: absolute; left:400px;top:5px;font-size:15px; color:#ff00ff;";
  lab2.textContent = "нравится";
  yesno.append(lab2);

  let lab3 = document.createElement("label");
  lab3.style = "position: absolute; left:480px;top:5px;font-size:15px; color:#ff00ff;";
  lab3.textContent = "сомневаюсь";
  yesno.append(lab3);

  let lab4 = document.createElement("label");
  lab4.style = "position: absolute; left:570px;top:5px;font-size:15px; color:#ff00ff;";
  lab4.textContent = "не нравится";
  yesno.append(lab4);

  let lab5 = document.createElement("label");
  lab5.style = "position: absolute; left:665px;top:5px;font-size:15px; color:#ff00ff;";
  lab5.textContent = "очень не нравится";
  yesno.append(lab5);

  let chekbox1 = document.createElement("input");
  chekbox1.type = "checkbox";
  chekbox1.id = "chekb1";
  chekbox1.name = "chbox1";
  chekbox1.title="поставте отметку"
  chekbox1.style = "position: absolute; left:330px;top:25px;font-size:15px;";
  chekbox1.addEventListener("click", onClik1, this, false);
  chekbox1.textContent = "Нет";
  yesno.append(chekbox1);

  let chekbox2 = document.createElement("input");
  chekbox2.type = "checkbox";
  chekbox2.id = "chekb2";
  chekbox2.name = "chbox2";
  chekbox2.style = "position: absolute; left:415px;top:25px;font-size:15px;";
  chekbox2.addEventListener("click", onClik2, this, false);
  chekbox2.textContent = "Нет";
  yesno.append(chekbox2);

  let chekbox3 = document.createElement("input");
  chekbox3.type = "checkbox";
  chekbox3.id = "chekb3";
  chekbox3.name = "chbox3";
  chekbox3.style = "position: absolute; left:500px;top:25px;font-size:15px;";
  chekbox3.addEventListener("click", onClik3, this, false);
  chekbox3.textContent = "Нет";
  yesno.append(chekbox3);

  let chekbox4 = document.createElement("input");
  chekbox4.type = "checkbox";
  chekbox4.id = "chekb4";
  chekbox4.name = "chbox4";
  chekbox4.style = "position: absolute; left:600px;top:25px;font-size:15px;";
  chekbox4.addEventListener("click", onClik4, this, false);
  chekbox4.textContent = "Нет";
  yesno.append(chekbox4);

  let chekbox5 = document.createElement("input");
  chekbox5.type = "checkbox";
  chekbox5.id = "chekb5";
  chekbox5.name = "chbox4";
  chekbox5.style = "position: absolute; left:700px;top:25px;font-size:15px;";
  chekbox5.addEventListener("click", onClik5, this, false);
  chekbox5.textContent = "Нет";
  yesno.append(chekbox5);

  let result1 = document.createElement("output");//номер вопроса
  result1.id = "gnquer";
  result1.innerText = number+1;
  result1.style = "position: absolute; left:25px;top:100px;"
  tesgolomst.append(result1);

  let result2 = document.createElement("output");//вопрос
  result2.id = "gquesch";
  result2.style = "position: absolute; left:90px;top:100px; font-size: 20px;"
  result2.innerText = worldgolom[0];
  tesgolomst.append(result2);
}

function beginTestGolom()
{
  if (testendgolom===false){
    let butnext = document.getElementById("butNext");
    let numbqu = document.getElementById("gnquer");  //number
    let textqu = document.getElementById("gquesch");
    let resolt = document.getElementById("res");
    let el1 = document.getElementById("chekb1");
    let el2 = document.getElementById("chekb2");
    let el3 = document.getElementById("chekb3");
    let el4 = document.getElementById("chekb4");
    el1.checked = false;
    el2.checked = false;
    el3.checked = false;
    el4.checked = false;

   for (let index = 0; index < massvar.length; index++) 
      {
        massvar[index] = 0;
      }

      for (let index = 0; index < ansver.length; index++) 
      {
        ansver[index] = 0;
      }

    nqs = 0;
    number=0;
    Num_Inter = 0;
    numbqu.innerText = number+1;
    textqu.innerText = worldgolom[number];
    begint = true;
    butnext.style.color = "#ff00ff";
    if (resolt)      
    resolt.remove();
  }
}

function backQue()
{
  let numbqu = document.getElementById("gnquer");  //number
  let textqu = document.getElementById("gquesch");  
 
  if (number!=0)   //number - общий номер вопроса
  {
    if (nqs===0)    //nqs - номер вопроса в цикле
     {
      nqs = 28;
      number--;
      massvar[Num_Inter] -= ansver[number];
      ansver[number] = 0;
      numbqu.innerText = number+1;
      textqu.innerText = worldgolom[number];
     }
     else
     {
      nqs--;
      number--;
      Num_Inter--;
      massvar[Num_Inter] -= ansver[number];
      ansver[number] = 0;
      numbqu.innerText = number+1;
      textqu.innerText = worldgolom[number];
     }
  }
  else
  {
    if (testendgolom===false) {
      
       let alet = document.getElementById("alert");
      if (alet===null) 
       {
        let div = document.createElement('div');//создание сообщения
        div.id = "alert";
        div.innerHTML = "Тест сначала!!!";
        div.style = "color:#000000; z-index:100; position:absolute;left: 540px;top:300px; width:280px;height:100px;background-color: #002378;font-size:30px;text-align: center; border-radius:10px; ";
        document.body.append(div);
  
        let lbut1 = document.createElement("button");
        lbut1.style = "position: absolute; left:25px;top:70px;width:50px;height:25px;font-size:15px;background-color: #00302f; color:#ff00ff;";
        lbut1.id="alertshy";
        lbut1.textContent = "Ok";
        lbut1.addEventListener("click", closeOk,this, false);//
        div.append(lbut1);
     }
     testendgolom=true;
     begint = false; //разблокировка кнопки сначала

    }

  }
}

function nextQuestionGolom()
{
  if ( begint) 
    {
       let numbqu = document.getElementById("gnquer");  //number
       let textqu = document.getElementById("gquesch");
       let el1 = document.getElementById("chekb1");
       let el2 = document.getElementById("chekb2");
       let el3 = document.getElementById("chekb3");
       let el4 = document.getElementById("chekb4");
       let el5 = document.getElementById("chekb5");

     if (el1.checked === true)
        numbcheck = 1;
     if(el2.checked === true)
        numbcheck = 2;
     if(el3.checked === true)
        numbcheck = 3;
     if(el4.checked === true)
        numbcheck = 4;
     if(el5.checked === true)
        numbcheck = 5;

    if (numbcheck===0) 
    {
        alert("выберите вариант ответа");
    }
    else
    {
      // number=2;// 174
       if (number===174)
        {
         testgolend(); //вывод результата теста
        }
        else
        {
          if (Num_Inter>28) 
          {
            Num_Inter=0;
          }
          ChekingQuesh();
          Num_Inter++;
          nqs++;
        }
    number++;
    numbqu.innerText = number+1;
    textqu.innerText = worldgolom[number];
    el1.checked = false;
    el2.checked = false;
    el3.checked = false;
    el4.checked = false;
    el5.checked = false;
    numbcheck = 0;
    index = 0;
   }
  }
  else
  {
   alert("нажмите сначала");
   let butnext = document.getElementById("butNext");
   butnext.style.color = "#ff00ff";

  }
}

function onClik1()
{
  let butnext = document.getElementById("butNext");
  let el1 = document.getElementById("chekb1");
  let el2 = document.getElementById("chekb2");
  let el3 = document.getElementById("chekb3");
  let el4 = document.getElementById("chekb4");
  let el5 = document.getElementById("chekb5");
  if (begint===true) 
  {
      butnext.style.color = "#00ff00";
      butnext.focus();
  }
  el2.checked = false;
  el3.checked = false;
  el4.checked = false;
  el5.checked = false;
}

function onClik2()
{
  let butnext = document.getElementById("butNext");
  let el1 = document.getElementById("chekb1");
  let el2 = document.getElementById("chekb2");
  let el3 = document.getElementById("chekb3");
  let el4 = document.getElementById("chekb4");
  let el5 = document.getElementById("chekb5");
  if (begint===true) 
  {
      butnext.style.color = "#00ff00";
      butnext.focus();
  }
  el1.checked = false;
  el3.checked = false;
  el4.checked = false;
  el5.checked = false;

}

function onClik3()
{
  let butnext = document.getElementById("butNext");
  let el1 = document.getElementById("chekb1");
  let el2 = document.getElementById("chekb2");
  let el3 = document.getElementById("chekb3");
  let el4 = document.getElementById("chekb4");
  let el5 = document.getElementById("chekb5");
  if (begint===true) 
  {
      butnext.style.color = "#00ff00";
      butnext.focus();
  }
  el1.checked = false;
  el2.checked = false;
  el4.checked = false;
  el5.checked = false;
}

function onClik4()
{
  let butnext = document.getElementById("butNext");
  let el1 = document.getElementById("chekb1");
  let el2 = document.getElementById("chekb2");
  let el3 = document.getElementById("chekb3");
  let el4 = document.getElementById("chekb4");
  let el5 = document.getElementById("chekb5");
  if (begint===true) 
  {
      butnext.style.color = "#00ff00";
      butnext.focus();
  }
  el1.checked = false;
  el2.checked = false;
  el3.checked = false;
  el5.checked = false;
}

function onClik5()
{
  let butnext = document.getElementById("butNext");
  let el1 = document.getElementById("chekb1");
  let el2 = document.getElementById("chekb2");
  let el3 = document.getElementById("chekb3");
  let el4 = document.getElementById("chekb4");
  let el5 = document.getElementById("chekb5");
  if (begint===true) 
  {
      butnext.style.color = "#00ff00";
      butnext.focus();
  }
  el1.checked = false;
  el2.checked = false;
  el3.checked = false;  
  el4.checked = false;
}

function ansqwesh()
{
   let ind = 0;
   let el1 = document.getElementById("chekb1");
   let el2 = document.getElementById("chekb2");
   let el3 = document.getElementById("chekb3");
   let el4 = document.getElementById("chekb4");
   let el5 = document.getElementById("chekb5");

      if (el1.checked === true) 
      ind = 2;
      if (el2.checked === true)
      ind = 1;
      if (el3.checked === true)
      ind = 0;
      if (el4.checked === true)
      ind = -1;
      if (el5.checked === true)
      ind = -2;
      return ind;
}

function testgolend()
{
   let gols = document.getElementById("testgl");

   Form_String();
   
         let resolt = document.createElement("div");
         resolt.id="res";
         resolt.style = "color:#000000; position:absolute;left: 20px;top:150px; width:900px;height:600px;background-color: #ffff78; overflow: scroll;";
         gols.append(resolt);

         let label1 =document.createElement("label");
         label1.style = "position: absolute; left:10px;top:35px;font-size:30px; font-size:20px ";
         label1.innerText="Биология";
         resolt.append(label1);
         let  biol = document.createElement("output");
         biol.style ="position: absolute; left:310px;top:35px;font-size:20px"
         biol.innerText = massvar[0];
         resolt.append(biol);

         let label2 =document.createElement("label");
         label2.style = "position: absolute; left:10px;top:60px;font-size:30px;font-size:20px ";
         label2.innerText="География";
         resolt.append(label2);
         let  geogf = document.createElement("output");
         geogf.style ="position: absolute; left:310px;top:60px;font-size:20px"
         geogf.innerText = massvar[1];
         resolt.append(geogf);

         let label3 =document.createElement("label");
         label3.style = "position: absolute; left:10px;top:85px;font-size:30px;font-size:20px ";
         label3.innerText="Геология";
         resolt.append(label3);
         let  geolog = document.createElement("output");
         geolog.style ="position: absolute; left:310px;top:85px;font-size:20px"
         geolog.innerText = massvar[2];
         resolt.append(geolog);

         let label4 =document.createElement("label");
         label4.style = "position: absolute; left:10px;top:110px;font-size:30px;font-size:20px ";
         label4.innerText="Медицина";
         resolt.append(label4);
         let  med = document.createElement("output");
         med.style ="position: absolute; left:310px;top:110px;font-size:20px"
        //  med.innerText = medicina;
         med.innerText = massvar[3];
         resolt.append(med);

         let label5 =document.createElement("label");
         label5.style = "position: absolute; left:10px;top:135px;font-size:30px;font-size:20px ";
         label5.innerText="Промышленность";
         resolt.append(label5);
         let  promst = document.createElement("output");
         promst.style ="position: absolute; left:310px;top:135px;font-size:20px"
         promst.innerText = massvar[4]; ;
         resolt.append(promst);

         let label6 =document.createElement("label");
         label6.style = "position: absolute; left:10px;top:160px;font-size:30px;font-size:20px ";
         label6.innerText="Физика";
         resolt.append(label6);
         let  fizik = document.createElement("output");
         fizik.style ="position: absolute; left:310px;top:160px;font-size:20px"
         fizik.innerText = massvar[5];  ;
         resolt.append(fizik);

         let label7 =document.createElement("label");
         label7.style = "position: absolute; left:10px;top:185px;font-size:30px;font-size:20px ";
         label7.innerText="Химия";
         resolt.append(label7);
         let  chim = document.createElement("output");
         chim.style ="position: absolute; left:310px;top:185px;font-size:20px"
         chim.innerText = massvar[6];;
         resolt.append(chim);

         let label8 =document.createElement("label");
         label8.style = "position: absolute; left:10px;top:210px;font-size:30px;font-size:20px ";
         label8.innerText="Техника";
         resolt.append(label8);
         let  techn = document.createElement("output");
         techn.style ="position: absolute; left:310px;top:210px;font-size:20px"
         techn.innerText = massvar[7]; ;
         resolt.append(techn);

         let label9 =document.createElement("label");
         label9.style = "position: absolute; left:10px;top:235px;font-size:30px;font-size:20px ";
         label9.innerText="Радиотехника";
         resolt.append(label9);
         let  elektr = document.createElement("output");
         elektr.style ="position: absolute; left:310px;top:235px;font-size:20px"
         elektr.innerText = massvar[8];;
         resolt.append(elektr);

         let label10 =document.createElement("label");
         label10.style = "position: absolute; left:10px;top:260px;font-size:30px;font-size:20px ";
         label10.innerText="Металлообработка";
         resolt.append(label10);
         let  metall = document.createElement("output");
         metall.style ="position: absolute; left:310px;top:260px;font-size:20px"
         metall.innerText = massvar[9];;
         resolt.append(metall);

         let label11 =document.createElement("label");
         label11.style = "position: absolute; left:10px;top:285px;font-size:30px;font-size:20px ";
         label11.innerText="Деревообработка";
         resolt.append(label11);
         let  derevo = document.createElement("output");
         derevo.style ="position: absolute; left:310px;top:285px;font-size:20px"
         derevo.innerText = massvar[10];
         resolt.append(derevo);

         let label12 =document.createElement("label");
         label12.style = "position: absolute; left:10px;top:310px;font-size:30px;font-size:20px ";
         label12.innerText="Строительство";
         resolt.append(label12);
         let  stoit = document.createElement("output");
         stoit.style ="position: absolute; left:310px;top:310px;font-size:20px"
         stoit.innerText = massvar[11];
         resolt.append(stoit);

         let label13 =document.createElement("label");
         label13.style = "position: absolute; left:10px;top:335px;font-size:30px;font-size:20px ";
         label13.innerText="Транспорт";
         resolt.append(label13);
         let  trans = document.createElement("output");
         trans.style ="position: absolute; left:310px;top:335px;font-size:20px"
         trans.innerText = massvar[12];
         resolt.append(trans);

         let label14 =document.createElement("label");
         label14.style = "position: absolute; left:10px;top:360px;font-size:30px;font-size:20px ";
         label14.innerText="Авиация, морское дело";
         resolt.append(label14);
         let  avmor = document.createElement("output");
         avmor.style ="position: absolute; left:310px;top:360px;font-size:20px"
         avmor.innerText = massvar[13];
         resolt.append(avmor);

         let label15 =document.createElement("label");
         label15.style = "position: absolute; left:10px;top:385px;font-size:30px;font-size:20px ";
         label15.innerText="Военные специальности";
         resolt.append(label15);
         let  voen = document.createElement("output");
         voen.style ="position: absolute; left:310px;top:385px;font-size:20px"
         voen.innerText = massvar[14];
         resolt.append(voen);
         //========================================================================================
         let label16 =document.createElement("label");
         label16.style = "position: absolute; left:470px;top:35px;font-size:30px;font-size:20px ";
         label16.innerText="История";
         resolt.append(label16);
         let  hist = document.createElement("output");
         hist.style ="position: absolute; left:770px;top:35px;font-size:20px"
         hist.innerText = massvar[15];
         resolt.append(hist);

         let label17 =document.createElement("label");
         label17.style = "position: absolute; left:470px;top:60px;font-size:30px;font-size:20px ";
         label17.innerText="Литература";
         resolt.append(label17);
         let  liter = document.createElement("output");
         liter.style ="position: absolute; left:770px;top:60px;font-size:20px"
         liter.innerText = massvar[16];
         resolt.append(liter);

         let label18 =document.createElement("label");
         label18.style = "position: absolute; left:470px;top:85px;font-size:30px;font-size:20px ";
         label18.innerText="Журналистика";
         resolt.append(label18);
         let  gurn = document.createElement("output");
         gurn.style ="position: absolute; left:770px;top:85px;font-size:20px"
         gurn.innerText = massvar[17];
         resolt.append(gurn);

         let label19 =document.createElement("label");
         label19.style = "position: absolute; left:470px;top:110px;font-size:30px;font-size:20px ";
         label19.innerText="Общественная деятельность";
         resolt.append(label19);
         let obdeyat = document.createElement("output");
         obdeyat.style ="position: absolute; left:770px;top:110px;font-size:20px"
         obdeyat.innerText = massvar[18];
         resolt.append(obdeyat);

         let label20 =document.createElement("label");
         label20.style = "position: absolute; left:470px;top:135px;font-size:30px;font-size:20px ";
         label20.innerText="Педагогика";
         resolt.append(label20);
         let pedag = document.createElement("output");
         pedag.style ="position: absolute; left:770px;top:135px;font-size:20px"
         pedag.innerText = massvar[19];
         resolt.append(pedag);

         let label21 =document.createElement("label");
         label21.style = "position: absolute; left:470px;top:160px;font-size:30px;font-size:20px ";
         label21.innerText="Право, юриспруденция";
         resolt.append(label21);
         let prav = document.createElement("output");
         prav.style ="position: absolute; left:770px;top:160px;font-size:20px"
         prav.innerText = massvar[20];
         resolt.append(prav);

         let label22 =document.createElement("label");
         label22.style = "position: absolute; left:470px;top:185px;font-size:30px;font-size:20px ";
         label22.innerText="Сфера обслуживания, торговля";
         resolt.append(label22);
         let obsl = document.createElement("output");
         obsl.style ="position: absolute; left:770px;top:185px;font-size:20px"
         obsl.innerText = massvar[21];
         resolt.append(obsl);

         let label23 =document.createElement("label");
         label23.style = "position: absolute; left:470px;top:210px;font-size:30px;font-size:20px ";
         label23.innerText="Математика";
         resolt.append(label23);
         let matem = document.createElement("output");
         matem.style ="position: absolute; left:770px;top:210px;font-size:20px"
         matem.innerText = massvar[22];
         resolt.append(matem);

         let label24 =document.createElement("label");
         label24.style = "position: absolute; left:470px;top:235px;font-size:30px;font-size:20px ";
         label24.innerText="Экономика";
         resolt.append(label24);
         let econ = document.createElement("output");
         econ.style ="position: absolute; left:770px;top:235px;font-size:20px"
         econ.innerText = massvar[23];
         resolt.append(econ);

         let label25 =document.createElement("label");
         label25.style = "position: absolute; left:470px;top:260px;font-size:30px;font-size:20px ";
         label25.innerText="Иностранные языки";
         resolt.append(label25);
         let lang = document.createElement("output");
         lang.style ="position: absolute; left:770px;top:260px;font-size:20px"
         lang.innerText = massvar[24];
         resolt.append(lang);

         let label26 =document.createElement("label");
         label26.style = "position: absolute; left:470px;top:285px;font-size:30px;font-size:20px ";
         label26.innerText="Изобразительное искусство";
         resolt.append(label26);
         let izo = document.createElement("output");
         izo.style ="position: absolute; left:770px;top:285px;font-size:20px"
         izo.innerText = massvar[25];
         resolt.append(izo);

         let label27 =document.createElement("label");
         label27.style = "position: absolute; left:470px;top:310px;font-size:30px;font-size:20px ";
         label27.innerText="Сценическое искусство";
         resolt.append(label27);
         let scena = document.createElement("output");
         scena.style ="position: absolute; left:770px;top:310px;font-size:20px"
         scena.innerText = massvar[26];
         resolt.append(scena);

         let label28 =document.createElement("label");
         label28.style = "position: absolute; left:470px;top:335px;font-size:30px;font-size:20px ";
         label28.innerText="Музыка";
         resolt.append(label28);
         let muz = document.createElement("output");
         muz.style ="position: absolute; left:770px;top:335px;font-size:20px"
         muz.innerText = massvar[27];
         resolt.append(muz);

         let label29 =document.createElement("label");
         label29.style = "position: absolute; left:470px;top:360px;font-size:30px;font-size:20px ";
         label29.innerText="Физкультура";
         resolt.append(label29);
         let fiz = document.createElement("output");
         fiz.style ="position: absolute; left:770px;top:360px;font-size:20px"
         fiz.innerText = massvar[28]; 
         resolt.append(fiz);

         let butnext = document.getElementById("butNext");
         butnext.style.color = "#ff00ff";
         begint = false;

        //  let vuvod_div=document.createElement("div");
        //  vuvod_div.style = "position: absolute; left: 250px; top:380px; width: 150px; height:150px; background-color:#ff00a2;"
        //  resolt.append(vuvod_div);

        let label30 =document.createElement("label");
        label30.style = "position: absolute; left:10px;top:430px;font-size:30px;font-size:20px;white-space: pre-wrap; ";
        label30.innerText = strin_golom;//"   По результатам теста наиболее выраженный интерес к таким видам деятельности: ";
        resolt.append(label30);

}

function closeOk()
{
  let alertsh = document.getElementById("alert");
  testendgolom = false;
  begint = false;
  alertsh.remove();
}

function ChekingQuesh()
{
   let butnext = document.getElementById("butNext");
   let num = 0;
   num = ansqwesh();   //определение значения поставленного чекбокса
   ansver[number] = num;    //массив значений ответов для возврата
   massvar[Num_Inter] += num;     //массив значений ответов для подсчета
   butnext.style.color = "#ff00ff";
}

function test_bolshe_golom(array, bolshe)
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

function Form_String()
{
  let count = 0;  
  let count1 = 0;  
  let count2 = 0; 
  let bolshe = 0;
  let min = 0, max = 12;

  /* for (let ind = 0; ind < 29; ind++) 
  {
    let rand = Math.random() * max;
    rand = Math.ceil(rand);
    massvar[ind] = rand;
  } */


  while(count<29)
  {
   for (let a = 0; a < 29; a++) 
    {
      for (let index = 1; index < 29; index++)
       { 
         if (index < 29) 
         {
           while (true!= test_bolshe_golom(massvarsort, bolshe)) 
               bolshe++;
           if (massvar[bolshe] < massvar[index] && true===test_bolshe_golom(massvarsort, index))
              bolshe = index;
           else if (massvar[bolshe] === massvar[index] && false===test_bolshe_golom(massvarsort, bolshe))
              bolshe = index;
           else if(massvar[index] === 0 && false===test_bolshe_golom(massvarsort, bolshe))
              bolshe = index;
         }
        }
      if (true===test_bolshe_golom(massvarsort, bolshe)) 
        {
          massvarsort[count] = bolshe;
          count++;
          bolshe = 0;
        }
    }
  }


     max = massvar[0];    //определение максимального значерия
 for (let indmax = 1; indmax < 29; indmax++) 
 {
     if (massvar[indmax]>max) 
       max = massvar[indmax];
 }

 count=0;

while (count<5) 
{
  if (count===0) 
  {
    while (count1<29) 
    {
      if (massvar[massvarsort[count1]]>7)    //массив значений
      {
        yarkvurinter[count2] = massvarsort[count1];
      }
      else
      {
       count2 = 0;
       break;
      }
      count1++;
      count2++;
    }
  }

  if (count===1) 
  {
    while (count1<29) 
    {
      if (massvar[massvarsort[count1]]>4 && massvar[massvarsort[count1]]<8)    //массив значений
      {
        vurinter[count2] = massvarsort[count1];
      }
      else
      {
       count2 = 0;
       break;
      }
      count1++;
      count2++;
    }
  }

  if (count===2) 
  {
    while (count1<29) 
    {
      if (massvar[massvarsort[count1]]>0 && massvar[massvarsort[count1]]<5)    //массив значений
      {
        lightvurinter[count2] = massvarsort[count1];
      }
      else
      {
       count2 = 0;
       break;
      }
      count1++;
      count2++;
    }
  }

  if (count===3) 
  {
    while (count1<29) 
    {
      if (massvar[massvarsort[count1]]> -6 && massvar[massvarsort[count1]]<0)    //массив значений
      {
        otrinter[count2] = massvarsort[count1];
      }
      else
      {
       count2 = 0;
       break;
      }
      count1++;
      count2++;
    }
  }

  if (count===4) 
  {
    while (count1<29) 
    {
      if (massvar[massvarsort[count1]]> -13 && massvar[massvarsort[count1]]< -5)    //массив значений
      {
        vusstepotr[count1] = massvarsort[count1];
      }
      else
      {
       count2 = 0;
       break;
      }
      count1++;
      count2++;
    }
  }
   count++;
}

//  let yarkvurinter = []; yarkvurinter.length = 29;
//  let vurinter = []; vurinter.length = 29;
//  let lightvurinter = []; lightvurinter.length = 29;
//  let otrinter = []; otrinter.length = 29;
//   let vusstepotr = []; vusstepotr.length = 29;

//interes[35] - перевод строки  interes[34] - пробел  interes[37]  - точка

  strin_golom +=  interes[35];
  count = 0;
  if (yarkvurinter[0]!=33)
   {
    strin_golom += interes[33] + interes[36] + interes[35];
     while (yarkvurinter[count]!=33) 
     {
      strin_golom +=interes[34] + interes[yarkvurinter[count]];
      count++;
     }
     strin_golom +=interes[37] + interes[35];
   }
  
   if (vurinter[0]!=33)
   {
    count = 0;
    strin_golom += interes[32] + interes[36] + interes[35];
     while (vurinter[count]!=33) 
     {
      strin_golom +=interes[34] + interes[vurinter[count]];
      count++;
     }
     strin_golom += interes[37] + interes[35];
   }

   if (lightvurinter[0]!=33)
   {
    count = 0;
    strin_golom += interes[31] + interes[36] + interes[35];
     while (lightvurinter[count]!=33) 
     {
      strin_golom +=interes[34] + interes[lightvurinter[count]];
      count++;
     }
     strin_golom +=interes[37] + interes[35];
   }

   if (otrinter[0]!=33)
   {
    count = 0;
    strin_golom += interes[30] + interes[36] + interes[35];
     while (otrinter[count]!=33) 
     {
      strin_golom +=interes[34] + interes[otrinter[count]];
      count++;
     }
     strin_golom += interes[37] + interes[35];
   }
  
   if (vusstepotr[0]!=33)
   {
    count = 0;
    strin_golom += interes[29] + interes[36] + interes[35];
     while (vusstepotr[count]!=33) 
     {
      strin_golom +=interes[34] + interes[vusstepotr[count]];
      count++;
     }
     strin_golom += interes[37] + interes[35];
   }


}