

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
  let logotec2="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/ce/39/25/0078a1157e-c151-4226-9d46-ca0b468fcfce20230322123925' width='100%'>;"
  let logotec3="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/77/13/22/0074a12605-e55f-48f2-8abc-bf1f89ae487720230316211322' width='100%'>;"
  let logotec4="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_219/escudo/ae/23/59/00e52f15c1-c2da-41d3-afd2-dfd2fa8319ae20230506002359' width='100%'>;"
  let logotec5="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_200/escudo/b5/10/54/00e992ba2a-672e-4107-9923-36eb28e8b1b520220313131054' width='100%'>;"
  let logotec6="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_100/escudo/01/55/01/002aaf2d3e-386d-440f-bbbb-9e9b4215ab0120180323085501' width='100%'>;"
  let logotec7="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_167/escudo/92/55/47/00ef98baa4-de62-40f8-9aa2-6d7b0cf8269220200730115547' width='100%'>;"
  let logotec8="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_183/escudo/07/38/52/004ab33c78-738c-46b4-aea7-8a29ccf4330720210428123852' width='100%'>;"
  let logotec9="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_186/escudo/d7/48/19/005caa8b24-a53d-45d4-8512-6e9ba2c5d7d720210507214819' width='100%'>;"
  let logotec10="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/09/33/57/001b383c41-f94f-4a38-9d8e-95739659540920230316233357' width='100%'>;"
  let logotec11="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_213/escudo/48/27/22/00a764a31c-38ea-4597-9e23-303d19c3334820230410112722' width='100%'>;"
  let logotec12="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_199/escudo/cb/37/42/00d0b07a20-9118-476b-ae39-de29bba1e1cb20220310203742' width='100%'>;"
  let logotec13="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_213/escudo/a7/59/31/0020cc5cde-dbdb-45c7-b405-a3a9805ccca720230404235931' width='100%'>;"
  let logotec14="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/e7/16/16/005af993eb-3301-44e1-8d70-3a8f8b1882e720230323111616' width='100%'>;"
  let logotec15="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/ad/07/50/00d6b15f15-18a2-4713-85f6-e977d7034dad20230319100750' width='100%'>;"
  let logotec16="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/cb/42/49/002c84f60f-e4e8-4e47-b51a-fe5d5bc21fcb20230321144249' width='100%'>;"
  let logotec17="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/ff/52/21/00ebecd1d5-fbff-4230-863c-74aa5117a0ff20230317025221' width='100%'>;"
  let logotec18="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_203/escudo/fa/52/51/00da823e0a-ab77-4eed-8b91-bb5daa1295fa20220407135251' width='100%'>;"
  let logotec19="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/bf/49/19/006130eb3a-847c-4892-a204-db94f2a8debf20230316194919' width='100%'>;"
  let logotec20="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_135/escudo/90/34/55/00c8a54be5-7f24-4a85-b5ca-353cac763d9020190406223455' width='100%'>;"
  let logotec21="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/f4/48/25/005c249959-e5f7-4f74-9f03-2b626728ecf420230322174825' width='100%'>;"
  let logotec22="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_200/escudo/1a/52/21/00a4a403a0-42a5-4a7d-be1a-9b7957d5f41a20220317145221' width='100%'>;"
  let logotec23="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_214/escudo/37/09/42/0049df6502-5560-4a66-b1b5-92fede09993720230412020942' width='100%'>;"
  let logotec24="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_216/escudo/aa/23/50/004cf31568-6c3f-4620-b0ba-77cf4fba91aa20230415162350' width='100%'>;"
  let logotec25="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_140/escudo/37/52/18/00c3222f41-73db-4d77-827a-34fb60705f3720190424175218' width='100%'>;"
  let logotec26="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_133/escudo/85/08/43/00cf8cb52d-7ae1-4e90-814c-913508ef858520190402190843' width='100%'>;"
  let logotec27="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/34/39/23/00c5fd71e7-1140-4bb1-b4be-033b17f05d3420230323113923' width='100%'>;"
  let logotec28="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_101/escudo/53/26/20/0016430387-c7fd-4da5-949f-c9f630ebe55320180323202620' width='100%'>;"
  let logotec29="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_185/escudo/63/13/18/00b1a44460-fc6e-4c47-b650-a5f8582c6b6320210503141318' width='100%'>;"
  let logotec30="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_200/escudo/ca/21/25/00ca4fb01b-24d6-4697-82f8-3e07953c1dca20220312112125' width='100%'>;"
  let logotec31="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/2c/54/45/00039aa79e-bd0f-438d-887e-76c8ba54952c20230323155445' width='100%'>;"
  let logotec32="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_185/escudo/f8/08/26/008da79acb-6d73-4e6f-903b-24579e162ff820210429230826' width='100%'>;"
  let logotec33="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/22/36/25/00d14a3be6-c49e-43af-b316-26cf4fac782220230327143625' width='100%'>;"
  let logotec34="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/38/29/11/0018218301-7d57-4f76-adea-f784333ae33820230328122911' width='100%'>;"
  let logotec35="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_218/escudo/1d/56/28/001307b8bf-fcde-45f6-92d8-c0f3f8b7d11d20230429095628' width='100%'>;"
  let logotec36="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_215/escudo/bf/45/49/000297b23d-dd1b-4617-b708-32d5ab1825bf20230414194549' width='100%'>;"
  let logotec37="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/f8/58/03/001315aa61-0ebb-4e93-b78b-40ca8c9190f820230329215803' width='100%'>;"
  let logotec38="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/85/58/56/00f44fe999-dcf2-4596-b3dc-e432176df68520230321145856' width='100%'>;"
  let logotec39="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/3f/04/07/0007ff1e71-3033-41dd-8e5d-d2bcf634033f20230401190407' width='100%'>;"
  let logotec40="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_185/escudo/b9/01/06/0078c9d2cd-2618-4b40-82ee-6fae0d80c7b920210428230106' width='100%'>;"
  let logotec41="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_165/escudo/08/19/20/0083f4aac7-c312-495e-b790-24f78775b60820200723021920' width='100%'>;"
  let logotec42="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_202/escudo/c5/27/47/000eda6641-e83f-478c-a7dd-43a911608bc520220404212747' width='100%'>;"
  let logotec43="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_188/escudo/d2/41/31/0086181030-43a1-496d-9097-129623d629d220210523174131' width='100%'>;"
  let logotec44="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_210/escudo/d2/39/46/0024043b4c-40c7-4381-be14-bedd5c0e9fd220230316133946' width='100%'>;"
  let logotec45="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_215/escudo/3d/15/41/001b2169ac-bdcd-41e8-a89f-1dfbe536b03d20230414171541' width='100%'>;"
  let logotec46="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_186/escudo/31/17/19/001409e10a-05ba-47f7-94e5-a50f2d640f3120210513221719' width='100%'>;"
  let logotec47="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_210/escudo/a2/53/01/0046a20979-c98e-4a4c-b88f-628b3dd5a5a220230316135301' width='100%'>;"
  let logotec48="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_213/escudo/2d/10/31/0046fd34e4-d89b-48f6-9ac9-653693173e2d20230404191031' width='100%'>;"
  let logotec49="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_186/escudo/ee/59/00/00be9be33d-73a5-4027-b4c2-27ba505a95ee20210513185900' width='100%'>;"
  let logotec50="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_214/escudo/ae/24/17/00afb28a4f-c826-45ca-8fb0-8b796d0af2ae20230411162417' width='100%'>;"
  let logotec51="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_216/escudo/12/33/20/0032db2820-b4ec-4039-9762-16a818be1d1220230415153320' width='100%'>;"
  let logotec52="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_171/escudo/ad/47/46/00c06eed0d-cd09-4c72-ae1e-cfe487c155ad20200807094746' width='100%'>;"
  let logotec53="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_214/escudo/ad/41/25/00b4e990e4-7b3d-4b16-8bb6-47c14a314fad20230411134125' width='100%'>;"
  let logotec54="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/34/52/25/003120c9d4-8e5e-49a0-9d7c-7f6b53e4ba3420230327185225' width='100%'>;"
  let logotec55="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_210/escudo/ae/48/03/00b1830cbd-cd45-4d5a-9990-e7c46ca78aae20230316124803' width='100%'>;"
  let logotec56="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_213/escudo/cf/38/49/0055911594-56fd-42b5-b62c-3fd5f0e339cf20230410173849' width='100%'>;"
  let logotec57="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_202/escudo/ff/12/17/00866c62bf-a2a3-4dea-9e52-59a7687d71ff20220401211217' width='100%'>;"
  let logotec58="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_213/escudo/0e/33/44/005a0514c6-f17d-45c4-b5c6-dd63642d060e20230406133344' width='100%'>;"
  let logotec59="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_183/escudo/11/51/06/00114c21ef-1e40-49a4-b529-98cea290551120210427235106' width='100%'>;"
  let logotec60="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_203/escudo/f2/27/39/00f094c858-f158-495a-a2e3-c8b7f6ad74f220220406172739' width='100%'>;"
  let logotec61="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_200/escudo/8b/25/37/0080e79fc2-dd19-4916-a9d2-eb58203b028b20220314212537' width='100%'>;"
  let logotec62="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_221/escudo/61/09/03/004a9d1ba9-e417-4a62-bfbc-741fc518cc6120230815190903' width='100%'>;"
  let logotec63="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/b1/04/44/00d92a17f1-fda1-4697-9cfd-04ee765207b120230317220444' width='100%'>;"
  let logotec64="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_221/escudo/7e/15/57/00ccb5df99-99c9-4ccf-8dc1-6c9d1d88607e20230905021557' width='100%'>;"
  let logotec65="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/38/47/36/005873787a-58e6-477a-911e-c36d02090b3820230319124736' width='100%'>;"
  let logotec66="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/40/52/10/00944dd6b7-07cf-4eb6-a935-d94692e38d4020230323125210' width='100%'>;"
  let logotec67="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/cd/38/35/00061fd452-6997-4ce1-a0a3-8c4921369bcd20230321213835' width='100%'>;"
  let logotec68="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_202/escudo/ce/22/46/006e835942-b01a-4fc6-849c-107385974ace20220404122246' width='100%'>;"
  let logotec69="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_210/escudo/74/51/05/00b23ec804-8757-4ca3-9cf2-3f60dcca3b7420230316125105' width='100%'>;"
  let logotec70="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_185/escudo/1a/02/15/0075adf7b5-9d15-421f-8d22-a2ac6240901a20210502160215' width='100%'>;"
  let logotec71="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_200/escudo/9f/35/02/00610db0cd-87c1-4682-85e4-ce9c3ebd5b9f20220319163502' width='100%'>;"
  let logotec72="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_215/escudo/35/40/13/0057dfa29c-1b23-4eb5-9e6a-a1ba0e23713520230414234013' width='100%'>;"
  let logotec73="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_219/escudo/a8/27/29/007b970cc6-48a9-475f-b7a7-f472191628a820230503202729' width='100%'>;"
  let logotec74="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/3f/41/07/00b50c79b4-b83e-4cd2-92a0-940b8860213f20230322084107' width='100%'>;"
  let logotec75="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/f7/43/12/008e087cee-5619-4f99-adc4-36c5b283ccf720230324154312' width='100%'>;"
  let logotec76="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_202/escudo/a5/49/35/00c289f14f-4ee4-4f8f-a6df-564da70fcea520220405124935' width='100%'>;"
  let logotec77="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/b2/00/19/00944ecec0-8b2b-4096-a946-4c3ee2ced5b220230330230019' width='100%'>;"
  let logotec78="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/ce/35/54/00fd2a51ea-c7fe-4667-b2aa-4a5d24352bce20230321083554' width='100%'>;"
  let logotec79="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_202/escudo/27/40/09/00e55b039a-54fe-4863-a41b-1486aaef642720220404214009' width='100%'>;"
  let logotec80="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_185/escudo/fa/47/22/00dd4416c3-b8e3-4c9d-ad6a-1e00d35781fa20210503134722' width='100%'>;"
  let logotec81="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_215/escudo/16/47/55/00a44b6807-9093-4dbb-ab27-96f9fc501e1620230414204755' width='100%'>;"
  let logotec82="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_214/escudo/98/41/50/0099502f2b-bfb0-438e-a180-36d3ef92019820230411134150' width='100%'>;"
  let logotec83="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_210/escudo/e0/35/28/0075a0bb3f-d0cf-4699-8983-843c9f5ad2e020230316113528' width='100%'>;"
  let logotec84="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_213/escudo/ac/33/05/00d9c7e30e-050d-43ad-9e3b-e1d62981f9ac20230410123305' width='100%'>;"
  let logotec85="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_207/escudo/8f/33/59/00fbe23a97-c822-46b1-a64c-fa65e328e88f20220501113359' width='100%'>;"
  let logotec86="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_165/escudo/a3/11/40/0046a926e1-79da-4744-8767-eb3cfd3e05a320200723151140' width='100%'>;"
  let logotec87="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/d4/53/51/003b85e2ec-3f53-4b70-baa9-309750b109d420230318125351' width='100%'>;"
  let logotec88="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/24/17/16/00000dff43-0e46-4a6c-b3cb-e6fc902ba12420230318101716' width='100%'>;"
  let logotec89="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_213/escudo/db/31/16/009f3a20de-b909-4a44-84a8-8a37917352db20230410203116' width='100%'>;"
  let logotec90="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/4c/37/27/00defd0042-b85a-4f4a-86ac-bcdab669ec4c20230324143727' width='100%'>;"
  let logotec91="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/d4/40/14/00138ef8a2-6724-47cd-902d-57a93a6970d420230317164014' width='100%'>;"
  let logotec92="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_221/escudo/37/13/50/008706fb73-28dc-4157-9796-f38bfcebf13720230819121350' width='100%'>;"
  let logotec93="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_203/escudo/e2/51/54/009d84885e-fcc4-4a61-989f-9359096f25e220220408125154' width='100%'>;"
  let logotec94="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/23/44/35/004556fbc4-d24d-4d5f-b02a-8cd76c05fb2320230401134435' width='100%'>;"
  let logotec95="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_215/escudo/e5/31/24/00786361fe-f752-4b06-b394-00125f9ec9e520230415093124' width='100%'>;"
  let logotec96="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/15/59/04/00e5fb53fb-035b-44b8-8024-da09b497ad1520230322105904' width='100%'>;"
  let logotec97="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_213/escudo/f7/18/52/0063ea57da-d8ad-47e7-a6c0-86fb4af3f8f720230409111852' width='100%'>;"
  let logotec98="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_213/escudo/01/09/06/0038f57408-7788-4ea4-83c2-b6a9fab9600120230405140906' width='100%'>;"
  let logotec99="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/37/20/02/00377e491d-67be-46cc-980f-83c65006483720230404072002' width='100%'>;"
  let logotec100="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/08/27/55/00a552dc00-dc56-4178-bc2b-571599d2290820230317232755' width='100%'>;"
  let logotec101="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_213/escudo/80/36/22/0003777c31-ce8e-45d7-8494-73f942aca68020230410123622' width='100%'>;"
  let logotec102="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/a2/17/14/00d3a36230-2e45-4fa7-b0aa-46fd1238e2a220230320081714' width='100%'>;"
  let logotec103="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/f6/48/12/004fc8a6b5-9fb2-4d48-bc46-a922f7acd5f620230326154812' width='100%'>;"
  let logotec104="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/13/47/24/00ef47098f-a2da-4a33-9c1a-c7f7271fe01320230402134724' width='100%'>;"
  let logotec105="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_216/escudo/69/04/45/003c6bd94b-c88e-4e81-98d7-40315ba6826920230415100445' width='100%'>;"
  let logotec106="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_214/escudo/75/33/57/0011edef45-3fc9-4f4c-9d17-34c71591597520230412203357' width='100%'>;"
  let logotec107="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_210/escudo/ad/49/35/005aae8305-93e5-40ef-b900-86ccbe62f8ad20230316134935' width='100%'>;"
  let logotec108="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_215/escudo/a4/37/57/000bc76962-512a-409f-9577-6fc304a1b1a420230414213757' width='100%'>;"
  let logotec109="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_215/escudo/a4/37/57/000bc76962-512a-409f-9577-6fc304a1b1a420230414213757' width='100%'>;"
  let logotec110="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_218/escudo/75/29/52/000afe35de-ce50-4add-b8b9-a301e4e91f7520230422202952' width='100%'>;"
  let logotec111="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_201/escudo/cd/28/10/00771fbc03-770e-4635-8b50-3bb61d7aa8cd20220330232810' width='100%'>;"
  let logotec112="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_213/escudo/e1/32/31/0094390f6b-f8c1-4614-9337-eedbd2b36de120230407113231' width='100%'>;"
  let logotec113="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_107/escudo/9b/28/05/007f449767-d174-4c2c-8194-a04fefa48d9b20180410132805' width='100%'>;"
  let logotec114="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_215/escudo/59/22/14/00c1783eb4-b658-45a9-9cfe-8164a5ed065920230414132214' width='100%'>;"
  let logotec115="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_215/escudo/53/35/45/00d0722758-34ab-4c3f-93b6-8f032430535320230414023545' width='100%'>;"
  let logotec116="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/f2/37/30/00f11d9d6e-9ee4-4d52-96a5-8cf35d9457f220230321213730' width='100%'>;"
  let logotec117="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_213/escudo/f8/28/11/0012c6fca7-2691-4a0e-b45b-9af338168cf820230408112811' width='100%'>;"
  let logotec118="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_214/escudo/1c/08/40/0035ffbf5d-c084-477d-897d-3142f1d7f01c20230413160840' width='100%'>;"
  let logotec119="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/d8/37/29/00258d14e3-bc7e-47f2-802a-0d4fb16b95d820230318153729' width='100%'>;"
  let logotec120="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_210/escudo/0e/21/36/001925582d-2666-4492-bb6c-6d875473950e20230316122136' width='100%'>;"
  let logotec121="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/10/17/00/00627a2aea-5c5c-4c5b-9310-89458e6f0b1020230401211700' width='100%'>;"
  let logotec122="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_215/escudo/d7/13/25/0049e620f0-f0b6-43e3-8475-66906a66e7d720230414181325' width='100%'>;"
  let logotec123="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/2e/42/40/00c06b7ac4-67eb-472f-9346-6b72b2ba9c2e20230321104240' width='100%'>;"
  let logotec124="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_201/escudo/15/18/45/00788810a7-bba7-415c-bd2f-131a338b771520220326201845' width='100%'>;"
  let logotec125="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_216/escudo/22/08/13/002529e0c0-3706-49d5-a57f-0ce76f206c2220230415130813' width='100%'>;"
  let logotec126="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_213/escudo/21/00/47/00db61c2e1-566a-4ad6-b71d-f9c83888982120230410210047' width='100%'>;"
  let logotec127="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_215/escudo/33/53/58/00ccf87cc8-23e9-4287-ad0f-da97bc9fe33320230415085358' width='100%'>;"
  let logotec128="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_200/escudo/6b/46/10/00e38c8b8b-f1f0-447a-bbb4-051e3b07806b20220320164610' width='100%'>;"
  let logotec129="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_108/escudo/19/14/58/00526e9396-b09d-4145-9ed8-38997734451920180412081458' width='100%'>;"
  let logotec130="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_214/escudo/89/33/35/00fbcf0c5e-ca86-4a13-85f3-8ebf0e37e98920230412213335' width='100%'>;"
  let logotec131="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/f1/32/47/00dfedd7bf-5f13-43cf-9365-73cee90addf120230317083247' width='100%'>;"
  let logotec132="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_169/escudo/67/19/56/001501a554-bb88-4c88-af79-df08ebeb396720200804121956' width='100%'>;"
  let logotec133="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/eb/49/44/00959cf351-0391-449c-a78f-3ac5c69879eb20230328234944' width='100%'>;"
  let logotec134="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/5f/42/50/00b2f7ea64-4de8-474f-8df0-693b2d701f5f20230318184250' width='100%'>;"
  let logotec135="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_215/escudo/1a/33/31/00e71e7215-82d6-48b5-9ed2-cc37b307f71a20230414223331' width='100%'>;"
  let logotec136="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_214/escudo/5d/11/00/00eef0337b-b916-4485-ae14-efc03896ea5d20230412101100' width='100%'>;"
  let logotec137="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_213/escudo/02/24/22/00859b334c-6d79-4e9b-8b30-780c928f6b0220230407192422' width='100%'>;"
  let logotec138="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_214/escudo/03/37/22/001f28df7f-c475-45c6-8b5f-9cdb9823ce0320230413233722' width='100%'>;"
  let logotec139="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_210/escudo/7b/36/54/0099cfdb17-62d5-4f01-8988-136b95a0097b20230316143654' width='100%'>;"
  let logotec140="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/43/12/56/00ef34a573-f4ee-4127-b697-00d8226dda4320230320171256' width='100%'>;"
  let logotec141="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_195/escudo/bc/58/10/00b5cd2388-b6fa-4a43-8ee3-70a13852bdbc20210703175810' width='100%'>;"
  let logotec142="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_210/escudo/e2/37/48/00f55d334a-a3c4-4e92-88c5-fe37e80bcfe220230316123748' width='100%'>;"
  let logotec143="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_200/escudo/cb/37/26/00ebc54814-a1c6-49a0-88e7-773a7b2252cb20220312233726' width='100%'>;"
  let logotec144="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_215/escudo/ee/09/20/0023603e3d-7db2-4138-a133-305ec124f8ee20230415010920' width='100%'>;"
  let logotec145="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_213/escudo/ad/51/23/0013095b4e-3600-49fa-827a-8ff20259f5ad20230404205123' width='100%'>;"
  let logotec146="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_214/escudo/ec/56/17/008db77f07-a4cd-4110-8caf-5cbc7957e7ec20230413095617' width='100%'>;"
  let logotec147="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/d6/52/50/00c390e659-4777-4333-9e25-3927cbf390d620230317065250' width='100%'>;"
  let logotec148="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_186/escudo/4f/26/16/0031b8cf19-7c45-497a-bc6e-0cefff22264f20210514112616' width='100%'>;"
  let logotec149="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_213/escudo/8c/23/41/00ccf784fb-a97a-4a92-b91c-bafad126428c20230409092341' width='100%'>;"
  let logotec150="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_106/escudo/3a/17/57/00d2ce3687-1f28-4ede-a4a0-3f90ff26163a20180408191757' width='100%'>;"
  let logotec151="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_214/escudo/b6/11/28/00014f5d6a-0145-4fed-a73e-16ae91e7e6b620230413081128' width='100%'>;"
  let logotec152="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/e0/11/31/00da5a2f3c-2141-4692-8dbd-218e9c638fe020230317161131' width='100%'>;"
  let logotec153="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/e0/10/05/00ad97e929-8c3e-44fd-a2d8-8f1569ebffe020230328211005' width='100%'>;"
  let logotec154="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_203/escudo/f6/01/28/00891117f0-3553-4d14-a5b5-e100265d19f620220406200128' width='100%'>;"
  let logotec155="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_214/escudo/1d/18/07/003d1a01cd-1f65-4f71-a7a3-b87c8747021d20230412211807' width='100%'>;"
  let logotec156="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_215/escudo/f9/54/41/00772ffcda-d7d4-4913-8348-df59bc25d2f920230414215441' width='100%'>;"
  let logotec157="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/c7/26/11/00ad185f7e-8889-4374-aa7d-bde48f9ad3c720230316212611' width='100%'>;"
  let logotec158="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_213/escudo/e2/22/14/0030bfd83a-b665-49ef-999d-15d4acb825e220230411082214' width='100%'>;"
  let logotec159="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/2e/04/17/00cdfd64ac-3874-47ce-9026-7c57e8bb5e2e20230328190417' width='100%'>;"
  let logotec160="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_214/escudo/a4/13/39/004fad5900-7478-4626-8da8-9ebc56f13aa420230412081339' width='100%'>;"
  let logotec161="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_101/escudo/04/19/53/006ec51410-9fce-4173-9f33-3e922538fd0420180323211953' width='100%'>;"
  let logotec162="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_183/escudo/f1/01/10/00f621e879-b756-47ec-bb3a-0d0e0910acf120210427190110' width='100%'>;"
  let logotec163="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/39/25/47/0034f01df0-8ed7-4992-accd-d26ba0c2d43920230323132547' width='100%'>;"
  let logotec164="<img src='0' width='100%'>;"
  let logotec165="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_215/escudo/de/02/12/007205e439-4d8f-4c60-a2d6-67c24722b9de20230414090212' width='100%'>;"
  let logotec166="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/fb/58/12/00c958ba3b-d6cd-4304-8ba5-f1ce6fde3cfb20230316145812' width='100%'>;"
  let logotec167="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_219/escudo/41/56/06/00d5339ff8-066b-4e71-a570-3d13c4b2e24120230509135606' width='100%'>;"
  let logotec168="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/97/09/58/00d8fcbb37-606c-45f0-990a-6ef75b17899720230317160958' width='100%'>;"
  let logotec169="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_215/escudo/46/09/37/00316afab6-8a81-412f-942e-0135b1c49a4620230414130937' width='100%'>;"
  let logotec170="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_210/escudo/c6/53/01/0094b4ce72-27b1-4010-bd3b-cd5faf2e91c620230316115301' width='100%'>;"
  let logotec171="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_215/escudo/18/23/10/00d86d1b56-6486-4b3c-b495-71f7f773901820230415012310' width='100%'>;"
  let logotec172="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_100/escudo/e2/07/56/002406d552-5950-4de2-b12e-9b7d289199e220180322210756' width='100%'>;"
  let logotec173="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_209/escudo/50/11/03/003572329b-5132-4f6d-bc17-23f285c5ee5020220722101103' width='100%'>;"
  let logotec174="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_219/escudo/03/16/24/00a6bb7a8a-103a-4b8a-9bd6-f4507f82070320230508091624' width='100%'>;"
  let logotec175="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_215/escudo/a7/46/33/0066134cb2-3bfc-4015-95fa-6758f35e6aa720230414224633' width='100%'>;"
  let logotec176="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/b6/02/10/004cff163c-19e8-4390-9af2-897cc2973bb620230325100210' width='100%'>;"
  let logotec177="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/1d/44/40/00df3285a4-8330-4853-89e2-bc571acafa1d20230404094440' width='100%'>;"
  let logotec178="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_213/escudo/55/35/58/00e89eb2d4-d254-406d-b556-4c04a501635520230407093558' width='100%'>;"
  let logotec179="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_164/escudo/8d/51/35/003419c653-f106-4932-b9a9-deec6453138d20200722185135' width='100%'>;"
  let logotec180="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/17/14/52/00b98d806d-26f2-43a8-9995-25c61efa6e1720230325131452' width='100%'>;"
  let logotec181="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_210/escudo/da/55/30/0061d712a5-477c-4f4c-b5bd-3f24f65ff2da20230316125530' width='100%'>;"
  let logotec182="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_162/escudo/b0/51/49/00d3905a7a-5829-48c5-92a9-ff513d3cd6b020200721125149' width='100%'>;"
  let logotec183="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/5e/47/48/00b609792f-b21a-4442-b75d-d316704f7c5e20230402004748' width='100%'>;"
  let logotec184="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_221/escudo/48/25/03/009c5dbd32-073b-4c23-8858-2d08fa74f84820231023212503' width='100%'>;"
  let logotec185="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_213/escudo/c4/38/52/00c1ff6e54-83a6-4478-8812-de44b3be7ec420230405223852' width='100%'>;"
  let logotec186="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_213/escudo/15/12/12/00775cf8aa-6f34-4563-b057-e4bec6e4a61520230409121212' width='100%'>;"
  let logotec187="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_210/escudo/b5/27/58/00d4d31bdf-512a-42ae-98b1-9fe014fbf3b520230316142758' width='100%'>;"
  let logotec188="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_213/escudo/80/17/46/00e833dac2-2dda-4a1b-bfe0-5f7f05cc428020230409221746' width='100%'>;"
  let logotec189="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/fc/36/48/00d53877bd-4f9b-4060-873c-e50603250ffc20230320133648' width='100%'>;"
  let logotec190="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_144/escudo/19/22/09/0087c40455-7b50-41d9-80d6-58c12547b21920190427182209' width='100%'>;"
  let logotec191="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_178/escudo/c7/11/41/00e36dfdbd-ea20-43b5-83b9-0f32df2f44c720200821141141' width='100%'>;"
  let logotec192="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/34/49/47/0055558fe7-6799-4dcf-b85e-93c1e70d183420230324004947' width='100%'>;"
  let logotec193="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_213/escudo/0a/55/47/00eec2f01a-9b7b-4d81-a2ae-b12b03e90a0a20230411085547' width='100%'>;"
  let logotec194="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/8d/17/18/00c8d314b7-cc79-4f61-a6b3-7b654647d68d20230322161718' width='100%'>;"
  let logotec195="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/94/04/41/002233864b-fb93-46ac-aa82-071f7543d69420230403020441' width='100%'>;"
  let logotec196="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_214/escudo/67/27/45/00ff71f5fd-542b-4829-9940-83aba0044e6720230411212745' width='100%'>;"
  let logotec197="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_186/escudo/9f/14/48/001f886961-4f81-438a-8313-b4a7a602f59f20210505181448' width='100%'>;"
  let logotec198="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_213/escudo/49/00/34/000f999cec-368b-4840-aee3-86dfa024e34920230406120034' width='100%'>;"
  let logotec199="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_220/escudo/c8/58/30/00d1a2d676-7de7-4ba0-a4c6-529963afefc820230617145830' width='100%'>;"
  let logotec200="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/ef/52/03/006faea312-57a5-4f87-96c1-c02a781251ef20230404105203' width='100%'>;"
  let logotec201="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_202/escudo/ae/26/38/008f180eb0-818d-47d0-87e4-8ed6a34f04ae20220404112638' width='100%'>;"
  let logotec202="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/dc/29/13/006c6572ac-bb37-4ecd-be96-4684f543c8dc20230329172913' width='100%'>;"
  let logotec203="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_214/escudo/3e/21/27/00baa27e6c-f88e-443e-8219-9a5bbf548e3e20230413152127' width='100%'>;"
  let logotec204="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_213/escudo/ef/56/57/00fc50908a-da87-4716-a0d9-04efa2ba70ef20230411055657' width='100%'>;"
  let logotec205="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_213/escudo/52/56/38/00bea4554d-3fa6-4afd-aa4b-cf2bbb83895220230405145638' width='100%'>;"
  let logotec206="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/a2/04/13/0065de05e8-2569-41f0-bd56-069678377ca220230402160413' width='100%'>;"
  let logotec207="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/09/11/50/0067a6e23a-166e-43f1-b508-b3fe0705230920230316211150' width='100%'>;"
  let logotec208="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/af/39/14/00c2d2e387-d063-44d2-bc1e-4b460039d3af20230328083914' width='100%'>;"
  let logotec209="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_208/escudo/f6/20/16/000404c9da-25a4-4429-a8c1-1ea148c8aef620220612102016' width='100%'>;"
  let logotec210="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_219/escudo/d2/51/19/00a51c99d6-14dd-4eef-a9b4-e85b833792d220230507185119' width='100%'>;"
  let logotec211="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/ce/29/18/00540fb4ec-9a85-41fd-9b1d-ea3a33339bce20230317102918' width='100%'>;"
  let logotec212="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_213/escudo/ee/35/19/001cc1476e-c687-47a2-8875-6db8cfeb99ee20230406103519' width='100%'>;"
  let logotec213="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_202/escudo/e2/44/44/00eb7540fe-a9dc-42aa-95b7-5751229f41e220220404214444' width='100%'>;"
  let logotec214="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_221/escudo/c8/33/41/0036feaa24-db75-4be7-92a0-e3219dbcbac820230816073341' width='100%'>;"
  let logotec215="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_182/escudo/4b/49/57/0039140978-cfe1-4cb9-83b6-479d8cc5734b20201230114957' width='100%'>;"
  let logotec216="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/e8/34/57/00ef6fafbf-919f-4430-bf1f-8c9f3cba96e820230402163457' width='100%'>;"
  let logotec217="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/5d/32/48/0082b43487-daf9-482c-bc89-93a85008595d20230316183248' width='100%'>;"
  let logotec218="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_210/escudo/d5/33/57/002ee6a2c3-fd05-43c7-b5f4-5e10eb7997d520230316133357' width='100%'>;"
  let logotec219="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_173/escudo/e8/28/17/003e048ce2-f28f-41ff-9073-6aaa20f39ae820200809222817' width='100%'>;"
  let logotec220="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_213/escudo/13/03/52/00ce3a0dff-f64d-4cf4-8119-5861cd30261320230405060352' width='100%'>;"
  let logotec221="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_221/escudo/42/31/26/000176f107-405f-4ee7-a6c1-cefee789954220230723213126' width='100%'>;"
  let logotec222="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_203/escudo/00/26/21/002d17ea22-7c51-4d79-81b4-523357f56c0020220407222621' width='100%'>;"
  let logotec223="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_216/escudo/2e/09/53/00189e1b97-983d-473c-b138-6a73735dc52e20230415120953' width='100%'>;"
  let logotec224="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_136/escudo/fd/23/03/004ece8369-7341-435f-8147-51a3db1a8dfd20190410112303' width='100%'>;"
  let logotec225="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/0e/17/23/00c1a92dd6-b766-4c1f-bc13-b175c664540e20230403141723' width='100%'>;"
  let logotec226="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_215/escudo/5e/04/06/0062f893d7-befe-4ba1-8473-04a6120f185e20230414130406' width='100%'>;"
  let logotec227="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/16/14/17/00d319ea6e-4360-489b-b791-0547ba8f951620230316201417' width='100%'>;"
  let logotec228="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_214/escudo/27/37/27/004c3c185b-6bf4-4e9b-87da-6825a6c91b2720230412233727' width='100%'>;"
  let logotec229="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_213/escudo/30/26/13/0057aa695f-4ced-46c2-893c-45c67e68fb3020230410092613' width='100%'>;"
  let logotec230="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_202/escudo/25/14/23/00de29b179-ee68-4414-80d6-63ab7144832520220405111423' width='100%'>;"
  let logotec231="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_210/escudo/c7/47/11/0085016be8-72cf-4c54-b6d0-aba678d2d2c720230316144711' width='100%'>;"
  let logotec232="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_202/escudo/0d/15/00/00aefef89a-a13c-406d-b8b7-8aee37b2ae0d20220403171500' width='100%'>;"
  let logotec233="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/21/29/22/00b065ee94-d402-47bb-a78e-d8b4c18a6e2120230322182922' width='100%'>;"
  let logotec234="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/53/35/33/00ecffd4a6-3a8a-4193-bee3-0dcdc955e65320230317003533' width='100%'>;"
  let logotec235="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_170/escudo/fe/35/36/001f39f112-4e32-437b-8cb6-7beb495a88fe20200806133536' width='100%'>;"
  let logotec236="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_186/escudo/d8/54/32/0048a5c84e-d399-48d7-93cb-ecfdb448aad820210514075432' width='100%'>;"
  let logotec237="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_215/escudo/4f/39/40/008387e7e9-ca40-484e-ba8e-3f45dcf96f4f20230414163940' width='100%'>;"
  let logotec238="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_202/escudo/46/15/36/00f5011205-e95c-4974-98a3-ed853776774620220405231536' width='100%'>;"
  let logotec239="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/f7/31/07/00a9861b78-d84d-4365-a5d4-9573e30a3af720230331133107' width='100%'>;"
  let logotec240="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_183/escudo/9b/10/35/0031b8007e-799b-4058-8cdf-b83c6fade69b20210427171035' width='100%'>;"
  let logotec241="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/ed/25/00/000c08e360-8272-42c0-a2c8-6498a80bf2ed20230328102500' width='100%'>;"
  let logotec242="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/6f/51/25/00daca89f6-f415-4e0f-8c02-f338a27de36f20230316195125' width='100%'>;"
  let logotec243="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_191/escudo/e7/06/22/00eb88ca5a-5691-4858-b369-1af3e1e052e720210529140622' width='100%'>;"
  let logotec244="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/9c/56/05/0002cc910c-d417-4a1a-bcca-89b9e1a0859c20230321125605' width='100%'>;"
  let logotec245="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_216/escudo/33/29/07/00c137e5d9-48bb-4c3a-b156-2f038dd4de3320230415122907' width='100%'>;"
  let logotec246="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_216/escudo/d9/38/42/00a7ba1ba8-ef36-404b-a543-c717ed059ad920230415153842' width='100%'>;"
  let logotec247="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_210/escudo/50/02/29/00336f8312-8f33-4900-9c69-c0c87db3f95020230316130229' width='100%'>;"
  let logotec248="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/77/56/36/0058684306-3ec4-46ea-87b2-deec3b53c07720230326205636' width='100%'>;"
  let logotec249="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_214/escudo/00/11/51/00b3edb0a0-6a8b-4252-928a-85c486669e0020230413211151' width='100%'>;"
  let logotec250="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_216/escudo/fb/31/45/00e0ddf7cd-1fe9-40c4-b2b9-0b9a51cb50fb20230415103145' width='100%'>;"
  let logotec251="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/e4/48/19/005267e405-aa11-4803-8b24-7cac107600e420230325194819' width='100%'>;"
  let logotec252="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/e3/01/30/00dadffe62-abe6-417c-857d-5bd66d0981e320230321110130' width='100%'>;"
  let logotec253="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_109/escudo/94/56/03/0080730096-7540-4bd9-8c46-1ebf1fbadd9420180412165603' width='100%'>;"
  let logotec254="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_171/escudo/f2/12/38/00bd4b004b-cee6-4138-8d51-7bc6ee518ff220200807221238' width='100%'>;"
  let logotec255="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_219/escudo/3a/39/43/000dd4114b-a5e0-4934-a01c-2465235fe73a20230501163943' width='100%'>;"
  let logotec256="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_110/escudo/37/52/56/0021404f08-c17e-4c65-b86f-4e76adcd1d3720180413135256' width='100%'>;"
  let logotec257="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_220/escudo/8e/07/09/00c1f723a1-127e-42f6-ad70-44821094a08e20230527160709' width='100%'>;"
  let logotec258="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_164/escudo/31/20/46/00aa1a5287-427e-41c6-9604-072a08ac803120200722112046' width='100%'>;"
  let logotec259="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_182/escudo/05/27/07/002098734f-e4cb-4b8a-8594-fed0470d8c0520201228202707' width='100%'>;"
  let logotec260="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_210/escudo/e0/28/08/008201cb57-d60c-4b0b-920a-66a356cd51e020230316142808' width='100%'>;"
  let logotec261="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_215/escudo/26/23/23/00db3a211f-b61d-4ada-85da-f41d75a9e72620230415002323' width='100%'>;"
  let logotec262="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_116/escudo/2f/03/07/00c5e76438-75f9-490a-acc2-1df110a4b32f20180503000307' width='100%'>;"
  let logotec263="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/50/55/44/00615cd7df-3bb0-437c-b65b-e25aea6fc25020230316165544' width='100%'>;"
  let logotec264="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_215/escudo/8f/22/42/00bfbcdc1f-d976-49de-bb3c-a2d96174738f20230415062242' width='100%'>;"
  let logotec265="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_214/escudo/df/55/05/0019798b26-d2a6-4193-88e3-6867d8cf88df20230411185505' width='100%'>;"
  let logotec266="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_187/escudo/45/40/40/006ccbef11-cda7-4649-83d0-f1f35dcdcd4520210523094040' width='100%'>;"
  let logotec267="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_216/escudo/b3/50/24/007b10c4e4-1b1e-44cf-af58-cd91cb1388b320230415145024' width='100%'>;"
  let logotec268="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/25/14/25/00d2cc8207-1931-4452-88a7-4aa5e6608d2520230324191425' width='100%'>;"
  let logotec269="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_213/escudo/41/12/37/00f43a7728-e5ad-4abb-ac54-8c9462b3554120230408171237' width='100%'>;"
  let logotec270="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_213/escudo/21/58/24/0067ceb57e-23af-4226-bac5-ea0a91a4ec2120230411085824' width='100%'>;"
  let logotec271="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/39/24/51/0018b3be60-7ca6-4483-973d-872356e7bd3920230326232451' width='100%'>;"
  let logotec272="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_167/escudo/77/40/44/00bb229df7-f95f-401b-9e86-6f26b2340e7720200730214044' width='100%'>;"
  let logotec273="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_105/escudo/e3/46/50/0001fa1766-27c1-429f-9271-3476345827e320180406124650' width='100%'>;"
  let logotec274="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_221/escudo/a6/07/31/008f868b58-92d4-4f96-afb1-f20d99876aa620231009120731' width='100%'>;"
  let logotec275="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_214/escudo/e3/32/57/002e14228d-c0a7-41fb-8b89-ee254bc85ee320230412153257' width='100%'>;"
  let logotec276="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_213/escudo/34/43/03/001d4e0597-f8ac-43f4-a5b8-2dd7d6ee4e3420230410154303' width='100%'>;"
  let logotec277="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/4b/45/50/00f5f943c1-c94f-4303-b116-c7cdf16c7a4b20230321184550' width='100%'>;"
  let logotec278="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/fb/40/28/008e85336c-0939-47bc-82b3-061d6d5d7dfb20230324124028' width='100%'>;"
  let logotec279="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_219/escudo/e8/40/31/006ea62f49-da25-4118-94c3-768cafcd3ce820230508114031' width='100%'>;"
  let logotec280="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_216/escudo/9b/23/13/00e654422f-90f6-4a75-802b-9a61efb4229b20230415152313' width='100%'>;"
  let logotec281="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/08/45/26/008ad50dad-6637-4990-9b6e-8db2c891770820230404114526' width='100%'>;"
  let logotec282="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/ce/34/22/00dc7ec7e0-10e1-4975-aaa5-eb641bdfc6ce20230326013422' width='100%'>;"
  let logotec283="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/0c/43/06/0094373226-8ab9-452c-88aa-d1e4d8513a0c20230322104306' width='100%'>;"
  let logotec284="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_215/escudo/ea/02/47/0001d3bbda-5407-4a92-abf6-becd5d8a60ea20230415040247' width='100%'>;"
  let logotec285="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/f0/03/11/0025b87e4f-da67-4527-a9ec-724d59e365f020230316220311' width='100%'>;"
  let logotec286="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_109/escudo/37/45/25/0081f76d61-eb35-42fe-8776-1a7bfb70433720180413104525' width='100%'>;"
  let logotec287="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_221/escudo/cc/06/55/005d7c2b6f-469c-41db-8dfb-47c15a0c17cc20231106100655' width='100%'>;"
  let logotec288="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_213/escudo/f0/54/43/00f29202b7-45d4-46f3-b646-1994bf0614f020230409225443' width='100%'>;"
  let logotec289="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_135/escudo/ac/07/11/006f2165c2-9926-45e1-89f8-995854350fac20190406160711' width='100%'>;"
  let logotec290="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/0f/54/02/0010ae4030-5c0a-4d18-9b1f-f1c23b932d0f20230327215402' width='100%'>;"
  let logotec291="<img src='https://www.parciaiscartola.com.br/assets/png/sem-imagem.png' width='100%'>;"
  let logotec292="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_109/escudo/21/23/47/005f69c45c-0de9-46a1-bb19-ae01c9fcee2120180413062347' width='100%'>;"
  let logotec293="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/98/07/14/009be53b52-9ea8-43d8-b1ad-9a25d353569820230316180714' width='100%'>;"
  let logotec294="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_216/escudo/e4/14/33/001b8de513-131b-4b64-956d-5f0eddd411e420230415131433' width='100%'>;"
  let logotec295="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_186/escudo/82/43/14/00c82b1200-b09b-4241-a658-b192bb14c38220210505224314' width='100%'>;"
  let logotec296="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/5f/45/43/002cc2f28e-031c-4447-bf17-cf8728b9a05f20230329204543' width='100%'>;"
  let logotec297="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_169/escudo/4f/25/42/004bbfc3ca-e2c3-4a05-94bc-8ef40c9c974f20200805162542' width='100%'>;"
  let logotec298="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_201/escudo/92/15/38/0093152d62-31ac-40bd-abd3-a1886c9fd59220220331021538' width='100%'>;"
  let logotec299="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_201/escudo/1f/01/23/00fef87c80-468d-49d9-a66d-87125192781f20220328120123' width='100%'>;"
  let logotec300="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_213/escudo/d8/47/38/000076c98c-facb-4c67-b4fa-042e01c6ded820230410214738' width='100%'>;"
  let logotec301="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_111/escudo/f0/48/27/00a222e6d4-6358-4efd-8954-66fcadc910f020180414074827' width='100%'>;"
  let logotec302="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_199/escudo/8b/01/46/002a757970-38d8-46a3-863f-2e0f497faf8b20220310200146' width='100%'>;"
  let logotec303="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_143/escudo/d4/42/50/00eb0e34ae-92c5-408f-bab9-ecf8e7e261d420190427124250' width='100%'>;"
  let logotec304="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/db/20/27/0078bbaf8f-5835-4b32-8cde-87c488bca8db20230327112027' width='100%'>;"
  let logotec305="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_100/escudo/cb/11/01/009f02cffa-6438-4f5d-a9bb-669d2a6cf4cb20180323091101' width='100%'>;"
  let logotec306="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_213/escudo/d6/25/11/00da2fb98a-687c-4b01-81fa-cd178a86abd620230409152511' width='100%'>;"
  let logotec307="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_216/escudo/22/03/27/00c5ba354c-2271-42a3-881f-4fefedb8c02220230415150327' width='100%'>;"
  let logotec308="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_206/escudo/ea/31/21/003657ac1c-efa3-44b3-9542-e9d726633bea20220415223121' width='100%'>;"
  let logotec309="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_215/escudo/47/35/22/0079bdcffc-e5c1-4ca8-bb74-87140555894720230414183522' width='100%'>;"
  let logotec310="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/83/11/57/00b89040c7-3ffe-4854-b951-75c08a71ca8320230320181157' width='100%'>;"
  let logotec311="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_213/escudo/36/12/38/00f9dc7744-ec58-4878-982b-426da729cc3620230410201238' width='100%'>;"
  let logotec312="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_216/escudo/ed/44/55/00bb588833-55c2-4be4-b643-83e5d0a919ed20230415104455' width='100%'>;"
  let logotec313="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_216/escudo/64/06/32/008e6a0ae1-4b19-4d6d-a2ac-8d61fb77ec6420230415150632' width='100%'>;"
  let logotec314="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/ef/36/18/005f4d515d-e275-4992-a3c3-e7a5af94b5ef20230316173618' width='100%'>;"
  let logotec315="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_210/escudo/0c/33/30/00c464bdad-48ae-4b23-a6cb-51cba9fa0a0c20230316123330' width='100%'>;"
  let logotec316="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_213/escudo/9a/50/24/0042c0fa69-2131-4364-9889-9ccfcb59669a20230408195024' width='100%'>;"
  let logotec317="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_215/escudo/8e/22/39/0006308537-ca2e-4d05-9ac9-ea342836408e20230414202239' width='100%'>;"
  let logotec318="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_210/escudo/2e/40/31/000b5b0155-a742-4f2d-8495-288e4574b02e20230316114031' width='100%'>;"
  let logotec319="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_111/escudo/89/32/17/00090e5de5-18d6-45c0-8318-41cc93cef38920180414103217' width='100%'>;"
  let logotec320="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_104/escudo/cb/03/17/004008d9c2-4acc-44de-8571-1073f2205fcb20180330090317' width='100%'>;"
  let logotec321="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_185/escudo/b8/04/16/00586fbc9b-f977-4d21-b4d2-3a9d56548fb820210429000416' width='100%'>;"
  let logotec322="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/84/15/16/00a6f4e9cc-86fe-470f-a517-505513ff7a8420230331191516' width='100%'>;"
  let logotec323="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_199/escudo/b9/32/44/00c6643ffe-4ecf-471f-8fe9-688c5e4d1ab920220310163244' width='100%'>;"
  let logotec324="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/88/55/20/00d660daa9-acd4-428b-9e82-b941f564bb8820230326075520' width='100%'>;"
  let logotec325="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/c1/17/01/00c259dbbc-32e2-4425-8a34-58fdcba8c4c120230327161701' width='100%'>;"
  let logotec326="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_200/escudo/71/53/10/00e058ca0f-9ff2-4960-b01b-31b88120037120220311225310' width='100%'>;"
  let logotec327="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_202/escudo/d7/26/04/00e3132414-927d-4450-ab2e-5cd04839b8d720220402192604' width='100%'>;"
  let logotec328="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_215/escudo/ce/16/20/00662bf961-2f7f-429a-a546-7f458cc37dce20230414121620' width='100%'>;"
  let logotec329="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_213/escudo/15/12/12/00775cf8aa-6f34-4563-b057-e4bec6e4a61520230409121212' width='100%'>;"
  let logotec330="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/80/24/17/00c8491f47-aa00-4700-a757-cd50345c1d8020230330182417' width='100%'>;"
  let logotec331="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/c4/10/53/006bdb3699-4cca-4eff-bf80-5fdd0a35ddc420230321231053' width='100%'>;"
  let logotec332="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/0e/05/16/00afbf2c78-3700-4044-a341-f9935bb8630e20230317000516' width='100%'>;"
  let logotec333="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_187/escudo/a4/40/37/00885a8374-f8b5-47a9-a24c-c2975bebfba420210520184037' width='100%'>;"
  let logotec334="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_213/escudo/b5/34/06/0050f2b816-660a-41e2-9d2f-c4aca669c9b520230404223406' width='100%'>;"
  let logotec335="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/84/28/51/00960822af-081b-49e5-b982-f0d736ec028420230322002851' width='100%'>;"
  let logotec336="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_189/escudo/aa/41/01/00dbb139a0-6d27-4637-a3dc-e7dd509f40aa20210526224101' width='100%'>;"
  let logotec337="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/41/52/02/00d02c2d75-ef67-45ca-8bd0-23a6eabf374120230316195202' width='100%'>;"
  let logotec338="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_216/escudo/c9/39/46/007464e5dc-c5bc-449e-87f4-4f7762e43dc920230415123946' width='100%'>;"
  let logotec339="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_213/escudo/0c/30/20/00dac4359b-0c00-45ea-a138-ff48946a940c20230407193020' width='100%'>;"
  let logotec340="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_216/escudo/4a/15/35/00e7c44208-ecce-4088-95eb-e47101cf5c4a20230415131535' width='100%'>;"
  let logotec341="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/5e/38/37/00dcad6405-f93c-4b91-aa24-914e137cfc5e20230316153837' width='100%'>;"
  let logotec342="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/51/31/06/0059281b30-6f7c-4998-a1fd-a6679d1b085120230316173106' width='100%'>;"
  let logotec343="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_103/escudo/26/23/20/00ca2c5445-306d-45af-b8d3-b4a3840b022620180329222320' width='100%'>;"
  let logotec344="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/2d/14/03/005a90df66-67c6-414a-bb54-b1bec6322d2d20230322081403' width='100%'>;"
  let logotec345="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/f5/48/09/00ed81511f-c727-4198-b00c-4b9ab8e4d1f520230323074809' width='100%'>;"
  let logotec346="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/16/53/35/00f0520e35-16e4-470d-a429-e96bf382f51620230402185335' width='100%'>;"
  let logotec347="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_103/escudo/19/21/18/00eda4c0f8-ed08-49e8-b17c-dc1c5d79891920180329132118' width='100%'>;"
  let logotec348="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/f0/45/50/00db074bc1-8e17-4796-be3d-e048b77c9ff020230330184550' width='100%'>;"
  let logotec349="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_214/escudo/db/28/53/004f1627c5-9306-4291-8df5-80ea1a8666db20230412082853' width='100%'>;"
  let logotec350="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_121/escudo/2b/48/08/00e91e4ed8-c061-4952-bad8-12ca5278672b20180719144808' width='100%'>;"
  let logotec351="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/e6/44/38/00d6ce91fd-a4bd-46ee-9ccf-cbad56daa1e620230321154438' width='100%'>;"
  let logotec352="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_206/escudo/46/06/14/002ae9a350-9694-4196-9dec-04fe13a4454620220415180614' width='100%'>;"
  let logotec353="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/72/56/41/00bf28a2df-31b2-419b-acbb-200fce61c07220230320215641' width='100%'>;"
  let logotec354="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_199/escudo/2c/00/04/00586a16eb-5fe5-45ed-a68e-ff4d3271532c20220310120004' width='100%'>;"
  let logotec355="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_222/escudo/0b/42/55/002f766690-c157-461b-933a-817b440bc70b20231202074255' width='100%'>;"
  let logotec356="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_187/escudo/0b/27/36/00e6deb0a8-956d-49ec-a650-cc5331138d0b20210523122736' width='100%'>;"
  let logotec357="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_183/escudo/81/21/34/003a52e650-f6dd-47cd-965e-54a18e5df98120210427212134' width='100%'>;"
  let logotec358="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_221/escudo/42/31/26/000176f107-405f-4ee7-a6c1-cefee789954220230723213126' width='100%'>;"
  let logotec359="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_221/escudo/37/13/50/008706fb73-28dc-4157-9796-f38bfcebf13720230819121350' width='100%'>;"
  let logotec360="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_221/escudo/37/13/50/008706fb73-28dc-4157-9796-f38bfcebf13720230819121350' width='100%'>;"
  let logotec361="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_189/escudo/40/21/14/00f2354ddd-7896-47e5-859a-eb137f5e7a4020210527122114' width='100%'>;"
  let logotec362="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/b7/39/24/0022eef16f-d06e-4cc5-af4d-35f4f3688cb720230317073924' width='100%'>;"
  let logotec363="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_210/escudo/46/14/42/0022e5a0f9-4243-4981-872c-d50880cbbd4620230316131442' width='100%'>;"
  let logotec364="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_182/escudo/dc/37/06/002275454b-87dc-4880-b4d6-a58346f243dc20210131143706' width='100%'>;"
  let logotec365="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_201/escudo/23/28/38/0071c083ad-1e68-45b2-800c-32105616dd2320220326192838' width='100%'>;"
  let logotec366="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_210/escudo/0e/01/26/008ba7aefc-be9a-4285-883b-d431f530eb0e20230316120126' width='100%'>;"
  let logotec367="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_213/escudo/30/03/36/000bcf5b3c-c826-4055-a294-5b770679743020230407210336' width='100%'>;"
  let logotec368="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_219/escudo/03/08/51/00e96e72c4-8bc7-45fc-b013-ba76ba8aa30320230506170851' width='100%'>;"
  let logotec369="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_209/escudo/bf/06/15/00e3cb6731-4f33-4eaa-b346-fc3caf0ce5bf20220727120615' width='100%'>;"
  let logotec370="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_216/escudo/f5/04/56/00655ab6a4-bbbf-4eb4-87d3-b259af0eadf520230415170456' width='100%'>;"
  let logotec371="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/d5/43/04/00a103bea6-3e17-4032-b897-7dba0248b3d520230316194304' width='100%'>;"
  let logotec372="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_213/escudo/9f/04/46/0071f0954b-e4f2-4c68-b358-a84dac8b1a9f20230409220446' width='100%'>;"
  let logotec373="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_219/escudo/1a/44/20/00bd0fa420-f8c1-43bd-ab37-f92c2572a51a20230509074420' width='100%'>;"
  let logotec374="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/2a/04/24/00a1d30392-e383-4360-8aa2-13c4b7d96e2a20230316180424' width='100%'>;"
  let logotec375="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_193/escudo/aa/06/52/007d36edd7-257d-4829-8d47-1d85e8a1beaa20210608190652' width='100%'>;"
  let logotec376="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/29/54/02/00455b34b9-9d4a-44fc-a807-f38db024072920230318135402' width='100%'>;"
  let logotec377="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/27/25/46/0079223df3-a158-4ed4-9e5b-0fc2a4f26e2720230316182546' width='100%'>;"
  let logotec378="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_221/escudo/ef/47/09/0060c8554d-9814-4985-90aa-021461740def20230816004709' width='100%'>;"
  let logotec379="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_183/escudo/85/20/16/00cddfbedb-d3ae-4f2d-9363-be7bb5753e8520210428122016' width='100%'>;"
  let logotec380="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_221/escudo/f0/33/52/0021447cc1-cfa5-427a-9368-d91a45dc62f020230821013352' width='100%'>;"
  let logotec381="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_221/escudo/79/56/08/00edda5fc8-906b-4bac-8fc2-872218dfd37920230902145608' width='100%'>;"
  let logotec382="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/32/58/07/007e744ce3-ff19-4705-8344-809311aabe3220230404105807' width='100%'>;"
  let logotec383="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_216/escudo/38/19/26/00b413bb39-8be9-4961-b324-fa3cdf75a43820230415121926' width='100%'>;"
  let logotec384="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_164/escudo/24/03/14/00c107ebc4-1086-4c9d-80f8-4b1d2c3be02420200721220314' width='100%'>;"
  let logotec385="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_213/escudo/0f/01/26/0071ede800-2295-4fe1-9235-bb5394fa350f20230407120126' width='100%'>;"
  let logotec386="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_199/escudo/71/56/20/00209c3f29-fb70-4d85-8f09-4b73b6b7a57120220310235620' width='100%'>;"
  let logotec387="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_222/escudo/13/48/13/00d6014ae2-8e64-46c1-a49c-d982c0b91a1320231109224813' width='100%'>;"
  let logotec388="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_158/escudo/8c/13/41/00f5f5a4b2-ba39-400f-a6ed-adb0f2ad5a8c20190712111341' width='100%'>;"
  let logotec389="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_202/escudo/c9/03/20/00f68ac773-adba-43a8-a95e-94cedaa9dbc920220405220320' width='100%'>;"
  let logotec390="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_201/escudo/0a/23/17/004a45de0a-a9fb-4cca-bddf-d235593c7d0a20220330172317' width='100%'>;"
  let logotec391="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/e4/26/52/0033ac0372-6e8c-46d6-b35b-795f3ffc84e420230328132652' width='100%'>;"
  let logotec392="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_213/escudo/1c/17/34/0045f59be5-2f7b-47b8-afc5-01ac090ae21c20230407001734' width='100%'>;"
  let logotec393="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/ed/10/06/0040f203ac-e18a-4332-953b-b4878e98d8ed20230316201006' width='100%'>;"
  let logotec394="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_170/escudo/1c/32/13/00d75983c8-5fe0-48b4-8099-90c608796c1c20200806153213' width='100%'>;"
  let logotec395="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_213/escudo/51/39/27/00cb5e7d3b-9539-4cf8-ac4b-f61fa44d655120230406103927' width='100%'>;"
  let logotec396="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_105/escudo/c4/33/04/003e698a6a-6c11-4ab3-847b-c7256ee669c420180406143304' width='100%'>;"
  let logotec397="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/9a/16/53/000a54ac94-2bc1-411f-b1cc-eede9b614a9a20230316201653' width='100%'>;"
  let logotec398="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_201/escudo/25/55/43/003fa04967-6d49-4f23-9e81-d7331a5ca92520220326135543' width='100%'>;"
  let logotec399="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/c6/01/34/006e75122b-3fa9-40d9-b81e-d5cec32ed9c620230401190134' width='100%'>;"
  let logotec400="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_185/escudo/30/58/07/00483970cc-c010-495c-a392-b80c6a009e3020210503115807' width='100%'>;"
  let logotec401="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_186/escudo/94/30/19/00f8adc0ac-8114-4253-bf4e-0971b367099420210513213019' width='100%'>;"
  let logotec402="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/ab/00/13/000fd67a99-2611-4d39-8073-4b0eed2c94ab20230319200013' width='100%'>;"
  let logotec403="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/36/49/01/0033a33f80-ba9f-41fa-91f3-63e922fc993620230316224901' width='100%'>;"
  let logotec404="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/e2/42/43/002cfa895d-7396-436d-821f-3409e4345ce220230316154243' width='100%'>;"
  let logotec405="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_185/escudo/1b/22/57/00bed4ee26-9e43-4d88-8979-cb251e3f081b20210501182257' width='100%'>;"
  let logotec406="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_100/escudo/87/23/57/008da72c4b-c962-4ab7-bae8-14d08de6f18720180323112357' width='100%'>;"
  let logotec407="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_110/escudo/a0/29/37/002247ec7a-8897-44eb-8e9f-c108f2d42ba020180413182937' width='100%'>;"
  let logotec408="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_178/escudo/6b/58/43/00b8f61365-5c6e-4e1c-9dde-2624a3cbf96b20200828175843' width='100%'>;"
  let logotec409="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_210/escudo/e5/03/39/00b6aec8f5-91da-4b24-8893-8c56148c58e520230316120339' width='100%'>;"
  let logotec410="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_214/escudo/64/50/49/0097d29f56-fc64-4aa6-90c7-3087b38ad36420230413105049' width='100%'>;"
  let logotec411="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_107/escudo/ae/25/18/003d86dbdd-f987-4477-9097-3fc2103515ae20180409232518' width='100%'>;"
  let logotec412="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/f1/25/22/0076d98d22-3cca-4539-9ec4-ceff0dc2cbf120230324132522' width='100%'>;"
  let logotec413="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_210/escudo/8b/50/33/00d936b517-26d5-45e2-a71a-beaf1428368b20230316135033' width='100%'>;"
  let logotec414="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/a5/23/00/0097b3fdf0-9984-45c2-96ca-19c8095278a520230316152300' width='100%'>;"
  let logotec415="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_215/escudo/a2/27/28/00c636d0e6-fa07-4e59-bda9-868cc2eb8ba220230415002728' width='100%'>;"
  let logotec416="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/1b/44/46/001aa39424-927a-4e16-bf7b-2255c049bd1b20230319134446' width='100%'>;"
  let logotec417="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_222/escudo/a6/33/07/00d53af501-2c0f-41c5-8c0d-dc8106edfda620231128173307' width='100%'>;"
  let logotec418="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_134/escudo/6f/01/54/00aef23813-0144-4e71-9e91-e3472a349d6f20190404170154' width='100%'>;"
  let logotec419="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/c9/56/10/00bf76ddd4-e81d-4957-bb4d-81f2142481c920230321165610' width='100%'>;"
  let logotec420="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_196/escudo/87/16/39/00ad78858e-5328-4682-bb3a-00396b7d728720210725161639' width='100%'>;"
  let logotec421="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_219/escudo/d7/00/34/00afbbb72b-9724-4633-8f72-194bea5359d720230504140034' width='100%'>;"
  let logotec422="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/e7/06/47/00d490cf0a-9632-474d-b46b-37f9b6a9afe720230319130647' width='100%'>;"
  let logotec423="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/5b/39/52/00f8f18cbc-f953-485c-8f35-bee04998725b20230402143952' width='100%'>;"
  let logotec424="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_210/escudo/f7/38/34/0072ba32e2-bea2-451a-811f-f8f297c773f720230316123834' width='100%'>;"
  let logotec425="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_219/escudo/b6/39/17/0099ee7baa-fad1-4052-988f-765191e482b620230509113917' width='100%'>;"
  let logotec426="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_215/escudo/a6/23/21/00018c815b-ab08-4a7a-b429-111097f199a620230414182321' width='100%'>;"
  let logotec427="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/b2/30/45/00ff01b76a-1fc9-46f5-9dfc-dff0a5d3a6b220230323233045' width='100%'>;"
  let logotec428="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_102/escudo/f2/13/52/006cdc5c4d-bb30-4412-ae2e-512fb28a6ef220180326191352' width='100%'>;"
  let logotec429="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_186/escudo/d7/48/19/005caa8b24-a53d-45d4-8512-6e9ba2c5d7d720210507214819' width='100%'>;"
  let logotec430="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_214/escudo/b2/34/08/00ac406df0-ed54-4e3e-91f9-e947bc5c67b220230413153408' width='100%'>;"
  let logotec431="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_102/escudo/a4/36/45/0097639ec2-6e13-449b-9be0-6b2632c7aaa420180326203645' width='100%'>;"
  let logotec432="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_210/escudo/fb/30/08/00ff1124f6-2927-4d2a-b518-6e78480e3afb20230316133008' width='100%'>;"
  let logotec433="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_214/escudo/03/56/12/005f910ec8-cb64-4ef1-a3dc-88663cccb80320230414005612' width='100%'>;"
  let logotec434="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_143/escudo/f2/27/24/0072484785-b630-4f8f-8ca9-ac505a2130f220190427132724' width='100%'>;"
  let logotec435="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/8f/41/27/000a3c20db-21fa-4584-80ca-aef5a339c28f20230327144127' width='100%'>;"
  let logotec436="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/56/21/11/004cf96ab5-7bb4-4f4e-94a7-bdca1511eb5620230317192111' width='100%'>;"
  let logotec437="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_213/escudo/47/39/56/0058e97b8c-115c-434a-acb3-028d1e3a604720230405213956' width='100%'>;"
  let logotec438="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_221/escudo/f9/19/33/00d2fd2188-3e30-44b9-a1f4-f79212eb2cf920230812231933' width='100%'>;"
  let logotec439="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_201/escudo/8b/47/02/0005156e72-4258-4de2-a1e4-fa7ebdaeb98b20220325184702' width='100%'>;"
  let logotec440="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_168/escudo/96/10/42/002a07e2f4-8e60-4eb9-84d8-dc6e7beb0f9620200803121042' width='100%'>;"
  let logotec441="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/9f/41/05/009b29c175-1273-47eb-9760-76fdfe6ea29f20230318124105' width='100%'>;"
  let logotec442="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_212/escudo/54/06/38/00ef6effa4-0be0-4fe3-9ede-8ea3229bad5420230404140638' width='100%'>;"
  let logotec443="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_222/escudo/2d/21/47/00643f44df-51d0-4a3c-9359-4dc8e02ca12d20240315142147' width='100%'>;"
  let logotec444="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_222/escudo/3b/25/37/0017ab42d1-8fc3-4c56-aba9-87abd7fba93b20240314132537' width='100%'>;"
  let logotec445="<img src='https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_211/escudo/19/59/53/007b29857a-267c-4671-8d14-6c8f7dd1da1920230317065953' width='100%'>;"
  


  
  
  
  
  
  
  
  
  
  
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
  let logogama="<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/SEGama_2023.png/180px-SEGama_2023.png' width='100%'>";
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
  
  
  /**CLUBES**/  var semclube={nome:'sem clube',logo:logosemclube,nivel:'citadino',uf:'RS',estadual:'RS2',div:' ',rodingr:'1',obj:'0'};
  
  

  let quinzedenovembro=['15 de Novembro',logoquinzedenovembro,'Citadino','RS','RS2','E',1,'',0,5,1,5,4,1,3,2,0,3,4,4,3,2,2,1,3,0,2,0,0,1,3,3,3,5,1,4,4,0,0,1,5,0,1,0,0,2,'titulo1','titulo2','titulo3','titulo4','titulo5','titulo6','titulo7','titulo8','titulo9','titulo10','titulo11','titulo12','titulo13','titulo14','titulo15','titulo16','titulo17','titulo18','titulo19','titulo20'];
  let abc=['ABC',logoabc,'Estadual','RN','NO','C',1,'G4',0,5,5,0,5,1,3,3,4,4,2,3,5,0,1,4,0,2,4,2,1,2,0,1,0,3,0,3,2,0,1,5,5,3,3,3,5,0,'','','','','','','','','','','','','','','','','','','',''];
  let aguasanta=['Água Santa',logoaguasanta,'Citadino','SP','SP2','E',1,'',0,1,5,1,0,1,1,5,3,4,5,2,2,5,5,0,3,4,1,3,3,0,3,4,5,2,3,4,4,3,3,3,3,5,0,4,2,1,'','','','','','','','','','','','','','','','','','','',''];
  let aguiademaraba=['Águia de Marabá',logoaguiademaraba,'Citadino','PA','NN1','E',1,'',0,0,0,3,5,0,1,4,1,3,2,4,5,3,4,4,1,3,4,2,3,4,4,2,3,3,5,5,3,2,3,3,1,4,1,0,0,0,'','','','','','','','','','','','','','','','','','','',''];
  let aguianegra=['Águia Negra',logoaguianegra,'Citadino','MS','CO1','E',1,'',1,5,2,5,2,3,3,2,4,4,0,0,4,4,3,1,1,0,2,0,4,2,2,0,4,2,0,5,4,5,0,1,1,0,1,5,4,1,'','','','','','','','','','','','','','','','','','','',''];
  let altos=['Altos',logoaltos,'Citadino','PI','NO2','E',1,'',0,0,5,2,1,3,3,2,4,2,3,3,0,1,5,5,0,0,2,5,2,4,3,0,2,0,1,2,3,1,4,4,2,5,1,4,3,4,'','','','','','','','','','','','','','','','','','','',''];
  let amazonas=['Amazonas',logoamazonas,'Citadino','AM','NN','D',1,'',0,4,1,3,3,4,2,1,1,0,4,1,1,5,0,3,0,2,4,1,2,0,3,1,4,5,1,4,4,4,4,3,0,0,2,3,5,3,'','','','','','','','','','','','','','','','','','','',''];
  let americamg=['América-MG',logoamericamg,'Pequeno','MG','MG','A',1,'G16',2,1,3,4,1,5,4,0,5,4,1,2,3,2,0,3,0,3,1,1,3,2,1,4,1,2,4,1,3,4,3,4,5,5,3,5,0,3,'','','','','','','','','','','','','','','','','','','',''];
  let americarj=['América-RJ',logoamericarj,'Regional','RJ','RJ1','B',1,'G16',0,2,4,1,0,3,1,2,3,0,0,1,4,3,0,3,5,3,3,5,4,0,2,5,0,3,1,1,1,3,0,1,4,5,0,3,4,5,'','','','','','','','','','','','','','','','','','','',''];
  let americarn=['América-RN',logoamericarn,'Estadual','RN','NO','B',1,'G13',1,3,3,0,0,0,4,2,3,2,5,2,0,0,3,3,1,3,0,2,3,2,4,5,3,5,4,1,4,1,1,1,5,1,0,2,5,2,'','','','','','','','','','','','','','','','','','','',''];
  let anapolina=['Anapolina',logoanapolina,'Citadino','GO','GO','D',1,'G13',0,0,2,3,4,1,5,5,5,1,0,1,3,2,0,4,2,3,5,3,5,0,4,2,5,5,0,3,2,1,1,0,2,2,1,5,2,0,'','','','','','','','','','','','','','','','','','','',''];
  let anapolis=['Anápolis',logoanapolis,'Citadino','GO','GO','D',1,'',0,0,0,2,1,3,5,1,1,5,1,0,2,1,4,0,0,4,4,5,2,5,3,5,1,0,1,3,0,1,2,1,4,4,4,1,3,3,'','','','','','','','','','','','','','','','','','','',''];
  let andraus=['Andraus',logoandraus,'Citadino','PR','PR1','E',1,'',1,2,5,1,2,1,0,1,1,2,5,5,3,4,2,4,3,3,2,0,0,5,3,3,5,5,2,2,0,1,5,5,5,5,3,2,4,1,'','','','','','','','','','','','','','','','','','','',''];
  let aparecidense=['Aparecidense',logoaparecidense,'Citadino','GO','GO','D',1,'',0,0,4,2,1,4,2,2,4,2,1,4,1,2,5,4,5,2,0,1,4,3,3,1,3,0,1,4,0,5,0,5,2,4,5,3,0,0,'','','','','','','','','','','','','','','','','','','',''];
  let afogados=['Afogados',logoafogados,'Citadino','PE','PE1','E',1,'G16',1,5,3,1,2,2,2,5,4,0,1,5,3,2,1,3,0,0,1,2,3,3,1,1,3,1,1,4,0,5,5,4,0,2,1,0,4,2,'','','','','','','','','','','','','','','','','','','',''];
  let asa=['ASA',logoasa,'Regional','AL','NO1','D',1,'',0,2,4,0,5,2,1,0,3,3,1,1,2,0,5,2,0,4,5,3,1,5,2,3,3,0,4,3,3,3,5,0,2,4,4,3,1,3,'','','','','','','','','','','','','','','','','','','',''];
  let athletic=['Athletic',logoathletic,'Citadino','MG','MG','C',1,'SUBIR',1,1,0,0,5,0,2,4,1,5,1,5,5,2,0,0,3,1,3,5,0,1,4,2,0,5,3,4,2,1,5,2,4,4,0,1,1,5,'','','','','','','','','','','','','','','','','','','',''];
  let athletico=['Athletico',logoathletico,'Médio','PR','PR','A',1,'G13',0,143,15,4,3,1,4,3,3,1,2,0,1,4,2,2,0,1,3,1,2,1,1,1,4,4,3,4,2,1,2,2,5,5,3,1,1,1,1,'','','','','','','','','','','','','','','','','','','',''];
  let atleticocearense=['Atlético Cearense',logoatleticocearense,'Citadino','CE','CE','D',1,'',1,5,3,2,1,1,4,1,0,4,4,0,0,3,5,1,1,3,5,1,5,5,0,3,2,1,4,2,0,5,4,4,0,4,1,1,5,0,'','','','','','','','','','','','','','','','','','','',''];
  let atleticogo=['Atlético-GO',logoatleticogo,'Pequeno','GO','GO','A',1,'G16',0,0,2,0,3,2,5,1,1,3,2,1,0,0,0,5,1,5,5,5,3,0,2,3,2,4,0,1,4,5,2,4,4,3,1,2,4,4,'','','','','','','','','','','','','','','','','','','',''];
  let atleticomg=['Atlético-MG',logoatleticomg,'Grande','MG','MG','A',1,'G4',1,3,2,5,3,2,0,3,4,4,3,4,5,1,4,2,3,4,5,5,4,2,3,2,0,3,2,4,3,4,5,5,3,3,1,5,0,4,'','','','','','','','','','','','','','','','','','','',''];
  let audax=['Audax',logoaudax,'Citadino','RJ','RJ','D',1,'G13',0,1,5,0,1,1,3,5,3,5,4,4,5,1,3,2,1,2,5,3,1,1,1,0,0,1,4,5,3,2,3,2,3,3,1,3,4,2,'','','','','','','','','','','','','','','','','','','',''];
  let avai=['Avaí',logoavai,'Pequeno','SC','SC','C',1,'G4',0,0,3,0,2,4,4,2,2,5,3,4,3,0,1,5,2,0,1,1,4,4,5,3,3,1,3,2,0,3,5,4,0,5,2,4,3,1,'','','','','','','','','','','','','','','','','','','',''];
  let avenida=['Avenida',logoavenida,'Citadino','RS','RS1','D',1,'0',4,0,4,0,1,4,1,5,1,4,4,0,2,3,3,4,5,4,2,2,5,0,3,2,3,4,3,0,1,0,4,3,2,1,3,1,3,3,'','','','','','','','','','','','','','','','','','','',''];
  let azuriz=['Azuriz',logoazuriz,'Citadino','PR','PR1','E',1,'G16',0,1,1,0,0,0,3,3,0,0,4,5,0,4,2,5,5,4,1,0,2,4,4,1,1,2,1,3,4,5,0,4,2,1,1,1,2,0,'','','','','','','','','','','','','','','','','','','',''];
  let bage=['Bagé',logobage,'Citadino','RS','RS1','E',1,'G13',0,2,5,5,3,2,2,1,3,2,2,2,0,2,4,1,5,5,4,2,4,2,5,4,1,3,4,5,1,3,5,2,5,3,5,4,4,3,'','','','','','','','','','','','','','','','','','','',''];
  let bahia=['Bahia',logobahia,'Grande','BA','BA','A',1,'G13',0,4,2,4,3,0,2,5,3,1,1,0,0,0,4,4,4,5,4,0,5,4,4,5,4,2,3,2,1,2,4,3,1,0,5,2,3,5,'','','','','','','','','','','','','','','','','','','',''];
  let bangu=['Bangu',logobangu,'Citadino','RJ','RJ1','E',1,'0',0,5,4,4,0,3,0,5,1,5,0,2,1,3,3,4,3,2,2,0,4,1,0,5,3,0,2,2,4,4,3,2,3,5,3,5,0,4,'','','','','','','','','','','','','','','','','','','',''];
  let barbalha=['Barbalha',logobarbalha,'Citadino','CE','CE1','E',1,'',1,2,5,2,0,3,4,1,3,5,1,5,0,2,0,2,3,1,3,0,5,0,5,5,5,3,3,3,1,0,0,5,4,2,1,1,1,4,'','','','','','','','','','','','','','','','','','','',''];
  let barrasc=['Barra-SC',logobarrasc,'Citadino','SC','SC','D',1,'',0,2,5,0,2,2,1,2,2,0,3,3,4,1,5,4,5,4,3,3,5,3,2,2,3,3,5,2,1,3,0,0,4,2,0,4,1,2,'','','','','','','','','','','','','','','','','','','',''];
  let belojardim=['Belo Jardim',logobelojardim,'Citadino','PE','PE1','E',1,'',5,0,1,5,1,2,5,0,3,1,3,0,3,1,3,5,5,2,3,0,4,5,0,2,1,3,3,2,5,0,1,1,3,0,4,5,5,4,'','','','','','','','','','','','','','','','','','','',''];
  let boaesporte=['Boa Esporte',logoboaesporte,'Citadino','MG','MG1','E',1,'',0,5,2,0,4,0,0,4,4,4,5,2,3,0,5,2,0,5,5,3,3,5,4,2,2,2,5,1,2,4,3,1,3,4,0,2,1,1,'','','','','','','','','','','','','','','','','','','',''];
  let bonsucesso=['Bonsucesso',logobonsucesso,'Citadino','RJ','RJ1','E',1,'',2,2,5,4,1,0,3,1,4,2,0,5,3,5,2,1,3,4,0,0,5,0,0,5,2,3,5,0,5,3,5,4,2,2,2,5,5,4,'','','','','','','','','','','','','','','','','','','',''];
  let botafogo=['Botafogo',logobotafogo,'Grande','RJ','RJ','A',1,'G8',0,4,4,4,1,4,2,0,5,4,1,2,5,1,0,2,4,0,4,5,0,5,5,3,2,0,2,4,2,5,5,0,3,1,3,5,2,3,'','','','','','','','','','','','','','','','','','','',''];
  let botafogopb=['Botafogo-PB',logobotafogopb,'Regional','PB','NO','C',1,'G13',0,1,0,4,2,0,0,0,2,0,1,3,0,0,4,3,1,1,1,3,4,5,5,2,1,0,2,3,5,4,1,4,0,2,1,1,4,4,'','','','','','','','','','','','','','','','','','','',''];
  let botafogosp=['Botafogo-SP',logobotafogosp,'Regional','SP','SP','C',1,'G13',0,1,1,3,2,2,2,5,4,3,2,0,5,0,1,3,3,2,1,3,2,0,4,1,2,1,5,2,4,1,5,4,5,5,1,5,2,3,'','','','','','','','','','','','','','','','','','','',''];
  let bragantino=['Bragantino',logobragantino,'Pequeno','SP','SP','A',1,'G16',0,5,0,0,3,5,2,2,5,0,3,3,4,2,5,0,1,1,2,3,2,1,2,3,3,4,0,4,1,3,5,3,0,4,1,4,5,2,'','','','','','','','','','','','','','','','','','','',''];
  let brasiliense=['Brasiliense',logobrasiliense,'Regional','DF','CO','D',1,'',0,1,3,1,0,3,2,5,2,4,4,2,1,2,1,3,1,2,0,1,4,4,0,0,5,1,3,0,1,3,4,3,2,5,4,5,2,5,'','','','','','','','','','','','','','','','','','','',''];
  let brasilrs=['Brasil-RS',logobrasilrs,'Regional','RS','RS','B',1,'G16',2,3,3,1,3,2,2,5,3,4,2,3,5,3,2,1,1,2,1,2,5,1,0,1,5,1,1,5,0,1,2,3,1,3,4,5,5,4,'','','','','','','','','','','','','','','','','','','',''];
  let brusque=['Brusque',logobrusque,'Regional','SC','SC1','C',1,'G13',0,4,1,4,4,1,0,0,2,2,3,4,0,0,5,2,2,4,4,4,0,1,2,1,4,2,4,2,3,2,4,5,1,1,2,0,4,2,'','','','','','','','','','','','','','','','','','','',''];
  let cabofriense=['Cabofriense',logocabofriense,'Citadino','RJ','RJ1','E',1,'G13',1,5,0,2,4,2,1,5,5,1,2,2,1,2,4,2,0,0,2,3,3,4,3,2,2,3,4,2,1,1,1,1,1,5,0,3,2,3,'','','','','','','','','','','','','','','','','','','',''];
  let caldense=['Caldense',logocaldense,'Regional','MG','MG1','E',1,'',2,1,3,5,3,2,1,4,5,0,0,3,5,5,3,5,4,1,5,0,0,5,1,4,2,0,4,1,0,1,3,1,4,3,4,0,0,4,'','','','','','','','','','','','','','','','','','','',''];
  let cameta=['Cametá',logocameta,'Citadino','PA','NN2','E',1,'',0,4,0,2,2,2,1,5,2,3,0,4,0,1,0,2,1,2,5,2,3,1,1,4,5,2,5,2,2,2,1,0,2,1,5,5,3,0,'','','','','','','','','','','','','','','','','','','',''];
  let capital=['Capital',logocapital,'Citadino','TO','NN1','E',1,'',2,2,4,3,2,5,3,0,3,0,0,4,1,5,2,1,3,3,5,4,1,5,3,0,3,3,3,5,5,4,3,2,3,4,1,3,3,2,'','','','','','','','','','','','','','','','','','','',''];
  let caravaggio=['Caravaggio',logocaravaggio,'Citadino','SC','SC1','E',1,'G4',2,2,4,2,4,2,1,1,3,5,3,0,4,5,0,5,0,2,0,4,3,5,2,1,1,5,3,5,1,4,2,4,1,3,1,0,3,1,'','','','','','','','','','','','','','','','','','','',''];
  let caruarucity=['Caruaru City',logocaruarucity,'Citadino','PE','PE1','E',1,'G4',1,3,3,5,0,1,2,5,4,5,5,4,5,2,1,0,0,4,3,4,0,5,4,5,4,2,4,1,4,3,4,2,0,1,0,1,0,5,'','','','','','','','','','','','','','','','','','','',''];
  let castanhalpa=['Castanhal-PA',logocastanhalpa,'Citadino','PA','NN2','E',1,'',1,3,2,4,0,0,1,4,5,3,5,2,0,3,3,0,0,0,0,0,2,1,2,5,3,4,3,0,1,3,0,4,1,4,1,3,2,2,'','','','','','','','','','','','','','','','','','','',''];
  let caucaia=['Caucaia',logocaucaia,'Citadino','CE','CE1','E',1,'',0,3,3,4,4,3,1,2,1,4,4,2,0,2,1,5,0,0,3,4,1,3,3,5,0,2,5,4,1,5,3,4,3,1,5,0,4,4,'','','','','','','','','','','','','','','','','','','',''];
  let caxias=['Caxias',logocaxias,'Regional','RS','RS','C',1,'G13',1,1,5,1,4,4,3,2,3,2,5,4,2,0,3,4,1,1,2,3,0,4,4,4,0,5,4,0,3,3,4,2,0,1,1,5,2,5,'','','','','','','','','','','','','','','','','','','',''];
  let ceara=['Ceará',logoceara,'Pequeno','CE','CE','B',1,'G8',3,4,0,3,5,2,2,5,1,3,5,3,2,1,2,1,4,5,4,4,1,5,5,1,2,2,5,5,4,1,0,4,4,2,5,3,5,0,'','','','','','','','','','','','','','','','','','','',''];
  let ceilandia=['Ceilândia',logoceilandia,'Citadino','DF','CO1','E',1,'G4',0,0,3,5,3,3,4,1,0,3,1,2,2,0,2,1,4,4,4,3,2,3,5,4,5,2,5,3,4,4,4,1,5,0,1,2,0,4,'','','','','','','','','','','','','','','','','','','',''];
  let central=['Central',logocentral,'Citadino','PE','PE','D',1,'G4',0,2,4,5,4,2,3,3,5,3,1,3,4,4,3,4,5,1,1,4,4,0,2,3,4,2,0,1,4,2,4,4,5,0,0,1,4,3,'','','','','','','','','','','','','','','','','','','',''];
  let ceov=['CEOV',logoceov,'Citadino','MT','CO1','E',1,'G8',0,1,1,5,2,0,1,1,4,1,3,3,5,3,0,5,2,5,5,1,4,0,3,4,2,4,3,0,2,3,1,5,4,0,4,2,1,5,'','','','','','','','','','','','','','','','','','','',''];
  let chapecoense=['Chapecoense',logochapecoense,'Pequeno','SC','SC','A',1,'G16',1,5,4,4,0,4,0,1,2,3,2,2,3,0,1,1,5,5,2,0,0,3,0,0,5,1,5,3,3,1,2,3,4,3,2,1,2,3,'','','','','','','','','','','','','','','','','','','',''];
  let cianorte=['Cianorte',logocianorte,'Citadino','PR','PR','D',1,'G4',2,3,0,1,2,4,1,5,0,1,1,3,0,5,4,5,3,0,4,2,4,3,5,1,5,2,4,2,4,2,2,5,1,0,5,0,3,4,'','','','','','','','','','','','','','','','','','','',''];
  let comercialms=['Comercial-MS',logocomercialms,'Citadino','MS','CO1','E',1,'',1,2,4,3,2,5,4,1,4,4,4,5,5,0,5,3,4,5,0,4,1,0,4,4,3,2,2,3,2,5,2,5,4,4,5,4,3,0,'','','','','','','','','','','','','','','','','','','',''];
  let concordia=['Concórdia',logoconcordia,'Citadino','SC','SC','D',1,'',1,1,4,2,5,1,4,5,0,3,1,2,0,4,1,1,3,5,2,4,0,3,1,3,5,3,4,1,1,4,2,3,1,2,4,2,2,0,'','','','','','','','','','','','','','','','','','','',''];
  let confianca=['Confiança',logoconfianca,'Citadino','SE','NO','D',1,'',0,3,5,5,0,1,0,5,0,1,2,2,3,1,0,5,5,3,0,0,0,5,3,5,5,2,0,1,0,2,0,5,5,0,5,3,2,4,'','','','','','','','','','','','','','','','','','','',''];
  let corinthians=['Corinthians',logocorinthians,'Grande','SP','SP','A',1,'G8',1,0,1,5,5,5,3,0,0,1,0,2,2,1,0,2,2,5,5,1,5,2,2,2,1,0,4,3,3,1,3,2,5,3,2,1,4,0,'','','','','','','','','','','','','','','','','','','',''];
  let coritiba=['Coritiba',logocoritiba,'Médio','PR','PR','B',1,'G4',1,2,5,5,3,5,0,2,0,3,1,1,5,0,5,3,4,1,2,0,4,3,2,5,0,2,5,2,0,0,1,4,5,2,4,2,2,0,'','','','','','','','','','','','','','','','','','','',''];
  let costarica=['Costa Rica',logocostarica,'Citadino','MS','CO','D',1,'',0,2,1,2,0,4,5,3,0,3,2,1,2,4,1,3,3,4,0,5,5,5,1,4,2,4,4,1,2,5,5,0,2,5,3,3,3,3,'','','','','','','','','','','','','','','','','','','',''];
  let crac=['CRAC',logocrac,'Citadino','GO','GO','D',1,'G16',0,0,2,2,1,4,0,0,0,0,2,0,2,3,0,5,5,4,4,3,5,2,3,1,1,5,2,3,1,3,2,1,2,5,5,2,0,1,'','','','','','','','','','','','','','','','','','','',''];
  let crato=['Crato',logocrato,'Citadino','CE','CE1','E',1,'G16',0,3,2,4,2,3,1,1,4,3,1,4,5,4,2,0,2,2,2,4,1,2,0,0,5,5,4,2,3,0,5,1,4,4,2,0,5,2,'','','','','','','','','','','','','','','','','','','',''];
  let crb=['CRB',logocrb,'Estadual','AL','NO1','C',1,'G8',0,4,2,4,3,0,3,0,4,0,0,4,2,5,3,3,1,0,0,2,0,0,0,4,2,1,0,3,2,5,1,0,0,4,2,3,5,2,'','','','','','','','','','','','','','','','','','','',''];
  let criciuma=['Criciuma',logocriciuma,'Estadual','SC','SC','B',1,'G4',2,3,1,3,1,3,1,2,1,1,3,5,4,3,2,5,5,2,0,1,1,5,4,2,0,0,3,1,5,3,4,1,3,1,2,5,3,3,'','','','','','','','','','','','','','','','','','','',''];
  let cruzeiro=['Cruzeiro',logocruzeiro,'Grande','MG','MG','B',1,'G4',0,2,4,2,1,4,2,5,5,4,3,0,0,0,0,4,3,3,0,4,2,5,2,1,3,4,5,4,5,0,1,1,0,5,0,1,2,5,'','','','','','','','','','','','','','','','','','','',''];
  let csa=['CSA',logocsa,'Estadual','AL','NO','C',1,'G8',0,5,1,0,3,0,4,0,2,1,3,0,5,4,4,4,3,5,3,0,1,5,0,4,4,2,0,3,1,5,3,3,0,3,2,4,3,3,'','','','','','','','','','','','','','','','','','','',''];
  let cse=['CSE',logocse,'Citadino','AL','NO1','D',1,'',0,0,3,3,0,1,2,4,4,1,5,1,3,2,3,0,5,3,2,2,5,1,0,0,3,3,0,5,4,1,5,5,2,4,3,0,1,3,'','','','','','','','','','','','','','','','','','','',''];
  let cuiaba=['Cuiabá',logocuiaba,'Estadual','MT','CO','B',1,'G4',0,4,3,1,0,1,4,5,4,5,3,3,2,5,5,5,3,0,3,2,4,0,4,2,2,2,4,3,4,1,3,1,3,2,0,3,0,0,'','','','','','','','','','','','','','','','','','','',''];
  let decisaosertania=['Decisão Sertânia',logodecisaosertania,'Citadino','PE','PE1','E',1,'',1,1,3,3,2,1,2,1,3,5,0,0,3,5,1,2,3,3,2,1,0,0,5,4,4,0,0,5,5,3,5,1,2,4,3,2,2,3,'','','','','','','','','','','','','','','','','','','',''];
  let democrata=['Democrata',logodemocrata,'Citadino','MG','MG','D',1,'',0,5,4,0,0,5,3,2,2,5,4,4,2,1,1,5,1,2,1,5,3,5,5,4,0,2,5,1,4,4,3,3,1,4,4,4,0,1,'','','','','','','','','','','','','','','','','','','',''];
  let dombosco=['Dom Bosco',logodombosco,'Citadino','MT','CO1','E',1,'0',5,1,1,5,0,2,0,3,4,4,1,1,2,2,0,5,3,5,5,3,5,4,3,2,4,5,1,5,1,0,0,1,3,5,4,4,3,4,'','','','','','','','','','','','','','','','','','','',''];
  let esportivo=['Esportivo',logoesportivo,'Citadino','RS','RS1','E',1,'',0,4,1,0,4,1,0,4,3,0,1,0,1,1,0,3,0,4,3,2,1,0,3,3,1,3,5,0,0,5,2,0,2,5,1,0,4,3,'','','','','','','','','','','','','','','','','','','',''];
  let fastclubeam=['Fast Clube-AM',logofastclubeam,'Citadino','AM','NN2','E',1,'',0,4,4,3,4,4,0,5,3,1,0,1,5,1,4,0,1,2,5,5,1,0,0,3,2,2,0,0,0,4,2,3,0,5,1,3,2,1,'','','','','','','','','','','','','','','','','','','',''];
  let fccascavel=['FC Cascavel',logofccascavel,'Citadino','PR','PR','D',1,'',0,5,2,2,0,2,2,2,5,2,4,2,3,1,4,0,2,0,4,5,4,4,5,3,4,1,1,0,3,5,1,0,3,0,1,3,2,3,'','','','','','','','','','','','','','','','','','','',''];
  let ferroviariasp=['Ferroviária-SP',logoferroviariasp,'Citadino','SP','SP1','C',1,'SUBIR',0,4,3,1,1,0,4,4,0,1,2,0,5,5,5,3,3,4,2,3,1,0,2,4,4,1,4,3,3,3,4,3,3,3,3,2,5,1,'','','','','','','','','','','','','','','','','','','',''];
  let ferroviario=['Ferroviário',logoferroviario,'Regional','CE','CE','C',1,'G4',0,5,4,2,3,3,3,1,4,1,4,0,0,0,2,1,3,0,5,3,2,0,4,1,2,4,1,4,1,2,1,3,3,0,3,5,2,2,'','','','','','','','','','','','','','','','','','','',''];
  let figueirense=['Figueirense',logofigueirense,'Pequeno','SC','SC','C',1,'G4',0,5,5,3,3,0,5,3,4,0,0,1,3,0,3,1,3,2,0,4,0,0,5,5,5,5,5,4,0,5,5,4,5,5,3,4,3,1,'','','','','','','','','','','','','','','','','','','',''];
  let flamengo=['Flamengo',logoflamengo,'Grande','RJ','RJ','A',1,'G4',0,3,1,0,3,5,4,0,4,3,0,1,2,3,2,3,1,1,4,5,1,5,4,4,4,5,3,0,4,5,3,1,2,3,5,0,1,3,'','','','','','','','','','','','','','','','','','','',''];
  let floresta=['Floresta',logofloresta,'Citadino','CE','CE','D',1,'',0,3,2,1,4,4,3,3,5,0,3,3,5,0,0,3,5,3,1,5,4,5,2,0,5,4,5,5,4,3,3,4,4,4,2,5,3,3,'','','','','','','','','','','','','','','','','','','',''];
  let fluminense=['Fluminense',logofluminense,'Grande','RJ','RJ','A',1,'G4',0,5,2,2,1,2,2,3,3,2,3,0,5,5,1,5,4,0,2,4,2,3,2,4,1,0,1,0,2,1,0,4,1,5,2,0,1,0,'','','','','','','','','','','','','','','','','','','',''];
  let fluminensepi=['Fluminense-PI',logofluminensepi,'Citadino','PI','NO1','D',1,'',2,0,4,3,4,1,5,3,2,3,1,2,4,1,3,3,2,2,3,5,2,1,3,0,2,5,2,4,3,5,1,0,2,0,4,1,2,0,'','','','','','','','','','','','','','','','','','','',''];
  let fortaleza=['Fortaleza',logofortaleza,'Pequeno','CE','CE','A',1,'G13',1,3,4,0,1,0,5,0,5,5,3,5,4,1,5,5,3,4,5,4,2,0,2,4,4,1,3,2,5,3,3,5,0,2,1,2,2,5,'','','','','','','','','','','','','','','','','','','',''];
  let fozdoiguacu=['Foz do Iguaçu',logofozdoiguacu,'Citadino','PR','PR1','E',1,'',0,1,4,5,5,1,0,4,4,3,0,2,3,4,4,1,4,4,0,5,3,5,2,3,2,0,5,4,1,1,1,4,0,5,0,4,3,1,'','','','','','','','','','','','','','','','','','','',''];
  let galomaringa=['Galo Maringá',logogalomaringa,'Citadino','PR','PR1','E',1,'',2,1,4,4,4,5,5,1,0,3,0,3,5,3,4,3,0,2,5,3,4,0,4,5,3,4,1,3,3,0,1,0,0,4,1,1,0,5,'','','','','','','','','','','','','','','','','','','',''];
  let gama=['Gama',logogama,'Regional','DF','CO','D',1,'',0,2,2,3,0,4,3,3,3,5,5,4,1,0,0,4,5,4,0,4,0,2,4,5,0,4,4,1,4,5,2,3,1,0,5,1,5,5,'','','','','','','','','','','','','','','','','','','',''];
  let gloria=['Glória',logogloria,'Citadino','RS','RS1','E',1,'',0,3,2,2,1,0,0,1,3,2,2,2,5,5,5,2,2,5,4,0,2,0,2,1,0,2,3,1,0,4,0,4,3,3,4,0,2,5,'','','','','','','','','','','','','','','','','','','','2024'];
  let goianesia=['Goianésia',logogoianesia,'Citadino','GO','GO1','E',1,'',0,1,0,4,1,3,4,1,3,3,0,4,3,0,2,5,2,3,5,2,0,3,1,5,4,5,4,1,2,5,1,3,1,5,1,5,4,1,'','','','','','','','','','','','','','','','','','','',''];
  let goiania=['Goiânia',logogoiania,'Citadino','GO','GO1','E',1,'',0,4,0,0,4,2,0,3,0,1,4,1,3,4,5,3,1,3,0,3,2,2,0,1,0,3,5,5,1,3,5,4,4,0,2,3,3,4,'','','','','','','','','','','','','','','','','','','',''];
  let goias=['Goiás',logogoias,'Médio','GO','GO','A',1,'G13',0,2,1,2,2,2,1,3,5,1,2,3,2,4,5,2,4,0,3,5,3,4,1,5,4,2,4,2,1,4,4,4,5,1,5,5,1,5,'','','','','','','','','','','','','','','','','','','',''];
  let goiatuba=['Goiatuba',logogoiatuba,'Citadino','GO','GO1','E',1,'',0,5,2,1,2,1,3,0,1,2,0,3,3,5,4,3,1,2,4,1,1,3,1,4,1,1,5,4,3,2,1,0,5,5,1,5,1,4,'','','','','','','','','','','','','','','','','','','',''];
  let gremio=['Grêmio',logogremio,'Grande','RS','RS','A',1,'G8',0,1,3,0,1,3,5,4,2,2,4,2,3,2,0,0,3,5,0,3,5,3,3,1,0,4,3,0,0,1,5,0,0,3,3,4,3,4,'','','','','','','','','','','','','','','','','','','',''];
  let gremioanapolis=['Grêmio Anápolis',logogremioanapolis,'Citadino','GO','GO1','E',1,'G4',2,0,1,3,1,0,2,1,3,0,2,3,4,1,5,3,3,4,1,2,1,1,0,3,1,4,2,1,4,5,3,0,2,3,0,3,4,3,'','','','','','','','','','','','','','','','','','','','2024'];
  let gremiomaringa=['Grêmio Maringá',logogremiomaringa,'Citadino','PR','PR1','E',1,'',0,0,5,5,0,2,1,5,3,0,3,2,1,5,0,1,3,3,1,3,4,5,5,2,4,1,4,1,3,1,4,0,4,2,1,1,0,4,'','','','','','','','','','','','','','','','','','','',''];
  let guarani=['Guarani',logoguarani,'Pequeno','SP','SP','B',1,'G8',0,3,4,0,1,2,0,0,1,0,3,5,1,3,3,4,4,2,4,4,1,2,5,4,5,4,5,1,0,1,2,5,2,1,4,5,5,3,'','','','','','','','','','','','','','','','','','','',''];
  let guaranidepalhoca=['Guarani de Palhoça',logoguaranidepalhoca,'Citadino','SC','SC1','E',1,'',0,5,2,2,5,0,3,5,5,0,2,4,3,4,1,0,0,2,3,1,4,3,3,4,5,5,2,1,2,3,0,3,5,0,3,2,0,0,'','','','','','','','','','','','','','','','','','','',''];
  let guaranydesobral=['Guarany de Sobral',logoguaranydesobral,'Citadino','CE','CE','D',1,'',3,0,0,2,4,1,2,2,5,5,5,2,0,4,2,1,3,3,3,2,0,2,4,5,2,3,3,1,4,4,1,3,5,3,3,4,4,3,'','','','','','','','','','','','','','','','','','','',''];
  let guaranyrs=['Guarany-RS',logoguaranyrs,'Citadino','RS','RS1','E',1,'',0,2,0,5,4,1,5,4,0,2,3,1,1,0,2,2,3,4,3,1,5,3,0,0,4,3,2,0,5,1,5,5,0,2,4,4,2,1,'','','','','','','','','','','','','','','','','','','',''];
  let hercilioluz=['Hercílio Luz',logohercilioluz,'Citadino','SC','SC','D',1,'',1,0,1,3,1,5,4,4,1,5,5,3,5,5,5,2,3,5,0,3,2,3,4,3,2,5,2,2,4,2,1,2,4,1,1,2,3,1,'','','','','','','','','','','','','','','','','','','',''];
  let horizonte=['Horizonte',logohorizonte,'Citadino','CE','CE1','E',1,'G4',2,1,4,1,4,0,0,1,2,2,1,2,2,1,1,4,0,1,4,2,2,0,3,1,5,0,4,3,3,4,5,1,3,1,0,0,4,3,'','','','','','','','','','','','','','','','','','','',''];
  let humaita=['Humaitá',logohumaita,'Citadino','AC','NN1','E',1,'',1,1,2,0,4,5,2,3,4,5,2,5,3,3,5,3,2,4,2,4,0,2,3,0,2,4,2,5,0,1,4,0,3,5,2,3,2,1,'','','','','','','','','','','','','','','','','','','',''];
  let ibis=['Ibis',logoibis,'Citadino','PE','PE1','E',1,'',1,2,5,2,2,2,2,2,4,4,3,2,5,5,3,2,2,3,2,0,4,3,5,2,4,5,4,2,4,1,2,2,4,3,3,1,0,2,'','','','','','','','','','','','','','','','','','','',''];
  let icasa=['Icasa',logoicasa,'Citadino','CE','CE','D',1,'',0,1,3,2,2,0,0,4,0,0,4,1,3,1,2,1,4,3,5,5,3,1,5,4,3,3,5,4,5,2,2,4,2,2,0,5,2,1,'','','','','','','','','','','','','','','','','','','',''];
  let iguatu=['Iguatu',logoiguatu,'Citadino','CE','CE','D',1,'',0,5,3,4,2,1,1,4,2,3,1,0,4,1,3,1,3,2,1,2,0,4,2,0,5,2,5,0,2,3,0,3,3,3,0,3,2,3,'','','','','','','','','','','','','','','','','','','',''];
  let inhumas=['Inhumas',logoinhumas,'Citadino','GO','GO1','E',1,'',0,0,3,5,4,1,2,4,5,2,1,4,0,0,4,2,4,1,3,4,5,2,0,1,0,0,4,3,3,4,4,3,4,1,5,1,2,2,'','','','','','','','','','','','','','','','','','','',''];
  let interdelajes=['Inter de Lajes',logointerdelajes,'Citadino','SC','SC1','E',1,'G4',1,1,0,2,4,2,1,5,4,1,4,0,4,1,4,0,1,5,4,4,0,0,2,3,2,4,0,4,3,1,1,0,0,1,3,0,2,2,'','','','','','','','','','','','','','','','','','','',''];
  let internacional=['Internacional',logointernacional,'Grande','RS','RS','B',1,'G4',0,1,2,4,1,1,3,3,3,5,1,3,1,0,4,4,2,1,3,3,1,5,3,4,0,1,3,0,5,3,3,3,2,2,1,0,3,5,'','','','','','','','','','','','','','','','','','','',''];
  let internacionalsp=['Internacional-SP',logointernacionalsp,'Citadino','SP','SP1','D',1,'',0,5,3,1,0,3,1,0,3,1,2,3,4,5,0,3,2,5,2,4,3,3,1,4,4,2,0,5,5,0,5,2,0,5,2,4,3,2,'','','','','','','','','','','','','','','','','','','',''];
  let ipatinga=['Ipatinga',logoipatinga,'Regional','MG','MG','D',1,'G8',0,5,4,4,4,4,4,3,1,0,0,1,0,1,0,4,2,5,3,5,3,2,0,5,2,1,2,0,3,5,0,4,3,4,5,3,3,5,'','','','','','','','','','','','','','','','','','','',''];
  let ipora=['Iporá',logoipora,'Citadino','GO','GO','D',1,'',0,3,0,4,3,5,5,5,2,2,3,1,2,5,1,4,1,2,3,5,3,4,2,5,3,1,4,3,1,5,4,2,4,1,0,5,2,0,'','','','','','','','','','','','','','','','','','','',''];
  let itabaiana=['Itabaiana',logoitabaiana,'Citadino','SE','NO2','E',1,'',0,5,0,1,5,3,5,3,0,4,4,3,3,0,4,4,1,1,0,3,2,2,1,5,1,1,2,3,0,0,1,1,3,5,4,3,0,1,'','','','','','','','','','','','','','','','','','','',''];
  let itabuna=['Itabuna',logoitabuna,'Citadino','BA','BA','D',1,'',1,1,4,5,3,3,2,2,0,2,5,3,3,0,0,5,2,0,2,1,1,1,1,2,5,1,2,5,4,1,5,4,1,0,5,0,2,0,'','','','','','','','','','','','','','','','','','','',''];
  let itapipoca=['Itapipoca',logoitapipoca,'Citadino','CE','CE1','E',1,'',0,1,0,0,5,1,3,5,0,4,5,4,0,5,0,5,1,1,5,5,0,3,1,3,0,5,2,1,1,1,5,0,1,0,2,0,3,1,'','','','','','','','','','','','','','','','','','','',''];
  let ituano=['Ituano',logoituano,'Regional','SP','SP1','C',1,'SUBIR',0,2,4,3,4,1,1,5,5,2,1,4,3,2,3,1,2,0,3,4,2,3,5,5,2,5,0,5,2,3,0,5,5,4,2,5,2,4,'','','','','','','','','','','','','','','','','','','',''];
  let itumbiara=['Itumbiara',logoitumbiara,'Citadino','GO','GO1','E',1,'',1,2,1,3,1,5,1,0,1,2,0,0,1,3,5,0,0,2,2,3,2,2,4,1,3,1,5,4,5,4,3,0,5,0,0,1,5,5,'','','','','','','','','','','','','','','','','','','',''];
  let jacuipense=['Jacuipense',logojacuipense,'Citadino','BA','BA','D',1,'',0,5,5,4,5,3,4,3,2,3,0,1,1,3,3,4,5,2,2,0,1,4,1,1,2,0,3,2,0,0,0,0,2,3,1,0,4,2,'','','','','','','','','','','','','','','','','','','',''];
  let jataiense=['Jataiense',logojataiense,'Citadino','GO','GO1','E',1,'',0,5,1,0,2,4,5,4,5,1,4,1,2,4,2,4,1,4,1,1,1,2,2,4,5,2,5,5,0,5,5,4,1,0,2,5,4,2,'','','','','','','','','','','','','','','','','','','',''];
  let joinville=['Joinville',logojoinville,'Estadual','SC','SC','D',1,'',1,4,1,3,2,0,3,1,5,5,5,2,3,4,1,2,4,5,1,1,2,2,5,4,4,0,5,0,1,1,4,2,5,3,0,0,4,0,'','','','','','','','','','','','','','','','','','','',''];
  let juazeirense=['Juazeirense',logojuazeirense,'Citadino','BA','BA','D',1,'',0,3,0,0,1,4,3,4,0,5,3,5,5,3,1,5,3,4,5,0,3,2,0,4,0,2,3,1,4,2,4,2,5,0,4,0,1,5,'','','','','','','','','','','','','','','','','','','',''];
  let juventude=['Juventude',logojuventude,'Pequeno','RS','RS','C',1,'G4',1,5,2,3,4,5,1,2,2,5,5,0,0,3,2,2,0,5,3,0,1,3,1,1,4,5,2,0,1,2,1,5,1,5,0,4,0,3,'','','','','','','','','','','','','','','','','','','',''];
  let juventusdejaragua=['Juventus de Jaraguá',logojuventusdejaragua,'Citadino','SC','SC1','E',1,'G13',0,4,1,3,1,5,0,2,2,4,0,4,4,3,4,4,2,3,4,4,1,3,3,0,0,0,3,4,1,0,3,3,1,3,4,4,4,3,'','','','','','','','','','','','','','','','','','','',''];
  let lajeadense=['Lajeadense',logolajeadense,'Citadino','RS','RS1','E',1,'',1,5,5,2,3,1,3,1,5,5,1,0,3,2,2,3,2,5,3,2,0,2,2,5,5,1,0,2,1,3,4,2,0,2,4,4,5,5,'','','','','','','','','','','','','','','','','','','',''];
  let londrina=['Londrina',logolondrina,'Estadual','PR','PR','C',1,'G8',1,2,0,2,5,5,2,0,1,4,1,1,2,0,0,1,1,2,3,2,4,2,1,2,2,1,0,3,3,0,0,0,2,3,3,0,5,1,'','','','','','','','','','','','','','','','','','','',''];
  let luverdense=['Luverdense',logoluverdense,'Citadino','MT','CO1','E',1,'',3,4,3,2,2,1,3,4,1,3,4,2,4,5,5,3,0,4,2,0,0,5,1,0,2,1,0,5,2,0,2,2,2,2,3,5,3,5,'','','','','','','','','','','','','','','','','','','',''];
  let luziania=['Luziânia',logoluziania,'Citadino','DF','CO1','E',1,'',0,4,0,2,5,2,0,3,3,0,4,3,0,3,3,4,3,3,2,0,0,5,1,0,1,2,5,5,1,1,0,3,2,3,3,3,0,1,'','','','','','','','','','','','','','','','','','','',''];
  let madureira=['Madureira',logomadureira,'Citadino','RJ','RJ1','E',1,'',0,5,5,4,5,4,0,5,0,5,1,3,2,0,5,0,0,4,0,5,1,1,2,5,4,1,5,2,2,5,4,4,4,3,1,3,2,0,'','','','','','','','','','','','','','','','','','','',''];
  let maguary=['Maguary',logomaguary,'Citadino','PE','PE1','E',1,'G8',1,1,0,5,2,4,4,3,3,4,2,2,1,1,0,3,4,3,1,3,1,3,2,0,3,1,2,5,0,5,0,0,1,3,1,2,0,0,'','','','','','','','','','','','','','','','','','','',''];
  let manauara=['Manauara',logomanauara,'Citadino','AM','NN2','E',1,'',1,1,2,1,5,2,2,2,4,5,5,0,3,0,5,3,5,2,1,5,3,2,0,4,0,4,2,1,5,5,1,4,2,4,5,1,1,5,'','','','','','','','','','','','','','','','','','','',''];
  let manaus=['Manaus',logomanaus,'Regional','AM','NN','D',1,'',0,4,3,1,0,3,4,0,0,1,1,2,5,2,0,2,4,1,2,4,4,3,4,2,1,3,2,4,1,3,2,2,1,0,2,2,2,5,'','','','','','','','','','','','','','','','','','','',''];
  let maracanace=['Maracanã-CE',logomaracanace,'Citadino','CE','CE1','E',1,'',1,5,1,4,1,3,5,1,2,2,5,4,2,2,3,1,5,1,1,2,3,0,1,3,2,3,1,5,2,4,3,0,5,5,1,0,0,5,'','','','','','','','','','','','','','','','','','','',''];
  let maranhao=['Maranhão',logomaranhao,'Citadino','MA','NO2','E',1,'',3,0,1,5,3,0,2,1,5,5,1,4,5,1,3,5,5,2,1,0,4,1,2,5,0,2,1,0,1,3,1,5,2,0,5,2,1,2,'','','','','','','','','','','','','','','','','','','',''];
  let marciliodias=['Marcílio Dias',logomarciliodias,'Citadino','SC','SC1','E',1,'G13',1,1,1,5,0,5,0,2,4,4,5,3,1,1,1,2,4,0,0,1,0,3,2,0,2,5,0,5,5,4,5,1,5,0,1,5,2,2,'','','','','','','','','','','','','','','','','','','',''];
  let maringa=['Maringá',logomaringa,'Citadino','PR','PR','D',1,'',0,2,1,4,4,2,5,3,1,3,3,2,0,0,4,5,5,4,0,2,4,3,2,3,2,4,0,3,4,4,1,5,5,4,2,5,0,2,'','','','','','','','','','','','','','','','','','','',''];
  let metropolitano=['Metropolitano',logometropolitano,'Citadino','SC','SC1','E',1,'G16',0,1,0,5,1,1,2,2,1,3,1,5,4,5,1,2,4,5,4,1,4,2,0,0,2,2,5,5,2,1,3,0,0,3,5,2,4,3,'','','','','','','','','','','','','','','','','','','',''];
  let mirassol=['Mirassol',logomirassol,'Citadino','SP','SP1','C',1,'SUBIR',5,1,2,2,1,2,0,1,2,1,5,2,2,4,4,2,4,2,4,1,3,1,0,2,5,4,4,1,2,3,2,0,2,4,0,1,5,1,'','','','','','','','','','','','','','','','','','','',''];
  let mixto=['Mixto',logomixto,'Citadino','MT','CO','D',1,'',1,1,5,3,1,1,4,3,4,0,2,1,5,2,1,5,2,2,4,3,0,5,5,4,3,4,5,4,4,4,1,1,1,0,1,2,0,3,'','','','','','','','','','','','','','','','','','','',''];
  let morrinhos=['Morrinhos',logomorrinhos,'Citadino','GO','GO1','E',1,'G4',2,5,4,5,5,0,5,3,2,4,4,4,0,2,1,0,5,3,3,2,1,3,3,5,2,0,1,1,5,5,5,3,0,4,2,3,5,0,'','','','','','','','','','','','','','','','','','','',''];
  let motoclub=['Moto Club',logomotoclub,'Citadino','MA','NO1','E',1,'',1,0,5,4,3,0,5,5,0,0,0,3,2,5,1,4,2,2,5,3,3,2,3,1,0,4,3,0,2,4,4,3,4,1,0,5,1,5,'','','','','','','','','','','','','','','','','','','',''];
  let nacao=['Nação',logonacao,'Citadino','SC','SC1','E',1,'',0,0,3,3,3,4,1,0,3,4,1,5,5,2,5,0,1,3,5,0,3,1,4,5,1,0,1,3,1,2,4,4,1,3,1,5,1,3,'','','','','','','','','','','','','','','','','','','',''];
  let nacionalam=['Nacional-AM',logonacionalam,'Regional','AM','NN','D',1,'',0,3,1,2,0,2,1,2,4,1,1,4,3,3,4,1,0,2,0,5,5,0,0,5,2,4,0,2,3,2,0,1,2,5,1,5,1,4,'','','','','','','','','','','','','','','','','','','',''];
  let nautico=['Náutico',logonautico,'Pequeno','PE','PE','B',1,'G8',0,2,1,5,2,5,2,5,2,1,5,0,0,0,1,5,3,5,2,2,0,1,0,4,0,1,0,1,4,5,5,4,3,0,4,1,0,0,'','','','','','','','','','','','','','','','','','','',''];
  let nauticorr=['Náutico-RR',logonauticorr,'Citadino','RR','NN1','E',1,'G16',0,0,2,1,5,4,0,4,1,4,0,5,4,1,0,3,0,3,5,4,4,4,3,2,0,5,1,3,2,0,1,4,3,5,0,0,3,5,'','','','','','','','','','','','','','','','','','','',''];
  let novaiguacu=['Nova Iguaçu',logonovaiguacu,'Citadino','RJ','RJ','D',1,'',2,3,3,1,5,3,3,4,2,5,3,1,1,1,1,3,2,1,5,0,5,5,0,0,4,1,0,4,4,1,2,0,0,4,5,5,3,0,'','','','','','','','','','','','','','','','','','','',''];
  let novamutum=['Nova Mutum',logonovamutum,'Citadino','MT','CO1','E',1,'',0,2,2,5,0,4,0,2,2,3,2,3,2,0,5,5,1,0,0,0,1,1,0,2,0,2,3,1,3,3,3,3,2,1,1,2,4,5,'','','','','','','','','','','','','','','','','','','',''];
  let novohamburgo=['Novo Hamburgo',logonovohamburgo,'Citadino','RS','RS','D',1,'',0,5,4,1,4,2,4,2,5,0,4,1,2,3,3,3,1,1,4,4,5,3,3,3,1,5,5,5,0,3,5,4,0,3,5,4,5,2,'','','','','','','','','','','','','','','','','','','',''];
  let novorizontino=['Novorizontino',logonovorizontino,'Citadino','SP','SP','B',1,'G13',0,4,4,4,2,0,0,0,0,2,1,0,3,0,5,4,2,1,0,0,1,2,1,0,4,0,0,4,0,5,3,3,4,5,0,2,5,3,'','','','','','','','','','','','','','','','','','','',''];
  let olaria=['Olaria',logoolaria,'Citadino','RJ','RJ1','E',1,'',2,1,0,4,4,0,5,5,3,3,2,1,2,2,0,4,5,2,3,5,2,2,0,0,5,2,5,1,4,0,2,3,5,3,0,3,4,0,'','','','','','','','','','','','','','','','','','','',''];
  let operarioms=['Operário-MS',logooperarioms,'Citadino','MS','CO','B',1,'G16',2,1,4,4,4,2,5,4,5,0,0,0,4,3,3,3,4,3,3,1,4,4,0,2,3,2,5,1,5,2,4,2,5,3,5,1,0,2,'','','','','','','','','','','','','','','','','','','',''];
  let operariopr=['Operário-PR',logooperariopr,'Regional','PR','PR','D',1,'G8',0,4,0,3,4,3,5,3,2,4,2,0,4,0,2,4,5,0,5,1,2,4,2,2,3,3,3,1,4,0,3,3,0,0,0,2,4,3,'','','','','','','','','','','','','','','','','','','',''];
  let pacajus=['Pacajus ',logopacajus,'Citadino','CE','CE1','E',1,'',1,0,4,1,5,2,0,1,4,3,5,4,1,3,4,1,1,2,4,2,4,2,2,2,2,1,5,5,2,5,2,3,2,2,2,0,2,3,'','','','','','','','','','','','','','','','','','','',''];
  let palmeiras=['Palmeiras',logopalmeiras,'Grande','SP','SP1','A',1,'SUBIR',1,5,3,1,3,0,3,1,1,0,2,5,3,3,5,4,3,2,4,1,3,4,2,3,5,0,2,1,0,0,3,2,3,4,5,2,0,5,'','','','','','','','','','','','','','','','','','','',''];
  let parana=['Paraná',logoparana,'Estadual','PR','PR','D',1,'',0,4,2,0,4,4,3,1,0,5,3,5,5,1,1,3,4,4,0,1,0,5,1,1,0,5,4,4,3,0,2,0,4,5,1,5,4,3,'','','','','','','','','','','','','','','','','','','',''];
  let passofundo=['Passo Fundo',logopassofundo,'Citadino','RS','RS2','E',1,'',0,3,5,0,5,1,3,3,0,0,1,2,1,2,5,3,1,0,4,5,4,5,2,0,4,1,0,3,3,5,2,1,2,2,0,4,0,5,'','','','','','','','','','','','','','','','','','','',''];
  let patrocinense=['Patrocinense',logopatrocinense,'Citadino','MG','MG1','E',1,'',0,1,2,2,2,0,1,5,4,5,4,3,5,0,2,5,1,3,1,5,1,3,3,1,4,4,1,1,3,0,2,3,3,0,0,3,2,1,'','','','','','','','','','','','','','','','','','','',''];
  let paulista=['Paulista',logopaulista,'Citadino','SP','SP1','B',1,'SUBIR',3,0,1,2,1,3,2,3,4,0,0,1,4,0,1,1,3,2,4,4,0,0,0,0,1,1,2,3,1,2,3,2,4,0,2,4,4,2,'','','','','','','','','','','','','','','','','','','',''];
  let paysandu=['Paysandu',logopaysandu,'Pequeno','PA','NN','A',1,'G16',1,3,5,0,2,5,5,3,3,1,0,4,3,1,4,1,2,2,4,0,3,4,0,2,4,4,2,5,2,1,3,1,5,2,3,1,2,5,'','','','','','','','','','','','','','','','','','','',''];
  let pelotas=['Pelotas',logopelotas,'Regional','RS','RS1','E',1,'G4',2,4,5,1,4,3,3,2,5,3,1,3,1,2,4,3,0,3,4,4,1,2,5,0,3,1,4,3,5,0,4,5,3,5,3,0,0,2,'','','','','','','','','','','','','','','','','','','',''];
  let penarolam=['Penarol-AM',logopenarolam,'Citadino','AM','NN2','E',1,'',0,5,5,2,0,3,1,0,5,1,4,0,0,4,0,0,4,2,4,3,4,4,2,2,3,5,3,5,2,4,3,5,5,2,0,4,0,0,'','','','','','','','','','','','','','','','','','','',''];
  let petrolina=['Petrolina',logopetrolina,'Citadino','PE','PE','D',1,'',0,2,5,2,4,0,3,1,3,5,3,4,1,4,5,1,1,4,3,1,5,5,0,5,5,4,2,5,0,5,0,1,4,1,0,4,4,0,'','','','','','','','','','','','','','','','','','','',''];
  let pontepreta=['Ponte Preta',logopontepreta,'Pequeno','SP','SP','B',1,'G16',2,2,2,3,0,5,3,3,1,4,4,5,1,1,2,4,2,0,4,5,5,0,1,5,5,3,3,5,3,5,3,2,0,3,1,3,2,1,'','','','','','','','','','','','','','','','','','','',''];
  let porto=['Porto',logoporto,'Citadino','PE','PE','D',1,'',0,0,3,0,2,4,1,5,4,1,2,3,3,1,3,1,0,4,0,0,3,0,0,2,2,1,5,3,2,1,5,3,0,5,0,0,1,2,'','','','','','','','','','','','','','','','','','','',''];
  let portovelhoro=['Porto Velho-RO',logoportovelhoro,'Citadino','RO','NN1','D',1,'',1,3,3,3,2,2,5,4,1,1,0,0,4,2,0,5,3,3,2,1,5,3,3,0,4,1,1,2,1,0,4,2,3,1,5,5,5,3,'','','','','','','','','','','','','','','','','','','',''];
  let portuguesa=['Portuguesa',logoportuguesa,'Pequeno','SP','SP','B',1,'G13',0,5,5,1,5,4,1,1,3,0,5,5,1,2,4,5,3,0,0,3,3,0,3,1,5,2,5,0,3,4,2,0,0,0,3,3,2,2,'','','','','','','','','','','','','','','','','','','',''];
  let portuguesarj=['Portuguesa-RJ',logoportuguesarj,'Citadino','RJ','RJ','D',1,'G13',0,4,2,4,3,5,0,5,3,3,4,4,1,5,5,3,5,5,1,2,5,4,0,1,0,3,2,1,3,3,1,1,5,1,0,0,1,0,'','','','','','','','','','','','','','','','','','','',''];
  let potiguardemossoro=['Potiguar de Mossoró',logopotiguardemossoro,'Citadino','RN','NO2','E',1,'G8',0,0,3,5,0,0,1,4,3,0,4,3,3,5,3,1,2,2,2,0,4,3,4,3,3,1,4,5,5,2,3,0,4,4,0,1,4,0,'','','','','','','','','','','','','','','','','','','',''];
  let pousoalegre=['Pouso Alegre',logopousoalegre,'Citadino','MG','MG1','D',1,'',0,3,1,1,3,3,5,1,4,3,3,0,1,1,1,5,5,5,2,5,3,4,5,0,3,0,3,1,3,4,0,2,4,0,4,1,3,0,'','','','','','','','','','','','','','','','','','','',''];
  let princesadosolimoes=['Princesa do Solimões',logoprincesadosolimoes,'Citadino','AM','NN1','E',1,'',0,1,4,4,3,4,5,1,0,1,2,3,1,0,2,5,2,3,3,2,2,5,0,4,3,1,5,3,2,5,0,5,4,2,2,5,0,2,'','','','','','','','','','','','','','','','','','','',''];
  let psts=['PSTS',logopsts,'Citadino','PR','PR1','E',1,'G4',0,3,4,0,4,0,0,3,3,3,1,0,1,3,5,4,3,1,4,3,1,3,0,3,5,3,0,2,0,2,4,5,3,2,1,2,2,2,'','','','','','','','','','','','','','','','','','','',''];
  let realbrasilia=['Real Brasília',logorealbrasilia,'Citadino','DF','CO','D',1,'',0,2,2,5,3,0,1,2,3,1,0,1,2,5,1,5,3,3,4,0,5,5,5,0,2,5,5,0,1,4,2,2,2,1,4,1,4,3,'','','','','','','','','','','','','','','','','','','',''];
  let realnoroeste=['Real Noroeste',logorealnoroeste,'Citadino','ES','NO2','E',1,'',0,5,2,2,4,5,5,5,5,3,4,4,1,1,0,5,0,5,5,0,3,5,0,0,1,0,0,1,1,1,5,4,0,5,1,0,2,2,'','','','','','','','','','','','','','','','','','','',''];
  let remo=['Remo',logoremo,'Pequeno','PA','NN','C',1,'G4',0,2,3,2,4,5,0,5,5,5,4,0,4,2,2,0,2,3,5,2,5,3,1,0,5,2,5,0,4,1,4,1,4,0,5,2,3,2,'','','','','','','','','','','','','','','','','','','',''];
  let resende=['Resende',logoresende,'Citadino','RJ','RJ1','E',1,'',1,4,1,3,5,0,1,5,3,4,2,0,5,3,4,2,4,4,5,5,4,3,0,0,1,1,3,1,5,5,5,0,4,5,1,5,4,2,'','','','','','','','','','','','','','','','','','','',''];
  let retro=['Retrô',logoretro,'Citadino','PE','PE','D',1,'',0,1,4,1,0,4,3,0,4,0,0,0,3,2,5,3,5,4,0,2,0,1,0,0,5,1,1,4,1,4,5,1,0,5,3,3,0,5,'','','','','','','','','','','','','','','','','','','',''];
  let riobrancoac=['Rio Branco-AC',logoriobrancoac,'Regional','AC','NN1','D',1,'',0,2,1,4,2,1,2,4,0,5,3,3,5,4,2,3,0,0,2,5,0,2,0,5,0,1,3,3,1,5,4,2,3,4,3,2,3,1,'','','','','','','','','','','','','','','','','','','',''];
  let rionegroam=['Rio Negro-AM',logorionegroam,'Citadino','AM','NN2','E',1,'',0,4,5,1,4,1,3,0,5,4,2,4,5,1,0,2,3,2,4,2,2,3,0,0,3,5,5,5,3,5,1,5,0,0,1,0,2,3,'','','','','','','','','','','','','','','','','','','',''];
  let riverpi=['River-PI',logoriverpi,'Regional','PI','NO','D',1,'G4',2,5,0,5,4,3,4,1,4,4,5,4,2,0,2,3,0,3,2,2,2,4,4,4,3,4,2,2,5,0,1,4,1,2,2,4,5,2,'','','','','','','','','','','','','','','','','','','',''];
  let salgueiro=['Salgueiro',logosalgueiro,'Citadino','PE','PE','D',1,'',0,4,2,3,2,1,0,1,3,0,3,5,0,1,2,1,0,3,4,3,2,5,2,3,3,1,4,1,5,1,1,1,1,5,2,0,1,4,'','','','','','','','','','','','','','','','','','','',''];
  let sampaiocorrea=['Sampaio Correa',logosampaiocorrea,'Estadual','MA','NO','B',1,'G13',0,3,4,3,4,3,5,2,4,4,2,4,0,3,4,5,4,5,4,1,5,3,3,5,4,2,0,0,2,3,5,4,2,0,0,4,4,2,'','','','','','','','','','','','','','','','','','','',''];
  let santacruz=['Santa Cruz',logosantacruz,'Pequeno','PE','PE','B',1,'G8',1,2,3,1,0,0,2,5,4,5,2,2,2,2,2,2,5,2,2,0,0,1,2,4,2,2,4,2,3,5,3,1,0,5,1,4,1,4,'','','','','','','','','','','','','','','','','','','',''];
  let santacruzdenatal=['Santa Cruz de Natal',logosantacruzdenatal,'Citadino','RN','NO2','E',1,'',0,4,2,3,2,3,0,4,3,0,2,1,5,3,1,3,0,0,0,5,1,2,4,4,1,3,2,0,5,0,1,1,4,2,2,4,0,2,'','','','','','','','','','','','','','','','','','','',''];
  let santoandre=['Santo André',logosantoandre,'Regional','SP','SP2','E',1,'',2,2,2,0,5,1,0,0,5,4,3,3,1,1,0,4,0,4,1,2,0,1,2,3,1,5,3,5,5,4,1,3,0,4,2,5,0,1,'','','','','','','','','','','','','','','','','','','',''];
  let santos=['Santos',logosantos,'Grande','SP','SP1','B',1,'G4',0,0,1,5,3,1,0,0,2,4,2,1,0,1,3,2,0,5,1,0,5,5,0,0,1,3,2,0,2,3,1,2,4,2,4,2,2,4,'','','','','','','','','','','','','','','','','','','',''];
  let saobernardo=['São Bernardo',logosaobernardo,'Citadino','SP','SP1','D',1,'G4',0,4,1,5,4,3,3,3,2,2,0,3,4,3,0,3,3,3,0,1,4,0,0,2,2,3,3,2,3,4,1,1,4,2,1,4,5,1,'','','','','','','','','','','','','','','','','','','',''];
  let saocaetano=['São Caetano',logosaocaetano,'Regional','SP','SP2','E',1,'',0,1,2,4,0,4,2,2,2,4,5,3,1,3,1,0,0,4,1,3,0,2,3,2,4,2,3,3,5,2,0,3,1,5,3,5,1,2,'','','','','','','','','','','','','','','','','','','',''];
  let saocristovao=['São Cristóvão',logosaocristovao,'Citadino','RJ','RJ1','E',1,'',0,3,4,0,5,2,2,0,2,3,5,2,3,3,3,5,2,0,1,5,3,5,4,2,2,4,0,3,4,1,2,3,1,1,0,5,0,2,'','','','','','','','','','','','','','','','','','','',''];
  let saojoseense=['São Joseense',logosaojoseense,'Citadino','PR','PR1','E',1,'',0,4,4,2,4,5,5,3,3,1,1,1,0,2,3,0,4,2,0,4,0,0,5,3,5,5,0,0,1,2,0,2,3,5,4,0,1,3,'','','','','','','','','','','','','','','','','','','',''];
  let saojosers=['São José-RS',logosaojosers,'Citadino','RS','RS','D',1,'G16',0,4,0,5,4,1,0,2,0,3,5,4,2,5,2,4,4,3,3,4,3,5,4,4,3,0,1,4,2,3,0,2,1,2,5,1,0,3,'','','','','','','','','','','','','','','','','','','',''];
  let saojosesp=['São José-SP',logosaojosesp,'Citadino','SP','SP2','E',1,'',2,5,5,1,4,0,5,2,0,1,4,1,0,1,3,0,0,1,0,5,4,2,2,3,1,2,1,4,1,1,1,0,2,3,1,2,5,5,'','','','','','','','','','','','','','','','','','','',''];
  let saoluizrs=['São Luiz-RS',logosaoluizrs,'Citadino','RS','RS1','E',1,'',2,0,2,0,2,3,3,5,2,0,3,0,4,3,1,5,3,4,1,5,5,4,3,1,2,4,1,2,3,4,0,5,3,0,2,4,3,5,'','','','','','','','','','','','','','','','','','','',''];
  let saopaulo=['São Paulo',logosaopaulo,'Grande','SP','SP','A',1,'G4',1,3,5,2,1,3,5,3,0,3,4,4,0,5,5,2,3,4,5,5,0,1,2,2,2,3,1,2,4,2,2,5,1,4,1,5,1,3,'','','','','','','','','','','','','','','','','','','',''];
  let saoraimundoam=['São Raimundo-AM',logosaoraimundoam,'Citadino','AM','NN1','E',1,'',2,4,0,5,3,4,5,5,1,4,5,3,2,0,3,0,0,4,1,0,5,0,4,0,4,1,1,3,3,0,4,5,4,2,5,3,1,1,'','','','','','','','','','','','','','','','','','','',''];
  let saoraimundorr=['São Raimundo-RR',logosaoraimundorr,'Regional','RR','NN','D',1,'',0,3,4,5,3,3,5,3,0,4,0,0,3,1,1,5,2,3,0,1,0,0,2,1,2,4,5,4,4,0,5,4,1,4,0,3,3,4,'','','','','','','','','','','','','','','','','','','',''];
  let sergipe=['Sergipe',logosergipe,'Citadino','SE','NO1','D',1,'',0,0,2,5,4,1,3,4,3,5,4,4,3,4,5,0,2,5,2,5,5,5,0,1,5,2,1,3,5,3,0,0,4,1,1,3,0,5,'','','','','','','','','','','','','','','','','','','',''];
  let serra=['Serra',logoserra,'Citadino','ES','NO1','E',1,'',0,0,2,4,2,2,4,1,3,3,4,0,2,4,1,2,5,3,2,3,0,3,3,3,2,3,1,4,0,1,0,1,4,2,5,4,0,4,'','','','','','','','','','','','','','','','','','','',''];
  let social=['Social',logosocial,'Citadino','MG','MG1','E',1,'',0,1,2,2,4,2,2,4,0,3,2,1,3,2,3,5,3,3,0,0,4,4,0,4,4,2,3,1,5,2,4,0,1,2,0,4,5,0,'','','','','','','','','','','','','','','','','','','',''];
  let sousa=['Sousa',logosousa,'Citadino','PB','NO1','D',1,'G8',0,3,1,1,4,4,2,2,0,1,0,3,4,2,0,1,0,4,3,2,1,0,4,4,1,0,1,2,5,4,3,0,5,1,4,4,4,5,'','','','','','','','','','','','','','','','','','','',''];
  let sport=['Sport',logosport,'Médio','PE','PE','A',1,'G4',0,3,5,2,2,5,0,1,0,0,2,3,3,1,1,5,3,4,4,1,4,0,2,5,2,3,1,3,1,0,1,3,0,4,5,0,2,1,'','','','','','','','','','','','','','','','','','','','2023'];
  let tiradentesce=['Tiradentes-CE',logotiradentesce,'Citadino','CE','CE1','E',1,'G8',0,3,1,5,4,0,5,5,0,2,2,1,0,1,4,2,0,5,0,2,5,5,0,3,2,3,5,0,0,3,3,0,2,0,3,3,2,2,'','','','','','','','','','','','','','','','','','','',''];
  let tocantinopolis=['Tocantinópolis',logotocantinopolis,'Citadino','TO','NN','D',1,'',0,4,2,5,0,4,3,0,3,1,3,5,3,2,4,3,1,3,0,1,1,0,3,5,4,3,0,4,1,3,5,5,2,2,3,3,0,2,'','','','','','','','','','','','','','','','','','','',''];
  let toledo=['Toledo',logotoledo,'Citadino','PR','PR1','E',1,'G13',0,0,3,0,0,3,2,1,5,3,3,2,3,2,4,2,5,4,0,5,3,3,0,2,4,5,5,4,0,4,0,4,3,1,1,0,4,2,'','','','','','','','','','','','','','','','','','','',''];
  let tombense=['Tombense',logotombense,'Citadino','MG','MG','C',1,'G16',0,2,5,5,1,0,2,3,3,3,3,1,2,0,1,5,2,3,5,3,2,4,0,3,4,1,5,0,2,5,3,3,3,0,1,4,0,4,'','','','','','','','','','','','','','','','','','','',''];
  let tremap=['Trem-AP',logotremap,'Regional','AP','NN','D',1,'G13',0,4,4,3,4,4,5,4,5,3,0,4,0,2,3,2,4,4,4,3,2,1,0,2,5,1,1,4,5,1,2,3,1,0,4,1,1,2,'','','','','','','','','','','','','','','','','','','',''];
  let treze=['Treze',logotreze,'Regional','PB','NO','D',1,'',0,0,4,2,3,3,1,1,0,2,5,3,4,5,4,3,2,5,5,1,1,5,3,4,5,0,0,2,0,2,3,2,4,5,2,0,3,1,'','','','','','','','','','','','','','','','','','','',''];
  let tunalusopa=['Tuna Luso-PA',logotunalusopa,'Citadino','PA','NN2','E',1,'',2,0,4,3,2,0,0,4,4,4,1,5,5,0,4,0,1,1,5,0,5,1,0,0,3,1,3,0,2,0,2,1,2,1,0,2,3,0,'','','','','','','','','','','','','','','','','','','',''];
  let tupi=['Tupi',logotupi,'Citadino','MG','MG1','E',1,'G16',0,1,4,0,4,2,0,4,1,4,4,5,1,2,4,2,3,5,4,3,0,3,2,1,4,5,0,4,2,5,5,1,5,1,4,1,5,3,'','','','','','','','','','','','','','','','','','','',''];
  let tupinambas=['Tupinambás',logotupinambas,'Citadino','MG','MG2','E',1,'',2,0,3,1,5,1,5,2,5,4,3,4,2,1,4,4,1,5,1,3,4,3,3,2,3,5,5,4,5,2,1,3,0,4,5,0,2,4,'','','','','','','','','','','','','','','','','','','',''];
  let uberlandia=['Uberlândia',logouberlandia,'Citadino','MG','MG1','E',1,'',3,4,3,1,0,2,0,4,2,5,4,1,3,4,1,2,1,3,0,3,1,3,5,5,4,1,0,3,4,1,1,2,4,4,5,2,1,4,'','','','','','','','','','','','','','','','','','','',''];
  let uniaorondonopolis=['União Rondonópolis',logouniaorondonopolis,'Citadino','MT','CO','D',1,'',0,0,0,0,0,0,4,4,0,5,2,3,1,0,1,2,0,1,0,2,4,2,1,1,0,1,4,4,3,3,2,1,1,2,5,2,3,0,'','','','','','','','','','','','','','','','','','','',''];
  let urt=['URT',logourt,'Citadino','MG','MG1','E',1,'',0,4,5,2,5,5,2,3,5,1,4,3,0,3,1,1,5,1,2,3,1,2,5,4,3,2,0,5,2,2,0,3,0,5,2,4,5,2,'','','','','','','','','','','','','','','','','','','',''];
  let vasco=['Vasco',logovasco,'Grande','RJ','RJ','A',1,'G8',0,5,5,5,4,0,5,4,4,0,1,4,5,2,4,0,4,5,1,4,0,1,3,3,1,5,5,4,5,2,4,3,2,0,3,2,3,2,'','','','','','','','','','','','','','','','','','','','2023'];
  let veracruz=['Vera Cruz',logoveracruz,'Citadino','PE','PE1','E',1,'',1,1,2,3,1,4,5,3,3,4,2,0,1,2,0,0,0,3,5,2,4,4,1,5,1,5,1,2,4,5,5,4,1,2,0,0,1,0,'','','','','','','','','','','','','','','','','','','',''];
  let vilanova=['Vila Nova',logovilanova,'Estadual','GO','GO','C',1,'G8',0,2,2,1,1,4,2,2,3,0,1,5,4,3,1,0,3,5,5,3,0,5,2,0,1,3,1,2,3,0,0,1,5,2,1,0,5,1,'','','','','','','','','','','','','','','','','','','',''];
  let villanovamg=['Villa Nova-MG',logovillanovamg,'Regional','MG','MG','D',1,'',0,5,1,2,1,0,1,4,0,4,4,3,5,1,1,0,2,0,5,0,3,3,0,3,2,4,0,1,3,4,1,2,1,4,1,1,3,3,'','','','','','','','','','','','','','','','','','','',''];
  let vitoria=['Vitória',logovitoria,'Médio','BA','BA','A',1,'G13',0,1,0,2,2,5,2,2,0,3,4,5,5,3,2,4,2,3,4,0,3,3,1,4,0,2,0,5,3,1,2,3,1,5,4,0,1,0,'','','','','','','','','','','','','','','','','','','',''];
  let vitoriadastabocas=['Vitória das Tabocas',logovitoriadastabocas,'Citadino','PE','PE1','E',1,'',0,3,1,3,2,5,2,3,1,1,1,2,1,3,4,0,2,4,3,5,3,2,5,1,5,5,0,3,5,1,3,3,2,2,3,3,5,2,'','','','','','','','','','','','','','','','','','','',''];
  let voltaredonda=['Volta Redonda',logovoltaredonda,'Regional','RJ','RJ','B',1,'G13',1,1,0,2,4,0,0,5,4,1,2,5,4,0,0,1,1,5,2,1,4,4,4,1,1,0,5,2,2,5,3,0,0,4,0,0,4,3,'','','','','','','','','','','','','','','','','','','',''];
  let xvpiracicaba=['XV Piracicaba',logoxvpiracicaba,'Regional','SP','SP2','E',1,'',0,4,0,2,2,0,0,4,0,5,4,3,5,0,1,0,1,4,3,5,0,0,3,5,5,4,3,5,4,1,2,3,2,4,3,5,4,1,'','','','','','','','','','','','','','','','','','','',''];
  let ypirangaap=['Ypiranga-AP',logoypirangaap,'Citadino','AP','NN2','E',1,'',0,5,1,3,5,4,2,0,0,3,0,2,1,0,0,4,3,4,0,4,1,1,4,4,4,0,1,3,5,3,5,4,0,5,3,5,4,4,'','','','','','','','','','','','','','','','','','','',''];
  let ypirangars=['Ypiranga-RS',logoypirangars,'Citadino','RS','RS','C',1,'G16',1,4,2,2,3,1,4,4,0,0,0,4,0,3,1,0,3,5,4,4,4,4,2,1,1,1,4,4,1,2,5,1,4,4,2,2,4,0,'','','','','','','','','','','','','','','','','','','',''];
  let atleticoba=['Atlético-BA',logoatleticoba,'Citadino','BA','BA','D',1,'',1,1,3,2,3,5,5,5,2,5,1,3,0,3,2,0,2,0,0,4,1,1,1,4,5,1,2,1,0,2,2,4,4,3,5,4,3,2,'','','','','','','','','','','','','','','','','','','',''];
  let barcelonaba=['Barcelona-BA',logobarcelonaba,'Citadino','BA','BA','D',1,'',3,0,0,1,1,2,2,5,3,3,0,2,1,1,4,3,2,3,1,2,5,1,0,1,4,4,4,2,2,1,2,3,0,4,1,1,2,1,'','','','','','','','','','','','','','','','','','','',''];
  let jacobina=['Jacobina',logojacobina,'Citadino','BA','BA','D',1,'',0,2,2,3,0,5,4,3,5,0,0,1,2,1,3,5,3,3,3,5,3,2,4,0,3,5,2,1,4,2,5,1,4,2,2,5,5,3,'','','','','','','','','','','','','','','','','','','',''];
  let jequie=['Jequié',logojequie,'Citadino','BA','BA1','E',1,'',1,1,4,4,1,2,0,4,3,2,0,5,4,1,1,1,1,0,3,3,1,4,1,3,3,2,3,0,2,3,2,1,3,1,4,1,4,2,'','','','','','','','','','','','','','','','','','','',''];
  let bahiadefeira=['Bahia de Feira',logobahiadefeira,'Citadino','BA','BA1','E',1,'',1,4,2,3,1,5,2,3,3,5,3,0,5,0,3,2,2,5,0,0,0,3,3,0,4,3,1,4,5,5,3,3,5,4,2,0,1,5,'','','','','','','','','','','','','','','','','','','',''];
  let colocoloba=['Colo-Colo-BA',logocolocoloba,'Citadino','BA','BA1','E',1,'',1,2,4,3,0,5,5,2,3,5,3,3,2,2,5,5,4,2,2,2,2,3,3,1,3,2,3,0,5,0,4,2,1,4,5,0,1,1,'','','','','','','','','','','','','','','','','','','',''];
  let fluminensedefeira=['Fluminense de Feira',logofluminensedefeira,'Citadino','BA','BA1','E',1,'',0,2,1,3,2,0,3,5,0,1,0,4,1,3,1,5,2,1,2,2,0,4,0,1,5,1,1,2,4,2,0,4,4,2,5,5,0,3,'','','','','','','','','','','','','','','','','','','',''];
  let grapiuna=['Grapiúna',logograpiuna,'Citadino','BA','BA1','E',1,'',0,0,3,0,1,4,3,3,2,0,2,2,1,3,4,5,4,3,5,4,5,5,5,0,0,0,4,0,5,5,0,4,0,4,1,0,1,0,'','','','','','','','','','','','','','','','','','','',''];
  let juazeiro=['Juazeiro',logojuazeiro,'Citadino','BA','BA1','E',1,'',2,0,0,4,4,5,0,1,3,0,0,2,1,3,2,5,1,5,0,4,5,3,0,1,5,5,4,4,1,5,5,3,2,3,2,1,5,1,'','','','','','','','','','','','','','','','','','','',''];
  let unirb=['UNIRB',logounirb,'Citadino','BA','BA1','E',1,'',5,3,0,1,0,0,4,1,1,3,4,4,4,2,1,4,5,5,1,2,5,0,0,1,1,3,3,3,1,3,2,5,5,1,1,1,1,4,'','','','','','','','','','','','','','','','','','','',''];
  let vitoriadaconquista=['Vitória da Conquista',logovitoriadaconquista,'Citadino','BA','BA1','E',1,'',2,2,1,3,2,5,3,2,2,4,5,2,3,1,3,3,1,2,1,3,1,0,1,1,0,1,2,3,4,0,2,1,5,2,4,2,3,2,'','','','','','','','','','','','','','','','','','','',''];
  let leonico=['Leônico',logoleonico,'Citadino','BA','BA2','E',1,'',5,2,4,1,2,4,4,2,2,4,1,1,3,5,0,1,1,2,4,5,3,2,3,1,3,0,1,4,1,0,0,1,0,0,4,1,3,3,'','','','','','','','','','','','','','','','','','','',''];
    
  
  
  
  
  
  /**TECNICOS**/
  
  let tec1={idCart:2781257,nome:'12Vermelho',nomeLogin:'WIDOWMAKER',nomePess:'opcional',anoEnt:2023,logo:logotec1,ClubAtual:chapecoense,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec2={idCart:24337237,nome:'Masao do cartola',nomeLogin:'Masao',nomePess:'opcional',anoEnt:2023,logo:logotec2,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec3={idCart:5213597,nome:'GigaCarrasco.',nomeLogin:'julio santos',nomePess:'opcional',anoEnt:2023,logo:logotec3,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec4={idCart:14264,nome:'AEGB Bravo',nomeLogin:'Anderson Gomes Bravo',nomePess:'opcional',anoEnt:2023,logo:logotec4,ClubAtual:figueirense,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec5={idCart:6745416,nome:'tremtricolor f.c',nomeLogin:'Marco',nomePess:'opcional',anoEnt:2023,logo:logotec5,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec6={idCart:2982576,nome:'alecoloradobage',nomeLogin:'ALEXANDRO FERREIRA',nomePess:'opcional',anoEnt:2023,logo:logotec6,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec7={idCart:4081686,nome:'Alemão Colorado 75',nomeLogin:'MARCIO FIGUR',nomePess:'opcional',anoEnt:2023,logo:logotec7,ClubAtual:botafogo,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec8={idCart:26329547,nome:'sniperteco',nomeLogin:'rafael',nomePess:'opcional',anoEnt:2023,logo:logotec8,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec9={idCart:14933289,nome:'supribem ',nomeLogin:'Douglas',nomePess:'opcional',anoEnt:2023,logo:logotec9,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec10={idCart:13921349,nome:'GRodrigues E.C',nomeLogin:'Gabriel Rodrigues',nomePess:'opcional',anoEnt:2023,logo:logotec10,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec11={idCart:13956737,nome:'Do Polo FC',nomeLogin:'Ismar',nomePess:'opcional',anoEnt:2023,logo:logotec11,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec12={idCart:13935476,nome:'Anão Pugli Fc',nomeLogin:'MARCELO LEIRIA',nomePess:'opcional',anoEnt:2023,logo:logotec12,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec13={idCart:1762679,nome:'LéoZ!n F.C',nomeLogin:'Leonardo',nomePess:'opcional',anoEnt:2023,logo:logotec13,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec14={idCart:8606472,nome:'Anderson United',nomeLogin:'ANDERSON NUNES',nomePess:'opcional',anoEnt:2023,logo:logotec14,ClubAtual:caxias,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec15={idCart:44528670,nome:'Josu FC 23',nomeLogin:'Josué Carvalho',nomePess:'opcional',anoEnt:2023,logo:logotec15,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec16={idCart:2976928,nome:'Blackgel',nomeLogin:'jeferson gel',nomePess:'opcional',anoEnt:2023,logo:logotec16,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec17={idCart:12830,nome:'F.A. Xambra',nomeLogin:'Thiago Bessa',nomePess:'opcional',anoEnt:2023,logo:logotec17,ClubAtual:atleticomg,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec18={idCart:27185745,nome:'Eny Atlético GO',nomeLogin:'Eny',nomePess:'opcional',anoEnt:2023,logo:logotec18,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec19={idCart:612748,nome:'REJEITADO FC',nomeLogin:'Americano',nomePess:'opcional',anoEnt:2023,logo:logotec19,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec20={idCart:86919,nome:'ABC F.C RN',nomeLogin:'PC#ABC FC',nomePess:'opcional',anoEnt:2023,logo:logotec20,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec21={idCart:25305084,nome:'FC BAGÉ ',nomeLogin:'ANDREI',nomePess:'opcional',anoEnt:2023,logo:logotec21,ClubAtual:bage,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec22={idCart:154529,nome:'BahTche de Munique BG',nomeLogin:'Mateus Debiasi',nomePess:'opcional',anoEnt:2023,logo:logotec22,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec23={idCart:1954845,nome:'Underdog 1999 FC',nomeLogin:'Bolívia',nomePess:'opcional',anoEnt:2023,logo:logotec23,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec24={idCart:26831,nome:'Bicolor 1988',nomeLogin:'Vinícius Lima',nomePess:'opcional',anoEnt:2023,logo:logotec24,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec25={idCart:19525205,nome:'BGM 21 FC',nomeLogin:'BRUNO MEIRELLES',nomePess:'opcional',anoEnt:2023,logo:logotec25,ClubAtual:guarani,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec26={idCart:205211,nome:'Bibinho e.c',nomeLogin:'Henrique',nomePess:'opcional',anoEnt:2023,logo:logotec26,ClubAtual:vitoria,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec27={idCart:23879716,nome:' BJJ ADSUMUS F.C',nomeLogin:'SANDRO NEVES',nomePess:'opcional',anoEnt:2023,logo:logotec27,ClubAtual:santacruz,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec28={idCart:8626492,nome:'Pucca Boa Esporte',nomeLogin:'Clau Matos',nomePess:'opcional',anoEnt:2023,logo:logotec28,ClubAtual:boaesporte,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec29={idCart:27451138,nome:'campeão Fortaleza ',nomeLogin:'Ivan fec',nomePess:'opcional',anoEnt:2023,logo:logotec29,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec30={idCart:36411,nome:'AFC - America RJ',nomeLogin:'Gustavo Mamede',nomePess:'opcional',anoEnt:2023,logo:logotec30,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec31={idCart:17916129,nome:'F.E.C Águia Negra ',nomeLogin:'Lucas Agliardi',nomePess:'opcional',anoEnt:2023,logo:logotec31,ClubAtual:aguianegra,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec32={idCart:9699807,nome:'Botafogo Rpo',nomeLogin:'Mário Luciano',nomePess:'opcional',anoEnt:2023,logo:logotec32,ClubAtual:botafogosp,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec33={idCart:11675828,nome:'Amazonas Fc',nomeLogin:'Charles Bispo',nomePess:'opcional',anoEnt:2023,logo:logotec33,ClubAtual:amazonas,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec34={idCart:44580350,nome:'Brasiliense 1900',nomeLogin:'MANOEL',nomePess:'opcional',anoEnt:2023,logo:logotec34,ClubAtual:brasiliense,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec35={idCart:48376143,nome:'15 de Novembro CB',nomeLogin:'Vanderson Fagundes',nomePess:'opcional',anoEnt:2023,logo:logotec35,ClubAtual:quinzedenovembro,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec36={idCart:259353,nome:'ANAPOLINA 4.1',nomeLogin:'FRANCISCO FORTES',nomePess:'opcional',anoEnt:2023,logo:logotec36,ClubAtual:anapolina,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec37={idCart:357268,nome:'Gunners Athletic',nomeLogin:'Fernando Paulo',nomePess:'opcional',anoEnt:2023,logo:logotec37,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec38={idCart:8617247,nome:'Cadufc.rs',nomeLogin:'CADU',nomePess:'opcional',anoEnt:2023,logo:logotec38,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec39={idCart:2445931,nome:'Audax CS',nomeLogin:'Pablo Campos',nomePess:'opcional',anoEnt:2023,logo:logotec39,ClubAtual:audax,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec40={idCart:14611601,nome:'Bomsucessofla',nomeLogin:'Juarez Dolzane',nomePess:'opcional',anoEnt:2023,logo:logotec40,ClubAtual:bonsucesso,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec41={idCart:21247363,nome:'Catheringer F.C',nomeLogin:'Brener Catheringer',nomePess:'opcional',anoEnt:2023,logo:logotec41,ClubAtual:flamengo,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec42={idCart:819507,nome:'SER Caxias Bridi',nomeLogin:'CASSIANO BRIDI',nomePess:'opcional',anoEnt:2023,logo:logotec42,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec43={idCart:28869788,nome:'Rua Ceará FC',nomeLogin:'Glauco Santocchi',nomePess:'opcional',anoEnt:2023,logo:logotec43,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec44={idCart:3379407,nome:'Botafogo Ita Pb ',nomeLogin:'Heliabe Aquino',nomePess:'opcional',anoEnt:2023,logo:logotec44,ClubAtual:botafogopb,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec45={idCart:180535,nome:'Brusque 1987',nomeLogin:'Rodrigo Santos',nomePess:'opcional',anoEnt:2023,logo:logotec45,ClubAtual:brusque,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec46={idCart:18274393,nome:'cabofriense12',nomeLogin:'DaAustrália',nomePess:'opcional',anoEnt:2023,logo:logotec46,ClubAtual:cabofriense,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec47={idCart:325473,nome:'Clube Atlético13',nomeLogin:'Juliano Jesus',nomePess:'opcional',anoEnt:2023,logo:logotec47,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec48={idCart:21181255,nome:'Copeiro Clube De Regatas',nomeLogin:'Vitor Bello',nomePess:'opcional',anoEnt:2023,logo:logotec48,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec49={idCart:17966520,nome:'Jk castanhal ',nomeLogin:'Jackson',nomePess:'opcional',anoEnt:2023,logo:logotec49,ClubAtual:castanhalpa,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec50={idCart:26019665,nome:'Coritiba Mil',nomeLogin:'Denis Bobko',nomePess:'opcional',anoEnt:2023,logo:logotec50,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec51={idCart:45875158,nome:'Ceilândia S.C',nomeLogin:'Ítalo R',nomePess:'opcional',anoEnt:2023,logo:logotec51,ClubAtual:ceilandia,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec52={idCart:2097585,nome:'Ivan Cianorte ',nomeLogin:'Ivan Zanoli',nomePess:'opcional',anoEnt:2023,logo:logotec52,ClubAtual:cianorte,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec53={idCart:427828,nome:'Costaa Rica Fc',nomeLogin:'Luis Philipe',nomePess:'opcional',anoEnt:2023,logo:logotec53,ClubAtual:costarica,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec54={idCart:47609498,nome:'F.C CRAC',nomeLogin:'Mateusinho',nomePess:'opcional',anoEnt:2023,logo:logotec54,ClubAtual:crac,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec55={idCart:12068971,nome:'Máfia Azul FC89',nomeLogin:'Biel Rezende',nomePess:'opcional',anoEnt:2023,logo:logotec55,ClubAtual:cruzeiro,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec56={idCart:3950716,nome:'CSA FC',nomeLogin:'Nando',nomePess:'opcional',anoEnt:2023,logo:logotec56,ClubAtual:csa,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec57={idCart:6822255,nome:'SC Cuiabayern-14',nomeLogin:'CUIABÁ',nomePess:'opcional',anoEnt:2023,logo:logotec57,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec58={idCart:9222605,nome:'Democrata GV',nomeLogin:'Gabriel Augusto',nomePess:'opcional',anoEnt:2023,logo:logotec58,ClubAtual:democrata,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec59={idCart:892797,nome:'E.C.Lutz',nomeLogin:'Jean Lutz',nomePess:'opcional',anoEnt:2023,logo:logotec59,ClubAtual:santoandre,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec60={idCart:2539,nome:'E C SIMONNSD',nomeLogin:'CESAR',nomePess:'opcional',anoEnt:2023,logo:logotec60,ClubAtual:novorizontino,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec61={idCart:27604058,nome:'Esportivo 12',nomeLogin:'Maiko',nomePess:'opcional',anoEnt:2023,logo:logotec61,ClubAtual:esportivo,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec62={idCart:25040031,nome:'Fasts',nomeLogin:'Fast',nomePess:'opcional',anoEnt:2023,logo:logotec62,ClubAtual:fastclubeam,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec63={idCart:18425116,nome:'cascavel boolls',nomeLogin:'charles',nomePess:'opcional',anoEnt:2023,logo:logotec63,ClubAtual:fccascavel,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec64={idCart:2793179,nome:'FC CHANANECO',nomeLogin:'LMC',nomePess:'opcional',anoEnt:2023,logo:logotec64,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec65={idCart:25346807,nome:'FC RPTRIUNFO',nomeLogin:'ALISSON DE FREITAS',nomePess:'opcional',anoEnt:2023,logo:logotec65,ClubAtual:sampaiocorrea,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec66={idCart:809590,nome:'FEBRE AMARELA CF',nomeLogin:'Djulio Jeske',nomePess:'opcional',anoEnt:2023,logo:logotec66,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec67={idCart:3737373,nome:'Ferro nos Morangos FC',nomeLogin:'Pepe RAFA Guardiola',nomePess:'opcional',anoEnt:2023,logo:logotec67,ClubAtual:palmeiras,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec68={idCart:27698569,nome:'FerroFerroada',nomeLogin:'Ferro',nomePess:'opcional',anoEnt:2023,logo:logotec68,ClubAtual:ferroviario,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec69={idCart:10081360,nome:'Fiel Torcedor  ',nomeLogin:'Ronaldo-Castro',nomePess:'opcional',anoEnt:2023,logo:logotec69,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec70={idCart:28702166,nome:'Figueira fr',nomeLogin:'CARLINHOS',nomePess:'opcional',anoEnt:2023,logo:logotec70,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec71={idCart:8582680,nome:'Mengo fc combate',nomeLogin:'Marlone silva',nomePess:'opcional',anoEnt:2023,logo:logotec71,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec72={idCart:543456,nome:'lucas  fluzão',nomeLogin:'LUCAS FLUZÃO',nomePess:'opcional',anoEnt:2023,logo:logotec72,ClubAtual:fluminense,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec73={idCart:189052,nome:'Flunáticos Club',nomeLogin:'Lattino',nomePess:'opcional',anoEnt:2023,logo:logotec73,ClubAtual:gremio,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec74={idCart:9006866,nome:'timba náutico',nomeLogin:'João Pedro',nomePess:'opcional',anoEnt:2023,logo:logotec74,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec75={idCart:25323724,nome:'FOZ',nomeLogin:'MIQUEIAS14',nomePess:'opcional',anoEnt:2023,logo:logotec75,ClubAtual:fozdoiguacu,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec76={idCart:8833383,nome:'empoderados tops',nomeLogin:'Glória',nomePess:'opcional',anoEnt:2023,logo:logotec76,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec77={idCart:1574746,nome:'Gama SC',nomeLogin:'Anderson gama',nomePess:'opcional',anoEnt:2023,logo:logotec77,ClubAtual:operarioms,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec78={idCart:3279605,nome:'Gardena Show',nomeLogin:'Alexandre Bizarro',nomePess:'opcional',anoEnt:2023,logo:logotec78,ClubAtual:sport,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec79={idCart:16003384,nome:'Anápolis 09',nomeLogin:'Fabiano gomes',nomePess:'opcional',anoEnt:2023,logo:logotec79,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec80={idCart:28709367,nome:'guaranifcbage',nomeLogin:'indio guarani',nomePess:'opcional',anoEnt:2023,logo:logotec80,ClubAtual:guaranyrs,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec81={idCart:10297549,nome:'Ipatinga 2005',nomeLogin:'Vinícius',nomePess:'opcional',anoEnt:2023,logo:logotec81,ClubAtual:ipatinga,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec82={idCart:47521339,nome:'GS Joinville',nomeLogin:'Gabriel Stepic',nomePess:'opcional',anoEnt:2023,logo:logotec82,ClubAtual:joinville,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec83={idCart:13709335,nome:'Grêmio Camaquã',nomeLogin:'David John',nomePess:'opcional',anoEnt:2023,logo:logotec83,ClubAtual:portuguesa,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec84={idCart:25443720,nome:'Greve Geral F.C',nomeLogin:'EL LOCO MEDEIROS',nomePess:'opcional',anoEnt:2023,logo:logotec84,ClubAtual:bahia,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec85={idCart:27515304,nome:'Lajeadense FCRS',nomeLogin:'João Vitor',nomePess:'opcional',anoEnt:2023,logo:logotec85,ClubAtual:lajeadense,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec86={idCart:7617899,nome:'Manausfcbr',nomeLogin:'Davi Silva',nomePess:'opcional',anoEnt:2023,logo:logotec86,ClubAtual:manaus,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec87={idCart:25276380,nome:'GUARDA POPULAR LAJEADO',nomeLogin:'Marlon J. Noro',nomePess:'opcional',anoEnt:2023,logo:logotec87,ClubAtual:athletico,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec88={idCart:13977116,nome:'Sport Horriver Plate',nomeLogin:'Matheus Hense',nomePess:'opcional',anoEnt:2023,logo:logotec88,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec89={idCart:13991183,nome:'Imortal Hakuna HB',nomeLogin:'Henrique Bordignon',nomePess:'opcional',anoEnt:2023,logo:logotec89,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec90={idCart:79144,nome:'injambre FC',nomeLogin:'Nícolas Just',nomePess:'opcional',anoEnt:2023,logo:logotec90,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec91={idCart:1078895,nome:'Metropolitano E.C.',nomeLogin:'João Alves',nomePess:'opcional',anoEnt:2023,logo:logotec91,ClubAtual:metropolitano,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec92={idCart:1857129,nome:'inter de 2 bilhão ',nomeLogin:'RODRIGO ROCHA',nomePess:'opcional',anoEnt:2023,logo:logotec92,ClubAtual:internacional,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec93={idCart:44913569,nome:'INTER DE LIMEIRA 28',nomeLogin:'EVERTON',nomePess:'opcional',anoEnt:2023,logo:logotec93,ClubAtual:internacionalsp,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec94={idCart:144527,nome:'Interrorista',nomeLogin:'Mauricio Rocha',nomePess:'opcional',anoEnt:2023,logo:logotec94,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec95={idCart:30249683,nome:'Mixto dos cria',nomeLogin:'Caio',nomePess:'opcional',anoEnt:2023,logo:logotec95,ClubAtual:mixto,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec96={idCart:29515028,nome:'Ituano A',nomeLogin:'Pedro',nomePess:'opcional',anoEnt:2023,logo:logotec96,ClubAtual:ituano,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec97={idCart:21159633,nome:'JocaNeto FC',nomeLogin:'Joaquim Neto',nomePess:'opcional',anoEnt:2023,logo:logotec97,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec98={idCart:11615120,nome:'Náutico de Roraima ',nomeLogin:'Mário',nomePess:'opcional',anoEnt:2023,logo:logotec98,ClubAtual:nauticorr,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec99={idCart:16801088,nome:'JUVENTUDE E.F',nomeLogin:'Éder Feil',nomePess:'opcional',anoEnt:2023,logo:logotec99,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec100={idCart:7866960,nome:'Nova Iguaçu BXF',nomeLogin:'Gabriel',nomePess:'opcional',anoEnt:2023,logo:logotec100,ClubAtual:novaiguacu,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec101={idCart:28978050,nome:'Novo Hamburgo 1997',nomeLogin:'Wellington Boeno',nomePess:'opcional',anoEnt:2023,logo:logotec101,ClubAtual:novohamburgo,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec102={idCart:2705540,nome:'LUIAN SPORTING CLUB',nomeLogin:'Luian Martins',nomePess:'opcional',anoEnt:2023,logo:logotec102,ClubAtual:americamg,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec103={idCart:2277209,nome:'Olaria Jrr',nomeLogin:'Wili',nomePess:'opcional',anoEnt:2023,logo:logotec103,ClubAtual:olaria,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec104={idCart:416983,nome:'É de Madureira FC',nomeLogin:'Roberto Silva',nomePess:'opcional',anoEnt:2023,logo:logotec104,ClubAtual:madureira,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec105={idCart:30354170,nome:'operário 18',nomeLogin:'Juliano',nomePess:'opcional',anoEnt:2023,logo:logotec105,ClubAtual:operariopr,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec106={idCart:303336,nome:'MarceloGebing F.C',nomeLogin:'MARCELO GEBING',nomePess:'opcional',anoEnt:2023,logo:logotec106,ClubAtual:atleticogo,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec107={idCart:836541,nome:'Marvados Pn',nomeLogin:'Mateus',nomePess:'opcional',anoEnt:2023,logo:logotec107,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec108={idCart:1484622,nome:'S.C  mendigos171',nomeLogin:'Douglas Ehlert',nomePess:'opcional',anoEnt:2023,logo:logotec108,ClubAtual:paulista,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec109={idCart:44531292,nome:'OPERÁRIO IARENCZUK ',nomeLogin:'José iarenczuk',nomePess:'opcional',anoEnt:2023,logo:logotec109,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec110={idCart:14903825,nome:'Missioneiro Tricolor dos Pampas FC',nomeLogin:'ZÉ NILTON',nomePess:'opcional',anoEnt:2023,logo:logotec110,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec111={idCart:755604,nome:'S.C Passo Fundo',nomeLogin:'Carlos ferreira',nomePess:'opcional',anoEnt:2023,logo:logotec111,ClubAtual:passofundo,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec112={idCart:605275,nome:'NACIONAL CAIO',nomeLogin:'NACIONAL CAIO',nomePess:'opcional',anoEnt:2023,logo:logotec112,ClubAtual:nacionalam,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec113={idCart:7692735,nome:'PatrocinenseJP',nomeLogin:'João Paulo',nomePess:'opcional',anoEnt:2023,logo:logotec113,ClubAtual:patrocinense,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec114={idCart:5067073,nome:'EC Pelotas',nomeLogin:'Otávio Martin',nomePess:'opcional',anoEnt:2023,logo:logotec114,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec115={idCart:3426634,nome:'NEGRUSHOW F.C.',nomeLogin:'ANDERSON NEGRUXO',nomePess:'opcional',anoEnt:2023,logo:logotec115,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec116={idCart:528913,nome:'NO BREAK  FC',nomeLogin:'SIQUEIRA',nomePess:'opcional',anoEnt:2023,logo:logotec116,ClubAtual:ceara,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec117={idCart:830214,nome:'QUE PENAROL ',nomeLogin:'victor c rodrigues',nomePess:'opcional',anoEnt:2023,logo:logotec117,ClubAtual:penarolam,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec118={idCart:26359934,nome:'O Real Porto Velho',nomeLogin:'Mister Andre',nomePess:'opcional',anoEnt:2023,logo:logotec118,ClubAtual:portovelhoro,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec119={idCart:28666717,nome:'portuguesa rj fc',nomeLogin:'Marquinhos',nomePess:'opcional',anoEnt:2023,logo:logotec119,ClubAtual:portuguesarj,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec120={idCart:18089506,nome:'de Resende ',nomeLogin:'carlos rezende',nomePess:'opcional',anoEnt:2023,logo:logotec120,ClubAtual:resende,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec121={idCart:309346,nome:'olympus TF',nomeLogin:'Alison Santos11',nomePess:'opcional',anoEnt:2023,logo:logotec121,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec122={idCart:8539546,nome:'Rio Branco AC FC',nomeLogin:'Sergio Henrique',nomePess:'opcional',anoEnt:2023,logo:logotec122,ClubAtual:riobrancoac,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec123={idCart:599238,nome:'Rio Negro SCZ',nomeLogin:'Heidy Batista',nomePess:'opcional',anoEnt:2023,logo:logotec123,ClubAtual:rionegroam,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec124={idCart:515545,nome:'OSCS',nomeLogin:'ODILIO SILMAR',nomePess:'opcional',anoEnt:2023,logo:logotec124,ClubAtual:saopaulo,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec125={idCart:23141887,nome:'OxaFC',nomeLogin:'MACHADO',nomePess:'opcional',anoEnt:2023,logo:logotec125,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec126={idCart:28183628,nome:'Porko loko 1983',nomeLogin:'Alisson Henrique',nomePess:'opcional',anoEnt:2023,logo:logotec126,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec127={idCart:173499,nome:'Paraná Fc',nomeLogin:'Alysson Teixeira',nomePess:'opcional',anoEnt:2023,logo:logotec127,ClubAtual:parana,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec128={idCart:28853645,nome:'Paranoia Club FC',nomeLogin:'Douglas Jeske',nomePess:'opcional',anoEnt:2023,logo:logotec128,ClubAtual:saoraimundoam,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec129={idCart:3128918,nome:'Pardalice',nomeLogin:'TIAGO BIZARRO',nomePess:'opcional',anoEnt:2023,logo:logotec129,ClubAtual:brasilrs,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec130={idCart:853591,nome:'River do Piauí',nomeLogin:'Caio Filipe',nomePess:'opcional',anoEnt:2023,logo:logotec130,ClubAtual:riverpi,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec131={idCart:44868227,nome:'Pataço do Sul FC',nomeLogin:'LUIGI MUNHOZ BARBOSA',nomePess:'opcional',anoEnt:2023,logo:logotec131,ClubAtual:americarj,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec132={idCart:933892,nome:'São Cristóvão fcc',nomeLogin:'Daniel Alves',nomePess:'opcional',anoEnt:2023,logo:logotec132,ClubAtual:saocristovao,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec133={idCart:16177452,nome:'FC Jundiaí Paulista',nomeLogin:'Henrique Melo',nomePess:'opcional',anoEnt:2023,logo:logotec133,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec134={idCart:21066722,nome:'EC São Luiz de Ijuí',nomeLogin:'Arthur Blatt',nomePess:'opcional',anoEnt:2023,logo:logotec134,ClubAtual:saoluizrs,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec135={idCart:27559042,nome:'pedepoeira89',nomeLogin:'MARCOS',nomePess:'opcional',anoEnt:2023,logo:logotec135,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec136={idCart:27642008,nome:'LEC Social',nomeLogin:'Luciano',nomePess:'opcional',anoEnt:2023,logo:logotec136,ClubAtual:social,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec137={idCart:25329684,nome:'TocantinopólisCRVG',nomeLogin:'Gustavo Henrique',nomePess:'opcional',anoEnt:2023,logo:logotec137,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec138={idCart:2369698,nome:'PFC.VAMODALE',nomeLogin:'Patrick Peres',nomePess:'opcional',anoEnt:2023,logo:logotec138,ClubAtual:caldense,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec139={idCart:25304452,nome:'AP Trem F.C',nomeLogin:'Bruno Ribeiro',nomePess:'opcional',anoEnt:2023,logo:logotec139,ClubAtual:tremap,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec140={idCart:26263295,nome:'Tuna luso F.C',nomeLogin:'Francinaldo Mendes',nomePess:'opcional',anoEnt:2023,logo:logotec140,ClubAtual:tunalusopa,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec141={idCart:27827413,nome:'TUPIFC 1910',nomeLogin:'Julio Jesus',nomePess:'opcional',anoEnt:2023,logo:logotec141,ClubAtual:tupi,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec142={idCart:25317163,nome:'Tupinambás FC',nomeLogin:'Tubarão',nomePess:'opcional',anoEnt:2023,logo:logotec142,ClubAtual:tupinambas,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec143={idCart:14755901,nome:'Praiano Imortal',nomeLogin:'Silvio Ferreira',nomePess:'opcional',anoEnt:2023,logo:logotec143,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec144={idCart:14807369,nome:'Remo SA',nomeLogin:'remo sena',nomePess:'opcional',anoEnt:2023,logo:logotec144,ClubAtual:remo,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec145={idCart:2378945,nome:'URT-Patoloko',nomeLogin:'DeividRocha',nomePess:'opcional',anoEnt:2023,logo:logotec145,ClubAtual:urt,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec146={idCart:15921095,nome:'Uberlândia City EC',nomeLogin:'Kamilo Medeiros',nomePess:'opcional',anoEnt:2023,logo:logotec146,ClubAtual:uberlandia,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec147={idCart:45559641,nome:'FC YPIRANGA-AP',nomeLogin:'xvJKLPvx',nomePess:'opcional',anoEnt:2023,logo:logotec147,ClubAtual:ypirangaap,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec148={idCart:41215,nome:'Rodrigues EFC',nomeLogin:'EDVARD RODRIGUES',nomePess:'opcional',anoEnt:2023,logo:logotec148,ClubAtual:voltaredonda,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec149={idCart:120020,nome:'Roratto bg',nomeLogin:'DELCIO',nomePess:'opcional',anoEnt:2023,logo:logotec149,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec150={idCart:562745,nome:'Salão Central FC',nomeLogin:'IVANDRO',nomePess:'opcional',anoEnt:2023,logo:logotec150,ClubAtual:paysandu,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec151={idCart:8271084,nome:'Interlaje',nomeLogin:'Luiz Poly Jr',nomePess:'opcional',anoEnt:2023,logo:logotec151,ClubAtual:interdelajes,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec152={idCart:26758171,nome:'Luverdense 100%',nomeLogin:'silva',nomePess:'opcional',anoEnt:2023,logo:logotec152,ClubAtual:luverdense,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec153={idCart:846609,nome:'Santinha 1',nomeLogin:'Ewerton',nomePess:'opcional',anoEnt:2023,logo:logotec153,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec154={idCart:25642175,nome:'S.E. GAMA CYTY',nomeLogin:'Luan',nomePess:'opcional',anoEnt:2023,logo:logotec154,ClubAtual:gama,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec155={idCart:28487870,nome:'Peixe Com Pelo Fc',nomeLogin:'Weli Guardiola',nomePess:'opcional',anoEnt:2023,logo:logotec155,ClubAtual:santos,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec156={idCart:411371,nome:'São Bento SG',nomeLogin:'Dudu',nomePess:'opcional',anoEnt:2023,logo:logotec156,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec157={idCart:44527392,nome:'São Caetano RST',nomeLogin:'Reginaldo Tavares',nomePess:'opcional',anoEnt:2023,logo:logotec157,ClubAtual:saocaetano,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec158={idCart:2235983,nome:'SÃO BERNARDO S.A',nomeLogin:'Vagner',nomePess:'opcional',anoEnt:2023,logo:logotec158,ClubAtual:saobernardo,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec159={idCart:27483492,nome:'FC Zequinha MA',nomeLogin:'Felipe',nomePess:'opcional',anoEnt:2023,logo:logotec159,ClubAtual:saojosers,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec160={idCart:20305739,nome:'Ypiranga Erechim FC',nomeLogin:'João Bergonsi',nomePess:'opcional',anoEnt:2023,logo:logotec160,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec161={idCart:141295,nome:'SE Confiança',nomeLogin:'Maxmüller',nomePess:'opcional',anoEnt:2023,logo:logotec161,ClubAtual:confianca,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec162={idCart:666259,nome:'A. E. Floresta',nomeLogin:'Haroldo Krambeck',nomePess:'opcional',anoEnt:2023,logo:logotec162,ClubAtual:floresta,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec163={idCart:3667819,nome:'Sport Club Izacar',nomeLogin:'RANGEL BARROS',nomePess:'opcional',anoEnt:2023,logo:logotec163,ClubAtual:avai,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec164={idCart:0,nome:'SC Roma',nomeLogin:'Iago Gonçalves',nomePess:'opcional',anoEnt:2023,logo:logotec164,ClubAtual:pelotas,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec165={idCart:12415025,nome:'S.C SERRA GAÚCHA',nomeLogin:'EDSON N. GONÇALVES',nomePess:'opcional',anoEnt:2023,logo:logotec165,ClubAtual:cuiaba,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec166={idCart:120938,nome:'S.C XAVANTE',nomeLogin:'Denis Trindade',nomePess:'opcional',anoEnt:2023,logo:logotec166,ClubAtual:athletic,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec167={idCart:13921925,nome:'SELEBEST FC',nomeLogin:'EDVAN SILVA',nomePess:'opcional',anoEnt:2023,logo:logotec167,ClubAtual:vasco,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec168={idCart:125562,nome:'SelleGalo F.C',nomeLogin:'João Marcus Fonseca',nomePess:'opcional',anoEnt:2023,logo:logotec168,ClubAtual:bragantino,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec169={idCart:3790993,nome:'SER GEESNA',nomeLogin:'Marcos Diogo',nomePess:'opcional',anoEnt:2023,logo:logotec169,ClubAtual:juventude,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec170={idCart:7876526,nome:'SER  XANTOSKA',nomeLogin:'ECHARTÊA - SVP',nomePess:'opcional',anoEnt:2023,logo:logotec170,ClubAtual:corinthians,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec171={idCart:7443320,nome:'APARECIDENSE FFC',nomeLogin:'samuel',nomePess:'opcional',anoEnt:2023,logo:logotec171,ClubAtual:aparecidense,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec172={idCart:2928490,nome:'E.C Só Pra Encomodar',nomeLogin:'DELCIO LUTZ',nomePess:'opcional',anoEnt:2023,logo:logotec172,ClubAtual:fortaleza,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec173={idCart:2928490,nome:'POUSO ALEGRE esports',nomeLogin:'ivanjr',nomePess:'opcional',anoEnt:2023,logo:logotec173,ClubAtual:pousoalegre,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec174={idCart:28466821,nome:'Stepanski FC',nomeLogin:'Ariel Stepanski',nomePess:'opcional',anoEnt:2023,logo:logotec174,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec175={idCart:28444,nome:'Time do Nee',nomeLogin:'NEEMIAS KASPER',nomePess:'opcional',anoEnt:2023,logo:logotec175,ClubAtual:coritiba,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec176={idCart:8974249,nome:'Alto Clima FC',nomeLogin:'Alto Clima FC',nomePess:'opcional',anoEnt:2023,logo:logotec176,ClubAtual:altos,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec177={idCart:17911165,nome:'Tolfos futebol clube',nomeLogin:'Rodrigo',nomePess:'opcional',anoEnt:2023,logo:logotec177,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec178={idCart:47688275,nome:'EC TOMBENSE MG',nomeLogin:'Gabriel Rocha',nomePess:'opcional',anoEnt:2023,logo:logotec178,ClubAtual:tombense,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec179={idCart:25302423,nome:'TP Charrua',nomeLogin:'ANDRÉ NEVES',nomePess:'opcional',anoEnt:2023,logo:logotec179,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec180={idCart:14157276,nome:'Ferroviária A.F.E.',nomeLogin:'Roberto Roque',nomePess:'opcional',anoEnt:2023,logo:logotec180,ClubAtual:ferroviariasp,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec181={idCart:1056673,nome:'AE MATTI',nomeLogin:'Matheus Brotti',nomePess:'opcional',anoEnt:2023,logo:logotec181,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec182={idCart:17935813,nome:'Trimerica Fc',nomeLogin:'BALTA DIAS',nomePess:'opcional',anoEnt:2023,logo:logotec182,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec183={idCart:27718747,nome:'Tricolor Azul Branco e Preto ',nomeLogin:'Rogério Lopes',nomePess:'opcional',anoEnt:2023,logo:logotec183,ClubAtual:criciuma,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec184={idCart:25827587,nome:'FC trombada 1957',nomeLogin:'JOSÉ AZEREDO',nomePess:'opcional',anoEnt:2023,logo:logotec184,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec185={idCart:297082,nome:'TUB4RÃO EC',nomeLogin:'JOSÉ FERREIRA',nomePess:'opcional',anoEnt:2023,logo:logotec185,ClubAtual:goias,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec186={idCart:47712973,nome:'Aliançaplasticos ',nomeLogin:' Aliançaplasticos',nomePess:'opcional',anoEnt:2023,logo:logotec186,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec187={idCart:14326686,nome:'América Cruz',nomeLogin:'Jamerson Luiz',nomePess:'opcional',anoEnt:2023,logo:logotec187,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec188={idCart:47722889,nome:'Aninhapaodemel F.C',nomeLogin:'Pamela',nomePess:'opcional',anoEnt:2023,logo:logotec188,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec189={idCart:44506741,nome:'aquiecarioca',nomeLogin:'aquiecarioca',nomePess:'opcional',anoEnt:2023,logo:logotec189,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec190={idCart:12089183,nome:'Unidos da NIKE f.c',nomeLogin:'FERNANDES',nomePess:'opcional',anoEnt:2023,logo:logotec190,ClubAtual:nautico,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec191={idCart:27453393,nome:'BORASERFELIZ F.C',nomeLogin:'BORA',nomePess:'opcional',anoEnt:2023,logo:logotec191,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec192={idCart:8975023,nome:'cachorra maga fc',nomeLogin:'Alex pool',nomePess:'opcional',anoEnt:2023,logo:logotec192,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec193={idCart:18702038,nome:' Vila Real Goiânia ',nomeLogin:'João Victor',nomePess:'opcional',anoEnt:2023,logo:logotec193,ClubAtual:vilanova,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec194={idCart:17266,nome:'Canaã da gama',nomeLogin:' Ricardo Léo',nomePess:'opcional',anoEnt:2023,logo:logotec194,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec195={idCart:44513215,nome:'Capuscas F.C 2023',nomeLogin:'Sérgio',nomePess:'opcional',anoEnt:2023,logo:logotec195,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec196={idCart:8636854,nome:'Volta Redonda abc',nomeLogin:'ademilson zacarias',nomePess:'opcional',anoEnt:2023,logo:logotec196,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec197={idCart:26344149,nome:'XVzão Piracicaba',nomeLogin:'Denisar',nomePess:'opcional',anoEnt:2023,logo:logotec197,ClubAtual:xvpiracicaba,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec198={idCart:2092255,nome:'TimãoJP10',nomeLogin:'João Pedro',nomePess:'opcional',anoEnt:2023,logo:logotec198,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec199={idCart:19404988,nome:'ZEBRA CLUBE RS',nomeLogin:'Rafael Souza',nomePess:'opcional',anoEnt:2023,logo:logotec199,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec200={idCart:47664671,nome:'ztalihc10',nomeLogin:'wladimir ztalihc',nomePess:'opcional',anoEnt:2023,logo:logotec200,ClubAtual:ypirangars,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec201={idCart:1652966,nome:'Zurrilho',nomeLogin:'Cairuga Amauri',nomePess:'opcional',anoEnt:2023,logo:logotec201,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec202={idCart:5144485,nome:'SOUZ4S',nomeLogin:'Rafael Souza',nomePess:'opcional',anoEnt:2023,logo:logotec202,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec203={idCart:47821810,nome:'CARTOCRAQUE 252',nomeLogin:'CARTOCRAQUE',nomePess:'opcional',anoEnt:2023,logo:logotec203,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec204={idCart:45862988,nome:'Cartoleiro Tuga FC',nomeLogin:'Vitor Guimarães',nomePess:'opcional',anoEnt:2023,logo:logotec204,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec205={idCart:26065640,nome:'catadão do vps ',nomeLogin:'Lindolfo Neto',nomePess:'opcional',anoEnt:2023,logo:logotec205,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec206={idCart:21468965,nome:'Cielschmitz',nomeLogin:' Marciel',nomePess:'opcional',anoEnt:2023,logo:logotec206,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec207={idCart:29395973,nome:'CORREDOR CARTOLEIRO',nomeLogin:' ALISON SANTANNA',nomePess:'opcional',anoEnt:2023,logo:logotec207,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec208={idCart:3741250,nome:'CQT FC',nomeLogin:' Lucas Aguiar',nomePess:'opcional',anoEnt:2023,logo:logotec208,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec209={idCart:45715901,nome:'Cristiano cartola7',nomeLogin:'Cleiton',nomePess:'opcional',anoEnt:2023,logo:logotec209,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec210={idCart:26734590,nome:'DAINEZI 01 FC',nomeLogin:'João Dainezi',nomePess:'opcional',anoEnt:2023,logo:logotec210,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec211={idCart:44516142,nome:'Detroit_x',nomeLogin:'Matheus',nomePess:'opcional',anoEnt:2023,logo:logotec211,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec212={idCart:3924779,nome:'DiegoCarlin FC',nomeLogin:'Diego Carlin',nomePess:'opcional',anoEnt:2023,logo:logotec212,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec213={idCart:2891520,nome:'Drift F.C',nomeLogin:'Eduardo Possani',nomePess:'opcional',anoEnt:2023,logo:logotec213,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec214={idCart:48940295,nome:'Fla Parelhas FC II',nomeLogin:'Clécio Ricardo',nomePess:'opcional',anoEnt:2023,logo:logotec214,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec215={idCart:28460843,nome:'FLA010FLA010',nomeLogin:'DANIEL',nomePess:'opcional',anoEnt:2023,logo:logotec215,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec216={idCart:47650676,nome:'Flamito Mais',nomeLogin:' Cezar',nomePess:'opcional',anoEnt:2023,logo:logotec216,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec217={idCart:8566146,nome:'GABTRIN98 F.C ',nomeLogin:' GABRIEL TRINDADE',nomePess:'opcional',anoEnt:2023,logo:logotec217,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec218={idCart:30119688,nome:'Ganduulafcc',nomeLogin:'rwzinn',nomePess:'opcional',anoEnt:2023,logo:logotec218,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec219={idCart:26282927,nome:'gawlik fc',nomeLogin:' Thiago José gawlik',nomePess:'opcional',anoEnt:2023,logo:logotec219,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec220={idCart:11499122,nome:'Givanildo 2023',nomeLogin:'Givanildo Souza',nomePess:'opcional',anoEnt:2023,logo:logotec220,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec221={idCart:44509620,nome:'Heitor  ousadia',nomeLogin:' Heitor silva',nomePess:'opcional',anoEnt:2023,logo:logotec221,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec222={idCart:44889302,nome:'Heleninha F.C.C',nomeLogin:'Helena',nomePess:'opcional',anoEnt:2023,logo:logotec222,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec223={idCart:27787169,nome:'america rn cfc',nomeLogin:'Vinicius Costa',nomePess:'opcional',anoEnt:2023,logo:logotec223,ClubAtual:americarn,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec224={idCart:18480186,nome:'Urra  Avai',nomeLogin:'Cristina rosa',nomePess:'opcional',anoEnt:2023,logo:logotec224,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec225={idCart:14047402,nome:'Bangutips Fc',nomeLogin:'bangu',nomePess:'opcional',anoEnt:2023,logo:logotec225,ClubAtual:bangu,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec226={idCart:29914,nome:'Brasil de Pedrotas',nomeLogin:'Pedro Brasil',nomePess:'opcional',anoEnt:2023,logo:logotec226,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec227={idCart:13993748,nome:'Caldense EC',nomeLogin:'Ricardinho',nomePess:'opcional',anoEnt:2023,logo:logotec227,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec228={idCart:1111889,nome:'André CRB-AL',nomeLogin:'André Amorim',nomePess:'opcional',anoEnt:2023,logo:logotec228,ClubAtual:crb,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec229={idCart:1165,nome:'O Criciuma EC',nomeLogin:'Bruno Dassoler',nomePess:'opcional',anoEnt:2023,logo:logotec229,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec230={idCart:14535123,nome:'Guarani 10',nomeLogin:'Fernando',nomePess:'opcional',anoEnt:2023,logo:logotec230,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec231={idCart:27996399,nome:'Sou Londrina EC ',nomeLogin:'Luiz Marcelo Gazzoni',nomePess:'opcional',anoEnt:2023,logo:logotec231,ClubAtual:londrina,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec232={idCart:803836,nome:'SC Novorizontino',nomeLogin:'Leonardo Carlos',nomePess:'opcional',anoEnt:2023,logo:logotec232,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec233={idCart:6965124,nome:'Edu Ponte Preta',nomeLogin:'Eduardo Pissolatti',nomePess:'opcional',anoEnt:2023,logo:logotec233,ClubAtual:pontepreta,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec234={idCart:26822732,nome:'É A LUSA',nomeLogin:'Leonardo',nomePess:'opcional',anoEnt:2023,logo:logotec234,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec235={idCart:14029423,nome:'CA Santo André',nomeLogin:'João Vieira',nomePess:'opcional',anoEnt:2023,logo:logotec235,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec236={idCart:20405016,nome:'SÃO RAIMUNDO CDA',nomeLogin:'Léo cda',nomePess:'opcional',anoEnt:2023,logo:logotec236,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec237={idCart:3760631,nome:'Treze 17 PB',nomeLogin:'Gabriel Santos',nomePess:'opcional',anoEnt:2023,logo:logotec237,ClubAtual:treze,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec238={idCart:25863520,nome:'Vila Nova F.C.C',nomeLogin:'Ivo Vila Nova',nomePess:'opcional',anoEnt:2023,logo:logotec238,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec239={idCart:170591,nome:'Vitória Retrô EC',nomeLogin:'Cleiton Paiva',nomePess:'opcional',anoEnt:2023,logo:logotec239,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec240={idCart:608804,nome:'E.C. XV Piracicaba ',nomeLogin:'Anderson',nomePess:'opcional',anoEnt:2023,logo:logotec240,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec241={idCart:2458162,nome:'Água Santa S.C.P.',nomeLogin:'Lucas Antonelli',nomePess:'opcional',anoEnt:2023,logo:logotec241,ClubAtual:aguasanta,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec242={idCart:2867094,nome:'F.C Águia De Marabá ',nomeLogin:'Cislei Oliveira',nomePess:'opcional',anoEnt:2023,logo:logotec242,ClubAtual:aguiademaraba,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec243={idCart:5472534,nome:'ANAPOLIS 2 FC',nomeLogin:'EDER LUIS',nomePess:'opcional',anoEnt:2023,logo:logotec243,ClubAtual:anapolis,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec244={idCart:9486411,nome:'Asa de arápiraca Ftc',nomeLogin:'Fernando de oliveira',nomePess:'opcional',anoEnt:2023,logo:logotec244,ClubAtual:asa,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec245={idCart:834926,nome:'Atlético C. Cearense',nomeLogin:'Pedro Igor',nomePess:'opcional',anoEnt:2023,logo:logotec245,ClubAtual:atleticocearense,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec246={idCart:30042792,nome:'Avenida mito FC',nomeLogin:'Jardel Carvalho',nomePess:'opcional',anoEnt:2023,logo:logotec246,ClubAtual:avenida,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec247={idCart:4497371,nome:'Barra do Sul FC',nomeLogin:'Gercino Barauna',nomePess:'opcional',anoEnt:2023,logo:logotec247,ClubAtual:barrasc,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec248={idCart:25401027,nome:'L13 Cametá',nomeLogin:'Pai e Filho',nomePess:'opcional',anoEnt:2023,logo:logotec248,ClubAtual:cameta,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec249={idCart:25391114,nome:'FC Capital',nomeLogin:'Luan',nomePess:'opcional',anoEnt:2023,logo:logotec249,ClubAtual:capital,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec250={idCart:101866,nome:'Concordia AC',nomeLogin:'Sipioni Alliev',nomePess:'opcional',anoEnt:2023,logo:logotec250,ClubAtual:concordia,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec251={idCart:18285027,nome:'CSE FOOTBALL CLUB',nomeLogin:'Vinícius',nomePess:'opcional',anoEnt:2023,logo:logotec251,ClubAtual:cse,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec252={idCart:742386,nome:'Fluminense do Piauí',nomeLogin:'Julio Cesar Diogenes',nomePess:'opcional',anoEnt:2023,logo:logotec252,ClubAtual:fluminensepi,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec253={idCart:2017,nome:'Hercílio Luz Futebol Clube',nomeLogin:'Marcos B de Carvalho',nomePess:'opcional',anoEnt:2023,logo:logotec253,ClubAtual:hercilioluz,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec254={idCart:3681652,nome:'HUMAITÁ EC',nomeLogin:'ERMINIO',nomePess:'opcional',anoEnt:2023,logo:logotec254,ClubAtual:humaita,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec255={idCart:1788021,nome:'Iguatu CE FC',nomeLogin:'Arthur Tomé',nomePess:'opcional',anoEnt:2023,logo:logotec255,ClubAtual:iguatu,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec256={idCart:5202714,nome:'Iporá E. C.',nomeLogin:'Heitor Paes',nomePess:'opcional',anoEnt:2023,logo:logotec256,ClubAtual:ipora,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec257={idCart:1461798,nome:'SC Itabaiana',nomeLogin:'Matheus Almeida',nomePess:'opcional',anoEnt:2023,logo:logotec257,ClubAtual:itabaiana,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec258={idCart:41368,nome:'Itabuna E.Clube',nomeLogin:'Lukinhas costa',nomePess:'opcional',anoEnt:2023,logo:logotec258,ClubAtual:itabuna,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec259={idCart:8608284,nome:'Jacuipense Fut',nomeLogin:'Jean',nomePess:'opcional',anoEnt:2023,logo:logotec259,ClubAtual:jacuipense,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec260={idCart:45731423,nome:'juazeirense Real ',nomeLogin:'Nilson',nomePess:'opcional',anoEnt:2023,logo:logotec260,ClubAtual:juazeirense,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec261={idCart:1999542,nome:'Manauara bulls',nomeLogin:'Clovis Filho',nomePess:'opcional',anoEnt:2023,logo:logotec261,ClubAtual:manauara,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec262={idCart:1675583,nome:'Maracanã Cit FC',nomeLogin:'Alex Ferreira',nomePess:'opcional',anoEnt:2023,logo:logotec262,ClubAtual:maracanace,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec263={idCart:8280874,nome:'Maranhão Zl Fc ',nomeLogin:'Marcio Pini',nomePess:'opcional',anoEnt:2023,logo:logotec263,ClubAtual:maranhao,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec264={idCart:18028802,nome:'Maringá Cartolouco FC',nomeLogin:'Fabiano Primo Dias',nomePess:'opcional',anoEnt:2023,logo:logotec264,ClubAtual:maringa,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec265={idCart:1793028,nome:'moto club 12',nomeLogin:'André Ricardo',nomePess:'opcional',anoEnt:2023,logo:logotec265,ClubAtual:motoclub,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec266={idCart:9004952,nome:'Petrolina FCPE',nomeLogin:'Cleison',nomePess:'opcional',anoEnt:2023,logo:logotec266,ClubAtual:petrolina,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec267={idCart:18289539,nome:'Potiguar de Mossoró s2',nomeLogin:'Ghisleno Renato',nomePess:'opcional',anoEnt:2023,logo:logotec267,ClubAtual:potiguardemossoro,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec268={idCart:1022877,nome:'Princesa do Solimões E.C.',nomeLogin:'Marcos Rocha',nomePess:'opcional',anoEnt:2023,logo:logotec268,ClubAtual:princesadosolimoes,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec269={idCart:25337841,nome:'Real Brasília FCB',nomeLogin:'igor',nomePess:'opcional',anoEnt:2023,logo:logotec269,ClubAtual:realbrasilia,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec270={idCart:579668,nome:'REAL NOROESTE CFC',nomeLogin:'BRUNO FAVORETTE',nomePess:'opcional',anoEnt:2023,logo:logotec270,ClubAtual:realnoroeste,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec271={idCart:25359914,nome:'ALDEIA RETRÔ  FC',nomeLogin:'EMERSON',nomePess:'opcional',anoEnt:2023,logo:logotec271,ClubAtual:retro,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec272={idCart:3778152,nome:'Santinha CG',nomeLogin:'Adriano silva',nomePess:'opcional',anoEnt:2023,logo:logotec272,ClubAtual:santacruzdenatal,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec273={idCart:280471,nome:'Sao José Sports ',nomeLogin:'Douglas Costta',nomePess:'opcional',anoEnt:2023,logo:logotec273,ClubAtual:saojosesp,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec274={idCart:1662075,nome:'São Raimundo E.C 1918',nomeLogin:'Antony',nomePess:'opcional',anoEnt:2023,logo:logotec274,ClubAtual:saoraimundorr,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec275={idCart:436303,nome:'Sergipe mil grau FC',nomeLogin:'Diiego CRUUZ',nomePess:'opcional',anoEnt:2023,logo:logotec275,ClubAtual:sergipe,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec276={idCart:25568513,nome:'SERRA ES FC',nomeLogin:'Marquinhos',nomePess:'opcional',anoEnt:2023,logo:logotec276,ClubAtual:serra,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec277={idCart:13995043,nome:'Souzas city',nomeLogin:'Filipe souza',nomePess:'opcional',anoEnt:2023,logo:logotec277,ClubAtual:sousa,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec278={idCart:592151,nome:'VERDÃO EC',nomeLogin:'RICARDO FERNANDES',nomePess:'opcional',anoEnt:2023,logo:logotec278,ClubAtual:tocantinopolis,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec279={idCart:9676643,nome:' EC União TJ',nomeLogin:'Jivis Paixão',nomePess:'opcional',anoEnt:2023,logo:logotec279,ClubAtual:uniaorondonopolis,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec280={idCart:19493539,nome:'C.E.F MIRASSOL ',nomeLogin:'Anderson',nomePess:'opcional',anoEnt:2023,logo:logotec280,ClubAtual:mirassol,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec281={idCart:13973796,nome:'ANDRAUS_67',nomeLogin:'JAPA',nomePess:'opcional',anoEnt:2023,logo:logotec281,ClubAtual:andraus,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec282={idCart:28513121,nome:'Azuriz Sport Club',nomeLogin:'Elison Jr Oliveira',nomePess:'opcional',anoEnt:2023,logo:logotec282,ClubAtual:azuriz,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec283={idCart:30387567,nome:'Matheus PST',nomeLogin:'João Matheus',nomePess:'opcional',anoEnt:2023,logo:logotec283,ClubAtual:psts,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec284={idCart:13981847,nome:'GALO MARINGA F.C',nomeLogin:'Ney Lopes',nomePess:'opcional',anoEnt:2023,logo:logotec284,ClubAtual:galomaringa,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec285={idCart:19364092,nome:'Atletico Joseense SJC',nomeLogin:'João Souza',nomePess:'opcional',anoEnt:2023,logo:logotec285,ClubAtual:saojoseense,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec286={idCart:12179894,nome:'Toledo 1996',nomeLogin:'Toledo',nomePess:'opcional',anoEnt:2023,logo:logotec286,ClubAtual:toledo,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec287={idCart:1081370,nome:'Grêmio Maringá/ SFC',nomeLogin:'José Pelegrino',nomePess:'opcional',anoEnt:2023,logo:logotec287,ClubAtual:gremiomaringa,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec288={idCart:1456984,nome:'Marcilio Dias FC',nomeLogin:'Daniel Girardi',nomePess:'opcional',anoEnt:2023,logo:logotec288,ClubAtual:marciliodias,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec289={idCart:8234448,nome:'EC Nação',nomeLogin:'Ivan',nomePess:'opcional',anoEnt:2023,logo:logotec289,ClubAtual:nacao,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec290={idCart:21727622,nome:'Guarani da Palhoça FC',nomeLogin:'Adriano',nomePess:'opcional',anoEnt:2023,logo:logotec290,ClubAtual:guaranidepalhoca,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec291={idCart:60137,nome:'SC Juventuss',nomeLogin:'Mr. Toledo',nomePess:'opcional',anoEnt:2023,logo:logotec291,ClubAtual:juventusdejaragua,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec292={idCart:619292,nome:'caravaggiofc',nomeLogin:'Rodrigo Vieira',nomePess:'opcional',anoEnt:2023,logo:logotec292,ClubAtual:caravaggio,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec293={idCart:25780905,nome:'AFØGADOS FC',nomeLogin:'Lucas Quesado',nomePess:'opcional',anoEnt:2023,logo:logotec293,ClubAtual:afogados,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec294={idCart:2017597,nome:'CR Barbalha',nomeLogin:'Pedro Henrique 2018',nomePess:'opcional',anoEnt:2023,logo:logotec294,ClubAtual:barbalha,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec295={idCart:1182492,nome:'Belo Jardim Fut C',nomeLogin:'Vinícius Mendonça',nomePess:'opcional',anoEnt:2023,logo:logotec295,ClubAtual:belojardim,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec296={idCart:2308690,nome:'Caruaru City OFC',nomeLogin:'Antônio Fernando',nomePess:'opcional',anoEnt:2023,logo:logotec296,ClubAtual:caruarucity,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec297={idCart:15951262,nome:'Caucaia de sola.',nomeLogin:'Thiago',nomePess:'opcional',anoEnt:2023,logo:logotec297,ClubAtual:caucaia,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec298={idCart:5487429,nome:'FC CENTRAL  MC',nomeLogin:'Sérgio Ricardo',nomePess:'opcional',anoEnt:2023,logo:logotec298,ClubAtual:central,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec299={idCart:5903723,nome:'CEOV-OPE',nomeLogin:'João Bosco',nomePess:'opcional',anoEnt:2023,logo:logotec299,ClubAtual:ceov,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec300={idCart:1768836,nome:'Comercial T10 fc',nomeLogin:'Frank Rodrigues',nomePess:'opcional',anoEnt:2023,logo:logotec300,ClubAtual:comercialms,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec301={idCart:2645,nome:'Calango do Crato',nomeLogin:'Mailson Maia',nomePess:'opcional',anoEnt:2023,logo:logotec301,ClubAtual:crato,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec302={idCart:323996,nome:'DECISÃO PE F. C',nomeLogin:'Rocha Erivandes',nomePess:'opcional',anoEnt:2023,logo:logotec302,ClubAtual:decisaosertania,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec303={idCart:1712152,nome:'Sport Club Dom Bosco',nomeLogin:'Nicolau',nomePess:'opcional',anoEnt:2023,logo:logotec303,ClubAtual:dombosco,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec304={idCart:18184176,nome:'GOIANÉSIA - GOIÁS 1967',nomeLogin:'WASHINGTON IZAC',nomePess:'opcional',anoEnt:2023,logo:logotec304,ClubAtual:goianesia,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec305={idCart:10061925,nome:'Goiânia fc gyn',nomeLogin:'Wescley Silva',nomePess:'opcional',anoEnt:2023,logo:logotec305,ClubAtual:goiania,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec306={idCart:4829228,nome:'Goiatuba Futebol Clube',nomeLogin:'Guido',nomePess:'opcional',anoEnt:2023,logo:logotec306,ClubAtual:goiatuba,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec307={idCart:8805399,nome:'guarany de sobral MC',nomeLogin:'WESLEY PAIVA',nomePess:'opcional',anoEnt:2023,logo:logotec307,ClubAtual:guaranydesobral,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec308={idCart:45243534,nome:'HORIZONTE SEH',nomeLogin:'RAGNAR100',nomePess:'opcional',anoEnt:2023,logo:logotec308,ClubAtual:horizonte,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec309={idCart:26896922,nome:'IbisManiaff',nomeLogin:'IbisFelipe',nomePess:'opcional',anoEnt:2023,logo:logotec309,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec310={idCart:7961735,nome:'icasa sr',nomeLogin:'wanderson',nomePess:'opcional',anoEnt:2023,logo:logotec310,ClubAtual:icasa,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec311={idCart:4861,nome:'Inhumas82',nomeLogin:'erivelton88',nomePess:'opcional',anoEnt:2023,logo:logotec311,ClubAtual:inhumas,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec312={idCart:1114558,nome:'Itapipoca F.C',nomeLogin:'César',nomePess:'opcional',anoEnt:2023,logo:logotec312,ClubAtual:itapipoca,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec313={idCart:6212658,nome:'Itumbiara futebol',nomeLogin:'Warlley',nomePess:'opcional',anoEnt:2023,logo:logotec313,ClubAtual:itumbiara,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec314={idCart:18810927,nome:'jataiense.city',nomeLogin:'valdeir',nomePess:'opcional',anoEnt:2023,logo:logotec314,ClubAtual:jataiense,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec315={idCart:10430383,nome:'Luziânia A.a',nomeLogin:'Wagner Bento',nomePess:'opcional',anoEnt:2023,logo:logotec315,ClubAtual:luziania,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec316={idCart:3399018,nome:'Maguary Spc',nomeLogin:'ourenco nobrega',nomePess:'opcional',anoEnt:2023,logo:logotec316,ClubAtual:maguary,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec317={idCart:44770634,nome:'clube morrinhos fc',nomeLogin:'Alessandro',nomePess:'opcional',anoEnt:2023,logo:logotec317,ClubAtual:morrinhos,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec318={idCart:47514010,nome:'Nova Mutum EC MT',nomeLogin:'luccact',nomePess:'opcional',anoEnt:2023,logo:logotec318,ClubAtual:novamutum,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec319={idCart:531539,nome:'PacajuSPO FC',nomeLogin:'Vlademir Nogueira',nomePess:'opcional',anoEnt:2023,logo:logotec319,ClubAtual:pacajus,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec320={idCart:21008,nome:'É O PORTO F.C',nomeLogin:'Luan B.',nomePess:'opcional',anoEnt:2023,logo:logotec320,ClubAtual:porto,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec321={idCart:19228525,nome:'SalgueiroFC Clube',nomeLogin:'helio',nomePess:'opcional',anoEnt:2023,logo:logotec321,ClubAtual:salgueiro,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec322={idCart:28766253,nome:'Tiradentes Juá FC',nomeLogin:'Wesley Nogueira',nomePess:'opcional',anoEnt:2023,logo:logotec322,ClubAtual:tiradentesce,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec323={idCart:18225885,nome:'Vera Cruz red fc',nomeLogin:'Tiago Oliveira',nomePess:'opcional',anoEnt:2023,logo:logotec323,ClubAtual:veracruz,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec324={idCart:23986421,nome:'vitoria das taboca 2.0',nomeLogin:'junior',nomePess:'opcional',anoEnt:2023,logo:logotec324,ClubAtual:vitoriadastabocas,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec325={idCart:1312634,nome:'A.C.DaSilva 89',nomeLogin:'DaSilva',nomePess:'opcional',anoEnt:2023,logo:logotec325,ClubAtual:atleticoba,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec326={idCart:314223,nome:'ABC MORAL FC',nomeLogin:' Adisson Honorato',nomePess:'opcional',anoEnt:2023,logo:logotec326,ClubAtual:abc,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec327={idCart:3104709,nome:'af4bcr7',nomeLogin:' af4bcr7',nomePess:'opcional',anoEnt:2023,logo:logotec327,ClubAtual:barcelonaba,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec328={idCart:535301,nome:'Alex Buião Fla',nomeLogin:' Alex',nomePess:'opcional',anoEnt:2023,logo:logotec328,ClubAtual:jacobina,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec329={idCart:47712973,nome:'Aliançaplasticos',nomeLogin:' Aliançaplasticos',nomePess:'opcional',anoEnt:2023,logo:logotec329,ClubAtual:jequie,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec330={idCart:24381493,nome:'André_crvg71',nomeLogin:'André Ferreira',nomePess:'opcional',anoEnt:2023,logo:logotec330,ClubAtual:bahiadefeira,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec331={idCart:14684762,nome:'Atraente FC31',nomeLogin:' vitor',nomePess:'opcional',anoEnt:2023,logo:logotec331,ClubAtual:colocoloba,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec332={idCart:4251129,nome:'Bel@vistao fc',nomeLogin:' jonathan fc',nomePess:'opcional',anoEnt:2023,logo:logotec332,ClubAtual:fluminensedefeira,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec333={idCart:26192259,nome:'Benscred',nomeLogin:'Michael',nomePess:'opcional',anoEnt:2023,logo:logotec333,ClubAtual:grapiuna,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec334={idCart:25315777,nome:'branco fc oficial',nomeLogin:' Ricardo',nomePess:'opcional',anoEnt:2023,logo:logotec334,ClubAtual:juazeiro,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec335={idCart:852805,nome:'Cartonauskas Fc',nomeLogin:' Giovanni Ivanauskas',nomePess:'opcional',anoEnt:2023,logo:logotec335,ClubAtual:unirb,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec336={idCart:2696094,nome:'Cassioto F.C',nomeLogin:' Cassiano',nomePess:'opcional',anoEnt:2023,logo:logotec336,ClubAtual:vitoriadaconquista,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec337={idCart:2412676,nome:'CBshark',nomeLogin:' Élison Alves',nomePess:'opcional',anoEnt:2023,logo:logotec337,ClubAtual:leonico,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec338={idCart:47601668,nome:'CF SóCanelas 96',nomeLogin:'davi',nomePess:'opcional',anoEnt:2023,logo:logotec338,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec339={idCart:3740555,nome:'Corinthians kiki',nomeLogin:'Aquiles kiki',nomePess:'opcional',anoEnt:2023,logo:logotec339,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec340={idCart:9424926,nome:'Correria2016 fc',nomeLogin:' karen',nomePess:'opcional',anoEnt:2023,logo:logotec340,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec341={idCart:15976183,nome:'Corta pra mim',nomeLogin:' Arquibaldo da Silva',nomePess:'opcional',anoEnt:2023,logo:logotec341,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec342={idCart:25633266,nome:'Cruzeiro n10',nomeLogin:' wesllen da cebola',nomePess:'opcional',anoEnt:2023,logo:logotec342,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec343={idCart:178953,nome:'DUARTE FZ',nomeLogin:' Duarte',nomePess:'opcional',anoEnt:2023,logo:logotec343,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec344={idCart:44521797,nome:'É o tremm da ph',nomeLogin:' Wagner Moraes',nomePess:'opcional',anoEnt:2023,logo:logotec344,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec345={idCart:3153745,nome:'E.C Immbatível',nomeLogin:' Lula Brito',nomePess:'opcional',anoEnt:2023,logo:logotec345,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec346={idCart:6776276,nome:'EC DAVIDGOOL',nomeLogin:'david',nomePess:'opcional',anoEnt:2023,logo:logotec346,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec347={idCart:2987,nome:'Empolgual',nomeLogin:'Gualbel Ferreira',nomePess:'opcional',anoEnt:2023,logo:logotec347,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec348={idCart:47630915,nome:'FC. B3NTO',nomeLogin:'Thiago Rodrigues',nomePess:'opcional',anoEnt:2023,logo:logotec348,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec349={idCart:3116886,nome:'Fla Sysak 1895',nomeLogin:' Vinicius Sysak',nomePess:'opcional',anoEnt:2023,logo:logotec349,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec350={idCart:29687,nome:'FLA Uberaba',nomeLogin:'marceloscmg',nomePess:'opcional',anoEnt:2023,logo:logotec350,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec351={idCart:28830570,nome:'FORÇA PEROLAFS',nomeLogin:'PEROLAFS',nomePess:'opcional',anoEnt:2023,logo:logotec351,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec352={idCart:5289904,nome:'Fut Magic',nomeLogin:'Lucas Geromin',nomePess:'opcional',anoEnt:2023,logo:logotec352,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec353={idCart:47563175,nome:'G.Nunnes fc II',nomeLogin:'Gabriel Nunes',nomePess:'opcional',anoEnt:2023,logo:logotec353,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec354={idCart:25298623,nome:'Galãoarenamrv27',nomeLogin:'Diego',nomePess:'opcional',anoEnt:2023,logo:logotec354,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec355={idCart:28956669,nome:'GASPAR FC 007',nomeLogin:' Ítalo',nomePess:'opcional',anoEnt:2023,logo:logotec355,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec356={idCart:1451153,nome:'gladiadhor',nomeLogin:'Luiz Sérgio',nomePess:'opcional',anoEnt:2023,logo:logotec356,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec357={idCart:1702269,nome:'HanauerFC',nomeLogin:' Davi Hanauer',nomePess:'opcional',anoEnt:2023,logo:logotec357,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec358={idCart:44509620,nome:'Heitor ousadia',nomeLogin:' Heitor silva',nomePess:'opcional',anoEnt:2023,logo:logotec358,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec359={idCart:47811918,nome:'inter de 1 bilhão',nomeLogin:'Rodrigo Rocha 777',nomePess:'opcional',anoEnt:2023,logo:logotec359,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec360={idCart:1857129,nome:'inter de 2 bilhão',nomeLogin:' Rodrigo Rocha',nomePess:'opcional',anoEnt:2023,logo:logotec360,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec361={idCart:27499403,nome:'Jana10',nomeLogin:' Janaína',nomePess:'opcional',anoEnt:2023,logo:logotec361,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec362={idCart:934089,nome:'Japa verde',nomeLogin:' Renato Y.',nomePess:'opcional',anoEnt:2023,logo:logotec362,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec363={idCart:11570530,nome:'jbc levita',nomeLogin:'Mazinho',nomePess:'opcional',anoEnt:2023,logo:logotec363,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec364={idCart:23673,nome:'jcunit',nomeLogin:' José carlos',nomePess:'opcional',anoEnt:2023,logo:logotec364,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec365={idCart:10009179,nome:'jefinhordc',nomeLogin:' jeferson machado',nomePess:'opcional',anoEnt:2023,logo:logotec365,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec366={idCart:1174618,nome:'jgbarreto',nomeLogin:' galvao',nomePess:'opcional',anoEnt:2023,logo:logotec366,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec367={idCart:14212785,nome:'JGMiranda FC',nomeLogin:' Igor Miranda',nomePess:'opcional',anoEnt:2023,logo:logotec367,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec368={idCart:45142162,nome:'José de Souza 23',nomeLogin:'José de Souza Costa',nomePess:'opcional',anoEnt:2023,logo:logotec368,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec369={idCart:28713755,nome:'JoSousa Piscinas',nomeLogin:'Danone2009',nomePess:'opcional',anoEnt:2023,logo:logotec369,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec370={idCart:18453759,nome:'JuuuSilva',nomeLogin:' Juliana',nomePess:'opcional',anoEnt:2023,logo:logotec370,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec371={idCart:45397826,nome:'KING YMORTAL X',nomeLogin:'Piery Gruber',nomePess:'opcional',anoEnt:2023,logo:logotec371,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec372={idCart:47722730,nome:'L.R.5 FC #3',nomeLogin:'Leonardo',nomePess:'opcional',anoEnt:2023,logo:logotec372,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec373={idCart:45217872,nome:'La Volpe SC',nomeLogin:'Moises Giffoni',nomePess:'opcional',anoEnt:2023,logo:logotec373,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec374={idCart:25721023,nome:'LambariDeBotas',nomeLogin:'João Rodrigo Zaremba',nomePess:'opcional',anoEnt:2023,logo:logotec374,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec375={idCart:29540979,nome:'leuzinrlx09',nomeLogin:'Leonardo WEber',nomePess:'opcional',anoEnt:2023,logo:logotec375,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec376={idCart:26081030,nome:'Luckin FC',nomeLogin:'Lucas da Rocha',nomePess:'opcional',anoEnt:2023,logo:logotec376,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec377={idCart:29826644,nome:'LUKINHA ALS',nomeLogin:'LUCAS',nomePess:'opcional',anoEnt:2023,logo:logotec377,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec378={idCart:44510056,nome:'m.a.d.s.d.s2023',nomeLogin:'sidimar',nomePess:'opcional',anoEnt:2023,logo:logotec378,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec379={idCart:25299790,nome:'M4nchester Cidade',nomeLogin:'Caf4el',nomePess:'opcional',anoEnt:2023,logo:logotec379,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec380={idCart:7906582,nome:'MANO A MANO rs',nomeLogin:' Caio Victor',nomePess:'opcional',anoEnt:2023,logo:logotec380,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec381={idCart:21707896,nome:'Mathzera Club',nomeLogin:'Math',nomePess:'opcional',anoEnt:2023,logo:logotec381,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec382={idCart:579301,nome:'Megaron FC',nomeLogin:' Lendel Megaron',nomePess:'opcional',anoEnt:2023,logo:logotec382,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec383={idCart:3352035,nome:'MiI Grau FC',nomeLogin:'Rhyan',nomePess:'opcional',anoEnt:2023,logo:logotec383,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec384={idCart:19208620,nome:'Milan Goiano',nomeLogin:'Rafael Washington',nomePess:'opcional',anoEnt:2023,logo:logotec384,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec385={idCart:28865513,nome:'MORATO RAPTORS',nomeLogin:' Marcus Morato',nomePess:'opcional',anoEnt:2023,logo:logotec385,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec386={idCart:10030330,nome:'motoclubefc',nomeLogin:' valdeci',nomePess:'opcional',anoEnt:2023,logo:logotec386,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec387={idCart:47920313,nome:'Muito Pontuado',nomeLogin:' Pedro',nomePess:'opcional',anoEnt:2023,logo:logotec387,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec388={idCart:551030,nome:'NAPSTER FC',nomeLogin:'NAPSTER',nomePess:'opcional',anoEnt:2023,logo:logotec388,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec389={idCart:59413,nome:'nes fc',nomeLogin:' mauricioandre',nomePess:'opcional',anoEnt:2023,logo:logotec389,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec390={idCart:28701291,nome:'Nossa Cara E.C',nomeLogin:' Fagner Lopes',nomePess:'opcional',anoEnt:2023,logo:logotec390,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec391={idCart:2441361,nome:'Nunes e Silva',nomeLogin:' rogerio nunes',nomePess:'opcional',anoEnt:2023,logo:logotec391,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec392={idCart:47687248,nome:'O paredão 86',nomeLogin:'Tiago Rodrigues',nomePess:'opcional',anoEnt:2023,logo:logotec392,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec393={idCart:47530290,nome:'Oh BRABO S.C',nomeLogin:'Joseildo',nomePess:'opcional',anoEnt:2023,logo:logotec393,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec394={idCart:25928131,nome:'OnifledNetStore',nomeLogin:'Pvaí 9 8807 7777',nomePess:'opcional',anoEnt:2023,logo:logotec394,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec395={idCart:79155,nome:'Os Craquees F.C.',nomeLogin:' Bruno Silva',nomePess:'opcional',anoEnt:2023,logo:logotec395,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec396={idCart:35350,nome:'OSD Futebol 2023',nomeLogin:'Dr. Scarton',nomePess:'opcional',anoEnt:2023,logo:logotec396,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec397={idCart:497697,nome:'OsMegas F.C',nomeLogin:' WANDERSONBARCELOS',nomePess:'opcional',anoEnt:2023,logo:logotec397,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec398={idCart:26525753,nome:'Paato2',nomeLogin:' Julio Cezar',nomePess:'opcional',anoEnt:2023,logo:logotec398,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec399={idCart:44982294,nome:'palestra camp',nomeLogin:'Gabriel palestra',nomePess:'opcional',anoEnt:2023,logo:logotec399,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec400={idCart:15959866,nome:'Palestra MC',nomeLogin:'Samuel Moura',nomePess:'opcional',anoEnt:2023,logo:logotec400,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec401={idCart:28779264,nome:'Palmeiras rsm3',nomeLogin:'Rony',nomePess:'opcional',anoEnt:2023,logo:logotec401,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec402={idCart:3349958,nome:'Patishow',nomeLogin:' Alessandro Patias',nomePess:'opcional',anoEnt:2023,logo:logotec402,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec403={idCart:27048538,nome:'pé de anjinho fc',nomeLogin:' rose',nomePess:'opcional',anoEnt:2023,logo:logotec403,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec404={idCart:19921845,nome:'Pelezinho Team',nomeLogin:' Juliano Araujo',nomePess:'opcional',anoEnt:2023,logo:logotec404,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec405={idCart:9604425,nome:'Perna de ferro jf',nomeLogin:'Thiago nascimento',nomePess:'opcional',anoEnt:2023,logo:logotec405,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec406={idCart:10201213,nome:'PIAIA EC',nomeLogin:'Eduardo Piaia',nomePess:'opcional',anoEnt:2023,logo:logotec406,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec407={idCart:3269763,nome:'pipi_de_grilo2',nomeLogin:'arara',nomePess:'opcional',anoEnt:2023,logo:logotec407,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec408={idCart:27608988,nome:'pirata do gol',nomeLogin:'deda',nomePess:'opcional',anoEnt:2023,logo:logotec408,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec409={idCart:702879,nome:'PORTÃO 1O F.C',nomeLogin:' Gabriel Reichow',nomePess:'opcional',anoEnt:2023,logo:logotec409,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec410={idCart:8059631,nome:'POWER GUIDO SP',nomeLogin:'Felipe vieira',nomePess:'opcional',anoEnt:2023,logo:logotec410,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec411={idCart:2702976,nome:'Quem vai FC',nomeLogin:'Victor Correia',nomePess:'opcional',anoEnt:2023,logo:logotec411,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec412={idCart:6466384,nome:'Rapariga Log',nomeLogin:' Valério',nomePess:'opcional',anoEnt:2023,logo:logotec412,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec413={idCart:146955,nome:'RATOS SRN',nomeLogin:' LUCIANO WOLFF',nomePess:'opcional',anoEnt:2023,logo:logotec413,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec414={idCart:3246608,nome:'Real Paim f.c',nomeLogin:' Diego Paim',nomePess:'opcional',anoEnt:2023,logo:logotec414,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec415={idCart:46064148,nome:'rm kwai',nomeLogin:'ryan.mengo',nomePess:'opcional',anoEnt:2023,logo:logotec415,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec416={idCart:18461302,nome:'Rosso Nero',nomeLogin:' Vitor Henon',nomePess:'opcional',anoEnt:2023,logo:logotec416,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec417={idCart:8183483,nome:'S.C.Samber',nomeLogin:' Nildo Sou2a',nomePess:'opcional',anoEnt:2023,logo:logotec417,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec418={idCart:18203268,nome:'S.E Empolgual',nomeLogin:'Pedro Gualtieri',nomePess:'opcional',anoEnt:2023,logo:logotec418,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec419={idCart:47567453,nome:'S.E. Pudin',nomeLogin:' Tiago',nomePess:'opcional',anoEnt:2023,logo:logotec419,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec420={idCart:30007130,nome:'Santos Boy FC',nomeLogin:'Matheus Santos',nomePess:'opcional',anoEnt:2023,logo:logotec420,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec421={idCart:3928117,nome:'SB LAYON FC',nomeLogin:' Mychael Alves',nomePess:'opcional',anoEnt:2023,logo:logotec421,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec422={idCart:99083,nome:'SC Golden City',nomeLogin:' Vinícius Meira',nomePess:'opcional',anoEnt:2023,logo:logotec422,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec423={idCart:25633852,nome:'SC Zé do Ouro',nomeLogin:'Elon Musk',nomePess:'opcional',anoEnt:2023,logo:logotec423,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec424={idCart:14452723,nome:'SELETUS BLINDADO',nomeLogin:' Tiago Conceição',nomePess:'opcional',anoEnt:2023,logo:logotec424,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec425={idCart:2452097,nome:'Seleverde23 F.C',nomeLogin:' Dheider Silva',nomePess:'opcional',anoEnt:2023,logo:logotec425,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec426={idCart:19179165,nome:'Sêneca FC13',nomeLogin:' Tiago Gomes',nomePess:'opcional',anoEnt:2023,logo:logotec426,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec427={idCart:13934475,nome:'SEPVAL FC',nomeLogin:'Valdenilson Brandão',nomePess:'opcional',anoEnt:2023,logo:logotec427,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec428={idCart:3495400,nome:'Sporting Cruz FC',nomeLogin:' Carlos Drogba',nomePess:'opcional',anoEnt:2023,logo:logotec428,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec429={idCart:14933289,nome:'supribem',nomeLogin:'Douglas',nomePess:'opcional',anoEnt:2023,logo:logotec429,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec430={idCart:348893,nome:'Team Luiza',nomeLogin:' Pai da Luiza',nomePess:'opcional',anoEnt:2023,logo:logotec430,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec431={idCart:389166,nome:'Team Napolli',nomeLogin:'Filipe Rocha',nomePess:'opcional',anoEnt:2023,logo:logotec431,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec432={idCart:763624,nome:'tel_318 FC',nomeLogin:' Marcelo (Tétél)',nomePess:'opcional',anoEnt:2023,logo:logotec432,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec433={idCart:21968,nome:'Thekila FC',nomeLogin:' Isadora Zucateli',nomePess:'opcional',anoEnt:2023,logo:logotec433,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec434={idCart:2649806,nome:'Timão P7 F.C.',nomeLogin:'Sr. Felisberto',nomePess:'opcional',anoEnt:2023,logo:logotec434,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec435={idCart:47608050,nome:'V.Arujá TCFC',nomeLogin:'Henrique Neves',nomePess:'opcional',anoEnt:2023,logo:logotec435,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec436={idCart:10209169,nome:'vagnermitofc',nomeLogin:' buchecha',nomePess:'opcional',anoEnt:2023,logo:logotec436,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec437={idCart:2509740,nome:'VAN OCAPITÃOFC',nomeLogin:' Vanderlan Almeida',nomePess:'opcional',anoEnt:2023,logo:logotec437,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec438={idCart:20368660,nome:'VAND D MADRID FC',nomeLogin:'Vanderlei Mendes',nomePess:'opcional',anoEnt:2023,logo:logotec438,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec439={idCart:44597560,nome:'vandopalmeiras',nomeLogin:'vandosilva',nomePess:'opcional',anoEnt:2023,logo:logotec439,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec440={idCart:4803924,nome:'Yernba FC',nomeLogin:'Alexandre Avelar',nomePess:'opcional',anoEnt:2023,logo:logotec440,ClubAtual:villanovamg,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec441={idCart:25275546,nome:'zona rubro negra',nomeLogin:'marcos',nomePess:'opcional',anoEnt:2023,logo:logotec441,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec442={idCart:1486081,nome:'ECC COMERCIAL FC',nomeLogin:'Lino',nomePess:'opcional',anoEnt:2023,logo:logotec442,ClubAtual:semclube,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec443={idCart:27894799,nome:'BebumsDeEncruzilhadaFC',nomeLogin:'Henriqdosmega',nomePess:'opcional',anoEnt:2024,logo:logotec443,ClubAtual:ibis,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec444={idCart:49120944,nome:'Lukinhas Loko',nomeLogin:'Lukinhas',nomePess:'opcional',anoEnt:2024,logo:logotec444,ClubAtual:gremioanapolis,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
  let tec445={idCart:44532788,nome:'Titanium Invicto',nomeLogin:'Lisca Doido',nomePess:'opcional',anoEnt:2024,logo:logotec445,ClubAtual:gloria,titulo1:'Camp1',titulo2:'Camp2',titulo3:'Camp3',titulo4:'Camp4',titulo5:'Camp5',titulo6:'Camp6',titulo7:'Camp7',titulo8:'Camp8',titulo9:'Camp9',titulo10:'Camp10',titulo11:'Camp11',titulo12:'Camp12',titulo13:'Camp13',titulo14:'Camp14',titulo15:'Camp15',titulo16:'Camp16',titulo17:'Camp17',titulo18:'Camp18',titulo19:'Camp19',titulo20:'Camp20'};
    
  
  
  
  
  
  
  
  
  /*CALENDÁRIO SÉRIE A 2024**/
  
  
  
  
  
  
  
  
  
  /*SÉRIA A*/
  
  
  
  
  
  /*CAMPO DE ATUALIZAÇÕES CLASSIFICAÇÃO GERAL */
  let rod1=[americamg,'','G16',0,0,0,0,0,0,0,'','','','','','74',tec102,athletico,'','G13',0,0,0,0,0,0,0,'','','','','','74',tec87,atleticogo,'','G16',0,0,0,0,0,0,0,'','','','','','68',tec106,atleticomg,'','G4',0,0,0,0,0,0,0,'','','','','','70',tec17,bahia,'','G13',0,0,0,0,0,0,0,'','','','','','84',tec84,botafogo,'','G8',0,0,0,0,0,0,0,'','','','','','70',tec7,bragantino,'','G16',0,0,0,0,0,0,0,'','','','','','72',tec168,chapecoense,'','G16',0,0,0,0,0,0,0,'','','','','','61',tec1,corinthians,'','G8',0,0,0,0,0,0,0,'','','','','','52',tec170,flamengo,'','G4',0,0,0,0,0,0,0,'','','','','','54',tec41,fluminense,'','G4',0,0,0,0,0,0,0,'','','','','','54',tec72,fortaleza,'','G13',0,0,0,0,0,0,0,'','','','','','61',tec172,goias,'','G13',0,0,0,0,0,0,0,'','','','','','54',tec185,gremio,'','G8',0,0,0,0,0,0,0,'','','','','','49',tec73,palmeiras,'','SUBIR',0,0,0,0,0,0,0,'','','','','','49',tec67,paysandu,'','G16',0,0,0,0,0,0,0,'','','','','','46',tec150,saopaulo,'','G4',0,0,0,0,0,0,0,'','','','','','64',tec124,sport,'','G4',0,0,0,0,0,0,0,'','','','','','48',tec78,vasco,'','G8',0,0,0,0,0,0,0,'','','','','','46',tec167,vitoria,'','G13',0,0,0,0,0,0,0,'','','','','','45',tec26];
  
  
  
  /*CAMPO DE ATUALIZAÇÕES CALENDÁRIO */
  

  
  
  
  
  
  
  //**ATUALIZAÇÕES DA RODADA*****************




  
  let Pauli_A1=[logobotafogosp,botafogosp,tec32,'','',0,0,0,0,0,0,0,'','','','','','',logobragantino,bragantino,tec168,'','',0,0,0,0,0,0,0,'','','','','','',logocorinthians,corinthians,tec170,'','',0,0,0,0,0,0,0,'','','','','','',logoguarani,guarani,tec25,'','',0,0,0,0,0,0,0,'','','','','','',logonovorizontino,novorizontino,tec60,'','',0,0,0,0,0,0,0,'','','','','','',logopontepreta,pontepreta,tec233,'','',0,0,0,0,0,0,0,'','','','','','',logoportuguesa,portuguesa,tec83,'','',0,0,0,0,0,0,0,'','','','','','',logosaopaulo,saopaulo,tec124,'','',0,0,0,0,0,0,0,'','','','','',''];
  let Pauli_B1=[logoferroviariasp,ferroviariasp,tec180,'','SUBIR',0,0,0,0,0,0,0,'','','','','','',logointernacionalsp,internacionalsp,tec93,'','',0,0,0,0,0,0,0,'','','','','','',logoituano,ituano,tec96,'','SUBIR',0,0,0,0,0,0,0,'','','','','','',logomirassol,mirassol,tec280,'','SUBIR',0,0,0,0,0,0,0,'','','','','','',logopalmeiras,palmeiras,tec67,'','SUBIR',0,0,0,0,0,0,0,'','','','','','',logopaulista,paulista,tec108,'','SUBIR',0,0,0,0,0,0,0,'','','','','','',logosantos,santos,tec155,'','',0,0,0,0,0,0,0,'','','','','','',logosaobernardo,saobernardo,tec158,'','',0,0,0,0,0,0,0,'','','','','',''];
  let Cario_A1=[logoamericarj,americarj,tec131,'','',0,0,0,0,0,0,0,'','','','','','',logoaudax,audax,tec39,'','',0,0,0,0,0,0,0,'','','','','','',logobotafogo,botafogo,tec7,'','',0,0,0,0,0,0,0,'','','','','','',logoflamengo,flamengo,tec41,'','',0,0,0,0,0,0,0,'','','','','','',logofluminense,fluminense,tec72,'','',0,0,0,0,0,0,0,'','','','','','',logoportuguesarj,portuguesarj,tec119,'','',0,0,0,0,0,0,0,'','','','','','',logovasco,vasco,tec167,'','',0,0,0,0,0,0,0,'','','','','','',logovoltaredonda,voltaredonda,tec148,'','',0,0,0,0,0,0,0,'','','','','',''];
  let Cario_B1=[logobangu,bangu,tec225,'','',0,0,0,0,0,0,0,'','','','','','',logobonsucesso,bonsucesso,tec40,'','',0,0,0,0,0,0,0,'','','','','','',logocabofriense,cabofriense,tec46,'','',0,0,0,0,0,0,0,'','','','','','',logomadureira,madureira,tec104,'','',0,0,0,0,0,0,0,'','','','','','',logoolaria,olaria,tec103,'','',0,0,0,0,0,0,0,'','','','','','',logonovaiguacu,novaiguacu,tec100,'','',0,0,0,0,0,0,0,'','','','','','',logoresende,resende,tec120,'','',0,0,0,0,0,0,0,'','','','','','',logosaocristovao,saocristovao,tec132,'','',0,0,0,0,0,0,0,'','','','','',''];
  let Gauch_A1=[logobrasilrs,brasilrs,tec129,'','',0,0,0,0,0,0,0,'','','','','','',logocaxias,caxias,tec14,'','',0,0,0,0,0,0,0,'','','','','','',logogremio,gremio,tec73,'','',0,0,0,0,0,0,0,'','','','','','',logointernacional,internacional,tec92,'','',0,0,0,0,0,0,0,'','','','','','',logojuventude,juventude,tec169,'','',0,0,0,0,0,0,0,'','','','','','',logopelotas,pelotas,tec164,'','',0,0,0,0,0,0,0,'','','','','','',logosaojosers,saojosers,tec159,'','',0,0,0,0,0,0,0,'','','','','','',logoypirangars,ypirangars,tec200,'','',0,0,0,0,0,0,0,'','','','','',''];
  let Gauch_B1=[logoavenida,avenida,tec246,'','',0,0,0,0,0,0,0,'','','','','','',logobage,bage,tec21,'','',0,0,0,0,0,0,0,'','','','','','',logoesportivo,esportivo,tec61,'','',0,0,0,0,0,0,0,'','','','','','',logogloria,gloria,tec445,'','',0,0,0,0,0,0,0,'','','','','','',logoguaranyrs,guaranyrs,tec80,'','',0,0,0,0,0,0,0,'','','','','','',logolajeadense,lajeadense,tec85,'','',0,0,0,0,0,0,0,'','','','','','',logonovohamburgo,novohamburgo,tec101,'','',0,0,0,0,0,0,0,'','','','','','',logosaoluizrs,saoluizrs,tec134,'','',0,0,0,0,0,0,0,'','','','','',''];
  let Minei_A1=[logoamericamg,americamg,tec102,'','',0,0,0,0,0,0,0,'','','','','','',logoatleticomg,atleticomg,tec17,'','',0,0,0,0,0,0,0,'','','','','','',logocaldense,caldense,tec138,'','',0,0,0,0,0,0,0,'','','','','','',logocruzeiro,cruzeiro,tec55,'','',0,0,0,0,0,0,0,'','','','','','',logodemocrata,democrata,tec58,'','',0,0,0,0,0,0,0,'','','','','','',logoipatinga,ipatinga,tec81,'','',0,0,0,0,0,0,0,'','','','','','',logotombense,tombense,tec178,'','',0,0,0,0,0,0,0,'','','','','','',logovillanovamg,villanovamg,tec440,'','',0,0,0,0,0,0,0,'','','','','',''];
  let Minei_B1=[logoathletic,athletic,tec166,'','SUBIR',0,0,0,0,0,0,0,'','','','','','',logoboaesporte,boaesporte,tec28,'','',0,0,0,0,0,0,0,'','','','','','',logopatrocinense,patrocinense,tec113,'','',0,0,0,0,0,0,0,'','','','','','',logosocial,social,tec136,'','',0,0,0,0,0,0,0,'','','','','','',logotupi,tupi,tec141,'','',0,0,0,0,0,0,0,'','','','','','',logouberlandia,uberlandia,tec146,'','',0,0,0,0,0,0,0,'','','','','','',logourt,urt,tec145,'','',0,0,0,0,0,0,0,'','','','','','',logopousoalegre,pousoalegre,tec173,'','',0,0,0,0,0,0,0,'','','','','',''];
  let Paran_A1=[logoathletico,athletico,tec87,'','',0,0,0,0,0,0,0,'','','','','','',logocianorte,cianorte,tec52,'','',0,0,0,0,0,0,0,'','','','','','',logocoritiba,coritiba,tec175,'','',0,0,0,0,0,0,0,'','','','','','',logofccascavel,fccascavel,tec63,'','',0,0,0,0,0,0,0,'','','','','','',logolondrina,londrina,tec231,'','',0,0,0,0,0,0,0,'','','','','','',logomaringa,maringa,tec264,'','',0,0,0,0,0,0,0,'','','','','','',logooperariopr,operariopr,tec105,'','',0,0,0,0,0,0,0,'','','','','','',logoparana,parana,tec127,'','',0,0,0,0,0,0,0,'','','','','',''];
  let Paran_B1=[logoandraus,andraus,tec281,'','',0,0,0,0,0,0,0,'','','','','','',logoazuriz,azuriz,tec282,'','',0,0,0,0,0,0,0,'','','','','','',logofozdoiguacu,fozdoiguacu,tec75,'','',0,0,0,0,0,0,0,'','','','','','',logopsts,psts,tec283,'','',0,0,0,0,0,0,0,'','','','','','',logogalomaringa,galomaringa,tec284,'','',0,0,0,0,0,0,0,'','','','','','',logogremiomaringa,gremiomaringa,tec287,'','',0,0,0,0,0,0,0,'','','','','','',logosaojoseense,saojoseense,tec285,'','',0,0,0,0,0,0,0,'','','','','','',logotoledo,toledo,tec286,'','',0,0,0,0,0,0,0,'','','','','',''];
  let Catar_A1=[logoavai,avai,tec163,'','',0,0,0,0,0,0,0,'','','','','','',logobarrasc,barrasc,tec247,'','',0,0,0,0,0,0,0,'','','','','','',logobrusque,brusque,tec45,'','',0,0,0,0,0,0,0,'','','','','','',logochapecoense,chapecoense,tec1,'','',0,0,0,0,0,0,0,'','','','','','',logocriciuma,criciuma,tec183,'','',0,0,0,0,0,0,0,'','','','','','',logofigueirense,figueirense,tec4,'','',0,0,0,0,0,0,0,'','','','','','',logohercilioluz,hercilioluz,tec253,'','',0,0,0,0,0,0,0,'','','','','','',logojoinville,joinville,tec82,'','',0,0,0,0,0,0,0,'','','','','',''];
  let Catar_B1=[logocaravaggio,caravaggio,tec292,'','',0,0,0,0,0,0,0,'','','','','','',logoconcordia,concordia,tec250,'','',0,0,0,0,0,0,0,'','','','','','',logoguaranidepalhoca,guaranidepalhoca,tec290,'','',0,0,0,0,0,0,0,'','','','','','',logointerdelajes,interdelajes,tec151,'','',0,0,0,0,0,0,0,'','','','','','',logojuventusdejaragua,juventusdejaragua,tec291,'','',0,0,0,0,0,0,0,'','','','','','',logomarciliodias,marciliodias,tec288,'','',0,0,0,0,0,0,0,'','','','','','',logometropolitano,metropolitano,tec91,'','',0,0,0,0,0,0,0,'','','','','','',logonacao,nacao,tec289,'','',0,0,0,0,0,0,0,'','','','','',''];
  let Norde_A1=[logoamericarn,americarn,tec223,'','',0,0,0,0,0,0,0,'','','','','','',logoabc,abc,tec326,'','',0,0,0,0,0,0,0,'','','','','','',logobotafogopb,botafogopb,tec44,'','',0,0,0,0,0,0,0,'','','','','','',logocrb,crb,tec228,'','',0,0,0,0,0,0,0,'','','','','','',logocsa,csa,tec56,'','',0,0,0,0,0,0,0,'','','','','','',logoriverpi,riverpi,tec130,'','',0,0,0,0,0,0,0,'','','','','','',logosampaiocorrea,sampaiocorrea,tec65,'','',0,0,0,0,0,0,0,'','','','','','',logotreze,treze,tec237,'','',0,0,0,0,0,0,0,'','','','','',''];
  let Norde_B1=[logoasa,asa,tec244,'','',0,0,0,0,0,0,0,'','','','','','',logoconfianca,confianca,tec161,'','',0,0,0,0,0,0,0,'','','','','','',logocse,cse,tec251,'','',0,0,0,0,0,0,0,'','','','','','',logofluminensepi,fluminensepi,tec252,'','',0,0,0,0,0,0,0,'','','','','','',logomotoclub,motoclub,tec265,'','',0,0,0,0,0,0,0,'','','','','','',logosergipe,sergipe,tec275,'','',0,0,0,0,0,0,0,'','','','','','',logoserra,serra,tec276,'','',0,0,0,0,0,0,0,'','','','','','',logosousa,sousa,tec277,'','',0,0,0,0,0,0,0,'','','','','',''];
  let Norti_A1=[logoamazonas,amazonas,tec33,'','',0,0,0,0,0,0,0,'','','','','','',logomanaus,manaus,tec86,'','',0,0,0,0,0,0,0,'','','','','','',logonacionalam,nacionalam,tec112,'','',0,0,0,0,0,0,0,'','','','','','',logopaysandu,paysandu,tec150,'','',0,0,0,0,0,0,0,'','','','','','',logoremo,remo,tec144,'','',0,0,0,0,0,0,0,'','','','','','',logosaoraimundorr,saoraimundorr,tec274,'','',0,0,0,0,0,0,0,'','','','','','',logotocantinopolis,tocantinopolis,tec278,'','',0,0,0,0,0,0,0,'','','','','','',logotremap,tremap,tec139,'','',0,0,0,0,0,0,0,'','','','','',''];
  let Norti_B1=[logoaguiademaraba,aguiademaraba,tec242,'','',0,0,0,0,0,0,0,'','','','','','',logocapital,capital,tec249,'','',0,0,0,0,0,0,0,'','','','','','',logohumaita,humaita,tec254,'','',0,0,0,0,0,0,0,'','','','','','',logonauticorr,nauticorr,tec98,'','',0,0,0,0,0,0,0,'','','','','','',logoportovelhoro,portovelhoro,tec118,'','',0,0,0,0,0,0,0,'','','','','','',logoprincesadosolimoes,princesadosolimoes,tec268,'','',0,0,0,0,0,0,0,'','','','','','',logoriobrancoac,riobrancoac,tec122,'','',0,0,0,0,0,0,0,'','','','','','',logosaoraimundoam,saoraimundoam,tec128,'','',0,0,0,0,0,0,0,'','','','','',''];
  let Centr_A1=[logobrasiliense,brasiliense,tec34,'','',0,0,0,0,0,0,0,'','','','','','',logocostarica,costarica,tec53,'','',0,0,0,0,0,0,0,'','','','','','',logocuiaba,cuiaba,tec165,'','',0,0,0,0,0,0,0,'','','','','','',logogama,gama,tec154,'','',0,0,0,0,0,0,0,'','','','','','',logomixto,mixto,tec95,'','',0,0,0,0,0,0,0,'','','','','','',logooperarioms,operarioms,tec77,'','',0,0,0,0,0,0,0,'','','','','','',logorealbrasilia,realbrasilia,tec269,'','',0,0,0,0,0,0,0,'','','','','','',logouniaorondonopolis,uniaorondonopolis,tec279,'','',0,0,0,0,0,0,0,'','','','','',''];
  let Centr_B1=[logoaguianegra,aguianegra,tec31,'','',0,0,0,0,0,0,0,'','','','','','',logoceilandia,ceilandia,tec51,'','',0,0,0,0,0,0,0,'','','','','','',logoceov,ceov,tec299,'','',0,0,0,0,0,0,0,'','','','','','',logocomercialms,comercialms,tec300,'','',0,0,0,0,0,0,0,'','','','','','',logodombosco,dombosco,tec303,'','',0,0,0,0,0,0,0,'','','','','','',logoluverdense,luverdense,tec152,'','',0,0,0,0,0,0,0,'','','','','','',logoluziania,luziania,tec315,'','',0,0,0,0,0,0,0,'','','','','','',logonovamutum,novamutum,tec318,'','',0,0,0,0,0,0,0,'','','','','',''];
  let Goian_A1=[logoanapolina,anapolina,tec36,'','',0,0,0,0,0,0,0,'','','','','','',logoanapolis,anapolis,tec243,'','',0,0,0,0,0,0,0,'','','','','','',logoaparecidense,aparecidense,tec171,'','',0,0,0,0,0,0,0,'','','','','','',logoatleticogo,atleticogo,tec106,'','',0,0,0,0,0,0,0,'','','','','','',logocrac,crac,tec54,'','',0,0,0,0,0,0,0,'','','','','','',logogoias,goias,tec185,'','',0,0,0,0,0,0,0,'','','','','','',logoipora,ipora,tec256,'','',0,0,0,0,0,0,0,'','','','','','',logovilanova,vilanova,tec193,'','',0,0,0,0,0,0,0,'','','','','',''];
  let Goian_B1=[logogoianesia,goianesia,tec304,'','',0,0,0,0,0,0,0,'','','','','','',logogoiania,goiania,tec305,'','',0,0,0,0,0,0,0,'','','','','','',logogoiatuba,goiatuba,tec306,'','',0,0,0,0,0,0,0,'','','','','','',logogremioanapolis,gremioanapolis,tec444,'','',0,0,0,0,0,0,0,'','','','','','',logoinhumas,inhumas,tec311,'','',0,0,0,0,0,0,0,'','','','','','',logoitumbiara,itumbiara,tec313,'','',0,0,0,0,0,0,0,'','','','','','',logojataiense,jataiense,tec314,'','',0,0,0,0,0,0,0,'','','','','','',logomorrinhos,morrinhos,tec317,'','',0,0,0,0,0,0,0,'','','','','',''];
  let Perna_A1=[logocentral,central,tec298,'','',0,0,0,0,0,0,0,'','','','','','',logonautico,nautico,tec190,'','',0,0,0,0,0,0,0,'','','','','','',logopetrolina,petrolina,tec266,'','',0,0,0,0,0,0,0,'','','','','','',logoporto,porto,tec320,'','',0,0,0,0,0,0,0,'','','','','','',logoretro,retro,tec271,'','',0,0,0,0,0,0,0,'','','','','','',logosantacruz,santacruz,tec27,'','',0,0,0,0,0,0,0,'','','','','','',logosport,sport,tec78,'','',0,0,0,0,0,0,0,'','','','','','',logosalgueiro,salgueiro,tec321,'','',0,0,0,0,0,0,0,'','','','','',''];
  let Perna_B1=[logoafogados,afogados,tec293,'','',0,0,0,0,0,0,0,'','','','','','',logobelojardim,belojardim,tec295,'','',0,0,0,0,0,0,0,'','','','','','',logocaruarucity,caruarucity,tec296,'','',0,0,0,0,0,0,0,'','','','','','',logodecisaosertania,decisaosertania,tec302,'','',0,0,0,0,0,0,0,'','','','','','',logoibis,ibis,tec443,'','',0,0,0,0,0,0,0,'','','','','','',logomaguary,maguary,tec316,'','',0,0,0,0,0,0,0,'','','','','','',logoveracruz,veracruz,tec323,'','',0,0,0,0,0,0,0,'','','','','','',logovitoriadastabocas,vitoriadastabocas,tec324,'','',0,0,0,0,0,0,0,'','','','','',''];
  let Ceare_A1=[logoatleticocearense,atleticocearense,tec245,'','',0,0,0,0,0,0,0,'','','','','','',logoceara,ceara,tec116,'','',0,0,0,0,0,0,0,'','','','','','',logoferroviario,ferroviario,tec68,'','',0,0,0,0,0,0,0,'','','','','','',logofloresta,floresta,tec162,'','',0,0,0,0,0,0,0,'','','','','','',logofortaleza,fortaleza,tec172,'','',0,0,0,0,0,0,0,'','','','','','',logoguaranydesobral,guaranydesobral,tec307,'','',0,0,0,0,0,0,0,'','','','','','',logoicasa,icasa,tec310,'','',0,0,0,0,0,0,0,'','','','','','',logoiguatu,iguatu,tec255,'','',0,0,0,0,0,0,0,'','','','','',''];
  let Ceare_B1=[logobarbalha,barbalha,tec294,'','',0,0,0,0,0,0,0,'','','','','','',logocaucaia,caucaia,tec297,'','',0,0,0,0,0,0,0,'','','','','','',logocrato,crato,tec301,'','',0,0,0,0,0,0,0,'','','','','','',logohorizonte,horizonte,tec308,'','',0,0,0,0,0,0,0,'','','','','','',logoitapipoca,itapipoca,tec312,'','',0,0,0,0,0,0,0,'','','','','','',logomaracanace,maracanace,tec262,'','',0,0,0,0,0,0,0,'','','','','','',logopacajus,pacajus,tec319,'','',0,0,0,0,0,0,0,'','','','','','',logotiradentesce,tiradentesce,tec322,'','',0,0,0,0,0,0,0,'','','','','',''];
  let Baian_A1=[logojacobina,jacobina,tec328,'','',3,1,0,0,5,2,3,'100%','V','','','','',logobarcelonaba,barcelonaba,tec327,'','',3,1,0,0,4,2,2,'100%','V','','','','',logojacuipense,jacuipense,tec259,'','',3,1,0,0,3,2,1,'100%','V','','','','',logoatleticoba,atleticoba,tec325,'','',3,1,0,0,1,0,1,'100%','V','','','','',logojuazeirense,juazeirense,tec260,'','',0,0,0,1,2,3,-1,'0%','D','','','','',logobahia,bahia,tec84,'','',0,0,0,1,0,1,-1,'0%','D','','','','',logovitoria,vitoria,tec26,'','',0,0,0,1,2,4,-2,'0%','D','','','','',logoitabuna,itabuna,tec258,'','',0,0,0,1,2,5,-3,'0%','D','','','',''];
  let Baian_B1=[logofluminensedefeira,fluminensedefeira,tec332,'','',3,1,0,0,5,1,4,'100%','V','','','','',logojequie,jequie,tec329,'','',3,1,0,0,5,2,3,'100%','V','','','','',logounirb,unirb,tec335,'','',3,1,0,0,5,2,3,'100%','V','','','','',logobahiadefeira,bahiadefeira,tec330,'','',3,1,0,0,2,0,2,'100%','V','','','','',logocolocoloba,colocoloba,tec331,'','',0,0,0,1,0,2,-2,'0%','D','','','','',logojuazeiro,juazeiro,tec334,'','',0,0,0,1,2,5,-3,'0%','D','','','','',logovitoriadaconquista,vitoriadaconquista,tec336,'','',0,0,0,1,2,5,-3,'0%','D','','','','',logograpiuna,grapiuna,tec333,'','',0,0,0,1,1,5,-4,'0%','D','','','',''];
  

  let Pauli_Cal_A1=[logobotafogosp,'',tec32,'',logobragantino,'',tec168,'',logocorinthians,'',tec170,'',logoguarani,'',tec326,'',logonovorizontino,'',tec60,'',logopontepreta,'',tec233,'',logoportuguesa,'',tec83,'',logosaopaulo,'',tec124,''];
  let Pauli_Cal_B1=[logoferroviariasp,'',tec180,'',logointernacionalsp,'',tec93,'',logoituano,'',tec96,'',logomirassol,'',tec280,'',logopalmeiras,'',tec67,'',logopaulista,'',tec108,'',logosantos,'',tec155,'',logosaobernardo,'',tec158,''];
  let Cario_Cal_A1=[logoamericarj,'',tec131,'',logoaudax,'',tec39,'',logobotafogo,'',tec7,'',logoflamengo,'',tec41,'',logofluminense,'',tec72,'',logoportuguesarj,'',tec119,'',logovasco,'',tec167,'',logovoltaredonda,'',tec148,''];
  let Cario_Cal_B1=[logobangu,'',tec225,'',logobonsucesso,'',tec40,'',logocabofriense,'',tec46,'',logomadureira,'',tec104,'',logoolaria,'',tec103,'',logonovaiguacu,'',tec100,'',logoresende,'',tec120,'',logosaocristovao,'',tec132,''];
  let Gauch_Cal_A1=[logobrasilrs,'',tec129,'',logocaxias,'',tec14,'',logogremio,'',tec73,'',logointernacional,'',tec92,'',logojuventude,'',tec169,'',logopelotas,'',tec164,'',logosaojosers,'',tec159,'',logoypirangars,'',tec200,''];
  let Gauch_Cal_B1=[logoavenida,'',tec246,'',logobage,'',tec21,'',logoesportivo,'',tec61,'',logogloria,'',tec445,'',logoguaranyrs,'',tec80,'',logolajeadense,'',tec85,'',logonovohamburgo,'',tec101,'',logosaoluizrs,'',tec134,''];
  let Minei_Cal_A1=[logoamericamg,'',tec102,'',logoatleticomg,'',tec17,'',logocaldense,'',tec138,'',logocruzeiro,'',tec55,'',logodemocrata,'',tec58,'',logoipatinga,'',tec81,'',logotombense,'',tec178,'',logovillanovamg,'',tec440,''];
  let Minei_Cal_B1=[logoathletic,'',tec166,'',logoboaesporte,'',tec28,'',logopatrocinense,'',tec113,'',logosocial,'',tec136,'',logotupi,'',tec141,'',logouberlandia,'',tec146,'',logourt,'',tec145,'',logopousoalegre,'',tec173,''];
  let Paran_Cal_A1=[logoathletico,'',tec87,'',logocianorte,'',tec52,'',logocoritiba,'',tec175,'',logofccascavel,'',tec63,'',logolondrina,'',tec231,'',logomaringa,'',tec264,'',logooperariopr,'',tec105,'',logoparana,'',tec127,''];
  let Paran_Cal_B1=[logoandraus,'',tec281,'',logoazuriz,'',tec282,'',logofozdoiguacu,'',tec75,'',logopsts,'',tec283,'',logogalomaringa,'',tec284,'',logogremiomaringa,'',tec287,'',logosaojoseense,'',tec285,'',logotoledo,'',tec286,''];
  let Catar_Cal_A1=[logoavai,'',tec163,'',logobarrasc,'',tec247,'',logobrusque,'',tec45,'',logochapecoense,'',tec1,'',logocriciuma,'',tec183,'',logofigueirense,'',tec4,'',logohercilioluz,'',tec253,'',logojoinville,'',tec82,''];
  let Catar_Cal_B1=[logocaravaggio,'',tec292,'',logoconcordia,'',tec250,'',logoguaranidepalhoca,'',tec290,'',logointerdelajes,'',tec151,'',logojuventusdejaragua,'',tec291,'',logomarciliodias,'',tec288,'',logometropolitano,'',tec91,'',logonacao,'',tec289,''];
  let Norde_Cal_A1=[logoamericarn,'',tec223,'',logoabc,'',tec326,'',logobotafogopb,'',tec44,'',logocrb,'',tec228,'',logocsa,'',tec56,'',logoriverpi,'',tec130,'',logosampaiocorrea,'',tec65,'',logotreze,'',tec237,''];
  let Norde_Cal_B1=[logoasa,'',tec244,'',logoconfianca,'',tec161,'',logocse,'',tec251,'',logofluminensepi,'',tec252,'',logomotoclub,'',tec265,'',logosergipe,'',tec275,'',logoserra,'',tec276,'',logosousa,'',tec277,''];
  let Norti_Cal_A1=[logoamazonas,'',tec33,'',logomanaus,'',tec86,'',logonacionalam,'',tec112,'',logopaysandu,'',tec150,'',logoremo,'',tec144,'',logosaoraimundorr,'',tec274,'',logotocantinopolis,'',tec278,'',logotremap,'',tec139,''];
  let Norti_Cal_B1=[logoaguiademaraba,'',tec242,'',logocapital,'',tec249,'',logohumaita,'',tec254,'',logonauticorr,'',tec98,'',logoportovelhoro,'',tec118,'',logoprincesadosolimoes,'',tec268,'',logoriobrancoac,'',tec122,'',logosaoraimundoam,'',tec128,''];
  let Centr_Cal_A1=[logobrasiliense,'',tec34,'',logocostarica,'',tec53,'',logocuiaba,'',tec165,'',logogama,'',tec154,'',logomixto,'',tec95,'',logooperarioms,'',tec77,'',logorealbrasilia,'',tec269,'',logouniaorondonopolis,'',tec279,''];
  let Centr_Cal_B1=[logoaguianegra,'',tec31,'',logoceilandia,'',tec51,'',logoceov,'',tec299,'',logocomercialms,'',tec300,'',logodombosco,'',tec303,'',logoluverdense,'',tec152,'',logoluziania,'',tec315,'',logonovamutum,'',tec318,''];
  let Goian_Cal_A1=[logoanapolina,'',tec36,'',logoanapolis,'',tec243,'',logoaparecidense,'',tec171,'',logoatleticogo,'',tec106,'',logocrac,'',tec54,'',logogoias,'',tec185,'',logoipora,'',tec256,'',logovilanova,'',tec193,''];
  let Goian_Cal_B1=[logogoianesia,'',tec304,'',logogoiania,'',tec305,'',logogoiatuba,'',tec306,'',logogremioanapolis,'',tec444,'',logoinhumas,'',tec311,'',logoitumbiara,'',tec313,'',logojataiense,'',tec314,'',logomorrinhos,'',tec317,''];
  let Perna_Cal_A1=[logocentral,'',tec298,'',logonautico,'',tec190,'',logopetrolina,'',tec266,'',logoporto,'',tec320,'',logoretro,'',tec271,'',logosantacruz,'',tec27,'',logosport,'',tec78,'',logosalgueiro,'',tec321,''];
  let Perna_Cal_B1=[logoafogados,'',tec293,'',logobelojardim,'',tec295,'',logocaruarucity,'',tec296,'',logodecisaosertania,'',tec302,'',logoibis,'',tec443,'',logomaguary,'',tec316,'',logoveracruz,'',tec323,'',logovitoriadastabocas,'',tec324,''];
  let Ceare_Cal_A1=[logoatleticocearense,'',tec245,'',logoceara,'',tec116,'',logoferroviario,'',tec68,'',logofloresta,'',tec162,'',logofortaleza,'',tec172,'',logoguaranydesobral,'',tec307,'',logoicasa,'',tec310,'',logoiguatu,'',tec255,''];
  let Ceare_Cal_B1=[logobarbalha,'',tec294,'',logocaucaia,'',tec297,'',logocrato,'',tec301,'',logohorizonte,'',tec308,'',logoitapipoca,'',tec312,'',logomaracanace,'',tec262,'',logopacajus,'',tec319,'',logotiradentesce,'',tec322,''];
  let Baian_Cal_A1=[logoatleticoba,'',tec325,'',logobahia,'',tec84,'',logobarcelonaba,'',tec327,'',logovitoria,'',tec26,'',logoitabuna,'',tec258,'',logojacobina,'',tec328,'',logojacuipense,'',tec259,'',logojuazeirense,'',tec260,''];
  let Baian_Cal_B1=[logobahiadefeira,'',tec330,'',logocolocoloba,'',tec331,'',logofluminensedefeira,'',tec332,'',logograpiuna,'',tec333,'',logojequie,'',tec329,'',logojuazeiro,'',tec334,'',logounirb,'',tec335,'',logovitoriadaconquista,'',tec336,''];
  


let Pauli_A2=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Pauli_B2=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Cario_A2=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Cario_B2=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Gauch_A2=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Gauch_B2=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Minei_A2=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Minei_B2=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Paran_A2=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Paran_B2=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Catar_A2=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Catar_B2=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Norde_A2=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Norde_B2=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Norti_A2=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Norti_B2=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Centr_A2=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Centr_B2=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Goian_A2=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Goian_B2=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Perna_A2=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Perna_B2=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Ceare_A2=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Ceare_B2=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Baian_A2=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Baian_B2=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];





  let Pauli_Cal_A2=[logoportuguesa,'',tec83,'',logobotafogosp,'',tec32,'',logobragantino,'',tec168,'',logocorinthians,'',tec170,'',logoguarani,'',tec241,'',logonovorizontino,'',tec60,'',logopontepreta,'',tec233,'',logosaopaulo,'',tec124,''];
let Pauli_Cal_B2=[logosantos,'',tec155,'',logoferroviariasp,'',tec180,'',logointernacionalsp,'',tec93,'',logoituano,'',tec96,'',logomirassol,'',tec280,'',logopalmeiras,'',tec67,'',logopaulista,'',tec108,'',logosaobernardo,'',tec158,''];
let Cario_Cal_A2=[logovasco,'',tec167,'',logoamericarj,'',tec131,'',logoaudax,'',tec39,'',logobotafogo,'',tec7,'',logoflamengo,'',tec41,'',logofluminense,'',tec72,'',logoportuguesarj,'',tec119,'',logovoltaredonda,'',tec148,''];
let Cario_Cal_B2=[logoresende,'',tec120,'',logobangu,'',tec225,'',logobonsucesso,'',tec40,'',logocabofriense,'',tec46,'',logomadureira,'',tec104,'',logoolaria,'',tec103,'',logonovaiguacu,'',tec100,'',logosaocristovao,'',tec132,''];
let Gauch_Cal_A2=[logosaojosers,'',tec159,'',logobrasilrs,'',tec129,'',logocaxias,'',tec14,'',logogremio,'',tec73,'',logointernacional,'',tec92,'',logojuventude,'',tec169,'',logopelotas,'',tec164,'',logoypirangars,'',tec200,''];
let Gauch_Cal_B2=[logonovohamburgo,'',tec101,'',logoavenida,'',tec246,'',logobage,'',tec21,'',logoesportivo,'',tec61,'',logogloria,'',tec445,'',logoguaranyrs,'',tec80,'',logolajeadense,'',tec85,'',logosaoluizrs,'',tec134,''];
let Minei_Cal_A2=[logotombense,'',tec178,'',logoamericamg,'',tec102,'',logoatleticomg,'',tec17,'',logocaldense,'',tec138,'',logocruzeiro,'',tec55,'',logodemocrata,'',tec58,'',logoipatinga,'',tec81,'',logovillanovamg,'',tec440,''];
let Minei_Cal_B2=[logourt,'',tec145,'',logoathletic,'',tec166,'',logoboaesporte,'',tec28,'',logopatrocinense,'',tec113,'',logosocial,'',tec136,'',logotupi,'',tec141,'',logouberlandia,'',tec146,'',logopousoalegre,'',tec173,''];
let Paran_Cal_A2=[logooperariopr,'',tec105,'',logoathletico,'',tec87,'',logocianorte,'',tec52,'',logocoritiba,'',tec175,'',logofccascavel,'',tec63,'',logolondrina,'',tec231,'',logomaringa,'',tec264,'',logoparana,'',tec127,''];
let Paran_Cal_B2=[logosaojoseense,'',tec285,'',logoandraus,'',tec281,'',logoazuriz,'',tec282,'',logofozdoiguacu,'',tec75,'',logopsts,'',tec283,'',logogalomaringa,'',tec284,'',logogremiomaringa,'',tec287,'',logotoledo,'',tec286,''];
let Catar_Cal_A2=[logohercilioluz,'',tec253,'',logoavai,'',tec163,'',logobarrasc,'',tec247,'',logobrusque,'',tec45,'',logochapecoense,'',tec1,'',logocriciuma,'',tec183,'',logofigueirense,'',tec4,'',logojoinville,'',tec82,''];
let Catar_Cal_B2=[logometropolitano,'',tec91,'',logocaravaggio,'',tec292,'',logoconcordia,'',tec250,'',logoguaranidepalhoca,'',tec290,'',logointerdelajes,'',tec151,'',logojuventusdejaragua,'',tec291,'',logomarciliodias,'',tec288,'',logonacao,'',tec289,''];
let Norde_Cal_A2=[logosampaiocorrea,'',tec65,'',logoamericarn,'',tec223,'',logoabc,'',tec326,'',logobotafogopb,'',tec44,'',logocrb,'',tec228,'',logocsa,'',tec56,'',logoriverpi,'',tec130,'',logotreze,'',tec237,''];
let Norde_Cal_B2=[logoserra,'',tec276,'',logoasa,'',tec244,'',logoconfianca,'',tec161,'',logocse,'',tec251,'',logofluminensepi,'',tec252,'',logomotoclub,'',tec265,'',logosergipe,'',tec275,'',logosousa,'',tec277,''];
let Norti_Cal_A2=[logotocantinopolis,'',tec278,'',logoamazonas,'',tec33,'',logomanaus,'',tec86,'',logonacionalam,'',tec112,'',logopaysandu,'',tec150,'',logoremo,'',tec144,'',logosaoraimundorr,'',tec274,'',logotremap,'',tec139,''];
let Norti_Cal_B2=[logoriobrancoac,'',tec122,'',logoaguiademaraba,'',tec242,'',logocapital,'',tec249,'',logohumaita,'',tec254,'',logonauticorr,'',tec98,'',logoportovelhoro,'',tec118,'',logoprincesadosolimoes,'',tec268,'',logosaoraimundoam,'',tec128,''];
let Centr_Cal_A2=[logorealbrasilia,'',tec269,'',logobrasiliense,'',tec34,'',logocostarica,'',tec53,'',logocuiaba,'',tec165,'',logogama,'',tec154,'',logomixto,'',tec95,'',logooperarioms,'',tec77,'',logouniaorondonopolis,'',tec279,''];
let Centr_Cal_B2=[logoluziania,'',tec315,'',logoaguianegra,'',tec31,'',logoceilandia,'',tec51,'',logoceov,'',tec299,'',logocomercialms,'',tec300,'',logodombosco,'',tec303,'',logoluverdense,'',tec152,'',logonovamutum,'',tec318,''];
let Goian_Cal_A2=[logoipora,'',tec256,'',logoanapolina,'',tec36,'',logoanapolis,'',tec243,'',logoaparecidense,'',tec171,'',logoatleticogo,'',tec106,'',logocrac,'',tec54,'',logogoias,'',tec185,'',logovilanova,'',tec193,''];
let Goian_Cal_B2=[logojataiense,'',tec314,'',logogoianesia,'',tec304,'',logogoiania,'',tec305,'',logogoiatuba,'',tec306,'',logogremioanapolis,'',tec444,'',logoinhumas,'',tec311,'',logoitumbiara,'',tec313,'',logomorrinhos,'',tec317,''];
let Perna_Cal_A2=[logosport,'',tec78,'',logocentral,'',tec298,'',logonautico,'',tec190,'',logopetrolina,'',tec266,'',logoporto,'',tec320,'',logoretro,'',tec271,'',logosantacruz,'',tec27,'',logosalgueiro,'',tec321,''];
let Perna_Cal_B2=[logoveracruz,'',tec323,'',logoafogados,'',tec293,'',logobelojardim,'',tec295,'',logocaruarucity,'',tec296,'',logodecisaosertania,'',tec302,'',logoibis,'',tec443,'',logomaguary,'',tec316,'',logovitoriadastabocas,'',tec324,''];
let Ceare_Cal_A2=[logoicasa,'',tec310,'',logoatleticocearense,'',tec245,'',logoceara,'',tec116,'',logoferroviario,'',tec68,'',logofloresta,'',tec162,'',logofortaleza,'',tec172,'',logoguaranydesobral,'',tec307,'',logoiguatu,'',tec255,''];
let Ceare_Cal_B2=[logopacajus,'',tec319,'',logobarbalha,'',tec294,'',logocaucaia,'',tec297,'',logocrato,'',tec301,'',logohorizonte,'',tec308,'',logoitapipoca,'',tec312,'',logomaracanace,'',tec262,'',logotiradentesce,'',tec322,''];
let Baian_Cal_A2=[logojacuipense,'',tec259,'',logoatleticoba,'',tec325,'',logobahia,'',tec84,'',logobarcelonaba,'',tec327,'',logovitoria,'',tec26,'',logoitabuna,'',tec258,'',logojacobina,'',tec328,'',logojuazeirense,'',tec260,''];
let Baian_Cal_B2=[logounirb,'',tec335,'',logobahiadefeira,'',tec330,'',logocolocoloba,'',tec331,'',logofluminensedefeira,'',tec332,'',logograpiuna,'',tec333,'',logojequie,'',tec329,'',logojuazeiro,'',tec334,'',logovitoriadaconquista,'',tec336,''];




 let Pauli_A3=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Pauli_B3=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Cario_A3=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Cario_B3=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Gauch_A3=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Gauch_B3=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Minei_A3=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Minei_B3=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Paran_A3=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Paran_B3=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Catar_A3=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Catar_B3=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Norde_A3=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Norde_B3=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Norti_A3=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Norti_B3=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Centr_A3=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Centr_B3=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Goian_A3=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Goian_B3=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Perna_A3=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Perna_B3=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Ceare_A3=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
 let Ceare_B3=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
 let Baian_A3=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
 let Baian_B3=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];






 let Pauli_Cal_A3=[logocorinthians,'',tec170,'',logoportuguesa,'',tec83,'',logonovorizontino,'',tec60,'',logobragantino,'',tec168,'',logopontepreta,'',tec233,'',logoguarani,'',tec242,'',logobotafogosp,'',tec32,'',logosaopaulo,'',tec124,''];
 let Pauli_Cal_B3=[logoituano,'',tec96,'',logosantos,'',tec155,'',logopalmeiras,'',tec67,'',logointernacionalsp,'',tec93,'',logopaulista,'',tec108,'',logomirassol,'',tec280,'',logoferroviariasp,'',tec180,'',logosaobernardo,'',tec158,''];
 let Cario_Cal_A3=[logobotafogo,'',tec7,'',logovasco,'',tec167,'',logofluminense,'',tec72,'',logoaudax,'',tec39,'',logoportuguesarj,'',tec119,'',logoflamengo,'',tec41,'',logoamericarj,'',tec131,'',logovoltaredonda,'',tec148,''];
 let Cario_Cal_B3=[logocabofriense,'',tec46,'',logoresende,'',tec120,'',logoolaria,'',tec103,'',logobonsucesso,'',tec40,'',logonovaiguacu,'',tec100,'',logomadureira,'',tec104,'',logobangu,'',tec225,'',logosaocristovao,'',tec132,''];
 let Gauch_Cal_A3=[logogremio,'',tec73,'',logosaojosers,'',tec159,'',logojuventude,'',tec169,'',logocaxias,'',tec14,'',logopelotas,'',tec164,'',logointernacional,'',tec92,'',logobrasilrs,'',tec129,'',logoypirangars,'',tec200,''];
 let Gauch_Cal_B3=[logoesportivo,'',tec61,'',logonovohamburgo,'',tec101,'',logoguaranyrs,'',tec80,'',logobage,'',tec21,'',logolajeadense,'',tec85,'',logogloria,'',tec445,'',logoavenida,'',tec246,'',logosaoluizrs,'',tec134,''];
 let Minei_Cal_A3=[logocaldense,'',tec138,'',logotombense,'',tec178,'',logodemocrata,'',tec58,'',logoatleticomg,'',tec17,'',logoipatinga,'',tec81,'',logocruzeiro,'',tec55,'',logoamericamg,'',tec102,'',logovillanovamg,'',tec440,''];
 let Minei_Cal_B3=[logopatrocinense,'',tec113,'',logourt,'',tec145,'',logotupi,'',tec141,'',logoboaesporte,'',tec28,'',logouberlandia,'',tec146,'',logosocial,'',tec136,'',logoathletic,'',tec166,'',logopousoalegre,'',tec173,''];
 let Paran_Cal_A3=[logocoritiba,'',tec175,'',logooperariopr,'',tec105,'',logolondrina,'',tec231,'',logocianorte,'',tec52,'',logomaringa,'',tec264,'',logofccascavel,'',tec63,'',logoathletico,'',tec87,'',logoparana,'',tec127,''];
 let Paran_Cal_B3=[logofozdoiguacu,'',tec75,'',logosaojoseense,'',tec285,'',logogalomaringa,'',tec284,'',logoazuriz,'',tec282,'',logogremiomaringa,'',tec287,'',logopsts,'',tec283,'',logoandraus,'',tec281,'',logotoledo,'',tec286,''];
 let Catar_Cal_A3=[logobrusque,'',tec45,'',logohercilioluz,'',tec253,'',logocriciuma,'',tec183,'',logobarrasc,'',tec247,'',logofigueirense,'',tec4,'',logochapecoense,'',tec1,'',logoavai,'',tec163,'',logojoinville,'',tec82,''];
 let Catar_Cal_B3=[logoguaranidepalhoca,'',tec290,'',logometropolitano,'',tec91,'',logojuventusdejaragua,'',tec291,'',logoconcordia,'',tec250,'',logomarciliodias,'',tec288,'',logointerdelajes,'',tec151,'',logocaravaggio,'',tec292,'',logonacao,'',tec289,''];
 let Norde_Cal_A3=[logobotafogopb,'',tec44,'',logosampaiocorrea,'',tec65,'',logocsa,'',tec56,'',logoabc,'',tec326,'',logoriverpi,'',tec130,'',logocrb,'',tec228,'',logoamericarn,'',tec223,'',logotreze,'',tec237,''];
 let Norde_Cal_B3=[logocse,'',tec251,'',logoserra,'',tec276,'',logomotoclub,'',tec265,'',logoconfianca,'',tec161,'',logosergipe,'',tec275,'',logofluminensepi,'',tec252,'',logoasa,'',tec244,'',logosousa,'',tec277,''];
 let Norti_Cal_A3=[logonacionalam,'',tec112,'',logotocantinopolis,'',tec278,'',logoremo,'',tec144,'',logomanaus,'',tec86,'',logosaoraimundorr,'',tec274,'',logopaysandu,'',tec150,'',logoamazonas,'',tec33,'',logotremap,'',tec139,''];
 let Norti_Cal_B3=[logohumaita,'',tec254,'',logoriobrancoac,'',tec122,'',logoportovelhoro,'',tec118,'',logocapital,'',tec249,'',logoprincesadosolimoes,'',tec268,'',logonauticorr,'',tec98,'',logoaguiademaraba,'',tec242,'',logosaoraimundoam,'',tec128,''];
 let Centr_Cal_A3=[logocuiaba,'',tec165,'',logorealbrasilia,'',tec269,'',logomixto,'',tec95,'',logocostarica,'',tec53,'',logooperarioms,'',tec77,'',logogama,'',tec154,'',logobrasiliense,'',tec34,'',logouniaorondonopolis,'',tec279,''];
 let Centr_Cal_B3=[logoceov,'',tec299,'',logoluziania,'',tec315,'',logodombosco,'',tec303,'',logoceilandia,'',tec51,'',logoluverdense,'',tec152,'',logocomercialms,'',tec300,'',logoaguianegra,'',tec31,'',logonovamutum,'',tec318,''];
 let Goian_Cal_A3=[logoaparecidense,'',tec171,'',logoipora,'',tec256,'',logocrac,'',tec54,'',logoanapolis,'',tec243,'',logogoias,'',tec185,'',logoatleticogo,'',tec106,'',logoanapolina,'',tec36,'',logovilanova,'',tec193,''];
 let Goian_Cal_B3=[logogoiatuba,'',tec306,'',logojataiense,'',tec314,'',logoinhumas,'',tec311,'',logogoiania,'',tec305,'',logoitumbiara,'',tec313,'',logogremioanapolis,'',tec444,'',logogoianesia,'',tec304,'',logomorrinhos,'',tec317,''];
 let Perna_Cal_A3=[logopetrolina,'',tec266,'',logosport,'',tec78,'',logoretro,'',tec271,'',logonautico,'',tec190,'',logosantacruz,'',tec27,'',logoporto,'',tec320,'',logocentral,'',tec298,'',logosalgueiro,'',tec321,''];
 let Perna_Cal_B3=[logocaruarucity,'',tec296,'',logoveracruz,'',tec323,'',logoibis,'',tec443,'',logobelojardim,'',tec295,'',logomaguary,'',tec316,'',logodecisaosertania,'',tec302,'',logoafogados,'',tec293,'',logovitoriadastabocas,'',tec324,''];
 let Ceare_Cal_A3=[logoferroviario,'',tec68,'',logoicasa,'',tec310,'',logofortaleza,'',tec172,'',logoceara,'',tec116,'',logoguaranydesobral,'',tec307,'',logofloresta,'',tec162,'',logoatleticocearense,'',tec245,'',logoiguatu,'',tec255,''];
 let Ceare_Cal_B3=[logocrato,'',tec301,'',logopacajus,'',tec319,'',logoitapipoca,'',tec312,'',logocaucaia,'',tec297,'',logomaracanace,'',tec262,'',logohorizonte,'',tec308,'',logobarbalha,'',tec294,'',logotiradentesce,'',tec322,''];
 let Baian_Cal_A3=[logobarcelonaba,'',tec327,'',logojacuipense,'',tec259,'',logoitabuna,'',tec258,'',logobahia,'',tec84,'',logojacobina,'',tec328,'',logovitoria,'',tec26,'',logoatleticoba,'',tec325,'',logojuazeirense,'',tec260,''];
 let Baian_Cal_B3=[logofluminensedefeira,'',tec332,'',logounirb,'',tec335,'',logojequie,'',tec329,'',logocolocoloba,'',tec331,'',logojuazeiro,'',tec334,'',logograpiuna,'',tec333,'',logobahiadefeira,'',tec330,'',logovitoriadaconquista,'',tec336,''];
 


 let Pauli_A4=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Pauli_B4=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Cario_A4=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Cario_B4=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Gauch_A4=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Gauch_B4=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Minei_A4=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Minei_B4=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Paran_A4=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Paran_B4=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Catar_A4=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Catar_B4=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Norde_A4=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Norde_B4=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Norti_A4=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Norti_B4=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Centr_A4=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Centr_B4=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Goian_A4=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Goian_B4=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Perna_A4=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Perna_B4=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Ceare_A4=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Ceare_B4=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Baian_A4=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Baian_B4=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];

  let Pauli_Cal_A4=[logoportuguesa,'',tec83,'',logonovorizontino,'',tec60,'',logobotafogosp,'',tec32,'',logocorinthians,'',tec170,'',logobragantino,'',tec168,'',logopontepreta,'',tec233,'',logosaopaulo,'',tec124,'',logoguarani,'',tec31,''];
  let Pauli_Cal_B4=[logosantos,'',tec155,'',logopalmeiras,'',tec67,'',logoferroviariasp,'',tec180,'',logoituano,'',tec96,'',logointernacionalsp,'',tec93,'',logopaulista,'',tec108,'',logosaobernardo,'',tec158,'',logomirassol,'',tec280,''];
  let Cario_Cal_A4=[logovasco,'',tec167,'',logofluminense,'',tec72,'',logoamericarj,'',tec131,'',logobotafogo,'',tec7,'',logoaudax,'',tec39,'',logoportuguesarj,'',tec119,'',logovoltaredonda,'',tec148,'',logoflamengo,'',tec41,''];
  let Cario_Cal_B4=[logoresende,'',tec120,'',logoolaria,'',tec103,'',logobangu,'',tec225,'',logocabofriense,'',tec46,'',logobonsucesso,'',tec40,'',logonovaiguacu,'',tec100,'',logosaocristovao,'',tec132,'',logomadureira,'',tec104,''];
  let Gauch_Cal_A4=[logosaojosers,'',tec159,'',logojuventude,'',tec169,'',logobrasilrs,'',tec129,'',logogremio,'',tec73,'',logocaxias,'',tec14,'',logopelotas,'',tec164,'',logoypirangars,'',tec200,'',logointernacional,'',tec92,''];
  let Gauch_Cal_B4=[logonovohamburgo,'',tec101,'',logoguaranyrs,'',tec80,'',logoavenida,'',tec246,'',logoesportivo,'',tec61,'',logobage,'',tec21,'',logolajeadense,'',tec85,'',logosaoluizrs,'',tec134,'',logogloria,'',tec445,''];
  let Minei_Cal_A4=[logotombense,'',tec178,'',logodemocrata,'',tec58,'',logoamericamg,'',tec102,'',logocaldense,'',tec138,'',logoatleticomg,'',tec17,'',logoipatinga,'',tec81,'',logovillanovamg,'',tec440,'',logocruzeiro,'',tec55,''];
  let Minei_Cal_B4=[logourt,'',tec145,'',logotupi,'',tec141,'',logoathletic,'',tec166,'',logopatrocinense,'',tec113,'',logoboaesporte,'',tec28,'',logouberlandia,'',tec146,'',logopousoalegre,'',tec173,'',logosocial,'',tec136,''];
  let Paran_Cal_A4=[logooperariopr,'',tec105,'',logolondrina,'',tec231,'',logoathletico,'',tec87,'',logocoritiba,'',tec175,'',logocianorte,'',tec52,'',logomaringa,'',tec264,'',logoparana,'',tec127,'',logofccascavel,'',tec63,''];
  let Paran_Cal_B4=[logosaojoseense,'',tec285,'',logogalomaringa,'',tec284,'',logoandraus,'',tec281,'',logofozdoiguacu,'',tec75,'',logoazuriz,'',tec282,'',logogremiomaringa,'',tec287,'',logotoledo,'',tec286,'',logopsts,'',tec283,''];
  let Catar_Cal_A4=[logohercilioluz,'',tec253,'',logocriciuma,'',tec183,'',logoavai,'',tec163,'',logobrusque,'',tec45,'',logobarrasc,'',tec247,'',logofigueirense,'',tec4,'',logojoinville,'',tec82,'',logochapecoense,'',tec1,''];
  let Catar_Cal_B4=[logometropolitano,'',tec91,'',logojuventusdejaragua,'',tec291,'',logocaravaggio,'',tec292,'',logoguaranidepalhoca,'',tec290,'',logoconcordia,'',tec250,'',logomarciliodias,'',tec288,'',logonacao,'',tec289,'',logointerdelajes,'',tec151,''];
  let Norde_Cal_A4=[logosampaiocorrea,'',tec65,'',logocsa,'',tec56,'',logoamericarn,'',tec223,'',logobotafogopb,'',tec44,'',logoabc,'',tec326,'',logoriverpi,'',tec130,'',logotreze,'',tec237,'',logocrb,'',tec228,''];
  let Norde_Cal_B4=[logoserra,'',tec276,'',logomotoclub,'',tec265,'',logoasa,'',tec244,'',logocse,'',tec251,'',logoconfianca,'',tec161,'',logosergipe,'',tec275,'',logosousa,'',tec277,'',logofluminensepi,'',tec252,''];
  let Norti_Cal_A4=[logotocantinopolis,'',tec278,'',logoremo,'',tec144,'',logoamazonas,'',tec33,'',logonacionalam,'',tec112,'',logomanaus,'',tec86,'',logosaoraimundorr,'',tec274,'',logotremap,'',tec139,'',logopaysandu,'',tec150,''];
  let Norti_Cal_B4=[logoriobrancoac,'',tec122,'',logoportovelhoro,'',tec118,'',logoaguiademaraba,'',tec242,'',logohumaita,'',tec254,'',logocapital,'',tec249,'',logoprincesadosolimoes,'',tec268,'',logosaoraimundoam,'',tec128,'',logonauticorr,'',tec98,''];
  let Centr_Cal_A4=[logorealbrasilia,'',tec269,'',logomixto,'',tec95,'',logobrasiliense,'',tec34,'',logocuiaba,'',tec165,'',logocostarica,'',tec53,'',logooperarioms,'',tec77,'',logouniaorondonopolis,'',tec279,'',logogama,'',tec154,''];
  let Centr_Cal_B4=[logoluziania,'',tec315,'',logodombosco,'',tec303,'',logoaguianegra,'',tec31,'',logoceov,'',tec299,'',logoceilandia,'',tec51,'',logoluverdense,'',tec152,'',logonovamutum,'',tec318,'',logocomercialms,'',tec300,''];
  let Goian_Cal_A4=[logoipora,'',tec256,'',logocrac,'',tec54,'',logoanapolina,'',tec36,'',logoaparecidense,'',tec171,'',logoanapolis,'',tec243,'',logogoias,'',tec185,'',logovilanova,'',tec193,'',logoatleticogo,'',tec106,''];
  let Goian_Cal_B4=[logojataiense,'',tec314,'',logoinhumas,'',tec311,'',logogoianesia,'',tec304,'',logogoiatuba,'',tec306,'',logogoiania,'',tec305,'',logoitumbiara,'',tec313,'',logomorrinhos,'',tec317,'',logogremioanapolis,'',tec444,''];
  let Perna_Cal_A4=[logosport,'',tec78,'',logoretro,'',tec271,'',logocentral,'',tec298,'',logopetrolina,'',tec266,'',logonautico,'',tec190,'',logosantacruz,'',tec27,'',logosalgueiro,'',tec321,'',logoporto,'',tec320,''];
  let Perna_Cal_B4=[logoveracruz,'',tec323,'',logoibis,'',tec443,'',logoafogados,'',tec293,'',logocaruarucity,'',tec296,'',logobelojardim,'',tec295,'',logomaguary,'',tec316,'',logovitoriadastabocas,'',tec324,'',logodecisaosertania,'',tec302,''];
  let Ceare_Cal_A4=[logoicasa,'',tec310,'',logofortaleza,'',tec172,'',logoatleticocearense,'',tec245,'',logoferroviario,'',tec68,'',logoceara,'',tec116,'',logoguaranydesobral,'',tec307,'',logoiguatu,'',tec255,'',logofloresta,'',tec162,''];
  let Ceare_Cal_B4=[logopacajus,'',tec319,'',logoitapipoca,'',tec312,'',logobarbalha,'',tec294,'',logocrato,'',tec301,'',logocaucaia,'',tec297,'',logomaracanace,'',tec262,'',logotiradentesce,'',tec322,'',logohorizonte,'',tec308,''];
  let Baian_Cal_A4=[logojacuipense,'',tec259,'',logoitabuna,'',tec258,'',logoatleticoba,'',tec325,'',logobarcelonaba,'',tec327,'',logobahia,'',tec84,'',logojacobina,'',tec328,'',logojuazeirense,'',tec260,'',logovitoria,'',tec26,''];
  let Baian_Cal_B4=[logounirb,'',tec335,'',logojequie,'',tec329,'',logobahiadefeira,'',tec330,'',logofluminensedefeira,'',tec332,'',logocolocoloba,'',tec331,'',logojuazeiro,'',tec334,'',logovitoriadaconquista,'',tec336,'',logograpiuna,'',tec333,''];
  







 let Pauli_A5=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Pauli_B5=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Cario_A5=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Cario_B5=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Gauch_A5=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Gauch_B5=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Minei_A5=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Minei_B5=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Paran_A5=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Paran_B5=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Catar_A5=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Catar_B5=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Norde_A5=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Norde_B5=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Norti_A5=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Norti_B5=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Centr_A5=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Centr_B5=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Goian_A5=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Goian_B5=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Perna_A5=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Perna_B5=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Ceare_A5=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
 let Ceare_B5=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
 let Baian_A5=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
 let Baian_B5=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];

 let Pauli_Cal_A5=[logopontepreta,'',tec233,'',logoportuguesa,'',tec83,'',logonovorizontino,'',tec60,'',logobotafogosp,'',tec32,'',logoguarani,'',tec176,'',logobragantino,'',tec168,'',logocorinthians,'',tec170,'',logosaopaulo,'',tec124,''];
 let Pauli_Cal_B5=[logopaulista,'',tec108,'',logosantos,'',tec155,'',logopalmeiras,'',tec67,'',logoferroviariasp,'',tec180,'',logomirassol,'',tec280,'',logointernacionalsp,'',tec93,'',logoituano,'',tec96,'',logosaobernardo,'',tec158,''];
 let Cario_Cal_A5=[logoportuguesarj,'',tec119,'',logovasco,'',tec167,'',logofluminense,'',tec72,'',logoamericarj,'',tec131,'',logoflamengo,'',tec41,'',logoaudax,'',tec39,'',logobotafogo,'',tec7,'',logovoltaredonda,'',tec148,''];
 let Cario_Cal_B5=[logonovaiguacu,'',tec100,'',logoresende,'',tec120,'',logoolaria,'',tec103,'',logobangu,'',tec225,'',logomadureira,'',tec104,'',logobonsucesso,'',tec40,'',logocabofriense,'',tec46,'',logosaocristovao,'',tec132,''];
 let Gauch_Cal_A5=[logopelotas,'',tec164,'',logosaojosers,'',tec159,'',logojuventude,'',tec169,'',logobrasilrs,'',tec129,'',logointernacional,'',tec92,'',logocaxias,'',tec14,'',logogremio,'',tec73,'',logoypirangars,'',tec200,''];
 let Gauch_Cal_B5=[logolajeadense,'',tec85,'',logonovohamburgo,'',tec101,'',logoguaranyrs,'',tec80,'',logoavenida,'',tec246,'',logogloria,'',tec445,'',logobage,'',tec21,'',logoesportivo,'',tec61,'',logosaoluizrs,'',tec134,''];
 let Minei_Cal_A5=[logoipatinga,'',tec81,'',logotombense,'',tec178,'',logodemocrata,'',tec58,'',logoamericamg,'',tec102,'',logocruzeiro,'',tec55,'',logoatleticomg,'',tec17,'',logocaldense,'',tec138,'',logovillanovamg,'',tec440,''];
 let Minei_Cal_B5=[logouberlandia,'',tec146,'',logourt,'',tec145,'',logotupi,'',tec141,'',logoathletic,'',tec166,'',logosocial,'',tec136,'',logoboaesporte,'',tec28,'',logopatrocinense,'',tec113,'',logopousoalegre,'',tec173,''];
 let Paran_Cal_A5=[logomaringa,'',tec264,'',logooperariopr,'',tec105,'',logolondrina,'',tec231,'',logoathletico,'',tec87,'',logofccascavel,'',tec63,'',logocianorte,'',tec52,'',logocoritiba,'',tec175,'',logoparana,'',tec127,''];
 let Paran_Cal_B5=[logogremiomaringa,'',tec287,'',logosaojoseense,'',tec285,'',logogalomaringa,'',tec284,'',logoandraus,'',tec281,'',logopsts,'',tec283,'',logoazuriz,'',tec282,'',logofozdoiguacu,'',tec75,'',logotoledo,'',tec286,''];
 let Catar_Cal_A5=[logofigueirense,'',tec4,'',logohercilioluz,'',tec253,'',logocriciuma,'',tec183,'',logoavai,'',tec163,'',logochapecoense,'',tec1,'',logobarrasc,'',tec247,'',logobrusque,'',tec45,'',logojoinville,'',tec82,''];
 let Catar_Cal_B5=[logomarciliodias,'',tec288,'',logometropolitano,'',tec91,'',logojuventusdejaragua,'',tec291,'',logocaravaggio,'',tec292,'',logointerdelajes,'',tec151,'',logoconcordia,'',tec250,'',logoguaranidepalhoca,'',tec290,'',logonacao,'',tec289,''];
 let Norde_Cal_A5=[logoriverpi,'',tec130,'',logosampaiocorrea,'',tec65,'',logocsa,'',tec56,'',logoamericarn,'',tec223,'',logocrb,'',tec228,'',logoabc,'',tec326,'',logobotafogopb,'',tec44,'',logotreze,'',tec237,''];
 let Norde_Cal_B5=[logosergipe,'',tec275,'',logoserra,'',tec276,'',logomotoclub,'',tec265,'',logoasa,'',tec244,'',logofluminensepi,'',tec252,'',logoconfianca,'',tec161,'',logocse,'',tec251,'',logosousa,'',tec277,''];
 let Norti_Cal_A5=[logosaoraimundorr,'',tec274,'',logotocantinopolis,'',tec278,'',logoremo,'',tec144,'',logoamazonas,'',tec33,'',logopaysandu,'',tec150,'',logomanaus,'',tec86,'',logonacionalam,'',tec112,'',logotremap,'',tec139,''];
 let Norti_Cal_B5=[logoprincesadosolimoes,'',tec268,'',logoriobrancoac,'',tec122,'',logoportovelhoro,'',tec118,'',logoaguiademaraba,'',tec242,'',logonauticorr,'',tec98,'',logocapital,'',tec249,'',logohumaita,'',tec254,'',logosaoraimundoam,'',tec128,''];
 let Centr_Cal_A5=[logooperarioms,'',tec77,'',logorealbrasilia,'',tec269,'',logomixto,'',tec95,'',logobrasiliense,'',tec34,'',logogama,'',tec154,'',logocostarica,'',tec53,'',logocuiaba,'',tec165,'',logouniaorondonopolis,'',tec279,''];
 let Centr_Cal_B5=[logoluverdense,'',tec152,'',logoluziania,'',tec315,'',logodombosco,'',tec303,'',logoaguianegra,'',tec31,'',logocomercialms,'',tec300,'',logoceilandia,'',tec51,'',logoceov,'',tec299,'',logonovamutum,'',tec318,''];
 let Goian_Cal_A5=[logogoias,'',tec185,'',logoipora,'',tec256,'',logocrac,'',tec54,'',logoanapolina,'',tec36,'',logoatleticogo,'',tec106,'',logoanapolis,'',tec243,'',logoaparecidense,'',tec171,'',logovilanova,'',tec193,''];
 let Goian_Cal_B5=[logoitumbiara,'',tec313,'',logojataiense,'',tec314,'',logoinhumas,'',tec311,'',logogoianesia,'',tec304,'',logogremioanapolis,'',tec444,'',logogoiania,'',tec305,'',logogoiatuba,'',tec306,'',logomorrinhos,'',tec317,''];
 let Perna_Cal_A5=[logosantacruz,'',tec27,'',logosport,'',tec78,'',logoretro,'',tec271,'',logocentral,'',tec298,'',logoporto,'',tec320,'',logonautico,'',tec190,'',logopetrolina,'',tec266,'',logosalgueiro,'',tec321,''];
 let Perna_Cal_B5=[logomaguary,'',tec316,'',logoveracruz,'',tec323,'',logoibis,'',tec443,'',logoafogados,'',tec293,'',logodecisaosertania,'',tec302,'',logobelojardim,'',tec295,'',logocaruarucity,'',tec296,'',logovitoriadastabocas,'',tec324,''];
 let Ceare_Cal_A5=[logoguaranydesobral,'',tec307,'',logoicasa,'',tec310,'',logofortaleza,'',tec172,'',logoatleticocearense,'',tec245,'',logofloresta,'',tec162,'',logoceara,'',tec116,'',logoferroviario,'',tec68,'',logoiguatu,'',tec255,''];
 let Ceare_Cal_B5=[logomaracanace,'',tec262,'',logopacajus,'',tec319,'',logoitapipoca,'',tec312,'',logobarbalha,'',tec294,'',logohorizonte,'',tec308,'',logocaucaia,'',tec297,'',logocrato,'',tec301,'',logotiradentesce,'',tec322,''];
 let Baian_Cal_A5=[logojacobina,'',tec328,'',logojacuipense,'',tec259,'',logoitabuna,'',tec258,'',logoatleticoba,'',tec325,'',logovitoria,'',tec26,'',logobahia,'',tec84,'',logobarcelonaba,'',tec327,'',logojuazeirense,'',tec260,''];
 let Baian_Cal_B5=[logojuazeiro,'',tec334,'',logounirb,'',tec335,'',logojequie,'',tec329,'',logobahiadefeira,'',tec330,'',logograpiuna,'',tec333,'',logocolocoloba,'',tec331,'',logofluminensedefeira,'',tec332,'',logovitoriadaconquista,'',tec336,''];
 


 let Pauli_A6=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Pauli_B6=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Cario_A6=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Cario_B6=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Gauch_A6=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Gauch_B6=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Minei_A6=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Minei_B6=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Paran_A6=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Paran_B6=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Catar_A6=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Catar_B6=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Norde_A6=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Norde_B6=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Norti_A6=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Norti_B6=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Centr_A6=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Centr_B6=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Goian_A6=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Goian_B6=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Perna_A6=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Perna_B6=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Ceare_A6=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Ceare_B6=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Baian_A6=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Baian_B6=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];


  let Pauli_Cal_A6=[logoportuguesa,'',tec83,'',logoguarani,'',tec33,'',logobotafogosp,'',tec32,'',logopontepreta,'',tec233,'',logocorinthians,'',tec170,'',logonovorizontino,'',tec60,'',logosaopaulo,'',tec124,'',logobragantino,'',tec168,''];
  let Pauli_Cal_B6=[logosantos,'',tec155,'',logomirassol,'',tec280,'',logoferroviariasp,'',tec180,'',logopaulista,'',tec108,'',logoituano,'',tec96,'',logopalmeiras,'',tec67,'',logosaobernardo,'',tec158,'',logointernacionalsp,'',tec93,''];
  let Cario_Cal_A6=[logovasco,'',tec167,'',logoflamengo,'',tec41,'',logoamericarj,'',tec131,'',logoportuguesarj,'',tec119,'',logobotafogo,'',tec7,'',logofluminense,'',tec72,'',logovoltaredonda,'',tec148,'',logoaudax,'',tec39,''];
  let Cario_Cal_B6=[logoresende,'',tec120,'',logomadureira,'',tec104,'',logobangu,'',tec225,'',logonovaiguacu,'',tec100,'',logocabofriense,'',tec46,'',logoolaria,'',tec103,'',logosaocristovao,'',tec132,'',logobonsucesso,'',tec40,''];
  let Gauch_Cal_A6=[logosaojosers,'',tec159,'',logointernacional,'',tec92,'',logobrasilrs,'',tec129,'',logopelotas,'',tec164,'',logogremio,'',tec73,'',logojuventude,'',tec169,'',logoypirangars,'',tec200,'',logocaxias,'',tec14,''];
  let Gauch_Cal_B6=[logonovohamburgo,'',tec101,'',logogloria,'',tec445,'',logoavenida,'',tec246,'',logolajeadense,'',tec85,'',logoesportivo,'',tec61,'',logoguaranyrs,'',tec80,'',logosaoluizrs,'',tec134,'',logobage,'',tec21,''];
  let Minei_Cal_A6=[logotombense,'',tec178,'',logocruzeiro,'',tec55,'',logoamericamg,'',tec102,'',logoipatinga,'',tec81,'',logocaldense,'',tec138,'',logodemocrata,'',tec58,'',logovillanovamg,'',tec440,'',logoatleticomg,'',tec17,''];
  let Minei_Cal_B6=[logourt,'',tec145,'',logosocial,'',tec136,'',logoathletic,'',tec166,'',logouberlandia,'',tec146,'',logopatrocinense,'',tec113,'',logotupi,'',tec141,'',logopousoalegre,'',tec173,'',logoboaesporte,'',tec28,''];
  let Paran_Cal_A6=[logooperariopr,'',tec105,'',logofccascavel,'',tec63,'',logoathletico,'',tec87,'',logomaringa,'',tec264,'',logocoritiba,'',tec175,'',logolondrina,'',tec231,'',logoparana,'',tec127,'',logocianorte,'',tec52,''];
  let Paran_Cal_B6=[logosaojoseense,'',tec285,'',logopsts,'',tec283,'',logoandraus,'',tec281,'',logogremiomaringa,'',tec287,'',logofozdoiguacu,'',tec75,'',logogalomaringa,'',tec284,'',logotoledo,'',tec286,'',logoazuriz,'',tec282,''];
  let Catar_Cal_A6=[logohercilioluz,'',tec253,'',logochapecoense,'',tec1,'',logoavai,'',tec163,'',logofigueirense,'',tec4,'',logobrusque,'',tec45,'',logocriciuma,'',tec183,'',logojoinville,'',tec82,'',logobarrasc,'',tec247,''];
  let Catar_Cal_B6=[logometropolitano,'',tec91,'',logointerdelajes,'',tec151,'',logocaravaggio,'',tec292,'',logomarciliodias,'',tec288,'',logoguaranidepalhoca,'',tec290,'',logojuventusdejaragua,'',tec291,'',logonacao,'',tec289,'',logoconcordia,'',tec250,''];
  let Norde_Cal_A6=[logosampaiocorrea,'',tec65,'',logocrb,'',tec228,'',logoamericarn,'',tec223,'',logoriverpi,'',tec130,'',logobotafogopb,'',tec44,'',logocsa,'',tec56,'',logotreze,'',tec237,'',logoabc,'',tec326,''];
  let Norde_Cal_B6=[logoserra,'',tec276,'',logofluminensepi,'',tec252,'',logoasa,'',tec244,'',logosergipe,'',tec275,'',logocse,'',tec251,'',logomotoclub,'',tec265,'',logosousa,'',tec277,'',logoconfianca,'',tec161,''];
  let Norti_Cal_A6=[logotocantinopolis,'',tec278,'',logopaysandu,'',tec150,'',logoamazonas,'',tec33,'',logosaoraimundorr,'',tec274,'',logonacionalam,'',tec112,'',logoremo,'',tec144,'',logotremap,'',tec139,'',logomanaus,'',tec86,''];
  let Norti_Cal_B6=[logoriobrancoac,'',tec122,'',logonauticorr,'',tec98,'',logoaguiademaraba,'',tec242,'',logoprincesadosolimoes,'',tec268,'',logohumaita,'',tec254,'',logoportovelhoro,'',tec118,'',logosaoraimundoam,'',tec128,'',logocapital,'',tec249,''];
  let Centr_Cal_A6=[logorealbrasilia,'',tec269,'',logogama,'',tec154,'',logobrasiliense,'',tec34,'',logooperarioms,'',tec77,'',logocuiaba,'',tec165,'',logomixto,'',tec95,'',logouniaorondonopolis,'',tec279,'',logocostarica,'',tec53,''];
  let Centr_Cal_B6=[logoluziania,'',tec315,'',logocomercialms,'',tec300,'',logoaguianegra,'',tec31,'',logoluverdense,'',tec152,'',logoceov,'',tec299,'',logodombosco,'',tec303,'',logonovamutum,'',tec318,'',logoceilandia,'',tec51,''];
  let Goian_Cal_A6=[logoipora,'',tec256,'',logoatleticogo,'',tec106,'',logoanapolina,'',tec36,'',logogoias,'',tec185,'',logoaparecidense,'',tec171,'',logocrac,'',tec54,'',logovilanova,'',tec193,'',logoanapolis,'',tec243,''];
  let Goian_Cal_B6=[logojataiense,'',tec314,'',logogremioanapolis,'',tec444,'',logogoianesia,'',tec304,'',logoitumbiara,'',tec313,'',logogoiatuba,'',tec306,'',logoinhumas,'',tec311,'',logomorrinhos,'',tec317,'',logogoiania,'',tec305,''];
  let Perna_Cal_A6=[logosport,'',tec78,'',logoporto,'',tec320,'',logocentral,'',tec298,'',logosantacruz,'',tec27,'',logopetrolina,'',tec266,'',logoretro,'',tec271,'',logosalgueiro,'',tec321,'',logonautico,'',tec190,''];
  let Perna_Cal_B6=[logoveracruz,'',tec323,'',logodecisaosertania,'',tec302,'',logoafogados,'',tec293,'',logomaguary,'',tec316,'',logocaruarucity,'',tec296,'',logoibis,'',tec443,'',logovitoriadastabocas,'',tec324,'',logobelojardim,'',tec295,''];
  let Ceare_Cal_A6=[logoicasa,'',tec310,'',logofloresta,'',tec162,'',logoatleticocearense,'',tec245,'',logoguaranydesobral,'',tec307,'',logoferroviario,'',tec68,'',logofortaleza,'',tec172,'',logoiguatu,'',tec255,'',logoceara,'',tec116,''];
  let Ceare_Cal_B6=[logopacajus,'',tec319,'',logohorizonte,'',tec308,'',logobarbalha,'',tec294,'',logomaracanace,'',tec262,'',logocrato,'',tec301,'',logoitapipoca,'',tec312,'',logotiradentesce,'',tec322,'',logocaucaia,'',tec297,''];
  let Baian_Cal_A6=[logojacuipense,'',tec259,'',logovitoria,'',tec26,'',logoatleticoba,'',tec325,'',logojacobina,'',tec328,'',logobarcelonaba,'',tec327,'',logoitabuna,'',tec258,'',logojuazeirense,'',tec260,'',logobahia,'',tec84,''];
  let Baian_Cal_B6=[logounirb,'',tec335,'',logograpiuna,'',tec333,'',logobahiadefeira,'',tec330,'',logojuazeiro,'',tec334,'',logofluminensedefeira,'',tec332,'',logojequie,'',tec329,'',logovitoriadaconquista,'',tec336,'',logocolocoloba,'',tec331,''];
  


 let Pauli_A7=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Pauli_B7=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Cario_A7=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Cario_B7=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Gauch_A7=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Gauch_B7=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Minei_A7=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Minei_B7=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Paran_A7=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Paran_B7=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Catar_A7=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Catar_B7=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Norde_A7=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Norde_B7=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Norti_A7=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Norti_B7=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Centr_A7=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Centr_B7=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Goian_A7=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Goian_B7=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Perna_A7=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Perna_B7=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Ceare_A7=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Ceare_B7=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Baian_A7=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Baian_B7=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];

  let Pauli_Cal_A7=[logobragantino,'',tec168,'',logoportuguesa,'',tec83,'',logoguarani,'',tec102,'',logobotafogosp,'',tec32,'',logopontepreta,'',tec233,'',logocorinthians,'',tec170,'',logonovorizontino,'',tec60,'',logosaopaulo,'',tec124,''];
  let Pauli_Cal_B7=[logointernacionalsp,'',tec93,'',logosantos,'',tec155,'',logomirassol,'',tec280,'',logoferroviariasp,'',tec180,'',logopaulista,'',tec108,'',logoituano,'',tec96,'',logopalmeiras,'',tec67,'',logosaobernardo,'',tec158,''];
  let Cario_Cal_A7=[logoaudax,'',tec39,'',logovasco,'',tec167,'',logoflamengo,'',tec41,'',logoamericarj,'',tec131,'',logoportuguesarj,'',tec119,'',logobotafogo,'',tec7,'',logofluminense,'',tec72,'',logovoltaredonda,'',tec148,''];
  let Cario_Cal_B7=[logobonsucesso,'',tec40,'',logoresende,'',tec120,'',logomadureira,'',tec104,'',logobangu,'',tec225,'',logonovaiguacu,'',tec100,'',logocabofriense,'',tec46,'',logoolaria,'',tec103,'',logosaocristovao,'',tec132,''];
  let Gauch_Cal_A7=[logocaxias,'',tec14,'',logosaojosers,'',tec159,'',logointernacional,'',tec92,'',logobrasilrs,'',tec129,'',logopelotas,'',tec164,'',logogremio,'',tec73,'',logojuventude,'',tec169,'',logoypirangars,'',tec200,''];
  let Gauch_Cal_B7=[logobage,'',tec21,'',logonovohamburgo,'',tec101,'',logogloria,'',tec445,'',logoavenida,'',tec246,'',logolajeadense,'',tec85,'',logoesportivo,'',tec61,'',logoguaranyrs,'',tec80,'',logosaoluizrs,'',tec134,''];
  let Minei_Cal_A7=[logoatleticomg,'',tec17,'',logotombense,'',tec178,'',logocruzeiro,'',tec55,'',logoamericamg,'',tec102,'',logoipatinga,'',tec81,'',logocaldense,'',tec138,'',logodemocrata,'',tec58,'',logovillanovamg,'',tec440,''];
  let Minei_Cal_B7=[logoboaesporte,'',tec28,'',logourt,'',tec145,'',logosocial,'',tec136,'',logoathletic,'',tec166,'',logouberlandia,'',tec146,'',logopatrocinense,'',tec113,'',logotupi,'',tec141,'',logopousoalegre,'',tec173,''];
  let Paran_Cal_A7=[logocianorte,'',tec52,'',logooperariopr,'',tec105,'',logofccascavel,'',tec63,'',logoathletico,'',tec87,'',logomaringa,'',tec264,'',logocoritiba,'',tec175,'',logolondrina,'',tec231,'',logoparana,'',tec127,''];
  let Paran_Cal_B7=[logoazuriz,'',tec282,'',logosaojoseense,'',tec285,'',logopsts,'',tec283,'',logoandraus,'',tec281,'',logogremiomaringa,'',tec287,'',logofozdoiguacu,'',tec75,'',logogalomaringa,'',tec284,'',logotoledo,'',tec286,''];
  let Catar_Cal_A7=[logobarrasc,'',tec247,'',logohercilioluz,'',tec253,'',logochapecoense,'',tec1,'',logoavai,'',tec163,'',logofigueirense,'',tec4,'',logobrusque,'',tec45,'',logocriciuma,'',tec183,'',logojoinville,'',tec82,''];
  let Catar_Cal_B7=[logoconcordia,'',tec250,'',logometropolitano,'',tec91,'',logointerdelajes,'',tec151,'',logocaravaggio,'',tec292,'',logomarciliodias,'',tec288,'',logoguaranidepalhoca,'',tec290,'',logojuventusdejaragua,'',tec291,'',logonacao,'',tec289,''];
  let Norde_Cal_A7=[logoabc,'',tec326,'',logosampaiocorrea,'',tec65,'',logocrb,'',tec228,'',logoamericarn,'',tec223,'',logoriverpi,'',tec130,'',logobotafogopb,'',tec44,'',logocsa,'',tec56,'',logotreze,'',tec237,''];
  let Norde_Cal_B7=[logoconfianca,'',tec161,'',logoserra,'',tec276,'',logofluminensepi,'',tec252,'',logoasa,'',tec244,'',logosergipe,'',tec275,'',logocse,'',tec251,'',logomotoclub,'',tec265,'',logosousa,'',tec277,''];
  let Norti_Cal_A7=[logomanaus,'',tec86,'',logotocantinopolis,'',tec278,'',logopaysandu,'',tec150,'',logoamazonas,'',tec33,'',logosaoraimundorr,'',tec274,'',logonacionalam,'',tec112,'',logoremo,'',tec144,'',logotremap,'',tec139,''];
  let Norti_Cal_B7=[logocapital,'',tec249,'',logoriobrancoac,'',tec122,'',logonauticorr,'',tec98,'',logoaguiademaraba,'',tec242,'',logoprincesadosolimoes,'',tec268,'',logohumaita,'',tec254,'',logoportovelhoro,'',tec118,'',logosaoraimundoam,'',tec128,''];
  let Centr_Cal_A7=[logocostarica,'',tec53,'',logorealbrasilia,'',tec269,'',logogama,'',tec154,'',logobrasiliense,'',tec34,'',logooperarioms,'',tec77,'',logocuiaba,'',tec165,'',logomixto,'',tec95,'',logouniaorondonopolis,'',tec279,''];
  let Centr_Cal_B7=[logoceilandia,'',tec51,'',logoluziania,'',tec315,'',logocomercialms,'',tec300,'',logoaguianegra,'',tec31,'',logoluverdense,'',tec152,'',logoceov,'',tec299,'',logodombosco,'',tec303,'',logonovamutum,'',tec318,''];
  let Goian_Cal_A7=[logoanapolis,'',tec243,'',logoipora,'',tec256,'',logoatleticogo,'',tec106,'',logoanapolina,'',tec36,'',logogoias,'',tec185,'',logoaparecidense,'',tec171,'',logocrac,'',tec54,'',logovilanova,'',tec193,''];
  let Goian_Cal_B7=[logogoiania,'',tec305,'',logojataiense,'',tec314,'',logogremioanapolis,'',tec444,'',logogoianesia,'',tec304,'',logoitumbiara,'',tec313,'',logogoiatuba,'',tec306,'',logoinhumas,'',tec311,'',logomorrinhos,'',tec317,''];
  let Perna_Cal_A7=[logonautico,'',tec190,'',logosport,'',tec78,'',logoporto,'',tec320,'',logocentral,'',tec298,'',logosantacruz,'',tec27,'',logopetrolina,'',tec266,'',logoretro,'',tec271,'',logosalgueiro,'',tec321,''];
  let Perna_Cal_B7=[logobelojardim,'',tec295,'',logoveracruz,'',tec323,'',logodecisaosertania,'',tec302,'',logoafogados,'',tec293,'',logomaguary,'',tec316,'',logocaruarucity,'',tec296,'',logoibis,'',tec443,'',logovitoriadastabocas,'',tec324,''];
  let Ceare_Cal_A7=[logoceara,'',tec116,'',logoicasa,'',tec310,'',logofloresta,'',tec162,'',logoatleticocearense,'',tec245,'',logoguaranydesobral,'',tec307,'',logoferroviario,'',tec68,'',logofortaleza,'',tec172,'',logoiguatu,'',tec255,''];
  let Ceare_Cal_B7=[logocaucaia,'',tec297,'',logopacajus,'',tec319,'',logohorizonte,'',tec308,'',logobarbalha,'',tec294,'',logomaracanace,'',tec262,'',logocrato,'',tec301,'',logoitapipoca,'',tec312,'',logotiradentesce,'',tec322,''];
  let Baian_Cal_A7=[logobahia,'',tec84,'',logojacuipense,'',tec259,'',logovitoria,'',tec26,'',logoatleticoba,'',tec325,'',logojacobina,'',tec328,'',logobarcelonaba,'',tec327,'',logoitabuna,'',tec258,'',logojuazeirense,'',tec260,''];
  let Baian_Cal_B7=[logocolocoloba,'',tec331,'',logounirb,'',tec335,'',logograpiuna,'',tec333,'',logobahiadefeira,'',tec330,'',logojuazeiro,'',tec334,'',logofluminensedefeira,'',tec332,'',logojequie,'',tec329,'',logovitoriadaconquista,'',tec336,''];
  


 let Pauli_A8=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Pauli_B8=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Cario_A8=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Cario_B8=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Gauch_A8=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Gauch_B8=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Minei_A8=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Minei_B8=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Paran_A8=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Paran_B8=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Catar_A8=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Catar_B8=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Norde_A8=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Norde_B8=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Norti_A8=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Norti_B8=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Centr_A8=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Centr_B8=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Goian_A8=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Goian_B8=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Perna_A8=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Perna_B8=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Ceare_A8=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Ceare_B8=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Baian_A8=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Baian_B8=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];

  let Pauli_Cal_A8=[logobragantino,'',tec168,'',logobotafogosp,'',tec32,'',logoguarani,'',tec131,'',logocorinthians,'',tec170,'',logopontepreta,'',tec233,'',logonovorizontino,'',tec60,'',logosaopaulo,'',tec124,'',logoportuguesa,'',tec83,''];
  let Pauli_Cal_B8=[logointernacionalsp,'',tec93,'',logoferroviariasp,'',tec180,'',logomirassol,'',tec280,'',logoituano,'',tec96,'',logopaulista,'',tec108,'',logopalmeiras,'',tec67,'',logosaobernardo,'',tec158,'',logosantos,'',tec155,''];
  let Cario_Cal_A8=[logoaudax,'',tec39,'',logoamericarj,'',tec131,'',logoflamengo,'',tec41,'',logobotafogo,'',tec7,'',logoportuguesarj,'',tec119,'',logofluminense,'',tec72,'',logovoltaredonda,'',tec148,'',logovasco,'',tec167,''];
  let Cario_Cal_B8=[logobonsucesso,'',tec40,'',logobangu,'',tec225,'',logomadureira,'',tec104,'',logocabofriense,'',tec46,'',logonovaiguacu,'',tec100,'',logoolaria,'',tec103,'',logosaocristovao,'',tec132,'',logoresende,'',tec120,''];
  let Gauch_Cal_A8=[logocaxias,'',tec14,'',logobrasilrs,'',tec129,'',logointernacional,'',tec92,'',logogremio,'',tec73,'',logopelotas,'',tec164,'',logojuventude,'',tec169,'',logoypirangars,'',tec200,'',logosaojosers,'',tec159,''];
  let Gauch_Cal_B8=[logobage,'',tec21,'',logoavenida,'',tec246,'',logogloria,'',tec445,'',logoesportivo,'',tec61,'',logolajeadense,'',tec85,'',logoguaranyrs,'',tec80,'',logosaoluizrs,'',tec134,'',logonovohamburgo,'',tec101,''];
  let Minei_Cal_A8=[logoatleticomg,'',tec17,'',logoamericamg,'',tec102,'',logocruzeiro,'',tec55,'',logocaldense,'',tec138,'',logoipatinga,'',tec81,'',logodemocrata,'',tec58,'',logovillanovamg,'',tec440,'',logotombense,'',tec178,''];
  let Minei_Cal_B8=[logoboaesporte,'',tec28,'',logoathletic,'',tec166,'',logosocial,'',tec136,'',logopatrocinense,'',tec113,'',logouberlandia,'',tec146,'',logotupi,'',tec141,'',logopousoalegre,'',tec173,'',logourt,'',tec145,''];
  let Paran_Cal_A8=[logocianorte,'',tec52,'',logoathletico,'',tec87,'',logofccascavel,'',tec63,'',logocoritiba,'',tec175,'',logomaringa,'',tec264,'',logolondrina,'',tec231,'',logoparana,'',tec127,'',logooperariopr,'',tec105,''];
  let Paran_Cal_B8=[logoazuriz,'',tec282,'',logoandraus,'',tec281,'',logopsts,'',tec283,'',logofozdoiguacu,'',tec75,'',logogremiomaringa,'',tec287,'',logogalomaringa,'',tec284,'',logotoledo,'',tec286,'',logosaojoseense,'',tec285,''];
  let Catar_Cal_A8=[logobarrasc,'',tec247,'',logoavai,'',tec163,'',logochapecoense,'',tec1,'',logobrusque,'',tec45,'',logofigueirense,'',tec4,'',logocriciuma,'',tec183,'',logojoinville,'',tec82,'',logohercilioluz,'',tec253,''];
  let Catar_Cal_B8=[logoconcordia,'',tec250,'',logocaravaggio,'',tec292,'',logointerdelajes,'',tec151,'',logoguaranidepalhoca,'',tec290,'',logomarciliodias,'',tec288,'',logojuventusdejaragua,'',tec291,'',logonacao,'',tec289,'',logometropolitano,'',tec91,''];
  let Norde_Cal_A8=[logoabc,'',tec326,'',logoamericarn,'',tec223,'',logocrb,'',tec228,'',logobotafogopb,'',tec44,'',logoriverpi,'',tec130,'',logocsa,'',tec56,'',logotreze,'',tec237,'',logosampaiocorrea,'',tec65,''];
  let Norde_Cal_B8=[logoconfianca,'',tec161,'',logoasa,'',tec244,'',logofluminensepi,'',tec252,'',logocse,'',tec251,'',logosergipe,'',tec275,'',logomotoclub,'',tec265,'',logosousa,'',tec277,'',logoserra,'',tec276,''];
  let Norti_Cal_A8=[logomanaus,'',tec86,'',logoamazonas,'',tec33,'',logopaysandu,'',tec150,'',logonacionalam,'',tec112,'',logosaoraimundorr,'',tec274,'',logoremo,'',tec144,'',logotremap,'',tec139,'',logotocantinopolis,'',tec278,''];
  let Norti_Cal_B8=[logocapital,'',tec249,'',logoaguiademaraba,'',tec242,'',logonauticorr,'',tec98,'',logohumaita,'',tec254,'',logoprincesadosolimoes,'',tec268,'',logoportovelhoro,'',tec118,'',logosaoraimundoam,'',tec128,'',logoriobrancoac,'',tec122,''];
  let Centr_Cal_A8=[logocostarica,'',tec53,'',logobrasiliense,'',tec34,'',logogama,'',tec154,'',logocuiaba,'',tec165,'',logooperarioms,'',tec77,'',logomixto,'',tec95,'',logouniaorondonopolis,'',tec279,'',logorealbrasilia,'',tec269,''];
  let Centr_Cal_B8=[logoceilandia,'',tec51,'',logoaguianegra,'',tec31,'',logocomercialms,'',tec300,'',logoceov,'',tec299,'',logoluverdense,'',tec152,'',logodombosco,'',tec303,'',logonovamutum,'',tec318,'',logoluziania,'',tec315,''];
  let Goian_Cal_A8=[logoanapolis,'',tec243,'',logoanapolina,'',tec36,'',logoatleticogo,'',tec106,'',logoaparecidense,'',tec171,'',logogoias,'',tec185,'',logocrac,'',tec54,'',logovilanova,'',tec193,'',logoipora,'',tec256,''];
  let Goian_Cal_B8=[logogoiania,'',tec305,'',logogoianesia,'',tec304,'',logogremioanapolis,'',tec444,'',logogoiatuba,'',tec306,'',logoitumbiara,'',tec313,'',logoinhumas,'',tec311,'',logomorrinhos,'',tec317,'',logojataiense,'',tec314,''];
  let Perna_Cal_A8=[logonautico,'',tec190,'',logocentral,'',tec298,'',logoporto,'',tec320,'',logopetrolina,'',tec266,'',logosantacruz,'',tec27,'',logoretro,'',tec271,'',logosalgueiro,'',tec321,'',logosport,'',tec78,''];
  let Perna_Cal_B8=[logobelojardim,'',tec295,'',logoafogados,'',tec293,'',logodecisaosertania,'',tec302,'',logocaruarucity,'',tec296,'',logomaguary,'',tec316,'',logoibis,'',tec443,'',logovitoriadastabocas,'',tec324,'',logoveracruz,'',tec323,''];
  let Ceare_Cal_A8=[logoceara,'',tec116,'',logoatleticocearense,'',tec245,'',logofloresta,'',tec162,'',logoferroviario,'',tec68,'',logoguaranydesobral,'',tec307,'',logofortaleza,'',tec172,'',logoiguatu,'',tec255,'',logoicasa,'',tec310,''];
  let Ceare_Cal_B8=[logocaucaia,'',tec297,'',logobarbalha,'',tec294,'',logohorizonte,'',tec308,'',logocrato,'',tec301,'',logomaracanace,'',tec262,'',logoitapipoca,'',tec312,'',logotiradentesce,'',tec322,'',logopacajus,'',tec319,''];
  let Baian_Cal_A8=[logobahia,'',tec84,'',logoatleticoba,'',tec325,'',logovitoria,'',tec26,'',logobarcelonaba,'',tec327,'',logojacobina,'',tec328,'',logoitabuna,'',tec258,'',logojuazeirense,'',tec260,'',logojacuipense,'',tec259,''];
  let Baian_Cal_B8=[logocolocoloba,'',tec331,'',logobahiadefeira,'',tec330,'',logograpiuna,'',tec333,'',logofluminensedefeira,'',tec332,'',logojuazeiro,'',tec334,'',logojequie,'',tec329,'',logovitoriadaconquista,'',tec336,'',logounirb,'',tec335,''];
  



 let Pauli_A9=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Pauli_B9=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Cario_A9=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Cario_B9=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Gauch_A9=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Gauch_B9=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Minei_A9=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Minei_B9=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Paran_A9=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Paran_B9=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Catar_A9=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Catar_B9=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Norde_A9=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Norde_B9=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Norti_A9=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Norti_B9=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Centr_A9=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Centr_B9=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Goian_A9=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Goian_B9=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Perna_A9=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Perna_B9=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Ceare_A9=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Ceare_B9=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Baian_A9=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Baian_B9=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];


  let Pauli_Cal_A9=[logoportuguesa,'',tec83,'',logobotafogosp,'',tec32,'',logocorinthians,'',tec170,'',logobragantino,'',tec168,'',logonovorizontino,'',tec60,'',logoguarani,'',tec223,'',logosaopaulo,'',tec124,'',logopontepreta,'',tec233,''];
  let Pauli_Cal_B9=[logosantos,'',tec155,'',logoferroviariasp,'',tec180,'',logoituano,'',tec96,'',logointernacionalsp,'',tec93,'',logopalmeiras,'',tec67,'',logomirassol,'',tec280,'',logosaobernardo,'',tec158,'',logopaulista,'',tec108,''];
  let Cario_Cal_A9=[logovasco,'',tec167,'',logoamericarj,'',tec131,'',logobotafogo,'',tec7,'',logoaudax,'',tec39,'',logofluminense,'',tec72,'',logoflamengo,'',tec41,'',logovoltaredonda,'',tec148,'',logoportuguesarj,'',tec119,''];
  let Cario_Cal_B9=[logoresende,'',tec120,'',logobangu,'',tec225,'',logocabofriense,'',tec46,'',logobonsucesso,'',tec40,'',logoolaria,'',tec103,'',logomadureira,'',tec104,'',logosaocristovao,'',tec132,'',logonovaiguacu,'',tec100,''];
  let Gauch_Cal_A9=[logosaojosers,'',tec159,'',logobrasilrs,'',tec129,'',logogremio,'',tec73,'',logocaxias,'',tec14,'',logojuventude,'',tec169,'',logointernacional,'',tec92,'',logoypirangars,'',tec200,'',logopelotas,'',tec164,''];
  let Gauch_Cal_B9=[logonovohamburgo,'',tec101,'',logoavenida,'',tec246,'',logoesportivo,'',tec61,'',logobage,'',tec21,'',logoguaranyrs,'',tec80,'',logogloria,'',tec445,'',logosaoluizrs,'',tec134,'',logolajeadense,'',tec85,''];
  let Minei_Cal_A9=[logotombense,'',tec178,'',logoamericamg,'',tec102,'',logocaldense,'',tec138,'',logoatleticomg,'',tec17,'',logodemocrata,'',tec58,'',logocruzeiro,'',tec55,'',logovillanovamg,'',tec440,'',logoipatinga,'',tec81,''];
  let Minei_Cal_B9=[logourt,'',tec145,'',logoathletic,'',tec166,'',logopatrocinense,'',tec113,'',logoboaesporte,'',tec28,'',logotupi,'',tec141,'',logosocial,'',tec136,'',logopousoalegre,'',tec173,'',logouberlandia,'',tec146,''];
  let Paran_Cal_A9=[logooperariopr,'',tec105,'',logoathletico,'',tec87,'',logocoritiba,'',tec175,'',logocianorte,'',tec52,'',logolondrina,'',tec231,'',logofccascavel,'',tec63,'',logoparana,'',tec127,'',logomaringa,'',tec264,''];
  let Paran_Cal_B9=[logosaojoseense,'',tec285,'',logoandraus,'',tec281,'',logofozdoiguacu,'',tec75,'',logoazuriz,'',tec282,'',logogalomaringa,'',tec284,'',logopsts,'',tec283,'',logotoledo,'',tec286,'',logogremiomaringa,'',tec287,''];
  let Catar_Cal_A9=[logohercilioluz,'',tec253,'',logoavai,'',tec163,'',logobrusque,'',tec45,'',logobarrasc,'',tec247,'',logocriciuma,'',tec183,'',logochapecoense,'',tec1,'',logojoinville,'',tec82,'',logofigueirense,'',tec4,''];
  let Catar_Cal_B9=[logometropolitano,'',tec91,'',logocaravaggio,'',tec292,'',logoguaranidepalhoca,'',tec290,'',logoconcordia,'',tec250,'',logojuventusdejaragua,'',tec291,'',logointerdelajes,'',tec151,'',logonacao,'',tec289,'',logomarciliodias,'',tec288,''];
  let Norde_Cal_A9=[logosampaiocorrea,'',tec65,'',logoamericarn,'',tec223,'',logobotafogopb,'',tec44,'',logoabc,'',tec326,'',logocsa,'',tec56,'',logocrb,'',tec228,'',logotreze,'',tec237,'',logoriverpi,'',tec130,''];
  let Norde_Cal_B9=[logoserra,'',tec276,'',logoasa,'',tec244,'',logocse,'',tec251,'',logoconfianca,'',tec161,'',logomotoclub,'',tec265,'',logofluminensepi,'',tec252,'',logosousa,'',tec277,'',logosergipe,'',tec275,''];
  let Norti_Cal_A9=[logotocantinopolis,'',tec278,'',logoamazonas,'',tec33,'',logonacionalam,'',tec112,'',logomanaus,'',tec86,'',logoremo,'',tec144,'',logopaysandu,'',tec150,'',logotremap,'',tec139,'',logosaoraimundorr,'',tec274,''];
  let Norti_Cal_B9=[logoriobrancoac,'',tec122,'',logoaguiademaraba,'',tec242,'',logohumaita,'',tec254,'',logocapital,'',tec249,'',logoportovelhoro,'',tec118,'',logonauticorr,'',tec98,'',logosaoraimundoam,'',tec128,'',logoprincesadosolimoes,'',tec268,''];
  let Centr_Cal_A9=[logorealbrasilia,'',tec269,'',logobrasiliense,'',tec34,'',logocuiaba,'',tec165,'',logocostarica,'',tec53,'',logomixto,'',tec95,'',logogama,'',tec154,'',logouniaorondonopolis,'',tec279,'',logooperarioms,'',tec77,''];
  let Centr_Cal_B9=[logoluziania,'',tec315,'',logoaguianegra,'',tec31,'',logoceov,'',tec299,'',logoceilandia,'',tec51,'',logodombosco,'',tec303,'',logocomercialms,'',tec300,'',logonovamutum,'',tec318,'',logoluverdense,'',tec152,''];
  let Goian_Cal_A9=[logoipora,'',tec256,'',logoanapolina,'',tec36,'',logoaparecidense,'',tec171,'',logoanapolis,'',tec243,'',logocrac,'',tec54,'',logoatleticogo,'',tec106,'',logovilanova,'',tec193,'',logogoias,'',tec185,''];
  let Goian_Cal_B9=[logojataiense,'',tec314,'',logogoianesia,'',tec304,'',logogoiatuba,'',tec306,'',logogoiania,'',tec305,'',logoinhumas,'',tec311,'',logogremioanapolis,'',tec444,'',logomorrinhos,'',tec317,'',logoitumbiara,'',tec313,''];
  let Perna_Cal_A9=[logosport,'',tec78,'',logocentral,'',tec298,'',logopetrolina,'',tec266,'',logonautico,'',tec190,'',logoretro,'',tec271,'',logoporto,'',tec320,'',logosalgueiro,'',tec321,'',logosantacruz,'',tec27,''];
  let Perna_Cal_B9=[logoveracruz,'',tec323,'',logoafogados,'',tec293,'',logocaruarucity,'',tec296,'',logobelojardim,'',tec295,'',logoibis,'',tec443,'',logodecisaosertania,'',tec302,'',logovitoriadastabocas,'',tec324,'',logomaguary,'',tec316,''];
  let Ceare_Cal_A9=[logoicasa,'',tec310,'',logoatleticocearense,'',tec245,'',logoferroviario,'',tec68,'',logoceara,'',tec116,'',logofortaleza,'',tec172,'',logofloresta,'',tec162,'',logoiguatu,'',tec255,'',logoguaranydesobral,'',tec307,''];
  let Ceare_Cal_B9=[logopacajus,'',tec319,'',logobarbalha,'',tec294,'',logocrato,'',tec301,'',logocaucaia,'',tec297,'',logoitapipoca,'',tec312,'',logohorizonte,'',tec308,'',logotiradentesce,'',tec322,'',logomaracanace,'',tec262,''];
  let Baian_Cal_A9=[logojacuipense,'',tec259,'',logoatleticoba,'',tec325,'',logobarcelonaba,'',tec327,'',logobahia,'',tec84,'',logoitabuna,'',tec258,'',logovitoria,'',tec26,'',logojuazeirense,'',tec260,'',logojacobina,'',tec328,''];
  let Baian_Cal_B9=[logounirb,'',tec335,'',logobahiadefeira,'',tec330,'',logofluminensedefeira,'',tec332,'',logocolocoloba,'',tec331,'',logojequie,'',tec329,'',logograpiuna,'',tec333,'',logovitoriadaconquista,'',tec336,'',logojuazeiro,'',tec334,''];
  

 let Pauli_A10=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Pauli_B10=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Cario_A10=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Cario_B10=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Gauch_A10=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Gauch_B10=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Minei_A10=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Minei_B10=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Paran_A10=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Paran_B10=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Catar_A10=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Catar_B10=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Norde_A10=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Norde_B10=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Norti_A10=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Norti_B10=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Centr_A10=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Centr_B10=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Goian_A10=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Goian_B10=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Perna_A10=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Perna_B10=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Ceare_A10=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Ceare_B10=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Baian_A10=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Baian_B10=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];


  let Pauli_Cal_A10=[logoportuguesa,'',tec83,'',logocorinthians,'',tec170,'',logobragantino,'',tec168,'',logonovorizontino,'',tec60,'',logoguarani,'',tec36,'',logopontepreta,'',tec233,'',logosaopaulo,'',tec124,'',logobotafogosp,'',tec32,''];
  let Pauli_Cal_B10=[logosantos,'',tec155,'',logoituano,'',tec96,'',logointernacionalsp,'',tec93,'',logopalmeiras,'',tec67,'',logomirassol,'',tec280,'',logopaulista,'',tec108,'',logosaobernardo,'',tec158,'',logoferroviariasp,'',tec180,''];
  let Cario_Cal_A10=[logovasco,'',tec167,'',logobotafogo,'',tec7,'',logoaudax,'',tec39,'',logofluminense,'',tec72,'',logoflamengo,'',tec41,'',logoportuguesarj,'',tec119,'',logovoltaredonda,'',tec148,'',logoamericarj,'',tec131,''];
  let Cario_Cal_B10=[logoresende,'',tec120,'',logocabofriense,'',tec46,'',logobonsucesso,'',tec40,'',logoolaria,'',tec103,'',logomadureira,'',tec104,'',logonovaiguacu,'',tec100,'',logosaocristovao,'',tec132,'',logobangu,'',tec225,''];
  let Gauch_Cal_A10=[logosaojosers,'',tec159,'',logogremio,'',tec73,'',logocaxias,'',tec14,'',logojuventude,'',tec169,'',logointernacional,'',tec92,'',logopelotas,'',tec164,'',logoypirangars,'',tec200,'',logobrasilrs,'',tec129,''];
  let Gauch_Cal_B10=[logonovohamburgo,'',tec101,'',logoesportivo,'',tec61,'',logobage,'',tec21,'',logoguaranyrs,'',tec80,'',logogloria,'',tec445,'',logolajeadense,'',tec85,'',logosaoluizrs,'',tec134,'',logoavenida,'',tec246,''];
  let Minei_Cal_A10=[logotombense,'',tec178,'',logocaldense,'',tec138,'',logoatleticomg,'',tec17,'',logodemocrata,'',tec58,'',logocruzeiro,'',tec55,'',logoipatinga,'',tec81,'',logovillanovamg,'',tec440,'',logoamericamg,'',tec102,''];
  let Minei_Cal_B10=[logourt,'',tec145,'',logopatrocinense,'',tec113,'',logoboaesporte,'',tec28,'',logotupi,'',tec141,'',logosocial,'',tec136,'',logouberlandia,'',tec146,'',logopousoalegre,'',tec173,'',logoathletic,'',tec166,''];
  let Paran_Cal_A10=[logooperariopr,'',tec105,'',logocoritiba,'',tec175,'',logocianorte,'',tec52,'',logolondrina,'',tec231,'',logofccascavel,'',tec63,'',logomaringa,'',tec264,'',logoparana,'',tec127,'',logoathletico,'',tec87,''];
  let Paran_Cal_B10=[logosaojoseense,'',tec285,'',logofozdoiguacu,'',tec75,'',logoazuriz,'',tec282,'',logogalomaringa,'',tec284,'',logopsts,'',tec283,'',logogremiomaringa,'',tec287,'',logotoledo,'',tec286,'',logoandraus,'',tec281,''];
  let Catar_Cal_A10=[logohercilioluz,'',tec253,'',logobrusque,'',tec45,'',logobarrasc,'',tec247,'',logocriciuma,'',tec183,'',logochapecoense,'',tec1,'',logofigueirense,'',tec4,'',logojoinville,'',tec82,'',logoavai,'',tec163,''];
  let Catar_Cal_B10=[logometropolitano,'',tec91,'',logoguaranidepalhoca,'',tec290,'',logoconcordia,'',tec250,'',logojuventusdejaragua,'',tec291,'',logointerdelajes,'',tec151,'',logomarciliodias,'',tec288,'',logonacao,'',tec289,'',logocaravaggio,'',tec292,''];
  let Norde_Cal_A10=[logosampaiocorrea,'',tec65,'',logobotafogopb,'',tec44,'',logoabc,'',tec326,'',logocsa,'',tec56,'',logocrb,'',tec228,'',logoriverpi,'',tec130,'',logotreze,'',tec237,'',logoamericarn,'',tec223,''];
  let Norde_Cal_B10=[logoserra,'',tec276,'',logocse,'',tec251,'',logoconfianca,'',tec161,'',logomotoclub,'',tec265,'',logofluminensepi,'',tec252,'',logosergipe,'',tec275,'',logosousa,'',tec277,'',logoasa,'',tec244,''];
  let Norti_Cal_A10=[logotocantinopolis,'',tec278,'',logonacionalam,'',tec112,'',logomanaus,'',tec86,'',logoremo,'',tec144,'',logopaysandu,'',tec150,'',logosaoraimundorr,'',tec274,'',logotremap,'',tec139,'',logoamazonas,'',tec33,''];
  let Norti_Cal_B10=[logoriobrancoac,'',tec122,'',logohumaita,'',tec254,'',logocapital,'',tec249,'',logoportovelhoro,'',tec118,'',logonauticorr,'',tec98,'',logoprincesadosolimoes,'',tec268,'',logosaoraimundoam,'',tec128,'',logoaguiademaraba,'',tec242,''];
  let Centr_Cal_A10=[logorealbrasilia,'',tec269,'',logocuiaba,'',tec165,'',logocostarica,'',tec53,'',logomixto,'',tec95,'',logogama,'',tec154,'',logooperarioms,'',tec77,'',logouniaorondonopolis,'',tec279,'',logobrasiliense,'',tec34,''];
  let Centr_Cal_B10=[logoluziania,'',tec315,'',logoceov,'',tec299,'',logoceilandia,'',tec51,'',logodombosco,'',tec303,'',logocomercialms,'',tec300,'',logoluverdense,'',tec152,'',logonovamutum,'',tec318,'',logoaguianegra,'',tec31,''];
  let Goian_Cal_A10=[logoipora,'',tec256,'',logoaparecidense,'',tec171,'',logoanapolis,'',tec243,'',logocrac,'',tec54,'',logoatleticogo,'',tec106,'',logogoias,'',tec185,'',logovilanova,'',tec193,'',logoanapolina,'',tec36,''];
  let Goian_Cal_B10=[logojataiense,'',tec314,'',logogoiatuba,'',tec306,'',logogoiania,'',tec305,'',logoinhumas,'',tec311,'',logogremioanapolis,'',tec444,'',logoitumbiara,'',tec313,'',logomorrinhos,'',tec317,'',logogoianesia,'',tec304,''];
  let Perna_Cal_A10=[logosport,'',tec78,'',logopetrolina,'',tec266,'',logonautico,'',tec190,'',logoretro,'',tec271,'',logoporto,'',tec320,'',logosantacruz,'',tec27,'',logosalgueiro,'',tec321,'',logocentral,'',tec298,''];
  let Perna_Cal_B10=[logoveracruz,'',tec323,'',logocaruarucity,'',tec296,'',logobelojardim,'',tec295,'',logoibis,'',tec443,'',logodecisaosertania,'',tec302,'',logomaguary,'',tec316,'',logovitoriadastabocas,'',tec324,'',logoafogados,'',tec293,''];
  let Ceare_Cal_A10=[logoicasa,'',tec310,'',logoferroviario,'',tec68,'',logoceara,'',tec116,'',logofortaleza,'',tec172,'',logofloresta,'',tec162,'',logoguaranydesobral,'',tec307,'',logoiguatu,'',tec255,'',logoatleticocearense,'',tec245,''];
  let Ceare_Cal_B10=[logopacajus,'',tec319,'',logocrato,'',tec301,'',logocaucaia,'',tec297,'',logoitapipoca,'',tec312,'',logohorizonte,'',tec308,'',logomaracanace,'',tec262,'',logotiradentesce,'',tec322,'',logobarbalha,'',tec294,''];
  let Baian_Cal_A10=[logojacuipense,'',tec259,'',logobarcelonaba,'',tec327,'',logobahia,'',tec84,'',logoitabuna,'',tec258,'',logovitoria,'',tec26,'',logojacobina,'',tec328,'',logojuazeirense,'',tec260,'',logoatleticoba,'',tec325,''];
  let Baian_Cal_B10=[logounirb,'',tec335,'',logofluminensedefeira,'',tec332,'',logocolocoloba,'',tec331,'',logojequie,'',tec329,'',logograpiuna,'',tec333,'',logojuazeiro,'',tec334,'',logovitoriadaconquista,'',tec336,'',logobahiadefeira,'',tec330,''];
  

  

 let Pauli_A11=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Pauli_B11=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Cario_A11=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Cario_B11=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Gauch_A11=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Gauch_B11=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Minei_A11=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Minei_B11=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Paran_A11=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Paran_B11=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Catar_A11=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Catar_B11=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Norde_A11=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Norde_B11=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Norti_A11=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Norti_B11=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Centr_A11=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Centr_B11=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Goian_A11=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Goian_B11=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Perna_A11=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Perna_B11=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Ceare_A11=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Ceare_B11=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Baian_A11=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Baian_B11=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];






  let Pauli_Cal_A11=[logonovorizontino,'',tec60,'',logoportuguesa,'',tec83,'',logocorinthians,'',tec170,'',logobotafogosp,'',tec32,'',logopontepreta,'',tec233,'',logobragantino,'',tec168,'',logoguarani,'',tec243,'',logosaopaulo,'',tec124,''];
  let Pauli_Cal_B11=[logopalmeiras,'',tec67,'',logosantos,'',tec155,'',logoituano,'',tec96,'',logoferroviariasp,'',tec180,'',logopaulista,'',tec108,'',logointernacionalsp,'',tec93,'',logomirassol,'',tec280,'',logosaobernardo,'',tec158,''];
  let Cario_Cal_A11=[logofluminense,'',tec72,'',logovasco,'',tec167,'',logobotafogo,'',tec7,'',logoamericarj,'',tec131,'',logoportuguesarj,'',tec119,'',logoaudax,'',tec39,'',logoflamengo,'',tec41,'',logovoltaredonda,'',tec148,''];
  let Cario_Cal_B11=[logoolaria,'',tec103,'',logoresende,'',tec120,'',logocabofriense,'',tec46,'',logobangu,'',tec225,'',logonovaiguacu,'',tec100,'',logobonsucesso,'',tec40,'',logomadureira,'',tec104,'',logosaocristovao,'',tec132,''];
  let Gauch_Cal_A11=[logojuventude,'',tec169,'',logosaojosers,'',tec159,'',logogremio,'',tec73,'',logobrasilrs,'',tec129,'',logopelotas,'',tec164,'',logocaxias,'',tec14,'',logointernacional,'',tec92,'',logoypirangars,'',tec200,''];
  let Gauch_Cal_B11=[logoguaranyrs,'',tec80,'',logonovohamburgo,'',tec101,'',logoesportivo,'',tec61,'',logoavenida,'',tec246,'',logolajeadense,'',tec85,'',logobage,'',tec21,'',logogloria,'',tec445,'',logosaoluizrs,'',tec134,''];
  let Minei_Cal_A11=[logodemocrata,'',tec58,'',logotombense,'',tec178,'',logocaldense,'',tec138,'',logoamericamg,'',tec102,'',logoipatinga,'',tec81,'',logoatleticomg,'',tec17,'',logocruzeiro,'',tec55,'',logovillanovamg,'',tec440,''];
  let Minei_Cal_B11=[logotupi,'',tec141,'',logourt,'',tec145,'',logopatrocinense,'',tec113,'',logoathletic,'',tec166,'',logouberlandia,'',tec146,'',logoboaesporte,'',tec28,'',logosocial,'',tec136,'',logopousoalegre,'',tec173,''];
  let Paran_Cal_A11=[logolondrina,'',tec231,'',logooperariopr,'',tec105,'',logocoritiba,'',tec175,'',logoathletico,'',tec87,'',logomaringa,'',tec264,'',logocianorte,'',tec52,'',logofccascavel,'',tec63,'',logoparana,'',tec127,''];
  let Paran_Cal_B11=[logogalomaringa,'',tec284,'',logosaojoseense,'',tec285,'',logofozdoiguacu,'',tec75,'',logoandraus,'',tec281,'',logogremiomaringa,'',tec287,'',logoazuriz,'',tec282,'',logopsts,'',tec283,'',logotoledo,'',tec286,''];
  let Catar_Cal_A11=[logocriciuma,'',tec183,'',logohercilioluz,'',tec253,'',logobrusque,'',tec45,'',logoavai,'',tec163,'',logofigueirense,'',tec4,'',logobarrasc,'',tec247,'',logochapecoense,'',tec1,'',logojoinville,'',tec82,''];
  let Catar_Cal_B11=[logojuventusdejaragua,'',tec291,'',logometropolitano,'',tec91,'',logoguaranidepalhoca,'',tec290,'',logocaravaggio,'',tec292,'',logomarciliodias,'',tec288,'',logoconcordia,'',tec250,'',logointerdelajes,'',tec151,'',logonacao,'',tec289,''];
  let Norde_Cal_A11=[logocsa,'',tec56,'',logosampaiocorrea,'',tec65,'',logobotafogopb,'',tec44,'',logoamericarn,'',tec223,'',logoriverpi,'',tec130,'',logoabc,'',tec326,'',logocrb,'',tec228,'',logotreze,'',tec237,''];
  let Norde_Cal_B11=[logomotoclub,'',tec265,'',logoserra,'',tec276,'',logocse,'',tec251,'',logoasa,'',tec244,'',logosergipe,'',tec275,'',logoconfianca,'',tec161,'',logofluminensepi,'',tec252,'',logosousa,'',tec277,''];
  let Norti_Cal_A11=[logoremo,'',tec144,'',logotocantinopolis,'',tec278,'',logonacionalam,'',tec112,'',logoamazonas,'',tec33,'',logosaoraimundorr,'',tec274,'',logomanaus,'',tec86,'',logopaysandu,'',tec150,'',logotremap,'',tec139,''];
  let Norti_Cal_B11=[logoportovelhoro,'',tec118,'',logoriobrancoac,'',tec122,'',logohumaita,'',tec254,'',logoaguiademaraba,'',tec242,'',logoprincesadosolimoes,'',tec268,'',logocapital,'',tec249,'',logonauticorr,'',tec98,'',logosaoraimundoam,'',tec128,''];
  let Centr_Cal_A11=[logomixto,'',tec95,'',logorealbrasilia,'',tec269,'',logocuiaba,'',tec165,'',logobrasiliense,'',tec34,'',logooperarioms,'',tec77,'',logocostarica,'',tec53,'',logogama,'',tec154,'',logouniaorondonopolis,'',tec279,''];
  let Centr_Cal_B11=[logodombosco,'',tec303,'',logoluziania,'',tec315,'',logoceov,'',tec299,'',logoaguianegra,'',tec31,'',logoluverdense,'',tec152,'',logoceilandia,'',tec51,'',logocomercialms,'',tec300,'',logonovamutum,'',tec318,''];
  let Goian_Cal_A11=[logocrac,'',tec54,'',logoipora,'',tec256,'',logoaparecidense,'',tec171,'',logoanapolina,'',tec36,'',logogoias,'',tec185,'',logoanapolis,'',tec243,'',logoatleticogo,'',tec106,'',logovilanova,'',tec193,''];
  let Goian_Cal_B11=[logoinhumas,'',tec311,'',logojataiense,'',tec314,'',logogoiatuba,'',tec306,'',logogoianesia,'',tec304,'',logoitumbiara,'',tec313,'',logogoiania,'',tec305,'',logogremioanapolis,'',tec444,'',logomorrinhos,'',tec317,''];
  let Perna_Cal_A11=[logoretro,'',tec271,'',logosport,'',tec78,'',logopetrolina,'',tec266,'',logocentral,'',tec298,'',logosantacruz,'',tec27,'',logonautico,'',tec190,'',logoporto,'',tec320,'',logosalgueiro,'',tec321,''];
  let Perna_Cal_B11=[logoibis,'',tec443,'',logoveracruz,'',tec323,'',logocaruarucity,'',tec296,'',logoafogados,'',tec293,'',logomaguary,'',tec316,'',logobelojardim,'',tec295,'',logodecisaosertania,'',tec302,'',logovitoriadastabocas,'',tec324,''];
  let Ceare_Cal_A11=[logofortaleza,'',tec172,'',logoicasa,'',tec310,'',logoferroviario,'',tec68,'',logoatleticocearense,'',tec245,'',logoguaranydesobral,'',tec307,'',logoceara,'',tec116,'',logofloresta,'',tec162,'',logoiguatu,'',tec255,''];
  let Ceare_Cal_B11=[logoitapipoca,'',tec312,'',logopacajus,'',tec319,'',logocrato,'',tec301,'',logobarbalha,'',tec294,'',logomaracanace,'',tec262,'',logocaucaia,'',tec297,'',logohorizonte,'',tec308,'',logotiradentesce,'',tec322,''];
  let Baian_Cal_A11=[logoitabuna,'',tec258,'',logojacuipense,'',tec259,'',logobarcelonaba,'',tec327,'',logoatleticoba,'',tec325,'',logojacobina,'',tec328,'',logobahia,'',tec84,'',logovitoria,'',tec26,'',logojuazeirense,'',tec260,''];
  let Baian_Cal_B11=[logojequie,'',tec329,'',logounirb,'',tec335,'',logofluminensedefeira,'',tec332,'',logobahiadefeira,'',tec330,'',logojuazeiro,'',tec334,'',logocolocoloba,'',tec331,'',logograpiuna,'',tec333,'',logovitoriadaconquista,'',tec336,''];
  


 let Pauli_A12=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Pauli_B12=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Cario_A12=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Cario_B12=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Gauch_A12=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Gauch_B12=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Minei_A12=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Minei_B12=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Paran_A12=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Paran_B12=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Catar_A12=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Catar_B12=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Norde_A12=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Norde_B12=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Norti_A12=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Norti_B12=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Centr_A12=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Centr_B12=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Goian_A12=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Goian_B12=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Perna_A12=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Perna_B12=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Ceare_A12=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Ceare_B12=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Baian_A12=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Baian_B12=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];


  let Pauli_Cal_A12=[logoportuguesa,'',tec83,'',logopontepreta,'',tec233,'',logobotafogosp,'',tec32,'',logonovorizontino,'',tec60,'',logobragantino,'',tec168,'',logoguarani,'',tec281,'',logosaopaulo,'',tec124,'',logocorinthians,'',tec170,''];
  let Pauli_Cal_B12=[logosantos,'',tec155,'',logopaulista,'',tec108,'',logoferroviariasp,'',tec180,'',logopalmeiras,'',tec67,'',logointernacionalsp,'',tec93,'',logomirassol,'',tec280,'',logosaobernardo,'',tec158,'',logoituano,'',tec96,''];
  let Cario_Cal_A12=[logovasco,'',tec167,'',logoportuguesarj,'',tec119,'',logoamericarj,'',tec131,'',logofluminense,'',tec72,'',logoaudax,'',tec39,'',logoflamengo,'',tec41,'',logovoltaredonda,'',tec148,'',logobotafogo,'',tec7,''];
  let Cario_Cal_B12=[logoresende,'',tec120,'',logonovaiguacu,'',tec100,'',logobangu,'',tec225,'',logoolaria,'',tec103,'',logobonsucesso,'',tec40,'',logomadureira,'',tec104,'',logosaocristovao,'',tec132,'',logocabofriense,'',tec46,''];
  let Gauch_Cal_A12=[logosaojosers,'',tec159,'',logopelotas,'',tec164,'',logobrasilrs,'',tec129,'',logojuventude,'',tec169,'',logocaxias,'',tec14,'',logointernacional,'',tec92,'',logoypirangars,'',tec200,'',logogremio,'',tec73,''];
  let Gauch_Cal_B12=[logonovohamburgo,'',tec101,'',logolajeadense,'',tec85,'',logoavenida,'',tec246,'',logoguaranyrs,'',tec80,'',logobage,'',tec21,'',logogloria,'',tec445,'',logosaoluizrs,'',tec134,'',logoesportivo,'',tec61,''];
  let Minei_Cal_A12=[logotombense,'',tec178,'',logoipatinga,'',tec81,'',logoamericamg,'',tec102,'',logodemocrata,'',tec58,'',logoatleticomg,'',tec17,'',logocruzeiro,'',tec55,'',logovillanovamg,'',tec440,'',logocaldense,'',tec138,''];
  let Minei_Cal_B12=[logourt,'',tec145,'',logouberlandia,'',tec146,'',logoathletic,'',tec166,'',logotupi,'',tec141,'',logoboaesporte,'',tec28,'',logosocial,'',tec136,'',logopousoalegre,'',tec173,'',logopatrocinense,'',tec113,''];
  let Paran_Cal_A12=[logooperariopr,'',tec105,'',logomaringa,'',tec264,'',logoathletico,'',tec87,'',logolondrina,'',tec231,'',logocianorte,'',tec52,'',logofccascavel,'',tec63,'',logoparana,'',tec127,'',logocoritiba,'',tec175,''];
  let Paran_Cal_B12=[logosaojoseense,'',tec285,'',logogremiomaringa,'',tec287,'',logoandraus,'',tec281,'',logogalomaringa,'',tec284,'',logoazuriz,'',tec282,'',logopsts,'',tec283,'',logotoledo,'',tec286,'',logofozdoiguacu,'',tec75,''];
  let Catar_Cal_A12=[logohercilioluz,'',tec253,'',logofigueirense,'',tec4,'',logoavai,'',tec163,'',logocriciuma,'',tec183,'',logobarrasc,'',tec247,'',logochapecoense,'',tec1,'',logojoinville,'',tec82,'',logobrusque,'',tec45,''];
  let Catar_Cal_B12=[logometropolitano,'',tec91,'',logomarciliodias,'',tec288,'',logocaravaggio,'',tec292,'',logojuventusdejaragua,'',tec291,'',logoconcordia,'',tec250,'',logointerdelajes,'',tec151,'',logonacao,'',tec289,'',logoguaranidepalhoca,'',tec290,''];
  let Norde_Cal_A12=[logosampaiocorrea,'',tec65,'',logoriverpi,'',tec130,'',logoamericarn,'',tec223,'',logocsa,'',tec56,'',logoabc,'',tec326,'',logocrb,'',tec228,'',logotreze,'',tec237,'',logobotafogopb,'',tec44,''];
  let Norde_Cal_B12=[logoserra,'',tec276,'',logosergipe,'',tec275,'',logoasa,'',tec244,'',logomotoclub,'',tec265,'',logoconfianca,'',tec161,'',logofluminensepi,'',tec252,'',logosousa,'',tec277,'',logocse,'',tec251,''];
  let Norti_Cal_A12=[logotocantinopolis,'',tec278,'',logosaoraimundorr,'',tec274,'',logoamazonas,'',tec33,'',logoremo,'',tec144,'',logomanaus,'',tec86,'',logopaysandu,'',tec150,'',logotremap,'',tec139,'',logonacionalam,'',tec112,''];
  let Norti_Cal_B12=[logoriobrancoac,'',tec122,'',logoprincesadosolimoes,'',tec268,'',logoaguiademaraba,'',tec242,'',logoportovelhoro,'',tec118,'',logocapital,'',tec249,'',logonauticorr,'',tec98,'',logosaoraimundoam,'',tec128,'',logohumaita,'',tec254,''];
  let Centr_Cal_A12=[logorealbrasilia,'',tec269,'',logooperarioms,'',tec77,'',logobrasiliense,'',tec34,'',logomixto,'',tec95,'',logocostarica,'',tec53,'',logogama,'',tec154,'',logouniaorondonopolis,'',tec279,'',logocuiaba,'',tec165,''];
  let Centr_Cal_B12=[logoluziania,'',tec315,'',logoluverdense,'',tec152,'',logoaguianegra,'',tec31,'',logodombosco,'',tec303,'',logoceilandia,'',tec51,'',logocomercialms,'',tec300,'',logonovamutum,'',tec318,'',logoceov,'',tec299,''];
  let Goian_Cal_A12=[logoipora,'',tec256,'',logogoias,'',tec185,'',logoanapolina,'',tec36,'',logocrac,'',tec54,'',logoanapolis,'',tec243,'',logoatleticogo,'',tec106,'',logovilanova,'',tec193,'',logoaparecidense,'',tec171,''];
  let Goian_Cal_B12=[logojataiense,'',tec314,'',logoitumbiara,'',tec313,'',logogoianesia,'',tec304,'',logoinhumas,'',tec311,'',logogoiania,'',tec305,'',logogremioanapolis,'',tec444,'',logomorrinhos,'',tec317,'',logogoiatuba,'',tec306,''];
  let Perna_Cal_A12=[logosport,'',tec78,'',logosantacruz,'',tec27,'',logocentral,'',tec298,'',logoretro,'',tec271,'',logonautico,'',tec190,'',logoporto,'',tec320,'',logosalgueiro,'',tec321,'',logopetrolina,'',tec266,''];
  let Perna_Cal_B12=[logoveracruz,'',tec323,'',logomaguary,'',tec316,'',logoafogados,'',tec293,'',logoibis,'',tec443,'',logobelojardim,'',tec295,'',logodecisaosertania,'',tec302,'',logovitoriadastabocas,'',tec324,'',logocaruarucity,'',tec296,''];
  let Ceare_Cal_A12=[logoicasa,'',tec310,'',logoguaranydesobral,'',tec307,'',logoatleticocearense,'',tec245,'',logofortaleza,'',tec172,'',logoceara,'',tec116,'',logofloresta,'',tec162,'',logoiguatu,'',tec255,'',logoferroviario,'',tec68,''];
  let Ceare_Cal_B12=[logopacajus,'',tec319,'',logomaracanace,'',tec262,'',logobarbalha,'',tec294,'',logoitapipoca,'',tec312,'',logocaucaia,'',tec297,'',logohorizonte,'',tec308,'',logotiradentesce,'',tec322,'',logocrato,'',tec301,''];
  let Baian_Cal_A12=[logojacuipense,'',tec259,'',logojacobina,'',tec328,'',logoatleticoba,'',tec325,'',logoitabuna,'',tec258,'',logobahia,'',tec84,'',logovitoria,'',tec26,'',logojuazeirense,'',tec260,'',logobarcelonaba,'',tec327,''];
  let Baian_Cal_B12=[logounirb,'',tec335,'',logojuazeiro,'',tec334,'',logobahiadefeira,'',tec330,'',logojequie,'',tec329,'',logocolocoloba,'',tec331,'',logograpiuna,'',tec333,'',logovitoriadaconquista,'',tec336,'',logofluminensedefeira,'',tec332,''];
  

 let Pauli_A13=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Pauli_B13=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Cario_A13=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Cario_B13=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Gauch_A13=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Gauch_B13=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Minei_A13=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Minei_B13=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Paran_A13=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Paran_B13=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Catar_A13=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Catar_B13=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Norde_A13=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Norde_B13=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Norti_A13=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Norti_B13=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Centr_A13=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Centr_B13=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Goian_A13=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Goian_B13=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Perna_A13=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Perna_B13=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Ceare_A13=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Ceare_B13=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Baian_A13=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Baian_B13=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];


  let Pauli_Cal_A13=[logoguarani,'',tec171,'',logoportuguesa,'',tec83,'',logopontepreta,'',tec233,'',logobotafogosp,'',tec32,'',logonovorizontino,'',tec60,'',logocorinthians,'',tec170,'',logobragantino,'',tec168,'',logosaopaulo,'',tec124,''];
  let Pauli_Cal_B13=[logomirassol,'',tec280,'',logosantos,'',tec155,'',logopaulista,'',tec108,'',logoferroviariasp,'',tec180,'',logopalmeiras,'',tec67,'',logoituano,'',tec96,'',logointernacionalsp,'',tec93,'',logosaobernardo,'',tec158,''];
  let Cario_Cal_A13=[logoflamengo,'',tec41,'',logovasco,'',tec167,'',logoportuguesarj,'',tec119,'',logoamericarj,'',tec131,'',logofluminense,'',tec72,'',logobotafogo,'',tec7,'',logoaudax,'',tec39,'',logovoltaredonda,'',tec148,''];
  let Cario_Cal_B13=[logomadureira,'',tec104,'',logoresende,'',tec120,'',logonovaiguacu,'',tec100,'',logobangu,'',tec225,'',logoolaria,'',tec103,'',logocabofriense,'',tec46,'',logobonsucesso,'',tec40,'',logosaocristovao,'',tec132,''];
  let Gauch_Cal_A13=[logointernacional,'',tec92,'',logosaojosers,'',tec159,'',logopelotas,'',tec164,'',logobrasilrs,'',tec129,'',logojuventude,'',tec169,'',logogremio,'',tec73,'',logocaxias,'',tec14,'',logoypirangars,'',tec200,''];
  let Gauch_Cal_B13=[logogloria,'',tec445,'',logonovohamburgo,'',tec101,'',logolajeadense,'',tec85,'',logoavenida,'',tec246,'',logoguaranyrs,'',tec80,'',logoesportivo,'',tec61,'',logobage,'',tec21,'',logosaoluizrs,'',tec134,''];
  let Minei_Cal_A13=[logocruzeiro,'',tec55,'',logotombense,'',tec178,'',logoipatinga,'',tec81,'',logoamericamg,'',tec102,'',logodemocrata,'',tec58,'',logocaldense,'',tec138,'',logoatleticomg,'',tec17,'',logovillanovamg,'',tec440,''];
  let Minei_Cal_B13=[logosocial,'',tec136,'',logourt,'',tec145,'',logouberlandia,'',tec146,'',logoathletic,'',tec166,'',logotupi,'',tec141,'',logopatrocinense,'',tec113,'',logoboaesporte,'',tec28,'',logopousoalegre,'',tec173,''];
  let Paran_Cal_A13=[logofccascavel,'',tec63,'',logooperariopr,'',tec105,'',logomaringa,'',tec264,'',logoathletico,'',tec87,'',logolondrina,'',tec231,'',logocoritiba,'',tec175,'',logocianorte,'',tec52,'',logoparana,'',tec127,''];
  let Paran_Cal_B13=[logopsts,'',tec283,'',logosaojoseense,'',tec285,'',logogremiomaringa,'',tec287,'',logoandraus,'',tec281,'',logogalomaringa,'',tec284,'',logofozdoiguacu,'',tec75,'',logoazuriz,'',tec282,'',logotoledo,'',tec286,''];
  let Catar_Cal_A13=[logochapecoense,'',tec1,'',logohercilioluz,'',tec253,'',logofigueirense,'',tec4,'',logoavai,'',tec163,'',logocriciuma,'',tec183,'',logobrusque,'',tec45,'',logobarrasc,'',tec247,'',logojoinville,'',tec82,''];
  let Catar_Cal_B13=[logointerdelajes,'',tec151,'',logometropolitano,'',tec91,'',logomarciliodias,'',tec288,'',logocaravaggio,'',tec292,'',logojuventusdejaragua,'',tec291,'',logoguaranidepalhoca,'',tec290,'',logoconcordia,'',tec250,'',logonacao,'',tec289,''];
  let Norde_Cal_A13=[logocrb,'',tec228,'',logosampaiocorrea,'',tec65,'',logoriverpi,'',tec130,'',logoamericarn,'',tec223,'',logocsa,'',tec56,'',logobotafogopb,'',tec44,'',logoabc,'',tec326,'',logotreze,'',tec237,''];
  let Norde_Cal_B13=[logofluminensepi,'',tec252,'',logoserra,'',tec276,'',logosergipe,'',tec275,'',logoasa,'',tec244,'',logomotoclub,'',tec265,'',logocse,'',tec251,'',logoconfianca,'',tec161,'',logosousa,'',tec277,''];
  let Norti_Cal_A13=[logopaysandu,'',tec150,'',logotocantinopolis,'',tec278,'',logosaoraimundorr,'',tec274,'',logoamazonas,'',tec33,'',logoremo,'',tec144,'',logonacionalam,'',tec112,'',logomanaus,'',tec86,'',logotremap,'',tec139,''];
  let Norti_Cal_B13=[logonauticorr,'',tec98,'',logoriobrancoac,'',tec122,'',logoprincesadosolimoes,'',tec268,'',logoaguiademaraba,'',tec242,'',logoportovelhoro,'',tec118,'',logohumaita,'',tec254,'',logocapital,'',tec249,'',logosaoraimundoam,'',tec128,''];
  let Centr_Cal_A13=[logogama,'',tec154,'',logorealbrasilia,'',tec269,'',logooperarioms,'',tec77,'',logobrasiliense,'',tec34,'',logomixto,'',tec95,'',logocuiaba,'',tec165,'',logocostarica,'',tec53,'',logouniaorondonopolis,'',tec279,''];
  let Centr_Cal_B13=[logocomercialms,'',tec300,'',logoluziania,'',tec315,'',logoluverdense,'',tec152,'',logoaguianegra,'',tec31,'',logodombosco,'',tec303,'',logoceov,'',tec299,'',logoceilandia,'',tec51,'',logonovamutum,'',tec318,''];
  let Goian_Cal_A13=[logoatleticogo,'',tec106,'',logoipora,'',tec256,'',logogoias,'',tec185,'',logoanapolina,'',tec36,'',logocrac,'',tec54,'',logoaparecidense,'',tec171,'',logoanapolis,'',tec243,'',logovilanova,'',tec193,''];
  let Goian_Cal_B13=[logogremioanapolis,'',tec444,'',logojataiense,'',tec314,'',logoitumbiara,'',tec313,'',logogoianesia,'',tec304,'',logoinhumas,'',tec311,'',logogoiatuba,'',tec306,'',logogoiania,'',tec305,'',logomorrinhos,'',tec317,''];
  let Perna_Cal_A13=[logoporto,'',tec320,'',logosport,'',tec78,'',logosantacruz,'',tec27,'',logocentral,'',tec298,'',logoretro,'',tec271,'',logopetrolina,'',tec266,'',logonautico,'',tec190,'',logosalgueiro,'',tec321,''];
  let Perna_Cal_B13=[logodecisaosertania,'',tec302,'',logoveracruz,'',tec323,'',logomaguary,'',tec316,'',logoafogados,'',tec293,'',logoibis,'',tec443,'',logocaruarucity,'',tec296,'',logobelojardim,'',tec295,'',logovitoriadastabocas,'',tec324,''];
  let Ceare_Cal_A13=[logofloresta,'',tec162,'',logoicasa,'',tec310,'',logoguaranydesobral,'',tec307,'',logoatleticocearense,'',tec245,'',logofortaleza,'',tec172,'',logoferroviario,'',tec68,'',logoceara,'',tec116,'',logoiguatu,'',tec255,''];
  let Ceare_Cal_B13=[logohorizonte,'',tec308,'',logopacajus,'',tec319,'',logomaracanace,'',tec262,'',logobarbalha,'',tec294,'',logoitapipoca,'',tec312,'',logocrato,'',tec301,'',logocaucaia,'',tec297,'',logotiradentesce,'',tec322,''];
  let Baian_Cal_A13=[logovitoria,'',tec26,'',logojacuipense,'',tec259,'',logojacobina,'',tec328,'',logoatleticoba,'',tec325,'',logoitabuna,'',tec258,'',logobarcelonaba,'',tec327,'',logobahia,'',tec84,'',logojuazeirense,'',tec260,''];
  let Baian_Cal_B13=[logograpiuna,'',tec333,'',logounirb,'',tec335,'',logojuazeiro,'',tec334,'',logobahiadefeira,'',tec330,'',logojequie,'',tec329,'',logofluminensedefeira,'',tec332,'',logocolocoloba,'',tec331,'',logovitoriadaconquista,'',tec336,''];
  

 let Pauli_A14=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Pauli_B14=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Cario_A14=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Cario_B14=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Gauch_A14=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Gauch_B14=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Minei_A14=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Minei_B14=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Paran_A14=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Paran_B14=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Catar_A14=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Catar_B14=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Norde_A14=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Norde_B14=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Norti_A14=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Norti_B14=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Centr_A14=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Centr_B14=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Goian_A14=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Goian_B14=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Perna_A14=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Perna_B14=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Ceare_A14=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Ceare_B14=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Baian_A14=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  let Baian_B14=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];

  let Pauli_Cal_A14=[logoportuguesa,'',tec83,'',logobragantino,'',tec168,'',logobotafogosp,'',tec32,'',logoguarani,'',tec293,'',logocorinthians,'',tec170,'',logopontepreta,'',tec233,'',logosaopaulo,'',tec124,'',logonovorizontino,'',tec60,''];
  let Pauli_Cal_B14=[logosantos,'',tec155,'',logointernacionalsp,'',tec93,'',logoferroviariasp,'',tec180,'',logomirassol,'',tec280,'',logoituano,'',tec96,'',logopaulista,'',tec108,'',logosaobernardo,'',tec158,'',logopalmeiras,'',tec67,''];
  let Cario_Cal_A14=[logovasco,'',tec167,'',logoaudax,'',tec39,'',logoamericarj,'',tec131,'',logoflamengo,'',tec41,'',logobotafogo,'',tec7,'',logoportuguesarj,'',tec119,'',logovoltaredonda,'',tec148,'',logofluminense,'',tec72,''];
  let Cario_Cal_B14=[logoresende,'',tec120,'',logobonsucesso,'',tec40,'',logobangu,'',tec225,'',logomadureira,'',tec104,'',logocabofriense,'',tec46,'',logonovaiguacu,'',tec100,'',logosaocristovao,'',tec132,'',logoolaria,'',tec103,''];
  let Gauch_Cal_A14=[logosaojosers,'',tec159,'',logocaxias,'',tec14,'',logobrasilrs,'',tec129,'',logointernacional,'',tec92,'',logogremio,'',tec73,'',logopelotas,'',tec164,'',logoypirangars,'',tec200,'',logojuventude,'',tec169,''];
  let Gauch_Cal_B14=[logonovohamburgo,'',tec101,'',logobage,'',tec21,'',logoavenida,'',tec246,'',logogloria,'',tec445,'',logoesportivo,'',tec61,'',logolajeadense,'',tec85,'',logosaoluizrs,'',tec134,'',logoguaranyrs,'',tec80,''];
  let Minei_Cal_A14=[logotombense,'',tec178,'',logoatleticomg,'',tec17,'',logoamericamg,'',tec102,'',logocruzeiro,'',tec55,'',logocaldense,'',tec138,'',logoipatinga,'',tec81,'',logovillanovamg,'',tec440,'',logodemocrata,'',tec58,''];
  let Minei_Cal_B14=[logourt,'',tec145,'',logoboaesporte,'',tec28,'',logoathletic,'',tec166,'',logosocial,'',tec136,'',logopatrocinense,'',tec113,'',logouberlandia,'',tec146,'',logopousoalegre,'',tec173,'',logotupi,'',tec141,''];
  let Paran_Cal_A14=[logooperariopr,'',tec105,'',logocianorte,'',tec52,'',logoathletico,'',tec87,'',logofccascavel,'',tec63,'',logocoritiba,'',tec175,'',logomaringa,'',tec264,'',logoparana,'',tec127,'',logolondrina,'',tec231,''];
  let Paran_Cal_B14=[logosaojoseense,'',tec285,'',logoazuriz,'',tec282,'',logoandraus,'',tec281,'',logopsts,'',tec283,'',logofozdoiguacu,'',tec75,'',logogremiomaringa,'',tec287,'',logotoledo,'',tec286,'',logogalomaringa,'',tec284,''];
  let Catar_Cal_A14=[logohercilioluz,'',tec253,'',logobarrasc,'',tec247,'',logoavai,'',tec163,'',logochapecoense,'',tec1,'',logobrusque,'',tec45,'',logofigueirense,'',tec4,'',logojoinville,'',tec82,'',logocriciuma,'',tec183,''];
  let Catar_Cal_B14=[logometropolitano,'',tec91,'',logoconcordia,'',tec250,'',logocaravaggio,'',tec292,'',logointerdelajes,'',tec151,'',logoguaranidepalhoca,'',tec290,'',logomarciliodias,'',tec288,'',logonacao,'',tec289,'',logojuventusdejaragua,'',tec291,''];
  let Norde_Cal_A14=[logosampaiocorrea,'',tec65,'',logoabc,'',tec326,'',logoamericarn,'',tec223,'',logocrb,'',tec228,'',logobotafogopb,'',tec44,'',logoriverpi,'',tec130,'',logotreze,'',tec237,'',logocsa,'',tec56,''];
  let Norde_Cal_B14=[logoserra,'',tec276,'',logoconfianca,'',tec161,'',logoasa,'',tec244,'',logofluminensepi,'',tec252,'',logocse,'',tec251,'',logosergipe,'',tec275,'',logosousa,'',tec277,'',logomotoclub,'',tec265,''];
  let Norti_Cal_A14=[logotocantinopolis,'',tec278,'',logomanaus,'',tec86,'',logoamazonas,'',tec33,'',logopaysandu,'',tec150,'',logonacionalam,'',tec112,'',logosaoraimundorr,'',tec274,'',logotremap,'',tec139,'',logoremo,'',tec144,''];
  let Norti_Cal_B14=[logoriobrancoac,'',tec122,'',logocapital,'',tec249,'',logoaguiademaraba,'',tec242,'',logonauticorr,'',tec98,'',logohumaita,'',tec254,'',logoprincesadosolimoes,'',tec268,'',logosaoraimundoam,'',tec128,'',logoportovelhoro,'',tec118,''];
  let Centr_Cal_A14=[logorealbrasilia,'',tec269,'',logocostarica,'',tec53,'',logobrasiliense,'',tec34,'',logogama,'',tec154,'',logocuiaba,'',tec165,'',logooperarioms,'',tec77,'',logouniaorondonopolis,'',tec279,'',logomixto,'',tec95,''];
  let Centr_Cal_B14=[logoluziania,'',tec315,'',logoceilandia,'',tec51,'',logoaguianegra,'',tec31,'',logocomercialms,'',tec300,'',logoceov,'',tec299,'',logoluverdense,'',tec152,'',logonovamutum,'',tec318,'',logodombosco,'',tec303,''];
  let Goian_Cal_A14=[logoipora,'',tec256,'',logoanapolis,'',tec243,'',logoanapolina,'',tec36,'',logoatleticogo,'',tec106,'',logoaparecidense,'',tec171,'',logogoias,'',tec185,'',logovilanova,'',tec193,'',logocrac,'',tec54,''];
  let Goian_Cal_B14=[logojataiense,'',tec314,'',logogoiania,'',tec305,'',logogoianesia,'',tec304,'',logogremioanapolis,'',tec444,'',logogoiatuba,'',tec306,'',logoitumbiara,'',tec313,'',logomorrinhos,'',tec317,'',logoinhumas,'',tec311,''];
  let Perna_Cal_A14=[logosport,'',tec78,'',logonautico,'',tec190,'',logocentral,'',tec298,'',logoporto,'',tec320,'',logopetrolina,'',tec266,'',logosantacruz,'',tec27,'',logosalgueiro,'',tec321,'',logoretro,'',tec271,''];
  let Perna_Cal_B14=[logoveracruz,'',tec323,'',logobelojardim,'',tec295,'',logoafogados,'',tec293,'',logodecisaosertania,'',tec302,'',logocaruarucity,'',tec296,'',logomaguary,'',tec316,'',logovitoriadastabocas,'',tec324,'',logoibis,'',tec443,''];
  let Ceare_Cal_A14=[logoicasa,'',tec310,'',logoceara,'',tec116,'',logoatleticocearense,'',tec245,'',logofloresta,'',tec162,'',logoferroviario,'',tec68,'',logoguaranydesobral,'',tec307,'',logoiguatu,'',tec255,'',logofortaleza,'',tec172,''];
  let Ceare_Cal_B14=[logopacajus,'',tec319,'',logocaucaia,'',tec297,'',logobarbalha,'',tec294,'',logohorizonte,'',tec308,'',logocrato,'',tec301,'',logomaracanace,'',tec262,'',logotiradentesce,'',tec322,'',logoitapipoca,'',tec312,''];
  let Baian_Cal_A14=[logojacuipense,'',tec259,'',logobahia,'',tec84,'',logoatleticoba,'',tec325,'',logovitoria,'',tec26,'',logobarcelonaba,'',tec327,'',logojacobina,'',tec328,'',logojuazeirense,'',tec260,'',logoitabuna,'',tec258,''];
  let Baian_Cal_B14=[logounirb,'',tec335,'',logocolocoloba,'',tec331,'',logobahiadefeira,'',tec330,'',logograpiuna,'',tec333,'',logofluminensedefeira,'',tec332,'',logojuazeiro,'',tec334,'',logovitoriadaconquista,'',tec336,'',logojequie,'',tec329,''];
  










  let Pauli_Cal_A=['',Pauli_Cal_A1,Pauli_Cal_A2,Pauli_Cal_A3,Pauli_Cal_A4,Pauli_Cal_A5,Pauli_Cal_A6,Pauli_Cal_A7,Pauli_Cal_A8,Pauli_Cal_A9,Pauli_Cal_A10,Pauli_Cal_A11,Pauli_Cal_A12,Pauli_Cal_A13,Pauli_Cal_A14];
  let Pauli_Cal_B=['',Pauli_Cal_B1,Pauli_Cal_B2,Pauli_Cal_B3,Pauli_Cal_B4,Pauli_Cal_B5,Pauli_Cal_B6,Pauli_Cal_B7,Pauli_Cal_B8,Pauli_Cal_B9,Pauli_Cal_B10,Pauli_Cal_B11,Pauli_Cal_B12,Pauli_Cal_B13,Pauli_Cal_B14];
  let Pauli_A = ['',Pauli_A1,Pauli_A2,Pauli_A3,Pauli_A4,Pauli_A5,Pauli_A6,Pauli_A7,Pauli_A8,Pauli_A9,Pauli_A10,Pauli_A11,Pauli_A12,Pauli_A13,Pauli_A14];
  let Pauli_B = ['',Pauli_B1,Pauli_B2,Pauli_B3,Pauli_B4,Pauli_B5,Pauli_B6,Pauli_B7,Pauli_B8,Pauli_B9,Pauli_B10,Pauli_B11,Pauli_B12,Pauli_B13,Pauli_B14];

  let Cario_Cal_A=['',Cario_Cal_A1,Cario_Cal_A2,Cario_Cal_A3,Cario_Cal_A4,Cario_Cal_A5,Cario_Cal_A6,Cario_Cal_A7,Cario_Cal_A8,Cario_Cal_A9,Cario_Cal_A10,Cario_Cal_A11,Cario_Cal_A12,Cario_Cal_A13,Cario_Cal_A14];
  let Cario_Cal_B=['',Cario_Cal_B1,Cario_Cal_B2,Cario_Cal_B3,Cario_Cal_B4,Cario_Cal_B5,Cario_Cal_B6,Cario_Cal_B7,Cario_Cal_B8,Cario_Cal_B9,Cario_Cal_B10,Cario_Cal_B11,Cario_Cal_B12,Cario_Cal_B13,Cario_Cal_B14];
let Cario_A = ['',Cario_A1,Cario_A2,Cario_A3,Cario_A4,Cario_A5,Cario_A6,Cario_A7,Cario_A8,Cario_A9,Cario_A10,Cario_A11,Cario_A12,Cario_A13,Cario_A14];
  let Cario_B = ['',Cario_B1,Cario_B2,Cario_B3,Cario_B4,Cario_B5,Cario_B6,Cario_B7,Cario_B8,Cario_B9,Cario_B10,Cario_B11,Cario_B12,Cario_B13,Cario_B14];

   let Gauch_Cal_A=['',Gauch_Cal_A1,Gauch_Cal_A2,Gauch_Cal_A3,Gauch_Cal_A4,Gauch_Cal_A5,Gauch_Cal_A6,Gauch_Cal_A7,Gauch_Cal_A8,Gauch_Cal_A9,Gauch_Cal_A10,Gauch_Cal_A11,Gauch_Cal_A12,Gauch_Cal_A13,Gauch_Cal_A14];
  let Gauch_Cal_B=['',Gauch_Cal_B1,Gauch_Cal_B2,Gauch_Cal_B3,Gauch_Cal_B4,Gauch_Cal_B5,Gauch_Cal_B6,Gauch_Cal_B7,Gauch_Cal_B8,Gauch_Cal_B9,Gauch_Cal_B10,Gauch_Cal_B11,Gauch_Cal_B12,Gauch_Cal_B13,Gauch_Cal_B14];
let Gauch_A = ['',Gauch_A1,Gauch_A2,Gauch_A3,Gauch_A4,Gauch_A5,Gauch_A6,Gauch_A7,Gauch_A8,Gauch_A9,Gauch_A10,Gauch_A11,Gauch_A12,Gauch_A13,Gauch_A14];
  let Gauch_B = ['',Gauch_B1,Gauch_B2,Gauch_B3,Gauch_B4,Gauch_B5,Gauch_B6,Gauch_B7,Gauch_B8,Gauch_B9,Gauch_B10,Gauch_B11,Gauch_B12,Gauch_B13,Gauch_B14];

   let Minei_Cal_A=['',Minei_Cal_A1,Minei_Cal_A2,Minei_Cal_A3,Minei_Cal_A4,Minei_Cal_A5,Minei_Cal_A6,Minei_Cal_A7,Minei_Cal_A8,Minei_Cal_A9,Minei_Cal_A10,Minei_Cal_A11,Minei_Cal_A12,Minei_Cal_A13,Minei_Cal_A14];
  let Minei_Cal_B=['',Minei_Cal_B1,Minei_Cal_B2,Minei_Cal_B3,Minei_Cal_B4,Minei_Cal_B5,Minei_Cal_B6,Minei_Cal_B7,Minei_Cal_B8,Minei_Cal_B9,Minei_Cal_B10,Minei_Cal_B11,Minei_Cal_B12,Minei_Cal_B13,Minei_Cal_B14];
let Minei_A = ['',Minei_A1,Minei_A2,Minei_A3,Minei_A4,Minei_A5,Minei_A6,Minei_A7,Minei_A8,Minei_A9,Minei_A10,Minei_A11,Minei_A12,Minei_A13,Minei_A14];
  let Minei_B = ['',Minei_B1,Minei_B2,Minei_B3,Minei_B4,Minei_B5,Minei_B6,Minei_B7,Minei_B8,Minei_B9,Minei_B10,Minei_B11,Minei_B12,Minei_B13,Minei_B14];

   let Paran_Cal_A=['',Paran_Cal_A1,Paran_Cal_A2,Paran_Cal_A3,Paran_Cal_A4,Paran_Cal_A5,Paran_Cal_A6,Paran_Cal_A7,Paran_Cal_A8,Paran_Cal_A9,Paran_Cal_A10,Paran_Cal_A11,Paran_Cal_A12,Paran_Cal_A13,Paran_Cal_A14];
  let Paran_Cal_B=['',Paran_Cal_B1,Paran_Cal_B2,Paran_Cal_B3,Paran_Cal_B4,Paran_Cal_B5,Paran_Cal_B6,Paran_Cal_B7,Paran_Cal_B8,Paran_Cal_B9,Paran_Cal_B10,Paran_Cal_B11,Paran_Cal_B12,Paran_Cal_B13,Paran_Cal_B14];
let Paran_A = ['',Paran_A1,Paran_A2,Paran_A3,Paran_A4,Paran_A5,Paran_A6,Paran_A7,Paran_A8,Paran_A9,Paran_A10,Paran_A11,Paran_A12,Paran_A13,Paran_A14];
  let Paran_B = ['',Paran_B1,Paran_B2,Paran_B3,Paran_B4,Paran_B5,Paran_B6,Paran_B7,Paran_B8,Paran_B9,Paran_B10,Paran_B11,Paran_B12,Paran_B13,Paran_B14];

   let Catar_Cal_A=['',Catar_Cal_A1,Catar_Cal_A2,Catar_Cal_A3,Catar_Cal_A4,Catar_Cal_A5,Catar_Cal_A6,Catar_Cal_A7,Catar_Cal_A8,Catar_Cal_A9,Catar_Cal_A10,Catar_Cal_A11,Catar_Cal_A12,Catar_Cal_A13,Catar_Cal_A14];
  let Catar_Cal_B=['',Catar_Cal_B1,Catar_Cal_B2,Catar_Cal_B3,Catar_Cal_B4,Catar_Cal_B5,Catar_Cal_B6,Catar_Cal_B7,Catar_Cal_B8,Catar_Cal_B9,Catar_Cal_B10,Catar_Cal_B11,Catar_Cal_B12,Catar_Cal_B13,Catar_Cal_B14];
let Catar_A = ['',Catar_A1,Catar_A2,Catar_A3,Catar_A4,Catar_A5,Catar_A6,Catar_A7,Catar_A8,Catar_A9,Catar_A10,Catar_A11,Catar_A12,Catar_A13,Catar_A14];
  let Catar_B = ['',Catar_B1,Catar_B2,Catar_B3,Catar_B4,Catar_B5,Catar_B6,Catar_B7,Catar_B8,Catar_B9,Catar_B10,Catar_B11,Catar_B12,Catar_B13,Catar_B14];

   let Norde_Cal_A=['',Norde_Cal_A1,Norde_Cal_A2,Norde_Cal_A3,Norde_Cal_A4,Norde_Cal_A5,Norde_Cal_A6,Norde_Cal_A7,Norde_Cal_A8,Norde_Cal_A9,Norde_Cal_A10,Norde_Cal_A11,Norde_Cal_A12,Norde_Cal_A13,Norde_Cal_A14];
  let Norde_Cal_B=['',Norde_Cal_B1,Norde_Cal_B2,Norde_Cal_B3,Norde_Cal_B4,Norde_Cal_B5,Norde_Cal_B6,Norde_Cal_B7,Norde_Cal_B8,Norde_Cal_B9,Norde_Cal_B10,Norde_Cal_B11,Norde_Cal_B12,Norde_Cal_B13,Norde_Cal_B14];
let Norde_A = ['',Norde_A1,Norde_A2,Norde_A3,Norde_A4,Norde_A5,Norde_A6,Norde_A7,Norde_A8,Norde_A9,Norde_A10,Norde_A11,Norde_A12,Norde_A13,Norde_A14];
  let Norde_B = ['',Norde_B1,Norde_B2,Norde_B3,Norde_B4,Norde_B5,Norde_B6,Norde_B7,Norde_B8,Norde_B9,Norde_B10,Norde_B11,Norde_B12,Norde_B13,Norde_B14];

   let Norti_Cal_A=['',Norti_Cal_A1,Norti_Cal_A2,Norti_Cal_A3,Norti_Cal_A4,Norti_Cal_A5,Norti_Cal_A6,Norti_Cal_A7,Norti_Cal_A8,Norti_Cal_A9,Norti_Cal_A10,Norti_Cal_A11,Norti_Cal_A12,Norti_Cal_A13,Norti_Cal_A14];
  let Norti_Cal_B=['',Norti_Cal_B1,Norti_Cal_B2,Norti_Cal_B3,Norti_Cal_B4,Norti_Cal_B5,Norti_Cal_B6,Norti_Cal_B7,Norti_Cal_B8,Norti_Cal_B9,Norti_Cal_B10,Norti_Cal_B11,Norti_Cal_B12,Norti_Cal_B13,Norti_Cal_B14];
let Norti_A = ['',Norti_A1,Norti_A2,Norti_A3,Norti_A4,Norti_A5,Norti_A6,Norti_A7,Norti_A8,Norti_A9,Norti_A10,Norti_A11,Norti_A12,Norti_A13,Norti_A14];
  let Norti_B = ['',Norti_B1,Norti_B2,Norti_B3,Norti_B4,Norti_B5,Norti_B6,Norti_B7,Norti_B8,Norti_B9,Norti_B10,Norti_B11,Norti_B12,Norti_B13,Norti_B14];

   let Centr_Cal_A=['',Centr_Cal_A1,Centr_Cal_A2,Centr_Cal_A3,Centr_Cal_A4,Centr_Cal_A5,Centr_Cal_A6,Centr_Cal_A7,Centr_Cal_A8,Centr_Cal_A9,Centr_Cal_A10,Centr_Cal_A11,Centr_Cal_A12,Centr_Cal_A13,Centr_Cal_A14];
  let Centr_Cal_B=['',Centr_Cal_B1,Centr_Cal_B2,Centr_Cal_B3,Centr_Cal_B4,Centr_Cal_B5,Centr_Cal_B6,Centr_Cal_B7,Centr_Cal_B8,Centr_Cal_B9,Centr_Cal_B10,Centr_Cal_B11,Centr_Cal_B12,Centr_Cal_B13,Centr_Cal_B14];
let Centr_A = ['',Centr_A1,Centr_A2,Centr_A3,Centr_A4,Centr_A5,Centr_A6,Centr_A7,Centr_A8,Centr_A9,Centr_A10,Centr_A11,Centr_A12,Centr_A13,Centr_A14];
  let Centr_B = ['',Centr_B1,Centr_B2,Centr_B3,Centr_B4,Centr_B5,Centr_B6,Centr_B7,Centr_B8,Centr_B9,Centr_B10,Centr_B11,Centr_B12,Centr_B13,Centr_B14];

   let Goian_Cal_A=['',Goian_Cal_A1,Goian_Cal_A2,Goian_Cal_A3,Goian_Cal_A4,Goian_Cal_A5,Goian_Cal_A6,Goian_Cal_A7,Goian_Cal_A8,Goian_Cal_A9,Goian_Cal_A10,Goian_Cal_A11,Goian_Cal_A12,Goian_Cal_A13,Goian_Cal_A14];
  let Goian_Cal_B=['',Goian_Cal_B1,Goian_Cal_B2,Goian_Cal_B3,Goian_Cal_B4,Goian_Cal_B5,Goian_Cal_B6,Goian_Cal_B7,Goian_Cal_B8,Goian_Cal_B9,Goian_Cal_B10,Goian_Cal_B11,Goian_Cal_B12,Goian_Cal_B13,Goian_Cal_B14];
let Goian_A = ['',Goian_A1,Goian_A2,Goian_A3,Goian_A4,Goian_A5,Goian_A6,Goian_A7,Goian_A8,Goian_A9,Goian_A10,Goian_A11,Goian_A12,Goian_A13,Goian_A14];
  let Goian_B = ['',Goian_B1,Goian_B2,Goian_B3,Goian_B4,Goian_B5,Goian_B6,Goian_B7,Goian_B8,Goian_B9,Goian_B10,Goian_B11,Goian_B12,Goian_B13,Goian_B14];

   let Perna_Cal_A=['',Perna_Cal_A1,Perna_Cal_A2,Perna_Cal_A3,Perna_Cal_A4,Perna_Cal_A5,Perna_Cal_A6,Perna_Cal_A7,Perna_Cal_A8,Perna_Cal_A9,Perna_Cal_A10,Perna_Cal_A11,Perna_Cal_A12,Perna_Cal_A13,Perna_Cal_A14];
  let Perna_Cal_B=['',Perna_Cal_B1,Perna_Cal_B2,Perna_Cal_B3,Perna_Cal_B4,Perna_Cal_B5,Perna_Cal_B6,Perna_Cal_B7,Perna_Cal_B8,Perna_Cal_B9,Perna_Cal_B10,Perna_Cal_B11,Perna_Cal_B12,Perna_Cal_B13,Perna_Cal_B14];
let Perna_A = ['',Perna_A1,Perna_A2,Perna_A3,Perna_A4,Perna_A5,Perna_A6,Perna_A7,Perna_A8,Perna_A9,Perna_A10,Perna_A11,Perna_A12,Perna_A13,Perna_A14];
  let Perna_B = ['',Perna_B1,Perna_B2,Perna_B3,Perna_B4,Perna_B5,Perna_B6,Perna_B7,Perna_B8,Perna_B9,Perna_B10,Perna_B11,Perna_B12,Perna_B13,Perna_B14];

   let Ceare_Cal_A=['',Ceare_Cal_A1,Ceare_Cal_A2,Ceare_Cal_A3,Ceare_Cal_A4,Ceare_Cal_A5,Ceare_Cal_A6,Ceare_Cal_A7,Ceare_Cal_A8,Ceare_Cal_A9,Ceare_Cal_A10,Ceare_Cal_A11,Ceare_Cal_A12,Ceare_Cal_A13,Ceare_Cal_A14];
  let Ceare_Cal_B=['',Ceare_Cal_B1,Ceare_Cal_B2,Ceare_Cal_B3,Ceare_Cal_B4,Ceare_Cal_B5,Ceare_Cal_B6,Ceare_Cal_B7,Ceare_Cal_B8,Ceare_Cal_B9,Ceare_Cal_B10,Ceare_Cal_B11,Ceare_Cal_B12,Ceare_Cal_B13,Ceare_Cal_B14];
let Ceare_A = ['',Ceare_A1,Ceare_A2,Ceare_A3,Ceare_A4,Ceare_A5,Ceare_A6,Ceare_A7,Ceare_A8,Ceare_A9,Ceare_A10,Ceare_A11,Ceare_A12,Ceare_A13,Ceare_A14];
  let Ceare_B = ['',Ceare_B1,Ceare_B2,Ceare_B3,Ceare_B4,Ceare_B5,Ceare_B6,Ceare_B7,Ceare_B8,Ceare_B9,Ceare_B10,Ceare_B11,Ceare_B12,Ceare_B13,Ceare_B14];

   let Baian_Cal_A=['',Baian_Cal_A1,Baian_Cal_A2,Baian_Cal_A3,Baian_Cal_A4,Baian_Cal_A5,Baian_Cal_A6,Baian_Cal_A7,Baian_Cal_A8,Baian_Cal_A9,Baian_Cal_A10,Baian_Cal_A11,Baian_Cal_A12,Baian_Cal_A13,Baian_Cal_A14];
  let Baian_Cal_B=['',Baian_Cal_B1,Baian_Cal_B2,Baian_Cal_B3,Baian_Cal_B4,Baian_Cal_B5,Baian_Cal_B6,Baian_Cal_B7,Baian_Cal_B8,Baian_Cal_B9,Baian_Cal_B10,Baian_Cal_B11,Baian_Cal_B12,Baian_Cal_B13,Baian_Cal_B14];
let Baian_A = ['',Baian_A1,Baian_A2,Baian_A3,Baian_A4,Baian_A5,Baian_A6,Baian_A7,Baian_A8,Baian_A9,Baian_A10,Baian_A11,Baian_A12,Baian_A13,Baian_A14];
  let Baian_B = ['',Baian_B1,Baian_B2,Baian_B3,Baian_B4,Baian_B5,Baian_B6,Baian_B7,Baian_B8,Baian_B9,Baian_B10,Baian_B11,Baian_B12,Baian_B13,Baian_B14];


  
  

  function EstadualEscolhido() {
    let PegaEstadual = document.querySelector('#NomeEstadual');
    let PegaRodada = document.querySelector('#NumRodada');

    let CampEscolhido = PegaEstadual.value;
    let RodEscolhida = parseInt(PegaRodada.value);


    if (CampEscolhido==='Pauli_A'){


      JogosDaRodada = Pauli_Cal_A[RodEscolhida];

    document.getElementById('logB1').innerHTML=Pauli_A[RodEscolhida][0];
    document.getElementById('tecB1').innerHTML=Pauli_A[RodEscolhida][2].nome;
    document.getElementById('clubB1').innerHTML=Pauli_A[RodEscolhida][1][0];
    document.getElementById('nlB1').innerHTML=Pauli_A[RodEscolhida][1][2];
    document.getElementById('varB1').innerHTML=Pauli_A[RodEscolhida][3];
    document.getElementById('objB1').innerHTML=Pauli_A[RodEscolhida][4];
    document.getElementById('ptB1').innerHTML=Pauli_A[RodEscolhida][5];
    document.getElementById('vitB1').innerHTML=Pauli_A[RodEscolhida][6];
    document.getElementById('empB1').innerHTML=Pauli_A[RodEscolhida][7];
    document.getElementById('derB1').innerHTML=Pauli_A[RodEscolhida][8];
    document.getElementById('gpB1').innerHTML=Pauli_A[RodEscolhida][9];
    document.getElementById('gcB1').innerHTML=Pauli_A[RodEscolhida][10];
    document.getElementById('sgB1').innerHTML=Pauli_A[RodEscolhida][11];
    document.getElementById('apB1').innerHTML=Pauli_A[RodEscolhida][12];
    document.getElementById('ultB1').innerHTML=Pauli_A[RodEscolhida][13];
    document.getElementById('penB1').innerHTML=Pauli_A[RodEscolhida][14];
    document.getElementById('antB1').innerHTML=Pauli_A[RodEscolhida][15];
    document.getElementById('qaB1').innerHTML=Pauli_A[RodEscolhida][16];
    document.getElementById('qiB1').innerHTML=Pauli_A[RodEscolhida][17];

    document.getElementById('logB2').innerHTML=Pauli_A[RodEscolhida][18];
    document.getElementById('tecB2').innerHTML=Pauli_A[RodEscolhida][20].nome;
    document.getElementById('clubB2').innerHTML=Pauli_A[RodEscolhida][19][0];
    document.getElementById('nlB2').innerHTML=Pauli_A[RodEscolhida][19][2];
    document.getElementById('varB2').innerHTML=Pauli_A[RodEscolhida][21];
    document.getElementById('objB2').innerHTML=Pauli_A[RodEscolhida][22];
    document.getElementById('ptB2').innerHTML=Pauli_A[RodEscolhida][23];
    document.getElementById('vitB2').innerHTML=Pauli_A[RodEscolhida][24];
    document.getElementById('empB2').innerHTML=Pauli_A[RodEscolhida][25];
    document.getElementById('derB2').innerHTML=Pauli_A[RodEscolhida][26];
    document.getElementById('gpB2').innerHTML=Pauli_A[RodEscolhida][27];
    document.getElementById('gcB2').innerHTML=Pauli_A[RodEscolhida][28];
    document.getElementById('sgB2').innerHTML=Pauli_A[RodEscolhida][29];
    document.getElementById('apB2').innerHTML=Pauli_A[RodEscolhida][30];
    document.getElementById('ultB2').innerHTML=Pauli_A[RodEscolhida][31];
    document.getElementById('penB2').innerHTML=Pauli_A[RodEscolhida][32];
    document.getElementById('antB2').innerHTML=Pauli_A[RodEscolhida][33];
    document.getElementById('qaB2').innerHTML=Pauli_A[RodEscolhida][34];
    document.getElementById('qiB2').innerHTML=Pauli_A[RodEscolhida][35];

    document.getElementById('logB3').innerHTML=Pauli_A[RodEscolhida][36];
    document.getElementById('tecB3').innerHTML=Pauli_A[RodEscolhida][38].nome;
    document.getElementById('clubB3').innerHTML=Pauli_A[RodEscolhida][37][0];
    document.getElementById('nlB3').innerHTML=Pauli_A[RodEscolhida][37][2];
    document.getElementById('varB3').innerHTML=Pauli_A[RodEscolhida][39];
    document.getElementById('objB3').innerHTML=Pauli_A[RodEscolhida][40];
    document.getElementById('ptB3').innerHTML=Pauli_A[RodEscolhida][41];
    document.getElementById('vitB3').innerHTML=Pauli_A[RodEscolhida][42];
    document.getElementById('empB3').innerHTML=Pauli_A[RodEscolhida][43];
    document.getElementById('derB3').innerHTML=Pauli_A[RodEscolhida][44];
    document.getElementById('gpB3').innerHTML=Pauli_A[RodEscolhida][45];
    document.getElementById('gcB3').innerHTML=Pauli_A[RodEscolhida][46];
    document.getElementById('sgB3').innerHTML=Pauli_A[RodEscolhida][47];
    document.getElementById('apB3').innerHTML=Pauli_A[RodEscolhida][48];
    document.getElementById('ultB3').innerHTML=Pauli_A[RodEscolhida][49];
    document.getElementById('penB3').innerHTML=Pauli_A[RodEscolhida][50];
    document.getElementById('antB3').innerHTML=Pauli_A[RodEscolhida][51];
    document.getElementById('qaB3').innerHTML=Pauli_A[RodEscolhida][52];
    document.getElementById('qiB3').innerHTML=Pauli_A[RodEscolhida][53];

    document.getElementById('logB4').innerHTML=Pauli_A[RodEscolhida][54];
    document.getElementById('tecB4').innerHTML=Pauli_A[RodEscolhida][56].nome;
    document.getElementById('clubB4').innerHTML=Pauli_A[RodEscolhida][55][0];
    document.getElementById('nlB4').innerHTML=Pauli_A[RodEscolhida][55][2];
    document.getElementById('varB4').innerHTML=Pauli_A[RodEscolhida][57];
    document.getElementById('objB4').innerHTML=Pauli_A[RodEscolhida][58];
    document.getElementById('ptB4').innerHTML=Pauli_A[RodEscolhida][59];
    document.getElementById('vitB4').innerHTML=Pauli_A[RodEscolhida][60];
    document.getElementById('empB4').innerHTML=Pauli_A[RodEscolhida][61];
    document.getElementById('derB4').innerHTML=Pauli_A[RodEscolhida][62];
    document.getElementById('gpB4').innerHTML=Pauli_A[RodEscolhida][63];
    document.getElementById('gcB4').innerHTML=Pauli_A[RodEscolhida][64];
    document.getElementById('sgB4').innerHTML=Pauli_A[RodEscolhida][65];
    document.getElementById('apB4').innerHTML=Pauli_A[RodEscolhida][66];
    document.getElementById('ultB4').innerHTML=Pauli_A[RodEscolhida][67];
    document.getElementById('penB4').innerHTML=Pauli_A[RodEscolhida][68];
    document.getElementById('antB4').innerHTML=Pauli_A[RodEscolhida][69];
    document.getElementById('qaB4').innerHTML=Pauli_A[RodEscolhida][70];
    document.getElementById('qiB4').innerHTML=Pauli_A[RodEscolhida][71];

    document.getElementById('logB5').innerHTML=Pauli_A[RodEscolhida][72];
    document.getElementById('tecB5').innerHTML=Pauli_A[RodEscolhida][74].nome;
    document.getElementById('clubB5').innerHTML=Pauli_A[RodEscolhida][73][0];
    document.getElementById('nlB5').innerHTML=Pauli_A[RodEscolhida][73][2];
    document.getElementById('varB5').innerHTML=Pauli_A[RodEscolhida][75];
    document.getElementById('objB5').innerHTML=Pauli_A[RodEscolhida][76];
    document.getElementById('ptB5').innerHTML=Pauli_A[RodEscolhida][77];
    document.getElementById('vitB5').innerHTML=Pauli_A[RodEscolhida][78];
    document.getElementById('empB5').innerHTML=Pauli_A[RodEscolhida][79];
    document.getElementById('derB5').innerHTML=Pauli_A[RodEscolhida][80];
    document.getElementById('gpB5').innerHTML=Pauli_A[RodEscolhida][81];
    document.getElementById('gcB5').innerHTML=Pauli_A[RodEscolhida][82];
    document.getElementById('sgB5').innerHTML=Pauli_A[RodEscolhida][83];
    document.getElementById('apB5').innerHTML=Pauli_A[RodEscolhida][84];
    document.getElementById('ultB5').innerHTML=Pauli_A[RodEscolhida][85];
    document.getElementById('penB5').innerHTML=Pauli_A[RodEscolhida][86];
    document.getElementById('antB5').innerHTML=Pauli_A[RodEscolhida][87];
    document.getElementById('qaB5').innerHTML=Pauli_A[RodEscolhida][88];
    document.getElementById('qiB5').innerHTML=Pauli_A[RodEscolhida][89];

    document.getElementById('logB6').innerHTML=Pauli_A[RodEscolhida][90];
    document.getElementById('tecB6').innerHTML=Pauli_A[RodEscolhida][92].nome;
    document.getElementById('clubB6').innerHTML=Pauli_A[RodEscolhida][91][0];
    document.getElementById('nlB6').innerHTML=Pauli_A[RodEscolhida][91][2];
    document.getElementById('varB6').innerHTML=Pauli_A[RodEscolhida][93];
    document.getElementById('objB6').innerHTML=Pauli_A[RodEscolhida][94];
    document.getElementById('ptB6').innerHTML=Pauli_A[RodEscolhida][95];
    document.getElementById('vitB6').innerHTML=Pauli_A[RodEscolhida][96];
    document.getElementById('empB6').innerHTML=Pauli_A[RodEscolhida][97];
    document.getElementById('derB6').innerHTML=Pauli_A[RodEscolhida][98];
    document.getElementById('gpB6').innerHTML=Pauli_A[RodEscolhida][99];
    document.getElementById('gcB6').innerHTML=Pauli_A[RodEscolhida][100];
    document.getElementById('sgB6').innerHTML=Pauli_A[RodEscolhida][101];
    document.getElementById('apB6').innerHTML=Pauli_A[RodEscolhida][102];
    document.getElementById('ultB6').innerHTML=Pauli_A[RodEscolhida][103];
    document.getElementById('penB6').innerHTML=Pauli_A[RodEscolhida][104];
    document.getElementById('antB6').innerHTML=Pauli_A[RodEscolhida][105];
    document.getElementById('qaB6').innerHTML=Pauli_A[RodEscolhida][106];
    document.getElementById('qiB6').innerHTML=Pauli_A[RodEscolhida][107];

    document.getElementById('logB7').innerHTML=Pauli_A[RodEscolhida][108];
    document.getElementById('tecB7').innerHTML=Pauli_A[RodEscolhida][110].nome;
    document.getElementById('clubB7').innerHTML=Pauli_A[RodEscolhida][109][0];
    document.getElementById('nlB7').innerHTML=Pauli_A[RodEscolhida][109][2];
    document.getElementById('varB7').innerHTML=Pauli_A[RodEscolhida][111];
    document.getElementById('objB7').innerHTML=Pauli_A[RodEscolhida][112];
    document.getElementById('ptB7').innerHTML=Pauli_A[RodEscolhida][113];
    document.getElementById('vitB7').innerHTML=Pauli_A[RodEscolhida][114];
    document.getElementById('empB7').innerHTML=Pauli_A[RodEscolhida][115];
    document.getElementById('derB7').innerHTML=Pauli_A[RodEscolhida][116];
    document.getElementById('gpB7').innerHTML=Pauli_A[RodEscolhida][117];
    document.getElementById('gcB7').innerHTML=Pauli_A[RodEscolhida][118];
    document.getElementById('sgB7').innerHTML=Pauli_A[RodEscolhida][119];
    document.getElementById('apB7').innerHTML=Pauli_A[RodEscolhida][120];
    document.getElementById('ultB7').innerHTML=Pauli_A[RodEscolhida][121];
    document.getElementById('penB7').innerHTML=Pauli_A[RodEscolhida][122];
    document.getElementById('antB7').innerHTML=Pauli_A[RodEscolhida][123];
    document.getElementById('qaB7').innerHTML=Pauli_A[RodEscolhida][124];
    document.getElementById('qiB7').innerHTML=Pauli_A[RodEscolhida][125];

    document.getElementById('logB8').innerHTML=Pauli_A[RodEscolhida][126];
    document.getElementById('tecB8').innerHTML=Pauli_A[RodEscolhida][128].nome;
    document.getElementById('clubB8').innerHTML=Pauli_A[RodEscolhida][127][0];
    document.getElementById('nlB8').innerHTML=Pauli_A[RodEscolhida][127][2];
    document.getElementById('varB8').innerHTML=Pauli_A[RodEscolhida][129];
    document.getElementById('objB8').innerHTML=Pauli_A[RodEscolhida][130];
    document.getElementById('ptB8').innerHTML=Pauli_A[RodEscolhida][131];
    document.getElementById('vitB8').innerHTML=Pauli_A[RodEscolhida][132];
    document.getElementById('empB8').innerHTML=Pauli_A[RodEscolhida][133];
    document.getElementById('derB8').innerHTML=Pauli_A[RodEscolhida][134];
    document.getElementById('gpB8').innerHTML=Pauli_A[RodEscolhida][135];
    document.getElementById('gcB8').innerHTML=Pauli_A[RodEscolhida][136];
    document.getElementById('sgB8').innerHTML=Pauli_A[RodEscolhida][137];
    document.getElementById('apB8').innerHTML=Pauli_A[RodEscolhida][138];
    document.getElementById('ultB8').innerHTML=Pauli_A[RodEscolhida][139];
    document.getElementById('penB8').innerHTML=Pauli_A[RodEscolhida][140];
    document.getElementById('antB8').innerHTML=Pauli_A[RodEscolhida][141];
    document.getElementById('qaB8').innerHTML=Pauli_A[RodEscolhida][142];
    document.getElementById('qiB8').innerHTML=Pauli_A[RodEscolhida][143];


    }




    else if(CampEscolhido==="Pauli_B"){


      JogosDaRodada = Pauli_Cal_B[RodEscolhida];

      


      document.getElementById('logB1').innerHTML=Pauli_B[RodEscolhida][0];
      document.getElementById('tecB1').innerHTML=Pauli_B[RodEscolhida][2].nome;
      document.getElementById('clubB1').innerHTML=Pauli_B[RodEscolhida][1][0];
      document.getElementById('nlB1').innerHTML=Pauli_B[RodEscolhida][1][2];
      document.getElementById('varB1').innerHTML=Pauli_B[RodEscolhida][3];
      document.getElementById('objB1').innerHTML=Pauli_B[RodEscolhida][4];
      document.getElementById('ptB1').innerHTML=Pauli_B[RodEscolhida][5];
      document.getElementById('vitB1').innerHTML=Pauli_B[RodEscolhida][6];
      document.getElementById('empB1').innerHTML=Pauli_B[RodEscolhida][7];
      document.getElementById('derB1').innerHTML=Pauli_B[RodEscolhida][8];
      document.getElementById('gpB1').innerHTML=Pauli_B[RodEscolhida][9];
      document.getElementById('gcB1').innerHTML=Pauli_B[RodEscolhida][10];
      document.getElementById('sgB1').innerHTML=Pauli_B[RodEscolhida][11];
      document.getElementById('apB1').innerHTML=Pauli_B[RodEscolhida][12];
      document.getElementById('ultB1').innerHTML=Pauli_B[RodEscolhida][13];
      document.getElementById('penB1').innerHTML=Pauli_B[RodEscolhida][14];
      document.getElementById('antB1').innerHTML=Pauli_B[RodEscolhida][15];
      document.getElementById('qaB1').innerHTML=Pauli_B[RodEscolhida][16];
      document.getElementById('qiB1').innerHTML=Pauli_B[RodEscolhida][17];
  
      document.getElementById('logB2').innerHTML=Pauli_B[RodEscolhida][18];
      document.getElementById('tecB2').innerHTML=Pauli_B[RodEscolhida][20].nome;
      document.getElementById('clubB2').innerHTML=Pauli_B[RodEscolhida][19][0];
      document.getElementById('nlB2').innerHTML=Pauli_B[RodEscolhida][19][2];
      document.getElementById('varB2').innerHTML=Pauli_B[RodEscolhida][21];
      document.getElementById('objB2').innerHTML=Pauli_B[RodEscolhida][22];
      document.getElementById('ptB2').innerHTML=Pauli_B[RodEscolhida][23];
      document.getElementById('vitB2').innerHTML=Pauli_B[RodEscolhida][24];
      document.getElementById('empB2').innerHTML=Pauli_B[RodEscolhida][25];
      document.getElementById('derB2').innerHTML=Pauli_B[RodEscolhida][26];
      document.getElementById('gpB2').innerHTML=Pauli_B[RodEscolhida][27];
      document.getElementById('gcB2').innerHTML=Pauli_B[RodEscolhida][28];
      document.getElementById('sgB2').innerHTML=Pauli_B[RodEscolhida][29];
      document.getElementById('apB2').innerHTML=Pauli_B[RodEscolhida][30];
      document.getElementById('ultB2').innerHTML=Pauli_B[RodEscolhida][31];
      document.getElementById('penB2').innerHTML=Pauli_B[RodEscolhida][32];
      document.getElementById('antB2').innerHTML=Pauli_B[RodEscolhida][33];
      document.getElementById('qaB2').innerHTML=Pauli_B[RodEscolhida][34];
      document.getElementById('qiB2').innerHTML=Pauli_B[RodEscolhida][35];
  
      document.getElementById('logB3').innerHTML=Pauli_B[RodEscolhida][36];
      document.getElementById('tecB3').innerHTML=Pauli_B[RodEscolhida][38].nome;
      document.getElementById('clubB3').innerHTML=Pauli_B[RodEscolhida][37][0];
      document.getElementById('nlB3').innerHTML=Pauli_B[RodEscolhida][37][2];
      document.getElementById('varB3').innerHTML=Pauli_B[RodEscolhida][39];
      document.getElementById('objB3').innerHTML=Pauli_B[RodEscolhida][40];
      document.getElementById('ptB3').innerHTML=Pauli_B[RodEscolhida][41];
      document.getElementById('vitB3').innerHTML=Pauli_B[RodEscolhida][42];
      document.getElementById('empB3').innerHTML=Pauli_B[RodEscolhida][43];
      document.getElementById('derB3').innerHTML=Pauli_B[RodEscolhida][44];
      document.getElementById('gpB3').innerHTML=Pauli_B[RodEscolhida][45];
      document.getElementById('gcB3').innerHTML=Pauli_B[RodEscolhida][46];
      document.getElementById('sgB3').innerHTML=Pauli_B[RodEscolhida][47];
      document.getElementById('apB3').innerHTML=Pauli_B[RodEscolhida][48];
      document.getElementById('ultB3').innerHTML=Pauli_B[RodEscolhida][49];
      document.getElementById('penB3').innerHTML=Pauli_B[RodEscolhida][50];
      document.getElementById('antB3').innerHTML=Pauli_B[RodEscolhida][51];
      document.getElementById('qaB3').innerHTML=Pauli_B[RodEscolhida][52];
      document.getElementById('qiB3').innerHTML=Pauli_B[RodEscolhida][53];
  
      document.getElementById('logB4').innerHTML=Pauli_B[RodEscolhida][54];
      document.getElementById('tecB4').innerHTML=Pauli_B[RodEscolhida][56].nome;
      document.getElementById('clubB4').innerHTML=Pauli_B[RodEscolhida][55][0];
      document.getElementById('nlB4').innerHTML=Pauli_B[RodEscolhida][55][2];
      document.getElementById('varB4').innerHTML=Pauli_B[RodEscolhida][57];
      document.getElementById('objB4').innerHTML=Pauli_B[RodEscolhida][58];
      document.getElementById('ptB4').innerHTML=Pauli_B[RodEscolhida][59];
      document.getElementById('vitB4').innerHTML=Pauli_B[RodEscolhida][60];
      document.getElementById('empB4').innerHTML=Pauli_B[RodEscolhida][61];
      document.getElementById('derB4').innerHTML=Pauli_B[RodEscolhida][62];
      document.getElementById('gpB4').innerHTML=Pauli_B[RodEscolhida][63];
      document.getElementById('gcB4').innerHTML=Pauli_B[RodEscolhida][64];
      document.getElementById('sgB4').innerHTML=Pauli_B[RodEscolhida][65];
      document.getElementById('apB4').innerHTML=Pauli_B[RodEscolhida][66];
      document.getElementById('ultB4').innerHTML=Pauli_B[RodEscolhida][67];
      document.getElementById('penB4').innerHTML=Pauli_B[RodEscolhida][68];
      document.getElementById('antB4').innerHTML=Pauli_B[RodEscolhida][69];
      document.getElementById('qaB4').innerHTML=Pauli_B[RodEscolhida][70];
      document.getElementById('qiB4').innerHTML=Pauli_B[RodEscolhida][71];
  
      document.getElementById('logB5').innerHTML=Pauli_B[RodEscolhida][72];
      document.getElementById('tecB5').innerHTML=Pauli_B[RodEscolhida][74].nome;
      document.getElementById('clubB5').innerHTML=Pauli_B[RodEscolhida][73][0];
      document.getElementById('nlB5').innerHTML=Pauli_B[RodEscolhida][73][2];
      document.getElementById('varB5').innerHTML=Pauli_B[RodEscolhida][75];
      document.getElementById('objB5').innerHTML=Pauli_B[RodEscolhida][76];
      document.getElementById('ptB5').innerHTML=Pauli_B[RodEscolhida][77];
      document.getElementById('vitB5').innerHTML=Pauli_B[RodEscolhida][78];
      document.getElementById('empB5').innerHTML=Pauli_B[RodEscolhida][79];
      document.getElementById('derB5').innerHTML=Pauli_B[RodEscolhida][80];
      document.getElementById('gpB5').innerHTML=Pauli_B[RodEscolhida][81];
      document.getElementById('gcB5').innerHTML=Pauli_B[RodEscolhida][82];
      document.getElementById('sgB5').innerHTML=Pauli_B[RodEscolhida][83];
      document.getElementById('apB5').innerHTML=Pauli_B[RodEscolhida][84];
      document.getElementById('ultB5').innerHTML=Pauli_B[RodEscolhida][85];
      document.getElementById('penB5').innerHTML=Pauli_B[RodEscolhida][86];
      document.getElementById('antB5').innerHTML=Pauli_B[RodEscolhida][87];
      document.getElementById('qaB5').innerHTML=Pauli_B[RodEscolhida][88];
      document.getElementById('qiB5').innerHTML=Pauli_B[RodEscolhida][89];
  
      document.getElementById('logB6').innerHTML=Pauli_B[RodEscolhida][90];
      document.getElementById('tecB6').innerHTML=Pauli_B[RodEscolhida][92].nome;
      document.getElementById('clubB6').innerHTML=Pauli_B[RodEscolhida][91][0];
      document.getElementById('nlB6').innerHTML=Pauli_B[RodEscolhida][91][2];
      document.getElementById('varB6').innerHTML=Pauli_B[RodEscolhida][93];
      document.getElementById('objB6').innerHTML=Pauli_B[RodEscolhida][94];
      document.getElementById('ptB6').innerHTML=Pauli_B[RodEscolhida][95];
      document.getElementById('vitB6').innerHTML=Pauli_B[RodEscolhida][96];
      document.getElementById('empB6').innerHTML=Pauli_B[RodEscolhida][97];
      document.getElementById('derB6').innerHTML=Pauli_B[RodEscolhida][98];
      document.getElementById('gpB6').innerHTML=Pauli_B[RodEscolhida][99];
      document.getElementById('gcB6').innerHTML=Pauli_B[RodEscolhida][100];
      document.getElementById('sgB6').innerHTML=Pauli_B[RodEscolhida][101];
      document.getElementById('apB6').innerHTML=Pauli_B[RodEscolhida][102];
      document.getElementById('ultB6').innerHTML=Pauli_B[RodEscolhida][103];
      document.getElementById('penB6').innerHTML=Pauli_B[RodEscolhida][104];
      document.getElementById('antB6').innerHTML=Pauli_B[RodEscolhida][105];
      document.getElementById('qaB6').innerHTML=Pauli_B[RodEscolhida][106];
      document.getElementById('qiB6').innerHTML=Pauli_B[RodEscolhida][107];
  
      document.getElementById('logB7').innerHTML=Pauli_B[RodEscolhida][108];
      document.getElementById('tecB7').innerHTML=Pauli_B[RodEscolhida][110].nome;
      document.getElementById('clubB7').innerHTML=Pauli_B[RodEscolhida][109][0];
      document.getElementById('nlB7').innerHTML=Pauli_B[RodEscolhida][109][2];
      document.getElementById('varB7').innerHTML=Pauli_B[RodEscolhida][111];
      document.getElementById('objB7').innerHTML=Pauli_B[RodEscolhida][112];
      document.getElementById('ptB7').innerHTML=Pauli_B[RodEscolhida][113];
      document.getElementById('vitB7').innerHTML=Pauli_B[RodEscolhida][114];
      document.getElementById('empB7').innerHTML=Pauli_B[RodEscolhida][115];
      document.getElementById('derB7').innerHTML=Pauli_B[RodEscolhida][116];
      document.getElementById('gpB7').innerHTML=Pauli_B[RodEscolhida][117];
      document.getElementById('gcB7').innerHTML=Pauli_B[RodEscolhida][118];
      document.getElementById('sgB7').innerHTML=Pauli_B[RodEscolhida][119];
      document.getElementById('apB7').innerHTML=Pauli_B[RodEscolhida][120];
      document.getElementById('ultB7').innerHTML=Pauli_B[RodEscolhida][121];
      document.getElementById('penB7').innerHTML=Pauli_B[RodEscolhida][122];
      document.getElementById('antB7').innerHTML=Pauli_B[RodEscolhida][123];
      document.getElementById('qaB7').innerHTML=Pauli_B[RodEscolhida][124];
      document.getElementById('qiB7').innerHTML=Pauli_B[RodEscolhida][125];
  
      document.getElementById('logB8').innerHTML=Pauli_B[RodEscolhida][126];
      document.getElementById('tecB8').innerHTML=Pauli_B[RodEscolhida][128].nome;
      document.getElementById('clubB8').innerHTML=Pauli_B[RodEscolhida][127][0];
      document.getElementById('nlB8').innerHTML=Pauli_B[RodEscolhida][127][2];
      document.getElementById('varB8').innerHTML=Pauli_B[RodEscolhida][129];
      document.getElementById('objB8').innerHTML=Pauli_B[RodEscolhida][130];
      document.getElementById('ptB8').innerHTML=Pauli_B[RodEscolhida][131];
      document.getElementById('vitB8').innerHTML=Pauli_B[RodEscolhida][132];
      document.getElementById('empB8').innerHTML=Pauli_B[RodEscolhida][133];
      document.getElementById('derB8').innerHTML=Pauli_B[RodEscolhida][134];
      document.getElementById('gpB8').innerHTML=Pauli_B[RodEscolhida][135];
      document.getElementById('gcB8').innerHTML=Pauli_B[RodEscolhida][136];
      document.getElementById('sgB8').innerHTML=Pauli_B[RodEscolhida][137];
      document.getElementById('apB8').innerHTML=Pauli_B[RodEscolhida][138];
      document.getElementById('ultB8').innerHTML=Pauli_B[RodEscolhida][139];
      document.getElementById('penB8').innerHTML=Pauli_B[RodEscolhida][140];
      document.getElementById('antB8').innerHTML=Pauli_B[RodEscolhida][141];
      document.getElementById('qaB8').innerHTML=Pauli_B[RodEscolhida][142];
      document.getElementById('qiB8').innerHTML=Pauli_B[RodEscolhida][143];
  

      
    }



    
    else if(CampEscolhido==="Cario_A"){

      JogosDaRodada = Cario_Cal_A[RodEscolhida];


      document.getElementById('logB1').innerHTML=Cario_A[RodEscolhida][0];
      document.getElementById('tecB1').innerHTML=Cario_A[RodEscolhida][2].nome;
      document.getElementById('clubB1').innerHTML=Cario_A[RodEscolhida][1][0];
      document.getElementById('nlB1').innerHTML=Cario_A[RodEscolhida][1][2];
      document.getElementById('varB1').innerHTML=Cario_A[RodEscolhida][3];
      document.getElementById('objB1').innerHTML=Cario_A[RodEscolhida][4];
      document.getElementById('ptB1').innerHTML=Cario_A[RodEscolhida][5];
      document.getElementById('vitB1').innerHTML=Cario_A[RodEscolhida][6];
      document.getElementById('empB1').innerHTML=Cario_A[RodEscolhida][7];
      document.getElementById('derB1').innerHTML=Cario_A[RodEscolhida][8];
      document.getElementById('gpB1').innerHTML=Cario_A[RodEscolhida][9];
      document.getElementById('gcB1').innerHTML=Cario_A[RodEscolhida][10];
      document.getElementById('sgB1').innerHTML=Cario_A[RodEscolhida][11];
      document.getElementById('apB1').innerHTML=Cario_A[RodEscolhida][12];
      document.getElementById('ultB1').innerHTML=Cario_A[RodEscolhida][13];
      document.getElementById('penB1').innerHTML=Cario_A[RodEscolhida][14];
      document.getElementById('antB1').innerHTML=Cario_A[RodEscolhida][15];
      document.getElementById('qaB1').innerHTML=Cario_A[RodEscolhida][16];
      document.getElementById('qiB1').innerHTML=Cario_A[RodEscolhida][17];
  
      document.getElementById('logB2').innerHTML=Cario_A[RodEscolhida][18];
      document.getElementById('tecB2').innerHTML=Cario_A[RodEscolhida][20].nome;
      document.getElementById('clubB2').innerHTML=Cario_A[RodEscolhida][19][0];
      document.getElementById('nlB2').innerHTML=Cario_A[RodEscolhida][19][2];
      document.getElementById('varB2').innerHTML=Cario_A[RodEscolhida][21];
      document.getElementById('objB2').innerHTML=Cario_A[RodEscolhida][22];
      document.getElementById('ptB2').innerHTML=Cario_A[RodEscolhida][23];
      document.getElementById('vitB2').innerHTML=Cario_A[RodEscolhida][24];
      document.getElementById('empB2').innerHTML=Cario_A[RodEscolhida][25];
      document.getElementById('derB2').innerHTML=Cario_A[RodEscolhida][26];
      document.getElementById('gpB2').innerHTML=Cario_A[RodEscolhida][27];
      document.getElementById('gcB2').innerHTML=Cario_A[RodEscolhida][28];
      document.getElementById('sgB2').innerHTML=Cario_A[RodEscolhida][29];
      document.getElementById('apB2').innerHTML=Cario_A[RodEscolhida][30];
      document.getElementById('ultB2').innerHTML=Cario_A[RodEscolhida][31];
      document.getElementById('penB2').innerHTML=Cario_A[RodEscolhida][32];
      document.getElementById('antB2').innerHTML=Cario_A[RodEscolhida][33];
      document.getElementById('qaB2').innerHTML=Cario_A[RodEscolhida][34];
      document.getElementById('qiB2').innerHTML=Cario_A[RodEscolhida][35];
  
      document.getElementById('logB3').innerHTML=Cario_A[RodEscolhida][36];
      document.getElementById('tecB3').innerHTML=Cario_A[RodEscolhida][38].nome;
      document.getElementById('clubB3').innerHTML=Cario_A[RodEscolhida][37][0];
      document.getElementById('nlB3').innerHTML=Cario_A[RodEscolhida][37][2];
      document.getElementById('varB3').innerHTML=Cario_A[RodEscolhida][39];
      document.getElementById('objB3').innerHTML=Cario_A[RodEscolhida][40];
      document.getElementById('ptB3').innerHTML=Cario_A[RodEscolhida][41];
      document.getElementById('vitB3').innerHTML=Cario_A[RodEscolhida][42];
      document.getElementById('empB3').innerHTML=Cario_A[RodEscolhida][43];
      document.getElementById('derB3').innerHTML=Cario_A[RodEscolhida][44];
      document.getElementById('gpB3').innerHTML=Cario_A[RodEscolhida][45];
      document.getElementById('gcB3').innerHTML=Cario_A[RodEscolhida][46];
      document.getElementById('sgB3').innerHTML=Cario_A[RodEscolhida][47];
      document.getElementById('apB3').innerHTML=Cario_A[RodEscolhida][48];
      document.getElementById('ultB3').innerHTML=Cario_A[RodEscolhida][49];
      document.getElementById('penB3').innerHTML=Cario_A[RodEscolhida][50];
      document.getElementById('antB3').innerHTML=Cario_A[RodEscolhida][51];
      document.getElementById('qaB3').innerHTML=Cario_A[RodEscolhida][52];
      document.getElementById('qiB3').innerHTML=Cario_A[RodEscolhida][53];
  
      document.getElementById('logB4').innerHTML=Cario_A[RodEscolhida][54];
      document.getElementById('tecB4').innerHTML=Cario_A[RodEscolhida][56].nome;
      document.getElementById('clubB4').innerHTML=Cario_A[RodEscolhida][55][0];
      document.getElementById('nlB4').innerHTML=Cario_A[RodEscolhida][55][2];
      document.getElementById('varB4').innerHTML=Cario_A[RodEscolhida][57];
      document.getElementById('objB4').innerHTML=Cario_A[RodEscolhida][58];
      document.getElementById('ptB4').innerHTML=Cario_A[RodEscolhida][59];
      document.getElementById('vitB4').innerHTML=Cario_A[RodEscolhida][60];
      document.getElementById('empB4').innerHTML=Cario_A[RodEscolhida][61];
      document.getElementById('derB4').innerHTML=Cario_A[RodEscolhida][62];
      document.getElementById('gpB4').innerHTML=Cario_A[RodEscolhida][63];
      document.getElementById('gcB4').innerHTML=Cario_A[RodEscolhida][64];
      document.getElementById('sgB4').innerHTML=Cario_A[RodEscolhida][65];
      document.getElementById('apB4').innerHTML=Cario_A[RodEscolhida][66];
      document.getElementById('ultB4').innerHTML=Cario_A[RodEscolhida][67];
      document.getElementById('penB4').innerHTML=Cario_A[RodEscolhida][68];
      document.getElementById('antB4').innerHTML=Cario_A[RodEscolhida][69];
      document.getElementById('qaB4').innerHTML=Cario_A[RodEscolhida][70];
      document.getElementById('qiB4').innerHTML=Cario_A[RodEscolhida][71];
  
      document.getElementById('logB5').innerHTML=Cario_A[RodEscolhida][72];
      document.getElementById('tecB5').innerHTML=Cario_A[RodEscolhida][74].nome;
      document.getElementById('clubB5').innerHTML=Cario_A[RodEscolhida][73][0];
      document.getElementById('nlB5').innerHTML=Cario_A[RodEscolhida][73][2];
      document.getElementById('varB5').innerHTML=Cario_A[RodEscolhida][75];
      document.getElementById('objB5').innerHTML=Cario_A[RodEscolhida][76];
      document.getElementById('ptB5').innerHTML=Cario_A[RodEscolhida][77];
      document.getElementById('vitB5').innerHTML=Cario_A[RodEscolhida][78];
      document.getElementById('empB5').innerHTML=Cario_A[RodEscolhida][79];
      document.getElementById('derB5').innerHTML=Cario_A[RodEscolhida][80];
      document.getElementById('gpB5').innerHTML=Cario_A[RodEscolhida][81];
      document.getElementById('gcB5').innerHTML=Cario_A[RodEscolhida][82];
      document.getElementById('sgB5').innerHTML=Cario_A[RodEscolhida][83];
      document.getElementById('apB5').innerHTML=Cario_A[RodEscolhida][84];
      document.getElementById('ultB5').innerHTML=Cario_A[RodEscolhida][85];
      document.getElementById('penB5').innerHTML=Cario_A[RodEscolhida][86];
      document.getElementById('antB5').innerHTML=Cario_A[RodEscolhida][87];
      document.getElementById('qaB5').innerHTML=Cario_A[RodEscolhida][88];
      document.getElementById('qiB5').innerHTML=Cario_A[RodEscolhida][89];
  
      document.getElementById('logB6').innerHTML=Cario_A[RodEscolhida][90];
      document.getElementById('tecB6').innerHTML=Cario_A[RodEscolhida][92].nome;
      document.getElementById('clubB6').innerHTML=Cario_A[RodEscolhida][91][0];
      document.getElementById('nlB6').innerHTML=Cario_A[RodEscolhida][91][2];
      document.getElementById('varB6').innerHTML=Cario_A[RodEscolhida][93];
      document.getElementById('objB6').innerHTML=Cario_A[RodEscolhida][94];
      document.getElementById('ptB6').innerHTML=Cario_A[RodEscolhida][95];
      document.getElementById('vitB6').innerHTML=Cario_A[RodEscolhida][96];
      document.getElementById('empB6').innerHTML=Cario_A[RodEscolhida][97];
      document.getElementById('derB6').innerHTML=Cario_A[RodEscolhida][98];
      document.getElementById('gpB6').innerHTML=Cario_A[RodEscolhida][99];
      document.getElementById('gcB6').innerHTML=Cario_A[RodEscolhida][100];
      document.getElementById('sgB6').innerHTML=Cario_A[RodEscolhida][101];
      document.getElementById('apB6').innerHTML=Cario_A[RodEscolhida][102];
      document.getElementById('ultB6').innerHTML=Cario_A[RodEscolhida][103];
      document.getElementById('penB6').innerHTML=Cario_A[RodEscolhida][104];
      document.getElementById('antB6').innerHTML=Cario_A[RodEscolhida][105];
      document.getElementById('qaB6').innerHTML=Cario_A[RodEscolhida][106];
      document.getElementById('qiB6').innerHTML=Cario_A[RodEscolhida][107];
  
      document.getElementById('logB7').innerHTML=Cario_A[RodEscolhida][108];
      document.getElementById('tecB7').innerHTML=Cario_A[RodEscolhida][110].nome;
      document.getElementById('clubB7').innerHTML=Cario_A[RodEscolhida][109][0];
      document.getElementById('nlB7').innerHTML=Cario_A[RodEscolhida][109][2];
      document.getElementById('varB7').innerHTML=Cario_A[RodEscolhida][111];
      document.getElementById('objB7').innerHTML=Cario_A[RodEscolhida][112];
      document.getElementById('ptB7').innerHTML=Cario_A[RodEscolhida][113];
      document.getElementById('vitB7').innerHTML=Cario_A[RodEscolhida][114];
      document.getElementById('empB7').innerHTML=Cario_A[RodEscolhida][115];
      document.getElementById('derB7').innerHTML=Cario_A[RodEscolhida][116];
      document.getElementById('gpB7').innerHTML=Cario_A[RodEscolhida][117];
      document.getElementById('gcB7').innerHTML=Cario_A[RodEscolhida][118];
      document.getElementById('sgB7').innerHTML=Cario_A[RodEscolhida][119];
      document.getElementById('apB7').innerHTML=Cario_A[RodEscolhida][120];
      document.getElementById('ultB7').innerHTML=Cario_A[RodEscolhida][121];
      document.getElementById('penB7').innerHTML=Cario_A[RodEscolhida][122];
      document.getElementById('antB7').innerHTML=Cario_A[RodEscolhida][123];
      document.getElementById('qaB7').innerHTML=Cario_A[RodEscolhida][124];
      document.getElementById('qiB7').innerHTML=Cario_A[RodEscolhida][125];
  
      document.getElementById('logB8').innerHTML=Cario_A[RodEscolhida][126];
      document.getElementById('tecB8').innerHTML=Cario_A[RodEscolhida][128].nome;
      document.getElementById('clubB8').innerHTML=Cario_A[RodEscolhida][127][0];
      document.getElementById('nlB8').innerHTML=Cario_A[RodEscolhida][127][2];
      document.getElementById('varB8').innerHTML=Cario_A[RodEscolhida][129];
      document.getElementById('objB8').innerHTML=Cario_A[RodEscolhida][130];
      document.getElementById('ptB8').innerHTML=Cario_A[RodEscolhida][131];
      document.getElementById('vitB8').innerHTML=Cario_A[RodEscolhida][132];
      document.getElementById('empB8').innerHTML=Cario_A[RodEscolhida][133];
      document.getElementById('derB8').innerHTML=Cario_A[RodEscolhida][134];
      document.getElementById('gpB8').innerHTML=Cario_A[RodEscolhida][135];
      document.getElementById('gcB8').innerHTML=Cario_A[RodEscolhida][136];
      document.getElementById('sgB8').innerHTML=Cario_A[RodEscolhida][137];
      document.getElementById('apB8').innerHTML=Cario_A[RodEscolhida][138];
      document.getElementById('ultB8').innerHTML=Cario_A[RodEscolhida][139];
      document.getElementById('penB8').innerHTML=Cario_A[RodEscolhida][140];
      document.getElementById('antB8').innerHTML=Cario_A[RodEscolhida][141];
      document.getElementById('qaB8').innerHTML=Cario_A[RodEscolhida][142];
      document.getElementById('qiB8').innerHTML=Cario_A[RodEscolhida][143];
  

      
    }


    else if(CampEscolhido==="Cario_B"){

      JogosDaRodada = Cario_Cal_B[RodEscolhida];


      document.getElementById('logB1').innerHTML=Cario_B[RodEscolhida][0];
      document.getElementById('tecB1').innerHTML=Cario_B[RodEscolhida][2].nome;
      document.getElementById('clubB1').innerHTML=Cario_B[RodEscolhida][1][0];
      document.getElementById('nlB1').innerHTML=Cario_B[RodEscolhida][1][2];
      document.getElementById('varB1').innerHTML=Cario_B[RodEscolhida][3];
      document.getElementById('objB1').innerHTML=Cario_B[RodEscolhida][4];
      document.getElementById('ptB1').innerHTML=Cario_B[RodEscolhida][5];
      document.getElementById('vitB1').innerHTML=Cario_B[RodEscolhida][6];
      document.getElementById('empB1').innerHTML=Cario_B[RodEscolhida][7];
      document.getElementById('derB1').innerHTML=Cario_B[RodEscolhida][8];
      document.getElementById('gpB1').innerHTML=Cario_B[RodEscolhida][9];
      document.getElementById('gcB1').innerHTML=Cario_B[RodEscolhida][10];
      document.getElementById('sgB1').innerHTML=Cario_B[RodEscolhida][11];
      document.getElementById('apB1').innerHTML=Cario_B[RodEscolhida][12];
      document.getElementById('ultB1').innerHTML=Cario_B[RodEscolhida][13];
      document.getElementById('penB1').innerHTML=Cario_B[RodEscolhida][14];
      document.getElementById('antB1').innerHTML=Cario_B[RodEscolhida][15];
      document.getElementById('qaB1').innerHTML=Cario_B[RodEscolhida][16];
      document.getElementById('qiB1').innerHTML=Cario_B[RodEscolhida][17];
  
      document.getElementById('logB2').innerHTML=Cario_B[RodEscolhida][18];
      document.getElementById('tecB2').innerHTML=Cario_B[RodEscolhida][20].nome;
      document.getElementById('clubB2').innerHTML=Cario_B[RodEscolhida][19][0];
      document.getElementById('nlB2').innerHTML=Cario_B[RodEscolhida][19][2];
      document.getElementById('varB2').innerHTML=Cario_B[RodEscolhida][21];
      document.getElementById('objB2').innerHTML=Cario_B[RodEscolhida][22];
      document.getElementById('ptB2').innerHTML=Cario_B[RodEscolhida][23];
      document.getElementById('vitB2').innerHTML=Cario_B[RodEscolhida][24];
      document.getElementById('empB2').innerHTML=Cario_B[RodEscolhida][25];
      document.getElementById('derB2').innerHTML=Cario_B[RodEscolhida][26];
      document.getElementById('gpB2').innerHTML=Cario_B[RodEscolhida][27];
      document.getElementById('gcB2').innerHTML=Cario_B[RodEscolhida][28];
      document.getElementById('sgB2').innerHTML=Cario_B[RodEscolhida][29];
      document.getElementById('apB2').innerHTML=Cario_B[RodEscolhida][30];
      document.getElementById('ultB2').innerHTML=Cario_B[RodEscolhida][31];
      document.getElementById('penB2').innerHTML=Cario_B[RodEscolhida][32];
      document.getElementById('antB2').innerHTML=Cario_B[RodEscolhida][33];
      document.getElementById('qaB2').innerHTML=Cario_B[RodEscolhida][34];
      document.getElementById('qiB2').innerHTML=Cario_B[RodEscolhida][35];
  
      document.getElementById('logB3').innerHTML=Cario_B[RodEscolhida][36];
      document.getElementById('tecB3').innerHTML=Cario_B[RodEscolhida][38].nome;
      document.getElementById('clubB3').innerHTML=Cario_B[RodEscolhida][37][0];
      document.getElementById('nlB3').innerHTML=Cario_B[RodEscolhida][37][2];
      document.getElementById('varB3').innerHTML=Cario_B[RodEscolhida][39];
      document.getElementById('objB3').innerHTML=Cario_B[RodEscolhida][40];
      document.getElementById('ptB3').innerHTML=Cario_B[RodEscolhida][41];
      document.getElementById('vitB3').innerHTML=Cario_B[RodEscolhida][42];
      document.getElementById('empB3').innerHTML=Cario_B[RodEscolhida][43];
      document.getElementById('derB3').innerHTML=Cario_B[RodEscolhida][44];
      document.getElementById('gpB3').innerHTML=Cario_B[RodEscolhida][45];
      document.getElementById('gcB3').innerHTML=Cario_B[RodEscolhida][46];
      document.getElementById('sgB3').innerHTML=Cario_B[RodEscolhida][47];
      document.getElementById('apB3').innerHTML=Cario_B[RodEscolhida][48];
      document.getElementById('ultB3').innerHTML=Cario_B[RodEscolhida][49];
      document.getElementById('penB3').innerHTML=Cario_B[RodEscolhida][50];
      document.getElementById('antB3').innerHTML=Cario_B[RodEscolhida][51];
      document.getElementById('qaB3').innerHTML=Cario_B[RodEscolhida][52];
      document.getElementById('qiB3').innerHTML=Cario_B[RodEscolhida][53];
  
      document.getElementById('logB4').innerHTML=Cario_B[RodEscolhida][54];
      document.getElementById('tecB4').innerHTML=Cario_B[RodEscolhida][56].nome;
      document.getElementById('clubB4').innerHTML=Cario_B[RodEscolhida][55][0];
      document.getElementById('nlB4').innerHTML=Cario_B[RodEscolhida][55][2];
      document.getElementById('varB4').innerHTML=Cario_B[RodEscolhida][57];
      document.getElementById('objB4').innerHTML=Cario_B[RodEscolhida][58];
      document.getElementById('ptB4').innerHTML=Cario_B[RodEscolhida][59];
      document.getElementById('vitB4').innerHTML=Cario_B[RodEscolhida][60];
      document.getElementById('empB4').innerHTML=Cario_B[RodEscolhida][61];
      document.getElementById('derB4').innerHTML=Cario_B[RodEscolhida][62];
      document.getElementById('gpB4').innerHTML=Cario_B[RodEscolhida][63];
      document.getElementById('gcB4').innerHTML=Cario_B[RodEscolhida][64];
      document.getElementById('sgB4').innerHTML=Cario_B[RodEscolhida][65];
      document.getElementById('apB4').innerHTML=Cario_B[RodEscolhida][66];
      document.getElementById('ultB4').innerHTML=Cario_B[RodEscolhida][67];
      document.getElementById('penB4').innerHTML=Cario_B[RodEscolhida][68];
      document.getElementById('antB4').innerHTML=Cario_B[RodEscolhida][69];
      document.getElementById('qaB4').innerHTML=Cario_B[RodEscolhida][70];
      document.getElementById('qiB4').innerHTML=Cario_B[RodEscolhida][71];
  
      document.getElementById('logB5').innerHTML=Cario_B[RodEscolhida][72];
      document.getElementById('tecB5').innerHTML=Cario_B[RodEscolhida][74].nome;
      document.getElementById('clubB5').innerHTML=Cario_B[RodEscolhida][73][0];
      document.getElementById('nlB5').innerHTML=Cario_B[RodEscolhida][73][2];
      document.getElementById('varB5').innerHTML=Cario_B[RodEscolhida][75];
      document.getElementById('objB5').innerHTML=Cario_B[RodEscolhida][76];
      document.getElementById('ptB5').innerHTML=Cario_B[RodEscolhida][77];
      document.getElementById('vitB5').innerHTML=Cario_B[RodEscolhida][78];
      document.getElementById('empB5').innerHTML=Cario_B[RodEscolhida][79];
      document.getElementById('derB5').innerHTML=Cario_B[RodEscolhida][80];
      document.getElementById('gpB5').innerHTML=Cario_B[RodEscolhida][81];
      document.getElementById('gcB5').innerHTML=Cario_B[RodEscolhida][82];
      document.getElementById('sgB5').innerHTML=Cario_B[RodEscolhida][83];
      document.getElementById('apB5').innerHTML=Cario_B[RodEscolhida][84];
      document.getElementById('ultB5').innerHTML=Cario_B[RodEscolhida][85];
      document.getElementById('penB5').innerHTML=Cario_B[RodEscolhida][86];
      document.getElementById('antB5').innerHTML=Cario_B[RodEscolhida][87];
      document.getElementById('qaB5').innerHTML=Cario_B[RodEscolhida][88];
      document.getElementById('qiB5').innerHTML=Cario_B[RodEscolhida][89];
  
      document.getElementById('logB6').innerHTML=Cario_B[RodEscolhida][90];
      document.getElementById('tecB6').innerHTML=Cario_B[RodEscolhida][92].nome;
      document.getElementById('clubB6').innerHTML=Cario_B[RodEscolhida][91][0];
      document.getElementById('nlB6').innerHTML=Cario_B[RodEscolhida][91][2];
      document.getElementById('varB6').innerHTML=Cario_B[RodEscolhida][93];
      document.getElementById('objB6').innerHTML=Cario_B[RodEscolhida][94];
      document.getElementById('ptB6').innerHTML=Cario_B[RodEscolhida][95];
      document.getElementById('vitB6').innerHTML=Cario_B[RodEscolhida][96];
      document.getElementById('empB6').innerHTML=Cario_B[RodEscolhida][97];
      document.getElementById('derB6').innerHTML=Cario_B[RodEscolhida][98];
      document.getElementById('gpB6').innerHTML=Cario_B[RodEscolhida][99];
      document.getElementById('gcB6').innerHTML=Cario_B[RodEscolhida][100];
      document.getElementById('sgB6').innerHTML=Cario_B[RodEscolhida][101];
      document.getElementById('apB6').innerHTML=Cario_B[RodEscolhida][102];
      document.getElementById('ultB6').innerHTML=Cario_B[RodEscolhida][103];
      document.getElementById('penB6').innerHTML=Cario_B[RodEscolhida][104];
      document.getElementById('antB6').innerHTML=Cario_B[RodEscolhida][105];
      document.getElementById('qaB6').innerHTML=Cario_B[RodEscolhida][106];
      document.getElementById('qiB6').innerHTML=Cario_B[RodEscolhida][107];
  
      document.getElementById('logB7').innerHTML=Cario_B[RodEscolhida][108];
      document.getElementById('tecB7').innerHTML=Cario_B[RodEscolhida][110].nome;
      document.getElementById('clubB7').innerHTML=Cario_B[RodEscolhida][109][0];
      document.getElementById('nlB7').innerHTML=Cario_B[RodEscolhida][109][2];
      document.getElementById('varB7').innerHTML=Cario_B[RodEscolhida][111];
      document.getElementById('objB7').innerHTML=Cario_B[RodEscolhida][112];
      document.getElementById('ptB7').innerHTML=Cario_B[RodEscolhida][113];
      document.getElementById('vitB7').innerHTML=Cario_B[RodEscolhida][114];
      document.getElementById('empB7').innerHTML=Cario_B[RodEscolhida][115];
      document.getElementById('derB7').innerHTML=Cario_B[RodEscolhida][116];
      document.getElementById('gpB7').innerHTML=Cario_B[RodEscolhida][117];
      document.getElementById('gcB7').innerHTML=Cario_B[RodEscolhida][118];
      document.getElementById('sgB7').innerHTML=Cario_B[RodEscolhida][119];
      document.getElementById('apB7').innerHTML=Cario_B[RodEscolhida][120];
      document.getElementById('ultB7').innerHTML=Cario_B[RodEscolhida][121];
      document.getElementById('penB7').innerHTML=Cario_B[RodEscolhida][122];
      document.getElementById('antB7').innerHTML=Cario_B[RodEscolhida][123];
      document.getElementById('qaB7').innerHTML=Cario_B[RodEscolhida][124];
      document.getElementById('qiB7').innerHTML=Cario_B[RodEscolhida][125];
  
      document.getElementById('logB8').innerHTML=Cario_B[RodEscolhida][126];
      document.getElementById('tecB8').innerHTML=Cario_B[RodEscolhida][128].nome;
      document.getElementById('clubB8').innerHTML=Cario_B[RodEscolhida][127][0];
      document.getElementById('nlB8').innerHTML=Cario_B[RodEscolhida][127][2];
      document.getElementById('varB8').innerHTML=Cario_B[RodEscolhida][129];
      document.getElementById('objB8').innerHTML=Cario_B[RodEscolhida][130];
      document.getElementById('ptB8').innerHTML=Cario_B[RodEscolhida][131];
      document.getElementById('vitB8').innerHTML=Cario_B[RodEscolhida][132];
      document.getElementById('empB8').innerHTML=Cario_B[RodEscolhida][133];
      document.getElementById('derB8').innerHTML=Cario_B[RodEscolhida][134];
      document.getElementById('gpB8').innerHTML=Cario_B[RodEscolhida][135];
      document.getElementById('gcB8').innerHTML=Cario_B[RodEscolhida][136];
      document.getElementById('sgB8').innerHTML=Cario_B[RodEscolhida][137];
      document.getElementById('apB8').innerHTML=Cario_B[RodEscolhida][138];
      document.getElementById('ultB8').innerHTML=Cario_B[RodEscolhida][139];
      document.getElementById('penB8').innerHTML=Cario_B[RodEscolhida][140];
      document.getElementById('antB8').innerHTML=Cario_B[RodEscolhida][141];
      document.getElementById('qaB8').innerHTML=Cario_B[RodEscolhida][142];
      document.getElementById('qiB8').innerHTML=Cario_B[RodEscolhida][143];
  

      
    }

    
    else if(CampEscolhido==="Gauch_A"){

      JogosDaRodada = Gauch_Cal_A[RodEscolhida];


      document.getElementById('logB1').innerHTML=Gauch_A[RodEscolhida][0];
      document.getElementById('tecB1').innerHTML=Gauch_A[RodEscolhida][2].nome;
      document.getElementById('clubB1').innerHTML=Gauch_A[RodEscolhida][1][0];
      document.getElementById('nlB1').innerHTML=Gauch_A[RodEscolhida][1][2];
      document.getElementById('varB1').innerHTML=Gauch_A[RodEscolhida][3];
      document.getElementById('objB1').innerHTML=Gauch_A[RodEscolhida][4];
      document.getElementById('ptB1').innerHTML=Gauch_A[RodEscolhida][5];
      document.getElementById('vitB1').innerHTML=Gauch_A[RodEscolhida][6];
      document.getElementById('empB1').innerHTML=Gauch_A[RodEscolhida][7];
      document.getElementById('derB1').innerHTML=Gauch_A[RodEscolhida][8];
      document.getElementById('gpB1').innerHTML=Gauch_A[RodEscolhida][9];
      document.getElementById('gcB1').innerHTML=Gauch_A[RodEscolhida][10];
      document.getElementById('sgB1').innerHTML=Gauch_A[RodEscolhida][11];
      document.getElementById('apB1').innerHTML=Gauch_A[RodEscolhida][12];
      document.getElementById('ultB1').innerHTML=Gauch_A[RodEscolhida][13];
      document.getElementById('penB1').innerHTML=Gauch_A[RodEscolhida][14];
      document.getElementById('antB1').innerHTML=Gauch_A[RodEscolhida][15];
      document.getElementById('qaB1').innerHTML=Gauch_A[RodEscolhida][16];
      document.getElementById('qiB1').innerHTML=Gauch_A[RodEscolhida][17];
  
      document.getElementById('logB2').innerHTML=Gauch_A[RodEscolhida][18];
      document.getElementById('tecB2').innerHTML=Gauch_A[RodEscolhida][20].nome;
      document.getElementById('clubB2').innerHTML=Gauch_A[RodEscolhida][19][0];
      document.getElementById('nlB2').innerHTML=Gauch_A[RodEscolhida][19][2];
      document.getElementById('varB2').innerHTML=Gauch_A[RodEscolhida][21];
      document.getElementById('objB2').innerHTML=Gauch_A[RodEscolhida][22];
      document.getElementById('ptB2').innerHTML=Gauch_A[RodEscolhida][23];
      document.getElementById('vitB2').innerHTML=Gauch_A[RodEscolhida][24];
      document.getElementById('empB2').innerHTML=Gauch_A[RodEscolhida][25];
      document.getElementById('derB2').innerHTML=Gauch_A[RodEscolhida][26];
      document.getElementById('gpB2').innerHTML=Gauch_A[RodEscolhida][27];
      document.getElementById('gcB2').innerHTML=Gauch_A[RodEscolhida][28];
      document.getElementById('sgB2').innerHTML=Gauch_A[RodEscolhida][29];
      document.getElementById('apB2').innerHTML=Gauch_A[RodEscolhida][30];
      document.getElementById('ultB2').innerHTML=Gauch_A[RodEscolhida][31];
      document.getElementById('penB2').innerHTML=Gauch_A[RodEscolhida][32];
      document.getElementById('antB2').innerHTML=Gauch_A[RodEscolhida][33];
      document.getElementById('qaB2').innerHTML=Gauch_A[RodEscolhida][34];
      document.getElementById('qiB2').innerHTML=Gauch_A[RodEscolhida][35];
  
      document.getElementById('logB3').innerHTML=Gauch_A[RodEscolhida][36];
      document.getElementById('tecB3').innerHTML=Gauch_A[RodEscolhida][38].nome;
      document.getElementById('clubB3').innerHTML=Gauch_A[RodEscolhida][37][0];
      document.getElementById('nlB3').innerHTML=Gauch_A[RodEscolhida][37][2];
      document.getElementById('varB3').innerHTML=Gauch_A[RodEscolhida][39];
      document.getElementById('objB3').innerHTML=Gauch_A[RodEscolhida][40];
      document.getElementById('ptB3').innerHTML=Gauch_A[RodEscolhida][41];
      document.getElementById('vitB3').innerHTML=Gauch_A[RodEscolhida][42];
      document.getElementById('empB3').innerHTML=Gauch_A[RodEscolhida][43];
      document.getElementById('derB3').innerHTML=Gauch_A[RodEscolhida][44];
      document.getElementById('gpB3').innerHTML=Gauch_A[RodEscolhida][45];
      document.getElementById('gcB3').innerHTML=Gauch_A[RodEscolhida][46];
      document.getElementById('sgB3').innerHTML=Gauch_A[RodEscolhida][47];
      document.getElementById('apB3').innerHTML=Gauch_A[RodEscolhida][48];
      document.getElementById('ultB3').innerHTML=Gauch_A[RodEscolhida][49];
      document.getElementById('penB3').innerHTML=Gauch_A[RodEscolhida][50];
      document.getElementById('antB3').innerHTML=Gauch_A[RodEscolhida][51];
      document.getElementById('qaB3').innerHTML=Gauch_A[RodEscolhida][52];
      document.getElementById('qiB3').innerHTML=Gauch_A[RodEscolhida][53];
  
      document.getElementById('logB4').innerHTML=Gauch_A[RodEscolhida][54];
      document.getElementById('tecB4').innerHTML=Gauch_A[RodEscolhida][56].nome;
      document.getElementById('clubB4').innerHTML=Gauch_A[RodEscolhida][55][0];
      document.getElementById('nlB4').innerHTML=Gauch_A[RodEscolhida][55][2];
      document.getElementById('varB4').innerHTML=Gauch_A[RodEscolhida][57];
      document.getElementById('objB4').innerHTML=Gauch_A[RodEscolhida][58];
      document.getElementById('ptB4').innerHTML=Gauch_A[RodEscolhida][59];
      document.getElementById('vitB4').innerHTML=Gauch_A[RodEscolhida][60];
      document.getElementById('empB4').innerHTML=Gauch_A[RodEscolhida][61];
      document.getElementById('derB4').innerHTML=Gauch_A[RodEscolhida][62];
      document.getElementById('gpB4').innerHTML=Gauch_A[RodEscolhida][63];
      document.getElementById('gcB4').innerHTML=Gauch_A[RodEscolhida][64];
      document.getElementById('sgB4').innerHTML=Gauch_A[RodEscolhida][65];
      document.getElementById('apB4').innerHTML=Gauch_A[RodEscolhida][66];
      document.getElementById('ultB4').innerHTML=Gauch_A[RodEscolhida][67];
      document.getElementById('penB4').innerHTML=Gauch_A[RodEscolhida][68];
      document.getElementById('antB4').innerHTML=Gauch_A[RodEscolhida][69];
      document.getElementById('qaB4').innerHTML=Gauch_A[RodEscolhida][70];
      document.getElementById('qiB4').innerHTML=Gauch_A[RodEscolhida][71];
  
      document.getElementById('logB5').innerHTML=Gauch_A[RodEscolhida][72];
      document.getElementById('tecB5').innerHTML=Gauch_A[RodEscolhida][74].nome;
      document.getElementById('clubB5').innerHTML=Gauch_A[RodEscolhida][73][0];
      document.getElementById('nlB5').innerHTML=Gauch_A[RodEscolhida][73][2];
      document.getElementById('varB5').innerHTML=Gauch_A[RodEscolhida][75];
      document.getElementById('objB5').innerHTML=Gauch_A[RodEscolhida][76];
      document.getElementById('ptB5').innerHTML=Gauch_A[RodEscolhida][77];
      document.getElementById('vitB5').innerHTML=Gauch_A[RodEscolhida][78];
      document.getElementById('empB5').innerHTML=Gauch_A[RodEscolhida][79];
      document.getElementById('derB5').innerHTML=Gauch_A[RodEscolhida][80];
      document.getElementById('gpB5').innerHTML=Gauch_A[RodEscolhida][81];
      document.getElementById('gcB5').innerHTML=Gauch_A[RodEscolhida][82];
      document.getElementById('sgB5').innerHTML=Gauch_A[RodEscolhida][83];
      document.getElementById('apB5').innerHTML=Gauch_A[RodEscolhida][84];
      document.getElementById('ultB5').innerHTML=Gauch_A[RodEscolhida][85];
      document.getElementById('penB5').innerHTML=Gauch_A[RodEscolhida][86];
      document.getElementById('antB5').innerHTML=Gauch_A[RodEscolhida][87];
      document.getElementById('qaB5').innerHTML=Gauch_A[RodEscolhida][88];
      document.getElementById('qiB5').innerHTML=Gauch_A[RodEscolhida][89];
  
      document.getElementById('logB6').innerHTML=Gauch_A[RodEscolhida][90];
      document.getElementById('tecB6').innerHTML=Gauch_A[RodEscolhida][92].nome;
      document.getElementById('clubB6').innerHTML=Gauch_A[RodEscolhida][91][0];
      document.getElementById('nlB6').innerHTML=Gauch_A[RodEscolhida][91][2];
      document.getElementById('varB6').innerHTML=Gauch_A[RodEscolhida][93];
      document.getElementById('objB6').innerHTML=Gauch_A[RodEscolhida][94];
      document.getElementById('ptB6').innerHTML=Gauch_A[RodEscolhida][95];
      document.getElementById('vitB6').innerHTML=Gauch_A[RodEscolhida][96];
      document.getElementById('empB6').innerHTML=Gauch_A[RodEscolhida][97];
      document.getElementById('derB6').innerHTML=Gauch_A[RodEscolhida][98];
      document.getElementById('gpB6').innerHTML=Gauch_A[RodEscolhida][99];
      document.getElementById('gcB6').innerHTML=Gauch_A[RodEscolhida][100];
      document.getElementById('sgB6').innerHTML=Gauch_A[RodEscolhida][101];
      document.getElementById('apB6').innerHTML=Gauch_A[RodEscolhida][102];
      document.getElementById('ultB6').innerHTML=Gauch_A[RodEscolhida][103];
      document.getElementById('penB6').innerHTML=Gauch_A[RodEscolhida][104];
      document.getElementById('antB6').innerHTML=Gauch_A[RodEscolhida][105];
      document.getElementById('qaB6').innerHTML=Gauch_A[RodEscolhida][106];
      document.getElementById('qiB6').innerHTML=Gauch_A[RodEscolhida][107];
  
      document.getElementById('logB7').innerHTML=Gauch_A[RodEscolhida][108];
      document.getElementById('tecB7').innerHTML=Gauch_A[RodEscolhida][110].nome;
      document.getElementById('clubB7').innerHTML=Gauch_A[RodEscolhida][109][0];
      document.getElementById('nlB7').innerHTML=Gauch_A[RodEscolhida][109][2];
      document.getElementById('varB7').innerHTML=Gauch_A[RodEscolhida][111];
      document.getElementById('objB7').innerHTML=Gauch_A[RodEscolhida][112];
      document.getElementById('ptB7').innerHTML=Gauch_A[RodEscolhida][113];
      document.getElementById('vitB7').innerHTML=Gauch_A[RodEscolhida][114];
      document.getElementById('empB7').innerHTML=Gauch_A[RodEscolhida][115];
      document.getElementById('derB7').innerHTML=Gauch_A[RodEscolhida][116];
      document.getElementById('gpB7').innerHTML=Gauch_A[RodEscolhida][117];
      document.getElementById('gcB7').innerHTML=Gauch_A[RodEscolhida][118];
      document.getElementById('sgB7').innerHTML=Gauch_A[RodEscolhida][119];
      document.getElementById('apB7').innerHTML=Gauch_A[RodEscolhida][120];
      document.getElementById('ultB7').innerHTML=Gauch_A[RodEscolhida][121];
      document.getElementById('penB7').innerHTML=Gauch_A[RodEscolhida][122];
      document.getElementById('antB7').innerHTML=Gauch_A[RodEscolhida][123];
      document.getElementById('qaB7').innerHTML=Gauch_A[RodEscolhida][124];
      document.getElementById('qiB7').innerHTML=Gauch_A[RodEscolhida][125];
  
      document.getElementById('logB8').innerHTML=Gauch_A[RodEscolhida][126];
      document.getElementById('tecB8').innerHTML=Gauch_A[RodEscolhida][128].nome;
      document.getElementById('clubB8').innerHTML=Gauch_A[RodEscolhida][127][0];
      document.getElementById('nlB8').innerHTML=Gauch_A[RodEscolhida][127][2];
      document.getElementById('varB8').innerHTML=Gauch_A[RodEscolhida][129];
      document.getElementById('objB8').innerHTML=Gauch_A[RodEscolhida][130];
      document.getElementById('ptB8').innerHTML=Gauch_A[RodEscolhida][131];
      document.getElementById('vitB8').innerHTML=Gauch_A[RodEscolhida][132];
      document.getElementById('empB8').innerHTML=Gauch_A[RodEscolhida][133];
      document.getElementById('derB8').innerHTML=Gauch_A[RodEscolhida][134];
      document.getElementById('gpB8').innerHTML=Gauch_A[RodEscolhida][135];
      document.getElementById('gcB8').innerHTML=Gauch_A[RodEscolhida][136];
      document.getElementById('sgB8').innerHTML=Gauch_A[RodEscolhida][137];
      document.getElementById('apB8').innerHTML=Gauch_A[RodEscolhida][138];
      document.getElementById('ultB8').innerHTML=Gauch_A[RodEscolhida][139];
      document.getElementById('penB8').innerHTML=Gauch_A[RodEscolhida][140];
      document.getElementById('antB8').innerHTML=Gauch_A[RodEscolhida][141];
      document.getElementById('qaB8').innerHTML=Gauch_A[RodEscolhida][142];
      document.getElementById('qiB8').innerHTML=Gauch_A[RodEscolhida][143];
  

      
    }


    else if(CampEscolhido==="Gauch_B"){

      JogosDaRodada = Gauch_Cal_B[RodEscolhida];


      document.getElementById('logB1').innerHTML=Gauch_B[RodEscolhida][0];
      document.getElementById('tecB1').innerHTML=Gauch_B[RodEscolhida][2].nome;
      document.getElementById('clubB1').innerHTML=Gauch_B[RodEscolhida][1][0];
      document.getElementById('nlB1').innerHTML=Gauch_B[RodEscolhida][1][2];
      document.getElementById('varB1').innerHTML=Gauch_B[RodEscolhida][3];
      document.getElementById('objB1').innerHTML=Gauch_B[RodEscolhida][4];
      document.getElementById('ptB1').innerHTML=Gauch_B[RodEscolhida][5];
      document.getElementById('vitB1').innerHTML=Gauch_B[RodEscolhida][6];
      document.getElementById('empB1').innerHTML=Gauch_B[RodEscolhida][7];
      document.getElementById('derB1').innerHTML=Gauch_B[RodEscolhida][8];
      document.getElementById('gpB1').innerHTML=Gauch_B[RodEscolhida][9];
      document.getElementById('gcB1').innerHTML=Gauch_B[RodEscolhida][10];
      document.getElementById('sgB1').innerHTML=Gauch_B[RodEscolhida][11];
      document.getElementById('apB1').innerHTML=Gauch_B[RodEscolhida][12];
      document.getElementById('ultB1').innerHTML=Gauch_B[RodEscolhida][13];
      document.getElementById('penB1').innerHTML=Gauch_B[RodEscolhida][14];
      document.getElementById('antB1').innerHTML=Gauch_B[RodEscolhida][15];
      document.getElementById('qaB1').innerHTML=Gauch_B[RodEscolhida][16];
      document.getElementById('qiB1').innerHTML=Gauch_B[RodEscolhida][17];
  
      document.getElementById('logB2').innerHTML=Gauch_B[RodEscolhida][18];
      document.getElementById('tecB2').innerHTML=Gauch_B[RodEscolhida][20].nome;
      document.getElementById('clubB2').innerHTML=Gauch_B[RodEscolhida][19][0];
      document.getElementById('nlB2').innerHTML=Gauch_B[RodEscolhida][19][2];
      document.getElementById('varB2').innerHTML=Gauch_B[RodEscolhida][21];
      document.getElementById('objB2').innerHTML=Gauch_B[RodEscolhida][22];
      document.getElementById('ptB2').innerHTML=Gauch_B[RodEscolhida][23];
      document.getElementById('vitB2').innerHTML=Gauch_B[RodEscolhida][24];
      document.getElementById('empB2').innerHTML=Gauch_B[RodEscolhida][25];
      document.getElementById('derB2').innerHTML=Gauch_B[RodEscolhida][26];
      document.getElementById('gpB2').innerHTML=Gauch_B[RodEscolhida][27];
      document.getElementById('gcB2').innerHTML=Gauch_B[RodEscolhida][28];
      document.getElementById('sgB2').innerHTML=Gauch_B[RodEscolhida][29];
      document.getElementById('apB2').innerHTML=Gauch_B[RodEscolhida][30];
      document.getElementById('ultB2').innerHTML=Gauch_B[RodEscolhida][31];
      document.getElementById('penB2').innerHTML=Gauch_B[RodEscolhida][32];
      document.getElementById('antB2').innerHTML=Gauch_B[RodEscolhida][33];
      document.getElementById('qaB2').innerHTML=Gauch_B[RodEscolhida][34];
      document.getElementById('qiB2').innerHTML=Gauch_B[RodEscolhida][35];
  
      document.getElementById('logB3').innerHTML=Gauch_B[RodEscolhida][36];
      document.getElementById('tecB3').innerHTML=Gauch_B[RodEscolhida][38].nome;
      document.getElementById('clubB3').innerHTML=Gauch_B[RodEscolhida][37][0];
      document.getElementById('nlB3').innerHTML=Gauch_B[RodEscolhida][37][2];
      document.getElementById('varB3').innerHTML=Gauch_B[RodEscolhida][39];
      document.getElementById('objB3').innerHTML=Gauch_B[RodEscolhida][40];
      document.getElementById('ptB3').innerHTML=Gauch_B[RodEscolhida][41];
      document.getElementById('vitB3').innerHTML=Gauch_B[RodEscolhida][42];
      document.getElementById('empB3').innerHTML=Gauch_B[RodEscolhida][43];
      document.getElementById('derB3').innerHTML=Gauch_B[RodEscolhida][44];
      document.getElementById('gpB3').innerHTML=Gauch_B[RodEscolhida][45];
      document.getElementById('gcB3').innerHTML=Gauch_B[RodEscolhida][46];
      document.getElementById('sgB3').innerHTML=Gauch_B[RodEscolhida][47];
      document.getElementById('apB3').innerHTML=Gauch_B[RodEscolhida][48];
      document.getElementById('ultB3').innerHTML=Gauch_B[RodEscolhida][49];
      document.getElementById('penB3').innerHTML=Gauch_B[RodEscolhida][50];
      document.getElementById('antB3').innerHTML=Gauch_B[RodEscolhida][51];
      document.getElementById('qaB3').innerHTML=Gauch_B[RodEscolhida][52];
      document.getElementById('qiB3').innerHTML=Gauch_B[RodEscolhida][53];
  
      document.getElementById('logB4').innerHTML=Gauch_B[RodEscolhida][54];
      document.getElementById('tecB4').innerHTML=Gauch_B[RodEscolhida][56].nome;
      document.getElementById('clubB4').innerHTML=Gauch_B[RodEscolhida][55][0];
      document.getElementById('nlB4').innerHTML=Gauch_B[RodEscolhida][55][2];
      document.getElementById('varB4').innerHTML=Gauch_B[RodEscolhida][57];
      document.getElementById('objB4').innerHTML=Gauch_B[RodEscolhida][58];
      document.getElementById('ptB4').innerHTML=Gauch_B[RodEscolhida][59];
      document.getElementById('vitB4').innerHTML=Gauch_B[RodEscolhida][60];
      document.getElementById('empB4').innerHTML=Gauch_B[RodEscolhida][61];
      document.getElementById('derB4').innerHTML=Gauch_B[RodEscolhida][62];
      document.getElementById('gpB4').innerHTML=Gauch_B[RodEscolhida][63];
      document.getElementById('gcB4').innerHTML=Gauch_B[RodEscolhida][64];
      document.getElementById('sgB4').innerHTML=Gauch_B[RodEscolhida][65];
      document.getElementById('apB4').innerHTML=Gauch_B[RodEscolhida][66];
      document.getElementById('ultB4').innerHTML=Gauch_B[RodEscolhida][67];
      document.getElementById('penB4').innerHTML=Gauch_B[RodEscolhida][68];
      document.getElementById('antB4').innerHTML=Gauch_B[RodEscolhida][69];
      document.getElementById('qaB4').innerHTML=Gauch_B[RodEscolhida][70];
      document.getElementById('qiB4').innerHTML=Gauch_B[RodEscolhida][71];
  
      document.getElementById('logB5').innerHTML=Gauch_B[RodEscolhida][72];
      document.getElementById('tecB5').innerHTML=Gauch_B[RodEscolhida][74].nome;
      document.getElementById('clubB5').innerHTML=Gauch_B[RodEscolhida][73][0];
      document.getElementById('nlB5').innerHTML=Gauch_B[RodEscolhida][73][2];
      document.getElementById('varB5').innerHTML=Gauch_B[RodEscolhida][75];
      document.getElementById('objB5').innerHTML=Gauch_B[RodEscolhida][76];
      document.getElementById('ptB5').innerHTML=Gauch_B[RodEscolhida][77];
      document.getElementById('vitB5').innerHTML=Gauch_B[RodEscolhida][78];
      document.getElementById('empB5').innerHTML=Gauch_B[RodEscolhida][79];
      document.getElementById('derB5').innerHTML=Gauch_B[RodEscolhida][80];
      document.getElementById('gpB5').innerHTML=Gauch_B[RodEscolhida][81];
      document.getElementById('gcB5').innerHTML=Gauch_B[RodEscolhida][82];
      document.getElementById('sgB5').innerHTML=Gauch_B[RodEscolhida][83];
      document.getElementById('apB5').innerHTML=Gauch_B[RodEscolhida][84];
      document.getElementById('ultB5').innerHTML=Gauch_B[RodEscolhida][85];
      document.getElementById('penB5').innerHTML=Gauch_B[RodEscolhida][86];
      document.getElementById('antB5').innerHTML=Gauch_B[RodEscolhida][87];
      document.getElementById('qaB5').innerHTML=Gauch_B[RodEscolhida][88];
      document.getElementById('qiB5').innerHTML=Gauch_B[RodEscolhida][89];
  
      document.getElementById('logB6').innerHTML=Gauch_B[RodEscolhida][90];
      document.getElementById('tecB6').innerHTML=Gauch_B[RodEscolhida][92].nome;
      document.getElementById('clubB6').innerHTML=Gauch_B[RodEscolhida][91][0];
      document.getElementById('nlB6').innerHTML=Gauch_B[RodEscolhida][91][2];
      document.getElementById('varB6').innerHTML=Gauch_B[RodEscolhida][93];
      document.getElementById('objB6').innerHTML=Gauch_B[RodEscolhida][94];
      document.getElementById('ptB6').innerHTML=Gauch_B[RodEscolhida][95];
      document.getElementById('vitB6').innerHTML=Gauch_B[RodEscolhida][96];
      document.getElementById('empB6').innerHTML=Gauch_B[RodEscolhida][97];
      document.getElementById('derB6').innerHTML=Gauch_B[RodEscolhida][98];
      document.getElementById('gpB6').innerHTML=Gauch_B[RodEscolhida][99];
      document.getElementById('gcB6').innerHTML=Gauch_B[RodEscolhida][100];
      document.getElementById('sgB6').innerHTML=Gauch_B[RodEscolhida][101];
      document.getElementById('apB6').innerHTML=Gauch_B[RodEscolhida][102];
      document.getElementById('ultB6').innerHTML=Gauch_B[RodEscolhida][103];
      document.getElementById('penB6').innerHTML=Gauch_B[RodEscolhida][104];
      document.getElementById('antB6').innerHTML=Gauch_B[RodEscolhida][105];
      document.getElementById('qaB6').innerHTML=Gauch_B[RodEscolhida][106];
      document.getElementById('qiB6').innerHTML=Gauch_B[RodEscolhida][107];
  
      document.getElementById('logB7').innerHTML=Gauch_B[RodEscolhida][108];
      document.getElementById('tecB7').innerHTML=Gauch_B[RodEscolhida][110].nome;
      document.getElementById('clubB7').innerHTML=Gauch_B[RodEscolhida][109][0];
      document.getElementById('nlB7').innerHTML=Gauch_B[RodEscolhida][109][2];
      document.getElementById('varB7').innerHTML=Gauch_B[RodEscolhida][111];
      document.getElementById('objB7').innerHTML=Gauch_B[RodEscolhida][112];
      document.getElementById('ptB7').innerHTML=Gauch_B[RodEscolhida][113];
      document.getElementById('vitB7').innerHTML=Gauch_B[RodEscolhida][114];
      document.getElementById('empB7').innerHTML=Gauch_B[RodEscolhida][115];
      document.getElementById('derB7').innerHTML=Gauch_B[RodEscolhida][116];
      document.getElementById('gpB7').innerHTML=Gauch_B[RodEscolhida][117];
      document.getElementById('gcB7').innerHTML=Gauch_B[RodEscolhida][118];
      document.getElementById('sgB7').innerHTML=Gauch_B[RodEscolhida][119];
      document.getElementById('apB7').innerHTML=Gauch_B[RodEscolhida][120];
      document.getElementById('ultB7').innerHTML=Gauch_B[RodEscolhida][121];
      document.getElementById('penB7').innerHTML=Gauch_B[RodEscolhida][122];
      document.getElementById('antB7').innerHTML=Gauch_B[RodEscolhida][123];
      document.getElementById('qaB7').innerHTML=Gauch_B[RodEscolhida][124];
      document.getElementById('qiB7').innerHTML=Gauch_B[RodEscolhida][125];
  
      document.getElementById('logB8').innerHTML=Gauch_B[RodEscolhida][126];
      document.getElementById('tecB8').innerHTML=Gauch_B[RodEscolhida][128].nome;
      document.getElementById('clubB8').innerHTML=Gauch_B[RodEscolhida][127][0];
      document.getElementById('nlB8').innerHTML=Gauch_B[RodEscolhida][127][2];
      document.getElementById('varB8').innerHTML=Gauch_B[RodEscolhida][129];
      document.getElementById('objB8').innerHTML=Gauch_B[RodEscolhida][130];
      document.getElementById('ptB8').innerHTML=Gauch_B[RodEscolhida][131];
      document.getElementById('vitB8').innerHTML=Gauch_B[RodEscolhida][132];
      document.getElementById('empB8').innerHTML=Gauch_B[RodEscolhida][133];
      document.getElementById('derB8').innerHTML=Gauch_B[RodEscolhida][134];
      document.getElementById('gpB8').innerHTML=Gauch_B[RodEscolhida][135];
      document.getElementById('gcB8').innerHTML=Gauch_B[RodEscolhida][136];
      document.getElementById('sgB8').innerHTML=Gauch_B[RodEscolhida][137];
      document.getElementById('apB8').innerHTML=Gauch_B[RodEscolhida][138];
      document.getElementById('ultB8').innerHTML=Gauch_B[RodEscolhida][139];
      document.getElementById('penB8').innerHTML=Gauch_B[RodEscolhida][140];
      document.getElementById('antB8').innerHTML=Gauch_B[RodEscolhida][141];
      document.getElementById('qaB8').innerHTML=Gauch_B[RodEscolhida][142];
      document.getElementById('qiB8').innerHTML=Gauch_B[RodEscolhida][143];
  

      
    }




    
    else if(CampEscolhido==="Minei_A"){

      JogosDaRodada = Minei_Cal_A[RodEscolhida];


      document.getElementById('logB1').innerHTML=Minei_A[RodEscolhida][0];
      document.getElementById('tecB1').innerHTML=Minei_A[RodEscolhida][2].nome;
      document.getElementById('clubB1').innerHTML=Minei_A[RodEscolhida][1][0];
      document.getElementById('nlB1').innerHTML=Minei_A[RodEscolhida][1][2];
      document.getElementById('varB1').innerHTML=Minei_A[RodEscolhida][3];
      document.getElementById('objB1').innerHTML=Minei_A[RodEscolhida][4];
      document.getElementById('ptB1').innerHTML=Minei_A[RodEscolhida][5];
      document.getElementById('vitB1').innerHTML=Minei_A[RodEscolhida][6];
      document.getElementById('empB1').innerHTML=Minei_A[RodEscolhida][7];
      document.getElementById('derB1').innerHTML=Minei_A[RodEscolhida][8];
      document.getElementById('gpB1').innerHTML=Minei_A[RodEscolhida][9];
      document.getElementById('gcB1').innerHTML=Minei_A[RodEscolhida][10];
      document.getElementById('sgB1').innerHTML=Minei_A[RodEscolhida][11];
      document.getElementById('apB1').innerHTML=Minei_A[RodEscolhida][12];
      document.getElementById('ultB1').innerHTML=Minei_A[RodEscolhida][13];
      document.getElementById('penB1').innerHTML=Minei_A[RodEscolhida][14];
      document.getElementById('antB1').innerHTML=Minei_A[RodEscolhida][15];
      document.getElementById('qaB1').innerHTML=Minei_A[RodEscolhida][16];
      document.getElementById('qiB1').innerHTML=Minei_A[RodEscolhida][17];
  
      document.getElementById('logB2').innerHTML=Minei_A[RodEscolhida][18];
      document.getElementById('tecB2').innerHTML=Minei_A[RodEscolhida][20].nome;
      document.getElementById('clubB2').innerHTML=Minei_A[RodEscolhida][19][0];
      document.getElementById('nlB2').innerHTML=Minei_A[RodEscolhida][19][2];
      document.getElementById('varB2').innerHTML=Minei_A[RodEscolhida][21];
      document.getElementById('objB2').innerHTML=Minei_A[RodEscolhida][22];
      document.getElementById('ptB2').innerHTML=Minei_A[RodEscolhida][23];
      document.getElementById('vitB2').innerHTML=Minei_A[RodEscolhida][24];
      document.getElementById('empB2').innerHTML=Minei_A[RodEscolhida][25];
      document.getElementById('derB2').innerHTML=Minei_A[RodEscolhida][26];
      document.getElementById('gpB2').innerHTML=Minei_A[RodEscolhida][27];
      document.getElementById('gcB2').innerHTML=Minei_A[RodEscolhida][28];
      document.getElementById('sgB2').innerHTML=Minei_A[RodEscolhida][29];
      document.getElementById('apB2').innerHTML=Minei_A[RodEscolhida][30];
      document.getElementById('ultB2').innerHTML=Minei_A[RodEscolhida][31];
      document.getElementById('penB2').innerHTML=Minei_A[RodEscolhida][32];
      document.getElementById('antB2').innerHTML=Minei_A[RodEscolhida][33];
      document.getElementById('qaB2').innerHTML=Minei_A[RodEscolhida][34];
      document.getElementById('qiB2').innerHTML=Minei_A[RodEscolhida][35];
  
      document.getElementById('logB3').innerHTML=Minei_A[RodEscolhida][36];
      document.getElementById('tecB3').innerHTML=Minei_A[RodEscolhida][38].nome;
      document.getElementById('clubB3').innerHTML=Minei_A[RodEscolhida][37][0];
      document.getElementById('nlB3').innerHTML=Minei_A[RodEscolhida][37][2];
      document.getElementById('varB3').innerHTML=Minei_A[RodEscolhida][39];
      document.getElementById('objB3').innerHTML=Minei_A[RodEscolhida][40];
      document.getElementById('ptB3').innerHTML=Minei_A[RodEscolhida][41];
      document.getElementById('vitB3').innerHTML=Minei_A[RodEscolhida][42];
      document.getElementById('empB3').innerHTML=Minei_A[RodEscolhida][43];
      document.getElementById('derB3').innerHTML=Minei_A[RodEscolhida][44];
      document.getElementById('gpB3').innerHTML=Minei_A[RodEscolhida][45];
      document.getElementById('gcB3').innerHTML=Minei_A[RodEscolhida][46];
      document.getElementById('sgB3').innerHTML=Minei_A[RodEscolhida][47];
      document.getElementById('apB3').innerHTML=Minei_A[RodEscolhida][48];
      document.getElementById('ultB3').innerHTML=Minei_A[RodEscolhida][49];
      document.getElementById('penB3').innerHTML=Minei_A[RodEscolhida][50];
      document.getElementById('antB3').innerHTML=Minei_A[RodEscolhida][51];
      document.getElementById('qaB3').innerHTML=Minei_A[RodEscolhida][52];
      document.getElementById('qiB3').innerHTML=Minei_A[RodEscolhida][53];
  
      document.getElementById('logB4').innerHTML=Minei_A[RodEscolhida][54];
      document.getElementById('tecB4').innerHTML=Minei_A[RodEscolhida][56].nome;
      document.getElementById('clubB4').innerHTML=Minei_A[RodEscolhida][55][0];
      document.getElementById('nlB4').innerHTML=Minei_A[RodEscolhida][55][2];
      document.getElementById('varB4').innerHTML=Minei_A[RodEscolhida][57];
      document.getElementById('objB4').innerHTML=Minei_A[RodEscolhida][58];
      document.getElementById('ptB4').innerHTML=Minei_A[RodEscolhida][59];
      document.getElementById('vitB4').innerHTML=Minei_A[RodEscolhida][60];
      document.getElementById('empB4').innerHTML=Minei_A[RodEscolhida][61];
      document.getElementById('derB4').innerHTML=Minei_A[RodEscolhida][62];
      document.getElementById('gpB4').innerHTML=Minei_A[RodEscolhida][63];
      document.getElementById('gcB4').innerHTML=Minei_A[RodEscolhida][64];
      document.getElementById('sgB4').innerHTML=Minei_A[RodEscolhida][65];
      document.getElementById('apB4').innerHTML=Minei_A[RodEscolhida][66];
      document.getElementById('ultB4').innerHTML=Minei_A[RodEscolhida][67];
      document.getElementById('penB4').innerHTML=Minei_A[RodEscolhida][68];
      document.getElementById('antB4').innerHTML=Minei_A[RodEscolhida][69];
      document.getElementById('qaB4').innerHTML=Minei_A[RodEscolhida][70];
      document.getElementById('qiB4').innerHTML=Minei_A[RodEscolhida][71];
  
      document.getElementById('logB5').innerHTML=Minei_A[RodEscolhida][72];
      document.getElementById('tecB5').innerHTML=Minei_A[RodEscolhida][74].nome;
      document.getElementById('clubB5').innerHTML=Minei_A[RodEscolhida][73][0];
      document.getElementById('nlB5').innerHTML=Minei_A[RodEscolhida][73][2];
      document.getElementById('varB5').innerHTML=Minei_A[RodEscolhida][75];
      document.getElementById('objB5').innerHTML=Minei_A[RodEscolhida][76];
      document.getElementById('ptB5').innerHTML=Minei_A[RodEscolhida][77];
      document.getElementById('vitB5').innerHTML=Minei_A[RodEscolhida][78];
      document.getElementById('empB5').innerHTML=Minei_A[RodEscolhida][79];
      document.getElementById('derB5').innerHTML=Minei_A[RodEscolhida][80];
      document.getElementById('gpB5').innerHTML=Minei_A[RodEscolhida][81];
      document.getElementById('gcB5').innerHTML=Minei_A[RodEscolhida][82];
      document.getElementById('sgB5').innerHTML=Minei_A[RodEscolhida][83];
      document.getElementById('apB5').innerHTML=Minei_A[RodEscolhida][84];
      document.getElementById('ultB5').innerHTML=Minei_A[RodEscolhida][85];
      document.getElementById('penB5').innerHTML=Minei_A[RodEscolhida][86];
      document.getElementById('antB5').innerHTML=Minei_A[RodEscolhida][87];
      document.getElementById('qaB5').innerHTML=Minei_A[RodEscolhida][88];
      document.getElementById('qiB5').innerHTML=Minei_A[RodEscolhida][89];
  
      document.getElementById('logB6').innerHTML=Minei_A[RodEscolhida][90];
      document.getElementById('tecB6').innerHTML=Minei_A[RodEscolhida][92].nome;
      document.getElementById('clubB6').innerHTML=Minei_A[RodEscolhida][91][0];
      document.getElementById('nlB6').innerHTML=Minei_A[RodEscolhida][91][2];
      document.getElementById('varB6').innerHTML=Minei_A[RodEscolhida][93];
      document.getElementById('objB6').innerHTML=Minei_A[RodEscolhida][94];
      document.getElementById('ptB6').innerHTML=Minei_A[RodEscolhida][95];
      document.getElementById('vitB6').innerHTML=Minei_A[RodEscolhida][96];
      document.getElementById('empB6').innerHTML=Minei_A[RodEscolhida][97];
      document.getElementById('derB6').innerHTML=Minei_A[RodEscolhida][98];
      document.getElementById('gpB6').innerHTML=Minei_A[RodEscolhida][99];
      document.getElementById('gcB6').innerHTML=Minei_A[RodEscolhida][100];
      document.getElementById('sgB6').innerHTML=Minei_A[RodEscolhida][101];
      document.getElementById('apB6').innerHTML=Minei_A[RodEscolhida][102];
      document.getElementById('ultB6').innerHTML=Minei_A[RodEscolhida][103];
      document.getElementById('penB6').innerHTML=Minei_A[RodEscolhida][104];
      document.getElementById('antB6').innerHTML=Minei_A[RodEscolhida][105];
      document.getElementById('qaB6').innerHTML=Minei_A[RodEscolhida][106];
      document.getElementById('qiB6').innerHTML=Minei_A[RodEscolhida][107];
  
      document.getElementById('logB7').innerHTML=Minei_A[RodEscolhida][108];
      document.getElementById('tecB7').innerHTML=Minei_A[RodEscolhida][110].nome;
      document.getElementById('clubB7').innerHTML=Minei_A[RodEscolhida][109][0];
      document.getElementById('nlB7').innerHTML=Minei_A[RodEscolhida][109][2];
      document.getElementById('varB7').innerHTML=Minei_A[RodEscolhida][111];
      document.getElementById('objB7').innerHTML=Minei_A[RodEscolhida][112];
      document.getElementById('ptB7').innerHTML=Minei_A[RodEscolhida][113];
      document.getElementById('vitB7').innerHTML=Minei_A[RodEscolhida][114];
      document.getElementById('empB7').innerHTML=Minei_A[RodEscolhida][115];
      document.getElementById('derB7').innerHTML=Minei_A[RodEscolhida][116];
      document.getElementById('gpB7').innerHTML=Minei_A[RodEscolhida][117];
      document.getElementById('gcB7').innerHTML=Minei_A[RodEscolhida][118];
      document.getElementById('sgB7').innerHTML=Minei_A[RodEscolhida][119];
      document.getElementById('apB7').innerHTML=Minei_A[RodEscolhida][120];
      document.getElementById('ultB7').innerHTML=Minei_A[RodEscolhida][121];
      document.getElementById('penB7').innerHTML=Minei_A[RodEscolhida][122];
      document.getElementById('antB7').innerHTML=Minei_A[RodEscolhida][123];
      document.getElementById('qaB7').innerHTML=Minei_A[RodEscolhida][124];
      document.getElementById('qiB7').innerHTML=Minei_A[RodEscolhida][125];
  
      document.getElementById('logB8').innerHTML=Minei_A[RodEscolhida][126];
      document.getElementById('tecB8').innerHTML=Minei_A[RodEscolhida][128].nome;
      document.getElementById('clubB8').innerHTML=Minei_A[RodEscolhida][127][0];
      document.getElementById('nlB8').innerHTML=Minei_A[RodEscolhida][127][2];
      document.getElementById('varB8').innerHTML=Minei_A[RodEscolhida][129];
      document.getElementById('objB8').innerHTML=Minei_A[RodEscolhida][130];
      document.getElementById('ptB8').innerHTML=Minei_A[RodEscolhida][131];
      document.getElementById('vitB8').innerHTML=Minei_A[RodEscolhida][132];
      document.getElementById('empB8').innerHTML=Minei_A[RodEscolhida][133];
      document.getElementById('derB8').innerHTML=Minei_A[RodEscolhida][134];
      document.getElementById('gpB8').innerHTML=Minei_A[RodEscolhida][135];
      document.getElementById('gcB8').innerHTML=Minei_A[RodEscolhida][136];
      document.getElementById('sgB8').innerHTML=Minei_A[RodEscolhida][137];
      document.getElementById('apB8').innerHTML=Minei_A[RodEscolhida][138];
      document.getElementById('ultB8').innerHTML=Minei_A[RodEscolhida][139];
      document.getElementById('penB8').innerHTML=Minei_A[RodEscolhida][140];
      document.getElementById('antB8').innerHTML=Minei_A[RodEscolhida][141];
      document.getElementById('qaB8').innerHTML=Minei_A[RodEscolhida][142];
      document.getElementById('qiB8').innerHTML=Minei_A[RodEscolhida][143];
  

      
    }


    else if(CampEscolhido==="Minei_B"){

      JogosDaRodada = Minei_Cal_B[RodEscolhida];


      document.getElementById('logB1').innerHTML=Minei_B[RodEscolhida][0];
      document.getElementById('tecB1').innerHTML=Minei_B[RodEscolhida][2].nome;
      document.getElementById('clubB1').innerHTML=Minei_B[RodEscolhida][1][0];
      document.getElementById('nlB1').innerHTML=Minei_B[RodEscolhida][1][2];
      document.getElementById('varB1').innerHTML=Minei_B[RodEscolhida][3];
      document.getElementById('objB1').innerHTML=Minei_B[RodEscolhida][4];
      document.getElementById('ptB1').innerHTML=Minei_B[RodEscolhida][5];
      document.getElementById('vitB1').innerHTML=Minei_B[RodEscolhida][6];
      document.getElementById('empB1').innerHTML=Minei_B[RodEscolhida][7];
      document.getElementById('derB1').innerHTML=Minei_B[RodEscolhida][8];
      document.getElementById('gpB1').innerHTML=Minei_B[RodEscolhida][9];
      document.getElementById('gcB1').innerHTML=Minei_B[RodEscolhida][10];
      document.getElementById('sgB1').innerHTML=Minei_B[RodEscolhida][11];
      document.getElementById('apB1').innerHTML=Minei_B[RodEscolhida][12];
      document.getElementById('ultB1').innerHTML=Minei_B[RodEscolhida][13];
      document.getElementById('penB1').innerHTML=Minei_B[RodEscolhida][14];
      document.getElementById('antB1').innerHTML=Minei_B[RodEscolhida][15];
      document.getElementById('qaB1').innerHTML=Minei_B[RodEscolhida][16];
      document.getElementById('qiB1').innerHTML=Minei_B[RodEscolhida][17];
  
      document.getElementById('logB2').innerHTML=Minei_B[RodEscolhida][18];
      document.getElementById('tecB2').innerHTML=Minei_B[RodEscolhida][20].nome;
      document.getElementById('clubB2').innerHTML=Minei_B[RodEscolhida][19][0];
      document.getElementById('nlB2').innerHTML=Minei_B[RodEscolhida][19][2];
      document.getElementById('varB2').innerHTML=Minei_B[RodEscolhida][21];
      document.getElementById('objB2').innerHTML=Minei_B[RodEscolhida][22];
      document.getElementById('ptB2').innerHTML=Minei_B[RodEscolhida][23];
      document.getElementById('vitB2').innerHTML=Minei_B[RodEscolhida][24];
      document.getElementById('empB2').innerHTML=Minei_B[RodEscolhida][25];
      document.getElementById('derB2').innerHTML=Minei_B[RodEscolhida][26];
      document.getElementById('gpB2').innerHTML=Minei_B[RodEscolhida][27];
      document.getElementById('gcB2').innerHTML=Minei_B[RodEscolhida][28];
      document.getElementById('sgB2').innerHTML=Minei_B[RodEscolhida][29];
      document.getElementById('apB2').innerHTML=Minei_B[RodEscolhida][30];
      document.getElementById('ultB2').innerHTML=Minei_B[RodEscolhida][31];
      document.getElementById('penB2').innerHTML=Minei_B[RodEscolhida][32];
      document.getElementById('antB2').innerHTML=Minei_B[RodEscolhida][33];
      document.getElementById('qaB2').innerHTML=Minei_B[RodEscolhida][34];
      document.getElementById('qiB2').innerHTML=Minei_B[RodEscolhida][35];
  
      document.getElementById('logB3').innerHTML=Minei_B[RodEscolhida][36];
      document.getElementById('tecB3').innerHTML=Minei_B[RodEscolhida][38].nome;
      document.getElementById('clubB3').innerHTML=Minei_B[RodEscolhida][37][0];
      document.getElementById('nlB3').innerHTML=Minei_B[RodEscolhida][37][2];
      document.getElementById('varB3').innerHTML=Minei_B[RodEscolhida][39];
      document.getElementById('objB3').innerHTML=Minei_B[RodEscolhida][40];
      document.getElementById('ptB3').innerHTML=Minei_B[RodEscolhida][41];
      document.getElementById('vitB3').innerHTML=Minei_B[RodEscolhida][42];
      document.getElementById('empB3').innerHTML=Minei_B[RodEscolhida][43];
      document.getElementById('derB3').innerHTML=Minei_B[RodEscolhida][44];
      document.getElementById('gpB3').innerHTML=Minei_B[RodEscolhida][45];
      document.getElementById('gcB3').innerHTML=Minei_B[RodEscolhida][46];
      document.getElementById('sgB3').innerHTML=Minei_B[RodEscolhida][47];
      document.getElementById('apB3').innerHTML=Minei_B[RodEscolhida][48];
      document.getElementById('ultB3').innerHTML=Minei_B[RodEscolhida][49];
      document.getElementById('penB3').innerHTML=Minei_B[RodEscolhida][50];
      document.getElementById('antB3').innerHTML=Minei_B[RodEscolhida][51];
      document.getElementById('qaB3').innerHTML=Minei_B[RodEscolhida][52];
      document.getElementById('qiB3').innerHTML=Minei_B[RodEscolhida][53];
  
      document.getElementById('logB4').innerHTML=Minei_B[RodEscolhida][54];
      document.getElementById('tecB4').innerHTML=Minei_B[RodEscolhida][56].nome;
      document.getElementById('clubB4').innerHTML=Minei_B[RodEscolhida][55][0];
      document.getElementById('nlB4').innerHTML=Minei_B[RodEscolhida][55][2];
      document.getElementById('varB4').innerHTML=Minei_B[RodEscolhida][57];
      document.getElementById('objB4').innerHTML=Minei_B[RodEscolhida][58];
      document.getElementById('ptB4').innerHTML=Minei_B[RodEscolhida][59];
      document.getElementById('vitB4').innerHTML=Minei_B[RodEscolhida][60];
      document.getElementById('empB4').innerHTML=Minei_B[RodEscolhida][61];
      document.getElementById('derB4').innerHTML=Minei_B[RodEscolhida][62];
      document.getElementById('gpB4').innerHTML=Minei_B[RodEscolhida][63];
      document.getElementById('gcB4').innerHTML=Minei_B[RodEscolhida][64];
      document.getElementById('sgB4').innerHTML=Minei_B[RodEscolhida][65];
      document.getElementById('apB4').innerHTML=Minei_B[RodEscolhida][66];
      document.getElementById('ultB4').innerHTML=Minei_B[RodEscolhida][67];
      document.getElementById('penB4').innerHTML=Minei_B[RodEscolhida][68];
      document.getElementById('antB4').innerHTML=Minei_B[RodEscolhida][69];
      document.getElementById('qaB4').innerHTML=Minei_B[RodEscolhida][70];
      document.getElementById('qiB4').innerHTML=Minei_B[RodEscolhida][71];
  
      document.getElementById('logB5').innerHTML=Minei_B[RodEscolhida][72];
      document.getElementById('tecB5').innerHTML=Minei_B[RodEscolhida][74].nome;
      document.getElementById('clubB5').innerHTML=Minei_B[RodEscolhida][73][0];
      document.getElementById('nlB5').innerHTML=Minei_B[RodEscolhida][73][2];
      document.getElementById('varB5').innerHTML=Minei_B[RodEscolhida][75];
      document.getElementById('objB5').innerHTML=Minei_B[RodEscolhida][76];
      document.getElementById('ptB5').innerHTML=Minei_B[RodEscolhida][77];
      document.getElementById('vitB5').innerHTML=Minei_B[RodEscolhida][78];
      document.getElementById('empB5').innerHTML=Minei_B[RodEscolhida][79];
      document.getElementById('derB5').innerHTML=Minei_B[RodEscolhida][80];
      document.getElementById('gpB5').innerHTML=Minei_B[RodEscolhida][81];
      document.getElementById('gcB5').innerHTML=Minei_B[RodEscolhida][82];
      document.getElementById('sgB5').innerHTML=Minei_B[RodEscolhida][83];
      document.getElementById('apB5').innerHTML=Minei_B[RodEscolhida][84];
      document.getElementById('ultB5').innerHTML=Minei_B[RodEscolhida][85];
      document.getElementById('penB5').innerHTML=Minei_B[RodEscolhida][86];
      document.getElementById('antB5').innerHTML=Minei_B[RodEscolhida][87];
      document.getElementById('qaB5').innerHTML=Minei_B[RodEscolhida][88];
      document.getElementById('qiB5').innerHTML=Minei_B[RodEscolhida][89];
  
      document.getElementById('logB6').innerHTML=Minei_B[RodEscolhida][90];
      document.getElementById('tecB6').innerHTML=Minei_B[RodEscolhida][92].nome;
      document.getElementById('clubB6').innerHTML=Minei_B[RodEscolhida][91][0];
      document.getElementById('nlB6').innerHTML=Minei_B[RodEscolhida][91][2];
      document.getElementById('varB6').innerHTML=Minei_B[RodEscolhida][93];
      document.getElementById('objB6').innerHTML=Minei_B[RodEscolhida][94];
      document.getElementById('ptB6').innerHTML=Minei_B[RodEscolhida][95];
      document.getElementById('vitB6').innerHTML=Minei_B[RodEscolhida][96];
      document.getElementById('empB6').innerHTML=Minei_B[RodEscolhida][97];
      document.getElementById('derB6').innerHTML=Minei_B[RodEscolhida][98];
      document.getElementById('gpB6').innerHTML=Minei_B[RodEscolhida][99];
      document.getElementById('gcB6').innerHTML=Minei_B[RodEscolhida][100];
      document.getElementById('sgB6').innerHTML=Minei_B[RodEscolhida][101];
      document.getElementById('apB6').innerHTML=Minei_B[RodEscolhida][102];
      document.getElementById('ultB6').innerHTML=Minei_B[RodEscolhida][103];
      document.getElementById('penB6').innerHTML=Minei_B[RodEscolhida][104];
      document.getElementById('antB6').innerHTML=Minei_B[RodEscolhida][105];
      document.getElementById('qaB6').innerHTML=Minei_B[RodEscolhida][106];
      document.getElementById('qiB6').innerHTML=Minei_B[RodEscolhida][107];
  
      document.getElementById('logB7').innerHTML=Minei_B[RodEscolhida][108];
      document.getElementById('tecB7').innerHTML=Minei_B[RodEscolhida][110].nome;
      document.getElementById('clubB7').innerHTML=Minei_B[RodEscolhida][109][0];
      document.getElementById('nlB7').innerHTML=Minei_B[RodEscolhida][109][2];
      document.getElementById('varB7').innerHTML=Minei_B[RodEscolhida][111];
      document.getElementById('objB7').innerHTML=Minei_B[RodEscolhida][112];
      document.getElementById('ptB7').innerHTML=Minei_B[RodEscolhida][113];
      document.getElementById('vitB7').innerHTML=Minei_B[RodEscolhida][114];
      document.getElementById('empB7').innerHTML=Minei_B[RodEscolhida][115];
      document.getElementById('derB7').innerHTML=Minei_B[RodEscolhida][116];
      document.getElementById('gpB7').innerHTML=Minei_B[RodEscolhida][117];
      document.getElementById('gcB7').innerHTML=Minei_B[RodEscolhida][118];
      document.getElementById('sgB7').innerHTML=Minei_B[RodEscolhida][119];
      document.getElementById('apB7').innerHTML=Minei_B[RodEscolhida][120];
      document.getElementById('ultB7').innerHTML=Minei_B[RodEscolhida][121];
      document.getElementById('penB7').innerHTML=Minei_B[RodEscolhida][122];
      document.getElementById('antB7').innerHTML=Minei_B[RodEscolhida][123];
      document.getElementById('qaB7').innerHTML=Minei_B[RodEscolhida][124];
      document.getElementById('qiB7').innerHTML=Minei_B[RodEscolhida][125];
  
      document.getElementById('logB8').innerHTML=Minei_B[RodEscolhida][126];
      document.getElementById('tecB8').innerHTML=Minei_B[RodEscolhida][128].nome;
      document.getElementById('clubB8').innerHTML=Minei_B[RodEscolhida][127][0];
      document.getElementById('nlB8').innerHTML=Minei_B[RodEscolhida][127][2];
      document.getElementById('varB8').innerHTML=Minei_B[RodEscolhida][129];
      document.getElementById('objB8').innerHTML=Minei_B[RodEscolhida][130];
      document.getElementById('ptB8').innerHTML=Minei_B[RodEscolhida][131];
      document.getElementById('vitB8').innerHTML=Minei_B[RodEscolhida][132];
      document.getElementById('empB8').innerHTML=Minei_B[RodEscolhida][133];
      document.getElementById('derB8').innerHTML=Minei_B[RodEscolhida][134];
      document.getElementById('gpB8').innerHTML=Minei_B[RodEscolhida][135];
      document.getElementById('gcB8').innerHTML=Minei_B[RodEscolhida][136];
      document.getElementById('sgB8').innerHTML=Minei_B[RodEscolhida][137];
      document.getElementById('apB8').innerHTML=Minei_B[RodEscolhida][138];
      document.getElementById('ultB8').innerHTML=Minei_B[RodEscolhida][139];
      document.getElementById('penB8').innerHTML=Minei_B[RodEscolhida][140];
      document.getElementById('antB8').innerHTML=Minei_B[RodEscolhida][141];
      document.getElementById('qaB8').innerHTML=Minei_B[RodEscolhida][142];
      document.getElementById('qiB8').innerHTML=Minei_B[RodEscolhida][143];
  

      
    }


    
    else if(CampEscolhido==="Paran_A"){

      JogosDaRodada = Paran_Cal_A[RodEscolhida];


      document.getElementById('logB1').innerHTML=Paran_A[RodEscolhida][0];
      document.getElementById('tecB1').innerHTML=Paran_A[RodEscolhida][2].nome;
      document.getElementById('clubB1').innerHTML=Paran_A[RodEscolhida][1][0];
      document.getElementById('nlB1').innerHTML=Paran_A[RodEscolhida][1][2];
      document.getElementById('varB1').innerHTML=Paran_A[RodEscolhida][3];
      document.getElementById('objB1').innerHTML=Paran_A[RodEscolhida][4];
      document.getElementById('ptB1').innerHTML=Paran_A[RodEscolhida][5];
      document.getElementById('vitB1').innerHTML=Paran_A[RodEscolhida][6];
      document.getElementById('empB1').innerHTML=Paran_A[RodEscolhida][7];
      document.getElementById('derB1').innerHTML=Paran_A[RodEscolhida][8];
      document.getElementById('gpB1').innerHTML=Paran_A[RodEscolhida][9];
      document.getElementById('gcB1').innerHTML=Paran_A[RodEscolhida][10];
      document.getElementById('sgB1').innerHTML=Paran_A[RodEscolhida][11];
      document.getElementById('apB1').innerHTML=Paran_A[RodEscolhida][12];
      document.getElementById('ultB1').innerHTML=Paran_A[RodEscolhida][13];
      document.getElementById('penB1').innerHTML=Paran_A[RodEscolhida][14];
      document.getElementById('antB1').innerHTML=Paran_A[RodEscolhida][15];
      document.getElementById('qaB1').innerHTML=Paran_A[RodEscolhida][16];
      document.getElementById('qiB1').innerHTML=Paran_A[RodEscolhida][17];
  
      document.getElementById('logB2').innerHTML=Paran_A[RodEscolhida][18];
      document.getElementById('tecB2').innerHTML=Paran_A[RodEscolhida][20].nome;
      document.getElementById('clubB2').innerHTML=Paran_A[RodEscolhida][19][0];
      document.getElementById('nlB2').innerHTML=Paran_A[RodEscolhida][19][2];
      document.getElementById('varB2').innerHTML=Paran_A[RodEscolhida][21];
      document.getElementById('objB2').innerHTML=Paran_A[RodEscolhida][22];
      document.getElementById('ptB2').innerHTML=Paran_A[RodEscolhida][23];
      document.getElementById('vitB2').innerHTML=Paran_A[RodEscolhida][24];
      document.getElementById('empB2').innerHTML=Paran_A[RodEscolhida][25];
      document.getElementById('derB2').innerHTML=Paran_A[RodEscolhida][26];
      document.getElementById('gpB2').innerHTML=Paran_A[RodEscolhida][27];
      document.getElementById('gcB2').innerHTML=Paran_A[RodEscolhida][28];
      document.getElementById('sgB2').innerHTML=Paran_A[RodEscolhida][29];
      document.getElementById('apB2').innerHTML=Paran_A[RodEscolhida][30];
      document.getElementById('ultB2').innerHTML=Paran_A[RodEscolhida][31];
      document.getElementById('penB2').innerHTML=Paran_A[RodEscolhida][32];
      document.getElementById('antB2').innerHTML=Paran_A[RodEscolhida][33];
      document.getElementById('qaB2').innerHTML=Paran_A[RodEscolhida][34];
      document.getElementById('qiB2').innerHTML=Paran_A[RodEscolhida][35];
  
      document.getElementById('logB3').innerHTML=Paran_A[RodEscolhida][36];
      document.getElementById('tecB3').innerHTML=Paran_A[RodEscolhida][38].nome;
      document.getElementById('clubB3').innerHTML=Paran_A[RodEscolhida][37][0];
      document.getElementById('nlB3').innerHTML=Paran_A[RodEscolhida][37][2];
      document.getElementById('varB3').innerHTML=Paran_A[RodEscolhida][39];
      document.getElementById('objB3').innerHTML=Paran_A[RodEscolhida][40];
      document.getElementById('ptB3').innerHTML=Paran_A[RodEscolhida][41];
      document.getElementById('vitB3').innerHTML=Paran_A[RodEscolhida][42];
      document.getElementById('empB3').innerHTML=Paran_A[RodEscolhida][43];
      document.getElementById('derB3').innerHTML=Paran_A[RodEscolhida][44];
      document.getElementById('gpB3').innerHTML=Paran_A[RodEscolhida][45];
      document.getElementById('gcB3').innerHTML=Paran_A[RodEscolhida][46];
      document.getElementById('sgB3').innerHTML=Paran_A[RodEscolhida][47];
      document.getElementById('apB3').innerHTML=Paran_A[RodEscolhida][48];
      document.getElementById('ultB3').innerHTML=Paran_A[RodEscolhida][49];
      document.getElementById('penB3').innerHTML=Paran_A[RodEscolhida][50];
      document.getElementById('antB3').innerHTML=Paran_A[RodEscolhida][51];
      document.getElementById('qaB3').innerHTML=Paran_A[RodEscolhida][52];
      document.getElementById('qiB3').innerHTML=Paran_A[RodEscolhida][53];
  
      document.getElementById('logB4').innerHTML=Paran_A[RodEscolhida][54];
      document.getElementById('tecB4').innerHTML=Paran_A[RodEscolhida][56].nome;
      document.getElementById('clubB4').innerHTML=Paran_A[RodEscolhida][55][0];
      document.getElementById('nlB4').innerHTML=Paran_A[RodEscolhida][55][2];
      document.getElementById('varB4').innerHTML=Paran_A[RodEscolhida][57];
      document.getElementById('objB4').innerHTML=Paran_A[RodEscolhida][58];
      document.getElementById('ptB4').innerHTML=Paran_A[RodEscolhida][59];
      document.getElementById('vitB4').innerHTML=Paran_A[RodEscolhida][60];
      document.getElementById('empB4').innerHTML=Paran_A[RodEscolhida][61];
      document.getElementById('derB4').innerHTML=Paran_A[RodEscolhida][62];
      document.getElementById('gpB4').innerHTML=Paran_A[RodEscolhida][63];
      document.getElementById('gcB4').innerHTML=Paran_A[RodEscolhida][64];
      document.getElementById('sgB4').innerHTML=Paran_A[RodEscolhida][65];
      document.getElementById('apB4').innerHTML=Paran_A[RodEscolhida][66];
      document.getElementById('ultB4').innerHTML=Paran_A[RodEscolhida][67];
      document.getElementById('penB4').innerHTML=Paran_A[RodEscolhida][68];
      document.getElementById('antB4').innerHTML=Paran_A[RodEscolhida][69];
      document.getElementById('qaB4').innerHTML=Paran_A[RodEscolhida][70];
      document.getElementById('qiB4').innerHTML=Paran_A[RodEscolhida][71];
  
      document.getElementById('logB5').innerHTML=Paran_A[RodEscolhida][72];
      document.getElementById('tecB5').innerHTML=Paran_A[RodEscolhida][74].nome;
      document.getElementById('clubB5').innerHTML=Paran_A[RodEscolhida][73][0];
      document.getElementById('nlB5').innerHTML=Paran_A[RodEscolhida][73][2];
      document.getElementById('varB5').innerHTML=Paran_A[RodEscolhida][75];
      document.getElementById('objB5').innerHTML=Paran_A[RodEscolhida][76];
      document.getElementById('ptB5').innerHTML=Paran_A[RodEscolhida][77];
      document.getElementById('vitB5').innerHTML=Paran_A[RodEscolhida][78];
      document.getElementById('empB5').innerHTML=Paran_A[RodEscolhida][79];
      document.getElementById('derB5').innerHTML=Paran_A[RodEscolhida][80];
      document.getElementById('gpB5').innerHTML=Paran_A[RodEscolhida][81];
      document.getElementById('gcB5').innerHTML=Paran_A[RodEscolhida][82];
      document.getElementById('sgB5').innerHTML=Paran_A[RodEscolhida][83];
      document.getElementById('apB5').innerHTML=Paran_A[RodEscolhida][84];
      document.getElementById('ultB5').innerHTML=Paran_A[RodEscolhida][85];
      document.getElementById('penB5').innerHTML=Paran_A[RodEscolhida][86];
      document.getElementById('antB5').innerHTML=Paran_A[RodEscolhida][87];
      document.getElementById('qaB5').innerHTML=Paran_A[RodEscolhida][88];
      document.getElementById('qiB5').innerHTML=Paran_A[RodEscolhida][89];
  
      document.getElementById('logB6').innerHTML=Paran_A[RodEscolhida][90];
      document.getElementById('tecB6').innerHTML=Paran_A[RodEscolhida][92].nome;
      document.getElementById('clubB6').innerHTML=Paran_A[RodEscolhida][91][0];
      document.getElementById('nlB6').innerHTML=Paran_A[RodEscolhida][91][2];
      document.getElementById('varB6').innerHTML=Paran_A[RodEscolhida][93];
      document.getElementById('objB6').innerHTML=Paran_A[RodEscolhida][94];
      document.getElementById('ptB6').innerHTML=Paran_A[RodEscolhida][95];
      document.getElementById('vitB6').innerHTML=Paran_A[RodEscolhida][96];
      document.getElementById('empB6').innerHTML=Paran_A[RodEscolhida][97];
      document.getElementById('derB6').innerHTML=Paran_A[RodEscolhida][98];
      document.getElementById('gpB6').innerHTML=Paran_A[RodEscolhida][99];
      document.getElementById('gcB6').innerHTML=Paran_A[RodEscolhida][100];
      document.getElementById('sgB6').innerHTML=Paran_A[RodEscolhida][101];
      document.getElementById('apB6').innerHTML=Paran_A[RodEscolhida][102];
      document.getElementById('ultB6').innerHTML=Paran_A[RodEscolhida][103];
      document.getElementById('penB6').innerHTML=Paran_A[RodEscolhida][104];
      document.getElementById('antB6').innerHTML=Paran_A[RodEscolhida][105];
      document.getElementById('qaB6').innerHTML=Paran_A[RodEscolhida][106];
      document.getElementById('qiB6').innerHTML=Paran_A[RodEscolhida][107];
  
      document.getElementById('logB7').innerHTML=Paran_A[RodEscolhida][108];
      document.getElementById('tecB7').innerHTML=Paran_A[RodEscolhida][110].nome;
      document.getElementById('clubB7').innerHTML=Paran_A[RodEscolhida][109][0];
      document.getElementById('nlB7').innerHTML=Paran_A[RodEscolhida][109][2];
      document.getElementById('varB7').innerHTML=Paran_A[RodEscolhida][111];
      document.getElementById('objB7').innerHTML=Paran_A[RodEscolhida][112];
      document.getElementById('ptB7').innerHTML=Paran_A[RodEscolhida][113];
      document.getElementById('vitB7').innerHTML=Paran_A[RodEscolhida][114];
      document.getElementById('empB7').innerHTML=Paran_A[RodEscolhida][115];
      document.getElementById('derB7').innerHTML=Paran_A[RodEscolhida][116];
      document.getElementById('gpB7').innerHTML=Paran_A[RodEscolhida][117];
      document.getElementById('gcB7').innerHTML=Paran_A[RodEscolhida][118];
      document.getElementById('sgB7').innerHTML=Paran_A[RodEscolhida][119];
      document.getElementById('apB7').innerHTML=Paran_A[RodEscolhida][120];
      document.getElementById('ultB7').innerHTML=Paran_A[RodEscolhida][121];
      document.getElementById('penB7').innerHTML=Paran_A[RodEscolhida][122];
      document.getElementById('antB7').innerHTML=Paran_A[RodEscolhida][123];
      document.getElementById('qaB7').innerHTML=Paran_A[RodEscolhida][124];
      document.getElementById('qiB7').innerHTML=Paran_A[RodEscolhida][125];
  
      document.getElementById('logB8').innerHTML=Paran_A[RodEscolhida][126];
      document.getElementById('tecB8').innerHTML=Paran_A[RodEscolhida][128].nome;
      document.getElementById('clubB8').innerHTML=Paran_A[RodEscolhida][127][0];
      document.getElementById('nlB8').innerHTML=Paran_A[RodEscolhida][127][2];
      document.getElementById('varB8').innerHTML=Paran_A[RodEscolhida][129];
      document.getElementById('objB8').innerHTML=Paran_A[RodEscolhida][130];
      document.getElementById('ptB8').innerHTML=Paran_A[RodEscolhida][131];
      document.getElementById('vitB8').innerHTML=Paran_A[RodEscolhida][132];
      document.getElementById('empB8').innerHTML=Paran_A[RodEscolhida][133];
      document.getElementById('derB8').innerHTML=Paran_A[RodEscolhida][134];
      document.getElementById('gpB8').innerHTML=Paran_A[RodEscolhida][135];
      document.getElementById('gcB8').innerHTML=Paran_A[RodEscolhida][136];
      document.getElementById('sgB8').innerHTML=Paran_A[RodEscolhida][137];
      document.getElementById('apB8').innerHTML=Paran_A[RodEscolhida][138];
      document.getElementById('ultB8').innerHTML=Paran_A[RodEscolhida][139];
      document.getElementById('penB8').innerHTML=Paran_A[RodEscolhida][140];
      document.getElementById('antB8').innerHTML=Paran_A[RodEscolhida][141];
      document.getElementById('qaB8').innerHTML=Paran_A[RodEscolhida][142];
      document.getElementById('qiB8').innerHTML=Paran_A[RodEscolhida][143];
  

      
    }


    else if(CampEscolhido==="Paran_B"){

      JogosDaRodada = Paran_Cal_B[RodEscolhida];


      document.getElementById('logB1').innerHTML=Paran_B[RodEscolhida][0];
      document.getElementById('tecB1').innerHTML=Paran_B[RodEscolhida][2].nome;
      document.getElementById('clubB1').innerHTML=Paran_B[RodEscolhida][1][0];
      document.getElementById('nlB1').innerHTML=Paran_B[RodEscolhida][1][2];
      document.getElementById('varB1').innerHTML=Paran_B[RodEscolhida][3];
      document.getElementById('objB1').innerHTML=Paran_B[RodEscolhida][4];
      document.getElementById('ptB1').innerHTML=Paran_B[RodEscolhida][5];
      document.getElementById('vitB1').innerHTML=Paran_B[RodEscolhida][6];
      document.getElementById('empB1').innerHTML=Paran_B[RodEscolhida][7];
      document.getElementById('derB1').innerHTML=Paran_B[RodEscolhida][8];
      document.getElementById('gpB1').innerHTML=Paran_B[RodEscolhida][9];
      document.getElementById('gcB1').innerHTML=Paran_B[RodEscolhida][10];
      document.getElementById('sgB1').innerHTML=Paran_B[RodEscolhida][11];
      document.getElementById('apB1').innerHTML=Paran_B[RodEscolhida][12];
      document.getElementById('ultB1').innerHTML=Paran_B[RodEscolhida][13];
      document.getElementById('penB1').innerHTML=Paran_B[RodEscolhida][14];
      document.getElementById('antB1').innerHTML=Paran_B[RodEscolhida][15];
      document.getElementById('qaB1').innerHTML=Paran_B[RodEscolhida][16];
      document.getElementById('qiB1').innerHTML=Paran_B[RodEscolhida][17];
  
      document.getElementById('logB2').innerHTML=Paran_B[RodEscolhida][18];
      document.getElementById('tecB2').innerHTML=Paran_B[RodEscolhida][20].nome;
      document.getElementById('clubB2').innerHTML=Paran_B[RodEscolhida][19][0];
      document.getElementById('nlB2').innerHTML=Paran_B[RodEscolhida][19][2];
      document.getElementById('varB2').innerHTML=Paran_B[RodEscolhida][21];
      document.getElementById('objB2').innerHTML=Paran_B[RodEscolhida][22];
      document.getElementById('ptB2').innerHTML=Paran_B[RodEscolhida][23];
      document.getElementById('vitB2').innerHTML=Paran_B[RodEscolhida][24];
      document.getElementById('empB2').innerHTML=Paran_B[RodEscolhida][25];
      document.getElementById('derB2').innerHTML=Paran_B[RodEscolhida][26];
      document.getElementById('gpB2').innerHTML=Paran_B[RodEscolhida][27];
      document.getElementById('gcB2').innerHTML=Paran_B[RodEscolhida][28];
      document.getElementById('sgB2').innerHTML=Paran_B[RodEscolhida][29];
      document.getElementById('apB2').innerHTML=Paran_B[RodEscolhida][30];
      document.getElementById('ultB2').innerHTML=Paran_B[RodEscolhida][31];
      document.getElementById('penB2').innerHTML=Paran_B[RodEscolhida][32];
      document.getElementById('antB2').innerHTML=Paran_B[RodEscolhida][33];
      document.getElementById('qaB2').innerHTML=Paran_B[RodEscolhida][34];
      document.getElementById('qiB2').innerHTML=Paran_B[RodEscolhida][35];
  
      document.getElementById('logB3').innerHTML=Paran_B[RodEscolhida][36];
      document.getElementById('tecB3').innerHTML=Paran_B[RodEscolhida][38].nome;
      document.getElementById('clubB3').innerHTML=Paran_B[RodEscolhida][37][0];
      document.getElementById('nlB3').innerHTML=Paran_B[RodEscolhida][37][2];
      document.getElementById('varB3').innerHTML=Paran_B[RodEscolhida][39];
      document.getElementById('objB3').innerHTML=Paran_B[RodEscolhida][40];
      document.getElementById('ptB3').innerHTML=Paran_B[RodEscolhida][41];
      document.getElementById('vitB3').innerHTML=Paran_B[RodEscolhida][42];
      document.getElementById('empB3').innerHTML=Paran_B[RodEscolhida][43];
      document.getElementById('derB3').innerHTML=Paran_B[RodEscolhida][44];
      document.getElementById('gpB3').innerHTML=Paran_B[RodEscolhida][45];
      document.getElementById('gcB3').innerHTML=Paran_B[RodEscolhida][46];
      document.getElementById('sgB3').innerHTML=Paran_B[RodEscolhida][47];
      document.getElementById('apB3').innerHTML=Paran_B[RodEscolhida][48];
      document.getElementById('ultB3').innerHTML=Paran_B[RodEscolhida][49];
      document.getElementById('penB3').innerHTML=Paran_B[RodEscolhida][50];
      document.getElementById('antB3').innerHTML=Paran_B[RodEscolhida][51];
      document.getElementById('qaB3').innerHTML=Paran_B[RodEscolhida][52];
      document.getElementById('qiB3').innerHTML=Paran_B[RodEscolhida][53];
  
      document.getElementById('logB4').innerHTML=Paran_B[RodEscolhida][54];
      document.getElementById('tecB4').innerHTML=Paran_B[RodEscolhida][56].nome;
      document.getElementById('clubB4').innerHTML=Paran_B[RodEscolhida][55][0];
      document.getElementById('nlB4').innerHTML=Paran_B[RodEscolhida][55][2];
      document.getElementById('varB4').innerHTML=Paran_B[RodEscolhida][57];
      document.getElementById('objB4').innerHTML=Paran_B[RodEscolhida][58];
      document.getElementById('ptB4').innerHTML=Paran_B[RodEscolhida][59];
      document.getElementById('vitB4').innerHTML=Paran_B[RodEscolhida][60];
      document.getElementById('empB4').innerHTML=Paran_B[RodEscolhida][61];
      document.getElementById('derB4').innerHTML=Paran_B[RodEscolhida][62];
      document.getElementById('gpB4').innerHTML=Paran_B[RodEscolhida][63];
      document.getElementById('gcB4').innerHTML=Paran_B[RodEscolhida][64];
      document.getElementById('sgB4').innerHTML=Paran_B[RodEscolhida][65];
      document.getElementById('apB4').innerHTML=Paran_B[RodEscolhida][66];
      document.getElementById('ultB4').innerHTML=Paran_B[RodEscolhida][67];
      document.getElementById('penB4').innerHTML=Paran_B[RodEscolhida][68];
      document.getElementById('antB4').innerHTML=Paran_B[RodEscolhida][69];
      document.getElementById('qaB4').innerHTML=Paran_B[RodEscolhida][70];
      document.getElementById('qiB4').innerHTML=Paran_B[RodEscolhida][71];
  
      document.getElementById('logB5').innerHTML=Paran_B[RodEscolhida][72];
      document.getElementById('tecB5').innerHTML=Paran_B[RodEscolhida][74].nome;
      document.getElementById('clubB5').innerHTML=Paran_B[RodEscolhida][73][0];
      document.getElementById('nlB5').innerHTML=Paran_B[RodEscolhida][73][2];
      document.getElementById('varB5').innerHTML=Paran_B[RodEscolhida][75];
      document.getElementById('objB5').innerHTML=Paran_B[RodEscolhida][76];
      document.getElementById('ptB5').innerHTML=Paran_B[RodEscolhida][77];
      document.getElementById('vitB5').innerHTML=Paran_B[RodEscolhida][78];
      document.getElementById('empB5').innerHTML=Paran_B[RodEscolhida][79];
      document.getElementById('derB5').innerHTML=Paran_B[RodEscolhida][80];
      document.getElementById('gpB5').innerHTML=Paran_B[RodEscolhida][81];
      document.getElementById('gcB5').innerHTML=Paran_B[RodEscolhida][82];
      document.getElementById('sgB5').innerHTML=Paran_B[RodEscolhida][83];
      document.getElementById('apB5').innerHTML=Paran_B[RodEscolhida][84];
      document.getElementById('ultB5').innerHTML=Paran_B[RodEscolhida][85];
      document.getElementById('penB5').innerHTML=Paran_B[RodEscolhida][86];
      document.getElementById('antB5').innerHTML=Paran_B[RodEscolhida][87];
      document.getElementById('qaB5').innerHTML=Paran_B[RodEscolhida][88];
      document.getElementById('qiB5').innerHTML=Paran_B[RodEscolhida][89];
  
      document.getElementById('logB6').innerHTML=Paran_B[RodEscolhida][90];
      document.getElementById('tecB6').innerHTML=Paran_B[RodEscolhida][92].nome;
      document.getElementById('clubB6').innerHTML=Paran_B[RodEscolhida][91][0];
      document.getElementById('nlB6').innerHTML=Paran_B[RodEscolhida][91][2];
      document.getElementById('varB6').innerHTML=Paran_B[RodEscolhida][93];
      document.getElementById('objB6').innerHTML=Paran_B[RodEscolhida][94];
      document.getElementById('ptB6').innerHTML=Paran_B[RodEscolhida][95];
      document.getElementById('vitB6').innerHTML=Paran_B[RodEscolhida][96];
      document.getElementById('empB6').innerHTML=Paran_B[RodEscolhida][97];
      document.getElementById('derB6').innerHTML=Paran_B[RodEscolhida][98];
      document.getElementById('gpB6').innerHTML=Paran_B[RodEscolhida][99];
      document.getElementById('gcB6').innerHTML=Paran_B[RodEscolhida][100];
      document.getElementById('sgB6').innerHTML=Paran_B[RodEscolhida][101];
      document.getElementById('apB6').innerHTML=Paran_B[RodEscolhida][102];
      document.getElementById('ultB6').innerHTML=Paran_B[RodEscolhida][103];
      document.getElementById('penB6').innerHTML=Paran_B[RodEscolhida][104];
      document.getElementById('antB6').innerHTML=Paran_B[RodEscolhida][105];
      document.getElementById('qaB6').innerHTML=Paran_B[RodEscolhida][106];
      document.getElementById('qiB6').innerHTML=Paran_B[RodEscolhida][107];
  
      document.getElementById('logB7').innerHTML=Paran_B[RodEscolhida][108];
      document.getElementById('tecB7').innerHTML=Paran_B[RodEscolhida][110].nome;
      document.getElementById('clubB7').innerHTML=Paran_B[RodEscolhida][109][0];
      document.getElementById('nlB7').innerHTML=Paran_B[RodEscolhida][109][2];
      document.getElementById('varB7').innerHTML=Paran_B[RodEscolhida][111];
      document.getElementById('objB7').innerHTML=Paran_B[RodEscolhida][112];
      document.getElementById('ptB7').innerHTML=Paran_B[RodEscolhida][113];
      document.getElementById('vitB7').innerHTML=Paran_B[RodEscolhida][114];
      document.getElementById('empB7').innerHTML=Paran_B[RodEscolhida][115];
      document.getElementById('derB7').innerHTML=Paran_B[RodEscolhida][116];
      document.getElementById('gpB7').innerHTML=Paran_B[RodEscolhida][117];
      document.getElementById('gcB7').innerHTML=Paran_B[RodEscolhida][118];
      document.getElementById('sgB7').innerHTML=Paran_B[RodEscolhida][119];
      document.getElementById('apB7').innerHTML=Paran_B[RodEscolhida][120];
      document.getElementById('ultB7').innerHTML=Paran_B[RodEscolhida][121];
      document.getElementById('penB7').innerHTML=Paran_B[RodEscolhida][122];
      document.getElementById('antB7').innerHTML=Paran_B[RodEscolhida][123];
      document.getElementById('qaB7').innerHTML=Paran_B[RodEscolhida][124];
      document.getElementById('qiB7').innerHTML=Paran_B[RodEscolhida][125];
  
      document.getElementById('logB8').innerHTML=Paran_B[RodEscolhida][126];
      document.getElementById('tecB8').innerHTML=Paran_B[RodEscolhida][128].nome;
      document.getElementById('clubB8').innerHTML=Paran_B[RodEscolhida][127][0];
      document.getElementById('nlB8').innerHTML=Paran_B[RodEscolhida][127][2];
      document.getElementById('varB8').innerHTML=Paran_B[RodEscolhida][129];
      document.getElementById('objB8').innerHTML=Paran_B[RodEscolhida][130];
      document.getElementById('ptB8').innerHTML=Paran_B[RodEscolhida][131];
      document.getElementById('vitB8').innerHTML=Paran_B[RodEscolhida][132];
      document.getElementById('empB8').innerHTML=Paran_B[RodEscolhida][133];
      document.getElementById('derB8').innerHTML=Paran_B[RodEscolhida][134];
      document.getElementById('gpB8').innerHTML=Paran_B[RodEscolhida][135];
      document.getElementById('gcB8').innerHTML=Paran_B[RodEscolhida][136];
      document.getElementById('sgB8').innerHTML=Paran_B[RodEscolhida][137];
      document.getElementById('apB8').innerHTML=Paran_B[RodEscolhida][138];
      document.getElementById('ultB8').innerHTML=Paran_B[RodEscolhida][139];
      document.getElementById('penB8').innerHTML=Paran_B[RodEscolhida][140];
      document.getElementById('antB8').innerHTML=Paran_B[RodEscolhida][141];
      document.getElementById('qaB8').innerHTML=Paran_B[RodEscolhida][142];
      document.getElementById('qiB8').innerHTML=Paran_B[RodEscolhida][143];
  

      
    }


    
    else if(CampEscolhido==="Catar_A"){

      JogosDaRodada = Catar_Cal_A[RodEscolhida];


      document.getElementById('logB1').innerHTML=Catar_A[RodEscolhida][0];
      document.getElementById('tecB1').innerHTML=Catar_A[RodEscolhida][2].nome;
      document.getElementById('clubB1').innerHTML=Catar_A[RodEscolhida][1][0];
      document.getElementById('nlB1').innerHTML=Catar_A[RodEscolhida][1][2];
      document.getElementById('varB1').innerHTML=Catar_A[RodEscolhida][3];
      document.getElementById('objB1').innerHTML=Catar_A[RodEscolhida][4];
      document.getElementById('ptB1').innerHTML=Catar_A[RodEscolhida][5];
      document.getElementById('vitB1').innerHTML=Catar_A[RodEscolhida][6];
      document.getElementById('empB1').innerHTML=Catar_A[RodEscolhida][7];
      document.getElementById('derB1').innerHTML=Catar_A[RodEscolhida][8];
      document.getElementById('gpB1').innerHTML=Catar_A[RodEscolhida][9];
      document.getElementById('gcB1').innerHTML=Catar_A[RodEscolhida][10];
      document.getElementById('sgB1').innerHTML=Catar_A[RodEscolhida][11];
      document.getElementById('apB1').innerHTML=Catar_A[RodEscolhida][12];
      document.getElementById('ultB1').innerHTML=Catar_A[RodEscolhida][13];
      document.getElementById('penB1').innerHTML=Catar_A[RodEscolhida][14];
      document.getElementById('antB1').innerHTML=Catar_A[RodEscolhida][15];
      document.getElementById('qaB1').innerHTML=Catar_A[RodEscolhida][16];
      document.getElementById('qiB1').innerHTML=Catar_A[RodEscolhida][17];
  
      document.getElementById('logB2').innerHTML=Catar_A[RodEscolhida][18];
      document.getElementById('tecB2').innerHTML=Catar_A[RodEscolhida][20].nome;
      document.getElementById('clubB2').innerHTML=Catar_A[RodEscolhida][19][0];
      document.getElementById('nlB2').innerHTML=Catar_A[RodEscolhida][19][2];
      document.getElementById('varB2').innerHTML=Catar_A[RodEscolhida][21];
      document.getElementById('objB2').innerHTML=Catar_A[RodEscolhida][22];
      document.getElementById('ptB2').innerHTML=Catar_A[RodEscolhida][23];
      document.getElementById('vitB2').innerHTML=Catar_A[RodEscolhida][24];
      document.getElementById('empB2').innerHTML=Catar_A[RodEscolhida][25];
      document.getElementById('derB2').innerHTML=Catar_A[RodEscolhida][26];
      document.getElementById('gpB2').innerHTML=Catar_A[RodEscolhida][27];
      document.getElementById('gcB2').innerHTML=Catar_A[RodEscolhida][28];
      document.getElementById('sgB2').innerHTML=Catar_A[RodEscolhida][29];
      document.getElementById('apB2').innerHTML=Catar_A[RodEscolhida][30];
      document.getElementById('ultB2').innerHTML=Catar_A[RodEscolhida][31];
      document.getElementById('penB2').innerHTML=Catar_A[RodEscolhida][32];
      document.getElementById('antB2').innerHTML=Catar_A[RodEscolhida][33];
      document.getElementById('qaB2').innerHTML=Catar_A[RodEscolhida][34];
      document.getElementById('qiB2').innerHTML=Catar_A[RodEscolhida][35];
  
      document.getElementById('logB3').innerHTML=Catar_A[RodEscolhida][36];
      document.getElementById('tecB3').innerHTML=Catar_A[RodEscolhida][38].nome;
      document.getElementById('clubB3').innerHTML=Catar_A[RodEscolhida][37][0];
      document.getElementById('nlB3').innerHTML=Catar_A[RodEscolhida][37][2];
      document.getElementById('varB3').innerHTML=Catar_A[RodEscolhida][39];
      document.getElementById('objB3').innerHTML=Catar_A[RodEscolhida][40];
      document.getElementById('ptB3').innerHTML=Catar_A[RodEscolhida][41];
      document.getElementById('vitB3').innerHTML=Catar_A[RodEscolhida][42];
      document.getElementById('empB3').innerHTML=Catar_A[RodEscolhida][43];
      document.getElementById('derB3').innerHTML=Catar_A[RodEscolhida][44];
      document.getElementById('gpB3').innerHTML=Catar_A[RodEscolhida][45];
      document.getElementById('gcB3').innerHTML=Catar_A[RodEscolhida][46];
      document.getElementById('sgB3').innerHTML=Catar_A[RodEscolhida][47];
      document.getElementById('apB3').innerHTML=Catar_A[RodEscolhida][48];
      document.getElementById('ultB3').innerHTML=Catar_A[RodEscolhida][49];
      document.getElementById('penB3').innerHTML=Catar_A[RodEscolhida][50];
      document.getElementById('antB3').innerHTML=Catar_A[RodEscolhida][51];
      document.getElementById('qaB3').innerHTML=Catar_A[RodEscolhida][52];
      document.getElementById('qiB3').innerHTML=Catar_A[RodEscolhida][53];
  
      document.getElementById('logB4').innerHTML=Catar_A[RodEscolhida][54];
      document.getElementById('tecB4').innerHTML=Catar_A[RodEscolhida][56].nome;
      document.getElementById('clubB4').innerHTML=Catar_A[RodEscolhida][55][0];
      document.getElementById('nlB4').innerHTML=Catar_A[RodEscolhida][55][2];
      document.getElementById('varB4').innerHTML=Catar_A[RodEscolhida][57];
      document.getElementById('objB4').innerHTML=Catar_A[RodEscolhida][58];
      document.getElementById('ptB4').innerHTML=Catar_A[RodEscolhida][59];
      document.getElementById('vitB4').innerHTML=Catar_A[RodEscolhida][60];
      document.getElementById('empB4').innerHTML=Catar_A[RodEscolhida][61];
      document.getElementById('derB4').innerHTML=Catar_A[RodEscolhida][62];
      document.getElementById('gpB4').innerHTML=Catar_A[RodEscolhida][63];
      document.getElementById('gcB4').innerHTML=Catar_A[RodEscolhida][64];
      document.getElementById('sgB4').innerHTML=Catar_A[RodEscolhida][65];
      document.getElementById('apB4').innerHTML=Catar_A[RodEscolhida][66];
      document.getElementById('ultB4').innerHTML=Catar_A[RodEscolhida][67];
      document.getElementById('penB4').innerHTML=Catar_A[RodEscolhida][68];
      document.getElementById('antB4').innerHTML=Catar_A[RodEscolhida][69];
      document.getElementById('qaB4').innerHTML=Catar_A[RodEscolhida][70];
      document.getElementById('qiB4').innerHTML=Catar_A[RodEscolhida][71];
  
      document.getElementById('logB5').innerHTML=Catar_A[RodEscolhida][72];
      document.getElementById('tecB5').innerHTML=Catar_A[RodEscolhida][74].nome;
      document.getElementById('clubB5').innerHTML=Catar_A[RodEscolhida][73][0];
      document.getElementById('nlB5').innerHTML=Catar_A[RodEscolhida][73][2];
      document.getElementById('varB5').innerHTML=Catar_A[RodEscolhida][75];
      document.getElementById('objB5').innerHTML=Catar_A[RodEscolhida][76];
      document.getElementById('ptB5').innerHTML=Catar_A[RodEscolhida][77];
      document.getElementById('vitB5').innerHTML=Catar_A[RodEscolhida][78];
      document.getElementById('empB5').innerHTML=Catar_A[RodEscolhida][79];
      document.getElementById('derB5').innerHTML=Catar_A[RodEscolhida][80];
      document.getElementById('gpB5').innerHTML=Catar_A[RodEscolhida][81];
      document.getElementById('gcB5').innerHTML=Catar_A[RodEscolhida][82];
      document.getElementById('sgB5').innerHTML=Catar_A[RodEscolhida][83];
      document.getElementById('apB5').innerHTML=Catar_A[RodEscolhida][84];
      document.getElementById('ultB5').innerHTML=Catar_A[RodEscolhida][85];
      document.getElementById('penB5').innerHTML=Catar_A[RodEscolhida][86];
      document.getElementById('antB5').innerHTML=Catar_A[RodEscolhida][87];
      document.getElementById('qaB5').innerHTML=Catar_A[RodEscolhida][88];
      document.getElementById('qiB5').innerHTML=Catar_A[RodEscolhida][89];
  
      document.getElementById('logB6').innerHTML=Catar_A[RodEscolhida][90];
      document.getElementById('tecB6').innerHTML=Catar_A[RodEscolhida][92].nome;
      document.getElementById('clubB6').innerHTML=Catar_A[RodEscolhida][91][0];
      document.getElementById('nlB6').innerHTML=Catar_A[RodEscolhida][91][2];
      document.getElementById('varB6').innerHTML=Catar_A[RodEscolhida][93];
      document.getElementById('objB6').innerHTML=Catar_A[RodEscolhida][94];
      document.getElementById('ptB6').innerHTML=Catar_A[RodEscolhida][95];
      document.getElementById('vitB6').innerHTML=Catar_A[RodEscolhida][96];
      document.getElementById('empB6').innerHTML=Catar_A[RodEscolhida][97];
      document.getElementById('derB6').innerHTML=Catar_A[RodEscolhida][98];
      document.getElementById('gpB6').innerHTML=Catar_A[RodEscolhida][99];
      document.getElementById('gcB6').innerHTML=Catar_A[RodEscolhida][100];
      document.getElementById('sgB6').innerHTML=Catar_A[RodEscolhida][101];
      document.getElementById('apB6').innerHTML=Catar_A[RodEscolhida][102];
      document.getElementById('ultB6').innerHTML=Catar_A[RodEscolhida][103];
      document.getElementById('penB6').innerHTML=Catar_A[RodEscolhida][104];
      document.getElementById('antB6').innerHTML=Catar_A[RodEscolhida][105];
      document.getElementById('qaB6').innerHTML=Catar_A[RodEscolhida][106];
      document.getElementById('qiB6').innerHTML=Catar_A[RodEscolhida][107];
  
      document.getElementById('logB7').innerHTML=Catar_A[RodEscolhida][108];
      document.getElementById('tecB7').innerHTML=Catar_A[RodEscolhida][110].nome;
      document.getElementById('clubB7').innerHTML=Catar_A[RodEscolhida][109][0];
      document.getElementById('nlB7').innerHTML=Catar_A[RodEscolhida][109][2];
      document.getElementById('varB7').innerHTML=Catar_A[RodEscolhida][111];
      document.getElementById('objB7').innerHTML=Catar_A[RodEscolhida][112];
      document.getElementById('ptB7').innerHTML=Catar_A[RodEscolhida][113];
      document.getElementById('vitB7').innerHTML=Catar_A[RodEscolhida][114];
      document.getElementById('empB7').innerHTML=Catar_A[RodEscolhida][115];
      document.getElementById('derB7').innerHTML=Catar_A[RodEscolhida][116];
      document.getElementById('gpB7').innerHTML=Catar_A[RodEscolhida][117];
      document.getElementById('gcB7').innerHTML=Catar_A[RodEscolhida][118];
      document.getElementById('sgB7').innerHTML=Catar_A[RodEscolhida][119];
      document.getElementById('apB7').innerHTML=Catar_A[RodEscolhida][120];
      document.getElementById('ultB7').innerHTML=Catar_A[RodEscolhida][121];
      document.getElementById('penB7').innerHTML=Catar_A[RodEscolhida][122];
      document.getElementById('antB7').innerHTML=Catar_A[RodEscolhida][123];
      document.getElementById('qaB7').innerHTML=Catar_A[RodEscolhida][124];
      document.getElementById('qiB7').innerHTML=Catar_A[RodEscolhida][125];
  
      document.getElementById('logB8').innerHTML=Catar_A[RodEscolhida][126];
      document.getElementById('tecB8').innerHTML=Catar_A[RodEscolhida][128].nome;
      document.getElementById('clubB8').innerHTML=Catar_A[RodEscolhida][127][0];
      document.getElementById('nlB8').innerHTML=Catar_A[RodEscolhida][127][2];
      document.getElementById('varB8').innerHTML=Catar_A[RodEscolhida][129];
      document.getElementById('objB8').innerHTML=Catar_A[RodEscolhida][130];
      document.getElementById('ptB8').innerHTML=Catar_A[RodEscolhida][131];
      document.getElementById('vitB8').innerHTML=Catar_A[RodEscolhida][132];
      document.getElementById('empB8').innerHTML=Catar_A[RodEscolhida][133];
      document.getElementById('derB8').innerHTML=Catar_A[RodEscolhida][134];
      document.getElementById('gpB8').innerHTML=Catar_A[RodEscolhida][135];
      document.getElementById('gcB8').innerHTML=Catar_A[RodEscolhida][136];
      document.getElementById('sgB8').innerHTML=Catar_A[RodEscolhida][137];
      document.getElementById('apB8').innerHTML=Catar_A[RodEscolhida][138];
      document.getElementById('ultB8').innerHTML=Catar_A[RodEscolhida][139];
      document.getElementById('penB8').innerHTML=Catar_A[RodEscolhida][140];
      document.getElementById('antB8').innerHTML=Catar_A[RodEscolhida][141];
      document.getElementById('qaB8').innerHTML=Catar_A[RodEscolhida][142];
      document.getElementById('qiB8').innerHTML=Catar_A[RodEscolhida][143];
  

      
    }


    else if(CampEscolhido==="Catar_B"){

      JogosDaRodada = Catar_Cal_B[RodEscolhida];


      document.getElementById('logB1').innerHTML=Catar_B[RodEscolhida][0];
      document.getElementById('tecB1').innerHTML=Catar_B[RodEscolhida][2].nome;
      document.getElementById('clubB1').innerHTML=Catar_B[RodEscolhida][1][0];
      document.getElementById('nlB1').innerHTML=Catar_B[RodEscolhida][1][2];
      document.getElementById('varB1').innerHTML=Catar_B[RodEscolhida][3];
      document.getElementById('objB1').innerHTML=Catar_B[RodEscolhida][4];
      document.getElementById('ptB1').innerHTML=Catar_B[RodEscolhida][5];
      document.getElementById('vitB1').innerHTML=Catar_B[RodEscolhida][6];
      document.getElementById('empB1').innerHTML=Catar_B[RodEscolhida][7];
      document.getElementById('derB1').innerHTML=Catar_B[RodEscolhida][8];
      document.getElementById('gpB1').innerHTML=Catar_B[RodEscolhida][9];
      document.getElementById('gcB1').innerHTML=Catar_B[RodEscolhida][10];
      document.getElementById('sgB1').innerHTML=Catar_B[RodEscolhida][11];
      document.getElementById('apB1').innerHTML=Catar_B[RodEscolhida][12];
      document.getElementById('ultB1').innerHTML=Catar_B[RodEscolhida][13];
      document.getElementById('penB1').innerHTML=Catar_B[RodEscolhida][14];
      document.getElementById('antB1').innerHTML=Catar_B[RodEscolhida][15];
      document.getElementById('qaB1').innerHTML=Catar_B[RodEscolhida][16];
      document.getElementById('qiB1').innerHTML=Catar_B[RodEscolhida][17];
  
      document.getElementById('logB2').innerHTML=Catar_B[RodEscolhida][18];
      document.getElementById('tecB2').innerHTML=Catar_B[RodEscolhida][20].nome;
      document.getElementById('clubB2').innerHTML=Catar_B[RodEscolhida][19][0];
      document.getElementById('nlB2').innerHTML=Catar_B[RodEscolhida][19][2];
      document.getElementById('varB2').innerHTML=Catar_B[RodEscolhida][21];
      document.getElementById('objB2').innerHTML=Catar_B[RodEscolhida][22];
      document.getElementById('ptB2').innerHTML=Catar_B[RodEscolhida][23];
      document.getElementById('vitB2').innerHTML=Catar_B[RodEscolhida][24];
      document.getElementById('empB2').innerHTML=Catar_B[RodEscolhida][25];
      document.getElementById('derB2').innerHTML=Catar_B[RodEscolhida][26];
      document.getElementById('gpB2').innerHTML=Catar_B[RodEscolhida][27];
      document.getElementById('gcB2').innerHTML=Catar_B[RodEscolhida][28];
      document.getElementById('sgB2').innerHTML=Catar_B[RodEscolhida][29];
      document.getElementById('apB2').innerHTML=Catar_B[RodEscolhida][30];
      document.getElementById('ultB2').innerHTML=Catar_B[RodEscolhida][31];
      document.getElementById('penB2').innerHTML=Catar_B[RodEscolhida][32];
      document.getElementById('antB2').innerHTML=Catar_B[RodEscolhida][33];
      document.getElementById('qaB2').innerHTML=Catar_B[RodEscolhida][34];
      document.getElementById('qiB2').innerHTML=Catar_B[RodEscolhida][35];
  
      document.getElementById('logB3').innerHTML=Catar_B[RodEscolhida][36];
      document.getElementById('tecB3').innerHTML=Catar_B[RodEscolhida][38].nome;
      document.getElementById('clubB3').innerHTML=Catar_B[RodEscolhida][37][0];
      document.getElementById('nlB3').innerHTML=Catar_B[RodEscolhida][37][2];
      document.getElementById('varB3').innerHTML=Catar_B[RodEscolhida][39];
      document.getElementById('objB3').innerHTML=Catar_B[RodEscolhida][40];
      document.getElementById('ptB3').innerHTML=Catar_B[RodEscolhida][41];
      document.getElementById('vitB3').innerHTML=Catar_B[RodEscolhida][42];
      document.getElementById('empB3').innerHTML=Catar_B[RodEscolhida][43];
      document.getElementById('derB3').innerHTML=Catar_B[RodEscolhida][44];
      document.getElementById('gpB3').innerHTML=Catar_B[RodEscolhida][45];
      document.getElementById('gcB3').innerHTML=Catar_B[RodEscolhida][46];
      document.getElementById('sgB3').innerHTML=Catar_B[RodEscolhida][47];
      document.getElementById('apB3').innerHTML=Catar_B[RodEscolhida][48];
      document.getElementById('ultB3').innerHTML=Catar_B[RodEscolhida][49];
      document.getElementById('penB3').innerHTML=Catar_B[RodEscolhida][50];
      document.getElementById('antB3').innerHTML=Catar_B[RodEscolhida][51];
      document.getElementById('qaB3').innerHTML=Catar_B[RodEscolhida][52];
      document.getElementById('qiB3').innerHTML=Catar_B[RodEscolhida][53];
  
      document.getElementById('logB4').innerHTML=Catar_B[RodEscolhida][54];
      document.getElementById('tecB4').innerHTML=Catar_B[RodEscolhida][56].nome;
      document.getElementById('clubB4').innerHTML=Catar_B[RodEscolhida][55][0];
      document.getElementById('nlB4').innerHTML=Catar_B[RodEscolhida][55][2];
      document.getElementById('varB4').innerHTML=Catar_B[RodEscolhida][57];
      document.getElementById('objB4').innerHTML=Catar_B[RodEscolhida][58];
      document.getElementById('ptB4').innerHTML=Catar_B[RodEscolhida][59];
      document.getElementById('vitB4').innerHTML=Catar_B[RodEscolhida][60];
      document.getElementById('empB4').innerHTML=Catar_B[RodEscolhida][61];
      document.getElementById('derB4').innerHTML=Catar_B[RodEscolhida][62];
      document.getElementById('gpB4').innerHTML=Catar_B[RodEscolhida][63];
      document.getElementById('gcB4').innerHTML=Catar_B[RodEscolhida][64];
      document.getElementById('sgB4').innerHTML=Catar_B[RodEscolhida][65];
      document.getElementById('apB4').innerHTML=Catar_B[RodEscolhida][66];
      document.getElementById('ultB4').innerHTML=Catar_B[RodEscolhida][67];
      document.getElementById('penB4').innerHTML=Catar_B[RodEscolhida][68];
      document.getElementById('antB4').innerHTML=Catar_B[RodEscolhida][69];
      document.getElementById('qaB4').innerHTML=Catar_B[RodEscolhida][70];
      document.getElementById('qiB4').innerHTML=Catar_B[RodEscolhida][71];
  
      document.getElementById('logB5').innerHTML=Catar_B[RodEscolhida][72];
      document.getElementById('tecB5').innerHTML=Catar_B[RodEscolhida][74].nome;
      document.getElementById('clubB5').innerHTML=Catar_B[RodEscolhida][73][0];
      document.getElementById('nlB5').innerHTML=Catar_B[RodEscolhida][73][2];
      document.getElementById('varB5').innerHTML=Catar_B[RodEscolhida][75];
      document.getElementById('objB5').innerHTML=Catar_B[RodEscolhida][76];
      document.getElementById('ptB5').innerHTML=Catar_B[RodEscolhida][77];
      document.getElementById('vitB5').innerHTML=Catar_B[RodEscolhida][78];
      document.getElementById('empB5').innerHTML=Catar_B[RodEscolhida][79];
      document.getElementById('derB5').innerHTML=Catar_B[RodEscolhida][80];
      document.getElementById('gpB5').innerHTML=Catar_B[RodEscolhida][81];
      document.getElementById('gcB5').innerHTML=Catar_B[RodEscolhida][82];
      document.getElementById('sgB5').innerHTML=Catar_B[RodEscolhida][83];
      document.getElementById('apB5').innerHTML=Catar_B[RodEscolhida][84];
      document.getElementById('ultB5').innerHTML=Catar_B[RodEscolhida][85];
      document.getElementById('penB5').innerHTML=Catar_B[RodEscolhida][86];
      document.getElementById('antB5').innerHTML=Catar_B[RodEscolhida][87];
      document.getElementById('qaB5').innerHTML=Catar_B[RodEscolhida][88];
      document.getElementById('qiB5').innerHTML=Catar_B[RodEscolhida][89];
  
      document.getElementById('logB6').innerHTML=Catar_B[RodEscolhida][90];
      document.getElementById('tecB6').innerHTML=Catar_B[RodEscolhida][92].nome;
      document.getElementById('clubB6').innerHTML=Catar_B[RodEscolhida][91][0];
      document.getElementById('nlB6').innerHTML=Catar_B[RodEscolhida][91][2];
      document.getElementById('varB6').innerHTML=Catar_B[RodEscolhida][93];
      document.getElementById('objB6').innerHTML=Catar_B[RodEscolhida][94];
      document.getElementById('ptB6').innerHTML=Catar_B[RodEscolhida][95];
      document.getElementById('vitB6').innerHTML=Catar_B[RodEscolhida][96];
      document.getElementById('empB6').innerHTML=Catar_B[RodEscolhida][97];
      document.getElementById('derB6').innerHTML=Catar_B[RodEscolhida][98];
      document.getElementById('gpB6').innerHTML=Catar_B[RodEscolhida][99];
      document.getElementById('gcB6').innerHTML=Catar_B[RodEscolhida][100];
      document.getElementById('sgB6').innerHTML=Catar_B[RodEscolhida][101];
      document.getElementById('apB6').innerHTML=Catar_B[RodEscolhida][102];
      document.getElementById('ultB6').innerHTML=Catar_B[RodEscolhida][103];
      document.getElementById('penB6').innerHTML=Catar_B[RodEscolhida][104];
      document.getElementById('antB6').innerHTML=Catar_B[RodEscolhida][105];
      document.getElementById('qaB6').innerHTML=Catar_B[RodEscolhida][106];
      document.getElementById('qiB6').innerHTML=Catar_B[RodEscolhida][107];
  
      document.getElementById('logB7').innerHTML=Catar_B[RodEscolhida][108];
      document.getElementById('tecB7').innerHTML=Catar_B[RodEscolhida][110].nome;
      document.getElementById('clubB7').innerHTML=Catar_B[RodEscolhida][109][0];
      document.getElementById('nlB7').innerHTML=Catar_B[RodEscolhida][109][2];
      document.getElementById('varB7').innerHTML=Catar_B[RodEscolhida][111];
      document.getElementById('objB7').innerHTML=Catar_B[RodEscolhida][112];
      document.getElementById('ptB7').innerHTML=Catar_B[RodEscolhida][113];
      document.getElementById('vitB7').innerHTML=Catar_B[RodEscolhida][114];
      document.getElementById('empB7').innerHTML=Catar_B[RodEscolhida][115];
      document.getElementById('derB7').innerHTML=Catar_B[RodEscolhida][116];
      document.getElementById('gpB7').innerHTML=Catar_B[RodEscolhida][117];
      document.getElementById('gcB7').innerHTML=Catar_B[RodEscolhida][118];
      document.getElementById('sgB7').innerHTML=Catar_B[RodEscolhida][119];
      document.getElementById('apB7').innerHTML=Catar_B[RodEscolhida][120];
      document.getElementById('ultB7').innerHTML=Catar_B[RodEscolhida][121];
      document.getElementById('penB7').innerHTML=Catar_B[RodEscolhida][122];
      document.getElementById('antB7').innerHTML=Catar_B[RodEscolhida][123];
      document.getElementById('qaB7').innerHTML=Catar_B[RodEscolhida][124];
      document.getElementById('qiB7').innerHTML=Catar_B[RodEscolhida][125];
  
      document.getElementById('logB8').innerHTML=Catar_B[RodEscolhida][126];
      document.getElementById('tecB8').innerHTML=Catar_B[RodEscolhida][128].nome;
      document.getElementById('clubB8').innerHTML=Catar_B[RodEscolhida][127][0];
      document.getElementById('nlB8').innerHTML=Catar_B[RodEscolhida][127][2];
      document.getElementById('varB8').innerHTML=Catar_B[RodEscolhida][129];
      document.getElementById('objB8').innerHTML=Catar_B[RodEscolhida][130];
      document.getElementById('ptB8').innerHTML=Catar_B[RodEscolhida][131];
      document.getElementById('vitB8').innerHTML=Catar_B[RodEscolhida][132];
      document.getElementById('empB8').innerHTML=Catar_B[RodEscolhida][133];
      document.getElementById('derB8').innerHTML=Catar_B[RodEscolhida][134];
      document.getElementById('gpB8').innerHTML=Catar_B[RodEscolhida][135];
      document.getElementById('gcB8').innerHTML=Catar_B[RodEscolhida][136];
      document.getElementById('sgB8').innerHTML=Catar_B[RodEscolhida][137];
      document.getElementById('apB8').innerHTML=Catar_B[RodEscolhida][138];
      document.getElementById('ultB8').innerHTML=Catar_B[RodEscolhida][139];
      document.getElementById('penB8').innerHTML=Catar_B[RodEscolhida][140];
      document.getElementById('antB8').innerHTML=Catar_B[RodEscolhida][141];
      document.getElementById('qaB8').innerHTML=Catar_B[RodEscolhida][142];
      document.getElementById('qiB8').innerHTML=Catar_B[RodEscolhida][143];
  

      
    }


    
    else if(CampEscolhido==="Norde_A"){


      JogosDaRodada = Norde_Cal_A[RodEscolhida];


      document.getElementById('logB1').innerHTML=Norde_A[RodEscolhida][0];
      document.getElementById('tecB1').innerHTML=Norde_A[RodEscolhida][2].nome;
      document.getElementById('clubB1').innerHTML=Norde_A[RodEscolhida][1][0];
      document.getElementById('nlB1').innerHTML=Norde_A[RodEscolhida][1][2];
      document.getElementById('varB1').innerHTML=Norde_A[RodEscolhida][3];
      document.getElementById('objB1').innerHTML=Norde_A[RodEscolhida][4];
      document.getElementById('ptB1').innerHTML=Norde_A[RodEscolhida][5];
      document.getElementById('vitB1').innerHTML=Norde_A[RodEscolhida][6];
      document.getElementById('empB1').innerHTML=Norde_A[RodEscolhida][7];
      document.getElementById('derB1').innerHTML=Norde_A[RodEscolhida][8];
      document.getElementById('gpB1').innerHTML=Norde_A[RodEscolhida][9];
      document.getElementById('gcB1').innerHTML=Norde_A[RodEscolhida][10];
      document.getElementById('sgB1').innerHTML=Norde_A[RodEscolhida][11];
      document.getElementById('apB1').innerHTML=Norde_A[RodEscolhida][12];
      document.getElementById('ultB1').innerHTML=Norde_A[RodEscolhida][13];
      document.getElementById('penB1').innerHTML=Norde_A[RodEscolhida][14];
      document.getElementById('antB1').innerHTML=Norde_A[RodEscolhida][15];
      document.getElementById('qaB1').innerHTML=Norde_A[RodEscolhida][16];
      document.getElementById('qiB1').innerHTML=Norde_A[RodEscolhida][17];
  
      document.getElementById('logB2').innerHTML=Norde_A[RodEscolhida][18];
      document.getElementById('tecB2').innerHTML=Norde_A[RodEscolhida][20].nome;
      document.getElementById('clubB2').innerHTML=Norde_A[RodEscolhida][19][0];
      document.getElementById('nlB2').innerHTML=Norde_A[RodEscolhida][19][2];
      document.getElementById('varB2').innerHTML=Norde_A[RodEscolhida][21];
      document.getElementById('objB2').innerHTML=Norde_A[RodEscolhida][22];
      document.getElementById('ptB2').innerHTML=Norde_A[RodEscolhida][23];
      document.getElementById('vitB2').innerHTML=Norde_A[RodEscolhida][24];
      document.getElementById('empB2').innerHTML=Norde_A[RodEscolhida][25];
      document.getElementById('derB2').innerHTML=Norde_A[RodEscolhida][26];
      document.getElementById('gpB2').innerHTML=Norde_A[RodEscolhida][27];
      document.getElementById('gcB2').innerHTML=Norde_A[RodEscolhida][28];
      document.getElementById('sgB2').innerHTML=Norde_A[RodEscolhida][29];
      document.getElementById('apB2').innerHTML=Norde_A[RodEscolhida][30];
      document.getElementById('ultB2').innerHTML=Norde_A[RodEscolhida][31];
      document.getElementById('penB2').innerHTML=Norde_A[RodEscolhida][32];
      document.getElementById('antB2').innerHTML=Norde_A[RodEscolhida][33];
      document.getElementById('qaB2').innerHTML=Norde_A[RodEscolhida][34];
      document.getElementById('qiB2').innerHTML=Norde_A[RodEscolhida][35];
  
      document.getElementById('logB3').innerHTML=Norde_A[RodEscolhida][36];
      document.getElementById('tecB3').innerHTML=Norde_A[RodEscolhida][38].nome;
      document.getElementById('clubB3').innerHTML=Norde_A[RodEscolhida][37][0];
      document.getElementById('nlB3').innerHTML=Norde_A[RodEscolhida][37][2];
      document.getElementById('varB3').innerHTML=Norde_A[RodEscolhida][39];
      document.getElementById('objB3').innerHTML=Norde_A[RodEscolhida][40];
      document.getElementById('ptB3').innerHTML=Norde_A[RodEscolhida][41];
      document.getElementById('vitB3').innerHTML=Norde_A[RodEscolhida][42];
      document.getElementById('empB3').innerHTML=Norde_A[RodEscolhida][43];
      document.getElementById('derB3').innerHTML=Norde_A[RodEscolhida][44];
      document.getElementById('gpB3').innerHTML=Norde_A[RodEscolhida][45];
      document.getElementById('gcB3').innerHTML=Norde_A[RodEscolhida][46];
      document.getElementById('sgB3').innerHTML=Norde_A[RodEscolhida][47];
      document.getElementById('apB3').innerHTML=Norde_A[RodEscolhida][48];
      document.getElementById('ultB3').innerHTML=Norde_A[RodEscolhida][49];
      document.getElementById('penB3').innerHTML=Norde_A[RodEscolhida][50];
      document.getElementById('antB3').innerHTML=Norde_A[RodEscolhida][51];
      document.getElementById('qaB3').innerHTML=Norde_A[RodEscolhida][52];
      document.getElementById('qiB3').innerHTML=Norde_A[RodEscolhida][53];
  
      document.getElementById('logB4').innerHTML=Norde_A[RodEscolhida][54];
      document.getElementById('tecB4').innerHTML=Norde_A[RodEscolhida][56].nome;
      document.getElementById('clubB4').innerHTML=Norde_A[RodEscolhida][55][0];
      document.getElementById('nlB4').innerHTML=Norde_A[RodEscolhida][55][2];
      document.getElementById('varB4').innerHTML=Norde_A[RodEscolhida][57];
      document.getElementById('objB4').innerHTML=Norde_A[RodEscolhida][58];
      document.getElementById('ptB4').innerHTML=Norde_A[RodEscolhida][59];
      document.getElementById('vitB4').innerHTML=Norde_A[RodEscolhida][60];
      document.getElementById('empB4').innerHTML=Norde_A[RodEscolhida][61];
      document.getElementById('derB4').innerHTML=Norde_A[RodEscolhida][62];
      document.getElementById('gpB4').innerHTML=Norde_A[RodEscolhida][63];
      document.getElementById('gcB4').innerHTML=Norde_A[RodEscolhida][64];
      document.getElementById('sgB4').innerHTML=Norde_A[RodEscolhida][65];
      document.getElementById('apB4').innerHTML=Norde_A[RodEscolhida][66];
      document.getElementById('ultB4').innerHTML=Norde_A[RodEscolhida][67];
      document.getElementById('penB4').innerHTML=Norde_A[RodEscolhida][68];
      document.getElementById('antB4').innerHTML=Norde_A[RodEscolhida][69];
      document.getElementById('qaB4').innerHTML=Norde_A[RodEscolhida][70];
      document.getElementById('qiB4').innerHTML=Norde_A[RodEscolhida][71];
  
      document.getElementById('logB5').innerHTML=Norde_A[RodEscolhida][72];
      document.getElementById('tecB5').innerHTML=Norde_A[RodEscolhida][74].nome;
      document.getElementById('clubB5').innerHTML=Norde_A[RodEscolhida][73][0];
      document.getElementById('nlB5').innerHTML=Norde_A[RodEscolhida][73][2];
      document.getElementById('varB5').innerHTML=Norde_A[RodEscolhida][75];
      document.getElementById('objB5').innerHTML=Norde_A[RodEscolhida][76];
      document.getElementById('ptB5').innerHTML=Norde_A[RodEscolhida][77];
      document.getElementById('vitB5').innerHTML=Norde_A[RodEscolhida][78];
      document.getElementById('empB5').innerHTML=Norde_A[RodEscolhida][79];
      document.getElementById('derB5').innerHTML=Norde_A[RodEscolhida][80];
      document.getElementById('gpB5').innerHTML=Norde_A[RodEscolhida][81];
      document.getElementById('gcB5').innerHTML=Norde_A[RodEscolhida][82];
      document.getElementById('sgB5').innerHTML=Norde_A[RodEscolhida][83];
      document.getElementById('apB5').innerHTML=Norde_A[RodEscolhida][84];
      document.getElementById('ultB5').innerHTML=Norde_A[RodEscolhida][85];
      document.getElementById('penB5').innerHTML=Norde_A[RodEscolhida][86];
      document.getElementById('antB5').innerHTML=Norde_A[RodEscolhida][87];
      document.getElementById('qaB5').innerHTML=Norde_A[RodEscolhida][88];
      document.getElementById('qiB5').innerHTML=Norde_A[RodEscolhida][89];
  
      document.getElementById('logB6').innerHTML=Norde_A[RodEscolhida][90];
      document.getElementById('tecB6').innerHTML=Norde_A[RodEscolhida][92].nome;
      document.getElementById('clubB6').innerHTML=Norde_A[RodEscolhida][91][0];
      document.getElementById('nlB6').innerHTML=Norde_A[RodEscolhida][91][2];
      document.getElementById('varB6').innerHTML=Norde_A[RodEscolhida][93];
      document.getElementById('objB6').innerHTML=Norde_A[RodEscolhida][94];
      document.getElementById('ptB6').innerHTML=Norde_A[RodEscolhida][95];
      document.getElementById('vitB6').innerHTML=Norde_A[RodEscolhida][96];
      document.getElementById('empB6').innerHTML=Norde_A[RodEscolhida][97];
      document.getElementById('derB6').innerHTML=Norde_A[RodEscolhida][98];
      document.getElementById('gpB6').innerHTML=Norde_A[RodEscolhida][99];
      document.getElementById('gcB6').innerHTML=Norde_A[RodEscolhida][100];
      document.getElementById('sgB6').innerHTML=Norde_A[RodEscolhida][101];
      document.getElementById('apB6').innerHTML=Norde_A[RodEscolhida][102];
      document.getElementById('ultB6').innerHTML=Norde_A[RodEscolhida][103];
      document.getElementById('penB6').innerHTML=Norde_A[RodEscolhida][104];
      document.getElementById('antB6').innerHTML=Norde_A[RodEscolhida][105];
      document.getElementById('qaB6').innerHTML=Norde_A[RodEscolhida][106];
      document.getElementById('qiB6').innerHTML=Norde_A[RodEscolhida][107];
  
      document.getElementById('logB7').innerHTML=Norde_A[RodEscolhida][108];
      document.getElementById('tecB7').innerHTML=Norde_A[RodEscolhida][110].nome;
      document.getElementById('clubB7').innerHTML=Norde_A[RodEscolhida][109][0];
      document.getElementById('nlB7').innerHTML=Norde_A[RodEscolhida][109][2];
      document.getElementById('varB7').innerHTML=Norde_A[RodEscolhida][111];
      document.getElementById('objB7').innerHTML=Norde_A[RodEscolhida][112];
      document.getElementById('ptB7').innerHTML=Norde_A[RodEscolhida][113];
      document.getElementById('vitB7').innerHTML=Norde_A[RodEscolhida][114];
      document.getElementById('empB7').innerHTML=Norde_A[RodEscolhida][115];
      document.getElementById('derB7').innerHTML=Norde_A[RodEscolhida][116];
      document.getElementById('gpB7').innerHTML=Norde_A[RodEscolhida][117];
      document.getElementById('gcB7').innerHTML=Norde_A[RodEscolhida][118];
      document.getElementById('sgB7').innerHTML=Norde_A[RodEscolhida][119];
      document.getElementById('apB7').innerHTML=Norde_A[RodEscolhida][120];
      document.getElementById('ultB7').innerHTML=Norde_A[RodEscolhida][121];
      document.getElementById('penB7').innerHTML=Norde_A[RodEscolhida][122];
      document.getElementById('antB7').innerHTML=Norde_A[RodEscolhida][123];
      document.getElementById('qaB7').innerHTML=Norde_A[RodEscolhida][124];
      document.getElementById('qiB7').innerHTML=Norde_A[RodEscolhida][125];
  
      document.getElementById('logB8').innerHTML=Norde_A[RodEscolhida][126];
      document.getElementById('tecB8').innerHTML=Norde_A[RodEscolhida][128].nome;
      document.getElementById('clubB8').innerHTML=Norde_A[RodEscolhida][127][0];
      document.getElementById('nlB8').innerHTML=Norde_A[RodEscolhida][127][2];
      document.getElementById('varB8').innerHTML=Norde_A[RodEscolhida][129];
      document.getElementById('objB8').innerHTML=Norde_A[RodEscolhida][130];
      document.getElementById('ptB8').innerHTML=Norde_A[RodEscolhida][131];
      document.getElementById('vitB8').innerHTML=Norde_A[RodEscolhida][132];
      document.getElementById('empB8').innerHTML=Norde_A[RodEscolhida][133];
      document.getElementById('derB8').innerHTML=Norde_A[RodEscolhida][134];
      document.getElementById('gpB8').innerHTML=Norde_A[RodEscolhida][135];
      document.getElementById('gcB8').innerHTML=Norde_A[RodEscolhida][136];
      document.getElementById('sgB8').innerHTML=Norde_A[RodEscolhida][137];
      document.getElementById('apB8').innerHTML=Norde_A[RodEscolhida][138];
      document.getElementById('ultB8').innerHTML=Norde_A[RodEscolhida][139];
      document.getElementById('penB8').innerHTML=Norde_A[RodEscolhida][140];
      document.getElementById('antB8').innerHTML=Norde_A[RodEscolhida][141];
      document.getElementById('qaB8').innerHTML=Norde_A[RodEscolhida][142];
      document.getElementById('qiB8').innerHTML=Norde_A[RodEscolhida][143];
  

      
    }


    else if(CampEscolhido==="Norde_B"){


      JogosDaRodada = Norde_Cal_B[RodEscolhida];


      document.getElementById('logB1').innerHTML=Norde_B[RodEscolhida][0];
      document.getElementById('tecB1').innerHTML=Norde_B[RodEscolhida][2].nome;
      document.getElementById('clubB1').innerHTML=Norde_B[RodEscolhida][1][0];
      document.getElementById('nlB1').innerHTML=Norde_B[RodEscolhida][1][2];
      document.getElementById('varB1').innerHTML=Norde_B[RodEscolhida][3];
      document.getElementById('objB1').innerHTML=Norde_B[RodEscolhida][4];
      document.getElementById('ptB1').innerHTML=Norde_B[RodEscolhida][5];
      document.getElementById('vitB1').innerHTML=Norde_B[RodEscolhida][6];
      document.getElementById('empB1').innerHTML=Norde_B[RodEscolhida][7];
      document.getElementById('derB1').innerHTML=Norde_B[RodEscolhida][8];
      document.getElementById('gpB1').innerHTML=Norde_B[RodEscolhida][9];
      document.getElementById('gcB1').innerHTML=Norde_B[RodEscolhida][10];
      document.getElementById('sgB1').innerHTML=Norde_B[RodEscolhida][11];
      document.getElementById('apB1').innerHTML=Norde_B[RodEscolhida][12];
      document.getElementById('ultB1').innerHTML=Norde_B[RodEscolhida][13];
      document.getElementById('penB1').innerHTML=Norde_B[RodEscolhida][14];
      document.getElementById('antB1').innerHTML=Norde_B[RodEscolhida][15];
      document.getElementById('qaB1').innerHTML=Norde_B[RodEscolhida][16];
      document.getElementById('qiB1').innerHTML=Norde_B[RodEscolhida][17];
  
      document.getElementById('logB2').innerHTML=Norde_B[RodEscolhida][18];
      document.getElementById('tecB2').innerHTML=Norde_B[RodEscolhida][20].nome;
      document.getElementById('clubB2').innerHTML=Norde_B[RodEscolhida][19][0];
      document.getElementById('nlB2').innerHTML=Norde_B[RodEscolhida][19][2];
      document.getElementById('varB2').innerHTML=Norde_B[RodEscolhida][21];
      document.getElementById('objB2').innerHTML=Norde_B[RodEscolhida][22];
      document.getElementById('ptB2').innerHTML=Norde_B[RodEscolhida][23];
      document.getElementById('vitB2').innerHTML=Norde_B[RodEscolhida][24];
      document.getElementById('empB2').innerHTML=Norde_B[RodEscolhida][25];
      document.getElementById('derB2').innerHTML=Norde_B[RodEscolhida][26];
      document.getElementById('gpB2').innerHTML=Norde_B[RodEscolhida][27];
      document.getElementById('gcB2').innerHTML=Norde_B[RodEscolhida][28];
      document.getElementById('sgB2').innerHTML=Norde_B[RodEscolhida][29];
      document.getElementById('apB2').innerHTML=Norde_B[RodEscolhida][30];
      document.getElementById('ultB2').innerHTML=Norde_B[RodEscolhida][31];
      document.getElementById('penB2').innerHTML=Norde_B[RodEscolhida][32];
      document.getElementById('antB2').innerHTML=Norde_B[RodEscolhida][33];
      document.getElementById('qaB2').innerHTML=Norde_B[RodEscolhida][34];
      document.getElementById('qiB2').innerHTML=Norde_B[RodEscolhida][35];
  
      document.getElementById('logB3').innerHTML=Norde_B[RodEscolhida][36];
      document.getElementById('tecB3').innerHTML=Norde_B[RodEscolhida][38].nome;
      document.getElementById('clubB3').innerHTML=Norde_B[RodEscolhida][37][0];
      document.getElementById('nlB3').innerHTML=Norde_B[RodEscolhida][37][2];
      document.getElementById('varB3').innerHTML=Norde_B[RodEscolhida][39];
      document.getElementById('objB3').innerHTML=Norde_B[RodEscolhida][40];
      document.getElementById('ptB3').innerHTML=Norde_B[RodEscolhida][41];
      document.getElementById('vitB3').innerHTML=Norde_B[RodEscolhida][42];
      document.getElementById('empB3').innerHTML=Norde_B[RodEscolhida][43];
      document.getElementById('derB3').innerHTML=Norde_B[RodEscolhida][44];
      document.getElementById('gpB3').innerHTML=Norde_B[RodEscolhida][45];
      document.getElementById('gcB3').innerHTML=Norde_B[RodEscolhida][46];
      document.getElementById('sgB3').innerHTML=Norde_B[RodEscolhida][47];
      document.getElementById('apB3').innerHTML=Norde_B[RodEscolhida][48];
      document.getElementById('ultB3').innerHTML=Norde_B[RodEscolhida][49];
      document.getElementById('penB3').innerHTML=Norde_B[RodEscolhida][50];
      document.getElementById('antB3').innerHTML=Norde_B[RodEscolhida][51];
      document.getElementById('qaB3').innerHTML=Norde_B[RodEscolhida][52];
      document.getElementById('qiB3').innerHTML=Norde_B[RodEscolhida][53];
  
      document.getElementById('logB4').innerHTML=Norde_B[RodEscolhida][54];
      document.getElementById('tecB4').innerHTML=Norde_B[RodEscolhida][56].nome;
      document.getElementById('clubB4').innerHTML=Norde_B[RodEscolhida][55][0];
      document.getElementById('nlB4').innerHTML=Norde_B[RodEscolhida][55][2];
      document.getElementById('varB4').innerHTML=Norde_B[RodEscolhida][57];
      document.getElementById('objB4').innerHTML=Norde_B[RodEscolhida][58];
      document.getElementById('ptB4').innerHTML=Norde_B[RodEscolhida][59];
      document.getElementById('vitB4').innerHTML=Norde_B[RodEscolhida][60];
      document.getElementById('empB4').innerHTML=Norde_B[RodEscolhida][61];
      document.getElementById('derB4').innerHTML=Norde_B[RodEscolhida][62];
      document.getElementById('gpB4').innerHTML=Norde_B[RodEscolhida][63];
      document.getElementById('gcB4').innerHTML=Norde_B[RodEscolhida][64];
      document.getElementById('sgB4').innerHTML=Norde_B[RodEscolhida][65];
      document.getElementById('apB4').innerHTML=Norde_B[RodEscolhida][66];
      document.getElementById('ultB4').innerHTML=Norde_B[RodEscolhida][67];
      document.getElementById('penB4').innerHTML=Norde_B[RodEscolhida][68];
      document.getElementById('antB4').innerHTML=Norde_B[RodEscolhida][69];
      document.getElementById('qaB4').innerHTML=Norde_B[RodEscolhida][70];
      document.getElementById('qiB4').innerHTML=Norde_B[RodEscolhida][71];
  
      document.getElementById('logB5').innerHTML=Norde_B[RodEscolhida][72];
      document.getElementById('tecB5').innerHTML=Norde_B[RodEscolhida][74].nome;
      document.getElementById('clubB5').innerHTML=Norde_B[RodEscolhida][73][0];
      document.getElementById('nlB5').innerHTML=Norde_B[RodEscolhida][73][2];
      document.getElementById('varB5').innerHTML=Norde_B[RodEscolhida][75];
      document.getElementById('objB5').innerHTML=Norde_B[RodEscolhida][76];
      document.getElementById('ptB5').innerHTML=Norde_B[RodEscolhida][77];
      document.getElementById('vitB5').innerHTML=Norde_B[RodEscolhida][78];
      document.getElementById('empB5').innerHTML=Norde_B[RodEscolhida][79];
      document.getElementById('derB5').innerHTML=Norde_B[RodEscolhida][80];
      document.getElementById('gpB5').innerHTML=Norde_B[RodEscolhida][81];
      document.getElementById('gcB5').innerHTML=Norde_B[RodEscolhida][82];
      document.getElementById('sgB5').innerHTML=Norde_B[RodEscolhida][83];
      document.getElementById('apB5').innerHTML=Norde_B[RodEscolhida][84];
      document.getElementById('ultB5').innerHTML=Norde_B[RodEscolhida][85];
      document.getElementById('penB5').innerHTML=Norde_B[RodEscolhida][86];
      document.getElementById('antB5').innerHTML=Norde_B[RodEscolhida][87];
      document.getElementById('qaB5').innerHTML=Norde_B[RodEscolhida][88];
      document.getElementById('qiB5').innerHTML=Norde_B[RodEscolhida][89];
  
      document.getElementById('logB6').innerHTML=Norde_B[RodEscolhida][90];
      document.getElementById('tecB6').innerHTML=Norde_B[RodEscolhida][92].nome;
      document.getElementById('clubB6').innerHTML=Norde_B[RodEscolhida][91][0];
      document.getElementById('nlB6').innerHTML=Norde_B[RodEscolhida][91][2];
      document.getElementById('varB6').innerHTML=Norde_B[RodEscolhida][93];
      document.getElementById('objB6').innerHTML=Norde_B[RodEscolhida][94];
      document.getElementById('ptB6').innerHTML=Norde_B[RodEscolhida][95];
      document.getElementById('vitB6').innerHTML=Norde_B[RodEscolhida][96];
      document.getElementById('empB6').innerHTML=Norde_B[RodEscolhida][97];
      document.getElementById('derB6').innerHTML=Norde_B[RodEscolhida][98];
      document.getElementById('gpB6').innerHTML=Norde_B[RodEscolhida][99];
      document.getElementById('gcB6').innerHTML=Norde_B[RodEscolhida][100];
      document.getElementById('sgB6').innerHTML=Norde_B[RodEscolhida][101];
      document.getElementById('apB6').innerHTML=Norde_B[RodEscolhida][102];
      document.getElementById('ultB6').innerHTML=Norde_B[RodEscolhida][103];
      document.getElementById('penB6').innerHTML=Norde_B[RodEscolhida][104];
      document.getElementById('antB6').innerHTML=Norde_B[RodEscolhida][105];
      document.getElementById('qaB6').innerHTML=Norde_B[RodEscolhida][106];
      document.getElementById('qiB6').innerHTML=Norde_B[RodEscolhida][107];
  
      document.getElementById('logB7').innerHTML=Norde_B[RodEscolhida][108];
      document.getElementById('tecB7').innerHTML=Norde_B[RodEscolhida][110].nome;
      document.getElementById('clubB7').innerHTML=Norde_B[RodEscolhida][109][0];
      document.getElementById('nlB7').innerHTML=Norde_B[RodEscolhida][109][2];
      document.getElementById('varB7').innerHTML=Norde_B[RodEscolhida][111];
      document.getElementById('objB7').innerHTML=Norde_B[RodEscolhida][112];
      document.getElementById('ptB7').innerHTML=Norde_B[RodEscolhida][113];
      document.getElementById('vitB7').innerHTML=Norde_B[RodEscolhida][114];
      document.getElementById('empB7').innerHTML=Norde_B[RodEscolhida][115];
      document.getElementById('derB7').innerHTML=Norde_B[RodEscolhida][116];
      document.getElementById('gpB7').innerHTML=Norde_B[RodEscolhida][117];
      document.getElementById('gcB7').innerHTML=Norde_B[RodEscolhida][118];
      document.getElementById('sgB7').innerHTML=Norde_B[RodEscolhida][119];
      document.getElementById('apB7').innerHTML=Norde_B[RodEscolhida][120];
      document.getElementById('ultB7').innerHTML=Norde_B[RodEscolhida][121];
      document.getElementById('penB7').innerHTML=Norde_B[RodEscolhida][122];
      document.getElementById('antB7').innerHTML=Norde_B[RodEscolhida][123];
      document.getElementById('qaB7').innerHTML=Norde_B[RodEscolhida][124];
      document.getElementById('qiB7').innerHTML=Norde_B[RodEscolhida][125];
  
      document.getElementById('logB8').innerHTML=Norde_B[RodEscolhida][126];
      document.getElementById('tecB8').innerHTML=Norde_B[RodEscolhida][128].nome;
      document.getElementById('clubB8').innerHTML=Norde_B[RodEscolhida][127][0];
      document.getElementById('nlB8').innerHTML=Norde_B[RodEscolhida][127][2];
      document.getElementById('varB8').innerHTML=Norde_B[RodEscolhida][129];
      document.getElementById('objB8').innerHTML=Norde_B[RodEscolhida][130];
      document.getElementById('ptB8').innerHTML=Norde_B[RodEscolhida][131];
      document.getElementById('vitB8').innerHTML=Norde_B[RodEscolhida][132];
      document.getElementById('empB8').innerHTML=Norde_B[RodEscolhida][133];
      document.getElementById('derB8').innerHTML=Norde_B[RodEscolhida][134];
      document.getElementById('gpB8').innerHTML=Norde_B[RodEscolhida][135];
      document.getElementById('gcB8').innerHTML=Norde_B[RodEscolhida][136];
      document.getElementById('sgB8').innerHTML=Norde_B[RodEscolhida][137];
      document.getElementById('apB8').innerHTML=Norde_B[RodEscolhida][138];
      document.getElementById('ultB8').innerHTML=Norde_B[RodEscolhida][139];
      document.getElementById('penB8').innerHTML=Norde_B[RodEscolhida][140];
      document.getElementById('antB8').innerHTML=Norde_B[RodEscolhida][141];
      document.getElementById('qaB8').innerHTML=Norde_B[RodEscolhida][142];
      document.getElementById('qiB8').innerHTML=Norde_B[RodEscolhida][143];
  

      
    }


    
    else if(CampEscolhido==="Norti_A"){


      JogosDaRodada = Norti_Cal_A[RodEscolhida];


      document.getElementById('logB1').innerHTML=Norti_A[RodEscolhida][0];
      document.getElementById('tecB1').innerHTML=Norti_A[RodEscolhida][2].nome;
      document.getElementById('clubB1').innerHTML=Norti_A[RodEscolhida][1][0];
      document.getElementById('nlB1').innerHTML=Norti_A[RodEscolhida][1][2];
      document.getElementById('varB1').innerHTML=Norti_A[RodEscolhida][3];
      document.getElementById('objB1').innerHTML=Norti_A[RodEscolhida][4];
      document.getElementById('ptB1').innerHTML=Norti_A[RodEscolhida][5];
      document.getElementById('vitB1').innerHTML=Norti_A[RodEscolhida][6];
      document.getElementById('empB1').innerHTML=Norti_A[RodEscolhida][7];
      document.getElementById('derB1').innerHTML=Norti_A[RodEscolhida][8];
      document.getElementById('gpB1').innerHTML=Norti_A[RodEscolhida][9];
      document.getElementById('gcB1').innerHTML=Norti_A[RodEscolhida][10];
      document.getElementById('sgB1').innerHTML=Norti_A[RodEscolhida][11];
      document.getElementById('apB1').innerHTML=Norti_A[RodEscolhida][12];
      document.getElementById('ultB1').innerHTML=Norti_A[RodEscolhida][13];
      document.getElementById('penB1').innerHTML=Norti_A[RodEscolhida][14];
      document.getElementById('antB1').innerHTML=Norti_A[RodEscolhida][15];
      document.getElementById('qaB1').innerHTML=Norti_A[RodEscolhida][16];
      document.getElementById('qiB1').innerHTML=Norti_A[RodEscolhida][17];
  
      document.getElementById('logB2').innerHTML=Norti_A[RodEscolhida][18];
      document.getElementById('tecB2').innerHTML=Norti_A[RodEscolhida][20].nome;
      document.getElementById('clubB2').innerHTML=Norti_A[RodEscolhida][19][0];
      document.getElementById('nlB2').innerHTML=Norti_A[RodEscolhida][19][2];
      document.getElementById('varB2').innerHTML=Norti_A[RodEscolhida][21];
      document.getElementById('objB2').innerHTML=Norti_A[RodEscolhida][22];
      document.getElementById('ptB2').innerHTML=Norti_A[RodEscolhida][23];
      document.getElementById('vitB2').innerHTML=Norti_A[RodEscolhida][24];
      document.getElementById('empB2').innerHTML=Norti_A[RodEscolhida][25];
      document.getElementById('derB2').innerHTML=Norti_A[RodEscolhida][26];
      document.getElementById('gpB2').innerHTML=Norti_A[RodEscolhida][27];
      document.getElementById('gcB2').innerHTML=Norti_A[RodEscolhida][28];
      document.getElementById('sgB2').innerHTML=Norti_A[RodEscolhida][29];
      document.getElementById('apB2').innerHTML=Norti_A[RodEscolhida][30];
      document.getElementById('ultB2').innerHTML=Norti_A[RodEscolhida][31];
      document.getElementById('penB2').innerHTML=Norti_A[RodEscolhida][32];
      document.getElementById('antB2').innerHTML=Norti_A[RodEscolhida][33];
      document.getElementById('qaB2').innerHTML=Norti_A[RodEscolhida][34];
      document.getElementById('qiB2').innerHTML=Norti_A[RodEscolhida][35];
  
      document.getElementById('logB3').innerHTML=Norti_A[RodEscolhida][36];
      document.getElementById('tecB3').innerHTML=Norti_A[RodEscolhida][38].nome;
      document.getElementById('clubB3').innerHTML=Norti_A[RodEscolhida][37][0];
      document.getElementById('nlB3').innerHTML=Norti_A[RodEscolhida][37][2];
      document.getElementById('varB3').innerHTML=Norti_A[RodEscolhida][39];
      document.getElementById('objB3').innerHTML=Norti_A[RodEscolhida][40];
      document.getElementById('ptB3').innerHTML=Norti_A[RodEscolhida][41];
      document.getElementById('vitB3').innerHTML=Norti_A[RodEscolhida][42];
      document.getElementById('empB3').innerHTML=Norti_A[RodEscolhida][43];
      document.getElementById('derB3').innerHTML=Norti_A[RodEscolhida][44];
      document.getElementById('gpB3').innerHTML=Norti_A[RodEscolhida][45];
      document.getElementById('gcB3').innerHTML=Norti_A[RodEscolhida][46];
      document.getElementById('sgB3').innerHTML=Norti_A[RodEscolhida][47];
      document.getElementById('apB3').innerHTML=Norti_A[RodEscolhida][48];
      document.getElementById('ultB3').innerHTML=Norti_A[RodEscolhida][49];
      document.getElementById('penB3').innerHTML=Norti_A[RodEscolhida][50];
      document.getElementById('antB3').innerHTML=Norti_A[RodEscolhida][51];
      document.getElementById('qaB3').innerHTML=Norti_A[RodEscolhida][52];
      document.getElementById('qiB3').innerHTML=Norti_A[RodEscolhida][53];
  
      document.getElementById('logB4').innerHTML=Norti_A[RodEscolhida][54];
      document.getElementById('tecB4').innerHTML=Norti_A[RodEscolhida][56].nome;
      document.getElementById('clubB4').innerHTML=Norti_A[RodEscolhida][55][0];
      document.getElementById('nlB4').innerHTML=Norti_A[RodEscolhida][55][2];
      document.getElementById('varB4').innerHTML=Norti_A[RodEscolhida][57];
      document.getElementById('objB4').innerHTML=Norti_A[RodEscolhida][58];
      document.getElementById('ptB4').innerHTML=Norti_A[RodEscolhida][59];
      document.getElementById('vitB4').innerHTML=Norti_A[RodEscolhida][60];
      document.getElementById('empB4').innerHTML=Norti_A[RodEscolhida][61];
      document.getElementById('derB4').innerHTML=Norti_A[RodEscolhida][62];
      document.getElementById('gpB4').innerHTML=Norti_A[RodEscolhida][63];
      document.getElementById('gcB4').innerHTML=Norti_A[RodEscolhida][64];
      document.getElementById('sgB4').innerHTML=Norti_A[RodEscolhida][65];
      document.getElementById('apB4').innerHTML=Norti_A[RodEscolhida][66];
      document.getElementById('ultB4').innerHTML=Norti_A[RodEscolhida][67];
      document.getElementById('penB4').innerHTML=Norti_A[RodEscolhida][68];
      document.getElementById('antB4').innerHTML=Norti_A[RodEscolhida][69];
      document.getElementById('qaB4').innerHTML=Norti_A[RodEscolhida][70];
      document.getElementById('qiB4').innerHTML=Norti_A[RodEscolhida][71];
  
      document.getElementById('logB5').innerHTML=Norti_A[RodEscolhida][72];
      document.getElementById('tecB5').innerHTML=Norti_A[RodEscolhida][74].nome;
      document.getElementById('clubB5').innerHTML=Norti_A[RodEscolhida][73][0];
      document.getElementById('nlB5').innerHTML=Norti_A[RodEscolhida][73][2];
      document.getElementById('varB5').innerHTML=Norti_A[RodEscolhida][75];
      document.getElementById('objB5').innerHTML=Norti_A[RodEscolhida][76];
      document.getElementById('ptB5').innerHTML=Norti_A[RodEscolhida][77];
      document.getElementById('vitB5').innerHTML=Norti_A[RodEscolhida][78];
      document.getElementById('empB5').innerHTML=Norti_A[RodEscolhida][79];
      document.getElementById('derB5').innerHTML=Norti_A[RodEscolhida][80];
      document.getElementById('gpB5').innerHTML=Norti_A[RodEscolhida][81];
      document.getElementById('gcB5').innerHTML=Norti_A[RodEscolhida][82];
      document.getElementById('sgB5').innerHTML=Norti_A[RodEscolhida][83];
      document.getElementById('apB5').innerHTML=Norti_A[RodEscolhida][84];
      document.getElementById('ultB5').innerHTML=Norti_A[RodEscolhida][85];
      document.getElementById('penB5').innerHTML=Norti_A[RodEscolhida][86];
      document.getElementById('antB5').innerHTML=Norti_A[RodEscolhida][87];
      document.getElementById('qaB5').innerHTML=Norti_A[RodEscolhida][88];
      document.getElementById('qiB5').innerHTML=Norti_A[RodEscolhida][89];
  
      document.getElementById('logB6').innerHTML=Norti_A[RodEscolhida][90];
      document.getElementById('tecB6').innerHTML=Norti_A[RodEscolhida][92].nome;
      document.getElementById('clubB6').innerHTML=Norti_A[RodEscolhida][91][0];
      document.getElementById('nlB6').innerHTML=Norti_A[RodEscolhida][91][2];
      document.getElementById('varB6').innerHTML=Norti_A[RodEscolhida][93];
      document.getElementById('objB6').innerHTML=Norti_A[RodEscolhida][94];
      document.getElementById('ptB6').innerHTML=Norti_A[RodEscolhida][95];
      document.getElementById('vitB6').innerHTML=Norti_A[RodEscolhida][96];
      document.getElementById('empB6').innerHTML=Norti_A[RodEscolhida][97];
      document.getElementById('derB6').innerHTML=Norti_A[RodEscolhida][98];
      document.getElementById('gpB6').innerHTML=Norti_A[RodEscolhida][99];
      document.getElementById('gcB6').innerHTML=Norti_A[RodEscolhida][100];
      document.getElementById('sgB6').innerHTML=Norti_A[RodEscolhida][101];
      document.getElementById('apB6').innerHTML=Norti_A[RodEscolhida][102];
      document.getElementById('ultB6').innerHTML=Norti_A[RodEscolhida][103];
      document.getElementById('penB6').innerHTML=Norti_A[RodEscolhida][104];
      document.getElementById('antB6').innerHTML=Norti_A[RodEscolhida][105];
      document.getElementById('qaB6').innerHTML=Norti_A[RodEscolhida][106];
      document.getElementById('qiB6').innerHTML=Norti_A[RodEscolhida][107];
  
      document.getElementById('logB7').innerHTML=Norti_A[RodEscolhida][108];
      document.getElementById('tecB7').innerHTML=Norti_A[RodEscolhida][110].nome;
      document.getElementById('clubB7').innerHTML=Norti_A[RodEscolhida][109][0];
      document.getElementById('nlB7').innerHTML=Norti_A[RodEscolhida][109][2];
      document.getElementById('varB7').innerHTML=Norti_A[RodEscolhida][111];
      document.getElementById('objB7').innerHTML=Norti_A[RodEscolhida][112];
      document.getElementById('ptB7').innerHTML=Norti_A[RodEscolhida][113];
      document.getElementById('vitB7').innerHTML=Norti_A[RodEscolhida][114];
      document.getElementById('empB7').innerHTML=Norti_A[RodEscolhida][115];
      document.getElementById('derB7').innerHTML=Norti_A[RodEscolhida][116];
      document.getElementById('gpB7').innerHTML=Norti_A[RodEscolhida][117];
      document.getElementById('gcB7').innerHTML=Norti_A[RodEscolhida][118];
      document.getElementById('sgB7').innerHTML=Norti_A[RodEscolhida][119];
      document.getElementById('apB7').innerHTML=Norti_A[RodEscolhida][120];
      document.getElementById('ultB7').innerHTML=Norti_A[RodEscolhida][121];
      document.getElementById('penB7').innerHTML=Norti_A[RodEscolhida][122];
      document.getElementById('antB7').innerHTML=Norti_A[RodEscolhida][123];
      document.getElementById('qaB7').innerHTML=Norti_A[RodEscolhida][124];
      document.getElementById('qiB7').innerHTML=Norti_A[RodEscolhida][125];
  
      document.getElementById('logB8').innerHTML=Norti_A[RodEscolhida][126];
      document.getElementById('tecB8').innerHTML=Norti_A[RodEscolhida][128].nome;
      document.getElementById('clubB8').innerHTML=Norti_A[RodEscolhida][127][0];
      document.getElementById('nlB8').innerHTML=Norti_A[RodEscolhida][127][2];
      document.getElementById('varB8').innerHTML=Norti_A[RodEscolhida][129];
      document.getElementById('objB8').innerHTML=Norti_A[RodEscolhida][130];
      document.getElementById('ptB8').innerHTML=Norti_A[RodEscolhida][131];
      document.getElementById('vitB8').innerHTML=Norti_A[RodEscolhida][132];
      document.getElementById('empB8').innerHTML=Norti_A[RodEscolhida][133];
      document.getElementById('derB8').innerHTML=Norti_A[RodEscolhida][134];
      document.getElementById('gpB8').innerHTML=Norti_A[RodEscolhida][135];
      document.getElementById('gcB8').innerHTML=Norti_A[RodEscolhida][136];
      document.getElementById('sgB8').innerHTML=Norti_A[RodEscolhida][137];
      document.getElementById('apB8').innerHTML=Norti_A[RodEscolhida][138];
      document.getElementById('ultB8').innerHTML=Norti_A[RodEscolhida][139];
      document.getElementById('penB8').innerHTML=Norti_A[RodEscolhida][140];
      document.getElementById('antB8').innerHTML=Norti_A[RodEscolhida][141];
      document.getElementById('qaB8').innerHTML=Norti_A[RodEscolhida][142];
      document.getElementById('qiB8').innerHTML=Norti_A[RodEscolhida][143];
  

      
    }


    else if(CampEscolhido==="Norti_B"){


      JogosDaRodada = Norti_Cal_B[RodEscolhida];


      document.getElementById('logB1').innerHTML=Norti_B[RodEscolhida][0];
      document.getElementById('tecB1').innerHTML=Norti_B[RodEscolhida][2].nome;
      document.getElementById('clubB1').innerHTML=Norti_B[RodEscolhida][1][0];
      document.getElementById('nlB1').innerHTML=Norti_B[RodEscolhida][1][2];
      document.getElementById('varB1').innerHTML=Norti_B[RodEscolhida][3];
      document.getElementById('objB1').innerHTML=Norti_B[RodEscolhida][4];
      document.getElementById('ptB1').innerHTML=Norti_B[RodEscolhida][5];
      document.getElementById('vitB1').innerHTML=Norti_B[RodEscolhida][6];
      document.getElementById('empB1').innerHTML=Norti_B[RodEscolhida][7];
      document.getElementById('derB1').innerHTML=Norti_B[RodEscolhida][8];
      document.getElementById('gpB1').innerHTML=Norti_B[RodEscolhida][9];
      document.getElementById('gcB1').innerHTML=Norti_B[RodEscolhida][10];
      document.getElementById('sgB1').innerHTML=Norti_B[RodEscolhida][11];
      document.getElementById('apB1').innerHTML=Norti_B[RodEscolhida][12];
      document.getElementById('ultB1').innerHTML=Norti_B[RodEscolhida][13];
      document.getElementById('penB1').innerHTML=Norti_B[RodEscolhida][14];
      document.getElementById('antB1').innerHTML=Norti_B[RodEscolhida][15];
      document.getElementById('qaB1').innerHTML=Norti_B[RodEscolhida][16];
      document.getElementById('qiB1').innerHTML=Norti_B[RodEscolhida][17];
  
      document.getElementById('logB2').innerHTML=Norti_B[RodEscolhida][18];
      document.getElementById('tecB2').innerHTML=Norti_B[RodEscolhida][20].nome;
      document.getElementById('clubB2').innerHTML=Norti_B[RodEscolhida][19][0];
      document.getElementById('nlB2').innerHTML=Norti_B[RodEscolhida][19][2];
      document.getElementById('varB2').innerHTML=Norti_B[RodEscolhida][21];
      document.getElementById('objB2').innerHTML=Norti_B[RodEscolhida][22];
      document.getElementById('ptB2').innerHTML=Norti_B[RodEscolhida][23];
      document.getElementById('vitB2').innerHTML=Norti_B[RodEscolhida][24];
      document.getElementById('empB2').innerHTML=Norti_B[RodEscolhida][25];
      document.getElementById('derB2').innerHTML=Norti_B[RodEscolhida][26];
      document.getElementById('gpB2').innerHTML=Norti_B[RodEscolhida][27];
      document.getElementById('gcB2').innerHTML=Norti_B[RodEscolhida][28];
      document.getElementById('sgB2').innerHTML=Norti_B[RodEscolhida][29];
      document.getElementById('apB2').innerHTML=Norti_B[RodEscolhida][30];
      document.getElementById('ultB2').innerHTML=Norti_B[RodEscolhida][31];
      document.getElementById('penB2').innerHTML=Norti_B[RodEscolhida][32];
      document.getElementById('antB2').innerHTML=Norti_B[RodEscolhida][33];
      document.getElementById('qaB2').innerHTML=Norti_B[RodEscolhida][34];
      document.getElementById('qiB2').innerHTML=Norti_B[RodEscolhida][35];
  
      document.getElementById('logB3').innerHTML=Norti_B[RodEscolhida][36];
      document.getElementById('tecB3').innerHTML=Norti_B[RodEscolhida][38].nome;
      document.getElementById('clubB3').innerHTML=Norti_B[RodEscolhida][37][0];
      document.getElementById('nlB3').innerHTML=Norti_B[RodEscolhida][37][2];
      document.getElementById('varB3').innerHTML=Norti_B[RodEscolhida][39];
      document.getElementById('objB3').innerHTML=Norti_B[RodEscolhida][40];
      document.getElementById('ptB3').innerHTML=Norti_B[RodEscolhida][41];
      document.getElementById('vitB3').innerHTML=Norti_B[RodEscolhida][42];
      document.getElementById('empB3').innerHTML=Norti_B[RodEscolhida][43];
      document.getElementById('derB3').innerHTML=Norti_B[RodEscolhida][44];
      document.getElementById('gpB3').innerHTML=Norti_B[RodEscolhida][45];
      document.getElementById('gcB3').innerHTML=Norti_B[RodEscolhida][46];
      document.getElementById('sgB3').innerHTML=Norti_B[RodEscolhida][47];
      document.getElementById('apB3').innerHTML=Norti_B[RodEscolhida][48];
      document.getElementById('ultB3').innerHTML=Norti_B[RodEscolhida][49];
      document.getElementById('penB3').innerHTML=Norti_B[RodEscolhida][50];
      document.getElementById('antB3').innerHTML=Norti_B[RodEscolhida][51];
      document.getElementById('qaB3').innerHTML=Norti_B[RodEscolhida][52];
      document.getElementById('qiB3').innerHTML=Norti_B[RodEscolhida][53];
  
      document.getElementById('logB4').innerHTML=Norti_B[RodEscolhida][54];
      document.getElementById('tecB4').innerHTML=Norti_B[RodEscolhida][56].nome;
      document.getElementById('clubB4').innerHTML=Norti_B[RodEscolhida][55][0];
      document.getElementById('nlB4').innerHTML=Norti_B[RodEscolhida][55][2];
      document.getElementById('varB4').innerHTML=Norti_B[RodEscolhida][57];
      document.getElementById('objB4').innerHTML=Norti_B[RodEscolhida][58];
      document.getElementById('ptB4').innerHTML=Norti_B[RodEscolhida][59];
      document.getElementById('vitB4').innerHTML=Norti_B[RodEscolhida][60];
      document.getElementById('empB4').innerHTML=Norti_B[RodEscolhida][61];
      document.getElementById('derB4').innerHTML=Norti_B[RodEscolhida][62];
      document.getElementById('gpB4').innerHTML=Norti_B[RodEscolhida][63];
      document.getElementById('gcB4').innerHTML=Norti_B[RodEscolhida][64];
      document.getElementById('sgB4').innerHTML=Norti_B[RodEscolhida][65];
      document.getElementById('apB4').innerHTML=Norti_B[RodEscolhida][66];
      document.getElementById('ultB4').innerHTML=Norti_B[RodEscolhida][67];
      document.getElementById('penB4').innerHTML=Norti_B[RodEscolhida][68];
      document.getElementById('antB4').innerHTML=Norti_B[RodEscolhida][69];
      document.getElementById('qaB4').innerHTML=Norti_B[RodEscolhida][70];
      document.getElementById('qiB4').innerHTML=Norti_B[RodEscolhida][71];
  
      document.getElementById('logB5').innerHTML=Norti_B[RodEscolhida][72];
      document.getElementById('tecB5').innerHTML=Norti_B[RodEscolhida][74].nome;
      document.getElementById('clubB5').innerHTML=Norti_B[RodEscolhida][73][0];
      document.getElementById('nlB5').innerHTML=Norti_B[RodEscolhida][73][2];
      document.getElementById('varB5').innerHTML=Norti_B[RodEscolhida][75];
      document.getElementById('objB5').innerHTML=Norti_B[RodEscolhida][76];
      document.getElementById('ptB5').innerHTML=Norti_B[RodEscolhida][77];
      document.getElementById('vitB5').innerHTML=Norti_B[RodEscolhida][78];
      document.getElementById('empB5').innerHTML=Norti_B[RodEscolhida][79];
      document.getElementById('derB5').innerHTML=Norti_B[RodEscolhida][80];
      document.getElementById('gpB5').innerHTML=Norti_B[RodEscolhida][81];
      document.getElementById('gcB5').innerHTML=Norti_B[RodEscolhida][82];
      document.getElementById('sgB5').innerHTML=Norti_B[RodEscolhida][83];
      document.getElementById('apB5').innerHTML=Norti_B[RodEscolhida][84];
      document.getElementById('ultB5').innerHTML=Norti_B[RodEscolhida][85];
      document.getElementById('penB5').innerHTML=Norti_B[RodEscolhida][86];
      document.getElementById('antB5').innerHTML=Norti_B[RodEscolhida][87];
      document.getElementById('qaB5').innerHTML=Norti_B[RodEscolhida][88];
      document.getElementById('qiB5').innerHTML=Norti_B[RodEscolhida][89];
  
      document.getElementById('logB6').innerHTML=Norti_B[RodEscolhida][90];
      document.getElementById('tecB6').innerHTML=Norti_B[RodEscolhida][92].nome;
      document.getElementById('clubB6').innerHTML=Norti_B[RodEscolhida][91][0];
      document.getElementById('nlB6').innerHTML=Norti_B[RodEscolhida][91][2];
      document.getElementById('varB6').innerHTML=Norti_B[RodEscolhida][93];
      document.getElementById('objB6').innerHTML=Norti_B[RodEscolhida][94];
      document.getElementById('ptB6').innerHTML=Norti_B[RodEscolhida][95];
      document.getElementById('vitB6').innerHTML=Norti_B[RodEscolhida][96];
      document.getElementById('empB6').innerHTML=Norti_B[RodEscolhida][97];
      document.getElementById('derB6').innerHTML=Norti_B[RodEscolhida][98];
      document.getElementById('gpB6').innerHTML=Norti_B[RodEscolhida][99];
      document.getElementById('gcB6').innerHTML=Norti_B[RodEscolhida][100];
      document.getElementById('sgB6').innerHTML=Norti_B[RodEscolhida][101];
      document.getElementById('apB6').innerHTML=Norti_B[RodEscolhida][102];
      document.getElementById('ultB6').innerHTML=Norti_B[RodEscolhida][103];
      document.getElementById('penB6').innerHTML=Norti_B[RodEscolhida][104];
      document.getElementById('antB6').innerHTML=Norti_B[RodEscolhida][105];
      document.getElementById('qaB6').innerHTML=Norti_B[RodEscolhida][106];
      document.getElementById('qiB6').innerHTML=Norti_B[RodEscolhida][107];
  
      document.getElementById('logB7').innerHTML=Norti_B[RodEscolhida][108];
      document.getElementById('tecB7').innerHTML=Norti_B[RodEscolhida][110].nome;
      document.getElementById('clubB7').innerHTML=Norti_B[RodEscolhida][109][0];
      document.getElementById('nlB7').innerHTML=Norti_B[RodEscolhida][109][2];
      document.getElementById('varB7').innerHTML=Norti_B[RodEscolhida][111];
      document.getElementById('objB7').innerHTML=Norti_B[RodEscolhida][112];
      document.getElementById('ptB7').innerHTML=Norti_B[RodEscolhida][113];
      document.getElementById('vitB7').innerHTML=Norti_B[RodEscolhida][114];
      document.getElementById('empB7').innerHTML=Norti_B[RodEscolhida][115];
      document.getElementById('derB7').innerHTML=Norti_B[RodEscolhida][116];
      document.getElementById('gpB7').innerHTML=Norti_B[RodEscolhida][117];
      document.getElementById('gcB7').innerHTML=Norti_B[RodEscolhida][118];
      document.getElementById('sgB7').innerHTML=Norti_B[RodEscolhida][119];
      document.getElementById('apB7').innerHTML=Norti_B[RodEscolhida][120];
      document.getElementById('ultB7').innerHTML=Norti_B[RodEscolhida][121];
      document.getElementById('penB7').innerHTML=Norti_B[RodEscolhida][122];
      document.getElementById('antB7').innerHTML=Norti_B[RodEscolhida][123];
      document.getElementById('qaB7').innerHTML=Norti_B[RodEscolhida][124];
      document.getElementById('qiB7').innerHTML=Norti_B[RodEscolhida][125];
  
      document.getElementById('logB8').innerHTML=Norti_B[RodEscolhida][126];
      document.getElementById('tecB8').innerHTML=Norti_B[RodEscolhida][128].nome;
      document.getElementById('clubB8').innerHTML=Norti_B[RodEscolhida][127][0];
      document.getElementById('nlB8').innerHTML=Norti_B[RodEscolhida][127][2];
      document.getElementById('varB8').innerHTML=Norti_B[RodEscolhida][129];
      document.getElementById('objB8').innerHTML=Norti_B[RodEscolhida][130];
      document.getElementById('ptB8').innerHTML=Norti_B[RodEscolhida][131];
      document.getElementById('vitB8').innerHTML=Norti_B[RodEscolhida][132];
      document.getElementById('empB8').innerHTML=Norti_B[RodEscolhida][133];
      document.getElementById('derB8').innerHTML=Norti_B[RodEscolhida][134];
      document.getElementById('gpB8').innerHTML=Norti_B[RodEscolhida][135];
      document.getElementById('gcB8').innerHTML=Norti_B[RodEscolhida][136];
      document.getElementById('sgB8').innerHTML=Norti_B[RodEscolhida][137];
      document.getElementById('apB8').innerHTML=Norti_B[RodEscolhida][138];
      document.getElementById('ultB8').innerHTML=Norti_B[RodEscolhida][139];
      document.getElementById('penB8').innerHTML=Norti_B[RodEscolhida][140];
      document.getElementById('antB8').innerHTML=Norti_B[RodEscolhida][141];
      document.getElementById('qaB8').innerHTML=Norti_B[RodEscolhida][142];
      document.getElementById('qiB8').innerHTML=Norti_B[RodEscolhida][143];
  

      
    }


    
    else if(CampEscolhido==="Centr_A"){

      JogosDaRodada = Centr_Cal_A[RodEscolhida];


      document.getElementById('logB1').innerHTML=Centr_A[RodEscolhida][0];
      document.getElementById('tecB1').innerHTML=Centr_A[RodEscolhida][2].nome;
      document.getElementById('clubB1').innerHTML=Centr_A[RodEscolhida][1][0];
      document.getElementById('nlB1').innerHTML=Centr_A[RodEscolhida][1][2];
      document.getElementById('varB1').innerHTML=Centr_A[RodEscolhida][3];
      document.getElementById('objB1').innerHTML=Centr_A[RodEscolhida][4];
      document.getElementById('ptB1').innerHTML=Centr_A[RodEscolhida][5];
      document.getElementById('vitB1').innerHTML=Centr_A[RodEscolhida][6];
      document.getElementById('empB1').innerHTML=Centr_A[RodEscolhida][7];
      document.getElementById('derB1').innerHTML=Centr_A[RodEscolhida][8];
      document.getElementById('gpB1').innerHTML=Centr_A[RodEscolhida][9];
      document.getElementById('gcB1').innerHTML=Centr_A[RodEscolhida][10];
      document.getElementById('sgB1').innerHTML=Centr_A[RodEscolhida][11];
      document.getElementById('apB1').innerHTML=Centr_A[RodEscolhida][12];
      document.getElementById('ultB1').innerHTML=Centr_A[RodEscolhida][13];
      document.getElementById('penB1').innerHTML=Centr_A[RodEscolhida][14];
      document.getElementById('antB1').innerHTML=Centr_A[RodEscolhida][15];
      document.getElementById('qaB1').innerHTML=Centr_A[RodEscolhida][16];
      document.getElementById('qiB1').innerHTML=Centr_A[RodEscolhida][17];
  
      document.getElementById('logB2').innerHTML=Centr_A[RodEscolhida][18];
      document.getElementById('tecB2').innerHTML=Centr_A[RodEscolhida][20].nome;
      document.getElementById('clubB2').innerHTML=Centr_A[RodEscolhida][19][0];
      document.getElementById('nlB2').innerHTML=Centr_A[RodEscolhida][19][2];
      document.getElementById('varB2').innerHTML=Centr_A[RodEscolhida][21];
      document.getElementById('objB2').innerHTML=Centr_A[RodEscolhida][22];
      document.getElementById('ptB2').innerHTML=Centr_A[RodEscolhida][23];
      document.getElementById('vitB2').innerHTML=Centr_A[RodEscolhida][24];
      document.getElementById('empB2').innerHTML=Centr_A[RodEscolhida][25];
      document.getElementById('derB2').innerHTML=Centr_A[RodEscolhida][26];
      document.getElementById('gpB2').innerHTML=Centr_A[RodEscolhida][27];
      document.getElementById('gcB2').innerHTML=Centr_A[RodEscolhida][28];
      document.getElementById('sgB2').innerHTML=Centr_A[RodEscolhida][29];
      document.getElementById('apB2').innerHTML=Centr_A[RodEscolhida][30];
      document.getElementById('ultB2').innerHTML=Centr_A[RodEscolhida][31];
      document.getElementById('penB2').innerHTML=Centr_A[RodEscolhida][32];
      document.getElementById('antB2').innerHTML=Centr_A[RodEscolhida][33];
      document.getElementById('qaB2').innerHTML=Centr_A[RodEscolhida][34];
      document.getElementById('qiB2').innerHTML=Centr_A[RodEscolhida][35];
  
      document.getElementById('logB3').innerHTML=Centr_A[RodEscolhida][36];
      document.getElementById('tecB3').innerHTML=Centr_A[RodEscolhida][38].nome;
      document.getElementById('clubB3').innerHTML=Centr_A[RodEscolhida][37][0];
      document.getElementById('nlB3').innerHTML=Centr_A[RodEscolhida][37][2];
      document.getElementById('varB3').innerHTML=Centr_A[RodEscolhida][39];
      document.getElementById('objB3').innerHTML=Centr_A[RodEscolhida][40];
      document.getElementById('ptB3').innerHTML=Centr_A[RodEscolhida][41];
      document.getElementById('vitB3').innerHTML=Centr_A[RodEscolhida][42];
      document.getElementById('empB3').innerHTML=Centr_A[RodEscolhida][43];
      document.getElementById('derB3').innerHTML=Centr_A[RodEscolhida][44];
      document.getElementById('gpB3').innerHTML=Centr_A[RodEscolhida][45];
      document.getElementById('gcB3').innerHTML=Centr_A[RodEscolhida][46];
      document.getElementById('sgB3').innerHTML=Centr_A[RodEscolhida][47];
      document.getElementById('apB3').innerHTML=Centr_A[RodEscolhida][48];
      document.getElementById('ultB3').innerHTML=Centr_A[RodEscolhida][49];
      document.getElementById('penB3').innerHTML=Centr_A[RodEscolhida][50];
      document.getElementById('antB3').innerHTML=Centr_A[RodEscolhida][51];
      document.getElementById('qaB3').innerHTML=Centr_A[RodEscolhida][52];
      document.getElementById('qiB3').innerHTML=Centr_A[RodEscolhida][53];
  
      document.getElementById('logB4').innerHTML=Centr_A[RodEscolhida][54];
      document.getElementById('tecB4').innerHTML=Centr_A[RodEscolhida][56].nome;
      document.getElementById('clubB4').innerHTML=Centr_A[RodEscolhida][55][0];
      document.getElementById('nlB4').innerHTML=Centr_A[RodEscolhida][55][2];
      document.getElementById('varB4').innerHTML=Centr_A[RodEscolhida][57];
      document.getElementById('objB4').innerHTML=Centr_A[RodEscolhida][58];
      document.getElementById('ptB4').innerHTML=Centr_A[RodEscolhida][59];
      document.getElementById('vitB4').innerHTML=Centr_A[RodEscolhida][60];
      document.getElementById('empB4').innerHTML=Centr_A[RodEscolhida][61];
      document.getElementById('derB4').innerHTML=Centr_A[RodEscolhida][62];
      document.getElementById('gpB4').innerHTML=Centr_A[RodEscolhida][63];
      document.getElementById('gcB4').innerHTML=Centr_A[RodEscolhida][64];
      document.getElementById('sgB4').innerHTML=Centr_A[RodEscolhida][65];
      document.getElementById('apB4').innerHTML=Centr_A[RodEscolhida][66];
      document.getElementById('ultB4').innerHTML=Centr_A[RodEscolhida][67];
      document.getElementById('penB4').innerHTML=Centr_A[RodEscolhida][68];
      document.getElementById('antB4').innerHTML=Centr_A[RodEscolhida][69];
      document.getElementById('qaB4').innerHTML=Centr_A[RodEscolhida][70];
      document.getElementById('qiB4').innerHTML=Centr_A[RodEscolhida][71];
  
      document.getElementById('logB5').innerHTML=Centr_A[RodEscolhida][72];
      document.getElementById('tecB5').innerHTML=Centr_A[RodEscolhida][74].nome;
      document.getElementById('clubB5').innerHTML=Centr_A[RodEscolhida][73][0];
      document.getElementById('nlB5').innerHTML=Centr_A[RodEscolhida][73][2];
      document.getElementById('varB5').innerHTML=Centr_A[RodEscolhida][75];
      document.getElementById('objB5').innerHTML=Centr_A[RodEscolhida][76];
      document.getElementById('ptB5').innerHTML=Centr_A[RodEscolhida][77];
      document.getElementById('vitB5').innerHTML=Centr_A[RodEscolhida][78];
      document.getElementById('empB5').innerHTML=Centr_A[RodEscolhida][79];
      document.getElementById('derB5').innerHTML=Centr_A[RodEscolhida][80];
      document.getElementById('gpB5').innerHTML=Centr_A[RodEscolhida][81];
      document.getElementById('gcB5').innerHTML=Centr_A[RodEscolhida][82];
      document.getElementById('sgB5').innerHTML=Centr_A[RodEscolhida][83];
      document.getElementById('apB5').innerHTML=Centr_A[RodEscolhida][84];
      document.getElementById('ultB5').innerHTML=Centr_A[RodEscolhida][85];
      document.getElementById('penB5').innerHTML=Centr_A[RodEscolhida][86];
      document.getElementById('antB5').innerHTML=Centr_A[RodEscolhida][87];
      document.getElementById('qaB5').innerHTML=Centr_A[RodEscolhida][88];
      document.getElementById('qiB5').innerHTML=Centr_A[RodEscolhida][89];
  
      document.getElementById('logB6').innerHTML=Centr_A[RodEscolhida][90];
      document.getElementById('tecB6').innerHTML=Centr_A[RodEscolhida][92].nome;
      document.getElementById('clubB6').innerHTML=Centr_A[RodEscolhida][91][0];
      document.getElementById('nlB6').innerHTML=Centr_A[RodEscolhida][91][2];
      document.getElementById('varB6').innerHTML=Centr_A[RodEscolhida][93];
      document.getElementById('objB6').innerHTML=Centr_A[RodEscolhida][94];
      document.getElementById('ptB6').innerHTML=Centr_A[RodEscolhida][95];
      document.getElementById('vitB6').innerHTML=Centr_A[RodEscolhida][96];
      document.getElementById('empB6').innerHTML=Centr_A[RodEscolhida][97];
      document.getElementById('derB6').innerHTML=Centr_A[RodEscolhida][98];
      document.getElementById('gpB6').innerHTML=Centr_A[RodEscolhida][99];
      document.getElementById('gcB6').innerHTML=Centr_A[RodEscolhida][100];
      document.getElementById('sgB6').innerHTML=Centr_A[RodEscolhida][101];
      document.getElementById('apB6').innerHTML=Centr_A[RodEscolhida][102];
      document.getElementById('ultB6').innerHTML=Centr_A[RodEscolhida][103];
      document.getElementById('penB6').innerHTML=Centr_A[RodEscolhida][104];
      document.getElementById('antB6').innerHTML=Centr_A[RodEscolhida][105];
      document.getElementById('qaB6').innerHTML=Centr_A[RodEscolhida][106];
      document.getElementById('qiB6').innerHTML=Centr_A[RodEscolhida][107];
  
      document.getElementById('logB7').innerHTML=Centr_A[RodEscolhida][108];
      document.getElementById('tecB7').innerHTML=Centr_A[RodEscolhida][110].nome;
      document.getElementById('clubB7').innerHTML=Centr_A[RodEscolhida][109][0];
      document.getElementById('nlB7').innerHTML=Centr_A[RodEscolhida][109][2];
      document.getElementById('varB7').innerHTML=Centr_A[RodEscolhida][111];
      document.getElementById('objB7').innerHTML=Centr_A[RodEscolhida][112];
      document.getElementById('ptB7').innerHTML=Centr_A[RodEscolhida][113];
      document.getElementById('vitB7').innerHTML=Centr_A[RodEscolhida][114];
      document.getElementById('empB7').innerHTML=Centr_A[RodEscolhida][115];
      document.getElementById('derB7').innerHTML=Centr_A[RodEscolhida][116];
      document.getElementById('gpB7').innerHTML=Centr_A[RodEscolhida][117];
      document.getElementById('gcB7').innerHTML=Centr_A[RodEscolhida][118];
      document.getElementById('sgB7').innerHTML=Centr_A[RodEscolhida][119];
      document.getElementById('apB7').innerHTML=Centr_A[RodEscolhida][120];
      document.getElementById('ultB7').innerHTML=Centr_A[RodEscolhida][121];
      document.getElementById('penB7').innerHTML=Centr_A[RodEscolhida][122];
      document.getElementById('antB7').innerHTML=Centr_A[RodEscolhida][123];
      document.getElementById('qaB7').innerHTML=Centr_A[RodEscolhida][124];
      document.getElementById('qiB7').innerHTML=Centr_A[RodEscolhida][125];
  
      document.getElementById('logB8').innerHTML=Centr_A[RodEscolhida][126];
      document.getElementById('tecB8').innerHTML=Centr_A[RodEscolhida][128].nome;
      document.getElementById('clubB8').innerHTML=Centr_A[RodEscolhida][127][0];
      document.getElementById('nlB8').innerHTML=Centr_A[RodEscolhida][127][2];
      document.getElementById('varB8').innerHTML=Centr_A[RodEscolhida][129];
      document.getElementById('objB8').innerHTML=Centr_A[RodEscolhida][130];
      document.getElementById('ptB8').innerHTML=Centr_A[RodEscolhida][131];
      document.getElementById('vitB8').innerHTML=Centr_A[RodEscolhida][132];
      document.getElementById('empB8').innerHTML=Centr_A[RodEscolhida][133];
      document.getElementById('derB8').innerHTML=Centr_A[RodEscolhida][134];
      document.getElementById('gpB8').innerHTML=Centr_A[RodEscolhida][135];
      document.getElementById('gcB8').innerHTML=Centr_A[RodEscolhida][136];
      document.getElementById('sgB8').innerHTML=Centr_A[RodEscolhida][137];
      document.getElementById('apB8').innerHTML=Centr_A[RodEscolhida][138];
      document.getElementById('ultB8').innerHTML=Centr_A[RodEscolhida][139];
      document.getElementById('penB8').innerHTML=Centr_A[RodEscolhida][140];
      document.getElementById('antB8').innerHTML=Centr_A[RodEscolhida][141];
      document.getElementById('qaB8').innerHTML=Centr_A[RodEscolhida][142];
      document.getElementById('qiB8').innerHTML=Centr_A[RodEscolhida][143];
  

      
    }


    else if(CampEscolhido==="Centr_B"){


      JogosDaRodada = Centr_Cal_B[RodEscolhida];


      document.getElementById('logB1').innerHTML=Centr_B[RodEscolhida][0];
      document.getElementById('tecB1').innerHTML=Centr_B[RodEscolhida][2].nome;
      document.getElementById('clubB1').innerHTML=Centr_B[RodEscolhida][1][0];
      document.getElementById('nlB1').innerHTML=Centr_B[RodEscolhida][1][2];
      document.getElementById('varB1').innerHTML=Centr_B[RodEscolhida][3];
      document.getElementById('objB1').innerHTML=Centr_B[RodEscolhida][4];
      document.getElementById('ptB1').innerHTML=Centr_B[RodEscolhida][5];
      document.getElementById('vitB1').innerHTML=Centr_B[RodEscolhida][6];
      document.getElementById('empB1').innerHTML=Centr_B[RodEscolhida][7];
      document.getElementById('derB1').innerHTML=Centr_B[RodEscolhida][8];
      document.getElementById('gpB1').innerHTML=Centr_B[RodEscolhida][9];
      document.getElementById('gcB1').innerHTML=Centr_B[RodEscolhida][10];
      document.getElementById('sgB1').innerHTML=Centr_B[RodEscolhida][11];
      document.getElementById('apB1').innerHTML=Centr_B[RodEscolhida][12];
      document.getElementById('ultB1').innerHTML=Centr_B[RodEscolhida][13];
      document.getElementById('penB1').innerHTML=Centr_B[RodEscolhida][14];
      document.getElementById('antB1').innerHTML=Centr_B[RodEscolhida][15];
      document.getElementById('qaB1').innerHTML=Centr_B[RodEscolhida][16];
      document.getElementById('qiB1').innerHTML=Centr_B[RodEscolhida][17];
  
      document.getElementById('logB2').innerHTML=Centr_B[RodEscolhida][18];
      document.getElementById('tecB2').innerHTML=Centr_B[RodEscolhida][20].nome;
      document.getElementById('clubB2').innerHTML=Centr_B[RodEscolhida][19][0];
      document.getElementById('nlB2').innerHTML=Centr_B[RodEscolhida][19][2];
      document.getElementById('varB2').innerHTML=Centr_B[RodEscolhida][21];
      document.getElementById('objB2').innerHTML=Centr_B[RodEscolhida][22];
      document.getElementById('ptB2').innerHTML=Centr_B[RodEscolhida][23];
      document.getElementById('vitB2').innerHTML=Centr_B[RodEscolhida][24];
      document.getElementById('empB2').innerHTML=Centr_B[RodEscolhida][25];
      document.getElementById('derB2').innerHTML=Centr_B[RodEscolhida][26];
      document.getElementById('gpB2').innerHTML=Centr_B[RodEscolhida][27];
      document.getElementById('gcB2').innerHTML=Centr_B[RodEscolhida][28];
      document.getElementById('sgB2').innerHTML=Centr_B[RodEscolhida][29];
      document.getElementById('apB2').innerHTML=Centr_B[RodEscolhida][30];
      document.getElementById('ultB2').innerHTML=Centr_B[RodEscolhida][31];
      document.getElementById('penB2').innerHTML=Centr_B[RodEscolhida][32];
      document.getElementById('antB2').innerHTML=Centr_B[RodEscolhida][33];
      document.getElementById('qaB2').innerHTML=Centr_B[RodEscolhida][34];
      document.getElementById('qiB2').innerHTML=Centr_B[RodEscolhida][35];
  
      document.getElementById('logB3').innerHTML=Centr_B[RodEscolhida][36];
      document.getElementById('tecB3').innerHTML=Centr_B[RodEscolhida][38].nome;
      document.getElementById('clubB3').innerHTML=Centr_B[RodEscolhida][37][0];
      document.getElementById('nlB3').innerHTML=Centr_B[RodEscolhida][37][2];
      document.getElementById('varB3').innerHTML=Centr_B[RodEscolhida][39];
      document.getElementById('objB3').innerHTML=Centr_B[RodEscolhida][40];
      document.getElementById('ptB3').innerHTML=Centr_B[RodEscolhida][41];
      document.getElementById('vitB3').innerHTML=Centr_B[RodEscolhida][42];
      document.getElementById('empB3').innerHTML=Centr_B[RodEscolhida][43];
      document.getElementById('derB3').innerHTML=Centr_B[RodEscolhida][44];
      document.getElementById('gpB3').innerHTML=Centr_B[RodEscolhida][45];
      document.getElementById('gcB3').innerHTML=Centr_B[RodEscolhida][46];
      document.getElementById('sgB3').innerHTML=Centr_B[RodEscolhida][47];
      document.getElementById('apB3').innerHTML=Centr_B[RodEscolhida][48];
      document.getElementById('ultB3').innerHTML=Centr_B[RodEscolhida][49];
      document.getElementById('penB3').innerHTML=Centr_B[RodEscolhida][50];
      document.getElementById('antB3').innerHTML=Centr_B[RodEscolhida][51];
      document.getElementById('qaB3').innerHTML=Centr_B[RodEscolhida][52];
      document.getElementById('qiB3').innerHTML=Centr_B[RodEscolhida][53];
  
      document.getElementById('logB4').innerHTML=Centr_B[RodEscolhida][54];
      document.getElementById('tecB4').innerHTML=Centr_B[RodEscolhida][56].nome;
      document.getElementById('clubB4').innerHTML=Centr_B[RodEscolhida][55][0];
      document.getElementById('nlB4').innerHTML=Centr_B[RodEscolhida][55][2];
      document.getElementById('varB4').innerHTML=Centr_B[RodEscolhida][57];
      document.getElementById('objB4').innerHTML=Centr_B[RodEscolhida][58];
      document.getElementById('ptB4').innerHTML=Centr_B[RodEscolhida][59];
      document.getElementById('vitB4').innerHTML=Centr_B[RodEscolhida][60];
      document.getElementById('empB4').innerHTML=Centr_B[RodEscolhida][61];
      document.getElementById('derB4').innerHTML=Centr_B[RodEscolhida][62];
      document.getElementById('gpB4').innerHTML=Centr_B[RodEscolhida][63];
      document.getElementById('gcB4').innerHTML=Centr_B[RodEscolhida][64];
      document.getElementById('sgB4').innerHTML=Centr_B[RodEscolhida][65];
      document.getElementById('apB4').innerHTML=Centr_B[RodEscolhida][66];
      document.getElementById('ultB4').innerHTML=Centr_B[RodEscolhida][67];
      document.getElementById('penB4').innerHTML=Centr_B[RodEscolhida][68];
      document.getElementById('antB4').innerHTML=Centr_B[RodEscolhida][69];
      document.getElementById('qaB4').innerHTML=Centr_B[RodEscolhida][70];
      document.getElementById('qiB4').innerHTML=Centr_B[RodEscolhida][71];
  
      document.getElementById('logB5').innerHTML=Centr_B[RodEscolhida][72];
      document.getElementById('tecB5').innerHTML=Centr_B[RodEscolhida][74].nome;
      document.getElementById('clubB5').innerHTML=Centr_B[RodEscolhida][73][0];
      document.getElementById('nlB5').innerHTML=Centr_B[RodEscolhida][73][2];
      document.getElementById('varB5').innerHTML=Centr_B[RodEscolhida][75];
      document.getElementById('objB5').innerHTML=Centr_B[RodEscolhida][76];
      document.getElementById('ptB5').innerHTML=Centr_B[RodEscolhida][77];
      document.getElementById('vitB5').innerHTML=Centr_B[RodEscolhida][78];
      document.getElementById('empB5').innerHTML=Centr_B[RodEscolhida][79];
      document.getElementById('derB5').innerHTML=Centr_B[RodEscolhida][80];
      document.getElementById('gpB5').innerHTML=Centr_B[RodEscolhida][81];
      document.getElementById('gcB5').innerHTML=Centr_B[RodEscolhida][82];
      document.getElementById('sgB5').innerHTML=Centr_B[RodEscolhida][83];
      document.getElementById('apB5').innerHTML=Centr_B[RodEscolhida][84];
      document.getElementById('ultB5').innerHTML=Centr_B[RodEscolhida][85];
      document.getElementById('penB5').innerHTML=Centr_B[RodEscolhida][86];
      document.getElementById('antB5').innerHTML=Centr_B[RodEscolhida][87];
      document.getElementById('qaB5').innerHTML=Centr_B[RodEscolhida][88];
      document.getElementById('qiB5').innerHTML=Centr_B[RodEscolhida][89];
  
      document.getElementById('logB6').innerHTML=Centr_B[RodEscolhida][90];
      document.getElementById('tecB6').innerHTML=Centr_B[RodEscolhida][92].nome;
      document.getElementById('clubB6').innerHTML=Centr_B[RodEscolhida][91][0];
      document.getElementById('nlB6').innerHTML=Centr_B[RodEscolhida][91][2];
      document.getElementById('varB6').innerHTML=Centr_B[RodEscolhida][93];
      document.getElementById('objB6').innerHTML=Centr_B[RodEscolhida][94];
      document.getElementById('ptB6').innerHTML=Centr_B[RodEscolhida][95];
      document.getElementById('vitB6').innerHTML=Centr_B[RodEscolhida][96];
      document.getElementById('empB6').innerHTML=Centr_B[RodEscolhida][97];
      document.getElementById('derB6').innerHTML=Centr_B[RodEscolhida][98];
      document.getElementById('gpB6').innerHTML=Centr_B[RodEscolhida][99];
      document.getElementById('gcB6').innerHTML=Centr_B[RodEscolhida][100];
      document.getElementById('sgB6').innerHTML=Centr_B[RodEscolhida][101];
      document.getElementById('apB6').innerHTML=Centr_B[RodEscolhida][102];
      document.getElementById('ultB6').innerHTML=Centr_B[RodEscolhida][103];
      document.getElementById('penB6').innerHTML=Centr_B[RodEscolhida][104];
      document.getElementById('antB6').innerHTML=Centr_B[RodEscolhida][105];
      document.getElementById('qaB6').innerHTML=Centr_B[RodEscolhida][106];
      document.getElementById('qiB6').innerHTML=Centr_B[RodEscolhida][107];
  
      document.getElementById('logB7').innerHTML=Centr_B[RodEscolhida][108];
      document.getElementById('tecB7').innerHTML=Centr_B[RodEscolhida][110].nome;
      document.getElementById('clubB7').innerHTML=Centr_B[RodEscolhida][109][0];
      document.getElementById('nlB7').innerHTML=Centr_B[RodEscolhida][109][2];
      document.getElementById('varB7').innerHTML=Centr_B[RodEscolhida][111];
      document.getElementById('objB7').innerHTML=Centr_B[RodEscolhida][112];
      document.getElementById('ptB7').innerHTML=Centr_B[RodEscolhida][113];
      document.getElementById('vitB7').innerHTML=Centr_B[RodEscolhida][114];
      document.getElementById('empB7').innerHTML=Centr_B[RodEscolhida][115];
      document.getElementById('derB7').innerHTML=Centr_B[RodEscolhida][116];
      document.getElementById('gpB7').innerHTML=Centr_B[RodEscolhida][117];
      document.getElementById('gcB7').innerHTML=Centr_B[RodEscolhida][118];
      document.getElementById('sgB7').innerHTML=Centr_B[RodEscolhida][119];
      document.getElementById('apB7').innerHTML=Centr_B[RodEscolhida][120];
      document.getElementById('ultB7').innerHTML=Centr_B[RodEscolhida][121];
      document.getElementById('penB7').innerHTML=Centr_B[RodEscolhida][122];
      document.getElementById('antB7').innerHTML=Centr_B[RodEscolhida][123];
      document.getElementById('qaB7').innerHTML=Centr_B[RodEscolhida][124];
      document.getElementById('qiB7').innerHTML=Centr_B[RodEscolhida][125];
  
      document.getElementById('logB8').innerHTML=Centr_B[RodEscolhida][126];
      document.getElementById('tecB8').innerHTML=Centr_B[RodEscolhida][128].nome;
      document.getElementById('clubB8').innerHTML=Centr_B[RodEscolhida][127][0];
      document.getElementById('nlB8').innerHTML=Centr_B[RodEscolhida][127][2];
      document.getElementById('varB8').innerHTML=Centr_B[RodEscolhida][129];
      document.getElementById('objB8').innerHTML=Centr_B[RodEscolhida][130];
      document.getElementById('ptB8').innerHTML=Centr_B[RodEscolhida][131];
      document.getElementById('vitB8').innerHTML=Centr_B[RodEscolhida][132];
      document.getElementById('empB8').innerHTML=Centr_B[RodEscolhida][133];
      document.getElementById('derB8').innerHTML=Centr_B[RodEscolhida][134];
      document.getElementById('gpB8').innerHTML=Centr_B[RodEscolhida][135];
      document.getElementById('gcB8').innerHTML=Centr_B[RodEscolhida][136];
      document.getElementById('sgB8').innerHTML=Centr_B[RodEscolhida][137];
      document.getElementById('apB8').innerHTML=Centr_B[RodEscolhida][138];
      document.getElementById('ultB8').innerHTML=Centr_B[RodEscolhida][139];
      document.getElementById('penB8').innerHTML=Centr_B[RodEscolhida][140];
      document.getElementById('antB8').innerHTML=Centr_B[RodEscolhida][141];
      document.getElementById('qaB8').innerHTML=Centr_B[RodEscolhida][142];
      document.getElementById('qiB8').innerHTML=Centr_B[RodEscolhida][143];
  

      
    }

    else if(CampEscolhido==="Goian_A"){


      JogosDaRodada = Goian_Cal_A[RodEscolhida];


      document.getElementById('logB1').innerHTML=Goian_A[RodEscolhida][0];
      document.getElementById('tecB1').innerHTML=Goian_A[RodEscolhida][2].nome;
      document.getElementById('clubB1').innerHTML=Goian_A[RodEscolhida][1][0];
      document.getElementById('nlB1').innerHTML=Goian_A[RodEscolhida][1][2];
      document.getElementById('varB1').innerHTML=Goian_A[RodEscolhida][3];
      document.getElementById('objB1').innerHTML=Goian_A[RodEscolhida][4];
      document.getElementById('ptB1').innerHTML=Goian_A[RodEscolhida][5];
      document.getElementById('vitB1').innerHTML=Goian_A[RodEscolhida][6];
      document.getElementById('empB1').innerHTML=Goian_A[RodEscolhida][7];
      document.getElementById('derB1').innerHTML=Goian_A[RodEscolhida][8];
      document.getElementById('gpB1').innerHTML=Goian_A[RodEscolhida][9];
      document.getElementById('gcB1').innerHTML=Goian_A[RodEscolhida][10];
      document.getElementById('sgB1').innerHTML=Goian_A[RodEscolhida][11];
      document.getElementById('apB1').innerHTML=Goian_A[RodEscolhida][12];
      document.getElementById('ultB1').innerHTML=Goian_A[RodEscolhida][13];
      document.getElementById('penB1').innerHTML=Goian_A[RodEscolhida][14];
      document.getElementById('antB1').innerHTML=Goian_A[RodEscolhida][15];
      document.getElementById('qaB1').innerHTML=Goian_A[RodEscolhida][16];
      document.getElementById('qiB1').innerHTML=Goian_A[RodEscolhida][17];
  
      document.getElementById('logB2').innerHTML=Goian_A[RodEscolhida][18];
      document.getElementById('tecB2').innerHTML=Goian_A[RodEscolhida][20].nome;
      document.getElementById('clubB2').innerHTML=Goian_A[RodEscolhida][19][0];
      document.getElementById('nlB2').innerHTML=Goian_A[RodEscolhida][19][2];
      document.getElementById('varB2').innerHTML=Goian_A[RodEscolhida][21];
      document.getElementById('objB2').innerHTML=Goian_A[RodEscolhida][22];
      document.getElementById('ptB2').innerHTML=Goian_A[RodEscolhida][23];
      document.getElementById('vitB2').innerHTML=Goian_A[RodEscolhida][24];
      document.getElementById('empB2').innerHTML=Goian_A[RodEscolhida][25];
      document.getElementById('derB2').innerHTML=Goian_A[RodEscolhida][26];
      document.getElementById('gpB2').innerHTML=Goian_A[RodEscolhida][27];
      document.getElementById('gcB2').innerHTML=Goian_A[RodEscolhida][28];
      document.getElementById('sgB2').innerHTML=Goian_A[RodEscolhida][29];
      document.getElementById('apB2').innerHTML=Goian_A[RodEscolhida][30];
      document.getElementById('ultB2').innerHTML=Goian_A[RodEscolhida][31];
      document.getElementById('penB2').innerHTML=Goian_A[RodEscolhida][32];
      document.getElementById('antB2').innerHTML=Goian_A[RodEscolhida][33];
      document.getElementById('qaB2').innerHTML=Goian_A[RodEscolhida][34];
      document.getElementById('qiB2').innerHTML=Goian_A[RodEscolhida][35];
  
      document.getElementById('logB3').innerHTML=Goian_A[RodEscolhida][36];
      document.getElementById('tecB3').innerHTML=Goian_A[RodEscolhida][38].nome;
      document.getElementById('clubB3').innerHTML=Goian_A[RodEscolhida][37][0];
      document.getElementById('nlB3').innerHTML=Goian_A[RodEscolhida][37][2];
      document.getElementById('varB3').innerHTML=Goian_A[RodEscolhida][39];
      document.getElementById('objB3').innerHTML=Goian_A[RodEscolhida][40];
      document.getElementById('ptB3').innerHTML=Goian_A[RodEscolhida][41];
      document.getElementById('vitB3').innerHTML=Goian_A[RodEscolhida][42];
      document.getElementById('empB3').innerHTML=Goian_A[RodEscolhida][43];
      document.getElementById('derB3').innerHTML=Goian_A[RodEscolhida][44];
      document.getElementById('gpB3').innerHTML=Goian_A[RodEscolhida][45];
      document.getElementById('gcB3').innerHTML=Goian_A[RodEscolhida][46];
      document.getElementById('sgB3').innerHTML=Goian_A[RodEscolhida][47];
      document.getElementById('apB3').innerHTML=Goian_A[RodEscolhida][48];
      document.getElementById('ultB3').innerHTML=Goian_A[RodEscolhida][49];
      document.getElementById('penB3').innerHTML=Goian_A[RodEscolhida][50];
      document.getElementById('antB3').innerHTML=Goian_A[RodEscolhida][51];
      document.getElementById('qaB3').innerHTML=Goian_A[RodEscolhida][52];
      document.getElementById('qiB3').innerHTML=Goian_A[RodEscolhida][53];
  
      document.getElementById('logB4').innerHTML=Goian_A[RodEscolhida][54];
      document.getElementById('tecB4').innerHTML=Goian_A[RodEscolhida][56].nome;
      document.getElementById('clubB4').innerHTML=Goian_A[RodEscolhida][55][0];
      document.getElementById('nlB4').innerHTML=Goian_A[RodEscolhida][55][2];
      document.getElementById('varB4').innerHTML=Goian_A[RodEscolhida][57];
      document.getElementById('objB4').innerHTML=Goian_A[RodEscolhida][58];
      document.getElementById('ptB4').innerHTML=Goian_A[RodEscolhida][59];
      document.getElementById('vitB4').innerHTML=Goian_A[RodEscolhida][60];
      document.getElementById('empB4').innerHTML=Goian_A[RodEscolhida][61];
      document.getElementById('derB4').innerHTML=Goian_A[RodEscolhida][62];
      document.getElementById('gpB4').innerHTML=Goian_A[RodEscolhida][63];
      document.getElementById('gcB4').innerHTML=Goian_A[RodEscolhida][64];
      document.getElementById('sgB4').innerHTML=Goian_A[RodEscolhida][65];
      document.getElementById('apB4').innerHTML=Goian_A[RodEscolhida][66];
      document.getElementById('ultB4').innerHTML=Goian_A[RodEscolhida][67];
      document.getElementById('penB4').innerHTML=Goian_A[RodEscolhida][68];
      document.getElementById('antB4').innerHTML=Goian_A[RodEscolhida][69];
      document.getElementById('qaB4').innerHTML=Goian_A[RodEscolhida][70];
      document.getElementById('qiB4').innerHTML=Goian_A[RodEscolhida][71];
  
      document.getElementById('logB5').innerHTML=Goian_A[RodEscolhida][72];
      document.getElementById('tecB5').innerHTML=Goian_A[RodEscolhida][74].nome;
      document.getElementById('clubB5').innerHTML=Goian_A[RodEscolhida][73][0];
      document.getElementById('nlB5').innerHTML=Goian_A[RodEscolhida][73][2];
      document.getElementById('varB5').innerHTML=Goian_A[RodEscolhida][75];
      document.getElementById('objB5').innerHTML=Goian_A[RodEscolhida][76];
      document.getElementById('ptB5').innerHTML=Goian_A[RodEscolhida][77];
      document.getElementById('vitB5').innerHTML=Goian_A[RodEscolhida][78];
      document.getElementById('empB5').innerHTML=Goian_A[RodEscolhida][79];
      document.getElementById('derB5').innerHTML=Goian_A[RodEscolhida][80];
      document.getElementById('gpB5').innerHTML=Goian_A[RodEscolhida][81];
      document.getElementById('gcB5').innerHTML=Goian_A[RodEscolhida][82];
      document.getElementById('sgB5').innerHTML=Goian_A[RodEscolhida][83];
      document.getElementById('apB5').innerHTML=Goian_A[RodEscolhida][84];
      document.getElementById('ultB5').innerHTML=Goian_A[RodEscolhida][85];
      document.getElementById('penB5').innerHTML=Goian_A[RodEscolhida][86];
      document.getElementById('antB5').innerHTML=Goian_A[RodEscolhida][87];
      document.getElementById('qaB5').innerHTML=Goian_A[RodEscolhida][88];
      document.getElementById('qiB5').innerHTML=Goian_A[RodEscolhida][89];
  
      document.getElementById('logB6').innerHTML=Goian_A[RodEscolhida][90];
      document.getElementById('tecB6').innerHTML=Goian_A[RodEscolhida][92].nome;
      document.getElementById('clubB6').innerHTML=Goian_A[RodEscolhida][91][0];
      document.getElementById('nlB6').innerHTML=Goian_A[RodEscolhida][91][2];
      document.getElementById('varB6').innerHTML=Goian_A[RodEscolhida][93];
      document.getElementById('objB6').innerHTML=Goian_A[RodEscolhida][94];
      document.getElementById('ptB6').innerHTML=Goian_A[RodEscolhida][95];
      document.getElementById('vitB6').innerHTML=Goian_A[RodEscolhida][96];
      document.getElementById('empB6').innerHTML=Goian_A[RodEscolhida][97];
      document.getElementById('derB6').innerHTML=Goian_A[RodEscolhida][98];
      document.getElementById('gpB6').innerHTML=Goian_A[RodEscolhida][99];
      document.getElementById('gcB6').innerHTML=Goian_A[RodEscolhida][100];
      document.getElementById('sgB6').innerHTML=Goian_A[RodEscolhida][101];
      document.getElementById('apB6').innerHTML=Goian_A[RodEscolhida][102];
      document.getElementById('ultB6').innerHTML=Goian_A[RodEscolhida][103];
      document.getElementById('penB6').innerHTML=Goian_A[RodEscolhida][104];
      document.getElementById('antB6').innerHTML=Goian_A[RodEscolhida][105];
      document.getElementById('qaB6').innerHTML=Goian_A[RodEscolhida][106];
      document.getElementById('qiB6').innerHTML=Goian_A[RodEscolhida][107];
  
      document.getElementById('logB7').innerHTML=Goian_A[RodEscolhida][108];
      document.getElementById('tecB7').innerHTML=Goian_A[RodEscolhida][110].nome;
      document.getElementById('clubB7').innerHTML=Goian_A[RodEscolhida][109][0];
      document.getElementById('nlB7').innerHTML=Goian_A[RodEscolhida][109][2];
      document.getElementById('varB7').innerHTML=Goian_A[RodEscolhida][111];
      document.getElementById('objB7').innerHTML=Goian_A[RodEscolhida][112];
      document.getElementById('ptB7').innerHTML=Goian_A[RodEscolhida][113];
      document.getElementById('vitB7').innerHTML=Goian_A[RodEscolhida][114];
      document.getElementById('empB7').innerHTML=Goian_A[RodEscolhida][115];
      document.getElementById('derB7').innerHTML=Goian_A[RodEscolhida][116];
      document.getElementById('gpB7').innerHTML=Goian_A[RodEscolhida][117];
      document.getElementById('gcB7').innerHTML=Goian_A[RodEscolhida][118];
      document.getElementById('sgB7').innerHTML=Goian_A[RodEscolhida][119];
      document.getElementById('apB7').innerHTML=Goian_A[RodEscolhida][120];
      document.getElementById('ultB7').innerHTML=Goian_A[RodEscolhida][121];
      document.getElementById('penB7').innerHTML=Goian_A[RodEscolhida][122];
      document.getElementById('antB7').innerHTML=Goian_A[RodEscolhida][123];
      document.getElementById('qaB7').innerHTML=Goian_A[RodEscolhida][124];
      document.getElementById('qiB7').innerHTML=Goian_A[RodEscolhida][125];
  
      document.getElementById('logB8').innerHTML=Goian_A[RodEscolhida][126];
      document.getElementById('tecB8').innerHTML=Goian_A[RodEscolhida][128].nome;
      document.getElementById('clubB8').innerHTML=Goian_A[RodEscolhida][127][0];
      document.getElementById('nlB8').innerHTML=Goian_A[RodEscolhida][127][2];
      document.getElementById('varB8').innerHTML=Goian_A[RodEscolhida][129];
      document.getElementById('objB8').innerHTML=Goian_A[RodEscolhida][130];
      document.getElementById('ptB8').innerHTML=Goian_A[RodEscolhida][131];
      document.getElementById('vitB8').innerHTML=Goian_A[RodEscolhida][132];
      document.getElementById('empB8').innerHTML=Goian_A[RodEscolhida][133];
      document.getElementById('derB8').innerHTML=Goian_A[RodEscolhida][134];
      document.getElementById('gpB8').innerHTML=Goian_A[RodEscolhida][135];
      document.getElementById('gcB8').innerHTML=Goian_A[RodEscolhida][136];
      document.getElementById('sgB8').innerHTML=Goian_A[RodEscolhida][137];
      document.getElementById('apB8').innerHTML=Goian_A[RodEscolhida][138];
      document.getElementById('ultB8').innerHTML=Goian_A[RodEscolhida][139];
      document.getElementById('penB8').innerHTML=Goian_A[RodEscolhida][140];
      document.getElementById('antB8').innerHTML=Goian_A[RodEscolhida][141];
      document.getElementById('qaB8').innerHTML=Goian_A[RodEscolhida][142];
      document.getElementById('qiB8').innerHTML=Goian_A[RodEscolhida][143];
  

      
    }


    else if(CampEscolhido==="Goian_B"){


      JogosDaRodada = Goian_Cal_B[RodEscolhida];


      document.getElementById('logB1').innerHTML=Goian_B[RodEscolhida][0];
      document.getElementById('tecB1').innerHTML=Goian_B[RodEscolhida][2].nome;
      document.getElementById('clubB1').innerHTML=Goian_B[RodEscolhida][1][0];
      document.getElementById('nlB1').innerHTML=Goian_B[RodEscolhida][1][2];
      document.getElementById('varB1').innerHTML=Goian_B[RodEscolhida][3];
      document.getElementById('objB1').innerHTML=Goian_B[RodEscolhida][4];
      document.getElementById('ptB1').innerHTML=Goian_B[RodEscolhida][5];
      document.getElementById('vitB1').innerHTML=Goian_B[RodEscolhida][6];
      document.getElementById('empB1').innerHTML=Goian_B[RodEscolhida][7];
      document.getElementById('derB1').innerHTML=Goian_B[RodEscolhida][8];
      document.getElementById('gpB1').innerHTML=Goian_B[RodEscolhida][9];
      document.getElementById('gcB1').innerHTML=Goian_B[RodEscolhida][10];
      document.getElementById('sgB1').innerHTML=Goian_B[RodEscolhida][11];
      document.getElementById('apB1').innerHTML=Goian_B[RodEscolhida][12];
      document.getElementById('ultB1').innerHTML=Goian_B[RodEscolhida][13];
      document.getElementById('penB1').innerHTML=Goian_B[RodEscolhida][14];
      document.getElementById('antB1').innerHTML=Goian_B[RodEscolhida][15];
      document.getElementById('qaB1').innerHTML=Goian_B[RodEscolhida][16];
      document.getElementById('qiB1').innerHTML=Goian_B[RodEscolhida][17];
  
      document.getElementById('logB2').innerHTML=Goian_B[RodEscolhida][18];
      document.getElementById('tecB2').innerHTML=Goian_B[RodEscolhida][20].nome;
      document.getElementById('clubB2').innerHTML=Goian_B[RodEscolhida][19][0];
      document.getElementById('nlB2').innerHTML=Goian_B[RodEscolhida][19][2];
      document.getElementById('varB2').innerHTML=Goian_B[RodEscolhida][21];
      document.getElementById('objB2').innerHTML=Goian_B[RodEscolhida][22];
      document.getElementById('ptB2').innerHTML=Goian_B[RodEscolhida][23];
      document.getElementById('vitB2').innerHTML=Goian_B[RodEscolhida][24];
      document.getElementById('empB2').innerHTML=Goian_B[RodEscolhida][25];
      document.getElementById('derB2').innerHTML=Goian_B[RodEscolhida][26];
      document.getElementById('gpB2').innerHTML=Goian_B[RodEscolhida][27];
      document.getElementById('gcB2').innerHTML=Goian_B[RodEscolhida][28];
      document.getElementById('sgB2').innerHTML=Goian_B[RodEscolhida][29];
      document.getElementById('apB2').innerHTML=Goian_B[RodEscolhida][30];
      document.getElementById('ultB2').innerHTML=Goian_B[RodEscolhida][31];
      document.getElementById('penB2').innerHTML=Goian_B[RodEscolhida][32];
      document.getElementById('antB2').innerHTML=Goian_B[RodEscolhida][33];
      document.getElementById('qaB2').innerHTML=Goian_B[RodEscolhida][34];
      document.getElementById('qiB2').innerHTML=Goian_B[RodEscolhida][35];
  
      document.getElementById('logB3').innerHTML=Goian_B[RodEscolhida][36];
      document.getElementById('tecB3').innerHTML=Goian_B[RodEscolhida][38].nome;
      document.getElementById('clubB3').innerHTML=Goian_B[RodEscolhida][37][0];
      document.getElementById('nlB3').innerHTML=Goian_B[RodEscolhida][37][2];
      document.getElementById('varB3').innerHTML=Goian_B[RodEscolhida][39];
      document.getElementById('objB3').innerHTML=Goian_B[RodEscolhida][40];
      document.getElementById('ptB3').innerHTML=Goian_B[RodEscolhida][41];
      document.getElementById('vitB3').innerHTML=Goian_B[RodEscolhida][42];
      document.getElementById('empB3').innerHTML=Goian_B[RodEscolhida][43];
      document.getElementById('derB3').innerHTML=Goian_B[RodEscolhida][44];
      document.getElementById('gpB3').innerHTML=Goian_B[RodEscolhida][45];
      document.getElementById('gcB3').innerHTML=Goian_B[RodEscolhida][46];
      document.getElementById('sgB3').innerHTML=Goian_B[RodEscolhida][47];
      document.getElementById('apB3').innerHTML=Goian_B[RodEscolhida][48];
      document.getElementById('ultB3').innerHTML=Goian_B[RodEscolhida][49];
      document.getElementById('penB3').innerHTML=Goian_B[RodEscolhida][50];
      document.getElementById('antB3').innerHTML=Goian_B[RodEscolhida][51];
      document.getElementById('qaB3').innerHTML=Goian_B[RodEscolhida][52];
      document.getElementById('qiB3').innerHTML=Goian_B[RodEscolhida][53];
  
      document.getElementById('logB4').innerHTML=Goian_B[RodEscolhida][54];
      document.getElementById('tecB4').innerHTML=Goian_B[RodEscolhida][56].nome;
      document.getElementById('clubB4').innerHTML=Goian_B[RodEscolhida][55][0];
      document.getElementById('nlB4').innerHTML=Goian_B[RodEscolhida][55][2];
      document.getElementById('varB4').innerHTML=Goian_B[RodEscolhida][57];
      document.getElementById('objB4').innerHTML=Goian_B[RodEscolhida][58];
      document.getElementById('ptB4').innerHTML=Goian_B[RodEscolhida][59];
      document.getElementById('vitB4').innerHTML=Goian_B[RodEscolhida][60];
      document.getElementById('empB4').innerHTML=Goian_B[RodEscolhida][61];
      document.getElementById('derB4').innerHTML=Goian_B[RodEscolhida][62];
      document.getElementById('gpB4').innerHTML=Goian_B[RodEscolhida][63];
      document.getElementById('gcB4').innerHTML=Goian_B[RodEscolhida][64];
      document.getElementById('sgB4').innerHTML=Goian_B[RodEscolhida][65];
      document.getElementById('apB4').innerHTML=Goian_B[RodEscolhida][66];
      document.getElementById('ultB4').innerHTML=Goian_B[RodEscolhida][67];
      document.getElementById('penB4').innerHTML=Goian_B[RodEscolhida][68];
      document.getElementById('antB4').innerHTML=Goian_B[RodEscolhida][69];
      document.getElementById('qaB4').innerHTML=Goian_B[RodEscolhida][70];
      document.getElementById('qiB4').innerHTML=Goian_B[RodEscolhida][71];
  
      document.getElementById('logB5').innerHTML=Goian_B[RodEscolhida][72];
      document.getElementById('tecB5').innerHTML=Goian_B[RodEscolhida][74].nome;
      document.getElementById('clubB5').innerHTML=Goian_B[RodEscolhida][73][0];
      document.getElementById('nlB5').innerHTML=Goian_B[RodEscolhida][73][2];
      document.getElementById('varB5').innerHTML=Goian_B[RodEscolhida][75];
      document.getElementById('objB5').innerHTML=Goian_B[RodEscolhida][76];
      document.getElementById('ptB5').innerHTML=Goian_B[RodEscolhida][77];
      document.getElementById('vitB5').innerHTML=Goian_B[RodEscolhida][78];
      document.getElementById('empB5').innerHTML=Goian_B[RodEscolhida][79];
      document.getElementById('derB5').innerHTML=Goian_B[RodEscolhida][80];
      document.getElementById('gpB5').innerHTML=Goian_B[RodEscolhida][81];
      document.getElementById('gcB5').innerHTML=Goian_B[RodEscolhida][82];
      document.getElementById('sgB5').innerHTML=Goian_B[RodEscolhida][83];
      document.getElementById('apB5').innerHTML=Goian_B[RodEscolhida][84];
      document.getElementById('ultB5').innerHTML=Goian_B[RodEscolhida][85];
      document.getElementById('penB5').innerHTML=Goian_B[RodEscolhida][86];
      document.getElementById('antB5').innerHTML=Goian_B[RodEscolhida][87];
      document.getElementById('qaB5').innerHTML=Goian_B[RodEscolhida][88];
      document.getElementById('qiB5').innerHTML=Goian_B[RodEscolhida][89];
  
      document.getElementById('logB6').innerHTML=Goian_B[RodEscolhida][90];
      document.getElementById('tecB6').innerHTML=Goian_B[RodEscolhida][92].nome;
      document.getElementById('clubB6').innerHTML=Goian_B[RodEscolhida][91][0];
      document.getElementById('nlB6').innerHTML=Goian_B[RodEscolhida][91][2];
      document.getElementById('varB6').innerHTML=Goian_B[RodEscolhida][93];
      document.getElementById('objB6').innerHTML=Goian_B[RodEscolhida][94];
      document.getElementById('ptB6').innerHTML=Goian_B[RodEscolhida][95];
      document.getElementById('vitB6').innerHTML=Goian_B[RodEscolhida][96];
      document.getElementById('empB6').innerHTML=Goian_B[RodEscolhida][97];
      document.getElementById('derB6').innerHTML=Goian_B[RodEscolhida][98];
      document.getElementById('gpB6').innerHTML=Goian_B[RodEscolhida][99];
      document.getElementById('gcB6').innerHTML=Goian_B[RodEscolhida][100];
      document.getElementById('sgB6').innerHTML=Goian_B[RodEscolhida][101];
      document.getElementById('apB6').innerHTML=Goian_B[RodEscolhida][102];
      document.getElementById('ultB6').innerHTML=Goian_B[RodEscolhida][103];
      document.getElementById('penB6').innerHTML=Goian_B[RodEscolhida][104];
      document.getElementById('antB6').innerHTML=Goian_B[RodEscolhida][105];
      document.getElementById('qaB6').innerHTML=Goian_B[RodEscolhida][106];
      document.getElementById('qiB6').innerHTML=Goian_B[RodEscolhida][107];
  
      document.getElementById('logB7').innerHTML=Goian_B[RodEscolhida][108];
      document.getElementById('tecB7').innerHTML=Goian_B[RodEscolhida][110].nome;
      document.getElementById('clubB7').innerHTML=Goian_B[RodEscolhida][109][0];
      document.getElementById('nlB7').innerHTML=Goian_B[RodEscolhida][109][2];
      document.getElementById('varB7').innerHTML=Goian_B[RodEscolhida][111];
      document.getElementById('objB7').innerHTML=Goian_B[RodEscolhida][112];
      document.getElementById('ptB7').innerHTML=Goian_B[RodEscolhida][113];
      document.getElementById('vitB7').innerHTML=Goian_B[RodEscolhida][114];
      document.getElementById('empB7').innerHTML=Goian_B[RodEscolhida][115];
      document.getElementById('derB7').innerHTML=Goian_B[RodEscolhida][116];
      document.getElementById('gpB7').innerHTML=Goian_B[RodEscolhida][117];
      document.getElementById('gcB7').innerHTML=Goian_B[RodEscolhida][118];
      document.getElementById('sgB7').innerHTML=Goian_B[RodEscolhida][119];
      document.getElementById('apB7').innerHTML=Goian_B[RodEscolhida][120];
      document.getElementById('ultB7').innerHTML=Goian_B[RodEscolhida][121];
      document.getElementById('penB7').innerHTML=Goian_B[RodEscolhida][122];
      document.getElementById('antB7').innerHTML=Goian_B[RodEscolhida][123];
      document.getElementById('qaB7').innerHTML=Goian_B[RodEscolhida][124];
      document.getElementById('qiB7').innerHTML=Goian_B[RodEscolhida][125];
  
      document.getElementById('logB8').innerHTML=Goian_B[RodEscolhida][126];
      document.getElementById('tecB8').innerHTML=Goian_B[RodEscolhida][128].nome;
      document.getElementById('clubB8').innerHTML=Goian_B[RodEscolhida][127][0];
      document.getElementById('nlB8').innerHTML=Goian_B[RodEscolhida][127][2];
      document.getElementById('varB8').innerHTML=Goian_B[RodEscolhida][129];
      document.getElementById('objB8').innerHTML=Goian_B[RodEscolhida][130];
      document.getElementById('ptB8').innerHTML=Goian_B[RodEscolhida][131];
      document.getElementById('vitB8').innerHTML=Goian_B[RodEscolhida][132];
      document.getElementById('empB8').innerHTML=Goian_B[RodEscolhida][133];
      document.getElementById('derB8').innerHTML=Goian_B[RodEscolhida][134];
      document.getElementById('gpB8').innerHTML=Goian_B[RodEscolhida][135];
      document.getElementById('gcB8').innerHTML=Goian_B[RodEscolhida][136];
      document.getElementById('sgB8').innerHTML=Goian_B[RodEscolhida][137];
      document.getElementById('apB8').innerHTML=Goian_B[RodEscolhida][138];
      document.getElementById('ultB8').innerHTML=Goian_B[RodEscolhida][139];
      document.getElementById('penB8').innerHTML=Goian_B[RodEscolhida][140];
      document.getElementById('antB8').innerHTML=Goian_B[RodEscolhida][141];
      document.getElementById('qaB8').innerHTML=Goian_B[RodEscolhida][142];
      document.getElementById('qiB8').innerHTML=Goian_B[RodEscolhida][143];
  

      
    }

    else if(CampEscolhido==="Perna_A"){


      JogosDaRodada = Perna_Cal_A[RodEscolhida];
      

      document.getElementById('logB1').innerHTML=Perna_A[RodEscolhida][0];
      document.getElementById('tecB1').innerHTML=Perna_A[RodEscolhida][2].nome;
      document.getElementById('clubB1').innerHTML=Perna_A[RodEscolhida][1][0];
      document.getElementById('nlB1').innerHTML=Perna_A[RodEscolhida][1][2];
      document.getElementById('varB1').innerHTML=Perna_A[RodEscolhida][3];
      document.getElementById('objB1').innerHTML=Perna_A[RodEscolhida][4];
      document.getElementById('ptB1').innerHTML=Perna_A[RodEscolhida][5];
      document.getElementById('vitB1').innerHTML=Perna_A[RodEscolhida][6];
      document.getElementById('empB1').innerHTML=Perna_A[RodEscolhida][7];
      document.getElementById('derB1').innerHTML=Perna_A[RodEscolhida][8];
      document.getElementById('gpB1').innerHTML=Perna_A[RodEscolhida][9];
      document.getElementById('gcB1').innerHTML=Perna_A[RodEscolhida][10];
      document.getElementById('sgB1').innerHTML=Perna_A[RodEscolhida][11];
      document.getElementById('apB1').innerHTML=Perna_A[RodEscolhida][12];
      document.getElementById('ultB1').innerHTML=Perna_A[RodEscolhida][13];
      document.getElementById('penB1').innerHTML=Perna_A[RodEscolhida][14];
      document.getElementById('antB1').innerHTML=Perna_A[RodEscolhida][15];
      document.getElementById('qaB1').innerHTML=Perna_A[RodEscolhida][16];
      document.getElementById('qiB1').innerHTML=Perna_A[RodEscolhida][17];
  
      document.getElementById('logB2').innerHTML=Perna_A[RodEscolhida][18];
      document.getElementById('tecB2').innerHTML=Perna_A[RodEscolhida][20].nome;
      document.getElementById('clubB2').innerHTML=Perna_A[RodEscolhida][19][0];
      document.getElementById('nlB2').innerHTML=Perna_A[RodEscolhida][19][2];
      document.getElementById('varB2').innerHTML=Perna_A[RodEscolhida][21];
      document.getElementById('objB2').innerHTML=Perna_A[RodEscolhida][22];
      document.getElementById('ptB2').innerHTML=Perna_A[RodEscolhida][23];
      document.getElementById('vitB2').innerHTML=Perna_A[RodEscolhida][24];
      document.getElementById('empB2').innerHTML=Perna_A[RodEscolhida][25];
      document.getElementById('derB2').innerHTML=Perna_A[RodEscolhida][26];
      document.getElementById('gpB2').innerHTML=Perna_A[RodEscolhida][27];
      document.getElementById('gcB2').innerHTML=Perna_A[RodEscolhida][28];
      document.getElementById('sgB2').innerHTML=Perna_A[RodEscolhida][29];
      document.getElementById('apB2').innerHTML=Perna_A[RodEscolhida][30];
      document.getElementById('ultB2').innerHTML=Perna_A[RodEscolhida][31];
      document.getElementById('penB2').innerHTML=Perna_A[RodEscolhida][32];
      document.getElementById('antB2').innerHTML=Perna_A[RodEscolhida][33];
      document.getElementById('qaB2').innerHTML=Perna_A[RodEscolhida][34];
      document.getElementById('qiB2').innerHTML=Perna_A[RodEscolhida][35];
  
      document.getElementById('logB3').innerHTML=Perna_A[RodEscolhida][36];
      document.getElementById('tecB3').innerHTML=Perna_A[RodEscolhida][38].nome;
      document.getElementById('clubB3').innerHTML=Perna_A[RodEscolhida][37][0];
      document.getElementById('nlB3').innerHTML=Perna_A[RodEscolhida][37][2];
      document.getElementById('varB3').innerHTML=Perna_A[RodEscolhida][39];
      document.getElementById('objB3').innerHTML=Perna_A[RodEscolhida][40];
      document.getElementById('ptB3').innerHTML=Perna_A[RodEscolhida][41];
      document.getElementById('vitB3').innerHTML=Perna_A[RodEscolhida][42];
      document.getElementById('empB3').innerHTML=Perna_A[RodEscolhida][43];
      document.getElementById('derB3').innerHTML=Perna_A[RodEscolhida][44];
      document.getElementById('gpB3').innerHTML=Perna_A[RodEscolhida][45];
      document.getElementById('gcB3').innerHTML=Perna_A[RodEscolhida][46];
      document.getElementById('sgB3').innerHTML=Perna_A[RodEscolhida][47];
      document.getElementById('apB3').innerHTML=Perna_A[RodEscolhida][48];
      document.getElementById('ultB3').innerHTML=Perna_A[RodEscolhida][49];
      document.getElementById('penB3').innerHTML=Perna_A[RodEscolhida][50];
      document.getElementById('antB3').innerHTML=Perna_A[RodEscolhida][51];
      document.getElementById('qaB3').innerHTML=Perna_A[RodEscolhida][52];
      document.getElementById('qiB3').innerHTML=Perna_A[RodEscolhida][53];
  
      document.getElementById('logB4').innerHTML=Perna_A[RodEscolhida][54];
      document.getElementById('tecB4').innerHTML=Perna_A[RodEscolhida][56].nome;
      document.getElementById('clubB4').innerHTML=Perna_A[RodEscolhida][55][0];
      document.getElementById('nlB4').innerHTML=Perna_A[RodEscolhida][55][2];
      document.getElementById('varB4').innerHTML=Perna_A[RodEscolhida][57];
      document.getElementById('objB4').innerHTML=Perna_A[RodEscolhida][58];
      document.getElementById('ptB4').innerHTML=Perna_A[RodEscolhida][59];
      document.getElementById('vitB4').innerHTML=Perna_A[RodEscolhida][60];
      document.getElementById('empB4').innerHTML=Perna_A[RodEscolhida][61];
      document.getElementById('derB4').innerHTML=Perna_A[RodEscolhida][62];
      document.getElementById('gpB4').innerHTML=Perna_A[RodEscolhida][63];
      document.getElementById('gcB4').innerHTML=Perna_A[RodEscolhida][64];
      document.getElementById('sgB4').innerHTML=Perna_A[RodEscolhida][65];
      document.getElementById('apB4').innerHTML=Perna_A[RodEscolhida][66];
      document.getElementById('ultB4').innerHTML=Perna_A[RodEscolhida][67];
      document.getElementById('penB4').innerHTML=Perna_A[RodEscolhida][68];
      document.getElementById('antB4').innerHTML=Perna_A[RodEscolhida][69];
      document.getElementById('qaB4').innerHTML=Perna_A[RodEscolhida][70];
      document.getElementById('qiB4').innerHTML=Perna_A[RodEscolhida][71];
  
      document.getElementById('logB5').innerHTML=Perna_A[RodEscolhida][72];
      document.getElementById('tecB5').innerHTML=Perna_A[RodEscolhida][74].nome;
      document.getElementById('clubB5').innerHTML=Perna_A[RodEscolhida][73][0];
      document.getElementById('nlB5').innerHTML=Perna_A[RodEscolhida][73][2];
      document.getElementById('varB5').innerHTML=Perna_A[RodEscolhida][75];
      document.getElementById('objB5').innerHTML=Perna_A[RodEscolhida][76];
      document.getElementById('ptB5').innerHTML=Perna_A[RodEscolhida][77];
      document.getElementById('vitB5').innerHTML=Perna_A[RodEscolhida][78];
      document.getElementById('empB5').innerHTML=Perna_A[RodEscolhida][79];
      document.getElementById('derB5').innerHTML=Perna_A[RodEscolhida][80];
      document.getElementById('gpB5').innerHTML=Perna_A[RodEscolhida][81];
      document.getElementById('gcB5').innerHTML=Perna_A[RodEscolhida][82];
      document.getElementById('sgB5').innerHTML=Perna_A[RodEscolhida][83];
      document.getElementById('apB5').innerHTML=Perna_A[RodEscolhida][84];
      document.getElementById('ultB5').innerHTML=Perna_A[RodEscolhida][85];
      document.getElementById('penB5').innerHTML=Perna_A[RodEscolhida][86];
      document.getElementById('antB5').innerHTML=Perna_A[RodEscolhida][87];
      document.getElementById('qaB5').innerHTML=Perna_A[RodEscolhida][88];
      document.getElementById('qiB5').innerHTML=Perna_A[RodEscolhida][89];
  
      document.getElementById('logB6').innerHTML=Perna_A[RodEscolhida][90];
      document.getElementById('tecB6').innerHTML=Perna_A[RodEscolhida][92].nome;
      document.getElementById('clubB6').innerHTML=Perna_A[RodEscolhida][91][0];
      document.getElementById('nlB6').innerHTML=Perna_A[RodEscolhida][91][2];
      document.getElementById('varB6').innerHTML=Perna_A[RodEscolhida][93];
      document.getElementById('objB6').innerHTML=Perna_A[RodEscolhida][94];
      document.getElementById('ptB6').innerHTML=Perna_A[RodEscolhida][95];
      document.getElementById('vitB6').innerHTML=Perna_A[RodEscolhida][96];
      document.getElementById('empB6').innerHTML=Perna_A[RodEscolhida][97];
      document.getElementById('derB6').innerHTML=Perna_A[RodEscolhida][98];
      document.getElementById('gpB6').innerHTML=Perna_A[RodEscolhida][99];
      document.getElementById('gcB6').innerHTML=Perna_A[RodEscolhida][100];
      document.getElementById('sgB6').innerHTML=Perna_A[RodEscolhida][101];
      document.getElementById('apB6').innerHTML=Perna_A[RodEscolhida][102];
      document.getElementById('ultB6').innerHTML=Perna_A[RodEscolhida][103];
      document.getElementById('penB6').innerHTML=Perna_A[RodEscolhida][104];
      document.getElementById('antB6').innerHTML=Perna_A[RodEscolhida][105];
      document.getElementById('qaB6').innerHTML=Perna_A[RodEscolhida][106];
      document.getElementById('qiB6').innerHTML=Perna_A[RodEscolhida][107];
  
      document.getElementById('logB7').innerHTML=Perna_A[RodEscolhida][108];
      document.getElementById('tecB7').innerHTML=Perna_A[RodEscolhida][110].nome;
      document.getElementById('clubB7').innerHTML=Perna_A[RodEscolhida][109][0];
      document.getElementById('nlB7').innerHTML=Perna_A[RodEscolhida][109][2];
      document.getElementById('varB7').innerHTML=Perna_A[RodEscolhida][111];
      document.getElementById('objB7').innerHTML=Perna_A[RodEscolhida][112];
      document.getElementById('ptB7').innerHTML=Perna_A[RodEscolhida][113];
      document.getElementById('vitB7').innerHTML=Perna_A[RodEscolhida][114];
      document.getElementById('empB7').innerHTML=Perna_A[RodEscolhida][115];
      document.getElementById('derB7').innerHTML=Perna_A[RodEscolhida][116];
      document.getElementById('gpB7').innerHTML=Perna_A[RodEscolhida][117];
      document.getElementById('gcB7').innerHTML=Perna_A[RodEscolhida][118];
      document.getElementById('sgB7').innerHTML=Perna_A[RodEscolhida][119];
      document.getElementById('apB7').innerHTML=Perna_A[RodEscolhida][120];
      document.getElementById('ultB7').innerHTML=Perna_A[RodEscolhida][121];
      document.getElementById('penB7').innerHTML=Perna_A[RodEscolhida][122];
      document.getElementById('antB7').innerHTML=Perna_A[RodEscolhida][123];
      document.getElementById('qaB7').innerHTML=Perna_A[RodEscolhida][124];
      document.getElementById('qiB7').innerHTML=Perna_A[RodEscolhida][125];
  
      document.getElementById('logB8').innerHTML=Perna_A[RodEscolhida][126];
      document.getElementById('tecB8').innerHTML=Perna_A[RodEscolhida][128].nome;
      document.getElementById('clubB8').innerHTML=Perna_A[RodEscolhida][127][0];
      document.getElementById('nlB8').innerHTML=Perna_A[RodEscolhida][127][2];
      document.getElementById('varB8').innerHTML=Perna_A[RodEscolhida][129];
      document.getElementById('objB8').innerHTML=Perna_A[RodEscolhida][130];
      document.getElementById('ptB8').innerHTML=Perna_A[RodEscolhida][131];
      document.getElementById('vitB8').innerHTML=Perna_A[RodEscolhida][132];
      document.getElementById('empB8').innerHTML=Perna_A[RodEscolhida][133];
      document.getElementById('derB8').innerHTML=Perna_A[RodEscolhida][134];
      document.getElementById('gpB8').innerHTML=Perna_A[RodEscolhida][135];
      document.getElementById('gcB8').innerHTML=Perna_A[RodEscolhida][136];
      document.getElementById('sgB8').innerHTML=Perna_A[RodEscolhida][137];
      document.getElementById('apB8').innerHTML=Perna_A[RodEscolhida][138];
      document.getElementById('ultB8').innerHTML=Perna_A[RodEscolhida][139];
      document.getElementById('penB8').innerHTML=Perna_A[RodEscolhida][140];
      document.getElementById('antB8').innerHTML=Perna_A[RodEscolhida][141];
      document.getElementById('qaB8').innerHTML=Perna_A[RodEscolhida][142];
      document.getElementById('qiB8').innerHTML=Perna_A[RodEscolhida][143];
  

      
    }


    else if(CampEscolhido==="Perna_B"){



      JogosDaRodada = Perna_Cal_B[RodEscolhida];


      document.getElementById('logB1').innerHTML=Perna_B[RodEscolhida][0];
      document.getElementById('tecB1').innerHTML=Perna_B[RodEscolhida][2].nome;
      document.getElementById('clubB1').innerHTML=Perna_B[RodEscolhida][1][0];
      document.getElementById('nlB1').innerHTML=Perna_B[RodEscolhida][1][2];
      document.getElementById('varB1').innerHTML=Perna_B[RodEscolhida][3];
      document.getElementById('objB1').innerHTML=Perna_B[RodEscolhida][4];
      document.getElementById('ptB1').innerHTML=Perna_B[RodEscolhida][5];
      document.getElementById('vitB1').innerHTML=Perna_B[RodEscolhida][6];
      document.getElementById('empB1').innerHTML=Perna_B[RodEscolhida][7];
      document.getElementById('derB1').innerHTML=Perna_B[RodEscolhida][8];
      document.getElementById('gpB1').innerHTML=Perna_B[RodEscolhida][9];
      document.getElementById('gcB1').innerHTML=Perna_B[RodEscolhida][10];
      document.getElementById('sgB1').innerHTML=Perna_B[RodEscolhida][11];
      document.getElementById('apB1').innerHTML=Perna_B[RodEscolhida][12];
      document.getElementById('ultB1').innerHTML=Perna_B[RodEscolhida][13];
      document.getElementById('penB1').innerHTML=Perna_B[RodEscolhida][14];
      document.getElementById('antB1').innerHTML=Perna_B[RodEscolhida][15];
      document.getElementById('qaB1').innerHTML=Perna_B[RodEscolhida][16];
      document.getElementById('qiB1').innerHTML=Perna_B[RodEscolhida][17];
  
      document.getElementById('logB2').innerHTML=Perna_B[RodEscolhida][18];
      document.getElementById('tecB2').innerHTML=Perna_B[RodEscolhida][20].nome;
      document.getElementById('clubB2').innerHTML=Perna_B[RodEscolhida][19][0];
      document.getElementById('nlB2').innerHTML=Perna_B[RodEscolhida][19][2];
      document.getElementById('varB2').innerHTML=Perna_B[RodEscolhida][21];
      document.getElementById('objB2').innerHTML=Perna_B[RodEscolhida][22];
      document.getElementById('ptB2').innerHTML=Perna_B[RodEscolhida][23];
      document.getElementById('vitB2').innerHTML=Perna_B[RodEscolhida][24];
      document.getElementById('empB2').innerHTML=Perna_B[RodEscolhida][25];
      document.getElementById('derB2').innerHTML=Perna_B[RodEscolhida][26];
      document.getElementById('gpB2').innerHTML=Perna_B[RodEscolhida][27];
      document.getElementById('gcB2').innerHTML=Perna_B[RodEscolhida][28];
      document.getElementById('sgB2').innerHTML=Perna_B[RodEscolhida][29];
      document.getElementById('apB2').innerHTML=Perna_B[RodEscolhida][30];
      document.getElementById('ultB2').innerHTML=Perna_B[RodEscolhida][31];
      document.getElementById('penB2').innerHTML=Perna_B[RodEscolhida][32];
      document.getElementById('antB2').innerHTML=Perna_B[RodEscolhida][33];
      document.getElementById('qaB2').innerHTML=Perna_B[RodEscolhida][34];
      document.getElementById('qiB2').innerHTML=Perna_B[RodEscolhida][35];
  
      document.getElementById('logB3').innerHTML=Perna_B[RodEscolhida][36];
      document.getElementById('tecB3').innerHTML=Perna_B[RodEscolhida][38].nome;
      document.getElementById('clubB3').innerHTML=Perna_B[RodEscolhida][37][0];
      document.getElementById('nlB3').innerHTML=Perna_B[RodEscolhida][37][2];
      document.getElementById('varB3').innerHTML=Perna_B[RodEscolhida][39];
      document.getElementById('objB3').innerHTML=Perna_B[RodEscolhida][40];
      document.getElementById('ptB3').innerHTML=Perna_B[RodEscolhida][41];
      document.getElementById('vitB3').innerHTML=Perna_B[RodEscolhida][42];
      document.getElementById('empB3').innerHTML=Perna_B[RodEscolhida][43];
      document.getElementById('derB3').innerHTML=Perna_B[RodEscolhida][44];
      document.getElementById('gpB3').innerHTML=Perna_B[RodEscolhida][45];
      document.getElementById('gcB3').innerHTML=Perna_B[RodEscolhida][46];
      document.getElementById('sgB3').innerHTML=Perna_B[RodEscolhida][47];
      document.getElementById('apB3').innerHTML=Perna_B[RodEscolhida][48];
      document.getElementById('ultB3').innerHTML=Perna_B[RodEscolhida][49];
      document.getElementById('penB3').innerHTML=Perna_B[RodEscolhida][50];
      document.getElementById('antB3').innerHTML=Perna_B[RodEscolhida][51];
      document.getElementById('qaB3').innerHTML=Perna_B[RodEscolhida][52];
      document.getElementById('qiB3').innerHTML=Perna_B[RodEscolhida][53];
  
      document.getElementById('logB4').innerHTML=Perna_B[RodEscolhida][54];
      document.getElementById('tecB4').innerHTML=Perna_B[RodEscolhida][56].nome;
      document.getElementById('clubB4').innerHTML=Perna_B[RodEscolhida][55][0];
      document.getElementById('nlB4').innerHTML=Perna_B[RodEscolhida][55][2];
      document.getElementById('varB4').innerHTML=Perna_B[RodEscolhida][57];
      document.getElementById('objB4').innerHTML=Perna_B[RodEscolhida][58];
      document.getElementById('ptB4').innerHTML=Perna_B[RodEscolhida][59];
      document.getElementById('vitB4').innerHTML=Perna_B[RodEscolhida][60];
      document.getElementById('empB4').innerHTML=Perna_B[RodEscolhida][61];
      document.getElementById('derB4').innerHTML=Perna_B[RodEscolhida][62];
      document.getElementById('gpB4').innerHTML=Perna_B[RodEscolhida][63];
      document.getElementById('gcB4').innerHTML=Perna_B[RodEscolhida][64];
      document.getElementById('sgB4').innerHTML=Perna_B[RodEscolhida][65];
      document.getElementById('apB4').innerHTML=Perna_B[RodEscolhida][66];
      document.getElementById('ultB4').innerHTML=Perna_B[RodEscolhida][67];
      document.getElementById('penB4').innerHTML=Perna_B[RodEscolhida][68];
      document.getElementById('antB4').innerHTML=Perna_B[RodEscolhida][69];
      document.getElementById('qaB4').innerHTML=Perna_B[RodEscolhida][70];
      document.getElementById('qiB4').innerHTML=Perna_B[RodEscolhida][71];
  
      document.getElementById('logB5').innerHTML=Perna_B[RodEscolhida][72];
      document.getElementById('tecB5').innerHTML=Perna_B[RodEscolhida][74].nome;
      document.getElementById('clubB5').innerHTML=Perna_B[RodEscolhida][73][0];
      document.getElementById('nlB5').innerHTML=Perna_B[RodEscolhida][73][2];
      document.getElementById('varB5').innerHTML=Perna_B[RodEscolhida][75];
      document.getElementById('objB5').innerHTML=Perna_B[RodEscolhida][76];
      document.getElementById('ptB5').innerHTML=Perna_B[RodEscolhida][77];
      document.getElementById('vitB5').innerHTML=Perna_B[RodEscolhida][78];
      document.getElementById('empB5').innerHTML=Perna_B[RodEscolhida][79];
      document.getElementById('derB5').innerHTML=Perna_B[RodEscolhida][80];
      document.getElementById('gpB5').innerHTML=Perna_B[RodEscolhida][81];
      document.getElementById('gcB5').innerHTML=Perna_B[RodEscolhida][82];
      document.getElementById('sgB5').innerHTML=Perna_B[RodEscolhida][83];
      document.getElementById('apB5').innerHTML=Perna_B[RodEscolhida][84];
      document.getElementById('ultB5').innerHTML=Perna_B[RodEscolhida][85];
      document.getElementById('penB5').innerHTML=Perna_B[RodEscolhida][86];
      document.getElementById('antB5').innerHTML=Perna_B[RodEscolhida][87];
      document.getElementById('qaB5').innerHTML=Perna_B[RodEscolhida][88];
      document.getElementById('qiB5').innerHTML=Perna_B[RodEscolhida][89];
  
      document.getElementById('logB6').innerHTML=Perna_B[RodEscolhida][90];
      document.getElementById('tecB6').innerHTML=Perna_B[RodEscolhida][92].nome;
      document.getElementById('clubB6').innerHTML=Perna_B[RodEscolhida][91][0];
      document.getElementById('nlB6').innerHTML=Perna_B[RodEscolhida][91][2];
      document.getElementById('varB6').innerHTML=Perna_B[RodEscolhida][93];
      document.getElementById('objB6').innerHTML=Perna_B[RodEscolhida][94];
      document.getElementById('ptB6').innerHTML=Perna_B[RodEscolhida][95];
      document.getElementById('vitB6').innerHTML=Perna_B[RodEscolhida][96];
      document.getElementById('empB6').innerHTML=Perna_B[RodEscolhida][97];
      document.getElementById('derB6').innerHTML=Perna_B[RodEscolhida][98];
      document.getElementById('gpB6').innerHTML=Perna_B[RodEscolhida][99];
      document.getElementById('gcB6').innerHTML=Perna_B[RodEscolhida][100];
      document.getElementById('sgB6').innerHTML=Perna_B[RodEscolhida][101];
      document.getElementById('apB6').innerHTML=Perna_B[RodEscolhida][102];
      document.getElementById('ultB6').innerHTML=Perna_B[RodEscolhida][103];
      document.getElementById('penB6').innerHTML=Perna_B[RodEscolhida][104];
      document.getElementById('antB6').innerHTML=Perna_B[RodEscolhida][105];
      document.getElementById('qaB6').innerHTML=Perna_B[RodEscolhida][106];
      document.getElementById('qiB6').innerHTML=Perna_B[RodEscolhida][107];
  
      document.getElementById('logB7').innerHTML=Perna_B[RodEscolhida][108];
      document.getElementById('tecB7').innerHTML=Perna_B[RodEscolhida][110].nome;
      document.getElementById('clubB7').innerHTML=Perna_B[RodEscolhida][109][0];
      document.getElementById('nlB7').innerHTML=Perna_B[RodEscolhida][109][2];
      document.getElementById('varB7').innerHTML=Perna_B[RodEscolhida][111];
      document.getElementById('objB7').innerHTML=Perna_B[RodEscolhida][112];
      document.getElementById('ptB7').innerHTML=Perna_B[RodEscolhida][113];
      document.getElementById('vitB7').innerHTML=Perna_B[RodEscolhida][114];
      document.getElementById('empB7').innerHTML=Perna_B[RodEscolhida][115];
      document.getElementById('derB7').innerHTML=Perna_B[RodEscolhida][116];
      document.getElementById('gpB7').innerHTML=Perna_B[RodEscolhida][117];
      document.getElementById('gcB7').innerHTML=Perna_B[RodEscolhida][118];
      document.getElementById('sgB7').innerHTML=Perna_B[RodEscolhida][119];
      document.getElementById('apB7').innerHTML=Perna_B[RodEscolhida][120];
      document.getElementById('ultB7').innerHTML=Perna_B[RodEscolhida][121];
      document.getElementById('penB7').innerHTML=Perna_B[RodEscolhida][122];
      document.getElementById('antB7').innerHTML=Perna_B[RodEscolhida][123];
      document.getElementById('qaB7').innerHTML=Perna_B[RodEscolhida][124];
      document.getElementById('qiB7').innerHTML=Perna_B[RodEscolhida][125];
  
      document.getElementById('logB8').innerHTML=Perna_B[RodEscolhida][126];
      document.getElementById('tecB8').innerHTML=Perna_B[RodEscolhida][128].nome;
      document.getElementById('clubB8').innerHTML=Perna_B[RodEscolhida][127][0];
      document.getElementById('nlB8').innerHTML=Perna_B[RodEscolhida][127][2];
      document.getElementById('varB8').innerHTML=Perna_B[RodEscolhida][129];
      document.getElementById('objB8').innerHTML=Perna_B[RodEscolhida][130];
      document.getElementById('ptB8').innerHTML=Perna_B[RodEscolhida][131];
      document.getElementById('vitB8').innerHTML=Perna_B[RodEscolhida][132];
      document.getElementById('empB8').innerHTML=Perna_B[RodEscolhida][133];
      document.getElementById('derB8').innerHTML=Perna_B[RodEscolhida][134];
      document.getElementById('gpB8').innerHTML=Perna_B[RodEscolhida][135];
      document.getElementById('gcB8').innerHTML=Perna_B[RodEscolhida][136];
      document.getElementById('sgB8').innerHTML=Perna_B[RodEscolhida][137];
      document.getElementById('apB8').innerHTML=Perna_B[RodEscolhida][138];
      document.getElementById('ultB8').innerHTML=Perna_B[RodEscolhida][139];
      document.getElementById('penB8').innerHTML=Perna_B[RodEscolhida][140];
      document.getElementById('antB8').innerHTML=Perna_B[RodEscolhida][141];
      document.getElementById('qaB8').innerHTML=Perna_B[RodEscolhida][142];
      document.getElementById('qiB8').innerHTML=Perna_B[RodEscolhida][143];
  

      
    }


    else if(CampEscolhido==="Ceare_A"){

      JogosDaRodada = Ceare_Cal_A[RodEscolhida];


      document.getElementById('logB1').innerHTML=Ceare_A[RodEscolhida][0];
      document.getElementById('tecB1').innerHTML=Ceare_A[RodEscolhida][2].nome;
      document.getElementById('clubB1').innerHTML=Ceare_A[RodEscolhida][1][0];
      document.getElementById('nlB1').innerHTML=Ceare_A[RodEscolhida][1][2];
      document.getElementById('varB1').innerHTML=Ceare_A[RodEscolhida][3];
      document.getElementById('objB1').innerHTML=Ceare_A[RodEscolhida][4];
      document.getElementById('ptB1').innerHTML=Ceare_A[RodEscolhida][5];
      document.getElementById('vitB1').innerHTML=Ceare_A[RodEscolhida][6];
      document.getElementById('empB1').innerHTML=Ceare_A[RodEscolhida][7];
      document.getElementById('derB1').innerHTML=Ceare_A[RodEscolhida][8];
      document.getElementById('gpB1').innerHTML=Ceare_A[RodEscolhida][9];
      document.getElementById('gcB1').innerHTML=Ceare_A[RodEscolhida][10];
      document.getElementById('sgB1').innerHTML=Ceare_A[RodEscolhida][11];
      document.getElementById('apB1').innerHTML=Ceare_A[RodEscolhida][12];
      document.getElementById('ultB1').innerHTML=Ceare_A[RodEscolhida][13];
      document.getElementById('penB1').innerHTML=Ceare_A[RodEscolhida][14];
      document.getElementById('antB1').innerHTML=Ceare_A[RodEscolhida][15];
      document.getElementById('qaB1').innerHTML=Ceare_A[RodEscolhida][16];
      document.getElementById('qiB1').innerHTML=Ceare_A[RodEscolhida][17];
  
      document.getElementById('logB2').innerHTML=Ceare_A[RodEscolhida][18];
      document.getElementById('tecB2').innerHTML=Ceare_A[RodEscolhida][20].nome;
      document.getElementById('clubB2').innerHTML=Ceare_A[RodEscolhida][19][0];
      document.getElementById('nlB2').innerHTML=Ceare_A[RodEscolhida][19][2];
      document.getElementById('varB2').innerHTML=Ceare_A[RodEscolhida][21];
      document.getElementById('objB2').innerHTML=Ceare_A[RodEscolhida][22];
      document.getElementById('ptB2').innerHTML=Ceare_A[RodEscolhida][23];
      document.getElementById('vitB2').innerHTML=Ceare_A[RodEscolhida][24];
      document.getElementById('empB2').innerHTML=Ceare_A[RodEscolhida][25];
      document.getElementById('derB2').innerHTML=Ceare_A[RodEscolhida][26];
      document.getElementById('gpB2').innerHTML=Ceare_A[RodEscolhida][27];
      document.getElementById('gcB2').innerHTML=Ceare_A[RodEscolhida][28];
      document.getElementById('sgB2').innerHTML=Ceare_A[RodEscolhida][29];
      document.getElementById('apB2').innerHTML=Ceare_A[RodEscolhida][30];
      document.getElementById('ultB2').innerHTML=Ceare_A[RodEscolhida][31];
      document.getElementById('penB2').innerHTML=Ceare_A[RodEscolhida][32];
      document.getElementById('antB2').innerHTML=Ceare_A[RodEscolhida][33];
      document.getElementById('qaB2').innerHTML=Ceare_A[RodEscolhida][34];
      document.getElementById('qiB2').innerHTML=Ceare_A[RodEscolhida][35];
  
      document.getElementById('logB3').innerHTML=Ceare_A[RodEscolhida][36];
      document.getElementById('tecB3').innerHTML=Ceare_A[RodEscolhida][38].nome;
      document.getElementById('clubB3').innerHTML=Ceare_A[RodEscolhida][37][0];
      document.getElementById('nlB3').innerHTML=Ceare_A[RodEscolhida][37][2];
      document.getElementById('varB3').innerHTML=Ceare_A[RodEscolhida][39];
      document.getElementById('objB3').innerHTML=Ceare_A[RodEscolhida][40];
      document.getElementById('ptB3').innerHTML=Ceare_A[RodEscolhida][41];
      document.getElementById('vitB3').innerHTML=Ceare_A[RodEscolhida][42];
      document.getElementById('empB3').innerHTML=Ceare_A[RodEscolhida][43];
      document.getElementById('derB3').innerHTML=Ceare_A[RodEscolhida][44];
      document.getElementById('gpB3').innerHTML=Ceare_A[RodEscolhida][45];
      document.getElementById('gcB3').innerHTML=Ceare_A[RodEscolhida][46];
      document.getElementById('sgB3').innerHTML=Ceare_A[RodEscolhida][47];
      document.getElementById('apB3').innerHTML=Ceare_A[RodEscolhida][48];
      document.getElementById('ultB3').innerHTML=Ceare_A[RodEscolhida][49];
      document.getElementById('penB3').innerHTML=Ceare_A[RodEscolhida][50];
      document.getElementById('antB3').innerHTML=Ceare_A[RodEscolhida][51];
      document.getElementById('qaB3').innerHTML=Ceare_A[RodEscolhida][52];
      document.getElementById('qiB3').innerHTML=Ceare_A[RodEscolhida][53];
  
      document.getElementById('logB4').innerHTML=Ceare_A[RodEscolhida][54];
      document.getElementById('tecB4').innerHTML=Ceare_A[RodEscolhida][56].nome;
      document.getElementById('clubB4').innerHTML=Ceare_A[RodEscolhida][55][0];
      document.getElementById('nlB4').innerHTML=Ceare_A[RodEscolhida][55][2];
      document.getElementById('varB4').innerHTML=Ceare_A[RodEscolhida][57];
      document.getElementById('objB4').innerHTML=Ceare_A[RodEscolhida][58];
      document.getElementById('ptB4').innerHTML=Ceare_A[RodEscolhida][59];
      document.getElementById('vitB4').innerHTML=Ceare_A[RodEscolhida][60];
      document.getElementById('empB4').innerHTML=Ceare_A[RodEscolhida][61];
      document.getElementById('derB4').innerHTML=Ceare_A[RodEscolhida][62];
      document.getElementById('gpB4').innerHTML=Ceare_A[RodEscolhida][63];
      document.getElementById('gcB4').innerHTML=Ceare_A[RodEscolhida][64];
      document.getElementById('sgB4').innerHTML=Ceare_A[RodEscolhida][65];
      document.getElementById('apB4').innerHTML=Ceare_A[RodEscolhida][66];
      document.getElementById('ultB4').innerHTML=Ceare_A[RodEscolhida][67];
      document.getElementById('penB4').innerHTML=Ceare_A[RodEscolhida][68];
      document.getElementById('antB4').innerHTML=Ceare_A[RodEscolhida][69];
      document.getElementById('qaB4').innerHTML=Ceare_A[RodEscolhida][70];
      document.getElementById('qiB4').innerHTML=Ceare_A[RodEscolhida][71];
  
      document.getElementById('logB5').innerHTML=Ceare_A[RodEscolhida][72];
      document.getElementById('tecB5').innerHTML=Ceare_A[RodEscolhida][74].nome;
      document.getElementById('clubB5').innerHTML=Ceare_A[RodEscolhida][73][0];
      document.getElementById('nlB5').innerHTML=Ceare_A[RodEscolhida][73][2];
      document.getElementById('varB5').innerHTML=Ceare_A[RodEscolhida][75];
      document.getElementById('objB5').innerHTML=Ceare_A[RodEscolhida][76];
      document.getElementById('ptB5').innerHTML=Ceare_A[RodEscolhida][77];
      document.getElementById('vitB5').innerHTML=Ceare_A[RodEscolhida][78];
      document.getElementById('empB5').innerHTML=Ceare_A[RodEscolhida][79];
      document.getElementById('derB5').innerHTML=Ceare_A[RodEscolhida][80];
      document.getElementById('gpB5').innerHTML=Ceare_A[RodEscolhida][81];
      document.getElementById('gcB5').innerHTML=Ceare_A[RodEscolhida][82];
      document.getElementById('sgB5').innerHTML=Ceare_A[RodEscolhida][83];
      document.getElementById('apB5').innerHTML=Ceare_A[RodEscolhida][84];
      document.getElementById('ultB5').innerHTML=Ceare_A[RodEscolhida][85];
      document.getElementById('penB5').innerHTML=Ceare_A[RodEscolhida][86];
      document.getElementById('antB5').innerHTML=Ceare_A[RodEscolhida][87];
      document.getElementById('qaB5').innerHTML=Ceare_A[RodEscolhida][88];
      document.getElementById('qiB5').innerHTML=Ceare_A[RodEscolhida][89];
  
      document.getElementById('logB6').innerHTML=Ceare_A[RodEscolhida][90];
      document.getElementById('tecB6').innerHTML=Ceare_A[RodEscolhida][92].nome;
      document.getElementById('clubB6').innerHTML=Ceare_A[RodEscolhida][91][0];
      document.getElementById('nlB6').innerHTML=Ceare_A[RodEscolhida][91][2];
      document.getElementById('varB6').innerHTML=Ceare_A[RodEscolhida][93];
      document.getElementById('objB6').innerHTML=Ceare_A[RodEscolhida][94];
      document.getElementById('ptB6').innerHTML=Ceare_A[RodEscolhida][95];
      document.getElementById('vitB6').innerHTML=Ceare_A[RodEscolhida][96];
      document.getElementById('empB6').innerHTML=Ceare_A[RodEscolhida][97];
      document.getElementById('derB6').innerHTML=Ceare_A[RodEscolhida][98];
      document.getElementById('gpB6').innerHTML=Ceare_A[RodEscolhida][99];
      document.getElementById('gcB6').innerHTML=Ceare_A[RodEscolhida][100];
      document.getElementById('sgB6').innerHTML=Ceare_A[RodEscolhida][101];
      document.getElementById('apB6').innerHTML=Ceare_A[RodEscolhida][102];
      document.getElementById('ultB6').innerHTML=Ceare_A[RodEscolhida][103];
      document.getElementById('penB6').innerHTML=Ceare_A[RodEscolhida][104];
      document.getElementById('antB6').innerHTML=Ceare_A[RodEscolhida][105];
      document.getElementById('qaB6').innerHTML=Ceare_A[RodEscolhida][106];
      document.getElementById('qiB6').innerHTML=Ceare_A[RodEscolhida][107];
  
      document.getElementById('logB7').innerHTML=Ceare_A[RodEscolhida][108];
      document.getElementById('tecB7').innerHTML=Ceare_A[RodEscolhida][110].nome;
      document.getElementById('clubB7').innerHTML=Ceare_A[RodEscolhida][109][0];
      document.getElementById('nlB7').innerHTML=Ceare_A[RodEscolhida][109][2];
      document.getElementById('varB7').innerHTML=Ceare_A[RodEscolhida][111];
      document.getElementById('objB7').innerHTML=Ceare_A[RodEscolhida][112];
      document.getElementById('ptB7').innerHTML=Ceare_A[RodEscolhida][113];
      document.getElementById('vitB7').innerHTML=Ceare_A[RodEscolhida][114];
      document.getElementById('empB7').innerHTML=Ceare_A[RodEscolhida][115];
      document.getElementById('derB7').innerHTML=Ceare_A[RodEscolhida][116];
      document.getElementById('gpB7').innerHTML=Ceare_A[RodEscolhida][117];
      document.getElementById('gcB7').innerHTML=Ceare_A[RodEscolhida][118];
      document.getElementById('sgB7').innerHTML=Ceare_A[RodEscolhida][119];
      document.getElementById('apB7').innerHTML=Ceare_A[RodEscolhida][120];
      document.getElementById('ultB7').innerHTML=Ceare_A[RodEscolhida][121];
      document.getElementById('penB7').innerHTML=Ceare_A[RodEscolhida][122];
      document.getElementById('antB7').innerHTML=Ceare_A[RodEscolhida][123];
      document.getElementById('qaB7').innerHTML=Ceare_A[RodEscolhida][124];
      document.getElementById('qiB7').innerHTML=Ceare_A[RodEscolhida][125];
  
      document.getElementById('logB8').innerHTML=Ceare_A[RodEscolhida][126];
      document.getElementById('tecB8').innerHTML=Ceare_A[RodEscolhida][128].nome;
      document.getElementById('clubB8').innerHTML=Ceare_A[RodEscolhida][127][0];
      document.getElementById('nlB8').innerHTML=Ceare_A[RodEscolhida][127][2];
      document.getElementById('varB8').innerHTML=Ceare_A[RodEscolhida][129];
      document.getElementById('objB8').innerHTML=Ceare_A[RodEscolhida][130];
      document.getElementById('ptB8').innerHTML=Ceare_A[RodEscolhida][131];
      document.getElementById('vitB8').innerHTML=Ceare_A[RodEscolhida][132];
      document.getElementById('empB8').innerHTML=Ceare_A[RodEscolhida][133];
      document.getElementById('derB8').innerHTML=Ceare_A[RodEscolhida][134];
      document.getElementById('gpB8').innerHTML=Ceare_A[RodEscolhida][135];
      document.getElementById('gcB8').innerHTML=Ceare_A[RodEscolhida][136];
      document.getElementById('sgB8').innerHTML=Ceare_A[RodEscolhida][137];
      document.getElementById('apB8').innerHTML=Ceare_A[RodEscolhida][138];
      document.getElementById('ultB8').innerHTML=Ceare_A[RodEscolhida][139];
      document.getElementById('penB8').innerHTML=Ceare_A[RodEscolhida][140];
      document.getElementById('antB8').innerHTML=Ceare_A[RodEscolhida][141];
      document.getElementById('qaB8').innerHTML=Ceare_A[RodEscolhida][142];
      document.getElementById('qiB8').innerHTML=Ceare_A[RodEscolhida][143];
  

      
    }


    else if(CampEscolhido==="Ceare_B"){

      JogosDaRodada = Ceare_Cal_B[RodEscolhida];


      document.getElementById('logB1').innerHTML=Ceare_B[RodEscolhida][0];
      document.getElementById('tecB1').innerHTML=Ceare_B[RodEscolhida][2].nome;
      document.getElementById('clubB1').innerHTML=Ceare_B[RodEscolhida][1][0];
      document.getElementById('nlB1').innerHTML=Ceare_B[RodEscolhida][1][2];
      document.getElementById('varB1').innerHTML=Ceare_B[RodEscolhida][3];
      document.getElementById('objB1').innerHTML=Ceare_B[RodEscolhida][4];
      document.getElementById('ptB1').innerHTML=Ceare_B[RodEscolhida][5];
      document.getElementById('vitB1').innerHTML=Ceare_B[RodEscolhida][6];
      document.getElementById('empB1').innerHTML=Ceare_B[RodEscolhida][7];
      document.getElementById('derB1').innerHTML=Ceare_B[RodEscolhida][8];
      document.getElementById('gpB1').innerHTML=Ceare_B[RodEscolhida][9];
      document.getElementById('gcB1').innerHTML=Ceare_B[RodEscolhida][10];
      document.getElementById('sgB1').innerHTML=Ceare_B[RodEscolhida][11];
      document.getElementById('apB1').innerHTML=Ceare_B[RodEscolhida][12];
      document.getElementById('ultB1').innerHTML=Ceare_B[RodEscolhida][13];
      document.getElementById('penB1').innerHTML=Ceare_B[RodEscolhida][14];
      document.getElementById('antB1').innerHTML=Ceare_B[RodEscolhida][15];
      document.getElementById('qaB1').innerHTML=Ceare_B[RodEscolhida][16];
      document.getElementById('qiB1').innerHTML=Ceare_B[RodEscolhida][17];
  
      document.getElementById('logB2').innerHTML=Ceare_B[RodEscolhida][18];
      document.getElementById('tecB2').innerHTML=Ceare_B[RodEscolhida][20].nome;
      document.getElementById('clubB2').innerHTML=Ceare_B[RodEscolhida][19][0];
      document.getElementById('nlB2').innerHTML=Ceare_B[RodEscolhida][19][2];
      document.getElementById('varB2').innerHTML=Ceare_B[RodEscolhida][21];
      document.getElementById('objB2').innerHTML=Ceare_B[RodEscolhida][22];
      document.getElementById('ptB2').innerHTML=Ceare_B[RodEscolhida][23];
      document.getElementById('vitB2').innerHTML=Ceare_B[RodEscolhida][24];
      document.getElementById('empB2').innerHTML=Ceare_B[RodEscolhida][25];
      document.getElementById('derB2').innerHTML=Ceare_B[RodEscolhida][26];
      document.getElementById('gpB2').innerHTML=Ceare_B[RodEscolhida][27];
      document.getElementById('gcB2').innerHTML=Ceare_B[RodEscolhida][28];
      document.getElementById('sgB2').innerHTML=Ceare_B[RodEscolhida][29];
      document.getElementById('apB2').innerHTML=Ceare_B[RodEscolhida][30];
      document.getElementById('ultB2').innerHTML=Ceare_B[RodEscolhida][31];
      document.getElementById('penB2').innerHTML=Ceare_B[RodEscolhida][32];
      document.getElementById('antB2').innerHTML=Ceare_B[RodEscolhida][33];
      document.getElementById('qaB2').innerHTML=Ceare_B[RodEscolhida][34];
      document.getElementById('qiB2').innerHTML=Ceare_B[RodEscolhida][35];
  
      document.getElementById('logB3').innerHTML=Ceare_B[RodEscolhida][36];
      document.getElementById('tecB3').innerHTML=Ceare_B[RodEscolhida][38].nome;
      document.getElementById('clubB3').innerHTML=Ceare_B[RodEscolhida][37][0];
      document.getElementById('nlB3').innerHTML=Ceare_B[RodEscolhida][37][2];
      document.getElementById('varB3').innerHTML=Ceare_B[RodEscolhida][39];
      document.getElementById('objB3').innerHTML=Ceare_B[RodEscolhida][40];
      document.getElementById('ptB3').innerHTML=Ceare_B[RodEscolhida][41];
      document.getElementById('vitB3').innerHTML=Ceare_B[RodEscolhida][42];
      document.getElementById('empB3').innerHTML=Ceare_B[RodEscolhida][43];
      document.getElementById('derB3').innerHTML=Ceare_B[RodEscolhida][44];
      document.getElementById('gpB3').innerHTML=Ceare_B[RodEscolhida][45];
      document.getElementById('gcB3').innerHTML=Ceare_B[RodEscolhida][46];
      document.getElementById('sgB3').innerHTML=Ceare_B[RodEscolhida][47];
      document.getElementById('apB3').innerHTML=Ceare_B[RodEscolhida][48];
      document.getElementById('ultB3').innerHTML=Ceare_B[RodEscolhida][49];
      document.getElementById('penB3').innerHTML=Ceare_B[RodEscolhida][50];
      document.getElementById('antB3').innerHTML=Ceare_B[RodEscolhida][51];
      document.getElementById('qaB3').innerHTML=Ceare_B[RodEscolhida][52];
      document.getElementById('qiB3').innerHTML=Ceare_B[RodEscolhida][53];
  
      document.getElementById('logB4').innerHTML=Ceare_B[RodEscolhida][54];
      document.getElementById('tecB4').innerHTML=Ceare_B[RodEscolhida][56].nome;
      document.getElementById('clubB4').innerHTML=Ceare_B[RodEscolhida][55][0];
      document.getElementById('nlB4').innerHTML=Ceare_B[RodEscolhida][55][2];
      document.getElementById('varB4').innerHTML=Ceare_B[RodEscolhida][57];
      document.getElementById('objB4').innerHTML=Ceare_B[RodEscolhida][58];
      document.getElementById('ptB4').innerHTML=Ceare_B[RodEscolhida][59];
      document.getElementById('vitB4').innerHTML=Ceare_B[RodEscolhida][60];
      document.getElementById('empB4').innerHTML=Ceare_B[RodEscolhida][61];
      document.getElementById('derB4').innerHTML=Ceare_B[RodEscolhida][62];
      document.getElementById('gpB4').innerHTML=Ceare_B[RodEscolhida][63];
      document.getElementById('gcB4').innerHTML=Ceare_B[RodEscolhida][64];
      document.getElementById('sgB4').innerHTML=Ceare_B[RodEscolhida][65];
      document.getElementById('apB4').innerHTML=Ceare_B[RodEscolhida][66];
      document.getElementById('ultB4').innerHTML=Ceare_B[RodEscolhida][67];
      document.getElementById('penB4').innerHTML=Ceare_B[RodEscolhida][68];
      document.getElementById('antB4').innerHTML=Ceare_B[RodEscolhida][69];
      document.getElementById('qaB4').innerHTML=Ceare_B[RodEscolhida][70];
      document.getElementById('qiB4').innerHTML=Ceare_B[RodEscolhida][71];
  
      document.getElementById('logB5').innerHTML=Ceare_B[RodEscolhida][72];
      document.getElementById('tecB5').innerHTML=Ceare_B[RodEscolhida][74].nome;
      document.getElementById('clubB5').innerHTML=Ceare_B[RodEscolhida][73][0];
      document.getElementById('nlB5').innerHTML=Ceare_B[RodEscolhida][73][2];
      document.getElementById('varB5').innerHTML=Ceare_B[RodEscolhida][75];
      document.getElementById('objB5').innerHTML=Ceare_B[RodEscolhida][76];
      document.getElementById('ptB5').innerHTML=Ceare_B[RodEscolhida][77];
      document.getElementById('vitB5').innerHTML=Ceare_B[RodEscolhida][78];
      document.getElementById('empB5').innerHTML=Ceare_B[RodEscolhida][79];
      document.getElementById('derB5').innerHTML=Ceare_B[RodEscolhida][80];
      document.getElementById('gpB5').innerHTML=Ceare_B[RodEscolhida][81];
      document.getElementById('gcB5').innerHTML=Ceare_B[RodEscolhida][82];
      document.getElementById('sgB5').innerHTML=Ceare_B[RodEscolhida][83];
      document.getElementById('apB5').innerHTML=Ceare_B[RodEscolhida][84];
      document.getElementById('ultB5').innerHTML=Ceare_B[RodEscolhida][85];
      document.getElementById('penB5').innerHTML=Ceare_B[RodEscolhida][86];
      document.getElementById('antB5').innerHTML=Ceare_B[RodEscolhida][87];
      document.getElementById('qaB5').innerHTML=Ceare_B[RodEscolhida][88];
      document.getElementById('qiB5').innerHTML=Ceare_B[RodEscolhida][89];
  
      document.getElementById('logB6').innerHTML=Ceare_B[RodEscolhida][90];
      document.getElementById('tecB6').innerHTML=Ceare_B[RodEscolhida][92].nome;
      document.getElementById('clubB6').innerHTML=Ceare_B[RodEscolhida][91][0];
      document.getElementById('nlB6').innerHTML=Ceare_B[RodEscolhida][91][2];
      document.getElementById('varB6').innerHTML=Ceare_B[RodEscolhida][93];
      document.getElementById('objB6').innerHTML=Ceare_B[RodEscolhida][94];
      document.getElementById('ptB6').innerHTML=Ceare_B[RodEscolhida][95];
      document.getElementById('vitB6').innerHTML=Ceare_B[RodEscolhida][96];
      document.getElementById('empB6').innerHTML=Ceare_B[RodEscolhida][97];
      document.getElementById('derB6').innerHTML=Ceare_B[RodEscolhida][98];
      document.getElementById('gpB6').innerHTML=Ceare_B[RodEscolhida][99];
      document.getElementById('gcB6').innerHTML=Ceare_B[RodEscolhida][100];
      document.getElementById('sgB6').innerHTML=Ceare_B[RodEscolhida][101];
      document.getElementById('apB6').innerHTML=Ceare_B[RodEscolhida][102];
      document.getElementById('ultB6').innerHTML=Ceare_B[RodEscolhida][103];
      document.getElementById('penB6').innerHTML=Ceare_B[RodEscolhida][104];
      document.getElementById('antB6').innerHTML=Ceare_B[RodEscolhida][105];
      document.getElementById('qaB6').innerHTML=Ceare_B[RodEscolhida][106];
      document.getElementById('qiB6').innerHTML=Ceare_B[RodEscolhida][107];
  
      document.getElementById('logB7').innerHTML=Ceare_B[RodEscolhida][108];
      document.getElementById('tecB7').innerHTML=Ceare_B[RodEscolhida][110].nome;
      document.getElementById('clubB7').innerHTML=Ceare_B[RodEscolhida][109][0];
      document.getElementById('nlB7').innerHTML=Ceare_B[RodEscolhida][109][2];
      document.getElementById('varB7').innerHTML=Ceare_B[RodEscolhida][111];
      document.getElementById('objB7').innerHTML=Ceare_B[RodEscolhida][112];
      document.getElementById('ptB7').innerHTML=Ceare_B[RodEscolhida][113];
      document.getElementById('vitB7').innerHTML=Ceare_B[RodEscolhida][114];
      document.getElementById('empB7').innerHTML=Ceare_B[RodEscolhida][115];
      document.getElementById('derB7').innerHTML=Ceare_B[RodEscolhida][116];
      document.getElementById('gpB7').innerHTML=Ceare_B[RodEscolhida][117];
      document.getElementById('gcB7').innerHTML=Ceare_B[RodEscolhida][118];
      document.getElementById('sgB7').innerHTML=Ceare_B[RodEscolhida][119];
      document.getElementById('apB7').innerHTML=Ceare_B[RodEscolhida][120];
      document.getElementById('ultB7').innerHTML=Ceare_B[RodEscolhida][121];
      document.getElementById('penB7').innerHTML=Ceare_B[RodEscolhida][122];
      document.getElementById('antB7').innerHTML=Ceare_B[RodEscolhida][123];
      document.getElementById('qaB7').innerHTML=Ceare_B[RodEscolhida][124];
      document.getElementById('qiB7').innerHTML=Ceare_B[RodEscolhida][125];
  
      document.getElementById('logB8').innerHTML=Ceare_B[RodEscolhida][126];
      document.getElementById('tecB8').innerHTML=Ceare_B[RodEscolhida][128].nome;
      document.getElementById('clubB8').innerHTML=Ceare_B[RodEscolhida][127][0];
      document.getElementById('nlB8').innerHTML=Ceare_B[RodEscolhida][127][2];
      document.getElementById('varB8').innerHTML=Ceare_B[RodEscolhida][129];
      document.getElementById('objB8').innerHTML=Ceare_B[RodEscolhida][130];
      document.getElementById('ptB8').innerHTML=Ceare_B[RodEscolhida][131];
      document.getElementById('vitB8').innerHTML=Ceare_B[RodEscolhida][132];
      document.getElementById('empB8').innerHTML=Ceare_B[RodEscolhida][133];
      document.getElementById('derB8').innerHTML=Ceare_B[RodEscolhida][134];
      document.getElementById('gpB8').innerHTML=Ceare_B[RodEscolhida][135];
      document.getElementById('gcB8').innerHTML=Ceare_B[RodEscolhida][136];
      document.getElementById('sgB8').innerHTML=Ceare_B[RodEscolhida][137];
      document.getElementById('apB8').innerHTML=Ceare_B[RodEscolhida][138];
      document.getElementById('ultB8').innerHTML=Ceare_B[RodEscolhida][139];
      document.getElementById('penB8').innerHTML=Ceare_B[RodEscolhida][140];
      document.getElementById('antB8').innerHTML=Ceare_B[RodEscolhida][141];
      document.getElementById('qaB8').innerHTML=Ceare_B[RodEscolhida][142];
      document.getElementById('qiB8').innerHTML=Ceare_B[RodEscolhida][143];
  

      
    }






    else if(CampEscolhido==="Baian_A"){

      JogosDaRodada = Baian_Cal_A[RodEscolhida];


      document.getElementById('logB1').innerHTML=Baian_A[RodEscolhida][0];
      document.getElementById('tecB1').innerHTML=Baian_A[RodEscolhida][2].nome;
      document.getElementById('clubB1').innerHTML=Baian_A[RodEscolhida][1][0];
      document.getElementById('nlB1').innerHTML=Baian_A[RodEscolhida][1][2];
      document.getElementById('varB1').innerHTML=Baian_A[RodEscolhida][3];
      document.getElementById('objB1').innerHTML=Baian_A[RodEscolhida][4];
      document.getElementById('ptB1').innerHTML=Baian_A[RodEscolhida][5];
      document.getElementById('vitB1').innerHTML=Baian_A[RodEscolhida][6];
      document.getElementById('empB1').innerHTML=Baian_A[RodEscolhida][7];
      document.getElementById('derB1').innerHTML=Baian_A[RodEscolhida][8];
      document.getElementById('gpB1').innerHTML=Baian_A[RodEscolhida][9];
      document.getElementById('gcB1').innerHTML=Baian_A[RodEscolhida][10];
      document.getElementById('sgB1').innerHTML=Baian_A[RodEscolhida][11];
      document.getElementById('apB1').innerHTML=Baian_A[RodEscolhida][12];
      document.getElementById('ultB1').innerHTML=Baian_A[RodEscolhida][13];
      document.getElementById('penB1').innerHTML=Baian_A[RodEscolhida][14];
      document.getElementById('antB1').innerHTML=Baian_A[RodEscolhida][15];
      document.getElementById('qaB1').innerHTML=Baian_A[RodEscolhida][16];
      document.getElementById('qiB1').innerHTML=Baian_A[RodEscolhida][17];
  
      document.getElementById('logB2').innerHTML=Baian_A[RodEscolhida][18];
      document.getElementById('tecB2').innerHTML=Baian_A[RodEscolhida][20].nome;
      document.getElementById('clubB2').innerHTML=Baian_A[RodEscolhida][19][0];
      document.getElementById('nlB2').innerHTML=Baian_A[RodEscolhida][19][2];
      document.getElementById('varB2').innerHTML=Baian_A[RodEscolhida][21];
      document.getElementById('objB2').innerHTML=Baian_A[RodEscolhida][22];
      document.getElementById('ptB2').innerHTML=Baian_A[RodEscolhida][23];
      document.getElementById('vitB2').innerHTML=Baian_A[RodEscolhida][24];
      document.getElementById('empB2').innerHTML=Baian_A[RodEscolhida][25];
      document.getElementById('derB2').innerHTML=Baian_A[RodEscolhida][26];
      document.getElementById('gpB2').innerHTML=Baian_A[RodEscolhida][27];
      document.getElementById('gcB2').innerHTML=Baian_A[RodEscolhida][28];
      document.getElementById('sgB2').innerHTML=Baian_A[RodEscolhida][29];
      document.getElementById('apB2').innerHTML=Baian_A[RodEscolhida][30];
      document.getElementById('ultB2').innerHTML=Baian_A[RodEscolhida][31];
      document.getElementById('penB2').innerHTML=Baian_A[RodEscolhida][32];
      document.getElementById('antB2').innerHTML=Baian_A[RodEscolhida][33];
      document.getElementById('qaB2').innerHTML=Baian_A[RodEscolhida][34];
      document.getElementById('qiB2').innerHTML=Baian_A[RodEscolhida][35];
  
      document.getElementById('logB3').innerHTML=Baian_A[RodEscolhida][36];
      document.getElementById('tecB3').innerHTML=Baian_A[RodEscolhida][38].nome;
      document.getElementById('clubB3').innerHTML=Baian_A[RodEscolhida][37][0];
      document.getElementById('nlB3').innerHTML=Baian_A[RodEscolhida][37][2];
      document.getElementById('varB3').innerHTML=Baian_A[RodEscolhida][39];
      document.getElementById('objB3').innerHTML=Baian_A[RodEscolhida][40];
      document.getElementById('ptB3').innerHTML=Baian_A[RodEscolhida][41];
      document.getElementById('vitB3').innerHTML=Baian_A[RodEscolhida][42];
      document.getElementById('empB3').innerHTML=Baian_A[RodEscolhida][43];
      document.getElementById('derB3').innerHTML=Baian_A[RodEscolhida][44];
      document.getElementById('gpB3').innerHTML=Baian_A[RodEscolhida][45];
      document.getElementById('gcB3').innerHTML=Baian_A[RodEscolhida][46];
      document.getElementById('sgB3').innerHTML=Baian_A[RodEscolhida][47];
      document.getElementById('apB3').innerHTML=Baian_A[RodEscolhida][48];
      document.getElementById('ultB3').innerHTML=Baian_A[RodEscolhida][49];
      document.getElementById('penB3').innerHTML=Baian_A[RodEscolhida][50];
      document.getElementById('antB3').innerHTML=Baian_A[RodEscolhida][51];
      document.getElementById('qaB3').innerHTML=Baian_A[RodEscolhida][52];
      document.getElementById('qiB3').innerHTML=Baian_A[RodEscolhida][53];
  
      document.getElementById('logB4').innerHTML=Baian_A[RodEscolhida][54];
      document.getElementById('tecB4').innerHTML=Baian_A[RodEscolhida][56].nome;
      document.getElementById('clubB4').innerHTML=Baian_A[RodEscolhida][55][0];
      document.getElementById('nlB4').innerHTML=Baian_A[RodEscolhida][55][2];
      document.getElementById('varB4').innerHTML=Baian_A[RodEscolhida][57];
      document.getElementById('objB4').innerHTML=Baian_A[RodEscolhida][58];
      document.getElementById('ptB4').innerHTML=Baian_A[RodEscolhida][59];
      document.getElementById('vitB4').innerHTML=Baian_A[RodEscolhida][60];
      document.getElementById('empB4').innerHTML=Baian_A[RodEscolhida][61];
      document.getElementById('derB4').innerHTML=Baian_A[RodEscolhida][62];
      document.getElementById('gpB4').innerHTML=Baian_A[RodEscolhida][63];
      document.getElementById('gcB4').innerHTML=Baian_A[RodEscolhida][64];
      document.getElementById('sgB4').innerHTML=Baian_A[RodEscolhida][65];
      document.getElementById('apB4').innerHTML=Baian_A[RodEscolhida][66];
      document.getElementById('ultB4').innerHTML=Baian_A[RodEscolhida][67];
      document.getElementById('penB4').innerHTML=Baian_A[RodEscolhida][68];
      document.getElementById('antB4').innerHTML=Baian_A[RodEscolhida][69];
      document.getElementById('qaB4').innerHTML=Baian_A[RodEscolhida][70];
      document.getElementById('qiB4').innerHTML=Baian_A[RodEscolhida][71];
  
      document.getElementById('logB5').innerHTML=Baian_A[RodEscolhida][72];
      document.getElementById('tecB5').innerHTML=Baian_A[RodEscolhida][74].nome;
      document.getElementById('clubB5').innerHTML=Baian_A[RodEscolhida][73][0];
      document.getElementById('nlB5').innerHTML=Baian_A[RodEscolhida][73][2];
      document.getElementById('varB5').innerHTML=Baian_A[RodEscolhida][75];
      document.getElementById('objB5').innerHTML=Baian_A[RodEscolhida][76];
      document.getElementById('ptB5').innerHTML=Baian_A[RodEscolhida][77];
      document.getElementById('vitB5').innerHTML=Baian_A[RodEscolhida][78];
      document.getElementById('empB5').innerHTML=Baian_A[RodEscolhida][79];
      document.getElementById('derB5').innerHTML=Baian_A[RodEscolhida][80];
      document.getElementById('gpB5').innerHTML=Baian_A[RodEscolhida][81];
      document.getElementById('gcB5').innerHTML=Baian_A[RodEscolhida][82];
      document.getElementById('sgB5').innerHTML=Baian_A[RodEscolhida][83];
      document.getElementById('apB5').innerHTML=Baian_A[RodEscolhida][84];
      document.getElementById('ultB5').innerHTML=Baian_A[RodEscolhida][85];
      document.getElementById('penB5').innerHTML=Baian_A[RodEscolhida][86];
      document.getElementById('antB5').innerHTML=Baian_A[RodEscolhida][87];
      document.getElementById('qaB5').innerHTML=Baian_A[RodEscolhida][88];
      document.getElementById('qiB5').innerHTML=Baian_A[RodEscolhida][89];
  
      document.getElementById('logB6').innerHTML=Baian_A[RodEscolhida][90];
      document.getElementById('tecB6').innerHTML=Baian_A[RodEscolhida][92].nome;
      document.getElementById('clubB6').innerHTML=Baian_A[RodEscolhida][91][0];
      document.getElementById('nlB6').innerHTML=Baian_A[RodEscolhida][91][2];
      document.getElementById('varB6').innerHTML=Baian_A[RodEscolhida][93];
      document.getElementById('objB6').innerHTML=Baian_A[RodEscolhida][94];
      document.getElementById('ptB6').innerHTML=Baian_A[RodEscolhida][95];
      document.getElementById('vitB6').innerHTML=Baian_A[RodEscolhida][96];
      document.getElementById('empB6').innerHTML=Baian_A[RodEscolhida][97];
      document.getElementById('derB6').innerHTML=Baian_A[RodEscolhida][98];
      document.getElementById('gpB6').innerHTML=Baian_A[RodEscolhida][99];
      document.getElementById('gcB6').innerHTML=Baian_A[RodEscolhida][100];
      document.getElementById('sgB6').innerHTML=Baian_A[RodEscolhida][101];
      document.getElementById('apB6').innerHTML=Baian_A[RodEscolhida][102];
      document.getElementById('ultB6').innerHTML=Baian_A[RodEscolhida][103];
      document.getElementById('penB6').innerHTML=Baian_A[RodEscolhida][104];
      document.getElementById('antB6').innerHTML=Baian_A[RodEscolhida][105];
      document.getElementById('qaB6').innerHTML=Baian_A[RodEscolhida][106];
      document.getElementById('qiB6').innerHTML=Baian_A[RodEscolhida][107];
  
      document.getElementById('logB7').innerHTML=Baian_A[RodEscolhida][108];
      document.getElementById('tecB7').innerHTML=Baian_A[RodEscolhida][110].nome;
      document.getElementById('clubB7').innerHTML=Baian_A[RodEscolhida][109][0];
      document.getElementById('nlB7').innerHTML=Baian_A[RodEscolhida][109][2];
      document.getElementById('varB7').innerHTML=Baian_A[RodEscolhida][111];
      document.getElementById('objB7').innerHTML=Baian_A[RodEscolhida][112];
      document.getElementById('ptB7').innerHTML=Baian_A[RodEscolhida][113];
      document.getElementById('vitB7').innerHTML=Baian_A[RodEscolhida][114];
      document.getElementById('empB7').innerHTML=Baian_A[RodEscolhida][115];
      document.getElementById('derB7').innerHTML=Baian_A[RodEscolhida][116];
      document.getElementById('gpB7').innerHTML=Baian_A[RodEscolhida][117];
      document.getElementById('gcB7').innerHTML=Baian_A[RodEscolhida][118];
      document.getElementById('sgB7').innerHTML=Baian_A[RodEscolhida][119];
      document.getElementById('apB7').innerHTML=Baian_A[RodEscolhida][120];
      document.getElementById('ultB7').innerHTML=Baian_A[RodEscolhida][121];
      document.getElementById('penB7').innerHTML=Baian_A[RodEscolhida][122];
      document.getElementById('antB7').innerHTML=Baian_A[RodEscolhida][123];
      document.getElementById('qaB7').innerHTML=Baian_A[RodEscolhida][124];
      document.getElementById('qiB7').innerHTML=Baian_A[RodEscolhida][125];
  
      document.getElementById('logB8').innerHTML=Baian_A[RodEscolhida][126];
      document.getElementById('tecB8').innerHTML=Baian_A[RodEscolhida][128].nome;
      document.getElementById('clubB8').innerHTML=Baian_A[RodEscolhida][127][0];
      document.getElementById('nlB8').innerHTML=Baian_A[RodEscolhida][127][2];
      document.getElementById('varB8').innerHTML=Baian_A[RodEscolhida][129];
      document.getElementById('objB8').innerHTML=Baian_A[RodEscolhida][130];
      document.getElementById('ptB8').innerHTML=Baian_A[RodEscolhida][131];
      document.getElementById('vitB8').innerHTML=Baian_A[RodEscolhida][132];
      document.getElementById('empB8').innerHTML=Baian_A[RodEscolhida][133];
      document.getElementById('derB8').innerHTML=Baian_A[RodEscolhida][134];
      document.getElementById('gpB8').innerHTML=Baian_A[RodEscolhida][135];
      document.getElementById('gcB8').innerHTML=Baian_A[RodEscolhida][136];
      document.getElementById('sgB8').innerHTML=Baian_A[RodEscolhida][137];
      document.getElementById('apB8').innerHTML=Baian_A[RodEscolhida][138];
      document.getElementById('ultB8').innerHTML=Baian_A[RodEscolhida][139];
      document.getElementById('penB8').innerHTML=Baian_A[RodEscolhida][140];
      document.getElementById('antB8').innerHTML=Baian_A[RodEscolhida][141];
      document.getElementById('qaB8').innerHTML=Baian_A[RodEscolhida][142];
      document.getElementById('qiB8').innerHTML=Baian_A[RodEscolhida][143];
  

      
    }


    else if(CampEscolhido==="Baian_B"){

      JogosDaRodada = Baian_Cal_B[RodEscolhida];


      document.getElementById('logB1').innerHTML=Baian_B[RodEscolhida][0];
      document.getElementById('tecB1').innerHTML=Baian_B[RodEscolhida][2].nome;
      document.getElementById('clubB1').innerHTML=Baian_B[RodEscolhida][1][0];
      document.getElementById('nlB1').innerHTML=Baian_B[RodEscolhida][1][2];
      document.getElementById('varB1').innerHTML=Baian_B[RodEscolhida][3];
      document.getElementById('objB1').innerHTML=Baian_B[RodEscolhida][4];
      document.getElementById('ptB1').innerHTML=Baian_B[RodEscolhida][5];
      document.getElementById('vitB1').innerHTML=Baian_B[RodEscolhida][6];
      document.getElementById('empB1').innerHTML=Baian_B[RodEscolhida][7];
      document.getElementById('derB1').innerHTML=Baian_B[RodEscolhida][8];
      document.getElementById('gpB1').innerHTML=Baian_B[RodEscolhida][9];
      document.getElementById('gcB1').innerHTML=Baian_B[RodEscolhida][10];
      document.getElementById('sgB1').innerHTML=Baian_B[RodEscolhida][11];
      document.getElementById('apB1').innerHTML=Baian_B[RodEscolhida][12];
      document.getElementById('ultB1').innerHTML=Baian_B[RodEscolhida][13];
      document.getElementById('penB1').innerHTML=Baian_B[RodEscolhida][14];
      document.getElementById('antB1').innerHTML=Baian_B[RodEscolhida][15];
      document.getElementById('qaB1').innerHTML=Baian_B[RodEscolhida][16];
      document.getElementById('qiB1').innerHTML=Baian_B[RodEscolhida][17];
  
      document.getElementById('logB2').innerHTML=Baian_B[RodEscolhida][18];
      document.getElementById('tecB2').innerHTML=Baian_B[RodEscolhida][20].nome;
      document.getElementById('clubB2').innerHTML=Baian_B[RodEscolhida][19][0];
      document.getElementById('nlB2').innerHTML=Baian_B[RodEscolhida][19][2];
      document.getElementById('varB2').innerHTML=Baian_B[RodEscolhida][21];
      document.getElementById('objB2').innerHTML=Baian_B[RodEscolhida][22];
      document.getElementById('ptB2').innerHTML=Baian_B[RodEscolhida][23];
      document.getElementById('vitB2').innerHTML=Baian_B[RodEscolhida][24];
      document.getElementById('empB2').innerHTML=Baian_B[RodEscolhida][25];
      document.getElementById('derB2').innerHTML=Baian_B[RodEscolhida][26];
      document.getElementById('gpB2').innerHTML=Baian_B[RodEscolhida][27];
      document.getElementById('gcB2').innerHTML=Baian_B[RodEscolhida][28];
      document.getElementById('sgB2').innerHTML=Baian_B[RodEscolhida][29];
      document.getElementById('apB2').innerHTML=Baian_B[RodEscolhida][30];
      document.getElementById('ultB2').innerHTML=Baian_B[RodEscolhida][31];
      document.getElementById('penB2').innerHTML=Baian_B[RodEscolhida][32];
      document.getElementById('antB2').innerHTML=Baian_B[RodEscolhida][33];
      document.getElementById('qaB2').innerHTML=Baian_B[RodEscolhida][34];
      document.getElementById('qiB2').innerHTML=Baian_B[RodEscolhida][35];
  
      document.getElementById('logB3').innerHTML=Baian_B[RodEscolhida][36];
      document.getElementById('tecB3').innerHTML=Baian_B[RodEscolhida][38].nome;
      document.getElementById('clubB3').innerHTML=Baian_B[RodEscolhida][37][0];
      document.getElementById('nlB3').innerHTML=Baian_B[RodEscolhida][37][2];
      document.getElementById('varB3').innerHTML=Baian_B[RodEscolhida][39];
      document.getElementById('objB3').innerHTML=Baian_B[RodEscolhida][40];
      document.getElementById('ptB3').innerHTML=Baian_B[RodEscolhida][41];
      document.getElementById('vitB3').innerHTML=Baian_B[RodEscolhida][42];
      document.getElementById('empB3').innerHTML=Baian_B[RodEscolhida][43];
      document.getElementById('derB3').innerHTML=Baian_B[RodEscolhida][44];
      document.getElementById('gpB3').innerHTML=Baian_B[RodEscolhida][45];
      document.getElementById('gcB3').innerHTML=Baian_B[RodEscolhida][46];
      document.getElementById('sgB3').innerHTML=Baian_B[RodEscolhida][47];
      document.getElementById('apB3').innerHTML=Baian_B[RodEscolhida][48];
      document.getElementById('ultB3').innerHTML=Baian_B[RodEscolhida][49];
      document.getElementById('penB3').innerHTML=Baian_B[RodEscolhida][50];
      document.getElementById('antB3').innerHTML=Baian_B[RodEscolhida][51];
      document.getElementById('qaB3').innerHTML=Baian_B[RodEscolhida][52];
      document.getElementById('qiB3').innerHTML=Baian_B[RodEscolhida][53];
  
      document.getElementById('logB4').innerHTML=Baian_B[RodEscolhida][54];
      document.getElementById('tecB4').innerHTML=Baian_B[RodEscolhida][56].nome;
      document.getElementById('clubB4').innerHTML=Baian_B[RodEscolhida][55][0];
      document.getElementById('nlB4').innerHTML=Baian_B[RodEscolhida][55][2];
      document.getElementById('varB4').innerHTML=Baian_B[RodEscolhida][57];
      document.getElementById('objB4').innerHTML=Baian_B[RodEscolhida][58];
      document.getElementById('ptB4').innerHTML=Baian_B[RodEscolhida][59];
      document.getElementById('vitB4').innerHTML=Baian_B[RodEscolhida][60];
      document.getElementById('empB4').innerHTML=Baian_B[RodEscolhida][61];
      document.getElementById('derB4').innerHTML=Baian_B[RodEscolhida][62];
      document.getElementById('gpB4').innerHTML=Baian_B[RodEscolhida][63];
      document.getElementById('gcB4').innerHTML=Baian_B[RodEscolhida][64];
      document.getElementById('sgB4').innerHTML=Baian_B[RodEscolhida][65];
      document.getElementById('apB4').innerHTML=Baian_B[RodEscolhida][66];
      document.getElementById('ultB4').innerHTML=Baian_B[RodEscolhida][67];
      document.getElementById('penB4').innerHTML=Baian_B[RodEscolhida][68];
      document.getElementById('antB4').innerHTML=Baian_B[RodEscolhida][69];
      document.getElementById('qaB4').innerHTML=Baian_B[RodEscolhida][70];
      document.getElementById('qiB4').innerHTML=Baian_B[RodEscolhida][71];
  
      document.getElementById('logB5').innerHTML=Baian_B[RodEscolhida][72];
      document.getElementById('tecB5').innerHTML=Baian_B[RodEscolhida][74].nome;
      document.getElementById('clubB5').innerHTML=Baian_B[RodEscolhida][73][0];
      document.getElementById('nlB5').innerHTML=Baian_B[RodEscolhida][73][2];
      document.getElementById('varB5').innerHTML=Baian_B[RodEscolhida][75];
      document.getElementById('objB5').innerHTML=Baian_B[RodEscolhida][76];
      document.getElementById('ptB5').innerHTML=Baian_B[RodEscolhida][77];
      document.getElementById('vitB5').innerHTML=Baian_B[RodEscolhida][78];
      document.getElementById('empB5').innerHTML=Baian_B[RodEscolhida][79];
      document.getElementById('derB5').innerHTML=Baian_B[RodEscolhida][80];
      document.getElementById('gpB5').innerHTML=Baian_B[RodEscolhida][81];
      document.getElementById('gcB5').innerHTML=Baian_B[RodEscolhida][82];
      document.getElementById('sgB5').innerHTML=Baian_B[RodEscolhida][83];
      document.getElementById('apB5').innerHTML=Baian_B[RodEscolhida][84];
      document.getElementById('ultB5').innerHTML=Baian_B[RodEscolhida][85];
      document.getElementById('penB5').innerHTML=Baian_B[RodEscolhida][86];
      document.getElementById('antB5').innerHTML=Baian_B[RodEscolhida][87];
      document.getElementById('qaB5').innerHTML=Baian_B[RodEscolhida][88];
      document.getElementById('qiB5').innerHTML=Baian_B[RodEscolhida][89];
  
      document.getElementById('logB6').innerHTML=Baian_B[RodEscolhida][90];
      document.getElementById('tecB6').innerHTML=Baian_B[RodEscolhida][92].nome;
      document.getElementById('clubB6').innerHTML=Baian_B[RodEscolhida][91][0];
      document.getElementById('nlB6').innerHTML=Baian_B[RodEscolhida][91][2];
      document.getElementById('varB6').innerHTML=Baian_B[RodEscolhida][93];
      document.getElementById('objB6').innerHTML=Baian_B[RodEscolhida][94];
      document.getElementById('ptB6').innerHTML=Baian_B[RodEscolhida][95];
      document.getElementById('vitB6').innerHTML=Baian_B[RodEscolhida][96];
      document.getElementById('empB6').innerHTML=Baian_B[RodEscolhida][97];
      document.getElementById('derB6').innerHTML=Baian_B[RodEscolhida][98];
      document.getElementById('gpB6').innerHTML=Baian_B[RodEscolhida][99];
      document.getElementById('gcB6').innerHTML=Baian_B[RodEscolhida][100];
      document.getElementById('sgB6').innerHTML=Baian_B[RodEscolhida][101];
      document.getElementById('apB6').innerHTML=Baian_B[RodEscolhida][102];
      document.getElementById('ultB6').innerHTML=Baian_B[RodEscolhida][103];
      document.getElementById('penB6').innerHTML=Baian_B[RodEscolhida][104];
      document.getElementById('antB6').innerHTML=Baian_B[RodEscolhida][105];
      document.getElementById('qaB6').innerHTML=Baian_B[RodEscolhida][106];
      document.getElementById('qiB6').innerHTML=Baian_B[RodEscolhida][107];
  
      document.getElementById('logB7').innerHTML=Baian_B[RodEscolhida][108];
      document.getElementById('tecB7').innerHTML=Baian_B[RodEscolhida][110].nome;
      document.getElementById('clubB7').innerHTML=Baian_B[RodEscolhida][109][0];
      document.getElementById('nlB7').innerHTML=Baian_B[RodEscolhida][109][2];
      document.getElementById('varB7').innerHTML=Baian_B[RodEscolhida][111];
      document.getElementById('objB7').innerHTML=Baian_B[RodEscolhida][112];
      document.getElementById('ptB7').innerHTML=Baian_B[RodEscolhida][113];
      document.getElementById('vitB7').innerHTML=Baian_B[RodEscolhida][114];
      document.getElementById('empB7').innerHTML=Baian_B[RodEscolhida][115];
      document.getElementById('derB7').innerHTML=Baian_B[RodEscolhida][116];
      document.getElementById('gpB7').innerHTML=Baian_B[RodEscolhida][117];
      document.getElementById('gcB7').innerHTML=Baian_B[RodEscolhida][118];
      document.getElementById('sgB7').innerHTML=Baian_B[RodEscolhida][119];
      document.getElementById('apB7').innerHTML=Baian_B[RodEscolhida][120];
      document.getElementById('ultB7').innerHTML=Baian_B[RodEscolhida][121];
      document.getElementById('penB7').innerHTML=Baian_B[RodEscolhida][122];
      document.getElementById('antB7').innerHTML=Baian_B[RodEscolhida][123];
      document.getElementById('qaB7').innerHTML=Baian_B[RodEscolhida][124];
      document.getElementById('qiB7').innerHTML=Baian_B[RodEscolhida][125];
  
      document.getElementById('logB8').innerHTML=Baian_B[RodEscolhida][126];
      document.getElementById('tecB8').innerHTML=Baian_B[RodEscolhida][128].nome;
      document.getElementById('clubB8').innerHTML=Baian_B[RodEscolhida][127][0];
      document.getElementById('nlB8').innerHTML=Baian_B[RodEscolhida][127][2];
      document.getElementById('varB8').innerHTML=Baian_B[RodEscolhida][129];
      document.getElementById('objB8').innerHTML=Baian_B[RodEscolhida][130];
      document.getElementById('ptB8').innerHTML=Baian_B[RodEscolhida][131];
      document.getElementById('vitB8').innerHTML=Baian_B[RodEscolhida][132];
      document.getElementById('empB8').innerHTML=Baian_B[RodEscolhida][133];
      document.getElementById('derB8').innerHTML=Baian_B[RodEscolhida][134];
      document.getElementById('gpB8').innerHTML=Baian_B[RodEscolhida][135];
      document.getElementById('gcB8').innerHTML=Baian_B[RodEscolhida][136];
      document.getElementById('sgB8').innerHTML=Baian_B[RodEscolhida][137];
      document.getElementById('apB8').innerHTML=Baian_B[RodEscolhida][138];
      document.getElementById('ultB8').innerHTML=Baian_B[RodEscolhida][139];
      document.getElementById('penB8').innerHTML=Baian_B[RodEscolhida][140];
      document.getElementById('antB8').innerHTML=Baian_B[RodEscolhida][141];
      document.getElementById('qaB8').innerHTML=Baian_B[RodEscolhida][142];
      document.getElementById('qiB8').innerHTML=Baian_B[RodEscolhida][143];
  

      
    }
 

//CARTÕES DOS TÉCNICOS




document.getElementById("PlacLog1").innerHTML=JogosDaRodada[0];
document.getElementById("PlacGol1").innerHTML=JogosDaRodada[1];
document.getElementById("PlacTec1").innerHTML=JogosDaRodada[2].nome;
document.getElementById("PlacPt1").innerHTML=JogosDaRodada[3];
document.getElementById("PlacLog2").innerHTML=JogosDaRodada[4];
document.getElementById("PlacGol2").innerHTML=JogosDaRodada[5];
document.getElementById("PlacTec2").innerHTML=JogosDaRodada[6].nome;
document.getElementById("PlacPt2").innerHTML=JogosDaRodada[7];

document.getElementById("PlacLog3").innerHTML=JogosDaRodada[8];
document.getElementById("PlacGol3").innerHTML=JogosDaRodada[9];
document.getElementById("PlacTec3").innerHTML=JogosDaRodada[10].nome;
document.getElementById("PlacPt3").innerHTML=JogosDaRodada[11];
document.getElementById("PlacLog4").innerHTML=JogosDaRodada[12];
document.getElementById("PlacGol4").innerHTML=JogosDaRodada[13];
document.getElementById("PlacTec4").innerHTML=JogosDaRodada[14].nome;
document.getElementById("PlacPt4").innerHTML=JogosDaRodada[15];

document.getElementById("PlacLog5").innerHTML=JogosDaRodada[16];
document.getElementById("PlacGol5").innerHTML=JogosDaRodada[17];
document.getElementById("PlacTec5").innerHTML=JogosDaRodada[18].nome;
document.getElementById("PlacPt5").innerHTML=JogosDaRodada[19];
document.getElementById("PlacLog6").innerHTML=JogosDaRodada[20];
document.getElementById("PlacGol6").innerHTML=JogosDaRodada[21];
document.getElementById("PlacTec6").innerHTML=JogosDaRodada[22].nome;
document.getElementById("PlacPt6").innerHTML=JogosDaRodada[23];

document.getElementById("PlacLog7").innerHTML=JogosDaRodada[24];
document.getElementById("PlacGol7").innerHTML=JogosDaRodada[25];
document.getElementById("PlacTec7").innerHTML=JogosDaRodada[26].nome;
document.getElementById("PlacPt7").innerHTML=JogosDaRodada[27];
document.getElementById("PlacLog8").innerHTML=JogosDaRodada[28];
document.getElementById("PlacGol8").innerHTML=JogosDaRodada[29];
document.getElementById("PlacTec8").innerHTML=JogosDaRodada[30].nome;
document.getElementById("PlacPt8").innerHTML=JogosDaRodada[31];








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
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  