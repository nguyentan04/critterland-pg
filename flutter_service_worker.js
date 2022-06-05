'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "2d493588543e57fde6bb04cf98c145f8",
"assets/assets/animation/congratulation.json": "fcc5146904ece2beaf407b15b841de2e",
"assets/assets/animation/congratulation_stripes.json": "90609269ebc9ca7674b2924b1d0b73e7",
"assets/assets/animation/countdown_blue.json": "73c3918da8fad4941f87a0ebacf6944e",
"assets/assets/animation/countdown_green.json": "2a942e7edaf9aff7eca963a29b113f2d",
"assets/assets/animation/lf20_hjb354jj.json": "5d03b707c20f30fcb092feb8dd9339fd",
"assets/assets/animation/running_processing.json": "f5fb3dee544e39d452412ee72c722df1",
"assets/assets/animation/running_processing1.json": "6e03545820c20d81200715f871d7fc8c",
"assets/assets/animation/running_processing2.json": "e3ccbe3bd75a0d8dba47ed22734889ef",
"assets/assets/animation/send_1.json": "5bf2e170ecfc48a25e622cb4ec5f5e78",
"assets/assets/animation/send_2.json": "5bf2e170ecfc48a25e622cb4ec5f5e78",
"assets/assets/animation/thumbs_up.json": "4b4cb2af6893316e53405eae64157cce",
"assets/assets/background/login.jpg": "faeb08361dcd24945805d14887a6bc1e",
"assets/assets/boxs/commonBox.png": "ea397e4a34aa697b3ad749e77ecb877c",
"assets/assets/boxs/luxuryBox.png": "d2c38df30f9d495800260d78469098be",
"assets/assets/boxs/vipBox.png": "2a0f530cc9d2257c9e43c8b007df97da",
"assets/assets/ca/lets-encrypt-r3.pem": "9b8740c5387a2fd70006d3cbf2229a0c",
"assets/assets/collection/add.png": "d458e03da0dac5abd6ffc8bb4dba0783",
"assets/assets/collection/arrow.png": "8aa68d566e86120d3efcd455f81e7ebc",
"assets/assets/collection/coin.png": "aac5760de4272b73b386a7778636ddfd",
"assets/assets/collection/cup.png": "26c4f1a5422854869fab1be45823ab2a",
"assets/assets/collection/kr.png": "8e152393bac895f66ab4f826cb3005de",
"assets/assets/collection/level.png": "def900648438644124951c06fd2e834b",
"assets/assets/collection/price.png": "c4e01e7b72a8902aee0278255ede9704",
"assets/assets/collection/sneaker.png": "cc39aa5fa72359aa06878bb94010d220",
"assets/assets/collection/start.png": "ba4ebaec059c685b0157f16be8f3e669",
"assets/assets/collection/swipe_back.png": "8bd59d996b3619fb8c3d6f2e941dc756",
"assets/assets/collection/swipe_next.png": "dbc083dfa5cad496d76a4e7dd90f0f57",
"assets/assets/collection/what.png": "9e1439af9c74317053741f348a99af23",
"assets/assets/common/notify/cancel.png": "ab0a61ad56de6bee39583f1f0579c3b8",
"assets/assets/common/notify/cancel_line.png": "51fe7f2342aa6bafad6fd2162370cd43",
"assets/assets/common/notify/check_circle.png": "0bd8edcc4d733d0b5d61f7fc15379730",
"assets/assets/common/notify/infogreen.png": "ebb5c4207890f4b4499c4648f4ab0989",
"assets/assets/common/notify/info_violet.png": "f09f8a831b1e75196499aa4f512f0974",
"assets/assets/common/notify/warning-red.png": "b7a4a09add38680b70f1443681ab2d41",
"assets/assets/common/notify/warning.png": "be97e036df692ae495904a0a859048f0",
"assets/assets/common/shoe_attr/more_add_badge.png": "7e11f3feda4568ce28b776f6beb6c9c1",
"assets/assets/common/shoe_attr/more_durability.png": "2c7cd4e9d9d49fbde16e071dda90705b",
"assets/assets/common/shoe_attr/more_empty.png": "ef459ba039248233baf9babf727afca7",
"assets/assets/common/shoe_attr/more_level.png": "9d1d428bf84e81ac8fd27511ed487aae",
"assets/assets/common/shoe_attr/more_reward.png": "6641cda42bc755344e810123fe237def",
"assets/assets/common/shoe_attr/more_type.png": "2ab52e4b57fe2e9676aa5f7d0f96b70c",
"assets/assets/common/shoe_attr/property_basic.png": "7324458b94bb6dd1777a002e8eec88a1",
"assets/assets/common/shoe_attr/property_exclusive.png": "cfe8345b0def64dacfbc3c3e4a150814",
"assets/assets/common/shoe_attr/property_premium.png": "f793725d29b16d5f0d78edf1731ca7ff",
"assets/assets/common/thump_status/BNB.png": "8b96f290b6d5ce332a4eb0a8cda303f1",
"assets/assets/common/thump_status/bnb_fee.png": "2b420a93f5cad931169e4250fa73ff7a",
"assets/assets/common/thump_status/change_password.png": "84831790552985b15fd892e7d2abe390",
"assets/assets/common/thump_status/empty_badge.png": "40fe86063ec3853c5643f89536c98863",
"assets/assets/common/thump_status/empty_shoe.png": "f3f157a61506d2b6a2ee6a1c9150c84f",
"assets/assets/common/thump_status/empty_wallet.png": "e3eb93ce6a423a9696a2bec877723721",
"assets/assets/common/thump_status/KR.png": "8129d203f51fb70232cf223786642997",
"assets/assets/common/thump_status/no_shoe_on_sale.png": "cdb0a688f70237bf9fbe7fcd80196a2b",
"assets/assets/common/thump_status/sell.png": "5894e0e5a44042f5057daf8e36acb860",
"assets/assets/common/thump_status/sKR.png": "7d33de1ae1677f2283413cca07fceaf9",
"assets/assets/forgetpassword/forgetpassword.png": "44e3db258ffe42ede700637478ab9141",
"assets/assets/home/arrow.png": "7394d06939142a9d835336eb00f9e46d",
"assets/assets/home/box2.png": "81c90ed3fcd8dbd2407da3bbbb1d9152",
"assets/assets/home/cancel.png": "6a95da847828d774ab3ecbe9d0dbee19",
"assets/assets/home/coin.png": "44f57ae1383e45854cd522b0b4cabf15",
"assets/assets/home/cup.png": "e62f721554381746c7dbcd3b00d621e6",
"assets/assets/home/distance.png": "910f5ecabbaed8df49b492c8b55cce87",
"assets/assets/home/empty_shoe.png": "70d17471a4370ba30c0d9ef302db9657",
"assets/assets/home/Frame.png": "629426e09ade39adb10fe1d3a563c346",
"assets/assets/home/goal.png": "d288798fa78d5b3f5cd7b80420e9a407",
"assets/assets/home/Group.png": "4145da4d7137479bf6068bd706dc902e",
"assets/assets/home/Group2.png": "64950116c7bccd5438fe3838760aac80",
"assets/assets/home/Group7273.png": "96fd4491d512266fffe96ce9908b83d9",
"assets/assets/home/Group7276.png": "6b33da56f94d6a971426815cf7727b4b",
"assets/assets/home/Group7277.png": "943cc775f10c978d4254971ae0cc2a58",
"assets/assets/home/home.png": "44619ba9f7e233fc60b24a4ad7f82a09",
"assets/assets/home/home_s.png": "20325caaf17e21f9309f41fba4d89de1",
"assets/assets/home/Logo.png": "deb21246552de6dc4af16713b6b692a6",
"assets/assets/home/market.png": "3eae691a3e45f46f11c7a8bc10df933c",
"assets/assets/home/market_s.png": "3f0f9f0c504a34ccb52f7425a2816366",
"assets/assets/home/notification.png": "30724c3a5363fe667d77a80dd11f3b00",
"assets/assets/home/restore.png": "a82774886099f4e3dcad99574a7f50e1",
"assets/assets/home/run.png": "913d5bdaea223fed161e50f3a33fa1c6",
"assets/assets/home/run1.png": "0cb32ec00517a4b2e2d416e581e7e978",
"assets/assets/home/store.png": "92e4ad45bddae1d3425d55d52c2bae06",
"assets/assets/home/store_s.png": "34f653963a1eb43016024263781f0082",
"assets/assets/home/swap.png": "5b95c45442e8009f51f94a583cf3df65",
"assets/assets/home/transfer.png": "836186e2a085cc3a64513e171411d44c",
"assets/assets/home/user.png": "504cfbad18a4fe1fda95f631b8b8609b",
"assets/assets/home/user_s.png": "32496a80a0596a6a7950baa3b60df350",
"assets/assets/home/wallet.png": "5065549ffea087acbc1fef147d20c911",
"assets/assets/icons/arrow.png": "01235b44a04718cbdc10f368edd1be0c",
"assets/assets/icons/high_intensity_icon.png": "a1a2a0901de1e48037bd223fc5290e93",
"assets/assets/icons/icon.png": "a529f207e4bec8a7152940db5bb0a4ff",
"assets/assets/icons/icon_.png": "e658ba1a9ed6110a37fe77f24f5b9890",
"assets/assets/icons/ic_add.png": "900583650a1efb21874b8d6f95aa0362",
"assets/assets/icons/ic_arrow_green_gradient.png": "5f94a165cff6efb39a0e3b149e984992",
"assets/assets/icons/ic_back.png": "3558ffc6358209e37739d58ca20ff441",
"assets/assets/icons/ic_back_white.png": "49806336c6c4c1e70281b5edaa3125d1",
"assets/assets/icons/ic_best_pace.png": "d52578a98a60815f41f8b2727f2118b4",
"assets/assets/icons/ic_best_pace_light.webp": "b762ac340dab3e0d316b47838a7a87a4",
"assets/assets/icons/ic_bottle.png": "4bf5c76afcd0e121e53a9190c0be6255",
"assets/assets/icons/ic_calender.webp": "532dd9f3630d271493da63fa82369a74",
"assets/assets/icons/ic_clock_reminder.png": "a1b0b1338124912d57056ca93aeb781a",
"assets/assets/icons/ic_close.png": "567909f4b174360415fd8ea16b751242",
"assets/assets/icons/ic_delete.png": "caf90d00d3251d376636a06a38d10623",
"assets/assets/icons/ic_distance.webp": "41755023cadf24b25f311982625e0469",
"assets/assets/icons/ic_distance_light.webp": "f04141f167830a860dd0e18371af31fa",
"assets/assets/icons/ic_duration.webp": "19446a207ee8a596dbd8f69ee88856e4",
"assets/assets/icons/ic_duration_light.webp": "0d79b282f44f6738beee91eaae1cca11",
"assets/assets/icons/ic_edit.png": "611ce8034fb38a23566abdb8aab50d43",
"assets/assets/icons/ic_email.webp": "3840ce8be12190a9de4cb8769c99e023",
"assets/assets/icons/ic_emoji_bad.webp": "6154c7a229e9da1d3d8c3b586a8c4aa9",
"assets/assets/icons/ic_emoji_good.webp": "e417b0e31b42bf3dcf0e3bb9e4082108",
"assets/assets/icons/ic_emoji_great.webp": "646bc6457d0aacfe638804743345ae28",
"assets/assets/icons/ic_emoji_okay.webp": "7f749762aed01fd6c081aee4c5237d03",
"assets/assets/icons/ic_emoji_terrible.webp": "c46abf895eade8c6bcae11c868336be6",
"assets/assets/icons/ic_female.png": "8cd1e4c288fce89b88f883b08a7d589b",
"assets/assets/icons/ic_footstep.webp": "a9d819a6dc9d9346f2c5606400378785",
"assets/assets/icons/ic_info.png": "3cb0bc959a79311e56f19dd94c22d38f",
"assets/assets/icons/ic_info.webp": "eb89c58c23ced6dbd1ef29675920543c",
"assets/assets/icons/ic_info_white.png": "bf8b20785b65b79257eb580bb8dda762",
"assets/assets/icons/ic_languages.webp": "5cbafd61e61652d37393e62eec34ba5a",
"assets/assets/icons/ic_location.png": "de345bfe84de1b401b1083d2a8e8fca5",
"assets/assets/icons/ic_lock.png": "b1b41ecf17b1eec7bae7b98cc9e4066c",
"assets/assets/icons/ic_male.png": "8bc80ebbbf1187cb2d57311d3ae29634",
"assets/assets/icons/ic_map_permission.png": "b94136b0869352f63e769c29819901ec",
"assets/assets/icons/ic_map_pin.png": "8293eb2d856af83237263df8f42f599d",
"assets/assets/icons/ic_map_pin_purple.png": "f6ea97d0bcd619a9e04d07613b2834ca",
"assets/assets/icons/ic_map_pin_red.png": "d5b402238c07d2ff4238ed9ea1b6c880",
"assets/assets/icons/ic_minus.png": "6682626422370948d476f716c4ab83d8",
"assets/assets/icons/ic_more.webp": "caeb76fd513b07455d2088a4a827eb3b",
"assets/assets/icons/ic_notification_white.webp": "2b685c43ee5c31ab8d88bbdcf51d2c05",
"assets/assets/icons/ic_options.png": "7d1382a4a1cca8854ac0cbd32dfc10ef",
"assets/assets/icons/ic_options_steps_indicator.png": "0d404952bb13822efd064352ad2f1abb",
"assets/assets/icons/ic_pause.png": "fd1a586976f3fb0dec607f136a69bc19",
"assets/assets/icons/ic_person_bottombar.webp": "5278ed9d1c6044cb6e99e2a34b0e977f",
"assets/assets/icons/ic_person_run.png": "d05edbfb5eb876e2efca2430785255df",
"assets/assets/icons/ic_person_walk.png": "6446ba86f41865f92b1e240bbe8e11ca",
"assets/assets/icons/ic_play.png": "edaa9e3bc0f7f0c9dd7cca5f0c6bc343",
"assets/assets/icons/ic_privacy_policy.webp": "d805e4d408ea076d06807875004b3300",
"assets/assets/icons/ic_red_gradient_circle.png": "8f5a1b6f15fde1cff221326094223977",
"assets/assets/icons/ic_reset.png": "a997943acd815300d87e4d4cf0014f96",
"assets/assets/icons/ic_round_true.webp": "81fc14b75f787d94acc71e5544e0779c",
"assets/assets/icons/ic_route_map.png": "bd21ea2ab2ce70ededd916fdb7f6fcca",
"assets/assets/icons/ic_run.png": "82e79652f01fc24b2513509afea21df8",
"assets/assets/icons/ic_selected_home_bottombar.webp": "16af91049cb7998494bafcfea914c83f",
"assets/assets/icons/ic_selected_profile_bottombar.webp": "a04deeb5b1771502af5a5600b4ba95d9",
"assets/assets/icons/ic_select_pointer.png": "c20349f05ad0576b779b01dfdef564de",
"assets/assets/icons/ic_setalite.png": "f2bc92701a9adba722225f37695182ec",
"assets/assets/icons/ic_setting.png": "31507073248c0656048964f3cbd5e8a3",
"assets/assets/icons/ic_setting_circular.png": "f4721b6112345f509c293faacb2b8461",
"assets/assets/icons/ic_setting_round.png": "93205318b7ac3655fd6dbd3909894705",
"assets/assets/icons/ic_share_watermark.png": "564e9f6767c3c2594e051fba54b8ce0f",
"assets/assets/icons/ic_square.png": "b8be1a83dc4d3588d2f4bfa32c1411c1",
"assets/assets/icons/ic_star.webp": "18739edf67053b25119f2d9d03447114",
"assets/assets/icons/ic_star_blue.png": "a221edb09678ee2ce504887d61646cec",
"assets/assets/icons/ic_star_white.webp": "80a5cea71a63ee266c9f3ab920b965d2",
"assets/assets/icons/ic_statistics.png": "73fc9222f51234a314851ec7be637dfd",
"assets/assets/icons/ic_steps.png": "b35b91d1ce2de68d42ad509f07632592",
"assets/assets/icons/ic_trouble_shooting.png": "216cc139c4cd43d209cee66cfe577357",
"assets/assets/icons/ic_turn_off.png": "aefe276d79a4ac643417485c853c3a05",
"assets/assets/icons/ic_units.webp": "7f2e71a957ee21a9175c54923077153e",
"assets/assets/icons/ic_unselected_home_bottombar.webp": "9a65c43516c7d22013246c357ca9ce9c",
"assets/assets/icons/ic_unselected_profile_bottombar.webp": "a2698e2439cc01d9d4787bff1dd8ede6",
"assets/assets/icons/ic_walk.png": "f6262bccfbcdcc340d2932d1a469fd47",
"assets/assets/icons/ic_water.png": "86f85d6b72ad93dbefbf618a2295f08f",
"assets/assets/icons/ic_yellow_gradient_circle.png": "26ad89b610a1a180392a86f9151e270e",
"assets/assets/icons/low_intensity_icon.png": "660280b5e2c852da1e3dbc5c36bb4eaf",
"assets/assets/icons/modrate_intensity_icon.png": "4e31475d3134f38635bfbc4f727db7c4",
"assets/assets/icons/water/ic_empty_100.png": "d9d44563678677dfa3e14222ed67eaab",
"assets/assets/icons/water/ic_empty_150.png": "9175ed03f066d4bb1db92e13ca72fd4a",
"assets/assets/icons/water/ic_empty_250.png": "ba081331ea4af6684f623ecab078d2bb",
"assets/assets/icons/water/ic_empty_500.png": "85c93afa1e79be8764c6e69c5e46a856",
"assets/assets/icons/water/ic_fill_100.png": "a93c88ed4dfbc048414860afc361847a",
"assets/assets/icons/water/ic_fill_150.png": "f14c1870adc484edc2e8a21093ca3a6b",
"assets/assets/icons/water/ic_fill_250.png": "5c01098db6af99f4b38d8967dafb6a2e",
"assets/assets/icons/water/ic_fill_500.png": "f733ea7c1384d10978d527d5c75c4acc",
"assets/assets/icons/water/ic_fill_plus_100.webp": "b2e8017e2de0e1c1e4e77bb2fcd8f42f",
"assets/assets/icons/water/ic_fill_plus_150.png": "aba4f40b61b8152cec7e9ba6d7a53e94",
"assets/assets/icons/water/ic_fill_plus_250.webp": "07b3434fd3b1f8e81ba3ab90780981b2",
"assets/assets/icons/water/ic_fill_plus_500.webp": "e8192fc70fc67ab6f1b73b9ae41f0d2b",
"assets/assets/icons/water/ic_minus.png": "824e321128317c0edda57ad064d9b07a",
"assets/assets/icons/water/ic_plus.png": "074c1556d9e9ece689e85644611ab179",
"assets/assets/icons/water/ic_up_arrow.png": "c4c1b96ad3081d432759ccade75001c2",
"assets/assets/images/bg_countdown_timer_blue.webp": "0cf14b290a1755cc04390b2198ed20a1",
"assets/assets/images/bg_countdown_timer_green.webp": "b799274eb253cc5618215f7d9e454303",
"assets/assets/images/dummy_girl.png": "5cf1b412b508e779e9e9c6d776aa2d42",
"assets/assets/images/dummy_map.png": "93c1d46c005361997510d6b243baa740",
"assets/assets/images/finish_image.png": "60cce37bcd1c85abe3de28809c4dcdd7",
"assets/assets/logo.png": "8cc9fb02448b53f3a43cf97d5f7d8542",
"assets/assets/logosmall.png": "00c188c549e91e8a6489544e08ec396a",
"assets/assets/Logo_bg.png": "3d0cf46be31b45ba825d5b3513fe2144",
"assets/assets/market/btnDown.png": "7c4d85f7d78205c131ab7480ab9744bb",
"assets/assets/market/btnDownS.png": "13c3f7455d44c410f0b43db2357957d2",
"assets/assets/market/btnUp.png": "1e66d2160bcaeb456cafa5ffd80c5d53",
"assets/assets/market/btnUpS.png": "2893bcabf7903de3307fb5107930e07f",
"assets/assets/market/Exclusive.png": "84a8a03edeef23cec057536c0a685f71",
"assets/assets/market/Premium.png": "56b257af39e6eece13f016bd1e1a6acb",
"assets/assets/market/shoe_bg/shoe_bg_1.png": "693b48967384f36282c15632567ab36c",
"assets/assets/market/shoe_bg/shoe_bg_2.png": "e8d04683e4e7fc5b1d5de7467702ab6a",
"assets/assets/market/shoe_bg/shoe_bg_3.png": "8a27b589adc30777073a19dbe1839646",
"assets/assets/market/shoe_bg/shoe_bg_nft_done.png": "ffcbea05dfb2e979294ce7ee1d709555",
"assets/assets/market/shoe_big/1.png": "f2b28560b83da809a9635a7f4dbe048a",
"assets/assets/market/shoe_big/10.png": "2123e8d61bfca33d2038e781cdde77f3",
"assets/assets/market/shoe_big/11.png": "5f32a846e9d09e8fe5ac07766a749590",
"assets/assets/market/shoe_big/12.png": "a0c9ad2092c5400ed2f6b552eaa27b45",
"assets/assets/market/shoe_big/13.png": "17ffd3f1925434ce52374f9287287c62",
"assets/assets/market/shoe_big/14.png": "0a8ff6d98941fa39628709f2cc3c5b4f",
"assets/assets/market/shoe_big/15.png": "e703bea19ecbe4683a8989126d906eb5",
"assets/assets/market/shoe_big/2.png": "2c6dfae1a853584e5f213228e13168bf",
"assets/assets/market/shoe_big/3.png": "d73a0b034e7563ee5dec806100bdb547",
"assets/assets/market/shoe_big/4.png": "9a537a29df697f4fbe266be0775a3109",
"assets/assets/market/shoe_big/5.png": "09d2ced35eccc75c2b8578b9f37e380e",
"assets/assets/market/shoe_big/6.png": "af826363abda667bf7b19c545db218ce",
"assets/assets/market/shoe_big/7.png": "c57ed9379f0d4fad1172f7fe976d6044",
"assets/assets/market/shoe_big/8.png": "392fe60a11c30bab003a71c83f6b4696",
"assets/assets/market/shoe_big/9.png": "f5246b537658fc4410b38c95eec7b8cb",
"assets/assets/market/shoe_small/1.png": "12a3e33f36bdc92400cfee18cd5dcb6c",
"assets/assets/market/shoe_small/10.png": "f468ea61c6feff536f2710835be84579",
"assets/assets/market/shoe_small/11.png": "406051bfb5d0bd9f9108bbce6a2f87df",
"assets/assets/market/shoe_small/12.png": "91bd6d484d15429d90337f847ea40084",
"assets/assets/market/shoe_small/13.png": "3be52c724a611fd314e6d0d66f1b08c5",
"assets/assets/market/shoe_small/14.png": "602fdba1ed54b66c88871d63a8cb6616",
"assets/assets/market/shoe_small/15.png": "6413fda6c8dfa1a3858d83b7f5481819",
"assets/assets/market/shoe_small/2.png": "afa489588058bf0a44075a2c82cc898a",
"assets/assets/market/shoe_small/3.png": "3e3d7e0a81a70c7b2129f5eef5a99301",
"assets/assets/market/shoe_small/4.png": "9fe4a0f26a0bb2bd2670994842f4eb58",
"assets/assets/market/shoe_small/5.png": "6934b29d2185ae410aaf4967f9c3b6f8",
"assets/assets/market/shoe_small/6.png": "82be556c571bf0b5c2b2615e036f8a65",
"assets/assets/market/shoe_small/7.png": "92326d16718e21cddeebfc97531d3f3d",
"assets/assets/market/shoe_small/8.png": "b696af6f39ae97b5b005464f16b47a6e",
"assets/assets/market/shoe_small/9.png": "2898f04cd02f76c122b35e0d36fc6380",
"assets/assets/profile/coin.png": "5e57633b7183e4504a2aeb281a763a3b",
"assets/assets/profile/copy.png": "4f90fb2e16da60ce61a3bb2be9a863f5",
"assets/assets/profile/distance.png": "60b9c5b0a2c31ddf122155b70740bc20",
"assets/assets/profile/edit_pen.png": "ad6afafc24e69f96c2a44adfcaae4e5e",
"assets/assets/profile/extend.png": "c8f4ee7882f075272c868e24ec0bff78",
"assets/assets/profile/logout.png": "da8df4d59dd366326f6ea50fd846f1dc",
"assets/assets/profile/not_extend.png": "b776658c0e2682d2e2f121adeba0d9f2",
"assets/assets/profile/outgoing.png": "1df3b56d8842701c1a03bd9c19149269",
"assets/assets/profile/profiles_avata.png": "c460908656b3711fea7256d64d1f5742",
"assets/assets/profile/settings.png": "f3d80dbe801634489d548e9c63796eaf",
"assets/assets/profile/sneaker.png": "0bf87e18cbb72a721db8ad0e5720ed0f",
"assets/assets/profile/wallet.png": "d2931def2f8ecb43561cfc30663a7a0d",
"assets/assets/profile/_incoming.png": "3d1c663d6e2ab1eef61963dafd68ce7c",
"assets/assets/shoes/shoes-01.png": "d7877c28d11d4d560c3ce75e85a21e4f",
"assets/assets/shoes/shoes-02.png": "6bbe752cc2391518d1145b63c8fc907b",
"assets/assets/shoes/shoes-03.png": "c260202b57ba0bc2f674af5c464da799",
"assets/assets/shoes/shoes-04.png": "c01b9ab5a706768d9e3974c4e0e7fddd",
"assets/assets/slide/1.jpg": "f7c3687874c4e5ed876969b8580c0ef8",
"assets/assets/slide/2.jpg": "2be636b6da102eb69b3754107528ce67",
"assets/assets/slide/31.png": "ccba108d89d4a1cbb8daa79bfdbcdce1",
"assets/assets/slide/ho-chi-minh.jpg": "02697979a71998f26be62547dbfd47b8",
"assets/assets/splash/splash.png": "a26927925fe044280d167b173a59ccd9",
"assets/assets/store/05bnb.png": "629426e09ade39adb10fe1d3a563c346",
"assets/assets/store/box-best.png": "b85e33c9caa5626559480ba33013f4d0",
"assets/assets/store/box-moeny.png": "56a7fd30861f2550967ae55e7cca8117",
"assets/assets/store/coid-basic.png": "7e2c8aff9adc81c14e357560f6418327",
"assets/assets/store/coin-done.png": "ccf607eaeca423dc331d16d15ed86280",
"assets/assets/store/empty_wallet.png": "9abc51259a3b641ea449b57286772eb2",
"assets/assets/store/Frame8555.png": "8e32ac270c3e0fda7768f3524688a824",
"assets/assets/store/Group7275.png": "87f21954ca11d57677d1c00203eaac4a",
"assets/assets/store/Property1no.png": "4f9ad5776c4997e7a3b552e23590166a",
"assets/assets/store/Property1yes.png": "8bd941235a19dfc643e9f0aab673d1fd",
"assets/assets/store/shoedone1.png": "7008138868a0e4691d41454865a0b4f7",
"assets/assets/store/shoedone2.png": "92c7e87657456f6be8ddf717fae6cc3a",
"assets/assets/store/shoedone3.png": "764c34a5ac2cb584e0f5cbe9a4081fc5",
"assets/assets/store/sneaker.png": "763d4c635f32207832cbd4eedead9ed0",
"assets/assets/store/start.png": "93cb39cb39480da9d8775d76ceb9a2f2",
"assets/assets/task/acc.png": "ded3ac28f80a16fc4851e3a5fca11906",
"assets/assets/task/autolocation.png": "1e2993943ec85b5844f205d9bd0f3540",
"assets/assets/task/coin.png": "c17bbb372ae7c0d90b0a33ccb533127d",
"assets/assets/task/cup.png": "9097ef1485b2d8f264f1e261317d252a",
"assets/assets/task/distance.png": "d24f68318a38fb599dd93409d10206ab",
"assets/assets/task/distance_task.png": "ef4e3dd3d6ca5eba2b4cfd9a26a0ec88",
"assets/assets/task/flag.png": "31c694175b42c84ad69d69606940a208",
"assets/assets/task/flag_done.png": "7555594e34d9597b1fbb5e367b6b799d",
"assets/assets/task/go.png": "dc7433fdb786121355ffdac4ede2568a",
"assets/assets/task/lestgo.png": "29f662d246dcdf92f0dda3244948bd8e",
"assets/assets/task/lestgo_done.png": "6118ea768ab58ac2899b2eb5bdf3fe23",
"assets/assets/task/level.png": "8a38053a3d99fa73ab36e877ff560b57",
"assets/assets/task/location.png": "896e1acf27d2133705e7d022dea9a1db",
"assets/assets/task/pause.png": "7921df3d9f9c3d10b292c9e5d48efd41",
"assets/assets/task/reload.png": "a73b295ecbf81f74fdc9ba8b66db0ffb",
"assets/assets/task/run.png": "2ba10fb6fc768136db329634164ef0dc",
"assets/assets/task/sneaker.png": "80eb312cab5ae743cb34f1920b5643d0",
"assets/assets/task/star.png": "a89f340d6b5797a7351893b8fa6928ab",
"assets/assets/task/start.png": "e0706cdf02116cd4adbb8c99352b6bfe",
"assets/assets/task/stop.png": "f7a1ad15c46624e7b58b6ac598e42e96",
"assets/assets/task/time.png": "0b0f227f60a93fc4e95708ec1fd0d0d9",
"assets/assets/task/win.png": "096898336dfb6090b35ae5f3d7b21378",
"assets/FontManifest.json": "272ce635f3ce24f97007227d8b7b5b14",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/fonts/Roboto-Black.ttf": "301fe70f8f0f41c236317504ec05f820",
"assets/fonts/Roboto-Bold.ttf": "9ece5b48963bbc96309220952cda38aa",
"assets/fonts/Roboto-Light.ttf": "6090d256d88dcd7f0244eaa4a3eafbba",
"assets/fonts/Roboto-Medium.ttf": "b2d307df606f23cb14e6483039e2b7fa",
"assets/fonts/Roboto-Regular.ttf": "f36638c2135b71e5a623dca52b611173",
"assets/NOTICES": "e7ec7ea6d67168e827ddf123dad86f88",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "721ca99d712521e178d90413f1adba0b",
"/": "721ca99d712521e178d90413f1adba0b",
"main.dart.js": "a609803f33b1aca1c06baa357cae5245",
"manifest.json": "849d7aed2c3eef5eb615d782d8622af4",
"version.json": "5fe19516353d9f088081f9868144bd62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
