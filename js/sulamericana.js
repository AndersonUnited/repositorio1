

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
  let logotec1="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_213/escudo/14/46/27/005094eec9-1628-489a-be6b-4e8d1fb4571420230406144627' width='100%'>";
  let logotec2="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_222/escudo/ce/39/18/0078a1157e-c151-4226-9d46-ca0b468fcfce20240315003918' width='100%'>";
  let logotec3="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/77/13/22/0074a12605-e55f-48f2-8abc-bf1f89ae487720230316211322' width='100%'>";
  let logotec4="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_222/escudo/ae/15/23/00e52f15c1-c2da-41d3-afd2-dfd2fa8319ae20240314131523' width='100%'>";
  let logotec5="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_200/escudo/b5/10/54/00e992ba2a-672e-4107-9923-36eb28e8b1b520220313131054' width='100%'>";
  let logotec6="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_100/escudo/01/55/01/002aaf2d3e-386d-440f-bbbb-9e9b4215ab0120180323085501' width='100%'>";
  let logotec7="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_223/escudo/92/07/31/00ef98baa4-de62-40f8-9aa2-6d7b0cf8269220240328140731' width='100%'>";
  let logotec8="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_183/escudo/07/38/52/004ab33c78-738c-46b4-aea7-8a29ccf4330720210428123852' width='100%'>";
  let logotec9="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_186/escudo/d7/48/19/005caa8b24-a53d-45d4-8512-6e9ba2c5d7d720210507214819' width='100%'>";
  let logotec10="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/09/33/57/001b383c41-f94f-4a38-9d8e-95739659540920230316233357' width='100%'>";
  let logotec11="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_213/escudo/48/27/22/00a764a31c-38ea-4597-9e23-303d19c3334820230410112722' width='100%'>";
  let logotec12="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_199/escudo/cb/37/42/00d0b07a20-9118-476b-ae39-de29bba1e1cb20220310203742' width='100%'>";
  let logotec13="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_213/escudo/a7/59/31/0020cc5cde-dbdb-45c7-b405-a3a9805ccca720230404235931' width='100%'>";
  let logotec14="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/e7/16/16/005af993eb-3301-44e1-8d70-3a8f8b1882e720230323111616' width='100%'>";
  let logotec15="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/ad/07/50/00d6b15f15-18a2-4713-85f6-e977d7034dad20230319100750' width='100%'>";
  let logotec16="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/cb/42/49/002c84f60f-e4e8-4e47-b51a-fe5d5bc21fcb20230321144249' width='100%'>";
  let logotec17="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/ff/52/21/00ebecd1d5-fbff-4230-863c-74aa5117a0ff20230317025221' width='100%'>";
  let logotec18="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_203/escudo/fa/52/51/00da823e0a-ab77-4eed-8b91-bb5daa1295fa20220407135251' width='100%'>";
  let logotec19="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/bf/49/19/006130eb3a-847c-4892-a204-db94f2a8debf20230316194919' width='100%'>";
  let logotec20="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_135/escudo/90/34/55/00c8a54be5-7f24-4a85-b5ca-353cac763d9020190406223455' width='100%'>";
  let logotec21="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/f4/48/25/005c249959-e5f7-4f74-9f03-2b626728ecf420230322174825' width='100%'>";
  let logotec22="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_200/escudo/1a/52/21/00a4a403a0-42a5-4a7d-be1a-9b7957d5f41a20220317145221' width='100%'>";
  let logotec23="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_214/escudo/37/09/42/0049df6502-5560-4a66-b1b5-92fede09993720230412020942' width='100%'>";
  let logotec24="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_216/escudo/aa/23/50/004cf31568-6c3f-4620-b0ba-77cf4fba91aa20230415162350' width='100%'>";
  let logotec25="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_224/escudo/37/54/46/00c3222f41-73db-4d77-827a-34fb60705f3720240410225446' width='100%'>";
  let logotec26="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_133/escudo/85/08/43/00cf8cb52d-7ae1-4e90-814c-913508ef858520190402190843' width='100%'>";
  let logotec27="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/34/39/23/00c5fd71e7-1140-4bb1-b4be-033b17f05d3420230323113923' width='100%'>";
  let logotec28="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_101/escudo/53/26/20/0016430387-c7fd-4da5-949f-c9f630ebe55320180323202620' width='100%'>";
  let logotec29="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_185/escudo/63/13/18/00b1a44460-fc6e-4c47-b650-a5f8582c6b6320210503141318' width='100%'>";
  let logotec30="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_200/escudo/ca/21/25/00ca4fb01b-24d6-4697-82f8-3e07953c1dca20220312112125' width='100%'>";
  let logotec31="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/2c/54/45/00039aa79e-bd0f-438d-887e-76c8ba54952c20230323155445' width='100%'>";
  let logotec32="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_185/escudo/f8/08/26/008da79acb-6d73-4e6f-903b-24579e162ff820210429230826' width='100%'>";
  let logotec33="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/22/36/25/00d14a3be6-c49e-43af-b316-26cf4fac782220230327143625' width='100%'>";
  let logotec34="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/38/29/11/0018218301-7d57-4f76-adea-f784333ae33820230328122911' width='100%'>";
  let logotec35="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_218/escudo/1d/56/28/001307b8bf-fcde-45f6-92d8-c0f3f8b7d11d20230429095628' width='100%'>";
  let logotec36="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_215/escudo/bf/45/49/000297b23d-dd1b-4617-b708-32d5ab1825bf20230414194549' width='100%'>";
  let logotec37="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/f8/58/03/001315aa61-0ebb-4e93-b78b-40ca8c9190f820230329215803' width='100%'>";
  let logotec38="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/85/58/56/00f44fe999-dcf2-4596-b3dc-e432176df68520230321145856' width='100%'>";
  let logotec39="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/3f/04/07/0007ff1e71-3033-41dd-8e5d-d2bcf634033f20230401190407' width='100%'>";
  let logotec40="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_185/escudo/b9/01/06/0078c9d2cd-2618-4b40-82ee-6fae0d80c7b920210428230106' width='100%'>";
  let logotec41="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_224/escudo/08/05/56/0083f4aac7-c312-495e-b790-24f78775b60820240410160556' width='100%'>";
  let logotec42="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_202/escudo/c5/27/47/000eda6641-e83f-478c-a7dd-43a911608bc520220404212747' width='100%'>";
  let logotec43="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_188/escudo/d2/41/31/0086181030-43a1-496d-9097-129623d629d220210523174131' width='100%'>";
  let logotec44="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_210/escudo/d2/39/46/0024043b4c-40c7-4381-be14-bedd5c0e9fd220230316133946' width='100%'>";
  let logotec45="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_215/escudo/3d/15/41/001b2169ac-bdcd-41e8-a89f-1dfbe536b03d20230414171541' width='100%'>";
  let logotec46="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_186/escudo/31/17/19/001409e10a-05ba-47f7-94e5-a50f2d640f3120210513221719' width='100%'>";
  let logotec47="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_210/escudo/a2/53/01/0046a20979-c98e-4a4c-b88f-628b3dd5a5a220230316135301' width='100%'>";
  let logotec48="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_213/escudo/2d/10/31/0046fd34e4-d89b-48f6-9ac9-653693173e2d20230404191031' width='100%'>";
  let logotec49="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_186/escudo/ee/59/00/00be9be33d-73a5-4027-b4c2-27ba505a95ee20210513185900' width='100%'>";
  let logotec50="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_214/escudo/ae/24/17/00afb28a4f-c826-45ca-8fb0-8b796d0af2ae20230411162417' width='100%'>";
  let logotec51="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_216/escudo/12/33/20/0032db2820-b4ec-4039-9762-16a818be1d1220230415153320' width='100%'>";
  let logotec52="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_171/escudo/ad/47/46/00c06eed0d-cd09-4c72-ae1e-cfe487c155ad20200807094746' width='100%'>";
  let logotec53="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_214/escudo/ad/41/25/00b4e990e4-7b3d-4b16-8bb6-47c14a314fad20230411134125' width='100%'>";
  let logotec54="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/34/52/25/003120c9d4-8e5e-49a0-9d7c-7f6b53e4ba3420230327185225' width='100%'>";
  let logotec55="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_210/escudo/ae/48/03/00b1830cbd-cd45-4d5a-9990-e7c46ca78aae20230316124803' width='100%'>";
  let logotec56="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_213/escudo/cf/38/49/0055911594-56fd-42b5-b62c-3fd5f0e339cf20230410173849' width='100%'>";
  let logotec57="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_202/escudo/ff/12/17/00866c62bf-a2a3-4dea-9e52-59a7687d71ff20220401211217' width='100%'>";
  let logotec58="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_213/escudo/0e/33/44/005a0514c6-f17d-45c4-b5c6-dd63642d060e20230406133344' width='100%'>";
  let logotec59="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_183/escudo/11/51/06/00114c21ef-1e40-49a4-b529-98cea290551120210427235106' width='100%'>";
  let logotec60="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_225/escudo/f2/37/49/00f094c858-f158-495a-a2e3-c8b7f6ad74f220240412093749' width='100%'>";
  let logotec61="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_200/escudo/8b/25/37/0080e79fc2-dd19-4916-a9d2-eb58203b028b20220314212537' width='100%'>";
  let logotec62="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_221/escudo/61/09/03/004a9d1ba9-e417-4a62-bfbc-741fc518cc6120230815190903' width='100%'>";
  let logotec63="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/b1/04/44/00d92a17f1-fda1-4697-9cfd-04ee765207b120230317220444' width='100%'>";
  let logotec64="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_221/escudo/7e/15/57/00ccb5df99-99c9-4ccf-8dc1-6c9d1d88607e20230905021557' width='100%'>";
  let logotec65="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_222/escudo/38/00/21/005873787a-58e6-477a-911e-c36d02090b3820240314120021' width='100%'>";
  let logotec66="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/40/52/10/00944dd6b7-07cf-4eb6-a935-d94692e38d4020230323125210' width='100%'>";
  let logotec67="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_222/escudo/cd/45/18/00061fd452-6997-4ce1-a0a3-8c4921369bcd20240321124518' width='100%'>";
  let logotec68="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_202/escudo/ce/22/46/006e835942-b01a-4fc6-849c-107385974ace20220404122246' width='100%'>";
  let logotec69="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_210/escudo/74/51/05/00b23ec804-8757-4ca3-9cf2-3f60dcca3b7420230316125105' width='100%'>";
  let logotec70="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_185/escudo/1a/02/15/0075adf7b5-9d15-421f-8d22-a2ac6240901a20210502160215' width='100%'>";
  let logotec71="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_200/escudo/9f/35/02/00610db0cd-87c1-4682-85e4-ce9c3ebd5b9f20220319163502' width='100%'>";
  let logotec72="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_215/escudo/35/40/13/0057dfa29c-1b23-4eb5-9e6a-a1ba0e23713520230414234013' width='100%'>";
  let logotec73="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_223/escudo/a8/40/49/007b970cc6-48a9-475f-b7a7-f472191628a820240326164049' width='100%'>";
  let logotec74="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/3f/41/07/00b50c79b4-b83e-4cd2-92a0-940b8860213f20230322084107' width='100%'>";
  let logotec75="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/f7/43/12/008e087cee-5619-4f99-adc4-36c5b283ccf720230324154312' width='100%'>";
  let logotec76="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_202/escudo/a5/49/35/00c289f14f-4ee4-4f8f-a6df-564da70fcea520220405124935' width='100%'>";
  let logotec77="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/b2/00/19/00944ecec0-8b2b-4096-a946-4c3ee2ced5b220230330230019' width='100%'>";
  let logotec78="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/ce/35/54/00fd2a51ea-c7fe-4667-b2aa-4a5d24352bce20230321083554' width='100%'>";
  let logotec79="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_202/escudo/27/40/09/00e55b039a-54fe-4863-a41b-1486aaef642720220404214009' width='100%'>";
  let logotec80="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_185/escudo/fa/47/22/00dd4416c3-b8e3-4c9d-ad6a-1e00d35781fa20210503134722' width='100%'>";
  let logotec81="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_215/escudo/16/47/55/00a44b6807-9093-4dbb-ab27-96f9fc501e1620230414204755' width='100%'>";
  let logotec82="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_214/escudo/98/41/50/0099502f2b-bfb0-438e-a180-36d3ef92019820230411134150' width='100%'>";
  let logotec83="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_222/escudo/e0/53/50/0075a0bb3f-d0cf-4699-8983-843c9f5ad2e020240314125350' width='100%'>";
  let logotec84="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_213/escudo/ac/33/05/00d9c7e30e-050d-43ad-9e3b-e1d62981f9ac20230410123305' width='100%'>";
  let logotec85="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_207/escudo/8f/33/59/00fbe23a97-c822-46b1-a64c-fa65e328e88f20220501113359' width='100%'>";
  let logotec86="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_165/escudo/a3/11/40/0046a926e1-79da-4744-8767-eb3cfd3e05a320200723151140' width='100%'>";
  let logotec87="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_222/escudo/d4/49/22/003b85e2ec-3f53-4b70-baa9-309750b109d420240315144922' width='100%'>";
  let logotec88="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/24/17/16/00000dff43-0e46-4a6c-b3cb-e6fc902ba12420230318101716' width='100%'>";
  let logotec89="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_213/escudo/db/31/16/009f3a20de-b909-4a44-84a8-8a37917352db20230410203116' width='100%'>";
  let logotec90="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/4c/37/27/00defd0042-b85a-4f4a-86ac-bcdab669ec4c20230324143727' width='100%'>";
  let logotec91="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/d4/40/14/00138ef8a2-6724-47cd-902d-57a93a6970d420230317164014' width='100%'>";
  let logotec92="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_226/escudo/37/17/00/008706fb73-28dc-4157-9796-f38bfcebf13720240413161700' width='100%'>";
  let logotec93="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_203/escudo/e2/51/54/009d84885e-fcc4-4a61-989f-9359096f25e220220408125154' width='100%'>";
  let logotec94="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/23/44/35/004556fbc4-d24d-4d5f-b02a-8cd76c05fb2320230401134435' width='100%'>";
  let logotec95="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_215/escudo/e5/31/24/00786361fe-f752-4b06-b394-00125f9ec9e520230415093124' width='100%'>";
  let logotec96="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/15/59/04/00e5fb53fb-035b-44b8-8024-da09b497ad1520230322105904' width='100%'>";
  let logotec97="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_213/escudo/f7/18/52/0063ea57da-d8ad-47e7-a6c0-86fb4af3f8f720230409111852' width='100%'>";
  let logotec98="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_213/escudo/01/09/06/0038f57408-7788-4ea4-83c2-b6a9fab9600120230405140906' width='100%'>";
  let logotec99="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/37/20/02/00377e491d-67be-46cc-980f-83c65006483720230404072002' width='100%'>";
  let logotec100="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/08/27/55/00a552dc00-dc56-4178-bc2b-571599d2290820230317232755' width='100%'>";
  let logotec101="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_213/escudo/80/36/22/0003777c31-ce8e-45d7-8494-73f942aca68020230410123622' width='100%'>";
  let logotec102="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/a2/17/14/00d3a36230-2e45-4fa7-b0aa-46fd1238e2a220230320081714' width='100%'>";
  let logotec103="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/f6/48/12/004fc8a6b5-9fb2-4d48-bc46-a922f7acd5f620230326154812' width='100%'>";
  let logotec104="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/13/47/24/00ef47098f-a2da-4a33-9c1a-c7f7271fe01320230402134724' width='100%'>";
  let logotec105="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_216/escudo/69/04/45/003c6bd94b-c88e-4e81-98d7-40315ba6826920230415100445' width='100%'>";
  let logotec106="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_223/escudo/75/57/04/0011edef45-3fc9-4f4c-9d17-34c71591597520240404095704' width='100%'>";
  let logotec107="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_210/escudo/ad/49/35/005aae8305-93e5-40ef-b900-86ccbe62f8ad20230316134935' width='100%'>";
  let logotec108="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_215/escudo/a4/37/57/000bc76962-512a-409f-9577-6fc304a1b1a420230414213757' width='100%'>";
  let logotec109="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_215/escudo/a4/37/57/000bc76962-512a-409f-9577-6fc304a1b1a420230414213757' width='100%'>";
  let logotec110="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_218/escudo/75/29/52/000afe35de-ce50-4add-b8b9-a301e4e91f7520230422202952' width='100%'>";
  let logotec111="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_201/escudo/cd/28/10/00771fbc03-770e-4635-8b50-3bb61d7aa8cd20220330232810' width='100%'>";
  let logotec112="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_213/escudo/e1/32/31/0094390f6b-f8c1-4614-9337-eedbd2b36de120230407113231' width='100%'>";
  let logotec113="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_107/escudo/9b/28/05/007f449767-d174-4c2c-8194-a04fefa48d9b20180410132805' width='100%'>";
  let logotec114="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_215/escudo/59/22/14/00c1783eb4-b658-45a9-9cfe-8164a5ed065920230414132214' width='100%'>";
  let logotec115="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_215/escudo/53/35/45/00d0722758-34ab-4c3f-93b6-8f032430535320230414023545' width='100%'>";
  let logotec116="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/f2/37/30/00f11d9d6e-9ee4-4d52-96a5-8cf35d9457f220230321213730' width='100%'>";
  let logotec117="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_213/escudo/f8/28/11/0012c6fca7-2691-4a0e-b45b-9af338168cf820230408112811' width='100%'>";
  let logotec118="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_214/escudo/1c/08/40/0035ffbf5d-c084-477d-897d-3142f1d7f01c20230413160840' width='100%'>";
  let logotec119="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/d8/37/29/00258d14e3-bc7e-47f2-802a-0d4fb16b95d820230318153729' width='100%'>";
  let logotec120="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_210/escudo/0e/21/36/001925582d-2666-4492-bb6c-6d875473950e20230316122136' width='100%'>";
  let logotec121="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/10/17/00/00627a2aea-5c5c-4c5b-9310-89458e6f0b1020230401211700' width='100%'>";
  let logotec122="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_215/escudo/d7/13/25/0049e620f0-f0b6-43e3-8475-66906a66e7d720230414181325' width='100%'>";
  let logotec123="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/2e/42/40/00c06b7ac4-67eb-472f-9346-6b72b2ba9c2e20230321104240' width='100%'>";
  let logotec124="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_201/escudo/15/18/45/00788810a7-bba7-415c-bd2f-131a338b771520220326201845' width='100%'>";
  let logotec125="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_216/escudo/22/08/13/002529e0c0-3706-49d5-a57f-0ce76f206c2220230415130813' width='100%'>";
  let logotec126="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_213/escudo/21/00/47/00db61c2e1-566a-4ad6-b71d-f9c83888982120230410210047' width='100%'>";
  let logotec127="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_215/escudo/33/53/58/00ccf87cc8-23e9-4287-ad0f-da97bc9fe33320230415085358' width='100%'>";
  let logotec128="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_200/escudo/6b/46/10/00e38c8b8b-f1f0-447a-bbb4-051e3b07806b20220320164610' width='100%'>";
  let logotec129="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_108/escudo/19/14/58/00526e9396-b09d-4145-9ed8-38997734451920180412081458' width='100%'>";
  let logotec130="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_214/escudo/89/33/35/00fbcf0c5e-ca86-4a13-85f3-8ebf0e37e98920230412213335' width='100%'>";
  let logotec131="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/f1/32/47/00dfedd7bf-5f13-43cf-9365-73cee90addf120230317083247' width='100%'>";
  let logotec132="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_169/escudo/67/19/56/001501a554-bb88-4c88-af79-df08ebeb396720200804121956' width='100%'>";
  let logotec133="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/eb/49/44/00959cf351-0391-449c-a78f-3ac5c69879eb20230328234944' width='100%'>";
  let logotec134="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/5f/42/50/00b2f7ea64-4de8-474f-8df0-693b2d701f5f20230318184250' width='100%'>";
  let logotec135="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_215/escudo/1a/33/31/00e71e7215-82d6-48b5-9ed2-cc37b307f71a20230414223331' width='100%'>";
  let logotec136="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_214/escudo/5d/11/00/00eef0337b-b916-4485-ae14-efc03896ea5d20230412101100' width='100%'>";
  let logotec137="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_213/escudo/02/24/22/00859b334c-6d79-4e9b-8b30-780c928f6b0220230407192422' width='100%'>";
  let logotec138="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_214/escudo/03/37/22/001f28df7f-c475-45c6-8b5f-9cdb9823ce0320230413233722' width='100%'>";
  let logotec139="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_210/escudo/7b/36/54/0099cfdb17-62d5-4f01-8988-136b95a0097b20230316143654' width='100%'>";
  let logotec140="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/43/12/56/00ef34a573-f4ee-4127-b697-00d8226dda4320230320171256' width='100%'>";
  let logotec141="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_195/escudo/bc/58/10/00b5cd2388-b6fa-4a43-8ee3-70a13852bdbc20210703175810' width='100%'>";
  let logotec142="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_210/escudo/e2/37/48/00f55d334a-a3c4-4e92-88c5-fe37e80bcfe220230316123748' width='100%'>";
  let logotec143="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_200/escudo/cb/37/26/00ebc54814-a1c6-49a0-88e7-773a7b2252cb20220312233726' width='100%'>";
  let logotec144="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_215/escudo/ee/09/20/0023603e3d-7db2-4138-a133-305ec124f8ee20230415010920' width='100%'>";
  let logotec145="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_213/escudo/ad/51/23/0013095b4e-3600-49fa-827a-8ff20259f5ad20230404205123' width='100%'>";
  let logotec146="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_214/escudo/ec/56/17/008db77f07-a4cd-4110-8caf-5cbc7957e7ec20230413095617' width='100%'>";
  let logotec147="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/d6/52/50/00c390e659-4777-4333-9e25-3927cbf390d620230317065250' width='100%'>";
  let logotec148="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_186/escudo/4f/26/16/0031b8cf19-7c45-497a-bc6e-0cefff22264f20210514112616' width='100%'>";
  let logotec149="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_213/escudo/8c/23/41/00ccf784fb-a97a-4a92-b91c-bafad126428c20230409092341' width='100%'>";
  let logotec150="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_223/escudo/3a/44/10/00d2ce3687-1f28-4ede-a4a0-3f90ff26163a20240401114410' width='100%'>";
  let logotec151="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_214/escudo/b6/11/28/00014f5d6a-0145-4fed-a73e-16ae91e7e6b620230413081128' width='100%'>";
  let logotec152="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/e0/11/31/00da5a2f3c-2141-4692-8dbd-218e9c638fe020230317161131' width='100%'>";
  let logotec153="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/e0/10/05/00ad97e929-8c3e-44fd-a2d8-8f1569ebffe020230328211005' width='100%'>";
  let logotec154="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_203/escudo/f6/01/28/00891117f0-3553-4d14-a5b5-e100265d19f620220406200128' width='100%'>";
  let logotec155="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_214/escudo/1d/18/07/003d1a01cd-1f65-4f71-a7a3-b87c8747021d20230412211807' width='100%'>";
  let logotec156="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_215/escudo/f9/54/41/00772ffcda-d7d4-4913-8348-df59bc25d2f920230414215441' width='100%'>";
  let logotec157="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/c7/26/11/00ad185f7e-8889-4374-aa7d-bde48f9ad3c720230316212611' width='100%'>";
  let logotec158="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_213/escudo/e2/22/14/0030bfd83a-b665-49ef-999d-15d4acb825e220230411082214' width='100%'>";
  let logotec159="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/2e/04/17/00cdfd64ac-3874-47ce-9026-7c57e8bb5e2e20230328190417' width='100%'>";
  let logotec160="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_214/escudo/a4/13/39/004fad5900-7478-4626-8da8-9ebc56f13aa420230412081339' width='100%'>";
  let logotec161="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_101/escudo/04/19/53/006ec51410-9fce-4173-9f33-3e922538fd0420180323211953' width='100%'>";
  let logotec162="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_183/escudo/f1/01/10/00f621e879-b756-47ec-bb3a-0d0e0910acf120210427190110' width='100%'>";
  let logotec163="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/39/25/47/0034f01df0-8ed7-4992-accd-d26ba0c2d43920230323132547' width='100%'>";
  let logotec164="<img src='0' width='100%'>";
  let logotec165="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_215/escudo/de/02/12/007205e439-4d8f-4c60-a2d6-67c24722b9de20230414090212' width='100%'>";
  let logotec166="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/fb/58/12/00c958ba3b-d6cd-4304-8ba5-f1ce6fde3cfb20230316145812' width='100%'>";
  let logotec167="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_223/escudo/41/37/02/00d5339ff8-066b-4e71-a570-3d13c4b2e24120240323193702' width='100%'>";
  let logotec168="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_222/escudo/97/42/04/00d8fcbb37-606c-45f0-990a-6ef75b17899720240315184204' width='100%'>";
  let logotec169="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_215/escudo/46/09/37/00316afab6-8a81-412f-942e-0135b1c49a4620230414130937' width='100%'>";
  let logotec170="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_210/escudo/c6/53/01/0094b4ce72-27b1-4010-bd3b-cd5faf2e91c620230316115301' width='100%'>";
  let logotec171="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_215/escudo/18/23/10/00d86d1b56-6486-4b3c-b495-71f7f773901820230415012310' width='100%'>";
  let logotec172="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_223/escudo/e2/40/50/002406d552-5950-4de2-b12e-9b7d289199e220240322194050' width='100%'>";
  let logotec173="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_209/escudo/50/11/03/003572329b-5132-4f6d-bc17-23f285c5ee5020220722101103' width='100%'>";
  let logotec174="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_219/escudo/03/16/24/00a6bb7a8a-103a-4b8a-9bd6-f4507f82070320230508091624' width='100%'>";
  let logotec175="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_215/escudo/a7/46/33/0066134cb2-3bfc-4015-95fa-6758f35e6aa720230414224633' width='100%'>";
  let logotec176="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/b6/02/10/004cff163c-19e8-4390-9af2-897cc2973bb620230325100210' width='100%'>";
  let logotec177="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/1d/44/40/00df3285a4-8330-4853-89e2-bc571acafa1d20230404094440' width='100%'>";
  let logotec178="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_213/escudo/55/35/58/00e89eb2d4-d254-406d-b556-4c04a501635520230407093558' width='100%'>";
  let logotec179="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_164/escudo/8d/51/35/003419c653-f106-4932-b9a9-deec6453138d20200722185135' width='100%'>";
  let logotec180="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/17/14/52/00b98d806d-26f2-43a8-9995-25c61efa6e1720230325131452' width='100%'>";
  let logotec181="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_210/escudo/da/55/30/0061d712a5-477c-4f4c-b5bd-3f24f65ff2da20230316125530' width='100%'>";
  let logotec182="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_162/escudo/b0/51/49/00d3905a7a-5829-48c5-92a9-ff513d3cd6b020200721125149' width='100%'>";
  let logotec183="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_224/escudo/5e/34/13/00b609792f-b21a-4442-b75d-d316704f7c5e20240407143413' width='100%'>";
  let logotec184="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_221/escudo/48/25/03/009c5dbd32-073b-4c23-8858-2d08fa74f84820231023212503' width='100%'>";
  let logotec185="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_226/escudo/27/51/49/00d46909a4-860f-4a91-a514-ed0dc29a772720240413145149' width='100%'>";
  let logotec186="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_213/escudo/15/12/12/00775cf8aa-6f34-4563-b057-e4bec6e4a61520230409121212' width='100%'>";
  let logotec187="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_210/escudo/b5/27/58/00d4d31bdf-512a-42ae-98b1-9fe014fbf3b520230316142758' width='100%'>";
  let logotec188="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_213/escudo/80/17/46/00e833dac2-2dda-4a1b-bfe0-5f7f05cc428020230409221746' width='100%'>";
  let logotec189="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/fc/36/48/00d53877bd-4f9b-4060-873c-e50603250ffc20230320133648' width='100%'>";
  let logotec190="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_144/escudo/19/22/09/0087c40455-7b50-41d9-80d6-58c12547b21920190427182209' width='100%'>";
  let logotec191="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_178/escudo/c7/11/41/00e36dfdbd-ea20-43b5-83b9-0f32df2f44c720200821141141' width='100%'>";
  let logotec192="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/34/49/47/0055558fe7-6799-4dcf-b85e-93c1e70d183420230324004947' width='100%'>";
  let logotec193="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_213/escudo/0a/55/47/00eec2f01a-9b7b-4d81-a2ae-b12b03e90a0a20230411085547' width='100%'>";
  let logotec194="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/8d/17/18/00c8d314b7-cc79-4f61-a6b3-7b654647d68d20230322161718' width='100%'>";
  let logotec195="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/94/04/41/002233864b-fb93-46ac-aa82-071f7543d69420230403020441' width='100%'>";
  let logotec196="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_214/escudo/67/27/45/00ff71f5fd-542b-4829-9940-83aba0044e6720230411212745' width='100%'>";
  let logotec197="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_186/escudo/9f/14/48/001f886961-4f81-438a-8313-b4a7a602f59f20210505181448' width='100%'>";
  let logotec198="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_223/escudo/49/41/22/000f999cec-368b-4840-aee3-86dfa024e34920240405114122' width='100%'>";
  let logotec199="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_220/escudo/c8/58/30/00d1a2d676-7de7-4ba0-a4c6-529963afefc820230617145830' width='100%'>";
  let logotec200="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/ef/52/03/006faea312-57a5-4f87-96c1-c02a781251ef20230404105203' width='100%'>";
  let logotec201="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_223/escudo/9d/56/21/00b37cbbc7-a010-4cec-aa64-0abdcc41d29d20240406135621' width='100%'>";
  let logotec202="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/dc/29/13/006c6572ac-bb37-4ecd-be96-4684f543c8dc20230329172913' width='100%'>";
  let logotec203="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_214/escudo/3e/21/27/00baa27e6c-f88e-443e-8219-9a5bbf548e3e20230413152127' width='100%'>";
  let logotec204="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_222/escudo/ef/42/28/00fc50908a-da87-4716-a0d9-04efa2ba70ef20240317164228' width='100%'>";
  let logotec205="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_213/escudo/52/56/38/00bea4554d-3fa6-4afd-aa4b-cf2bbb83895220230405145638' width='100%'>";
  let logotec206="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/a2/04/13/0065de05e8-2569-41f0-bd56-069678377ca220230402160413' width='100%'>";
  let logotec207="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/09/11/50/0067a6e23a-166e-43f1-b508-b3fe0705230920230316211150' width='100%'>";
  let logotec208="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/af/39/14/00c2d2e387-d063-44d2-bc1e-4b460039d3af20230328083914' width='100%'>";
  let logotec209="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_208/escudo/f6/20/16/000404c9da-25a4-4429-a8c1-1ea148c8aef620220612102016' width='100%'>";
  let logotec210="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_219/escudo/d2/51/19/00a51c99d6-14dd-4eef-a9b4-e85b833792d220230507185119' width='100%'>";
  let logotec211="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/ce/29/18/00540fb4ec-9a85-41fd-9b1d-ea3a33339bce20230317102918' width='100%'>";
  let logotec212="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_213/escudo/ee/35/19/001cc1476e-c687-47a2-8875-6db8cfeb99ee20230406103519' width='100%'>";
  let logotec213="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_202/escudo/e2/44/44/00eb7540fe-a9dc-42aa-95b7-5751229f41e220220404214444' width='100%'>";
  let logotec214="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_231/escudo/47/14/02/00cf55eb45-4ebd-4407-ace2-cf7873d8964720240423121402' width='100%'>";
  let logotec215="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_182/escudo/4b/49/57/0039140978-cfe1-4cb9-83b6-479d8cc5734b20201230114957' width='100%'>";
  let logotec216="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/e8/34/57/00ef6fafbf-919f-4430-bf1f-8c9f3cba96e820230402163457' width='100%'>";
  let logotec217="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/5d/32/48/0082b43487-daf9-482c-bc89-93a85008595d20230316183248' width='100%'>";
  let logotec218="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_210/escudo/d5/33/57/002ee6a2c3-fd05-43c7-b5f4-5e10eb7997d520230316133357' width='100%'>";
  let logotec219="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_173/escudo/e8/28/17/003e048ce2-f28f-41ff-9073-6aaa20f39ae820200809222817' width='100%'>";
  let logotec220="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_213/escudo/13/03/52/00ce3a0dff-f64d-4cf4-8119-5861cd30261320230405060352' width='100%'>";
  let logotec221="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_221/escudo/42/31/26/000176f107-405f-4ee7-a6c1-cefee789954220230723213126' width='100%'>";
  let logotec222="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_203/escudo/00/26/21/002d17ea22-7c51-4d79-81b4-523357f56c0020220407222621' width='100%'>";
  let logotec223="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_216/escudo/2e/09/53/00189e1b97-983d-473c-b138-6a73735dc52e20230415120953' width='100%'>";
  let logotec224="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_136/escudo/fd/23/03/004ece8369-7341-435f-8147-51a3db1a8dfd20190410112303' width='100%'>";
  let logotec225="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_222/escudo/0e/16/29/00c1a92dd6-b766-4c1f-bc13-b175c664540e20240314131629' width='100%'>";
  let logotec226="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_215/escudo/5e/04/06/0062f893d7-befe-4ba1-8473-04a6120f185e20230414130406' width='100%'>";
  let logotec227="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/16/14/17/00d319ea6e-4360-489b-b791-0547ba8f951620230316201417' width='100%'>";
  let logotec228="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_214/escudo/27/37/27/004c3c185b-6bf4-4e9b-87da-6825a6c91b2720230412233727' width='100%'>";
  let logotec229="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_213/escudo/30/26/13/0057aa695f-4ced-46c2-893c-45c67e68fb3020230410092613' width='100%'>";
  let logotec230="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_202/escudo/25/14/23/00de29b179-ee68-4414-80d6-63ab7144832520220405111423' width='100%'>";
  let logotec231="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_210/escudo/c7/47/11/0085016be8-72cf-4c54-b6d0-aba678d2d2c720230316144711' width='100%'>";
  let logotec232="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_202/escudo/0d/15/00/00aefef89a-a13c-406d-b8b7-8aee37b2ae0d20220403171500' width='100%'>";
  let logotec233="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/21/29/22/00b065ee94-d402-47bb-a78e-d8b4c18a6e2120230322182922' width='100%'>";
  let logotec234="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/53/35/33/00ecffd4a6-3a8a-4193-bee3-0dcdc955e65320230317003533' width='100%'>";
  let logotec235="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_170/escudo/fe/35/36/001f39f112-4e32-437b-8cb6-7beb495a88fe20200806133536' width='100%'>";
  let logotec236="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_186/escudo/d8/54/32/0048a5c84e-d399-48d7-93cb-ecfdb448aad820210514075432' width='100%'>";
  let logotec237="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_215/escudo/4f/39/40/008387e7e9-ca40-484e-ba8e-3f45dcf96f4f20230414163940' width='100%'>";
  let logotec238="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_202/escudo/46/15/36/00f5011205-e95c-4974-98a3-ed853776774620220405231536' width='100%'>";
  let logotec239="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/f7/31/07/00a9861b78-d84d-4365-a5d4-9573e30a3af720230331133107' width='100%'>";
  let logotec240="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_183/escudo/9b/10/35/0031b8007e-799b-4058-8cdf-b83c6fade69b20210427171035' width='100%'>";
  let logotec241="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/ed/25/00/000c08e360-8272-42c0-a2c8-6498a80bf2ed20230328102500' width='100%'>";
  let logotec242="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/6f/51/25/00daca89f6-f415-4e0f-8c02-f338a27de36f20230316195125' width='100%'>";
  let logotec243="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_191/escudo/e7/06/22/00eb88ca5a-5691-4858-b369-1af3e1e052e720210529140622' width='100%'>";
  let logotec244="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/9c/56/05/0002cc910c-d417-4a1a-bcca-89b9e1a0859c20230321125605' width='100%'>";
  let logotec245="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_216/escudo/33/29/07/00c137e5d9-48bb-4c3a-b156-2f038dd4de3320230415122907' width='100%'>";
  let logotec246="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_216/escudo/d9/38/42/00a7ba1ba8-ef36-404b-a543-c717ed059ad920230415153842' width='100%'>";
  let logotec247="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_210/escudo/50/02/29/00336f8312-8f33-4900-9c69-c0c87db3f95020230316130229' width='100%'>";
  let logotec248="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/77/56/36/0058684306-3ec4-46ea-87b2-deec3b53c07720230326205636' width='100%'>";
  let logotec249="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_214/escudo/00/11/51/00b3edb0a0-6a8b-4252-928a-85c486669e0020230413211151' width='100%'>";
  let logotec250="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_216/escudo/fb/31/45/00e0ddf7cd-1fe9-40c4-b2b9-0b9a51cb50fb20230415103145' width='100%'>";
  let logotec251="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/e4/48/19/005267e405-aa11-4803-8b24-7cac107600e420230325194819' width='100%'>";
  let logotec252="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/e3/01/30/00dadffe62-abe6-417c-857d-5bd66d0981e320230321110130' width='100%'>";
  let logotec253="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_109/escudo/94/56/03/0080730096-7540-4bd9-8c46-1ebf1fbadd9420180412165603' width='100%'>";
  let logotec254="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_171/escudo/f2/12/38/00bd4b004b-cee6-4138-8d51-7bc6ee518ff220200807221238' width='100%'>";
  let logotec255="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_219/escudo/3a/39/43/000dd4114b-a5e0-4934-a01c-2465235fe73a20230501163943' width='100%'>";
  let logotec256="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_110/escudo/37/52/56/0021404f08-c17e-4c65-b86f-4e76adcd1d3720180413135256' width='100%'>";
  let logotec257="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_220/escudo/8e/07/09/00c1f723a1-127e-42f6-ad70-44821094a08e20230527160709' width='100%'>";
  let logotec258="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_164/escudo/31/20/46/00aa1a5287-427e-41c6-9604-072a08ac803120200722112046' width='100%'>";
  let logotec259="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_182/escudo/05/27/07/002098734f-e4cb-4b8a-8594-fed0470d8c0520201228202707' width='100%'>";
  let logotec260="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_210/escudo/e0/28/08/008201cb57-d60c-4b0b-920a-66a356cd51e020230316142808' width='100%'>";
  let logotec261="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_215/escudo/26/23/23/00db3a211f-b61d-4ada-85da-f41d75a9e72620230415002323' width='100%'>";
  let logotec262="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_116/escudo/2f/03/07/00c5e76438-75f9-490a-acc2-1df110a4b32f20180503000307' width='100%'>";
  let logotec263="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/50/55/44/00615cd7df-3bb0-437c-b65b-e25aea6fc25020230316165544' width='100%'>";
  let logotec264="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_215/escudo/8f/22/42/00bfbcdc1f-d976-49de-bb3c-a2d96174738f20230415062242' width='100%'>";
  let logotec265="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_214/escudo/df/55/05/0019798b26-d2a6-4193-88e3-6867d8cf88df20230411185505' width='100%'>";
  let logotec266="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_187/escudo/45/40/40/006ccbef11-cda7-4649-83d0-f1f35dcdcd4520210523094040' width='100%'>";
  let logotec267="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_216/escudo/b3/50/24/007b10c4e4-1b1e-44cf-af58-cd91cb1388b320230415145024' width='100%'>";
  let logotec268="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/25/14/25/00d2cc8207-1931-4452-88a7-4aa5e6608d2520230324191425' width='100%'>";
  let logotec269="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_213/escudo/41/12/37/00f43a7728-e5ad-4abb-ac54-8c9462b3554120230408171237' width='100%'>";
  let logotec270="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_213/escudo/21/58/24/0067ceb57e-23af-4226-bac5-ea0a91a4ec2120230411085824' width='100%'>";
  let logotec271="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/39/24/51/0018b3be60-7ca6-4483-973d-872356e7bd3920230326232451' width='100%'>";
  let logotec272="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_167/escudo/77/40/44/00bb229df7-f95f-401b-9e86-6f26b2340e7720200730214044' width='100%'>";
  let logotec273="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_105/escudo/e3/46/50/0001fa1766-27c1-429f-9271-3476345827e320180406124650' width='100%'>";
  let logotec274="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_221/escudo/a6/07/31/008f868b58-92d4-4f96-afb1-f20d99876aa620231009120731' width='100%'>";
  let logotec275="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_214/escudo/e3/32/57/002e14228d-c0a7-41fb-8b89-ee254bc85ee320230412153257' width='100%'>";
  let logotec276="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_213/escudo/34/43/03/001d4e0597-f8ac-43f4-a5b8-2dd7d6ee4e3420230410154303' width='100%'>";
  let logotec277="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/4b/45/50/00f5f943c1-c94f-4303-b116-c7cdf16c7a4b20230321184550' width='100%'>";
  let logotec278="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/fb/40/28/008e85336c-0939-47bc-82b3-061d6d5d7dfb20230324124028' width='100%'>";
  let logotec279="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_219/escudo/e8/40/31/006ea62f49-da25-4118-94c3-768cafcd3ce820230508114031' width='100%'>";
  let logotec280="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_216/escudo/9b/23/13/00e654422f-90f6-4a75-802b-9a61efb4229b20230415152313' width='100%'>";
  let logotec281="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/08/45/26/008ad50dad-6637-4990-9b6e-8db2c891770820230404114526' width='100%'>";
  let logotec282="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/ce/34/22/00dc7ec7e0-10e1-4975-aaa5-eb641bdfc6ce20230326013422' width='100%'>";
  let logotec283="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/0c/43/06/0094373226-8ab9-452c-88aa-d1e4d8513a0c20230322104306' width='100%'>";
  let logotec284="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_215/escudo/ea/02/47/0001d3bbda-5407-4a92-abf6-becd5d8a60ea20230415040247' width='100%'>";
  let logotec285="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_224/escudo/3c/08/45/008879fcf0-faff-4715-97aa-be96e7f0723c20240409080845' width='100%'>";
  let logotec286="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_109/escudo/37/45/25/0081f76d61-eb35-42fe-8776-1a7bfb70433720180413104525' width='100%'>";
  let logotec287="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_221/escudo/cc/06/55/005d7c2b6f-469c-41db-8dfb-47c15a0c17cc20231106100655' width='100%'>";
  let logotec288="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_213/escudo/f0/54/43/00f29202b7-45d4-46f3-b646-1994bf0614f020230409225443' width='100%'>";
  let logotec289="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_135/escudo/ac/07/11/006f2165c2-9926-45e1-89f8-995854350fac20190406160711' width='100%'>";
  let logotec290="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/0f/54/02/0010ae4030-5c0a-4d18-9b1f-f1c23b932d0f20230327215402' width='100%'>";
  let logotec291="<img src='https://www.parciaiscartola.com.br/assets/png/sem-imagem.png' width='100%'>";
  let logotec292="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_109/escudo/21/23/47/005f69c45c-0de9-46a1-bb19-ae01c9fcee2120180413062347' width='100%'>";
  let logotec293="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/98/07/14/009be53b52-9ea8-43d8-b1ad-9a25d353569820230316180714' width='100%'>";
  let logotec294="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_216/escudo/e4/14/33/001b8de513-131b-4b64-956d-5f0eddd411e420230415131433' width='100%'>";
  let logotec295="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_186/escudo/82/43/14/00c82b1200-b09b-4241-a658-b192bb14c38220210505224314' width='100%'>";
  let logotec296="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/5f/45/43/002cc2f28e-031c-4447-bf17-cf8728b9a05f20230329204543' width='100%'>";
  let logotec297="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_169/escudo/4f/25/42/004bbfc3ca-e2c3-4a05-94bc-8ef40c9c974f20200805162542' width='100%'>";
  let logotec298="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_201/escudo/92/15/38/0093152d62-31ac-40bd-abd3-a1886c9fd59220220331021538' width='100%'>";
  let logotec299="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_201/escudo/1f/01/23/00fef87c80-468d-49d9-a66d-87125192781f20220328120123' width='100%'>";
  let logotec300="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_213/escudo/d8/47/38/000076c98c-facb-4c67-b4fa-042e01c6ded820230410214738' width='100%'>";
  let logotec301="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_111/escudo/f0/48/27/00a222e6d4-6358-4efd-8954-66fcadc910f020180414074827' width='100%'>";
  let logotec302="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_111/escudo/f0/48/27/00a222e6d4-6358-4efd-8954-66fcadc910f020180414074827' width='100%'>";
  let logotec303="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_143/escudo/d4/42/50/00eb0e34ae-92c5-408f-bab9-ecf8e7e261d420190427124250' width='100%'>";
  let logotec304="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/db/20/27/0078bbaf8f-5835-4b32-8cde-87c488bca8db20230327112027' width='100%'>";
  let logotec305="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_100/escudo/cb/11/01/009f02cffa-6438-4f5d-a9bb-669d2a6cf4cb20180323091101' width='100%'>";
  let logotec306="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_222/escudo/d8/46/15/000076c98c-facb-4c67-b4fa-042e01c6ded820240314124615' width='100%'>";
  let logotec307="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_216/escudo/22/03/27/00c5ba354c-2271-42a3-881f-4fefedb8c02220230415150327' width='100%'>";
  let logotec308="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_206/escudo/ea/31/21/003657ac1c-efa3-44b3-9542-e9d726633bea20220415223121' width='100%'>";
  let logotec309="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_215/escudo/47/35/22/0079bdcffc-e5c1-4ca8-bb74-87140555894720230414183522' width='100%'>";
  let logotec310="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/83/11/57/00b89040c7-3ffe-4854-b951-75c08a71ca8320230320181157' width='100%'>";
  let logotec311="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_213/escudo/36/12/38/00f9dc7744-ec58-4878-982b-426da729cc3620230410201238' width='100%'>";
  let logotec312="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_216/escudo/ed/44/55/00bb588833-55c2-4be4-b643-83e5d0a919ed20230415104455' width='100%'>";
  let logotec313="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_216/escudo/64/06/32/008e6a0ae1-4b19-4d6d-a2ac-8d61fb77ec6420230415150632' width='100%'>";
  let logotec314="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/ef/36/18/005f4d515d-e275-4992-a3c3-e7a5af94b5ef20230316173618' width='100%'>";
  let logotec315="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_210/escudo/0c/33/30/00c464bdad-48ae-4b23-a6cb-51cba9fa0a0c20230316123330' width='100%'>";
  let logotec316="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_213/escudo/9a/50/24/0042c0fa69-2131-4364-9889-9ccfcb59669a20230408195024' width='100%'>";
  let logotec317="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_215/escudo/8e/22/39/0006308537-ca2e-4d05-9ac9-ea342836408e20230414202239' width='100%'>";
  let logotec318="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_210/escudo/2e/40/31/000b5b0155-a742-4f2d-8495-288e4574b02e20230316114031' width='100%'>";
  let logotec319="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_111/escudo/89/32/17/00090e5de5-18d6-45c0-8318-41cc93cef38920180414103217' width='100%'>";
  let logotec320="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_104/escudo/cb/03/17/004008d9c2-4acc-44de-8571-1073f2205fcb20180330090317' width='100%'>";
  let logotec321="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_185/escudo/b8/04/16/00586fbc9b-f977-4d21-b4d2-3a9d56548fb820210429000416' width='100%'>";
  let logotec322="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/84/15/16/00a6f4e9cc-86fe-470f-a517-505513ff7a8420230331191516' width='100%'>";
  let logotec323="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_199/escudo/b9/32/44/00c6643ffe-4ecf-471f-8fe9-688c5e4d1ab920220310163244' width='100%'>";
  let logotec324="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/88/55/20/00d660daa9-acd4-428b-9e82-b941f564bb8820230326075520' width='100%'>";
  let logotec325="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/c1/17/01/00c259dbbc-32e2-4425-8a34-58fdcba8c4c120230327161701' width='100%'>";
  let logotec326="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_200/escudo/71/53/10/00e058ca0f-9ff2-4960-b01b-31b88120037120220311225310' width='100%'>";
  let logotec327="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_202/escudo/d7/26/04/00e3132414-927d-4450-ab2e-5cd04839b8d720220402192604' width='100%'>";
  let logotec328="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_215/escudo/ce/16/20/00662bf961-2f7f-429a-a546-7f458cc37dce20230414121620' width='100%'>";
  let logotec329="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_213/escudo/15/12/12/00775cf8aa-6f34-4563-b057-e4bec6e4a61520230409121212' width='100%'>";
  let logotec330="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/80/24/17/00c8491f47-aa00-4700-a757-cd50345c1d8020230330182417' width='100%'>";
  let logotec331="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/c4/10/53/006bdb3699-4cca-4eff-bf80-5fdd0a35ddc420230321231053' width='100%'>";
  let logotec332="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/0e/05/16/00afbf2c78-3700-4044-a341-f9935bb8630e20230317000516' width='100%'>";
  let logotec333="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_187/escudo/a4/40/37/00885a8374-f8b5-47a9-a24c-c2975bebfba420210520184037' width='100%'>";
  let logotec334="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_213/escudo/b5/34/06/0050f2b816-660a-41e2-9d2f-c4aca669c9b520230404223406' width='100%'>";
  let logotec335="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/84/28/51/00960822af-081b-49e5-b982-f0d736ec028420230322002851' width='100%'>";
  let logotec336="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_189/escudo/aa/41/01/00dbb139a0-6d27-4637-a3dc-e7dd509f40aa20210526224101' width='100%'>";
  let logotec337="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/41/52/02/00d02c2d75-ef67-45ca-8bd0-23a6eabf374120230316195202' width='100%'>";
  let logotec338="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_216/escudo/c9/39/46/007464e5dc-c5bc-449e-87f4-4f7762e43dc920230415123946' width='100%'>";
  let logotec339="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_213/escudo/0c/30/20/00dac4359b-0c00-45ea-a138-ff48946a940c20230407193020' width='100%'>";
  let logotec340="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_216/escudo/4a/15/35/00e7c44208-ecce-4088-95eb-e47101cf5c4a20230415131535' width='100%'>";
  let logotec341="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_222/escudo/5e/32/39/00dcad6405-f93c-4b91-aa24-914e137cfc5e20240320133239' width='100%'>";
  let logotec342="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/51/31/06/0059281b30-6f7c-4998-a1fd-a6679d1b085120230316173106' width='100%'>";
  let logotec343="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_103/escudo/26/23/20/00ca2c5445-306d-45af-b8d3-b4a3840b022620180329222320' width='100%'>";
  let logotec344="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/2d/14/03/005a90df66-67c6-414a-bb54-b1bec6322d2d20230322081403' width='100%'>";
  let logotec345="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/f5/48/09/00ed81511f-c727-4198-b00c-4b9ab8e4d1f520230323074809' width='100%'>";
  let logotec346="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/16/53/35/00f0520e35-16e4-470d-a429-e96bf382f51620230402185335' width='100%'>";
  let logotec347="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_225/escudo/a5/57/00/004583ab04-6a7a-4125-a475-5c6fba9ac8a520240412105700' width='100%'>";
  let logotec348="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/f0/45/50/00db074bc1-8e17-4796-be3d-e048b77c9ff020230330184550' width='100%'>";
  let logotec349="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_214/escudo/db/28/53/004f1627c5-9306-4291-8df5-80ea1a8666db20230412082853' width='100%'>";
  let logotec350="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_121/escudo/2b/48/08/00e91e4ed8-c061-4952-bad8-12ca5278672b20180719144808' width='100%'>";
  let logotec353="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/72/56/41/00bf28a2df-31b2-419b-acbb-200fce61c07220230320215641' width='100%'>";
  let logotec354="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_199/escudo/2c/00/04/00586a16eb-5fe5-45ed-a68e-ff4d3271532c20220310120004' width='100%'>";
  let logotec355="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_222/escudo/0b/42/55/002f766690-c157-461b-933a-817b440bc70b20231202074255' width='100%'>";
  let logotec356="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_187/escudo/0b/27/36/00e6deb0a8-956d-49ec-a650-cc5331138d0b20210523122736' width='100%'>";
  let logotec357="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_183/escudo/81/21/34/003a52e650-f6dd-47cd-965e-54a18e5df98120210427212134' width='100%'>";
  let logotec358="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_221/escudo/42/31/26/000176f107-405f-4ee7-a6c1-cefee789954220230723213126' width='100%'>";
  let logotec361="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_189/escudo/40/21/14/00f2354ddd-7896-47e5-859a-eb137f5e7a4020210527122114' width='100%'>";
  let logotec362="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/b7/39/24/0022eef16f-d06e-4cc5-af4d-35f4f3688cb720230317073924' width='100%'>";
  let logotec363="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_210/escudo/46/14/42/0022e5a0f9-4243-4981-872c-d50880cbbd4620230316131442' width='100%'>";
  let logotec364="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_182/escudo/dc/37/06/002275454b-87dc-4880-b4d6-a58346f243dc20210131143706' width='100%'>";
  let logotec365="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_201/escudo/23/28/38/0071c083ad-1e68-45b2-800c-32105616dd2320220326192838' width='100%'>";
  let logotec366="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_210/escudo/0e/01/26/008ba7aefc-be9a-4285-883b-d431f530eb0e20230316120126' width='100%'>";
  let logotec367="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_213/escudo/30/03/36/000bcf5b3c-c826-4055-a294-5b770679743020230407210336' width='100%'>";
  let logotec368="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_219/escudo/03/08/51/00e96e72c4-8bc7-45fc-b013-ba76ba8aa30320230506170851' width='100%'>";
  let logotec369="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_209/escudo/bf/06/15/00e3cb6731-4f33-4eaa-b346-fc3caf0ce5bf20220727120615' width='100%'>";
  let logotec370="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_216/escudo/f5/04/56/00655ab6a4-bbbf-4eb4-87d3-b259af0eadf520230415170456' width='100%'>";
  let logotec371="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/d5/43/04/00a103bea6-3e17-4032-b897-7dba0248b3d520230316194304' width='100%'>";
  let logotec372="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_213/escudo/9f/04/46/0071f0954b-e4f2-4c68-b358-a84dac8b1a9f20230409220446' width='100%'>";
  let logotec373="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_219/escudo/1a/44/20/00bd0fa420-f8c1-43bd-ab37-f92c2572a51a20230509074420' width='100%'>";
  let logotec374="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/2a/04/24/00a1d30392-e383-4360-8aa2-13c4b7d96e2a20230316180424' width='100%'>";
  let logotec375="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_193/escudo/aa/06/52/007d36edd7-257d-4829-8d47-1d85e8a1beaa20210608190652' width='100%'>";
  let logotec377="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/27/25/46/0079223df3-a158-4ed4-9e5b-0fc2a4f26e2720230316182546' width='100%'>";
  let logotec378="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_221/escudo/ef/47/09/0060c8554d-9814-4985-90aa-021461740def20230816004709' width='100%'>";
  let logotec379="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_183/escudo/85/20/16/00cddfbedb-d3ae-4f2d-9363-be7bb5753e8520210428122016' width='100%'>";
  let logotec380="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_221/escudo/f0/33/52/0021447cc1-cfa5-427a-9368-d91a45dc62f020230821013352' width='100%'>";
  let logotec381="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_221/escudo/79/56/08/00edda5fc8-906b-4bac-8fc2-872218dfd37920230902145608' width='100%'>";
  let logotec382="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/32/58/07/007e744ce3-ff19-4705-8344-809311aabe3220230404105807' width='100%'>";
  let logotec383="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_216/escudo/38/19/26/00b413bb39-8be9-4961-b324-fa3cdf75a43820230415121926' width='100%'>";
  let logotec384="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_164/escudo/24/03/14/00c107ebc4-1086-4c9d-80f8-4b1d2c3be02420200721220314' width='100%'>";
  let logotec385="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_213/escudo/0f/01/26/0071ede800-2295-4fe1-9235-bb5394fa350f20230407120126' width='100%'>";
  let logotec386="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_199/escudo/71/56/20/00209c3f29-fb70-4d85-8f09-4b73b6b7a57120220310235620' width='100%'>";
  let logotec387="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_222/escudo/13/48/13/00d6014ae2-8e64-46c1-a49c-d982c0b91a1320231109224813' width='100%'>";
  let logotec388="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_158/escudo/8c/13/41/00f5f5a4b2-ba39-400f-a6ed-adb0f2ad5a8c20190712111341' width='100%'>";
  let logotec389="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_202/escudo/c9/03/20/00f68ac773-adba-43a8-a95e-94cedaa9dbc920220405220320' width='100%'>";
  let logotec390="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_201/escudo/0a/23/17/004a45de0a-a9fb-4cca-bddf-d235593c7d0a20220330172317' width='100%'>";
  let logotec391="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/e4/26/52/0033ac0372-6e8c-46d6-b35b-795f3ffc84e420230328132652' width='100%'>";
  let logotec392="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_213/escudo/1c/17/34/0045f59be5-2f7b-47b8-afc5-01ac090ae21c20230407001734' width='100%'>";
  let logotec393="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/ed/10/06/0040f203ac-e18a-4332-953b-b4878e98d8ed20230316201006' width='100%'>";
  let logotec394="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_170/escudo/1c/32/13/00d75983c8-5fe0-48b4-8099-90c608796c1c20200806153213' width='100%'>";
  let logotec395="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_213/escudo/51/39/27/00cb5e7d3b-9539-4cf8-ac4b-f61fa44d655120230406103927' width='100%'>";
  let logotec396="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_105/escudo/c4/33/04/003e698a6a-6c11-4ab3-847b-c7256ee669c420180406143304' width='100%'>";
  let logotec397="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/9a/16/53/000a54ac94-2bc1-411f-b1cc-eede9b614a9a20230316201653' width='100%'>";
  let logotec398="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_201/escudo/25/55/43/003fa04967-6d49-4f23-9e81-d7331a5ca92520220326135543' width='100%'>";
  let logotec399="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/c6/01/34/006e75122b-3fa9-40d9-b81e-d5cec32ed9c620230401190134' width='100%'>";
  let logotec400="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_185/escudo/30/58/07/00483970cc-c010-495c-a392-b80c6a009e3020210503115807' width='100%'>";
  let logotec401="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_186/escudo/94/30/19/00f8adc0ac-8114-4253-bf4e-0971b367099420210513213019' width='100%'>";
  let logotec402="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/ab/00/13/000fd67a99-2611-4d39-8073-4b0eed2c94ab20230319200013' width='100%'>";
  let logotec403="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/36/49/01/0033a33f80-ba9f-41fa-91f3-63e922fc993620230316224901' width='100%'>";
  let logotec404="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/e2/42/43/002cfa895d-7396-436d-821f-3409e4345ce220230316154243' width='100%'>";
  let logotec405="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_185/escudo/1b/22/57/00bed4ee26-9e43-4d88-8979-cb251e3f081b20210501182257' width='100%'>";
  let logotec406="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_100/escudo/87/23/57/008da72c4b-c962-4ab7-bae8-14d08de6f18720180323112357' width='100%'>";
  let logotec407="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_110/escudo/a0/29/37/002247ec7a-8897-44eb-8e9f-c108f2d42ba020180413182937' width='100%'>";
  let logotec408="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_178/escudo/6b/58/43/00b8f61365-5c6e-4e1c-9dde-2624a3cbf96b20200828175843' width='100%'>";
  let logotec409="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_210/escudo/e5/03/39/00b6aec8f5-91da-4b24-8893-8c56148c58e520230316120339' width='100%'>";
  let logotec411="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_107/escudo/ae/25/18/003d86dbdd-f987-4477-9097-3fc2103515ae20180409232518' width='100%'>";
  let logotec412="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/f1/25/22/0076d98d22-3cca-4539-9ec4-ceff0dc2cbf120230324132522' width='100%'>";
  let logotec413="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_210/escudo/8b/50/33/00d936b517-26d5-45e2-a71a-beaf1428368b20230316135033' width='100%'>";
  let logotec416="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/1b/44/46/001aa39424-927a-4e16-bf7b-2255c049bd1b20230319134446' width='100%'>";
  let logotec417="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_222/escudo/a6/33/07/00d53af501-2c0f-41c5-8c0d-dc8106edfda620231128173307' width='100%'>";
  let logotec418="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_134/escudo/6f/01/54/00aef23813-0144-4e71-9e91-e3472a349d6f20190404170154' width='100%'>";
  let logotec419="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/c9/56/10/00bf76ddd4-e81d-4957-bb4d-81f2142481c920230321165610' width='100%'>";
  let logotec420="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_196/escudo/87/16/39/00ad78858e-5328-4682-bb3a-00396b7d728720210725161639' width='100%'>";
  let logotec421="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_219/escudo/d7/00/34/00afbbb72b-9724-4633-8f72-194bea5359d720230504140034' width='100%'>";
  let logotec422="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/e7/06/47/00d490cf0a-9632-474d-b46b-37f9b6a9afe720230319130647' width='100%'>";
  let logotec423="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/5b/39/52/00f8f18cbc-f953-485c-8f35-bee04998725b20230402143952' width='100%'>";
  let logotec424="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_210/escudo/f7/38/34/0072ba32e2-bea2-451a-811f-f8f297c773f720230316123834' width='100%'>";
  let logotec425="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_219/escudo/b6/39/17/0099ee7baa-fad1-4052-988f-765191e482b620230509113917' width='100%'>";
  let logotec426="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_215/escudo/a6/23/21/00018c815b-ab08-4a7a-b429-111097f199a620230414182321' width='100%'>";
  let logotec427="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/b2/30/45/00ff01b76a-1fc9-46f5-9dfc-dff0a5d3a6b220230323233045' width='100%'>";
  let logotec428="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_102/escudo/f2/13/52/006cdc5c4d-bb30-4412-ae2e-512fb28a6ef220180326191352' width='100%'>";
  let logotec429="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_186/escudo/d7/48/19/005caa8b24-a53d-45d4-8512-6e9ba2c5d7d720210507214819' width='100%'>";
  let logotec430="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_214/escudo/b2/34/08/00ac406df0-ed54-4e3e-91f9-e947bc5c67b220230413153408' width='100%'>";
  let logotec431="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_102/escudo/a4/36/45/0097639ec2-6e13-449b-9be0-6b2632c7aaa420180326203645' width='100%'>";
  let logotec432="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_210/escudo/fb/30/08/00ff1124f6-2927-4d2a-b518-6e78480e3afb20230316133008' width='100%'>";
  let logotec433="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_214/escudo/03/56/12/005f910ec8-cb64-4ef1-a3dc-88663cccb80320230414005612' width='100%'>";
  let logotec434="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_143/escudo/f2/27/24/0072484785-b630-4f8f-8ca9-ac505a2130f220190427132724' width='100%'>";
  let logotec436="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/56/21/11/004cf96ab5-7bb4-4f4e-94a7-bdca1511eb5620230317192111' width='100%'>";
  let logotec437="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_213/escudo/47/39/56/0058e97b8c-115c-434a-acb3-028d1e3a604720230405213956' width='100%'>";
  let logotec438="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_221/escudo/f9/19/33/00d2fd2188-3e30-44b9-a1f4-f79212eb2cf920230812231933' width='100%'>";
  let logotec439="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_201/escudo/8b/47/02/0005156e72-4258-4de2-a1e4-fa7ebdaeb98b20220325184702' width='100%'>";
  let logotec440="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/9f/41/05/009b29c175-1273-47eb-9760-76fdfe6ea29f20230318124105' width='100%'>";
  let logotec441="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/9f/41/05/009b29c175-1273-47eb-9760-76fdfe6ea29f20230318124105' width='100%'>";
  let logotec442="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/54/06/38/00ef6effa4-0be0-4fe3-9ede-8ea3229bad5420230404140638' width='100%'>";
  let logotec444="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_222/escudo/3b/25/37/0017ab42d1-8fc3-4c56-aba9-87abd7fba93b20240314132537' width='100%'>";
  let logotec445="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/19/59/53/007b29857a-267c-4671-8d14-6c8f7dd1da1920230317065953' width='100%'>";
  let logotec446="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_222/escudo/e8/01/03/00e35358b0-cf19-40be-a029-56fc94a0cae820240319100103' width='100%'>";
  let logotec447="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_215/escudo/39/23/14/00a9ec71e0-82a0-492f-9749-102b5df4a03920230414202314' width='100%'>";
  let logotec448="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_222/escudo/5e/17/57/006c41a9fa-82da-4361-98d0-587b1fc07e5e20240314131757' width='100%'>";
  let logotec449="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_224/escudo/f5/19/15/007ef38ef1-090a-42e4-a573-248b576b0bf520240408221915' width='100%'>";
  let logotec450="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_223/escudo/94/29/54/00cced8abb-36bc-44d4-9a81-e65bb50dff9420240324152954' width='100%'>";
  let logotec451="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_222/escudo/9d/14/32/000038bc36-6265-4054-86c1-31b686a03c9d20240320221432' width='100%'>";
  let logotec452="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_223/escudo/88/39/42/0004990809-389b-4b7f-ada8-c74a1d9d888820240329173942' width='100%'>";
  let logotec453="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_221/escudo/35/43/41/00077ff582-5b2a-4673-8e53-63fd56db3d3520230905194341' width='100%'>";
  let logotec454="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_223/escudo/b9/26/19/009d792814-ac84-4bd1-baee-459ffdf7cdb920240328132619' width='100%'>";
  let logotec455="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_183/escudo/d7/21/05/00a20252de-810e-4f2b-b02c-e9bbf916d0d720210428092105' width='100%'>";
  let logotec456="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_222/escudo/91/04/39/00ff07e1f6-b0a7-4312-8cb4-8ce2a1a1069120240315120439' width='100%'>";
  let logotec457="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_214/escudo/84/11/02/00b2b6baf4-7d8f-457f-bb1d-767a9e41d78420230413131102' width='100%'>";
  let logotec458="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_183/escudo/b0/58/07/00f0f9805c-7dfe-45b4-8d92-2077eff041b020210427165807' width='100%'>";
  let logotec459="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_222/escudo/db/06/25/00b6454771-40ec-495d-879b-0743efca86db20240314230625' width='100%'>";
  let logotec460="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_222/escudo/2d/21/47/00643f44df-51d0-4a3c-9359-4dc8e02ca12d20240315142147' width='100%'>";
  let logotec461="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_183/escudo/a0/25/22/009df9caf1-4b4c-4bd9-a310-4ea5cfd3e4a020210428112522' width='100%'>";
  let logotec462="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_224/escudo/4f/36/40/00eb035c8e-2efe-4ade-bf08-5e61154f3e4f20240409143640' width='100%'>";
  let logotec463="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_110/escudo/40/03/56/00d718c586-1262-411d-a98e-eb8c8531b44020180413160356' width='100%'>";
  let logotec464="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_214/escudo/41/23/32/00d561b378-f6d7-4274-b47a-6ba2486f794120230413082332' width='100%'>";
  let logotec465="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_214/escudo/dd/57/35/00015026b0-a71c-46d7-8ca0-0e8cf4e1eedd20230411125735' width='100%'>";
  let logotec466="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_222/escudo/c7/38/31/00195b5a88-1ded-4d9d-8cfa-29b5da00ddc720240318223831' width='100%'>";
  let logotec467="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_222/escudo/aa/58/03/002bc28beb-c275-4104-b758-ace94c0baeaa20240314115803' width='100%'>";
  let logotec468="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_224/escudo/26/29/27/002fad8105-34b4-488a-8900-39ab611db72620240408162927' width='100%'>";
  let logotec469="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/c3/53/41/0044d71fcf-84b2-4e99-9a92-bbcb523aedc320230316205341' width='100%'>";
  let logotec470="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_225/escudo/c4/44/04/00d0e24f77-4ef8-4427-8e4f-4a57e2e79dc420240411224404' width='100%'>";
  let logotec471="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_223/escudo/e8/45/51/00d044b9ba-581d-49f8-9d41-6cdba576cde820240322224551' width='100%'>";
  let logotec472="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_215/escudo/ae/52/49/00d3b23f0c-372b-4590-8a0f-3b4d90c63aae20230414225249' width='100%'>";
  let logotec473="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_222/escudo/bf/04/30/00558d590b-0749-4da7-afce-9c731bef99bf20240316080430' width='100%'>";
  let logotec474="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_213/escudo/06/09/33/00ed25afea-8384-4e62-9c23-16347a581c0620230411070933' width='100%'>";
  let logotec475="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_225/escudo/70/58/30/00da3937e4-297d-4ec3-a57f-8526bd3be67020240411185830' width='100%'>";
  let logotec476="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_223/escudo/d7/09/56/00f8146e64-b383-471d-b3e6-63e2b0e4fcd720240403020956' width='100%'>";
  let logotec477="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_223/escudo/92/50/39/00d2e82e08-940f-4a82-bedb-68fc8678599220240325105039' width='100%'>";
  let logotec478="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_223/escudo/53/16/41/000ee49878-0f6b-4ce7-af00-84bdb6055d5320240406171641' width='100%'>";
  let logotec479="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_222/escudo/9d/53/32/00adcf06c0-3f1c-4e06-ba22-7fe37760fa9d20240314215332' width='100%'>";
  let logotec480="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_232/escudo/ba/04/58/0035cf9360-a791-4f19-85af-00ae351495ba20240625170458' width='100%'>";
  let logotec481="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_225/escudo/dc/46/05/00416d6933-0ff0-404a-9d5a-30aaf972a1dc20240411234605' width='100%'>";
  let logotec482="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_232/escudo/cf/27/21/0073813270-bb74-4a19-a8ae-d07ccb5b43cf20240716142721' width='100%'>";
  let logotec483="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_232/escudo/c0/29/33/000e4a24eb-5f3e-4de8-af08-a2bfa802a4c020240715232933' width='100%'>";
  let logotec484="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_232/escudo/92/20/19/002f3cf796-5748-4c36-a2c5-ffe7861d2a9220240719172019' width='100%'>";
  let logotec485="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_232/escudo/50/00/46/00fe140567-6746-44f7-b8f0-62ee56beca5020240716140046' width='100%'>";
  let logotec486="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_208/escudo/82/57/05/0004b0a51f-c5cf-4b4a-a9fc-5297578e448220220503235705' width='100%'>";
  let logotec487="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_222/escudo/7b/29/20/00bf0865dc-8f08-4b01-a0b9-091fdca45f7b20240314132920' width='100%'>";
  let logotec488="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_202/escudo/8e/41/20/003ceb752d-2dd1-4e6d-ad2f-4b4f82da3e8e20220403134120' width='100%'>";
  let logotec489="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_223/escudo/ad/47/24/00d04afc5b-04de-404e-9d8d-992d869a3fad20240323124724' width='100%'>";
  let logotec490="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_223/escudo/e3/00/36/00f49e786f-bbcf-4d3d-94fb-ef0a0f2614e320240327220036' width='100%'>";
  let logotec491="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_214/escudo/ad/47/28/00e9f15dfc-a4ff-406c-9fed-cc990b11ebad20230411174728' width='100%'>";
  let logotec492="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/9a/27/48/004eee97c3-4246-4ea0-b49b-14a5343e1c9a20230323072748' width='100%'>";
  let logotec493="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_222/escudo/f8/28/37/00492b9718-f399-4bef-9b35-7c069572e2f820240314202837' width='100%'>";
  let logotec494="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_224/escudo/66/28/21/00a9e25a1b-4baf-4434-bd2d-6ec841072e6620240409102821' width='100%'>";
  let logotec495="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_222/escudo/26/37/59/0075ea03f7-bf3a-4ba7-bef3-86c48bd8e32620240318193759' width='100%'>";
  let logotec496="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_186/escudo/1a/54/22/00bdf1104e-e269-413a-a44b-c46a296db71a20210505205422' width='100%'>";
  let logotec497="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_171/escudo/df/46/25/009da8b086-906a-44bf-bc1e-be6f0aff51df20200807164625' width='100%'>";
  let logotec498="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_213/escudo/dd/17/28/005f395a69-e061-47e3-8f3b-9dc686f90add20230407201728' width='100%'>";
  let logotec499="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_232/escudo/5b/51/53/005f56c00a-f491-439c-bf80-cda36af54d5b20240627165153' width='100%'>";
  let logotec500="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_223/escudo/cb/48/50/007040096f-e319-44e8-b21f-74d191aa6ccb20240404204850' width='100%'>";
  let logotec501="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_213/escudo/28/39/56/00ee3a3c0f-a086-4180-938e-5e56a3f2582820230408183956' width='100%'>";
  let logotec502="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_210/escudo/91/37/20/00a625d390-a073-4bbb-bf35-2877c628909120230316123720' width='100%'>";
  let logotec503="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_222/escudo/b1/52/24/00b7e4deb7-f783-4747-b51f-56f58bdcbdb120240314125224' width='100%'>";
  let logotec504="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/c7/32/29/0056b0d840-fe6c-44db-b5b7-a84aca17d1c720230316183229' width='100%'>";
  let logotec505="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_225/escudo/da/43/23/0095011485-12e2-4880-9b84-d92bcefcb5da20240411124323' width='100%'>";
  let logotec506="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_223/escudo/21/17/55/00fde04a92-f584-4b18-8fdc-9eb5783c532120240405211755' width='100%'>";
  let logotec507="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_226/escudo/26/24/29/00b4bd7b11-41c9-41ea-8abf-e8c226c1102620240413152429' width='100%'>";
  let logotec508="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_224/escudo/52/04/18/00d6e8ca39-c8c4-4b4a-8034-e9c8bf38815220240407000418' width='100%'>";
  let logotec509="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_222/escudo/04/25/20/00eee455d2-72bd-425c-9b4c-210100881b0420240314112520' width='100%'>";
  let logotec510="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_222/escudo/0d/30/38/00bfd4c262-68ca-44d9-8557-beee073cba0d20240314193038' width='100%'>";
  let logotec511="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_202/escudo/be/23/03/0023dbe6de-0450-492b-9c45-13ea67abeabe20220405122303' width='100%'>";
  let logotec512="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_186/escudo/db/04/30/00354a622e-7af7-4b29-b5f4-b3b488f843db20210505220430' width='100%'>";
  let logotec513="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_173/escudo/7f/00/19/00a1c194e9-73d4-4ad6-84f2-7dbdc4948d7f20200809020019' width='100%'>";
  let logotec514="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_222/escudo/61/45/29/00740f6b5c-e6ab-4da0-b382-a8515a4c396120240314184529' width='100%'>";
  let logotec515="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_223/escudo/82/09/07/00ab2b70c5-5399-4ca2-ad26-58015cef2c8220240405210907' width='100%'>";
  let logotec516="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_223/escudo/ad/54/12/00ffc19f37-ae5c-4d9a-8b4c-72086bd2d6ad20240322165412' width='100%'>";
  let logotec517="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_188/escudo/8e/34/46/00f3f72ae6-4a78-4f35-a943-ac47175ed48e20210524113446' width='100%'>";
  let logotec518="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_224/escudo/0d/13/43/0092a35485-0a2d-453d-a77a-fe5a1028bd0d20240408181343' width='100%'>";
  let logotec519="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_200/escudo/c4/31/55/00a23b8ee3-a413-4d90-941a-f2a7e391d9c420220318163155' width='100%'>";
  let logotec520="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_227/escudo/c5/51/33/002d0c9adc-0ddf-43e2-ad4b-ff7046f628c520240414165133' width='100%'>";
  let logotec521="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_214/escudo/b4/36/39/00038cbb01-08d7-4edc-8849-6733396d0eb420230412173639' width='100%'>";
  let logotec522="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_226/escudo/d4/52/10/00df47e847-189f-400d-8d4c-f7f5680d73d420240413105210' width='100%'>";
  let logotec523="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_222/escudo/ee/33/07/00a0814d73-0b6b-407d-9c59-54ce7b096fee20240318193307' width='100%'>";
  let logotec524="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/d8/08/50/002c3400a7-9db0-4c80-8a3c-56adf1c265d820230321150850' width='100%'>";
  let logotec525="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_210/escudo/9e/51/30/0061da4b9d-ed9f-4a68-9a02-fc08a07e5e9e20230316145130' width='100%'>";
  let logotec526="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_227/escudo/91/58/45/008a5e7217-56dd-4076-9fd8-1388aa9c0e9120240414235845' width='100%'>";
  let logotec527="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_224/escudo/34/07/20/0098ee7d60-4206-4c39-a4a7-f10697309a3420240409220720' width='100%'>";
  let logotec528="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_213/escudo/16/00/42/00de989b71-e8bd-4e2c-97b2-69a915660d1620230406120042' width='100%'>";
let logotec529="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_223/escudo/d1/39/46/008891d601-b0d1-4636-a131-5a113ef299d120240329093946' width='100%'>";
let logotec530="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_224/escudo/c7/16/23/00c5bff06e-e604-4603-91f7-7e497c6baec720240411121623' width='100%'>";
let logotec531="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/76/02/34/00cb2c7f49-1875-48a2-a3b6-226adbfdf67620230331220234' width='100%'>";
let logotec532="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_232/escudo/de/40/53/00ae9bee60-ac93-4dec-bd90-f60c61bad7de20240621074053' width='100%'>";
let logotec533="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_226/escudo/9d/43/29/0013f32e60-2e65-461a-bb0c-f287018c8e9d20240413134329' width='100%'>";
let logotec534="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_222/escudo/1b/57/07/00367a3975-b74c-4a86-96f3-1b5f85550f1b20240316105707' width='100%'>";
let logotec535="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/4f/01/35/009a283537-5363-476b-89cb-e40aabbda44f20230318150135' width='100%'>";
let logotec536="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/d5/36/47/0094159bee-fc24-4f84-b47a-bcc9c7a830d520230318003647' width='100%'>";
let logotec537="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_102/escudo/dc/21/50/0083644c0f-305e-4b1e-9d94-342ec35522dc20180324202150' width='100%'>";
let logotec542="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_222/escudo/02/15/57/00b84ab441-7ed5-4688-99bd-1b3f77775b0220240314231557' width='100%'>";
let logotec543="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_222/escudo/4d/08/10/007164443f-3662-4b27-a1f7-6a719ad60f4d20240318170810' width='100%'>";
let logotec541="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_224/escudo/60/10/51/00133fe341-8d29-4ff8-ba92-fc754ed1526020240409221051' width='100%'>;"
let logotec544="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_223/escudo/5b/10/24/00e7c5975b-9560-4d5a-802e-c0b1b9b3ce5b20240329121024' width='100%'>";
let logotec545="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_199/escudo/0f/48/37/003a84abc2-872d-4657-a233-29437291890f20220310214837' width='100%'>";
let logotec546="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_231/escudo/79/57/48/00abcabdc9-1219-4bcf-9668-c4efe959fe7920240427145748' width='100%'>";
let logotec547="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_217/escudo/cf/31/32/00b0ee1af5-a06e-4227-9b51-77ce88db3fcf20230416143132' width='100%'>";
let logotec548="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_223/escudo/62/31/56/00405150ef-c4bd-4cd0-b4f5-0f15f8f8c66220240328153156' width='100%'>";
let logotec549="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_225/escudo/b9/09/02/00844616f2-a93d-46bb-9a22-442b713729b920240411210902' width='100%'>";
let logotec550="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_223/escudo/db/30/08/004997f2f7-be90-4d3b-95c0-00917a7f9cdb20240403113008' width='100%'>";
let logotec551="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_214/escudo/03/15/52/009e87cd5d-a1de-4c9c-a8b4-5fe861d9ba0320230412221552' width='100%'>";
let logotec552="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/71/45/11/00fac5653d-19ec-489c-804b-7b1416fc227120230320104511' width='100%'>";
let logotec553="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_215/escudo/a4/35/29/0070769786-b9da-4a50-a7e5-8d4bc90660a420230414233529' width='100%'>";
let logotec554="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_165/escudo/16/55/23/0001a1b677-daf4-433e-9c0a-0f981384411620200723045523' width='100%'>";
let logotec555="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_225/escudo/c7/46/22/001ddf4ed5-932f-4890-bc45-16c11e5e72c720240411134622' width='100%'>";
let logotec556="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_224/escudo/3b/55/22/00296934f2-0c71-43b4-836d-d7ed93c1e03b20240410185522' width='100%'>";
let logotec557="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_222/escudo/3d/48/33/0079552a6f-d53b-4eb2-b3bd-8df36a03b63d20240315204833' width='100%'>";
let logotec558="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_222/escudo/88/49/01/008f01131e-8d75-4911-bef5-f876e9c5838820240314164901' width='100%'>";
let logotec559="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_226/escudo/89/23/43/002eda4ac9-9cb1-47c1-b8cd-0d933abf468920240413132343' width='100%'>;"
let logotec560="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_100/escudo/02/22/36/00d015c91a-b95f-4faf-84cd-07341a40300220180323092236' width='100%'>;"
let logotec561="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_210/escudo/62/53/11/0095f3948a-bfcf-4a9b-931b-22cb19f2416220230316125311' width='100%'>;"
let logotec562="<img src='' width='100%'>;"
let logotec563="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_223/escudo/b9/50/49/00319c86ea-179a-4613-b973-fa381334fbb920240403115049' width='100%'>;"
let logotec564="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_105/escudo/2b/49/58/005a6ef62d-fa78-4855-8152-5efb0acd112b20180406194958' width='100%'>;"
let logotec565="<img src='' width='100%'>;"
let logotec566="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/23/31/22/00f3e68cdc-d860-49fd-b81f-b9c049b8da2320230317213122' width='100%'>;"
let logotec567="<img src='' width='100%'>;"

  
  
  
  
  
  
  
  
  
  
   /*LOGO DOS CLUBES*/ 
   
   
  let logosemclube="<img src='https://proeleven.pt/uploads/clubs/semclube.png' width='100%''>";
  
  let logoquinzedenovembro="<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/15_de_Novembro.svg/180px-15_de_Novembro.svg.png' width='100%'>";
  let logoabc="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/3F5mqKWA4_qE8e-gvp5F-g_96x96.png' width='100%'>";
  let logoaguasanta="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/DD6jq5-mOskBU-zeoSNPCw_96x96.png' width='100%'>";
  let logoaguiademaraba="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/2GeWMGrfg-1oZOBkC0DWhA_96x96.png' width='100%'>";
  let logoaguianegra="<img src='https://upload.wikimedia.org/wikipedia/en/thumb/e/ec/Esporte_Clube_%C3%81guia_Negra_logo.svg/200px-Esporte_Clube_%C3%81guia_Negra_logo.svg.png' width='100%'>";
  let logoaltos="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/rJJyCU3m2jdo4Q0J3ThISg_96x96.png' width='100%'>";
  let logoamazonas="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/uuUY0RAXejVcckwdPoVyBQ_96x96.png' width='100%'>";
  let logoamericamg="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/xE2RajzsCEoen1wz8g8rhg_96x96.png' width='100%'>";
  let logoamericarj="<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/America_FC.svg/180px-America_FC.svg.png' width='100%'>";
  let logoamericarn="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/OdQJxRXXp2gxKWl7JkPsmw_96x96.png' width='100%'>";
  let logoanapolina="<img src='https://imagecache.365scores.com/image/upload/f_png,w_68,h_68,c_limit,q_auto:eco,dpr_2,d_Competitors:default1.png/v1/Competitors/9172' width='100%'>";
  let logoanapolis="<img src='https://imagecache.365scores.com/image/upload/f_png,w_68,h_68,c_limit,q_auto:eco,dpr_2,d_Competitors:default1.png/v4/Competitors/10278' width='100%'>";
  let logoandraus="<img src='https://imagecache.365scores.com/image/upload/f_png,w_68,h_68,c_limit,q_auto:eco,dpr_2,d_Competitors:default1.png/v1/Competitors/58405' width='100%'>";
  let logoaparecidense="<img src='https://imagecache.365scores.com/image/upload/f_png,w_68,h_68,c_limit,q_auto:eco,dpr_2,d_Competitors:default1.png/v3/Competitors/9177' width='100%'>";
  let logoafogados="<img src='https://imagecache.365scores.com/image/upload/f_png,w_68,h_68,c_limit,q_auto:eco,dpr_2,d_Competitors:default1.png/v1/Competitors/46462' width='100%'>";
  let logoasa="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/-p2iUBYkc2yF3PyLo128-A_96x96.png' width='100%'>";
  let logoathletic="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/S9CYRaQLMRSpASVWqjl17A_96x96.png' width='100%'>";
  let logoathletico="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/9LkdBR4L5plovKM8eIy7nQ_96x96.png' width='100%'>";
  let logoatleticocearense="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/zYf1d_t3yikP1lXpvNOQkQ_96x96.png' width='100%'>";
  let logoatleticogo="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/9mqMGndwoR9og_Z0uEl2kw_96x96.png' width='100%'>";
  let logoatleticomg="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/q9fhEsgpuyRq58OgmSndcQ_96x96.png' width='100%'>";
  let logoaudax="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/HgWmAm9NpS__2lgIBHwXkw_96x96.png' width='100%'>";
  let logoavai="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/9cwCmoBXGaPJ_Q5cgUeocg_96x96.png' width='100%'>";
  let logoavenida="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/xI1Kb8sgQmTiYOpb8gAjqQ_96x96.png' width='100%'>";
  let logoazuriz="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/tgXFFY3CiWEIul9EmzjD1g_96x96.png' width='100%'>";
  let logobage="<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/GE_Bage.svg/180px-GE_Bage.svg.png' width='100%'>";
  let logobahia="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/nIdbR6qIUDyZUBO9vojSPw_96x96.png' width='100%'>";
  let logobangu="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/PKHAaNYwUeTGzmMoJ1ejIg_96x96.png' width='100%'>";
  let logobarbalha="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/EWTJwl24mkKhW5Xi7MEbFw_96x96.png' width='100%'>";
  let logobarrasc="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/5ftQb-toTtbBJMxMsBqINw_96x96.png' width='100%'>";
  let logobelojardim="<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Logo_bjfc-1.png/180px-Logo_bjfc-1.png' width='100%'>";
  let logoboaesporte="<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Boa_EC_-_MG.svg/180px-Boa_EC_-_MG.svg.png' width='100%'>";
  let logobonsucesso="<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Bonsucesso_FC_-_Oficial.png/180px-Bonsucesso_FC_-_Oficial.png' width='100%'>";
  let logobotafogo="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/KLDWYp-H8CAOT9H_JgizRg_96x96.png' width='100%'>";
  let logobotafogopb="<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/BotafogoPB_logo.png/180px-BotafogoPB_logo.png' width='100%'>";
  let logobotafogosp="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/VYXHOgQwI7tw3EyFlWngWg_96x96.png' width='100%'>";
  let logobragantino="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/lMyw2zn1Z4cdkaxKJWnsQw_96x96.png' width='100%'>";
  let logobrasiliense="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/jLYqAEjRn65pDViL-TIz9g_96x96.png' width='100%'>";
  let logobrasilrs="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/abHSe0XZKDWYfR52Vl_PTw_96x96.png' width='100%'>";
  let logobrusque="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/ykKt1U6PEpMP7iiXwZvdBQ_96x96.png' width='100%'>";
  let logocabofriense="<img src='https://imagecache.365scores.com/image/upload/f_png,w_68,h_68,c_limit,q_auto:eco,dpr_2,d_Competitors:default1.png/v1/Competitors/17055' width='100%'>";
  let logocaldense="<img src='https://imagecache.365scores.com/image/upload/f_png,w_68,h_68,c_limit,q_auto:eco,dpr_2,d_Competitors:default1.png/v1/Competitors/9106' width='100%'>";
  let logocameta="<img src='https://imagecache.365scores.com/image/upload/f_png,w_68,h_68,c_limit,q_auto:eco,dpr_2,d_Competitors:default1.png/v1/Competitors/10261' width='100%'>";
  let logocapital="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/G59Brm7lvklziLyplzXqSA_96x96.png' width='100%'>";
  let logocaravaggio="<img src='https://imagecache.365scores.com/image/upload/f_png,w_68,h_68,c_limit,q_auto:eco,dpr_2,d_Competitors:default1.png/v2/Competitors/69969' width='100%'>";
  let logocaruarucity="<img src='https://imagecache.365scores.com/image/upload/f_png,w_68,h_68,c_limit,q_auto:eco,dpr_2,d_Competitors:default1.png/v2/Competitors/69192' width='100%'>";
  let logocastanhalpa="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/olZNmhf4Snp50CbeVvd4Jw_96x96.png' width='100%'>";
  let logocaucaia="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/FXwcID8-9ARKSb2faCpyIw_96x96.png' width='100%'>";
  let logocaxias="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/pcaKCn2_lq0vUa7SESw_wQ_96x96.png' width='100%'>";
  let logoceara="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/mSl0cz3i2t8uv4zcprobOg_96x96.png' width='100%'>";
  let logoceilandia="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/PHg2j9VLPOHa0jteGl-beQ_96x96.png' width='100%'>";
  let logocentral="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/W8J1r4VzPCpJJP8qzfqpkQ_96x96.png' width='100%'>";
  let logoceov="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/-tlhLbvMmgKNmXV-3e7d2Q_96x96.png' width='100%'>";
  let logochapecoense="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/K7JQUKTRsuXfO9YrD5dq5g_96x96.png' width='100%'>";
  let logocianorte="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/vsksTb7C-i3371bzVpcU_Q_96x96.png' width='100%'>";
  let logocomercialms="<img src='https://upload.wikimedia.org/wikipedia/pt/thumb/d/db/EC_Comercial_ms.png/180px-EC_Comercial_ms.png' width='100%'>";
  let logoconcordia="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/6YrTx6IYID_9DH87h4OI0Q_96x96.png' width='100%'>";
  let logoconfianca="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/LDxXug_0TbPTd0iUPHaJrg_96x96.png' width='100%'>";
  let logocorinthians="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/tCMSqgXVHROpdCpQhzTo1g_96x96.png' width='100%'>";
  let logocoritiba="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/LaFlBADLmsjHfGTehCYtuA_96x96.png' width='100%'>";
  let logocostarica="<img src='https://upload.wikimedia.org/wikipedia/pt/thumb/d/d4/CostaRicaEC.png/180px-CostaRicaEC.png' width='100%'>";
  let logocrac="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/DLrp9iYF3nrzuEs2dmZPXA_48x48.png' width='100%'>";
  let logocrato="<img src='https://upload.wikimedia.org/wikipedia/pt/thumb/a/a0/CratoEC.png/180px-CratoEC.png' width='100%'>";
  let logocrb="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/zEM-aepnkjTSoBMW9LH_Qw_48x48.png' width='100%'>";
  let logocriciuma="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/u_L7Mkp33uNmFTv3uUlXeQ_96x96.png' width='100%'>";
  let logocruzeiro="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/Tcv9X__nIh-6wFNJPMwIXQ_96x96.png' width='100%'>";
  let logocsa="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/xQkyuz2y935JX0uIi9w6Lg_96x96.png' width='100%'>";
  let logocse="<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/CSE_logo.svg/180px-CSE_logo.svg.png' width='100%'>";
  let logocuiaba="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/j6U8Rgt_6yyf0Egs9nREXw_96x96.png' width='100%'>";
  let logodecisaosertania="<img src='https://upload.wikimedia.org/wikipedia/pt/thumb/d/d1/Escudo_do_Decis%C3%A3o_Sert%C3%A2nia.png/180px-Escudo_do_Decis%C3%A3o_Sert%C3%A2nia.png' width='100%'>";
  let logodemocrata="<img src='https://upload.wikimedia.org/wikipedia/pt/thumb/e/ec/ECDemocrata.png/180px-ECDemocrata.png' width='100%'>";
  let logodombosco="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/o0P7qoM6apMTxmEZ9zNDIg_96x96.png' width='100%'>";
  let logoesportivo="<img src='https://upload.wikimedia.org/wikipedia/pt/thumb/1/11/ClubeEsportivo2022.png/180px-ClubeEsportivo2022.png' width='100%'>";
  let logofastclubeam="<img src='https://upload.wikimedia.org/wikipedia/pt/thumb/c/c4/FastClube.png/210px-FastClube.png' width='100%'>";
  let logofccascavel="<img src='https://upload.wikimedia.org/wikipedia/pt/thumb/2/29/FC_Cascavel.png/180px-FC_Cascavel.png' width='100%'>";
  let logoferroviariasp="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/CD4zI_mvHVrKZaMhYQjiJg_96x96.png' width='100%'>";
  let logoferroviario="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/VSFVnnpYTvXUXors2TWCGw_96x96.png' width='100%'>";
  let logofigueirense="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/BvJRLFf6J6ZcpQfZppP2_A_96x96.png' width='100%'>";
  let logoflamengo="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/orE554NToSkH6nuwofe7Yg_96x96.png' width='100%'>";
  let logofloresta="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/GbG6iCUuIIVBLeh6gxABJw_96x96.png' width='100%'>";
  let logofluminense="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/fCMxMMDF2AZPU7LzYKSlig_96x96.png' width='100%'>";
  let logofluminensepi="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/cEdEDDd934aDK_AX1zWLTA_96x96.png' width='100%'>";
  let logofortaleza="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/me10ephzRxdj45zVq1Risg_96x96.png' width='100%'>";
  let logofozdoiguacu="<img src='https://upload.wikimedia.org/wikipedia/pt/thumb/c/c2/FOZ-FC-2014-229x300_%281%29.png/180px-FOZ-FC-2014-229x300_%281%29.png' width='100%'>";
  let logogalomaringa="<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Galo_maringa_vetor_%281%29.png/180px-Galo_maringa_vetor_%281%29.png' width='100%'>";
  let logogama="<img src='https://segama.com.br/images/Brasao-SE-Gama-p.png'>";
  let logogloria="<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Gloria-logo.png/180px-Gloria-logo.png' width='100%'>";
  let logogoianesia="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/A5aviZHHjbxK7MyPk9iA8Q_48x48.png' width='100%'>";
  let logogoiania="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/HR4eL_RAa2stz4m1C6iHng_48x48.png' width='100%'>";
  let logogoias="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/gb8bo2x00XsbvsVp9nGniA_96x96.png' width='100%'>";
  let logogoiatuba="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/PrOstvkOHdeF6u2GAKkxFA_96x96.png' width='100%'>";
  let logogremio="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/Ku-73v_TW9kpex-IEGb0ZA_96x96.png' width='100%'>";
  let logogremioanapolis="<img src='https://upload.wikimedia.org/wikipedia/pt/thumb/5/50/Gr%C3%AAmio_An%C3%A1polis.png/225px-Gr%C3%AAmio_An%C3%A1polis.png' width='100%'>";
  let logogremiomaringa="<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Gr%C3%AAmio_de_Esportes_Maring%C3%A1.png/270px-Gr%C3%AAmio_de_Esportes_Maring%C3%A1.png' width='100%'>";
  let logoguarani="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/fxJElzuqyxKVwsUcfsC49Q_96x96.png' width='100%'>";
  let logoguaranidepalhoca="<img src='https://upload.wikimedia.org/wikipedia/pt/thumb/a/aa/GuaraniPalhoca.png/180px-GuaraniPalhoca.png' width='100%'>";
  let logoguaranydesobral="<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/GuaranySobralSC.png/180px-GuaranySobralSC.png' width='100%'>";
  let logoguaranyrs="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/PHwb6rKt4Jlr7r69UfkwLg_96x96.png' width='100%'>";
  let logohercilioluz="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/7JwCEMzNDp7j6RdD9htmeQ_96x96.png' width='100%'>";
  let logohorizonte="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/UvXF3Ane6Ueq3gFzwZ-GOg_96x96.png' width='100%'>";
  let logohumaita="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/bWLsGXzGSqZ0E1ij3LG1uA_96x96.png' width='100%'>";
  let logoibis="<img src='https://upload.wikimedia.org/wikipedia/pt/thumb/2/22/%C3%8DbisSC.png/180px-%C3%8DbisSC.png' width='100%'>";
  let logoicasa="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/w4D5PzbUJtk6aY4pRA9tsA_96x96.png' width='100%'>";
  let logoiguatu="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/ZQkqljySYgbI_4CJ6rr7QA_96x96.png' width='100%'>";
  let logoinhumas="<img src='https://upload.wikimedia.org/wikipedia/pt/thumb/d/da/InhumasEC.png/180px-InhumasEC.png' width='100%'>";
  let logointerdelajes="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/ZcQ8sZ_I5J7gu2o_zrkU4Q_96x96.png' width='100%'>";
  let logointernacional="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/OWVFKuHrQuf4q2Wk0hEmSA_96x96.png' width='100%'>";
  let logointernacionalsp="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/R9oc1gfjHY_Noyn61-frYw_96x96.png' width='100%'>";
  let logoipatinga="<img src='https://upload.wikimedia.org/wikipedia/pt/thumb/9/95/IpatingaFC.png/180px-IpatingaFC.png' width='100%'>";
  let logoipora="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/lFLMDtCk_qI7JyfQyc2Qlg_96x96.png' width='100%'>";
  let logoitabaiana="<img src='https://upload.wikimedia.org/wikipedia/pt/thumb/f/f9/AOItabaiana.png/180px-AOItabaiana.png' width='100%'>";
  let logoitabuna="<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/ItabunaECBA.png/180px-ItabunaECBA.png' width='100%'>";
  let logoitapipoca="<img src='https://upload.wikimedia.org/wikipedia/pt/thumb/3/34/Itapipoca_novo.gif/180px-Itapipoca_novo.gif' width='100%'>";
  let logoituano="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/d_-UoAOHszNZufgbaFSLXQ_96x96.png' width='100%'>";
  let logoitumbiara="<img src='https://upload.wikimedia.org/wikipedia/pt/thumb/e/e7/ItumbiaraEC.png/180px-ItumbiaraEC.png' width='100%'>";
  let logojacuipense="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/UDXNNn-yg-3I02HEN6n81g_96x96.png' width='100%'>";
  let logojataiense="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/WuWoKYQalhCB7dYQiypjMg_48x48.png' width='100%'>";
  let logojoinville="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/m9r3ew7joIpgg_7l9ik7VA_96x96.png' width='100%'>";
  let logojuazeirense="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/DL0MEF3aN6tp83CC4-fjyw_48x48.png' width='100%'>";
  let logojuventude="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/JrXw-m4Dov0gE2Sh6XJQMQ_96x96.png' width='100%'>";
  let logojuventusdejaragua="<img src='https://upload.wikimedia.org/wikipedia/pt/thumb/2/28/Juventus_de_Jaragu%C3%A1-SC.png/180px-Juventus_de_Jaragu%C3%A1-SC.png' width='100%'>";
  let logolajeadense="<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/CE_Lejaedense_%28RS%29.svg/180px-CE_Lejaedense_%28RS%29.svg.png' width='100%'>";
  let logolondrina="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/e7TVDQHlKXSPLpNT58XzBA_96x96.png' width='100%'>";
  let logoluverdense="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/Y7q_hq5BJauMYuMLdYofgg_96x96.png' width='100%'>";
  let logoluziania="<img src='https://upload.wikimedia.org/wikipedia/pt/thumb/2/23/AALuziania2020.png/180px-AALuziania2020.png' width='100%'>";
  let logomadureira="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/flJKormLpp86cWMgLK7QHg_96x96.png' width='100%'>";
  let logomaguary="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/Zetg_kUIs8nmk9Mv9aMadA_96x96.png' width='100%'>";
  let logomanauara="<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Manauara_EC-AM_%28BRA%29_logo.png/180px-Manauara_EC-AM_%28BRA%29_logo.png' width='100%'>";
  let logomanaus="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/S861eZfMqq4V7d3tRQuyIg_96x96.png' width='100%'>";
  let logomaracanace="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/uhRHwr-EbLuUxpgYhVEzcg_96x96.png' width='100%'>";
  let logomaranhao="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/3_NdHeSkJmxjqw0kddmQRA_48x48.png' width='100%'>";
  let logomarciliodias="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/1oRQtxA91S1SktMW6TzXXQ_96x96.png' width='100%'>";
  let logomaringa="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/reJfYxbZflCw0Wsi5s0eNA_96x96.png' width='100%'>";
  let logometropolitano="<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/CA_Metropolitano_%28Blumenau_-_SC%29.svg/180px-CA_Metropolitano_%28Blumenau_-_SC%29.svg.png' width='100%'>";
  let logomirassol="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/eQ05kONtFs6kLBgww3MHsg_96x96.png' width='100%'>";
  let logomixto="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/FZtrJnM0Su-XWkSGN1YYmw_96x96.png' width='100%'>";
  let logomorrinhos="<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Morrinhos_FC.svg/180px-Morrinhos_FC.svg.png' width='100%'>";
  let logomotoclub="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/X5on_Cx9L9o8cUSeKZl3zw_96x96.png' width='100%'>";
  let logonacao="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/BcBgRLDF1NFhpqiS8c_SFg_96x96.png' width='100%'>";
  let logonacionalam="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/G-Vk-aqf0L5Mo8i3XPaxJA_96x96.png' width='100%'>";
  let logonautico="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/ShnE2eI_Q37QTEvvQCopqg_96x96.png' width='100%'>";
  let logonauticorr="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/g5DzGt4GXefXY36b6GSpbQ_96x96.png' width='100%'>";
  let logonovaiguacu="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/Ta0_AAIJCX__vMelaeXcFA_96x96.png' width='100%'>";
  let logonovamutum="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/9ISjwlA6V-AFW5szJsya8A_96x96.png' width='100%'>";
  let logonovohamburgo="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/hMtuU-mtnkepCxxhZXdDnw_96x96.png' width='100%'>";
  let logonovorizontino="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/2YeE0Oupr5ApZJR0CyX_3g_96x96.png' width='100%'>";
  let logoolaria="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/DFmu9LzKIBIKZKa_HUpv8g_96x96.png' width='100%'>";
  let logooperarioms="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/wZt1IFiBPKd1dsLOVsCqEw_96x96.png' width='100%'>";
  let logooperariopr="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/GmLvorr4MqC4aRinQQ4Mdw_96x96.png' width='100%'>";
  let logopacajus="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/1uyHQ048ErAFNFNJgGpVZg_96x96.png' width='100%'>";
  let logopalmeiras="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/7spurne-xDt2p6C0imYYNA_96x96.png' width='100%'>";
  let logoparana="<img src='https://upload.wikimedia.org/wikipedia/pt/0/07/Parana_Clube.png' width='100%'>";
  let logopassofundo="<img src='https://upload.wikimedia.org/wikipedia/pt/thumb/4/4b/1422662711701140.png/270px-1422662711701140.png' width='100%'>";
  let logopatrocinense="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/7TSGIkNxZ6eGwIcjMJWoqQ_96x96.png' width='100%'>";
  let logopaulista="<img src='https://upload.wikimedia.org/wikipedia/pt/thumb/0/06/PaulistaFC.png/180px-PaulistaFC.png' width='100%'>";
  let logopaysandu="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/1aw29215gcFtsyu07fCifw_96x96.png' width='100%'>";
  let logopelotas="<img src='https://upload.wikimedia.org/wikipedia/pt/thumb/9/96/EsporteClubePelotas.png/180px-EsporteClubePelotas.png' width='100%'>";
  let logopenarolam="<img src='https://upload.wikimedia.org/wikipedia/pt/thumb/1/15/Penarol_AC_-_AM.png/180px-Penarol_AC_-_AM.png' width='100%'>";
  let logopetrolina="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/iIM79gR8Z8zO1URabP1fzA_96x96.png' width='100%'>";
  let logopontepreta="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/0e4mOPeQPUipr9oh54-7NQ_96x96.png' width='100%'>";
  let logoporto="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/-kKL91NwF8bWlIPa6JGBDQ_96x96.png' width='100%'>";
  let logoportovelhoro="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/bujS7vAo3mzxIixQxELsyA_96x96.png' width='100%'>";
  let logoportuguesa="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/a9BSJk9BywwXNj4LJPq5jg_96x96.png' width='100%'>";
  let logoportuguesarj="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/3g9jcbmSue9KrhiSJJT19Q_96x96.png' width='100%'>";
  let logopotiguardemossoro="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/VNawv_knNUgke7fd72EPkg_96x96.png' width='100%'>";
  let logopousoalegre="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/tuJNqEe81IR_a01SNlK68g_96x96.png' width='100%'>";
  let logoprincesadosolimoes="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/U889zrhISGmVj2aUSR28dQ_96x96.png' width='100%'>";
  let logopsts="<img src='https://upload.wikimedia.org/wikipedia/pt/thumb/f/f9/Paran%C3%A1_Soccer_Technical_Center.png/180px-Paran%C3%A1_Soccer_Technical_Center.png' width='100%'>";
  let logorealbrasilia="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/opGvB6I0r_Zo3MtqhAxZOw_96x96.png' width='100%'>";
  let logorealnoroeste="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/OgQWjfeTLe9VDhHiF5YYDw_96x96.png' width='100%'>";
  let logoremo="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/bENrK5iSMF6sXrEkDNNxng_96x96.png' width='100%'>";
  let logoresende="<img src='https://upload.wikimedia.org/wikipedia/pt/thumb/6/67/ResendeFCOL.png/180px-ResendeFCOL.png' width='100%'>";
  let logoretro="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/aT3M3q9zvbTH-EZLnYEojw_96x96.png' width='100%'>";
  let logoriobrancoac="<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Escudorbfc.png/180px-Escudorbfc.png' width='100%'>";
  let logorionegroam="<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/A._Rio_Negro_C..png/180px-A._Rio_Negro_C..png' width='100%'>";
  let logoriverpi="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/SfgaI3aGTzKkqHH_g0RmyA_48x48.png' width='100%'>";
  let logosalgueiro="<img src='https://upload.wikimedia.org/wikipedia/pt/thumb/b/ba/SalgueiroAC2020.png/180px-SalgueiroAC2020.png' width='100%'>";
  let logosampaiocorrea="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/G52t9iE9YvNjIKh-8xyHGg_96x96.png' width='100%'>";
  let logosantacruz="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/NWbDR2-iD5-EjMZOEbKlJw_96x96.png' width='100%'>";
  let logosantacruzdenatal="<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Santa_Cruz_Futebol_Clube_RN_logo.png/180px-Santa_Cruz_Futebol_Clube_RN_logo.png' width='100%'>";
  let logosantoandre="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/gvCb4nd1fAVkf4U3_smQtw_96x96.png' width='100%'>";
  let logosantos="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/VHdNOT6wWOw_vJ38GMjMzg_96x96.png' width='100%'>";
  let logosaobernardo="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/NkYAs-MFD5lpQf7krtB-ew_96x96.png' width='100%'>";
  let logosaocaetano="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/yqZ-C7aHxZIRDdwCo_dRdA_96x96.png' width='100%'>";
  let logosaocristovao="<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/S%C3%A3o_Crist%C3%B3v%C3%A3o_de_Futebol_e_Regatas.png/180px-S%C3%A3o_Crist%C3%B3v%C3%A3o_de_Futebol_e_Regatas.png' width='100%'>";
  let logosaojoseense="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/fmnyoN22p1UB8q6bo9VPMQ_96x96.png' width='100%'>";
  let logosaojosers="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/byWetqZZ2A-mTz7AjWGS-A_96x96.png' width='100%'>";
  let logosaojosesp="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/8Ui604byn_Q6x7JDt8SJLQ_96x96.png' width='100%'>";
  let logosaoluizrs="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/oMXSXIwc2ZWOyHzUby8biA_96x96.png' width='100%'>";
  let logosaopaulo="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/4w2Z97Hf9CSOqICK3a8AxQ_96x96.png' width='100%'>";
  let logosaoraimundoam="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/lCGojmcAEj8o42nv0JBgAA_96x96.png' width='100%'>";
  let logosaoraimundorr="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/v0SJ5JC-mP4pBIteoe1ImA_96x96.png' width='100%'>";
  let logosergipe="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/QqnKq-neVPpgo5vgVayISQ_96x96.png' width='100%'>";
  let logoserra="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/19j09_KUVaFWA6wR1m57jg_96x96.png' width='100%'>";
  let logosocial="<img src='https://upload.wikimedia.org/wikipedia/pt/thumb/8/83/Social_logo.gif/180px-Social_logo.gif' width='100%'>";
  let logosousa="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/it_YmdpyMaOP8FP2Zqd3Jg_96x96.png' width='100%'>";
  let logosport="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/u9Ydy0qt6JJjWhTaI6r10A_96x96.png' width='100%'>";
  let logotiradentesce="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/qmyM-br6D-WYkTOkY0knEg_96x96.png' width='100%'>";
  let logotocantinopolis="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/rf7vRgQSxmWcHytxHgxMkw_96x96.png' width='100%'>";
  let logotoledo="<img src='https://upload.wikimedia.org/wikipedia/pt/thumb/a/ab/ToledoEC.png/180px-ToledoEC.png' width='100%'>";
  let logotombense="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/hVv2tWVGqcgg_W-j_oputw_96x96.png' width='100%'>";
  let logotremap="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/nHeVEKVIrxAGlACNMEsTFw_96x96.png' width='100%'>";
  let logotreze="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/jezs6er51UtV69Fqi0IJtw_48x48.png' width='100%'>";
  let logotunalusopa="<img src='https://upload.wikimedia.org/wikipedia/pt/thumb/6/67/TunaLusoB.png/180px-TunaLusoB.png' width='100%'>";
  let logotupi="<img src='https://upload.wikimedia.org/wikipedia/pt/thumb/3/3e/Tupi_Football_Club.png/225px-Tupi_Football_Club.png' width='100%'>";
  let logotupinambas="<img src='https://upload.wikimedia.org/wikipedia/pt/thumb/5/5c/TupynambasFC2023.png/180px-TupynambasFC2023.png' width='100%'>";
  let logouberlandia="<img src='https://upload.wikimedia.org/wikipedia/pt/thumb/c/ca/UberlandiaEC.png/180px-UberlandiaEC.png' width='100%'>";
  let logouniaorondonopolis="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/eE4Q70zh5oYf8r8AXpdlMA_96x96.png' width='100%'>";
  let logourt="<img src='https://upload.wikimedia.org/wikipedia/pt/thumb/d/d2/URTmg.png/180px-URTmg.png' width='100%'>";
  let logovasco="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/hHwT8LwRmYCAGxQ-STLxYA_96x96.png' width='100%'>";
  let logoveracruz="<img src='https://upload.wikimedia.org/wikipedia/pt/thumb/9/98/VeraCruzFC.png/180px-VeraCruzFC.png' width='100%'>";
  let logovilanova="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/v3upsCABZm2skuxyszzvwg_96x96.png' width='100%'>";
  let logovillanovamg="<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Villa_Nova_AC_%28Estr%29_-_MG.svg/180px-Villa_Nova_AC_%28Estr%29_-_MG.svg.png' width='100%'>";
  let logovitoria="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/LHSM6VchpkI4NIptoSTHOg_96x96.png' width='100%'>";
  let logovitoriadastabocas="<img src='https://upload.wikimedia.org/wikipedia/pt/thumb/3/38/VitoriaTabocas.png/180px-VitoriaTabocas.png' width='100%'>";
  let logovoltaredonda="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/DsXF0mAUd6L0JjRhOwsr2w_96x96.png' width='100%'>";
  let logoxvpiracicaba="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/bRNGNUqTo4IQA88gv2F_gA_96x96.png' width='100%'>";
  let logoypirangaap="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/ryjuXFcFCIgdotywJMem-A_96x96.png' width='100%'>";
  let logoypirangars="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/hNX_cbKDANEj_oTo1jlL7Q_96x96.png' width='100%'>";
  let logoatleticoba="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/TYmL9GMl9kyBSJlaZHTrHw_96x96.png' width='100%'>";
  let logobarcelonaba="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/iKBoLj05Cy2Amqo1xBWCGQ_96x96.png' width='100%'>";
  let logojacobina="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/T4fYmorNcSDUHWgLjaVJiA_96x96.png' width='100%'>";
  let logojequie="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/xbtSFWDs0rsGAXltmeu3rw_96x96.png' width='100%'>";
  let logobahiadefeira="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/lyGZrmGgGWs3UYbP1epBlw_96x96.png' width='100%'>";
  let logocolocoloba="<img src='https://upload.wikimedia.org/wikipedia/pt/thumb/8/85/ColoColoFR2020.png/180px-ColoColoFR2020.png' width='100%'>";
  let logofluminensedefeira="<img src='https://upload.wikimedia.org/wikipedia/pt/thumb/2/2a/Fluminense_de_Feira_FC.png/180px-Fluminense_de_Feira_FC.png' width='100%'>";
  let logograpiuna="<img src='https://upload.wikimedia.org/wikipedia/pt/thumb/4/43/Grapi%C3%BAnaAC.png/180px-Grapi%C3%BAnaAC.png' width='100%'>";
  let logojuazeiro="<img src='https://upload.wikimedia.org/wikipedia/pt/thumb/2/21/JuazeiroSC.png/180px-JuazeiroSC.png' width='100%'>";
  let logounirb="<img src='https://upload.wikimedia.org/wikipedia/pt/thumb/3/33/Escudo_UNIRB_FC.png/180px-Escudo_UNIRB_FC.png' width='100%'>";
  let logovitoriadaconquista="<img src='https://upload.wikimedia.org/wikipedia/pt/thumb/5/5b/ECPPVitoriaDaConquista.png/150px-ECPPVitoriaDaConquista.png' width='100%'>";
  let logoleonico="<img src='https://upload.wikimedia.org/wikipedia/pt/thumb/6/66/ADLe%C3%B4nico.png/180px-ADLe%C3%B4nico.png' width='100%'>";

  let logoalianzalima="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/TP5mGzCKTS6SCRPqvAvBVA_96x96.png' width='100%'>";
  let logoamericadecali="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/Pg8gT7CDn-Jv1zZ2EO7ajQ_96x96.png' width='100%'>";
  let logoatleticonacional="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/i6-Yda76iPfeYEg4JcNbuw_96x96.png' width='100%'>";
  let logobocajuniors="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/YO1impuFJT2hex6wvCd9Pw_96x96.png' width='100%'>";
  let logobolivar="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/9205ld_2yc8dZSaWBtIsWg_96x96.png' width='100%'>";
  let logocerroporteno="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/q_2P3cWhPBE6a_0bB-xLAQ_96x96.png' width='100%'>";
  let logocolocolo="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/cEY0fDx48kkZOPpbK_Bhsg_96x96.png' width='100%'>";
  let logodeptachira="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/TL3-aSNtyCUP78uUZ35HWg_96x96.png' width='100%'>";
  let logoestudiantesdelaplata="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/nDfL4YLZSNWXZniXushVag_96x96.png' width='100%'>";
  let logoindependiente="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/YkuS0LD4UowC0MDzpKqZXw_96x96.png' width='100%'>";
  let logoinddelvalle="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/Qg_3ucpKBdjZIpga48sfIw_96x96.png' width='100%'>";
  let logoldu="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/Iuk3Emwfmii37cXTu4qJEQ_96x96.png' width='100%'>";
  let logonacionaluru="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/Uql1qECWH5pRMbm5UVsjPg_96x96.png' width='100%'>";
  let logonewellsoldboys="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/Lss4UJ_IL6ekpEzz1hYKug_96x96.png' width='100%'>";
  let logoolimpia="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/4O3gcJ3OuxDAG9z4lkzk0Q_96x96.png' width='100%'>";
  let logopenarol="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/dO-HNzx-ozLofoWOj7kr9g_96x96.png' width='100%'>";
  let logoracingarg="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/wi-J-3U7th2bpIB_Uy9Euw_96x96.png' width='100%'>";
  let logoriverplate="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/700Mj6lUNkbBdvOVEbjC3g_96x96.png' width='100%'>";
  let logorosariocentral="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/z-n52o4GCyVOhf7N_VRMBw_96x96.png' width='100%'>";
  let logosanlorenzo="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/3guH9PUqsLcUw9o8VBhAlw_96x96.png' width='100%'>";
  let logothestrongest="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/n7PctzbrK3SsQvI81bU9DA_96x96.png' width='100%'>";
  let logounivcatolicachi="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/tomgbf2yPii8nJqOGsfsVw_96x96.png' width='100%'>";
  let logounivdechile="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/jqe29gPx-mxrOrDOSLwcBw_96x96.png' width='100%'>";
  let logovelezsarsfield="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/EG7pVKQAW2mvbnKsMoMbYA_96x96.png' width='100%'>";
  let logoargentinosjrs="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/_Vs9SZ4f9XZbgLC2ee_GTA_96x96.png' width='100%'>";
  let logobanfield="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/lRUvM7_5xXHy2h9wohKZ9A_96x96.png' width='100%'>";
  let logobarcelonasc="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/snzD6Ep_orwAcAA5c5sPNw_96x96.png' width='100%'>";
  let logobelgrano="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/ARRobSqsCAE23mzPdOHJYQ_96x96.png' width='100%'>";
  let logocobresal="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/Z6MeIlqydGP7FmYYR5gz-g_96x96.png' width='100%'>";
  let logocolon="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/YGkWVpsFb9FS1WRxl8ZdWg_96x96.png' width='100%'>";
  let logodanubio="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/42ylSoH2yhRG3RKtNPn3kQ_96x96.png' width='100%'>";
  let logodeportestolima="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/xiEOsGeaqMqf7DlTh3siRQ_96x96.png' width='100%'>";
  let logodepcali="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/B44aM-Ibb3k4TuC0PhciEA_96x96.png' width='100%'>";
  let logoemelec="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/E0wlNj3ZcvO0hmFpU-5z9g_96x96.png' width='100%'>";
  let logoguaranipar="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/a_X_1KImKOECguMnwxbPFw_96x96.png' width='100%'>";
  let logohuachipato="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/HdKjN7bWGo0noZ06Gn6Fow_96x96.png' width='100%'>";
  let logohuracan="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/BXhsD_6yvgePrhCIeziDcA_96x96.png' width='100%'>";
  let logoindmedellín="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/EXzxmE5XPA9zm43tU_q2xg_96x96.png' width='100%'>";
  let logolanus="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/FiqktuVwEcYAOZNp32H-OQ_96x96.png' width='100%'>";
  let logolibertadpar="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/-n4YxXgf_vhcYhp03Mq6Dw_96x96.png' width='100%'>";
  let logoliverpool="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/jtT0SelMNn5fKUt5WVVokA_96x96.png' width='100%'>";
  let logomillonarios="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/1DQhf49J-kjaVmo0XSBAsA_96x96.png' width='100%'>";
  let logonacionalpotosi="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/HFW8XSKhJar9vCmPhi_Z0A_96x96.png' width='100%'>";
  let logooncecaldas="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/lVXA7Dsu-i1izbJfc-Xe9Q_96x96.png' width='100%'>";
  let logoquilmes="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/TM2nc1qIiQss1aI1DojEfg_96x96.png' width='100%'>";
  let logosantafe="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/9ykygO-be_VGkEO4AcC8SQ_96x96.png' width='100%'>";
  let logosportingcristal="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/YPVGGCsGPrx5RVW6deB-hQ_96x96.png' width='100%'>";
  let logotalleres="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/MW12yOtJtAqfvt7JKt4iUg_96x96.png' width='100%'>";
  let logotigre="<img src='https://ssl.gstatic.com/onebox/media/sports/logos/NBOwSdURT-K9-F5z2yhgjA_96x96.png' width='100%'>";

 

  
  /**CLUBES**/  var semclube={nome:'sem clube',logo:logosemclube,nivel:'citadino',uf:'RS',estadual:'RS2',div:' ',rodingr:'1',obj:'0'};
  
  

  let quinzedenovembro=['15 de Novembro',logoquinzedenovembro,'Citadino','RS','RS2','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'titulo1','titulo2','titulo3','titulo4','titulo5','titulo6','titulo7','titulo8','titulo9','titulo10','titulo11','titulo12','titulo13','titulo14','titulo15','titulo16','titulo17','titulo18','titulo19','titulo20'];
  let abc=['ABC',logoabc,'Estadual','RN','NO','C',1,'G4',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let aguasanta=['Água Santa',logoaguasanta,'Citadino','SP','SP2','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let aguiademaraba=['Águia de Marabá',logoaguiademaraba,'Citadino','PA','NN1','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let aguianegra=['Águia Negra',logoaguianegra,'Citadino','MS','CO1','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let altos=['Altos',logoaltos,'Citadino','PI','NO2','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let amazonas=['Amazonas',logoamazonas,'Citadino','AM','NN','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let americamg=['América-MG',logoamericamg,'Pequeno','MG','MG','A',1,'G16',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','33','2023'];
  let americarj=['América-RJ',logoamericarj,'Regional','RJ','RJ1','B',1,'G16',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let americarn=['América-RN',logoamericarn,'Estadual','RN','NO','B',1,'G13',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let anapolina=['Anapolina',logoanapolina,'Citadino','GO','GO','',1,'G13',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let anapolis=['Anápolis',logoanapolis,'Citadino','GO','GO','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let andraus=['Andraus',logoandraus,'Citadino','PR','PR1','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let aparecidense=['Aparecidense',logoaparecidense,'Citadino','GO','GO','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let afogados=['Afogados',logoafogados,'Citadino','PE','PE1','',1,'G16',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let asa=['ASA',logoasa,'Regional','AL','NO1','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let athletic=['Athletic',logoathletic,'Citadino','MG','MG','C',1,'SUBIR',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let athletico=['Athletico',logoathletico,'Médio','PR','PR','A',1,'G13',,,'CDC',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','37','2023'];
  let atleticocearense=['Atlético Cearense',logoatleticocearense,'Citadino','CE','CE','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let atleticomg=['Atlético-MG',logoatleticomg,'Grande','MG','MG','A',1,'G4',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','32','2023'];
  let audax=['Audax',logoaudax,'Citadino','RJ','RJ','',1,'G13',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let avai=['Avaí',logoavai,'Pequeno','SC','SC','C',1,'G4',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let avenida=['Avenida',logoavenida,'Citadino','RS','RS1','',1,'0,00',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let azuriz=['Azuriz',logoazuriz,'Citadino','PR','PR1','',1,'G16',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let bage=['Bagé',logobage,'Citadino','RS','RS1','',1,'G13',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let bahia=['Bahia',logobahia,'Grande','BA','BA','A',1,'G13',,,'CDC',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','11','2023'];
  let bangu=['Bangu',logobangu,'Citadino','RJ','RJ1','',1,'0,00',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let barbalha=['Barbalha',logobarbalha,'Citadino','CE','CE1','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let barrasc=['Barra-SC',logobarrasc,'Citadino','SC','SC','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let belojardim=['Belo Jardim',logobelojardim,'Citadino','PE','PE1','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let boaesporte=['Boa Esporte',logoboaesporte,'Citadino','MG','MG1','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','4','2024'];
  let bonsucesso=['Bonsucesso',logobonsucesso,'Citadino','RJ','RJ1','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let botafogopb=['Botafogo-PB',logobotafogopb,'Regional','PB','NO','C',1,'G13',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let botafogosp=['Botafogo-SP',logobotafogosp,'Regional','SP','SP','C',1,'G13',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let bragantino=['Bragantino',logobragantino,'Pequeno','SP','SP','A',1,'G16',,,'CDC',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','19','2023'];
  let brasiliense=['Brasiliense',logobrasiliense,'Regional','DF','CO','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let brasilrs=['Brasil-RS',logobrasilrs,'Regional','RS','RS','B',1,'G16',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','14','2023'];
  let brusque=['Brusque',logobrusque,'Regional','SC','SC1','C',1,'G13',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let cabofriense=['Cabofriense',logocabofriense,'Citadino','RJ','RJ1','',1,'G13',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let caldense=['Caldense',logocaldense,'Regional','MG','MG1','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','14','2023'];
  let cameta=['Cametá',logocameta,'Citadino','PA','NN2','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let capital=['Capital',logocapital,'Citadino','TO','NN1','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let caravaggio=['Caravaggio',logocaravaggio,'Citadino','SC','SC1','',1,'G4',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let caruarucity=['Caruaru City',logocaruarucity,'Citadino','PE','PE1','',1,'G4',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let castanhalpa=['Castanhal-PA',logocastanhalpa,'Citadino','PA','NN2','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let caucaia=['Caucaia',logocaucaia,'Citadino','CE','CE1','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let caxias=['Caxias',logocaxias,'Regional','RS','RS','C',1,'G13',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let ceara=['Ceará',logoceara,'Pequeno','CE','CE','B',1,'G8',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','33','2023'];
  let ceilandia=['Ceilândia',logoceilandia,'Citadino','DF','CO1','',1,'G4',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let central=['Central',logocentral,'Citadino','PE','PE','',1,'G4',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let ceov=['CEOV',logoceov,'Citadino','MT','CO1','',1,'G8',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let chapecoense=['Chapecoense',logochapecoense,'Pequeno','SC','SC','A',1,'G16',,,'CDC',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','21','2024'];
  let cianorte=['Cianorte',logocianorte,'Citadino','PR','PR','',1,'G4',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let comercialms=['Comercial-MS',logocomercialms,'Citadino','MS','CO1','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let concordia=['Concórdia',logoconcordia,'Citadino','SC','SC','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let confianca=['Confiança',logoconfianca,'Citadino','SE','NO','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let corinthians=['Corinthians',logocorinthians,'Grande','SP','SP','A',1,'G8',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let coritiba=['Coritiba',logocoritiba,'Médio','PR','PR','B',1,'G4',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','37','2023'];
  let costarica=['Costa Rica',logocostarica,'Citadino','MS','CO','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let crac=['CRAC',logocrac,'Citadino','GO','GO','',1,'G16',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let crato=['Crato',logocrato,'Citadino','CE','CE1','',1,'G16',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let crb=['CRB',logocrb,'Estadual','AL','NO1','C',1,'G8',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let criciuma=['Criciuma',logocriciuma,'Estadual','SC','SC','B',1,'G4',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','19','2023'];
  let cruzeiro=['Cruzeiro',logocruzeiro,'Grande','MG','MG','B',1,'G4',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let csa=['CSA',logocsa,'Estadual','AL','NO','C',1,'G8',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let cse=['CSE',logocse,'Citadino','AL','NO1','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let cuiaba=['Cuiabá',logocuiaba,'Estadual','MT','CO','B',1,'G4',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','19','2023'];
  let decisaosertania=['Decisão Sertânia',logodecisaosertania,'Citadino','PE','PE1','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let democrata=['Democrata',logodemocrata,'Citadino','MG','MG','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let dombosco=['Dom Bosco',logodombosco,'Citadino','MT','CO1','',1,'0,00',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let esportivo=['Esportivo',logoesportivo,'Citadino','RS','RS1','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let fastclubeam=['Fast Clube-AM',logofastclubeam,'Citadino','AM','NN2','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let fccascavel=['FC Cascavel',logofccascavel,'Citadino','PR','PR','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let ferroviariasp=['Ferroviária-SP',logoferroviariasp,'Citadino','SP','SP1','C',1,'SUBIR',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let ferroviario=['Ferroviário',logoferroviario,'Regional','CE','CE','C',1,'G4',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let figueirense=['Figueirense',logofigueirense,'Pequeno','SC','SC','C',1,'G4',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let floresta=['Floresta',logofloresta,'Citadino','CE','CE','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let fluminense=['Fluminense',logofluminense,'Grande','RJ','RJ','A',1,'G4',,,'CDC',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let fluminensepi=['Fluminense-PI',logofluminensepi,'Citadino','PI','NO1','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let fortaleza=['Fortaleza',logofortaleza,'Pequeno','CE','CE','A',1,'G13',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','7','2023'];
  let fozdoiguacu=['Foz do Iguaçu',logofozdoiguacu,'Citadino','PR','PR1','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let galomaringa=['Galo Maringá',logogalomaringa,'Citadino','PR','PR1','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let gama=['Gama',logogama,'Regional','DF','CO','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let gloria=['Glória',logogloria,'Citadino','RS','RS1','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','','2024'];
  let goianesia=['Goianésia',logogoianesia,'Citadino','GO','GO1','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let goiania=['Goiânia',logogoiania,'Citadino','GO','GO1','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let goiatuba=['Goiatuba',logogoiatuba,'Citadino','GO','GO1','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let gremio=['Grêmio',logogremio,'Grande','RS','RS','A',1,'G8',,,'CDC',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','17','2023'];
  let gremioanapolis=['Grêmio Anápolis',logogremioanapolis,'Citadino','GO','GO1','',1,'G4',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','','2024'];
  let gremiomaringa=['Grêmio Maringá',logogremiomaringa,'Citadino','PR','PR1','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','5','2024'];
  let guarani=['Guarani',logoguarani,'Pequeno','SP','SP','B',1,'G8',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','35','2023'];
  let guaranidepalhoca=['Guarani de Palhoça',logoguaranidepalhoca,'Citadino','SC','SC1','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let guaranydesobral=['Guarany de Sobral',logoguaranydesobral,'Citadino','CE','CE','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let guaranyrs=['Guarany-RS',logoguaranyrs,'Citadino','RS','RS1','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let hercilioluz=['Hercílio Luz',logohercilioluz,'Citadino','SC','SC','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let horizonte=['Horizonte',logohorizonte,'Citadino','CE','CE1','',1,'G4',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let humaita=['Humaitá',logohumaita,'Citadino','AC','NN1','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let ibis=['Ibis',logoibis,'Citadino','PE','PE1','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let icasa=['Icasa',logoicasa,'Citadino','CE','CE','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let iguatu=['Iguatu',logoiguatu,'Citadino','CE','CE','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let inhumas=['Inhumas',logoinhumas,'Citadino','GO','GO1','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let interdelajes=['Inter de Lajes',logointerdelajes,'Citadino','SC','SC1','',1,'G4',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let internacional=['Internacional',logointernacional,'Grande','RS','RS','B',1,'G4',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let internacionalsp=['Internacional-SP',logointernacionalsp,'Citadino','SP','SP1','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let ipatinga=['Ipatinga',logoipatinga,'Regional','MG','MG','',1,'G8',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let ipora=['Iporá',logoipora,'Citadino','GO','GO','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let itabaiana=['Itabaiana',logoitabaiana,'Citadino','SE','NO2','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let itabuna=['Itabuna',logoitabuna,'Citadino','BA','BA','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let itapipoca=['Itapipoca',logoitapipoca,'Citadino','CE','CE1','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let ituano=['Ituano',logoituano,'Regional','SP','SP1','C',1,'SUBIR',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let itumbiara=['Itumbiara',logoitumbiara,'Citadino','GO','GO1','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let jacuipense=['Jacuipense',logojacuipense,'Citadino','BA','BA','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let jataiense=['Jataiense',logojataiense,'Citadino','GO','GO1','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let joinville=['Joinville',logojoinville,'Estadual','SC','SC','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let juazeirense=['Juazeirense',logojuazeirense,'Citadino','BA','BA','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let juventude=['Juventude',logojuventude,'Pequeno','RS','RS','C',1,'G4',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let juventusdejaragua=['Juventus de Jaraguá',logojuventusdejaragua,'Citadino','SC','SC1','',1,'G13',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','2','2024'];
  let lajeadense=['Lajeadense',logolajeadense,'Citadino','RS','RS1','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let londrina=['Londrina',logolondrina,'Estadual','PR','PR','C',1,'G8',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let luverdense=['Luverdense',logoluverdense,'Citadino','MT','CO1','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let luziania=['Luziânia',logoluziania,'Citadino','DF','CO1','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let madureira=['Madureira',logomadureira,'Citadino','RJ','RJ1','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let maguary=['Maguary',logomaguary,'Citadino','PE','PE1','',1,'G8',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let manauara=['Manauara',logomanauara,'Citadino','AM','NN2','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let manaus=['Manaus',logomanaus,'Regional','AM','NN','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let maracanace=['Maracanã-CE',logomaracanace,'Citadino','CE','CE1','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let maranhao=['Maranhão',logomaranhao,'Citadino','MA','NO2','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let marciliodias=['Marcílio Dias',logomarciliodias,'Citadino','SC','SC1','',1,'G13',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let maringa=['Maringá',logomaringa,'Citadino','PR','PR','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let metropolitano=['Metropolitano',logometropolitano,'Citadino','SC','SC1','',1,'G16',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let mirassol=['Mirassol',logomirassol,'Citadino','SP','SP1','C',1,'SUBIR',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','5','2024'];
  let mixto=['Mixto',logomixto,'Citadino','MT','CO','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let morrinhos=['Morrinhos',logomorrinhos,'Citadino','GO','GO1','',1,'G4',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let motoclub=['Moto Club',logomotoclub,'Citadino','MA','NO1','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let nacao=['Nação',logonacao,'Citadino','SC','SC1','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let nacionalam=['Nacional-AM',logonacionalam,'Regional','AM','NN','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let nautico=['Náutico',logonautico,'Pequeno','PE','PE','B',1,'G8',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','32','2023'];
  let nauticorr=['Náutico-RR',logonauticorr,'Citadino','RR','NN1','',1,'G16',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let novaiguacu=['Nova Iguaçu',logonovaiguacu,'Citadino','RJ','RJ','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let novamutum=['Nova Mutum',logonovamutum,'Citadino','MT','CO1','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let novohamburgo=['Novo Hamburgo',logonovohamburgo,'Citadino','RS','RS','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let novorizontino=['Novorizontino',logonovorizontino,'Citadino','SP','SP','B',1,'G13',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','29','2023'];
  let olaria=['Olaria',logoolaria,'Citadino','RJ','RJ1','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let operarioms=['Operário-MS',logooperarioms,'Citadino','MS','CO','B',1,'G16',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2023'];
  let operariopr=['Operário-PR',logooperariopr,'Regional','PR','PR','',1,'G8',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let pacajus=['Pacajus ',logopacajus,'Citadino','CE','CE1','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let palmeiras=['Palmeiras',logopalmeiras,'Grande','SP','SP1','A',1,'SUBIR',,,'CDC',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','36','2023'];
  let parana=['Paraná',logoparana,'Estadual','PR','PR','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let passofundo=['Passo Fundo',logopassofundo,'Citadino','RS','RS2','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let patrocinense=['Patrocinense',logopatrocinense,'Citadino','MG','MG1','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let paulista=['Paulista',logopaulista,'Citadino','SP','SP1','B',1,'SUBIR',,,'CDC',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','29','2023'];
  let paysandu=['Paysandu',logopaysandu,'Pequeno','PA','NN','A',1,'G16',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2023'];
  let pelotas=['Pelotas',logopelotas,'Regional','RS','RS1','',1,'G4',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','32','2023'];
  let penarolam=['Penarol-AM',logopenarolam,'Citadino','AM','NN2','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let petrolina=['Petrolina',logopetrolina,'Citadino','PE','PE','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let pontepreta=['Ponte Preta',logopontepreta,'Pequeno','SP','SP','B',1,'G16',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let porto=['Porto',logoporto,'Citadino','PE','PE','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','2','2024'];
  let portovelhoro=['Porto Velho-RO',logoportovelhoro,'Citadino','RO','NN1','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let portuguesa=['Portuguesa',logoportuguesa,'Pequeno','SP','SP','B',1,'G13',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','5','2024'];
  let portuguesarj=['Portuguesa-RJ',logoportuguesarj,'Citadino','RJ','RJ','',1,'G13',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let potiguardemossoro=['Potiguar de Mossoró',logopotiguardemossoro,'Citadino','RN','NO2','',1,'G8',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let pousoalegre=['Pouso Alegre',logopousoalegre,'Citadino','MG','MG1','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let princesadosolimoes=['Princesa do Solimões',logoprincesadosolimoes,'Citadino','AM','NN1','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let psts=['PSTS',logopsts,'Citadino','PR','PR1','',1,'G4',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let realbrasilia=['Real Brasília',logorealbrasilia,'Citadino','DF','CO','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let realnoroeste=['Real Noroeste',logorealnoroeste,'Citadino','ES','NO2','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let remo=['Remo',logoremo,'Pequeno','PA','NN','C',1,'G4',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let resende=['Resende',logoresende,'Citadino','RJ','RJ1','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let retro=['Retrô',logoretro,'Citadino','PE','PE','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let riobrancoac=['Rio Branco-AC',logoriobrancoac,'Regional','AC','NN1','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let rionegroam=['Rio Negro-AM',logorionegroam,'Citadino','AM','NN2','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let riverpi=['River-PI',logoriverpi,'Regional','PI','NO','',1,'G4',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let salgueiro=['Salgueiro',logosalgueiro,'Citadino','PE','PE','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let sampaiocorrea=['Sampaio Correa',logosampaiocorrea,'Estadual','MA','NO','B',1,'G13',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','5','2024'];
  let santacruz=['Santa Cruz',logosantacruz,'Pequeno','PE','PE','B',1,'G8',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','29','2023'];
  let santacruzdenatal=['Santa Cruz de Natal',logosantacruzdenatal,'Citadino','RN','NO2','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let santoandre=['Santo André',logosantoandre,'Regional','SP','SP2','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','6','2023'];
  let santos=['Santos',logosantos,'Grande','SP','SP1','B',1,'G4',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let saobernardo=['São Bernardo',logosaobernardo,'Citadino','SP','SP1','',1,'G4',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let saocaetano=['São Caetano',logosaocaetano,'Regional','SP','SP2','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let saocristovao=['São Cristóvão',logosaocristovao,'Citadino','RJ','RJ1','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let saojoseense=['São Joseense',logosaojoseense,'Citadino','PR','PR1','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let saojosers=['São José-RS',logosaojosers,'Citadino','RS','RS','',1,'G16',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let saojosesp=['São José-SP',logosaojosesp,'Citadino','SP','SP2','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let saoluizrs=['São Luiz-RS',logosaoluizrs,'Citadino','RS','RS1','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let saoraimundoam=['São Raimundo-AM',logosaoraimundoam,'Citadino','AM','NN1','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2023'];
  let saoraimundorr=['São Raimundo-RR',logosaoraimundorr,'Regional','RR','NN','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let sergipe=['Sergipe',logosergipe,'Citadino','SE','NO1','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let serra=['Serra',logoserra,'Citadino','ES','NO1','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let social=['Social',logosocial,'Citadino','MG','MG1','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let sousa=['Sousa',logosousa,'Citadino','PB','NO1','',1,'G8',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let tiradentesce=['Tiradentes-CE',logotiradentesce,'Citadino','CE','CE1','',1,'G8',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let tocantinopolis=['Tocantinópolis',logotocantinopolis,'Citadino','TO','NN','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let toledo=['Toledo',logotoledo,'Citadino','PR','PR1','',1,'G13',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let tombense=['Tombense',logotombense,'Citadino','MG','MG','C',1,'G16',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let tremap=['Trem-AP',logotremap,'Regional','AP','NN','',1,'G13',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let treze=['Treze',logotreze,'Regional','PB','NO','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let tunalusopa=['Tuna Luso-PA',logotunalusopa,'Citadino','PA','NN2','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let tupi=['Tupi',logotupi,'Citadino','MG','MG1','',1,'G16',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let tupinambas=['Tupinambás',logotupinambas,'Citadino','MG','MG2','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let uberlandia=['Uberlândia',logouberlandia,'Citadino','MG','MG1','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let uniaorondonopolis=['União Rondonópolis',logouniaorondonopolis,'Citadino','MT','CO','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let urt=['URT',logourt,'Citadino','MG','MG1','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let veracruz=['Vera Cruz',logoveracruz,'Citadino','PE','PE1','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let vilanova=['Vila Nova',logovilanova,'Estadual','GO','GO','C',1,'G8',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let villanovamg=['Villa Nova-MG',logovillanovamg,'Regional','MG','MG','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let vitoriadastabocas=['Vitória das Tabocas',logovitoriadastabocas,'Citadino','PE','PE1','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let voltaredonda=['Volta Redonda',logovoltaredonda,'Regional','RJ','RJ','B',1,'G13',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','5','2024'];
  let xvpiracicaba=['XV Piracicaba',logoxvpiracicaba,'Regional','SP','SP2','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let ypirangaap=['Ypiranga-AP',logoypirangaap,'Citadino','AP','NN2','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let ypirangars=['Ypiranga-RS',logoypirangars,'Citadino','RS','RS','C',1,'G16',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let atleticoba=['Atlético-BA',logoatleticoba,'Citadino','BA','BA','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let barcelonaba=['Barcelona-BA',logobarcelonaba,'Citadino','BA','BA','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let jacobina=['Jacobina',logojacobina,'Citadino','BA','BA','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let jequie=['Jequié',logojequie,'Citadino','BA','BA1','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let bahiadefeira=['Bahia de Feira',logobahiadefeira,'Citadino','BA','BA1','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let colocoloba=['Colo-Colo-BA',logocolocoloba,'Citadino','BA','BA1','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let fluminensedefeira=['Fluminense de Feira',logofluminensedefeira,'Citadino','BA','BA1','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let grapiuna=['Grapiúna',logograpiuna,'Citadino','BA','BA1','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let juazeiro=['Juazeiro',logojuazeiro,'Citadino','BA','BA1','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let unirb=['UNIRB',logounirb,'Citadino','BA','BA1','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let vitoriadaconquista=['Vitória da Conquista',logovitoriadaconquista,'Citadino','BA','BA1','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let leonico=['Leônico',logoleonico,'Citadino','BA','BA2','',1,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2024'];
  let atleticogo=['Atlético-GO',logoatleticogo,'Pequeno','GO','GO','A',1,'G16',,,'CDC',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','14','2023'];
let botafogo=['Botafogo',logobotafogo,'Grande','RJ','RJ','A',15,'G8',,,'CDC',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','36','2023'];
let flamengo=['Flamengo',logoflamengo,'Grande','RJ','RJ','A',1,'G4',,,'CDC','2',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','32','2023'];
let goias=['Goiás',logogoias,'Médio','GO','GO','A',18,'G13',,,'Liga da Guarda','2',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','18','2024'];
let saopaulo=['São Paulo',logosaopaulo,'Grande','SP','SP','A',18,'G8',,,'CDC',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2023'];
let sport=['Sport',logosport,'Médio','PE','PE','A',1,'G4',,,'CDC',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2023'];
let vasco=['Vasco',logovasco,'Grande','RJ','RJ','A',1,'G8',,,'CDC',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2023'];
let vitoria=['Vitória',logovitoria,'Médio','BA','BA','A',15,'G13',,,'CDC',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','1','2023'];
let alianzalima=['Alianza Lima',logoalianzalima,'FALSO','PER','','',,'',,,'Rio Claro/RJ','0',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','20','2024'];
let americadecali=['América de Cali',logoamericadecali,'FALSO','COL','','',,'',,,'LIGA 3','',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','20','2024'];
let atleticonacional=['Atlético Nacional',logoatleticonacional,'FALSO','COL','','',,'',,,'LIGA 4','',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','20','2024'];
let bocajuniors=['Boca Juniors',logobocajuniors,'Grande','ARG','','',,'',,,'Rio Claro/RJ','0',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','20','2024'];
let bolivar=['Bolívar',logobolivar,'FALSO','BOL','','',,'',,,'Rio Claro RJ','',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','20','2023'];
let cerroporteno=['Cerro Porteño',logocerroporteno,'FALSO','PAR','','',,'',,,'LIGA 3','',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','20','2024'];
let colocolo=['Colo-Colo',logocolocolo,'FALSO','CHI','','',,'',,,'LIGA 4','',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','20','2024'];
let deptachira=['Dep. Tachira',logodeptachira,'FALSO','VEN','','',,'',,,'Liga da Guarda','2',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'Campeão 2023 (Dep Tachira)','Mundial 2023 (Dep Tachira)','','','','','','','','','','','','','','','','','20','2023'];
let estudiantesdelaplata=['Estudiantes LP',logoestudiantesdelaplata,'Grande','ARG','','',,'',,,'LIGA 2','',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','20','2024'];
let independiente=['Independiente',logoindependiente,'Grande','ARG','','',,'',,,'LIGA 4','',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','20','2024'];
let inddelvalle=['Ind. del Valle',logoinddelvalle,'FALSO','EQU','','',,'',,,'Rio Claro/RJ','',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','20','2024'];
let ldu=['LDU',logoldu,'FALSO','EQU','','',,'',,,'Liga da Guarda','',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','20','2024'];
let nacionaluru=['Nacional',logonacionaluru,'FALSO','URU','','',,'',,,'LIGA 4','',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','20','2024'];
let newellsoldboys=['Newells Old Boys',logonewellsoldboys,'Grande','ARG','','',,'',,,'Liga da Guarda','',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','20','2024'];
let olimpia=['Olimpia',logoolimpia,'FALSO','PAR','','',,'',,,'LIGA 4','',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','20','2024'];
let penarol=['Peñarol',logopenarol,'FALSO','URU','','',,'',,,'Liga da Guarda','',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','20','2024'];
let racingarg=['Racing',logoracingarg,'Grande','ARG','','',,'',,,'Liga da Guarda','',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','20','2024'];
let riverplate=['River Plate',logoriverplate,'Grande','ARG','','',,'',,,'Liga da Guarda',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','20','2024'];
let rosariocentral=['Rosario Central',logorosariocentral,'Grande','ARG','','',,'',,,'Liga da Guarda','',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','20','2024'];
let sanlorenzo=['San Lorenzo',logosanlorenzo,'Grande','ARG','','',,'',,,'Rio Claro/RJ','',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','20','2024'];
let thestrongest=['The Strongest',logothestrongest,'FALSO','BOL','','',,'',,,'LIGA 3','',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','20','2024'];
let univcatolicachi=['Univ. Católica',logounivcatolicachi,'FALSO','CHI','','',,'',,,'LIGA 3','',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','20','2024'];
let univdechile=['Univ. de Chile',logounivdechile,'FALSO','CHI','','',,'',,,'Rio Claro/RJ','',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','20','2024'];
let velezsarsfield=['Velez Sarsfield',logovelezsarsfield,'Grande','ARG','','',,'',,,'Rio CLaro/RJ','',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','20','2024'];
let argentinosjrs=['Argentinos Jrs',logoargentinosjrs,'Grande','ARG','','',,'',,,'COMMEBOL',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','21','2024'];
let banfield=['Banfield',logobanfield,'Médio','ARG','','',,'',,,'Liga da Guarda',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','',''];
let barcelonasc=['Barcelona SC',logobarcelonasc,'FALSO','EQU','','',,'',,,'Decreto e Danone',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','',''];
let belgrano=['Belgrano',logobelgrano,'Médio','ARG','','',,'',,,'Liga da Guarda',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','',''];
let cobresal=['Cobresal',logocobresal,'FALSO','CHI','','',,'',,,'Liga da Guarda',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','',''];
let colon=['Colón',logocolon,'Médio','ARG','','',,'','1A','1B','COMMEBOL','1C','1D',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','21','2024'];
let danubio=['Danubio',logodanubio,'FALSO','URU','','',,'',,,'Rio Claro/RJ',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','',''];
let deportestolima=['Deportes Tolima',logodeportestolima,'FALSO','COL','','',,'',,,'Decreto e Danone',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','',''];
let depcali=['Deportivo Cali',logodepcali,'FALSO','COL','','',,'',,,'Liga da Guarda',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','21','2024'];
let emelec=['Emelec',logoemelec,'FALSO','EQU','','',,'',,,'Liga da Guarda',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','',''];
let guaranipar=['Guarani',logoguaranipar,'FALSO','PAR','','',,'',,,'Liga da Guarda',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','',''];
let huachipato=['Huachipato',logohuachipato,'FALSO','CHI','','',,'',,,'Liga da Guarda',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','',''];
let huracan=['Huracan',logohuracan,'Grande','ARG','','',,'',,,'COMMEBOL',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','',''];
let indmedellín=['Ind. Medellín',logoindmedellín,'FALSO','COL','','',,'',,,'Liga da Guarda',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','',''];
let lanus=['Lanus',logolanus,'Médio','ARG','','',,'',,,'Decreto e Danone',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','',''];
let libertadpar=['Libertad',logolibertadpar,'FALSO','PAR','','',,'',,,'Liga da Guarda',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','',''];
let liverpool=['Liverpool',logoliverpool,'FALSO','URU','','',,'',,,'Rio Claro/RJ',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','',''];
let millonarios=['Millonarios',logomillonarios,'FALSO','COL','','',,'',,,'Rio Claro/RJ',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','',''];
let nacionalpotosi=['Nacional Potosí',logonacionalpotosi,'FALSO','BOL','','',,'',,,'Rio Claro/RJ',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','',''];
let oncecaldas=['Once Caldas',logooncecaldas,'FALSO','COL','','',,'',,,'Rio Claro/RJ',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','',''];
let quilmes=['Quilmes',logoquilmes,'Médio','ARG','','',,'',,,'Liga da Guarda',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','',''];
let santafe=['Santa Fé',logosantafe,'FALSO','COL','','',,'',,,'Liga da Guarda',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','',''];
let sportingcristal=['Sporting Cristal',logosportingcristal,'FALSO','PER','','',,'',,,'Liga da Guarda',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','',''];
let talleres=['Talleres',logotalleres,'Médio','ARG','','',,'',,,'COMMEBOL',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','',''];
let tigre=['Tigre',logotigre,'FALSO','ARG','','',,'',,,'COMMEBOL',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'','','','','','','','','','','','','','','','','','','',''];
 
  
  
 
  
  
  /**TECNICOS**/
  let tec0={idCart:'',nome:'Téc. não definido',nomeLogin:'',nomePess:'',anoEnt:'',logo:logotec0,ClubAtual:'',titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
     
  let tec1={idCart:2781257,nome:'12Vermelho',nomeLogin:'WIDOWMAKER',nomePess:'opcional',anoEnt:2021,logo:logotec1,ClubAtual:anapolis,titulo1:'Série "D" 2021',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec2={idCart:24337237,nome:'Masao do cartola',nomeLogin:'Masao',nomePess:'opcional',anoEnt:2023,logo:logotec2,ClubAtual:aguianegra,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec3={idCart:5213597,nome:'GigaCarrasco.',nomeLogin:'julio santos',nomePess:'opcional',anoEnt:2023,logo:logotec3,ClubAtual:barbalha,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec4={idCart:14264,nome:'AEGB Bravo',nomeLogin:'Anderson Gomes Bravo',nomePess:'opcional',anoEnt:2020,logo:logotec4,ClubAtual:figueirense,titulo1:'Baiano 2020',titulo2:'Nacional 2020',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec5={idCart:6745416,nome:'tremtricolor f.c',nomeLogin:'Marco',nomePess:'opcional',anoEnt:2023,logo:logotec5,ClubAtual:goiania,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec6={idCart:2982576,nome:'alecoloradobage',nomeLogin:'ALEXANDRO FERREIRA',nomePess:'opcional',anoEnt:2023,logo:logotec6,ClubAtual:ceov,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec7={idCart:4081686,nome:'Alemão Colorado 75',nomeLogin:'MARCIO FIGUR',nomePess:'opcional',anoEnt:2019,logo:logotec7,ClubAtual:botafogo,titulo1:'Nacional 2022',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec8={idCart:26329547,nome:'sniperteco',nomeLogin:'rafael',nomePess:'opcional',anoEnt:2023,logo:logotec8,ClubAtual:guaranidepalhoca,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec9={idCart:14933289,nome:'supribem ',nomeLogin:'Douglas',nomePess:'opcional',anoEnt:2023,logo:logotec9,ClubAtual:goias,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec10={idCart:13921349,nome:'GRodrigues E.C',nomeLogin:'Gabriel Rodrigues',nomePess:'opcional',anoEnt:2023,logo:logotec10,ClubAtual:itumbiara,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec11={idCart:13956737,nome:'Do Polo FC',nomeLogin:'Ismar',nomePess:'opcional',anoEnt:2023,logo:logotec11,ClubAtual:joinville,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec12={idCart:13935476,nome:'Anão Pugli Fc',nomeLogin:'MARCELO LEIRIA',nomePess:'opcional',anoEnt:2023,logo:logotec12,ClubAtual:semclube,titulo1:'Paulista 2021',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec13={idCart:1762679,nome:'LéoZ!n F.C',nomeLogin:'Leonardo',nomePess:'opcional',anoEnt:2023,logo:logotec13,ClubAtual:princesadosolimoes,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec14={idCart:8606472,nome:'Anderson United',nomeLogin:'ANDERSON NUNES',nomePess:'opcional',anoEnt:2017,logo:logotec14,ClubAtual:caxias,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec15={idCart:44528670,nome:'Josu FC 23',nomeLogin:'Josué Carvalho',nomePess:'opcional',anoEnt:2023,logo:logotec15,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec16={idCart:2976928,nome:'Blackgel',nomeLogin:'jeferson gel',nomePess:'opcional',anoEnt:2023,logo:logotec16,ClubAtual:democrata,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec17={idCart:12830,nome:'F.A. Xambra',nomeLogin:'Thiago Bessa',nomePess:'opcional',anoEnt:2023,logo:logotec17,ClubAtual:atleticomg,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec18={idCart:27185745,nome:'Eny Atlético GO',nomeLogin:'Eny',nomePess:'opcional',anoEnt:2023,logo:logotec18,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec19={idCart:612748,nome:'REJEITADO FC',nomeLogin:'Americano',nomePess:'opcional',anoEnt:2023,logo:logotec19,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec20={idCart:86919,nome:'ABC F.C RN',nomeLogin:'PC#ABC FC',nomePess:'opcional',anoEnt:2023,logo:logotec20,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec21={idCart:25305084,nome:'FC BAGÉ ',nomeLogin:'ANDREI',nomePess:'opcional',anoEnt:2023,logo:logotec21,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec22={idCart:154529,nome:'BahTche de Munique BG',nomeLogin:'Mateus Debiasi',nomePess:'opcional',anoEnt:2023,logo:logotec22,ClubAtual:csa,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec23={idCart:1954845,nome:'Underdog 1999 FC',nomeLogin:'Bolívia',nomePess:'opcional',anoEnt:2023,logo:logotec129,ClubAtual:riobrancoac,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec24={idCart:26831,nome:'Bicolor 1988',nomeLogin:'Vinícius Lima',nomePess:'opcional',anoEnt:2023,logo:logotec24,ClubAtual:santos,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec25={idCart:19525205,nome:'BGM 21 FC',nomeLogin:'BRUNO MEIRELLES',nomePess:'opcional',anoEnt:2023,logo:logotec25,ClubAtual:guarani,titulo1:'Gaúcho 2020',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec26={idCart:205211,nome:'Bibinho e.c',nomeLogin:'Henrique',nomePess:'opcional',anoEnt:2020,logo:logotec26,ClubAtual:semclube,titulo1:'Paulista - Acesso 2020',titulo2:'Baiano 2023 (Vitória)',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec27={idCart:23879716,nome:' BJJ ADSUMUS F.C',nomeLogin:'SANDRO NEVES',nomePess:'opcional',anoEnt:2023,logo:logotec27,ClubAtual:santacruz,titulo1:'Paulista 2020',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec28={idCart:8626492,nome:'Pucca Boa Esporte',nomeLogin:'Clau Matos',nomePess:'opcional',anoEnt:2023,logo:logotec28,ClubAtual:boaesporte,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec29={idCart:27451138,nome:'campeão Fortaleza ',nomeLogin:'Ivan fec',nomePess:'opcional',anoEnt:2023,logo:logotec29,ClubAtual:saojosers,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec30={idCart:36411,nome:'AFC - America RJ',nomeLogin:'Gustavo Mamede',nomePess:'opcional',anoEnt:2023,logo:logotec30,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec31={idCart:17916129,nome:'F.E.C Águia Negra ',nomeLogin:'Lucas Agliardi',nomePess:'opcional',anoEnt:2023,logo:logotec31,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec32={idCart:9699807,nome:'Botafogo Rpo',nomeLogin:'Mário Luciano',nomePess:'opcional',anoEnt:2023,logo:logotec32,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec33={idCart:11675828,nome:'Amazonas Fc',nomeLogin:'Charles Bispo',nomePess:'opcional',anoEnt:2023,logo:logotec33,ClubAtual:amazonas,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec34={idCart:44580350,nome:'Brasiliense 1900',nomeLogin:'MANOEL',nomePess:'opcional',anoEnt:2023,logo:logotec34,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec35={idCart:48376143,nome:'15 de Novembro CB',nomeLogin:'Vanderson Fagundes',nomePess:'opcional',anoEnt:2023,logo:logotec35,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec36={idCart:259353,nome:'ANAPOLINA 4.1',nomeLogin:'FRANCISCO FORTES',nomePess:'opcional',anoEnt:2023,logo:logotec36,ClubAtual:anapolina,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec37={idCart:357268,nome:'Gunners Athletic',nomeLogin:'Fernando Paulo',nomePess:'opcional',anoEnt:2023,logo:logotec37,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec38={idCart:8617247,nome:'Cadufc.rs',nomeLogin:'CADU',nomePess:'opcional',anoEnt:2023,logo:logotec38,ClubAtual:semclube,titulo1:'Paulista - Acesso 2023 (Botafogo-SP)',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec39={idCart:2445931,nome:'Audax CS',nomeLogin:'Pablo Campos',nomePess:'opcional',anoEnt:2023,logo:logotec39,ClubAtual:audax,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec40={idCart:14611601,nome:'Bomsucessofla',nomeLogin:'Juarez Dolzane',nomePess:'opcional',anoEnt:2023,logo:logotec40,ClubAtual:bonsucesso,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec41={idCart:21247363,nome:'Catheringer F.C',nomeLogin:'Brener Catheringer',nomePess:'opcional',anoEnt:2021,logo:logotec41,ClubAtual:flamengo,titulo1:'Libertadores 2022',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec42={idCart:819507,nome:'SER Caxias Bridi',nomeLogin:'CASSIANO BRIDI',nomePess:'opcional',anoEnt:2023,logo:logotec42,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec43={idCart:28869788,nome:'Rua Ceará FC',nomeLogin:'Glauco Santocchi',nomePess:'opcional',anoEnt:2023,logo:logotec43,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec44={idCart:3379407,nome:'Botafogo Ita Pb ',nomeLogin:'Heliabe Aquino',nomePess:'opcional',anoEnt:2023,logo:logotec44,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec45={idCart:180535,nome:'Brusque 1987',nomeLogin:'Rodrigo Santos',nomePess:'opcional',anoEnt:2023,logo:logotec45,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec46={idCart:18274393,nome:'cabofriense12',nomeLogin:'DaAustrália',nomePess:'opcional',anoEnt:2023,logo:logotec46,ClubAtual:cabofriense,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec47={idCart:325473,nome:'Clube Atlético13',nomeLogin:'Juliano Jesus',nomePess:'opcional',anoEnt:2023,logo:logotec47,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec48={idCart:21181255,nome:'Copeiro Clube De Regatas',nomeLogin:'Vitor Bello',nomePess:'opcional',anoEnt:2023,logo:logotec48,ClubAtual:semclube,titulo1:'Gaúcho - Acesso 2020',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec49={idCart:17966520,nome:'Jk castanhal ',nomeLogin:'Jackson',nomePess:'opcional',anoEnt:2023,logo:logotec49,ClubAtual:castanhalpa,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec50={idCart:26019665,nome:'Coritiba Mil',nomeLogin:'Denis Bobko',nomePess:'opcional',anoEnt:2023,logo:logotec50,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec51={idCart:45875158,nome:'Ceilândia S.C',nomeLogin:'Ítalo R',nomePess:'opcional',anoEnt:2023,logo:logotec51,ClubAtual:ceilandia,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec52={idCart:2097585,nome:'IvanZanoli4',nomeLogin:'Ivan Zanoli',nomePess:'opcional',anoEnt:2023,logo:logotec52,ClubAtual:cianorte,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec53={idCart:427828,nome:'Costaa Rica Fc',nomeLogin:'Luis Philipe',nomePess:'opcional',anoEnt:2023,logo:logotec53,ClubAtual:costarica,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec54={idCart:47609498,nome:'F.C CRAC',nomeLogin:'Mateusinho',nomePess:'opcional',anoEnt:2023,logo:logotec54,ClubAtual:crac,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec55={idCart:12068971,nome:'Máfia Azul FC89',nomeLogin:'Biel Rezende',nomePess:'opcional',anoEnt:2023,logo:logotec55,ClubAtual:cruzeiro,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec56={idCart:3950716,nome:'CSA FC',nomeLogin:'Nando',nomePess:'opcional',anoEnt:2023,logo:logotec56,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec57={idCart:6822255,nome:'SC Cuiabayern-14',nomeLogin:'CUIABÁ',nomePess:'opcional',anoEnt:2023,logo:logotec57,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec58={idCart:9222605,nome:'Democrata GV',nomeLogin:'Gabriel Augusto',nomePess:'opcional',anoEnt:2023,logo:logotec58,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec59={idCart:892797,nome:'E.C.Lutz',nomeLogin:'Jean Lutz',nomePess:'opcional',anoEnt:2023,logo:logotec59,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec60={idCart:2539,nome:'E C SIMONNSD',nomeLogin:'CESAR',nomePess:'opcional',anoEnt:2023,logo:logotec60,ClubAtual:novorizontino,titulo1:'Série B 2020',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec61={idCart:27604058,nome:'Esportivo 12',nomeLogin:'Maiko',nomePess:'opcional',anoEnt:2023,logo:logotec61,ClubAtual:esportivo,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec62={idCart:25040031,nome:'Fasts',nomeLogin:'Fast',nomePess:'opcional',anoEnt:2023,logo:logotec62,ClubAtual:fastclubeam,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec63={idCart:18425116,nome:'cascavel boolls',nomeLogin:'charles',nomePess:'opcional',anoEnt:2023,logo:logotec63,ClubAtual:fccascavel,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec64={idCart:2793179,nome:'FC CHANANECO',nomeLogin:'LMC',nomePess:'opcional',anoEnt:2017,logo:logotec64,ClubAtual:remo,titulo1:'Libertadores 2018',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec65={idCart:25346807,nome:'FC RPTRIUNFO',nomeLogin:'ALISSON DE FREITAS',nomePess:'opcional',anoEnt:2023,logo:logotec65,ClubAtual:chapecoense,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec66={idCart:809590,nome:'FEBRE AMARELA CF',nomeLogin:'Djulio Jeske',nomePess:'opcional',anoEnt:2023,logo:logotec66,ClubAtual:semclube,titulo1:'Série D 2022',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec67={idCart:3737373,nome:'Ferro nos Morangos FC',nomeLogin:'Pepe RAFA Guardiola',nomePess:'opcional',anoEnt:2020,logo:logotec67,ClubAtual:palmeiras,titulo1:'Central 2021',titulo2:'Série B 2021',titulo3:'Mineiro 2022',titulo4:'Super Estadual 2022',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec68={idCart:27698569,nome:'FerroFerroada',nomeLogin:'Ferro',nomePess:'opcional',anoEnt:2023,logo:logotec68,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec69={idCart:10081360,nome:'Fiel Torcedor  ',nomeLogin:'Ronaldo-Castro',nomePess:'opcional',anoEnt:2023,logo:logotec69,ClubAtual:ferroviariasp,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec70={idCart:28702166,nome:'Figueira fr',nomeLogin:'CARLINHOS',nomePess:'opcional',anoEnt:2023,logo:logotec70,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec71={idCart:8582680,nome:'Mengo fc combate',nomeLogin:'Marlone silva',nomePess:'opcional',anoEnt:2023,logo:logotec71,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec72={idCart:543456,nome:'lucas  fluzão',nomeLogin:'LUCAS FLUZÃO',nomePess:'opcional',anoEnt:2023,logo:logotec72,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec73={idCart:189052,nome:'Flunáticos Club',nomeLogin:'Lattino',nomePess:'opcional',anoEnt:2019,logo:logotec73,ClubAtual:gremio,titulo1:'Série "C" 2019',titulo2:'Sulino (extinto) 2019',titulo3:'Paulista - Acesso 2020',titulo4:'Sulamericana 2020',titulo5:'Copa do Brasil 2021',titulo6:'Liga Nacional 2021',titulo7:'Copa do Brasil 2022',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec74={idCart:9006866,nome:'timba náutico',nomeLogin:'João Pedro',nomePess:'opcional',anoEnt:2023,logo:logotec74,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec75={idCart:25323724,nome:'FOZ',nomeLogin:'MIQUEIAS14',nomePess:'opcional',anoEnt:2023,logo:logotec75,ClubAtual:fozdoiguacu,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec76={idCart:8833383,nome:'empoderados tops',nomeLogin:'Glória',nomePess:'opcional',anoEnt:2023,logo:logotec76,ClubAtual:atleticocearense,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec77={idCart:1574746,nome:'Gama SC',nomeLogin:'Anderson gama',nomePess:'opcional',anoEnt:2023,logo:logotec77,ClubAtual:operarioms,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec78={idCart:3279605,nome:'Gardena Show',nomeLogin:'Alexandre Bizarro',nomePess:'opcional',anoEnt:2019,logo:logotec78,ClubAtual:sport,titulo1:'Nacional 2023 (Sport)',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec79={idCart:16003384,nome:'Anápolis 09',nomeLogin:'Fabiano gomes',nomePess:'opcional',anoEnt:2023,logo:logotec79,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec80={idCart:28709367,nome:'guaranifcbage',nomeLogin:'indio guarani',nomePess:'opcional',anoEnt:2023,logo:logotec80,ClubAtual:guaranyrs,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec81={idCart:10297549,nome:'Ipatinga 2005',nomeLogin:'Vinícius',nomePess:'opcional',anoEnt:2023,logo:logotec81,ClubAtual:ipatinga,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec82={idCart:47521339,nome:'GS Joinville',nomeLogin:'Gabriel Stepic',nomePess:'opcional',anoEnt:2023,logo:logotec82,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec83={idCart:13709335,nome:'Grêmio Camaquã',nomeLogin:'David John',nomePess:'opcional',anoEnt:2023,logo:logotec83,ClubAtual:goias,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec84={idCart:25443720,nome:'Greve Geral F.C',nomeLogin:'EL LOCO MEDEIROS',nomePess:'opcional',anoEnt:2020,logo:logotec84,ClubAtual:bahia,titulo1:'Série "C" 2021',titulo2:'Nortista 2022',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec85={idCart:27515304,nome:'Lajeadense FCRS',nomeLogin:'João Vitor',nomePess:'opcional',anoEnt:2023,logo:logotec85,ClubAtual:lajeadense,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec86={idCart:7617899,nome:'Manausfcbr',nomeLogin:'Davi Silva',nomePess:'opcional',anoEnt:2023,logo:logotec86,ClubAtual:manaus,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec87={idCart:25276380,nome:'GUARDA POPULAR LAJEADO',nomeLogin:'Marlon J. Noro',nomePess:'opcional',anoEnt:2018,logo:logotec87,ClubAtual:athletico,titulo1:'Nacional 2019',titulo2:'Mundial 2020',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec88={idCart:13977116,nome:'Sport Horriver Plate',nomeLogin:'Matheus Hense',nomePess:'opcional',anoEnt:2023,logo:logotec88,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec89={idCart:13991183,nome:'Imortal Hakuna HB',nomeLogin:'Henrique Bordignon',nomePess:'opcional',anoEnt:2023,logo:logotec89,ClubAtual:semclube,titulo1:'Gaúcho 2022',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec90={idCart:79144,nome:'injambre FC',nomeLogin:'Nícolas Just',nomePess:'opcional',anoEnt:2023,logo:logotec90,ClubAtual:semclube,titulo1:'Carioca 2020',titulo2:'Mundial 2021',titulo3:'Paranaense 2023 (Londrina)',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec91={idCart:1078895,nome:'METROPOLITANO SP',nomeLogin:'João Alves',nomePess:'opcional',anoEnt:2023,logo:logotec91,ClubAtual:metropolitano,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec92={idCart:1857129,nome:'Dragon Goll Z',nomeLogin:'Rodrigo Rocha',nomePess:'opcional',anoEnt:2023,logo:logotec92,ClubAtual:internacional,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec93={idCart:44913569,nome:'MANCHESTER CITY 2030',nomeLogin:'EVERTON',nomePess:'opcional',anoEnt:2023,logo:logotec93,ClubAtual:internacionalsp,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec94={idCart:144527,nome:'Interrorista',nomeLogin:'Mauricio Rocha',nomePess:'opcional',anoEnt:2023,logo:logotec94,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec95={idCart:30249683,nome:'Mixto dos cria',nomeLogin:'Caio',nomePess:'opcional',anoEnt:2023,logo:logotec95,ClubAtual:mixto,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec96={idCart:29515028,nome:'Ituano A',nomeLogin:'Pedro',nomePess:'opcional',anoEnt:2023,logo:logotec96,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec97={idCart:21159633,nome:'JocaNeto FC',nomeLogin:'Joaquim Neto',nomePess:'opcional',anoEnt:2023,logo:logotec97,ClubAtual:semclube,titulo1:'Série B 2022',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec98={idCart:11615120,nome:'Náutico de Roraima ',nomeLogin:'Mário',nomePess:'opcional',anoEnt:2023,logo:logotec98,ClubAtual:nauticorr,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec99={idCart:16801088,nome:'JUVENTUDE E.F',nomeLogin:'Éder Feil',nomePess:'opcional',anoEnt:2023,logo:logotec99,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec100={idCart:7866960,nome:'Nova Iguaçu BXF',nomeLogin:'Gabriel',nomePess:'opcional',anoEnt:2023,logo:logotec100,ClubAtual:novaiguacu,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec101={idCart:28978050,nome:'Novo Hamburgo 1997',nomeLogin:'Wellington Boeno',nomePess:'opcional',anoEnt:2023,logo:logotec101,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec102={idCart:2705540,nome:'LUIAN SPORTING CLUB',nomeLogin:'Luian Martins',nomePess:'opcional',anoEnt:2021,logo:logotec102,ClubAtual:americamg,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec103={idCart:2277209,nome:'CR Olaria ',nomeLogin:'Wili',nomePess:'opcional',anoEnt:2023,logo:logotec103,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec104={idCart:416983,nome:'É de Madureira FC',nomeLogin:'Roberto Silva',nomePess:'opcional',anoEnt:2023,logo:logotec104,ClubAtual:madureira,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec105={idCart:30354170,nome:'operário 18',nomeLogin:'Juliano',nomePess:'opcional',anoEnt:2023,logo:logotec105,ClubAtual:operariopr,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec106={idCart:303336,nome:'MarceloGebing F.C',nomeLogin:'MARCELO GEBING',nomePess:'opcional',anoEnt:2021,logo:logotec106,ClubAtual:atleticogo,titulo1:'Gaúcho 2023 (Brasil)',titulo2:'Série B 2023 (Atlético-GO)',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec107={idCart:836541,nome:'Marvados Pn',nomeLogin:'Mateus',nomePess:'opcional',anoEnt:2023,logo:logotec107,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec108={idCart:1484622,nome:'S.C  mendigos171',nomeLogin:'Douglas Ehlert',nomePess:'opcional',anoEnt:2023,logo:logotec108,ClubAtual:paulista,titulo1:'Central 2022',titulo2:'Série C 2023 (Paulista)',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec109={idCart:44531292,nome:'OPERÁRIO IARENCZUK ',nomeLogin:'José iarenczuk',nomePess:'opcional',anoEnt:2023,logo:logotec109,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec110={idCart:14903825,nome:'Missioneiro Tricolor dos Pampas FC',nomeLogin:'ZÉ NILTON',nomePess:'opcional',anoEnt:2023,logo:logotec110,ClubAtual:semclube,titulo1:'Paulista - Acesso 2022',titulo2:'Mineiro 2021',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec111={idCart:755604,nome:'S.C Passo Fundo',nomeLogin:'Carlos ferreira',nomePess:'opcional',anoEnt:2023,logo:logotec111,ClubAtual:passofundo,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec112={idCart:605275,nome:'NACIONAL CAIO',nomeLogin:'NACIONAL CAIO',nomePess:'opcional',anoEnt:2023,logo:logotec112,ClubAtual:nacionalam,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec113={idCart:7692735,nome:'PatrocinenseJP',nomeLogin:'João Paulo',nomePess:'opcional',anoEnt:2023,logo:logotec113,ClubAtual:patrocinense,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec114={idCart:5067073,nome:'EC Pelotas',nomeLogin:'Otávio Martin',nomePess:'opcional',anoEnt:2023,logo:logotec114,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec115={idCart:3426634,nome:'NEGRUSHOW F.C.',nomeLogin:'ANDERSON NEGRUXO',nomePess:'opcional',anoEnt:2023,logo:logotec115,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec116={idCart:528913,nome:'NO BREAK  FC',nomeLogin:'SIQUEIRA',nomePess:'opcional',anoEnt:2023,logo:logotec116,ClubAtual:ceara,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec117={idCart:830214,nome:'De Pai Pra Filho F C ',nomeLogin:'victor c rodrigues',nomePess:'opcional',anoEnt:2023,logo:logotec117,ClubAtual:penarolam,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec118={idCart:26359934,nome:'O Real Porto Velho',nomeLogin:'Mister Andre',nomePess:'opcional',anoEnt:2023,logo:logotec118,ClubAtual:portovelhoro,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec119={idCart:28666717,nome:'portuguesa rj fc',nomeLogin:'Marquinhos',nomePess:'opcional',anoEnt:2023,logo:logotec119,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec120={idCart:18089506,nome:'de Resende ',nomeLogin:'carlos rezende',nomePess:'opcional',anoEnt:2023,logo:logotec120,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec121={idCart:309346,nome:'olympus TF',nomeLogin:'Alison Santos11',nomePess:'opcional',anoEnt:2023,logo:logotec121,ClubAtual:semclube,titulo1:'Gaúcho - Acesso  2022',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec122={idCart:8539546,nome:'Rio Branco AC FC',nomeLogin:'Sergio Henrique',nomePess:'opcional',anoEnt:2023,logo:logotec122,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec123={idCart:599238,nome:'Rio Negro SCZ',nomeLogin:'Heidy Batista',nomePess:'opcional',anoEnt:2023,logo:logotec123,ClubAtual:rionegroam,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec124={idCart:515545,nome:'OSCS',nomeLogin:'ODILIO SILMAR',nomePess:'opcional',anoEnt:2017,logo:logotec124,ClubAtual:saopaulo,titulo1:'Copa do Brasil 2023',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec125={idCart:23141887,nome:'OxaFC',nomeLogin:'MACHADO',nomePess:'opcional',anoEnt:2023,logo:logotec125,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec126={idCart:28183628,nome:'Porko loko 1983',nomeLogin:'Alisson Henrique',nomePess:'opcional',anoEnt:2023,logo:logotec126,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec127={idCart:173499,nome:'Paraná Fc',nomeLogin:'Alysson Teixeira',nomePess:'opcional',anoEnt:2023,logo:logotec127,ClubAtual:parana,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec128={idCart:28853645,nome:'Paranoia Club FC',nomeLogin:'Douglas Jeske',nomePess:'opcional',anoEnt:2023,logo:logotec128,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec129={idCart:3128918,nome:'Pardalice',nomeLogin:'TIAGO BIZARRO',nomePess:'opcional',anoEnt:2023,logo:logotec129,ClubAtual:brasilrs,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec130={idCart:853591,nome:'River do Piauí',nomeLogin:'Caio Filipe',nomePess:'opcional',anoEnt:2023,logo:logotec130,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec131={idCart:44868227,nome:'Pataço do Sul FC',nomeLogin:'LUIGI MUNHOZ BARBOSA',nomePess:'opcional',anoEnt:2023,logo:logotec131,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec132={idCart:933892,nome:'São Cristóvão fcc',nomeLogin:'Daniel Alves',nomePess:'opcional',anoEnt:2023,logo:logotec132,ClubAtual:saocristovao,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec133={idCart:16177452,nome:'FC Jundiaí Paulista',nomeLogin:'Henrique Melo',nomePess:'opcional',anoEnt:2023,logo:logotec133,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec134={idCart:21066722,nome:'Cerebrite FC',nomeLogin:'Arthur Blatt',nomePess:'opcional',anoEnt:2023,logo:logotec134,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec135={idCart:27559042,nome:'pedepoeira89',nomeLogin:'MARCOS',nomePess:'opcional',anoEnt:2023,logo:logotec135,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec136={idCart:27642008,nome:'LEC Social',nomeLogin:'Luciano',nomePess:'opcional',anoEnt:2023,logo:logotec136,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec137={idCart:25329684,nome:'TocantinopólisCRVG',nomeLogin:'Gustavo Henrique',nomePess:'opcional',anoEnt:2023,logo:logotec137,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec138={idCart:2369698,nome:'PFC.VAMODALE',nomeLogin:'Patrick Peres',nomePess:'opcional',anoEnt:2023,logo:logotec138,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec139={idCart:25304452,nome:'Garden Blue F.C',nomeLogin:'Bruno Ribeiro',nomePess:'opcional',anoEnt:2023,logo:logotec139,ClubAtual:tremap,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec140={idCart:26263295,nome:'Tuna luso F.C',nomeLogin:'Francinaldo Mendes',nomePess:'opcional',anoEnt:2023,logo:logotec140,ClubAtual:tunalusopa,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec141={idCart:27827413,nome:'TUPIFC 1910',nomeLogin:'Julio Jesus',nomePess:'opcional',anoEnt:2023,logo:logotec141,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec142={idCart:25317163,nome:'Tupinambás FC',nomeLogin:'Tubarão',nomePess:'opcional',anoEnt:2023,logo:logotec142,ClubAtual:tupinambas,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec143={idCart:14755901,nome:'Praiano Imortal',nomeLogin:'Silvio Ferreira',nomePess:'opcional',anoEnt:2023,logo:logotec143,ClubAtual:abc,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec144={idCart:14807369,nome:'Remo SA',nomeLogin:'remo sena',nomePess:'opcional',anoEnt:2023,logo:logotec144,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec145={idCart:2378945,nome:'URT-Patoloko',nomeLogin:'DeividRocha',nomePess:'opcional',anoEnt:2023,logo:logotec145,ClubAtual:urt,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec146={idCart:15921095,nome:'Uberlândia City EC',nomeLogin:'Kamilo Medeiros',nomePess:'opcional',anoEnt:2023,logo:logotec146,ClubAtual:uberlandia,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec147={idCart:45559641,nome:'MÃESANDU EC',nomeLogin:'xvJKLPvx',nomePess:'opcional',anoEnt:2023,logo:logotec147,ClubAtual:ypirangaap,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec148={idCart:41215,nome:'Rodrigues EFC',nomeLogin:'EDVARD RODRIGUES',nomePess:'opcional',anoEnt:2023,logo:logotec148,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec149={idCart:120020,nome:'Roratto bg',nomeLogin:'DELCIO',nomePess:'opcional',anoEnt:2023,logo:logotec149,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec150={idCart:562745,nome:'Salão Central FC',nomeLogin:'IVANDRO',nomePess:'opcional',anoEnt:2020,logo:logotec150,ClubAtual:paysandu,titulo1:'Nortista 2023 (Paysandu)',titulo2:'Super Estadual 2023 (Paysandu)',titulo3:'Copa Argentina 2023 (Vélez)',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec151={idCart:8271084,nome:'Interlaje',nomeLogin:'Luiz Poly Jr',nomePess:'opcional',anoEnt:2023,logo:logotec151,ClubAtual:interdelajes,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec152={idCart:26758171,nome:'Luverdense 100%',nomeLogin:'silva',nomePess:'opcional',anoEnt:2023,logo:logotec152,ClubAtual:luverdense,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec153={idCart:846609,nome:'Santinha 1',nomeLogin:'Ewerton',nomePess:'opcional',anoEnt:2023,logo:logotec153,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec154={idCart:25642175,nome:'S.E. GAMA CYTY',nomeLogin:'Luan',nomePess:'opcional',anoEnt:2023,logo:logotec154,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec155={idCart:28487870,nome:'Peixe Com Pelo Fc',nomeLogin:'Weli Guardiola',nomePess:'opcional',anoEnt:2023,logo:logotec155,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec156={idCart:411371,nome:'São Bento SG',nomeLogin:'Dudu',nomePess:'opcional',anoEnt:2023,logo:logotec156,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec157={idCart:44527392,nome:'São Caetano RST',nomeLogin:'Reginaldo Tavares',nomePess:'opcional',anoEnt:2023,logo:logotec157,ClubAtual:saocaetano,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec158={idCart:2235983,nome:'SÃO BERNARDO S.A',nomeLogin:'Vagner',nomePess:'opcional',anoEnt:2023,logo:logotec158,ClubAtual:saobernardo,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec159={idCart:27483492,nome:'FC Zequinha MA',nomeLogin:'Felipe',nomePess:'opcional',anoEnt:2023,logo:logotec159,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec160={idCart:20305739,nome:'Ypiranga Erechim FC',nomeLogin:'João Bergonsi',nomePess:'opcional',anoEnt:2023,logo:logotec160,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec161={idCart:141295,nome:'SE Confiança',nomeLogin:'Maxmüller',nomePess:'opcional',anoEnt:2023,logo:logotec161,ClubAtual:confianca,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec162={idCart:666259,nome:'A. E. Floresta',nomeLogin:'Haroldo Krambeck',nomePess:'opcional',anoEnt:2023,logo:logotec162,ClubAtual:floresta,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec163={idCart:3667819,nome:'Sport Club Izacar',nomeLogin:'RANGEL BARROS',nomePess:'opcional',anoEnt:2020,logo:logotec163,ClubAtual:avai,titulo1:'Mineiro 2020',titulo2:'Paulista 2023 (Bragantino)',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec164={idCart:0,nome:'SC Roma',nomeLogin:'Iago Gonçalves',nomePess:'opcional',anoEnt:2023,logo:logotec164,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec165={idCart:12415025,nome:'S.C SERRA GAÚCHA',nomeLogin:'EDSON N. GONÇALVES',nomePess:'opcional',anoEnt:2023,logo:logotec165,ClubAtual:cuiaba,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec166={idCart:120938,nome:'S.C XAVANTE',nomeLogin:'Denis Trindade',nomePess:'opcional',anoEnt:2021,logo:logotec166,ClubAtual:athletic,titulo1:'Carioca 2022',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec167={idCart:13921925,nome:'SELEBEST FC',nomeLogin:'EDVAN SILVA',nomePess:'opcional',anoEnt:2022,logo:logotec167,ClubAtual:vasco,titulo1:'Série "C" 2022',titulo2:'Carioca 2023 (Vasco)',titulo3:'Carioca 2024 (Vasco)',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec168={idCart:125562,nome:'SelleGalo F.C',nomeLogin:'João Marcus Fonseca',nomePess:'opcional',anoEnt:2021,logo:logotec168,ClubAtual:bragantino,titulo1:'Mineiro 2023 (América)',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec169={idCart:3790993,nome:'SER GEESNA',nomeLogin:'Marcos Diogo',nomePess:'opcional',anoEnt:2017,logo:logotec169,ClubAtual:juventude,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec170={idCart:7876526,nome:'SER  XANTOSKA',nomeLogin:'ECHARTÊA - SVP',nomePess:'opcional',anoEnt:2017,logo:logotec170,ClubAtual:fluminense,titulo1:'Sulamericana 2022',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec171={idCart:7443320,nome:'APARECIDENSE FFC',nomeLogin:'samuel',nomePess:'opcional',anoEnt:2023,logo:logotec171,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec172={idCart:2928490,nome:'E.C Só Pra Encomodar',nomeLogin:'DELCIO LUTZ',nomePess:'opcional',anoEnt:2023,logo:logotec172,ClubAtual:chapecoense,titulo1:'Gaúcho 2021',titulo2:'Super Estadual 2021',titulo3:'Libertadores 2021',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec173={idCart:2928490,nome:'POUSO ALEGRE esports',nomeLogin:'ivanjr',nomePess:'opcional',anoEnt:2023,logo:logotec173,ClubAtual:pousoalegre,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec174={idCart:28466821,nome:'Stepanski FC',nomeLogin:'Ariel Stepanski',nomePess:'opcional',anoEnt:2023,logo:logotec174,ClubAtual:ferroviario,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec175={idCart:28444,nome:'Time do Nee',nomeLogin:'NEEMIAS KASPER',nomePess:'opcional',anoEnt:2023,logo:logotec175,ClubAtual:semclube,titulo1:'Carioca 2021',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec176={idCart:8974249,nome:'Alto Clima FC',nomeLogin:'Alto Clima FC',nomePess:'opcional',anoEnt:2023,logo:logotec176,ClubAtual:altos,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec177={idCart:17911165,nome:'Tolfos futebol clube',nomeLogin:'Rodrigo',nomePess:'opcional',anoEnt:2023,logo:logotec177,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec178={idCart:47688275,nome:'EC TOMBENSE MG',nomeLogin:'Gabriel Rocha',nomePess:'opcional',anoEnt:2023,logo:logotec178,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec179={idCart:25302423,nome:'TP Charrua',nomeLogin:'ANDRÉ NEVES',nomePess:'opcional',anoEnt:2023,logo:logotec179,ClubAtual:semclube,titulo1:'Sulino 2022 (extinto)',titulo2:'Série"D" 2020',titulo3:'Sulino 2021 (extinto)',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec180={idCart:14157276,nome:'Ferroviária A.F.E.',nomeLogin:'Roberto Roque',nomePess:'opcional',anoEnt:2023,logo:logotec180,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec181={idCart:1056673,nome:'AE MATTI',nomeLogin:'Matheus Brotti',nomePess:'opcional',anoEnt:2023,logo:logotec181,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec182={idCart:17935813,nome:'Trimerica Fc',nomeLogin:'BALTA DIAS',nomePess:'opcional',anoEnt:2023,logo:logotec182,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec183={idCart:27718747,nome:'Tricolor Azul Branco e Preto ',nomeLogin:'Rogério Lopes',nomePess:'opcional',anoEnt:2023,logo:logotec183,ClubAtual:criciuma,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec184={idCart:25827587,nome:'FC trombada 1957',nomeLogin:'JOSÉ AZEREDO',nomePess:'opcional',anoEnt:2023,logo:logotec184,ClubAtual:novohamburgo,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec185={idCart:25349609,nome:'Tubarão Bagé Club',nomeLogin:'José Ferreira',nomePess:'opcional',anoEnt:2017,logo:logotec185,ClubAtual:bage,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec186={idCart:47712973,nome:'Aliançaplasticos ',nomeLogin:' Aliançaplasticos',nomePess:'opcional',anoEnt:2023,logo:logotec186,ClubAtual:jequie,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec187={idCart:14326686,nome:'América Cruz',nomeLogin:'Jamerson Luiz',nomePess:'opcional',anoEnt:2023,logo:logotec187,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec188={idCart:47722889,nome:'Aninhapaodemel F.C',nomeLogin:'Pamela',nomePess:'opcional',anoEnt:2023,logo:logotec188,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec189={idCart:44506741,nome:'aquiecarioca',nomeLogin:'aquiecarioca',nomePess:'opcional',anoEnt:2023,logo:logotec189,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec190={idCart:12089183,nome:'Unidos da NIKE f.c',nomeLogin:'FERNANDES',nomePess:'opcional',anoEnt:2023,logo:logotec190,ClubAtual:semclube,titulo1:'Paulista 2022',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec191={idCart:27453393,nome:'BORASERFELIZ F.C',nomeLogin:'BORA',nomePess:'opcional',anoEnt:2023,logo:logotec191,ClubAtual:sampaiocorrea,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec192={idCart:8975023,nome:'cachorra maga fc',nomeLogin:'Alex pool',nomePess:'opcional',anoEnt:2023,logo:logotec192,ClubAtual:americarj,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec193={idCart:18702038,nome:' Vila Real Goiânia ',nomeLogin:'João Victor',nomePess:'opcional',anoEnt:2023,logo:logotec193,ClubAtual:vilanova,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec194={idCart:17266,nome:'Canaã da gama',nomeLogin:' Ricardo Léo',nomePess:'opcional',anoEnt:2023,logo:logotec194,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec195={idCart:44513215,nome:'Capuscas F.C 2023',nomeLogin:'Sérgio',nomePess:'opcional',anoEnt:2023,logo:logotec195,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec196={idCart:8636854,nome:'Volta Redonda abc',nomeLogin:'ademilson zacarias',nomePess:'opcional',anoEnt:2023,logo:logotec196,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec197={idCart:26344149,nome:'XVzão Piracicaba',nomeLogin:'Denisar',nomePess:'opcional',anoEnt:2023,logo:logotec197,ClubAtual:xvpiracicaba,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec198={idCart:2092255,nome:'TimãoJP10',nomeLogin:'João Pedro',nomePess:'opcional',anoEnt:2023,logo:logotec198,ClubAtual:corinthians,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec199={idCart:19404988,nome:'ZEBRA CLUBE RS',nomeLogin:'Rafael Souza',nomePess:'opcional',anoEnt:2023,logo:logotec199,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec200={idCart:47664671,nome:'ztalihc10',nomeLogin:'wladimir ztalihc',nomePess:'opcional',anoEnt:2022,logo:logotec200,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec201={idCart:1652966,nome:'Zurrilho',nomeLogin:'Cairuga Amauri',nomePess:'opcional',anoEnt:2023,logo:logotec201,ClubAtual:crb,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec202={idCart:5144485,nome:'SOUZ4S',nomeLogin:'Rafael Souza',nomePess:'opcional',anoEnt:2023,logo:logotec202,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec203={idCart:47821810,nome:'CARTOCRAQUE 252',nomeLogin:'CARTOCRAQUE',nomePess:'opcional',anoEnt:2023,logo:logotec203,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec204={idCart:45862988,nome:'Cartoleiro Tuga FC',nomeLogin:'Vitor Guimarães',nomePess:'opcional',anoEnt:2023,logo:logotec204,ClubAtual:nautico,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec205={idCart:26065640,nome:'catadão do vps ',nomeLogin:'Lindolfo Neto',nomePess:'opcional',anoEnt:2023,logo:logotec205,ClubAtual:saoraimundoam,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec206={idCart:21468965,nome:'Cielschmitz',nomeLogin:' Marciel',nomePess:'opcional',anoEnt:2023,logo:logotec206,ClubAtual:voltaredonda,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec207={idCart:29395973,nome:'CORREDOR CARTOLEIRO',nomeLogin:' ALISON SANTANNA',nomePess:'opcional',anoEnt:2023,logo:logotec207,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec208={idCart:3741250,nome:'CQT FC',nomeLogin:' Lucas Aguiar',nomePess:'opcional',anoEnt:2023,logo:logotec208,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec209={idCart:45715901,nome:'Cristiano cartola7',nomeLogin:'Cleiton',nomePess:'opcional',anoEnt:2023,logo:logotec209,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec210={idCart:26734590,nome:'DAINEZI 01 FC',nomeLogin:'João Dainezi',nomePess:'opcional',anoEnt:2023,logo:logotec210,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec211={idCart:44516142,nome:'Detroit_x',nomeLogin:'Matheus',nomePess:'opcional',anoEnt:2023,logo:logotec211,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec212={idCart:3924779,nome:'DiegoCarlin FC',nomeLogin:'Diego Carlin',nomePess:'opcional',anoEnt:2023,logo:logotec212,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec213={idCart:2891520,nome:'Drift F.C',nomeLogin:'Eduardo Possani',nomePess:'opcional',anoEnt:2023,logo:logotec213,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec214={idCart:48940295,nome:'Fla Parelhas FC II',nomeLogin:'Clécio Ricardo',nomePess:'opcional',anoEnt:2023,logo:logotec214,ClubAtual:mirassol,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec215={idCart:28460843,nome:'FLA010FLA010',nomeLogin:'DANIEL',nomePess:'opcional',anoEnt:2023,logo:logotec215,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec216={idCart:47650676,nome:'Flamito Mais',nomeLogin:' Cezar',nomePess:'opcional',anoEnt:2023,logo:logotec216,ClubAtual:social,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec217={idCart:8566146,nome:'GABTRIN98 F.C ',nomeLogin:' GABRIEL TRINDADE',nomePess:'opcional',anoEnt:2023,logo:logotec217,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec218={idCart:30119688,nome:'Ganduulafcc',nomeLogin:'rwzinn',nomePess:'opcional',anoEnt:2023,logo:logotec218,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec219={idCart:26282927,nome:'gawlik fc',nomeLogin:' Thiago José gawlik',nomePess:'opcional',anoEnt:2023,logo:logotec219,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec220={idCart:11499122,nome:'Givanildo 2023',nomeLogin:'Givanildo Souza',nomePess:'opcional',anoEnt:2023,logo:logotec220,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec221={idCart:44509620,nome:'Heitor  ousadia',nomeLogin:' Heitor silva',nomePess:'opcional',anoEnt:2023,logo:logotec221,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec222={idCart:44889302,nome:'Heleninha F.C.C',nomeLogin:'Helena',nomePess:'opcional',anoEnt:2023,logo:logotec222,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec223={idCart:27787169,nome:'america rn cfc',nomeLogin:'Vinicius Costa',nomePess:'opcional',anoEnt:2023,logo:logotec223,ClubAtual:americarn,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec224={idCart:18480186,nome:'Urra  Avai',nomeLogin:'Cristina rosa',nomePess:'opcional',anoEnt:2023,logo:logotec224,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec225={idCart:14047402,nome:'Bangu85 Fc',nomeLogin:'Emanuel',nomePess:'opcional',anoEnt:2023,logo:logotec225,ClubAtual:bangu,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec226={idCart:29914,nome:'Brasil de Pedrotas',nomeLogin:'Pedro Brasil',nomePess:'opcional',anoEnt:2023,logo:logotec226,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec227={idCart:13993748,nome:'Caldense EC',nomeLogin:'Ricardinho',nomePess:'opcional',anoEnt:2023,logo:logotec227,ClubAtual:caldense,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec228={idCart:1111889,nome:'André CRB-AL',nomeLogin:'André Amorim',nomePess:'opcional',anoEnt:2023,logo:logotec228,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec229={idCart:1165,nome:'O Criciuma EC',nomeLogin:'Bruno Dassoler',nomePess:'opcional',anoEnt:2023,logo:logotec229,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec230={idCart:14535123,nome:'Guarani 10',nomeLogin:'Fernando',nomePess:'opcional',anoEnt:2023,logo:logotec230,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec231={idCart:27996399,nome:'Sou Londrina EC ',nomeLogin:'Luiz Marcelo Gazzoni',nomePess:'opcional',anoEnt:2023,logo:logotec231,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec232={idCart:803836,nome:'SC Novorizontino',nomeLogin:'Leonardo Carlos',nomePess:'opcional',anoEnt:2023,logo:logotec232,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec233={idCart:6965124,nome:'Edu Ponte Preta',nomeLogin:'Eduardo Pissolatti',nomePess:'opcional',anoEnt:2023,logo:logotec233,ClubAtual:pontepreta,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec234={idCart:26822732,nome:'É A LUSA',nomeLogin:'Leonardo',nomePess:'opcional',anoEnt:2023,logo:logotec234,ClubAtual:portuguesa,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec235={idCart:14029423,nome:'CA Santo André',nomeLogin:'João Vieira',nomePess:'opcional',anoEnt:2023,logo:logotec235,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec236={idCart:20405016,nome:'SÃO RAIMUNDO CDA',nomeLogin:'Léo cda',nomePess:'opcional',anoEnt:2023,logo:logotec236,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec237={idCart:3760631,nome:'Treze 17 PB',nomeLogin:'Gabriel Santos',nomePess:'opcional',anoEnt:2023,logo:logotec237,ClubAtual:treze,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec238={idCart:25863520,nome:'Vila Nova F.C.C',nomeLogin:'Ivo Vila Nova',nomePess:'opcional',anoEnt:2023,logo:logotec238,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec239={idCart:170591,nome:'Vitória Retrô EC',nomeLogin:'Cleiton Paiva',nomePess:'opcional',anoEnt:2023,logo:logotec239,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec240={idCart:608804,nome:'E.C. XV Piracicaba ',nomeLogin:'Anderson',nomePess:'opcional',anoEnt:2023,logo:logotec240,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec241={idCart:2458162,nome:'Água Santa S.C.P.',nomeLogin:'Lucas Antonelli',nomePess:'opcional',anoEnt:2023,logo:logotec241,ClubAtual:aguasanta,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec242={idCart:2867094,nome:'F.C Águia De Marabá ',nomeLogin:'Cislei Oliveira',nomePess:'opcional',anoEnt:2023,logo:logotec242,ClubAtual:aguiademaraba,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec243={idCart:5472534,nome:'ANAPOLIS 2 FC',nomeLogin:'EDER LUIS',nomePess:'opcional',anoEnt:2023,logo:logotec243,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec244={idCart:9486411,nome:'Asa de arápiraca Ftc',nomeLogin:'Fernando de oliveira',nomePess:'opcional',anoEnt:2023,logo:logotec244,ClubAtual:asa,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec245={idCart:834926,nome:'Atlético C. Cearense',nomeLogin:'Pedro Igor',nomePess:'opcional',anoEnt:2023,logo:logotec245,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec246={idCart:30042792,nome:'Avenida mito FC',nomeLogin:'Jardel Carvalho',nomePess:'opcional',anoEnt:2023,logo:logotec246,ClubAtual:avenida,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec247={idCart:4497371,nome:'Barra do Sul FC',nomeLogin:'Gercino Barauna',nomePess:'opcional',anoEnt:2023,logo:logotec247,ClubAtual:barrasc,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec248={idCart:25401027,nome:'L13 Cametá',nomeLogin:'Pai e Filho',nomePess:'opcional',anoEnt:2023,logo:logotec248,ClubAtual:cameta,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec249={idCart:25391114,nome:'FC Capital',nomeLogin:'Luan',nomePess:'opcional',anoEnt:2023,logo:logotec249,ClubAtual:capital,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec250={idCart:101866,nome:'Concordia AC',nomeLogin:'Sipioni Alliev',nomePess:'opcional',anoEnt:2023,logo:logotec250,ClubAtual:concordia,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec251={idCart:18285027,nome:'CSE FOOTBALL CLUB',nomeLogin:'Vinícius',nomePess:'opcional',anoEnt:2023,logo:logotec251,ClubAtual:cse,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec252={idCart:742386,nome:'Fluminense do Piauí',nomeLogin:'Julio Cesar Diogenes',nomePess:'opcional',anoEnt:2023,logo:logotec252,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec253={idCart:2017,nome:'Hercílio Luz Futebol Clube',nomeLogin:'Marcos B de Carvalho',nomePess:'opcional',anoEnt:2023,logo:logotec253,ClubAtual:hercilioluz,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec254={idCart:3681652,nome:'HUMAITÁ EC',nomeLogin:'ERMINIO',nomePess:'opcional',anoEnt:2023,logo:logotec254,ClubAtual:humaita,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec255={idCart:1788021,nome:'Iguatu CE FC',nomeLogin:'Arthur Tomé',nomePess:'opcional',anoEnt:2023,logo:logotec255,ClubAtual:iguatu,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec256={idCart:5202714,nome:'Iporá E. C.',nomeLogin:'Heitor Paes',nomePess:'opcional',anoEnt:2023,logo:logotec256,ClubAtual:ipora,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec257={idCart:1461798,nome:'FC Théozinho',nomeLogin:'Matheus Almeida',nomePess:'opcional',anoEnt:2023,logo:logotec257,ClubAtual:itabaiana,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec258={idCart:41368,nome:'Itabuna E.Clube',nomeLogin:'Lukinhas costa',nomePess:'opcional',anoEnt:2023,logo:logotec258,ClubAtual:itabuna,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec259={idCart:8608284,nome:'Jacuipense Fut',nomeLogin:'Jean',nomePess:'opcional',anoEnt:2023,logo:logotec259,ClubAtual:jacuipense,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec260={idCart:45731423,nome:'juazeirense Real ',nomeLogin:'Nilson',nomePess:'opcional',anoEnt:2023,logo:logotec260,ClubAtual:juazeirense,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec261={idCart:1999542,nome:'Manauara bulls',nomeLogin:'Clovis Filho',nomePess:'opcional',anoEnt:2023,logo:logotec261,ClubAtual:manauara,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec262={idCart:1675583,nome:'Maracanã Cit FC',nomeLogin:'Alex Ferreira',nomePess:'opcional',anoEnt:2023,logo:logotec262,ClubAtual:maracanace,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec263={idCart:8280874,nome:'Maranhão Zl Fc ',nomeLogin:'Marcio Pini',nomePess:'opcional',anoEnt:2023,logo:logotec263,ClubAtual:maranhao,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec264={idCart:18028802,nome:'Maringá Cartolouco FC',nomeLogin:'Fabiano Primo Dias',nomePess:'opcional',anoEnt:2023,logo:logotec264,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec265={idCart:1793028,nome:'moto club 12',nomeLogin:'André Ricardo',nomePess:'opcional',anoEnt:2023,logo:logotec265,ClubAtual:motoclub,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec266={idCart:9004952,nome:'Petrolina FCPE',nomeLogin:'Cleison',nomePess:'opcional',anoEnt:2023,logo:logotec266,ClubAtual:petrolina,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec267={idCart:18289539,nome:'Potiguar de Mossoró s2',nomeLogin:'Ghisleno Renato',nomePess:'opcional',anoEnt:2023,logo:logotec267,ClubAtual:potiguardemossoro,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec268={idCart:1022877,nome:'Princesa do Solimões E.C.',nomeLogin:'Marcos Rocha',nomePess:'opcional',anoEnt:2023,logo:logotec268,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec269={idCart:25337841,nome:'Real Brasília FCB',nomeLogin:'igor',nomePess:'opcional',anoEnt:2023,logo:logotec269,ClubAtual:realbrasilia,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec270={idCart:579668,nome:'REAL NOROESTE CFC',nomeLogin:'BRUNO FAVORETTE',nomePess:'opcional',anoEnt:2023,logo:logotec270,ClubAtual:realnoroeste,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec271={idCart:25359914,nome:'ALDEIA RETRÔ  FC',nomeLogin:'EMERSON',nomePess:'opcional',anoEnt:2023,logo:logotec271,ClubAtual:retro,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec272={idCart:3778152,nome:'Santinha CG',nomeLogin:'Adriano silva',nomePess:'opcional',anoEnt:2023,logo:logotec272,ClubAtual:santacruzdenatal,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec273={idCart:280471,nome:'Sao José Sports ',nomeLogin:'Douglas Costta',nomePess:'opcional',anoEnt:2023,logo:logotec273,ClubAtual:saojosesp,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec274={idCart:1662075,nome:'São Raimundo E.C 1918',nomeLogin:'Antony',nomePess:'opcional',anoEnt:2023,logo:logotec274,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec275={idCart:436303,nome:'Sergipe mil grau FC',nomeLogin:'Diiego CRUUZ',nomePess:'opcional',anoEnt:2023,logo:logotec275,ClubAtual:sergipe,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec276={idCart:25568513,nome:'SERRA ES FC',nomeLogin:'Marquinhos',nomePess:'opcional',anoEnt:2023,logo:logotec276,ClubAtual:serra,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec277={idCart:13995043,nome:'Souzas city',nomeLogin:'Filipe souza',nomePess:'opcional',anoEnt:2023,logo:logotec277,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec278={idCart:592151,nome:'VERDÃO EC',nomeLogin:'RICARDO FERNANDES',nomePess:'opcional',anoEnt:2023,logo:logotec278,ClubAtual:tocantinopolis,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec279={idCart:9676643,nome:' EC União TJ',nomeLogin:'Jivis Paixão',nomePess:'opcional',anoEnt:2023,logo:logotec279,ClubAtual:uniaorondonopolis,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec280={idCart:19493539,nome:'C.E.F MIRASSOL ',nomeLogin:'Anderson',nomePess:'opcional',anoEnt:2023,logo:logotec280,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec281={idCart:13973796,nome:'ANDRAUS_67',nomeLogin:'JAPA',nomePess:'opcional',anoEnt:2023,logo:logotec281,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec282={idCart:28513121,nome:'Azuriz Sport Club',nomeLogin:'Elison Jr Oliveira',nomePess:'opcional',anoEnt:2023,logo:logotec282,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec283={idCart:30387567,nome:'Matheus PST',nomeLogin:'João Matheus',nomePess:'opcional',anoEnt:2023,logo:logotec283,ClubAtual:psts,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec284={idCart:13981847,nome:'GALO MARINGA F.C',nomeLogin:'Ney Lopes',nomePess:'opcional',anoEnt:2023,logo:logotec284,ClubAtual:galomaringa,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec285={idCart:19364092,nome:'Atletico Joseense SJC',nomeLogin:'João Souza',nomePess:'opcional',anoEnt:2023,logo:logotec285,ClubAtual:saojoseense,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec286={idCart:12179894,nome:'Toledo 1996',nomeLogin:'Toledo',nomePess:'opcional',anoEnt:2023,logo:logotec286,ClubAtual:toledo,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec287={idCart:1081370,nome:'Grêmio Maringá/ SFC',nomeLogin:'José Pelegrino',nomePess:'opcional',anoEnt:2023,logo:logotec287,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec288={idCart:1456984,nome:'Marcilio Dias FC',nomeLogin:'Daniel Girardi',nomePess:'opcional',anoEnt:2023,logo:logotec288,ClubAtual:marciliodias,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec289={idCart:8234448,nome:'EC Nação',nomeLogin:'Ivan',nomePess:'opcional',anoEnt:2023,logo:logotec289,ClubAtual:nacao,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec290={idCart:21727622,nome:'Guarani da Palhoça FC',nomeLogin:'Adriano',nomePess:'opcional',anoEnt:2023,logo:logotec290,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec291={idCart:60137,nome:'SC Juventuss',nomeLogin:'Mr. Toledo',nomePess:'opcional',anoEnt:2023,logo:logotec291,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec292={idCart:619292,nome:'caravaggiofc',nomeLogin:'Rodrigo Vieira',nomePess:'opcional',anoEnt:2023,logo:logotec292,ClubAtual:caravaggio,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec293={idCart:25780905,nome:'AFØGADOS FC',nomeLogin:'Lucas Quesado',nomePess:'opcional',anoEnt:2023,logo:logotec293,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec294={idCart:2017597,nome:'CR Barbalha',nomeLogin:'Pedro Henrique 2018',nomePess:'opcional',anoEnt:2023,logo:logotec294,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec295={idCart:1182492,nome:'Belo Jardim Fut C',nomeLogin:'Vinícius Mendonça',nomePess:'opcional',anoEnt:2023,logo:logotec295,ClubAtual:belojardim,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec296={idCart:2308690,nome:'Caruaru City OFC',nomeLogin:'Antônio Fernando',nomePess:'opcional',anoEnt:2023,logo:logotec296,ClubAtual:caruarucity,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec297={idCart:15951262,nome:'Caucaia de sola.',nomeLogin:'Thiago',nomePess:'opcional',anoEnt:2023,logo:logotec297,ClubAtual:caucaia,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec298={idCart:5487429,nome:'FC CENTRAL  MC',nomeLogin:'Sérgio Ricardo',nomePess:'opcional',anoEnt:2023,logo:logotec298,ClubAtual:central,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec299={idCart:5903723,nome:'CEOV-OPE',nomeLogin:'João Bosco',nomePess:'opcional',anoEnt:2023,logo:logotec299,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec300={idCart:1768836,nome:'E.C.Comercial T10 ',nomeLogin:'Frank Rodrigues',nomePess:'opcional',anoEnt:2023,logo:logotec300,ClubAtual:comercialms,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec301={idCart:2645,nome:'Pé de Peia do Crato',nomeLogin:'Mailson Maia',nomePess:'opcional',anoEnt:2023,logo:logotec301,ClubAtual:crato,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec302={idCart:323996,nome:'DECISÃO PE  F. C',nomeLogin:'Rocha Erivandes',nomePess:'opcional',anoEnt:2023,logo:logotec302,ClubAtual:decisaosertania,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec303={idCart:1712152,nome:' Sport Club Dom Bosco',nomeLogin:'Nicolau',nomePess:'opcional',anoEnt:2023,logo:logotec303,ClubAtual:dombosco,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec304={idCart:18184176,nome:'GOIANÉSIA - GOIÁS 1967',nomeLogin:'WASHINGTON IZAC',nomePess:'opcional',anoEnt:2023,logo:logotec304,ClubAtual:goianesia,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec305={idCart:10061925,nome:'Goiânia fc gyn',nomeLogin:'Wescley Silva',nomePess:'opcional',anoEnt:2023,logo:logotec305,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec306={idCart:4829228,nome:'Goiatuba Futebol Clube',nomeLogin:'Guido',nomePess:'opcional',anoEnt:2023,logo:logotec306,ClubAtual:goiatuba,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec307={idCart:8805399,nome:'guarany de sobral MC',nomeLogin:'WESLEY PAIVA',nomePess:'opcional',anoEnt:2023,logo:logotec307,ClubAtual:guaranydesobral,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec308={idCart:45243534,nome:'FelplayFC',nomeLogin:'RAGNAR100',nomePess:'opcional',anoEnt:2023,logo:logotec308,ClubAtual:horizonte,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec309={idCart:26896922,nome:'IbisManiaff',nomeLogin:'IbisFelipe',nomePess:'opcional',anoEnt:2023,logo:logotec309,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec310={idCart:7961735,nome:'icasa sr',nomeLogin:'wanderson',nomePess:'opcional',anoEnt:2023,logo:logotec310,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec311={idCart:4861,nome:'Inhumas82',nomeLogin:'erivelton88',nomePess:'opcional',anoEnt:2023,logo:logotec311,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec312={idCart:1114558,nome:'Itapipoca F.C',nomeLogin:'César',nomePess:'opcional',anoEnt:2023,logo:logotec312,ClubAtual:itapipoca,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec313={idCart:6212658,nome:'Itumbiara futebol',nomeLogin:'Warlley',nomePess:'opcional',anoEnt:2023,logo:logotec313,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec314={idCart:18810927,nome:'jataiense.city',nomeLogin:'valdeir',nomePess:'opcional',anoEnt:2023,logo:logotec314,ClubAtual:jataiense,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec315={idCart:10430383,nome:'Luziânia A.a',nomeLogin:'Wagner Bento',nomePess:'opcional',anoEnt:2023,logo:logotec315,ClubAtual:luziania,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec316={idCart:3399018,nome:'Maguary Mito Fc',nomeLogin:'ourenco nobrega',nomePess:'opcional',anoEnt:2023,logo:logotec316,ClubAtual:maguary,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec317={idCart:44770634,nome:'clube morrinhos fc',nomeLogin:'Alessandro',nomePess:'opcional',anoEnt:2023,logo:logotec317,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec318={idCart:47514010,nome:'jogandofoddacileite',nomeLogin:'luccact',nomePess:'opcional',anoEnt:2023,logo:logotec318,ClubAtual:novamutum,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec319={idCart:531539,nome:'PacajuSPO FC',nomeLogin:'Vlademir Nogueira',nomePess:'opcional',anoEnt:2023,logo:logotec319,ClubAtual:inhumas,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec320={idCart:21008,nome:'PORTO F.C NV',nomeLogin:'Luan B.',nomePess:'opcional',anoEnt:2023,logo:logotec320,ClubAtual:porto,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec321={idCart:19228525,nome:'SalgueiroFC Clube',nomeLogin:'helio',nomePess:'opcional',anoEnt:2023,logo:logotec321,ClubAtual:salgueiro,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec322={idCart:28766253,nome:'Tiradentes Juá FC',nomeLogin:'Wesley Nogueira',nomePess:'opcional',anoEnt:2023,logo:logotec322,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec323={idCart:18225885,nome:'Vera Cruz red fc',nomeLogin:'Tiago Oliveira',nomePess:'opcional',anoEnt:2023,logo:logotec323,ClubAtual:veracruz,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec324={idCart:23986421,nome:'vitoria das taboca 2.0',nomeLogin:'junior',nomePess:'opcional',anoEnt:2023,logo:logotec324,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec325={idCart:1312634,nome:'A.C.DaSilva 89',nomeLogin:'DaSilva',nomePess:'opcional',anoEnt:2023,logo:logotec325,ClubAtual:atleticoba,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec326={idCart:314223,nome:'ABC MORAL FC',nomeLogin:' Adisson Honorato',nomePess:'opcional',anoEnt:2023,logo:logotec326,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec327={idCart:3104709,nome:'af4bcr7',nomeLogin:' af4bcr7',nomePess:'opcional',anoEnt:2023,logo:logotec327,ClubAtual:barcelonaba,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec328={idCart:535301,nome:'Alex Buião Fla',nomeLogin:' Alex',nomePess:'opcional',anoEnt:2023,logo:logotec328,ClubAtual:jacobina,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec329={idCart:47712973,nome:'Aliançaplasticos',nomeLogin:' Aliançaplasticos',nomePess:'opcional',anoEnt:2023,logo:logotec329,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec330={idCart:24381493,nome:'André_crvg71',nomeLogin:'André Ferreira',nomePess:'opcional',anoEnt:2023,logo:logotec330,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec331={idCart:14684762,nome:'Atraente FC32',nomeLogin:' vitor',nomePess:'opcional',anoEnt:2023,logo:logotec331,ClubAtual:colocoloba,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec332={idCart:4251129,nome:'Bel@vistao fc',nomeLogin:' jonathan fc',nomePess:'opcional',anoEnt:2023,logo:logotec332,ClubAtual:fluminensedefeira,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec333={idCart:26192259,nome:'Benscred',nomeLogin:'Michael',nomePess:'opcional',anoEnt:2023,logo:logotec333,ClubAtual:grapiuna,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec334={idCart:25315777,nome:'branco fc oficial',nomeLogin:' Ricardo',nomePess:'opcional',anoEnt:2023,logo:logotec334,ClubAtual:juazeiro,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec335={idCart:852805,nome:'Cartonauskas Fc',nomeLogin:' Giovanni Ivanauskas',nomePess:'opcional',anoEnt:2023,logo:logotec335,ClubAtual:unirb,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec336={idCart:2696094,nome:'Cassioto F.C',nomeLogin:' Cassiano',nomePess:'opcional',anoEnt:2023,logo:logotec336,ClubAtual:vitoriadaconquista,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec337={idCart:2412676,nome:'CBshark',nomeLogin:' Élison Alves',nomePess:'opcional',anoEnt:2023,logo:logotec337,ClubAtual:leonico,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec338={idCart:47601668,nome:'CF SóCanelas 96',nomeLogin:'davi',nomePess:'opcional',anoEnt:2023,logo:logotec338,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec339={idCart:3740555,nome:'Corinthians kiki',nomeLogin:'Aquiles kiki',nomePess:'opcional',anoEnt:2023,logo:logotec339,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec340={idCart:9424926,nome:'Correria2016 fc',nomeLogin:' karen',nomePess:'opcional',anoEnt:2023,logo:logotec340,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec341={idCart:15976183,nome:'Corta pra mim',nomeLogin:' Arquibaldo da Silva',nomePess:'opcional',anoEnt:2023,logo:logotec341,ClubAtual:chapecoense,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec342={idCart:25633266,nome:'Cruzeiro n10',nomeLogin:' wesllen da cebola',nomePess:'opcional',anoEnt:2023,logo:logotec342,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec343={idCart:178953,nome:'DUARTE FZ',nomeLogin:' Duarte',nomePess:'opcional',anoEnt:2023,logo:logotec343,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec344={idCart:44521797,nome:'É o tremm da ph',nomeLogin:' Wagner Moraes',nomePess:'opcional',anoEnt:2023,logo:logotec344,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec345={idCart:3153745,nome:'E.C Immbatível',nomeLogin:' Lula Brito',nomePess:'opcional',anoEnt:2023,logo:logotec345,ClubAtual:vitoria,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec346={idCart:6776276,nome:'EC DAVIDGOOL',nomeLogin:'david',nomePess:'opcional',anoEnt:2023,logo:logotec346,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec347={idCart:7520249,nome:'LADRAO DE GALINHA F.C',nomeLogin:'Tiago Pereira',nomePess:'opcional',anoEnt:2024,logo:logotec347,ClubAtual:porto,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec348={idCart:47630915,nome:'FC. B3NTO',nomeLogin:'Thiago Rodrigues',nomePess:'opcional',anoEnt:2023,logo:logotec348,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec349={idCart:3116886,nome:'Fla Sysak 1895',nomeLogin:' Vinicius Sysak',nomePess:'opcional',anoEnt:2023,logo:logotec349,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec350={idCart:29687,nome:'FLA Uberaba',nomeLogin:'marceloscmg',nomePess:'opcional',anoEnt:2023,logo:logotec350,ClubAtual:pelotas,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec353={idCart:47563175,nome:'G.Nunnes fc II',nomeLogin:'Gabriel Nunes',nomePess:'opcional',anoEnt:2023,logo:logotec353,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec354={idCart:25298623,nome:'Galãoarenamrv27',nomeLogin:'Diego',nomePess:'opcional',anoEnt:2023,logo:logotec354,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec355={idCart:28956669,nome:'Real Madrid blu',nomeLogin:' Ítalo',nomePess:'opcional',anoEnt:2023,logo:logotec355,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec356={idCart:1451153,nome:'gladiadhor',nomeLogin:'Luiz Sérgio',nomePess:'opcional',anoEnt:2023,logo:logotec356,ClubAtual:sousa,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec357={idCart:1702269,nome:'HanauerFC',nomeLogin:' Davi Hanauer',nomePess:'opcional',anoEnt:2023,logo:logotec357,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec358={idCart:44509620,nome:'Heitor ousadia',nomeLogin:' Heitor silva',nomePess:'opcional',anoEnt:2023,logo:logotec358,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec361={idCart:27499403,nome:'Jana10',nomeLogin:' Janaína',nomePess:'opcional',anoEnt:2023,logo:logotec361,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec362={idCart:934089,nome:'Japa verde',nomeLogin:' Renato Y.',nomePess:'opcional',anoEnt:2023,logo:logotec362,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec363={idCart:11570530,nome:'jbc levita',nomeLogin:'Mazinho',nomePess:'opcional',anoEnt:2023,logo:logotec363,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec364={idCart:23673,nome:'jcunit',nomeLogin:' José carlos',nomePess:'opcional',anoEnt:2023,logo:logotec364,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec365={idCart:10009179,nome:'jefinhordc',nomeLogin:' jeferson machado',nomePess:'opcional',anoEnt:2023,logo:logotec365,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec366={idCart:1174618,nome:'jgbarreto',nomeLogin:' galvao',nomePess:'opcional',anoEnt:2023,logo:logotec366,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec367={idCart:14212785,nome:'JGMiranda FC',nomeLogin:' Igor Miranda',nomePess:'opcional',anoEnt:2023,logo:logotec367,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec368={idCart:45142162,nome:'José de Souza 23',nomeLogin:'José de Souza Costa',nomePess:'opcional',anoEnt:2023,logo:logotec368,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec369={idCart:28713755,nome:'JoSousa Piscinas',nomeLogin:'Danone2009',nomePess:'opcional',anoEnt:2023,logo:logotec369,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec370={idCart:18453759,nome:'Clubjs FC',nomeLogin:' Juliana',nomePess:'opcional',anoEnt:2023,logo:logotec370,ClubAtual:morrinhos,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec371={idCart:45397826,nome:'KING YMORTAL X',nomeLogin:'Piery Gruber',nomePess:'opcional',anoEnt:2023,logo:logotec371,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec372={idCart:47722730,nome:'L.R.5 FC #3',nomeLogin:'Leonardo',nomePess:'opcional',anoEnt:2023,logo:logotec372,ClubAtual:azuriz,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec373={idCart:45217872,nome:'La Volpe SC',nomeLogin:'Moises Giffoni',nomePess:'opcional',anoEnt:2023,logo:logotec373,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec374={idCart:25721023,nome:'LambariDeBotas',nomeLogin:'João Rodrigo Zaremba',nomePess:'opcional',anoEnt:2023,logo:logotec374,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec375={idCart:29540979,nome:'leuzinrlx09',nomeLogin:'Leonardo WEber',nomePess:'opcional',anoEnt:2023,logo:logotec375,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec377={idCart:29826644,nome:'LUKINHA ALS',nomeLogin:'LUCAS',nomePess:'opcional',anoEnt:2023,logo:logotec377,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec378={idCart:44510056,nome:'m.a.d.s.d.s2024',nomeLogin:'sidimar',nomePess:'opcional',anoEnt:2023,logo:logotec378,ClubAtual:tupi,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec379={idCart:25299790,nome:'M4nchester Cidade',nomeLogin:'Caf4el',nomePess:'opcional',anoEnt:2023,logo:logotec379,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec380={idCart:7906582,nome:'MANO A MANO rs',nomeLogin:' Caio Victor',nomePess:'opcional',anoEnt:2023,logo:logotec380,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec381={idCart:21707896,nome:'Mathzera Club',nomeLogin:'Math',nomePess:'opcional',anoEnt:2023,logo:logotec381,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec382={idCart:579301,nome:'Megaron FC',nomeLogin:' Lendel Megaron',nomePess:'opcional',anoEnt:2023,logo:logotec382,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec383={idCart:3352035,nome:'MiI Grau FC',nomeLogin:'Rhyan',nomePess:'opcional',anoEnt:2023,logo:logotec383,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec384={idCart:19208620,nome:'Milan Goiano ',nomeLogin:'Rafael Washington',nomePess:'opcional',anoEnt:2023,logo:logotec384,ClubAtual:saoraimundorr,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec385={idCart:28865513,nome:'MORATO RAPTORS',nomeLogin:' Marcus Morato',nomePess:'opcional',anoEnt:2023,logo:logotec385,ClubAtual:riverpi,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec386={idCart:10030330,nome:'motoclubefc',nomeLogin:' valdeci',nomePess:'opcional',anoEnt:2023,logo:logotec386,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec387={idCart:47920313,nome:'Muito Pontuado',nomeLogin:' Pedro',nomePess:'opcional',anoEnt:2023,logo:logotec387,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec388={idCart:551030,nome:'NAPSTER FC',nomeLogin:'NAPSTER',nomePess:'opcional',anoEnt:2023,logo:logotec388,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec389={idCart:59413,nome:'nes fc',nomeLogin:' mauricioandre',nomePess:'opcional',anoEnt:2023,logo:logotec389,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec390={idCart:28701291,nome:'Nossa Cara E.C',nomeLogin:' Fagner Lopes',nomePess:'opcional',anoEnt:2023,logo:logotec390,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec391={idCart:2441361,nome:'Nunes e Silva',nomeLogin:' rogerio nunes',nomePess:'opcional',anoEnt:2023,logo:logotec391,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec392={idCart:47687248,nome:'O paredão 86',nomeLogin:'Tiago Rodrigues',nomePess:'opcional',anoEnt:2023,logo:logotec392,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec393={idCart:47530290,nome:'Oh BRABO S.C',nomeLogin:'Joseildo',nomePess:'opcional',anoEnt:2023,logo:logotec393,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec394={idCart:25928131,nome:'OnifledNetStore',nomeLogin:'Pvaí 9 8807 7777',nomePess:'opcional',anoEnt:2023,logo:logotec394,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec395={idCart:79155,nome:'Os Craquees F.C.',nomeLogin:' Bruno Silva',nomePess:'opcional',anoEnt:2023,logo:logotec395,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec396={idCart:35350,nome:'OSD Futebol 2024',nomeLogin:'Dr. Scarton',nomePess:'opcional',anoEnt:2023,logo:logotec396,ClubAtual:aparecidense,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec397={idCart:497697,nome:'OsMegas F.C',nomeLogin:' WANDERSONBARCELOS',nomePess:'opcional',anoEnt:2023,logo:logotec397,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec398={idCart:26525753,nome:'Paato2',nomeLogin:' Julio Cezar',nomePess:'opcional',anoEnt:2023,logo:logotec398,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec399={idCart:44982294,nome:'palestra camp',nomeLogin:'Gabriel palestra',nomePess:'opcional',anoEnt:2023,logo:logotec399,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec400={idCart:15959866,nome:'Palestra MC',nomeLogin:'Samuel Moura',nomePess:'opcional',anoEnt:2023,logo:logotec400,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec401={idCart:28779264,nome:'Palmeiras rsm3',nomeLogin:'Rony',nomePess:'opcional',anoEnt:2023,logo:logotec401,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec402={idCart:3349958,nome:'Patishow',nomeLogin:' Alessandro Patias',nomePess:'opcional',anoEnt:2023,logo:logotec402,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec403={idCart:27048538,nome:'pé de anjinho fc',nomeLogin:' rose',nomePess:'opcional',anoEnt:2023,logo:logotec403,ClubAtual:gama,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec404={idCart:19921845,nome:'Pelezinho Team ',nomeLogin:' Juliano Araujo',nomePess:'opcional',anoEnt:2023,logo:logotec404,ClubAtual:tiradentesce,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec405={idCart:9604425,nome:'Perna de ferro jf',nomeLogin:'Thiago nascimento',nomePess:'opcional',anoEnt:2023,logo:logotec405,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec406={idCart:10201213,nome:'PIAIA EC',nomeLogin:'Eduardo Piaia',nomePess:'opcional',anoEnt:2023,logo:logotec406,ClubAtual:santoandre,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec407={idCart:3269763,nome:'pipi_de_grilo2',nomeLogin:'arara',nomePess:'opcional',anoEnt:2023,logo:logotec407,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec408={idCart:27608988,nome:'pirata do gol',nomeLogin:'deda',nomePess:'opcional',anoEnt:2023,logo:logotec408,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec409={idCart:702879,nome:'PORTÃO 1O F.C',nomeLogin:' Gabriel Reichow',nomePess:'opcional',anoEnt:2023,logo:logotec409,ClubAtual:juventusdejaragua,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec411={idCart:2702976,nome:'Quem vai FC',nomeLogin:'Victor Correia',nomePess:'opcional',anoEnt:2023,logo:logotec411,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec412={idCart:6466384,nome:'Rapariga Log',nomeLogin:' Valério',nomePess:'opcional',anoEnt:2023,logo:logotec412,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec413={idCart:146955,nome:'RATOS SRN',nomeLogin:' LUCIANO WOLFF',nomePess:'opcional',anoEnt:2023,logo:logotec413,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec416={idCart:18461302,nome:'Rosso Nero',nomeLogin:' Vitor Henon',nomePess:'opcional',anoEnt:2023,logo:logotec416,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec417={idCart:8183483,nome:'S.C.Samber',nomeLogin:' Nildo Sou2a',nomePess:'opcional',anoEnt:2023,logo:logotec417,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec418={idCart:18203268,nome:'S.E Empolgual',nomeLogin:'Pedro Gualtieri',nomePess:'opcional',anoEnt:2023,logo:logotec418,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec419={idCart:47567453,nome:'S.E. Pudin',nomeLogin:' Tiago',nomePess:'opcional',anoEnt:2023,logo:logotec419,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec420={idCart:30007130,nome:'Santos Boy FC',nomeLogin:'Matheus Santos',nomePess:'opcional',anoEnt:2023,logo:logotec420,ClubAtual:resende,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec421={idCart:3928117,nome:'SB LAYON FC',nomeLogin:' Mychael Alves',nomePess:'opcional',anoEnt:2023,logo:logotec421,ClubAtual:vitoriadastabocas,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec422={idCart:99083,nome:'SC Golden City',nomeLogin:' Vinícius Meira',nomePess:'opcional',anoEnt:2023,logo:logotec422,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec423={idCart:25633852,nome:'SC Zé do Ouro',nomeLogin:'Elon Musk',nomePess:'opcional',anoEnt:2023,logo:logotec423,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec424={idCart:14452723,nome:'SELETUS BLINDADO',nomeLogin:' Tiago Conceição',nomePess:'opcional',anoEnt:2023,logo:logotec424,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec425={idCart:2452097,nome:'Seleverde23 F.C',nomeLogin:' Dheider Silva',nomePess:'opcional',anoEnt:2023,logo:logotec425,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec426={idCart:19179165,nome:'Epicteto FC13',nomeLogin:' Tiago Gomes',nomePess:'opcional',anoEnt:2023,logo:logotec426,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec427={idCart:13934475,nome:'SEPVAL FC',nomeLogin:'Valdenilson Brandão',nomePess:'opcional',anoEnt:2023,logo:logotec427,ClubAtual:villanovamg,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec428={idCart:3495400,nome:'Sporting Cruz FC',nomeLogin:' Carlos Drogba',nomePess:'opcional',anoEnt:2023,logo:logotec428,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec429={idCart:14933289,nome:'supribem ',nomeLogin:'Douglas',nomePess:'opcional',anoEnt:2023,logo:logotec429,ClubAtual:goias,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec430={idCart:348893,nome:'London Gerlingen F.C.F ',nomeLogin:' Pai da Luiza',nomePess:'opcional',anoEnt:2023,logo:logotec430,ClubAtual:quinzedenovembro,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec431={idCart:389166,nome:'Team Napolli',nomeLogin:'Filipe Rocha',nomePess:'opcional',anoEnt:2023,logo:logotec431,ClubAtual:coritiba,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec432={idCart:763624,nome:'tel_318 FC',nomeLogin:' Marcelo (Tétél)',nomePess:'opcional',anoEnt:2023,logo:logotec432,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec433={idCart:21968,nome:'Thekila FC',nomeLogin:' Isadora Zucateli',nomePess:'opcional',anoEnt:2023,logo:logotec433,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec434={idCart:2649806,nome:'Timão P7 F.C.',nomeLogin:'Sr. Felisberto',nomePess:'opcional',anoEnt:2023,logo:logotec434,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec436={idCart:10209169,nome:'vagnermitofc',nomeLogin:' buchecha',nomePess:'opcional',anoEnt:2023,logo:logotec436,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec437={idCart:2509740,nome:'VAN OCAPITÃOFC',nomeLogin:' Vanderlan Almeida',nomePess:'opcional',anoEnt:2023,logo:logotec437,ClubAtual:maringa,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec438={idCart:20368660,nome:'VAND D MADRID FC',nomeLogin:'Vanderlei Mendes',nomePess:'opcional',anoEnt:2023,logo:logotec438,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec439={idCart:44597560,nome:'vandopalmeiras',nomeLogin:'vandosilva',nomePess:'opcional',anoEnt:2023,logo:logotec439,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec440={idCart:25438471,nome:'Yernba FC',nomeLogin:'Fagundos Varela',nomePess:'opcional',anoEnt:2024,logo:logotec466,ClubAtual:londrina,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec441={idCart:25275546,nome:'zona rubro negra',nomeLogin:'marcos',nomePess:'opcional',anoEnt:2023,logo:logotec441,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec442={idCart:1486081,nome:'ECC COMERCIAL FC',nomeLogin:'Lino',nomePess:'opcional',anoEnt:2023,logo:logotec442,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec444={idCart:49120944,nome:'Lukynhas Loko',nomeLogin:'Lukinhas',nomePess:'opcional',anoEnt:2024,logo:logotec444,ClubAtual:gremioanapolis,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec445={idCart:44532788,nome:'Titanium Invicto',nomeLogin:'Lisca Doido',nomePess:'opcional',anoEnt:2024,logo:logotec445,ClubAtual:gloria,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec446={idCart:28864248,nome:'RF PRESTADORA DE SERVIÇOS',nomeLogin:'Ricardo de Freitas',nomePess:'opcional',anoEnt:2024,logo:logotec446,ClubAtual:brusque,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec447={idCart:317063,nome:'S P A L',nomeLogin:'Gabriel Olinto',nomePess:'opcional',anoEnt:2024,logo:logotec447,ClubAtual:fluminensepi,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec448={idCart:15455346,nome:'Piffataque',nomeLogin:'Adriano gomes',nomePess:'opcional',anoEnt:2024,logo:logotec448,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec449={idCart:44983624,nome:'AndersonFLCSC',nomeLogin:'Anderson',nomePess:'opcional',anoEnt:2024,logo:logotec449,ClubAtual:portuguesa,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec450={idCart:15715586,nome:'Consultório RM FC',nomeLogin:'Rômulo Mota',nomePess:'opcional',anoEnt:2024,logo:logotec450,ClubAtual:tombense,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec451={idCart:2221019,nome:'Laspezzia fc',nomeLogin:'Jr belo',nomePess:'opcional',anoEnt:2024,logo:logotec451,ClubAtual:portuguesarj,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec452={idCart:45078140,nome:'Madrid Meia Boca ',nomeLogin:'Alex Mazetto',nomePess:'opcional',anoEnt:2024,logo:logotec452,ClubAtual:bahiadefeira,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec453={idCart:45587843,nome:'AABB Camaquã ',nomeLogin:'taylor',nomePess:'opcional',anoEnt:2024,logo:logotec453,ClubAtual:saoluizrs,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec454={idCart:15452829,nome:'Silvio Rato FC',nomeLogin:'Silvio',nomePess:'opcional',anoEnt:2024,logo:logotec454,ClubAtual:olaria,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec455={idCart:25302209,nome:'KONANN FC ',nomeLogin:'RONAN SOUZA',nomePess:'opcional',anoEnt:2024,logo:logotec455,ClubAtual:afogados,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec456={idCart:11365044,nome:'CearáJaguar19',nomeLogin:'Davi Oliveira',nomePess:'opcional',anoEnt:2024,logo:logotec456,ClubAtual:botafogopb,titulo1:'Libertadores 2023 (Dep Tachira)',titulo2:'Mundial 2023 (Dep Tachira)',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec457={idCart:51490,nome:'CRF Lendário',nomeLogin:'Diego',nomePess:'opcional',anoEnt:2024,logo:logotec457,ClubAtual:ituano,titulo1:'Campeão Sulamericana 2021',titulo2:' Campeão Sulamericana 2023 (Bolivar)',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec458={idCart:19164747,nome:'Insalubres',nomeLogin:'Rodrigo Osório',nomePess:'opcional',anoEnt:2024,logo:logotec458,ClubAtual:botafogosp,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec459={idCart:9411429,nome:'VOZÃO ELITE JAGUAR',nomeLogin:'Henrique Rocha',nomePess:'opcional',anoEnt:2024,logo:logotec459,ClubAtual:icasa,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec460={idCart:27894799,nome:'Só Rataao FC',nomeLogin:'Henriqdosmega',nomePess:'opcional',anoEnt:2024,logo:logotec460,ClubAtual:ibis,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec461={idCart:28657300,nome:'Azular FC',nomeLogin:'Marcela Zanatta',nomePess:'opcional',anoEnt:2024,logo:logotec461,ClubAtual:pacajus,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec462={idCart:22450227,nome:'Othavio FBPA',nomeLogin:'Othavio Henrique',nomePess:'opcional',anoEnt:2024,logo:logotec462,ClubAtual:andraus,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec463={idCart:315949,nome:'Club Real Poa',nomeLogin:'Claudio Souza',nomePess:'opcional',anoEnt:2024,logo:logotec463,ClubAtual:ypirangars,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec464={idCart:14661641,nome:'É Dmais Team',nomeLogin:'Ribeiro',nomePess:'opcional',anoEnt:2024,logo:logotec464,ClubAtual:voltaredonda,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec465={idCart:13979610,nome:'Seja o que Deus quiser E.C',nomeLogin:'Lucas Peres Vieira',nomePess:'opcional',anoEnt:2024,logo:logotec465,ClubAtual:brasiliense,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec466={idCart:25436191,nome:'Footbeer FC',nomeLogin:'Leandro Rodrigues',nomePess:'opcional',anoEnt:2024,logo:logotec466,ClubAtual:londrina,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec467={idCart:25428676,nome:'GAÚCHO MACHO FC',nomeLogin:'Alexandre Paim',nomePess:'opcional',anoEnt:2024,logo:logotec467,ClubAtual:boaesporte,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec468={idCart:26554990,nome:'Varadero',nomeLogin:'Salt',nomePess:'opcional',anoEnt:2024,logo:logotec468,ClubAtual:operariopr,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec469={idCart:1908560,nome:'Carlasco FC',nomeLogin:'Carlos Francisco',nomePess:'opcional',anoEnt:2024,logo:logotec469,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec470={idCart:337551,nome:'RB7 FC',nomeLogin:'Ramon Rodrigues',nomePess:'opcional',anoEnt:2024,logo:logotec470,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec471={idCart:13941428,nome:'JAMIAS',nomeLogin:'Danilo Oliveira',nomePess:'opcional',anoEnt:2024,logo:logotec471,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec472={idCart:26686459,nome:'Kevino FC',nomeLogin:'Dias',nomePess:'opcional',anoEnt:2024,logo:logotec472,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec473={idCart:25575031,nome:'Gui do Bar',nomeLogin:'Gui do bar',nomePess:'opcional',anoEnt:2024,logo:logotec473,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec474={idCart:18646905,nome:'ANA.P EC',nomeLogin:'Ana Paula Ribeiro',nomePess:'opcional',anoEnt:2024,logo:logotec474,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec475={idCart:5393194,nome:'Madeirada 10',nomeLogin:'Eric M Santana',nomePess:'opcional',anoEnt:2024,logo:logotec475,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec476={idCart:24564829,nome:'TIME DA RUA 91',nomeLogin:'Danilo Oliveira',nomePess:'opcional',anoEnt:2024,logo:logotec476,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec477={idCart:442750,nome:'LinekãoFC',nomeLogin:'Lineker',nomePess:'opcional',anoEnt:2024,logo:logotec477,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec478={idCart:27337884,nome:'Junasso Ousado',nomeLogin:'Junasso 13',nomePess:'opcional',anoEnt:2024,logo:logotec478,ClubAtual:ypirangars,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec479={idCart:1195649,nome:'Junasso 13',nomeLogin:'Junasso 13',nomePess:'opcional',anoEnt:2024,logo:logotec479,ClubAtual:barcelonaba,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec480={idCart:49375995,nome:'11Milans FC',nomeLogin:'Enzo Milan',nomePess:'opcional',anoEnt:2024,logo:logotec480,ClubAtual:saobernardo,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec481={idCart:13982371,nome:'Milaneros',nomeLogin:'Allan Milan',nomePess:'opcional',anoEnt:2024,logo:logotec481,ClubAtual:internacionalsp,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec482={idCart:49931540,nome:'Canoas Alvinegra CSC',nomeLogin:'Canoas CSC',nomePess:'opcional',anoEnt:2024,logo:logotec482,ClubAtual:guaranydesobral,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec483={idCart:49930349,nome:'Consulado Alvinegro de Canoas ',nomeLogin:'Ceará em Canoas',nomePess:'opcional',anoEnt:2024,logo:logotec483,ClubAtual:iguatu,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec484={idCart:49939597,nome:'CA Los Andes',nomeLogin:'Mil Rayitas',nomePess:'opcional',anoEnt:2024,logo:logotec484,ClubAtual:juazeirense,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec485={idCart:49931445,nome:'Rejane BF FC',nomeLogin:'Rejane BF',nomePess:'opcional',anoEnt:2024,logo:logotec485,ClubAtual:floresta,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec486={idCart:28185386,nome:'Vasdigão JR 01',nomeLogin:'Digão',nomePess:'opcional',anoEnt:2024,logo:logotec486,ClubAtual:cerroporteno,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec487={idCart:8568216,nome:'13@RBFC.',nomeLogin:' Ivanildo',nomePess:'opcional',anoEnt:2024,logo:logotec487,ClubAtual:independiente,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec488={idCart:2839656,nome:'Pai D egua F.C',nomeLogin:'Eduardo de Paula',nomePess:'opcional',anoEnt:2024,logo:logotec488,ClubAtual:ldu,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec489={idCart:28657026,nome:'TOP GUN MIG 21',nomeLogin:'MAVERICK',nomePess:'opcional',anoEnt:2024,logo:logotec489,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec490={idCart:28743273,nome:'FjvNanda',nomeLogin:'Fernanda Keller',nomePess:'opcional',anoEnt:2024,logo:logotec490,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec491={idCart:47758767,nome:'AS MAGISTRAIS',nomeLogin:'Amanda',nomePess:'opcional',anoEnt:2024,logo:logotec491,ClubAtual:colocolo,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec492={idCart:3551712,nome:'Theoceleste',nomeLogin:'Antônio Henrique',nomePess:'opcional',anoEnt:2024,logo:logotec492,ClubAtual:estudiantesdelaplata,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec493={idCart:2255924,nome:'Time Do Tcho',nomeLogin:' Paulinho Tcho',nomePess:'opcional',anoEnt:2024,logo:logotec493,ClubAtual:penarol,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec494={idCart:49243892,nome:'Leko09',nomeLogin:'Leandro Medeiros',nomePess:'opcional',anoEnt:2024,logo:logotec494,ClubAtual:sanlorenzo,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec495={idCart:44555353,nome:'Silent BR F.C',nomeLogin:'Shiiiiiiu',nomePess:'opcional',anoEnt:2024,logo:logotec495,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec496={idCart:28728442,nome:'TickettoRide2',nomeLogin:' Jackson A Lovato',nomePess:'opcional',anoEnt:2024,logo:logotec496,ClubAtual:rosariocentral,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec497={idCart:26322994,nome:'CARTOLOUKOS LOK',nomeLogin:' Zé Olivo',nomePess:'opcional',anoEnt:2024,logo:logotec497,ClubAtual:univcatolicachi,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec498={idCart:47694757,nome:'CARTOLOUKÃO F.C',nomeLogin:'Loukão',nomePess:'opcional',anoEnt:2024,logo:logotec498,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec499={idCart:25503742,nome:'PaBarrosSPFC',nomeLogin:' Paola Barros',nomePess:'opcional',anoEnt:2025,logo:logotec499,ClubAtual:olimpia,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec500={idCart:48363473,nome:'Pinaa11',nomeLogin:' Rafael Pina',nomePess:'opcional',anoEnt:2026,logo:logotec500,ClubAtual:thestrongest,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec501={idCart:1719768,nome:'Kalldoran FC',nomeLogin:'Kaio Brito',nomePess:'opcional',anoEnt:2027,logo:logotec501,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec502={idCart:24495613,nome:'Tcsocio.01',nomeLogin:' Glaeciocartola',nomePess:'opcional',anoEnt:2028,logo:logotec502,ClubAtual:americadecali,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec503={idCart:47517649,nome:'spokxt.ofc',nomeLogin:'adelson',nomePess:'opcional',anoEnt:2029,logo:logotec503,ClubAtual:nacionaluru,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec504={idCart:60343,nome:'Super Asno F C',nomeLogin:' Edilson',nomePess:'opcional',anoEnt:2030,logo:logotec504,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec505={idCart:698716,nome:'Big2L FC',nomeLogin:'Leley Valença',nomePess:'opcional',anoEnt:2031,logo:logotec505,ClubAtual:velezsarsfield,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec506={idCart:14027924,nome:'#BRASILEIRÃO3#',nomeLogin:'ADM SINVAL 20 MITOS',nomePess:'opcional',anoEnt:2032,logo:logotec506,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec507={idCart:22558066,nome:'omc',nomeLogin:'ozeias cardoso',nomePess:'opcional',anoEnt:2033,logo:logotec507,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec508={idCart:1049620,nome:'Fogão_016',nomeLogin:' Mário Tonetto',nomePess:'opcional',anoEnt:2034,logo:logotec508,ClubAtual:racingarg,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec509={idCart:5784672,nome:'RSAL SEP',nomeLogin:' Renato Salomão',nomePess:'opcional',anoEnt:2035,logo:logotec509,ClubAtual:univdechile,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec510={idCart:18065193,nome:'Psiquê',nomeLogin:'Nina',nomePess:'opcional',anoEnt:2036,logo:logotec510,ClubAtual:bolivar,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec511={idCart:2347020,nome:'MACS Clube',nomeLogin:' Michel',nomePess:'opcional',anoEnt:2037,logo:logotec511,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec512={idCart:16438948,nome:'JoGa YY JoGa 03',nomeLogin:'Jeff Silva',nomePess:'opcional',anoEnt:2038,logo:logotec512,ClubAtual:inddelvalle,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec513={idCart:42254,nome:'Kappa Delgazzo',nomeLogin:'Rubens Carvalho Bah',nomePess:'opcional',anoEnt:2039,logo:logotec513,ClubAtual:colon,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec514={idCart:6806095,nome:'Freestyles Fc.',nomeLogin:'Willian Alves',nomePess:'opcional',anoEnt:2040,logo:logotec514,ClubAtual:alianzalima,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec515={idCart:28439177,nome:'Corrêa 26',nomeLogin:'Filipi',nomePess:'opcional',anoEnt:2041,logo:logotec515,ClubAtual:bocajuniors,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec516={idCart:1395427,nome:'S. C. FOXfodão',nomeLogin:'Fernando Soares',nomePess:'opcional',anoEnt:2042,logo:logotec516,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec517={idCart:28880349,nome:'fcGaleguin',nomeLogin:'galeguinho',nomePess:'opcional',anoEnt:2043,logo:logotec517,ClubAtual:newellsoldboys,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec518={idCart:857638,nome:'Emerson SPFC 93',nomeLogin:'Emerson Cruz',nomePess:'opcional',anoEnt:2044,logo:logotec518,ClubAtual:criciuma,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec519={idCart:29823068,nome:'ANDFLA20',nomeLogin:'Anderson silva',nomePess:'opcional',anoEnt:2045,logo:logotec519,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec520={idCart:8558700,nome:'Melki FC',nomeLogin:' Renan Melki de souza',nomePess:'opcional',anoEnt:2046,logo:logotec520,ClubAtual:atleticonacional,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec521={idCart:28703311,nome:'GERALDO A21',nomeLogin:' CAM 13',nomePess:'opcional',anoEnt:2047,logo:logotec521,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec522={idCart:25402539,nome:'OrigemRN FC',nomeLogin:'Nilmar Machado',nomePess:'opcional',anoEnt:2048,logo:logotec522,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec523={idCart:49140353,nome:'Us Brabus JS02',nomeLogin:'Jonh Textor',nomePess:'opcional',anoEnt:2049,logo:logotec523,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec524={idCart:7875990,nome:'FRB MEGA LIGA',nomeLogin:' Fabiano Baron',nomePess:'opcional',anoEnt:2050,logo:logotec524,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec525={idCart:14873961,nome:'Abbehusen Black',nomeLogin:'Junior Abbehusen',nomePess:'opcional',anoEnt:2051,logo:logotec525,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec526={idCart:28700431,nome:'MATHEUSPRO01',nomeLogin:' Matheus Felix',nomePess:'opcional',anoEnt:2052,logo:logotec526,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec527={idCart:18082421,nome:'Pagasse fc',nomeLogin:' João Vitor',nomePess:'opcional',anoEnt:2053,logo:logotec527,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
  let tec528={idCart:26189221,nome:'BADINVIRACOPO.FC',nomeLogin:'BADIN  ',nomePess:'opcional',anoEnt:2024,logo:logotec528,ClubAtual:alianzalima,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
let tec529={idCart:25776806,nome:'Alinemoura_FC',nomeLogin:'Aline Moura',nomePess:'opcional',anoEnt:2024,logo:logotec529,ClubAtual:bocajuniors,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
let tec530={idCart:26355697,nome:'TriunfaI FC',nomeLogin:'Stefano Moura',nomePess:'opcional',anoEnt:2024,logo:logotec530,ClubAtual:inddelvalle,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
let tec531={idCart:936749,nome:'Fumo Neles Team FC',nomeLogin:'Bruno poê',nomePess:'opcional',anoEnt:2024,logo:logotec531,ClubAtual:sanlorenzo,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
let tec532={idCart:537976,nome:'Graciano F.R.',nomeLogin:'Murilo Graciano',nomePess:'opcional',anoEnt:2024,logo:logotec532,ClubAtual:univdechile,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
let tec533={idCart:17866028,nome:'MEU LEÃO É PENTA',nomeLogin:'Júnior Benevides',nomePess:'opcional',anoEnt:2024,logo:logotec533,ClubAtual:ldu,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
let tec534={idCart:13954201,nome:'PROF_WILL FC',nomeLogin:'William Silva',nomePess:'opcional',anoEnt:2024,logo:logotec534,ClubAtual:penarol,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
let tec535={idCart:141615,nome:'Tremendãojf FC',nomeLogin:'Tremendão',nomePess:'opcional',anoEnt:2024,logo:logotec535,ClubAtual:racingarg,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
let tec536={idCart:44565875,nome:'Cartola do Menegassi Taxista',nomeLogin:'CESAR MENEGASSI',nomePess:'opcional',anoEnt:2024,logo:logotec536,ClubAtual:riverplate,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
let tec537={idCart:947934,nome:'AMERICA DO MEX S.A',nomeLogin:'Juliano Bueno',nomePess:'opcional',anoEnt:2024,logo:logotec537,ClubAtual:rosariocentral,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
let tec543={idCart:25370187,nome:'Toniollo',nomeLogin:'Rafael Gassen',nomePess:'opcional',anoEnt:2024,logo:logotec543,ClubAtual:banfield,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
let tec541={idCart:917297,nome:'mas q bons  f.c',nomeLogin:'matheus vinicius',nomePess:'opcional',anoEnt:2024,logo:logotec541,ClubAtual:atleticonacional,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
let tec542={idCart:100756,nome:'Palestra Fox ',nomeLogin:'Paulo Abreu',nomePess:'opcional',anoEnt:2024,logo:logotec542,ClubAtual:americadecali,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};

let tec544={idCart:22602986,nome:'Colchonero BH',nomeLogin:'Paulo Abreu',nomePess:'opcional',anoEnt:2024,logo:logotec544,ClubAtual:barcelonasc,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
let tec545={idCart:13945234,nome:'Psycos F.C',nomeLogin:'Gerllan Ferreira',nomePess:'opcional',anoEnt:2024,logo:logotec545,ClubAtual:danubio,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
let tec546={idCart:49695507,nome:'Zeca Pagordinho23',nomeLogin:'Júlio David',nomePess:'opcional',anoEnt:2024,logo:logotec546,ClubAtual:amazonas,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
let tec547={idCart:47714615,nome:'Kugland FC',nomeLogin:'Bruno Kugland',nomePess:'opcional',anoEnt:2024,logo:logotec547,ClubAtual:depcali,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
let tec548={idCart:651064,nome:'Cearúcho FC',nomeLogin:'Joao Santos',nomePess:'opcional',anoEnt:2024,logo:logotec548,ClubAtual:emelec,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
let tec549={idCart:49301067,nome:'Fogarty SFC',nomeLogin:'Guilherme Gobbi',nomePess:'opcional',anoEnt:2024,logo:logotec549,ClubAtual:guaranipar,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
let tec550={idCart:12008991,nome:'S.C. Cevadas Paulista',nomeLogin:'Thiago A. Wolfmann',nomePess:'opcional',anoEnt:2024,logo:logotec550,ClubAtual:huachipato,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
let tec551={idCart:124480,nome:'Não Vale Bomba FC',nomeLogin:'Adriano Kunzer',nomePess:'opcional',anoEnt:2024,logo:logotec551,ClubAtual:indmedellín,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
let tec552={idCart:25682349,nome:'Tabajarafc.fc',nomeLogin:'_x_',nomePess:'opcional',anoEnt:2024,logo:logotec552,ClubAtual:lanus,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
let tec553={idCart:619717,nome:'Storys FC',nomeLogin:'Helielver junior',nomePess:'opcional',anoEnt:2024,logo:logotec553,ClubAtual:liverpool,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
let tec554={idCart:3506124,nome:'Feirense. S A',nomeLogin:'João',nomePess:'opcional',anoEnt:2024,logo:logotec554,ClubAtual:nacionalpotosi,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
let tec555={idCart:8219014,nome:'Macundu RF17',nomeLogin:'Rodrigo Faria',nomePess:'opcional',anoEnt:2024,logo:logotec555,ClubAtual:oncecaldas,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
let tec556={idCart:47734862,nome:'Tsinopoli',nomeLogin:'Thiago Sinopoli',nomePess:'opcional',anoEnt:2024,logo:logotec556,ClubAtual:quilmes,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
let tec557={idCart:16353113,nome:'Master Flafc',nomeLogin:'valdeci',nomePess:'opcional',anoEnt:2024,logo:logotec557,ClubAtual:santafe,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
let tec558={idCart:17428680,nome:'Mitou!La ele',nomeLogin:'Heberton',nomePess:'opcional',anoEnt:2024,logo:logotec558,ClubAtual:sportingcristal,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
let tec559={idCart:3719194,nome:'Chucrismo Puro F. C.',nomeLogin:'Bagualíssimo',nomePess:'opcional',anoEnt:2018,logo:logotec559,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
let tec560={idCart:5308111,nome:'Rflores FC',nomeLogin:'Marcos Flores',nomePess:'opcional',anoEnt:2018,logo:logotec560,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
let tec561={idCart:57181,nome:'Bafulinos FC',nomeLogin:'Bebeto de Freitas',nomePess:'opcional',anoEnt:2018,logo:logotec561,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
let tec562={idCart:0,nome:'Alvirubro FC SM',nomeLogin:'0',nomePess:'opcional',anoEnt:2018,logo:logotec562,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
let tec563={idCart:2821100,nome:'Cruzeiro 7697',nomeLogin:'Douglascd',nomePess:'opcional',anoEnt:2021,logo:logotec563,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
let tec564={idCart:591313,nome:'JOSE LAURO FC',nomeLogin:'José Lauro',nomePess:'opcional',anoEnt:2019,logo:logotec564,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
let tec565={idCart:0,nome:'DECORPEÇAS FC',nomeLogin:'0',nomePess:'opcional',anoEnt:2021,logo:logotec565,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};
let tec566={idCart:13909491,nome:'HANNOVER-1987 F.C',nomeLogin:'Eduardo Paulista',nomePess:'opcional',anoEnt:2021,logo:logotec566,ClubAtual:semclube,titulo1:'',titulo2:'',titulo3:'',titulo4:'',titulo5:'',titulo6:'',titulo7:'',titulo8:'',titulo9:'',titulo10:'',titulo11:'',titulo12:'',titulo13:'',titulo14:'',titulo15:'',titulo16:'',titulo17:'',titulo18:'',titulo19:'',titulo20:''};


  
let Grupo_A=[logoargentinosjrs,argentinosjrs,'7','2','1','0','4','1',tec523,logoathletico,athletico,'3','0','3','0','0','0',tec4,logodepcali,depcali,'2','0','2','1','0','1',tec547,logonacionalpotosi,nacionalpotosi,'2','0','2','1','1','3',tec554];
let jogos_A=[logoargentinosjrs,'Argentinos Jrs','(33,51)','0','0','(36,81)','Athletico',logoathletico,logodepcali,'Deportivo Cali','(46,21)','0','0','(45,02)','Nacional Potosí',logonacionalpotosi,logoathletico,'Athletico','(53,32)','0','0','(56,45)','Deportivo Cali',logodepcali,logonacionalpotosi,'Nacional Potosí','(69,77)','1','3','(81,2)','Argentinos Jrs',logoargentinosjrs,logoathletico,'Athletico','(38,48274)','0','0','(39,23264)','Nacional Potosí',logonacionalpotosi,logoargentinosjrs,'Argentinos Jrs','(47,58173)','1','0','(20,92464)','Deportivo Cali',logodepcali,logonacionalpotosi,'Nacional Potosí','(0)','-','-','(0)','Athletico',logoathletico,logodepcali,'Deportivo Cali','(0)','-','-','(0)','Argentinos Jrs',logoargentinosjrs,logodepcali,'Deportivo Cali','(0)','-','-','(0)','Athletico',logoathletico,logoargentinosjrs,'Argentinos Jrs','(0)','-','-','(0)','Nacional Potosí',logonacionalpotosi,logoathletico,'Athletico','(0)','-','-','(0)','Argentinos Jrs',logoargentinosjrs,logonacionalpotosi,'Nacional Potosí','(0)','-','-','(0)','Deportivo Cali',logodepcali,];

let Grupo_B=[logobanfield,banfield,'6','2','0','1','3','3',tec543,logooncecaldas,oncecaldas,'5','1','2','0','3','1',tec555,logoemelec,emelec,'4','1','1','1','2','2',tec548,logobahia,bahia,'1','0','1','2','1','3',tec84];
let jogos_B=[logobanfield,'Banfield','(49,91)','1','0','(31,91)','Bahia',logobahia,logoemelec,'Emelec','(40,81)','0','0','(46,55)','Once Caldas',logooncecaldas,logobahia,'Bahia','(68,4)','1','2','(70,27)','Emelec',logoemelec,logooncecaldas,'Once Caldas','(84,77)','3','1','(65,27)','Banfield',logobanfield,logobahia,'Bahia','(52,38119)','0','0','(54,50107)','Once Caldas',logooncecaldas,logobanfield,'Banfield','(45,38194)','1','0','(28,48383)','Emelec',logoemelec,logooncecaldas,'Once Caldas','(0)','-','-','(0)','Bahia',logobahia,logoemelec,'Emelec','(0)','-','-','(0)','Banfield',logobanfield,logoemelec,'Emelec','(0)','-','-','(0)','Bahia',logobahia,logobanfield,'Banfield','(0)','-','-','(0)','Once Caldas',logooncecaldas,logobahia,'Bahia','(0)','-','-','(0)','Banfield',logobanfield,logooncecaldas,'Once Caldas','(0)','-','-','(0)','Emelec',logoemelec,];

let Grupo_C=[logobragantino,bragantino,'7','2','1','0','4','2',tec168,logoquilmes,quilmes,'4','1','1','1','3','3',tec556,logobarcelonasc,barcelonasc,'2','0','2','1','2','3',tec544,logoguaranipar,guaranipar,'2','0','2','1','2','3',tec549];
let jogos_C=[logobarcelonasc,'Barcelona SC','(37,75)','0','0','(45,02)','Bragantino',logobragantino,logoguaranipar,'Guarani-PAR','(51,07)','0','0','(47,76)','Quilmes',logoquilmes,logobragantino,'Bragantino','(81,77)','3','2','(70,55)','Guarani-PAR',logoguaranipar,logoquilmes,'Quilmes','(81,82)','3','2','(72,57)','Barcelona SC',logobarcelonasc,logobragantino,'Bragantino','(59,90051)','1','0','(49,44151)','Quilmes',logoquilmes,logobarcelonasc,'Barcelona SC','(49,10154)','0','0','(42,46233)','Guarani-PAR',logoguaranipar,logoquilmes,'Quilmes','(0)','-','-','(0)','Bragantino',logobragantino,logoguaranipar,'Guarani-PAR','(0)','-','-','(0)','Barcelona SC',logobarcelonasc,logoguaranipar,'Guarani-PAR','(0)','-','-','(0)','Bragantino',logobragantino,logobarcelonasc,'Barcelona SC','(0)','-','-','(0)','Quilmes',logoquilmes,logobragantino,'Bragantino','(0)','-','-','(0)','Barcelona SC',logobarcelonasc,logoquilmes,'Quilmes','(0)','-','-','(0)','Guarani-PAR',logoguaranipar,];

let Grupo_D=[logochapecoense,chapecoense,'7','2','1','0','3','0',tec172,logobelgrano,belgrano,'7','2','1','0','2','0',tec170,logoliverpool,liverpool,'1','0','1','2','0','2',tec553,logohuachipato,huachipato,'1','0','1','2','0','3',tec550];
let jogos_D=[logobelgrano,'Belgrano','(42,21)','0','0','(39,81)','Chapecoense',logochapecoense,logohuachipato,'Huachipato','(46,6)','0','0','(41,3)','Liverpool',logoliverpool,logochapecoense,'Chapecoense','(76,62)','2','0','(54,77)','Huachipato',logohuachipato,logoliverpool,'Liverpool','(52,42)','0','1','(69,77)','Belgrano',logobelgrano,logochapecoense,'Chapecoense','(59,63055)','1','0','(35,23311)','Liverpool',logoliverpool,logobelgrano,'Belgrano','(55,98082)','1','0','(40,28251)','Huachipato',logohuachipato,logoliverpool,'Liverpool','(0)','-','-','(0)','Chapecoense',logochapecoense,logohuachipato,'Huachipato','(0)','-','-','(0)','Belgrano',logobelgrano,logohuachipato,'Huachipato','(0)','-','-','(0)','Chapecoense',logochapecoense,logobelgrano,'Belgrano','(0)','-','-','(0)','Liverpool',logoliverpool,logochapecoense,'Chapecoense','(0)','-','-','(0)','Belgrano',logobelgrano,logoliverpool,'Liverpool','(0)','-','-','(0)','Huachipato',logohuachipato,];

let Grupo_E=[logohuracan,huracan,'7','2','1','0','3','0',tec490,logofluminense,fluminense,'6','2','0','1','2','1',tec87,logomillonarios,millonarios,'4','1','1','1','2','1',tec445,logocobresal,cobresal,'0','0','0','3','0','5',tec461];
let jogos_E=[logocobresal,'Cobresal','(27,27)','0','1','(42,52)','Fluminense',logofluminense,logohuracan,'Huracan','(49,85)','0','0','(47,46)','Millonarios',logomillonarios,logofluminense,'Fluminense','(53,37)','0','1','(62,82)','Huracan',logohuracan,logomillonarios,'Millonarios','(72,02)','2','0','(58,4)','Cobresal',logocobresal,logofluminense,'Fluminense','(52,78117)','1','0','(28,38387)','Millonarios',logomillonarios,logocobresal,'Cobresal','(42,29236)','0','2','(71,23009)','Huracan',logohuracan,logomillonarios,'Millonarios','(0)','-','-','(0)','Fluminense',logofluminense,logohuracan,'Huracan','(0)','-','-','(0)','Cobresal',logocobresal,logohuracan,'Huracan','(0)','-','-','(0)','Fluminense',logofluminense,logocobresal,'Cobresal','(0)','-','-','(0)','Millonarios',logomillonarios,logofluminense,'Fluminense','(0)','-','-','(0)','Cobresal',logocobresal,logomillonarios,'Millonarios','(0)','-','-','(0)','Huracan',logohuracan,];

let Grupo_F=[logogremio,gremio,'7','2','1','0','3','1',tec124,logosportingcristal,sportingcristal,'5','1','2','0','3','1',tec558,logoindmedellín,indmedellín,'2','0','2','1','1','2',tec551,logocolon,colon,'1','0','1','2','1','4',tec513];
let jogos_F=[logocolon,'Colón','(31,45)','0','1','(42,77)','Grêmio',logogremio,logoindmedellín,'Ind. Medellín','(41,16)','0','0','(36,36)','Sporting Cristal',logosportingcristal,logogremio,'Grêmio','(72,05)','2','1','(65,65)','Ind. Medellín',logoindmedellín,logosportingcristal,'Sporting Cristal','(86,37)','3','1','(66,82)','Colón',logocolon,logogremio,'Grêmio','(29,79372)','0','0','(39,18265)','Sporting Cristal',logosportingcristal,logocolon,'Colón','(28,14389)','0','0','(35,32307)','Ind. Medellín',logoindmedellín,logosportingcristal,'Sporting Cristal','(0)','-','-','(0)','Grêmio',logogremio,logoindmedellín,'Ind. Medellín','(0)','-','-','(0)','Colón',logocolon,logoindmedellín,'Ind. Medellín','(0)','-','-','(0)','Grêmio',logogremio,logocolon,'Colón','(0)','-','-','(0)','Sporting Cristal',logosportingcristal,logogremio,'Grêmio','(0)','-','-','(0)','Colón',logocolon,logosportingcristal,'Sporting Cristal','(0)','-','-','(0)','Ind. Medellín',logoindmedellín,];

let Grupo_G=[logodanubio,danubio,'7','2','1','0','3','1',tec545,logosantafe,santafe,'4','1','1','1','2','2',tec557,logolanus,lanus,'3','0','3','0','2','2',tec552,logopalmeiras,palmeiras,'1','0','1','2','2','4',tec7];
let jogos_G=[logodanubio,'Danubio','(48,11)','1','0','(32,51)','Palmeiras',logopalmeiras,logolanus,'Lanus','(32,62)','0','0','(40,25)','Santa Fé',logosantafe,logopalmeiras,'Palmeiras','(71,32)','2','2','(71,85)','Lanus',logolanus,logosantafe,'Santa Fé','(66,17)','1','2','(76,22)','Danubio',logodanubio,logopalmeiras,'Palmeiras','(21,73454)','0','1','(33,38323)','Santa Fé',logosantafe,logodanubio,'Danubio','(37,45284)','0','0','(33,17327)','Lanus',logolanus,logosantafe,'Santa Fé','(0)','-','-','(0)','Palmeiras',logopalmeiras,logolanus,'Lanus','(0)','-','-','(0)','Danubio',logodanubio,logolanus,'Lanus','(0)','-','-','(0)','Palmeiras',logopalmeiras,logodanubio,'Danubio','(0)','-','-','(0)','Santa Fé',logosantafe,logopalmeiras,'Palmeiras','(0)','-','-','(0)','Danubio',logodanubio,logosantafe,'Santa Fé','(0)','-','-','(0)','Lanus',logolanus,];

let Grupo_H=[logolibertadpar,libertadpar,'7','2','1','0','5','0',tec183,logodeportestolima,deportestolima,'4','1','1','1','3','1',tec480,logotalleres,talleres,'2','0','2','1','0','3',tec507,logopaulista,paulista,'2','0','2','1','0','4',tec25];
let jogos_H=[logodeportestolima,'Deportes Tolima','(40,56)','0','0','(42,21)','Paulista',logopaulista,logolibertadpar,'Libertad','(35,92)','0','0','(27,07)','Talleres',logotalleres,logopaulista,'Paulista','(58,22)','0','4','(90,82)','Libertad',logolibertadpar,logotalleres,'Talleres','(47,25)','0','3','(85,62)','Deportes Tolima',logodeportestolima,logopaulista,'Paulista','(30,48362)','0','0','(24,67426)','Talleres',logotalleres,logodeportestolima,'Deportes Tolima','(30,08368)','0','1','(47,69172)','Libertad',logolibertadpar,logotalleres,'Talleres','(0)','-','-','(0)','Paulista',logopaulista,logolibertadpar,'Libertad','(0)','-','-','(0)','Deportes Tolima',logodeportestolima,logolibertadpar,'Libertad','(0)','-','-','(0)','Paulista',logopaulista,logodeportestolima,'Deportes Tolima','(0)','-','-','(0)','Talleres',logotalleres,logopaulista,'Paulista','(0)','-','-','(0)','Deportes Tolima',logodeportestolima,logotalleres,'Talleres','(0)','-','-','(0)','Libertad',logolibertadpar,];

let MelhoresPrimeiros=[logolibertadpar,libertadpar,'7','2','1','0','5','0','5','H',logoargentinosjrs,argentinosjrs,'7','2','1','0','4','1','3','A',logochapecoense,chapecoense,'7','2','1','0','3','0','3','D',logohuracan,huracan,'7','2','1','0','3','0','3','E',logobragantino,bragantino,'7','2','1','0','4','2','2','C',logodanubio,danubio,'7','2','1','0','3','1','2','G',logogremio,gremio,'7','2','1','0','3','1','2','F',logobanfield,banfield,'6','2','0','1','3','3','0','B'];
let MelhoresSegundos=[logobelgrano,belgrano,'7','2','1','0','2','0','2','D',logofluminense,fluminense,'6','2','0','1','2','1','1','E',logooncecaldas,oncecaldas,'5','1','2','0','3','1','2','B',logosportingcristal,sportingcristal,'5','1','2','0','3','1','2','F',logodeportestolima,deportestolima,'4','1','1','1','3','1','2','H',logoquilmes,quilmes,'4','1','1','1','3','3','0','C',logosantafe,santafe,'4','1','1','1','2','2','0','G',logoathletico,athletico,'3','0','3','0','0','0','0','A'];
let MelhoresTerceiros=[logothestrongest,thestrongest,'4','1','1','1','3','3','0','E',logodeptachira,deptachira,'4','1','1','1','2','3','-1','A',logorosariocentral,rosariocentral,'3','1','0','2','2','2','0','D',logoinddelvalle,inddelvalle,'3','1','0','2','1','2','-1','H',logoatleticonacional,atleticonacional,'3','1','0','2','2','4','-2','G',logoindependiente,independiente,'3','0','3','0','2','2','0','B',logovelezsarsfield,velezsarsfield,'3','0','3','0','1','1','0','F',logoestudiantesdelaplata,estudiantesdelaplata,'1','0','1','2','1','3','-2','C'];
let playoffs=[logobelgrano,'Belgrano',tec170,logoestudiantesdelaplata,'Estudiantes LP',tec77,logoathletico,'Athletico',tec4,logothestrongest,'The Strongest',tec479,logoquilmes,'Quilmes',tec556,logorosariocentral,'Rosario Central',tec537,logosportingcristal,'Sporting Cristal',tec558,logoatleticonacional,'Atlético Nacional',tec541,logooncecaldas,'Once Caldas',tec555,logoindependiente,'Independiente',tec481,logosantafe,'Santa Fé',tec557,logodeptachira,'Dep. Tachira',tec456,logofluminense,'Fluminense',tec87,logovelezsarsfield,'Velez Sarsfield',tec73];


  
  
  
  
  

  
  
  
  
  

  
  
  
  
  
  
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


    /**CLASSIFICAÇO GERAL*/
   
    document.getElementById("logcamp1").innerHTML=MelhoresSegundos[0];
    document.getElementById("clubcamp1").innerHTML=MelhoresSegundos[1][0];
    document.getElementById("ptscamp1").innerHTML=MelhoresSegundos[2];
    document.getElementById("vitcamp1").innerHTML=MelhoresSegundos[3];
    document.getElementById("empcamp1").innerHTML=MelhoresSegundos[4];
    document.getElementById("dercamp1").innerHTML=MelhoresSegundos[5];
    document.getElementById("gpcamp1").innerHTML=MelhoresSegundos[6];
    document.getElementById("gccamp1").innerHTML=MelhoresSegundos[7]
    document.getElementById("sgcamp1").innerHTML=MelhoresSegundos[8];
    document.getElementById("grupcamp1").innerHTML=MelhoresSegundos[9];
  
    document.getElementById("logcamp2").innerHTML=MelhoresSegundos[10];
    document.getElementById("clubcamp2").innerHTML=MelhoresSegundos[11][0];
    document.getElementById("ptscamp2").innerHTML=MelhoresSegundos[12];
    document.getElementById("vitcamp2").innerHTML=MelhoresSegundos[13];
    document.getElementById("empcamp2").innerHTML=MelhoresSegundos[14];
    document.getElementById("dercamp2").innerHTML=MelhoresSegundos[15];
    document.getElementById("gpcamp2").innerHTML=MelhoresSegundos[16];
    document.getElementById("gccamp2").innerHTML=MelhoresSegundos[17]
    document.getElementById("sgcamp2").innerHTML=MelhoresSegundos[18];
    document.getElementById("grupcamp2").innerHTML=MelhoresSegundos[19];
  
    document.getElementById("logcamp3").innerHTML=MelhoresSegundos[20];
    document.getElementById("clubcamp3").innerHTML=MelhoresSegundos[21][0];
    document.getElementById("ptscamp3").innerHTML=MelhoresSegundos[22];
    document.getElementById("vitcamp3").innerHTML=MelhoresSegundos[23];
    document.getElementById("empcamp3").innerHTML=MelhoresSegundos[24];
    document.getElementById("dercamp3").innerHTML=MelhoresSegundos[25];
    document.getElementById("gpcamp3").innerHTML=MelhoresSegundos[26];
    document.getElementById("gccamp3").innerHTML=MelhoresSegundos[27]
    document.getElementById("sgcamp3").innerHTML=MelhoresSegundos[28];
    document.getElementById("grupcamp3").innerHTML=MelhoresSegundos[29];
  
    document.getElementById("logcamp4").innerHTML=MelhoresSegundos[30];
    document.getElementById("clubcamp4").innerHTML=MelhoresSegundos[31][0];
    document.getElementById("ptscamp4").innerHTML=MelhoresSegundos[32];
    document.getElementById("vitcamp4").innerHTML=MelhoresSegundos[33];
    document.getElementById("empcamp4").innerHTML=MelhoresSegundos[34];
    document.getElementById("dercamp4").innerHTML=MelhoresSegundos[35];
    document.getElementById("gpcamp4").innerHTML=MelhoresSegundos[36];
    document.getElementById("gccamp4").innerHTML=MelhoresSegundos[37]
    document.getElementById("sgcamp4").innerHTML=MelhoresSegundos[38];
    document.getElementById("grupcamp4").innerHTML=MelhoresSegundos[39];
  
    document.getElementById("logcamp5").innerHTML=MelhoresSegundos[40];
    document.getElementById("clubcamp5").innerHTML=MelhoresSegundos[41][0];
    document.getElementById("ptscamp5").innerHTML=MelhoresSegundos[42];
    document.getElementById("vitcamp5").innerHTML=MelhoresSegundos[43];
    document.getElementById("empcamp5").innerHTML=MelhoresSegundos[44];
    document.getElementById("dercamp5").innerHTML=MelhoresSegundos[45];
    document.getElementById("gpcamp5").innerHTML=MelhoresSegundos[46];
    document.getElementById("gccamp5").innerHTML=MelhoresSegundos[47]
    document.getElementById("sgcamp5").innerHTML=MelhoresSegundos[48];
    document.getElementById("grupcamp5").innerHTML=MelhoresSegundos[49];
  
    document.getElementById("logcamp6").innerHTML=MelhoresSegundos[50];
    document.getElementById("clubcamp6").innerHTML=MelhoresSegundos[51][0];
    document.getElementById("ptscamp6").innerHTML=MelhoresSegundos[52];
    document.getElementById("vitcamp6").innerHTML=MelhoresSegundos[53];
    document.getElementById("empcamp6").innerHTML=MelhoresSegundos[54];
    document.getElementById("dercamp6").innerHTML=MelhoresSegundos[55];
    document.getElementById("gpcamp6").innerHTML=MelhoresSegundos[56];
    document.getElementById("gccamp6").innerHTML=MelhoresSegundos[57];
    document.getElementById("sgcamp6").innerHTML=MelhoresSegundos[58];
    document.getElementById("grupcamp6").innerHTML=MelhoresSegundos[59];
  
    document.getElementById("logcamp7").innerHTML=MelhoresSegundos[60];
    document.getElementById("clubcamp7").innerHTML=MelhoresSegundos[61][0];
    document.getElementById("ptscamp7").innerHTML=MelhoresSegundos[62];
    document.getElementById("vitcamp7").innerHTML=MelhoresSegundos[63];
    document.getElementById("empcamp7").innerHTML=MelhoresSegundos[64];
    document.getElementById("dercamp7").innerHTML=MelhoresSegundos[65];
    document.getElementById("gpcamp7").innerHTML=MelhoresSegundos[66];
    document.getElementById("gccamp7").innerHTML=MelhoresSegundos[67]
    document.getElementById("sgcamp7").innerHTML=MelhoresSegundos[68];
    document.getElementById("grupcamp7").innerHTML=MelhoresSegundos[69];
  
    document.getElementById("logcamp8").innerHTML=MelhoresSegundos[70];
    document.getElementById("clubcamp8").innerHTML=MelhoresSegundos[71][0];
    document.getElementById("ptscamp8").innerHTML=MelhoresSegundos[72];
    document.getElementById("vitcamp8").innerHTML=MelhoresSegundos[73];
    document.getElementById("empcamp8").innerHTML=MelhoresSegundos[74];
    document.getElementById("dercamp8").innerHTML=MelhoresSegundos[75];
    document.getElementById("gpcamp8").innerHTML=MelhoresSegundos[76];
    document.getElementById("gccamp8").innerHTML=MelhoresSegundos[77]
    document.getElementById("sgcamp8").innerHTML=MelhoresSegundos[78];
    document.getElementById("grupcamp8").innerHTML=MelhoresSegundos[79];


    document.getElementById("logsegun1").innerHTML=MelhoresTerceiros[0];
    document.getElementById("clubsegun1").innerHTML=MelhoresTerceiros[1][0];
    document.getElementById("ptssegun1").innerHTML=MelhoresTerceiros[2];
    document.getElementById("vitsegun1").innerHTML=MelhoresTerceiros[3];
    document.getElementById("empsegun1").innerHTML=MelhoresTerceiros[4];
    document.getElementById("dersegun1").innerHTML=MelhoresTerceiros[5];
    document.getElementById("gpsegun1").innerHTML=MelhoresTerceiros[6];
    document.getElementById("gcsegun1").innerHTML=MelhoresTerceiros[7]
    document.getElementById("sgsegun1").innerHTML=MelhoresTerceiros[8];
    document.getElementById("grupsegun1").innerHTML=MelhoresTerceiros[9];
  
    document.getElementById("logsegun2").innerHTML=MelhoresTerceiros[10];
    document.getElementById("clubsegun2").innerHTML=MelhoresTerceiros[11][0];
    document.getElementById("ptssegun2").innerHTML=MelhoresTerceiros[12];
    document.getElementById("vitsegun2").innerHTML=MelhoresTerceiros[13];
    document.getElementById("empsegun2").innerHTML=MelhoresTerceiros[14];
    document.getElementById("dersegun2").innerHTML=MelhoresTerceiros[15];
    document.getElementById("gpsegun2").innerHTML=MelhoresTerceiros[16];
    document.getElementById("gcsegun2").innerHTML=MelhoresTerceiros[17]
    document.getElementById("sgsegun2").innerHTML=MelhoresTerceiros[18];
    document.getElementById("grupsegun2").innerHTML=MelhoresTerceiros[19];
  
    document.getElementById("logsegun3").innerHTML=MelhoresTerceiros[20];
    document.getElementById("clubsegun3").innerHTML=MelhoresTerceiros[21][0];
    document.getElementById("ptssegun3").innerHTML=MelhoresTerceiros[22];
    document.getElementById("vitsegun3").innerHTML=MelhoresTerceiros[23];
    document.getElementById("empsegun3").innerHTML=MelhoresTerceiros[24];
    document.getElementById("dersegun3").innerHTML=MelhoresTerceiros[25];
    document.getElementById("gpsegun3").innerHTML=MelhoresTerceiros[26];
    document.getElementById("gcsegun3").innerHTML=MelhoresTerceiros[27]
    document.getElementById("sgsegun3").innerHTML=MelhoresTerceiros[28];
    document.getElementById("grupsegun3").innerHTML=MelhoresTerceiros[29];
  
    document.getElementById("logsegun4").innerHTML=MelhoresTerceiros[30];
    document.getElementById("clubsegun4").innerHTML=MelhoresTerceiros[31][0];
    document.getElementById("ptssegun4").innerHTML=MelhoresTerceiros[32];
    document.getElementById("vitsegun4").innerHTML=MelhoresTerceiros[33];
    document.getElementById("empsegun4").innerHTML=MelhoresTerceiros[34];
    document.getElementById("dersegun4").innerHTML=MelhoresTerceiros[35];
    document.getElementById("gpsegun4").innerHTML=MelhoresTerceiros[36];
    document.getElementById("gcsegun4").innerHTML=MelhoresTerceiros[37]
    document.getElementById("sgsegun4").innerHTML=MelhoresTerceiros[38];
    document.getElementById("grupsegun4").innerHTML=MelhoresTerceiros[39];
  
    document.getElementById("logsegun5").innerHTML=MelhoresTerceiros[40];
    document.getElementById("clubsegun5").innerHTML=MelhoresTerceiros[41][0];
    document.getElementById("ptssegun5").innerHTML=MelhoresTerceiros[42];
    document.getElementById("vitsegun5").innerHTML=MelhoresTerceiros[43];
    document.getElementById("empsegun5").innerHTML=MelhoresTerceiros[44];
    document.getElementById("dersegun5").innerHTML=MelhoresTerceiros[45];
    document.getElementById("gpsegun5").innerHTML=MelhoresTerceiros[46];
    document.getElementById("gcsegun5").innerHTML=MelhoresTerceiros[47]
    document.getElementById("sgsegun5").innerHTML=MelhoresTerceiros[48];
    document.getElementById("grupsegun5").innerHTML=MelhoresTerceiros[49];
  
    document.getElementById("logsegun6").innerHTML=MelhoresTerceiros[50];
    document.getElementById("clubsegun6").innerHTML=MelhoresTerceiros[51][0];
    document.getElementById("ptssegun6").innerHTML=MelhoresTerceiros[52];
    document.getElementById("vitsegun6").innerHTML=MelhoresTerceiros[53];
    document.getElementById("empsegun6").innerHTML=MelhoresTerceiros[54];
    document.getElementById("dersegun6").innerHTML=MelhoresTerceiros[55];
    document.getElementById("gpsegun6").innerHTML=MelhoresTerceiros[56];
    document.getElementById("gcsegun6").innerHTML=MelhoresTerceiros[57];
    document.getElementById("sgsegun6").innerHTML=MelhoresTerceiros[58];
    document.getElementById("grupsegun6").innerHTML=MelhoresTerceiros[59];
  
    document.getElementById("logsegun7").innerHTML=MelhoresTerceiros[60];
    document.getElementById("clubsegun7").innerHTML=MelhoresTerceiros[61][0];
    document.getElementById("ptssegun7").innerHTML=MelhoresTerceiros[62];
    document.getElementById("vitsegun7").innerHTML=MelhoresTerceiros[63];
    document.getElementById("empsegun7").innerHTML=MelhoresTerceiros[64];
    document.getElementById("dersegun7").innerHTML=MelhoresTerceiros[65];
    document.getElementById("gpsegun7").innerHTML=MelhoresTerceiros[66];
    document.getElementById("gcsegun7").innerHTML=MelhoresTerceiros[67]
    document.getElementById("sgsegun7").innerHTML=MelhoresTerceiros[68];
    document.getElementById("grupsegun7").innerHTML=MelhoresTerceiros[69];
  
    document.getElementById("logsegun8").innerHTML=MelhoresTerceiros[70];
    document.getElementById("clubsegun8").innerHTML=MelhoresTerceiros[71][0];
    document.getElementById("ptssegun8").innerHTML=MelhoresTerceiros[72];
    document.getElementById("vitsegun8").innerHTML=MelhoresTerceiros[73];
    document.getElementById("empsegun8").innerHTML=MelhoresTerceiros[74];
    document.getElementById("dersegun8").innerHTML=MelhoresTerceiros[75];
    document.getElementById("gpsegun8").innerHTML=MelhoresTerceiros[76];
    document.getElementById("gcsegun8").innerHTML=MelhoresTerceiros[77]
    document.getElementById("sgsegun8").innerHTML=MelhoresTerceiros[78];
    document.getElementById("grupsegun8").innerHTML=MelhoresTerceiros[79];


     document.getElementById("oitavaslog1").innerHTML=playoffs[0];
  document.getElementById("oitavasclub1").innerHTML=playoffs[1];
  document.getElementById("oitavaslog2").innerHTML=playoffs[3];
  document.getElementById("oitavasclub2").innerHTML=playoffs[4];

  document.getElementById("oitavaslog3").innerHTML=playoffs[6];
  document.getElementById("oitavasclub3").innerHTML=playoffs[7];
  document.getElementById("oitavaslog4").innerHTML=playoffs[9];
  document.getElementById("oitavasclub4").innerHTML=playoffs[10];

  document.getElementById("oitavaslog5").innerHTML=playoffs[12];
  document.getElementById("oitavasclub5").innerHTML=playoffs[13];
  document.getElementById("oitavaslog6").innerHTML=playoffs[15];
  document.getElementById("oitavasclub6").innerHTML=playoffs[16];

  document.getElementById("oitavaslog7").innerHTML=playoffs[18];
  document.getElementById("oitavasclub7").innerHTML=playoffs[19];
  document.getElementById("oitavaslog8").innerHTML=playoffs[21];
  document.getElementById("oitavasclub8").innerHTML=playoffs[22];

  document.getElementById("oitavaslog9").innerHTML=playoffs[24];
  document.getElementById("oitavasclub9").innerHTML=playoffs[25];
  document.getElementById("oitavaslog10").innerHTML=playoffs[27];
  document.getElementById("oitavasclub10").innerHTML=playoffs[28];

  document.getElementById("oitavaslog11").innerHTML=playoffs[30];
  document.getElementById("oitavasclub11").innerHTML=playoffs[31];
  document.getElementById("oitavaslog12").innerHTML=playoffs[33];
  document.getElementById("oitavasclub12").innerHTML=playoffs[34];
 
  document.getElementById("oitavaslog13").innerHTML=playoffs[36];
  document.getElementById("oitavasclub13").innerHTML=playoffs[37];
  document.getElementById("oitavaslog14").innerHTML=playoffs[39];
  document.getElementById("oitavasclub14").innerHTML=playoffs[40];

  document.getElementById("oitavaslog15").innerHTML=playoffs[42];
  document.getElementById("oitavasclub15").innerHTML=playoffs[43];
  document.getElementById("oitavaslog16").innerHTML=playoffs[45];
  document.getElementById("oitavasclub16").innerHTML=playoffs[46];
  


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


