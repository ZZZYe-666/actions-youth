/*
Author: Curtin
Date: 2021.7.4 22:25
中青分享阅读助力10次

使用方法：
Quantumuil X：添加远程重写
[rewrite_remote]
https://gitee.com/curtinlv/qx/raw/master/rewrite/youth.conf, tag=中青 by Curtin, update-interval=172800, opt-parser=false, enabled=true

中青分享一篇文章到自己的微信上，自己点击一下即触发会自动完成10好有阅读奖励 500青豆/次。

 */
const $ = new Env("中青分享阅读-助力10次");
let articles = ["https://script.baertt.com/count2/callback?si=c66e89337e0f319cb245de5a8518748d&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fs%253Fsignature%253DRpqGjEWYvLyBl2g1l2GgEEtnVzVYuv6QBgN7D56Pd3OMonkQx9%2526uid%253D57782651%2526phone_code%253D3a5bc3098635f75d03e952d21b4710f1%2526scid%253D39471978%2526time%253D1627289462%2526app_version%253D2.0.2%2526sign%253Dc124fe8a1061bb0021e888b4dfd4c234&_=1627289553247&jsonpcallback=jsonp6",
"https://script.baertt.com/count2/callback?si=cf21e7b069f34c513be6c3f10d98cbab&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fs%253Fsignature%253DXwoQBWe23qDAVz946le2Lkh2GmG9fkerPNeavNyb8EMlgYnm6k%2526uid%253D57782651%2526phone_code%253D3a5bc3098635f75d03e952d21b4710f1%2526scid%253D39474558%2526time%253D1627287199%2526app_version%253D2.0.2%2526sign%253Db9e5257629bdc4eaf931009e9377f9dc&_=1627287213089&jsonpcallback=jsonp6",
"https://script.baertt.com/count2/callback?si=950800e8ea79f4132372fcc760708ac0&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fs%253Fsignature%253DX6AKVevx2zmNQOjaBJ0KOwiB050zt6okgWmad93krDoJqw0WYn%2526uid%253D57782651%2526phone_code%253D3a5bc3098635f75d03e952d21b4710f1%2526scid%253D39473739%2526time%253D1627289902%2526app_version%253D2.0.2%2526sign%253De90de91973b5f0754705c7ce73f033c1&_=1627289925425&jsonpcallback=jsonp6",
"https://script.baertt.com/count2/callback?si=08b1210b22abd763d329a5dd0e7e31e6&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fs%253Fsignature%253DdQOvnJNrgR0GzE9azZEw0Li2DbjySrwrNAkaV6yqY2lXojxeM8%2526uid%253D57731092%2526phone_code%253D9fb108d309f3fedec57146308347a63a%2526scid%253D39501205%2526time%253D1627523824%2526app_version%253D2.0.2%2526sign%253D3eb145f17e2d6ebf7c3b31f4abb01ad8&_=1627523847658&jsonpcallback=jsonp6",
"https://script.baertt.com/count2/callback?si=cf21e7b069f34c513be6c3f10d98cbab&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fs%253Fsignature%253DBzyAgkjdGMQWRVY752wnmQhXDObesvyv9bDalK9opXE8ZO3mrb%2526uid%253D57731092%2526phone_code%253D9fb108d309f3fedec57146308347a63a%2526scid%253D39475968%2526time%253D1627524125%2526app_version%253D2.0.2%2526sign%253D201479060daedb48640d4a79eb7696b4&_=1627524142615&jsonpcallback=jsonp6",
"https://script.baertt.com/count2/callback?si=0998b5695b5f250b8b6d051380869a33&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fs%253Fsignature%253DyloGK5wNVmQq0XWaW6zO6yUbBj2pUXZMvJX7n93eRAO8BMxdvD%2526uid%253D57731092%2526phone_code%253D9fb108d309f3fedec57146308347a63a%2526scid%253D39436800%2526time%253D1627526308%2526app_version%253D2.0.2%2526sign%253D05800327065b31a1c3158350a1e28d5f&_=1627526324799&jsonpcallback=jsonp6",
"https://script.baertt.com/count2/callback?si=ad5a831dc117852060520619f6c96cd1&referer=https%253A%252F%252Ffocu.youth.cn%252Fnewfivehot%252F20210804%253Fsid%253D39584601%2526uid%253D58102115%2526timestamp%253D1628085934%2526signature%253Dl3Q0RNe9oPxVZ6pJMA7EnbzPMsW03XNaL2XGkOKdvDynjYb5Wz%2526scene_id%253Dfire_share%2526share_id%253D58102115395846011628085940%2526time%253D1628085940&_=1628086020678&jsonpcallback=jsonp6",
"https://script.baertt.com/count2/callback?si=25e633dfddb50ed5912ef970bccb05e5&referer=https%253A%252F%252Ffocu.youth.cn%252Fnewfivehot%252F20210803%253Fsid%253D39580596%2526uid%253D58102115%2526timestamp%253D1628086172%2526signature%253D6y30XlmbkL9oxwAjJd1PRLeBrIXJPgk7gMQE2nZKW8RNpvPrqz%2526scene_id%253Dfire_share%2526share_id%253D58102115395805961628086218%2526time%253D1628086218&_=1628086230384&jsonpcallback=jsonp6",
"https://script.baertt.com/count2/callback?si=5a2094a0100892d5cfd8f6930f7535b4&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fs%253Fsignature%253DdQOvnJNrgR0GzE9azZLJEnh2rnpeurz5xnjaV6yqY2lXojxeM8%2526uid%253D58529441%2526phone_code%253D3a5bc3098635f75d03e952d21b4710f1%2526scid%253D39987198%2526time%253D1630785093%2526app_version%253D2.0.2%2526sign%253Dc565a17d09a7d79db5a448f251ce0bb7&_=1630785234602&jsonpcallback=jsonp6",
"https://script.baertt.com/count2/callback?si=5a2094a0100892d5cfd8f6930f7535b4&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fs%253Fsignature%253D0Z3Jgv96wqmVPeM7or3rYougA852CxX3rXD4jpGDnANbo8KXQr%2526uid%253D58529441%2526phone_code%253D3a5bc3098635f75d03e952d21b4710f1%2526scid%253D39972081%2526time%253D1630686790%2526app_version%253D2.0.2%2526sign%253Dd2e4aab5f8203f5696bbc63f26897863&_=1630686836608&jsonpcallback=jsonp6",
"https://script.baertt.com/count2/callback?si=5a2094a0100892d5cfd8f6930f7535b4&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fs%253Fsignature%253D0Z3Jgv96wqmVPeM7or39WdCgA852CxXrlV94jpGDnANbo8KXQr%2526uid%253D58529441%2526phone_code%253D3a5bc3098635f75d03e952d21b4710f1%2526scid%253D39969577%2526time%253D1630785121%2526app_version%253D2.0.2%2526sign%253Dc6edee6be21efbe6f29294b0985dc32d&_=1630785414874&jsonpcallback=jsonp6",
"https://script.baertt.com/count2/callback?si=f76bcbd606feb7c913a598f20f5b45f9&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fs%253Fsignature%253DX6AKVevx2zmNQOjaBJDgzghBXJAlf6AjPzLad93krDoJqw0WYn%2526uid%253D58529441%2526phone_code%253D3a5bc3098635f75d03e952d21b4710f1%2526scid%253D39332600%2526time%253D1630785703%2526app_version%253D2.0.2%2526sign%253D7b044199297b199ac85841aea65b7d43&_=1630785714348&jsonpcallback=jsonp6",
"https://script.baertt.com/count2/callback?si=01a5a49e88b28760a54ee34bcc049106&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fwapshare_six%253Fsignature%253DVMYqRmZGljQD8pAPB3aDMggJgsRKlpN1Xy9O06evWJwbxoN5KL%2526scene_id%253Dhome_feed%2526share_id%253D59228026402705041633117184%2526time%253D1633117184&_=1633117200401&jsonpcallback=jsonp6",
"https://script.baertt.com/count2/callback?si=1cd072402eec1a2490cdb767dd629222&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fwapshare_six%253Fsignature%253DNRxPz8j0mdBYbOGDW91l288BQunlDQM7yAXV56qwogJEpkLK2e%2526scene_id%253Dhome_feed%2526share_id%253D59228026402706051633118293%2526time%253D1633118293&_=1633118325563&jsonpcallback=jsonp6",
"https://script.baertt.com/count2/callback?si=01a5a49e88b28760a54ee34bcc049106&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fwapshare_six%253Fsignature%253DNqylzJV6MGKj23RQPraW6vWkdTb3pJY7EYOAgBndo9ZkDbepv5%2526scene_id%253Dhome_feed%2526share_id%253D59228026401577251633118436%2526time%253D1633118436&_=1633118450820&jsonpcallback=jsonp6",
"https://script.baertt.com/count2/callback?si=c9be5ce58ae9cfa958238177649d35f7&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fwapshare_six%253Fsignature%253DkzYx0ngZLqblOM65PN7LKVVgRujdnEx4E3GQoepJDX9dv8AB2W%2526scene_id%253Dhome_feed%2526share_id%253D59228026402706831633118631%2526time%253D1633118631&_=1633118645016&jsonpcallback=jsonp6",
"https://script.baertt.com/count2/callback?si=4faeef158128826bbe91232662813a77&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fs%253Fsignature%253Dk5Bv92bmMjwJEOP788KbvMUVJwr6TzjVzgY7gxne6rYKdpWVoR%2526uid%253D58968471%2526phone_code%253D3a5bc3098635f75d03e952d21b4710f1%2526scid%253D40273764%2526time%253D1633166637%2526app_version%253D2.0.2%2526sign%253D452b16de9add1bedea91465354bf6663&_=1633166764719&jsonpcallback=jsonp6",
"https://script.baertt.com/count2/callback?si=01a5a49e88b28760a54ee34bcc049106&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fs%253Fsignature%253DqbBkjWwN2L3nP684eLOEp6UomlPWCB5PgKY1gRyAEYpXDmeo0O%2526uid%253D58968471%2526phone_code%253D3a5bc3098635f75d03e952d21b4710f1%2526scid%253D40273802%2526time%253D1633167040%2526app_version%253D2.0.2%2526sign%253D9abd18d2b749cf9d26f673786b2a0af8&_=1633167069533&jsonpcallback=jsonp6",
"https://script.baertt.com/count2/callback?si=be00e1be566beb8f5cc1860b47d8e89b&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fs%253Fsignature%253DQqvZWbEKpA2yrNR1M0ggeLCMRONgTLByvGxa9VGjJl8gXB5keP%2526uid%253D58968471%2526phone_code%253D3a5bc3098635f75d03e952d21b4710f1%2526scid%253D40270055%2526time%253D1633167300%2526app_version%253D2.0.2%2526sign%253D7893590b93456eb852e18e9b6e29887a&_=1633167316300&jsonpcallback=jsonp6",
"https://script.baertt.com/count2/callback?si=735cb4e5494ae9d87626a54a6259857e&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fs%253Fsignature%253DQqvZWbEKpA2yrNR1M0ggeLCMRONgTLByvGxa9VGjJl8gXB5keP%2526uid%253D58968471%2526phone_code%253D3a5bc3098635f75d03e952d21b4710f1%2526scid%253D40270055%2526time%253D1633167300%2526app_version%253D2.0.2%2526sign%253D7893590b93456eb852e18e9b6e29887a&_=1633167507779&jsonpcallback=jsonp6",
"https://script.baertt.com/count2/callback?si=4faeef158128826bbe91232662813a77&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fs%253Fsignature%253DLrNmbVzoOlxeyXw4pvAoXjF3jQ5ghzqRnVYaM8ZkP3BAW9pJqD%2526uid%253D59018770%2526phone_code%253D8e2026cf72b550052ad3d970e691d799%2526scid%253D40275829%2526time%253D1633172350%2526app_version%253D2.0.2%2526sign%253Dcb34d8a3f23235da2f79967a0bbf6d0c&_=1633172504005&jsonpcallback=jsonp6",
"https://script.baertt.com/count2/callback?si=01a5a49e88b28760a54ee34bcc049106&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fs%253Fsignature%253D89NvAVZQolPrzM0a3XrwkNIbw0pguLgD6XE1gXDkJEqdw5xObL%2526uid%253D59018770%2526phone_code%253D8e2026cf72b550052ad3d970e691d799%2526scid%253D40261846%2526time%253D1633172372%2526app_version%253D2.0.2%2526sign%253Dfe42a423e4c8a485d808542f87a048a6&_=1633172604334&jsonpcallback=jsonp6",
"https://script.baertt.com/count2/callback?si=4faeef158128826bbe91232662813a77&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fs%253Fsignature%253Dk5Bv92bmMjwJEOP788KbvMUVJwr6TzjVzgY7gxne6rYKdpWVoR%2526uid%253D58968471%2526phone_code%253D3a5bc3098635f75d03e952d21b4710f1%2526scid%253D40273764%2526time%253D1633166637%2526app_version%253D2.0.2%2526sign%253D452b16de9add1bedea91465354bf6663&_=1633166764719&jsonpcallback=jsonp6",
"https://script.baertt.com/count2/callback?si=849e6a77c73e080289188f5ae87fdd41&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fs%253Fsignature%253DeQVjADm2pM09d8g4X6xDjbC0RoqJFAYDRVLalyGPYqnLbZRBXK%2526uid%253D59315605%2526phone_code%253D3a5bc3098635f75d03e952d21b4710f1%2526scid%253D40304057%2526time%253D1633681056%2526app_version%253D2.0.2%2526sign%253D74740c2c9d8c00574b2b8c54f7974eec&_=1633682545398&jsonpcallback=jsonp6",
	       "https://script.baertt.com/count2/callback?si=fe6cc8539bdaceadc38f92419f2127a9&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fs%253Fsignature%253DDX6wEBvPbxy02WLar25qDDsBDRGZHNBjxzAagRQY9OZjA5eJpl%2526uid%253D59058502%2526phone_code%253D42b45a5c0302d2f32b7d66b8e818a2b1%2526scid%253D40305493%2526time%253D1633683047%2526app_version%253D2.0.2%2526sign%253D22f02b0a16e16571c01a28a5a8530a36&_=1633683325189&jsonpcallback=jsonp6",
	       "https://script.baertt.com/count2/callback?si=640da50c954ecf25bd0659f79e530eb0&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fs%253Fsignature%253DnME6PzmgxDLdbpG4wz0QE2sXMkeAsRkJOJX1rjJNqwAQ0OoW9B%2526uid%253D59316449%2526phone_code%253D3a5bc3098635f75d03e952d21b4710f1%2526scid%253D40543233%2526time%253D1635271992%2526app_version%253D2.0.2%2526sign%253D6b67a9637c22a9085195876ad327c3b2&_=1635272032060&jsonpcallback=jsonp6",
	       "https://script.baertt.com/count2/callback?si=4c4f37e99d677042a503506bb19ea727&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fs%253Fsignature%253DX6AKVevx2zmNQOjaBJlNZvcBo5dwC6eEbg3ad93krDoJqw0WYn%2526uid%253D59316449%2526phone_code%253D3a5bc3098635f75d03e952d21b4710f1%2526scid%253D40528739%2526time%253D1635271899%2526app_version%253D2.0.2%2526sign%253De0e099fc7b89b37d0c5df284d47cf528&_=1635271913771&jsonpcallback=jsonp6",
	       "https://script.baertt.com/count2/callback?si=3575a241f55b718b18ce6d508b9e97f4&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fs%253Fsignature%253DdQOvnJNrgR0GzE9azZmX6Vi2d8NGhrDBOWRaV6yqY2lXojxeM8%2526uid%253D59316449%2526phone_code%253D3a5bc3098635f75d03e952d21b4710f1%2526scid%253D40514813%2526time%253D1635271820%2526app_version%253D2.0.2%2526sign%253Dec3c2a2e610914e8312450d535f43252&_=1635271894196&jsonpcallback=jsonp6",
	       "https://script.baertt.com/count2/callback?si=3ca4c832ebc8af0e3cf96b47857ccb73&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fws_zero%253Fsignature%253Dvg9Vr5WAX3dJejlq6GaJBYrooHnMR0DawoYk2PpNxbRZEDzmnL%2526scene_id%253Dplaced_top%2526share_id%253D59244810405613161635438490230%2526time%253D1635438491479&_=1635523182453&jsonpcallback=jsonp6",
	       "https://script.baertt.com/count2/callback?si=4c4f37e99d677042a503506bb19ea727&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fws_zero%253Fsignature%253DbDm0KxOyWQGgYNjrBV4jAzvD3Sy5Nz61oLpzq253Av968kJPEM%2526scene_id%253Dhome_feed%2526share_id%253D59244810405477021635438512249%2526time%253D1635438513312&_=1635523112814&jsonpcallback=jsonp6",
	       "https://script.baertt.com/count2/callback?si=eee4aae46b090f7572cc5ebc5d7eda17&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fws_zero%253Fsignature%253Do9xqzDrKG6wJnYZ5Ek4eLEjOMsozXMe1R3LXvBgNylVOMbA02W%2526scene_id%253Dhome_feed%2526share_id%253D59244810404619111635438521408%2526time%253D1635438522395&_=1635523052418&jsonpcallback=jsonp6",
	       "https://script.baertt.com/count2/callback?si=4c4f37e99d677042a503506bb19ea727&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fws_zero%253Fsignature%253D5NPeoJjl0pEAqLZYQM4q236Lltnxn067692Vrk3gBdwXDyWK8b%2526scene_id%253Dhome_feed%2526share_id%253D59488960405923781635523465437%2526time%253D1635523466364&_=1635523548170&jsonpcallback=jsonp6",
	       "https://script.baertt.com/count2/callback?si=eee4aae46b090f7572cc5ebc5d7eda17&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fws_zero%253Fsignature%253DG6vDYbegoP2Owr90x84KkNMpYiK3KnA4jVBXQnmqNLEMRyzZ3l%2526scene_id%253Dhome_feed%2526share_id%253D59488960405888561635523452239%2526time%253D1635523453085&_=1635523520742&jsonpcallback=jsonp6",
	       "https://script.baertt.com/count2/callback?si=3ca4c832ebc8af0e3cf96b47857ccb73&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fws_zero%253Fsignature%253Dl3Q0RNe9oPxVZ6pJMA7Enl82BiWMWqDaL2XGkOKdvDynjYb5Wz%2526scene_id%253Dhome_feed%2526share_id%253D59488960405898751635523438531%2526time%253D1635523439413&_=1635523480105&jsonpcallback=jsonp6",
	       "https://script.baertt.com/count2/callback?si=eee4aae46b090f7572cc5ebc5d7eda17&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fws_five%253Fsignature%253DjE9mdZzRG3lxVgkq8na3XgR26ub0n5b1yJ6vBKw0oObepWDXrM%2526scene_id%253Dhome_feed%2526share_id%253D59316415405849431635533323130%2526time%253D1635533324101&_=1635533405760&jsonpcallback=jsonp6",
	       "https://script.baertt.com/count2/callback?si=6d3bdf799d85342727351d8a87cbba37&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fws_five%253Fsignature%253DNRxPz8j0mdBYbOGDW91l263excnEzRn7yAXV56qwogJEpkLK2e%2526scene_id%253Dhome_feed%2526share_id%253D59316415405854351635533610604%2526time%253D1635533611610&_=1635533661340&jsonpcallback=jsonp6",
		   "https://script.baertt.com/count2/callback?si=ece7a82de85bc7459798e59121f3ed3a&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fws_three%253Fsignature%253D5NPeoJjl0pEAqLZYQM4q23eVmUnXEjG7692Vrk3gBdwXDyWK8b%2526scene_id%253Dplaced_top%2526share_id%253D59244823405948981635612971058%2526time%253D1635612972145&_=1635613016712&jsonpcallback=jsonp6",
		   "https://script.baertt.com/count2/callback?si=3ca4c832ebc8af0e3cf96b47857ccb73&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fws_three%253Fsignature%253Db8ne3myXKLv0lpjr2RaBJlr00TBPNdkaxP5OAdZD6NYMBgwzVQ%2526scene_id%253Dhome_feed%2526share_id%253D59244823405021551635613174176%2526time%253D1635613175152&_=1635613229907&jsonpcallback=jsonp6",
		   "https://script.baertt.com/count2/callback?si=1ca07515aafee2488291ffd89c19b31f&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fws_three%253Fsignature%253DJnXBk5Pw0ALYDjZx8G4Z3b0l0uKrYV67olKN2Q3yzm6VREOr9p%2526scene_id%253Dhome_feed%2526share_id%253D59244823404499411635613318444%2526time%253D1635613319584&_=1635613347653&jsonpcallback=jsonp6",
		"https://script.baertt.com/count2/callback?si=ece7a82de85bc7459798e59121f3ed3a&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fws_five%253Fsignature%253DQg9jzmlY6xZnPq3DGO1dEOe8QcGMe624XrLEVMWpRd8Neb0JkA%2526scene_id%253Dplaced_top%2526share_id%253D59243675405953711635618633824%2526time%253D1635618635020&_=1635618715566&jsonpcallback=jsonp6",
		"https://script.baertt.com/count2/callback?si=4c4f37e99d677042a503506bb19ea727&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fws_five%253Fsignature%253DEgVbkQOLMqvWm9RrG0a2eg9yytJAKjL73xy6doZeXBJzln85PD%2526scene_id%253Dhome_feed%2526share_id%253D59243675405944081635618666221%2526time%253D1635618667221&_=1635618807556&jsonpcallback=jsonp6",
		"https://script.baertt.com/count2/callback?si=1ca07515aafee2488291ffd89c19b31f&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fws_five%253Fsignature%253DNqylzJV6MGKj23RQPraW60d38ub3drg7EYOAgBndo9ZkDbepv5%2526scene_id%253Dhome_feed%2526share_id%253D59243675405960311635618652490%2526time%253D1635618653445&_=1635618759540&jsonpcallback=jsonp6",
		"https://script.baertt.com/count2/callback?si=2023f835bd66c153a708bb19c656d9ab&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fws_zero%253Fsignature%253D85edrWAo2wXgEPm3Qv7O8RgBkuznxmPalN06jZVDYx9qpkBKMb%2526scene_id%253Dhome_feed%2526share_id%253D59591190406105191635678110516%2526time%253D1635678111481&_=1635678217431&jsonpcallback=jsonp6",
		"https://script.baertt.com/count2/callback?si=4c4f37e99d677042a503506bb19ea727&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fws_zero%253Fsignature%253Dvg9Vr5WAX3dJejlq6GaJBYvMlFnNpPOawoYk2PpNxbRZEDzmnL%2526scene_id%253Dhome_feed%2526share_id%253D59591190406086531635678163724%2526time%253D1635678164784&_=1635678288849&jsonpcallback=jsonp6",
		"https://script.baertt.com/count2/callback?si=ece7a82de85bc7459798e59121f3ed3a&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fws_zero%253Fsignature%253DgbJynLeRd3VA29KYqE4gqGwmOTB6KOeaDNrGQloPXZzxvOB6jW%2526scene_id%253Dhome_feed%2526share_id%253D59591190406081061635678173108%2526time%253D1635678174033&_=1635678358651&jsonpcallback=jsonp6"
	     ]
let signss = [  "c66e89337e0f319cb245de5a8518748d",
		"cf21e7b069f34c513be6c3f10d98cbab",
		"950800e8ea79f4132372fcc760708ac0",
		"08b1210b22abd763d329a5dd0e7e31e6",
	        "cf21e7b069f34c513be6c3f10d98cbab",
	        "0998b5695b5f250b8b6d051380869a33",
	        "ad5a831dc117852060520619f6c96cd1",
	        "25e633dfddb50ed5912ef970bccb05e5",
		"5a2094a0100892d5cfd8f6930f7535b4",
		"5a2094a0100892d5cfd8f6930f7535b4",
		"5a2094a0100892d5cfd8f6930f7535b4",
		"f76bcbd606feb7c913a598f20f5b45f9",
		"01a5a49e88b28760a54ee34bcc049106",
		"1cd072402eec1a2490cdb767dd629222",
		"01a5a49e88b28760a54ee34bcc049106",
		"c9be5ce58ae9cfa958238177649d35f7",
	      "4faeef158128826bbe91232662813a77",
"01a5a49e88b28760a54ee34bcc049106",
"be00e1be566beb8f5cc1860b47d8e89b",
"735cb4e5494ae9d87626a54a6259857e",
"4faeef158128826bbe91232662813a77",
"01a5a49e88b28760a54ee34bcc049106",
"4faeef158128826bbe91232662813a77",
	      "849e6a77c73e080289188f5ae87fdd41",
	      "fe6cc8539bdaceadc38f92419f2127a9",
	      "640da50c954ecf25bd0659f79e530eb0",
	      "4c4f37e99d677042a503506bb19ea727",
	      "3575a241f55b718b18ce6d508b9e97f4",
	      "3ca4c832ebc8af0e3cf96b47857ccb73",
	      "4c4f37e99d677042a503506bb19ea727",
	      "eee4aae46b090f7572cc5ebc5d7eda17",
	      "4c4f37e99d677042a503506bb19ea727",
	      "eee4aae46b090f7572cc5ebc5d7eda17",
	      "3ca4c832ebc8af0e3cf96b47857ccb73",
	      "eee4aae46b090f7572cc5ebc5d7eda17",
	      "6d3bdf799d85342727351d8a87cbba37",
		  "ece7a82de85bc7459798e59121f3ed3a",
		  "3ca4c832ebc8af0e3cf96b47857ccb73",
		  "1ca07515aafee2488291ffd89c19b31f",
	      "ece7a82de85bc7459798e59121f3ed3a",
	      "4c4f37e99d677042a503506bb19ea727",
	      "1ca07515aafee2488291ffd89c19b31f",
	      "2023f835bd66c153a708bb19c656d9ab",
	      "4c4f37e99d677042a503506bb19ea727",
	      "ece7a82de85bc7459798e59121f3ed3a"
]
doShare();

async function doShare() {
	
	for(let i=0;i<42;i++){
		console.log("-------" + articles[i]);
		console.log("-------" + signss[i]);
        await postShareInfoa(articles[i],signss[i], i)
      }
	
	
}


//分享数据获取
async function getShareInfo() {
  try {
    if ($request.headers && $request.url.indexOf("script.baertt.com/count2") > -1) {
      var url = $request.url;
      var s_si = url.match(/si=(.*?)&/)[1];
      console.log("url:" + url);
      console.log("s_si:" + s_si);
      $.msg("中青分享", "", "数据获取成功");
      for(let i=1;i<2;i++){
        await postShareInfoa(url,s_si, i)
      }

      } else {
        $.notify("中青分享", "", "️据获取失败");
      }
    } catch (eor) {
    $.msg("中青数据获取失败", "", "️中青数据获取失败");
  }

  $.done();
}
async function postShareInfoa(o_url,o_si, num) {
    return new Promise((resolve) => {
        setTimeout(() => {
        var desclist = ["㊙️这是秘密分享~", "😁不能外传哦~", "☺️猜猜我是谁~","😆别点击太猛，容易feng","适当分享哈哈哈~","🈶广告位招租~","🔍开天眼查会员找木白姐姐~","🎈TG https://t.me/topstyle996","☎️TG频道 https://t.me/TopStyle2021","😆差不多得了，要黑号了~"];
        var n_si = randomsi();
        var iosV = parseInt(Math.random() * (14 - 11 + 1) + 11, 10);
        var n_url = o_url.replace(o_si, n_si);
        var header = {
            'Accept-Encoding': `gzip, deflate, br`,
            'Accept': `*/*`,
            'Connection': `keep-alive`,
            'Referer': `https://focus.youth.cn/`,
            'Host': `script.baertt.com`,
            'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS ${iosV}_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.7(0x18000730) NetType/WIFI Language/zh_CN`,
            'Accept-Language': `zh-cn`
        };

        let url = {
                url: n_url,
                headers: header,
            };
        $.get(url, async (err, resp, data) => {
            try {
                // $.msg(`【中青】分享阅读${num}\n`, "", "si:" + n_si);
                $.msg(`【中青】分享阅读${num}\n`, "", desclist[num-1]);
                console.log(data)
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve()
            }
        });

        return 0;
        }, 3000)
    })
}

//随机udid 小写
function randomsi() {
    function S4() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }
    return (S4() + S4() + S4() + S4() + S4() +  S4() + S4() + S4());
}

function Env(t, e) {  class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }
