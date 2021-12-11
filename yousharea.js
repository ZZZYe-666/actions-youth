/*
Author: Curtin
Date: 2021.7.4 22:25
中青分享阅读助力10次

使用方法：
Quantumuil X：添加远程重写a
[rewrite_remote]
https://gitee.com/curtinlv/qx/raw/master/rewrite/youth.conf, tag=中青 by Curtin, update-interval=172800, opt-parser=false, enabled=true

中青分享一篇文章到自己的微信上，自己点击一下即触发会自动完成10好有阅读奖励 500青豆/次。

 */
const $ = new Env("中青分享阅读-助力10次");
let articles = ["https://script.baertt.com/count2/callback?si=ece7a82de85bc7459798e59121f3ed3a&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fws_zero%253Fsignature%253DqEkWRmZyvzPO2bBdGX788Mg3qiVoy527l36xneA0QpKgM9NYL8%2526scene_id%253Dplaced_top%2526share_id%253D59501600406047291635697886250%2526time%253D1635697887148&_=1635699496415&jsonpcallback=jsonp6",
               "https://script.baertt.com/count2/callback?si=2023f835bd66c153a708bb19c656d9ab&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fws_zero%253Fsignature%253DNXjrme82G3An0wVvWpamvQApAsxnVyr1gq9dJKyL5YRxElM6Zo%2526scene_id%253Dplaced_top%2526share_id%253D59501600406048571635698006888%2526time%253D1635698007681&_=1635699538804&jsonpcallback=jsonp6",
               "https://script.baertt.com/count2/callback?si=4c4f37e99d677042a503506bb19ea727&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fws_zero%253Fsignature%253DzLbNjJ5wr0YegkWEG37orANVnUgBwM84DP6vqOn8lB2py9XRQx%2526scene_id%253Dhome_feed%2526share_id%253D59501600405824381635698017732%2526time%253D1635698018759&_=1635699579334&jsonpcallback=jsonp6",
	       "https://script.baertt.com/count2/callback?si=ece7a82de85bc7459798e59121f3ed3a&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fws_zero%253Fsignature%253D5NPeoJjl0pEAqLZYQM4q23RdJSnxWMk7692Vrk3gBdwXDyWK8b%2526scene_id%253Dplaced_top%2526share_id%253D59463690406052101635700147683%2526time%253D1635700148513&_=1635700181267&jsonpcallback=jsonp6",
		"https://script.baertt.com/count2/callback?si=2023f835bd66c153a708bb19c656d9ab&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fws_zero%253Fsignature%253DbD6x5nzGA2pvRerWXy4Q8bN6EIV9Qrd1Og8LdMkQlPVqJYN0Bo%2526scene_id%253Dplaced_top%2526share_id%253D59463690406052661635700157613%2526time%253D1635700158527&_=1635700208477&jsonpcallback=jsonp6",
		"https://script.baertt.com/count2/callback?si=4c4f37e99d677042a503506bb19ea727&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fws_zero%253Fsignature%253D5NPeoJjl0pEAqLZYQM4q23Rq2SnxWMk7692Vrk3gBdwXDyWK8b%2526scene_id%253Dplaced_top%2526share_id%253D59463690406054101635700166981%2526time%253D1635700167786&_=1635700224651&jsonpcallback=jsonp6",
		"https://script.baertt.com/count2/callback?si=29c5c2381ebd3ba26c1438e15ea1c487&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fs%253Fsignature%253DXwoQBWe23qDAVz946lJQVyu26mbYTkEmoXnavNyb8EMlgYnm6k%2526uid%253D59316411%2526phone_code%253D101073e1dbe81e7436dc5af3c917a010%2526scid%253D40629511%2526time%253D1635870575%2526app_version%253D2.0.2%2526sign%253D48446247e29e88b49d79f7e694a48ec9&_=1635870698055&jsonpcallback=jsonp6",
	       "https://script.baertt.com/count2/callback?si=4c4f37e99d677042a503506bb19ea727&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fs%253Fsignature%253DKYJBMEDexQprwO0aJBYYGKinyV0jCl8ENPAaj5zbg8RLkP9oXd%2526uid%253D59316411%2526phone_code%253D101073e1dbe81e7436dc5af3c917a010%2526scid%253D40617429%2526time%253D1635870737%2526app_version%253D2.0.2%2526sign%253Db8d97b45651d7ff13737397f8efc6550&_=1635870810452&jsonpcallback=jsonp6",
		"https://script.baertt.com/count2/callback?si=91a27a2be1c451f3dc0da8f0575ae39f&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fs%253Fsignature%253DVOZvBzYN5rkDxgX7YY5O0Gu2nM9VTVOPr8k7L3yAP6WMnmlGK9%2526uid%253D59316411%2526phone_code%253D101073e1dbe81e7436dc5af3c917a010%2526scid%253D40646867%2526time%253D1635870924%2526app_version%253D2.0.2%2526sign%253D2cb8f08768e228ac1a9dc1461e0356b7&_=1635870939982&jsonpcallback=jsonp6",
		"https://script.baertt.com/count2/callback?si=29c5c2381ebd3ba26c1438e15ea1c487&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fws_seven%253Fsignature%253DzLbNjJ5wr0YegkWEG37orAvXKugjXZZ4DP6vqOn8lB2py9XRQx%2526scene_id%253Dplaced_top%2526share_id%253D59227867406301171635871320687%2526time%253D1635871322339&_=1635871468559&jsonpcallback=jsonp6",
		"https://script.baertt.com/count2/callback?si=91a27a2be1c451f3dc0da8f0575ae39f&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fws_seven%253Fsignature%253DM3YJXEvNgO8W5zRwpk4VZ5vRwsLJpMM42mZ69xB0loAqGPQnLb%2526scene_id%253Dhome_feed%2526share_id%253D59227867406078771635871367306%2526time%253D1635871368699&_=1635871501243&jsonpcallback=jsonp6",
		"https://script.baertt.com/count2/callback?si=0ae6d9834dc5f7d7839ea602033d669a&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fws_seven%253Fsignature%253DzLbNjJ5wr0YegkWEG37orRvjBugjXZZ4DP6vqOn8lB2py9XRQx%2526scene_id%253Dhome_feed%2526share_id%253D59227867405448171635871384313%2526time%253D1635871385807&_=1635871558860&jsonpcallback=jsonp6",
		"https://script.baertt.com/count2/callback?si=29c5c2381ebd3ba26c1438e15ea1c487&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fws_two%253Fsignature%253DNXjrme82G3An0wVvWpamvoORmHxBNPV1gq9dJKyL5YRxElM6Zo%2526scene_id%253Dhome_feed%2526share_id%253D59746302401131341635874536588%2526time%253D1635874537784&_=1635874588317&jsonpcallback=jsonp6",
		"https://script.baertt.com/count2/callback?si=649c9ae52a87668261d3fbf74fb9fbcb&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fws_two%253Fsignature%253DZry0KPXd5RYDQVznvq4vzpAOvcODPmR4GlE6go9mAJkeON2wjW%2526scene_id%253Dhome_feed%2526share_id%253D59746302406310231635874622777%2526time%253D1635874623755&_=1635874679468&jsonpcallback=jsonp6",
		"https://script.baertt.com/count2/callback?si=91a27a2be1c451f3dc0da8f0575ae39f&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fws_two%253Fsignature%253DV5EWkpzrBZdXGYOlmQ4X6dVLxs0JPxGaoK2nvbNxqe03PjJw9A%2526scene_id%253Dhome_feed%2526share_id%253D59746302406399291635874649015%2526time%253D1635874649888&_=1635874717270&jsonpcallback=jsonp6",
		"https://script.baertt.com/count2/callback?si=29c5c2381ebd3ba26c1438e15ea1c487&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fws_one%253Fsignature%253DJnXBk5Pw0ALYDjZx8G4Z30LQnuK2BqY7olKN2Q3yzm6VREOr9p%2526scene_id%253Dhome_feed%2526share_id%253D59183321406627781635958821280%2526time%253D1635958822269&_=1635961047317&jsonpcallback=jsonp6",
		"https://script.baertt.com/count2/callback?si=ee1be1ede59195896dca837a8c481d82&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fws_one%253Fsignature%253DNXjrme82G3An0wVvWpamvlPMxsxZpvE1gq9dJKyL5YRxElM6Zo%2526scene_id%253Dhome_feed%2526share_id%253D59183321406601851635960934084%2526time%253D1635960935240&_=1635961081900&jsonpcallback=jsonp6",
		"https://script.baertt.com/count2/callback?si=4c4f37e99d677042a503506bb19ea727&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fws_one%253Fsignature%253DNXjrme82G3An0wVvWpamvl8bpFxZpvE1gq9dJKyL5YRxElM6Zo%2526scene_id%253Dhome_feed%2526share_id%253D59183321406632851635960950492%2526time%253D1635960951401&_=1635961161249&jsonpcallback=jsonp6",
		"https://script.baertt.com/count2/callback?si=29c5c2381ebd3ba26c1438e15ea1c487&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fws_five%253Fsignature%253DNXjrme82G3An0wVvWpamvl835txDEmy1gq9dJKyL5YRxElM6Zo%2526scene_id%253Dplaced_top%2526share_id%253D59244825406633901636046731470%2526time%253D1636046732423&_=1636046895022&jsonpcallback=jsonp6",
		"https://script.baertt.com/count2/callback?si=ee1be1ede59195896dca837a8c481d82&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fws_five%253Fsignature%253DkzYx0ngZLqblOM65PN7LKQEnNfjdyWz4E3GQoepJDX9dv8AB2W%2526scene_id%253Dhome_feed%2526share_id%253D59244825406782501636046828382%2526time%253D1636046829516&_=1636046937760&jsonpcallback=jsonp6",
		"https://script.baertt.com/count2/callback?si=bc93471059bf5e8f3929e14245f4efa2&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fws_five%253Fsignature%253D8ebgqKwdz5B3lN0vmO4GLD3EnUv3WbD7EZXnGLQox9rJAkWR2Y%2526scene_id%253Dhome_feed%2526share_id%253D59244825406716141636046840486%2526time%253D1636046841515&_=1636047116906&jsonpcallback=jsonp6",
		"https://script.baertt.com/count2/callback?si=29c5c2381ebd3ba26c1438e15ea1c487&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fws_zero%253Fsignature%253Dl3Q0RNe9oPxVZ6pJMA7En2yq2uWkzyKaL2XGkOKdvDynjYb5Wz%2526scene_id%253Dplaced_top%2526share_id%253D59591190406639131636050514451%2526time%253D1636050515403&_=1636050543017&jsonpcallback=jsonp6",
		"https://script.baertt.com/count2/callback?si=29c5c2381ebd3ba26c1438e15ea1c487&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fws_zero%253Fsignature%253DZry0KPXd5RYDQVznvq4vzre2YSObN8j4GlE6go9mAJkeON2wjW%2526scene_id%253Dhome_feed%2526share_id%253D59203440406809101636142371%2526time%253D1636142371&_=1636142468136&jsonpcallback=jsonp6",
		"https://script.baertt.com/count2/callback?si=29c5c2381ebd3ba26c1438e15ea1c487&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fws_zero%253Fsignature%253DbD6x5nzGA2pvRerWXy4Q8rNEkcVpo8q1Og8LdMkQlPVqJYN0Bo%2526scene_id%253Dhome_feed%2526share_id%253D59203440406907831636142390%2526time%253D1636142390&_=1636142495657&jsonpcallback=jsonp6",
		"https://script.baertt.com/count2/callback?si=29c5c2381ebd3ba26c1438e15ea1c487&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fws_nine%253Fsignature%253Do9xqzDrKG6wJnYZ5Ek4eLqGwMioQ3Lp1R3LXvBgNylVOMbA02W%2526scene_id%253Dhome_feed%2526share_id%253D59523509406903151636143029240%2526time%253D1636143030929&_=1636143064203&jsonpcallback=jsonp6",
		"https://script.baertt.com/count2/callback?si=f7faeb6da5bff886e6275fb29c12ce9c&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fws_eight%253Fsignature%253DbDm0KxOyWQGgYNjrBV4jA2wmJhy6rMJ1oLpzq253Av968kJPEM%2526scene_id%253Dhome_feed%2526share_id%253D59819148406945821636183772703%2526time%253D1636183773856&_=1636183843946&jsonpcallback=jsonp6",
		"https://script.baertt.com/count2/callback?si=f7faeb6da5bff886e6275fb29c12ce9c&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fws_eight%253Fsignature%253DpznrQKZ06xYeGkD5yA4wzRwqZsXrKkp18Nm2bvMqRWw9gPdLVO%2526scene_id%253Dhome_feed%2526share_id%253D59819148406934011636183791257%2526time%253D1636183792208&_=1636183853768&jsonpcallback=jsonp5",
		"https://script.baertt.com/count2/callback?si=f7faeb6da5bff886e6275fb29c12ce9c&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fws_eight%253Fsignature%253DbDjmABzyXE32GNxlOY4pv6wqyS3oneYaZ9vnQ58wq06peMdkrP%2526scene_id%253Dhome_feed%2526share_id%253D59819148406945801636183806928%2526time%253D1636183807800&_=1636183865044&jsonpcallback=jsonp6",
		"https://script.baertt.com/count2/callback?si=0deae8012974c48925841bc2a5b974fd&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fws_four%253Fsignature%253DnG63ezAQDowMB0vlYg4k0mzmJspdj097L8KN5yR9XpjPOxrbdE%2526scene_id%253Dplaced_top%2526share_id%253D59287664407815831636746040692%2526time%253D1636746041963&_=1636746161523&jsonpcallback=jsonp6",
		"https://script.baertt.com/count2/callback?si=de064e02a83f13c134593aafc9f84e75&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fws_four%253Fsignature%253DjE9mdZzRG3lxVgkq8na3XAAkZTbDl3e1yJ6vBKw0oObepWDXrM%2526scene_id%253Dhome_feed%2526share_id%253D59287664407922971636746061963%2526time%253D1636746062793&_=1636746220281&jsonpcallback=jsonp6",
		"https://script.baertt.com/count2/callback?si=c62da39836bbde75b0905938e42dcaa3&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fws_four%253Fsignature%253DPDAM2LbdQB6J8ljGNZazZzlW2H2YLjoaKX0mkV39oyW5xrzpYe%2526scene_id%253Dhome_feed%2526share_id%253D59287664407222021636746070233%2526time%253D1636746071060&_=1636746281308&jsonpcallback=jsonp6",
		"https://script.baertt.com/count2/callback?si=c4d234b6c88930369619ce073b9c1942&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fws_four%253Fsignature%253DqEkWRmZyvzPO2bBdGX788NbKRiVjper7l36xneA0QpKgM9NYL8%2526scene_id%253Dhome_feed%2526share_id%253D59287664407852031636746323012%2526time%253D1636746323960&_=1636746369150&jsonpcallback=jsonp6",
		"https://script.baertt.com/count2/callback?si=1926266a7dc0817a3c97c53803779a34&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fws_eight%253Fsignature%253Dvg9Vr5WAX3dJejlq6GaJBYJzGurxgQyawoYk2PpNxbRZEDzmnL%2526scene_id%253Dhome_feed%2526share_id%253D60421408405661551637502643973%2526time%253D1637502645061&_=1637502742649&jsonpcallback=jsonp6",
		"https://script.baertt.com/count2/callback?si=1926266a7dc0817a3c97c53803779a34&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fws_eight%253Fsignature%253DNXjrme82G3An0wVvWpamvEMlZHNXyAW1gq9dJKyL5YRxElM6Zo%2526scene_id%253Dplaced_top%2526share_id%253D60421408409035121637502661499%2526time%253D1637502662788&_=1637502767329&jsonpcallback=jsonp6",
		"https://script.baertt.com/count2/callback?si=1926266a7dc0817a3c97c53803779a34&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fws_eight%253Fsignature%253DB3MvlKp05kgOXPA9oG7nDNn0EI3m0Z51erYEjxzQLWmw8DnyJb%2526scene_id%253Dplaced_top%2526share_id%253D60421408409037581637502674138%2526time%253D1637502675272&_=1637502787104&jsonpcallback=jsonp6",
		"https://script.baertt.com/count2/callback?si=29c4308f206a0addb70a3db84ffeb997&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fws_seven%253Fsignature%253DEgVbkQOLMqvWm9RrG0a2eD6RlFJOVWZ73xy6doZeXBJzln85PD%2526scene_id%253Dplaced_top%2526share_id%253D59826047412056901639241270506%2526time%253D1639241273007&_=1639241399133&jsonpcallback=jsonp6",
		"https://script.baertt.com/count2/callback?si=f5458c9d75a679fea14beb2d9779cfb1&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fws_seven%253Fsignature%253DDJ5qQLk6jVvNWEzxlO70KjxwEtxkXor40BGyPngp83Zm9KYreM%2526scene_id%253Dhome_feed%2526share_id%253D59826047410075671639241291147%2526time%253D1639241292592&_=1639241478378&jsonpcallback=jsonp6",
		"https://script.baertt.com/count2/callback?si=63931a7b39ee77109ed47289a925eeef&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fws_seven%253Fsignature%253DjEPYDGOJ685MLWwrbNaAYm0VOFG2wDRal3zVgQoedxKAkR20pB%2526scene_id%253Dhome_feed%2526share_id%253D59826047411888991639241303005%2526time%253D1639241304094&_=1639241592385&jsonpcallback=jsonp6",
		"https://script.baertt.com/count2/callback?si=29c5c2381ebd3ba26c1438e15ea1c487&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fws_zero%253Fsignature%253DZry0KPXd5RYDQVznvq4vzre2YSObN8j4GlE6go9mAJkeON2wjW%2526scene_id%253Dhome_feed%2526share_id%253D59203440406809101636142371%2526time%253D1636142371&_=1636142468136&jsonpcallback=jsonp6",
		"https://script.baertt.com/count2/callback?si=29c5c2381ebd3ba26c1438e15ea1c487&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fws_zero%253Fsignature%253DbD6x5nzGA2pvRerWXy4Q8rNEkcVpo8q1Og8LdMkQlPVqJYN0Bo%2526scene_id%253Dhome_feed%2526share_id%253D59203440406907831636142390%2526time%253D1636142390&_=1636142495657&jsonpcallback=jsonp6",
		"https://script.baertt.com/count2/callback?si=29c5c2381ebd3ba26c1438e15ea1c487&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fws_nine%253Fsignature%253Do9xqzDrKG6wJnYZ5Ek4eLqGwMioQ3Lp1R3LXvBgNylVOMbA02W%2526scene_id%253Dhome_feed%2526share_id%253D59523509406903151636143029240%2526time%253D1636143030929&_=1636143064203&jsonpcallback=jsonp6",
		"https://script.baertt.com/count2/callback?si=b23cd2a2034104d494cb45284ce35683&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fs%253Fsignature%253DZRpgeBYKPdGlvj24GLGvwBSzPrGViqok8Nn7X96VqmbxkDwr0n%2526uid%253D54763153%2526phone_code%253D3a5bc3098635f75d03e952d21b4710f1%2526scid%253D41204758%2526time%253D1639243417%2526app_version%253D2.0.2%2526sign%253D71256282aec91ffa321087c715541594&_=1639243772291&jsonpcallback=jsonp6",
		"https://script.baertt.com/count2/callback?si=29c4308f206a0addb70a3db84ffeb997&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fs%253Fsignature%253DVOZvBzYN5rkDxgX7YYxvGnTMdzwkFVG6v8k7L3yAP6WMnmlGK9%2526uid%253D54763153%2526phone_code%253D3a5bc3098635f75d03e952d21b4710f1%2526scid%253D41204759%2526time%253D1639243435%2526app_version%253D2.0.2%2526sign%253Df6f87ef8643a9dd3043696acde7efb43&_=1639243825135&jsonpcallback=jsonp6",
		"https://script.baertt.com/count2/callback?si=f7599d6211bde89ab55d720afbb589ed&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fs%253Fsignature%253D2E96MJNGrnvW8pX1dEpeRxiqbk8Xuelmkp645okQ0dyYRDBzxL%2526uid%253D54763153%2526phone_code%253D3a5bc3098635f75d03e952d21b4710f1%2526scid%253D41190417%2526time%253D1639243444%2526app_version%253D2.0.2%2526sign%253Dc2c00744d5a4494415cef9bd073e0a65&_=1639243867555&jsonpcallback=jsonp6"
	       ]
let signss = [  "ece7a82de85bc7459798e59121f3ed3a",
		"2023f835bd66c153a708bb19c656d9ab",
		"4c4f37e99d677042a503506bb19ea727",
	      "ece7a82de85bc7459798e59121f3ed3a",
		"2023f835bd66c153a708bb19c656d9ab",
		"4c4f37e99d677042a503506bb19ea727",
	      "29c5c2381ebd3ba26c1438e15ea1c487",
	      "4c4f37e99d677042a503506bb19ea727",
	      "91a27a2be1c451f3dc0da8f0575ae39f",
	      "29c5c2381ebd3ba26c1438e15ea1c487",
	      "91a27a2be1c451f3dc0da8f0575ae39f",
	      "0ae6d9834dc5f7d7839ea602033d669a",
	      "29c5c2381ebd3ba26c1438e15ea1c487",
	      "649c9ae52a87668261d3fbf74fb9fbcb",
	      "91a27a2be1c451f3dc0da8f0575ae39f",
	      "29c5c2381ebd3ba26c1438e15ea1c487",
	      "ee1be1ede59195896dca837a8c481d82",
	      "4c4f37e99d677042a503506bb19ea727",
	      "29c5c2381ebd3ba26c1438e15ea1c487",
	      "ee1be1ede59195896dca837a8c481d82",
	      "bc93471059bf5e8f3929e14245f4efa2",
	      "29c5c2381ebd3ba26c1438e15ea1c487",
	      "649c9ae52a87668261d3fbf74fb9fbcb",
	      "4c4f37e99d677042a503506bb19ea727",
	      "29c5c2381ebd3ba26c1438e15ea1c487",
	      "ece7a82de85bc7459798e59121f3ed3a",
	      "2023f835bd66c153a708bb19c656d9ab",
	      "91a27a2be1c451f3dc0da8f0575ae39f",
	      "c4d234b6c88930369619ce073b9c1942",
	      "c62da39836bbde75b0905938e42dcaa3",
	      "de064e02a83f13c134593aafc9f84e75",
	      "0deae8012974c48925841bc2a5b974fd",
	      "c62da39836bbde75b0905938e42dcaa3",
	      "de064e02a83f13c134593aafc9f84e75",
	      "ee1be1ede59195896dca837a8c481d82",
	      "29c4308f206a0addb70a3db84ffeb997",
	      "f5458c9d75a679fea14beb2d9779cfb1",
	      "63931a7b39ee77109ed47289a925eeef",
	      "29c5c2381ebd3ba26c1438e15ea1c487",
		"63931a7b39ee77109ed47289a925eeef",
		"ee1be1ede59195896dca837a8c481d82",
	      "b23cd2a2034104d494cb45284ce35683",
	      "29c4308f206a0addb70a3db84ffeb997",
	      "f7599d6211bde89ab55d720afbb589ed"
]
doShare();

async function doShare() {
	
	for(let i=0;i<44;i++){
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
