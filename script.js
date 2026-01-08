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
        { word: "manipulate", choices: ["操る", "助ける", "放置する", "隠す", "忘れる"], correct: 0, explanation: "manipulate public opinion で「世論を操作する」という意味です。" }
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
        { word: "valid", choices: ["有効な", "無効な", "嘘の", "悪い", "弱い"], correct: 0, explanation: "valid argument で「妥当な議論」という意味です。" }
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
        { word: "hierarchy", choices: ["階層", "平等", "混乱", "自由", "平和"], correct: 0, explanation: "social hierarchy で「社会階層（ヒエラルキー）」という意味です。" }
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
        { word: "paradox", choices: ["逆説", "正論", "常識", "事実", "真実"], correct: 0, explanation: "It's a paradox. で「それは逆説（パラドックス）だ」という意味です。" }
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
        { word: "surplus", choices: ["余剰", "不足", "赤字", "借金", "損失"], correct: 0, explanation: "budget surplus で「財政⿊字（余剰）」という意味です。" }
    ]
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
