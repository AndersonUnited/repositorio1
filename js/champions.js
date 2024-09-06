

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
  

  let logotec14="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/e7/16/16/005af993eb-3301-44e1-8d70-3a8f8b1882e720230323111616' width='100%'>";
  let logotec102="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/a2/17/14/00d3a36230-2e45-4fa7-b0aa-46fd1238e2a220230320081714' width='100%'>";
  let logotec106="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_223/escudo/75/57/04/0011edef45-3fc9-4f4c-9d17-34c71591597520240404095704' width='100%'>";
  let logotec170="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_210/escudo/c6/53/01/0094b4ce72-27b1-4010-bd3b-cd5faf2e91c620230316115301' width='100%'>";
  let logotec447="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_215/escudo/39/23/14/00a9ec71e0-82a0-492f-9749-102b5df4a03920230414202314' width='100%'>";
  let logotec461="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_183/escudo/a0/25/22/009df9caf1-4b4c-4bd9-a310-4ea5cfd3e4a020210428112522' width='100%'>";
  let logotec481="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_225/escudo/dc/46/05/00416d6933-0ff0-404a-9d5a-30aaf972a1dc20240411234605' width='100%'>";
  let logotec534="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_222/escudo/1b/57/07/00367a3975-b74c-4a86-96f3-1b5f85550f1b20240316105707' width='100%'>";
  let logotec539="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_223/escudo/d0/52/59/00d1a1e589-8485-4570-be0e-02a92632ced020240406095259' width='100%'>";
  let logotec542="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_222/escudo/02/15/57/00b84ab441-7ed5-4688-99bd-1b3f77775b0220240314231557' width='100%'>";
  let logotec544="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_223/escudo/5b/10/24/00e7c5975b-9560-4d5a-802e-c0b1b9b3ce5b20240329121024' width='100%'>";
  let logotec548="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_223/escudo/62/31/56/00405150ef-c4bd-4cd0-b4f5-0f15f8f8c66220240328153156' width='100%'>";
  let logotec568="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_222/escudo/c1/34/59/0094830414-aa5c-44ec-99d3-cf585dda88c120240316133459' width='100%'>";
  let logotec569="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_227/escudo/84/50/18/00f97fa154-e8f2-42dd-ba30-79313e9f5d8420240414095018' width='100%'>";
  let logotec570="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_223/escudo/b1/28/23/00435c6880-5dde-4b28-8ed8-2358989598b120240325152823' width='100%'>";
  let logotec572="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_224/escudo/c1/43/51/0092a5aed3-0485-4e4e-a798-65692d9783c120240409164351' width='100%'>";
  
  
  
  
  
  
  
  
  
  
   /*LOGO DOS CLUBES*/ 
   
   
  let logosemclube="<img src='https://proeleven.pt/uploads/clubs/semclube.png' width='100%''>";
  let logoajax="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/WIAAdPpdzFwVKU7maFvJ6w_96x96.png' width='100%'>";
  let logoarsenal="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/4us2nCgl6kgZc0t3hpW75Q_96x96.png' width='100%'>";
  let logoatleticomadrid="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/srAAE0bOnCppUrlbJpFiHQ_96x96.png' width='100%'>";
  let logobarcelona="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/paYnEE8hcrP96neHRNofhQ_96x96.png' width='100%'>";
  let logobayernmunich="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/-_cmntP5q_pHL7g5LfkRiw_96x96.png' width='100%'>";
  let logoborrusiadortmund="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/FZnTSH2rbHFos4BnlWAItw_96x96.png' width='100%'>";
  let logochelsea="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/fhBITrIlbQxhVB6IjxUO6Q_96x96.png' width='100%'>";
  let logointermilan="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/l2-icwsMhIvsbRw8AwC1yg_96x96.png' width='100%'>";
  let logojuventusturin="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/6lal-0xwWtos5HI99HRvuQ_96x96.png' width='100%'>";
  let logoliverpoolfc="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/0iShHhASp5q1SL4JhtwJiw_96x96.png' width='100%'>";
  let logomanchestercity="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/z44l-a0W1v5FmgPnemV6Xw_96x96.png' width='100%'>";
  let logomanchesterunited="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/udQ6ns69PctCv143h-GeYw_96x96.png' width='100%'>";
  let logomilan="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/VoKsJ6RitaHGhsM62e6AXQ_96x96.png' width='100%'>";
  let logoparis="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/mcpMspef1hwHwi9qrfp4YQ_96x96.png' width='100%'>";
  let logorealmadrid="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/Th4fAVAZeCJWRcKoLW7koA_96x96.png' width='100%'>";
  let logotottenham="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/k3Q_mKE98Dnohrcea0JFgQ_96x96.png' width='100%'>";
 

 

  
  /**CLUBES**/  var semclube={nome:'sem clube',logo:logosemclube,nivel:'citadino',uf:'RS',estadual:'RS2',div:' ',rodingr:'1',obj:'0'};
  
let ajax=['Ajax Amsterdam',logoajax,'FALSO','HOL','24','2024',,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','',''];
let arsenal=['Arsenal',logoarsenal,'FALSO','ING','24','2024',,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','',''];
let atleticomadrid=['Atlético Madrid',logoatleticomadrid,'FALSO','ESP','24','2024',,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','',''];
let barcelona=['Barcelona',logobarcelona,'FALSO','ESP','24','2024',,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','',''];
let bayernmunich=['Bayern Munich',logobayernmunich,'FALSO','ALE','24','2024',,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','',''];
let borrusiadortmund=['Borrusia Dortmund',logoborrusiadortmund,'FALSO','ALE','24','2024',,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','',''];
let chelsea=['Chelsea',logochelsea,'FALSO','ING','24','2024',,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','',''];
let intermilan=['Inter Milan',logointermilan,'FALSO','ITA','24','2024',,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','',''];
let juventusturin=['Juventus Turin',logojuventusturin,'FALSO','ITA','24','2024',,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','',''];
let liverpoolfc=['Liverpool FC',logoliverpoolfc,'FALSO','ING','24','2024',,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','',''];
let manchestercity=['Manchester City',logomanchestercity,'FALSO','ING','24','2024',,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','',''];
let manchesterunited=['Manchester United',logomanchesterunited,'FALSO','ING','24','2024',,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','',''];
let milan=['Milan AC',logomilan,'FALSO','ITA','24','2024',,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','',''];
let paris=['Paris-SG',logoparis,'FALSO','FRA','24','2024',,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','',''];
let realmadrid=['Real Madrid',logorealmadrid,'FALSO','ESP','24','2024',,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','',''];
let tottenham=['Tottenham Hotspur',logotottenham,'FALSO','ING','24','2024',,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','',''];


 
  
  
 
  
  
  /**TECNICOS**/
  let tec14={idCart:8606472,nome:'Anderson United',nomeLogin:'ANDERSON NUNES',nomePess:'opcional',anoEnt:2017,logo:logotec14,ClubAtual:manchesterunited,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec102={idCart:2705540,nome:'LUIAN SPORTING CLUB',nomeLogin:'Luian Martins',nomePess:'opcional',anoEnt:2021,logo:logotec102,ClubAtual:barcelona,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec106={idCart:303336,nome:'MarceloGebing F.C',nomeLogin:'MARCELO GEBING',nomePess:'opcional',anoEnt:2021,logo:logotec106,ClubAtual:manchestercity,titulo1:'Gaúcho 2023 (Brasil)',titulo2:'Série B 2023 (Atlético-GO)',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec170={idCart:7876526,nome:'SER  XANTOSKA',nomeLogin:'ECHARTÊA - SVP',nomePess:'opcional',anoEnt:2017,logo:logotec170,ClubAtual:borrusiadortmund,titulo1:'Sulamericana 2022',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec447={idCart:317063,nome:'S P A L',nomeLogin:'Gabriel Olinto',nomePess:'opcional',anoEnt:2024,logo:logotec447,ClubAtual:liverpoolfc,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec461={idCart:28657300,nome:'Azular FC',nomeLogin:'Marcela Zanatta',nomePess:'opcional',anoEnt:2024,logo:logotec461,ClubAtual:bayernmunich,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec481={idCart:13982371,nome:'Milaneros',nomeLogin:'Allan Milan',nomePess:'opcional',anoEnt:2024,logo:logotec481,ClubAtual:milan,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec534={idCart:13954201,nome:'PROF_WILL FC',nomeLogin:'William Silva',nomePess:'opcional',anoEnt:2024,logo:logotec534,ClubAtual:realmadrid,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec539={idCart:8499452,nome:'UGAO F.C.',nomeLogin:'Ugo Oliveira',nomePess:'opcional',anoEnt:2024,logo:logotec539,ClubAtual:ajax,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec542={idCart:100756,nome:'Palestra Fox ',nomeLogin:'Paulo Abreu',nomePess:'opcional',anoEnt:2024,logo:logotec542,ClubAtual:juventusturin,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec544={idCart:22602986,nome:'Colchonero BH',nomeLogin:'Paulo Abreu',nomePess:'opcional',anoEnt:2024,logo:logotec544,ClubAtual:chelsea,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec548={idCart:651064,nome:'Cearúcho FC',nomeLogin:'Joao Santos',nomePess:'opcional',anoEnt:2024,logo:logotec548,ClubAtual:intermilan,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec568={idCart:14422122,nome:'JULIAN REINA',nomeLogin:'JULIAN R M REINA',nomePess:'opcional',anoEnt:2024,logo:logotec568,ClubAtual:arsenal,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec569={idCart:25985665,nome:'BRURUSSIA DORTMUND',nomeLogin:'eonardo bruning',nomePess:'opcional',anoEnt:2024,logo:logotec569,ClubAtual:tottenham,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec570={idCart:2777692,nome:'XEIROSO FC',nomeLogin:'Wesley',nomePess:'opcional',anoEnt:2024,logo:logotec570,ClubAtual:atleticomadrid,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec572={idCart:14033354,nome:'VMRB',nomeLogin:'Vanessa Munhoz',nomePess:'opcional',anoEnt:2024,logo:logotec572,ClubAtual:paris,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
      
 

  
  let Grupo_A=[logomilan,milan,'4','1','1','0','6','5',tec481,logoliverpoolfc,liverpoolfc,'2','0','2','0','6','6',tec447,logorealmadrid,realmadrid,'2','0','2','0','6','6',tec534,logomanchestercity,manchestercity,'1','0','1','1','5','6',tec106];
  let jogos_A=[logoliverpoolfc,'Liverpool FC','(104,09)','5','5','(110)','Manchester City',logomanchestercity,logomilan,'Milan AC','(122,7)','5','5','(122,8)','Real Madrid',logorealmadrid,logomanchestercity,'Manchester City','(52,52)','0','1','(69,22)','Milan AC',logomilan,logorealmadrid,'Real Madrid','(67,27)','1','1','(66,64)','Liverpool FC',logoliverpoolfc,logomanchestercity,'Manchester City','(0)','-','-','(0)','Real Madrid',logorealmadrid,logoliverpoolfc,'Liverpool FC','(0)','-','-','(0)','Milan AC',logomilan,logorealmadrid,'Real Madrid','(0)','-','-','(0)','Manchester City',logomanchestercity,logomilan,'Milan AC','(0)','-','-','(0)','Liverpool FC',logoliverpoolfc,logomilan,'Milan AC','(0)','-','-','(0)','Manchester City',logomanchestercity,logoliverpoolfc,'Liverpool FC','(0)','-','-','(0)','Real Madrid',logorealmadrid,logomanchestercity,'Manchester City','(0)','-','-','(0)','Liverpool FC',logoliverpoolfc,logorealmadrid,'Real Madrid','(0)','-','-','(0)','Milan AC',logomilan,];
  
  let Grupo_B=[logojuventusturin,juventusturin,'6','2','0','0','7','4',tec542,logoarsenal,arsenal,'4','1','1','0','6','5',tec568,logobarcelona,barcelona,'1','0','1','1','6','7',tec102,logotottenham,tottenham,'0','0','0','2','3','6',tec569];
  let jogos_B=[logoarsenal,'Arsenal','(125,7)','5','5','(120,5)','Barcelona',logobarcelona,logojuventusturin,'Juventus Turin','(104,5)','5','3','(83,14)','Tottenham Hotspur',logotottenham,logobarcelona,'Barcelona','(64,77)','1','2','(71,22)','Juventus Turin',logojuventusturin,logotottenham,'Tottenham Hotspur','(56,05)','0','1','(61,17)','Arsenal',logoarsenal,logobarcelona,'Barcelona','(0)','-','-','(0)','Tottenham Hotspur',logotottenham,logoarsenal,'Arsenal','(0)','-','-','(0)','Juventus Turin',logojuventusturin,logotottenham,'Tottenham Hotspur','(0)','-','-','(0)','Barcelona',logobarcelona,logojuventusturin,'Juventus Turin','(0)','-','-','(0)','Arsenal',logoarsenal,logojuventusturin,'Juventus Turin','(0)','-','-','(0)','Barcelona',logobarcelona,logoarsenal,'Arsenal','(0)','-','-','(0)','Tottenham Hotspur',logotottenham,logobarcelona,'Barcelona','(0)','-','-','(0)','Arsenal',logoarsenal,logotottenham,'Tottenham Hotspur','(0)','-','-','(0)','Juventus Turin',logojuventusturin,];
  
  let Grupo_C=[logoborrusiadortmund,borrusiadortmund,'4','1','1','0','6','5',tec170,logointermilan,intermilan,'4','1','1','0','6','5',tec548,logoatleticomadrid,atleticomadrid,'1','0','1','1','6','7',tec570,logomanchesterunited,manchesterunited,'1','0','1','1','6','7',tec14];
  let jogos_C=[logoatleticomadrid,'Atlético Madrid','(113,5)','4','5','(126,5)','Borrusia Dortmund',logoborrusiadortmund,logointermilan,'Inter Milan','(116,3)','5','4','(101,1)','Manchester United',logomanchesterunited,logoborrusiadortmund,'Borrusia Dortmund','(63,52)','1','1','(67,32)','Inter Milan',logointermilan,logomanchesterunited,'Manchester United','(76,27)','2','2','(71,82)','Atlético Madrid',logoatleticomadrid,logoborrusiadortmund,'Borrusia Dortmund','(0)','-','-','(0)','Manchester United',logomanchesterunited,logoatleticomadrid,'Atlético Madrid','(0)','-','-','(0)','Inter Milan',logointermilan,logomanchesterunited,'Manchester United','(0)','-','-','(0)','Borrusia Dortmund',logoborrusiadortmund,logointermilan,'Inter Milan','(0)','-','-','(0)','Atlético Madrid',logoatleticomadrid,logointermilan,'Inter Milan','(0)','-','-','(0)','Borrusia Dortmund',logoborrusiadortmund,logoatleticomadrid,'Atlético Madrid','(0)','-','-','(0)','Manchester United',logomanchesterunited,logoborrusiadortmund,'Borrusia Dortmund','(0)','-','-','(0)','Atlético Madrid',logoatleticomadrid,logomanchesterunited,'Manchester United','(0)','-','-','(0)','Inter Milan',logointermilan,];
  
  let Grupo_D=[logoajax,ajax,'6','2','0','0','6','2',tec539,logochelsea,chelsea,'6','2','0','0','7','4',tec544,logoparis,paris,'0','0','0','2','5','7',tec572,logobayernmunich,bayernmunich,'0','0','0','2','1','6',tec461];
  let jogos_D=[logoajax,'Ajax Amsterdam','(96,3)','4','1','(67,64)','Bayern Munich',logobayernmunich,logochelsea,'Chelsea','(129)','5','4','(113,3)','Paris-SG',logoparis,logobayernmunich,'Bayern Munich','(55,47)','0','2','(79,72)','Chelsea',logochelsea,logoparis,'Paris-SG','(60,37)','1','2','(79,57)','Ajax Amsterdam',logoajax,logobayernmunich,'Bayern Munich','(0)','-','-','(0)','Paris-SG',logoparis,logoajax,'Ajax Amsterdam','(0)','-','-','(0)','Chelsea',logochelsea,logoparis,'Paris-SG','(0)','-','-','(0)','Bayern Munich',logobayernmunich,logochelsea,'Chelsea','(0)','-','-','(0)','Ajax Amsterdam',logoajax,logochelsea,'Chelsea','(0)','-','-','(0)','Bayern Munich',logobayernmunich,logoajax,'Ajax Amsterdam','(0)','-','-','(0)','Paris-SG',logoparis,logobayernmunich,'Bayern Munich','(0)','-','-','(0)','Ajax Amsterdam',logoajax,logoparis,'Paris-SG','(0)','-','-','(0)','Chelsea',logochelsea,];
  
    
  
  
  
  

  
  
  
  
  

  
  
  
  
  
  
  //**ATUALIZAÇÕES DA RODADA*****************
    



  document.getElementById('logclass1').innerHTML=Grupo_A[0];
  document.getElementById('club1').innerHTML=Grupo_A[1][0];
  document.getElementById('pt1').innerHTML=Grupo_A[2];
  document.getElementById('vit1').innerHTML=Grupo_A[3];
  document.getElementById('emp1').innerHTML=Grupo_A[4];
  document.getElementById('der1').innerHTML=Grupo_A[5];
  document.getElementById('gp1').innerHTML=Grupo_A[6];
  document.getElementById('gc1').innerHTML=Grupo_A[7];
  document.getElementById('sd1').innerHTML=Grupo_A[6]-Grupo_A[7];
  document.getElementById('tec1').innerHTML=Grupo_A[8].logo;

  document.getElementById('logclass2').innerHTML=Grupo_A[9];
  document.getElementById('club2').innerHTML=Grupo_A[10][0];
  document.getElementById('pt2').innerHTML=Grupo_A[11];
  document.getElementById('vit2').innerHTML=Grupo_A[12];
  document.getElementById('emp2').innerHTML=Grupo_A[13];
  document.getElementById('der2').innerHTML=Grupo_A[14];
  document.getElementById('gp2').innerHTML=Grupo_A[15];
  document.getElementById('gc2').innerHTML=Grupo_A[16];
  document.getElementById('sd2').innerHTML=Grupo_A[15]-Grupo_A[16];
  document.getElementById('tec2').innerHTML=Grupo_A[17].logo;

  document.getElementById('logclass3').innerHTML=Grupo_A[18];
  document.getElementById('club3').innerHTML=Grupo_A[19][0];
  document.getElementById('pt3').innerHTML=Grupo_A[20];
  document.getElementById('vit3').innerHTML=Grupo_A[21];
  document.getElementById('emp3').innerHTML=Grupo_A[22];
  document.getElementById('der3').innerHTML=Grupo_A[23];
  document.getElementById('gp3').innerHTML=Grupo_A[24];
  document.getElementById('gc3').innerHTML=Grupo_A[25];
  document.getElementById('sd3').innerHTML=Grupo_A[24]-Grupo_A[25];
  document.getElementById('tec3').innerHTML=Grupo_A[26].logo;

  document.getElementById('logclass4').innerHTML=Grupo_A[27];
  document.getElementById('club4').innerHTML=Grupo_A[28][0];
  document.getElementById('pt4').innerHTML=Grupo_A[29];
  document.getElementById('vit4').innerHTML=Grupo_A[30];
  document.getElementById('emp4').innerHTML=Grupo_A[31];
  document.getElementById('der4').innerHTML=Grupo_A[32];
  document.getElementById('gp4').innerHTML=Grupo_A[33];
  document.getElementById('gc4').innerHTML=Grupo_A[34];
  document.getElementById('sd4').innerHTML=Grupo_A[33]-Grupo_A[34];
  document.getElementById('tec4').innerHTML=Grupo_A[35].logo;

  document.getElementById('logtime1').innerHTML=jogos_A[0];
  document.getElementById('nometime1').innerHTML=jogos_A[1];
  document.getElementById('pntstime1').innerHTML=jogos_A[2];
  document.getElementById('golstime1').innerHTML=jogos_A[3];
  document.getElementById('golstime2').innerHTML=jogos_A[4];
  document.getElementById('pntstime2').innerHTML=jogos_A[5];
  document.getElementById('nometime2').innerHTML=jogos_A[6];
  document.getElementById('logtime2').innerHTML=jogos_A[7];
  document.getElementById('logtime3').innerHTML=jogos_A[8];
  document.getElementById('nometime3').innerHTML=jogos_A[9];
  document.getElementById('pntstime3').innerHTML=jogos_A[10];
  document.getElementById('golstime3').innerHTML=jogos_A[11];
  document.getElementById('golstime4').innerHTML=jogos_A[12];
  document.getElementById('pntstime4').innerHTML=jogos_A[13];
  document.getElementById('nometime4').innerHTML=jogos_A[14];
  document.getElementById('logtime4').innerHTML=jogos_A[15];
  document.getElementById('logtime5').innerHTML=jogos_A[16];
  document.getElementById('nometime5').innerHTML=jogos_A[17];
  document.getElementById('pntstime5').innerHTML=jogos_A[18];
  document.getElementById('golstime5').innerHTML=jogos_A[19];
  document.getElementById('golstime6').innerHTML=jogos_A[20];
  document.getElementById('pntstime6').innerHTML=jogos_A[21];
  document.getElementById('nometime6').innerHTML=jogos_A[22];
  document.getElementById('logtime6').innerHTML=jogos_A[23];
  document.getElementById('logtime7').innerHTML=jogos_A[24];
  document.getElementById('nometime7').innerHTML=jogos_A[25];
  document.getElementById('pntstime7').innerHTML=jogos_A[26];
  document.getElementById('golstime7').innerHTML=jogos_A[27];
  document.getElementById('golstime8').innerHTML=jogos_A[28];
  document.getElementById('pntstime8').innerHTML=jogos_A[29];
  document.getElementById('nometime8').innerHTML=jogos_A[30];
  document.getElementById('logtime8').innerHTML=jogos_A[31];
  document.getElementById('logtime9').innerHTML=jogos_A[32];
  document.getElementById('nometime9').innerHTML=jogos_A[33];
  document.getElementById('pntstime9').innerHTML=jogos_A[34];
  document.getElementById('golstime9').innerHTML=jogos_A[35];
  document.getElementById('golstime10').innerHTML=jogos_A[36];
  document.getElementById('pntstime10').innerHTML=jogos_A[37];
  document.getElementById('nometime10').innerHTML=jogos_A[38];
  document.getElementById('logtime10').innerHTML=jogos_A[39];
  document.getElementById('logtime11').innerHTML=jogos_A[40];
  document.getElementById('nometime11').innerHTML=jogos_A[41];
  document.getElementById('pntstime11').innerHTML=jogos_A[42];
  document.getElementById('golstime11').innerHTML=jogos_A[43];
  document.getElementById('golstime12').innerHTML=jogos_A[44];
  document.getElementById('pntstime12').innerHTML=jogos_A[45];
  document.getElementById('nometime12').innerHTML=jogos_A[46];
  document.getElementById('logtime12').innerHTML=jogos_A[47];
  document.getElementById('logtime13').innerHTML=jogos_A[48];
  document.getElementById('nometime13').innerHTML=jogos_A[49];
  document.getElementById('pntstime13').innerHTML=jogos_A[50];
  document.getElementById('golstime13').innerHTML=jogos_A[51];
  document.getElementById('golstime14').innerHTML=jogos_A[52];
  document.getElementById('pntstime14').innerHTML=jogos_A[53];
  document.getElementById('nometime14').innerHTML=jogos_A[54];
  document.getElementById('logtime14').innerHTML=jogos_A[55];
  document.getElementById('logtime15').innerHTML=jogos_A[56];
  document.getElementById('nometime15').innerHTML=jogos_A[57];
  document.getElementById('pntstime15').innerHTML=jogos_A[58];
  document.getElementById('golstime15').innerHTML=jogos_A[59];
  document.getElementById('golstime16').innerHTML=jogos_A[60];
  document.getElementById('pntstime16').innerHTML=jogos_A[61];
  document.getElementById('nometime16').innerHTML=jogos_A[62];
  document.getElementById('logtime16').innerHTML=jogos_A[63];
  document.getElementById('logtime17').innerHTML=jogos_A[64];
  document.getElementById('nometime17').innerHTML=jogos_A[65];
  document.getElementById('pntstime17').innerHTML=jogos_A[66];
  document.getElementById('golstime17').innerHTML=jogos_A[67];
  document.getElementById('golstime18').innerHTML=jogos_A[68];
  document.getElementById('pntstime18').innerHTML=jogos_A[69];
  document.getElementById('nometime18').innerHTML=jogos_A[70];
  document.getElementById('logtime18').innerHTML=jogos_A[71];
  document.getElementById('logtime19').innerHTML=jogos_A[72];
  document.getElementById('nometime19').innerHTML=jogos_A[73];
  document.getElementById('pntstime19').innerHTML=jogos_A[74];
  document.getElementById('golstime19').innerHTML=jogos_A[75];
  document.getElementById('golstime20').innerHTML=jogos_A[76];
  document.getElementById('pntstime20').innerHTML=jogos_A[77];
  document.getElementById('nometime20').innerHTML=jogos_A[78];
  document.getElementById('logtime20').innerHTML=jogos_A[79];
  document.getElementById('logtime21').innerHTML=jogos_A[80];
  document.getElementById('nometime21').innerHTML=jogos_A[81];
  document.getElementById('pntstime21').innerHTML=jogos_A[82];
  document.getElementById('golstime21').innerHTML=jogos_A[83];
  document.getElementById('golstime22').innerHTML=jogos_A[84];
  document.getElementById('pntstime22').innerHTML=jogos_A[85];
  document.getElementById('nometime22').innerHTML=jogos_A[86];
  document.getElementById('logtime22').innerHTML=jogos_A[87];
  document.getElementById('logtime23').innerHTML=jogos_A[88];
  document.getElementById('nometime23').innerHTML=jogos_A[89];
  document.getElementById('pntstime23').innerHTML=jogos_A[90];
  document.getElementById('golstime23').innerHTML=jogos_A[91];
  document.getElementById('golstime24').innerHTML=jogos_A[92];
  document.getElementById('pntstime24').innerHTML=jogos_A[93];
  document.getElementById('nometime24').innerHTML=jogos_A[94];
  document.getElementById('logtime24').innerHTML=jogos_A[95];


/**CARD DO TÉCNICOS */


document.getElementById("CardNomeTec1").innerHTML=Grupo_A[8].nome;
document.getElementById("CardLogo1").innerHTML=Grupo_A[8].logo;
document.getElementById("CardLogin1").innerHTML=Grupo_A[8].nomeLogin;
document.getElementById("CardId1").innerHTML="Id: "+Grupo_A[8].idCart;
document.getElementById("CardDesde1").innerHTML="Liga Rep: "+Grupo_A[1][10];
document.getElementById("CarMoral1").innerHTML='Participações: '+Grupo_A[1][11];
document.getElementById("CardAssumiu1").innerHTML="Assumiu o clube na "+Grupo_A[1][64]+"ªrod. de "+Grupo_A[1][65];
document.getElementById("CardTitulos1_1").innerHTML=Grupo_A[8].titulo1;;
document.getElementById("CardTitulos1_2").innerHTML=Grupo_A[8].titulo2;
document.getElementById("CardTitulos1_3").innerHTML=Grupo_A[8].titulo3;
document.getElementById("CardTitulos1_4").innerHTML=Grupo_A[8].titulo4;
document.getElementById("CardTitulos1_5").innerHTML=Grupo_A[8].titulo5;
document.getElementById("CardTitulos1_6").innerHTML=Grupo_A[8].titulo6;
document.getElementById("CardTitulos1_7").innerHTML=Grupo_A[8].titulo7;
document.getElementById("CardTitulos1_8").innerHTML=Grupo_A[8].titulo8;
document.getElementById("CardTitulos1_9").innerHTML=Grupo_A[8].titulo9;
document.getElementById("CardTitulos1_10").innerHTML=Grupo_A[8].titulo10;

document.getElementById("CardNomeTec2").innerHTML=Grupo_A[17].nome;
document.getElementById("CardLogo2").innerHTML=Grupo_A[17].logo;
document.getElementById("CardLogin2").innerHTML=Grupo_A[17].nomeLogin;
document.getElementById("CardId2").innerHTML="Id: "+Grupo_A[17].idCart;
document.getElementById("CardDesde2").innerHTML="Liga Rep: "+Grupo_A[10][10];
document.getElementById("CarMoral2").innerHTML='Participações: '+Grupo_A[10][11];
document.getElementById("CardAssumiu2").innerHTML="Assumiu o clube na "+Grupo_A[10][64]+"ªrod. de "+Grupo_A[10][65];
document.getElementById("CardTitulos2_1").innerHTML=Grupo_A[17].titulo1;
document.getElementById("CardTitulos2_2").innerHTML=Grupo_A[17].título2;
document.getElementById("CardTitulos2_3").innerHTML=Grupo_A[17].titulo3;
document.getElementById("CardTitulos2_4").innerHTML=Grupo_A[17].titulo4;
document.getElementById("CardTitulos2_5").innerHTML=Grupo_A[17].titulo5;
document.getElementById("CardTitulos2_6").innerHTML=Grupo_A[17].titulo6;
document.getElementById("CardTitulos2_7").innerHTML=Grupo_A[17].titulo7;
document.getElementById("CardTitulos2_8").innerHTML=Grupo_A[17].titulo8;
document.getElementById("CardTitulos2_9").innerHTML=Grupo_A[17].titulo9;
document.getElementById("CardTitulos2_10").innerHTML=Grupo_A[17].titulo10;


document.getElementById("CardNomeTec3").innerHTML=Grupo_A[26].nome;
document.getElementById("CardLogo3").innerHTML=Grupo_A[26].logo;
document.getElementById("CardLogin3").innerHTML="Login: "+Grupo_A[26].nomeLogin;
document.getElementById("CardId3").innerHTML="Id: "+Grupo_A[26].idCart;
document.getElementById("CardDesde3").innerHTML="Liga Rep: "+Grupo_A[19][10];
document.getElementById("CarMoral3").innerHTML='Participações: '+Grupo_A[19][11];
document.getElementById("CardAssumiu3").innerHTML="Assumiu o clube na JJ "+Grupo_A[19][64]+"ªrod. de "+Grupo_A[19][65];
document.getElementById("CardTitulos3_1").innerHTML=Grupo_A[26].titulo1;
document.getElementById("CardTitulos3_2").innerHTML=Grupo_A[26].titulo2;
document.getElementById("CardTitulos3_3").innerHTML=Grupo_A[26].titulo3;
document.getElementById("CardTitulos3_4").innerHTML=Grupo_A[26].titulo4;
document.getElementById("CardTitulos3_5").innerHTML=Grupo_A[26].titulo5;
document.getElementById("CardTitulos3_6").innerHTML=Grupo_A[26].titulo6;
document.getElementById("CardTitulos3_7").innerHTML=Grupo_A[26].titulo7;
document.getElementById("CardTitulos3_8").innerHTML=Grupo_A[26].titulo8;
document.getElementById("CardTitulos3_9").innerHTML=Grupo_A[26].titulo9;
document.getElementById("CardTitulos3_10").innerHTML=Grupo_A[26].titulo10;

document.getElementById("CardNomeTec4").innerHTML=Grupo_A[35].nome;
document.getElementById("CardLogo4").innerHTML=Grupo_A[35].logo;
document.getElementById("CardLogin4").innerHTML="Login: "+Grupo_A[35].nomeLogin;
document.getElementById("CardId4").innerHTML="Id: "+Grupo_A[35].idCart;
document.getElementById("CardDesde4").innerHTML="Liga Rep: "+Grupo_A[28][10];
document.getElementById("CarMoral4").innerHTML='Participações: '+Grupo_A[28][11];
document.getElementById("CardAssumiu3").innerHTML="Assumiu o clube na "+Grupo_A[28][64]+"ªrod. de "+Grupo_A[28][65];
document.getElementById("CardTitulos4_1").innerHTML=Grupo_A[35].titulo1;
document.getElementById("CardTitulos4_2").innerHTML=Grupo_A[35].titulo2;
document.getElementById("CardTitulos4_3").innerHTML=Grupo_A[35].titulo3;
document.getElementById("CardTitulos4_4").innerHTML=Grupo_A[35].titulo4;
document.getElementById("CardTitulos4_5").innerHTML=Grupo_A[35].titulo5;
document.getElementById("CardTitulos4_6").innerHTML=Grupo_A[35].titulo6;
document.getElementById("CardTitulos4_7").innerHTML=Grupo_A[35].titulo7;
document.getElementById("CardTitulos4_8").innerHTML=Grupo_A[35].titulo8;
document.getElementById("CardTitulos4_9").innerHTML=Grupo_A[35].titulo9;
document.getElementById("CardTitulos4_10").innerHTML=Grupo_A[35].titulo10;

        
    

  function GrupoEscolhido() {
    let PegaGrupo = document.querySelector('#NomeGrupo');

    let CampEscolhido = PegaGrupo.value;


    if (CampEscolhido==='Grupo_A'){





      document.getElementById('logclass1').innerHTML=Grupo_A[0];
      document.getElementById('club1').innerHTML=Grupo_A[1][0];
      document.getElementById('pt1').innerHTML=Grupo_A[2];
      document.getElementById('vit1').innerHTML=Grupo_A[3];
      document.getElementById('emp1').innerHTML=Grupo_A[4];
      document.getElementById('der1').innerHTML=Grupo_A[5];
      document.getElementById('gp1').innerHTML=Grupo_A[6];
      document.getElementById('gc1').innerHTML=Grupo_A[7];
      document.getElementById('sd1').innerHTML=Grupo_A[6]-Grupo_A[7];
      document.getElementById('tec1').innerHTML=Grupo_A[8].logo;
    
      document.getElementById('logclass2').innerHTML=Grupo_A[9];
      document.getElementById('club2').innerHTML=Grupo_A[10][0];
      document.getElementById('pt2').innerHTML=Grupo_A[11];
      document.getElementById('vit2').innerHTML=Grupo_A[12];
      document.getElementById('emp2').innerHTML=Grupo_A[13];
      document.getElementById('der2').innerHTML=Grupo_A[14];
      document.getElementById('gp2').innerHTML=Grupo_A[15];
      document.getElementById('gc2').innerHTML=Grupo_A[16];
      document.getElementById('sd2').innerHTML=Grupo_A[15]-Grupo_A[16];
      document.getElementById('tec2').innerHTML=Grupo_A[17].logo;
    
      document.getElementById('logclass3').innerHTML=Grupo_A[18];
      document.getElementById('club3').innerHTML=Grupo_A[19][0];
      document.getElementById('pt3').innerHTML=Grupo_A[20];
      document.getElementById('vit3').innerHTML=Grupo_A[21];
      document.getElementById('emp3').innerHTML=Grupo_A[22];
      document.getElementById('der3').innerHTML=Grupo_A[23];
      document.getElementById('gp3').innerHTML=Grupo_A[24];
      document.getElementById('gc3').innerHTML=Grupo_A[25];
      document.getElementById('sd3').innerHTML=Grupo_A[24]-Grupo_A[25];
      document.getElementById('tec3').innerHTML=Grupo_A[26].logo;
    
      document.getElementById('logclass4').innerHTML=Grupo_A[27];
      document.getElementById('club4').innerHTML=Grupo_A[28][0];
      document.getElementById('pt4').innerHTML=Grupo_A[29];
      document.getElementById('vit4').innerHTML=Grupo_A[30];
      document.getElementById('emp4').innerHTML=Grupo_A[31];
      document.getElementById('der4').innerHTML=Grupo_A[32];
      document.getElementById('gp4').innerHTML=Grupo_A[33];
      document.getElementById('gc4').innerHTML=Grupo_A[34];
      document.getElementById('sd4').innerHTML=Grupo_A[33]-Grupo_A[34];
      document.getElementById('tec4').innerHTML=Grupo_A[35].logo;
    
      document.getElementById('logtime1').innerHTML=jogos_A[0];
      document.getElementById('nometime1').innerHTML=jogos_A[1];
      document.getElementById('pntstime1').innerHTML=jogos_A[2];
      document.getElementById('golstime1').innerHTML=jogos_A[3];
      document.getElementById('golstime2').innerHTML=jogos_A[4];
      document.getElementById('pntstime2').innerHTML=jogos_A[5];
      document.getElementById('nometime2').innerHTML=jogos_A[6];
      document.getElementById('logtime2').innerHTML=jogos_A[7];
      document.getElementById('logtime3').innerHTML=jogos_A[8];
      document.getElementById('nometime3').innerHTML=jogos_A[9];
      document.getElementById('pntstime3').innerHTML=jogos_A[10];
      document.getElementById('golstime3').innerHTML=jogos_A[11];
      document.getElementById('golstime4').innerHTML=jogos_A[12];
      document.getElementById('pntstime4').innerHTML=jogos_A[13];
      document.getElementById('nometime4').innerHTML=jogos_A[14];
      document.getElementById('logtime4').innerHTML=jogos_A[15];
      document.getElementById('logtime5').innerHTML=jogos_A[16];
      document.getElementById('nometime5').innerHTML=jogos_A[17];
      document.getElementById('pntstime5').innerHTML=jogos_A[18];
      document.getElementById('golstime5').innerHTML=jogos_A[19];
      document.getElementById('golstime6').innerHTML=jogos_A[20];
      document.getElementById('pntstime6').innerHTML=jogos_A[21];
      document.getElementById('nometime6').innerHTML=jogos_A[22];
      document.getElementById('logtime6').innerHTML=jogos_A[23];
      document.getElementById('logtime7').innerHTML=jogos_A[24];
      document.getElementById('nometime7').innerHTML=jogos_A[25];
      document.getElementById('pntstime7').innerHTML=jogos_A[26];
      document.getElementById('golstime7').innerHTML=jogos_A[27];
      document.getElementById('golstime8').innerHTML=jogos_A[28];
      document.getElementById('pntstime8').innerHTML=jogos_A[29];
      document.getElementById('nometime8').innerHTML=jogos_A[30];
      document.getElementById('logtime8').innerHTML=jogos_A[31];
      document.getElementById('logtime9').innerHTML=jogos_A[32];
      document.getElementById('nometime9').innerHTML=jogos_A[33];
      document.getElementById('pntstime9').innerHTML=jogos_A[34];
      document.getElementById('golstime9').innerHTML=jogos_A[35];
      document.getElementById('golstime10').innerHTML=jogos_A[36];
      document.getElementById('pntstime10').innerHTML=jogos_A[37];
      document.getElementById('nometime10').innerHTML=jogos_A[38];
      document.getElementById('logtime10').innerHTML=jogos_A[39];
      document.getElementById('logtime11').innerHTML=jogos_A[40];
      document.getElementById('nometime11').innerHTML=jogos_A[41];
      document.getElementById('pntstime11').innerHTML=jogos_A[42];
      document.getElementById('golstime11').innerHTML=jogos_A[43];
      document.getElementById('golstime12').innerHTML=jogos_A[44];
      document.getElementById('pntstime12').innerHTML=jogos_A[45];
      document.getElementById('nometime12').innerHTML=jogos_A[46];
      document.getElementById('logtime12').innerHTML=jogos_A[47];
      document.getElementById('logtime13').innerHTML=jogos_A[48];
      document.getElementById('nometime13').innerHTML=jogos_A[49];
      document.getElementById('pntstime13').innerHTML=jogos_A[50];
      document.getElementById('golstime13').innerHTML=jogos_A[51];
      document.getElementById('golstime14').innerHTML=jogos_A[52];
      document.getElementById('pntstime14').innerHTML=jogos_A[53];
      document.getElementById('nometime14').innerHTML=jogos_A[54];
      document.getElementById('logtime14').innerHTML=jogos_A[55];
      document.getElementById('logtime15').innerHTML=jogos_A[56];
      document.getElementById('nometime15').innerHTML=jogos_A[57];
      document.getElementById('pntstime15').innerHTML=jogos_A[58];
      document.getElementById('golstime15').innerHTML=jogos_A[59];
      document.getElementById('golstime16').innerHTML=jogos_A[60];
      document.getElementById('pntstime16').innerHTML=jogos_A[61];
      document.getElementById('nometime16').innerHTML=jogos_A[62];
      document.getElementById('logtime16').innerHTML=jogos_A[63];
      document.getElementById('logtime17').innerHTML=jogos_A[64];
      document.getElementById('nometime17').innerHTML=jogos_A[65];
      document.getElementById('pntstime17').innerHTML=jogos_A[66];
      document.getElementById('golstime17').innerHTML=jogos_A[67];
      document.getElementById('golstime18').innerHTML=jogos_A[68];
      document.getElementById('pntstime18').innerHTML=jogos_A[69];
      document.getElementById('nometime18').innerHTML=jogos_A[70];
      document.getElementById('logtime18').innerHTML=jogos_A[71];
      document.getElementById('logtime19').innerHTML=jogos_A[72];
      document.getElementById('nometime19').innerHTML=jogos_A[73];
      document.getElementById('pntstime19').innerHTML=jogos_A[74];
      document.getElementById('golstime19').innerHTML=jogos_A[75];
      document.getElementById('golstime20').innerHTML=jogos_A[76];
      document.getElementById('pntstime20').innerHTML=jogos_A[77];
      document.getElementById('nometime20').innerHTML=jogos_A[78];
      document.getElementById('logtime20').innerHTML=jogos_A[79];
      document.getElementById('logtime21').innerHTML=jogos_A[80];
      document.getElementById('nometime21').innerHTML=jogos_A[81];
      document.getElementById('pntstime21').innerHTML=jogos_A[82];
      document.getElementById('golstime21').innerHTML=jogos_A[83];
      document.getElementById('golstime22').innerHTML=jogos_A[84];
      document.getElementById('pntstime22').innerHTML=jogos_A[85];
      document.getElementById('nometime22').innerHTML=jogos_A[86];
      document.getElementById('logtime22').innerHTML=jogos_A[87];
      document.getElementById('logtime23').innerHTML=jogos_A[88];
      document.getElementById('nometime23').innerHTML=jogos_A[89];
      document.getElementById('pntstime23').innerHTML=jogos_A[90];
      document.getElementById('golstime23').innerHTML=jogos_A[91];
      document.getElementById('golstime24').innerHTML=jogos_A[92];
      document.getElementById('pntstime24').innerHTML=jogos_A[93];
      document.getElementById('nometime24').innerHTML=jogos_A[94];
      document.getElementById('logtime24').innerHTML=jogos_A[95];


/**CARD DO TÉCNICOS */


    document.getElementById("CardNomeTec1").innerHTML=Grupo_A[8].nome;
document.getElementById("CardLogo1").innerHTML=Grupo_A[8].logo;
document.getElementById("CardLogin1").innerHTML=Grupo_A[8].nomeLogin;
document.getElementById("CardId1").innerHTML="Id: "+Grupo_A[8].idCart;
document.getElementById("CardDesde1").innerHTML="Liga Rep: "+Grupo_A[1][10];
document.getElementById("CarMoral1").innerHTML='Participações: '+Grupo_A[1][11];
document.getElementById("CardAssumiu1").innerHTML="Assumiu o clube na "+Grupo_A[1][64]+"ªrod. de "+Grupo_A[1][65];
document.getElementById("CardTitulos1_1").innerHTML=Grupo_A[8].titulo1;;
document.getElementById("CardTitulos1_2").innerHTML=Grupo_A[8].titulo2;
document.getElementById("CardTitulos1_3").innerHTML=Grupo_A[8].titulo3;
document.getElementById("CardTitulos1_4").innerHTML=Grupo_A[8].titulo4;
document.getElementById("CardTitulos1_5").innerHTML=Grupo_A[8].titulo5;
document.getElementById("CardTitulos1_6").innerHTML=Grupo_A[8].titulo6;
document.getElementById("CardTitulos1_7").innerHTML=Grupo_A[8].titulo7;
document.getElementById("CardTitulos1_8").innerHTML=Grupo_A[8].titulo8;
document.getElementById("CardTitulos1_9").innerHTML=Grupo_A[8].titulo9;
document.getElementById("CardTitulos1_10").innerHTML=Grupo_A[8].titulo10;

document.getElementById("CardNomeTec2").innerHTML=Grupo_A[17].nome;
document.getElementById("CardLogo2").innerHTML=Grupo_A[17].logo;
document.getElementById("CardLogin2").innerHTML=Grupo_A[17].nomeLogin;
document.getElementById("CardId2").innerHTML="Id: "+Grupo_A[17].idCart;
document.getElementById("CardDesde2").innerHTML="Liga Rep: "+Grupo_A[10][10];
document.getElementById("CarMoral2").innerHTML='Participações: '+Grupo_A[10][11];
document.getElementById("CardAssumiu2").innerHTML="Assumiu o clube na "+Grupo_A[10][64]+"ªrod. de "+Grupo_A[10][65];
document.getElementById("CardTitulos2_1").innerHTML=Grupo_A[17].titulo1;
document.getElementById("CardTitulos2_2").innerHTML=Grupo_A[17].título2;
document.getElementById("CardTitulos2_3").innerHTML=Grupo_A[17].titulo3;
document.getElementById("CardTitulos2_4").innerHTML=Grupo_A[17].titulo4;
document.getElementById("CardTitulos2_5").innerHTML=Grupo_A[17].titulo5;
document.getElementById("CardTitulos2_6").innerHTML=Grupo_A[17].titulo6;
document.getElementById("CardTitulos2_7").innerHTML=Grupo_A[17].titulo7;
document.getElementById("CardTitulos2_8").innerHTML=Grupo_A[17].titulo8;
document.getElementById("CardTitulos2_9").innerHTML=Grupo_A[17].titulo9;
document.getElementById("CardTitulos2_10").innerHTML=Grupo_A[17].titulo10;


document.getElementById("CardNomeTec3").innerHTML=Grupo_A[26].nome;
document.getElementById("CardLogo3").innerHTML=Grupo_A[26].logo;
document.getElementById("CardLogin3").innerHTML="Login: "+Grupo_A[26].nomeLogin;
document.getElementById("CardId3").innerHTML="Id: "+Grupo_A[26].idCart;
document.getElementById("CardDesde3").innerHTML="Liga Rep: "+Grupo_A[19][10];
document.getElementById("CarMoral3").innerHTML='Participações: '+Grupo_A[19][11];
document.getElementById("CardAssumiu3").innerHTML="Assumiu o clube na KK "+Grupo_A[19][64]+"ªrod. de "+Grupo_A[19][65];
document.getElementById("CardTitulos3_1").innerHTML=Grupo_A[26].titulo1;
document.getElementById("CardTitulos3_2").innerHTML=Grupo_A[26].titulo2;
document.getElementById("CardTitulos3_3").innerHTML=Grupo_A[26].titulo3;
document.getElementById("CardTitulos3_4").innerHTML=Grupo_A[26].titulo4;
document.getElementById("CardTitulos3_5").innerHTML=Grupo_A[26].titulo5;
document.getElementById("CardTitulos3_6").innerHTML=Grupo_A[26].titulo6;
document.getElementById("CardTitulos3_7").innerHTML=Grupo_A[26].titulo7;
document.getElementById("CardTitulos3_8").innerHTML=Grupo_A[26].titulo8;
document.getElementById("CardTitulos3_9").innerHTML=Grupo_A[26].titulo9;
document.getElementById("CardTitulos3_10").innerHTML=Grupo_A[26].titulo10;

document.getElementById("CardNomeTec4").innerHTML=Grupo_A[35].nome;
document.getElementById("CardLogo4").innerHTML=Grupo_A[35].logo;
document.getElementById("CardLogin4").innerHTML="Login: "+Grupo_A[35].nomeLogin;
document.getElementById("CardId4").innerHTML="Id: "+Grupo_A[35].idCart;
document.getElementById("CardDesde4").innerHTML="Liga Rep: "+Grupo_A[28][10];
document.getElementById("CarMoral4").innerHTML='Participações: '+Grupo_A[28][11];
document.getElementById("CardAssumiu3").innerHTML="Assumiu o clube na "+Grupo_A[28][11]+"ªrod. de "+Grupo_A[28][65];
document.getElementById("CardTitulos4_1").innerHTML=Grupo_A[35].titulo1;
document.getElementById("CardTitulos4_2").innerHTML=Grupo_A[35].titulo2;
document.getElementById("CardTitulos4_3").innerHTML=Grupo_A[35].titulo3;
document.getElementById("CardTitulos4_4").innerHTML=Grupo_A[35].titulo4;
document.getElementById("CardTitulos4_5").innerHTML=Grupo_A[35].titulo5;
document.getElementById("CardTitulos4_6").innerHTML=Grupo_A[35].titulo6;
document.getElementById("CardTitulos4_7").innerHTML=Grupo_A[35].titulo7;
document.getElementById("CardTitulos4_8").innerHTML=Grupo_A[35].titulo8;
document.getElementById("CardTitulos4_9").innerHTML=Grupo_A[35].titulo9;
document.getElementById("CardTitulos4_10").innerHTML=Grupo_A[35].titulo10;





    }




    else if(CampEscolhido==="Grupo_B"){


     

      


      document.getElementById('logclass1').innerHTML=Grupo_B[0];							
      document.getElementById('club1').innerHTML=Grupo_B[1][0];							
      document.getElementById('pt1').innerHTML=Grupo_B[2];							
      document.getElementById('vit1').innerHTML=Grupo_B[3];							
      document.getElementById('emp1').innerHTML=Grupo_B[4];							
      document.getElementById('der1').innerHTML=Grupo_B[5];							
      document.getElementById('gp1').innerHTML=Grupo_B[6];							
      document.getElementById('gc1').innerHTML=Grupo_B[7];							
      document.getElementById('sd1').innerHTML=Grupo_B[6]-Grupo_B[7];							
      document.getElementById('tec1').innerHTML=Grupo_B[8].logo;							
    							
      document.getElementById('logclass2').innerHTML=Grupo_B[9];							
      document.getElementById('club2').innerHTML=Grupo_B[10][0];							
      document.getElementById('pt2').innerHTML=Grupo_B[11];							
      document.getElementById('vit2').innerHTML=Grupo_B[12];							
      document.getElementById('emp2').innerHTML=Grupo_B[13];							
      document.getElementById('der2').innerHTML=Grupo_B[14];							
      document.getElementById('gp2').innerHTML=Grupo_B[15];							
      document.getElementById('gc2').innerHTML=Grupo_B[16];							
      document.getElementById('sd2').innerHTML=Grupo_B[15]-Grupo_B[16];							
      document.getElementById('tec2').innerHTML=Grupo_B[17].logo;							
    							
      document.getElementById('logclass3').innerHTML=Grupo_B[18];							
      document.getElementById('club3').innerHTML=Grupo_B[19][0];							
      document.getElementById('pt3').innerHTML=Grupo_B[20];							
      document.getElementById('vit3').innerHTML=Grupo_B[21];							
      document.getElementById('emp3').innerHTML=Grupo_B[22];							
      document.getElementById('der3').innerHTML=Grupo_B[23];							
      document.getElementById('gp3').innerHTML=Grupo_B[24];							
      document.getElementById('gc3').innerHTML=Grupo_B[25];							
      document.getElementById('sd3').innerHTML=Grupo_B[24]-Grupo_B[25];							
      document.getElementById('tec3').innerHTML=Grupo_B[26].logo;							
    							
      document.getElementById('logclass4').innerHTML=Grupo_B[27];							
      document.getElementById('club4').innerHTML=Grupo_B[28][0];							
      document.getElementById('pt4').innerHTML=Grupo_B[29];							
      document.getElementById('vit4').innerHTML=Grupo_B[30];							
      document.getElementById('emp4').innerHTML=Grupo_B[31];							
      document.getElementById('der4').innerHTML=Grupo_B[32];							
      document.getElementById('gp4').innerHTML=Grupo_B[33];							
      document.getElementById('gc4').innerHTML=Grupo_B[34];							
      document.getElementById('sd4').innerHTML=Grupo_B[33]-Grupo_B[34];							
      document.getElementById('tec4').innerHTML=Grupo_B[35].logo;
    							
      document.getElementById('logtime1').innerHTML=jogos_B[0];
      document.getElementById('nometime1').innerHTML=jogos_B[1];
      document.getElementById('pntstime1').innerHTML=jogos_B[2];
      document.getElementById('golstime1').innerHTML=jogos_B[3];
      document.getElementById('golstime2').innerHTML=jogos_B[4];
      document.getElementById('pntstime2').innerHTML=jogos_B[5];
      document.getElementById('nometime2').innerHTML=jogos_B[6];
      document.getElementById('logtime2').innerHTML=jogos_B[7];
      document.getElementById('logtime3').innerHTML=jogos_B[8];
      document.getElementById('nometime3').innerHTML=jogos_B[9];
      document.getElementById('pntstime3').innerHTML=jogos_B[10];
      document.getElementById('golstime3').innerHTML=jogos_B[11];
      document.getElementById('golstime4').innerHTML=jogos_B[12];
      document.getElementById('pntstime4').innerHTML=jogos_B[13];
      document.getElementById('nometime4').innerHTML=jogos_B[14];
      document.getElementById('logtime4').innerHTML=jogos_B[15];
      document.getElementById('logtime5').innerHTML=jogos_B[16];
      document.getElementById('nometime5').innerHTML=jogos_B[17];
      document.getElementById('pntstime5').innerHTML=jogos_B[18];
      document.getElementById('golstime5').innerHTML=jogos_B[19];
      document.getElementById('golstime6').innerHTML=jogos_B[20];
      document.getElementById('pntstime6').innerHTML=jogos_B[21];
      document.getElementById('nometime6').innerHTML=jogos_B[22];
      document.getElementById('logtime6').innerHTML=jogos_B[23];
      document.getElementById('logtime7').innerHTML=jogos_B[24];
      document.getElementById('nometime7').innerHTML=jogos_B[25];
      document.getElementById('pntstime7').innerHTML=jogos_B[26];
      document.getElementById('golstime7').innerHTML=jogos_B[27];
      document.getElementById('golstime8').innerHTML=jogos_B[28];
      document.getElementById('pntstime8').innerHTML=jogos_B[29];
      document.getElementById('nometime8').innerHTML=jogos_B[30];
      document.getElementById('logtime8').innerHTML=jogos_B[31];
      document.getElementById('logtime9').innerHTML=jogos_B[32];
      document.getElementById('nometime9').innerHTML=jogos_B[33];
      document.getElementById('pntstime9').innerHTML=jogos_B[34];
      document.getElementById('golstime9').innerHTML=jogos_B[35];
      document.getElementById('golstime10').innerHTML=jogos_B[36];
      document.getElementById('pntstime10').innerHTML=jogos_B[37];
      document.getElementById('nometime10').innerHTML=jogos_B[38];
      document.getElementById('logtime10').innerHTML=jogos_B[39];
      document.getElementById('logtime11').innerHTML=jogos_B[40];
      document.getElementById('nometime11').innerHTML=jogos_B[41];
      document.getElementById('pntstime11').innerHTML=jogos_B[42];
      document.getElementById('golstime11').innerHTML=jogos_B[43];
      document.getElementById('golstime12').innerHTML=jogos_B[44];
      document.getElementById('pntstime12').innerHTML=jogos_B[45];
      document.getElementById('nometime12').innerHTML=jogos_B[46];
      document.getElementById('logtime12').innerHTML=jogos_B[47];
      document.getElementById('logtime13').innerHTML=jogos_B[48];
      document.getElementById('nometime13').innerHTML=jogos_B[49];
      document.getElementById('pntstime13').innerHTML=jogos_B[50];
      document.getElementById('golstime13').innerHTML=jogos_B[51];
      document.getElementById('golstime14').innerHTML=jogos_B[52];
      document.getElementById('pntstime14').innerHTML=jogos_B[53];
      document.getElementById('nometime14').innerHTML=jogos_B[54];
      document.getElementById('logtime14').innerHTML=jogos_B[55];
      document.getElementById('logtime15').innerHTML=jogos_B[56];
      document.getElementById('nometime15').innerHTML=jogos_B[57];
      document.getElementById('pntstime15').innerHTML=jogos_B[58];
      document.getElementById('golstime15').innerHTML=jogos_B[59];
      document.getElementById('golstime16').innerHTML=jogos_B[60];
      document.getElementById('pntstime16').innerHTML=jogos_B[61];
      document.getElementById('nometime16').innerHTML=jogos_B[62];
      document.getElementById('logtime16').innerHTML=jogos_B[63];
      document.getElementById('logtime17').innerHTML=jogos_B[64];
      document.getElementById('nometime17').innerHTML=jogos_B[65];
      document.getElementById('pntstime17').innerHTML=jogos_B[66];
      document.getElementById('golstime17').innerHTML=jogos_B[67];
      document.getElementById('golstime18').innerHTML=jogos_B[68];
      document.getElementById('pntstime18').innerHTML=jogos_B[69];
      document.getElementById('nometime18').innerHTML=jogos_B[70];
      document.getElementById('logtime18').innerHTML=jogos_B[71];
      document.getElementById('logtime19').innerHTML=jogos_B[72];
      document.getElementById('nometime19').innerHTML=jogos_B[73];
      document.getElementById('pntstime19').innerHTML=jogos_B[74];
      document.getElementById('golstime19').innerHTML=jogos_B[75];
      document.getElementById('golstime20').innerHTML=jogos_B[76];
      document.getElementById('pntstime20').innerHTML=jogos_B[77];
      document.getElementById('nometime20').innerHTML=jogos_B[78];
      document.getElementById('logtime20').innerHTML=jogos_B[79];
      document.getElementById('logtime21').innerHTML=jogos_B[80];
      document.getElementById('nometime21').innerHTML=jogos_B[81];
      document.getElementById('pntstime21').innerHTML=jogos_B[82];
      document.getElementById('golstime21').innerHTML=jogos_B[83];
      document.getElementById('golstime22').innerHTML=jogos_B[84];
      document.getElementById('pntstime22').innerHTML=jogos_B[85];
      document.getElementById('nometime22').innerHTML=jogos_B[86];
      document.getElementById('logtime22').innerHTML=jogos_B[87];
      document.getElementById('logtime23').innerHTML=jogos_B[88];
      document.getElementById('nometime23').innerHTML=jogos_B[89];
      document.getElementById('pntstime23').innerHTML=jogos_B[90];
      document.getElementById('golstime23').innerHTML=jogos_B[91];
      document.getElementById('golstime24').innerHTML=jogos_B[92];
      document.getElementById('pntstime24').innerHTML=jogos_B[93];
      document.getElementById('nometime24').innerHTML=jogos_B[94];
      document.getElementById('logtime24').innerHTML=jogos_B[95];

							
/**CARD DO TÉCNICOS */							
							
							
    document.getElementById("CardNomeTec1").innerHTML=Grupo_B[8].nome;							
document.getElementById("CardLogo1").innerHTML=Grupo_B[8].logo;							
document.getElementById("CardLogin1").innerHTML=Grupo_B[8].nomeLogin;							
document.getElementById("CardId1").innerHTML="Id: "+Grupo_B[8].idCart;							
document.getElementById("CardDesde1").innerHTML="Liga Rep: "+Grupo_B[1][10];							
document.getElementById("CarMoral1").innerHTML='Participações: '+Grupo_B[1][11];							
document.getElementById("CardAssumiu1").innerHTML="Assumiu o clube na "+Grupo_B[1][64]+"ªrod. de "+Grupo_B[1][65];							
document.getElementById("CardTitulos1_1").innerHTML=Grupo_B[8].titulo1;;							
document.getElementById("CardTitulos1_2").innerHTML=Grupo_B[8].titulo2;							
document.getElementById("CardTitulos1_3").innerHTML=Grupo_B[8].titulo3;							
document.getElementById("CardTitulos1_4").innerHTML=Grupo_B[8].titulo4;							
document.getElementById("CardTitulos1_5").innerHTML=Grupo_B[8].titulo5;							
document.getElementById("CardTitulos1_6").innerHTML=Grupo_B[8].titulo6;							
document.getElementById("CardTitulos1_7").innerHTML=Grupo_B[8].titulo7;							
document.getElementById("CardTitulos1_8").innerHTML=Grupo_B[8].titulo8;							
document.getElementById("CardTitulos1_9").innerHTML=Grupo_B[8].titulo9;							
document.getElementById("CardTitulos1_10").innerHTML=Grupo_B[8].titulo10;							
							
document.getElementById("CardNomeTec2").innerHTML=Grupo_B[17].nome;							
document.getElementById("CardLogo2").innerHTML=Grupo_B[17].logo;							
document.getElementById("CardLogin2").innerHTML=Grupo_B[17].nomeLogin;							
document.getElementById("CardId2").innerHTML="Id: "+Grupo_B[17].idCart;							
document.getElementById("CardDesde2").innerHTML="Liga Rep: "+Grupo_B[10][10];							
document.getElementById("CarMoral2").innerHTML='Participações: '+Grupo_B[10][11];							
document.getElementById("CardAssumiu2").innerHTML="Assumiu o clube na "+Grupo_B[10][64]+"ªrod. de "+Grupo_B[10][65];							
document.getElementById("CardTitulos2_1").innerHTML=Grupo_B[17].titulo1;							
document.getElementById("CardTitulos2_2").innerHTML=Grupo_B[17].título2;							
document.getElementById("CardTitulos2_3").innerHTML=Grupo_B[17].titulo3;							
document.getElementById("CardTitulos2_4").innerHTML=Grupo_B[17].titulo4;							
document.getElementById("CardTitulos2_5").innerHTML=Grupo_B[17].titulo5;							
document.getElementById("CardTitulos2_6").innerHTML=Grupo_B[17].titulo6;							
document.getElementById("CardTitulos2_7").innerHTML=Grupo_B[17].titulo7;							
document.getElementById("CardTitulos2_8").innerHTML=Grupo_B[17].titulo8;							
document.getElementById("CardTitulos2_9").innerHTML=Grupo_B[17].titulo9;							
document.getElementById("CardTitulos2_10").innerHTML=Grupo_B[17].titulo10;							
							
							
document.getElementById("CardNomeTec3").innerHTML=Grupo_B[26].nome;							
document.getElementById("CardLogo3").innerHTML=Grupo_B[26].logo;							
document.getElementById("CardLogin3").innerHTML="Login: "+Grupo_B[26].nomeLogin;							
document.getElementById("CardId3").innerHTML="Id: "+Grupo_B[26].idCart;							
document.getElementById("CardDesde3").innerHTML="Liga Rep: "+Grupo_B[19][10];							
document.getElementById("CarMoral3").innerHTML='Participações: '+Grupo_B[19][11];							
document.getElementById("CardAssumiu3").innerHTML="Assumiu o clube na "+Grupo_B[19][64]+"ªrod. de "+Grupo_B[19][65];							
document.getElementById("CardTitulos3_1").innerHTML=Grupo_B[26].titulo1;							
document.getElementById("CardTitulos3_2").innerHTML=Grupo_B[26].titulo2;							
document.getElementById("CardTitulos3_3").innerHTML=Grupo_B[26].titulo3;							
document.getElementById("CardTitulos3_4").innerHTML=Grupo_B[26].titulo4;							
document.getElementById("CardTitulos3_5").innerHTML=Grupo_B[26].titulo5;							
document.getElementById("CardTitulos3_6").innerHTML=Grupo_B[26].titulo6;							
document.getElementById("CardTitulos3_7").innerHTML=Grupo_B[26].titulo7;							
document.getElementById("CardTitulos3_8").innerHTML=Grupo_B[26].titulo8;							
document.getElementById("CardTitulos3_9").innerHTML=Grupo_B[26].titulo9;							
document.getElementById("CardTitulos3_10").innerHTML=Grupo_B[26].titulo10;							
							
document.getElementById("CardNomeTec4").innerHTML=Grupo_B[35].nome;							
document.getElementById("CardLogo4").innerHTML=Grupo_B[35].logo;							
document.getElementById("CardLogin4").innerHTML="Login: "+Grupo_B[35].nomeLogin;							
document.getElementById("CardId4").innerHTML="Id: "+Grupo_B[35].idCart;							
document.getElementById("CardDesde4").innerHTML="Liga Rep: "+Grupo_B[28][10];							
document.getElementById("CarMoral4").innerHTML='Participações: '+Grupo_B[28][11];							
document.getElementById("CardAssumiu3").innerHTML="Assumiu o clube na "+Grupo_B[28][11]+"ªrod. de "+Grupo_B[28][65];							
document.getElementById("CardTitulos4_1").innerHTML=Grupo_B[35].titulo1;							
document.getElementById("CardTitulos4_2").innerHTML=Grupo_B[35].titulo2;							
document.getElementById("CardTitulos4_3").innerHTML=Grupo_B[35].titulo3;							
document.getElementById("CardTitulos4_4").innerHTML=Grupo_B[35].titulo4;							
document.getElementById("CardTitulos4_5").innerHTML=Grupo_B[35].titulo5;							
document.getElementById("CardTitulos4_6").innerHTML=Grupo_B[35].titulo6;							
document.getElementById("CardTitulos4_7").innerHTML=Grupo_B[35].titulo7;							
document.getElementById("CardTitulos4_8").innerHTML=Grupo_B[35].titulo8;							
document.getElementById("CardTitulos4_9").innerHTML=Grupo_B[35].titulo9;							
document.getElementById("CardTitulos4_10").innerHTML=Grupo_B[35].titulo10;							

  

      
    }



    
    else if(CampEscolhido==="Grupo_C"){

      document.getElementById('logclass1').innerHTML=Grupo_C[0];
      document.getElementById('club1').innerHTML=Grupo_C[1][0];
      document.getElementById('pt1').innerHTML=Grupo_C[2];
      document.getElementById('vit1').innerHTML=Grupo_C[3];
      document.getElementById('emp1').innerHTML=Grupo_C[4];
      document.getElementById('der1').innerHTML=Grupo_C[5];
      document.getElementById('gp1').innerHTML=Grupo_C[6];
      document.getElementById('gc1').innerHTML=Grupo_C[7];
      document.getElementById('sd1').innerHTML=Grupo_C[6]-Grupo_C[7];
      document.getElementById('tec1').innerHTML=Grupo_C[8].logo;
    
      document.getElementById('logclass2').innerHTML=Grupo_C[9];
      document.getElementById('club2').innerHTML=Grupo_C[10][0];
      document.getElementById('pt2').innerHTML=Grupo_C[11];
      document.getElementById('vit2').innerHTML=Grupo_C[12];
      document.getElementById('emp2').innerHTML=Grupo_C[13];
      document.getElementById('der2').innerHTML=Grupo_C[14];
      document.getElementById('gp2').innerHTML=Grupo_C[15];
      document.getElementById('gc2').innerHTML=Grupo_C[16];
      document.getElementById('sd2').innerHTML=Grupo_C[15]-Grupo_C[16];
      document.getElementById('tec2').innerHTML=Grupo_C[17].logo;
    
      document.getElementById('logclass3').innerHTML=Grupo_C[18];
      document.getElementById('club3').innerHTML=Grupo_C[19][0];
      document.getElementById('pt3').innerHTML=Grupo_C[20];
      document.getElementById('vit3').innerHTML=Grupo_C[21];
      document.getElementById('emp3').innerHTML=Grupo_C[22];
      document.getElementById('der3').innerHTML=Grupo_C[23];
      document.getElementById('gp3').innerHTML=Grupo_C[24];
      document.getElementById('gc3').innerHTML=Grupo_C[25];
      document.getElementById('sd3').innerHTML=Grupo_C[24]-Grupo_C[25];
      document.getElementById('tec3').innerHTML=Grupo_C[26].logo;
    
      document.getElementById('logclass4').innerHTML=Grupo_C[27];
      document.getElementById('club4').innerHTML=Grupo_C[28][0];
      document.getElementById('pt4').innerHTML=Grupo_C[29];
      document.getElementById('vit4').innerHTML=Grupo_C[30];
      document.getElementById('emp4').innerHTML=Grupo_C[31];
      document.getElementById('der4').innerHTML=Grupo_C[32];
      document.getElementById('gp4').innerHTML=Grupo_C[33];
      document.getElementById('gc4').innerHTML=Grupo_C[34];
      document.getElementById('sd4').innerHTML=Grupo_C[33]-Grupo_C[34];
      document.getElementById('tec4').innerHTML=Grupo_C[35].logo;
    
      document.getElementById('logtime1').innerHTML=jogos_C[0];
      document.getElementById('nometime1').innerHTML=jogos_C[1];
      document.getElementById('pntstime1').innerHTML=jogos_C[2];
      document.getElementById('golstime1').innerHTML=jogos_C[3];
      document.getElementById('golstime2').innerHTML=jogos_C[4];
      document.getElementById('pntstime2').innerHTML=jogos_C[5];
      document.getElementById('nometime2').innerHTML=jogos_C[6];
      document.getElementById('logtime2').innerHTML=jogos_C[7];
      document.getElementById('logtime3').innerHTML=jogos_C[8];
      document.getElementById('nometime3').innerHTML=jogos_C[9];
      document.getElementById('pntstime3').innerHTML=jogos_C[10];
      document.getElementById('golstime3').innerHTML=jogos_C[11];
      document.getElementById('golstime4').innerHTML=jogos_C[12];
      document.getElementById('pntstime4').innerHTML=jogos_C[13];
      document.getElementById('nometime4').innerHTML=jogos_C[14];
      document.getElementById('logtime4').innerHTML=jogos_C[15];
      document.getElementById('logtime5').innerHTML=jogos_C[16];
      document.getElementById('nometime5').innerHTML=jogos_C[17];
      document.getElementById('pntstime5').innerHTML=jogos_C[18];
      document.getElementById('golstime5').innerHTML=jogos_C[19];
      document.getElementById('golstime6').innerHTML=jogos_C[20];
      document.getElementById('pntstime6').innerHTML=jogos_C[21];
      document.getElementById('nometime6').innerHTML=jogos_C[22];
      document.getElementById('logtime6').innerHTML=jogos_C[23];
      document.getElementById('logtime7').innerHTML=jogos_C[24];
      document.getElementById('nometime7').innerHTML=jogos_C[25];
      document.getElementById('pntstime7').innerHTML=jogos_C[26];
      document.getElementById('golstime7').innerHTML=jogos_C[27];
      document.getElementById('golstime8').innerHTML=jogos_C[28];
      document.getElementById('pntstime8').innerHTML=jogos_C[29];
      document.getElementById('nometime8').innerHTML=jogos_C[30];
      document.getElementById('logtime8').innerHTML=jogos_C[31];
      document.getElementById('logtime9').innerHTML=jogos_C[32];
      document.getElementById('nometime9').innerHTML=jogos_C[33];
      document.getElementById('pntstime9').innerHTML=jogos_C[34];
      document.getElementById('golstime9').innerHTML=jogos_C[35];
      document.getElementById('golstime10').innerHTML=jogos_C[36];
      document.getElementById('pntstime10').innerHTML=jogos_C[37];
      document.getElementById('nometime10').innerHTML=jogos_C[38];
      document.getElementById('logtime10').innerHTML=jogos_C[39];
      document.getElementById('logtime11').innerHTML=jogos_C[40];
      document.getElementById('nometime11').innerHTML=jogos_C[41];
      document.getElementById('pntstime11').innerHTML=jogos_C[42];
      document.getElementById('golstime11').innerHTML=jogos_C[43];
      document.getElementById('golstime12').innerHTML=jogos_C[44];
      document.getElementById('pntstime12').innerHTML=jogos_C[45];
      document.getElementById('nometime12').innerHTML=jogos_C[46];
      document.getElementById('logtime12').innerHTML=jogos_C[47];
      document.getElementById('logtime13').innerHTML=jogos_C[48];
      document.getElementById('nometime13').innerHTML=jogos_C[49];
      document.getElementById('pntstime13').innerHTML=jogos_C[50];
      document.getElementById('golstime13').innerHTML=jogos_C[51];
      document.getElementById('golstime14').innerHTML=jogos_C[52];
      document.getElementById('pntstime14').innerHTML=jogos_C[53];
      document.getElementById('nometime14').innerHTML=jogos_C[54];
      document.getElementById('logtime14').innerHTML=jogos_C[55];
      document.getElementById('logtime15').innerHTML=jogos_C[56];
      document.getElementById('nometime15').innerHTML=jogos_C[57];
      document.getElementById('pntstime15').innerHTML=jogos_C[58];
      document.getElementById('golstime15').innerHTML=jogos_C[59];
      document.getElementById('golstime16').innerHTML=jogos_C[60];
      document.getElementById('pntstime16').innerHTML=jogos_C[61];
      document.getElementById('nometime16').innerHTML=jogos_C[62];
      document.getElementById('logtime16').innerHTML=jogos_C[63];
      document.getElementById('logtime17').innerHTML=jogos_C[64];
      document.getElementById('nometime17').innerHTML=jogos_C[65];
      document.getElementById('pntstime17').innerHTML=jogos_C[66];
      document.getElementById('golstime17').innerHTML=jogos_C[67];
      document.getElementById('golstime18').innerHTML=jogos_C[68];
      document.getElementById('pntstime18').innerHTML=jogos_C[69];
      document.getElementById('nometime18').innerHTML=jogos_C[70];
      document.getElementById('logtime18').innerHTML=jogos_C[71];
      document.getElementById('logtime19').innerHTML=jogos_C[72];
      document.getElementById('nometime19').innerHTML=jogos_C[73];
      document.getElementById('pntstime19').innerHTML=jogos_C[74];
      document.getElementById('golstime19').innerHTML=jogos_C[75];
      document.getElementById('golstime20').innerHTML=jogos_C[76];
      document.getElementById('pntstime20').innerHTML=jogos_C[77];
      document.getElementById('nometime20').innerHTML=jogos_C[78];
      document.getElementById('logtime20').innerHTML=jogos_C[79];
      document.getElementById('logtime21').innerHTML=jogos_C[80];
      document.getElementById('nometime21').innerHTML=jogos_C[81];
      document.getElementById('pntstime21').innerHTML=jogos_C[82];
      document.getElementById('golstime21').innerHTML=jogos_C[83];
      document.getElementById('golstime22').innerHTML=jogos_C[84];
      document.getElementById('pntstime22').innerHTML=jogos_C[85];
      document.getElementById('nometime22').innerHTML=jogos_C[86];
      document.getElementById('logtime22').innerHTML=jogos_C[87];
      document.getElementById('logtime23').innerHTML=jogos_C[88];
      document.getElementById('nometime23').innerHTML=jogos_C[89];
      document.getElementById('pntstime23').innerHTML=jogos_C[90];
      document.getElementById('golstime23').innerHTML=jogos_C[91];
      document.getElementById('golstime24').innerHTML=jogos_C[92];
      document.getElementById('pntstime24').innerHTML=jogos_C[93];
      document.getElementById('nometime24').innerHTML=jogos_C[94];
      document.getElementById('logtime24').innerHTML=jogos_C[95];


/**CARD DO TÉCNICOS */


    document.getElementById("CardNomeTec1").innerHTML=Grupo_C[8].nome;
document.getElementById("CardLogo1").innerHTML=Grupo_C[8].logo;
document.getElementById("CardLogin1").innerHTML=Grupo_C[8].nomeLogin;
document.getElementById("CardId1").innerHTML="Id: "+Grupo_C[8].idCart;
document.getElementById("CardDesde1").innerHTML="Liga Rep: "+Grupo_C[1][10];
document.getElementById("CarMoral1").innerHTML='Participações: '+Grupo_C[1][11];
document.getElementById("CardAssumiu1").innerHTML="Assumiu o clube na "+Grupo_C[1][64]+"ªrod. de "+Grupo_C[1][65];
document.getElementById("CardTitulos1_1").innerHTML=Grupo_C[8].titulo1;;
document.getElementById("CardTitulos1_2").innerHTML=Grupo_C[8].titulo2;
document.getElementById("CardTitulos1_3").innerHTML=Grupo_C[8].titulo3;
document.getElementById("CardTitulos1_4").innerHTML=Grupo_C[8].titulo4;
document.getElementById("CardTitulos1_5").innerHTML=Grupo_C[8].titulo5;
document.getElementById("CardTitulos1_6").innerHTML=Grupo_C[8].titulo6;
document.getElementById("CardTitulos1_7").innerHTML=Grupo_C[8].titulo7;
document.getElementById("CardTitulos1_8").innerHTML=Grupo_C[8].titulo8;
document.getElementById("CardTitulos1_9").innerHTML=Grupo_C[8].titulo9;
document.getElementById("CardTitulos1_10").innerHTML=Grupo_C[8].titulo10;

document.getElementById("CardNomeTec2").innerHTML=Grupo_C[17].nome;
document.getElementById("CardLogo2").innerHTML=Grupo_C[17].logo;
document.getElementById("CardLogin2").innerHTML=Grupo_C[17].nomeLogin;
document.getElementById("CardId2").innerHTML="Id: "+Grupo_C[17].idCart;
document.getElementById("CardDesde2").innerHTML="Liga Rep: "+Grupo_C[10][10];
document.getElementById("CarMoral2").innerHTML='Participações: '+Grupo_C[10][11];
document.getElementById("CardAssumiu2").innerHTML="Assumiu o clube na "+Grupo_C[10][64]+"ªrod. de "+Grupo_C[10][65];
document.getElementById("CardTitulos2_1").innerHTML=Grupo_C[17].titulo1;
document.getElementById("CardTitulos2_2").innerHTML=Grupo_C[17].título2;
document.getElementById("CardTitulos2_3").innerHTML=Grupo_C[17].titulo3;
document.getElementById("CardTitulos2_4").innerHTML=Grupo_C[17].titulo4;
document.getElementById("CardTitulos2_5").innerHTML=Grupo_C[17].titulo5;
document.getElementById("CardTitulos2_6").innerHTML=Grupo_C[17].titulo6;
document.getElementById("CardTitulos2_7").innerHTML=Grupo_C[17].titulo7;
document.getElementById("CardTitulos2_8").innerHTML=Grupo_C[17].titulo8;
document.getElementById("CardTitulos2_9").innerHTML=Grupo_C[17].titulo9;
document.getElementById("CardTitulos2_10").innerHTML=Grupo_C[17].titulo10;


document.getElementById("CardNomeTec3").innerHTML=Grupo_C[26].nome;
document.getElementById("CardLogo3").innerHTML=Grupo_C[26].logo;
document.getElementById("CardLogin3").innerHTML="Login: "+Grupo_C[26].nomeLogin;
document.getElementById("CardId3").innerHTML="Id: "+Grupo_C[26].idCart;
document.getElementById("CardDesde3").innerHTML="Liga Rep: "+Grupo_C[19][10];
document.getElementById("CarMoral3").innerHTML='Participações: '+Grupo_C[19][11];
document.getElementById("CardAssumiu3").innerHTML="Assumiu o clube na "+Grupo_C[19][64]+"ªrod. de "+Grupo_C[19][65];
document.getElementById("CardTitulos3_1").innerHTML=Grupo_C[26].titulo1;
document.getElementById("CardTitulos3_2").innerHTML=Grupo_C[26].titulo2;
document.getElementById("CardTitulos3_3").innerHTML=Grupo_C[26].titulo3;
document.getElementById("CardTitulos3_4").innerHTML=Grupo_C[26].titulo4;
document.getElementById("CardTitulos3_5").innerHTML=Grupo_C[26].titulo5;
document.getElementById("CardTitulos3_6").innerHTML=Grupo_C[26].titulo6;
document.getElementById("CardTitulos3_7").innerHTML=Grupo_C[26].titulo7;
document.getElementById("CardTitulos3_8").innerHTML=Grupo_C[26].titulo8;
document.getElementById("CardTitulos3_9").innerHTML=Grupo_C[26].titulo9;
document.getElementById("CardTitulos3_10").innerHTML=Grupo_C[26].titulo10;

document.getElementById("CardNomeTec4").innerHTML=Grupo_C[35].nome;
document.getElementById("CardLogo4").innerHTML=Grupo_C[35].logo;
document.getElementById("CardLogin4").innerHTML="Login: "+Grupo_C[35].nomeLogin;
document.getElementById("CardId4").innerHTML="Id: "+Grupo_C[35].idCart;
document.getElementById("CardDesde4").innerHTML="Liga Rep: "+Grupo_C[28][10];
document.getElementById("CarMoral4").innerHTML='Participações: '+Grupo_C[28][11];
document.getElementById("CardAssumiu3").innerHTML="Assumiu o clube na "+Grupo_C[28][11]+"ªrod. de "+Grupo_C[28][65];
document.getElementById("CardTitulos4_1").innerHTML=Grupo_C[35].titulo1;
document.getElementById("CardTitulos4_2").innerHTML=Grupo_C[35].titulo2;
document.getElementById("CardTitulos4_3").innerHTML=Grupo_C[35].titulo3;
document.getElementById("CardTitulos4_4").innerHTML=Grupo_C[35].titulo4;
document.getElementById("CardTitulos4_5").innerHTML=Grupo_C[35].titulo5;
document.getElementById("CardTitulos4_6").innerHTML=Grupo_C[35].titulo6;
document.getElementById("CardTitulos4_7").innerHTML=Grupo_C[35].titulo7;
document.getElementById("CardTitulos4_8").innerHTML=Grupo_C[35].titulo8;
document.getElementById("CardTitulos4_9").innerHTML=Grupo_C[35].titulo9;
document.getElementById("CardTitulos4_10").innerHTML=Grupo_C[35].titulo10;

      
      
    }


    else if(CampEscolhido==="Grupo_D"){

      


      document.getElementById('logclass1').innerHTML=Grupo_D[0];
      document.getElementById('club1').innerHTML=Grupo_D[1][0];
      document.getElementById('pt1').innerHTML=Grupo_D[2];
      document.getElementById('vit1').innerHTML=Grupo_D[3];
      document.getElementById('emp1').innerHTML=Grupo_D[4];
      document.getElementById('der1').innerHTML=Grupo_D[5];
      document.getElementById('gp1').innerHTML=Grupo_D[6];
      document.getElementById('gc1').innerHTML=Grupo_D[7];
      document.getElementById('sd1').innerHTML=Grupo_D[6]-Grupo_D[7];
      document.getElementById('tec1').innerHTML=Grupo_D[8].logo;
    
      document.getElementById('logclass2').innerHTML=Grupo_D[9];
      document.getElementById('club2').innerHTML=Grupo_D[10][0];
      document.getElementById('pt2').innerHTML=Grupo_D[11];
      document.getElementById('vit2').innerHTML=Grupo_D[12];
      document.getElementById('emp2').innerHTML=Grupo_D[13];
      document.getElementById('der2').innerHTML=Grupo_D[14];
      document.getElementById('gp2').innerHTML=Grupo_D[15];
      document.getElementById('gc2').innerHTML=Grupo_D[16];
      document.getElementById('sd2').innerHTML=Grupo_D[15]-Grupo_D[16];
      document.getElementById('tec2').innerHTML=Grupo_D[17].logo;
    
      document.getElementById('logclass3').innerHTML=Grupo_D[18];
      document.getElementById('club3').innerHTML=Grupo_D[19][0];
      document.getElementById('pt3').innerHTML=Grupo_D[20];
      document.getElementById('vit3').innerHTML=Grupo_D[21];
      document.getElementById('emp3').innerHTML=Grupo_D[22];
      document.getElementById('der3').innerHTML=Grupo_D[23];
      document.getElementById('gp3').innerHTML=Grupo_D[24];
      document.getElementById('gc3').innerHTML=Grupo_D[25];
      document.getElementById('sd3').innerHTML=Grupo_D[24]-Grupo_D[25];
      document.getElementById('tec3').innerHTML=Grupo_D[26].logo;
    
      document.getElementById('logclass4').innerHTML=Grupo_D[27];
      document.getElementById('club4').innerHTML=Grupo_D[28][0];
      document.getElementById('pt4').innerHTML=Grupo_D[29];
      document.getElementById('vit4').innerHTML=Grupo_D[30];
      document.getElementById('emp4').innerHTML=Grupo_D[31];
      document.getElementById('der4').innerHTML=Grupo_D[32];
      document.getElementById('gp4').innerHTML=Grupo_D[33];
      document.getElementById('gc4').innerHTML=Grupo_D[34];
      document.getElementById('sd4').innerHTML=Grupo_D[33]-Grupo_D[34];
      document.getElementById('tec4').innerHTML=Grupo_D[35].logo;
    
      document.getElementById('logtime1').innerHTML=jogos_D[0];
      document.getElementById('nometime1').innerHTML=jogos_D[1];
      document.getElementById('pntstime1').innerHTML=jogos_D[2];
      document.getElementById('golstime1').innerHTML=jogos_D[3];
      document.getElementById('golstime2').innerHTML=jogos_D[4];
      document.getElementById('pntstime2').innerHTML=jogos_D[5];
      document.getElementById('nometime2').innerHTML=jogos_D[6];
      document.getElementById('logtime2').innerHTML=jogos_D[7];
      document.getElementById('logtime3').innerHTML=jogos_D[8];
      document.getElementById('nometime3').innerHTML=jogos_D[9];
      document.getElementById('pntstime3').innerHTML=jogos_D[10];
      document.getElementById('golstime3').innerHTML=jogos_D[11];
      document.getElementById('golstime4').innerHTML=jogos_D[12];
      document.getElementById('pntstime4').innerHTML=jogos_D[13];
      document.getElementById('nometime4').innerHTML=jogos_D[14];
      document.getElementById('logtime4').innerHTML=jogos_D[15];
      document.getElementById('logtime5').innerHTML=jogos_D[16];
      document.getElementById('nometime5').innerHTML=jogos_D[17];
      document.getElementById('pntstime5').innerHTML=jogos_D[18];
      document.getElementById('golstime5').innerHTML=jogos_D[19];
      document.getElementById('golstime6').innerHTML=jogos_D[20];
      document.getElementById('pntstime6').innerHTML=jogos_D[21];
      document.getElementById('nometime6').innerHTML=jogos_D[22];
      document.getElementById('logtime6').innerHTML=jogos_D[23];
      document.getElementById('logtime7').innerHTML=jogos_D[24];
      document.getElementById('nometime7').innerHTML=jogos_D[25];
      document.getElementById('pntstime7').innerHTML=jogos_D[26];
      document.getElementById('golstime7').innerHTML=jogos_D[27];
      document.getElementById('golstime8').innerHTML=jogos_D[28];
      document.getElementById('pntstime8').innerHTML=jogos_D[29];
      document.getElementById('nometime8').innerHTML=jogos_D[30];
      document.getElementById('logtime8').innerHTML=jogos_D[31];
      document.getElementById('logtime9').innerHTML=jogos_D[32];
      document.getElementById('nometime9').innerHTML=jogos_D[33];
      document.getElementById('pntstime9').innerHTML=jogos_D[34];
      document.getElementById('golstime9').innerHTML=jogos_D[35];
      document.getElementById('golstime10').innerHTML=jogos_D[36];
      document.getElementById('pntstime10').innerHTML=jogos_D[37];
      document.getElementById('nometime10').innerHTML=jogos_D[38];
      document.getElementById('logtime10').innerHTML=jogos_D[39];
      document.getElementById('logtime11').innerHTML=jogos_D[40];
      document.getElementById('nometime11').innerHTML=jogos_D[41];
      document.getElementById('pntstime11').innerHTML=jogos_D[42];
      document.getElementById('golstime11').innerHTML=jogos_D[43];
      document.getElementById('golstime12').innerHTML=jogos_D[44];
      document.getElementById('pntstime12').innerHTML=jogos_D[45];
      document.getElementById('nometime12').innerHTML=jogos_D[46];
      document.getElementById('logtime12').innerHTML=jogos_D[47];
      document.getElementById('logtime13').innerHTML=jogos_D[48];
      document.getElementById('nometime13').innerHTML=jogos_D[49];
      document.getElementById('pntstime13').innerHTML=jogos_D[50];
      document.getElementById('golstime13').innerHTML=jogos_D[51];
      document.getElementById('golstime14').innerHTML=jogos_D[52];
      document.getElementById('pntstime14').innerHTML=jogos_D[53];
      document.getElementById('nometime14').innerHTML=jogos_D[54];
      document.getElementById('logtime14').innerHTML=jogos_D[55];
      document.getElementById('logtime15').innerHTML=jogos_D[56];
      document.getElementById('nometime15').innerHTML=jogos_D[57];
      document.getElementById('pntstime15').innerHTML=jogos_D[58];
      document.getElementById('golstime15').innerHTML=jogos_D[59];
      document.getElementById('golstime16').innerHTML=jogos_D[60];
      document.getElementById('pntstime16').innerHTML=jogos_D[61];
      document.getElementById('nometime16').innerHTML=jogos_D[62];
      document.getElementById('logtime16').innerHTML=jogos_D[63];
      document.getElementById('logtime17').innerHTML=jogos_D[64];
      document.getElementById('nometime17').innerHTML=jogos_D[65];
      document.getElementById('pntstime17').innerHTML=jogos_D[66];
      document.getElementById('golstime17').innerHTML=jogos_D[67];
      document.getElementById('golstime18').innerHTML=jogos_D[68];
      document.getElementById('pntstime18').innerHTML=jogos_D[69];
      document.getElementById('nometime18').innerHTML=jogos_D[70];
      document.getElementById('logtime18').innerHTML=jogos_D[71];
      document.getElementById('logtime19').innerHTML=jogos_D[72];
      document.getElementById('nometime19').innerHTML=jogos_D[73];
      document.getElementById('pntstime19').innerHTML=jogos_D[74];
      document.getElementById('golstime19').innerHTML=jogos_D[75];
      document.getElementById('golstime20').innerHTML=jogos_D[76];
      document.getElementById('pntstime20').innerHTML=jogos_D[77];
      document.getElementById('nometime20').innerHTML=jogos_D[78];
      document.getElementById('logtime20').innerHTML=jogos_D[79];
      document.getElementById('logtime21').innerHTML=jogos_D[80];
      document.getElementById('nometime21').innerHTML=jogos_D[81];
      document.getElementById('pntstime21').innerHTML=jogos_D[82];
      document.getElementById('golstime21').innerHTML=jogos_D[83];
      document.getElementById('golstime22').innerHTML=jogos_D[84];
      document.getElementById('pntstime22').innerHTML=jogos_D[85];
      document.getElementById('nometime22').innerHTML=jogos_D[86];
      document.getElementById('logtime22').innerHTML=jogos_D[87];
      document.getElementById('logtime23').innerHTML=jogos_D[88];
      document.getElementById('nometime23').innerHTML=jogos_D[89];
      document.getElementById('pntstime23').innerHTML=jogos_D[90];
      document.getElementById('golstime23').innerHTML=jogos_D[91];
      document.getElementById('golstime24').innerHTML=jogos_D[92];
      document.getElementById('pntstime24').innerHTML=jogos_D[93];
      document.getElementById('nometime24').innerHTML=jogos_D[94];
      document.getElementById('logtime24').innerHTML=jogos_D[95];


      /**CARD DO TÉCNICOS */							
							
							
    document.getElementById("CardNomeTec1").innerHTML=Grupo_D[8].nome;							
    document.getElementById("CardLogo1").innerHTML=Grupo_D[8].logo;							
    document.getElementById("CardLogin1").innerHTML=Grupo_D[8].nomeLogin;							
    document.getElementById("CardId1").innerHTML="Id: "+Grupo_D[8].idCart;							
    document.getElementById("CardDesde1").innerHTML="Liga Rep: "+Grupo_D[1][10];							
    document.getElementById("CarMoral1").innerHTML='Participações: '+Grupo_D[1][11];							
    document.getElementById("CardAssumiu1").innerHTML="Assumiu o clube na "+Grupo_D[1][64]+"ªrod. de "+Grupo_D[1][65];							
    document.getElementById("CardTitulos1_1").innerHTML=Grupo_D[8].titulo1;;							
    document.getElementById("CardTitulos1_2").innerHTML=Grupo_D[8].titulo2;							
    document.getElementById("CardTitulos1_3").innerHTML=Grupo_D[8].titulo3;							
    document.getElementById("CardTitulos1_4").innerHTML=Grupo_D[8].titulo4;							
    document.getElementById("CardTitulos1_5").innerHTML=Grupo_D[8].titulo5;							
    document.getElementById("CardTitulos1_6").innerHTML=Grupo_D[8].titulo6;							
    document.getElementById("CardTitulos1_7").innerHTML=Grupo_D[8].titulo7;							
    document.getElementById("CardTitulos1_8").innerHTML=Grupo_D[8].titulo8;							
    document.getElementById("CardTitulos1_9").innerHTML=Grupo_D[8].titulo9;							
    document.getElementById("CardTitulos1_10").innerHTML=Grupo_D[8].titulo10;							
                  
    document.getElementById("CardNomeTec2").innerHTML=Grupo_D[17].nome;							
    document.getElementById("CardLogo2").innerHTML=Grupo_D[17].logo;							
    document.getElementById("CardLogin2").innerHTML=Grupo_D[17].nomeLogin;							
    document.getElementById("CardId2").innerHTML="Id: "+Grupo_D[17].idCart;							
    document.getElementById("CardDesde2").innerHTML="Liga Rep: "+Grupo_D[10][10];							
    document.getElementById("CarMoral2").innerHTML='Participações: '+Grupo_D[10][11];							
    document.getElementById("CardAssumiu2").innerHTML="Assumiu o clube na "+Grupo_D[10][64]+"ªrod. de "+Grupo_D[10][65];							
    document.getElementById("CardTitulos2_1").innerHTML=Grupo_D[17].titulo1;							
    document.getElementById("CardTitulos2_2").innerHTML=Grupo_D[17].título2;							
    document.getElementById("CardTitulos2_3").innerHTML=Grupo_D[17].titulo3;							
    document.getElementById("CardTitulos2_4").innerHTML=Grupo_D[17].titulo4;							
    document.getElementById("CardTitulos2_5").innerHTML=Grupo_D[17].titulo5;							
    document.getElementById("CardTitulos2_6").innerHTML=Grupo_D[17].titulo6;							
    document.getElementById("CardTitulos2_7").innerHTML=Grupo_D[17].titulo7;							
    document.getElementById("CardTitulos2_8").innerHTML=Grupo_D[17].titulo8;							
    document.getElementById("CardTitulos2_9").innerHTML=Grupo_D[17].titulo9;							
    document.getElementById("CardTitulos2_10").innerHTML=Grupo_D[17].titulo10;							
                  
                  
    document.getElementById("CardNomeTec3").innerHTML=Grupo_D[26].nome;							
    document.getElementById("CardLogo3").innerHTML=Grupo_D[26].logo;							
    document.getElementById("CardLogin3").innerHTML="Login: "+Grupo_D[26].nomeLogin;							
    document.getElementById("CardId3").innerHTML="Id: "+Grupo_D[26].idCart;							
    document.getElementById("CardDesde3").innerHTML="Liga Rep: "+Grupo_D[19][10];							
    document.getElementById("CarMoral3").innerHTML='Participações: '+Grupo_D[19][11];							
    document.getElementById("CardAssumiu3").innerHTML="Assumiu o clube na "+Grupo_D[19][64]+"ªrod. de "+Grupo_D[19][65];							
    document.getElementById("CardTitulos3_1").innerHTML=Grupo_D[26].titulo1;							
    document.getElementById("CardTitulos3_2").innerHTML=Grupo_D[26].titulo2;							
    document.getElementById("CardTitulos3_3").innerHTML=Grupo_D[26].titulo3;							
    document.getElementById("CardTitulos3_4").innerHTML=Grupo_D[26].titulo4;							
    document.getElementById("CardTitulos3_5").innerHTML=Grupo_D[26].titulo5;							
    document.getElementById("CardTitulos3_6").innerHTML=Grupo_D[26].titulo6;							
    document.getElementById("CardTitulos3_7").innerHTML=Grupo_D[26].titulo7;							
    document.getElementById("CardTitulos3_8").innerHTML=Grupo_D[26].titulo8;							
    document.getElementById("CardTitulos3_9").innerHTML=Grupo_D[26].titulo9;							
    document.getElementById("CardTitulos3_10").innerHTML=Grupo_D[26].titulo10;							
                  
    document.getElementById("CardNomeTec4").innerHTML=Grupo_D[35].nome;							
    document.getElementById("CardLogo4").innerHTML=Grupo_D[35].logo;							
    document.getElementById("CardLogin4").innerHTML="Login: "+Grupo_D[35].nomeLogin;							
    document.getElementById("CardId4").innerHTML="Id: "+Grupo_D[35].idCart;							
    document.getElementById("CardDesde4").innerHTML="Liga Rep: "+Grupo_D[28][10];							
    document.getElementById("CarMoral4").innerHTML='Participações: '+Grupo_D[28][11];							
    document.getElementById("CardAssumiu3").innerHTML="Assumiu o clube na "+Grupo_D[28][11]+"ªrod. de "+Grupo_D[28][65];							
    document.getElementById("CardTitulos4_1").innerHTML=Grupo_D[35].titulo1;							
    document.getElementById("CardTitulos4_2").innerHTML=Grupo_D[35].titulo2;							
    document.getElementById("CardTitulos4_3").innerHTML=Grupo_D[35].titulo3;							
    document.getElementById("CardTitulos4_4").innerHTML=Grupo_D[35].titulo4;							
    document.getElementById("CardTitulos4_5").innerHTML=Grupo_D[35].titulo5;							
    document.getElementById("CardTitulos4_6").innerHTML=Grupo_D[35].titulo6;							
    document.getElementById("CardTitulos4_7").innerHTML=Grupo_D[35].titulo7;							
    document.getElementById("CardTitulos4_8").innerHTML=Grupo_D[35].titulo8;							
    document.getElementById("CardTitulos4_9").innerHTML=Grupo_D[35].titulo9;							
    document.getElementById("CardTitulos4_10").innerHTML=Grupo_D[35].titulo10;							
    

      
    }

    
    else if(CampEscolhido==="Grupo_E"){

      document.getElementById('logclass1').innerHTML=Grupo_E[0];
      document.getElementById('club1').innerHTML=Grupo_E[1][0];
      document.getElementById('pt1').innerHTML=Grupo_E[2];
      document.getElementById('vit1').innerHTML=Grupo_E[3];
      document.getElementById('emp1').innerHTML=Grupo_E[4];
      document.getElementById('der1').innerHTML=Grupo_E[5];
      document.getElementById('gp1').innerHTML=Grupo_E[6];
      document.getElementById('gc1').innerHTML=Grupo_E[7];
      document.getElementById('sd1').innerHTML=Grupo_E[6]-Grupo_E[7];
      document.getElementById('tec1').innerHTML=Grupo_E[8].logo;
    
      document.getElementById('logclass2').innerHTML=Grupo_E[9];
      document.getElementById('club2').innerHTML=Grupo_E[10][0];
      document.getElementById('pt2').innerHTML=Grupo_E[11];
      document.getElementById('vit2').innerHTML=Grupo_E[12];
      document.getElementById('emp2').innerHTML=Grupo_E[13];
      document.getElementById('der2').innerHTML=Grupo_E[14];
      document.getElementById('gp2').innerHTML=Grupo_E[15];
      document.getElementById('gc2').innerHTML=Grupo_E[16];
      document.getElementById('sd2').innerHTML=Grupo_E[15]-Grupo_E[16];
      document.getElementById('tec2').innerHTML=Grupo_E[17].logo;
    
      document.getElementById('logclass3').innerHTML=Grupo_E[18];
      document.getElementById('club3').innerHTML=Grupo_E[19][0];
      document.getElementById('pt3').innerHTML=Grupo_E[20];
      document.getElementById('vit3').innerHTML=Grupo_E[21];
      document.getElementById('emp3').innerHTML=Grupo_E[22];
      document.getElementById('der3').innerHTML=Grupo_E[23];
      document.getElementById('gp3').innerHTML=Grupo_E[24];
      document.getElementById('gc3').innerHTML=Grupo_E[25];
      document.getElementById('sd3').innerHTML=Grupo_E[24]-Grupo_E[25];
      document.getElementById('tec3').innerHTML=Grupo_E[26].logo;
    
      document.getElementById('logclass4').innerHTML=Grupo_E[27];
      document.getElementById('club4').innerHTML=Grupo_E[28][0];
      document.getElementById('pt4').innerHTML=Grupo_E[29];
      document.getElementById('vit4').innerHTML=Grupo_E[30];
      document.getElementById('emp4').innerHTML=Grupo_E[31];
      document.getElementById('der4').innerHTML=Grupo_E[32];
      document.getElementById('gp4').innerHTML=Grupo_E[33];
      document.getElementById('gc4').innerHTML=Grupo_E[34];
      document.getElementById('sd4').innerHTML=Grupo_E[33]-Grupo_E[34];
      document.getElementById('tec4').innerHTML=Grupo_E[35].logo;
    
      document.getElementById('logtime1').innerHTML=jogos_E[0];
      document.getElementById('nometime1').innerHTML=jogos_E[1];
      document.getElementById('pntstime1').innerHTML=jogos_E[2];
      document.getElementById('golstime1').innerHTML=jogos_E[3];
      document.getElementById('golstime2').innerHTML=jogos_E[4];
      document.getElementById('pntstime2').innerHTML=jogos_E[5];
      document.getElementById('nometime2').innerHTML=jogos_E[6];
      document.getElementById('logtime2').innerHTML=jogos_E[7];
      document.getElementById('logtime3').innerHTML=jogos_E[8];
      document.getElementById('nometime3').innerHTML=jogos_E[9];
      document.getElementById('pntstime3').innerHTML=jogos_E[10];
      document.getElementById('golstime3').innerHTML=jogos_E[11];
      document.getElementById('golstime4').innerHTML=jogos_E[12];
      document.getElementById('pntstime4').innerHTML=jogos_E[13];
      document.getElementById('nometime4').innerHTML=jogos_E[14];
      document.getElementById('logtime4').innerHTML=jogos_E[15];
      document.getElementById('logtime5').innerHTML=jogos_E[16];
      document.getElementById('nometime5').innerHTML=jogos_E[17];
      document.getElementById('pntstime5').innerHTML=jogos_E[18];
      document.getElementById('golstime5').innerHTML=jogos_E[19];
      document.getElementById('golstime6').innerHTML=jogos_E[20];
      document.getElementById('pntstime6').innerHTML=jogos_E[21];
      document.getElementById('nometime6').innerHTML=jogos_E[22];
      document.getElementById('logtime6').innerHTML=jogos_E[23];
      document.getElementById('logtime7').innerHTML=jogos_E[24];
      document.getElementById('nometime7').innerHTML=jogos_E[25];
      document.getElementById('pntstime7').innerHTML=jogos_E[26];
      document.getElementById('golstime7').innerHTML=jogos_E[27];
      document.getElementById('golstime8').innerHTML=jogos_E[28];
      document.getElementById('pntstime8').innerHTML=jogos_E[29];
      document.getElementById('nometime8').innerHTML=jogos_E[30];
      document.getElementById('logtime8').innerHTML=jogos_E[31];
      document.getElementById('logtime9').innerHTML=jogos_E[32];
      document.getElementById('nometime9').innerHTML=jogos_E[33];
      document.getElementById('pntstime9').innerHTML=jogos_E[34];
      document.getElementById('golstime9').innerHTML=jogos_E[35];
      document.getElementById('golstime10').innerHTML=jogos_E[36];
      document.getElementById('pntstime10').innerHTML=jogos_E[37];
      document.getElementById('nometime10').innerHTML=jogos_E[38];
      document.getElementById('logtime10').innerHTML=jogos_E[39];
      document.getElementById('logtime11').innerHTML=jogos_E[40];
      document.getElementById('nometime11').innerHTML=jogos_E[41];
      document.getElementById('pntstime11').innerHTML=jogos_E[42];
      document.getElementById('golstime11').innerHTML=jogos_E[43];
      document.getElementById('golstime12').innerHTML=jogos_E[44];
      document.getElementById('pntstime12').innerHTML=jogos_E[45];
      document.getElementById('nometime12').innerHTML=jogos_E[46];
      document.getElementById('logtime12').innerHTML=jogos_E[47];
      document.getElementById('logtime13').innerHTML=jogos_E[48];
      document.getElementById('nometime13').innerHTML=jogos_E[49];
      document.getElementById('pntstime13').innerHTML=jogos_E[50];
      document.getElementById('golstime13').innerHTML=jogos_E[51];
      document.getElementById('golstime14').innerHTML=jogos_E[52];
      document.getElementById('pntstime14').innerHTML=jogos_E[53];
      document.getElementById('nometime14').innerHTML=jogos_E[54];
      document.getElementById('logtime14').innerHTML=jogos_E[55];
      document.getElementById('logtime15').innerHTML=jogos_E[56];
      document.getElementById('nometime15').innerHTML=jogos_E[57];
      document.getElementById('pntstime15').innerHTML=jogos_E[58];
      document.getElementById('golstime15').innerHTML=jogos_E[59];
      document.getElementById('golstime16').innerHTML=jogos_E[60];
      document.getElementById('pntstime16').innerHTML=jogos_E[61];
      document.getElementById('nometime16').innerHTML=jogos_E[62];
      document.getElementById('logtime16').innerHTML=jogos_E[63];
      document.getElementById('logtime17').innerHTML=jogos_E[64];
      document.getElementById('nometime17').innerHTML=jogos_E[65];
      document.getElementById('pntstime17').innerHTML=jogos_E[66];
      document.getElementById('golstime17').innerHTML=jogos_E[67];
      document.getElementById('golstime18').innerHTML=jogos_E[68];
      document.getElementById('pntstime18').innerHTML=jogos_E[69];
      document.getElementById('nometime18').innerHTML=jogos_E[70];
      document.getElementById('logtime18').innerHTML=jogos_E[71];
      document.getElementById('logtime19').innerHTML=jogos_E[72];
      document.getElementById('nometime19').innerHTML=jogos_E[73];
      document.getElementById('pntstime19').innerHTML=jogos_E[74];
      document.getElementById('golstime19').innerHTML=jogos_E[75];
      document.getElementById('golstime20').innerHTML=jogos_E[76];
      document.getElementById('pntstime20').innerHTML=jogos_E[77];
      document.getElementById('nometime20').innerHTML=jogos_E[78];
      document.getElementById('logtime20').innerHTML=jogos_E[79];
      document.getElementById('logtime21').innerHTML=jogos_E[80];
      document.getElementById('nometime21').innerHTML=jogos_E[81];
      document.getElementById('pntstime21').innerHTML=jogos_E[82];
      document.getElementById('golstime21').innerHTML=jogos_E[83];
      document.getElementById('golstime22').innerHTML=jogos_E[84];
      document.getElementById('pntstime22').innerHTML=jogos_E[85];
      document.getElementById('nometime22').innerHTML=jogos_E[86];
      document.getElementById('logtime22').innerHTML=jogos_E[87];
      document.getElementById('logtime23').innerHTML=jogos_E[88];
      document.getElementById('nometime23').innerHTML=jogos_E[89];
      document.getElementById('pntstime23').innerHTML=jogos_E[90];
      document.getElementById('golstime23').innerHTML=jogos_E[91];
      document.getElementById('golstime24').innerHTML=jogos_E[92];
      document.getElementById('pntstime24').innerHTML=jogos_E[93];
      document.getElementById('nometime24').innerHTML=jogos_E[94];
      document.getElementById('logtime24').innerHTML=jogos_E[95];

      
      /**CARD DO TÉCNICOS */							
							
							
    document.getElementById("CardNomeTec1").innerHTML=Grupo_E[8].nome;							
    document.getElementById("CardLogo1").innerHTML=Grupo_E[8].logo;							
    document.getElementById("CardLogin1").innerHTML=Grupo_E[8].nomeLogin;							
    document.getElementById("CardId1").innerHTML="Id: "+Grupo_E[8].idCart;							
    document.getElementById("CardDesde1").innerHTML="Liga Rep: "+Grupo_E[1][10];							
    document.getElementById("CarMoral1").innerHTML='Participações: '+Grupo_E[1][11];							
    document.getElementById("CardAssumiu1").innerHTML="Assumiu o clube na "+Grupo_E[1][64]+"ªrod. de "+Grupo_E[1][65];							
    document.getElementById("CardTitulos1_1").innerHTML=Grupo_E[8].titulo1;;							
    document.getElementById("CardTitulos1_2").innerHTML=Grupo_E[8].titulo2;							
    document.getElementById("CardTitulos1_3").innerHTML=Grupo_E[8].titulo3;							
    document.getElementById("CardTitulos1_4").innerHTML=Grupo_E[8].titulo4;							
    document.getElementById("CardTitulos1_5").innerHTML=Grupo_E[8].titulo5;							
    document.getElementById("CardTitulos1_6").innerHTML=Grupo_E[8].titulo6;							
    document.getElementById("CardTitulos1_7").innerHTML=Grupo_E[8].titulo7;							
    document.getElementById("CardTitulos1_8").innerHTML=Grupo_E[8].titulo8;							
    document.getElementById("CardTitulos1_9").innerHTML=Grupo_E[8].titulo9;							
    document.getElementById("CardTitulos1_10").innerHTML=Grupo_E[8].titulo10;							
                  
    document.getElementById("CardNomeTec2").innerHTML=Grupo_E[17].nome;							
    document.getElementById("CardLogo2").innerHTML=Grupo_E[17].logo;							
    document.getElementById("CardLogin2").innerHTML=Grupo_E[17].nomeLogin;							
    document.getElementById("CardId2").innerHTML="Id: "+Grupo_E[17].idCart;							
    document.getElementById("CardDesde2").innerHTML="Liga Rep: "+Grupo_E[10][10];							
    document.getElementById("CarMoral2").innerHTML='Participações: '+Grupo_E[10][11];							
    document.getElementById("CardAssumiu2").innerHTML="Assumiu o clube na "+Grupo_E[10][64]+"ªrod. de "+Grupo_E[10][65];							
    document.getElementById("CardTitulos2_1").innerHTML=Grupo_E[17].titulo1;							
    document.getElementById("CardTitulos2_2").innerHTML=Grupo_E[17].título2;							
    document.getElementById("CardTitulos2_3").innerHTML=Grupo_E[17].titulo3;							
    document.getElementById("CardTitulos2_4").innerHTML=Grupo_E[17].titulo4;							
    document.getElementById("CardTitulos2_5").innerHTML=Grupo_E[17].titulo5;							
    document.getElementById("CardTitulos2_6").innerHTML=Grupo_E[17].titulo6;							
    document.getElementById("CardTitulos2_7").innerHTML=Grupo_E[17].titulo7;							
    document.getElementById("CardTitulos2_8").innerHTML=Grupo_E[17].titulo8;							
    document.getElementById("CardTitulos2_9").innerHTML=Grupo_E[17].titulo9;							
    document.getElementById("CardTitulos2_10").innerHTML=Grupo_E[17].titulo10;							
                  
                  
    document.getElementById("CardNomeTec3").innerHTML=Grupo_E[26].nome;							
    document.getElementById("CardLogo3").innerHTML=Grupo_E[26].logo;							
    document.getElementById("CardLogin3").innerHTML="Login: "+Grupo_E[26].nomeLogin;							
    document.getElementById("CardId3").innerHTML="Id: "+Grupo_E[26].idCart;							
    document.getElementById("CardDesde3").innerHTML="Liga Rep: "+Grupo_E[19][10];							
    document.getElementById("CarMoral3").innerHTML='Participações: '+Grupo_E[19][11];							
    document.getElementById("CardAssumiu3").innerHTML="Assumiu o clube na "+Grupo_E[19][64]+"ªrod. de "+Grupo_E[19][65];							
    document.getElementById("CardTitulos3_1").innerHTML=Grupo_E[26].titulo1;							
    document.getElementById("CardTitulos3_2").innerHTML=Grupo_E[26].titulo2;							
    document.getElementById("CardTitulos3_3").innerHTML=Grupo_E[26].titulo3;							
    document.getElementById("CardTitulos3_4").innerHTML=Grupo_E[26].titulo4;							
    document.getElementById("CardTitulos3_5").innerHTML=Grupo_E[26].titulo5;							
    document.getElementById("CardTitulos3_6").innerHTML=Grupo_E[26].titulo6;							
    document.getElementById("CardTitulos3_7").innerHTML=Grupo_E[26].titulo7;							
    document.getElementById("CardTitulos3_8").innerHTML=Grupo_E[26].titulo8;							
    document.getElementById("CardTitulos3_9").innerHTML=Grupo_E[26].titulo9;							
    document.getElementById("CardTitulos3_10").innerHTML=Grupo_E[26].titulo10;							
                  
    document.getElementById("CardNomeTec4").innerHTML=Grupo_E[35].nome;							
    document.getElementById("CardLogo4").innerHTML=Grupo_E[35].logo;							
    document.getElementById("CardLogin4").innerHTML="Login: "+Grupo_E[35].nomeLogin;							
    document.getElementById("CardId4").innerHTML="Id: "+Grupo_E[35].idCart;							
    document.getElementById("CardDesde4").innerHTML="Liga Rep: "+Grupo_E[28][10];							
    document.getElementById("CarMoral4").innerHTML='Participações: '+Grupo_E[28][11];							
    document.getElementById("CardAssumiu3").innerHTML="Assumiu o clube na "+Grupo_E[28][11]+"ªrod. de "+Grupo_E[28][65];							
    document.getElementById("CardTitulos4_1").innerHTML=Grupo_E[35].titulo1;							
    document.getElementById("CardTitulos4_2").innerHTML=Grupo_E[35].titulo2;							
    document.getElementById("CardTitulos4_3").innerHTML=Grupo_E[35].titulo3;							
    document.getElementById("CardTitulos4_4").innerHTML=Grupo_E[35].titulo4;							
    document.getElementById("CardTitulos4_5").innerHTML=Grupo_E[35].titulo5;							
    document.getElementById("CardTitulos4_6").innerHTML=Grupo_E[35].titulo6;							
    document.getElementById("CardTitulos4_7").innerHTML=Grupo_E[35].titulo7;							
    document.getElementById("CardTitulos4_8").innerHTML=Grupo_E[35].titulo8;							
    document.getElementById("CardTitulos4_9").innerHTML=Grupo_E[35].titulo9;							
    document.getElementById("CardTitulos4_10").innerHTML=Grupo_E[35].titulo10;							
    

      
    }


    else if(CampEscolhido==="Grupo_F"){

      document.getElementById('logclass1').innerHTML=Grupo_F[0];
      document.getElementById('club1').innerHTML=Grupo_F[1][0];
      document.getElementById('pt1').innerHTML=Grupo_F[2];
      document.getElementById('vit1').innerHTML=Grupo_F[3];
      document.getElementById('emp1').innerHTML=Grupo_F[4];
      document.getElementById('der1').innerHTML=Grupo_F[5];
      document.getElementById('gp1').innerHTML=Grupo_F[6];
      document.getElementById('gc1').innerHTML=Grupo_F[7];
      document.getElementById('sd1').innerHTML=Grupo_F[6]-Grupo_F[7];
      document.getElementById('tec1').innerHTML=Grupo_F[8].logo;
    
      document.getElementById('logclass2').innerHTML=Grupo_F[9];
      document.getElementById('club2').innerHTML=Grupo_F[10][0];
      document.getElementById('pt2').innerHTML=Grupo_F[11];
      document.getElementById('vit2').innerHTML=Grupo_F[12];
      document.getElementById('emp2').innerHTML=Grupo_F[13];
      document.getElementById('der2').innerHTML=Grupo_F[14];
      document.getElementById('gp2').innerHTML=Grupo_F[15];
      document.getElementById('gc2').innerHTML=Grupo_F[16];
      document.getElementById('sd2').innerHTML=Grupo_F[15]-Grupo_F[16];
      document.getElementById('tec2').innerHTML=Grupo_F[17].logo;
    
      document.getElementById('logclass3').innerHTML=Grupo_F[18];
      document.getElementById('club3').innerHTML=Grupo_F[19][0];
      document.getElementById('pt3').innerHTML=Grupo_F[20];
      document.getElementById('vit3').innerHTML=Grupo_F[21];
      document.getElementById('emp3').innerHTML=Grupo_F[22];
      document.getElementById('der3').innerHTML=Grupo_F[23];
      document.getElementById('gp3').innerHTML=Grupo_F[24];
      document.getElementById('gc3').innerHTML=Grupo_F[25];
      document.getElementById('sd3').innerHTML=Grupo_F[24]-Grupo_F[25];
      document.getElementById('tec3').innerHTML=Grupo_F[26].logo;
    
      document.getElementById('logclass4').innerHTML=Grupo_F[27];
      document.getElementById('club4').innerHTML=Grupo_F[28][0];
      document.getElementById('pt4').innerHTML=Grupo_F[29];
      document.getElementById('vit4').innerHTML=Grupo_F[30];
      document.getElementById('emp4').innerHTML=Grupo_F[31];
      document.getElementById('der4').innerHTML=Grupo_F[32];
      document.getElementById('gp4').innerHTML=Grupo_F[33];
      document.getElementById('gc4').innerHTML=Grupo_F[34];
      document.getElementById('sd4').innerHTML=Grupo_F[33]-Grupo_F[34];
      document.getElementById('tec4').innerHTML=Grupo_F[35].logo;
    
      document.getElementById('logtime1').innerHTML=jogos_F[0];
      document.getElementById('nometime1').innerHTML=jogos_F[1];
      document.getElementById('pntstime1').innerHTML=jogos_F[2];
      document.getElementById('golstime1').innerHTML=jogos_F[3];
      document.getElementById('golstime2').innerHTML=jogos_F[4];
      document.getElementById('pntstime2').innerHTML=jogos_F[5];
      document.getElementById('nometime2').innerHTML=jogos_F[6];
      document.getElementById('logtime2').innerHTML=jogos_F[7];
      document.getElementById('logtime3').innerHTML=jogos_F[8];
      document.getElementById('nometime3').innerHTML=jogos_F[9];
      document.getElementById('pntstime3').innerHTML=jogos_F[10];
      document.getElementById('golstime3').innerHTML=jogos_F[11];
      document.getElementById('golstime4').innerHTML=jogos_F[12];
      document.getElementById('pntstime4').innerHTML=jogos_F[13];
      document.getElementById('nometime4').innerHTML=jogos_F[14];
      document.getElementById('logtime4').innerHTML=jogos_F[15];
      document.getElementById('logtime5').innerHTML=jogos_F[16];
      document.getElementById('nometime5').innerHTML=jogos_F[17];
      document.getElementById('pntstime5').innerHTML=jogos_F[18];
      document.getElementById('golstime5').innerHTML=jogos_F[19];
      document.getElementById('golstime6').innerHTML=jogos_F[20];
      document.getElementById('pntstime6').innerHTML=jogos_F[21];
      document.getElementById('nometime6').innerHTML=jogos_F[22];
      document.getElementById('logtime6').innerHTML=jogos_F[23];
      document.getElementById('logtime7').innerHTML=jogos_F[24];
      document.getElementById('nometime7').innerHTML=jogos_F[25];
      document.getElementById('pntstime7').innerHTML=jogos_F[26];
      document.getElementById('golstime7').innerHTML=jogos_F[27];
      document.getElementById('golstime8').innerHTML=jogos_F[28];
      document.getElementById('pntstime8').innerHTML=jogos_F[29];
      document.getElementById('nometime8').innerHTML=jogos_F[30];
      document.getElementById('logtime8').innerHTML=jogos_F[31];
      document.getElementById('logtime9').innerHTML=jogos_F[32];
      document.getElementById('nometime9').innerHTML=jogos_F[33];
      document.getElementById('pntstime9').innerHTML=jogos_F[34];
      document.getElementById('golstime9').innerHTML=jogos_F[35];
      document.getElementById('golstime10').innerHTML=jogos_F[36];
      document.getElementById('pntstime10').innerHTML=jogos_F[37];
      document.getElementById('nometime10').innerHTML=jogos_F[38];
      document.getElementById('logtime10').innerHTML=jogos_F[39];
      document.getElementById('logtime11').innerHTML=jogos_F[40];
      document.getElementById('nometime11').innerHTML=jogos_F[41];
      document.getElementById('pntstime11').innerHTML=jogos_F[42];
      document.getElementById('golstime11').innerHTML=jogos_F[43];
      document.getElementById('golstime12').innerHTML=jogos_F[44];
      document.getElementById('pntstime12').innerHTML=jogos_F[45];
      document.getElementById('nometime12').innerHTML=jogos_F[46];
      document.getElementById('logtime12').innerHTML=jogos_F[47];
      document.getElementById('logtime13').innerHTML=jogos_F[48];
      document.getElementById('nometime13').innerHTML=jogos_F[49];
      document.getElementById('pntstime13').innerHTML=jogos_F[50];
      document.getElementById('golstime13').innerHTML=jogos_F[51];
      document.getElementById('golstime14').innerHTML=jogos_F[52];
      document.getElementById('pntstime14').innerHTML=jogos_F[53];
      document.getElementById('nometime14').innerHTML=jogos_F[54];
      document.getElementById('logtime14').innerHTML=jogos_F[55];
      document.getElementById('logtime15').innerHTML=jogos_F[56];
      document.getElementById('nometime15').innerHTML=jogos_F[57];
      document.getElementById('pntstime15').innerHTML=jogos_F[58];
      document.getElementById('golstime15').innerHTML=jogos_F[59];
      document.getElementById('golstime16').innerHTML=jogos_F[60];
      document.getElementById('pntstime16').innerHTML=jogos_F[61];
      document.getElementById('nometime16').innerHTML=jogos_F[62];
      document.getElementById('logtime16').innerHTML=jogos_F[63];
      document.getElementById('logtime17').innerHTML=jogos_F[64];
      document.getElementById('nometime17').innerHTML=jogos_F[65];
      document.getElementById('pntstime17').innerHTML=jogos_F[66];
      document.getElementById('golstime17').innerHTML=jogos_F[67];
      document.getElementById('golstime18').innerHTML=jogos_F[68];
      document.getElementById('pntstime18').innerHTML=jogos_F[69];
      document.getElementById('nometime18').innerHTML=jogos_F[70];
      document.getElementById('logtime18').innerHTML=jogos_F[71];
      document.getElementById('logtime19').innerHTML=jogos_F[72];
      document.getElementById('nometime19').innerHTML=jogos_F[73];
      document.getElementById('pntstime19').innerHTML=jogos_F[74];
      document.getElementById('golstime19').innerHTML=jogos_F[75];
      document.getElementById('golstime20').innerHTML=jogos_F[76];
      document.getElementById('pntstime20').innerHTML=jogos_F[77];
      document.getElementById('nometime20').innerHTML=jogos_F[78];
      document.getElementById('logtime20').innerHTML=jogos_F[79];
      document.getElementById('logtime21').innerHTML=jogos_F[80];
      document.getElementById('nometime21').innerHTML=jogos_F[81];
      document.getElementById('pntstime21').innerHTML=jogos_F[82];
      document.getElementById('golstime21').innerHTML=jogos_F[83];
      document.getElementById('golstime22').innerHTML=jogos_F[84];
      document.getElementById('pntstime22').innerHTML=jogos_F[85];
      document.getElementById('nometime22').innerHTML=jogos_F[86];
      document.getElementById('logtime22').innerHTML=jogos_F[87];
      document.getElementById('logtime23').innerHTML=jogos_F[88];
      document.getElementById('nometime23').innerHTML=jogos_F[89];
      document.getElementById('pntstime23').innerHTML=jogos_F[90];
      document.getElementById('golstime23').innerHTML=jogos_F[91];
      document.getElementById('golstime24').innerHTML=jogos_F[92];
      document.getElementById('pntstime24').innerHTML=jogos_F[93];
      document.getElementById('nometime24').innerHTML=jogos_F[94];
      document.getElementById('logtime24').innerHTML=jogos_F[95];

      

      /**CARD DO TÉCNICOS */


    document.getElementById("CardNomeTec1").innerHTML=Grupo_F[8].nome;
    document.getElementById("CardLogo1").innerHTML=Grupo_F[8].logo;
    document.getElementById("CardLogin1").innerHTML=Grupo_F[8].nomeLogin;
    document.getElementById("CardId1").innerHTML="Id: "+Grupo_F[8].idCart;
    document.getElementById("CardDesde1").innerHTML="Liga Rep: "+Grupo_F[1][10];
    document.getElementById("CarMoral1").innerHTML='Participações: '+Grupo_F[1][11];
    document.getElementById("CardAssumiu1").innerHTML="Assumiu o clube na "+Grupo_F[1][64]+"ªrod. de "+Grupo_F[1][65];
    document.getElementById("CardTitulos1_1").innerHTML=Grupo_F[8].titulo1;;
    document.getElementById("CardTitulos1_2").innerHTML=Grupo_F[8].titulo2;
    document.getElementById("CardTitulos1_3").innerHTML=Grupo_F[8].titulo3;
    document.getElementById("CardTitulos1_4").innerHTML=Grupo_F[8].titulo4;
    document.getElementById("CardTitulos1_5").innerHTML=Grupo_F[8].titulo5;
    document.getElementById("CardTitulos1_6").innerHTML=Grupo_F[8].titulo6;
    document.getElementById("CardTitulos1_7").innerHTML=Grupo_F[8].titulo7;
    document.getElementById("CardTitulos1_8").innerHTML=Grupo_F[8].titulo8;
    document.getElementById("CardTitulos1_9").innerHTML=Grupo_F[8].titulo9;
    document.getElementById("CardTitulos1_10").innerHTML=Grupo_F[8].titulo10;
    
    document.getElementById("CardNomeTec2").innerHTML=Grupo_F[17].nome;
    document.getElementById("CardLogo2").innerHTML=Grupo_F[17].logo;
    document.getElementById("CardLogin2").innerHTML=Grupo_F[17].nomeLogin;
    document.getElementById("CardId2").innerHTML="Id: "+Grupo_F[17].idCart;
    document.getElementById("CardDesde2").innerHTML="Liga Rep: "+Grupo_F[10][10];
    document.getElementById("CarMoral2").innerHTML='Participações: '+Grupo_F[10][11];
    document.getElementById("CardAssumiu2").innerHTML="Assumiu o clube na "+Grupo_F[10][64]+"ªrod. de "+Grupo_F[10][65];
    document.getElementById("CardTitulos2_1").innerHTML=Grupo_F[17].titulo1;
    document.getElementById("CardTitulos2_2").innerHTML=Grupo_F[17].título2;
    document.getElementById("CardTitulos2_3").innerHTML=Grupo_F[17].titulo3;
    document.getElementById("CardTitulos2_4").innerHTML=Grupo_F[17].titulo4;
    document.getElementById("CardTitulos2_5").innerHTML=Grupo_F[17].titulo5;
    document.getElementById("CardTitulos2_6").innerHTML=Grupo_F[17].titulo6;
    document.getElementById("CardTitulos2_7").innerHTML=Grupo_F[17].titulo7;
    document.getElementById("CardTitulos2_8").innerHTML=Grupo_F[17].titulo8;
    document.getElementById("CardTitulos2_9").innerHTML=Grupo_F[17].titulo9;
    document.getElementById("CardTitulos2_10").innerHTML=Grupo_F[17].titulo10;
    
    
    document.getElementById("CardNomeTec3").innerHTML=Grupo_F[26].nome;
    document.getElementById("CardLogo3").innerHTML=Grupo_F[26].logo;
    document.getElementById("CardLogin3").innerHTML="Login: "+Grupo_F[26].nomeLogin;
    document.getElementById("CardId3").innerHTML="Id: "+Grupo_F[26].idCart;
    document.getElementById("CardDesde3").innerHTML="Liga Rep: "+Grupo_F[19][10];
    document.getElementById("CarMoral3").innerHTML='Participações: '+Grupo_F[19][11];
    document.getElementById("CardAssumiu3").innerHTML="Assumiu o clube na "+Grupo_F[19][64]+"ªrod. de "+Grupo_F[19][65];
    document.getElementById("CardTitulos3_1").innerHTML=Grupo_F[26].titulo1;
    document.getElementById("CardTitulos3_2").innerHTML=Grupo_F[26].titulo2;
    document.getElementById("CardTitulos3_3").innerHTML=Grupo_F[26].titulo3;
    document.getElementById("CardTitulos3_4").innerHTML=Grupo_F[26].titulo4;
    document.getElementById("CardTitulos3_5").innerHTML=Grupo_F[26].titulo5;
    document.getElementById("CardTitulos3_6").innerHTML=Grupo_F[26].titulo6;
    document.getElementById("CardTitulos3_7").innerHTML=Grupo_F[26].titulo7;
    document.getElementById("CardTitulos3_8").innerHTML=Grupo_F[26].titulo8;
    document.getElementById("CardTitulos3_9").innerHTML=Grupo_F[26].titulo9;
    document.getElementById("CardTitulos3_10").innerHTML=Grupo_F[26].titulo10;
    
    document.getElementById("CardNomeTec4").innerHTML=Grupo_F[35].nome;
    document.getElementById("CardLogo4").innerHTML=Grupo_F[35].logo;
    document.getElementById("CardLogin4").innerHTML="Login: "+Grupo_F[35].nomeLogin;
    document.getElementById("CardId4").innerHTML="Id: "+Grupo_F[35].idCart;
    document.getElementById("CardDesde4").innerHTML="Liga Rep: "+Grupo_F[28][10];
    document.getElementById("CarMoral4").innerHTML='Participações: '+Grupo_F[28][11];
    document.getElementById("CardAssumiu3").innerHTML="Assumiu o clube na "+Grupo_F[28][11]+"ªrod. de "+Grupo_F[28][65];
    document.getElementById("CardTitulos4_1").innerHTML=Grupo_F[35].titulo1;
    document.getElementById("CardTitulos4_2").innerHTML=Grupo_F[35].titulo2;
    document.getElementById("CardTitulos4_3").innerHTML=Grupo_F[35].titulo3;
    document.getElementById("CardTitulos4_4").innerHTML=Grupo_F[35].titulo4;
    document.getElementById("CardTitulos4_5").innerHTML=Grupo_F[35].titulo5;
    document.getElementById("CardTitulos4_6").innerHTML=Grupo_F[35].titulo6;
    document.getElementById("CardTitulos4_7").innerHTML=Grupo_F[35].titulo7;
    document.getElementById("CardTitulos4_8").innerHTML=Grupo_F[35].titulo8;
    document.getElementById("CardTitulos4_9").innerHTML=Grupo_F[35].titulo9;
    document.getElementById("CardTitulos4_10").innerHTML=Grupo_F[35].titulo10;
    
      
    }




    
    else if(CampEscolhido==="Grupo_G"){

      document.getElementById('logclass1').innerHTML=Grupo_G[0];
      document.getElementById('club1').innerHTML=Grupo_G[1][0];
      document.getElementById('pt1').innerHTML=Grupo_G[2];
      document.getElementById('vit1').innerHTML=Grupo_G[3];
      document.getElementById('emp1').innerHTML=Grupo_G[4];
      document.getElementById('der1').innerHTML=Grupo_G[5];
      document.getElementById('gp1').innerHTML=Grupo_G[6];
      document.getElementById('gc1').innerHTML=Grupo_G[7];
      document.getElementById('sd1').innerHTML=Grupo_G[6]-Grupo_G[7];
      document.getElementById('tec1').innerHTML=Grupo_G[8].logo;
    
      document.getElementById('logclass2').innerHTML=Grupo_G[9];
      document.getElementById('club2').innerHTML=Grupo_G[10][0];
      document.getElementById('pt2').innerHTML=Grupo_G[11];
      document.getElementById('vit2').innerHTML=Grupo_G[12];
      document.getElementById('emp2').innerHTML=Grupo_G[13];
      document.getElementById('der2').innerHTML=Grupo_G[14];
      document.getElementById('gp2').innerHTML=Grupo_G[15];
      document.getElementById('gc2').innerHTML=Grupo_G[16];
      document.getElementById('sd2').innerHTML=Grupo_G[15]-Grupo_G[16];
      document.getElementById('tec2').innerHTML=Grupo_G[17].logo;
    
      document.getElementById('logclass3').innerHTML=Grupo_G[18];
      document.getElementById('club3').innerHTML=Grupo_G[19][0];
      document.getElementById('pt3').innerHTML=Grupo_G[20];
      document.getElementById('vit3').innerHTML=Grupo_G[21];
      document.getElementById('emp3').innerHTML=Grupo_G[22];
      document.getElementById('der3').innerHTML=Grupo_G[23];
      document.getElementById('gp3').innerHTML=Grupo_G[24];
      document.getElementById('gc3').innerHTML=Grupo_G[25];
      document.getElementById('sd3').innerHTML=Grupo_G[24]-Grupo_G[25];
      document.getElementById('tec3').innerHTML=Grupo_G[26].logo;
    
      document.getElementById('logclass4').innerHTML=Grupo_G[27];
      document.getElementById('club4').innerHTML=Grupo_G[28][0];
      document.getElementById('pt4').innerHTML=Grupo_G[29];
      document.getElementById('vit4').innerHTML=Grupo_G[30];
      document.getElementById('emp4').innerHTML=Grupo_G[31];
      document.getElementById('der4').innerHTML=Grupo_G[32];
      document.getElementById('gp4').innerHTML=Grupo_G[33];
      document.getElementById('gc4').innerHTML=Grupo_G[34];
      document.getElementById('sd4').innerHTML=Grupo_G[33]-Grupo_G[34];
      document.getElementById('tec4').innerHTML=Grupo_G[35].logo;
    
      document.getElementById('logtime1').innerHTML=jogos_G[0];
      document.getElementById('nometime1').innerHTML=jogos_G[1];
      document.getElementById('pntstime1').innerHTML=jogos_G[2];
      document.getElementById('golstime1').innerHTML=jogos_G[3];
      document.getElementById('golstime2').innerHTML=jogos_G[4];
      document.getElementById('pntstime2').innerHTML=jogos_G[5];
      document.getElementById('nometime2').innerHTML=jogos_G[6];
      document.getElementById('logtime2').innerHTML=jogos_G[7];
      document.getElementById('logtime3').innerHTML=jogos_G[8];
      document.getElementById('nometime3').innerHTML=jogos_G[9];
      document.getElementById('pntstime3').innerHTML=jogos_G[10];
      document.getElementById('golstime3').innerHTML=jogos_G[11];
      document.getElementById('golstime4').innerHTML=jogos_G[12];
      document.getElementById('pntstime4').innerHTML=jogos_G[13];
      document.getElementById('nometime4').innerHTML=jogos_G[14];
      document.getElementById('logtime4').innerHTML=jogos_G[15];
      document.getElementById('logtime5').innerHTML=jogos_G[16];
      document.getElementById('nometime5').innerHTML=jogos_G[17];
      document.getElementById('pntstime5').innerHTML=jogos_G[18];
      document.getElementById('golstime5').innerHTML=jogos_G[19];
      document.getElementById('golstime6').innerHTML=jogos_G[20];
      document.getElementById('pntstime6').innerHTML=jogos_G[21];
      document.getElementById('nometime6').innerHTML=jogos_G[22];
      document.getElementById('logtime6').innerHTML=jogos_G[23];
      document.getElementById('logtime7').innerHTML=jogos_G[24];
      document.getElementById('nometime7').innerHTML=jogos_G[25];
      document.getElementById('pntstime7').innerHTML=jogos_G[26];
      document.getElementById('golstime7').innerHTML=jogos_G[27];
      document.getElementById('golstime8').innerHTML=jogos_G[28];
      document.getElementById('pntstime8').innerHTML=jogos_G[29];
      document.getElementById('nometime8').innerHTML=jogos_G[30];
      document.getElementById('logtime8').innerHTML=jogos_G[31];
      document.getElementById('logtime9').innerHTML=jogos_G[32];
      document.getElementById('nometime9').innerHTML=jogos_G[33];
      document.getElementById('pntstime9').innerHTML=jogos_G[34];
      document.getElementById('golstime9').innerHTML=jogos_G[35];
      document.getElementById('golstime10').innerHTML=jogos_G[36];
      document.getElementById('pntstime10').innerHTML=jogos_G[37];
      document.getElementById('nometime10').innerHTML=jogos_G[38];
      document.getElementById('logtime10').innerHTML=jogos_G[39];
      document.getElementById('logtime11').innerHTML=jogos_G[40];
      document.getElementById('nometime11').innerHTML=jogos_G[41];
      document.getElementById('pntstime11').innerHTML=jogos_G[42];
      document.getElementById('golstime11').innerHTML=jogos_G[43];
      document.getElementById('golstime12').innerHTML=jogos_G[44];
      document.getElementById('pntstime12').innerHTML=jogos_G[45];
      document.getElementById('nometime12').innerHTML=jogos_G[46];
      document.getElementById('logtime12').innerHTML=jogos_G[47];
      document.getElementById('logtime13').innerHTML=jogos_G[48];
      document.getElementById('nometime13').innerHTML=jogos_G[49];
      document.getElementById('pntstime13').innerHTML=jogos_G[50];
      document.getElementById('golstime13').innerHTML=jogos_G[51];
      document.getElementById('golstime14').innerHTML=jogos_G[52];
      document.getElementById('pntstime14').innerHTML=jogos_G[53];
      document.getElementById('nometime14').innerHTML=jogos_G[54];
      document.getElementById('logtime14').innerHTML=jogos_G[55];
      document.getElementById('logtime15').innerHTML=jogos_G[56];
      document.getElementById('nometime15').innerHTML=jogos_G[57];
      document.getElementById('pntstime15').innerHTML=jogos_G[58];
      document.getElementById('golstime15').innerHTML=jogos_G[59];
      document.getElementById('golstime16').innerHTML=jogos_G[60];
      document.getElementById('pntstime16').innerHTML=jogos_G[61];
      document.getElementById('nometime16').innerHTML=jogos_G[62];
      document.getElementById('logtime16').innerHTML=jogos_G[63];
      document.getElementById('logtime17').innerHTML=jogos_G[64];
      document.getElementById('nometime17').innerHTML=jogos_G[65];
      document.getElementById('pntstime17').innerHTML=jogos_G[66];
      document.getElementById('golstime17').innerHTML=jogos_G[67];
      document.getElementById('golstime18').innerHTML=jogos_G[68];
      document.getElementById('pntstime18').innerHTML=jogos_G[69];
      document.getElementById('nometime18').innerHTML=jogos_G[70];
      document.getElementById('logtime18').innerHTML=jogos_G[71];
      document.getElementById('logtime19').innerHTML=jogos_G[72];
      document.getElementById('nometime19').innerHTML=jogos_G[73];
      document.getElementById('pntstime19').innerHTML=jogos_G[74];
      document.getElementById('golstime19').innerHTML=jogos_G[75];
      document.getElementById('golstime20').innerHTML=jogos_G[76];
      document.getElementById('pntstime20').innerHTML=jogos_G[77];
      document.getElementById('nometime20').innerHTML=jogos_G[78];
      document.getElementById('logtime20').innerHTML=jogos_G[79];
      document.getElementById('logtime21').innerHTML=jogos_G[80];
      document.getElementById('nometime21').innerHTML=jogos_G[81];
      document.getElementById('pntstime21').innerHTML=jogos_G[82];
      document.getElementById('golstime21').innerHTML=jogos_G[83];
      document.getElementById('golstime22').innerHTML=jogos_G[84];
      document.getElementById('pntstime22').innerHTML=jogos_G[85];
      document.getElementById('nometime22').innerHTML=jogos_G[86];
      document.getElementById('logtime22').innerHTML=jogos_G[87];
      document.getElementById('logtime23').innerHTML=jogos_G[88];
      document.getElementById('nometime23').innerHTML=jogos_G[89];
      document.getElementById('pntstime23').innerHTML=jogos_G[90];
      document.getElementById('golstime23').innerHTML=jogos_G[91];
      document.getElementById('golstime24').innerHTML=jogos_G[92];
      document.getElementById('pntstime24').innerHTML=jogos_G[93];
      document.getElementById('nometime24').innerHTML=jogos_G[94];
      document.getElementById('logtime24').innerHTML=jogos_G[95];


      /**CARD DO TÉCNICOS */


    document.getElementById("CardNomeTec1").innerHTML=Grupo_G[8].nome;
    document.getElementById("CardLogo1").innerHTML=Grupo_G[8].logo;
    document.getElementById("CardLogin1").innerHTML=Grupo_G[8].nomeLogin;
    document.getElementById("CardId1").innerHTML="Id: "+Grupo_G[8].idCart;
    document.getElementById("CardDesde1").innerHTML="Liga Rep: "+Grupo_G[1][10];
    document.getElementById("CarMoral1").innerHTML='Participações: '+Grupo_G[1][11];
    document.getElementById("CardAssumiu1").innerHTML="Assumiu o clube na "+Grupo_G[1][64]+"ªrod. de "+Grupo_G[1][65];
    document.getElementById("CardTitulos1_1").innerHTML=Grupo_G[8].titulo1;;
    document.getElementById("CardTitulos1_2").innerHTML=Grupo_G[8].titulo2;
    document.getElementById("CardTitulos1_3").innerHTML=Grupo_G[8].titulo3;
    document.getElementById("CardTitulos1_4").innerHTML=Grupo_G[8].titulo4;
    document.getElementById("CardTitulos1_5").innerHTML=Grupo_G[8].titulo5;
    document.getElementById("CardTitulos1_6").innerHTML=Grupo_G[8].titulo6;
    document.getElementById("CardTitulos1_7").innerHTML=Grupo_G[8].titulo7;
    document.getElementById("CardTitulos1_8").innerHTML=Grupo_G[8].titulo8;
    document.getElementById("CardTitulos1_9").innerHTML=Grupo_G[8].titulo9;
    document.getElementById("CardTitulos1_10").innerHTML=Grupo_G[8].titulo10;
    
    document.getElementById("CardNomeTec2").innerHTML=Grupo_G[17].nome;
    document.getElementById("CardLogo2").innerHTML=Grupo_G[17].logo;
    document.getElementById("CardLogin2").innerHTML=Grupo_G[17].nomeLogin;
    document.getElementById("CardId2").innerHTML="Id: "+Grupo_G[17].idCart;
    document.getElementById("CardDesde2").innerHTML="Liga Rep: "+Grupo_G[10][10];
    document.getElementById("CarMoral2").innerHTML='Participações: '+Grupo_G[10][11];
    document.getElementById("CardAssumiu2").innerHTML="Assumiu o clube na "+Grupo_G[10][64]+"ªrod. de "+Grupo_G[10][65];
    document.getElementById("CardTitulos2_1").innerHTML=Grupo_G[17].titulo1;
    document.getElementById("CardTitulos2_2").innerHTML=Grupo_G[17].título2;
    document.getElementById("CardTitulos2_3").innerHTML=Grupo_G[17].titulo3;
    document.getElementById("CardTitulos2_4").innerHTML=Grupo_G[17].titulo4;
    document.getElementById("CardTitulos2_5").innerHTML=Grupo_G[17].titulo5;
    document.getElementById("CardTitulos2_6").innerHTML=Grupo_G[17].titulo6;
    document.getElementById("CardTitulos2_7").innerHTML=Grupo_G[17].titulo7;
    document.getElementById("CardTitulos2_8").innerHTML=Grupo_G[17].titulo8;
    document.getElementById("CardTitulos2_9").innerHTML=Grupo_G[17].titulo9;
    document.getElementById("CardTitulos2_10").innerHTML=Grupo_G[17].titulo10;
    
    
    document.getElementById("CardNomeTec3").innerHTML=Grupo_G[26].nome;
    document.getElementById("CardLogo3").innerHTML=Grupo_G[26].logo;
    document.getElementById("CardLogin3").innerHTML="Login: "+Grupo_G[26].nomeLogin;
    document.getElementById("CardId3").innerHTML="Id: "+Grupo_G[26].idCart;
    document.getElementById("CardDesde3").innerHTML="Liga Rep: "+Grupo_G[19][10];
    document.getElementById("CarMoral3").innerHTML='Participações: '+Grupo_G[19][11];
    document.getElementById("CardAssumiu3").innerHTML="Assumiu o clube na "+Grupo_G[19][64]+"ªrod. de "+Grupo_G[19][65];
    document.getElementById("CardTitulos3_1").innerHTML=Grupo_G[26].titulo1;
    document.getElementById("CardTitulos3_2").innerHTML=Grupo_G[26].titulo2;
    document.getElementById("CardTitulos3_3").innerHTML=Grupo_G[26].titulo3;
    document.getElementById("CardTitulos3_4").innerHTML=Grupo_G[26].titulo4;
    document.getElementById("CardTitulos3_5").innerHTML=Grupo_G[26].titulo5;
    document.getElementById("CardTitulos3_6").innerHTML=Grupo_G[26].titulo6;
    document.getElementById("CardTitulos3_7").innerHTML=Grupo_G[26].titulo7;
    document.getElementById("CardTitulos3_8").innerHTML=Grupo_G[26].titulo8;
    document.getElementById("CardTitulos3_9").innerHTML=Grupo_G[26].titulo9;
    document.getElementById("CardTitulos3_10").innerHTML=Grupo_G[26].titulo10;
    
    document.getElementById("CardNomeTec4").innerHTML=Grupo_G[35].nome;
    document.getElementById("CardLogo4").innerHTML=Grupo_G[35].logo;
    document.getElementById("CardLogin4").innerHTML="Login: "+Grupo_G[35].nomeLogin;
    document.getElementById("CardId4").innerHTML="Id: "+Grupo_G[35].idCart;
    document.getElementById("CardDesde4").innerHTML="Liga Rep: "+Grupo_G[28][10];
    document.getElementById("CarMoral4").innerHTML='Participações: '+Grupo_G[28][11];
    document.getElementById("CardAssumiu3").innerHTML="Assumiu o clube na "+Grupo_G[28][11]+"ªrod. de "+Grupo_G[28][65];
    document.getElementById("CardTitulos4_1").innerHTML=Grupo_G[35].titulo1;
    document.getElementById("CardTitulos4_2").innerHTML=Grupo_G[35].titulo2;
    document.getElementById("CardTitulos4_3").innerHTML=Grupo_G[35].titulo3;
    document.getElementById("CardTitulos4_4").innerHTML=Grupo_G[35].titulo4;
    document.getElementById("CardTitulos4_5").innerHTML=Grupo_G[35].titulo5;
    document.getElementById("CardTitulos4_6").innerHTML=Grupo_G[35].titulo6;
    document.getElementById("CardTitulos4_7").innerHTML=Grupo_G[35].titulo7;
    document.getElementById("CardTitulos4_8").innerHTML=Grupo_G[35].titulo8;
    document.getElementById("CardTitulos4_9").innerHTML=Grupo_G[35].titulo9;
    document.getElementById("CardTitulos4_10").innerHTML=Grupo_G[35].titulo10;
    

    }


    else if(CampEscolhido==="Grupo_H"){

      document.getElementById('logclass1').innerHTML=Grupo_H[0];
      document.getElementById('club1').innerHTML=Grupo_H[1][0];
      document.getElementById('pt1').innerHTML=Grupo_H[2];
      document.getElementById('vit1').innerHTML=Grupo_H[3];
      document.getElementById('emp1').innerHTML=Grupo_H[4];
      document.getElementById('der1').innerHTML=Grupo_H[5];
      document.getElementById('gp1').innerHTML=Grupo_H[6];
      document.getElementById('gc1').innerHTML=Grupo_H[7];
      document.getElementById('sd1').innerHTML=Grupo_H[6]-Grupo_H[7];
      document.getElementById('tec1').innerHTML=Grupo_H[8].logo;
    
      document.getElementById('logclass2').innerHTML=Grupo_H[9];
      document.getElementById('club2').innerHTML=Grupo_H[10][0];
      document.getElementById('pt2').innerHTML=Grupo_H[11];
      document.getElementById('vit2').innerHTML=Grupo_H[12];
      document.getElementById('emp2').innerHTML=Grupo_H[13];
      document.getElementById('der2').innerHTML=Grupo_H[14];
      document.getElementById('gp2').innerHTML=Grupo_H[15];
      document.getElementById('gc2').innerHTML=Grupo_H[16];
      document.getElementById('sd2').innerHTML=Grupo_H[15]-Grupo_H[16];
      document.getElementById('tec2').innerHTML=Grupo_H[17].logo;
    
      document.getElementById('logclass3').innerHTML=Grupo_H[18];
      document.getElementById('club3').innerHTML=Grupo_H[19][0];
      document.getElementById('pt3').innerHTML=Grupo_H[20];
      document.getElementById('vit3').innerHTML=Grupo_H[21];
      document.getElementById('emp3').innerHTML=Grupo_H[22];
      document.getElementById('der3').innerHTML=Grupo_H[23];
      document.getElementById('gp3').innerHTML=Grupo_H[24];
      document.getElementById('gc3').innerHTML=Grupo_H[25];
      document.getElementById('sd3').innerHTML=Grupo_H[24]-Grupo_H[25];
      document.getElementById('tec3').innerHTML=Grupo_H[26].logo;
    
      document.getElementById('logclass4').innerHTML=Grupo_H[27];
      document.getElementById('club4').innerHTML=Grupo_H[28][0];
      document.getElementById('pt4').innerHTML=Grupo_H[29];
      document.getElementById('vit4').innerHTML=Grupo_H[30];
      document.getElementById('emp4').innerHTML=Grupo_H[31];
      document.getElementById('der4').innerHTML=Grupo_H[32];
      document.getElementById('gp4').innerHTML=Grupo_H[33];
      document.getElementById('gc4').innerHTML=Grupo_H[34];
      document.getElementById('sd4').innerHTML=Grupo_H[33]-Grupo_H[34];
      document.getElementById('tec4').innerHTML=Grupo_H[35].logo;
    
      document.getElementById('logtime1').innerHTML=jogos_H[0];
      document.getElementById('nometime1').innerHTML=jogos_H[1];
      document.getElementById('pntstime1').innerHTML=jogos_H[2];
      document.getElementById('golstime1').innerHTML=jogos_H[3];
      document.getElementById('golstime2').innerHTML=jogos_H[4];
      document.getElementById('pntstime2').innerHTML=jogos_H[5];
      document.getElementById('nometime2').innerHTML=jogos_H[6];
      document.getElementById('logtime2').innerHTML=jogos_H[7];
      document.getElementById('logtime3').innerHTML=jogos_H[8];
      document.getElementById('nometime3').innerHTML=jogos_H[9];
      document.getElementById('pntstime3').innerHTML=jogos_H[10];
      document.getElementById('golstime3').innerHTML=jogos_H[11];
      document.getElementById('golstime4').innerHTML=jogos_H[12];
      document.getElementById('pntstime4').innerHTML=jogos_H[13];
      document.getElementById('nometime4').innerHTML=jogos_H[14];
      document.getElementById('logtime4').innerHTML=jogos_H[15];
      document.getElementById('logtime5').innerHTML=jogos_H[16];
      document.getElementById('nometime5').innerHTML=jogos_H[17];
      document.getElementById('pntstime5').innerHTML=jogos_H[18];
      document.getElementById('golstime5').innerHTML=jogos_H[19];
      document.getElementById('golstime6').innerHTML=jogos_H[20];
      document.getElementById('pntstime6').innerHTML=jogos_H[21];
      document.getElementById('nometime6').innerHTML=jogos_H[22];
      document.getElementById('logtime6').innerHTML=jogos_H[23];
      document.getElementById('logtime7').innerHTML=jogos_H[24];
      document.getElementById('nometime7').innerHTML=jogos_H[25];
      document.getElementById('pntstime7').innerHTML=jogos_H[26];
      document.getElementById('golstime7').innerHTML=jogos_H[27];
      document.getElementById('golstime8').innerHTML=jogos_H[28];
      document.getElementById('pntstime8').innerHTML=jogos_H[29];
      document.getElementById('nometime8').innerHTML=jogos_H[30];
      document.getElementById('logtime8').innerHTML=jogos_H[31];
      document.getElementById('logtime9').innerHTML=jogos_H[32];
      document.getElementById('nometime9').innerHTML=jogos_H[33];
      document.getElementById('pntstime9').innerHTML=jogos_H[34];
      document.getElementById('golstime9').innerHTML=jogos_H[35];
      document.getElementById('golstime10').innerHTML=jogos_H[36];
      document.getElementById('pntstime10').innerHTML=jogos_H[37];
      document.getElementById('nometime10').innerHTML=jogos_H[38];
      document.getElementById('logtime10').innerHTML=jogos_H[39];
      document.getElementById('logtime11').innerHTML=jogos_H[40];
      document.getElementById('nometime11').innerHTML=jogos_H[41];
      document.getElementById('pntstime11').innerHTML=jogos_H[42];
      document.getElementById('golstime11').innerHTML=jogos_H[43];
      document.getElementById('golstime12').innerHTML=jogos_H[44];
      document.getElementById('pntstime12').innerHTML=jogos_H[45];
      document.getElementById('nometime12').innerHTML=jogos_H[46];
      document.getElementById('logtime12').innerHTML=jogos_H[47];
      document.getElementById('logtime13').innerHTML=jogos_H[48];
      document.getElementById('nometime13').innerHTML=jogos_H[49];
      document.getElementById('pntstime13').innerHTML=jogos_H[50];
      document.getElementById('golstime13').innerHTML=jogos_H[51];
      document.getElementById('golstime14').innerHTML=jogos_H[52];
      document.getElementById('pntstime14').innerHTML=jogos_H[53];
      document.getElementById('nometime14').innerHTML=jogos_H[54];
      document.getElementById('logtime14').innerHTML=jogos_H[55];
      document.getElementById('logtime15').innerHTML=jogos_H[56];
      document.getElementById('nometime15').innerHTML=jogos_H[57];
      document.getElementById('pntstime15').innerHTML=jogos_H[58];
      document.getElementById('golstime15').innerHTML=jogos_H[59];
      document.getElementById('golstime16').innerHTML=jogos_H[60];
      document.getElementById('pntstime16').innerHTML=jogos_H[61];
      document.getElementById('nometime16').innerHTML=jogos_H[62];
      document.getElementById('logtime16').innerHTML=jogos_H[63];
      document.getElementById('logtime17').innerHTML=jogos_H[64];
      document.getElementById('nometime17').innerHTML=jogos_H[65];
      document.getElementById('pntstime17').innerHTML=jogos_H[66];
      document.getElementById('golstime17').innerHTML=jogos_H[67];
      document.getElementById('golstime18').innerHTML=jogos_H[68];
      document.getElementById('pntstime18').innerHTML=jogos_H[69];
      document.getElementById('nometime18').innerHTML=jogos_H[70];
      document.getElementById('logtime18').innerHTML=jogos_H[71];
      document.getElementById('logtime19').innerHTML=jogos_H[72];
      document.getElementById('nometime19').innerHTML=jogos_H[73];
      document.getElementById('pntstime19').innerHTML=jogos_H[74];
      document.getElementById('golstime19').innerHTML=jogos_H[75];
      document.getElementById('golstime20').innerHTML=jogos_H[76];
      document.getElementById('pntstime20').innerHTML=jogos_H[77];
      document.getElementById('nometime20').innerHTML=jogos_H[78];
      document.getElementById('logtime20').innerHTML=jogos_H[79];
      document.getElementById('logtime21').innerHTML=jogos_H[80];
      document.getElementById('nometime21').innerHTML=jogos_H[81];
      document.getElementById('pntstime21').innerHTML=jogos_H[82];
      document.getElementById('golstime21').innerHTML=jogos_H[83];
      document.getElementById('golstime22').innerHTML=jogos_H[84];
      document.getElementById('pntstime22').innerHTML=jogos_H[85];
      document.getElementById('nometime22').innerHTML=jogos_H[86];
      document.getElementById('logtime22').innerHTML=jogos_H[87];
      document.getElementById('logtime23').innerHTML=jogos_H[88];
      document.getElementById('nometime23').innerHTML=jogos_H[89];
      document.getElementById('pntstime23').innerHTML=jogos_H[90];
      document.getElementById('golstime23').innerHTML=jogos_H[91];
      document.getElementById('golstime24').innerHTML=jogos_H[92];
      document.getElementById('pntstime24').innerHTML=jogos_H[93];
      document.getElementById('nometime24').innerHTML=jogos_H[94];
      document.getElementById('logtime24').innerHTML=jogos_H[95];

/**CARD DO TÉCNICOS */


document.getElementById("CardNomeTec1").innerHTML=Grupo_H[8].nome;
document.getElementById("CardLogo1").innerHTML=Grupo_H[8].logo;
document.getElementById("CardLogin1").innerHTML=Grupo_H[8].nomeLogin;
document.getElementById("CardId1").innerHTML="Id: "+Grupo_H[8].idCart;
document.getElementById("CardDesde1").innerHTML="Liga Rep: "+Grupo_H[1][10];
document.getElementById("CarMoral1").innerHTML='Participações: '+Grupo_H[1][11];
document.getElementById("CardAssumiu1").innerHTML="Assumiu o clube na "+Grupo_H[1][64]+"ªrod. de "+Grupo_H[1][65];
document.getElementById("CardTitulos1_1").innerHTML=Grupo_H[8].titulo1;;
document.getElementById("CardTitulos1_2").innerHTML=Grupo_H[8].titulo2;
document.getElementById("CardTitulos1_3").innerHTML=Grupo_H[8].titulo3;
document.getElementById("CardTitulos1_4").innerHTML=Grupo_H[8].titulo4;
document.getElementById("CardTitulos1_5").innerHTML=Grupo_H[8].titulo5;
document.getElementById("CardTitulos1_6").innerHTML=Grupo_H[8].titulo6;
document.getElementById("CardTitulos1_7").innerHTML=Grupo_H[8].titulo7;
document.getElementById("CardTitulos1_8").innerHTML=Grupo_H[8].titulo8;
document.getElementById("CardTitulos1_9").innerHTML=Grupo_H[8].titulo9;
document.getElementById("CardTitulos1_10").innerHTML=Grupo_H[8].titulo10;

document.getElementById("CardNomeTec2").innerHTML=Grupo_H[17].nome;
document.getElementById("CardLogo2").innerHTML=Grupo_H[17].logo;
document.getElementById("CardLogin2").innerHTML=Grupo_H[17].nomeLogin;
document.getElementById("CardId2").innerHTML="Id: "+Grupo_H[17].idCart;
document.getElementById("CardDesde2").innerHTML="Liga Rep: "+Grupo_H[10][10];
document.getElementById("CarMoral2").innerHTML='Participações: '+Grupo_H[10][11];
document.getElementById("CardAssumiu2").innerHTML="Assumiu o clube na "+Grupo_H[10][64]+"ªrod. de "+Grupo_H[10][65];
document.getElementById("CardTitulos2_1").innerHTML=Grupo_H[17].titulo1;
document.getElementById("CardTitulos2_2").innerHTML=Grupo_H[17].título2;
document.getElementById("CardTitulos2_3").innerHTML=Grupo_H[17].titulo3;
document.getElementById("CardTitulos2_4").innerHTML=Grupo_H[17].titulo4;
document.getElementById("CardTitulos2_5").innerHTML=Grupo_H[17].titulo5;
document.getElementById("CardTitulos2_6").innerHTML=Grupo_H[17].titulo6;
document.getElementById("CardTitulos2_7").innerHTML=Grupo_H[17].titulo7;
document.getElementById("CardTitulos2_8").innerHTML=Grupo_H[17].titulo8;
document.getElementById("CardTitulos2_9").innerHTML=Grupo_H[17].titulo9;
document.getElementById("CardTitulos2_10").innerHTML=Grupo_H[17].titulo10;


document.getElementById("CardNomeTec3").innerHTML=Grupo_H[26].nome;
document.getElementById("CardLogo3").innerHTML=Grupo_H[26].logo;
document.getElementById("CardLogin3").innerHTML="Login: "+Grupo_H[26].nomeLogin;
document.getElementById("CardId3").innerHTML="Id: "+Grupo_H[26].idCart;
document.getElementById("CardDesde3").innerHTML="Liga Rep: "+Grupo_H[19][10];
document.getElementById("CarMoral3").innerHTML='Participações: '+Grupo_H[19][11];
document.getElementById("CardAssumiu3").innerHTML="Assumiu o clube na "+Grupo_H[19][64]+"ªrod. de "+Grupo_H[19][65];
document.getElementById("CardTitulos3_1").innerHTML=Grupo_H[26].titulo1;
document.getElementById("CardTitulos3_2").innerHTML=Grupo_H[26].titulo2;
document.getElementById("CardTitulos3_3").innerHTML=Grupo_H[26].titulo3;
document.getElementById("CardTitulos3_4").innerHTML=Grupo_H[26].titulo4;
document.getElementById("CardTitulos3_5").innerHTML=Grupo_H[26].titulo5;
document.getElementById("CardTitulos3_6").innerHTML=Grupo_H[26].titulo6;
document.getElementById("CardTitulos3_7").innerHTML=Grupo_H[26].titulo7;
document.getElementById("CardTitulos3_8").innerHTML=Grupo_H[26].titulo8;
document.getElementById("CardTitulos3_9").innerHTML=Grupo_H[26].titulo9;
document.getElementById("CardTitulos3_10").innerHTML=Grupo_H[26].titulo10;

document.getElementById("CardNomeTec4").innerHTML=Grupo_H[35].nome;
document.getElementById("CardLogo4").innerHTML=Grupo_H[35].logo;
document.getElementById("CardLogin4").innerHTML="Login: "+Grupo_H[35].nomeLogin;
document.getElementById("CardId4").innerHTML="Id: "+Grupo_H[35].idCart;
document.getElementById("CardDesde4").innerHTML="Liga Rep: "+Grupo_H[28][10];
document.getElementById("CarMoral4").innerHTML='Participações: '+Grupo_H[28][11];
document.getElementById("CardAssumiu3").innerHTML="Assumiu o clube na "+Grupo_H[28][11]+"ªrod. de "+Grupo_H[28][65];
document.getElementById("CardTitulos4_1").innerHTML=Grupo_H[35].titulo1;
document.getElementById("CardTitulos4_2").innerHTML=Grupo_H[35].titulo2;
document.getElementById("CardTitulos4_3").innerHTML=Grupo_H[35].titulo3;
document.getElementById("CardTitulos4_4").innerHTML=Grupo_H[35].titulo4;
document.getElementById("CardTitulos4_5").innerHTML=Grupo_H[35].titulo5;
document.getElementById("CardTitulos4_6").innerHTML=Grupo_H[35].titulo6;
document.getElementById("CardTitulos4_7").innerHTML=Grupo_H[35].titulo7;
document.getElementById("CardTitulos4_8").innerHTML=Grupo_H[35].titulo8;
document.getElementById("CardTitulos4_9").innerHTML=Grupo_H[35].titulo9;
document.getElementById("CardTitulos4_10").innerHTML=Grupo_H[35].titulo10;



      
    }


    
 



};

  
  // PESQUISA CALENDÁRIO*****************************
  
  
  function pesquisaCalendario() {
    let calendario = parseInt(seletorCalend.value);
  
    
    
  
  
  
  
    
  
  
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


