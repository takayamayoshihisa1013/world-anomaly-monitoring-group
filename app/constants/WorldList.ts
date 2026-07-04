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
    weight:number;
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
    }
]
