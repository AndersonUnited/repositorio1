

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


let logotec4="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_219/escudo/ae/23/59/00e52f15c1-c2da-41d3-afd2-dfd2fa8319ae20230506002359' width='100%'>;"
let logotec14="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/e7/16/16/005af993eb-3301-44e1-8d70-3a8f8b1882e720230323111616' width='100%'>;"
let logotec32="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_185/escudo/f8/08/26/008da79acb-6d73-4e6f-903b-24579e162ff820210429230826' width='100%'>;"
let logotec44="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_210/escudo/d2/39/46/0024043b4c-40c7-4381-be14-bedd5c0e9fd220230316133946' width='100%'>;"
let logotec56="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_213/escudo/cf/38/49/0055911594-56fd-42b5-b62c-3fd5f0e339cf20230410173849' width='100%'>;"
let logotec64="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_221/escudo/7e/15/57/00ccb5df99-99c9-4ccf-8dc1-6c9d1d88607e20230905021557' width='100%'>;"
let logotec174="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_219/escudo/03/16/24/00a6bb7a8a-103a-4b8a-9bd6-f4507f82070320230508091624' width='120'>;"
let logotec96="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/15/59/04/00e5fb53fb-035b-44b8-8024-da09b497ad1520230322105904' width='100%'>;"
let logotec143="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_200/escudo/cb/37/26/00ebc54814-a1c6-49a0-88e7-773a7b2252cb20220312233726' width='100%'>;"
let logotec163="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/39/25/47/0034f01df0-8ed7-4992-accd-d26ba0c2d43920230323132547' width='100%'>;"
let logotec166="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/fb/58/12/00c958ba3b-d6cd-4304-8ba5-f1ce6fde3cfb20230316145812' width='100%'>;"
let logotec169="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_215/escudo/46/09/37/00316afab6-8a81-412f-942e-0135b1c49a4620230414130937' width='100%'>;"
let logotec178="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_213/escudo/55/35/58/00e89eb2d4-d254-406d-b556-4c04a501635520230407093558' width='100%'>;"
let logotec180="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/17/14/52/00b98d806d-26f2-43a8-9995-25c61efa6e1720230325131452' width='100%'>;"
let logotec193="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_213/escudo/0a/55/47/00eec2f01a-9b7b-4d81-a2ae-b12b03e90a0a20230411085547' width='100%'>;"
let logotec200="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/ef/52/03/006faea312-57a5-4f87-96c1-c02a781251ef20230404105203' width='100%'>;"
let logotec228="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_214/escudo/27/37/27/004c3c185b-6bf4-4e9b-87da-6825a6c91b2720230412233727' width='100%'>;"
let logotec231="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_210/escudo/c7/47/11/0085016be8-72cf-4c54-b6d0-aba678d2d2c720230316144711' width='100%'>;"
let logotec280="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_216/escudo/9b/23/13/00e654422f-90f6-4a75-802b-9a61efb4229b20230415152313' width='100%'>;"
let logotec446="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_222/escudo/e8/01/03/00e35358b0-cf19-40be-a029-56fc94a0cae820240319100103' width='100%'>;"





 /*LOGO DOS CLUBES*/ 
 
 
let logosemclube="<img src='https://proeleven.pt/uploads/clubs/semclube.png' width='100%'>";

let logoabc="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/3F5mqKWA4_qE8e-gvp5F-g_96x96.png' width='100%'>";
let logoathletic="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/S9CYRaQLMRSpASVWqjl17A_96x96.png' width='100%'>";
let logoavai="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/9cwCmoBXGaPJ_Q5cgUeocg_96x96.png' width='100%'>";
let logobotafogopb="<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/BotafogoPB_logo.png/180px-BotafogoPB_logo.png' width='100%'>";
let logobotafogosp="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/VYXHOgQwI7tw3EyFlWngWg_96x96.png' width='100%'>";
let logobrusque="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/ykKt1U6PEpMP7iiXwZvdBQ_96x96.png' width='100%'>";
let logocaxias="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/pcaKCn2_lq0vUa7SESw_wQ_96x96.png' width='100%'>";
let logocrb="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/zEM-aepnkjTSoBMW9LH_Qw_48x48.png' width='100%'>";
let logocsa="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/xQkyuz2y935JX0uIi9w6Lg_96x96.png' width='100%'>";
let logoferroviariasp="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/CD4zI_mvHVrKZaMhYQjiJg_96x96.png' width='100%'>";
let logoferroviario="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/VSFVnnpYTvXUXors2TWCGw_96x96.png' width='100%'>";
let logofigueirense="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/BvJRLFf6J6ZcpQfZppP2_A_96x96.png' width='100%'>";
let logoituano="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/d_-UoAOHszNZufgbaFSLXQ_96x96.png' width='100%'>";
let logojuventude="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/JrXw-m4Dov0gE2Sh6XJQMQ_96x96.png' width='100%'>";
let logolondrina="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/e7TVDQHlKXSPLpNT58XzBA_96x96.png' width='100%'>";
let logomirassol="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/eQ05kONtFs6kLBgww3MHsg_96x96.png' width='100%'>";
let logoremo="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/bENrK5iSMF6sXrEkDNNxng_96x96.png' width='100%'>";
let logotombense="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/hVv2tWVGqcgg_W-j_oputw_96x96.png' width='100%'>";
let logovilanova="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/v3upsCABZm2skuxyszzvwg_96x96.png' width='100%'>";
let logoypirangars="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/hNX_cbKDANEj_oTo1jlL7Q_96x96.png' width='100%'>";





/**CLUBES**/  var semclube={nome:'sem clube',logo:logosemclube,nivel:'citadino',uf:'RS',estadual:'RS2',div:' ',rodingr:'1',obj:'0'};


let abc=['ABC',logoabc,'Estadual','RN','NO','C',1,'G4',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
let athletic=['Athletic',logoathletic,'Citadino','MG','MG','C',1,'SUBIR',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
let avai=['Avaí',logoavai,'Pequeno','SC','SC','C',1,'G4',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
let botafogopb=['Botafogo-PB',logobotafogopb,'Regional','PB','NO','C',1,'G13',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
let botafogosp=['Botafogo-SP',logobotafogosp,'Regional','SP','SP','C',1,'G13',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
let brusque=['Brusque',logobrusque,'Regional','SC','SC1','C',1,'G13',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
let caxias=['Caxias',logocaxias,'Regional','RS','RS','C',1,'G13',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
let crb=['CRB',logocrb,'Estadual','AL','NO1','C',1,'G8',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
let csa=['CSA',logocsa,'Estadual','AL','NO','C',1,'G8',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
let ferroviariasp=['Ferroviária-SP',logoferroviariasp,'Citadino','SP','SP1','C',1,'SUBIR',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
let ferroviario=['Ferroviário',logoferroviario,'Regional','CE','CE','C',1,'G4',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
let figueirense=['Figueirense',logofigueirense,'Pequeno','SC','SC','C',1,'G4',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
let ituano=['Ituano',logoituano,'Regional','SP','SP1','C',1,'SUBIR',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
let juventude=['Juventude',logojuventude,'Pequeno','RS','RS','C',1,'G4',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
let londrina=['Londrina',logolondrina,'Estadual','PR','PR','C',1,'G8',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
let mirassol=['Mirassol',logomirassol,'Citadino','SP','SP1','C',1,'SUBIR',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
let remo=['Remo',logoremo,'Pequeno','PA','NN','C',1,'G4',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
let tombense=['Tombense',logotombense,'Citadino','MG','MG','C',1,'G16',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
let vilanova=['Vila Nova',logovilanova,'Estadual','GO','GO','C',1,'G8',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
let ypirangars=['Ypiranga-RS',logoypirangars,'Citadino','RS','RS','C',1,'G16',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];






/**TECNICOS**/

let tec4={idCart:14264,nome:'AEGB Bravo',nomeLogin:'Anderson Gomes Bravo',nomePess:'opcional',anoEnt:2020,logo:logotec4,ClubAtual:figueirense,titulo1:'Baiano 2020',titulo2:'Nacional 2020',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
let tec14={idCart:8606472,nome:'Anderson United',nomeLogin:'ANDERSON NUNES',nomePess:'opcional',anoEnt:2017,logo:logotec14,ClubAtual:caxias,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
let tec32={idCart:9699807,nome:'Botafogo Rpo',nomeLogin:'Mário Luciano',nomePess:'opcional',anoEnt:2023,logo:logotec32,ClubAtual:botafogosp,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
let tec44={idCart:3379407,nome:'Botafogo Ita Pb ',nomeLogin:'Heliabe Aquino',nomePess:'opcional',anoEnt:2023,logo:logotec44,ClubAtual:botafogopb,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
let tec56={idCart:3950716,nome:'CSA FC',nomeLogin:'Nando',nomePess:'opcional',anoEnt:2023,logo:logotec56,ClubAtual:csa,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
let tec64={idCart:2793179,nome:'FC CHANANECO',nomeLogin:'LMC',nomePess:'opcional',anoEnt:2017,logo:logotec64,ClubAtual:remo,titulo1:'Libertadores 2018',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
let tec174={idCart:28466821,nome:'Stepanski FC',nomeLogin:'Ariel Stepanski',nomePess:'opcional',anoEnt:2023,logo:logotec174,ClubAtual:ferroviario,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
let tec96={idCart:29515028,nome:'Ituano A',nomeLogin:'Pedro',nomePess:'opcional',anoEnt:2023,logo:logotec96,ClubAtual:ituano,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
let tec143={idCart:14755901,nome:'Praiano Imortal',nomeLogin:'Silvio Ferreira',nomePess:'opcional',anoEnt:2023,logo:logotec143,ClubAtual:abc,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
let tec163={idCart:3667819,nome:'Sport Club Izacar',nomeLogin:'RANGEL BARROS',nomePess:'opcional',anoEnt:2020,logo:logotec163,ClubAtual:avai,titulo1:'Mineiro 2020',titulo2:'Paulista 2023 (Bragantino)',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
let tec166={idCart:120938,nome:'S.C XAVANTE',nomeLogin:'Denis Trindade',nomePess:'opcional',anoEnt:2021,logo:logotec166,ClubAtual:athletic,titulo1:'Carioca 2022',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
let tec169={idCart:3790993,nome:'SER GEESNA',nomeLogin:'Marcos Diogo',nomePess:'opcional',anoEnt:2017,logo:logotec169,ClubAtual:juventude,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
let tec178={idCart:47688275,nome:'EC TOMBENSE MG',nomeLogin:'Gabriel Rocha',nomePess:'opcional',anoEnt:2023,logo:logotec178,ClubAtual:tombense,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
let tec180={idCart:14157276,nome:'Ferroviária A.F.E.',nomeLogin:'Roberto Roque',nomePess:'opcional',anoEnt:2023,logo:logotec180,ClubAtual:ferroviariasp,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
let tec193={idCart:18702038,nome:' Vila Real Goiânia ',nomeLogin:'João Victor',nomePess:'opcional',anoEnt:2023,logo:logotec193,ClubAtual:vilanova,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
let tec200={idCart:47664671,nome:'ztalihc10',nomeLogin:'wladimir ztalihc',nomePess:'opcional',anoEnt:2022,logo:logotec200,ClubAtual:ypirangars,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
let tec228={idCart:1111889,nome:'André CRB-AL',nomeLogin:'André Amorim',nomePess:'opcional',anoEnt:2023,logo:logotec228,ClubAtual:crb,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
let tec231={idCart:27996399,nome:'Sou Londrina EC ',nomeLogin:'Luiz Marcelo Gazzoni',nomePess:'opcional',anoEnt:2023,logo:logotec231,ClubAtual:londrina,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
let tec280={idCart:19493539,nome:'C.E.F MIRASSOL ',nomeLogin:'Anderson',nomePess:'opcional',anoEnt:2023,logo:logotec280,ClubAtual:mirassol,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
let tec446={idCart:28864248,nome:'RF PRESTADORA DE SERVIÇOS',nomeLogin:'Ricardo de Freitas',nomePess:'opcional',anoEnt:2024,logo:logotec446,ClubAtual:brusque,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};









/*CALENDÁRIO SÉRIE A 2024**/









/*SÉRIA A*/





/*CAMPO DE ATUALIZAÇÕES CLASSIFICAÇÃO GERAL */

let rod1=[abc,'','G16',0,0,0,0,0,0,0,'','','','','','0',tec143,athletic,'','G13',0,0,0,0,0,0,0,'','','','','','0',tec166,avai,'','G16',0,0,0,0,0,0,0,'','','','','','0',tec163,botafogopb,'','G8',0,0,0,0,0,0,0,'','','','','','0',tec44,botafogosp,'','G4',0,0,0,0,0,0,0,'','','','','','0',tec32,brusque,'','G4',0,0,0,0,0,0,0,'','','','','','0',tec446,caxias,'','G4',0,0,0,0,0,0,0,'','','','','','0',tec14,crb,'','G4',0,0,0,0,0,0,0,'','','','','','0',tec228,csa,'','G8',0,0,0,0,0,0,0,'','','','','','0',tec56,ferroviariasp,'','G4',0,0,0,0,0,0,0,'','','','','','0',tec180,ferroviario,'','G8',0,0,0,0,0,0,0,'','','','','','0',tec174,figueirense,'','G13',0,0,0,0,0,0,0,'','','','','','0',tec4,ituano,'','G16',0,0,0,0,0,0,0,'','','','','','0',tec96,juventude,'','SUBIR',0,0,0,0,0,0,0,'','','','','','0',tec169,londrina,'','G8',0,0,0,0,0,0,0,'','','','','','0',tec231,mirassol,'','G8',0,0,0,0,0,0,0,'','','','','','0',tec280,remo,'','G13',0,0,0,0,0,0,0,'','','','','','0',tec64,tombense,'','G8',0,0,0,0,0,0,0,'','','','','','0',tec178,vilanova,'','SUBIR',0,0,0,0,0,0,0,'','','','','','0',tec193,ypirangars,'','G13',0,0,0,0,0,0,0,'','','','','','0',tec200];



/*CAMPO DE ATUALIZAÇÕES CALENDÁRIO */

let calend1=[logoabc,'',tec143,'0,00',logoathletic,'',tec166,'0,00',logoavai,'',tec163,'0,00',logobotafogopb,'',tec44,'0,00',logobotafogosp,'',tec32,'0,00',logobrusque,'',tec446,'0,00',logocaxias,'',tec14,'0,00',logocrb,'',tec228,'0,00',logocsa,'',tec56,'0,00',logoferroviariasp,'',tec180,'0,00',logoferroviario,'',tec174,'0,00',logofigueirense,'',tec4,'0,00',logoituano,'',tec96,'0,00',logojuventude,'',tec169,'0,00',logolondrina,'',tec231,'0,00',logomirassol,'',tec280,'0,00',logoremo,'',tec64,'0,00',logotombense,'',tec178,'0,00',logovilanova,'',tec193,'0,00',logoypirangars,'',tec200,'0,00'];
let calend2=[logofigueirense,'',tec4,'0,00',logobotafogosp,'',tec32,'0,00',logojuventude,'',tec169,'0,00',logovilanova,'',tec193,'0,00',logoathletic,'',tec166,'0,00',logocsa,'',tec56,'0,00',logomirassol,'',tec280,'0,00',logoituano,'',tec96,'0,00',logobotafogopb,'',tec44,'0,00',logolondrina,'',tec231,'0,00',logoypirangars,'',tec200,'0,00',logoavai,'',tec163,'0,00',logocrb,'',tec228,'0,00',logoabc,'',tec143,'0,00',logoferroviariasp,'',tec180,'0,00',logoremo,'',tec64,'0,00',logobrusque,'',tec446,'0,00',logocaxias,'',tec14,'0,00',logotombense,'',tec178,'0,00',logoferroviario,'',tec174,'0,00'];
let calend3=[logoabc,'',tec143,'0,00',logocaxias,'',tec14,'0,00',logoavai,'',tec163,'0,00',logolondrina,'',tec231,'0,00',logobotafogosp,'',tec32,'0,00',logoathletic,'',tec166,'0,00',logomirassol,'',tec280,'0,00',logovilanova,'',tec193,'0,00',logobotafogopb,'',tec44,'0,00',logoypirangars,'',tec200,'0,00',logoferroviario,'',tec174,'0,00',logoremo,'',tec64,'0,00',logoituano,'',tec96,'0,00',logocsa,'',tec56,'0,00',logoferroviariasp,'',tec180,'0,00',logofigueirense,'',tec4,'0,00',logobrusque,'',tec446,'0,00',logojuventude,'',tec169,'0,00',logotombense,'',tec178,'0,00',logocrb,'',tec228,'0,00'];
let calend4=[logofigueirense,'',tec4,'0,00',logomirassol,'',tec280,'0,00',logojuventude,'',tec169,'0,00',logoferroviariasp,'',tec180,'0,00',logoathletic,'',tec166,'0,00',logoavai,'',tec163,'0,00',logocaxias,'',tec14,'0,00',logotombense,'',tec178,'0,00',logocsa,'',tec56,'0,00',logobotafogopb,'',tec44,'0,00',logoypirangars,'',tec200,'0,00',logobrusque,'',tec446,'0,00',logocrb,'',tec228,'0,00',logoferroviario,'',tec174,'0,00',logolondrina,'',tec231,'0,00',logoabc,'',tec143,'0,00',logoremo,'',tec64,'0,00',logobotafogosp,'',tec32,'0,00',logovilanova,'',tec193,'0,00',logoituano,'',tec96,'0,00'];
let calend5=[logofigueirense,'',tec4,'0,00',logocrb,'',tec228,'0,00',logojuventude,'',tec169,'0,00',logoremo,'',tec64,'0,00',logobotafogosp,'',tec32,'0,00',logocaxias,'',tec14,'0,00',logomirassol,'',tec280,'0,00',logoferroviario,'',tec174,'0,00',logocsa,'',tec56,'0,00',logoavai,'',tec163,'0,00',logoypirangars,'',tec200,'0,00',logoabc,'',tec143,'0,00',logoituano,'',tec96,'0,00',logolondrina,'',tec231,'0,00',logoferroviariasp,'',tec180,'0,00',logobotafogopb,'',tec44,'0,00',logobrusque,'',tec446,'0,00',logoathletic,'',tec166,'0,00',logovilanova,'',tec193,'0,00',logotombense,'',tec178,'0,00'];
let calend6=[logoabc,'',tec143,'0,00',logoituano,'',tec96,'0,00',logoavai,'',tec163,'0,00',logobotafogosp,'',tec32,'0,00',logoathletic,'',tec166,'0,00',logoferroviariasp,'',tec180,'0,00',logocaxias,'',tec14,'0,00',logoypirangars,'',tec200,'0,00',logobotafogopb,'',tec44,'0,00',logovilanova,'',tec193,'0,00',logoferroviario,'',tec174,'0,00',logojuventude,'',tec169,'0,00',logocrb,'',tec228,'0,00',logobrusque,'',tec446,'0,00',logolondrina,'',tec231,'0,00',logocsa,'',tec56,'0,00',logoremo,'',tec64,'0,00',logofigueirense,'',tec4,'0,00',logotombense,'',tec178,'0,00',logomirassol,'',tec280,'0,00'];
let calend7=[logofigueirense,'',tec4,'0,00',logoabc,'',tec143,'0,00',logojuventude,'',tec169,'0,00',logoathletic,'',tec166,'0,00',logobotafogosp,'',tec32,'0,00',logocrb,'',tec228,'0,00',logocaxias,'',tec14,'0,00',logobotafogopb,'',tec44,'0,00',logocsa,'',tec56,'0,00',logoferroviario,'',tec174,'0,00',logoypirangars,'',tec200,'0,00',logomirassol,'',tec280,'0,00',logoituano,'',tec96,'0,00',logotombense,'',tec178,'0,00',logoferroviariasp,'',tec180,'0,00',logolondrina,'',tec231,'0,00',logobrusque,'',tec446,'0,00',logoremo,'',tec64,'0,00',logovilanova,'',tec193,'0,00',logoavai,'',tec163,'0,00'];
let calend8=[logoabc,'',tec143,'0,00',logoferroviariasp,'',tec180,'0,00',logoavai,'',tec163,'0,00',logocaxias,'',tec14,'0,00',logobotafogosp,'',tec32,'0,00',logoypirangars,'',tec200,'0,00',logomirassol,'',tec280,'0,00',logocsa,'',tec56,'0,00',logobotafogopb,'',tec44,'0,00',logoathletic,'',tec166,'0,00',logoferroviario,'',tec174,'0,00',logovilanova,'',tec193,'0,00',logoituano,'',tec96,'0,00',logofigueirense,'',tec4,'0,00',logolondrina,'',tec231,'0,00',logojuventude,'',tec169,'0,00',logoremo,'',tec64,'0,00',logocrb,'',tec228,'0,00',logotombense,'',tec178,'0,00',logobrusque,'',tec446,'0,00'];
let calend9=[logofigueirense,'',tec4,'0,00',logoavai,'',tec163,'0,00',logojuventude,'',tec169,'0,00',logomirassol,'',tec280,'0,00',logoathletic,'',tec166,'0,00',logoferroviario,'',tec174,'0,00',logocaxias,'',tec14,'0,00',logoremo,'',tec64,'0,00',logocsa,'',tec56,'0,00',logobotafogosp,'',tec32,'0,00',logoypirangars,'',tec200,'0,00',logotombense,'',tec178,'0,00',logocrb,'',tec228,'0,00',logobotafogopb,'',tec44,'0,00',logoferroviariasp,'',tec180,'0,00',logoituano,'',tec96,'0,00',logobrusque,'',tec446,'0,00',logoabc,'',tec143,'0,00',logovilanova,'',tec193,'0,00',logolondrina,'',tec231,'0,00'];
let calend10=[logoabc,'',tec143,'0,00',logovilanova,'',tec193,'0,00',logoavai,'',tec163,'0,00',logoituano,'',tec96,'0,00',logobotafogosp,'',tec32,'0,00',logojuventude,'',tec169,'0,00',logomirassol,'',tec280,'0,00',logobrusque,'',tec446,'0,00',logocsa,'',tec56,'0,00',logofigueirense,'',tec4,'0,00',logoferroviario,'',tec174,'0,00',logocaxias,'',tec14,'0,00',logocrb,'',tec228,'0,00',logoferroviariasp,'',tec180,'0,00',logolondrina,'',tec231,'0,00',logoathletic,'',tec166,'0,00',logoremo,'',tec64,'0,00',logoypirangars,'',tec200,'0,00',logotombense,'',tec178,'0,00',logobotafogopb,'',tec44,'0,00'];
let calend11=[logofigueirense,'',tec4,'0,00',logotombense,'',tec178,'0,00',logojuventude,'',tec169,'0,00',logocrb,'',tec228,'0,00',logobotafogosp,'',tec32,'0,00',logolondrina,'',tec231,'0,00',logomirassol,'',tec280,'0,00',logocaxias,'',tec14,'0,00',logobotafogopb,'',tec44,'0,00',logoabc,'',tec143,'0,00',logoypirangars,'',tec200,'0,00',logoathletic,'',tec166,'0,00',logoituano,'',tec96,'0,00',logoremo,'',tec64,'0,00',logoferroviariasp,'',tec180,'0,00',logoavai,'',tec163,'0,00',logobrusque,'',tec446,'0,00',logoferroviario,'',tec174,'0,00',logovilanova,'',tec193,'0,00',logocsa,'',tec56,'0,00'];
let calend12=[logofigueirense,'',tec4,'0,00',logoypirangars,'',tec200,'0,00',logoavai,'',tec163,'0,00',logoabc,'',tec143,'0,00',logoathletic,'',tec166,'0,00',logomirassol,'',tec280,'0,00',logocaxias,'',tec14,'0,00',logojuventude,'',tec169,'0,00',logobotafogopb,'',tec44,'0,00',logoituano,'',tec96,'0,00',logoferroviario,'',tec174,'0,00',logobotafogosp,'',tec32,'0,00',logocrb,'',tec228,'0,00',logovilanova,'',tec193,'0,00',logolondrina,'',tec231,'0,00',logobrusque,'',tec446,'0,00',logoremo,'',tec64,'0,00',logocsa,'',tec56,'0,00',logotombense,'',tec178,'0,00',logoferroviariasp,'',tec180,'0,00'];
let calend13=[logoabc,'',tec143,'0,00',logoferroviario,'',tec174,'0,00',logojuventude,'',tec169,'0,00',logofigueirense,'',tec4,'0,00',logoathletic,'',tec166,'0,00',logoremo,'',tec64,'0,00',logomirassol,'',tec280,'0,00',logoavai,'',tec163,'0,00',logocsa,'',tec56,'0,00',logotombense,'',tec178,'0,00',logoypirangars,'',tec200,'0,00',logolondrina,'',tec231,'0,00',logoituano,'',tec96,'0,00',logocrb,'',tec228,'0,00',logoferroviariasp,'',tec180,'0,00',logobotafogosp,'',tec32,'0,00',logobrusque,'',tec446,'0,00',logobotafogopb,'',tec44,'0,00',logovilanova,'',tec193,'0,00',logocaxias,'',tec14,'0,00'];
let calend14=[logoabc,'',tec143,'0,00',logocsa,'',tec56,'0,00',logoavai,'',tec163,'0,00',logobrusque,'',tec446,'0,00',logobotafogosp,'',tec32,'0,00',logovilanova,'',tec193,'0,00',logocaxias,'',tec14,'0,00',logofigueirense,'',tec4,'0,00',logobotafogopb,'',tec44,'0,00',logomirassol,'',tec280,'0,00',logoferroviario,'',tec174,'0,00',logoituano,'',tec96,'0,00',logocrb,'',tec228,'0,00',logoathletic,'',tec166,'0,00',logoferroviariasp,'',tec180,'0,00',logoypirangars,'',tec200,'0,00',logoremo,'',tec64,'0,00',logolondrina,'',tec231,'0,00',logotombense,'',tec178,'0,00',logojuventude,'',tec169,'0,00'];
let calend15=[logofigueirense,'',tec4,'0,00',logobotafogopb,'',tec44,'0,00',logojuventude,'',tec169,'0,00',logoavai,'',tec163,'0,00',logoathletic,'',tec166,'0,00',logotombense,'',tec178,'0,00',logomirassol,'',tec280,'0,00',logoabc,'',tec143,'0,00',logocsa,'',tec56,'0,00',logocaxias,'',tec14,'0,00',logoypirangars,'',tec200,'0,00',logocrb,'',tec228,'0,00',logoituano,'',tec96,'0,00',logobotafogosp,'',tec32,'0,00',logolondrina,'',tec231,'0,00',logoferroviario,'',tec174,'0,00',logobrusque,'',tec446,'0,00',logoferroviariasp,'',tec180,'0,00',logovilanova,'',tec193,'0,00',logoremo,'',tec64,'0,00'];
let calend16=[logoabc,'',tec143,'0,00',logoremo,'',tec64,'0,00',logoavai,'',tec163,'0,00',logoferroviario,'',tec174,'0,00',logoathletic,'',tec166,'0,00',logofigueirense,'',tec4,'0,00',logocaxias,'',tec14,'0,00',logolondrina,'',tec231,'0,00',logobotafogopb,'',tec44,'0,00',logojuventude,'',tec169,'0,00',logoypirangars,'',tec200,'0,00',logocsa,'',tec56,'0,00',logocrb,'',tec228,'0,00',logomirassol,'',tec280,'0,00',logoferroviariasp,'',tec180,'0,00',logovilanova,'',tec193,'0,00',logobrusque,'',tec446,'0,00',logoituano,'',tec96,'0,00',logotombense,'',tec178,'0,00',logobotafogosp,'',tec32,'0,00'];
let calend17=[logofigueirense,'',tec4,'0,00',logobrusque,'',tec446,'0,00',logojuventude,'',tec169,'0,00',logoypirangars,'',tec200,'0,00',logobotafogosp,'',tec32,'0,00',logoabc,'',tec143,'0,00',logomirassol,'',tec280,'0,00',logoferroviariasp,'',tec180,'0,00',logocsa,'',tec56,'0,00',logocrb,'',tec228,'0,00',logoferroviario,'',tec174,'0,00',logobotafogopb,'',tec44,'0,00',logoituano,'',tec96,'0,00',logocaxias,'',tec14,'0,00',logolondrina,'',tec231,'0,00',logotombense,'',tec178,'0,00',logoremo,'',tec64,'0,00',logoavai,'',tec163,'0,00',logovilanova,'',tec193,'0,00',logoathletic,'',tec166,'0,00'];
let calend18=[logofigueirense,'',tec4,'0,00',logolondrina,'',tec231,'0,00',logojuventude,'',tec169,'0,00',logocsa,'',tec56,'0,00',logoathletic,'',tec166,'0,00',logoituano,'',tec96,'0,00',logomirassol,'',tec280,'0,00',logobotafogosp,'',tec32,'0,00',logobotafogopb,'',tec44,'0,00',logoremo,'',tec64,'0,00',logoypirangars,'',tec200,'0,00',logoferroviario,'',tec174,'0,00',logocrb,'',tec228,'0,00',logoavai,'',tec163,'0,00',logoferroviariasp,'',tec180,'0,00',logocaxias,'',tec14,'0,00',logobrusque,'',tec446,'0,00',logovilanova,'',tec193,'0,00',logotombense,'',tec178,'0,00',logoabc,'',tec143,'0,00'];
let calend19=[logoabc,'',tec143,'0,00',logojuventude,'',tec169,'0,00',logoavai,'',tec163,'0,00',logotombense,'',tec178,'0,00',logobotafogosp,'',tec32,'0,00',logobotafogopb,'',tec44,'0,00',logocaxias,'',tec14,'0,00',logoathletic,'',tec166,'0,00',logocsa,'',tec56,'0,00',logobrusque,'',tec446,'0,00',logoferroviario,'',tec174,'0,00',logoferroviariasp,'',tec180,'0,00',logoituano,'',tec96,'0,00',logoypirangars,'',tec200,'0,00',logolondrina,'',tec231,'0,00',logocrb,'',tec228,'0,00',logoremo,'',tec64,'0,00',logomirassol,'',tec280,'0,00',logovilanova,'',tec193,'0,00',logofigueirense,'',tec4,'0,00'];
let calend20=[logofigueirense,'',tec4,'0,00',logoferroviario,'',tec174,'0,00',logojuventude,'',tec169,'0,00',logoituano,'',tec96,'0,00',logoathletic,'',tec166,'0,00',logoabc,'',tec143,'0,00',logomirassol,'',tec280,'0,00',logolondrina,'',tec231,'0,00',logobotafogopb,'',tec44,'0,00',logoavai,'',tec163,'0,00',logoypirangars,'',tec200,'0,00',logovilanova,'',tec193,'0,00',logocrb,'',tec228,'0,00',logocaxias,'',tec14,'0,00',logoferroviariasp,'',tec180,'0,00',logocsa,'',tec56,'0,00',logobrusque,'',tec446,'0,00',logobotafogosp,'',tec32,'0,00',logotombense,'',tec178,'0,00',logoremo,'',tec64,'0,00'];
let calend21=[logoabc,'',tec143,'0,00',logocrb,'',tec228,'0,00',logoavai,'',tec163,'0,00',logoypirangars,'',tec200,'0,00',logobotafogosp,'',tec32,'0,00',logofigueirense,'',tec4,'0,00',logocaxias,'',tec14,'0,00',logobrusque,'',tec446,'0,00',logocsa,'',tec56,'0,00',logoathletic,'',tec166,'0,00',logoferroviario,'',tec174,'0,00',logotombense,'',tec178,'0,00',logoituano,'',tec96,'0,00',logomirassol,'',tec280,'0,00',logolondrina,'',tec231,'0,00',logobotafogopb,'',tec44,'0,00',logoremo,'',tec64,'0,00',logoferroviariasp,'',tec180,'0,00',logovilanova,'',tec193,'0,00',logojuventude,'',tec169,'0,00'];
let calend22=[logofigueirense,'',tec4,'0,00',logoferroviariasp,'',tec180,'0,00',logojuventude,'',tec169,'0,00',logobrusque,'',tec446,'0,00',logoathletic,'',tec166,'0,00',logobotafogosp,'',tec32,'0,00',logocaxias,'',tec14,'0,00',logoabc,'',tec143,'0,00',logocsa,'',tec56,'0,00',logoituano,'',tec96,'0,00',logoypirangars,'',tec200,'0,00',logobotafogopb,'',tec44,'0,00',logocrb,'',tec228,'0,00',logotombense,'',tec178,'0,00',logolondrina,'',tec231,'0,00',logoavai,'',tec163,'0,00',logoremo,'',tec64,'0,00',logoferroviario,'',tec174,'0,00',logovilanova,'',tec193,'0,00',logomirassol,'',tec280,'0,00'];
let calend23=[logoabc,'',tec143,'0,00',logolondrina,'',tec231,'0,00',logoavai,'',tec163,'0,00',logoathletic,'',tec166,'0,00',logobotafogosp,'',tec32,'0,00',logoremo,'',tec64,'0,00',logomirassol,'',tec280,'0,00',logofigueirense,'',tec4,'0,00',logobotafogopb,'',tec44,'0,00',logocsa,'',tec56,'0,00',logoferroviario,'',tec174,'0,00',logocrb,'',tec228,'0,00',logoituano,'',tec96,'0,00',logovilanova,'',tec193,'0,00',logoferroviariasp,'',tec180,'0,00',logojuventude,'',tec169,'0,00',logobrusque,'',tec446,'0,00',logoypirangars,'',tec200,'0,00',logotombense,'',tec178,'0,00',logocaxias,'',tec14,'0,00'];
let calend24=[logoabc,'',tec143,'0,00',logoypirangars,'',tec200,'0,00',logoavai,'',tec163,'0,00',logocsa,'',tec56,'0,00',logoathletic,'',tec166,'0,00',logobrusque,'',tec446,'0,00',logocaxias,'',tec14,'0,00',logobotafogosp,'',tec32,'0,00',logobotafogopb,'',tec44,'0,00',logoferroviariasp,'',tec180,'0,00',logoferroviario,'',tec174,'0,00',logomirassol,'',tec280,'0,00',logocrb,'',tec228,'0,00',logofigueirense,'',tec4,'0,00',logolondrina,'',tec231,'0,00',logoituano,'',tec96,'0,00',logoremo,'',tec64,'0,00',logojuventude,'',tec169,'0,00',logotombense,'',tec178,'0,00',logovilanova,'',tec193,'0,00'];
let calend25=[logofigueirense,'',tec4,'0,00',logoremo,'',tec64,'0,00',logojuventude,'',tec169,'0,00',logoferroviario,'',tec174,'0,00',logobotafogosp,'',tec32,'0,00',logoavai,'',tec163,'0,00',logomirassol,'',tec280,'0,00',logotombense,'',tec178,'0,00',logocsa,'',tec56,'0,00',logolondrina,'',tec231,'0,00',logoypirangars,'',tec200,'0,00',logocaxias,'',tec14,'0,00',logoituano,'',tec96,'0,00',logoabc,'',tec143,'0,00',logoferroviariasp,'',tec180,'0,00',logoathletic,'',tec166,'0,00',logobrusque,'',tec446,'0,00',logocrb,'',tec228,'0,00',logovilanova,'',tec193,'0,00',logobotafogopb,'',tec44,'0,00'];
let calend26=[logoabc,'',tec143,'0,00',logofigueirense,'',tec4,'0,00',logoavai,'',tec163,'0,00',logovilanova,'',tec193,'0,00',logoathletic,'',tec166,'0,00',logojuventude,'',tec169,'0,00',logomirassol,'',tec280,'0,00',logoypirangars,'',tec200,'0,00',logobotafogopb,'',tec44,'0,00',logocaxias,'',tec14,'0,00',logoferroviario,'',tec174,'0,00',logocsa,'',tec56,'0,00',logocrb,'',tec228,'0,00',logobotafogosp,'',tec32,'0,00',logolondrina,'',tec231,'0,00',logoferroviariasp,'',tec180,'0,00',logoremo,'',tec64,'0,00',logobrusque,'',tec446,'0,00',logotombense,'',tec178,'0,00',logoituano,'',tec96,'0,00'];
let calend27=[logofigueirense,'',tec4,'0,00',logoituano,'',tec96,'0,00',logojuventude,'',tec169,'0,00',logolondrina,'',tec231,'0,00',logoathletic,'',tec166,'0,00',logobotafogopb,'',tec44,'0,00',logocaxias,'',tec14,'0,00',logoavai,'',tec163,'0,00',logocsa,'',tec56,'0,00',logomirassol,'',tec280,'0,00',logoypirangars,'',tec200,'0,00',logobotafogosp,'',tec32,'0,00',logocrb,'',tec228,'0,00',logoremo,'',tec64,'0,00',logoferroviariasp,'',tec180,'0,00',logoabc,'',tec143,'0,00',logobrusque,'',tec446,'0,00',logotombense,'',tec178,'0,00',logovilanova,'',tec193,'0,00',logoferroviario,'',tec174,'0,00'];
let calend28=[logoabc,'',tec143,'0,00',logobrusque,'',tec446,'0,00',logoavai,'',tec163,'0,00',logofigueirense,'',tec4,'0,00',logobotafogosp,'',tec32,'0,00',logocsa,'',tec56,'0,00',logomirassol,'',tec280,'0,00',logojuventude,'',tec169,'0,00',logobotafogopb,'',tec44,'0,00',logocrb,'',tec228,'0,00',logoferroviario,'',tec174,'0,00',logoathletic,'',tec166,'0,00',logoituano,'',tec96,'0,00',logoferroviariasp,'',tec180,'0,00',logolondrina,'',tec231,'0,00',logovilanova,'',tec193,'0,00',logoremo,'',tec64,'0,00',logocaxias,'',tec14,'0,00',logotombense,'',tec178,'0,00',logoypirangars,'',tec200,'0,00'];
let calend29=[logofigueirense,'',tec4,'0,00',logocsa,'',tec56,'0,00',logojuventude,'',tec169,'0,00',logobotafogosp,'',tec32,'0,00',logoathletic,'',tec166,'0,00',logolondrina,'',tec231,'0,00',logocaxias,'',tec14,'0,00',logoferroviario,'',tec174,'0,00',logobotafogopb,'',tec44,'0,00',logotombense,'',tec178,'0,00',logoypirangars,'',tec200,'0,00',logoremo,'',tec64,'0,00',logoituano,'',tec96,'0,00',logoavai,'',tec163,'0,00',logoferroviariasp,'',tec180,'0,00',logocrb,'',tec228,'0,00',logobrusque,'',tec446,'0,00',logomirassol,'',tec280,'0,00',logovilanova,'',tec193,'0,00',logoabc,'',tec143,'0,00'];
let calend30=[logoabc,'',tec143,'0,00',logobotafogopb,'',tec44,'0,00',logoavai,'',tec163,'0,00',logoferroviariasp,'',tec180,'0,00',logoathletic,'',tec166,'0,00',logoypirangars,'',tec200,'0,00',logocaxias,'',tec14,'0,00',logomirassol,'',tec280,'0,00',logocsa,'',tec56,'0,00',logovilanova,'',tec193,'0,00',logoferroviario,'',tec174,'0,00',logobrusque,'',tec446,'0,00',logocrb,'',tec228,'0,00',logojuventude,'',tec169,'0,00',logolondrina,'',tec231,'0,00',logobotafogosp,'',tec32,'0,00',logoremo,'',tec64,'0,00',logoituano,'',tec96,'0,00',logotombense,'',tec178,'0,00',logofigueirense,'',tec4,'0,00'];
let calend31=[logoabc,'',tec143,'0,00',logoavai,'',tec163,'0,00',logojuventude,'',tec169,'0,00',logocaxias,'',tec14,'0,00',logobotafogosp,'',tec32,'0,00',logoferroviario,'',tec174,'0,00',logomirassol,'',tec280,'0,00',logoathletic,'',tec166,'0,00',logocsa,'',tec56,'0,00',logoremo,'',tec64,'0,00',logoypirangars,'',tec200,'0,00',logofigueirense,'',tec4,'0,00',logoituano,'',tec96,'0,00',logobotafogopb,'',tec44,'0,00',logoferroviariasp,'',tec180,'0,00',logotombense,'',tec178,'0,00',logobrusque,'',tec446,'0,00',logolondrina,'',tec231,'0,00',logovilanova,'',tec193,'0,00',logocrb,'',tec228,'0,00'];
let calend32=[logofigueirense,'',tec4,'0,00',logojuventude,'',tec169,'0,00',logoavai,'',tec163,'0,00',logomirassol,'',tec280,'0,00',logobotafogosp,'',tec32,'0,00',logoferroviariasp,'',tec180,'0,00',logocaxias,'',tec14,'0,00',logovilanova,'',tec193,'0,00',logobotafogopb,'',tec44,'0,00',logobrusque,'',tec446,'0,00',logoferroviario,'',tec174,'0,00',logoabc,'',tec143,'0,00',logocrb,'',tec228,'0,00',logoituano,'',tec96,'0,00',logolondrina,'',tec231,'0,00',logoypirangars,'',tec200,'0,00',logoremo,'',tec64,'0,00',logoathletic,'',tec166,'0,00',logotombense,'',tec178,'0,00',logocsa,'',tec56,'0,00'];
let calend33=[logofigueirense,'',tec4,'0,00',logocaxias,'',tec14,'0,00',logojuventude,'',tec169,'0,00',logotombense,'',tec178,'0,00',logoathletic,'',tec166,'0,00',logocrb,'',tec228,'0,00',logomirassol,'',tec280,'0,00',logobotafogopb,'',tec44,'0,00',logocsa,'',tec56,'0,00',logoabc,'',tec143,'0,00',logoypirangars,'',tec200,'0,00',logoferroviariasp,'',tec180,'0,00',logoituano,'',tec96,'0,00',logoferroviario,'',tec174,'0,00',logolondrina,'',tec231,'0,00',logoremo,'',tec64,'0,00',logobrusque,'',tec446,'0,00',logoavai,'',tec163,'0,00',logovilanova,'',tec193,'0,00',logobotafogosp,'',tec32,'0,00'];
let calend34=[logoabc,'',tec143,'0,00',logomirassol,'',tec280,'0,00',logoavai,'',tec163,'0,00',logojuventude,'',tec169,'0,00',logobotafogosp,'',tec32,'0,00',logoituano,'',tec96,'0,00',logocaxias,'',tec14,'0,00',logocsa,'',tec56,'0,00',logobotafogopb,'',tec44,'0,00',logofigueirense,'',tec4,'0,00',logoferroviario,'',tec174,'0,00',logolondrina,'',tec231,'0,00',logocrb,'',tec228,'0,00',logoypirangars,'',tec200,'0,00',logoferroviariasp,'',tec180,'0,00',logobrusque,'',tec446,'0,00',logoremo,'',tec64,'0,00',logovilanova,'',tec193,'0,00',logotombense,'',tec178,'0,00',logoathletic,'',tec166,'0,00'];
let calend35=[logofigueirense,'',tec4,'0,00',logoathletic,'',tec166,'0,00',logojuventude,'',tec169,'0,00',logobotafogopb,'',tec44,'0,00',logobotafogosp,'',tec32,'0,00',logotombense,'',tec178,'0,00',logomirassol,'',tec280,'0,00',logocrb,'',tec228,'0,00',logocsa,'',tec56,'0,00',logoypirangars,'',tec200,'0,00',logoferroviario,'',tec174,'0,00',logoavai,'',tec163,'0,00',logoituano,'',tec96,'0,00',logobrusque,'',tec446,'0,00',logolondrina,'',tec231,'0,00',logocaxias,'',tec14,'0,00',logoremo,'',tec64,'0,00',logoabc,'',tec143,'0,00',logovilanova,'',tec193,'0,00',logoferroviariasp,'',tec180,'0,00'];
let calend36=[logoabc,'',tec143,'0,00',logobotafogosp,'',tec32,'0,00',logoavai,'',tec163,'0,00',logoremo,'',tec64,'0,00',logoathletic,'',tec166,'0,00',logovilanova,'',tec193,'0,00',logocaxias,'',tec14,'0,00',logoituano,'',tec96,'0,00',logobotafogopb,'',tec44,'0,00',logoferroviario,'',tec174,'0,00',logoypirangars,'',tec200,'0,00',logojuventude,'',tec169,'0,00',logocrb,'',tec228,'0,00',logocsa,'',tec56,'0,00',logoferroviariasp,'',tec180,'0,00',logomirassol,'',tec280,'0,00',logobrusque,'',tec446,'0,00',logofigueirense,'',tec4,'0,00',logotombense,'',tec178,'0,00',logolondrina,'',tec231,'0,00'];
let calend37=[logoabc,'',tec143,'0,00',logotombense,'',tec178,'0,00',logoavai,'',tec163,'0,00',logocrb,'',tec228,'0,00',logobotafogosp,'',tec32,'0,00',logomirassol,'',tec280,'0,00',logocaxias,'',tec14,'0,00',logoferroviariasp,'',tec180,'0,00',logocsa,'',tec56,'0,00',logojuventude,'',tec169,'0,00',logoferroviario,'',tec174,'0,00',logoypirangars,'',tec200,'0,00',logoituano,'',tec96,'0,00',logoathletic,'',tec166,'0,00',logolondrina,'',tec231,'0,00',logofigueirense,'',tec4,'0,00',logoremo,'',tec64,'0,00',logobotafogopb,'',tec44,'0,00',logovilanova,'',tec193,'0,00',logobrusque,'',tec446,'0,00'];
let calend38=[logofigueirense,'',tec4,'0,00',logovilanova,'',tec193,'0,00',logojuventude,'',tec169,'0,00',logoabc,'',tec143,'0,00',logoathletic,'',tec166,'0,00',logocaxias,'',tec14,'0,00',logomirassol,'',tec280,'0,00',logoremo,'',tec64,'0,00',logobotafogopb,'',tec44,'0,00',logobotafogosp,'',tec32,'0,00',logoypirangars,'',tec200,'0,00',logoituano,'',tec96,'0,00',logocrb,'',tec228,'0,00',logolondrina,'',tec231,'0,00',logoferroviariasp,'',tec180,'0,00',logoferroviario,'',tec174,'0,00',logobrusque,'',tec446,'0,00',logocsa,'',tec56,'0,00',logotombense,'',tec178,'0,00',logoavai,'',tec163,'0,00'];








/**PONTUAÇÕES DOS TÉCNICOS*/








let Rodadas = ['', rod1,];
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




















