

function toggleMenu() {
  var menu = document.getElementById('MENU');
  menu.style.display = (menu.style.display === 'flex') ? 'none' : 'flex';
}

document.addEventListener('click', function(event) {
  var targetElement = event.target;
  var menu = document.getElementById('MENU');
  var sanduiche = document.getElementById('sanduiche');
  if (!targetElement.closest('#MENU') && !targetElement.closest('#sanduiche')) {
      menu.style.display = 'none';
  }
});



/**LOGO DOS TECNICOS */

let logotec1="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_213/escudo/14/46/27/005094eec9-1628-489a-be6b-4e8d1fb4571420230406144627' width='100%'>;"
let logotec24="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_216/escudo/aa/23/50/004cf31568-6c3f-4620-b0ba-77cf4fba91aa20230415162350' width='100%'>;"
let logotec25="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_140/escudo/37/52/18/00c3222f41-73db-4d77-827a-34fb60705f3720190424175218' width='100%'>;"
let logotec27="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/34/39/23/00c5fd71e7-1140-4bb1-b4be-033b17f05d3420230323113923' width='100%'>;"
let logotec55="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_210/escudo/ae/48/03/00b1830cbd-cd45-4d5a-9990-e7c46ca78aae20230316124803' width='100%'>;"
let logotec60="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_225/escudo/f2/37/49/00f094c858-f158-495a-a2e3-c8b7f6ad74f220240412093749' width='100%'>;"
let logotec65="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/38/47/36/005873787a-58e6-477a-911e-c36d02090b3820230319124736' width='100%'>;"
let logotec77="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/b2/00/19/00944ecec0-8b2b-4096-a946-4c3ee2ced5b220230330230019' width='100%'>;"
let logotec83="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_210/escudo/e0/35/28/0075a0bb3f-d0cf-4699-8983-843c9f5ad2e020230316113528' width='100%'>;"
let logotec92="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_226/escudo/37/17/00/008706fb73-28dc-4157-9796-f38bfcebf13720240413161700' width='100%'>;"
let logotec108="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_215/escudo/a4/37/57/000bc76962-512a-409f-9577-6fc304a1b1a420230414213757' width='100%'>;"
let logotec116="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/f2/37/30/00f11d9d6e-9ee4-4d52-96a5-8cf35d9457f220230321213730' width='100%'>;"
let logotec129="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_108/escudo/19/14/58/00526e9396-b09d-4145-9ed8-38997734451920180412081458' width='100%'>;"
let logotec165="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_215/escudo/de/02/12/007205e439-4d8f-4c60-a2d6-67c24722b9de20230414090212' width='100%'>;"
let logotec175="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_215/escudo/a7/46/33/0066134cb2-3bfc-4015-95fa-6758f35e6aa720230414224633' width='100%'>;"
let logotec183="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/5e/47/48/00b609792f-b21a-4442-b75d-d316704f7c5e20230402004748' width='100%'>;"
let logotec192="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/34/49/47/0055558fe7-6799-4dcf-b85e-93c1e70d183420230324004947' width='100%'>;"
let logotec204="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_222/escudo/ef/42/28/00fc50908a-da87-4716-a0d9-04efa2ba70ef20240317164228' width='100%'>;"
let logotec206="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/a2/04/13/0065de05e8-2569-41f0-bd56-069678377ca220230402160413' width='100%'>;"
let logotec223="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_216/escudo/2e/09/53/00189e1b97-983d-473c-b138-6a73735dc52e20230415120953' width='100%'>;"
let logotec233="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/21/29/22/00b065ee94-d402-47bb-a78e-d8b4c18a6e2120230322182922' width='100%'>;"




 /*LOGO DOS CLUBES*/ 
 
 
let logosemclube="<img src='https://proeleven.pt/uploads/clubs/semclube.png' width='100%''>";

let logoamericarj="<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/America_FC.svg/180px-America_FC.svg.png' width='100%''>";
let logoamericarn="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/OdQJxRXXp2gxKWl7JkPsmw_96x96.png' width='100%''>";
let logobrasilrs="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/abHSe0XZKDWYfR52Vl_PTw_96x96.png' width='100%''>";
let logoceara="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/mSl0cz3i2t8uv4zcprobOg_96x96.png' width='100%''>";
let logocoritiba="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/LaFlBADLmsjHfGTehCYtuA_96x96.png' width='100%''>";
let logocriciuma="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/u_L7Mkp33uNmFTv3uUlXeQ_96x96.png' width='100%''>";
let logocruzeiro="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/Tcv9X__nIh-6wFNJPMwIXQ_96x96.png' width='100%''>";
let logocuiaba="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/j6U8Rgt_6yyf0Egs9nREXw_96x96.png' width='100%''>";
let logoguarani="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/fxJElzuqyxKVwsUcfsC49Q_96x96.png' width='100%''>";
let logointernacional="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/OWVFKuHrQuf4q2Wk0hEmSA_96x96.png' width='100%''>";
let logonautico="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/ShnE2eI_Q37QTEvvQCopqg_96x96.png' width='100%''>";
let logonovorizontino="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/2YeE0Oupr5ApZJR0CyX_3g_96x96.png' width='100%''>";
let logooperarioms="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/wZt1IFiBPKd1dsLOVsCqEw_96x96.png' width='100%''>";
let logopaulista="<img src='https://upload.wikimedia.org/wikipedia/pt/thumb/0/06/PaulistaFC.png/180px-PaulistaFC.png' width='100%''>";
let logopontepreta="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/0e4mOPeQPUipr9oh54-7NQ_96x96.png' width='100%''>";
let logoportuguesa="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/a9BSJk9BywwXNj4LJPq5jg_96x96.png' width='100%''>";
let logosampaiocorrea="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/G52t9iE9YvNjIKh-8xyHGg_96x96.png' width='100%''>";
let logosantacruz="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/NWbDR2-iD5-EjMZOEbKlJw_96x96.png' width='100%''>";
let logosantos="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/VHdNOT6wWOw_vJ38GMjMzg_96x96.png' width='100%''>";
let logovoltaredonda="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/DsXF0mAUd6L0JjRhOwsr2w_96x96.png' width='100%''>";





/**CLUBES**/  var semclube={nome:'sem clube',logo:logosemclube,nivel:'citadino',uf:'RS',estadual:'RS2',div:' ',rodingr:'1',obj:'0'};

let americarj=['América-RJ',logoamericarj,'Regional','RJ','RJ1','B',1,'G16',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2023'];
let americarn=['América-RN',logoamericarn,'Estadual','RN','NO','B',1,'G13',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
let brasilrs=['Brasil-RS',logobrasilrs,'Regional','RS','RS','B',1,'G16',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','14','2023'];
let ceara=['Ceará',logoceara,'Pequeno','CE','CE','B',1,'G8',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','33','2023'];
let coritiba=['Coritiba',logocoritiba,'Médio','PR','PR','B',1,'G4',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','37','2023'];
let criciuma=['Criciuma',logocriciuma,'Estadual','SC','SC','B',1,'G4',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','19','2023'];
let cruzeiro=['Cruzeiro',logocruzeiro,'Grande','MG','MG','B',1,'G4',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
let cuiaba=['Cuiabá',logocuiaba,'Estadual','MT','CO','B',1,'G4',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','19','2023'];
let guarani=['Guarani',logoguarani,'Pequeno','SP','SP','B',1,'G8',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','35','2023'];
let internacional=['Internacional',logointernacional,'Grande','RS','RS','B',1,'G4',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
let nautico=['Náutico',logonautico,'Pequeno','PE','PE','B',1,'G8',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','32','2023'];
let novorizontino=['Novorizontino',logonovorizontino,'Citadino','SP','SP','B',1,'G13',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','29','2023'];
let operarioms=['Operário-MS',logooperarioms,'Citadino','MS','CO','B',1,'G16',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2023'];
let paulista=['Paulista',logopaulista,'Citadino','SP','SP1','B',1,'SUBIR',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','29','2023'];
let pontepreta=['Ponte Preta',logopontepreta,'Pequeno','SP','SP','B',1,'G16',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
let portuguesa=['Portuguesa',logoportuguesa,'Pequeno','SP','SP','B',1,'G13',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','33','2023'];
let sampaiocorrea=['Sampaio Correa',logosampaiocorrea,'Estadual','MA','NO','B',1,'G13',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','19','2023'];
let santacruz=['Santa Cruz',logosantacruz,'Pequeno','PE','PE','B',1,'G8',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','29','2023'];
let santos=['Santos',logosantos,'Grande','SP','SP1','B',1,'G4',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
let voltaredonda=['Volta Redonda',logovoltaredonda,'Regional','RJ','RJ','B',1,'G13',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','27','2023'];







/**TECNICOS**/
let tec24={idCart:26831,nome:'Bicolor 1988',nomeLogin:'Vinícius Lima',nomePess:'opcional',anoEnt:2023,logo:logotec24,ClubAtual:santos,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
let tec25={idCart:19525205,nome:'BGM 21 FC',nomeLogin:'BRUNO MEIRELLES',nomePess:'opcional',anoEnt:2023,logo:logotec25,ClubAtual:guarani,titulo1:'Gaúcho 2020',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
let tec27={idCart:23879716,nome:' BJJ ADSUMUS F.C',nomeLogin:'SANDRO NEVES',nomePess:'opcional',anoEnt:2023,logo:logotec27,ClubAtual:santacruz,titulo1:'Paulista 2020',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
let tec55={idCart:12068971,nome:'Máfia Azul FC89',nomeLogin:'Biel Rezende',nomePess:'opcional',anoEnt:2023,logo:logotec55,ClubAtual:cruzeiro,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
let tec60={idCart:2539,nome:'E C SIMONNSD',nomeLogin:'CESAR',nomePess:'opcional',anoEnt:2023,logo:logotec60,ClubAtual:novorizontino,titulo1:'Série B 2020',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
let tec65={idCart:25346807,nome:'FC RPTRIUNFO',nomeLogin:'ALISSON DE FREITAS',nomePess:'opcional',anoEnt:2023,logo:logotec65,ClubAtual:sampaiocorrea,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
let tec77={idCart:1574746,nome:'Gama SC',nomeLogin:'Anderson gama',nomePess:'opcional',anoEnt:2023,logo:logotec77,ClubAtual:operarioms,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
let tec83={idCart:13709335,nome:'Grêmio Camaquã',nomeLogin:'David John',nomePess:'opcional',anoEnt:2023,logo:logotec83,ClubAtual:portuguesa,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
let tec92={idCart:1857129,nome:'Dragon Goll Z',nomeLogin:'Rodrigo Rocha',nomePess:'opcional',anoEnt:2023,logo:logotec92,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
let tec108={idCart:1484622,nome:'S.C  mendigos171',nomeLogin:'Douglas Ehlert',nomePess:'opcional',anoEnt:2023,logo:logotec108,ClubAtual:paulista,titulo1:'Central 2022',titulo2:'Série C 2023 (Paulista)',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
let tec116={idCart:528913,nome:'NO BREAK  FC',nomeLogin:'SIQUEIRA',nomePess:'opcional',anoEnt:2023,logo:logotec116,ClubAtual:ceara,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
let tec129={idCart:3128918,nome:'Pardalice',nomeLogin:'TIAGO BIZARRO',nomePess:'opcional',anoEnt:2023,logo:logotec129,ClubAtual:brasilrs,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
let tec165={idCart:12415025,nome:'S.C SERRA GAÚCHA',nomeLogin:'EDSON N. GONÇALVES',nomePess:'opcional',anoEnt:2023,logo:logotec165,ClubAtual:cuiaba,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
let tec175={idCart:28444,nome:'Time do Nee',nomeLogin:'NEEMIAS KASPER',nomePess:'opcional',anoEnt:2023,logo:logotec175,ClubAtual:coritiba,titulo1:'Carioca 2021',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
let tec183={idCart:27718747,nome:'Tricolor Azul Branco e Preto ',nomeLogin:'Rogério Lopes',nomePess:'opcional',anoEnt:2023,logo:logotec183,ClubAtual:criciuma,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
let tec192={idCart:8975023,nome:'cachorra maga fc',nomeLogin:'Alex pool',nomePess:'opcional',anoEnt:2023,logo:logotec192,ClubAtual:americarj,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
let tec204={idCart:45862988,nome:'Cartoleiro Tuga FC',nomeLogin:'Vitor Guimarães',nomePess:'opcional',anoEnt:2023,logo:logotec204,ClubAtual:nautico,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
let tec206={idCart:21468965,nome:'Cielschmitz',nomeLogin:' Marciel',nomePess:'opcional',anoEnt:2023,logo:logotec206,ClubAtual:voltaredonda,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
let tec223={idCart:27787169,nome:'america rn cfc',nomeLogin:'Vinicius Costa',nomePess:'opcional',anoEnt:2023,logo:logotec223,ClubAtual:americarn,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
let tec233={idCart:6965124,nome:'Edu Ponte Preta',nomeLogin:'Eduardo Pissolatti',nomePess:'opcional',anoEnt:2023,logo:logotec233,ClubAtual:pontepreta,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};








/*CALENDÁRIO SÉRIE A 2024**/









/*SÉRIA A*/





/*CAMPO DE ATUALIZAÇÕES CLASSIFICAÇÃO GERAL */

let rod1=[santacruz,'','G16',3,1,0,0,3,0,3,'V','','','','','98',tec27,portuguesa,'','G17',3,1,0,0,2,1,1,'V','','','','','72',tec83,paulista,'','G18',3,1,0,0,2,1,1,'V','','','','','68',tec108,santos,'','G19',3,1,0,0,1,0,1,'V','','','','','66',tec24,internacional,'','G20',3,1,0,0,1,0,1,'V','','','','','72',tec92,ceara,'','G21',1,0,1,0,1,1,0,'E','','','','','52',tec116,brasilrs,'','G22',1,0,1,0,1,1,0,'E','','','','','50',tec129,novorizontino,'','G23',1,0,1,0,0,0,0,'E','','','','','53',tec60,nautico,'','G24',1,0,1,0,0,0,0,'E','','','','','48',tec204,cuiaba,'','G25',1,0,1,0,0,0,0,'E','','','','','61',tec165,cruzeiro,'','G26',1,0,1,0,0,0,0,'E','','','','','50',tec55,criciuma,'','G27',1,0,1,0,0,0,0,'E','','','','','54',tec183,coritiba,'','G28',1,0,1,0,0,0,0,'E','','','','','50',tec175,americarn,'','G29',1,0,1,0,0,0,0,'E','','','','','52',tec223,americarj,'','G30',1,0,1,0,0,0,0,'E','','','','','50',tec192,pontepreta,'','G31',0,0,0,1,1,2,-1,'D','','','','','45',tec233,operarioms,'','G32',0,0,0,1,1,2,-1,'D','','','','','42',tec77,voltaredonda,'','G33',0,0,0,1,0,1,-1,'D','','','','','49',tec206,guarani,'','G34',0,0,0,1,0,1,-1,'D','','','','','47',tec25,sampaiocorrea,'','G35',0,0,0,1,0,3,-3,'D','','','','','45',tec65];


/*CAMPO DE ATUALIZAÇÕES CALENDÁRIO */

let calend1=[logoamericarj,'0',tec192,'49,57',logoamericarn,'0',tec223,'58,22',logobrasilrs,'1',tec129,'63,11',logoceara,'1',tec116,'65,77',logocoritiba,'0',tec175,'56,88',logocriciuma,'0',tec183,'50,77',logocruzeiro,'0',tec55,'55,41',logocuiaba,'0',tec165,'56,06',logoguarani,'0',tec25,'38,17',logointernacional,'1',tec92,'52,47',logonautico,'0',tec204,'45,77',logonovorizontino,'0',tec60,'46,95',logooperarioms,'1',tec77,'61,92',logopaulista,'2',tec108,'79,96',logopontepreta,'1',tec233,'68,36',logoportuguesa,'2',tec83,'72,27',logosampaiocorrea,'0',tec65,'49,42',logosantacruz,'3',tec27,'85,61',logosantos,'1',tec24,'63,17',logovoltaredonda,'0',tec206,'57,15'];
let calend2=[logonovorizontino,'',tec60,'0,00',logocoritiba,'',tec175,'0,00',logopaulista,'',tec108,'0,00',logosantos,'',tec24,'0,00',logoamericarn,'',tec223,'0,00',logoguarani,'',tec25,'0,00',logoportuguesa,'',tec83,'0,00',logooperarioms,'',tec77,'0,00',logoceara,'',tec116,'0,00',logopontepreta,'',tec233,'0,00',logovoltaredonda,'',tec206,'0,00',logobrasilrs,'',tec129,'0,00',logocuiaba,'',tec165,'0,00',logoamericarj,'',tec192,'0,00',logointernacional,'',tec92,'0,00',logosampaiocorrea,'',tec65,'0,00',logocriciuma,'',tec183,'0,00',logocruzeiro,'',tec55,'0,00',logosantacruz,'',tec27,'0,00',logonautico,'',tec204,'0,00'];
let calend3=[logoamericarj,'',tec192,'0,00',logocruzeiro,'',tec55,'0,00',logobrasilrs,'',tec129,'0,00',logopontepreta,'',tec233,'0,00',logocoritiba,'',tec175,'0,00',logoamericarn,'',tec223,'0,00',logoportuguesa,'',tec83,'0,00',logosantos,'',tec24,'0,00',logoceara,'',tec116,'0,00',logovoltaredonda,'',tec206,'0,00',logonautico,'',tec204,'0,00',logosampaiocorrea,'',tec65,'0,00',logooperarioms,'',tec77,'0,00',logoguarani,'',tec25,'0,00',logointernacional,'',tec92,'0,00',logonovorizontino,'',tec60,'0,00',logocriciuma,'',tec183,'0,00',logopaulista,'',tec108,'0,00',logosantacruz,'',tec27,'0,00',logocuiaba,'',tec165,'0,00'];
let calend4=[logonovorizontino,'',tec60,'0,00',logoportuguesa,'',tec83,'0,00',logopaulista,'',tec108,'0,00',logointernacional,'',tec92,'0,00',logoamericarn,'',tec223,'0,00',logobrasilrs,'',tec129,'0,00',logocruzeiro,'',tec55,'0,00',logosantacruz,'',tec27,'0,00',logoguarani,'',tec25,'0,00',logoceara,'',tec116,'0,00',logovoltaredonda,'',tec206,'0,00',logocriciuma,'',tec183,'0,00',logocuiaba,'',tec165,'0,00',logonautico,'',tec204,'0,00',logopontepreta,'',tec233,'0,00',logoamericarj,'',tec192,'0,00',logosampaiocorrea,'',tec65,'0,00',logocoritiba,'',tec175,'0,00',logosantos,'',tec24,'0,00',logooperarioms,'',tec77,'0,00'];
let calend5=[logonovorizontino,'',tec60,'0,00',logocuiaba,'',tec165,'0,00',logopaulista,'',tec108,'0,00',logosampaiocorrea,'',tec65,'0,00',logocoritiba,'',tec175,'0,00',logocruzeiro,'',tec55,'0,00',logoportuguesa,'',tec83,'0,00',logonautico,'',tec204,'0,00',logoguarani,'',tec25,'0,00',logobrasilrs,'',tec129,'0,00',logovoltaredonda,'',tec206,'0,00',logoamericarj,'',tec192,'0,00',logooperarioms,'',tec77,'0,00',logopontepreta,'',tec233,'0,00',logointernacional,'',tec92,'0,00',logoceara,'',tec116,'0,00',logocriciuma,'',tec183,'0,00',logoamericarn,'',tec223,'0,00',logosantos,'',tec24,'0,00',logosantacruz,'',tec27,'0,00'];
let calend6=[logoamericarj,'',tec192,'0,00',logooperarioms,'',tec77,'0,00',logobrasilrs,'',tec129,'0,00',logocoritiba,'',tec175,'0,00',logoamericarn,'',tec223,'0,00',logointernacional,'',tec92,'0,00',logocruzeiro,'',tec55,'0,00',logovoltaredonda,'',tec206,'0,00',logoceara,'',tec116,'0,00',logosantos,'',tec24,'0,00',logonautico,'',tec204,'0,00',logopaulista,'',tec108,'0,00',logocuiaba,'',tec165,'0,00',logocriciuma,'',tec183,'0,00',logopontepreta,'',tec233,'0,00',logoguarani,'',tec25,'0,00',logosampaiocorrea,'',tec65,'0,00',logonovorizontino,'',tec60,'0,00',logosantacruz,'',tec27,'0,00',logoportuguesa,'',tec83,'0,00'];
let calend7=[logonovorizontino,'',tec60,'0,00',logoamericarj,'',tec192,'0,00',logopaulista,'',tec108,'0,00',logoamericarn,'',tec223,'0,00',logocoritiba,'',tec175,'0,00',logocuiaba,'',tec165,'0,00',logocruzeiro,'',tec55,'0,00',logoceara,'',tec116,'0,00',logoguarani,'',tec25,'0,00',logonautico,'',tec204,'0,00',logovoltaredonda,'',tec206,'0,00',logoportuguesa,'',tec83,'0,00',logooperarioms,'',tec77,'0,00',logosantacruz,'',tec27,'0,00',logointernacional,'',tec92,'0,00',logopontepreta,'',tec233,'0,00',logocriciuma,'',tec183,'0,00',logosampaiocorrea,'',tec65,'0,00',logosantos,'',tec24,'0,00',logobrasilrs,'',tec129,'0,00'];
let calend8=[logoamericarj,'',tec192,'0,00',logointernacional,'',tec92,'0,00',logobrasilrs,'',tec129,'0,00',logocruzeiro,'',tec55,'0,00',logocoritiba,'',tec175,'0,00',logovoltaredonda,'',tec206,'0,00',logoportuguesa,'',tec83,'0,00',logoguarani,'',tec25,'0,00',logoceara,'',tec116,'0,00',logoamericarn,'',tec223,'0,00',logonautico,'',tec204,'0,00',logosantos,'',tec24,'0,00',logooperarioms,'',tec77,'0,00',logonovorizontino,'',tec60,'0,00',logopontepreta,'',tec233,'0,00',logopaulista,'',tec108,'0,00',logosampaiocorrea,'',tec65,'0,00',logocuiaba,'',tec165,'0,00',logosantacruz,'',tec27,'0,00',logocriciuma,'',tec183,'0,00'];
let calend9=[logonovorizontino,'',tec60,'0,00',logobrasilrs,'',tec129,'0,00',logopaulista,'',tec108,'0,00',logoportuguesa,'',tec83,'0,00',logoamericarn,'',tec223,'0,00',logonautico,'',tec204,'0,00',logocruzeiro,'',tec55,'0,00',logosampaiocorrea,'',tec65,'0,00',logoguarani,'',tec25,'0,00',logocoritiba,'',tec175,'0,00',logovoltaredonda,'',tec206,'0,00',logosantacruz,'',tec27,'0,00',logocuiaba,'',tec165,'0,00',logoceara,'',tec116,'0,00',logointernacional,'',tec92,'0,00',logooperarioms,'',tec77,'0,00',logocriciuma,'',tec183,'0,00',logoamericarj,'',tec192,'0,00',logosantos,'',tec24,'0,00',logopontepreta,'',tec233,'0,00'];
let calend10=[logoamericarj,'',tec192,'0,00',logosantos,'',tec24,'0,00',logobrasilrs,'',tec129,'0,00',logooperarioms,'',tec77,'0,00',logocoritiba,'',tec175,'0,00',logopaulista,'',tec108,'0,00',logoportuguesa,'',tec83,'0,00',logocriciuma,'',tec183,'0,00',logoguarani,'',tec25,'0,00',logonovorizontino,'',tec60,'0,00',logonautico,'',tec204,'0,00',logocruzeiro,'',tec55,'0,00',logocuiaba,'',tec165,'0,00',logointernacional,'',tec92,'0,00',logopontepreta,'',tec233,'0,00',logoamericarn,'',tec223,'0,00',logosampaiocorrea,'',tec65,'0,00',logovoltaredonda,'',tec206,'0,00',logosantacruz,'',tec27,'0,00',logoceara,'',tec116,'0,00'];
let calend11=[logonovorizontino,'',tec60,'0,00',logosantacruz,'',tec27,'0,00',logopaulista,'',tec108,'0,00',logocuiaba,'',tec165,'0,00',logocoritiba,'',tec175,'0,00',logopontepreta,'',tec233,'0,00',logoportuguesa,'',tec83,'0,00',logocruzeiro,'',tec55,'0,00',logoceara,'',tec116,'0,00',logoamericarj,'',tec192,'0,00',logovoltaredonda,'',tec206,'0,00',logoamericarn,'',tec223,'0,00',logooperarioms,'',tec77,'0,00',logosampaiocorrea,'',tec65,'0,00',logointernacional,'',tec92,'0,00',logobrasilrs,'',tec129,'0,00',logocriciuma,'',tec183,'0,00',logonautico,'',tec204,'0,00',logosantos,'',tec24,'0,00',logoguarani,'',tec25,'0,00'];
let calend12=[logonovorizontino,'',tec60,'0,00',logovoltaredonda,'',tec206,'0,00',logobrasilrs,'',tec129,'0,00',logoamericarj,'',tec192,'0,00',logoamericarn,'',tec223,'0,00',logoportuguesa,'',tec83,'0,00',logocruzeiro,'',tec55,'0,00',logopaulista,'',tec108,'0,00',logoceara,'',tec116,'0,00',logooperarioms,'',tec77,'0,00',logonautico,'',tec204,'0,00',logocoritiba,'',tec175,'0,00',logocuiaba,'',tec165,'0,00',logosantos,'',tec24,'0,00',logopontepreta,'',tec233,'0,00',logocriciuma,'',tec183,'0,00',logosampaiocorrea,'',tec65,'0,00',logoguarani,'',tec25,'0,00',logosantacruz,'',tec27,'0,00',logointernacional,'',tec92,'0,00'];
let calend13=[logoamericarj,'',tec192,'0,00',logonautico,'',tec204,'0,00',logopaulista,'',tec108,'0,00',logonovorizontino,'',tec60,'0,00',logoamericarn,'',tec223,'0,00',logosampaiocorrea,'',tec65,'0,00',logoportuguesa,'',tec83,'0,00',logobrasilrs,'',tec129,'0,00',logoguarani,'',tec25,'0,00',logosantacruz,'',tec27,'0,00',logovoltaredonda,'',tec206,'0,00',logopontepreta,'',tec233,'0,00',logooperarioms,'',tec77,'0,00',logocuiaba,'',tec165,'0,00',logointernacional,'',tec92,'0,00',logocoritiba,'',tec175,'0,00',logocriciuma,'',tec183,'0,00',logoceara,'',tec116,'0,00',logosantos,'',tec24,'0,00',logocruzeiro,'',tec55,'0,00'];
let calend14=[logoamericarj,'',tec192,'0,00',logoguarani,'',tec25,'0,00',logobrasilrs,'',tec129,'0,00',logocriciuma,'',tec183,'0,00',logocoritiba,'',tec175,'0,00',logosantos,'',tec24,'0,00',logocruzeiro,'',tec55,'0,00',logonovorizontino,'',tec60,'0,00',logoceara,'',tec116,'0,00',logoportuguesa,'',tec83,'0,00',logonautico,'',tec204,'0,00',logooperarioms,'',tec77,'0,00',logocuiaba,'',tec165,'0,00',logoamericarn,'',tec223,'0,00',logointernacional,'',tec92,'0,00',logovoltaredonda,'',tec206,'0,00',logosampaiocorrea,'',tec65,'0,00',logopontepreta,'',tec233,'0,00',logosantacruz,'',tec27,'0,00',logopaulista,'',tec108,'0,00'];
let calend15=[logonovorizontino,'',tec60,'0,00',logoceara,'',tec116,'0,00',logopaulista,'',tec108,'0,00',logobrasilrs,'',tec129,'0,00',logoamericarn,'',tec223,'0,00',logosantacruz,'',tec27,'0,00',logoportuguesa,'',tec83,'0,00',logoamericarj,'',tec192,'0,00',logoguarani,'',tec25,'0,00',logocruzeiro,'',tec55,'0,00',logovoltaredonda,'',tec206,'0,00',logocuiaba,'',tec165,'0,00',logooperarioms,'',tec77,'0,00',logocoritiba,'',tec175,'0,00',logopontepreta,'',tec233,'0,00',logonautico,'',tec204,'0,00',logocriciuma,'',tec183,'0,00',logointernacional,'',tec92,'0,00',logosantos,'',tec24,'0,00',logosampaiocorrea,'',tec65,'0,00'];
let calend16=[logoamericarj,'',tec192,'0,00',logosampaiocorrea,'',tec65,'0,00',logobrasilrs,'',tec129,'0,00',logonautico,'',tec204,'0,00',logoamericarn,'',tec223,'0,00',logonovorizontino,'',tec60,'0,00',logocruzeiro,'',tec55,'0,00',logopontepreta,'',tec233,'0,00',logoceara,'',tec116,'0,00',logopaulista,'',tec108,'0,00',logovoltaredonda,'',tec206,'0,00',logoguarani,'',tec25,'0,00',logocuiaba,'',tec165,'0,00',logoportuguesa,'',tec83,'0,00',logointernacional,'',tec92,'0,00',logosantos,'',tec24,'0,00',logocriciuma,'',tec183,'0,00',logooperarioms,'',tec77,'0,00',logosantacruz,'',tec27,'0,00',logocoritiba,'',tec175,'0,00'];
let calend17=[logonovorizontino,'',tec60,'0,00',logocriciuma,'',tec183,'0,00',logopaulista,'',tec108,'0,00',logovoltaredonda,'',tec206,'0,00',logocoritiba,'',tec175,'0,00',logoamericarj,'',tec192,'0,00',logoportuguesa,'',tec83,'0,00',logointernacional,'',tec92,'0,00',logoguarani,'',tec25,'0,00',logocuiaba,'',tec165,'0,00',logonautico,'',tec204,'0,00',logoceara,'',tec116,'0,00',logooperarioms,'',tec77,'0,00',logocruzeiro,'',tec55,'0,00',logopontepreta,'',tec233,'0,00',logosantacruz,'',tec27,'0,00',logosampaiocorrea,'',tec65,'0,00',logobrasilrs,'',tec129,'0,00',logosantos,'',tec24,'0,00',logoamericarn,'',tec223,'0,00'];
let calend18=[logonovorizontino,'',tec60,'0,00',logopontepreta,'',tec233,'0,00',logopaulista,'',tec108,'0,00',logoguarani,'',tec25,'0,00',logoamericarn,'',tec223,'0,00',logooperarioms,'',tec77,'0,00',logoportuguesa,'',tec83,'0,00',logocoritiba,'',tec175,'0,00',logoceara,'',tec116,'0,00',logosampaiocorrea,'',tec65,'0,00',logovoltaredonda,'',tec206,'0,00',logonautico,'',tec204,'0,00',logocuiaba,'',tec165,'0,00',logobrasilrs,'',tec129,'0,00',logointernacional,'',tec92,'0,00',logocruzeiro,'',tec55,'0,00',logocriciuma,'',tec183,'0,00',logosantos,'',tec24,'0,00',logosantacruz,'',tec27,'0,00',logoamericarj,'',tec192,'0,00'];
let calend19=[logoamericarj,'',tec192,'0,00',logopaulista,'',tec108,'0,00',logobrasilrs,'',tec129,'0,00',logosantacruz,'',tec27,'0,00',logocoritiba,'',tec175,'0,00',logoceara,'',tec116,'0,00',logocruzeiro,'',tec55,'0,00',logoamericarn,'',tec223,'0,00',logoguarani,'',tec25,'0,00',logocriciuma,'',tec183,'0,00',logonautico,'',tec204,'0,00',logointernacional,'',tec92,'0,00',logooperarioms,'',tec77,'0,00',logovoltaredonda,'',tec206,'0,00',logopontepreta,'',tec233,'0,00',logocuiaba,'',tec165,'0,00',logosampaiocorrea,'',tec65,'0,00',logoportuguesa,'',tec83,'0,00',logosantos,'',tec24,'0,00',logonovorizontino,'',tec60,'0,00'];
let calend20=[logonovorizontino,'',tec60,'0,00',logonautico,'',tec204,'0,00',logopaulista,'',tec108,'0,00',logooperarioms,'',tec77,'0,00',logoamericarn,'',tec223,'0,00',logoamericarj,'',tec192,'0,00',logoportuguesa,'',tec83,'0,00',logopontepreta,'',tec233,'0,00',logoceara,'',tec116,'0,00',logobrasilrs,'',tec129,'0,00',logovoltaredonda,'',tec206,'0,00',logosantos,'',tec24,'0,00',logocuiaba,'',tec165,'0,00',logocruzeiro,'',tec55,'0,00',logointernacional,'',tec92,'0,00',logoguarani,'',tec25,'0,00',logocriciuma,'',tec183,'0,00',logocoritiba,'',tec175,'0,00',logosantacruz,'',tec27,'0,00',logosampaiocorrea,'',tec65,'0,00'];
let calend21=[logoamericarj,'',tec192,'0,00',logocuiaba,'',tec165,'0,00',logobrasilrs,'',tec129,'0,00',logovoltaredonda,'',tec206,'0,00',logocoritiba,'',tec175,'0,00',logonovorizontino,'',tec60,'0,00',logocruzeiro,'',tec55,'0,00',logocriciuma,'',tec183,'0,00',logoguarani,'',tec25,'0,00',logoamericarn,'',tec223,'0,00',logonautico,'',tec204,'0,00',logosantacruz,'',tec27,'0,00',logooperarioms,'',tec77,'0,00',logoportuguesa,'',tec83,'0,00',logopontepreta,'',tec233,'0,00',logoceara,'',tec116,'0,00',logosampaiocorrea,'',tec65,'0,00',logointernacional,'',tec92,'0,00',logosantos,'',tec24,'0,00',logopaulista,'',tec108,'0,00'];
let calend22=[logonovorizontino,'',tec60,'0,00',logointernacional,'',tec92,'0,00',logopaulista,'',tec108,'0,00',logocriciuma,'',tec183,'0,00',logoamericarn,'',tec223,'0,00',logocoritiba,'',tec175,'0,00',logocruzeiro,'',tec55,'0,00',logoamericarj,'',tec192,'0,00',logoguarani,'',tec25,'0,00',logooperarioms,'',tec77,'0,00',logovoltaredonda,'',tec206,'0,00',logoceara,'',tec116,'0,00',logocuiaba,'',tec165,'0,00',logosantacruz,'',tec27,'0,00',logopontepreta,'',tec233,'0,00',logobrasilrs,'',tec129,'0,00',logosampaiocorrea,'',tec65,'0,00',logonautico,'',tec204,'0,00',logosantos,'',tec24,'0,00',logoportuguesa,'',tec83,'0,00'];
let calend23=[logoamericarj,'',tec192,'0,00',logopontepreta,'',tec233,'0,00',logobrasilrs,'',tec129,'0,00',logoamericarn,'',tec223,'0,00',logocoritiba,'',tec175,'0,00',logosampaiocorrea,'',tec65,'0,00',logoportuguesa,'',tec83,'0,00',logonovorizontino,'',tec60,'0,00',logoceara,'',tec116,'0,00',logoguarani,'',tec25,'0,00',logonautico,'',tec204,'0,00',logocuiaba,'',tec165,'0,00',logooperarioms,'',tec77,'0,00',logosantos,'',tec24,'0,00',logointernacional,'',tec92,'0,00',logopaulista,'',tec108,'0,00',logocriciuma,'',tec183,'0,00',logovoltaredonda,'',tec206,'0,00',logosantacruz,'',tec27,'0,00',logocruzeiro,'',tec55,'0,00'];
let calend24=[logoamericarj,'',tec192,'0,00',logovoltaredonda,'',tec206,'0,00',logobrasilrs,'',tec129,'0,00',logoguarani,'',tec25,'0,00',logoamericarn,'',tec223,'0,00',logocriciuma,'',tec183,'0,00',logocruzeiro,'',tec55,'0,00',logocoritiba,'',tec175,'0,00',logoceara,'',tec116,'0,00',logointernacional,'',tec92,'0,00',logonautico,'',tec204,'0,00',logoportuguesa,'',tec83,'0,00',logocuiaba,'',tec165,'0,00',logonovorizontino,'',tec60,'0,00',logopontepreta,'',tec233,'0,00',logooperarioms,'',tec77,'0,00',logosampaiocorrea,'',tec65,'0,00',logopaulista,'',tec108,'0,00',logosantacruz,'',tec27,'0,00',logosantos,'',tec24,'0,00'];
let calend25=[logonovorizontino,'',tec60,'0,00',logosampaiocorrea,'',tec65,'0,00',logopaulista,'',tec108,'0,00',logonautico,'',tec204,'0,00',logocoritiba,'',tec175,'0,00',logobrasilrs,'',tec129,'0,00',logoportuguesa,'',tec83,'0,00',logosantacruz,'',tec27,'0,00',logoguarani,'',tec25,'0,00',logopontepreta,'',tec233,'0,00',logovoltaredonda,'',tec206,'0,00',logocruzeiro,'',tec55,'0,00',logooperarioms,'',tec77,'0,00',logoamericarj,'',tec192,'0,00',logointernacional,'',tec92,'0,00',logoamericarn,'',tec223,'0,00',logocriciuma,'',tec183,'0,00',logocuiaba,'',tec165,'0,00',logosantos,'',tec24,'0,00',logoceara,'',tec116,'0,00'];
let calend26=[logoamericarj,'',tec192,'0,00',logonovorizontino,'',tec60,'0,00',logobrasilrs,'',tec129,'0,00',logosantos,'',tec24,'0,00',logoamericarn,'',tec223,'0,00',logopaulista,'',tec108,'0,00',logoportuguesa,'',tec83,'0,00',logovoltaredonda,'',tec206,'0,00',logoceara,'',tec116,'0,00',logocruzeiro,'',tec55,'0,00',logonautico,'',tec204,'0,00',logoguarani,'',tec25,'0,00',logocuiaba,'',tec165,'0,00',logocoritiba,'',tec175,'0,00',logopontepreta,'',tec233,'0,00',logointernacional,'',tec92,'0,00',logosampaiocorrea,'',tec65,'0,00',logocriciuma,'',tec183,'0,00',logosantacruz,'',tec27,'0,00',logooperarioms,'',tec77,'0,00'];
let calend27=[logonovorizontino,'',tec60,'0,00',logooperarioms,'',tec77,'0,00',logopaulista,'',tec108,'0,00',logopontepreta,'',tec233,'0,00',logoamericarn,'',tec223,'0,00',logoceara,'',tec116,'0,00',logocruzeiro,'',tec55,'0,00',logobrasilrs,'',tec129,'0,00',logoguarani,'',tec25,'0,00',logoportuguesa,'',tec83,'0,00',logovoltaredonda,'',tec206,'0,00',logocoritiba,'',tec175,'0,00',logocuiaba,'',tec165,'0,00',logosampaiocorrea,'',tec65,'0,00',logointernacional,'',tec92,'0,00',logoamericarj,'',tec192,'0,00',logocriciuma,'',tec183,'0,00',logosantacruz,'',tec27,'0,00',logosantos,'',tec24,'0,00',logonautico,'',tec204,'0,00'];
let calend28=[logoamericarj,'',tec192,'0,00',logocriciuma,'',tec183,'0,00',logobrasilrs,'',tec129,'0,00',logonovorizontino,'',tec60,'0,00',logocoritiba,'',tec175,'0,00',logoguarani,'',tec25,'0,00',logoportuguesa,'',tec83,'0,00',logopaulista,'',tec108,'0,00',logoceara,'',tec116,'0,00',logocuiaba,'',tec165,'0,00',logonautico,'',tec204,'0,00',logoamericarn,'',tec223,'0,00',logooperarioms,'',tec77,'0,00',logointernacional,'',tec92,'0,00',logopontepreta,'',tec233,'0,00',logosantos,'',tec24,'0,00',logosampaiocorrea,'',tec65,'0,00',logocruzeiro,'',tec55,'0,00',logosantacruz,'',tec27,'0,00',logovoltaredonda,'',tec206,'0,00'];
let calend29=[logonovorizontino,'',tec60,'0,00',logoguarani,'',tec25,'0,00',logopaulista,'',tec108,'0,00',logocoritiba,'',tec175,'0,00',logoamericarn,'',tec223,'0,00',logopontepreta,'',tec233,'0,00',logocruzeiro,'',tec55,'0,00',logonautico,'',tec204,'0,00',logoceara,'',tec116,'0,00',logosantacruz,'',tec27,'0,00',logovoltaredonda,'',tec206,'0,00',logosampaiocorrea,'',tec65,'0,00',logooperarioms,'',tec77,'0,00',logobrasilrs,'',tec129,'0,00',logointernacional,'',tec92,'0,00',logocuiaba,'',tec165,'0,00',logocriciuma,'',tec183,'0,00',logoportuguesa,'',tec83,'0,00',logosantos,'',tec24,'0,00',logoamericarj,'',tec192,'0,00'];
let calend30=[logoamericarj,'',tec192,'0,00',logoceara,'',tec116,'0,00',logobrasilrs,'',tec129,'0,00',logointernacional,'',tec92,'0,00',logoamericarn,'',tec223,'0,00',logovoltaredonda,'',tec206,'0,00',logocruzeiro,'',tec55,'0,00',logoportuguesa,'',tec83,'0,00',logoguarani,'',tec25,'0,00',logosantos,'',tec24,'0,00',logonautico,'',tec204,'0,00',logocriciuma,'',tec183,'0,00',logocuiaba,'',tec165,'0,00',logopaulista,'',tec108,'0,00',logopontepreta,'',tec233,'0,00',logocoritiba,'',tec175,'0,00',logosampaiocorrea,'',tec65,'0,00',logooperarioms,'',tec77,'0,00',logosantacruz,'',tec27,'0,00',logonovorizontino,'',tec60,'0,00'];
let calend31=[logoamericarj,'',tec192,'0,00',logobrasilrs,'',tec129,'0,00',logopaulista,'',tec108,'0,00',logocruzeiro,'',tec55,'0,00',logocoritiba,'',tec175,'0,00',logonautico,'',tec204,'0,00',logoportuguesa,'',tec83,'0,00',logoamericarn,'',tec223,'0,00',logoguarani,'',tec25,'0,00',logosampaiocorrea,'',tec65,'0,00',logovoltaredonda,'',tec206,'0,00',logonovorizontino,'',tec60,'0,00',logooperarioms,'',tec77,'0,00',logoceara,'',tec116,'0,00',logointernacional,'',tec92,'0,00',logosantacruz,'',tec27,'0,00',logocriciuma,'',tec183,'0,00',logopontepreta,'',tec233,'0,00',logosantos,'',tec24,'0,00',logocuiaba,'',tec165,'0,00'];
let calend32=[logonovorizontino,'',tec60,'0,00',logopaulista,'',tec108,'0,00',logobrasilrs,'',tec129,'0,00',logoportuguesa,'',tec83,'0,00',logocoritiba,'',tec175,'0,00',logointernacional,'',tec92,'0,00',logocruzeiro,'',tec55,'0,00',logosantos,'',tec24,'0,00',logoceara,'',tec116,'0,00',logocriciuma,'',tec183,'0,00',logonautico,'',tec204,'0,00',logoamericarj,'',tec192,'0,00',logocuiaba,'',tec165,'0,00',logooperarioms,'',tec77,'0,00',logopontepreta,'',tec233,'0,00',logovoltaredonda,'',tec206,'0,00',logosampaiocorrea,'',tec65,'0,00',logoamericarn,'',tec223,'0,00',logosantacruz,'',tec27,'0,00',logoguarani,'',tec25,'0,00'];
let calend33=[logonovorizontino,'',tec60,'0,00',logocruzeiro,'',tec55,'0,00',logopaulista,'',tec108,'0,00',logosantacruz,'',tec27,'0,00',logoamericarn,'',tec223,'0,00',logocuiaba,'',tec165,'0,00',logoportuguesa,'',tec83,'0,00',logoceara,'',tec116,'0,00',logoguarani,'',tec25,'0,00',logoamericarj,'',tec192,'0,00',logovoltaredonda,'',tec206,'0,00',logointernacional,'',tec92,'0,00',logooperarioms,'',tec77,'0,00',logonautico,'',tec204,'0,00',logopontepreta,'',tec233,'0,00',logosampaiocorrea,'',tec65,'0,00',logocriciuma,'',tec183,'0,00',logobrasilrs,'',tec129,'0,00',logosantos,'',tec24,'0,00',logocoritiba,'',tec175,'0,00'];
let calend34=[logoamericarj,'',tec192,'0,00',logoportuguesa,'',tec83,'0,00',logobrasilrs,'',tec129,'0,00',logopaulista,'',tec108,'0,00',logocoritiba,'',tec175,'0,00',logooperarioms,'',tec77,'0,00',logocruzeiro,'',tec55,'0,00',logoguarani,'',tec25,'0,00',logoceara,'',tec116,'0,00',logonovorizontino,'',tec60,'0,00',logonautico,'',tec204,'0,00',logopontepreta,'',tec233,'0,00',logocuiaba,'',tec165,'0,00',logovoltaredonda,'',tec206,'0,00',logointernacional,'',tec92,'0,00',logocriciuma,'',tec183,'0,00',logosampaiocorrea,'',tec65,'0,00',logosantos,'',tec24,'0,00',logosantacruz,'',tec27,'0,00',logoamericarn,'',tec223,'0,00'];
let calend35=[logonovorizontino,'',tec60,'0,00',logoamericarn,'',tec223,'0,00',logopaulista,'',tec108,'0,00',logoceara,'',tec116,'0,00',logocoritiba,'',tec175,'0,00',logosantacruz,'',tec27,'0,00',logoportuguesa,'',tec83,'0,00',logocuiaba,'',tec165,'0,00',logoguarani,'',tec25,'0,00',logovoltaredonda,'',tec206,'0,00',logonautico,'',tec204,'0,00',logobrasilrs,'',tec129,'0,00',logooperarioms,'',tec77,'0,00',logocriciuma,'',tec183,'0,00',logopontepreta,'',tec233,'0,00',logocruzeiro,'',tec55,'0,00',logosampaiocorrea,'',tec65,'0,00',logoamericarj,'',tec192,'0,00',logosantos,'',tec24,'0,00',logointernacional,'',tec92,'0,00'];
let calend36=[logoamericarj,'',tec192,'0,00',logocoritiba,'',tec175,'0,00',logobrasilrs,'',tec129,'0,00',logosampaiocorrea,'',tec65,'0,00',logoamericarn,'',tec223,'0,00',logosantos,'',tec24,'0,00',logocruzeiro,'',tec55,'0,00',logooperarioms,'',tec77,'0,00',logoceara,'',tec116,'0,00',logonautico,'',tec204,'0,00',logovoltaredonda,'',tec206,'0,00',logopaulista,'',tec108,'0,00',logocuiaba,'',tec165,'0,00',logoguarani,'',tec25,'0,00',logointernacional,'',tec92,'0,00',logoportuguesa,'',tec83,'0,00',logocriciuma,'',tec183,'0,00',logonovorizontino,'',tec60,'0,00',logosantacruz,'',tec27,'0,00',logopontepreta,'',tec233,'0,00'];
let calend37=[logoamericarj,'',tec192,'0,00',logosantacruz,'',tec27,'0,00',logobrasilrs,'',tec129,'0,00',logocuiaba,'',tec165,'0,00',logocoritiba,'',tec175,'0,00',logoportuguesa,'',tec83,'0,00',logocruzeiro,'',tec55,'0,00',logointernacional,'',tec92,'0,00',logoguarani,'',tec25,'0,00',logopaulista,'',tec108,'0,00',logonautico,'',tec204,'0,00',logovoltaredonda,'',tec206,'0,00',logooperarioms,'',tec77,'0,00',logoamericarn,'',tec223,'0,00',logopontepreta,'',tec233,'0,00',logonovorizontino,'',tec60,'0,00',logosampaiocorrea,'',tec65,'0,00',logoceara,'',tec116,'0,00',logosantos,'',tec24,'0,00',logocriciuma,'',tec183,'0,00'];
let calend38=[logonovorizontino,'',tec60,'0,00',logosantos,'',tec24,'0,00',logopaulista,'',tec108,'0,00',logoamericarj,'',tec192,'0,00',logoamericarn,'',tec223,'0,00',logocruzeiro,'',tec55,'0,00',logoportuguesa,'',tec83,'0,00',logosampaiocorrea,'',tec65,'0,00',logoceara,'',tec116,'0,00',logocoritiba,'',tec175,'0,00',logovoltaredonda,'',tec206,'0,00',logooperarioms,'',tec77,'0,00',logocuiaba,'',tec165,'0,00',logopontepreta,'',tec233,'0,00',logointernacional,'',tec92,'0,00',logonautico,'',tec204,'0,00',logocriciuma,'',tec183,'0,00',logoguarani,'',tec25,'0,00',logosantacruz,'',tec27,'0,00',logobrasilrs,'',tec129,'0,00'];








/**PONTUAÇÕES DOS TÉCNICOS*/








let Rodadas = ['', rod1];
let Calendarios=['',calend1,calend2,calend3,calend4,calend5,calend6,calend7,calend8,calend9,calend10,calend11,calend12,calend13,calend14,calend15,calend16,calend17,calend18,calend19,calend20,calend21,calend22,calend23,calend24,calend25,calend26,calend27,calend28,calend29,calend30,calend31,calend32,calend33,calend34,calend35,calend36,calend37,calend38];






function pesquisaTabela() {
var rodada = parseInt(clasGeral.value);

document.getElementById("logB1").innerHTML=Rodadas[rodada][0][1];
document.getElementById("clubB1").innerHTML=Rodadas[rodada][0][0];
document.getElementById("tecB1").innerHTML=Rodadas[rodada][16].nome;
document.getElementById("nlB1").innerHTML=Rodadas[rodada][0][2];
document.getElementById("varB1").innerHTML=Rodadas[rodada][1];
document.getElementById("objB1").innerHTML=Rodadas[rodada][2];
document.getElementById("ptB1").innerHTML=Rodadas[rodada][3];
document.getElementById("vitB1").innerHTML=Rodadas[rodada][4];
document.getElementById("empB1").innerHTML=Rodadas[rodada][5];
document.getElementById("derB1").innerHTML=Rodadas[rodada][6];
document.getElementById("gpB1").innerHTML=Rodadas[rodada][7];
document.getElementById("gcB1").innerHTML=Rodadas[rodada][8];
document.getElementById("sgB1").innerHTML=Rodadas[rodada][9];
document.getElementById("apB1").innerHTML=(((Rodadas[rodada][3]*100)/((Rodadas[rodada][4]+Rodadas[rodada][5]+Rodadas[rodada][6])*3))).toFixed()+"%";
document.getElementById("ultB1").innerHTML=Rodadas[rodada][10];
document.getElementById("penB1").innerHTML=Rodadas[rodada][11];
document.getElementById("antB1").innerHTML=Rodadas[rodada][12];  
document.getElementById("qaB1").innerHTML=Rodadas[rodada][13];
document.getElementById("qiB1").innerHTML=Rodadas[rodada][14];
document.getElementById("MteB1").innerHTML=Rodadas[rodada][15]+"%";



//SEGUNDO LUGAR
document.getElementById("logB2").innerHTML=Rodadas[rodada][17][1];
document.getElementById("clubB2").innerHTML=Rodadas[rodada][17][0];
document.getElementById("tecB2").innerHTML=Rodadas[rodada][33].nome;
document.getElementById("nlB2").innerHTML=Rodadas[rodada][17][2];
document.getElementById("varB2").innerHTML=Rodadas[rodada][18];
document.getElementById("objB2").innerHTML=Rodadas[rodada][19];
document.getElementById("ptB2").innerHTML=Rodadas[rodada][20];
document.getElementById("vitB2").innerHTML=Rodadas[rodada][21];
document.getElementById("empB2").innerHTML=Rodadas[rodada][22];
document.getElementById("derB2").innerHTML=Rodadas[rodada][23];
document.getElementById("gpB2").innerHTML=Rodadas[rodada][24];
document.getElementById("gcB2").innerHTML=Rodadas[rodada][25];
document.getElementById("sgB2").innerHTML=Rodadas[rodada][26];
document.getElementById("apB2").innerHTML=(((Rodadas[rodada][20]*100)/((Rodadas[rodada][21]+Rodadas[rodada][22]+Rodadas[rodada][23])*3))).toFixed()+"%";
document.getElementById("ultB2").innerHTML=Rodadas[rodada][27];
document.getElementById("penB2").innerHTML=Rodadas[rodada][28];
document.getElementById("antB2").innerHTML=Rodadas[rodada][29];  
document.getElementById("qaB2").innerHTML=Rodadas[rodada][30];
document.getElementById("qiB2").innerHTML=Rodadas[rodada][31];
document.getElementById("MteB2").innerHTML=Rodadas[rodada][32]+"%";


document.getElementById("logB3").innerHTML=Rodadas[rodada][34][1];
document.getElementById("clubB3").innerHTML=Rodadas[rodada][34][0];
document.getElementById("tecB3").innerHTML=Rodadas[rodada][50].nome;
document.getElementById("nlB3").innerHTML=Rodadas[rodada][34][2];
document.getElementById("varB3").innerHTML=Rodadas[rodada][35];
document.getElementById("objB3").innerHTML=Rodadas[rodada][36];
document.getElementById("ptB3").innerHTML=Rodadas[rodada][37];
document.getElementById("vitB3").innerHTML=Rodadas[rodada][38];
document.getElementById("empB3").innerHTML=Rodadas[rodada][39];
document.getElementById("derB3").innerHTML=Rodadas[rodada][40];
document.getElementById("gpB3").innerHTML=Rodadas[rodada][41];
document.getElementById("gcB3").innerHTML=Rodadas[rodada][42];
document.getElementById("sgB3").innerHTML=Rodadas[rodada][43];
document.getElementById("apB3").innerHTML=(((Rodadas[rodada][37]*100)/((Rodadas[rodada][38]+Rodadas[rodada][39]+Rodadas[rodada][40])*3))).toFixed()+"%";
document.getElementById("ultB3").innerHTML=Rodadas[rodada][44];
document.getElementById("penB3").innerHTML=Rodadas[rodada][45];
document.getElementById("antB3").innerHTML=Rodadas[rodada][46];  
document.getElementById("qaB3").innerHTML=Rodadas[rodada][47];
document.getElementById("qiB3").innerHTML=Rodadas[rodada][48];
document.getElementById("MteB3").innerHTML=Rodadas[rodada][49]+"%";


document.getElementById("logB4").innerHTML=Rodadas[rodada][51][1];
document.getElementById("clubB4").innerHTML=Rodadas[rodada][51][0];
document.getElementById("tecB4").innerHTML=Rodadas[rodada][67].nome;
document.getElementById("nlB4").innerHTML=Rodadas[rodada][51][2];
document.getElementById("varB4").innerHTML=Rodadas[rodada][52];
document.getElementById("objB4").innerHTML=Rodadas[rodada][53];
document.getElementById("ptB4").innerHTML=Rodadas[rodada][54];
document.getElementById("vitB4").innerHTML=Rodadas[rodada][55];
document.getElementById("empB4").innerHTML=Rodadas[rodada][56];
document.getElementById("derB4").innerHTML=Rodadas[rodada][57];
document.getElementById("gpB4").innerHTML=Rodadas[rodada][58];
document.getElementById("gcB4").innerHTML=Rodadas[rodada][59];
document.getElementById("sgB4").innerHTML=Rodadas[rodada][60];
document.getElementById("apB4").innerHTML=(((Rodadas[rodada][54]*100)/((Rodadas[rodada][55]+Rodadas[rodada][56]+Rodadas[rodada][57])*3))).toFixed()+"%";
document.getElementById("ultB4").innerHTML=Rodadas[rodada][61];
document.getElementById("penB4").innerHTML=Rodadas[rodada][62];
document.getElementById("antB4").innerHTML=Rodadas[rodada][63];  
document.getElementById("qaB4").innerHTML=Rodadas[rodada][64];
document.getElementById("qiB4").innerHTML=Rodadas[rodada][65];
document.getElementById("MteB4").innerHTML=Rodadas[rodada][66]+"%";


document.getElementById("logB5").innerHTML=Rodadas[rodada][68][1];
document.getElementById("clubB5").innerHTML=Rodadas[rodada][68][0];
document.getElementById("tecB5").innerHTML=Rodadas[rodada][84].nome;
document.getElementById("nlB5").innerHTML=Rodadas[rodada][68][2];
document.getElementById("varB5").innerHTML=Rodadas[rodada][69];
document.getElementById("objB5").innerHTML=Rodadas[rodada][70];
document.getElementById("ptB5").innerHTML=Rodadas[rodada][71];
document.getElementById("vitB5").innerHTML=Rodadas[rodada][72];
document.getElementById("empB5").innerHTML=Rodadas[rodada][73];
document.getElementById("derB5").innerHTML=Rodadas[rodada][74];
document.getElementById("gpB5").innerHTML=Rodadas[rodada][75];
document.getElementById("gcB5").innerHTML=Rodadas[rodada][76];
document.getElementById("sgB5").innerHTML=Rodadas[rodada][77];
document.getElementById("apB5").innerHTML=(((Rodadas[rodada][71]*100)/((Rodadas[rodada][72]+Rodadas[rodada][73]+Rodadas[rodada][74])*3))).toFixed()+"%";
document.getElementById("ultB5").innerHTML=Rodadas[rodada][78];
document.getElementById("penB5").innerHTML=Rodadas[rodada][79];
document.getElementById("antB5").innerHTML=Rodadas[rodada][80];  
document.getElementById("qaB5").innerHTML=Rodadas[rodada][81];
document.getElementById("qiB5").innerHTML=Rodadas[rodada][82];
document.getElementById("MteB5").innerHTML=Rodadas[rodada][83]+"%";


document.getElementById("logB6").innerHTML=Rodadas[rodada][85][1];
document.getElementById("clubB6").innerHTML=Rodadas[rodada][85][0];
document.getElementById("tecB6").innerHTML=Rodadas[rodada][101].nome;
document.getElementById("nlB6").innerHTML=Rodadas[rodada][85][2];
document.getElementById("varB6").innerHTML=Rodadas[rodada][86];
document.getElementById("objB6").innerHTML=Rodadas[rodada][87];
document.getElementById("ptB6").innerHTML=Rodadas[rodada][88];
document.getElementById("vitB6").innerHTML=Rodadas[rodada][89];
document.getElementById("empB6").innerHTML=Rodadas[rodada][90];
document.getElementById("derB6").innerHTML=Rodadas[rodada][91];
document.getElementById("gpB6").innerHTML=Rodadas[rodada][92];
document.getElementById("gcB6").innerHTML=Rodadas[rodada][93];
document.getElementById("sgB6").innerHTML=Rodadas[rodada][94];
document.getElementById("apB6").innerHTML=(((Rodadas[rodada][88]*100)/((Rodadas[rodada][89]+Rodadas[rodada][90]+Rodadas[rodada][91])*3))).toFixed()+"%";
document.getElementById("ultB6").innerHTML=Rodadas[rodada][95];
document.getElementById("penB6").innerHTML=Rodadas[rodada][96];
document.getElementById("antB6").innerHTML=Rodadas[rodada][97];  
document.getElementById("qaB6").innerHTML=Rodadas[rodada][98];
document.getElementById("qiB6").innerHTML=Rodadas[rodada][99];
document.getElementById("MteB6").innerHTML=Rodadas[rodada][100]+"%";


document.getElementById("logB7").innerHTML=Rodadas[rodada][102][1];
document.getElementById("clubB7").innerHTML=Rodadas[rodada][102][0];
document.getElementById("tecB7").innerHTML=Rodadas[rodada][118].nome;
document.getElementById("nlB7").innerHTML=Rodadas[rodada][102][2];
document.getElementById("varB7").innerHTML=Rodadas[rodada][103];
document.getElementById("objB7").innerHTML=Rodadas[rodada][104];
document.getElementById("ptB7").innerHTML=Rodadas[rodada][105];
document.getElementById("vitB7").innerHTML=Rodadas[rodada][106];
document.getElementById("empB7").innerHTML=Rodadas[rodada][107];
document.getElementById("derB7").innerHTML=Rodadas[rodada][108];
document.getElementById("gpB7").innerHTML=Rodadas[rodada][109];
document.getElementById("gcB7").innerHTML=Rodadas[rodada][110];
document.getElementById("sgB7").innerHTML=Rodadas[rodada][111];
document.getElementById("apB7").innerHTML=(((Rodadas[rodada][3]*105)/((Rodadas[rodada][106]+Rodadas[rodada][107]+Rodadas[rodada][108])*3))).toFixed()+"%";
document.getElementById("ultB7").innerHTML=Rodadas[rodada][10];
document.getElementById("penB7").innerHTML=Rodadas[rodada][11];
document.getElementById("antB7").innerHTML=Rodadas[rodada][12];  
document.getElementById("qaB7").innerHTML=Rodadas[rodada][13];
document.getElementById("qiB7").innerHTML=Rodadas[rodada][14];
document.getElementById("MteB7").innerHTML=Rodadas[rodada][15]+"%";


document.getElementById("logB8").innerHTML=Rodadas[rodada][119][1];
document.getElementById("clubB8").innerHTML=Rodadas[rodada][119][0];
document.getElementById("tecB8").innerHTML=Rodadas[rodada][135].nome;
document.getElementById("nlB8").innerHTML=Rodadas[rodada][119][2];
document.getElementById("varB8").innerHTML=Rodadas[rodada][120];
document.getElementById("objB8").innerHTML=Rodadas[rodada][121];
document.getElementById("ptB8").innerHTML=Rodadas[rodada][122];
document.getElementById("vitB8").innerHTML=Rodadas[rodada][123];
document.getElementById("empB8").innerHTML=Rodadas[rodada][124];
document.getElementById("derB8").innerHTML=Rodadas[rodada][125];
document.getElementById("gpB8").innerHTML=Rodadas[rodada][126];
document.getElementById("gcB8").innerHTML=Rodadas[rodada][127];
document.getElementById("sgB8").innerHTML=Rodadas[rodada][128];
document.getElementById("apB8").innerHTML=(((Rodadas[rodada][122]*100)/((Rodadas[rodada][123]+Rodadas[rodada][124]+Rodadas[rodada][125])*3))).toFixed()+"%";
document.getElementById("ultB8").innerHTML=Rodadas[rodada][129];
document.getElementById("penB8").innerHTML=Rodadas[rodada][130];
document.getElementById("antB8").innerHTML=Rodadas[rodada][131];  
document.getElementById("qaB8").innerHTML=Rodadas[rodada][132];
document.getElementById("qiB8").innerHTML=Rodadas[rodada][133];
document.getElementById("MteB8").innerHTML=Rodadas[rodada][134]+"%";


document.getElementById("logB9").innerHTML=Rodadas[rodada][136][1];
document.getElementById("clubB9").innerHTML=Rodadas[rodada][136][0];
document.getElementById("tecB9").innerHTML=Rodadas[rodada][152].nome;
document.getElementById("nlB9").innerHTML=Rodadas[rodada][136][2];
document.getElementById("varB9").innerHTML=Rodadas[rodada][137];
document.getElementById("objB9").innerHTML=Rodadas[rodada][138];
document.getElementById("ptB9").innerHTML=Rodadas[rodada][139];
document.getElementById("vitB9").innerHTML=Rodadas[rodada][140];
document.getElementById("empB9").innerHTML=Rodadas[rodada][141];
document.getElementById("derB9").innerHTML=Rodadas[rodada][142];
document.getElementById("gpB9").innerHTML=Rodadas[rodada][143];
document.getElementById("gcB9").innerHTML=Rodadas[rodada][144];
document.getElementById("sgB9").innerHTML=Rodadas[rodada][145];
document.getElementById("apB9").innerHTML=(((Rodadas[rodada][139]*100)/((Rodadas[rodada][140]+Rodadas[rodada][141]+Rodadas[rodada][142])*3))).toFixed()+"%";
document.getElementById("ultB9").innerHTML=Rodadas[rodada][10];
document.getElementById("penB9").innerHTML=Rodadas[rodada][11];
document.getElementById("antB9").innerHTML=Rodadas[rodada][12];  
document.getElementById("qaB9").innerHTML=Rodadas[rodada][13];
document.getElementById("qiB9").innerHTML=Rodadas[rodada][14];
document.getElementById("MteB9").innerHTML=Rodadas[rodada][15]+"%";


document.getElementById("logB10").innerHTML=Rodadas[rodada][153][1];
document.getElementById("clubB10").innerHTML=Rodadas[rodada][153][0];
document.getElementById("tecB10").innerHTML=Rodadas[rodada][169].nome;
document.getElementById("nlB10").innerHTML=Rodadas[rodada][153][2];
document.getElementById("varB10").innerHTML=Rodadas[rodada][154];
document.getElementById("objB10").innerHTML=Rodadas[rodada][155];
document.getElementById("ptB10").innerHTML=Rodadas[rodada][156];
document.getElementById("vitB10").innerHTML=Rodadas[rodada][157];
document.getElementById("empB10").innerHTML=Rodadas[rodada][158];
document.getElementById("derB10").innerHTML=Rodadas[rodada][159];
document.getElementById("gpB10").innerHTML=Rodadas[rodada][160];
document.getElementById("gcB10").innerHTML=Rodadas[rodada][161];
document.getElementById("sgB10").innerHTML=Rodadas[rodada][162];
document.getElementById("apB10").innerHTML=(((Rodadas[rodada][156]*100)/((Rodadas[rodada][157]+Rodadas[rodada][158]+Rodadas[rodada][159])*3))).toFixed()+"%";
document.getElementById("ultB10").innerHTML=Rodadas[rodada][163];
document.getElementById("penB10").innerHTML=Rodadas[rodada][164];
document.getElementById("antB10").innerHTML=Rodadas[rodada][165];  
document.getElementById("qaB10").innerHTML=Rodadas[rodada][166];
document.getElementById("qiB10").innerHTML=Rodadas[rodada][167];
document.getElementById("MteB10").innerHTML=Rodadas[rodada][168]+"%";

document.getElementById("logB11").innerHTML=Rodadas[rodada][170][1];
document.getElementById("clubB11").innerHTML=Rodadas[rodada][170][0];
document.getElementById("tecB11").innerHTML=Rodadas[rodada][186].nome;
document.getElementById("nlB11").innerHTML=Rodadas[rodada][170][2];
document.getElementById("varB11").innerHTML=Rodadas[rodada][171];
document.getElementById("objB11").innerHTML=Rodadas[rodada][172];
document.getElementById("ptB11").innerHTML=Rodadas[rodada][173];
document.getElementById("vitB11").innerHTML=Rodadas[rodada][174];
document.getElementById("empB11").innerHTML=Rodadas[rodada][175];
document.getElementById("derB11").innerHTML=Rodadas[rodada][176];
document.getElementById("gpB11").innerHTML=Rodadas[rodada][177];
document.getElementById("gcB11").innerHTML=Rodadas[rodada][178];
document.getElementById("sgB11").innerHTML=Rodadas[rodada][179];
document.getElementById("apB11").innerHTML=(((Rodadas[rodada][173]*100)/((Rodadas[rodada][174]+Rodadas[rodada][175]+Rodadas[rodada][176])*3))).toFixed()+"%";
document.getElementById("ultB11").innerHTML=Rodadas[rodada][180];
document.getElementById("penB11").innerHTML=Rodadas[rodada][181];
document.getElementById("antB11").innerHTML=Rodadas[rodada][182];  
document.getElementById("qaB11").innerHTML=Rodadas[rodada][183];
document.getElementById("qiB11").innerHTML=Rodadas[rodada][184];
document.getElementById("MteB11").innerHTML=Rodadas[rodada][185]+"%";


document.getElementById("logB12").innerHTML=Rodadas[rodada][187][1];
document.getElementById("clubB12").innerHTML=Rodadas[rodada][187][0];
document.getElementById("tecB12").innerHTML=Rodadas[rodada][203].nome;
document.getElementById("nlB12").innerHTML=Rodadas[rodada][187][2];
document.getElementById("varB12").innerHTML=Rodadas[rodada][188];
document.getElementById("objB12").innerHTML=Rodadas[rodada][189];
document.getElementById("ptB12").innerHTML=Rodadas[rodada][190];
document.getElementById("vitB12").innerHTML=Rodadas[rodada][191];
document.getElementById("empB12").innerHTML=Rodadas[rodada][192];
document.getElementById("derB12").innerHTML=Rodadas[rodada][193];
document.getElementById("gpB12").innerHTML=Rodadas[rodada][194];
document.getElementById("gcB12").innerHTML=Rodadas[rodada][195];
document.getElementById("sgB12").innerHTML=Rodadas[rodada][196];
document.getElementById("apB12").innerHTML=(((Rodadas[rodada][190]*100)/((Rodadas[rodada][191]+Rodadas[rodada][192]+Rodadas[rodada][193])*3))).toFixed()+"%";
document.getElementById("ultB12").innerHTML=Rodadas[rodada][197];
document.getElementById("penB12").innerHTML=Rodadas[rodada][198];
document.getElementById("antB12").innerHTML=Rodadas[rodada][199];  
document.getElementById("qaB12").innerHTML=Rodadas[rodada][200];
document.getElementById("qiB12").innerHTML=Rodadas[rodada][201];
document.getElementById("MteB12").innerHTML=Rodadas[rodada][202]+"%";


document.getElementById("logB13").innerHTML=Rodadas[rodada][204][1];
document.getElementById("clubB13").innerHTML=Rodadas[rodada][204][0];
document.getElementById("tecB13").innerHTML=Rodadas[rodada][220].nome;
document.getElementById("nlB13").innerHTML=Rodadas[rodada][204][2];
document.getElementById("varB13").innerHTML=Rodadas[rodada][205];
document.getElementById("objB13").innerHTML=Rodadas[rodada][206];
document.getElementById("ptB13").innerHTML=Rodadas[rodada][207];
document.getElementById("vitB13").innerHTML=Rodadas[rodada][208];
document.getElementById("empB13").innerHTML=Rodadas[rodada][209];
document.getElementById("derB13").innerHTML=Rodadas[rodada][210];
document.getElementById("gpB13").innerHTML=Rodadas[rodada][211];
document.getElementById("gcB13").innerHTML=Rodadas[rodada][212];
document.getElementById("sgB13").innerHTML=Rodadas[rodada][213];
document.getElementById("apB13").innerHTML=(((Rodadas[rodada][207]*3)/((Rodadas[rodada][208]+Rodadas[rodada][209]+Rodadas[rodada][210])*3))).toFixed()+"%";
document.getElementById("ultB13").innerHTML=Rodadas[rodada][214];
document.getElementById("penB13").innerHTML=Rodadas[rodada][215];
document.getElementById("antB13").innerHTML=Rodadas[rodada][216];  
document.getElementById("qaB13").innerHTML=Rodadas[rodada][217];
document.getElementById("qiB13").innerHTML=Rodadas[rodada][218];
document.getElementById("MteB13").innerHTML=Rodadas[rodada][219]+"%";


document.getElementById("logB14").innerHTML=Rodadas[rodada][221][1];
document.getElementById("clubB14").innerHTML=Rodadas[rodada][221][0];
document.getElementById("tecB14").innerHTML=Rodadas[rodada][237].nome;
document.getElementById("nlB14").innerHTML=Rodadas[rodada][221][2];
document.getElementById("varB14").innerHTML=Rodadas[rodada][222];
document.getElementById("objB14").innerHTML=Rodadas[rodada][223];
document.getElementById("ptB14").innerHTML=Rodadas[rodada][224];
document.getElementById("vitB14").innerHTML=Rodadas[rodada][225];
document.getElementById("empB14").innerHTML=Rodadas[rodada][226];
document.getElementById("derB14").innerHTML=Rodadas[rodada][227];
document.getElementById("gpB14").innerHTML=Rodadas[rodada][228];
document.getElementById("gcB14").innerHTML=Rodadas[rodada][229];
document.getElementById("sgB14").innerHTML=Rodadas[rodada][230];
document.getElementById("apB14").innerHTML=(((Rodadas[rodada][224]*100)/((Rodadas[rodada][225]+Rodadas[rodada][226]+Rodadas[rodada][227])*3))).toFixed()+"%";
document.getElementById("ultB14").innerHTML=Rodadas[rodada][231];
document.getElementById("penB14").innerHTML=Rodadas[rodada][232];
document.getElementById("antB14").innerHTML=Rodadas[rodada][233];  
document.getElementById("qaB14").innerHTML=Rodadas[rodada][234];
document.getElementById("qiB14").innerHTML=Rodadas[rodada][235];
document.getElementById("MteB14").innerHTML=Rodadas[rodada][236]+"%";


document.getElementById("logB15").innerHTML=Rodadas[rodada][238][1];
document.getElementById("clubB15").innerHTML=Rodadas[rodada][238][0];
document.getElementById("tecB15").innerHTML=Rodadas[rodada][254].nome;
document.getElementById("nlB15").innerHTML=Rodadas[rodada][238][2];
document.getElementById("varB15").innerHTML=Rodadas[rodada][239];
document.getElementById("objB15").innerHTML=Rodadas[rodada][240];
document.getElementById("ptB15").innerHTML=Rodadas[rodada][241];
document.getElementById("vitB15").innerHTML=Rodadas[rodada][242];
document.getElementById("empB15").innerHTML=Rodadas[rodada][243];
document.getElementById("derB15").innerHTML=Rodadas[rodada][244];
document.getElementById("gpB15").innerHTML=Rodadas[rodada][245];
document.getElementById("gcB15").innerHTML=Rodadas[rodada][246];
document.getElementById("sgB15").innerHTML=Rodadas[rodada][247];
document.getElementById("apB15").innerHTML=(((Rodadas[rodada][241]*100)/((Rodadas[rodada][242]+Rodadas[rodada][243]+Rodadas[rodada][244])*3))).toFixed()+"%";
document.getElementById("ultB15").innerHTML=Rodadas[rodada][248];
document.getElementById("penB15").innerHTML=Rodadas[rodada][249];
document.getElementById("antB15").innerHTML=Rodadas[rodada][250];  
document.getElementById("qaB15").innerHTML=Rodadas[rodada][251];
document.getElementById("qiB15").innerHTML=Rodadas[rodada][252];
document.getElementById("MteB15").innerHTML=Rodadas[rodada][253]+"%";


document.getElementById("logB16").innerHTML=Rodadas[rodada][255][1];
document.getElementById("clubB16").innerHTML=Rodadas[rodada][255][0];
document.getElementById("tecB16").innerHTML=Rodadas[rodada][271].nome;
document.getElementById("nlB16").innerHTML=Rodadas[rodada][255][2];
document.getElementById("varB16").innerHTML=Rodadas[rodada][256];
document.getElementById("objB16").innerHTML=Rodadas[rodada][257];
document.getElementById("ptB16").innerHTML=Rodadas[rodada][258];
document.getElementById("vitB16").innerHTML=Rodadas[rodada][259];
document.getElementById("empB16").innerHTML=Rodadas[rodada][260];
document.getElementById("derB16").innerHTML=Rodadas[rodada][261];
document.getElementById("gpB16").innerHTML=Rodadas[rodada][262];
document.getElementById("gcB16").innerHTML=Rodadas[rodada][263];
document.getElementById("sgB16").innerHTML=Rodadas[rodada][264];
document.getElementById("apB16").innerHTML=(((Rodadas[rodada][258]*100)/((Rodadas[rodada][259]+Rodadas[rodada][260]+Rodadas[rodada][261])*3))).toFixed()+"%";
document.getElementById("ultB16").innerHTML=Rodadas[rodada][265];
document.getElementById("penB16").innerHTML=Rodadas[rodada][266];
document.getElementById("antB16").innerHTML=Rodadas[rodada][267];  
document.getElementById("qaB16").innerHTML=Rodadas[rodada][268];
document.getElementById("qiB16").innerHTML=Rodadas[rodada][269];
document.getElementById("MteB16").innerHTML=Rodadas[rodada][270]+"%";


document.getElementById("logB17").innerHTML=Rodadas[rodada][272][1];
document.getElementById("clubB17").innerHTML=Rodadas[rodada][272][0];
document.getElementById("tecB17").innerHTML=Rodadas[rodada][288].nome;
document.getElementById("nlB17").innerHTML=Rodadas[rodada][272][2];
document.getElementById("varB17").innerHTML=Rodadas[rodada][273];
document.getElementById("objB17").innerHTML=Rodadas[rodada][274];
document.getElementById("ptB17").innerHTML=Rodadas[rodada][275];
document.getElementById("vitB17").innerHTML=Rodadas[rodada][276];
document.getElementById("empB17").innerHTML=Rodadas[rodada][277];
document.getElementById("derB17").innerHTML=Rodadas[rodada][278];
document.getElementById("gpB17").innerHTML=Rodadas[rodada][279];
document.getElementById("gcB17").innerHTML=Rodadas[rodada][280];
document.getElementById("sgB17").innerHTML=Rodadas[rodada][281];
document.getElementById("apB17").innerHTML=(((Rodadas[rodada][275]*100)/((Rodadas[rodada][276]+Rodadas[rodada][277]+Rodadas[rodada][278])*3))).toFixed()+"%";
document.getElementById("ultB17").innerHTML=Rodadas[rodada][282];
document.getElementById("penB17").innerHTML=Rodadas[rodada][283];
document.getElementById("antB17").innerHTML=Rodadas[rodada][284];  
document.getElementById("qaB17").innerHTML=Rodadas[rodada][285];
document.getElementById("qiB17").innerHTML=Rodadas[rodada][286];
document.getElementById("MteB17").innerHTML=Rodadas[rodada][287]+"%";


document.getElementById("logB18").innerHTML=Rodadas[rodada][289][1];
document.getElementById("clubB18").innerHTML=Rodadas[rodada][289][0];
document.getElementById("tecB18").innerHTML=Rodadas[rodada][305].nome;
document.getElementById("nlB18").innerHTML=Rodadas[rodada][289][2];
document.getElementById("varB18").innerHTML=Rodadas[rodada][290];
document.getElementById("objB18").innerHTML=Rodadas[rodada][291];
document.getElementById("ptB18").innerHTML=Rodadas[rodada][292];
document.getElementById("vitB18").innerHTML=Rodadas[rodada][293];
document.getElementById("empB18").innerHTML=Rodadas[rodada][294];
document.getElementById("derB18").innerHTML=Rodadas[rodada][295];
document.getElementById("gpB18").innerHTML=Rodadas[rodada][296];
document.getElementById("gcB18").innerHTML=Rodadas[rodada][297];
document.getElementById("sgB18").innerHTML=Rodadas[rodada][298];
document.getElementById("apB18").innerHTML=(((Rodadas[rodada][292]*100)/((Rodadas[rodada][293]+Rodadas[rodada][294]+Rodadas[rodada][295])*3))).toFixed()+"%";
document.getElementById("ultB18").innerHTML=Rodadas[rodada][299];
document.getElementById("penB18").innerHTML=Rodadas[rodada][300];
document.getElementById("antB18").innerHTML=Rodadas[rodada][301];  
document.getElementById("qaB18").innerHTML=Rodadas[rodada][302];
document.getElementById("qiB18").innerHTML=Rodadas[rodada][303];
document.getElementById("MteB18").innerHTML=Rodadas[rodada][304]+"%";


document.getElementById("logB19").innerHTML=Rodadas[rodada][306][1];
document.getElementById("clubB19").innerHTML=Rodadas[rodada][306][0];
document.getElementById("tecB19").innerHTML=Rodadas[rodada][322].nome;
document.getElementById("nlB19").innerHTML=Rodadas[rodada][306][2];
document.getElementById("varB19").innerHTML=Rodadas[rodada][307];
document.getElementById("objB19").innerHTML=Rodadas[rodada][308];
document.getElementById("ptB19").innerHTML=Rodadas[rodada][309];
document.getElementById("vitB19").innerHTML=Rodadas[rodada][310];
document.getElementById("empB19").innerHTML=Rodadas[rodada][311];
document.getElementById("derB19").innerHTML=Rodadas[rodada][312];
document.getElementById("gpB19").innerHTML=Rodadas[rodada][313];
document.getElementById("gcB19").innerHTML=Rodadas[rodada][314];
document.getElementById("sgB19").innerHTML=Rodadas[rodada][315];
document.getElementById("apB19").innerHTML=(((Rodadas[rodada][309]*100)/((Rodadas[rodada][310]+Rodadas[rodada][311]+Rodadas[rodada][312])*3))).toFixed()+"%";
document.getElementById("ultB19").innerHTML=Rodadas[rodada][316];
document.getElementById("penB19").innerHTML=Rodadas[rodada][317];
document.getElementById("antB19").innerHTML=Rodadas[rodada][318];  
document.getElementById("qaB19").innerHTML=Rodadas[rodada][319];
document.getElementById("qiB19").innerHTML=Rodadas[rodada][320];
document.getElementById("MteB19").innerHTML=Rodadas[rodada][321]+"%";


document.getElementById("logB20").innerHTML=Rodadas[rodada][323][1];
document.getElementById("clubB20").innerHTML=Rodadas[rodada][323][0];
document.getElementById("tecB20").innerHTML=Rodadas[rodada][339].nome;
document.getElementById("nlB20").innerHTML=Rodadas[rodada][323][2];
document.getElementById("varB20").innerHTML=Rodadas[rodada][324];
document.getElementById("objB20").innerHTML=Rodadas[rodada][325];
document.getElementById("ptB20").innerHTML=Rodadas[rodada][326];
document.getElementById("vitB20").innerHTML=Rodadas[rodada][327];
document.getElementById("empB20").innerHTML=Rodadas[rodada][328];
document.getElementById("derB20").innerHTML=Rodadas[rodada][329];
document.getElementById("gpB20").innerHTML=Rodadas[rodada][330];
document.getElementById("gcB20").innerHTML=Rodadas[rodada][331];
document.getElementById("sgB20").innerHTML=Rodadas[rodada][332];
document.getElementById("apB20").innerHTML=(((Rodadas[rodada][326]*100)/((Rodadas[rodada][327]+Rodadas[rodada][328]+Rodadas[rodada][329])*3))).toFixed()+"%";
document.getElementById("ultB20").innerHTML=Rodadas[rodada][333];
document.getElementById("penB20").innerHTML=Rodadas[rodada][334];
document.getElementById("antB20").innerHTML=Rodadas[rodada][335];  
document.getElementById("qaB20").innerHTML=Rodadas[rodada][336];
document.getElementById("qiB20").innerHTML=Rodadas[rodada][337];
document.getElementById("MteB20").innerHTML=Rodadas[rodada][338]+"%";

//CARD DOS TÉCNICOS----------------------------------------------------------------

document.getElementById("CardNomeTec1").innerHTML=Rodadas[rodada][16].nome;
  document.getElementById("CardLogo1").innerHTML=Rodadas[rodada][16].logo;
  document.getElementById("CardLogin1").innerHTML=Rodadas[rodada][16].nomeLogin;
  document.getElementById("CardId1").innerHTML="ID: "+Rodadas[rodada][16].idCart;
  document.getElementById("CardDesde1").innerHTML="Na liga desde: "+Rodadas[rodada][16].anoEnt;
  document.getElementById("CardAssumiu1").innerHTML="Assumiu o clube na "+Rodadas[rodada][0][64]+"ªrod. de "+Rodadas[rodada][0][65];
  document.getElementById("CardTitulos1_1").innerHTML=Rodadas[rodada][16].titulo1;
  document.getElementById("CardTitulos1_2").innerHTML=Rodadas[rodada][16].titulo2;
  document.getElementById("CardTitulos1_3").innerHTML=Rodadas[rodada][16].titulo3;
  document.getElementById("CardTitulos1_4").innerHTML=Rodadas[rodada][16].titulo4;
  document.getElementById("CardTitulos1_5").innerHTML=Rodadas[rodada][16].titulo5;
  document.getElementById("CardTitulos1_6").innerHTML=Rodadas[rodada][16].titulo6;
  document.getElementById("CardTitulos1_7").innerHTML=Rodadas[rodada][16].titulo7;
  document.getElementById("CardTitulos1_8").innerHTML=Rodadas[rodada][16].titulo8;
  document.getElementById("CardTitulos1_9").innerHTML=Rodadas[rodada][16].titulo9;
  document.getElementById("CardTitulos1_10").innerHTML=Rodadas[rodada][16].titulo10;


  document.getElementById("CardNomeTec2").innerHTML=Rodadas[rodada][33].nome;
  document.getElementById("CardLogo2").innerHTML=Rodadas[rodada][33].logo;
  document.getElementById("CardLogin2").innerHTML=Rodadas[rodada][33].nomeLogin;
  document.getElementById("CardId2").innerHTML="ID: "+Rodadas[rodada][33].idCart;
  document.getElementById("CardDesde2").innerHTML="Na liga desde: "+Rodadas[rodada][33].anoEnt;
  document.getElementById("CardAssumiu2").innerHTML="Assumiu o clube na "+Rodadas[rodada][17][64]+"ªrod. de "+Rodadas[rodada][17][65];
  document.getElementById("CardTitulos2_1").innerHTML=Rodadas[rodada][33].titulo1;
  document.getElementById("CardTitulos2_2").innerHTML=Rodadas[rodada][33].titulo2;
  document.getElementById("CardTitulos2_3").innerHTML=Rodadas[rodada][33].titulo3;
  document.getElementById("CardTitulos2_4").innerHTML=Rodadas[rodada][33].titulo4;
  document.getElementById("CardTitulos2_5").innerHTML=Rodadas[rodada][33].titulo5;
  document.getElementById("CardTitulos2_6").innerHTML=Rodadas[rodada][33].titulo6;
  document.getElementById("CardTitulos2_7").innerHTML=Rodadas[rodada][33].titulo7;
  document.getElementById("CardTitulos2_8").innerHTML=Rodadas[rodada][33].titulo8;
  document.getElementById("CardTitulos2_9").innerHTML=Rodadas[rodada][33].titulo9;
  document.getElementById("CardTitulos2_10").innerHTML=Rodadas[rodada][33].titulo10;

  document.getElementById("CardNomeTec3").innerHTML=Rodadas[rodada][50].nome;
  document.getElementById("CardLogo3").innerHTML=Rodadas[rodada][50].logo;
  document.getElementById("CardLogin3").innerHTML=Rodadas[rodada][50].nomeLogin;
  document.getElementById("CardId3").innerHTML="ID: "+Rodadas[rodada][50].idCart;
  document.getElementById("CardDesde3").innerHTML="Na liga desde: "+Rodadas[rodada][50].anoEnt;
  document.getElementById("CardAssumiu3").innerHTML="Assumiu o clube na "+Rodadas[rodada][34][64]+"ªrod. de "+Rodadas[rodada][34][65];
  document.getElementById("CardTitulos3_1").innerHTML=Rodadas[rodada][50].titulo1;
  document.getElementById("CardTitulos3_2").innerHTML=Rodadas[rodada][50].titulo2;
  document.getElementById("CardTitulos3_3").innerHTML=Rodadas[rodada][50].titulo3;
  document.getElementById("CardTitulos3_4").innerHTML=Rodadas[rodada][50].titulo4;
  document.getElementById("CardTitulos3_5").innerHTML=Rodadas[rodada][50].titulo5;
  document.getElementById("CardTitulos3_6").innerHTML=Rodadas[rodada][50].titulo6;
  document.getElementById("CardTitulos3_7").innerHTML=Rodadas[rodada][50].titulo7;
  document.getElementById("CardTitulos3_8").innerHTML=Rodadas[rodada][50].titulo8;
  document.getElementById("CardTitulos3_9").innerHTML=Rodadas[rodada][50].titulo9;
  document.getElementById("CardTitulos3_10").innerHTML=Rodadas[rodada][50].titulo10;

  document.getElementById("CardNomeTec4").innerHTML=Rodadas[rodada][67].nome;
  document.getElementById("CardLogo4").innerHTML=Rodadas[rodada][67].logo;
  document.getElementById("CardLogin4").innerHTML=Rodadas[rodada][67].nomeLogin;
  document.getElementById("CardId4").innerHTML="ID: "+Rodadas[rodada][67].idCart;
  document.getElementById("CardDesde4").innerHTML="Na liga desde: "+Rodadas[rodada][67].anoEnt;
  document.getElementById("CardAssumiu4").innerHTML="Assumiu o clube na "+Rodadas[rodada][51][64]+"ªrod. de "+Rodadas[rodada][51][65];
  document.getElementById("CardTitulos4_1").innerHTML=Rodadas[rodada][67].titulo1;
  document.getElementById("CardTitulos4_2").innerHTML=Rodadas[rodada][67].titulo2;
  document.getElementById("CardTitulos4_3").innerHTML=Rodadas[rodada][67].titulo3;
  document.getElementById("CardTitulos4_4").innerHTML=Rodadas[rodada][67].titulo4;
  document.getElementById("CardTitulos4_5").innerHTML=Rodadas[rodada][67].titulo5;
  document.getElementById("CardTitulos4_6").innerHTML=Rodadas[rodada][67].titulo6;
  document.getElementById("CardTitulos4_7").innerHTML=Rodadas[rodada][67].titulo7;
  document.getElementById("CardTitulos4_8").innerHTML=Rodadas[rodada][67].titulo8;
  document.getElementById("CardTitulos4_9").innerHTML=Rodadas[rodada][67].titulo9;
  document.getElementById("CardTitulos4_10").innerHTML=Rodadas[rodada][67].titulo10;


  document.getElementById("CardNomeTec5").innerHTML=Rodadas[rodada][84].nome;
  document.getElementById("CardLogo5").innerHTML=Rodadas[rodada][84].logo;
  document.getElementById("CardLogin5").innerHTML=Rodadas[rodada][84].nomeLogin;
  document.getElementById("CardId5").innerHTML="ID: "+Rodadas[rodada][84].idCart;
  document.getElementById("CardDesde5").innerHTML="Na liga desde: "+Rodadas[rodada][84].anoEnt;
  document.getElementById("CardAssumiu5").innerHTML="Assumiu o clube na "+Rodadas[rodada][68][64]+"ªrod. de "+Rodadas[rodada][68][65];
  document.getElementById("CardTitulos5_1").innerHTML=Rodadas[rodada][84].titulo1;
  document.getElementById("CardTitulos5_2").innerHTML=Rodadas[rodada][84].titulo2;
  document.getElementById("CardTitulos5_3").innerHTML=Rodadas[rodada][84].titulo3;
  document.getElementById("CardTitulos5_4").innerHTML=Rodadas[rodada][84].titulo4;
  document.getElementById("CardTitulos5_5").innerHTML=Rodadas[rodada][84].titulo5;
  document.getElementById("CardTitulos5_6").innerHTML=Rodadas[rodada][84].titulo6;
  document.getElementById("CardTitulos5_7").innerHTML=Rodadas[rodada][84].titulo7;
  document.getElementById("CardTitulos5_8").innerHTML=Rodadas[rodada][84].titulo8;
  document.getElementById("CardTitulos5_9").innerHTML=Rodadas[rodada][84].titulo9;
  document.getElementById("CardTitulos5_10").innerHTML=Rodadas[rodada][84].titulo10;

  document.getElementById("CardNomeTec6").innerHTML=Rodadas[rodada][101].nome;
  document.getElementById("CardLogo6").innerHTML=Rodadas[rodada][101].logo;
  document.getElementById("CardLogin6").innerHTML=Rodadas[rodada][101].nomeLogin;
  document.getElementById("CardId6").innerHTML="ID: "+Rodadas[rodada][101].idCart;
  document.getElementById("CardDesde6").innerHTML="Na liga desde: "+Rodadas[rodada][101].anoEnt;
  document.getElementById("CardAssumiu6").innerHTML="Assumiu o clube na "+Rodadas[rodada][85][64]+"ªrod. de "+Rodadas[rodada][85][65];
  document.getElementById("CardTitulos6_1").innerHTML=Rodadas[rodada][101].titulo1;
  document.getElementById("CardTitulos6_2").innerHTML=Rodadas[rodada][101].titulo2;
  document.getElementById("CardTitulos6_3").innerHTML=Rodadas[rodada][101].titulo3;
  document.getElementById("CardTitulos6_4").innerHTML=Rodadas[rodada][101].titulo4;
  document.getElementById("CardTitulos6_5").innerHTML=Rodadas[rodada][101].titulo5;
  document.getElementById("CardTitulos6_6").innerHTML=Rodadas[rodada][101].titulo6;
  document.getElementById("CardTitulos6_7").innerHTML=Rodadas[rodada][101].titulo7;
  document.getElementById("CardTitulos6_8").innerHTML=Rodadas[rodada][101].titulo8;
  document.getElementById("CardTitulos6_9").innerHTML=Rodadas[rodada][101].titulo9;
  document.getElementById("CardTitulos6_10").innerHTML=Rodadas[rodada][101].titulo10;

  document.getElementById("CardNomeTec7").innerHTML=Rodadas[rodada][118].nome;
  document.getElementById("CardLogo7").innerHTML=Rodadas[rodada][118].logo;
  document.getElementById("CardLogin7").innerHTML=Rodadas[rodada][118].nomeLogin;
  document.getElementById("CardId7").innerHTML="ID: "+Rodadas[rodada][118].idCart;
  document.getElementById("CardDesde7").innerHTML="Na liga desde: "+Rodadas[rodada][118].anoEnt;
  document.getElementById("CardAssumiu7").innerHTML="Assumiu o clube na "+Rodadas[rodada][102][64]+"ªrod. de "+Rodadas[rodada][102][65];
  document.getElementById("CardTitulos7_1").innerHTML=Rodadas[rodada][118].titulo1;
  document.getElementById("CardTitulos7_2").innerHTML=Rodadas[rodada][118].titulo2;
  document.getElementById("CardTitulos7_3").innerHTML=Rodadas[rodada][118].titulo3;
  document.getElementById("CardTitulos7_4").innerHTML=Rodadas[rodada][118].titulo4;
  document.getElementById("CardTitulos7_5").innerHTML=Rodadas[rodada][118].titulo5;
  document.getElementById("CardTitulos7_6").innerHTML=Rodadas[rodada][118].titulo6;
  document.getElementById("CardTitulos7_7").innerHTML=Rodadas[rodada][118].titulo7;
  document.getElementById("CardTitulos7_8").innerHTML=Rodadas[rodada][118].titulo8;
  document.getElementById("CardTitulos7_9").innerHTML=Rodadas[rodada][118].titulo9;
  document.getElementById("CardTitulos7_10").innerHTML=Rodadas[rodada][118].titulo10;

  document.getElementById("CardNomeTec8").innerHTML=Rodadas[rodada][135].nome;
  document.getElementById("CardLogo8").innerHTML=Rodadas[rodada][135].logo;
  document.getElementById("CardLogin8").innerHTML=Rodadas[rodada][135].nomeLogin;
  document.getElementById("CardId8").innerHTML="ID: "+Rodadas[rodada][135].idCart;
  document.getElementById("CardDesde8").innerHTML="Na liga desde: "+Rodadas[rodada][135].anoEnt;
  document.getElementById("CardAssumiu8").innerHTML="Assumiu o clube na "+Rodadas[rodada][119][64]+"ªrod. de "+Rodadas[rodada][119][65];
  document.getElementById("CardTitulos8_1").innerHTML=Rodadas[rodada][135].titulo1;
  document.getElementById("CardTitulos8_2").innerHTML=Rodadas[rodada][135].titulo2;
  document.getElementById("CardTitulos8_3").innerHTML=Rodadas[rodada][135].titulo3;
  document.getElementById("CardTitulos8_4").innerHTML=Rodadas[rodada][135].titulo4;
  document.getElementById("CardTitulos8_5").innerHTML=Rodadas[rodada][135].titulo5;
  document.getElementById("CardTitulos8_6").innerHTML=Rodadas[rodada][135].titulo6;
  document.getElementById("CardTitulos8_7").innerHTML=Rodadas[rodada][135].titulo7;
  document.getElementById("CardTitulos8_8").innerHTML=Rodadas[rodada][135].titulo8;
  document.getElementById("CardTitulos8_9").innerHTML=Rodadas[rodada][135].titulo9;
  document.getElementById("CardTitulos8_10").innerHTML=Rodadas[rodada][135].titulo10;

   document.getElementById("CardNomeTec9").innerHTML=Rodadas[rodada][152].nome;
  document.getElementById("CardLogo9").innerHTML=Rodadas[rodada][152].logo;
  document.getElementById("CardLogin9").innerHTML=Rodadas[rodada][152].nomeLogin;
  document.getElementById("CardId9").innerHTML="ID: "+Rodadas[rodada][152].idCart;
  document.getElementById("CardDesde9").innerHTML="Na liga desde: "+Rodadas[rodada][152].anoEnt;
  document.getElementById("CardAssumiu9").innerHTML="Assumiu o clube na "+Rodadas[rodada][136][64]+"ªrod. de "+Rodadas[rodada][136][65];
  document.getElementById("CardTitulos9_1").innerHTML=Rodadas[rodada][152].titulo1;
  document.getElementById("CardTitulos9_2").innerHTML=Rodadas[rodada][152].titulo2;
  document.getElementById("CardTitulos9_3").innerHTML=Rodadas[rodada][152].titulo3;
  document.getElementById("CardTitulos9_4").innerHTML=Rodadas[rodada][152].titulo4;
  document.getElementById("CardTitulos9_5").innerHTML=Rodadas[rodada][152].titulo5;
  document.getElementById("CardTitulos9_6").innerHTML=Rodadas[rodada][152].titulo6;
  document.getElementById("CardTitulos9_7").innerHTML=Rodadas[rodada][152].titulo7;
  document.getElementById("CardTitulos9_8").innerHTML=Rodadas[rodada][152].titulo8;
  document.getElementById("CardTitulos9_9").innerHTML=Rodadas[rodada][152].titulo9;
  document.getElementById("CardTitulos9_10").innerHTML=Rodadas[rodada][152].titulo10;

  document.getElementById("CardNomeTec10").innerHTML=Rodadas[rodada][169].nome;
  document.getElementById("CardLogo10").innerHTML=Rodadas[rodada][169].logo;
  document.getElementById("CardLogin10").innerHTML=Rodadas[rodada][169].nomeLogin;
  document.getElementById("CardId10").innerHTML="ID: "+Rodadas[rodada][169].idCart;
  document.getElementById("CardDesde1").innerHTML="Na liga desde: "+Rodadas[rodada][169].anoEnt;
  document.getElementById("CardAssumiu10").innerHTML="Assumiu o clube na "+Rodadas[rodada][153][64]+"ªrod. de "+Rodadas[rodada][153][65];
  document.getElementById("CardTitulos10_1").innerHTML=Rodadas[rodada][169].titulo1;
  document.getElementById("CardTitulos10_2").innerHTML=Rodadas[rodada][169].titulo2;
  document.getElementById("CardTitulos10_3").innerHTML=Rodadas[rodada][169].titulo3;
  document.getElementById("CardTitulos10_4").innerHTML=Rodadas[rodada][169].titulo4;
  document.getElementById("CardTitulos10_5").innerHTML=Rodadas[rodada][169].titulo5;
  document.getElementById("CardTitulos10_6").innerHTML=Rodadas[rodada][169].titulo6;
  document.getElementById("CardTitulos10_7").innerHTML=Rodadas[rodada][169].titulo7;
  document.getElementById("CardTitulos10_8").innerHTML=Rodadas[rodada][169].titulo8;
  document.getElementById("CardTitulos10_9").innerHTML=Rodadas[rodada][169].titulo9;
  document.getElementById("CardTitulos10_10").innerHTML=Rodadas[rodada][169].titulo10;

  document.getElementById("CardNomeTec11").innerHTML=Rodadas[rodada][186].nome;
  document.getElementById("CardLogo11").innerHTML=Rodadas[rodada][186].logo;
  document.getElementById("CardLogin11").innerHTML=Rodadas[rodada][186].nomeLogin;
  document.getElementById("CardId11").innerHTML="ID: "+Rodadas[rodada][186].idCart;
  document.getElementById("CardDesde11").innerHTML="Na liga desde: "+Rodadas[rodada][186].anoEnt;
  document.getElementById("CardAssumiu11").innerHTML="Assumiu o clube na "+Rodadas[rodada][170][64]+"ªrod. de "+Rodadas[rodada][170][65];
  document.getElementById("CardTitulos11_1").innerHTML=Rodadas[rodada][186].titulo1;
  document.getElementById("CardTitulos11_2").innerHTML=Rodadas[rodada][186].titulo2;
  document.getElementById("CardTitulos11_3").innerHTML=Rodadas[rodada][186].titulo3;
  document.getElementById("CardTitulos11_4").innerHTML=Rodadas[rodada][186].titulo4;
  document.getElementById("CardTitulos11_5").innerHTML=Rodadas[rodada][186].titulo5;
  document.getElementById("CardTitulos11_6").innerHTML=Rodadas[rodada][186].titulo6;
  document.getElementById("CardTitulos11_7").innerHTML=Rodadas[rodada][186].titulo7;
  document.getElementById("CardTitulos11_8").innerHTML=Rodadas[rodada][186].titulo8;
  document.getElementById("CardTitulos11_9").innerHTML=Rodadas[rodada][186].titulo9;
  document.getElementById("CardTitulos11_10").innerHTML=Rodadas[rodada][186].titulo10;

   document.getElementById("CardNomeTec12").innerHTML=Rodadas[rodada][203].nome;
  document.getElementById("CardLogo12").innerHTML=Rodadas[rodada][203].logo;
  document.getElementById("CardLogin12").innerHTML=Rodadas[rodada][203].nomeLogin;
  document.getElementById("CardId12").innerHTML="ID: "+Rodadas[rodada][203].idCart;
  document.getElementById("CardDesde12").innerHTML="Na liga desde: "+Rodadas[rodada][203].anoEnt;
  document.getElementById("CardAssumiu12").innerHTML="Assumiu o clube na "+Rodadas[rodada][187][64]+"ªrod. de "+Rodadas[rodada][187][65];
  document.getElementById("CardTitulos12_1").innerHTML=Rodadas[rodada][203].titulo1;
  document.getElementById("CardTitulos12_2").innerHTML=Rodadas[rodada][203].titulo2;
  document.getElementById("CardTitulos12_3").innerHTML=Rodadas[rodada][203].titulo3;
  document.getElementById("CardTitulos12_4").innerHTML=Rodadas[rodada][203].titulo4;
  document.getElementById("CardTitulos12_5").innerHTML=Rodadas[rodada][203].titulo5;
  document.getElementById("CardTitulos12_6").innerHTML=Rodadas[rodada][203].titulo6;
  document.getElementById("CardTitulos12_7").innerHTML=Rodadas[rodada][203].titulo7;
  document.getElementById("CardTitulos12_8").innerHTML=Rodadas[rodada][203].titulo8;
  document.getElementById("CardTitulos12_9").innerHTML=Rodadas[rodada][203].titulo9;
  document.getElementById("CardTitulos12_10").innerHTML=Rodadas[rodada][203].titulo10;

   document.getElementById("CardNomeTec13").innerHTML=Rodadas[rodada][220].nome;
  document.getElementById("CardLogo13").innerHTML=Rodadas[rodada][220].logo;
  document.getElementById("CardLogin13").innerHTML=Rodadas[rodada][220].nomeLogin;
  document.getElementById("CardId13").innerHTML="ID: "+Rodadas[rodada][220].idCart;
  document.getElementById("CardDesde13").innerHTML="Na liga desde: "+Rodadas[rodada][220].anoEnt;
  document.getElementById("CardAssumiu13").innerHTML="Assumiu o clube na "+Rodadas[rodada][204][64]+"ªrod. de "+Rodadas[rodada][204][65];
  document.getElementById("CardTitulos13_1").innerHTML=Rodadas[rodada][220].titulo1;
  document.getElementById("CardTitulos13_2").innerHTML=Rodadas[rodada][220].titulo2;
  document.getElementById("CardTitulos13_3").innerHTML=Rodadas[rodada][220].titulo3;
  document.getElementById("CardTitulos13_4").innerHTML=Rodadas[rodada][220].titulo4;
  document.getElementById("CardTitulos13_5").innerHTML=Rodadas[rodada][220].titulo5;
  document.getElementById("CardTitulos13_6").innerHTML=Rodadas[rodada][220].titulo6;
  document.getElementById("CardTitulos13_7").innerHTML=Rodadas[rodada][220].titulo7;
  document.getElementById("CardTitulos13_8").innerHTML=Rodadas[rodada][220].titulo8;
  document.getElementById("CardTitulos13_9").innerHTML=Rodadas[rodada][220].titulo9;
  document.getElementById("CardTitulos13_10").innerHTML=Rodadas[rodada][220].titulo10;

   document.getElementById("CardNomeTec14").innerHTML=Rodadas[rodada][237].nome;
  document.getElementById("CardLogo14").innerHTML=Rodadas[rodada][237].logo;
  document.getElementById("CardLogin14").innerHTML=Rodadas[rodada][237].nomeLogin;
  document.getElementById("CardId14").innerHTML="ID: "+Rodadas[rodada][237].idCart;
  document.getElementById("CardDesde14").innerHTML="Na liga desde: "+Rodadas[rodada][237].anoEnt;
  document.getElementById("CardAssumiu14").innerHTML="Assumiu o clube na "+Rodadas[rodada][221][64]+"ªrod. de "+Rodadas[rodada][221][65];
  document.getElementById("CardTitulos14_1").innerHTML=Rodadas[rodada][237].titulo1;
  document.getElementById("CardTitulos14_2").innerHTML=Rodadas[rodada][237].titulo2;
  document.getElementById("CardTitulos14_3").innerHTML=Rodadas[rodada][237].titulo3;
  document.getElementById("CardTitulos14_4").innerHTML=Rodadas[rodada][237].titulo4;
  document.getElementById("CardTitulos14_5").innerHTML=Rodadas[rodada][237].titulo5;
  document.getElementById("CardTitulos14_6").innerHTML=Rodadas[rodada][237].titulo6;
  document.getElementById("CardTitulos14_7").innerHTML=Rodadas[rodada][237].titulo7;
  document.getElementById("CardTitulos14_8").innerHTML=Rodadas[rodada][237].titulo8;
  document.getElementById("CardTitulos14_9").innerHTML=Rodadas[rodada][237].titulo9;
  document.getElementById("CardTitulos14_10").innerHTML=Rodadas[rodada][237].titulo10;

  document.getElementById("CardNomeTec15").innerHTML=Rodadas[rodada][254].nome;
  document.getElementById("CardLogo15").innerHTML=Rodadas[rodada][254].logo;
  document.getElementById("CardLogin15").innerHTML=Rodadas[rodada][254].nomeLogin;
  document.getElementById("CardId15").innerHTML="ID: "+Rodadas[rodada][254].idCart;
  document.getElementById("CardDesde15").innerHTML="Na liga desde: "+Rodadas[rodada][254].anoEnt;
  document.getElementById("CardAssumiu15").innerHTML="Assumiu o clube na "+Rodadas[rodada][238][64]+"ªrod. de "+Rodadas[rodada][238][65];
  document.getElementById("CardTitulos15_1").innerHTML=Rodadas[rodada][254].titulo1;
  document.getElementById("CardTitulos15_2").innerHTML=Rodadas[rodada][254].titulo2;
  document.getElementById("CardTitulos15_3").innerHTML=Rodadas[rodada][254].titulo3;
  document.getElementById("CardTitulos15_4").innerHTML=Rodadas[rodada][254].titulo4;
  document.getElementById("CardTitulos15_5").innerHTML=Rodadas[rodada][254].titulo5;
  document.getElementById("CardTitulos15_6").innerHTML=Rodadas[rodada][254].titulo6;
  document.getElementById("CardTitulos15_7").innerHTML=Rodadas[rodada][254].titulo7;
  document.getElementById("CardTitulos15_8").innerHTML=Rodadas[rodada][254].titulo8;
  document.getElementById("CardTitulos15_9").innerHTML=Rodadas[rodada][254].titulo9;
  document.getElementById("CardTitulos15_10").innerHTML=Rodadas[rodada][254].titulo10;

   document.getElementById("CardNomeTec16").innerHTML=Rodadas[rodada][271].nome;
  document.getElementById("CardLogo16").innerHTML=Rodadas[rodada][271].logo;
  document.getElementById("CardLogin16").innerHTML=Rodadas[rodada][271].nomeLogin;
  document.getElementById("CardId16").innerHTML="ID: "+Rodadas[rodada][271].idCart;
  document.getElementById("CardDesde16").innerHTML="Na liga desde: "+Rodadas[rodada][271].anoEnt;
  document.getElementById("CardAssumiu16").innerHTML="Assumiu o clube na "+Rodadas[rodada][255][64]+"ªrod. de "+Rodadas[rodada][255][65];
  document.getElementById("CardTitulos16_1").innerHTML=Rodadas[rodada][271].titulo1;
  document.getElementById("CardTitulos16_2").innerHTML=Rodadas[rodada][271].titulo2;
  document.getElementById("CardTitulos16_3").innerHTML=Rodadas[rodada][271].titulo3;
  document.getElementById("CardTitulos16_4").innerHTML=Rodadas[rodada][271].titulo4;
  document.getElementById("CardTitulos16_5").innerHTML=Rodadas[rodada][271].titulo5;
  document.getElementById("CardTitulos16_6").innerHTML=Rodadas[rodada][271].titulo6;
  document.getElementById("CardTitulos16_7").innerHTML=Rodadas[rodada][271].titulo7;
  document.getElementById("CardTitulos16_8").innerHTML=Rodadas[rodada][271].titulo8;
  document.getElementById("CardTitulos16_9").innerHTML=Rodadas[rodada][271].titulo9;
  document.getElementById("CardTitulos16_10").innerHTML=Rodadas[rodada][271].titulo10;

  document.getElementById("CardNomeTec17").innerHTML=Rodadas[rodada][288].nome;
  document.getElementById("CardLogo17").innerHTML=Rodadas[rodada][288].logo;
  document.getElementById("CardLogin17").innerHTML=Rodadas[rodada][288].nomeLogin;
  document.getElementById("CardId17").innerHTML="ID: "+Rodadas[rodada][288].idCart;
  document.getElementById("CardDesde17").innerHTML="Na liga desde: "+Rodadas[rodada][288].anoEnt;
  document.getElementById("CardAssumiu17").innerHTML="Assumiu o clube na "+Rodadas[rodada][272][64]+"ªrod. de "+Rodadas[rodada][272][65];
  document.getElementById("CardTitulos17_1").innerHTML=Rodadas[rodada][288].titulo1;
  document.getElementById("CardTitulos17_2").innerHTML=Rodadas[rodada][288].titulo2;
  document.getElementById("CardTitulos17_3").innerHTML=Rodadas[rodada][288].titulo3;
  document.getElementById("CardTitulos17_4").innerHTML=Rodadas[rodada][288].titulo4;
  document.getElementById("CardTitulos17_5").innerHTML=Rodadas[rodada][288].titulo5;
  document.getElementById("CardTitulos17_6").innerHTML=Rodadas[rodada][288].titulo6;
  document.getElementById("CardTitulos17_7").innerHTML=Rodadas[rodada][288].titulo7;
  document.getElementById("CardTitulos17_8").innerHTML=Rodadas[rodada][288].titulo8;
  document.getElementById("CardTitulos17_9").innerHTML=Rodadas[rodada][288].titulo9;
  document.getElementById("CardTitulos17_10").innerHTML=Rodadas[rodada][288].titulo10;

  document.getElementById("CardNomeTec18").innerHTML=Rodadas[rodada][305].nome;
  document.getElementById("CardLogo18").innerHTML=Rodadas[rodada][305].logo;
  document.getElementById("CardLogin18").innerHTML=Rodadas[rodada][305].nomeLogin;
  document.getElementById("CardId18").innerHTML="ID: "+Rodadas[rodada][305].idCart;
  document.getElementById("CardDesde18").innerHTML="Na liga desde: "+Rodadas[rodada][305].anoEnt;
  document.getElementById("CardAssumiu18").innerHTML="Assumiu o clube na "+Rodadas[rodada][289][64]+"ªrod. de "+Rodadas[rodada][289][65];
  document.getElementById("CardTitulos18_1").innerHTML=Rodadas[rodada][305].titulo1;
  document.getElementById("CardTitulos18_2").innerHTML=Rodadas[rodada][305].titulo2;
  document.getElementById("CardTitulos18_3").innerHTML=Rodadas[rodada][305].titulo3;
  document.getElementById("CardTitulos18_4").innerHTML=Rodadas[rodada][305].titulo4;
  document.getElementById("CardTitulos18_5").innerHTML=Rodadas[rodada][305].titulo5;
  document.getElementById("CardTitulos18_6").innerHTML=Rodadas[rodada][305].titulo6;
  document.getElementById("CardTitulos18_7").innerHTML=Rodadas[rodada][305].titulo7;
  document.getElementById("CardTitulos18_8").innerHTML=Rodadas[rodada][305].titulo8;
  document.getElementById("CardTitulos18_9").innerHTML=Rodadas[rodada][305].titulo9;
  document.getElementById("CardTitulos18_10").innerHTML=Rodadas[rodada][305].titulo10;

   document.getElementById("CardNomeTec19").innerHTML=Rodadas[rodada][322].nome;
  document.getElementById("CardLogo19").innerHTML=Rodadas[rodada][322].logo;
  document.getElementById("CardLogin19").innerHTML=Rodadas[rodada][322].nomeLogin;
  document.getElementById("CardId19").innerHTML="ID: "+Rodadas[rodada][322].idCart;
  document.getElementById("CardDesde19").innerHTML="Na liga desde: "+Rodadas[rodada][322].anoEnt;
  document.getElementById("CardAssumiu19").innerHTML="Assumiu o clube na "+Rodadas[rodada][306][64]+"ªrod. de "+Rodadas[rodada][306][65];
  document.getElementById("CardTitulos19_1").innerHTML=Rodadas[rodada][322].titulo1;
  document.getElementById("CardTitulos19_2").innerHTML=Rodadas[rodada][322].titulo2;
  document.getElementById("CardTitulos19_3").innerHTML=Rodadas[rodada][322].titulo3;
  document.getElementById("CardTitulos19_4").innerHTML=Rodadas[rodada][322].titulo4;
  document.getElementById("CardTitulos19_5").innerHTML=Rodadas[rodada][322].titulo5;
  document.getElementById("CardTitulos19_6").innerHTML=Rodadas[rodada][322].titulo6;
  document.getElementById("CardTitulos19_7").innerHTML=Rodadas[rodada][322].titulo7;
  document.getElementById("CardTitulos19_8").innerHTML=Rodadas[rodada][322].titulo8;
  document.getElementById("CardTitulos19_9").innerHTML=Rodadas[rodada][322].titulo9;
  document.getElementById("CardTitulos19_10").innerHTML=Rodadas[rodada][322].titulo10;

   document.getElementById("CardNomeTec20").innerHTML=Rodadas[rodada][339].nome;
  document.getElementById("CardLogo20").innerHTML=Rodadas[rodada][339].logo;
  document.getElementById("CardLogin20").innerHTML=Rodadas[rodada][339].nomeLogin;
  document.getElementById("CardId20").innerHTML="ID: "+Rodadas[rodada][339].idCart;
  document.getElementById("CardDesde20").innerHTML="Na liga desde: "+Rodadas[rodada][339].anoEnt;
  document.getElementById("CardAssumiu20").innerHTML="Assumiu o clube na "+Rodadas[rodada][323][64]+"ªrod. de "+Rodadas[rodada][323][65];
  document.getElementById("CardTitulos20_1").innerHTML=Rodadas[rodada][339].titulo1;
  document.getElementById("CardTitulos20_2").innerHTML=Rodadas[rodada][339].titulo2;
  document.getElementById("CardTitulos20_3").innerHTML=Rodadas[rodada][339].titulo3;
  document.getElementById("CardTitulos20_4").innerHTML=Rodadas[rodada][339].titulo4;
  document.getElementById("CardTitulos20_5").innerHTML=Rodadas[rodada][339].titulo5;
  document.getElementById("CardTitulos20_6").innerHTML=Rodadas[rodada][339].titulo6;
  document.getElementById("CardTitulos20_7").innerHTML=Rodadas[rodada][339].titulo7;
  document.getElementById("CardTitulos20_8").innerHTML=Rodadas[rodada][339].titulo8;
  document.getElementById("CardTitulos20_9").innerHTML=Rodadas[rodada][339].titulo9;
  document.getElementById("CardTitulos20_10").innerHTML=Rodadas[rodada][339].titulo10;





}




// PESQUISA CALENDÁRIO*****************************


function pesquisaCalendario() {
  let calendario = parseInt(seletorCalend.value);

  
  document.getElementById("PlacLog1").innerHTML=Calendarios[calendario][0];
  document.getElementById("PlacGol1").innerHTML=Calendarios[calendario][1];
  document.getElementById("PlacTec1").innerHTML=Calendarios[calendario][2].nome;
  document.getElementById("PlacPt1").innerHTML=Calendarios[calendario][3];
  document.getElementById("PlacLog2").innerHTML=Calendarios[calendario][4];
  document.getElementById("PlacGol2").innerHTML=Calendarios[calendario][5];
  document.getElementById("PlacTec2").innerHTML=Calendarios[calendario][6].nome;
  document.getElementById("PlacPt2").innerHTML=Calendarios[calendario][7];

  document.getElementById("PlacLog3").innerHTML=Calendarios[calendario][8];
  document.getElementById("PlacGol3").innerHTML=Calendarios[calendario][9];
  document.getElementById("PlacTec3").innerHTML=Calendarios[calendario][10].nome;
  document.getElementById("PlacPt3").innerHTML=Calendarios[calendario][11];
  document.getElementById("PlacLog4").innerHTML=Calendarios[calendario][12];
  document.getElementById("PlacGol4").innerHTML=Calendarios[calendario][13];
  document.getElementById("PlacTec4").innerHTML=Calendarios[calendario][14].nome;
  document.getElementById("PlacPt4").innerHTML=Calendarios[calendario][15];

  document.getElementById("PlacLog5").innerHTML=Calendarios[calendario][16];
  document.getElementById("PlacGol5").innerHTML=Calendarios[calendario][17];
  document.getElementById("PlacTec5").innerHTML=Calendarios[calendario][18].nome;
  document.getElementById("PlacPt5").innerHTML=Calendarios[calendario][19];
  document.getElementById("PlacLog6").innerHTML=Calendarios[calendario][20];
  document.getElementById("PlacGol6").innerHTML=Calendarios[calendario][21];
  document.getElementById("PlacTec6").innerHTML=Calendarios[calendario][22].nome;
  document.getElementById("PlacPt6").innerHTML=Calendarios[calendario][23];

  document.getElementById("PlacLog7").innerHTML=Calendarios[calendario][24];
  document.getElementById("PlacGol7").innerHTML=Calendarios[calendario][25];
  document.getElementById("PlacTec7").innerHTML=Calendarios[calendario][26].nome;
  document.getElementById("PlacPt7").innerHTML=Calendarios[calendario][27];
  document.getElementById("PlacLog8").innerHTML=Calendarios[calendario][28];
  document.getElementById("PlacGol8").innerHTML=Calendarios[calendario][29];
  document.getElementById("PlacTec8").innerHTML=Calendarios[calendario][30].nome;
  document.getElementById("PlacPt8").innerHTML=Calendarios[calendario][31];

  document.getElementById("PlacLog9").innerHTML=Calendarios[calendario][32];
  document.getElementById("PlacGol9").innerHTML=Calendarios[calendario][33];
  document.getElementById("PlacTec9").innerHTML=Calendarios[calendario][34].nome;
  document.getElementById("PlacPt9").innerHTML=Calendarios[calendario][35];
  document.getElementById("PlacLog10").innerHTML=Calendarios[calendario][36];
  document.getElementById("PlacGol10").innerHTML=Calendarios[calendario][37];
  document.getElementById("PlacTec10").innerHTML=Calendarios[calendario][38].nome;
  document.getElementById("PlacPt10").innerHTML=Calendarios[calendario][39];

  document.getElementById("PlacLog11").innerHTML=Calendarios[calendario][40];
  document.getElementById("PlacGol11").innerHTML=Calendarios[calendario][41];
  document.getElementById("PlacTec11").innerHTML=Calendarios[calendario][42].nome;
  document.getElementById("PlacPt11").innerHTML=Calendarios[calendario][43];
  document.getElementById("PlacLog12").innerHTML=Calendarios[calendario][44];
  document.getElementById("PlacGol12").innerHTML=Calendarios[calendario][45];
  document.getElementById("PlacTec12").innerHTML=Calendarios[calendario][46].nome;
  document.getElementById("PlacPt12").innerHTML=Calendarios[calendario][47];

  document.getElementById("PlacLog13").innerHTML=Calendarios[calendario][48];
  document.getElementById("PlacGol13").innerHTML=Calendarios[calendario][49];
  document.getElementById("PlacTec13").innerHTML=Calendarios[calendario][50].nome;
  document.getElementById("PlacPt13").innerHTML=Calendarios[calendario][51];
  document.getElementById("PlacLog14").innerHTML=Calendarios[calendario][52];
  document.getElementById("PlacGol14").innerHTML=Calendarios[calendario][53];
  document.getElementById("PlacTec14").innerHTML=Calendarios[calendario][54].nome;
  document.getElementById("PlacPt14").innerHTML=Calendarios[calendario][55];

  document.getElementById("PlacLog15").innerHTML=Calendarios[calendario][56];
  document.getElementById("PlacGol15").innerHTML=Calendarios[calendario][57];
  document.getElementById("PlacTec15").innerHTML=Calendarios[calendario][58].nome;
  document.getElementById("PlacPt15").innerHTML=Calendarios[calendario][59];
  document.getElementById("PlacLog16").innerHTML=Calendarios[calendario][60];
  document.getElementById("PlacGol16").innerHTML=Calendarios[calendario][61];
  document.getElementById("PlacTec16").innerHTML=Calendarios[calendario][62].nome;
  document.getElementById("PlacPt16").innerHTML=Calendarios[calendario][63];

  document.getElementById("PlacLog17").innerHTML=Calendarios[calendario][64];
  document.getElementById("PlacGol17").innerHTML=Calendarios[calendario][65];
  document.getElementById("PlacTec17").innerHTML=Calendarios[calendario][66].nome;
  document.getElementById("PlacPt17").innerHTML=Calendarios[calendario][67];
  document.getElementById("PlacLog18").innerHTML=Calendarios[calendario][68];
  document.getElementById("PlacGol18").innerHTML=Calendarios[calendario][69];
  document.getElementById("PlacTec18").innerHTML=Calendarios[calendario][70].nome;
  document.getElementById("PlacPt18").innerHTML=Calendarios[calendario][71];

  document.getElementById("PlacLog19").innerHTML=Calendarios[calendario][72];
  document.getElementById("PlacGol19").innerHTML=Calendarios[calendario][73];
  document.getElementById("PlacTec19").innerHTML=Calendarios[calendario][74].nome;
  document.getElementById("PlacPt19").innerHTML=Calendarios[calendario][75];
  document.getElementById("PlacLog20").innerHTML=Calendarios[calendario][76];
  document.getElementById("PlacGol20").innerHTML=Calendarios[calendario][77];
  document.getElementById("PlacTec20").innerHTML=Calendarios[calendario][78].nome;
  document.getElementById("PlacPt20").innerHTML=Calendarios[calendario][79];

  

alert(Rodadas[rodada][17][65]);

  


}

  ///FUNCTION DO CARDTEC1*****************************************************************



// ABRE O CARDTEC1///////////////////////

function AbreCardTec1() {
  var divTec1 = document.getElementById("cardtec1");
  if (divTec1.style.display === "none") {
    divTec1.style.display = "flex";
  } else {
    divTec1.style.display = "none";
  }
}

// ABRE O CARDTEC2///////////////////////

function AbreCardTec2() {
  var divTec2 = document.getElementById("cardtec2");
  if (divTec2.style.display === "none") {
    divTec2.style.display = "flex";
  } else {
    divTec2.style.display = "none";
  }
}

// ABRE O CARDTEC3///////////////////////

function AbreCardTec3() {
  var divTec3 = document.getElementById("cardtec3");
  if (divTec3.style.display === "none") {
    divTec3.style.display = "flex";
  } else {
    divTec3.style.display = "none";
  }
}

// ABRE O CARDTEC4///////////////////////

function AbreCardTec4() {
  var divTec4 = document.getElementById("cardtec4");
  if (divTec4.style.display === "none") {
    divTec4.style.display = "flex";
  } else {
    divTec4.style.display = "none";
  }
}

// ABRE O CARDTEC5///////////////////////

function AbreCardTec5() {
  var divTec5 = document.getElementById("cardtec5");
  if (divTec5.style.display === "none") {
    divTec5.style.display = "flex";
  } else {
    divTec5.style.display = "none";
  }
}

// ABRE O CARDTEC6///////////////////////

function AbreCardTec6() {
  var divTec6 = document.getElementById("cardtec6");
  if (divTec6.style.display === "none") {
    divTec6.style.display = "flex";
  } else {
    divTec6.style.display = "none";
  }
}

// ABRE O CARDTEC7///////////////////////

function AbreCardTec7() {
  var divTec7 = document.getElementById("cardtec7");
  if (divTec7.style.display === "none") {
    divTec7.style.display = "flex";
  } else {
    divTec7.style.display = "none";
  }
}

// ABRE O CARDTEC8///////////////////////

function AbreCardTec8() {
  var divTec8 = document.getElementById("cardtec8");
  if (divTec8.style.display === "none") {
    divTec8.style.display = "flex";
  } else {
    divTec8.style.display = "none";
  }
}

// ABRE O CARDTEC9///////////////////////

function AbreCardTec9() {
  var divTec9 = document.getElementById("cardtec9");
  if (divTec9.style.display === "none") {
    divTec9.style.display = "flex";
  } else {
    divTec9.style.display = "none";
  }
}

// ABRE O CARDTEC10///////////////////////

function AbreCardTec10() {
  var divTec10 = document.getElementById("cardtec10");
  if (divTec10.style.display === "none") {
    divTec10.style.display = "flex";
  } else {
    divTec10.style.display = "none";
  }
}

// ABRE O CARDTEC6///////////////////////

function AbreCardTec11() {
  var divTec11 = document.getElementById("cardtec11");
  if (divTec11.style.display === "none") {
    divTec11.style.display = "flex";
  } else {
    divTec11.style.display = "none";
  }
}

// ABRE O CARDTEC12///////////////////////

function AbreCardTec12() {
  var divTec12 = document.getElementById("cardtec12");
  if (divTec12.style.display === "none") {
    divTec12.style.display = "flex";
  } else {
    divTec12.style.display = "none";
  }
}

// ABRE O CARDTEC13///////////////////////

function AbreCardTec13() {
  var divTec13 = document.getElementById("cardtec13");
  if (divTec13.style.display === "none") {
    divTec13.style.display = "flex";
  } else {
    divTec13.style.display = "none";
  }
}

// ABRE O CARDTEC14///////////////////////

function AbreCardTec14() {
  var divTec14 = document.getElementById("cardtec14");
  if (divTec14.style.display === "none") {
    divTec14.style.display = "flex";
  } else {
    divTec14.style.display = "none";
  }
}

// ABRE O CARDTEC15///////////////////////

function AbreCardTec15() {
  var divTec15 = document.getElementById("cardtec15");
  if (divTec15.style.display === "none") {
    divTec15.style.display = "flex";
  } else {
    divTec15.style.display = "none";
  }
}

// ABRE O CARDTEC16///////////////////////

function AbreCardTec16() {
  var divTec16 = document.getElementById("cardtec16");
  if (divTec16.style.display === "none") {
    divTec16.style.display = "flex";
  } else {
    divTec16.style.display = "none";
  }
}

// ABRE O CARDTEC17///////////////////////

function AbreCardTec17() {
  var divTec17 = document.getElementById("cardtec17");
  if (divTec17.style.display === "none") {
    divTec17.style.display = "flex";
  } else {
    divTec17.style.display = "none";
  }
}

// ABRE O CARDTEC18///////////////////////

function AbreCardTec18() {
  var divTec18 = document.getElementById("cardtec18");
  if (divTec18.style.display === "none") {
    divTec18.style.display = "flex";
  } else {
    divTec18.style.display = "none";
  }
}

// ABRE O CARDTEC19///////////////////////

function AbreCardTec19() {
  var divTec19 = document.getElementById("cardtec19");
  if (divTec19.style.display === "none") {
    divTec19.style.display = "flex";
  } else {
    divTec19.style.display = "none";
  }
}

// ABRE O CARDTEC20///////////////////////

function AbreCardTec20() {
  var divTec20 = document.getElementById("cardtec20");
  if (divTec20.style.display === "none") {
    divTec20.style.display = "flex";
  } else {
    divTec20.style.display = "none";
  }
}




















