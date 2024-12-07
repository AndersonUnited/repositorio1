

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
  

  let logotec0="<img src='../imagens/tec0.png' width='100%'>";
  let logotec481="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_225/escudo/dc/46/05/00416d6933-0ff0-404a-9d5a-30aaf972a1dc20240411234605' width='100%'>;"
  let logotec78="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/ce/35/54/00fd2a51ea-c7fe-4667-b2aa-4a5d24352bce20230321083554' width='100%'>;"
  let logotec479="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_222/escudo/9d/53/32/00adcf06c0-3f1c-4e06-ba22-7fe37760fa9d20240314215332' width='100%'>;"
  let logotec573="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_222/escudo/d5/10/14/000cb555d1-c951-46ac-8a89-ead25f727ad520240319141014' width='100%'>;"
  let logotec168="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_222/escudo/97/42/04/00d8fcbb37-606c-45f0-990a-6ef75b17899720240315184204' width='100%'>;"
  let logotec577="<img src='' width='100%'>;"
  let logotec542="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_222/escudo/02/15/57/00b84ab441-7ed5-4688-99bd-1b3f77775b0220240314231557' width='100%'>;"
  let logotec550="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_223/escudo/db/30/08/004997f2f7-be90-4d3b-95c0-00917a7f9cdb20240403113008' width='100%'>;"
  let logotec538="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/82/46/02/00e11973ed-6adf-482b-a92c-43c123abed8220230316234602' width='100%'>";
  let logotec539="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_223/escudo/d0/52/59/00d1a1e589-8485-4570-be0e-02a92632ced020240406095259' width='100%'>;"

  
  
  
  
  
  
  
  
  
  
   /*LOGO DOS CLUBES*/ 
   
   
  let logosemclube="<img src='https://proeleven.pt/uploads/clubs/semclube.png' width='100%''>";
  
  let logoalanly="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/JdNbaaw7JlDHvPHZaX2V2A_96x96.png' width='100%'>";
  let logoatalanta="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/0XmrZHobvb6ua5tgMOnTEA_96x96.png' width='100%'>";
  let logointermiami="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/dn0bMtTbbpx7v3Ieq6TZtQ_96x96.png' width='100%'>";
  let logolazio="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/VCmS5WyitnqY3ECAr0UYGw_96x96.png' width='100%'>";
  let logoleverkusen="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/0zIcXiwD_JGY482DFC28Lw_96x96.png' width='100%'>";
  let logopachuca="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/9dscoX8iYhzbjSNxXVp2gQ_96x96.png' width='100%'>";
  let logokashimaantlers="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/RbZmE26pF5lPuhS6w9EzgA_96x96.png' width='100%'>";
  let logojuventusturin="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/6lal-0xwWtos5HI99HRvuQ_96x96.png' width='100%'>";
  let logoajax="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/WIAAdPpdzFwVKU7maFvJ6w_96x96.png' width='100%'>";
  let logothestrongest="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/n7PctzbrK3SsQvI81bU9DA_96x96.png' width='100%'>";

 

  
  /**CLUBES**/  var semclube={nome:'sem clube',logo:logosemclube,nivel:'citadino',uf:'RS',estadual:'RS2',div:' ',rodingr:'1',obj:'0'};
  
  

let ajax=['Ajax Amsterdam',logoajax,'FALSO','HOL','','',,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','',''];
let alanly=['Al Anly',logoalanly,'','SAU','','',,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','',''];
let atalanta=['Atalanta',logoatalanta,'','ITA','','',,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','',''];
let intermiami=['Inter Miami',logointermiami,'','EUA','','',,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','',''];
let juventusturin=['Juventus Turin',logojuventusturin,'FALSO','ITA','','',,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','',''];
let lazio=['Lazio',logolazio,'','ITA','','',,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','',''];
let leverkusen=['Leverkusen',logoleverkusen,'','ALE','','',,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','',''];
let pachuca=['Pachuca',logopachuca,'','MEX','','',,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','',''];
let kashimaantlers=['Kashima Antlers',logokashimaantlers,'','JAP','','',,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','',''];
let thestrongest=['The Strongest',logothestrongest,'','BOL','','',,'',,,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','',''];

  
  
 
  
  
  /**TECNICOS**/
  let tec0={idCart:'',nome:'Téc. não definido',nomeLogin:'',nomePess:'',anoEnt:'',logo:logotec0,ClubAtual:'',titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec481={idCart:13982371,nome:'Milaneros',nomeLogin:'Allan Milan',nomePess:'opcional',anoEnt:2024,logo:logotec481,ClubAtual:alanly,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
let tec78={idCart:3279605,nome:'Gardena Show',nomeLogin:'Alexandre Bizarro',nomePess:'opcional',anoEnt:2019,logo:logotec78,ClubAtual:atalanta,titulo1:'Nacional 2023 (Sport)',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
let tec479={idCart:1195649,nome:'Junasso 13',nomeLogin:'Junasso 13',nomePess:'opcional',anoEnt:2024,logo:logotec479,ClubAtual:intermiami,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
let tec573={idCart:12008991,nome:'campeãofifabage',nomeLogin:'Alexandro ferreira',nomePess:'opcional',anoEnt:2024,logo:logotec573,ClubAtual:lazio,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
let tec168={idCart:125562,nome:'SelleGalo F.C',nomeLogin:'João Marcus Fonseca',nomePess:'opcional',anoEnt:2021,logo:logotec168,ClubAtual:leverkusen,titulo1:'Mineiro 2023 (América)',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
let tec577={idCart:12008991,nome:'treinador5',nomeLogin:'',nomePess:'opcional',anoEnt:2024,logo:logotec577,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
let tec550={idCart:12008991,nome:'S.C. Cevadas Paulista',nomeLogin:'Thiago A. Wolfmann',nomePess:'opcional',anoEnt:2024,logo:logotec550,ClubAtual:kashimaantlers,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
let tec542={idCart:100756,nome:'Palestra Fox ',nomeLogin:'Paulo Abreu',nomePess:'opcional',anoEnt:2024,logo:logotec542,ClubAtual:pachuca,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
let tec538={idCart:2229073,nome:'Mengao f.c baladeiros',nomeLogin:'Renan P da silva',nomePess:'opcional',anoEnt:2024,logo:logotec538,ClubAtual:pachuca,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};

let tec539={idCart:8499452,nome:'UGAO F.C.',nomeLogin:'Ugo Oliveira',nomePess:'opcional',anoEnt:2024,logo:logotec539,ClubAtual:ajax,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
 


  //*oitvas*****************

  document.getElementById("6fDivclub1").innerHTML="";document.getElementById("6fLogoclub1").innerHTML=logopachuca;document.getElementById("6fNomeclub1").innerHTML="Pachuca";document.getElementById("6fgolj2club1").innerHTML="";document.getElementById("6fgolj1club1").innerHTML="4";document.getElementById("6fNivelclub1").innerHTML="RC";document.getElementById("6fTecclub1").innerHTML=tec538.nome;document.getElementById("6fDivclub2").innerHTML="";document.getElementById("6fLogoclub2").innerHTML=logoatalanta;document.getElementById("6fNomeclub2").innerHTML="Atalanta";document.getElementById("6fgolj1club2").innerHTML="3";document.getElementById("6fgolj2club2").innerHTML="";document.getElementById("6fNivelclub2").innerHTML="2627";document.getElementById("6fTecclub2").innerHTML=tec78.nome;
  document.getElementById("6fDivclub3").innerHTML="";document.getElementById("6fLogoclub3").innerHTML=logolazio;document.getElementById("6fNomeclub3").innerHTML="Lazio";document.getElementById("6fgolj2club3").innerHTML="";document.getElementById("6fgolj1club3").innerHTML="4";document.getElementById("6fNivelclub3").innerHTML="2704";document.getElementById("6fTecclub3").innerHTML=tec573.nome;document.getElementById("6fDivclub4").innerHTML="";document.getElementById("6fLogoclub4").innerHTML=logointermiami;document.getElementById("6fNomeclub4").innerHTML="Inter Miami";document.getElementById("6fgolj1club4").innerHTML="3";document.getElementById("6fgolj2club4").innerHTML="";document.getElementById("6fNivelclub4").innerHTML="2738";document.getElementById("6fTecclub4").innerHTML=tec479.nome;
  document.getElementById("6fDivclub5").innerHTML="";document.getElementById("6fLogoclub5").innerHTML=logojuventusturin;document.getElementById("6fNomeclub5").innerHTML="Juventus Turin";document.getElementById("6fgolj2club5").innerHTML="";document.getElementById("6fgolj1club5").innerHTML="4";document.getElementById("6fNivelclub5").innerHTML="CH";document.getElementById("6fTecclub5").innerHTML=tec542.nome;document.getElementById("6fDivclub6").innerHTML="";document.getElementById("6fLogoclub6").innerHTML=logokashimaantlers;document.getElementById("6fNomeclub6").innerHTML="Kashima Antlers";document.getElementById("6fgolj1club6").innerHTML="4";document.getElementById("6fgolj2club6").innerHTML="";document.getElementById("6fNivelclub6").innerHTML="2544";document.getElementById("6fTecclub6").innerHTML=tec550.nome;
  document.getElementById("6fDivclub7").innerHTML="";document.getElementById("6fLogoclub7").innerHTML=logoalanly;document.getElementById("6fNomeclub7").innerHTML="Al Anly";document.getElementById("6fgolj2club7").innerHTML="";document.getElementById("6fgolj1club7").innerHTML="3";document.getElementById("6fNivelclub7").innerHTML="2574";document.getElementById("6fTecclub7").innerHTML=tec481.nome;document.getElementById("6fDivclub8").innerHTML="";document.getElementById("6fLogoclub8").innerHTML=logoleverkusen;document.getElementById("6fNomeclub8").innerHTML="Leverkusen";document.getElementById("6fgolj1club8").innerHTML="4";document.getElementById("6fgolj2club8").innerHTML="";document.getElementById("6fNivelclub8").innerHTML="CDC";document.getElementById("6fTecclub8").innerHTML=tec168.nome;
    
  
    //*quartas*****************
    document.getElementById("7fDivclub1").innerHTML="";document.getElementById("7fLogoclub1").innerHTML=logopachuca;document.getElementById("7fNomeclub1").innerHTML="Pachuca";document.getElementById("7fgolj2club1").innerHTML="";document.getElementById("7fgolj1club1").innerHTML="4";document.getElementById("7fNivelclub1").innerHTML="RC";document.getElementById("7fTecclub1").innerHTML=tec538.nome;document.getElementById("7fDivclub2").innerHTML="";document.getElementById("7fLogoclub2").innerHTML=logolazio;document.getElementById("7fNomeclub2").innerHTML="Lazio";document.getElementById("7fgolj1club2").innerHTML="2";document.getElementById("7fgolj2club2").innerHTML="";document.getElementById("7fNivelclub2").innerHTML="2627";document.getElementById("7fTecclub2").innerHTML=tec573.nome;
    document.getElementById("7fDivclub3").innerHTML="";document.getElementById("7fLogoclub3").innerHTML=logojuventusturin;document.getElementById("7fNomeclub3").innerHTML="Juventus Turin";document.getElementById("7fgolj2club3").innerHTML="";document.getElementById("7fgolj1club3").innerHTML="2";document.getElementById("7fNivelclub3").innerHTML="CH";document.getElementById("7fTecclub3").innerHTML=tec542.nome;document.getElementById("7fDivclub4").innerHTML="";document.getElementById("7fLogoclub4").innerHTML=logoleverkusen;document.getElementById("7fNomeclub4").innerHTML="Leverkusen";document.getElementById("7fgolj1club4").innerHTML="3";document.getElementById("7fgolj2club4").innerHTML="";document.getElementById("7fNivelclub4").innerHTML="CDC";document.getElementById("7fTecclub4").innerHTML=tec168.nome;
        


  
    //*semi*****************
    document.getElementById("8fDivclub1").innerHTML="";document.getElementById("8fLogoclub1").innerHTML=logoajax;document.getElementById("8fNomeclub1").innerHTML="Ajax Amsterdam";document.getElementById("8fgolj2club1").innerHTML="";document.getElementById("8fgolj1club1").innerHTML="1";document.getElementById("8fNivelclub1").innerHTML="CH";document.getElementById("8fTecclub1").innerHTML=tec539.nome;document.getElementById("8fDivclub2").innerHTML="";document.getElementById("8fLogoclub2").innerHTML=logopachuca;document.getElementById("8fNomeclub2").innerHTML="Pachuca";document.getElementById("8fgolj1club2").innerHTML="2";document.getElementById("8fgolj2club2").innerHTML="";document.getElementById("8fNivelclub2").innerHTML="2627";document.getElementById("8fTecclub2").innerHTML=tec538.nome;
    document.getElementById("8fDivclub3").innerHTML="";document.getElementById("8fLogoclub3").innerHTML=logothestrongest;document.getElementById("8fNomeclub3").innerHTML="The Strongest";document.getElementById("8fgolj2club3").innerHTML="";document.getElementById("8fgolj1club3").innerHTML="1";document.getElementById("8fNivelclub3").innerHTML="LIB";document.getElementById("8fTecclub3").innerHTML=tec479.nome;document.getElementById("8fDivclub4").innerHTML="";document.getElementById("8fLogoclub4").innerHTML=logoleverkusen;document.getElementById("8fNomeclub4").innerHTML="Leverkusen";document.getElementById("8fgolj1club4").innerHTML="0";document.getElementById("8fgolj2club4").innerHTML="";document.getElementById("8fNivelclub4").innerHTML="CDC";document.getElementById("8fTecclub4").innerHTML=tec168.nome;

    //final**************************
    document.getElementById("9fDivclub1").innerHTML="";document.getElementById("9fLogoclub1").innerHTML=logothestrongest;document.getElementById("9fNomeclub1").innerHTML="The Strongest";document.getElementById("9fgolj2club1").innerHTML="";document.getElementById("9fgolj1club1").innerHTML="";document.getElementById("9fNivelclub1").innerHTML="LIB";document.getElementById("9fTecclub1").innerHTML=tec479.nome;document.getElementById("9fDivclub2").innerHTML="";document.getElementById("9fLogoclub2").innerHTML=logopachuca;document.getElementById("9fNomeclub2").innerHTML="Pachuca";document.getElementById("9fgolj1club2").innerHTML="";document.getElementById("9fgolj2club2").innerHTML="";document.getElementById("9fNivelclub2").innerHTML="2627";document.getElementById("9fTecclub2").innerHTML=tec538.nome;

  
  
  
  
  //**ATUALIZAÇÕES DA RODADA*****************
    

  
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


