export type WorldInfo = {
    id: number;
    name: string;
    description: string;
    status: WorldStatus[]
}

export type WorldStatus = {
    id: number;
    is_anomaly: boolean;
    status_name: string;
    anomaly_level: number;
    description: string;
    image: string;
    weight: number;
}

export const WORLD_LIST: WorldInfo[] = [
    {
        id: 1,
        name: "無限団地",
        description: "無限に続くかのように思える巨大な団地",
        status: [
            {
                id: 1,
                is_anomaly: false,
                anomaly_level: 10,
                status_name: "正常",
                description: "どこまで行っても同じ団地が続いている。\n灰色の建物が規則正しく並び、遠くを見ても終わりが見えない。\n空は曇っていて、太陽の位置すらよく分からない。\n人の姿は見えないが、洗濯物やベランダの植木などから生活の気配だけは感じられる。\n静かな場所だ。\n不思議なくらい静かだが、それ以外に特別おかしなところはない。",
                image: "normal_1.png",
                weight: 80,
            },
            {
                id: 2,
                is_anomaly: true,
                anomaly_level: 60,
                status_name: "異常",
                description: "どこまで行っても同じ団地が続いている。\n灰色の建物は地平線の彼方まで並び、その景色は見渡す限り変わらない。\nだが空を見上げると、そこにも団地がある。\n曇った赤い空に、地上と同じ団地群が上下逆さまのまま広がっている。\nそして窓の奥には、人ではない何かがいる。\n黒い影のようなものが無数の窓からこちらを見つめている。\n静かなはずなのに、視線だけがどこまでも追いかけてくる。",
                image: "anomaly_1.png",
                weight: 20,
            },
        ]
    },
    {
        id: 2,
        name: "きれいな草原",
        description: "巨大な玩具が点在する広大な草原",
        status: [
            {
                id: 1,
                is_anomaly: false,
                anomaly_level: 10,
                status_name: "正常",
                description: "見渡す限りの草原に、巨大なおもちゃやチェスの駒が点在している。\n空は明るく、風景全体は穏やかな雰囲気に包まれている。\n現実ではありえない大きさのものばかりだが、不思議と違和感はない。\n遠くまで同じ景色が続き、静かな時間が流れている。",
                image: "normal_1.png",
                weight: 80,
            },
            {
                id: 2,
                is_anomaly: true,
                anomaly_level: 60,
                status_name: "異常？",
                description: "見渡す限りの草原に、巨大なおもちゃやチェスの駒が点在している。\n空は明るいままだが、気付くとすべてのおもちゃがこちらを向いている。\n遠くの地平線にも同じ姿が並び、その数はどこまでも続いている。\n誰もいないはずなのに、無数の視線だけがこちらへ向けられている。",
                image: "anomaly_1.png",
                weight: 20,
            }
        ]
    },
    {
        id: 3,
        name: "エスカレーター",
        description: "無限に広がるエスカレーター",
        status: [
            {
                id: 1,
                is_anomaly: false,
                anomaly_level: 10,
                status_name: "正常",
                description: "巨大な空間に、無数のエスカレーターが張り巡らされている。\n白い柱とガラスの通路がどこまでも続き、自然光が静かに差し込んでいる。\n現実ではありえないほど複雑な構造をしているが、不思議と圧迫感はない。\n人の姿はほとんど見当たらず、エスカレーターだけが静かに動き続けている。",
                image: "normal_1.png",
                weight: 80,
            },
            {
                id: 2,
                is_anomaly: true,
                anomaly_level: 60,
                status_name: "異常",
                description: "巨大な空間に、無数のエスカレーターが張り巡らされている。\n白い柱とガラスの通路がどこまでも続き、景色そのものは変わらない。\nだが気付くと、あらゆる場所に人影が立っている。\n遠くのエスカレーターにも、見上げた先の通路にも、黒い人影がこちらを見ている。\n目の前にも一人立っているが、振り返る様子はない。\n静かな空間のはずなのに、どこにいても視線だけが途切れない。",
                image: "anomaly_1.png",
                weight: 20,
            }
        ]
    },
    {
        id: 4,
        name: "聖なる場所",
        description: "どこまでも続く白い大理石の地面と青空と巨大な石像",
        status: [
            {
                id: 1,
                is_anomaly: false,
                anomaly_level: 10,
                status_name: "正常",
                description: "どこまでも白い大理石の地面が続いている。\n見上げれば澄み切った青空が広がり、周囲には壁も建物も存在しない。\n遠くの地平線には、山ほどの大きさを持つ巨大な石像が一体だけ静かに佇んでいる。\n像は斜めを向いたまま動くことなく、この広大な世界を見守っているように見える。\n静かで穏やかな、不思議な風景だ。",
                image: "normal_1.png",
                weight: 90,
            },
            {
                id: 2,
                is_anomaly: true,
                anomaly_level: 60,
                status_name: "異常",
                description: "どこまでも白い大理石の地面が続いている。\n景色そのものは変わらない。\nだが空は血のように赤く染まり、遠くの巨大な石像はこちらを見つめている。\n像は以前より少しだけ近く見える。\n気のせいだと思いたいが、黒く染まった瞳からは血の涙が流れ続けている。\n何も動いていないはずなのに、視線だけがいつまでも離れない。",
                image: "anomaly_1.png",
                weight: 10,
            }
        ]
    },
    {
        id: 5,
        name: "長い廊下",
        description: "永遠に続くかのような長い廊下",
        status: [
            {
                id: 1,
                is_anomaly: false,
                anomaly_level: 10,
                status_name: "正常",
                description: "どこまでも続く薄暗い廊下。\n壁には古いポスターが貼られ、床には埃が積もっている。\n遠くには非常口の緑色の明かりが見えるが、近寄ろうとすると距離だけが遠ざかっていく。\n誰もいないはずなのに、どこからか足音が聞こえる。\nただ歩くだけで、時が経つのも忘れてしまいそうだ。",
                image: "normal_1.png",
                weight: 70,
            },
            {
                id: 2,
                is_anomaly: true,
                anomaly_level: 30,
                status_name: "異常",
                description: "どこまでも続く薄暗い廊下。\n壁のポスターや遠くの非常口は変わらない。\nだが、非常口へ続く廊下の途中に一人の人影が立っている。\n距離は遠いままなのに、その存在だけははっきりと分かる。\n動いている様子はない。\nそれでも目を離すたびに、本当にさっきと同じ場所に立っているのか分からなくなる。\n出口の緑色の光は静かに灯り続けているが、その先へ進んでいいのかは分からない。",
                image: "anomaly_1.png",
                weight: 15,
            },
            {
                id: 3,
                is_anomaly: true,
                anomaly_level: 120,
                status_name: "髪",
                description: "  \nいる",
                image: "anomaly_2.png",
                weight: 10,
            },
            {
                id: 4,
                is_anomaly: true,
                anomaly_level: 999,
                status_name: "ーーー",
                description: "見てる見てる見てる見てる見てる見てる見てる見てる見てる見てる見てる見てる見てる見てる見てる見てる見てる見てる見てる",
                image: "anomaly_3.png",
                weight: 5,
            }
        ]
    },
    {
        id: 6,
        name: "惑星の見える草原",
        description: "見上げれば巨大な惑星が浮かぶ草原",
        status: [
            {
                id: 1,
                is_anomaly: false,
                anomaly_level: 10,
                status_name: "正常",
                description: "見渡す限りの草原が広がっている。\n空はどこまでも青く、穏やかな風が吹いている。\n頭上には巨大な惑星がいくつも浮かんでいる。\n本来なら存在できないほど近い距離にあるが、不思議と恐ろしさは感じない。\n遠くの山々と巨大な惑星が並ぶ景色は、まるで別の宇宙を眺めているようだ。",
                image: "normal_1.png",
                weight: 80,
            },
            {
                id: 2,
                is_anomaly: true,
                anomaly_level: 60,
                status_name: "異常",
                description: "見渡す限りの草原が広がっている。\n空は赤く染まり、巨大な惑星が頭上を埋め尽くしている。\n惑星はあまりにも近く、その表面の模様まではっきりと見える。\n今にも衝突しそうな距離にあるはずなのに、世界は静かなままだ。\n草原には風が吹いている。\nそれなのに、空だけが何かおかしい。",
                image: "anomaly_1.png",
                weight: 20,
            }
        ]
    },
    {
        id: 7,
        name: "線路のない駅",
        description: "線路が存在しない不思議な駅のホーム",
        status: [
            {
                id: 1,
                is_anomaly: false,
                anomaly_level: 10,
                status_name: "正常",
                description: "夕暮れの空の下、静かな駅のホームがどこまでも続いている。\nベンチや自動販売機、案内板や屋根付きの待合スペースもあり、一見するとどこにでもある駅のように見える。\nだが、この世界には線路が存在しない。\nホームの先には空と地平線だけが広がっている。\nそれでも不思議なことに、この場所はきちんと駅として成り立っているように感じられる。\nただ静かな夕焼けの中で、ホームだけがそこにあり続けている。",
                image: "normal_1.png",
                weight: 55,
            },
            {
                id: 2,
                is_anomaly: true,
                anomaly_level: 15,
                status_name: "電光掲示板",
                description: "夕暮れの空の下、静かな駅のホームがどこまでも続いている。\nベンチや自動販売機、案内板も変わらない。\nだがホームの上には電光掲示板が吊り下げられている。\n表示されるべき時刻や行先はどこにもない。\n画面は真っ黒なまま灯りもついていない。\nこの世界には列車も線路も存在しないはずなのに、その掲示板だけが何かを待ち続けているように見える。",
                image: "normal_2.png",
                weight: 15,
            },
            {
                id: 3,
                is_anomaly: true,
                anomaly_level: 15,
                status_name: "到着",
                description: "夕暮れの空の下、静かな駅のホームがどこまでも続いている。\nベンチや自動販売機、案内板も変わらない。\nだが、ホームの左側には一両の電車が停車している。\nこの世界には本来、線路が存在しないはずだ。\nそれでも電車は当然のようにそこにあり、誰かを待っているようにも見える。\n行先表示は読めず、車内にも人の姿は見当たらない。\nいつからそこにいたのかは分からない。",
                image: "normal_3.png",
                weight: 15,
            },
            {
                id: 4,
                is_anomaly: true,
                anomaly_level: 180,
                status_name: "待ち人",
                description: "夕暮れの空の下、静かな駅のホームがどこまでも続いている。\nベンチや自動販売機、案内板も変わらない。\nだがホームの途中に、一人の人影が立っている。\n後ろ姿は普通の人間に見える。\nしかし首だけが異様に長く、不自然なほど高い位置に頭がある。\nこちらを見ているのかは分からない。\nそれでも目を離すたびに、少しだけ近付いているような気がする。",
                image: "anomaly_1.png",
                weight: 10,
            }
        ]
    },
    {
        id: 8,
        name: "湖上図書館",
        description: "静かな湖の中央に建てられた図書館",
        status: [
            {
                id: 1,
                is_anomaly: false,
                anomaly_level: 10,
                status_name: "正常",
                description: "夕暮れの湖の中央に、一棟の図書館が建っている。\n木製の橋が入口まで続き、館内には暖かな灯りが灯っている。\n湖面は鏡のように穏やかで、空や建物を静かに映している。\n周囲には山々が広がり、人の姿は見当たらない。\nただ本と静寂だけが、この場所を満たしている。",
                image: "normal_1.png",
                weight: 70,
            },
            {
                id: 2,
                is_anomaly: true,
                anomaly_level: 60,
                status_name: "双月",
                description: "夕暮れの湖の中央に、一棟の図書館が建っている。\n橋や湖面、館内の灯りは変わらない。\nだが空には月が二つ浮かんでいる。\nどちらも自然にそこに存在しているように見える。\n湖面には二つの月が静かに映り込み、景色は以前よりも幻想的になっている。\n不思議ではあるが、どこか美しい光景だ。",
                image: "anomaly_1.png",
                weight: 20,
            },
            {
                id: 3,
                is_anomaly: true,
                anomaly_level: 180,
                status_name: "黒天",
                description: "夕暮れの湖の中央に、一棟の図書館が建っている。\n橋や湖面、館内の灯りは変わらない。\nだが空は深い黒に覆われ、その中心は渦を巻くように暗く沈み込んでいる。\n見上げていると、空そのものがどこかへ吸い込まれているように感じられる。\n湖面にもその暗闇が映り込み、静かな景色に重い圧迫感を与えている。\nそれでも図書館の灯りだけは消えることなく輝き続けている。",
                image: "anomaly_2.png",
                weight: 10,
            }
        ]
    },
    {
        id: 9,
        name: "団地の廊下",
        description: "どこまでも続く薄暗い団地の廊下",
        status: [
            {
                id: 1,
                is_anomaly: false,
                anomaly_level: 10,
                status_name: "正常",
                description: "薄暗い団地の廊下がどこまでも続いている。\n向かいにも同じような団地が並び、静かな夜の空気だけが流れている。\nすべての部屋の扉は閉じられ、人の気配はない。\n照明は一定の間隔で灯り、ただ遠くの消失点へと続いている。",
                image: "normal_1.png",
                weight: 50,
            },
            {
                id: 2,
                is_anomaly: true,
                anomaly_level: 20,
                status_name: "開いた扉",
                description: "薄暗い団地の廊下がどこまでも続いている。\n向かいにも同じような団地が並び、静かな夜の空気だけが流れている。\nすべての部屋の扉は閉じられ、人の気配はない。\nだが、一室だけ扉が大きく開いている。\n中は暗く、何も見えない。\n誰かが出てきたのか、それとも待っているのかは分からない。",
                image: "anomaly_1.png",
                weight: 20,
            },
            {
                id: 3,
                is_anomaly: true,
                anomaly_level: 40,
                status_name: "人影",
                description: "薄暗い団地の廊下がどこまでも続いている。\n向かいにも同じような団地が並び、静かな夜の空気だけが流れている。\nすべての部屋の扉は閉じられ、人の気配はない。\nだが、団地と団地の間に黒い人影が浮かんでいる。\n足元は見えず、どこにも立っていない。\nただ静かにその場へ留まり続けている。",
                image: "anomaly_2.png",
                weight: 15,
            },
            {
                id: 4,
                is_anomaly: true,
                anomaly_level: 70,
                status_name: "覗く住人",
                description: "薄暗い団地の廊下がどこまでも続いている。\n向かいにも同じような団地が並び、静かな夜の空気だけが流れている。\nすべての部屋の扉は閉じられ、人の気配はない。\nだが、向かいの団地の一室から誰かがこちらを覗いている。\n距離があるため顔はよく見えない。\nそれでも視線だけは確かにこちらへ向けられている。",
                image: "anomaly_3.png",
                weight: 10,
            },
            {
                id: 5,
                is_anomaly: true,
                anomaly_level: 180,
                status_name: "生首",
                description: "薄暗い団地の廊下がどこまでも続いている。\n向かいにも同じような団地が並び、静かな夜の空気だけが流れている。\nすべての部屋の扉は閉じられ、人の気配はない。\nだが、廊下の先に首だけが浮かんでいる。\n近付いてくる様子はない。\n　　　\n見えている",
                image: "anomaly_4.png",
                weight: 4,
            },
            {
                id: 6,
                is_anomaly: true,
                anomaly_level: 999,
                status_name: "赤い世界",
                description: "薄暗い団地の廊下がどこまでも続いている。\n向かいにも同じような団地が並び、静かな夜の空気だけが流れている。\nすべての部屋の扉は閉じられ、人の気配はない。\nだが、廊下全体が赤い光に照らされている。\n左側の外から首だけが静かに覗いている。\nあかい\nあかい\nそとからみてる\nまだいる",
                image: "anomaly_5.png",
                weight: 1,
            }
        ]
    },
    {
        id: 10,
        name: "海底都市",
        description: "海の底に沈みながらも静かに存在し続ける街",
        status: [
            {
                id: 1,
                is_anomaly: false,
                anomaly_level: 10,
                status_name: "正常",
                description: "青い海の底に大きな街が広がっている。\n高層ビルや商店、信号機や横断歩道もそのまま残されている。\n魚の群れが道路や交差点を泳ぎ回り、人の姿はどこにもない。\n海面から差し込む光が街を静かに照らしている。\n不思議なほど穏やかで、美しい景色が続いている。",
                image: "normal_1.png",
                weight: 55,
            },
            {
                id: 2,
                is_anomaly: true,
                anomaly_level: 40,
                status_name: "信号",
                description: "海底都市の景色は変わらない。\n魚たちはいつも通り街を泳いでいる。\nだが交差点の信号機だけが赤く点灯している。\n車も人もいないはずなのに、誰かを止めているように見える。\nその赤い光だけが街の中で静かに存在感を放っている。",
                image: "anomaly_1.png",
                weight: 20,
            },
            {
                id: 3,
                is_anomaly: true,
                anomaly_level: 180,
                status_name: "待ち人",
                description: "海底都市の交差点に一人の人影が立っている。\n黒い服を着た人間のように見える。\nしかし首や手足が異様に長く、人間とは思えない姿をしている。\n魚たちはその周囲を気にする様子もなく泳ぎ続けている。\nその存在だけが、この街に本来あってはならないもののように感じられる。",
                image: "anomaly_2.png",
                weight: 12,
            },
            {
                id: 4,
                is_anomaly: true,
                anomaly_level: 120,
                status_name: "青空",
                description: "海底都市の上には本来あるはずの海面が見えない。\n代わりにどこまでも続く青空と白い雲が広がっている。\n魚たちは空を泳ぎ、光は太陽から差し込んでいる。\n街も建物も変わらない。\nただ世界の上下だけが、いつの間にか入れ替わっている。",
                image: "anomaly_3.png",
                weight: 8,
            },
            {
                id: 5,
                is_anomaly: true,
                anomaly_level: 450,
                status_name: "接近",
                description: "海底都市の景色は変わらない。\n魚たちは泳ぎ続け、信号も静かに佇んでいる。\nだがあの人影はもう遠くにはいない。\n横断歩道のすぐ先に立ち、こちらを見ている。\n首は異様に長く、顔は光の中でよく見えない。\n前に見た時より確実に近い。\nそれなのに、いつ歩いてきたのかは誰も知らない。",
                image: "anomaly_4.png",
                weight: 5,
            }
        ]
    }
]
