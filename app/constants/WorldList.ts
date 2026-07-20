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
    },
    {
        id: 11,
        name: "地下駐車場",
        description: "薄暗い地下駐車場",
        status: [
            {
                id: 1,
                is_anomaly: false,
                anomaly_level: 10,
                status_name: "正常",
                description: "薄暗い地下駐車場がどこまでも続いている。\n一定間隔で柱が並び、白線だけが静かに奥へと伸びている。\n車も人の姿もなく、聞こえるのは照明の小さな音だけだ。\n床にはところどころ水たまりができており、天井の照明を静かに映している。",
                image: "normal_1.png",
                weight: 60,
            },
            {
                id: 2,
                is_anomaly: true,
                anomaly_level: 40,
                status_name: "反射",
                description: "薄暗い地下駐車場がどこまでも続いている。\n一定間隔で柱が並び、白線だけが静かに奥へと伸びている。\n車も人の姿もなく、聞こえるのは照明の小さな音だけだ。\nだが、遠くの床に映る光の中には黒い人影が立っている。\n視線を上げても、その場所には誰もいない。\n反射だけが、そこに誰かがいることを映し続けている。",
                image: "anomaly_1.png",
                weight: 25,
            },
            {
                id: 3,
                is_anomaly: true,
                anomaly_level: 80,
                status_name: "水たまり",
                description: "薄暗い地下駐車場がどこまでも続いている。\n一定間隔で柱が並び、白線だけが静かに奥へと伸びている。\n車も人の姿もなく、聞こえるのは照明の小さな音だけだ。\nだが、足元の水たまりには一人の女性が映っている。\nその姿は水たまりの向こう側に立っているように見える。\n目を上げても、その場所には誰もいない。",
                image: "anomaly_2.png",
                weight: 15,
            }
        ]
    },
    {
        id: 12,
        name: "電車",
        description: "暗闇を向かい続ける静かな電車",
        status: [
            {
                id: 1,
                is_anomaly: false,
                anomaly_level: 10,
                status_name: "正常",
                description: "薄暗い車内がどこまでも続いている。\n吊り革や座席、広告は規則正しく並び、車両の奥へと静かに続いている。\n乗客は一人もおらず、聞こえるのは走行音だけだ。\n窓の外は暗く、どこを走っているのかは分からない。",
                image: "normal_1.png",
                weight: 40,
            },
            {
                id: 2,
                is_anomaly: true,
                anomaly_level: 25,
                status_name: "乗客",
                description: "薄暗い車内がどこまでも続いている。\n吊り革や座席、広告は規則正しく並び、車両の奥へと静かに続いている。\n乗客は一人もおらず、聞こえるのは走行音だけだ。\nだが、ドアの脇に一人の女性が立っている。\nこちらには背を向けたまま動く様子はない。\nいつからそこにいたのかは分からない。",
                image: "anomaly_1.png",
                weight: 18,
            },
            {
                id: 3,
                is_anomaly: true,
                anomaly_level: 40,
                status_name: "広告",
                description: "薄暗い車内がどこまでも続いている。\n吊り革や座席、広告は規則正しく並び、車両の奥へと静かに続いている。\n乗客は一人もおらず、聞こえるのは走行音だけだ。\nだが、車内広告に写る人物だけがこちらを見つめている。\nほかの広告は変わらない。\n視線だけが車内を追い続けている。",
                image: "anomaly_2.png",
                weight: 15,
            },
            {
                id: 4,
                is_anomaly: true,
                anomaly_level: 80,
                status_name: "視線",
                description: "薄暗い車内がどこまでも続いている。\n吊り革や座席、広告は規則正しく並び、車両の奥へと静かに続いている。\n乗客は車内のあちこちに座ったり立ったりしている。\nだが、その全員がこちらだけを見ている。\n誰一人として目を逸らさない。\n車内は静かなまま、視線だけが集まっている。",
                image: "anomaly_3.png",
                weight: 12,
            },
            {
                id: 5,
                is_anomaly: true,
                anomaly_level: 180,
                status_name: "下半身",
                description: "薄暗い車内がどこまでも続いている。\n吊り革や座席、広告は規則正しく並び、車両の奥へと静かに続いている。\n乗客は一人もおらず、聞こえるのは走行音だけだ。\nだが、通路の中央には下半身だけが静かに立っている。\n上半身はどこにも存在しない。\nそれでも倒れることなく、その場に立ち続けている。",
                image: "anomaly_4.png",
                weight: 10,
            },
            {
                id: 6,
                is_anomaly: true,
                anomaly_level: 999,
                status_name: "覗き込む",
                description: "薄暗い車内がどこまでも続いている。\n吊り革や座席、広告は規則正しく並び、車両の奥へと静かに続いている。\n乗客は一人もおらず、聞こえるのは走行音だけだ。\nだが、目の前を一人の女性が覗き込んでいる。\n顔が近すぎて、もう車内はほとんど見えない。\nみつけた\nやっと\nみてる",
                image: "anomaly_5.png",
                weight: 5,
            }
        ]
    },
    {
        id: 13,
        name: "無限巨大ターミナル駅",
        description: "果ての見えない巨大なターミナル駅",
        status: [
            {
                id: 1,
                is_anomaly: false,
                anomaly_level: 10,
                status_name: "正常",
                description: "巨大なターミナル駅。\n数え切れないほどのホームが並び、天井を支える柱は地平線の彼方まで続いている。\n電光掲示板には月見ノ丘、風早浦、星空原行きの列車案内が表示されている。\n照明は明るく点灯し、自販機やベンチも整然と並んでいる。\nだが乗客の姿はどこにもない。\n静かな駅だけが正常に運行を続けている。",
                image: "normal_1.png",
                weight: 45,
            },
            {
                id: 2,
                is_anomaly: true,
                anomaly_level: 40,
                status_name: "到着",
                description: "巨大なターミナル駅。\n景色も照明も電光掲示板も変わらない。\nただ、目の前のホームに一編成の列車が停車している。\n車体には見覚えのない鉄道会社のロゴが描かれている。\nドアは開いているが、乗客は誰もいない。\n発車時刻は過ぎているはずなのに、列車は静かに停まり続けている。",
                image: "anomaly_1.png",
                weight: 18,
            },
            {
                id: 3,
                is_anomaly: true,
                anomaly_level: 120,
                status_name: "異変",
                description: "巨大なターミナル駅。\nホームや柱、自販機やベンチは正常なまま。\nしかし電光掲示板に一行だけ赤い文字が表示されている。\n時刻は20:27。\n行先は『彁_|駲椦?暃>蟐挧』と文字化けしており読むことができない。\n他の列車案内は正常なのに、その一行だけが異質な存在感を放っている。",
                image: "anomaly_3.png",
                weight: 12,
            },
            {
                id: 4,
                is_anomaly: true,
                anomaly_level: 120,
                status_name: "獄急",
                description: "巨大なターミナル駅。\nホームや柱、自販機やベンチは正常なまま。\nしかし電光掲示板に一行だけ赤い文字が表示されている。\n時刻は03:19。\n種別には『獄急』と書かれている。\n行先は『彁_|駲椦?暃>蟐挧』と文字化けしており読むことができない。\nどこへ向かう電車なのだろうか。",
                image: "anomaly_2.png",
                weight: 10,
            },
            {
                id: 5,
                is_anomaly: true,
                anomaly_level: 260,
                status_name: "停電",
                description: "巨大なターミナル駅。\nホームも線路も電光掲示板も変わらない。\nしかし駅を照らしていた照明だけが消えている。\n遠くまで続くはずのホームは闇に飲み込まれ、その先を見ることはできない。\n自販機の光も失われている。",
                image: "anomaly_4.png",
                weight: 10,
            },
            {
                id: 6,
                is_anomaly: true,
                anomaly_level: 999,
                status_name: "発車",
                description: "巨大なターミナル駅。\nホームから生気の感じられない人々が乗り込んでいく。\n赤い列車だけが静かに停車している。\nドアは開いている。\n車内には既に大勢の乗客が乗り込んでいる。\n無数の人影が立ち並んでいるが、誰もこちらを見ていない。\n電光掲示板には『03:19 獄急 彁_|駲椦?暃>蟐挧』の表示のみ表示されている。\n発車時刻を列車は静かに待ち続けている。",
                image: "anomaly_5.png",
                weight: 5,
            }
        ]
    },
    {
        id: 14,
        name: "無限プール",
        description: "終わりの見えない巨大な屋内プール施設",
        status: [
            {
                id: 1,
                is_anomaly: false,
                anomaly_level: 10,
                status_name: "正常",
                description: "巨大な屋内プール施設がどこまでも続いている。\n白い柱が規則正しく並び、静かな水面は鏡のように天井を映している。\n利用者も監視員もおらず、水の音だけが静かに響いている。\n清潔で美しい景色が、果てしなく続いている。",
                image: "normal_1.png",
                weight: 55,
            },
            {
                id: 2,
                is_anomaly: true,
                anomaly_level: 40,
                status_name: "深度不明",
                description: "巨大な屋内プールの景色は変わらない。\n白い柱も照明も静かなまま続いている。\nだが水底だけが見えない。\nタイルも排水口もなく、巨大な穴のような暗闇がどこまでも続いている。",
                image: "anomaly_1.png",
                weight: 20,
            },
            {
                id: 3,
                is_anomaly: true,
                anomaly_level: 180,
                status_name: "向こう側",
                description: "対岸に一人の女性が立っている。\n白い服を着いているように見える。\nしかし胴体だけが異様に長く、人間とは思えない姿をしている。\n遠すぎて表情は分からない。\nそれでもこちらを見ていることだけは分かる。",
                image: "anomaly_2.png",
                weight: 12,
            },
            {
                id: 4,
                is_anomaly: true,
                anomaly_level: 120,
                status_name: "停電",
                description: "\n　　　　くらい",
                image: "anomaly_3.png",
                weight: 8,
            },
            {
                id: 5,
                is_anomaly: true,
                anomaly_level: 450,
                status_name: "水中",
                description: "\n\n\n        な \nぜ　水　　の\n   中？",
                image: "anomaly_4.png",
                weight: 5,
            }
        ]
    },
    {
        id: 15,
        name: "無限キッズエリア",
        description: "ショッピングモールの中にある、どこまでも続く子供向け遊び場",
        status: [
            {
                id: 1,
                is_anomaly: false,
                anomaly_level: 10,
                status_name: "正常",
                description: "巨大な屋内キッズエリア。\n赤や青、黄色の遊具がどこまでも並んでいる。\n床は柔らかいクッション素材で覆われており、転んでも痛くない。\n遠くにはボールプールや滑り台も見える。\n子供たちの声は聞こえない。\nそれでも施設は営業中のように照明が灯り続けている。",
                image: "normal_1.png",
                weight: 70,
            },
            {
                id: 2,
                is_anomaly: true,
                anomaly_level: 40,
                status_name: "着ぐるみ",
                description: "巨大な屋内キッズエリア。\n遊具やボールプールは正常時と変わらない。\nしかし遠くの遊具のそばに、マスコットキャラクターのような着ぐるみが立っている。\nこちらを見ているようにも見えるが、表情は変わらない。\n誰もいないはずなのに、その存在だけが場違いに感じられる。",
                image: "anomaly_1.png",
                weight: 12,
            },
            {
                id: 3,
                is_anomaly: true,
                anomaly_level: 120,
                status_name: "見たな？",
                description: "巨大な屋内キッズエリア。\n風景は変わらない。\n遠くにいた着ぐるみが遊具の奥に立っている。\n体や顔には赤黒い汚れのようなものが付着している。\n着ぐるみは真っ直ぐこちらを見つめている。\n今にも何かを話しかけてきそうな雰囲気だけが漂っている。",
                image: "anomaly_2.png",
                weight: 8,
            },
            {
                id: 4,
                is_anomaly: true,
                anomaly_level: 220,
                status_name: "停電",
                description: "巨大な屋内キッズエリア。\n施設全体の照明が落ちている。\n遊具の輪郭だけが薄暗く浮かび上がる。\nボールプールも滑り台もそのまま存在している。\n誰もいないはずなのに、暗闇の奥から何かが動いたような気配だけが残っている。",
                image: "anomaly_3.png",
                weight: 6,
            },
            {
                id: 5,
                is_anomaly: true,
                anomaly_level: 999,
                status_name: "接近",
                description: "\nにげるな",
                image: "anomaly_4.png",
                weight: 4,
            }
        ]
    },
    {
        id: 16,
        name: "山に囲まれた田舎町",
        description: "山々と田畑に囲まれた静かな田舎町",
        status: [
            {
                id: 1,
                is_anomaly: false,
                anomaly_level: 10,
                status_name: "昼",
                description: "青く澄み渡る空の下、山々に囲まれた静かな田舎町が広がっている。\n田畑は風に揺れ、小さな家々が並び、細い道が町の奥へと続いている。\n遠くには緑豊かな山々が連なり、どこか懐かしい景色が広がっている。\n人の姿は見当たらず、鳥の鳴き声だけが静かに響いている。",
                image: "normal_1.png",
                weight: 25,
            },
            {
                id: 2,
                is_anomaly: false,
                anomaly_level: 10,
                status_name: "夕方",
                description: "夕焼けに染まり始めた空の下、山々に囲まれた静かな田舎町が広がっている。\n田畑は穏やかな風に揺れ、小さな家々が夕日に照らされている。\n山の向こうへ沈みかけた太陽が町全体を優しく赤く染めている。\n静かな時間だけがゆっくりと流れている。",
                image: "normal_2.png",
                weight: 20,
            },
            {
                id: 3,
                is_anomaly: false,
                anomaly_level: 10,
                status_name: "夜",
                description: "星空の下、山々に囲まれた田舎町は静かな眠りについている。\n家々の灯りはまばらに残り、田畑には夜風だけが吹いている。\n山の稜線は夜空に溶け込み、遠くの街灯だけが道を照らしている。\n静けさの中に、不思議と安心感が漂っている。",
                image: "normal_3.png",
                weight: 20,
            },
            {
                id: 4,
                is_anomaly: false,
                anomaly_level: 20,
                status_name: "雷雨",
                description: "厚い雨雲が山々を覆い、大粒の雨が田舎町へ降り注いでいる。\n激しい雷鳴が空に響き、何度も稲妻が山の向こうを照らしている。\n田畑は雨に濡れ、小さな家々も灰色の景色へ溶け込んでいる。\nそれでも町は静かで、誰一人として姿を見せない。",
                image: "normal_4.png",
                weight: 15,
            },
            {
                id: 5,
                is_anomaly: true,
                anomaly_level: 120,
                status_name: "？",
                description: "？",
                image: "anomaly_1.png",
                weight: 12,
            },
            {
                id: 6,
                is_anomaly: true,
                anomaly_level: 999,
                status_name: "目",
                description: "\n\n\n　　　　め\n\n",
                image: "anomaly_2.png",
                weight: 8,
            }
        ]
    },
    {
        id: 17,
        name: "無限オフィス",
        description: "終わりの見えない静かなオフィスフロア",
        status: [
            {
                id: 1,
                is_anomaly: false,
                anomaly_level: 10,
                status_name: "正常",
                description: "巨大なオフィスがどこまでも続いている。\n古い箱型のパソコンが規則正しく机に並び、資料や書類は机ごとに置かれていたり、置かれていなかったりする。\n蛍光灯が静かに部屋を照らしている。\n人の姿はどこにもなく、空調の音だけが静かに響いている。",
                image: "normal_1.png",
                weight: 45,
            },
            {
                id: 2,
                is_anomaly: true,
                anomaly_level: 40,
                status_name: "停電",
                description: "オフィス全体の照明が消えている。\n古いパソコンの画面もすべて真っ黒なまま電源が入っていない。\n暗闇の中でも机や書類は変わらず並んでいる。\n誰もいないはずなのに、静けさだけがより強く感じられる。",
                image: "anomaly_1.png",
                weight: 20,
            },
            {
                id: 3,
                is_anomaly: true,
                anomaly_level: 90,
                status_name: "赤い画面",
                description: "部屋の照明は消えたままになっている。\n古いパソコンの画面だけが赤く光っている。\nどの画面にも何も映っていない。\n赤い光だけが静かにオフィス全体を照らしている。",
                image: "anomaly_2.png",
                weight: 15,
            },
            {
                id: 4,
                is_anomaly: true,
                anomaly_level: 220,
                status_name: "灯り",
                description: "停電したオフィスの奥で、一か所だけ照明が点いている。\nその真下には一人の人影が立っている。\n古いパソコンはすべて電源が入っていない。\n人影は動かず、ただこちらを見つめ続けている。",
                image: "anomaly_3.png",
                weight: 10,
            },
            {
                id: 5,
                is_anomaly: true,
                anomaly_level: 500,
                status_name: "天井",
                description: "停電したオフィスに、もう奥の灯りはない。\n暗闇の中を女性が天井に張り付いたまま這っている。\n長い黒髪に顔を隠し、不気味な表情のままこちらへ近付いてくる。\n気付いた時には、もう目の前まで来ている。",
                image: "anomaly_4.png",
                weight: 5,
            }
        ]
    },
    {
        id: 18,
        name: "誰もいない巨大水族館",
        description: "青い照明に照らされた巨大な水族館。無数の水槽と展示がどこまでも続いている。",
        status: [
            {
                id: 1,
                is_anomaly: false,
                anomaly_level: 10,
                status_name: "正常",
                description: "巨大な水族館の展示通路。\n左側には巨大な海洋水槽があり、サメやエイ、小魚たちがゆっくり泳いでいる。\n奥には円形の大型水槽が見え、右側にはクラゲ展示が並んでいる。\nベンチや案内板も整備されている。\n来館者は一人もいない。\nそれでも展示は静かに続いている。",
                image: "normal_1.png",
                weight: 65,
            },
            {
                id: 2,
                is_anomaly: true,
                anomaly_level: 50,
                status_name: "赤い水槽",
                description: "巨大な水族館の展示通路。\n風景や視点は正常時と変わらない。\nしかし左側の巨大水槽から魚が全て消えている。\nさらに水槽の水だけが真っ赤に染まっている。\n他の展示は正常なまま。\nなぜ左側だけがこうなっているのか分からない。",
                image: "anomaly_1.png",
                weight: 12,
            },
            {
                id: 3,
                is_anomaly: true,
                anomaly_level: 120,
                status_name: "逆転展示",
                description: "巨大な水族館の展示通路。\nなぜか通路側が水で満たされている。\n展示の水槽と通路が入れ替わってしまっているみたいだ。",
                image: "anomaly_2.png",
                weight: 8,
            },
            {
                id: 4,
                is_anomaly: true,
                anomaly_level: 180,
                status_name: "浸水",
                description: "巨大な水族館の展示通路。\n左側の巨大水槽のガラスが一部破損している。\nそこから大量の海水が通路へ流れ出している。\n床は徐々に水没しており、水面には照明が反射している。\nしかし館内放送も警報も鳴っていない。\n水族館は静かなまま浸水を続けている。",
                image: "anomaly_3.png",
                weight: 6,
            },
            {
                id: 5,
                is_anomaly: true,
                anomaly_level: 260,
                status_name: "手",
                description: "巨大な水族館の展示通路。\n風景や視点は正常時と変わらない。\n左側の巨大水槽から魚が全て消えている。\n代わりに水槽のガラスへ巨大な手が押し当てられている。\n人間のようにも見えるが、大きさが明らかに異常である。\n指先はガラス越しにこちらへ伸びている。",
                image: "anomaly_4.png",
                weight: 5,
            },
            {
                id: 6,
                is_anomaly: true,
                anomaly_level: 999,
                status_name: "観察者",
                description: "巨大な水族館の展示通路。\n風景や視点は正常時と変わらない。\n左側の巨大水槽から魚が全て消えている。\n代わりに水槽全体を埋め尽くすほど巨大な目が存在している。\nその目はまばたきもせず、こちらだけを見ている。\n周囲の展示は正常なまま。\nしかしこの空間では、自分が展示されている側なのではないかという感覚だけが残る。",
                image: "anomaly_5.png",
                weight: 4,
            }
        ]
    },
    {
        id: 19,
        name: "忘れられた崩壊都市",
        description: "人類が姿を消し、自然に飲み込まれつつある巨大都市。",
        status: [
            {
                id: 1,
                is_anomaly: false,
                anomaly_level: 10,
                status_name: "正常",
                description: "高層ビル群が立ち並ぶ巨大都市。\nしかし人の姿はどこにもない。\n道路には放置された車両が残され、建物には草木や蔦が絡みついている。\n空は曇っているが穏やかで、風だけが街を吹き抜けている。\n都市は崩壊しつつあるが、まだかつての姿を残している。",
                image: "normal_1.png",
                weight: 24,
            },
            {
                id: 2,
                is_anomaly: false,
                anomaly_level: 10,
                status_name: "正常",
                description: "高層ビル群が立ち並ぶ巨大都市。\nしかし人の姿はどこにもない。\n道路には放置された車両が残され、建物には草木や蔦が絡みついている。\n空は曇っているが穏やかで、風だけが街を吹き抜けている。\n都市は崩壊しつつあるが、まだかつての姿を残している。",
                image: "normal_2.png",
                weight: 24,
            },
            {
                id: 3,
                is_anomaly: false,
                anomaly_level: 15,
                status_name: "正常",
                description: "半壊した高層ビル群を見渡せる高所からの景色。\n無数のビルが地平線まで続いている。\n外壁は崩れ、窓ガラスは失われている。\nそれでも建物は辛うじて立ち続けている。\n都市全体が植物に覆われ始めており、人類が消えてから長い年月が経過していることを感じさせる。",
                image: "normal_3.png",
                weight: 24,
            },
            {
                id: 4,
                is_anomaly: false,
                anomaly_level: 80,
                status_name: "正常",
                description: "高層区画を見渡す景色。\n風景や視点は変わらない。\nしかし空が不自然なほど美しい青空になっている。\n崩壊した都市との対比によって、どこか現実感のない風景になっている。\n静寂は変わらない。",
                image: "normal_4.png",
                weight: 24,
            },
            {
                id: 5,
                is_anomaly: true,
                anomaly_level: 300,
                status_name: "赤い空",
                description: "高層区画を見渡す景色。\n風景や視点は正常時と変わらない。\nしかし空全体が赤黒く染まっている。\n厚い雲の向こうには、細長い巨大な黒い影が浮かんでいる。\nそれは生物のようにも見えるが、全体像は確認できない。\n都市全体を覆うほど巨大でありながら、静かに空に存在している。",
                image: "anomaly_1.png",
                weight: 4,
            }
        ]
    }
]
