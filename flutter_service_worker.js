'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "c420e205d8eac4ccea99913b4a50bfa7",
"index.html": "4e7c3b6cea983870e6b9cf402a405c71",
"/": "4e7c3b6cea983870e6b9cf402a405c71",
"main.dart.js": "3a212493c1e5542e483d048664a48013",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "4d2a074e955647542596586cbde41715",
"assets/AssetManifest.json": "5eec765623fdf6e83d5f10da099b38a4",
"assets/NOTICES": "f1b00b36c7a8c5ef9b2f19f9044e76f2",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "137be052f8c38371a365485a151cecae",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "4ef9893efa01cfda3949bb8a030ea494",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9d4cfa1d1aa29faeb5a5c2455991911d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "036f457551645a676804c7d42d8cecfc",
"assets/packages/countries_flag/assets/flags/solomon_islands.svg": "43f4e6154b62f59ac9c71b9904c49ee6",
"assets/packages/countries_flag/assets/flags/melilla.svg": "eabe81e0744cb616d882df30bc40abdf",
"assets/packages/countries_flag/assets/flags/nigeria.svg": "91c0171f0820ac4a824bb6cd8823fc05",
"assets/packages/countries_flag/assets/flags/french_polynesia.svg": "0be0d1e6eb120b0f60df428d4ea0829c",
"assets/packages/countries_flag/assets/flags/vatican_city.svg": "cf0a575ebb9bf991bf7c3d738ea3b3da",
"assets/packages/countries_flag/assets/flags/switzerland.svg": "44bc60e868f0c3bcfd6bf94d50530373",
"assets/packages/countries_flag/assets/flags/panama.svg": "ecb0bba1157bf15f8e7495f462e098fc",
"assets/packages/countries_flag/assets/flags/corsica.svg": "e858459cf008d4e781159d7488ab42a1",
"assets/packages/countries_flag/assets/flags/british_indian_ocean_territory.svg": "69644f1420fa9945abd59874c01cffea",
"assets/packages/countries_flag/assets/flags/turks_and_caicos.svg": "0cbab0f3ead7a8318fde86e3124c2e50",
"assets/packages/countries_flag/assets/flags/oman.svg": "00398ce6e62e5bb6374687b9ca534267",
"assets/packages/countries_flag/assets/flags/senegal.svg": "fdf95578b2f29ce6642e1aa7a1dd7f96",
"assets/packages/countries_flag/assets/flags/comoros.svg": "6ca7903e4cd2a0b47ad0e7d46c9b2467",
"assets/packages/countries_flag/assets/flags/malaysia.svg": "e7cf3159bc35d013938e1c1a3c80c411",
"assets/packages/countries_flag/assets/flags/equatorial_guinea.svg": "6a846c7a020498882799cf0722913c37",
"assets/packages/countries_flag/assets/flags/montenegro.svg": "cc87bc6a880cfa1366e7bf4d37a80ff5",
"assets/packages/countries_flag/assets/flags/madagascar.svg": "c7023479295cb78dbaaa687c90de5dee",
"assets/packages/countries_flag/assets/flags/grenada.svg": "c48f473b5ceffd412ebd83e4cd40cc35",
"assets/packages/countries_flag/assets/flags/otan.svg": "dd77530412fb51f813bc47a304d2bd33",
"assets/packages/countries_flag/assets/flags/bermuda.svg": "2ab62030c91e694e4f284da401688f6c",
"assets/packages/countries_flag/assets/flags/azores_islands.svg": "d52aa259667a6edc683ed77a65a44fa5",
"assets/packages/countries_flag/assets/flags/montserrat.svg": "1454af32e0eeea9f20fd3f9319c11293",
"assets/packages/countries_flag/assets/flags/tonga.svg": "cbadf16e9f98e542b7ff7a777e7b0155",
"assets/packages/countries_flag/assets/flags/libya.svg": "e5eba56f4a35a4828c2dbe0599b91130",
"assets/packages/countries_flag/assets/flags/christmas_island.svg": "565eddc9c9d1170c71f0b3b423137c69",
"assets/packages/countries_flag/assets/flags/sierra_leone.svg": "1cbff6989dbf1a5fd0b0d2c75a14c552",
"assets/packages/countries_flag/assets/flags/sicily.svg": "707fc76f61c850562e61caa9fa23c1ba",
"assets/packages/countries_flag/assets/flags/syria.svg": "25f3f61d809d067292119a947b9a3556",
"assets/packages/countries_flag/assets/flags/cayman_islands.svg": "6088272d3e564fc1a19ed43f10b09760",
"assets/packages/countries_flag/assets/flags/ecuador.svg": "89cba8a0cb8ddd5571752b71bfa9c3de",
"assets/packages/countries_flag/assets/flags/united_kingdom.svg": "a1e1c5bb69a7224fba2851064a3aa65c",
"assets/packages/countries_flag/assets/flags/east_timor.svg": "41fb0ab81d7867176d5a17bb43ed5acf",
"assets/packages/countries_flag/assets/flags/gabon.svg": "21875c505e0d17a755708f375d925be6",
"assets/packages/countries_flag/assets/flags/cyprus.svg": "e601f3ec9e91615b1fb62652786f4990",
"assets/packages/countries_flag/assets/flags/marshall_island.svg": "b15dc581601d421bb09b6f40bb8cd1a6",
"assets/packages/countries_flag/assets/flags/andorra.svg": "1ba3228d4e7bb65b6dd6396eaf331304",
"assets/packages/countries_flag/assets/flags/greece.svg": "59b682f6aa16f3f1e42f677bca8b0161",
"assets/packages/countries_flag/assets/flags/basque_country.svg": "f2e31a13eec058c85555b5ac154c6202",
"assets/packages/countries_flag/assets/flags/benin.svg": "45c7eac14b90c3dfa21fdba1d4e0e888",
"assets/packages/countries_flag/assets/flags/brazil.svg": "6433184cff457c3510e91c3e51fc6bc3",
"assets/packages/countries_flag/assets/flags/mozambique.svg": "977ff458a06f148f933079d3c9ad14eb",
"assets/packages/countries_flag/assets/flags/belgium.svg": "4cb4a9f7ac0b5b8b70a6ee2e91881deb",
"assets/packages/countries_flag/assets/flags/north_korea.svg": "88ba03ae68b5b11a3892a93a36c0b203",
"assets/packages/countries_flag/assets/flags/sint_eustatius.svg": "35c678dff1249117c710a2ebb4653363",
"assets/packages/countries_flag/assets/flags/moldova.svg": "c0b9315dd54490d6ae1045b2328337cd",
"assets/packages/countries_flag/assets/flags/seychelles.svg": "90b47ef400a714b99d8f12a799d5264b",
"assets/packages/countries_flag/assets/flags/burundi.svg": "4930bef1df3b2195a30cde487305b4df",
"assets/packages/countries_flag/assets/flags/sweden.svg": "c404a0e227267fdaefa6ace08710ef2d",
"assets/packages/countries_flag/assets/flags/gibraltar.svg": "cee58fc176fe8e5c7b84d4bc0d249ddc",
"assets/packages/countries_flag/assets/flags/orkney_islands.svg": "3387513731686f58eab8ddd4b6984225",
"assets/packages/countries_flag/assets/flags/england.svg": "5823d32b47251ceac6859dc62de864c0",
"assets/packages/countries_flag/assets/flags/nepal.svg": "ff48a6345c42a3d9f695c9fb126d9a6d",
"assets/packages/countries_flag/assets/flags/galapagos_islands.svg": "0d3c4d13164d1573fa9fa9b1ddf2c54c",
"assets/packages/countries_flag/assets/flags/monaco.svg": "575ab3593c1b8b7d77c54861ad22931b",
"assets/packages/countries_flag/assets/flags/rapa-nui.svg": "24355ed61bb721b32eaa1b4d6bca264a",
"assets/packages/countries_flag/assets/flags/turkey.svg": "b79d62b6c653d2cc50a788c3772d9c14",
"assets/packages/countries_flag/assets/flags/cameroon.svg": "c26ae16ee00d1e4b7eecc40276c88541",
"assets/packages/countries_flag/assets/flags/australia.svg": "20e1a9dde284bef4197a37695c4a0e02",
"assets/packages/countries_flag/assets/flags/guam.svg": "1e2988b6d4dcfe53ee019474e1662c24",
"assets/packages/countries_flag/assets/flags/niue.svg": "1e7662ba0a966887f686cbb537018528",
"assets/packages/countries_flag/assets/flags/armenia.svg": "edb51ad9e65c9749d56a24aac374b485",
"assets/packages/countries_flag/assets/flags/honduras.svg": "e337a5c278f8a85e27e2ba16100ddabf",
"assets/packages/countries_flag/assets/flags/taiwan.svg": "ddbdd2a8db625f2816fcc8728af1f90b",
"assets/packages/countries_flag/assets/flags/isle_of_man.svg": "6f379583e431b75cbc724c71ebeb53eb",
"assets/packages/countries_flag/assets/flags/somaliland.svg": "14e9596d043b677de45459ecfae01cb0",
"assets/packages/countries_flag/assets/flags/el_salvador.svg": "374fb0c641642b2ecc9f2c03287d81d9",
"assets/packages/countries_flag/assets/flags/rwanda.svg": "8ac60deb1a0cc18de300d9d44ec71700",
"assets/packages/countries_flag/assets/flags/cocos_island.svg": "b4515f6638be34cf0700a64c54e5521c",
"assets/packages/countries_flag/assets/flags/algeria.svg": "84769831a4fc6d3da00eee9df4a11ffa",
"assets/packages/countries_flag/assets/flags/curacao.svg": "10d33761f7f363e842c7ebf350db9d10",
"assets/packages/countries_flag/assets/flags/aruba.svg": "c4750484d20efa83ce38dbc4ead70269",
"assets/packages/countries_flag/assets/flags/kosovo.svg": "a5264094fe248aef89cac0fdc38136e2",
"assets/packages/countries_flag/assets/flags/sao_tome_and_principe.svg": "b303f7951bc268e5399f848d784b0a48",
"assets/packages/countries_flag/assets/flags/greenland.svg": "0ccf0916610a65e6ca563776552c618c",
"assets/packages/countries_flag/assets/flags/falkland_islands.svg": "56af14b664ffef8dcbbc1f847b804c0e",
"assets/packages/countries_flag/assets/flags/new_zealand.svg": "64c3bf6ca9d1ab85cbcb4a16b2890bcb",
"assets/packages/countries_flag/assets/flags/cuba.svg": "7f75f1a7088eaaf884ed2271076698e7",
"assets/packages/countries_flag/assets/flags/tajikistan.svg": "e940081e1624b75cdc2bb6e5a9951bac",
"assets/packages/countries_flag/assets/flags/kyrgyzstan.svg": "eaa5873c1c109cbbee9fc3effad7e107",
"assets/packages/countries_flag/assets/flags/laos.svg": "39f967f323cbcd0a2037fc09ac366cb6",
"assets/packages/countries_flag/assets/flags/south_sudan.svg": "8e886d0b11c7a12e08029c9b54d791af",
"assets/packages/countries_flag/assets/flags/estonia.svg": "88dee8a2f1ed299b83a26713e5b347e4",
"assets/packages/countries_flag/assets/flags/cape_verde.svg": "af95ee1c857cedcb143fa612dd0167a5",
"assets/packages/countries_flag/assets/flags/guinea.svg": "2d2d1d7ef305b876508416ed8d1e8c15",
"assets/packages/countries_flag/assets/flags/tunisia.svg": "fd20ddac85c78e43f241ba21b9c7ff15",
"assets/packages/countries_flag/assets/flags/ukraine.svg": "3a10f71cb0c189e589175ef2ff4c7397",
"assets/packages/countries_flag/assets/flags/angola.svg": "98a7264ee753c1798d7b52038ff5e95a",
"assets/packages/countries_flag/assets/flags/djibouti.svg": "437957c059fc4e0d78d79caac03e27a7",
"assets/packages/countries_flag/assets/flags/tibet.svg": "f86d7dddf140e385594dd588f2567521",
"assets/packages/countries_flag/assets/flags/cambodia.svg": "6ebda2a6f7c9e0959cb9224facf24bdd",
"assets/packages/countries_flag/assets/flags/scotland.svg": "2447acbf8119f08a78d2bcf3c421e2d0",
"assets/packages/countries_flag/assets/flags/south_korea.svg": "d825908233beb348aeda9c96e168d77e",
"assets/packages/countries_flag/assets/flags/lesotho.svg": "761e93e70550a0675da0b7350cabbb22",
"assets/packages/countries_flag/assets/flags/republic_of_the_congo.svg": "69b486ab68813e9f7c2eacc5bbe59c84",
"assets/packages/countries_flag/assets/flags/zambia.svg": "e145333f47bd0da870debbaa0c42b78d",
"assets/packages/countries_flag/assets/flags/jamaica.svg": "33ceeec1dc1045a51a3c40f82d0a4222",
"assets/packages/countries_flag/assets/flags/central_african_republic.svg": "cc9580e325be1347c429e354364bc2be",
"assets/packages/countries_flag/assets/flags/tanzania.svg": "0df87c2ace9f88a2d3c56c37105f6d2d",
"assets/packages/countries_flag/assets/flags/saudi_arabia.svg": "3f855b7a698dc807113d4a35b104dae8",
"assets/packages/countries_flag/assets/flags/iran.svg": "2f2eec98247207214c6f6526ced6a5cc",
"assets/packages/countries_flag/assets/flags/namibia.svg": "c5e6506280deab2cd7fab27ee1205fe4",
"assets/packages/countries_flag/assets/flags/venezuela.svg": "da2354c1966dda71f78c93b728c44be7",
"assets/packages/countries_flag/assets/flags/guernsey.svg": "2af02a67d71690fbbb14b4dbe5fc08cb",
"assets/packages/countries_flag/assets/flags/colombia.svg": "cda3f8a0f85877952bf8904e32bd40e1",
"assets/packages/countries_flag/assets/flags/liberia.svg": "106be622851f2512fe61e56d369d9074",
"assets/packages/countries_flag/assets/flags/iceland.svg": "3964b80338a58ba239575169e950f7a4",
"assets/packages/countries_flag/assets/flags/ceuta.svg": "2cef4f9811a03f05cd051c6a49e10309",
"assets/packages/countries_flag/assets/flags/hungary.svg": "56d8fa5d2ef2f36b7956f9bc367adc9a",
"assets/packages/countries_flag/assets/flags/kazakhstan.svg": "978d5804055282848e062d0522f9d7c5",
"assets/packages/countries_flag/assets/flags/argentina.svg": "e5f325f17edd02e84f0c99812deb4424",
"assets/packages/countries_flag/assets/flags/china.svg": "881e644277e9420ac99138cb8d25c601",
"assets/packages/countries_flag/assets/flags/poland.svg": "013b173c83c84150a4a4f621d1792e63",
"assets/packages/countries_flag/assets/flags/bolivia.svg": "5c983435408d16bd974bd638e33a7e21",
"assets/packages/countries_flag/assets/flags/russia.svg": "6daead9269a775323da41a5d70bca4ea",
"assets/packages/countries_flag/assets/flags/guatemala.svg": "765f0b1027cf7e220e41c372c0674445",
"assets/packages/countries_flag/assets/flags/ghana.svg": "b6d74767d9504ed9093ca70b0e42420a",
"assets/packages/countries_flag/assets/flags/hong_kong.svg": "c38b1b44da1e99cb35277e869b76acb4",
"assets/packages/countries_flag/assets/flags/kenya.svg": "9d70ef8f9c76d4bbe1b1b3f5bc28a39b",
"assets/packages/countries_flag/assets/flags/afghanistan.svg": "b85a312c1521071f8d2c175d45833ff4",
"assets/packages/countries_flag/assets/flags/samoa.svg": "d8c1ee6af3eb95818ff83ab638f34789",
"assets/packages/countries_flag/assets/flags/norway.svg": "c3c67744db7aa1367960051c819fb6b7",
"assets/packages/countries_flag/assets/flags/sardinia.svg": "e495669355d22804115d4c2090425dc8",
"assets/packages/countries_flag/assets/flags/mexico.svg": "0923682dd7ae33e9ac03afac5d594d61",
"assets/packages/countries_flag/assets/flags/belize.svg": "ac459ded25c2637d01080974ee381704",
"assets/packages/countries_flag/assets/flags/botswana.svg": "dfc9819353594717b6911b56196d964a",
"assets/packages/countries_flag/assets/flags/morocco.svg": "d8b2566ca212b616a2667fcf8f42875e",
"assets/packages/countries_flag/assets/flags/romania.svg": "bcb5854af92fa8a1fdc106a4819fc85c",
"assets/packages/countries_flag/assets/flags/chile.svg": "0e51ddff9d80157abc89d65f34c97bae",
"assets/packages/countries_flag/assets/flags/indonesia.svg": "c4ed2ea3039b1642ac6af3393c3ad75c",
"assets/packages/countries_flag/assets/flags/slovenia.svg": "59b84b066cccf77017fb8e770476890c",
"assets/packages/countries_flag/assets/flags/slovakia.svg": "601ea0d83d5a8cac4b3fbf13a87b22f1",
"assets/packages/countries_flag/assets/flags/nauru.svg": "8a15cde7a137dc436f5131695f95515c",
"assets/packages/countries_flag/assets/flags/lithuania.svg": "275e1ca04c92cc705411786cac275780",
"assets/packages/countries_flag/assets/flags/republic_of_macedonia.svg": "55d5d50a9d9ac393334099d5e052925d",
"assets/packages/countries_flag/assets/flags/ireland.svg": "2fbdbca705a62cc7495f7b85ea0caf09",
"assets/packages/countries_flag/assets/flags/burkina_faso.svg": "ce5e291549c0926dcb67400b986b992e",
"assets/packages/countries_flag/assets/flags/finland.svg": "73333e8dc124255d4cae135677e0578a",
"assets/packages/countries_flag/assets/flags/uzbekistan.svg": "22abe5149ad309485368bf5525c80401",
"assets/packages/countries_flag/assets/flags/japan.svg": "63fcafe755ac89a0a0c10da5675be1d9",
"assets/packages/countries_flag/assets/flags/vietnam.svg": "b305e619cc445b678847006e99f66486",
"assets/packages/countries_flag/assets/flags/uruguay.svg": "ee0bcc9e941ee1e151313a367223f5fb",
"assets/packages/countries_flag/assets/flags/malta.svg": "8d1c28d755c48e7395c88abbad1126d7",
"assets/packages/countries_flag/assets/flags/egypt.svg": "37791ef8442528439af24c72b0e174e2",
"assets/packages/countries_flag/assets/flags/wales.svg": "c476b0ffec5c4e21cccb5ad6eaa6afa4",
"assets/packages/countries_flag/assets/flags/niger.svg": "10cd1dd204819c5014ddc93ecaeee810",
"assets/packages/countries_flag/assets/flags/trinidad_and_tobago.svg": "d58f8324665cb3b09a42f92c3b8123d4",
"assets/packages/countries_flag/assets/flags/hawaii.svg": "99dfcb667c33a779e2a20d05e6456e81",
"assets/packages/countries_flag/assets/flags/malawi.svg": "5d70b794e2293f0d220fe69c77b336e7",
"assets/packages/countries_flag/assets/flags/ivory_coast.svg": "3bf6615b31797e79767e9b11743d1cf3",
"assets/packages/countries_flag/assets/flags/croatia.svg": "84ee78b42d414dab030869486fb9d879",
"assets/packages/countries_flag/assets/flags/norfolk_island.svg": "c11dcf7ecc23c36b1f34df0c209b36ef",
"assets/packages/countries_flag/assets/flags/fiji.svg": "9e00e1d236622101682a00d7fcf2ad1b",
"assets/packages/countries_flag/assets/flags/jordan.svg": "de759a327786fd1756cf737eaf03a2d1",
"assets/packages/countries_flag/assets/flags/vanuatu.svg": "df3a09ec71e1528c6a22ffcddefda0a9",
"assets/packages/countries_flag/assets/flags/costa_rica.svg": "3102a9d592c5b908b91612f8cf7b6af4",
"assets/packages/countries_flag/assets/flags/abkhazia.svg": "508e2b45fb2228a4c7301f24852c05b4",
"assets/packages/countries_flag/assets/flags/papua_new_guinea.svg": "ca943054d1b5320bdcd4cf534b9724c3",
"assets/packages/countries_flag/assets/flags/united_nations.svg": "56efdfcc7ce164735dc4dadc9bb085d0",
"assets/packages/countries_flag/assets/flags/palestine.svg": "f6311420d29ec20dce7d58151380bebe",
"assets/packages/countries_flag/assets/flags/iraq.svg": "a66084d59cbf7936e631e5dd2dcacd22",
"assets/packages/countries_flag/assets/flags/bahamas.svg": "c78e3f7ca65802a36e37fe0ace91bb29",
"assets/packages/countries_flag/assets/flags/st_vincent_and_the_grenadines.svg": "3d1c263f877a4178d88e7f69923843f4",
"assets/packages/countries_flag/assets/flags/bonaire.svg": "01740c9a5e161cf2525e54da82c1ec48",
"assets/packages/countries_flag/assets/flags/european_union.svg": "b1848db44249c4531215b4739eacd8ad",
"assets/packages/countries_flag/assets/flags/ethiopia.svg": "b0d4b61da008b2abc1c24a995c1eca9e",
"assets/packages/countries_flag/assets/flags/netherlands.svg": "cc09c9be0a0230fa5509033583f880c0",
"assets/packages/countries_flag/assets/flags/georgia.svg": "a2f5855d56c0a5d1252938ed5c9ba4e5",
"assets/packages/countries_flag/assets/flags/lebanon.svg": "7c0d6d4f24a25c9a84b3397aa277757a",
"assets/packages/countries_flag/assets/flags/singapore.svg": "46b385e05e822814d9f054200e34e1d7",
"assets/packages/countries_flag/assets/flags/peru.svg": "082f41b2d81a3a9068a157d354b2e5d4",
"assets/packages/countries_flag/assets/flags/india.svg": "fd159f85fa4f9a5efadf377c90fa3e7e",
"assets/packages/countries_flag/assets/flags/philippines.svg": "6f113e64644d00fb716cfc33692333bc",
"assets/packages/countries_flag/assets/flags/cook_islands.svg": "b13749cc8d07b8cbf64d22c8fc3e5580",
"assets/packages/countries_flag/assets/flags/puerto_rico.svg": "b4a02cd23f8f6fac1f56424bcf0aec22",
"assets/packages/countries_flag/assets/flags/barbados.svg": "b1153dbc27b157d9be90ab26a080a1bc",
"assets/packages/countries_flag/assets/flags/albania.svg": "2ea5c1757f55f17b584af645c5ec6745",
"assets/packages/countries_flag/assets/flags/denmark.svg": "26b70ac7bd986081eee846e0e37349cb",
"assets/packages/countries_flag/assets/flags/aland_islands.svg": "b7783c2052e9f56b082d5f3b663f749f",
"assets/packages/countries_flag/assets/flags/palau.svg": "d411267e7582f8ebb5616ad5b7fd1590",
"assets/packages/countries_flag/assets/flags/st_barts.svg": "09d14492eaf79d3fc465751e1736b45a",
"assets/packages/countries_flag/assets/flags/belarus.svg": "9074ee88d2bcccd024461d7202ad8e60",
"assets/packages/countries_flag/assets/flags/northen_cyprus.svg": "07763a0994e8eee95f593cb6e3314f4b",
"assets/packages/countries_flag/assets/flags/northern_marianas_islands.svg": "1f128430ec26fb0eddfd03aa970622bd",
"assets/packages/countries_flag/assets/flags/jersey.svg": "03b25de01a14d73c62b3580725d1d6bf",
"assets/packages/countries_flag/assets/flags/bosnia_and_herzegovina.svg": "44275f55b8902756eab5176bd77b6895",
"assets/packages/countries_flag/assets/flags/eritrea.svg": "a210531ad6491f0a2246e79a35beea43",
"assets/packages/countries_flag/assets/flags/sint_maarten.svg": "c04603280345c2d9e5524daf7be69281",
"assets/packages/countries_flag/assets/flags/chad.svg": "b30505f91251f29626ed1bf835fb10c8",
"assets/packages/countries_flag/assets/flags/brunei.svg": "32663da65728450bd7a0c9dd68201233",
"assets/packages/countries_flag/assets/flags/sri_lanka.svg": "5d97e2610696ac7f21d2d5c0fbfce803",
"assets/packages/countries_flag/assets/flags/united_states_of_america.svg": "cfe34e9f0aee58b9de91362c139a90bd",
"assets/packages/countries_flag/assets/flags/faroe_islands.svg": "a0496b3703e02b525c6d3fec15417a5b",
"assets/packages/countries_flag/assets/flags/liechtenstein.svg": "81968416b2afe27c72a155c865f63378",
"assets/packages/countries_flag/assets/flags/ossetia.svg": "06bea9c64861f5b7f5baf4ebd341d77b",
"assets/packages/countries_flag/assets/flags/italy.svg": "fa7e3580e68bdcdc525429f370aeed70",
"assets/packages/countries_flag/assets/flags/zimbabwe.svg": "5254ed8c78288037822604a8d73d2218",
"assets/packages/countries_flag/assets/flags/antigua_and_barbuda.svg": "230c55b5e9743d59609576fef6c67ace",
"assets/packages/countries_flag/assets/flags/sahrawi_arab_democratic_republic.svg": "94d8098c214f0aa0f1edd4aa7a53bf77",
"assets/packages/countries_flag/assets/flags/france.svg": "5e0abb6d24264435255a8f94c369ac1d",
"assets/packages/countries_flag/assets/flags/dominica.svg": "ac4dd75541120e3fe5155747463ec742",
"assets/packages/countries_flag/assets/flags/kuwait.svg": "b9e6a0afe66e7c74eb0cd2b1c720b8d2",
"assets/packages/countries_flag/assets/flags/thailand.svg": "60be97300650e57965658b7583af2da9",
"assets/packages/countries_flag/assets/flags/dominican_republic.svg": "f5131bb020f4a3b492662258afca4b27",
"assets/packages/countries_flag/assets/flags/tubalu.svg": "fe6c8557c9e768ee16e2e83a61a4adbd",
"assets/packages/countries_flag/assets/flags/saba_island.svg": "c5fa027bf7f3001585e1579a1975be52",
"assets/packages/countries_flag/assets/flags/bangladesh.svg": "a2167729fff6768d396daa39cb439442",
"assets/packages/countries_flag/assets/flags/serbia.svg": "089a4cc2b575aaf87871aaa7cec4d220",
"assets/packages/countries_flag/assets/flags/mali.svg": "935bff845f08064e6aa7771c4ce3842b",
"assets/packages/countries_flag/assets/flags/suriname.svg": "e967d4ef8a5b3196d87d07e449565e80",
"assets/packages/countries_flag/assets/flags/mongolia.svg": "060615e89c3b21c865b552e459330524",
"assets/packages/countries_flag/assets/flags/bahrain.svg": "1de2e1df07b810fcdf292a0a8ac37ac2",
"assets/packages/countries_flag/assets/flags/luxembourg.svg": "01b78f1ce2120c1edc9c6e3df500e767",
"assets/packages/countries_flag/assets/flags/paraguay.svg": "6215d36dccc97d9fef23719de7ab55da",
"assets/packages/countries_flag/assets/flags/san_marino.svg": "371b71883e1c984feea56b44d9debc3a",
"assets/packages/countries_flag/assets/flags/portugal.svg": "160796ce7925931d5e450eb926645650",
"assets/packages/countries_flag/assets/flags/mauritius.svg": "69a7cb3213400d42120cbe64b887362c",
"assets/packages/countries_flag/assets/flags/spain.svg": "e2c32c87e142be109797599bd6721c05",
"assets/packages/countries_flag/assets/flags/pitcairn_islands.svg": "f7e722f5d61c7ebeb8e23149f8e1458d",
"assets/packages/countries_flag/assets/flags/guinea_bissau.svg": "5e82726390671c9d5f6c1b9131aa8cd6",
"assets/packages/countries_flag/assets/flags/myanmar.svg": "c3ee98821eb6fb96ba5014b611413eaf",
"assets/packages/countries_flag/assets/flags/martinique.svg": "829ad47dca6c235ebfd21cd075a831fd",
"assets/packages/countries_flag/assets/flags/turkmenistan.svg": "84c785dfaa5e914e9e23c311d4aeee23",
"assets/packages/countries_flag/assets/flags/nicaragua.svg": "63ee570c06f9ecac0b14b4fd121cb18d",
"assets/packages/countries_flag/assets/flags/haiti.svg": "f59d32897f72482483e43f8058f214ec",
"assets/packages/countries_flag/assets/flags/virgin_islands.svg": "ef1781110b2565bdf8f462de146945e4",
"assets/packages/countries_flag/assets/flags/democratic_republic_of_congo.svg": "029453adab38c29940a8d4652ce6d714",
"assets/packages/countries_flag/assets/flags/british_virgin_islands.svg": "191cd86aab397a70f5b01eb196ed8902",
"assets/packages/countries_flag/assets/flags/south_africa.svg": "53038e4c72af0da9fb1d35cdbab3768f",
"assets/packages/countries_flag/assets/flags/uganda.svg": "28c018e3104d51ea37cdd4ff8b69f130",
"assets/packages/countries_flag/assets/flags/austria.svg": "7d7c257dd333f62b9ddb68804974a2d9",
"assets/packages/countries_flag/assets/flags/israel.svg": "a6ee552b39b576bf826c849c18c2bab4",
"assets/packages/countries_flag/assets/flags/latvia.svg": "5ff7dcf25bcfe90d23e4fc5245788e6f",
"assets/packages/countries_flag/assets/flags/macao.svg": "3fb6d7ca71da56bba7bba5e88a10f69c",
"assets/packages/countries_flag/assets/flags/sudan.svg": "b653af4f54870cab1ae53b18d6f801dc",
"assets/packages/countries_flag/assets/flags/maldives.svg": "a1d660f5dbb5e4ca5d9743d2e5350aa6",
"assets/packages/countries_flag/assets/flags/somalia.svg": "76a6f79cd957fc13ac4002a04c2cb22e",
"assets/packages/countries_flag/assets/flags/balearic_islands.svg": "1f974d7e7324a76302b1ed926a05a7e1",
"assets/packages/countries_flag/assets/flags/saint_kitts_and_nevis.svg": "3744bf0a70a20eac321026c53fb4f808",
"assets/packages/countries_flag/assets/flags/germany.svg": "35d055855ee8b4a221308ace04343526",
"assets/packages/countries_flag/assets/flags/bhutan.svg": "a98429038f667215ffd2f7893ec599fd",
"assets/packages/countries_flag/assets/flags/qatar.svg": "44f941465e038798e71feeebf540c1c1",
"assets/packages/countries_flag/assets/flags/british_columbia.svg": "3a2771e7e109fa3efd98634ab296ba4f",
"assets/packages/countries_flag/assets/flags/azerbaijan.svg": "21d758f5a0ba848465bf0e83d3cca561",
"assets/packages/countries_flag/assets/flags/canary_islands.svg": "38bb7df45a93274643b5aa1640c99413",
"assets/packages/countries_flag/assets/flags/pakistan.svg": "3c0b1880c5659dd5429ff948cb6e1448",
"assets/packages/countries_flag/assets/flags/czech_republic.svg": "84107450f346b14a5ecf17ab00572b1a",
"assets/packages/countries_flag/assets/flags/american_samoa.svg": "d6cc54418985eaafb4ee1ca2ee424925",
"assets/packages/countries_flag/assets/flags/mauritania.svg": "f8e0d0c4fb5906caf3022bdc122d9109",
"assets/packages/countries_flag/assets/flags/african.svg": "c8aad7ae252a9028faf6d54c03cc155d",
"assets/packages/countries_flag/assets/flags/bulgaria.svg": "429f8ff1d06c88e72323d91756017cbc",
"assets/packages/countries_flag/assets/flags/united_arab_emirates.svg": "9ac6426eb89996496ecc4b5a82344b2e",
"assets/packages/countries_flag/assets/flags/tokelau.svg": "d2e09722696e3b3c1a09cf5562b99b53",
"assets/packages/countries_flag/assets/flags/togo.svg": "c5753fd81bfeae6ce16230215b0b0027",
"assets/packages/countries_flag/assets/flags/madeira.svg": "750586712d701ea568ae1a50d4672953",
"assets/packages/countries_flag/assets/flags/gambia.svg": "5bf0ad96978ab69514e925fbdd22a20a",
"assets/packages/countries_flag/assets/flags/yemen.svg": "18a00433928364d70c3bb37e7df12256",
"assets/packages/countries_flag/assets/flags/canada.svg": "cd93c99d041477247eab36082665b01f",
"assets/packages/countries_flag/assets/flags/micronesia.svg": "20361d0876e4b2db84d7c6630bf46f3f",
"assets/packages/countries_flag/assets/flags/anguilla.svg": "c977eebbd836d77dc1489988c35372ec",
"assets/packages/countries_flag/assets/flags/transnistria.svg": "d8daa2a56e94469fe37519ba8f349043",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "cb386601166a47a0bc4b047329f5b6ef",
"assets/fonts/MaterialIcons-Regular.otf": "0a47653977d903d46aa75f2d30de4c58",
"assets/assets/images/coffee.png": "0a3380640f0eb6e36b694dafb7fe8e97",
"assets/assets/images/doctor.png": "b7a983fb5bf36114133c169f66bbfef7",
"assets/assets/images/cui.png": "287f9787968f5df14897e9066c22a388",
"assets/assets/images/task.png": "62d6be2ebaef80434b114eacd9102a52",
"assets/assets/images/alarm.jpg": "7f8f2e55f5f47deaf440b3be64ca15d7",
"assets/assets/images/car.png": "ae3e0dda1da997a4e0ccd5cf1a25d2cd",
"assets/assets/images/profile.jpg": "740961b833eb03f74e5c11f3c41cb9d6",
"assets/assets/images/triange_icon.png": "086ab5ca50d3e558e3307ff009975083",
"assets/assets/images/chat.png": "489b7f6246ce741be85ca0d551e9d07b",
"assets/assets/images/recipe.png": "47c72988f9bb6d301948ac38877b231c",
"assets/assets/images/image.png": "9fb5704e719f93940bba93d69ebbd5cb",
"assets/assets/images/player.png": "612730c3861b2af0a0ae161ac8a72345",
"assets/assets/icons/github.svg": "9226aa209923e38c0a6ddcb236e2bc68",
"assets/assets/icons/flutter.png": "1105c9a994c1a6638daed558d5b631fd",
"assets/assets/icons/download.svg": "628700a3031424d215a441fab2da1731",
"assets/assets/icons/firebase.png": "36170822afe4c716cfbdb96dac8cd10e",
"assets/assets/icons/check.svg": "4220c82511cc1dfb40b8bba7d25c5f55",
"assets/assets/icons/bloc.png": "977fbfba561065f9a68c4b47f9774531",
"assets/assets/icons/dribble.svg": "d392567c5678d42472d2c7b766268101",
"assets/assets/icons/linkedin.svg": "5b2195ddf9e879047dd8a163c4194920",
"assets/assets/icons/twitter.svg": "a4a0163fef48a4247a305528c07bc4fa",
"assets/assets/icons/dart.png": "1ab71d33e7ba834836197b4fa8726da0",
"assets/assets/icons/behance.svg": "35ad2d47e647d0b168e7707b2984c6b5",
"assets/assets/translations/ru.json": "6fa66b07f11e83bfbb778b7fc953ac26",
"assets/assets/translations/en.json": "4d79bd5b4ca82b513d5d90fc86bdd0b3",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
