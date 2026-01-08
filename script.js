const vocabData = {
    '1201-1300': [
        { word: "comply", choices: ["従う", "反抗する", "提案する", "隠す", "忘れる"], correct: 0, explanation: "comply with rules で「規則に従う」という意味です。" },
        { word: "aspire", choices: ["熱望する", "諦める", "恐れる", "隠す", "忘れる"], correct: 0, explanation: "aspire to be a doctor で「医者になることを熱望する」という意味です。" },
        { word: "allege", choices: ["主張する", "否定する", "証明する", "隠す", "忘れる"], correct: 0, explanation: "allege that... で「（証拠なしに）〜だと主張する」という意味です。" },
        { word: "commence", choices: ["開始する", "終わる", "止める", "隠す", "忘れる"], correct: 0, explanation: "commence working で「仕事を始める」という意味の硬い語です。" },
        { word: "adjourn", choices: ["中断する", "続ける", "始める", "隠す", "忘れる"], correct: 0, explanation: "The meeting adjourned. で「会議が一時中断（延期）された」という意味です。" },
        { word: "coordinate", choices: ["調整する", "乱す", "壊す", "隠す", "忘れる"], correct: 0, explanation: "coordinate efforts で「努力を調整（統合）する」という意味です。" },
        { word: "deceive", choices: ["だます", "助ける", "信じる", "隠す", "愛する"], correct: 0, explanation: "deceive the public で「大衆をだます」という意味です。" },
        { word: "enrich", choices: ["豊かにする", "貧しくする", "奪う", "隠す", "忘れる"], correct: 0, explanation: "enrich the soil で「土壌を肥沃にする」という意味になります。" },
        { word: "undertake", choices: ["引き受ける", "拒否する", "逃げる", "隠す", "忘れる"], correct: 0, explanation: "undertake a task で「仕事を引き受ける、着手する」という意味です。" },
        { word: "manipulate", choices: ["操る", "助ける", "放置する", "隠す", "忘れる"], correct: 0, explanation: "manipulate public opinion で「世論を操作する」という意味です。" },
        { word: "inspire", choices: ["奮起させる", "吸い込む", "吐き出す", "期限が切れる", "共謀する"], correct: 0, explanation: "inspire him to work hard で「彼を勤勉に働かせようと奮起させる」という意味です。" },
        { word: "acknowledge", choices: ["認める", "知る", "疑う", "拒否する", "攻撃する"], correct: 0, explanation: "acknowledge the fact で「事実を認める」という意味です。" },
        { word: "offend", choices: ["気分を害する", "守る", "攻撃する", "防ぐ", "喜ばせる"], correct: 0, explanation: "offend his feelings で「彼の感情を害する」という意味です。" },
        { word: "neglect", choices: ["怠る", "選ぶ", "集める", "尊敬する", "無視する"], correct: 0, explanation: "neglect his duty で「義務を怠る（無視する）」という意味です。" },
        { word: "ignore", choices: ["無視する", "無知である", "認める", "署名する", "合図する"], correct: 0, explanation: "ignore the warning で「警告を無視する」という意味です。" },
        { word: "insult", choices: ["侮辱する", "相談する", "結果となる", "飛び跳ねる", "沈む"], correct: 0, explanation: "insult him in public で「人前で彼を侮辱する」という意味です。" },
        { word: "defend", choices: ["守る", "攻撃する", "依存する", "吊るす", "費やす"], correct: 0, explanation: "defend the country で「国を守る」という意味です。" },
        { word: "attack", choices: ["攻撃する", "付ける", "引きつける", "契約する", "接触する"], correct: 0, explanation: "attack the enemy で「敵を攻撃する」という意味です。" },
        { word: "support", choices: ["支持する", "輸出する", "輸送する", "報告する", "輸入する"], correct: 0, explanation: "support the plan で「計画を支持する」という意味です。" },
        { word: "oppose", choices: ["反対する", "賛成する", "暴露する", "課す", "提案する"], correct: 0, explanation: "oppose the war で「戦争に反対する」という意味です。" },
        { word: "maintain", choices: ["維持する", "主要な", "残る", "含む", "得る"], correct: 0, explanation: "maintain the status quo で「現状を維持する」という意味です。" },
        { word: "preserve", choices: ["保存する", "予約する", "値する", "観察する", "奉仕する"], correct: 0, explanation: "preserve nature で「自然を保護（保存）する」という意味です。" },
        { word: "conserve", choices: ["節約する", "会話する", "改宗する", "逆にする", "予約する"], correct: 0, explanation: "conserve energy で「エネルギーを節約（保存）する」という意味です。" },
        { word: "retain", choices: ["保持する", "含む", "維持する", "〜のままである", "抑制する"], correct: 0, explanation: "retain the memory で「記憶を保持する」という意味です。" },
        { word: "sustain", choices: ["持続させる", "疑う", "得る", "含む", "抑える"], correct: 0, explanation: "sustain economic growth で「経済成長を持続させる」という意味です。" },
        { word: "obtain", choices: ["入手する", "含む", "維持する", "楽しむ", "我慢する"], correct: 0, explanation: "obtain information で「情報を入手する」という意味です。" },
        { word: "attain", choices: ["達成する", "出席する", "試みる", "攻撃する", "付ける"], correct: 0, explanation: "attain a goal で「目標を達成する」という意味です。" },
        { word: "acquire", choices: ["獲得する", "尋ねる", "必要とする", "要求する", "引退する"], correct: 0, explanation: "acquire knowledge で「知識を身につける（獲得する）」という意味です。" },
        { word: "require", choices: ["必要とする", "獲得する", "尋ねる", "要求する", "引退する"], correct: 0, explanation: "require assistance で「助けを必要とする」という意味です。" },
        { word: "inquire", choices: ["尋ねる", "必要とする", "獲得する", "要求する", "引退する"], correct: 0, explanation: "inquire about the flight で「フライトについて尋ねる」という意味です。" },
        { word: "demand", choices: ["要求する", "命令する", "称賛する", "非難する", "否定する"], correct: 0, explanation: "demand an apology で「謝罪を要求する」という意味です。" },
        { word: "command", choices: ["命令する", "要求する", "称賛する", "非難する", "否定する"], correct: 0, explanation: "command the army で「軍隊を指揮（命令）する」という意味です。" },
        { word: "recommend", choices: ["推奨する", "命令する", "修正する", "思い出させる", "コメントする"], correct: 0, explanation: "recommend a book で「本を薦める（推奨する）」という意味です。" },
        { word: "commend", choices: ["褒める", "命令する", "修正する", "開始する", "コメントする"], correct: 0, explanation: "commend him for his bravery で「彼の勇敢さを褒める」という意味です。" },
        { word: "comment", choices: ["論評する", "褒める", "命令する", "犯す", "来る"], correct: 0, explanation: "comment on the news で「ニュースについて論評する」という意味です。" },
        { word: "commit", choices: ["犯す", "委ねる", "来る", "褒める", "命令する"], correct: 0, explanation: "commit a crime で「罪を犯す」という意味です。" },
        { word: "submit", choices: ["提出する", "認める", "許可する", "省略する", "放出する"], correct: 0, explanation: "submit the report で「レポートを提出する」という意味です。" },
        { word: "admit", choices: ["認める", "提出する", "許可する", "省略する", "放出する"], correct: 0, explanation: "admit his mistake で「間違いを認める」という意味です。" },
        { word: "permit", choices: ["許可する", "認める", "提出する", "省略する", "放出する"], correct: 0, explanation: "permit him to go で「彼が行くのを許可する」という意味です。" },
        { word: "emit", choices: ["放出する", "許可する", "認める", "提出する", "省略する"], correct: 0, explanation: "emit light で「光を放つ（放出する）」という意味です。" },
        { word: "transmit", choices: ["送信する", "変える", "翻訳する", "輸送する", "移植する"], correct: 0, explanation: "transmit data で「データを送信する」という意味です。" },
        { word: "omit", choices: ["省く", "認める", "許可する", "提出する", "放出する"], correct: 0, explanation: "omit the details で「詳細を省く」という意味です。" },
        { word: "vomit", choices: ["吐く", "食べる", "飲む", "寝る", "歌う"], correct: 0, explanation: "vomit blood で「吐血する（血を吐く）」という意味です。" },
        { word: "remit", choices: ["送金する", "許す", "制限する", "残る", "思い出す"], correct: 0, explanation: "remit money で「送金する」という意味です。" },
        { word: "premise", choices: ["前提", "約束", "妥協", "崩壊", "推測"], correct: 0, explanation: "based on the premise で「前提に基づいている」という意味です。" },
        { word: "promise", choices: ["約束", "前提", "妥協", "崩壊", "推測"], correct: 0, explanation: "keep a promise で「約束を守る」という意味です。" },
        { word: "compromise", choices: ["妥協する", "約束する", "構成する", "対比する", "寄与する"], correct: 0, explanation: "reach a compromise で「妥協に達する」という意味です。" },
        { word: "demise", choices: ["崩壊", "約束", "妥協", "前提", "推測"], correct: 0, explanation: "the demise of the empire で「帝国の崩壊（終焉）」という意味です。" },
        { word: "surmise", choices: ["推測する", "驚く", "昇る", "表面", "超える"], correct: 0, explanation: "surmise that... で「〜だと推測する」という意味です。" },
        { word: "retreat", choices: ["退く", "扱う", "回復する", "繰り返す", "抵抗する"], correct: 0, explanation: "retreat from the enemy で「敵から撤退する」という意味です。" }
    ],
    '1301-1400': [
        { word: "synthetic", choices: ["合成の", "天然の", "本物の", "古い", "新しい"], correct: 0, explanation: "synthetic fiber で「合成繊維」という意味です。" },
        { word: "vital", choices: ["極めて重要な", "無意味な", "些細な", "冷たい", "暗い"], correct: 0, explanation: "vital to life で「生命に不可欠な」という意味です。" },
        { word: "urban", choices: ["都会の", "田舎の", "静かな", "遠い", "古い"], correct: 0, explanation: "urban areas で「都市部」という意味です。対義語は rural。" },
        { word: "dense", choices: ["密集した", "薄い", "広い", "明るい", "軽い"], correct: 0, explanation: "dense fog で「濃い霧」という意味です。" },
        { word: "neutral", choices: ["中立の", "偏った", "敵対的な", "熱心な", "弱い"], correct: 0, explanation: "neutral country で「中立国」という意味です。" },
        { word: "optimistic", choices: ["楽観的な", "悲観的な", "怒っている", "冷淡な", "忙しい"], correct: 0, explanation: "optimistic about the future で「将来を楽観している」という意味です。" },
        { word: "cognitive", choices: ["認知的", "感情的", "肉体的", "社会的", "経済的"], correct: 0, explanation: "cognitive ability で「認知能力」という意味です。" },
        { word: "genetic", choices: ["遺伝子の", "環境の", "人工の", "科学の", "文学の"], correct: 0, explanation: "genetic engineering で「遺伝子工学」という意味です。" },
        { word: "innate", choices: ["生まれつきの", "後天的な", "学んだ", "新しい", "偽の"], correct: 0, explanation: "innate ability で「生得的な能力」という意味です。" },
        { word: "valid", choices: ["有効な", "無効な", "嘘の", "悪い", "弱い"], correct: 0, explanation: "valid argument で「妥当な議論」という意味です。" },
        { word: "rational", choices: ["合理的な", "急進的な", "人種の", "残酷な", "不合理な"], correct: 0, explanation: "rational decision で「合理的な決定」という意味です。" },
        { word: "radical", choices: ["根本的な", "合理的な", "人種の", "残酷な", "保守的な"], correct: 0, explanation: "radical change で「根本的な（急進的な）変化」という意味です。" },
        { word: "racial", choices: ["人種の", "合理的な", "急進的な", "残酷な", "顔の"], correct: 0, explanation: "racial discrimination で「人種差別」という意味です。" },
        { word: "crucial", choices: ["決定的な", "残酷な", "批判的な", "危機的な", "犯罪の"], correct: 0, explanation: "crucial factor で「決定的な要因」という意味です。" },
        { word: "essential", choices: ["不可欠な", "本質的な", "余分な", "外部の", "永遠の"], correct: 0, explanation: "essential nutrients で「不可欠な栄養素」という意味です。" },
        { word: "significant", choices: ["重要な", "署名した", "合図の", "静かな", "単純な"], correct: 0, explanation: "significant progress で「重要な進歩」という意味です。" },
        { word: "immense", choices: ["莫大な", "激しい", "緊張した", "緩い", "小さな"], correct: 0, explanation: "immense amount で「莫大な量」という意味です。" },
        { word: "intense", choices: ["激しい", "莫大な", "緊張した", "緩い", "意図的な"], correct: 0, explanation: "intense heat で「激しい暑さ」という意味です。" },
        { word: "tense", choices: ["緊張した", "激しい", "濃厚な", "緩い", "時制の"], correct: 0, explanation: "tense situation で「緊張した状況」という意味です。" },
        { word: "loose", choices: ["緩い", "失う", "負ける", "きつい", "閉じた"], correct: 0, explanation: "loose clothes で「緩い（ゆったりした）服」という意味です。" },
        { word: "tight", choices: ["きつい", "正しい", "光", "戦い", "緩い"], correct: 0, explanation: "tight jeans で「きついジーンズ」という意味です。" },
        { word: "firm", choices: ["堅い", "会社", "農場", "形", "柔らかい"], correct: 0, explanation: "firm belief で「固い信念」という意味です。" },
        { word: "solid", choices: ["固体の", "液体の", "気体の", "空の", "孤独な"], correct: 0, explanation: "solid fuel で「固形燃料」という意味です。" },
        { word: "fluid", choices: ["流動的な", "固体の", "花の", "小麦粉", "洪水の"], correct: 0, explanation: "fluid situation で「流動的な状況」という意味です。" },
        { word: "liquid", choices: ["液体の", "固体の", "気体の", "透明な", "酒"], correct: 0, explanation: "liquid assets で「流動資産（現金化しやすい資産）」という意味です。" },
        { word: "rapid", choices: ["急速な", "鮮やかな", "有効な", "無効な", "愚かな"], correct: 0, explanation: "rapid growth で「急速な成長」という意味です。" },
        { word: "vivid", choices: ["鮮やかな", "急速な", "有効な", "無効な", "空虚な"], correct: 0, explanation: "vivid memory で「鮮やかな記憶」という意味です。" },
        { word: "invalid", choices: ["無効な", "有効な", "病弱な", "貴重な", "勇敢な"], correct: 0, explanation: "invalid password で「無効なパスワード」という意味です。" },
        { word: "timid", choices: ["臆病な", "大胆な", "冷たい", "温かい", "時間の"], correct: 0, explanation: "timid animal で「臆病な動物」という意味です。" },
        { word: "bold", choices: ["大胆な", "臆病な", "冷たい", "ハゲた", "退屈な"], correct: 0, explanation: "bold decision で「大胆な決断」という意味です。" },
        { word: "vacant", choices: ["空いている", "休暇の", "曖昧な", "明白な", "巨大な"], correct: 0, explanation: "vacant seat で「空席」という意味です。" },
        { word: "obscure", choices: ["曖昧な", "明らかな", "障害", "観察する", "守る"], correct: 0, explanation: "obscure reason で「はっきりしない（曖昧な）理由」という意味です。" },
        { word: "vague", choices: ["漠然とした", "流行の", "巨大な", "空虚な", "無駄な"], correct: 0, explanation: "vague answer で「漠然とした（曖昧な）答え」という意味です。" },
        { word: "ambiguous", choices: ["曖昧な", "野心的な", "明らかな", "両利きの", "不吉な"], correct: 0, explanation: "ambiguous sentence で「（多義的に取れる）曖昧な文」という意味です。" },
        { word: "obvious", choices: ["明らかな", "曖昧な", "邪魔な", "忠実な", "頑固な"], correct: 0, explanation: "It is obvious that... で「〜なのは明らかだ」という意味です。" },
        { word: "evident", choices: ["明白な", "証拠", "邪悪な", "永遠の", "各々の"], correct: 0, explanation: "evident mistake で「明白な間違い」という意味です。" },
        { word: "apparent", choices: ["一見〜の", "透明な", "親の", "現れる", "離れて"], correct: 0, explanation: "apparent contradiction で「一見したところの矛盾（実は違うかもしれない）」という意味です。" },
        { word: "distinct", choices: ["はっきりした", "絶滅した", "本能的な", "遠い", "不快な"], correct: 0, explanation: "distinct difference で「はっきりとした違い」という意味です。" },
        { word: "extinct", choices: ["絶滅した", "はっきりした", "本能的な", "既存の", "興奮した"], correct: 0, explanation: "extinct species で「絶滅危惧種」という意味です。" },
        { word: "instinctive", choices: ["本能的な", "絶滅した", "はっきりした", "教育的な", "即座の"], correct: 0, explanation: "instinctive reaction で「本能的な反応」という意味です。" },
        { word: "humble", choices: ["謙虚な", "高慢な", "湿った", "人間的な", "屈辱を与える"], correct: 0, explanation: "humble attitude で「謙虚な態度」という意味です。" },
        { word: "arrogant", choices: ["傲慢な", "謙虚な", "優雅な", "配置する", "逮捕する"], correct: 0, explanation: "arrogant behavior で「傲慢な振る舞い」という意味です。" },
        { word: "vain", choices: ["無駄な", "静脈", "うぬぼれの強い", "空虚な", "消える"], correct: 0, explanation: "in vain で「無駄に」という意味です。" },
        { word: "innocent", choices: ["無実の", "有罪の", "無知な", "内なる", "革新的な"], correct: 0, explanation: "innocent people で「罪のない人々」という意味です。" },
        { word: "guilty", choices: ["有罪の", "無実の", "金色の", "案内する", "推測する"], correct: 0, explanation: "guilty of murder で「殺人罪で有罪の」という意味です。" },
        { word: "apt", choices: ["〜しがちである", "適切な", "アパート", "適応する", "採用する"], correct: 0, explanation: "be apt to forget で「忘れがちである」という意味です。" },
        { word: "liable", choices: ["〜しがちである", "責任がある", "嘘つきの", "できる", "生き生きした"], correct: 0, explanation: "be liable to illness で「病気にかかりやすい」という意味です。" },
        { word: "prone", choices: ["〜しがちである", "うつ伏せの", "誇りに思う", "証明する", "突く"], correct: 0, explanation: "accident-prone で「事故を起こしやすい」という意味です。" },
        { word: "reluctant", choices: ["気が進まない", "喜んで〜する", "関連のある", "信頼できる", "安心した"], correct: 0, explanation: "be reluctant to go で「行くのが気が進まない」という意味です。" },
        { word: "revenue", choices: ["歳入", "会場", "通り", "復讐", "逆"], correct: 0, explanation: "tax revenue で「税収（歳入）」という意味です。" }
    ],
    '1401-1500': [
        { word: "deficit", choices: ["赤字", "黒字", "利益", "貯金", "資産"], correct: 0, explanation: "trade deficit で「貿易赤字」という意味です。" },
        { word: "transaction", choices: ["取引", "拒絶", "休憩", "停止", "失敗"], correct: 0, explanation: "business transaction で「商取引」という意味です。" },
        { word: "currency", choices: ["通貨", "流行", "電流", "激流", "現在"], correct: 0, explanation: "foreign currency で「外貨」という意味です。" },
        { word: "asset", choices: ["資産", "負債", "ゴミ", "損失", "弱点"], correct: 0, explanation: "valuable asset で「貴重な財産（資産）」という意味です。" },
        { word: "recession", choices: ["不況", "好況", "平和", "戦争", "発展"], correct: 0, explanation: "economic recession で「景気後退、不況」という意味です。" },
        { word: "monopoly", choices: ["独占", "競争", "共有", "貧困", "平和"], correct: 0, explanation: "monopoly on the market で「市場の独占」という意味です。" },
        { word: "penalty", choices: ["刑罰", "報酬", "賞賛", "自由", "権利"], correct: 0, explanation: "death penalty で「死刑」という意味です。" },
        { word: "aristocracy", choices: ["貴族階級", "庶民", "奴隷", "軍隊", "警察"], correct: 0, explanation: "the aristocracy で「貴族階級」という意味です。" },
        { word: "patriotism", choices: ["愛国心", "裏切り", "無関心", "恐怖", "欲望"], correct: 0, explanation: "feel patriotism で「愛国心を感じる」という意味です。" },
        { word: "hierarchy", choices: ["階層", "平等", "混乱", "自由", "平和"], correct: 0, explanation: "social hierarchy で「社会階層（ヒエラルキー）」という意味です。" },
        { word: "authority", choices: ["権威", "自治", "民主主義", "著者", "本物"], correct: 0, explanation: "have authority over A で「Aに対して権限を持つ」という意味です。" },
        { word: "autonomy", choices: ["自治", "依存", "拘束", "独裁", "自動"], correct: 0, explanation: "local autonomy で「地方自治」という意味です。" },
        { word: "democracy", choices: ["民主主義", "独裁政治", "君主制", "貴族政治", "無政府状態"], correct: 0, explanation: "parliamentary democracy で「議会制民主主義」という意味です。" },
        { word: "republic", choices: ["共和国", "大衆", "出版", "評判", "反乱"], correct: 0, explanation: "the Republic of China で「中華民国」という意味です。" },
        { word: "monarchy", choices: ["君主制", "民主主義", "独裁政治", "無政府状態", "修道院"], correct: 0, explanation: "constitutional monarchy で「立憲君主制」という意味です。" },
        { word: "anarchy", choices: ["無政府状態", "君主制", "階層", "アーチ", "弓"], correct: 0, explanation: "fall into anarchy で「無政府状態に陥る」という意味です。" },
        { word: "tyranny", choices: ["圧政", "民主主義", "自由", "タイヤ", "疲労"], correct: 0, explanation: "freedom from tyranny で「圧政からの解放」という意味です。" },
        { word: "colony", choices: ["植民地", "帝国", "王国", "大佐", "列"], correct: 0, explanation: "former British colony で「旧イギリス植民地」という意味です。" },
        { word: "empire", choices: ["帝国", "植民地", "王国", "審判", "経験"], correct: 0, explanation: "the Roman Empire で「ローマ帝国」という意味です。" },
        { word: "kingdom", choices: ["王国", "共和国", "帝国", "自由", "王"], correct: 0, explanation: "the United Kingdom で「連合王国（イギリス）」という意味です。" },
        { word: "conscience", choices: ["良心", "意識", "科学", "全知", "無知"], correct: 0, explanation: "guilty conscience で「良心の呵責」という意味です。" },
        { word: "conscious", choices: ["意識している", "良心的な", "科学的な", "気絶して", "死んで"], correct: 0, explanation: "be conscious of others で「他人を意識している」という意味です。" },
        { word: "science", choices: ["科学", "良心", "意識", "沈黙", "場面"], correct: 0, explanation: "natural science で「自然科学」という意味です。" },
        { word: "patience", choices: ["忍耐", "患者", "情熱", "特許", "パターン"], correct: 0, explanation: "run out of patience で「忍耐が尽きる」という意味です。" },
        { word: "patient", choices: ["患者", "短期な", "情熱的な", "部分的な", "特許"], correct: 0, explanation: "be patient with him で「彼に対して我慢強い（形容詞）」という意味です。" },
        { word: "impatient", choices: ["せっかちな", "我慢強い", "重要な", "不可能な", "礼儀正しい"], correct: 0, explanation: "get impatient で「イライラする（待ちきれなくなる）」という意味です。" },
        { word: "compatible", choices: ["互換性がある", "競争力のある", "有能な", "無能な", "完全な"], correct: 0, explanation: "be compatible with Mac で「Macと互換性がある（相性がいい）」という意味です。" },
        { word: "competitive", choices: ["競争力のある", "互換性がある", "有能な", "完全な", "複雑な"], correct: 0, explanation: "competitive market で「競争の激しい市場」という意味です。" },
        { word: "competent", choices: ["有能な", "競争力のある", "完全な", "不平を言う", "補償する"], correct: 0, explanation: "competent doctor で「有能な医者」という意味です。" },
        { word: "incompetent", choices: ["無能な", "有能な", "重要な", "完全な", "内側の"], correct: 0, explanation: "incompetent government で「無能な政府」という意味です。" },
        { word: "appetite", choices: ["食欲", "無関心", "能力", "適性", "拍手"], correct: 0, explanation: "loss of appetite で「食欲不振」という意味です。" },
        { word: "starve", choices: ["飢える", "食べる", "渇く", "見つめる", "始める"], correct: 0, explanation: "starve to death で「餓死する（飢えて死ぬ）」という意味です。" },
        { word: "famine", choices: ["飢饉", "洪水", "干ばつ", "女性", "評判"], correct: 0, explanation: "die of famine で「飢饉で死ぬ」という意味です。" },
        { word: "drought", choices: ["干ばつ", "洪水", "草稿", "通風", "持ってくる"], correct: 0, explanation: "years of drought で「数年の干ばつ」という意味です。" },
        { word: "flood", choices: ["洪水", "干ばつ", "床", "血液", "浮かぶ"], correct: 0, explanation: "The river flooded. で「川が氾濫した」という意味です。" },
        { word: "disaster", choices: ["災害", "惑星", "漆喰", "牧師", "散らす"], correct: 0, explanation: "natural disaster で「自然災害」という意味です。" },
        { word: "chaos", choices: ["混沌", "秩序", "宇宙", "合唱", "追う"], correct: 0, explanation: "confused chaos で「混乱したカオス（混沌）」という意味です。" },
        { word: "catastrophe", choices: ["大惨事", "カテゴリー", "触媒", "牛", "城"], correct: 0, explanation: "economic catastrophe で「経済的な大惨事（破局）」という意味です。" },
        { word: "tragedy", choices: ["悲劇", "喜劇", "戦略", "裏切り", "伝統"], correct: 0, explanation: "Shakespeare's tragedies で「シェイクスピアの悲劇」という意味です。" },
        { word: "comedy", choices: ["喜劇", "悲劇", "委員会", "商品", "来て"], correct: 0, explanation: "stand-up comedy で「漫談（喜劇）」という意味です。" },
        { word: "export", choices: ["輸出する", "輸入する", "運ぶ", "報告する", "爆発する"], correct: 0, explanation: "export cars で「車を輸出する」という意味です。" },
        { word: "import", choices: ["輸入する", "輸出する", "課す", "重要である", "改善する"], correct: 0, explanation: "import oil で「石油を輸入する」という意味です。" },
        { word: "invest", choices: ["投資する", "発明する", "招待する", "調査する", "ベストを着る"], correct: 0, explanation: "invest money in stocks で「株にお金を投資する」という意味です。" },
        { word: "manufacture", choices: ["製造する", "手動の", "操作する", "管理する", "明示する"], correct: 0, explanation: "manufacture cars で「車を製造する」という意味です。" },
        { word: "industry", choices: ["産業", "勤勉", "怠惰", "ほこり", "産業革命"], correct: 0, explanation: "the car industry で「自動車産業」という意味です。また「勤勉」という意味もあります。" },
        { word: "agriculture", choices: ["農業", "文化", "同意", "攻撃的な", "銀"], correct: 0, explanation: "sustainable agriculture で「持続可能な農業」という意味です。" },
        { word: "harvest", choices: ["収穫", "種まき", "苦難", "ベスト", "港"], correct: 0, explanation: "good harvest で「豊作（良い収穫）」という意味です。" },
        { word: "grain", choices: ["穀物", "脳", "雨", "利益", "電車"], correct: 0, explanation: "grain exports で「穀物輸出」という意味です。" },
        { word: "crop", choices: ["作物", "刈る", "グループ", "滴", "死体"], correct: 0, explanation: "yield a good crop で「良い作物を産出する」という意味です。" },
        { word: "yield", choices: ["産出する", "屈する", "野原", "盾", "叫ぶ"], correct: 0, explanation: "yield a profit で「利益を生む（産出する）」という意味です。yield to A で「Aに屈する」も重要。" }
    ],
    '1501-1600': [
        { word: "autonomy", choices: ["自治", "依存", "拘束", "独裁", "貧困"], correct: 0, explanation: "local autonomy で「地方自治」という意味です。" },
        { word: "dictatorship", choices: ["独裁政治", "民主主義", "自由", "平和", "平等"], correct: 0, explanation: "military dictatorship で「軍事独裁政権」という意味です。" },
        { word: "protocol", choices: ["議定書", "違反", "無視", "自由", "反乱"], correct: 0, explanation: "Kyoto Protocol で「京都議定書」という意味です。外交儀礼という意味もあります。" },
        { word: "domain", choices: ["領域", "限界", "終わり", "始まり", "点"], correct: 0, explanation: "public domain で「公有地（著作権切れの領域）」という意味です。" },
        { word: "index", choices: ["指針", "無視", "消去", "破壊", "終焉"], correct: 0, explanation: "price index で「物価指数」という意味です。索引という意味もあります。" },
        { word: "discourse", choices: ["談話", "沈黙", "無視", "隠蔽", "逃避"], correct: 0, explanation: "political discourse で「政治的談話（言説）」という意味の学術用語です。" },
        { word: "metaphor", choices: ["隠喩", "直喩", "事実", "嘘", "数字"], correct: 0, explanation: "use a metaphor で「メタファー（隠喩）を使う」という意味です。" },
        { word: "analogy", choices: ["類推", "対比", "矛盾", "拒絶", "無視"], correct: 0, explanation: "draw an analogy で「類推する（たとえる）」という意味です。" },
        { word: "satire", choices: ["風刺", "称賛", "無視", "尊敬", "愛情"], correct: 0, explanation: "political satire で「政治風刺」という意味です。" },
        { word: "paradox", choices: ["逆説", "正論", "常識", "事実", "真実"], correct: 0, explanation: "It's a paradox. で「それは逆説（パラドックス）だ」という意味です。" },
        { word: "legislature", choices: ["立法府", "行政府", "司法府", "議会", "法律"], correct: 0, explanation: "the legislature で「立法府」という意味です。" },
        { word: "cabinet", choices: ["内閣", "キャビネット", "押入れ", "棚", "部屋"], correct: 0, explanation: "restore the cabinet で「内閣を改造する」という意味です。家具のキャビネットも同じ語。" },
        { word: "bureau", choices: ["局", "机", "事務所", "官僚", "部"], correct: 0, explanation: "the Federal Bureau of Investigation で「連邦捜査局(FBI)」という意味です。" },
        { word: "ballot", choices: ["投票", "風船", "弾丸", "バレエ", "束"], correct: 0, explanation: "cast a ballot で「投票する」という意味です。" },
        { word: "poll", choices: ["世論調査", "棒", "柱", "選挙", "プール"], correct: 0, explanation: "opinion poll で「世論調査」という意味です。" },
        { word: "census", choices: ["国勢調査", "検閲", "感覚", "中心", "100年"], correct: 0, explanation: "carry out a census で「国勢調査を実施する」という意味です。" },
        { word: "statistics", choices: ["統計", "数学", "物理", "化学", "静電気"], correct: 0, explanation: "according to statistics で「統計によると」という意味です。" },
        { word: "demographics", choices: ["人口統計", "民主主義", "悪魔", "デモ", "写真"], correct: 0, explanation: "changing demographics で「変化する人口統計（人口構成）」という意味です。" },
        { word: "sector", choices: ["部門", "秘密", "部分", "宗教", "昆虫"], correct: 0, explanation: "private sector で「民間部門」という意味です。" },
        { word: "segment", choices: ["部分", "全体", "部門", "区切り", "セメント"], correct: 0, explanation: "segment of the population で「人口の一部（層）」という意味です。" },
        { word: "portion", choices: ["部分", "港", "ポーション", "貧困", "位置"], correct: 0, explanation: "a large portion of the budget で「予算の大部分」という意味です。" },
        { word: "proportion", choices: ["割合", "提案", "準備", "財産", "保護"], correct: 0, explanation: "in proportion to the size で「大きさに比例して」という意味です。" },
        { word: "ratio", choices: ["比率", "ラジオ", "配給", "光線", "率"], correct: 0, explanation: "sex ratio で「男女比」という意味です。" },
        { word: "rate", choices: ["率", "遅い", "早い", "評価する", "叱る"], correct: 0, explanation: "birth rate で「出生率」という意味です。" },
        { word: "rating", choices: ["評価", "遅れ", "回転", "率", "書くこと"], correct: 0, explanation: "approval rating で「支持率（評価）」という意味です。" },
        { word: "grade", choices: ["学年", "偉大な", "墓", "灰色", "草"], correct: 0, explanation: "get a good grade で「良い成績を取る」という意味です。" },
        { word: "degree", choices: ["学位", "同意", "減少", "程度", "度"], correct: 0, explanation: "master's degree で「修士号」という意味です。温度の「度」も。" },
        { word: "extent", choices: ["程度", "延長", "存在", "意図", "拡大"], correct: 0, explanation: "to some extent で「ある程度まで」という意味です。" },
        { word: "sphere", choices: ["球体", "槍", "雰囲気", "恐怖", "空間"], correct: 0, explanation: "heavenly sphere で「天球」という意味です。領域という意味もあります。" },
        { word: "scope", choices: ["範囲", "望遠鏡", "すくう", "シャベル", "希望"], correct: 0, explanation: "beyond the scope of... で「〜の範囲を超えて」という意味です。" },
        { word: "dimension", choices: ["次元", "減少", "ダイヤモンド", "悪魔", "方向"], correct: 0, explanation: "fourth dimension で「四次元」という意味です。側面という意味もあります。" },
        { word: "altitude", choices: ["高度", "態度", "感謝", "才能", "緯度"], correct: 0, explanation: "at an altitude of 10,000 feet で「高度1万フィートで」という意味です。" },
        { word: "latitude", choices: ["緯度", "態度", "高度", "経度", "感謝"], correct: 0, explanation: "high latitudes で「高緯度地方」という意味です。" },
        { word: "longitude", choices: ["経度", "長さ", "切望", "所属", "長く"], correct: 0, explanation: "at 135 degrees east longitude で「東経135度で」という意味です。" },
        { word: "equator", choices: ["赤道", "同等", "方程式", "平等の", "十分な"], correct: 0, explanation: "near the equator で「赤道近くで」という意味です。" },
        { word: "hemisphere", choices: ["半球", "雰囲気", "球体", "ここで", "恐怖"], correct: 0, explanation: "the northern hemisphere で「北半球」という意味です。" },
        { word: "atmosphere", choices: ["大気", "原子", "球体", "ここ", "もっとも"], correct: 0, explanation: "pollution of the atmosphere で「大気汚染」という意味です。雰囲気という意味もあります。" },
        { word: "pollution", choices: ["汚染", "人口", "解決", "生産", "政治"], correct: 0, explanation: "air pollution で「大気汚染」という意味です。" },
        { word: "environment", choices: ["環境", "招待", "発明", "投資", "政府"], correct: 0, explanation: "protect the environment で「環境を守る」という意味です。" },
        { word: "ecology", choices: ["生態系", "経済", "地質学", "心理学", "生物学"], correct: 0, explanation: "human ecology で「人間生態学」という意味です。" },
        { word: "ecosystem", choices: ["生態系", "経済システム", "エコー", "対立", "体系"], correct: 0, explanation: "damage the ecosystem で「生態系を破壊する」という意味です。" },
        { word: "biodiversity", choices: ["生物多様性", "大学", "伝記", "生物学", "多様性"], correct: 0, explanation: "loss of biodiversity で「生物多様性の喪失」という意味です。" },
        { word: "conservation", choices: ["保護", "会話", "保守的な", "変換", "便利な"], correct: 0, explanation: "wildlife conservation で「野生生物の保護」という意味です。" },
        { word: "preservation", choices: ["保存", "予約", "忍耐", "存在", "圧力"], correct: 0, explanation: "food preservation で「食品保存」という意味です。" },
        { word: "radiation", choices: ["放射線", "ラジオ", "急進的な", "比率", "大根"], correct: 0, explanation: "lethal dose of radiation で「致死量の放射線」という意味です。" },
        { word: "ultraviolet", choices: ["紫外線の", "超暴力的な", "紫の", "バイオリン", "極端な"], correct: 0, explanation: "ultraviolet rays で「紫外線」という意味です。" },
        { word: "ozone", choices: ["オゾン", "地帯", "1つ", "所有する", "骨"], correct: 0, explanation: "ozone layer で「オゾン層」という意味です。" },
        { word: "glacier", choices: ["氷河", "ガラス", "楽しい", "輝く", "草"], correct: 0, explanation: "melting glaciers で「溶ける氷河」という意味です。" },
        { word: "volcano", choices: ["火山", "ボリューム", "声", "ボルト", "カヌー"], correct: 0, explanation: "active volcano で「活火山」という意味です。" },
        { word: "eruption", choices: ["噴火", "崩壊", "中断", "腐敗", "選挙"], correct: 0, explanation: "volcanic eruption で「火山の噴火」という意味です。" }
    ],
    '1601-1700': [
        { word: "irony", choices: ["皮肉", "称賛", "本音", "真実", "嘘"], correct: 0, explanation: "dramatic irony で「劇的アイロニー（皮肉）」という意味です。" },
        { word: "premise", choices: ["前提", "結論", "結果", "例外", "嘘"], correct: 0, explanation: "based on the premise で「前提に基づいている」という意味です。" },
        { word: "hypothesis", choices: ["仮説", "真実", "事実", "結果", "歴史"], correct: 0, explanation: "test a hypothesis で「仮説を検証する」という意味です。" },
        { word: "theorem", choices: ["定理", "予想", "噂", "嘘", "感情"], correct: 0, explanation: "Pythagorean theorem で「ピタゴラスの定理」という意味です。" },
        { word: "competence", choices: ["能力", "無能", "弱さ", "病気", "疲れ"], correct: 0, explanation: "linguistic competence で「（言語）能力」という意味です。" },
        { word: "plague", choices: ["疫病", "健康", "富", "平和", "喜び"], correct: 0, explanation: "the bubonic plague で「腺ペスト（疫病）」という意味です。" },
        { word: "hazard", choices: ["危険", "安全", "平和", "保護", "愛"], correct: 0, explanation: "health hazard で「健康への危険要因」という意味です。" },
        { word: "subscription", choices: ["定期購読", "寄付", "借金", "販売", "拒否"], correct: 0, explanation: "cancel subscription で「定期購読（サブスク）を解約する」という意味です。" },
        { word: "allowance", choices: ["手当", "罰金", "税金", "借金", "利息"], correct: 0, explanation: "make allowances for で「〜を考慮に入れる（大目に見る）」という意味です。" },
        { word: "surplus", choices: ["余剰", "不足", "赤字", "借金", "損失"], correct: 0, explanation: "budget surplus で「財政⿊字（余剰）」という意味です。" },
        { word: "shortage", choices: ["不足", "余剰", "短い", "年齢", "服"], correct: 0, explanation: "water shortage で「水不足」という意味です。" },
        { word: "lack", choices: ["欠如", "幸運", "湖", "鍵", "岩"], correct: 0, explanation: "lack of sleep で「睡眠不足」という意味です。" },
        { word: "scarcity", choices: ["希少性", "恐怖", "都市", "傷", "車"], correct: 0, explanation: "scarcity of food で「食糧不足（希少性）」という意味です。" },
        { word: "abundance", choices: ["豊富", "ダンス", "不足", "放棄", "禁止"], correct: 0, explanation: "abundance of resources で「豊富な資源」という意味です。" },
        { word: "plenty", choices: ["たくさん", "空虚", "平野", "計画", "飛行機"], correct: 0, explanation: "plenty of time で「たっぷりの時間」という意味です。" },
        { word: "sufficient", choices: ["十分な", "苦しむ", "効率的な", "不足した", "表面の"], correct: 0, explanation: "sufficient evidence で「十分な証拠」という意味です。" },
        { word: "deficient", choices: ["不足している", "十分な", "効率的な", "美味しい", "定義された"], correct: 0, explanation: "deficient in vitamins で「ビタミンが不足している」という意味です。" },
        { word: "efficient", choices: ["効率的な", "効果的な", "影響", "努力", "十分な"], correct: 0, explanation: "efficient way で「効率的な方法」という意味です。" },
        { word: "effective", choices: ["効果的な", "効率的な", "影響", "努力", "欠陥のある"], correct: 0, explanation: "effective method で「効果的な手法」という意味です。" },
        { word: "defective", choices: ["欠陥のある", "探偵", "守る", "効果的な", "感染した"], correct: 0, explanation: "defective product で「欠陥商品」という意味です。" },
        { word: "infectious", choices: ["伝染性の", "効果的な", "欠陥のある", "情報", "内側の"], correct: 0, explanation: "infectious disease で「伝染病」という意味です。" },
        { word: "contagious", choices: ["接触伝染する", "含む", "続く", "満足して", "タグ"], correct: 0, explanation: "contagious laughter で「つられ笑い（伝染する笑い）」という意味です。" },
        { word: "epidemic", choices: ["流行", "民主主義", "皮膚", "エピソード", "学術的な"], correct: 0, explanation: "flu epidemic で「インフルエンザの流行」という意味です。" },
        { word: "endemic", choices: ["特有の", "終わりの", "敵", "流行", "学術的な"], correct: 0, explanation: "endemic species で「固有種」という意味です。" },
        { word: "pandemic", choices: ["パンデミック", "パニック", "フライパン", "神", "平和"], correct: 0, explanation: "global pandemic で「世界的な大流行（パンデミック）」という意味です。" },
        { word: "symptom", choices: ["症状", "同情", "シンボル", "交響曲", "単純な"], correct: 0, explanation: "symptoms of a cold で「風邪の症状」という意味です。" },
        { word: "syndrome", choices: ["症候群", "ドーム", "シンボル", "症状", "罪"], correct: 0, explanation: "metabolic syndrome で「メタボリック症候群」という意味です。" },
        { word: "diagnosis", choices: ["診断", "鼻", "不可知論", "図", "対角線"], correct: 0, explanation: "early diagnosis で「早期診断」という意味です。" },
        { word: "prognosis", choices: ["予後", "診断", "鼻", "プログラム", "進歩"], correct: 0, explanation: "good prognosis で「（病気の）予後は良好」という意味です。" },
        { word: "therapy", choices: ["療法", "理論", "そこ", "彼ら", "お茶"], correct: 0, explanation: "physical therapy で「理学療法」という意味です。" },
        { word: "remedy", choices: ["治療法", "準備", "残り", "記憶", "読む"], correct: 0, explanation: "remedy for a cold で「風邪の治療法」という意味です。" },
        { word: "cure", choices: ["治療する", "世話", "車", "切る", "丸くする"], correct: 0, explanation: "cure him of cancer で「彼の癌を治す」という意味です。" },
        { word: "heal", choices: ["治す", "かかと", "丘", "ホール", "地獄"], correct: 0, explanation: "Time heals all wounds. で「時が全ての傷を癒やす」という意味です。" },
        { word: "treat", choices: ["扱う", "脅す", "木", "真実", "試みる"], correct: 0, explanation: "treat him like a child で「彼を子供のように扱う」という意味です。治療する意味もあります。" },
        { word: "recover", choices: ["回復する", "覆う", "発見する", "カバー", "川"], correct: 0, explanation: "recover from illness で「病気から回復する」という意味です。" },
        { word: "restore", choices: ["修復する", "店", "物語", "休む", "残り"], correct: 0, explanation: "restore the building で「建物を修復する」という意味です。" },
        { word: "revive", choices: ["生き返らせる", "生き残る", "鮮やかな", "川", "見直す"], correct: 0, explanation: "revive the economy で「経済を活性化（復活）させる」という意味です。" },
        { word: "survive", choices: ["生き残る", "生き返らせる", "調査する", "奉仕する", "表面"], correct: 0, explanation: "survive the crash で「衝突事故から助かる（生き残る）」という意味です。" },
        { word: "exist", choices: ["存在する", "出口", "興奮する", "試験", "期待する"], correct: 0, explanation: "God exists. で「神は存在する」という意味です。" },
        { word: "subsist", choices: ["生きていく", "存在する", "主張する", "抵抗する", "物質"], correct: 0, explanation: "subsist on rice で「米を常食として生きていく」という意味です。" },
        { word: "resist", choices: ["抵抗する", "存在する", "主張する", "援助する", "姉妹"], correct: 0, explanation: "resist temptation で「誘惑に抵抗する」という意味です。" },
        { word: "persist", choices: ["固執する", "抵抗する", "人", "完璧な", "部分"], correct: 0, explanation: "persist in his opinion で「自説に固執する（曲げない）」という意味です。" },
        { word: "insist", choices: ["主張する", "中にいる", "座る", "即座の", "本能"], correct: 0, explanation: "insist on going で「行くと言って聞かない（主張する）」という意味です。" },
        { word: "consist", choices: ["構成される", "一貫した", "相談する", "慰める", "考える"], correct: 0, explanation: "consist of water で「水から成る」という意味です。" },
        { word: "constitute", choices: ["構成する", "憲法", "代用品", "機関", "市民"], correct: 0, explanation: "constitute the majority で「過半数を構成する」という意味です。" },
        { word: "institute", choices: ["研究所", "憲法", "代理", "制定する", "中"], correct: 0, explanation: "research institute で「研究所」という意味です。" },
        { word: "substitute", choices: ["代用品", "地下鉄", "物質", "主題", "潜水艦"], correct: 0, explanation: "substitute A for B で「Bの代わりにAを使う」という意味です。" },
        { word: "destine", choices: ["運命づける", "運命", "目的地", "破壊する", "距離"], correct: 0, explanation: "be destined to win で「勝つ運命にある」という意味です。" },
        { word: "destiny", choices: ["運命", "目的地", "密度", "歯医者", "埃っぽい"], correct: 0, explanation: "control my destiny で「自分の運命をコントロールする」という意味です。" },
        { word: "fate", choices: ["運命", "脂肪", "顔", "信仰", "門"], correct: 0, explanation: "accept his fate で「彼の運命を受け入れる」という意味です。destinyより悲観的なニュアンス。" }
    ],
};

// State variables
let currentQuiz = null;
let currentQuestionIndex = 0;
let score = 0;
const TOTAL_QUESTIONS = 50;

class VocabQuizApp {
    constructor() {
        this.currentSet = [];
        this.init();
    }

    init() {
        var self = this;
        // Course selection
        const courseBtns = document.querySelectorAll('.course-btn');
        courseBtns.forEach(btn => {
            btn.onclick = function () {
                const range = this.getAttribute('data-range');
                self.startQuiz(range);
            };
        });

        document.getElementById('restart-btn').onclick = function () { self.switchScreen('start-screen'); };
        document.getElementById('next-btn').onclick = function () { self.nextQuestion(); };
        document.getElementById('speak-btn').onclick = function () { self.speakWord(); };
    }

    startQuiz(range) {
        if (!range) {
            this.switchScreen('start-screen');
            return;
        }

        const data = vocabData[range];
        if (!data || data.length === 0) {
            alert("このコースは現在準備中か、データがありません！");
            return;
        }

        // Shuffle and pick 50 (or less if data is smaller)
        const count = Math.min(data.length, TOTAL_QUESTIONS);
        const rawSet = data.slice().sort(function () { return 0.5 - Math.random(); }).slice(0, count);

        // Deep copy and shuffle choices for each question
        this.currentSet = rawSet.map(q => {
            const newChoices = q.choices.slice();
            const correctWord = q.choices[q.correct];

            // Shuffle choices
            for (let i = newChoices.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [newChoices[i], newChoices[j]] = [newChoices[j], newChoices[i]];
            }

            // Find new correct index
            const newCorrect = newChoices.indexOf(correctWord);

            return {
                ...q,
                choices: newChoices,
                correct: newCorrect
            };
        });

        currentQuestionIndex = 0;
        score = 0;

        this.switchScreen('quiz-screen');
        this.loadQuestion();
    }

    loadQuestion() {
        currentQuiz = this.currentSet[currentQuestionIndex];

        // UI Update
        document.getElementById('question-text').textContent = currentQuiz.word;
        const total = this.currentSet.length;
        document.getElementById('question-number').textContent = `Question ${currentQuestionIndex + 1}/${total}`;
        document.getElementById('score-display').textContent = `Score: ${score}`;
        document.getElementById('progress-bar').style.width = `${(currentQuestionIndex / total) * 100}%`;

        // Generate Options
        var grid = document.getElementById('options-grid');
        grid.innerHTML = '';
        var self = this;
        currentQuiz.choices.forEach(function (choice, idx) {
            var btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = choice;
            btn.onclick = function () { self.handleAnswer(idx); };
            grid.appendChild(btn);
        });

        document.getElementById('feedback-area').classList.add('hidden');
        this.speakWord();
    }

    speakWord() {
        if (!currentQuiz) return;
        const msg = new SpeechSynthesisUtterance();
        msg.text = currentQuiz.word;
        msg.lang = 'en-US';
        msg.rate = 0.9; // Slightly slower for clarity
        window.speechSynthesis.cancel(); // Cancel any ongoing speech
        window.speechSynthesis.speak(msg);
    }

    handleAnswer(idx) {
        const buttons = document.querySelectorAll('.option-btn');
        buttons.forEach(b => b.disabled = true);

        const feedbackText = document.getElementById('feedback-text');
        const explanationText = document.getElementById('explanation-text');

        if (idx === currentQuiz.correct) {
            score += 20;
            buttons[idx].classList.add('correct');
            this.playEffect('correct');
            feedbackText.innerHTML = `<span style="color: #4ade80; font-weight: 900; font-size: 1.5rem;">✨ 正解！ ✨</span><br><br><strong>${currentQuiz.word}</strong>: ${currentQuiz.choices[currentQuiz.correct]}`;
        } else {
            buttons[idx].classList.add('wrong');
            buttons[currentQuiz.correct].classList.add('correct');
            this.playEffect('wrong');
            feedbackText.innerHTML = `<span style="color: #f87171; font-weight: 900; font-size: 1.5rem;">⚠️ 残念... ⚠️</span><br><br><strong>${currentQuiz.word}</strong> の正解は <strong>「${currentQuiz.choices[currentQuiz.correct]}」</strong> です。`;
        }

        explanationText.textContent = currentQuiz.explanation;
        document.getElementById('feedback-area').classList.remove('hidden');
    }

    nextQuestion() {
        currentQuestionIndex++;
        if (currentQuestionIndex < this.currentSet.length) {
            this.loadQuestion();
        } else {
            this.showResults();
        }
    }

    showResults() {
        this.switchScreen('result-screen');
        document.getElementById('final-score').textContent = score;
        const rank = document.getElementById('rank-label');
        const evalMsg = document.getElementById('eval-message');
        const ratio = score / (this.currentSet.length * 20);

        // Previous score management
        const prevScoreKey = 'vocab_quiz_prev_score_ch3'; // Unique key for Ch3
        const prevScoreStr = localStorage.getItem(prevScoreKey);
        let comparisonText = "";

        if (prevScoreStr === null) {
            comparisonText = "初挑戦";
        } else {
            const prevScore = parseInt(prevScoreStr);
            const diff = score - prevScore;
            if (diff > 0) {
                comparisonText = `前回比: <span style="color: #4ade80; font-weight: bold;">+${diff}</span>`;
            } else if (diff < 0) {
                comparisonText = `前回比: <span style="color: #f87171; font-weight: bold;">${diff}</span>`;
            } else {
                comparisonText = "前回と同じスコア";
            }
        }
        evalMsg.innerHTML = comparisonText;
        localStorage.setItem(prevScoreKey, score);

        // Rank Display
        if (ratio >= 1.0) {
            rank.textContent = "🏆 英語の神 (The English Deity)";

        } else if (ratio >= 0.9) {
            rank.textContent = "👑 マスター・リンガリスト";
        } else if (ratio >= 0.8) {
            rank.textContent = "✨ エキスパート・リスナー";
        } else if (ratio >= 0.6) {
            rank.textContent = "🌟 ベテラン・リスナー";
        } else if (ratio >= 0.4) {
            rank.textContent = "🔰 ルーキー・リスナー";
        } else {
            rank.textContent = "🌱 伸びしろ抜群プレイヤー";
        }
    }

    switchScreen(id) {
        var screens = document.querySelectorAll('.screen');
        for (var i = 0; i < screens.length; i++) {
            screens[i].classList.remove('active');
        }
        document.getElementById(id).classList.add('active');
    }

    playEffect(type) {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const now = audioCtx.currentTime;

        if (type === 'correct') {
            // "Ping-pong" double chime
            const osc1 = audioCtx.createOscillator();
            const gain1 = audioCtx.createGain();
            osc1.type = 'sine';
            osc1.frequency.setValueAtTime(880, now); // A5
            gain1.gain.setValueAtTime(0, now);
            gain1.gain.linearRampToValueAtTime(0.1, now + 0.05);
            gain1.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
            osc1.connect(gain1);
            gain1.connect(audioCtx.destination);
            osc1.start(now);
            osc1.stop(now + 0.3);

            const osc2 = audioCtx.createOscillator();
            const gain2 = audioCtx.createGain();
            osc2.type = 'sine';
            osc2.frequency.setValueAtTime(1174.66, now + 0.15); // D6
            gain2.gain.setValueAtTime(0, now + 0.15);
            gain2.gain.linearRampToValueAtTime(0.1, now + 0.2);
            gain2.gain.exponentialRampToValueAtTime(0.01, now + 0.45);
            osc2.connect(gain2);
            gain2.connect(audioCtx.destination);
            osc2.start(now + 0.15);
            osc2.stop(now + 0.45);
        } else {
            const o = audioCtx.createOscillator();
            const g = audioCtx.createGain();
            o.type = 'sawtooth';
            o.frequency.setValueAtTime(150, now);
            g.gain.setValueAtTime(0.1, now);
            g.gain.linearRampToValueAtTime(0, now + 0.4);
            o.connect(g);
            g.connect(audioCtx.destination);
            o.start(); o.stop(now + 0.4);
        }
    }
}

// Initialize App
const app = new VocabQuizApp();
