// ==================== DATA SOAL 81-100 (LENGKAP) ====================
// File: js/questions-part-6.js
// SOAL 81-100 FINAL - TIDAK ADA YANG MISSING

// SOAL 81
const soal81 = {
    id: 81,
    category: 'kanji',
    categoryName: '📖 Kanji',
    difficulty: 'Menengah',
    question: '「店内」の正しい読み方はどれですか？',
    furigana: 'てんない',
    options: [
        { label: 'A', value: 'a', text: 'みせない' },
        { label: 'B', value: 'b', text: 'てんない' },
        { label: 'C', value: 'c', text: 'みせうち' },
        { label: 'D', value: 'd', text: 'てんうち' }
    ],
    answer: 'b',
    explanation: {
        correctAnswer: 'B',
        reading: { kanji: '店内', furigana: 'てんない', romaji: 'tennai' },
        translation: 'Di dalam toko',
        perWordMeaning: [
            { word: '店', reading: 'てん', romaji: 'ten', meaning: 'toko' },
            { word: '内', reading: 'ない', romaji: 'nai', meaning: 'di dalam' }
        ],
        grammar: { pattern: '[Tempat] + 内', explanation: 'Di dalam ~', usage: '店内, 社内, 屋内' },
        whyCorrect: '店内 = てんない (di dalam toko)',
        whyWrong: { A: 'みせない ❌', C: 'みせうち ❌', D: 'てんうち ❌' },
        tips: '店内 = TENNAI = di DALAM toko',
        difficulty: 'Menengah'
    }
};

// SOAL 82
const soal82 = {
    id: 82,
    category: 'vocabulary',
    categoryName: '📚 Kosakata',
    difficulty: 'Mudah',
    question: '「趣味」の意味として正しいものはどれですか？',
    furigana: 'しゅみ',
    options: [
        { label: 'A', value: 'a', text: 'Pekerjaan' },
        { label: 'B', value: 'b', text: 'Hobi / kesukaan' },
        { label: 'C', value: 'c', text: 'Kewajiban' },
        { label: 'D', value: 'd', text: 'Rencana' }
    ],
    answer: 'b',
    explanation: {
        correctAnswer: 'B',
        reading: { kanji: '趣味', furigana: 'しゅみ', romaji: 'shumi' },
        translation: 'Hobi',
        perWordMeaning: [
            { word: '趣', reading: 'しゅ', romaji: 'shu', meaning: 'selera' },
            { word: '味', reading: 'み', romaji: 'mi', meaning: 'rasa' }
        ],
        grammar: { pattern: '趣味は〜です', explanation: 'Menyatakan hobi', usage: '趣味は何ですか？' },
        whyCorrect: '趣味 = hobi',
        whyWrong: { A: '仕事', C: '義務', D: '計画' },
        tips: 'しゅみ = hobi',
        difficulty: 'Mudah'
    }
};

// SOAL 83
const soal83 = {
    id: 83,
    category: 'grammar',
    categoryName: '✍️ Grammar',
    difficulty: 'Sulit',
    question: '「貧しい＿＿＿も、幸せに暮らしています。」正しい形は？',
    furigana: 'まずしい＿＿＿も、しあわせにくらしています。',
    options: [
        { label: 'A', value: 'a', text: 'ながら' },
        { label: 'B', value: 'b', text: 'のに' },
        { label: 'C', value: 'c', text: 'から' },
        { label: 'D', value: 'd', text: 'ので' }
    ],
    answer: 'a',
    explanation: {
        correctAnswer: 'A',
        reading: { kanji: '貧しいながらも', furigana: 'まずしいながらも', romaji: 'mazushii nagara mo' },
        translation: 'Meskipun miskin',
        perWordMeaning: [{ word: 'ながらも', reading: 'ながらも', romaji: 'nagara mo', meaning: 'meskipun (formal)' }],
        grammar: { pattern: '[Adj/Verb] + ながらも', explanation: 'Meskipun (formal)', usage: 'Tulisan/pidato formal' },
        whyCorrect: '貧しいながらも = meskipun miskin',
        whyWrong: { B: 'のに juga bisa tapi kurang formal', C: 'から = karena', D: 'ので = karena' },
        tips: 'ながらも = meskipun (lebih sastrawi)',
        difficulty: 'Sulit'
    }
};

// SOAL 84
const soal84 = {
    id: 84,
    category: 'reading',
    categoryName: '📄 Membaca',
    difficulty: 'Agak Sulit',
    question: '次の手紙を読んで答えなさい。\n\n「太郎へ\nお元気ですか。こちらは寒くなってきました。風邪を引かないように気をつけてね。今月の25日は祖母の誕生日です。もし時間があれば、一緒に食事に行きませんか。\n\n母より」\n\nおばあちゃんの誕生日はいつですか？',
    furigana: 'つぎのてがみをよんでこたえなさい。',
    options: [
        { label: 'A', value: 'a', text: '今月の15日' },
        { label: 'B', value: 'b', text: '今月の20日' },
        { label: 'C', value: 'c', text: '今月の25日' },
        { label: 'D', value: 'd', text: '来月の25日' }
    ],
    answer: 'c',
    explanation: {
        correctAnswer: 'C',
        reading: { kanji: '今月の25日は祖母の誕生日', furigana: 'こんげつのにじゅうごにちはそぼのたんじょうび', romaji: 'Kongetsu no nijuugonichi wa sobo no tanjoubi' },
        translation: 'Tanggal 25 bulan ini ulang tahun nenek',
        perWordMeaning: [
            { word: '今月', reading: 'こんげつ', romaji: 'kongetsu', meaning: 'bulan ini' },
            { word: '祖母', reading: 'そぼ', romaji: 'sobo', meaning: 'nenek' },
            { word: '誕生日', reading: 'たんじょうび', romaji: 'tanjoubi', meaning: 'ulang tahun' }
        ],
        grammar: { pattern: '[Tanggal] + は + [Acara]', explanation: 'Menyatakan tanggal acara', usage: '〜は〜です' },
        whyCorrect: '25日は祖母の誕生日',
        whyWrong: { A: '15 ❌', B: '20 ❌', D: '来月 ❌' },
        tips: '今月 = bulan ini',
        difficulty: 'Agak Sulit'
    }
};

// SOAL 85
const soal85 = {
    id: 85,
    category: 'grammar',
    categoryName: '✍️ Grammar',
    difficulty: 'Sulit',
    question: '「問題を解決し＿＿＿、次のステップに進みます。」正しい形は？',
    furigana: 'もんだいをかいけつし＿＿＿、つぎのステップにすすみます。',
    options: [
        { label: 'A', value: 'a', text: 'ながら' },
        { label: 'B', value: 'b', text: 'つつ' },
        { label: 'C', value: 'c', text: 'たり' },
        { label: 'D', value: 'd', text: 'て' }
    ],
    answer: 'b',
    explanation: {
        correctAnswer: 'B',
        reading: { kanji: '解決しつつ', furigana: 'かいけつしつつ', romaji: 'kaiketsu shitsutsu' },
        translation: 'Sambil menyelesaikan',
        perWordMeaning: [{ word: 'つつ', reading: 'つつ', romaji: 'tsutsu', meaning: 'sambil (formal)' }],
        grammar: { pattern: '[Masu stem] + つつ', explanation: 'Sambil (formal)', usage: 'Tulisan/pidato' },
        whyCorrect: '解決しつつ = sambil menyelesaikan',
        whyWrong: { A: 'ながら (kasual)', C: 'たり = contoh', D: 'て = TE form' },
        tips: 'つつ = sambil (formal, untuk tulisan)',
        difficulty: 'Sulit'
    }
};

// SOAL 86
const soal86 = {
    id: 86,
    category: 'vocabulary',
    categoryName: '📚 Kosakata',
    difficulty: 'Menengah',
    question: '「貯金」の意味として正しいものはどれですか？',
    furigana: 'ちょきん',
    options: [
        { label: 'A', value: 'a', text: 'Meminjam uang' },
        { label: 'B', value: 'b', text: 'Menabung / simpanan' },
        { label: 'C', value: 'c', text: 'Menghabiskan uang' },
        { label: 'D', value: 'd', text: 'Menukar uang' }
    ],
    answer: 'b',
    explanation: {
        correctAnswer: 'B',
        reading: { kanji: '貯金', furigana: 'ちょきん', romaji: 'chokin' },
        translation: 'Tabungan',
        perWordMeaning: [
            { word: '貯', reading: 'ちょ', romaji: 'cho', meaning: 'menyimpan' },
            { word: '金', reading: 'きん', romaji: 'kin', meaning: 'uang' }
        ],
        grammar: { pattern: '〜を貯金する', explanation: 'Menabung', usage: '貯金する, 貯金がある' },
        whyCorrect: '貯金 = tabungan/menabung',
        whyWrong: { A: '借りる', C: '使う', D: '両替' },
        tips: 'ちょきん = tabungan',
        difficulty: 'Menengah'
    }
};

// SOAL 87
const soal87 = {
    id: 87,
    category: 'particle',
    categoryName: '🔤 Partikel',
    difficulty: 'Mudah',
    question: '「私は野菜＿＿＿食べます。」意味が「Saya hanya makan sayur」になる正しい助詞は？',
    furigana: 'わたしはやさい＿＿＿たべます。',
    options: [
        { label: 'A', value: 'a', text: 'しか' },
        { label: 'B', value: 'b', text: 'だけ' },
        { label: 'C', value: 'c', text: 'も' },
        { label: 'D', value: 'd', text: 'が' }
    ],
    answer: 'b',
    explanation: {
        correctAnswer: 'B',
        reading: { kanji: '野菜だけ食べます', furigana: 'やさいだけたべます', romaji: 'Yasai dake tabemasu.' },
        translation: 'Hanya makan sayur',
        perWordMeaning: [{ word: 'だけ', reading: 'だけ', romaji: 'dake', meaning: 'hanya' }],
        grammar: { pattern: '[Benda] + だけ + [Positif]', explanation: 'Hanya (positif)', usage: 'Pembatasan' },
        whyCorrect: 'だけ = hanya (pakai positif)',
        whyWrong: { A: 'しか pakai negatif', C: 'も = juga', D: 'が = subjek' },
        tips: 'だけ = hanya (positif)',
        difficulty: 'Mudah'
    }
};

// SOAL 88
const soal88 = {
    id: 88,
    category: 'reading',
    categoryName: '📄 Membaca',
    difficulty: 'Agak Sulit',
    question: '次の郵便局の掲示を読んで答えなさい。\n\n「【年末年始の営業時間のお知らせ】\n12月30日: 通常通り営業\n12月31日: 9時～15時 (短縮営業)\n1月1日～1月3日: 休業\n1月4日から: 通常営業」\n\n郵便局が休みの日はいつですか？',
    furigana: 'つぎのゆうびんきょくのけいじをよんでこたえなさい。',
    options: [
        { label: 'A', value: 'a', text: '12月30日～31日' },
        { label: 'B', value: 'b', text: '12月31日～1月1日' },
        { label: 'C', value: 'c', text: '1月1日～1月3日' },
        { label: 'D', value: 'd', text: '1月3日～1月4日' }
    ],
    answer: 'c',
    explanation: {
        correctAnswer: 'C',
        reading: { kanji: '1月1日～1月3日: 休業', furigana: 'いちがつついたち～いちがつみっか: きゅうぎょう', romaji: 'Ichigatsu tsuitachi ~ ichigatsu mikka: kyuugyou' },
        translation: '1-3 Januari tutup',
        perWordMeaning: [
            { word: '休業', reading: 'きゅうぎょう', romaji: 'kyuugyou', meaning: 'tutup' },
            { word: '短縮営業', reading: 'たんしゅくえいぎょう', romaji: 'tanshuku eigyou', meaning: 'jam pendek' }
        ],
        grammar: { pattern: '〜から〜まで休業', explanation: 'Tutup dari ~ sampai ~', usage: 'Libur' },
        whyCorrect: '1月1日～1月3日 = tutup',
        whyWrong: { A: '30-31 Des buka', B: '31 Des buka pendek', D: '3 Jan tutup, 4 Jan buka' },
        tips: '休業 = TUTUP',
        difficulty: 'Agak Sulit'
    }
};

// SOAL 89
const soal89 = {
    id: 89,
    category: 'grammar',
    categoryName: '✍️ Grammar',
    difficulty: 'Agak Sulit',
    question: '「このスープは塩が濃すぎます。もう少し薄＿＿＿したいです。」正しい形は？',
    furigana: 'このスープはしおがこすぎます。もうすこしうす＿＿＿したいです。',
    options: [
        { label: 'A', value: 'a', text: 'い' },
        { label: 'B', value: 'b', text: 'く' },
        { label: 'C', value: 'c', text: 'め' },
        { label: 'D', value: 'd', text: 'さ' }
    ],
    answer: 'c',
    explanation: {
        correctAnswer: 'C',
        reading: { kanji: '薄め', furigana: 'うすめ', romaji: 'usume' },
        translation: 'Agak encer',
        perWordMeaning: [{ word: 'め', reading: 'め', romaji: 'me', meaning: 'agak ~' }],
        grammar: { pattern: '[Adj tanpa い] + め', explanation: 'Agak (sedikit berlebihan)', usage: '大きめ, 小さめ, 早め' },
        whyCorrect: '薄い → 薄め = agak encer',
        whyWrong: { A: 'い ❌', B: 'く = adverb', D: 'さ = tingkat' },
        tips: 'め = agak (sedikit)',
        difficulty: 'Agak Sulit'
    }
};

// SOAL 90
const soal90 = {
    id: 90,
    category: 'listening',
    categoryName: '🎧 Listening',
    difficulty: 'Agak Sulit',
    question: '[DUMMY LISTENING] 音声を聞いてください。「はい、レストラン「桜」でございます。予約ですね。かしこまりました。12月31日の7時、お二人様ですね。喫煙席はご用意できませんが、よろしいですか？窓際の席をご用意できます。」\n\nお客さんは何を予約しましたか？',
    furigana: 'はい、レストラン「さくら」でございます。よやくですね。',
    options: [
        { label: 'A', value: 'a', text: '禁煙席の予約' },
        { label: 'B', value: 'b', text: '喫煙席の予約' },
        { label: 'C', value: 'c', text: '窓際じゃない席の予約' },
        { label: 'D', value: 'd', text: '個室の予約' }
    ],
    answer: 'a',
    explanation: {
        correctAnswer: 'A',
        reading: { kanji: '喫煙席はご用意できません', furigana: 'きつえんせきはごよういできません', romaji: 'Kitsuen seki wa goyoui dekimasen.' },
        translation: 'Tidak bisa menyediakan kursi merokok',
        perWordMeaning: [
            { word: '喫煙席', reading: 'きつえんせき', romaji: 'kitsuen seki', meaning: 'kursi merokok' },
            { word: 'ご用意', reading: 'ごようい', romaji: 'goyoui', meaning: 'menyediakan' }
        ],
        grammar: { pattern: '〜はご用意できません', explanation: 'Tidak bisa menyediakan', usage: 'Sopan' },
        whyCorrect: 'Tidak ada kursi merokok → yang dipesan non-rokok',
        whyWrong: { B: 'Tidak tersedia', C: 'Dapat kursi jendela', D: 'Tidak disebut' },
        tips: '喫煙席 = kursi merokok',
        difficulty: 'Agak Sulit'
    }
};

// SOAL 91
const soal91 = {
    id: 91,
    category: 'kanji',
    categoryName: '📖 Kanji',
    difficulty: 'Menengah',
    question: '「用心」の正しい読み方はどれですか？',
    furigana: 'ようじん',
    options: [
        { label: 'A', value: 'a', text: 'ようじん' },
        { label: 'B', value: 'b', text: 'ようこころ' },
        { label: 'C', value: 'c', text: 'ようしん' },
        { label: 'D', value: 'd', text: 'もちこころ' }
    ],
    answer: 'a',
    explanation: {
        correctAnswer: 'A',
        reading: { kanji: '用心', furigana: 'ようじん', romaji: 'youjin' },
        translation: 'Hati-hati / kewaspadaan',
        perWordMeaning: [
            { word: '用', reading: 'よう', romaji: 'you', meaning: 'menggunakan' },
            { word: '心', reading: 'じん', romaji: 'jin', meaning: 'hati' }
        ],
        grammar: { pattern: '用心する', explanation: 'Berhati-hati', usage: '火の用心' },
        whyCorrect: '用心 = ようじん',
        whyWrong: { B: 'ようこころ ❌', C: 'ようしん ❌', D: 'もちこころ ❌' },
        tips: 'ようじん = hati-hati',
        difficulty: 'Menengah'
    }
};

// SOAL 92
const soal92 = {
    id: 92,
    category: 'vocabulary',
    categoryName: '📚 Kosakata',
    difficulty: 'Menengah',
    question: '「怪我」の意味として正しいものはどれですか？',
    furigana: 'けが',
    options: [
        { label: 'A', value: 'a', text: 'Penyakit' },
        { label: 'B', value: 'b', text: 'Kecelakaan' },
        { label: 'C', value: 'c', text: 'Cedera / luka' },
        { label: 'D', value: 'd', text: 'Demam' }
    ],
    answer: 'c',
    explanation: {
        correctAnswer: 'C',
        reading: { kanji: '怪我', furigana: 'けが', romaji: 'kega' },
        translation: 'Cedera',
        perWordMeaning: [{ word: '怪我', reading: 'けが', romaji: 'kega', meaning: 'cedera' }],
        grammar: { pattern: '〜を怪我する', explanation: 'Cedera', usage: '足を怪我した' },
        whyCorrect: '怪我 = cedera luka',
        whyWrong: { A: '病気', B: '事故', D: '熱' },
        tips: 'けが = cedera',
        difficulty: 'Menengah'
    }
};

// SOAL 93
const soal93 = {
    id: 93,
    category: 'grammar',
    categoryName: '✍️ Grammar',
    difficulty: 'Agak Sulit',
    question: '「これから食べる＿＿＿です。」意味が「Tepat akan makan sekarang」になる正しい形は？',
    furigana: 'これからたべる＿＿＿です。',
    options: [
        { label: 'A', value: 'a', text: 'ところ' },
        { label: 'B', value: 'b', text: 'ばかり' },
        { label: 'C', value: 'c', text: 'つもり' },
        { label: 'D', value: 'd', text: 'はず' }
    ],
    answer: 'a',
    explanation: {
        correctAnswer: 'A',
        reading: { kanji: '食べるところです', furigana: 'たべるところです', romaji: 'Taberu tokoro desu.' },
        translation: 'Tepat akan makan',
        perWordMeaning: [{ word: 'ところ', reading: 'ところ', romaji: 'tokoro', meaning: 'tepat akan' }],
        grammar: { pattern: '[Kamus] + ところ', explanation: 'Tepat akan ~', usage: 'る/ている/た + ところ' },
        whyCorrect: '食べるところ = tepat akan makan',
        whyWrong: { B: 'たばかり = baru saja', C: 'つもり = rencana', D: 'はず = seharusnya' },
        tips: 'ところ = timing (akan/sedang/baru saja)',
        difficulty: 'Agak Sulit'
    }
};

// SOAL 94
const soal94 = {
    id: 94,
    category: 'reading',
    categoryName: '📄 Membaca',
    difficulty: 'Agak Sulit',
    question: '次の図書館のアナウンスを読んで答えなさい。\n\n「本の貸し出しは、お一人様5冊までです。貸し出し期間は2週間です。延長される場合は、カウンターまたはオンラインで手続きを行ってください。」\n\n本を2週間以上借りたい場合、どうすればいいですか？',
    furigana: 'つぎのとしょかんのアナウンスをよんでこたえなさい。',
    options: [
        { label: 'A', value: 'a', text: '新しい本を借りる' },
        { label: 'B', value: 'b', text: '延滞料金を払うだけ' },
        { label: 'C', value: 'c', text: 'カウンターまたはオンラインで延長手続きをする' },
        { label: 'D', value: 'd', text: '本を返却する' }
    ],
    answer: 'c',
    explanation: {
        correctAnswer: 'C',
        reading: { kanji: 'カウンターまたはオンラインで手続き', furigana: 'カウンターまたはオンラインでてつづき', romaji: 'Kauntā mata wa onrain de tetsuduki' },
        translation: 'Prosedur di counter atau online',
        perWordMeaning: [
            { word: '延長', reading: 'えんちょう', romaji: 'enchou', meaning: 'perpanjangan' },
            { word: '手続き', reading: 'てつづき', romaji: 'tetsuduki', meaning: 'prosedur' }
        ],
        grammar: { pattern: '〜場合は〜てください', explanation: 'Jika ~, tolong ~', usage: 'Instruksi bersyarat' },
        whyCorrect: '延長する場合は手続き = perpanjang via counter/online',
        whyWrong: { A: 'Pinjam baru ❌', B: 'Bayar denda ❌', D: 'Kembalikan ❌' },
        tips: '延長 = perpanjang',
        difficulty: 'Agak Sulit'
    }
};

// SOAL 95
const soal95 = {
    id: 95,
    category: 'grammar',
    categoryName: '✍️ Grammar',
    difficulty: 'Agak Sulit',
    question: '「あのレストランはいつも混んでいる。きっと美味しい＿＿＿。」正しい形は？',
    furigana: 'あのレストランはいつもこんでいる。きっとおいしい＿＿＿。',
    options: [
        { label: 'A', value: 'a', text: 'に違いない' },
        { label: 'B', value: 'b', text: 'かもしれない' },
        { label: 'C', value: 'c', text: 'はずだ' },
        { label: 'D', value: 'd', text: 'つもりだ' }
    ],
    answer: 'a',
    explanation: {
        correctAnswer: 'A',
        reading: { kanji: '美味しいに違いない', furigana: 'おいしいにちがいない', romaji: 'Oishii ni chigainai.' },
        translation: 'Pasti enak',
        perWordMeaning: [{ word: 'に違いない', reading: 'にちがいない', romaji: 'ni chigainai', meaning: 'pasti' }],
        grammar: { pattern: '[Adj/Verb] + に違いない', explanation: 'Pasti (keyakinan tinggi)', usage: '95%+ yakin' },
        whyCorrect: '美味しいに違いない = pasti enak',
        whyWrong: { B: 'かもしれない = mungkin (50%)', C: 'はずだ = seharusnya (80%)', D: 'つもり = rencana' },
        tips: 'に違いない = PASTI (keyakinan kuat)',
        difficulty: 'Agak Sulit'
    }
};

// SOAL 96
const soal96 = {
    id: 96,
    category: 'particle',
    categoryName: '🔤 Partikel',
    difficulty: 'Menengah',
    question: '「子供＿＿＿できる簡単な料理です。」正しい助詞は？',
    furigana: 'こども＿＿＿できるかんたんなりょうりです。',
    options: [
        { label: 'A', value: 'a', text: 'も' },
        { label: 'B', value: 'b', text: 'でも' },
        { label: 'C', value: 'c', text: 'しか' },
        { label: 'D', value: 'd', text: 'さえ' }
    ],
    answer: 'b',
    explanation: {
        correctAnswer: 'B',
        reading: { kanji: '子供でもできる', furigana: 'こどもでもできる', romaji: 'Kodomo demo dekiru.' },
        translation: 'Bahkan anak kecil pun bisa',
        perWordMeaning: [{ word: 'でも', reading: 'でも', romaji: 'demo', meaning: 'bahkan pun' }],
        grammar: { pattern: '[Benda] + でも', explanation: 'Bahkan ~ pun', usage: 'Contoh ekstrem' },
        whyCorrect: '子供でも = bahkan anak kecil pun',
        whyWrong: { A: 'も = juga (kurang kuat)', C: 'しか = hanya', D: 'さえ = bahkan (formal)' },
        tips: 'でも = bahkan (contoh ekstrem)',
        difficulty: 'Menengah'
    }
};

// SOAL 97
const soal97 = {
    id: 97,
    category: 'listening',
    categoryName: '🎧 Listening',
    difficulty: 'Menengah',
    question: '[DUMMY LISTENING] 音声を聞いてください。「もしもし、佐藤です。田中さんはいらっしゃいますか？あれ、間違えました。すみません。ここは田中さんのお宅ではありませんか？あっ、違いました。失礼しました。」\n\nこの電話で何が起こりましたか？',
    furigana: 'もしもし、さとうです。たなかさんはいらっしゃいますか？',
    options: [
        { label: 'A', value: 'a', text: '佐藤さんが田中さんと話した' },
        { label: 'B', value: 'b', text: '佐藤さんが電話番号を間違えた' },
        { label: 'C', value: 'c', text: '田中さんが電話に出なかった' },
        { label: 'D', value: 'd', text: '佐藤さんが怒った' }
    ],
    answer: 'b',
    explanation: {
        correctAnswer: 'B',
        reading: { kanji: '間違えました', furigana: 'まちがえました', romaji: 'Machigaemashita.' },
        translation: 'Saya salah',
        perWordMeaning: [{ word: '間違える', reading: 'まちがえる', romaji: 'machigaeru', meaning: 'salah' }],
        grammar: { pattern: '〜を間違える', explanation: 'Salah melakukan', usage: '電話番号を間違える' },
        whyCorrect: '間違えました = salah sambung',
        whyWrong: { A: 'Tidak bicara dengan Tanaka', C: 'Salah nomor', D: 'Minta maaf' },
        tips: '間違える = salah',
        difficulty: 'Menengah'
    }
};

// SOAL 98
const soal98 = {
    id: 98,
    category: 'vocabulary',
    categoryName: '📚 Kosakata',
    difficulty: 'Mudah',
    question: '「心配」の意味として正しいものはどれですか？',
    furigana: 'しんぱい',
    options: [
        { label: 'A', value: 'a', text: 'Senang' },
        { label: 'B', value: 'b', text: 'Khawatir' },
        { label: 'C', value: 'c', text: 'Marah' },
        { label: 'D', value: 'd', text: 'Sedih' }
    ],
    answer: 'b',
    explanation: {
        correctAnswer: 'B',
        reading: { kanji: '心配', furigana: 'しんぱい', romaji: 'shinpai' },
        translation: 'Khawatir',
        perWordMeaning: [
            { word: '心', reading: 'しん', romaji: 'shin', meaning: 'hati' },
            { word: '配', reading: 'ぱい', romaji: 'pai', meaning: 'menyebar' }
        ],
        grammar: { pattern: '〜を心配する', explanation: 'Mengkhawatirkan', usage: '心配しないで = jangan khawatir' },
        whyCorrect: '心配 = khawatir',
        whyWrong: { A: '嬉しい', C: '怒る', D: '悲しい' },
        tips: 'しんぱい = khawatir',
        difficulty: 'Mudah'
    }
};

// SOAL 99
const soal99 = {
    id: 99,
    category: 'grammar',
    categoryName: '✍️ Grammar',
    difficulty: 'Sulit',
    question: '「年を取る＿＿＿、体力が落ちていく。」正しい形は？',
    furigana: 'としをとる＿＿＿、たいりょくがおちていく。',
    options: [
        { label: 'A', value: 'a', text: 'にとって' },
        { label: 'B', value: 'b', text: 'にしたがって' },
        { label: 'C', value: 'c', text: 'に対して' },
        { label: 'D', value: 'd', text: 'によって' }
    ],
    answer: 'b',
    explanation: {
        correctAnswer: 'B',
        reading: { kanji: '年を取るにしたがって', furigana: 'としをとるにしたがって', romaji: 'Toshi o toru ni shitagatte' },
        translation: 'Seiring bertambahnya usia',
        perWordMeaning: [{ word: 'にしたがって', reading: 'にしたがって', romaji: 'ni shitagatte', meaning: 'seiring dengan' }],
        grammar: { pattern: '[Kamus] + にしたがって', explanation: 'Seiring dengan', usage: 'Perubahan bertahap' },
        whyCorrect: '年を取るにしたがって = seiring bertambah usia',
        whyWrong: { A: 'にとって = bagi', C: 'に対して = terhadap', D: 'によって = tergantung' },
        tips: 'にしたがって = seiring dengan',
        difficulty: 'Sulit'
    }
};

// SOAL 100
const soal100 = {
    id: 100,
    category: 'listening',
    categoryName: '🎧 Listening',
    difficulty: 'Menengah',
    question: '[DUMMY LISTENING] 音声を聞いてください。「A: じゃあ、また明日。B: うん、また明日。気をつけて帰ってね。A: ありがとう。B: 今日は本当に楽しかった。A: 私も。また遊ぼうね。B: うん、絶対。じゃあね。」\n\nこの会話はどんな場面ですか？',
    furigana: 'じゃあ、またあした。きをつけてかえってね。',
    options: [
        { label: 'A', value: 'a', text: '別れの挨拶' },
        { label: 'B', value: 'b', text: '朝の挨拶' },
        { label: 'C', value: 'c', text: 'レストランでの注文' },
        { label: 'D', value: 'd', text: '道を聞く' }
    ],
    answer: 'a',
    explanation: {
        correctAnswer: 'A',
        reading: { kanji: 'また明日', furigana: 'またあした', romaji: 'Mata ashita.' },
        translation: 'Sampai jumpa besok',
        perWordMeaning: [
            { word: 'また明日', reading: 'またあした', romaji: 'mata ashita', meaning: 'sampai besok' },
            { word: 'じゃあね', reading: 'じゃあね', romaji: 'jaa ne', meaning: 'sampai jumpa' }
        ],
        grammar: { pattern: '別れの挨拶', explanation: 'Ungkapan perpisahan', usage: 'また明日, じゃあね, 気をつけて' },
        whyCorrect: 'また明日, じゃあね = ungkapan perpisahan',
        whyWrong: { B: 'おはようございます', C: '注文する', D: '道を聞く' },
        tips: 'また明日 = sampai jumpa besok',
        difficulty: 'Menengah'
    }
};

// ==================== PENGGABUNGAN FINAL ====================
const allQuestions81to100 = [
    soal81, soal82, soal83, soal84, soal85,
    soal86, soal87, soal88, soal89, soal90,
    soal91, soal92, soal93, soal94, soal95,
    soal96, soal97, soal98, soal99, soal100
];

// Validasi array 81-100
console.log(`📊 PART 6: ${allQuestions81to100.length} soal (81-100) siap`);

// Merge dengan aman ke window.questionsAll
if (!window.questionsAll) {
    window.questionsAll = [];
}

if (window.questionsPart1to60 && window.questionsPart1to60.length === 60) {
    window.questionsAll = [...window.questionsPart1to60, ...allQuestions81to100];
} else if (window.questionsPart1to60 && window.questionsPart1to60.length > 0) {
    console.warn(`⚠️ questionsPart1to60 has ${window.questionsPart1to60.length} questions, expected 60`);
    window.questionsAll = [...window.questionsPart1to60, ...allQuestions81to100];
} else if (window.questionsAll.length > 0) {
    window.questionsAll = [...window.questionsAll, ...allQuestions81to100];
} else {
    window.questionsAll = allQuestions81to100;
}

// FINAL VALIDATION
console.log(`✅ PART 6 FINAL - ${allQuestions81to100.length} soal (81-100)`);
console.log(`📊 FINAL TOTAL QUESTIONS: ${window.questionsAll.length}`);

// Check for missing IDs (1-100)
const expectedIds = Array.from({ length: 100 }, (_, i) => i + 1);
const actualIds = window.questionsAll.map(q => q.id).sort((a, b) => a - b);
const missingIds = expectedIds.filter(id => !actualIds.includes(id));
const duplicateIds = actualIds.filter((id, index) => actualIds.indexOf(id) !== index);

if (missingIds.length === 0) {
    console.log("✅ No missing IDs - All 100 questions present!");
} else {
    console.error(`❌ Missing IDs: ${missingIds.join(", ")}`);
}

if (duplicateIds.length === 0) {
    console.log("✅ No duplicate IDs");
} else {
    console.error(`❌ Duplicate IDs: ${[...new Set(duplicateIds)].join(", ")}`);
}

if (window.questionsAll.length === 100) {
    console.log("🎉 PERFECT! All 100 questions loaded successfully!");
    console.log("📊 Final IDs:", actualIds.join(", "));
} else {
    console.error(`❌ ERROR: Expected 100 questions, but got ${window.questionsAll.length}`);
}

// Export untuk debugging
window.debugPart6 = {
    total: window.questionsAll.length,
    ids: actualIds,
    missing: missingIds,
    duplicates: [...new Set(duplicateIds)]
};