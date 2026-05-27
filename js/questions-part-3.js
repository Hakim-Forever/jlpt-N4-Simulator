// ==================== DATA SOAL 26-50 ====================
// File: js/questions-part-3.js
// Melanjutkan dari soal 16-25, kemudian 26-50

// SOAL 16 - Reading (Undangan)
const soal16 = {
    id: 16,
    category: 'reading',
    categoryName: '📄 Membaca',
    difficulty: 'Menengah',
    question: '次のメールを読んで答えなさい。\n\n「田中さん、今週の土曜日にパーティーをします。もし時間があったら、ぜひ来てください。場所は私の家です。何か飲み物を持ってきてください。」\n\nこのメールで、読む人がしなければならないことは何ですか？',
    furigana: 'つぎのメールをよんでこたえなさい。\n\n「たなかさん、こんしゅうのどようびにパーティーをします。もしじかんがあったら、ぜひきてください。ばしょはわたしのいえです。なにかのみものをもってきてください。」',
    options: [
        { label: 'A', value: 'a', text: '食べ物を持って行く' },
        { label: 'B', value: 'b', text: '飲み物を持って行く' },
        { label: 'C', value: 'c', text: 'お金を持って行く' },
        { label: 'D', value: 'd', text: '何も持って行かない' }
    ],
    answer: 'b',
    explanation: {
        correctAnswer: 'B',
        reading: { kanji: '何か飲み物を持ってきてください', furigana: 'なにかのみものをもってきてください', romaji: 'Nanika nomimono o motte kite kudasai' },
        translation: 'Tolong bawa sesuatu untuk diminum',
        perWordMeaning: [
            { word: '何か', reading: 'なにか', romaji: 'nanika', meaning: 'sesuatu' },
            { word: '飲み物', reading: 'のみもの', romaji: 'nomimono', meaning: 'minuman' },
            { word: '持ってきて', reading: 'もってきて', romaji: 'motte kite', meaning: 'bawa ke sini' }
        ],
        grammar: { pattern: '〜てきてください', explanation: 'Bawa ke sini', usage: 'Tolong bawa' },
        whyCorrect: 'Email mengatakan: 飲み物を持ってきてください',
        whyWrong: { A: 'Makanan tidak disebut', C: 'Uang tidak disebut', D: 'Justru diminta bawa minuman' },
        tips: 'Kata kunci: 飲み物 = minuman',
        difficulty: 'Menengah'
    }
};

// SOAL 17 - Grammar (〜ながら)
const soal17 = {
    id: 17,
    category: 'grammar',
    categoryName: '✍️ Grammar',
    difficulty: 'Menengah',
    question: '「音楽を＿＿＿ながら勉強します。」正しい形は？',
    furigana: 'おんがくを＿＿＿ながらべんきょうします。',
    options: [
        { label: 'A', value: 'a', text: '聞く' },
        { label: 'B', value: 'b', text: '聞いて' },
        { label: 'C', value: 'c', text: '聞き' },
        { label: 'D', value: 'd', text: '聞いた' }
    ],
    answer: 'c',
    explanation: {
        correctAnswer: 'C',
        reading: { kanji: '音楽を聞きながら勉強します。', furigana: 'おんがくをききながらべんきょうします。', romaji: 'Ongaku o kikinagara benkyou shimasu.' },
        translation: 'Saya belajar sambil mendengarkan musik',
        perWordMeaning: [
            { word: '聞き', reading: 'きき', romaji: 'kiki', meaning: 'mendengar (masu stem)' },
            { word: 'ながら', reading: 'ながら', romaji: 'nagara', meaning: 'sambil' }
        ],
        grammar: { pattern: '[Verb-masu stem] + ながら', explanation: 'Melakukan dua aktivitas bersamaan', usage: 'Sambil mendengar' },
        whyCorrect: '聞く → masu stem = 聞き → 聞きながら',
        whyWrong: { A: '聞く ❌ – Bentuk kamus', B: '聞いて ❌ – Bentuk TE', D: '聞いた ❌ – Lampau' },
        tips: 'ます形の「ます」を取って「ながら」を足す！',
        difficulty: 'Menengah'
    }
};

// SOAL 18 - Vocabulary (再来週)
const soal18 = {
    id: 18,
    category: 'vocabulary',
    categoryName: '📚 Kosakata',
    difficulty: 'Mudah',
    question: '「再来週」の正しい読み方はどれですか？',
    furigana: 'さらいしゅう',
    options: [
        { label: 'A', value: 'a', text: 'こんしゅう' },
        { label: 'B', value: 'b', text: 'らいしゅう' },
        { label: 'C', value: 'c', text: 'さらいしゅう' },
        { label: 'D', value: 'd', text: 'せんしゅう' }
    ],
    answer: 'c',
    explanation: {
        correctAnswer: 'C',
        reading: { kanji: '再来週', furigana: 'さらいしゅう', romaji: 'saraishuu' },
        translation: 'Dua minggu lagi',
        perWordMeaning: [
            { word: '再来', reading: 'さらい', romaji: 'sarai', meaning: 'dua kali lagi' },
            { word: '週', reading: 'しゅう', romaji: 'shuu', meaning: 'minggu' }
        ],
        grammar: { pattern: '再来〜', explanation: 'Dua periode ke depan', usage: '再来週, 再来月, 再来年' },
        whyCorrect: '再来週 = saraishuu (dua minggu lagi)',
        whyWrong: { A: '今週 = minggu ini', B: '来週 = minggu depan', D: '先週 = minggu lalu' },
        tips: '来週 = minggu depan, 再来週 = minggu depan lagi',
        difficulty: 'Mudah'
    }
};

// SOAL 19 - Particle (から〜まで)
const soal19 = {
    id: 19,
    category: 'particle',
    categoryName: '🔤 Partikel',
    difficulty: 'Menengah',
    question: '「テストは９時＿＿＿12時です。」正しい助詞は？',
    furigana: 'テストはくじ＿＿＿じゅうにじです。',
    options: [
        { label: 'A', value: 'a', text: 'に' },
        { label: 'B', value: 'b', text: 'が' },
        { label: 'C', value: 'c', text: 'まで' },
        { label: 'D', value: 'd', text: 'の' }
    ],
    answer: 'c',
    explanation: {
        correctAnswer: 'C',
        reading: { kanji: 'テストは９時から12時です。', furigana: 'テストはくじからじゅうにじです。', romaji: 'Tesuto wa kuji kara juuniji desu.' },
        translation: 'Ujian dari jam 9 sampai jam 12',
        perWordMeaning: [
            { word: 'から', reading: 'から', romaji: 'kara', meaning: 'dari' },
            { word: 'まで', reading: 'まで', romaji: 'made', meaning: 'sampai' }
        ],
        grammar: { pattern: '〜から〜まで', explanation: 'Menunjukkan rentang', usage: 'Dari titik awal ke titik akhir' },
        whyCorrect: 'Menunjukkan rentang waktu sampai jam 12',
        whyWrong: { A: 'に ❌ – Waktu spesifik', B: 'が ❌ – Subjek', D: 'の ❌ – Kepemilikan' },
        tips: 'から = mulai, まで = sampai',
        difficulty: 'Menengah'
    }
};

// SOAL 20 - Verb (Potensial)
const soal20 = {
    id: 20,
    category: 'verb',
    categoryName: '⚡ Bentuk Kata Kerja',
    difficulty: 'Agak Sulit',
    question: '「私は日本語が＿＿＿。」意味が「Saya bisa bahasa Jepang」になる正しい形は？',
    furigana: 'わたしはにほんごが＿＿＿。',
    options: [
        { label: 'A', value: 'a', text: '話します' },
        { label: 'B', value: 'b', text: '話せます' },
        { label: 'C', value: 'c', text: '話します' },
        { label: 'D', value: 'd', text: '話しましょう' }
    ],
    answer: 'b',
    explanation: {
        correctAnswer: 'B',
        reading: { kanji: '私は日本語が話せます。', furigana: 'わたしはにほんごがはなせます。', romaji: 'Watashi wa nihongo ga hanasemasu.' },
        translation: 'Saya bisa bahasa Jepang',
        perWordMeaning: [
            { word: '話す', reading: 'はなす', romaji: 'hanasu', meaning: 'berbicara' },
            { word: '話せる', reading: 'はなせる', romaji: 'hanaseru', meaning: 'bisa bicara' }
        ],
        grammar: { pattern: 'Godan: う→える', explanation: 'Bentuk potensial = bisa', usage: '[Benda] が + potensial' },
        whyCorrect: '話す → 話せる (bisa bicara)',
        whyWrong: { A: '話します ❌ – Bukan potensial', C: 'Sama dengan A', D: '話しましょう ❌ – Ajakan' },
        tips: 'Group 1: う→える (話す→話せる, 書く→書ける)',
        difficulty: 'Agak Sulit'
    }
};

// SOAL 21-25 (Lanjutan dari sebelumnya)
const soal21 = {
    id: 21,
    category: 'kanji',
    categoryName: '📖 Kanji',
    difficulty: 'Menengah',
    question: '「２１日」の正しい読み方はどれですか？',
    furigana: 'にじゅういちにち',
    options: [
        { label: 'A', value: 'a', text: 'にじゅういちにち' },
        { label: 'B', value: 'b', text: 'にじゅういちか' },
        { label: 'C', value: 'c', text: 'はつか' },
        { label: 'D', value: 'd', text: 'にじゅういちひ' }
    ],
    answer: 'a',
    explanation: {
        correctAnswer: 'A',
        reading: { kanji: '２１日', furigana: 'にじゅういちにち', romaji: 'nijuuichinichi' },
        translation: 'Tanggal 21',
        perWordMeaning: [
            { word: '二十', reading: 'にじゅう', romaji: 'nijuu', meaning: 'dua puluh' },
            { word: '一', reading: 'いち', romaji: 'ichi', meaning: 'satu' },
            { word: '日', reading: 'にち', romaji: 'nichi', meaning: 'hari' }
        ],
        grammar: { pattern: '[Angka] + 日', explanation: 'Untuk tanggal', usage: '11-31 pakai にち' },
        whyCorrect: '21 = にじゅういち + にち',
        whyWrong: { B: 'か ❌ – Untuk hitungan hari', C: 'はつか ❌ – Tanggal 20', D: 'ひ ❌ – Kunyomi' },
        tips: '11日以降は「にち」を使う',
        difficulty: 'Menengah'
    }
};

const soal22 = {
    id: 22,
    category: 'vocabulary',
    categoryName: '📚 Kosakata',
    difficulty: 'Menengah',
    question: '「急ぎます」の意味として最も近いものはどれですか？',
    furigana: 'いそぎます',
    options: [
        { label: 'A', value: 'a', text: 'Berjalan perlahan' },
        { label: 'B', value: 'b', text: 'Bergegas' },
        { label: 'C', value: 'c', text: 'Berhenti' },
        { label: 'D', value: 'd', text: 'Menunggu' }
    ],
    answer: 'b',
    explanation: {
        correctAnswer: 'B',
        reading: { kanji: '急ぎます', furigana: 'いそぎます', romaji: 'isogimasu' },
        translation: 'Bergegas',
        perWordMeaning: [{ word: '急ぐ', reading: 'いそぐ', romaji: 'isogu', meaning: 'bergegas' }],
        grammar: { pattern: 'Kata kerja godan', explanation: 'Bentuk sopan', usage: '急いでください' },
        whyCorrect: '急ぐ = bergegas',
        whyWrong: { A: 'ゆっくり歩く', C: '止まる', D: '待つ' },
        tips: 'いそぐ = I SOON GO → bergegas',
        difficulty: 'Menengah'
    }
};

const soal23 = {
    id: 23,
    category: 'grammar',
    categoryName: '✍️ Grammar',
    difficulty: 'Agak Sulit',
    question: '「毎日漢字を勉強＿＿＿。」意味が「Saya harus belajar kanji setiap hari」になる正しい形は？',
    furigana: 'まいにちかんじをべんきょう＿＿＿。',
    options: [
        { label: 'A', value: 'a', text: 'しなければなりません' },
        { label: 'B', value: 'b', text: 'しないでもいいです' },
        { label: 'C', value: 'c', text: 'してみたいです' },
        { label: 'D', value: 'd', text: 'しそうです' }
    ],
    answer: 'a',
    explanation: {
        correctAnswer: 'A',
        reading: { kanji: '勉強しなければなりません', furigana: 'べんきょうしなければなりません', romaji: 'benkyou shinakereba narimasen' },
        translation: 'Harus belajar',
        perWordMeaning: [
            { word: 'しなければ', reading: 'しなければ', romaji: 'shinakereba', meaning: 'jika tidak' },
            { word: 'なりません', reading: 'なりません', romaji: 'narimasen', meaning: 'tidak menjadi' }
        ],
        grammar: { pattern: '〜なければなりません', explanation: 'Menyatakan kewajiban', usage: 'Harus melakukan' },
        whyCorrect: 'しなければなりません = harus',
        whyWrong: { B: 'Tidak apa-apa', C: 'Ingin mencoba', D: 'Sepertinya akan' },
        tips: 'なければなりません = HARUS',
        difficulty: 'Agak Sulit'
    }
};

const soal24 = {
    id: 24,
    category: 'particle',
    categoryName: '🔤 Partikel',
    difficulty: 'Mudah',
    question: '「明日、京都＿＿＿行きます。」正しい助詞は両方正しい。どちらも正しい選択肢は？',
    furigana: 'あした、きょうと＿＿＿いきます。',
    options: [
        { label: 'A', value: 'a', text: 'に' },
        { label: 'B', value: 'b', text: 'で' },
        { label: 'C', value: 'c', text: 'へ' },
        { label: 'D', value: 'd', text: 'を' }
    ],
    answer: 'c',
    explanation: {
        correctAnswer: 'C',
        reading: { kanji: '京都へ行きます', furigana: 'きょうとへいきます', romaji: 'Kyouto e ikimasu' },
        translation: 'Pergi ke Kyoto',
        perWordMeaning: [
            { word: 'へ', reading: 'へ', romaji: 'e', meaning: 'ke (arah)' }
        ],
        grammar: { pattern: '[Tujuan] + へ/に', explanation: 'Menunjukkan arah/tujuan', usage: 'に dan へ sama-sama bisa' },
        whyCorrect: 'へ menunjukkan arah tujuan',
        whyWrong: { A: 'に juga benar tapi opsi ini', B: 'で ❌ – Tempat', D: 'を ❌ – Objek' },
        tips: 'に = titik tujuan, へ = arah',
        difficulty: 'Mudah'
    }
};

const soal25 = {
    id: 25,
    category: 'reading',
    categoryName: '📄 Membaca',
    difficulty: 'Agak Sulit',
    question: '次の電車のアナウンスを読んで答えなさい。\n\n「ただいま、新宿駅で事故がありました。そのため、山手線は運転を見合わせています。回復まで約１時間かかる見込みです。」\n\nこのアナウンスで、山手線はどうなりますか？',
    furigana: 'つぎのでんしゃのアナウンスをよんでこたえなさい。',
    options: [
        { label: 'A', value: 'a', text: '正常に動いています' },
        { label: 'B', value: 'b', text: '遅れていますが動いています' },
        { label: 'C', value: 'c', text: '止まっています' },
        { label: 'D', value: 'd', text: '速く動いています' }
    ],
    answer: 'c',
    explanation: {
        correctAnswer: 'C',
        reading: { kanji: '運転を見合わせています', furigana: 'うんてんをみあわせています', romaji: 'unten o miawasete imasu' },
        translation: 'Menghentikan operasi',
        perWordMeaning: [
            { word: '運転', reading: 'うんてん', romaji: 'unten', meaning: 'operasi' },
            { word: '見合わせる', reading: 'みあわせる', romaji: 'miawaseru', meaning: 'menunda/menghentikan' }
        ],
        grammar: { pattern: '〜を見合わせる', explanation: 'Menghentikan sementara', usage: '運転を見合わせる' },
        whyCorrect: '運転を見合わせています = berhenti',
        whyWrong: { A: 'Normal ❌', B: 'Lambat ❌', D: 'Cepat ❌' },
        tips: '事故 + 運転を見合わせる = BERHENTI',
        difficulty: 'Agak Sulit'
    }
};

// SOAL 26-30
const soal26 = {
    id: 26,
    category: 'grammar',
    categoryName: '✍️ Grammar',
    difficulty: 'Menengah',
    question: '「雨が降っ＿＿＿、行きます。」正しい形は？',
    furigana: 'あめがふっ＿＿＿、いきます。',
    options: [
        { label: 'A', value: 'a', text: 'て' },
        { label: 'B', value: 'b', text: 'ても' },
        { label: 'C', value: 'c', text: 'た' },
        { label: 'D', value: 'd', text: 'たら' }
    ],
    answer: 'b',
    explanation: {
        correctAnswer: 'B',
        reading: { kanji: '雨が降っても行きます。', furigana: 'あめがふってもいきます。', romaji: 'Ame ga futte mo ikimasu.' },
        translation: 'Meskipun hujan, saya pergi',
        perWordMeaning: [
            { word: '降って', reading: 'ふって', romaji: 'futte', meaning: 'turun (TE)' },
            { word: 'も', reading: 'も', romaji: 'mo', meaning: 'pun/meskipun' }
        ],
        grammar: { pattern: '[TE] + も', explanation: 'Meskipun', usage: 'Menyatakan kontras' },
        whyCorrect: '降って (TE) + も = 降っても',
        whyWrong: { A: 'て ❌ – Kurang も', C: 'た ❌ – Lampau', D: 'たら ❌ – Jika' },
        tips: 'TE + も = meskipun',
        difficulty: 'Menengah'
    }
};

const soal27 = {
    id: 27,
    category: 'vocabulary',
    categoryName: '📚 Kosakata',
    difficulty: 'Mudah',
    question: '「彼女はとても親切な人です。」の「親切」の意味は？',
    furigana: 'かのじょはとてもしんせつなひとです。',
    options: [
        { label: 'A', value: 'a', text: 'Pemarah' },
        { label: 'B', value: 'b', text: 'Ramah / baik hati' },
        { label: 'C', value: 'c', text: 'Pelit' },
        { label: 'D', value: 'd', text: 'Malas' }
    ],
    answer: 'b',
    explanation: {
        correctAnswer: 'B',
        reading: { kanji: '親切', furigana: 'しんせつ', romaji: 'shinsetsu' },
        translation: 'Baik hati',
        perWordMeaning: [
            { word: '親', reading: 'しん', romaji: 'shin', meaning: 'orang tua' },
            { word: '切', reading: 'せつ', romaji: 'setsu', meaning: 'memotong' }
        ],
        grammar: { pattern: 'Na-adjective', explanation: '親切な + kata benda', usage: 'Baik hati' },
        whyCorrect: '親切 = baik hati',
        whyWrong: { A: '怒りっぽい', C: 'けち', D: '怠惰' },
        tips: '親切 = ramah, baik hati',
        difficulty: 'Mudah'
    }
};

const soal28 = {
    id: 28,
    category: 'verb',
    categoryName: '⚡ Bentuk Kata Kerja',
    difficulty: 'Menengah',
    question: '「このケーキを食べて＿＿＿ください。」正しい形は？',
    furigana: 'このケーキをたべて＿＿＿ください。',
    options: [
        { label: 'A', value: 'a', text: 'みます' },
        { label: 'B', value: 'b', text: 'みて' },
        { label: 'C', value: 'c', text: 'みたい' },
        { label: 'D', value: 'd', text: 'みる' }
    ],
    answer: 'b',
    explanation: {
        correctAnswer: 'B',
        reading: { kanji: '食べてみてください。', furigana: 'たべてみてください。', romaji: 'Tabete mite kudasai.' },
        translation: 'Tolong coba makan',
        perWordMeaning: [
            { word: '食べて', reading: 'たべて', romaji: 'tabete', meaning: 'makan (TE)' },
            { word: 'みて', reading: 'みて', romaji: 'mite', meaning: 'coba (TE dari みる)' }
        ],
        grammar: { pattern: '[TE] + みる', explanation: 'Mencoba melakukan', usage: 'Coba lakukan' },
        whyCorrect: '食べて + みて + ください',
        whyWrong: { A: 'みます ❌ – Bukan TE', C: 'みたい ❌ – Ingin', D: 'みる ❌ – Kamus' },
        tips: 'てみる = coba lakukan',
        difficulty: 'Menengah'
    }
};

const soal29 = {
    id: 29,
    category: 'grammar',
    categoryName: '✍️ Grammar',
    difficulty: 'Menengah',
    question: '「寝る＿＿＿、歯を磨きます。」正しい形は？',
    furigana: 'ねる＿＿＿、はをみがきます。',
    options: [
        { label: 'A', value: 'a', text: 'まえに' },
        { label: 'B', value: 'b', text: 'あとで' },
        { label: 'C', value: 'c', text: 'ながら' },
        { label: 'D', value: 'd', text: 'ために' }
    ],
    answer: 'a',
    explanation: {
        correctAnswer: 'A',
        reading: { kanji: '寝る前に歯を磨きます。', furigana: 'ねるまえにはをみがきます。', romaji: 'Neru mae ni ha o migakimasu.' },
        translation: 'Sebelum tidur, gosok gigi',
        perWordMeaning: [
            { word: '寝る', reading: 'ねる', romaji: 'neru', meaning: 'tidur' },
            { word: '前に', reading: 'まえに', romaji: 'mae ni', meaning: 'sebelum' }
        ],
        grammar: { pattern: '[Verb kamus] + 前に', explanation: 'Sebelum melakukan', usage: 'Sebelum ~' },
        whyCorrect: '寝る + 前に = sebelum tidur',
        whyWrong: { B: 'あとで = setelah', C: 'ながら = sambil', D: 'ために = demi' },
        tips: 'まえに = sebelum (kata kerja bentuk KAMUS)',
        difficulty: 'Menengah'
    }
};

const soal30 = {
    id: 30,
    category: 'particle',
    categoryName: '🔤 Partikel',
    difficulty: 'Menengah',
    question: '「休みの日は、友だち＿＿＿映画を見ます。」正しい助詞は？',
    furigana: 'やすみのひは、ともだち＿＿＿えいがをみます。',
    options: [
        { label: 'A', value: 'a', text: 'と' },
        { label: 'B', value: 'b', text: 'に' },
        { label: 'C', value: 'c', text: 'を' },
        { label: 'D', value: 'd', text: 'が' }
    ],
    answer: 'a',
    explanation: {
        correctAnswer: 'A',
        reading: { kanji: '友だちと映画を見ます', furigana: 'ともだちとえいがをみます', romaji: 'Tomodachi to eiga o mimasu.' },
        translation: 'Menonton film dengan teman',
        perWordMeaning: [
            { word: 'と', reading: 'と', romaji: 'to', meaning: 'dengan (bersama)' }
        ],
        grammar: { pattern: '[Orang] + と + [Aktivitas]', explanation: 'Bersama dengan', usage: 'Melakukan aktivitas bersama' },
        whyCorrect: '友だちと = dengan teman',
        whyWrong: { B: 'に ❌ – Kepada', C: 'を ❌ – Objek', D: 'が ❌ – Subjek' },
        tips: 'と = dengan (bersama-sama)',
        difficulty: 'Menengah'
    }
};

// SOAL 31-35
const soal31 = {
    id: 31,
    category: 'kanji',
    categoryName: '📖 Kanji',
    difficulty: 'Mudah',
    question: '「土曜日」の正しい読み方はどれですか？',
    furigana: 'どようび',
    options: [
        { label: 'A', value: 'a', text: 'にちようび' },
        { label: 'B', value: 'b', text: 'げつようび' },
        { label: 'C', value: 'c', text: 'どようび' },
        { label: 'D', value: 'd', text: 'きんようび' }
    ],
    answer: 'c',
    explanation: {
        correctAnswer: 'C',
        reading: { kanji: '土曜日', furigana: 'どようび', romaji: 'doyoubi' },
        translation: 'Hari Sabtu',
        perWordMeaning: [
            { word: '土', reading: 'ど', romaji: 'do', meaning: 'tanah' },
            { word: '曜日', reading: 'ようび', romaji: 'youbi', meaning: 'hari' }
        ],
        grammar: { pattern: '曜日', explanation: 'Nama hari', usage: '月火水木金土日' },
        whyCorrect: '土曜日 = Sabtu',
        whyWrong: { A: '日曜日 = Minggu', B: '月曜日 = Senin', D: '金曜日 = Jumat' },
        tips: '土 = tanah → Sabtu',
        difficulty: 'Mudah'
    }
};

const soal32 = {
    id: 32,
    category: 'vocabulary',
    categoryName: '📚 Kosakata',
    difficulty: 'Mudah',
    question: '「消します」の意味として正しいものはどれですか？',
    furigana: 'けします',
    options: [
        { label: 'A', value: 'a', text: 'Menyalakan' },
        { label: 'B', value: 'b', text: 'Mematikan / menghapus' },
        { label: 'C', value: 'c', text: 'Membuka' },
        { label: 'D', value: 'd', text: 'Menutup' }
    ],
    answer: 'b',
    explanation: {
        correctAnswer: 'B',
        reading: { kanji: '消します', furigana: 'けします', romaji: 'keshimasu' },
        translation: 'Mematikan/menghapus',
        perWordMeaning: [{ word: '消す', reading: 'けす', romaji: 'kesu', meaning: 'mematikan' }],
        grammar: { pattern: 'Kata kerja', explanation: 'Lawan dari つける', usage: '電気を消す' },
        whyCorrect: '消す = mematikan',
        whyWrong: { A: 'つける', C: '開ける', D: '閉める' },
        tips: 'けす = KEEP OFF = matikan',
        difficulty: 'Mudah'
    }
};

const soal33 = {
    id: 33,
    category: 'grammar',
    categoryName: '✍️ Grammar',
    difficulty: 'Agak Sulit',
    question: '「ケーキを全部食べて＿＿＿ました。」「Saya menghabiskan kue itu (dengan menyesal)」になる正しい形は？',
    furigana: 'ケーキをぜんぶたべて＿＿＿ました。',
    options: [
        { label: 'A', value: 'a', text: 'しまい' },
        { label: 'B', value: 'b', text: 'しも' },
        { label: 'C', value: 'c', text: 'しま' },
        { label: 'D', value: 'd', text: 'しく' }
    ],
    answer: 'a',
    explanation: {
        correctAnswer: 'A',
        reading: { kanji: '食べてしまいました', furigana: 'たべてしまいました', romaji: 'tabete shimaimashita' },
        translation: 'Menghabiskan (dengan penyesalan)',
        perWordMeaning: [
            { word: '食べて', reading: 'たべて', romaji: 'tabete', meaning: 'makan (TE)' },
            { word: 'しまいました', reading: 'しまいました', romaji: 'shimaimashita', meaning: 'selesai/penyesalan' }
        ],
        grammar: { pattern: '[TE] + しまう', explanation: 'Penyesalan/selesai', usage: 'Sayang sekali' },
        whyCorrect: '食べて + しまう = 食べてしまう',
        whyWrong: { B: 'しも ❌', C: 'しま ❌', D: 'しく ❌' },
        tips: 'てしまう = sayang/selesai',
        difficulty: 'Agak Sulit'
    }
};

const soal34 = {
    id: 34,
    category: 'particle',
    categoryName: '🔤 Partikel',
    difficulty: 'Mudah',
    question: '「私＿＿＿行きます。」「Saya juga pergi」になる正しい助詞は？',
    furigana: 'わたし＿＿＿いきます。',
    options: [
        { label: 'A', value: 'a', text: 'が' },
        { label: 'B', value: 'b', text: 'は' },
        { label: 'C', value: 'c', text: 'も' },
        { label: 'D', value: 'd', text: 'に' }
    ],
    answer: 'c',
    explanation: {
        correctAnswer: 'C',
        reading: { kanji: '私も行きます', furigana: 'わたしもいきます', romaji: 'Watashi mo ikimasu.' },
        translation: 'Saya juga pergi',
        perWordMeaning: [{ word: 'も', reading: 'も', romaji: 'mo', meaning: 'juga' }],
        grammar: { pattern: '[Benda] + も', explanation: 'Juga', usage: 'Menambahkan informasi' },
        whyCorrect: '私も = saya juga',
        whyWrong: { A: 'が ❌ – Subjek', B: 'は ❌ – Topik', D: 'に ❌ – Tujuan' },
        tips: 'も = juga',
        difficulty: 'Mudah'
    }
};

const soal35 = {
    id: 35,
    category: 'reading',
    categoryName: '📄 Membaca',
    difficulty: 'Menengah',
    question: '次のメモを読んで答えなさい。\n\n「田中さんへ\n今日は急用ができたので、会議は明日の午後３時からに変更します。場所は同じです。\n\n佐藤」\n\n会議はどうなりますか？',
    furigana: 'つぎのメモをよんでこたえなさい。',
    options: [
        { label: 'A', value: 'a', text: '今日の午後３時、場所は違う' },
        { label: 'B', value: 'b', text: '明日の午後３時、場所は同じ' },
        { label: 'C', value: 'c', text: '今日の午前中、場所は同じ' },
        { label: 'D', value: 'd', text: '明日の午前10時、場所は違う' }
    ],
    answer: 'b',
    explanation: {
        correctAnswer: 'B',
        reading: { kanji: '明日の午後３時からに変更します。場所は同じです。', furigana: 'あしたのごごさんじからにへんこうします。ばしょはおなじです。', romaji: 'Ashita no gogo sanji kara ni henkou shimasu. Basho wa onaji desu.' },
        translation: 'Diubah menjadi besok jam 3. Tempat sama',
        perWordMeaning: [
            { word: '変更', reading: 'へんこう', romaji: 'henkou', meaning: 'perubahan' },
            { word: '同じ', reading: 'おなじ', romaji: 'onaji', meaning: 'sama' }
        ],
        grammar: { pattern: '〜に変更します', explanation: 'Mengubah menjadi', usage: 'Perubahan jadwal' },
        whyCorrect: '明日の午後３時 + 場所同じ',
        whyWrong: { A: 'Hari ini ❌', C: 'Pagi ❌', D: 'Jam 10 ❌' },
        tips: '変更 = perubahan, 同じ = sama',
        difficulty: 'Menengah'
    }
};

// SOAL 36-40
const soal36 = {
    id: 36,
    category: 'grammar',
    categoryName: '✍️ Grammar',
    difficulty: 'Agak Sulit',
    question: '「日曜日は、本を読んだり、テレビを見＿＿＿します。」正しい形は？',
    furigana: 'にちようびは、ほんをよんだり、テレビをみ＿＿＿します。',
    options: [
        { label: 'A', value: 'a', text: 'る' },
        { label: 'B', value: 'b', text: 'たり' },
        { label: 'C', value: 'c', text: 'ながら' },
        { label: 'D', value: 'd', text: 'て' }
    ],
    answer: 'b',
    explanation: {
        correctAnswer: 'B',
        reading: { kanji: '見たりします', furigana: 'みたりします', romaji: 'mitari shimasu' },
        translation: 'Seperti menonton, dll',
        perWordMeaning: [{ word: 'たり', reading: 'たり', romaji: 'tari', meaning: 'contoh aktivitas' }],
        grammar: { pattern: '[TA] + り', explanation: 'Contoh aktivitas', usage: 'Dan lain-lain' },
        whyCorrect: '見た → 見たり',
        whyWrong: { A: 'る ❌', C: 'ながら ❌ – Sambil', D: 'て ❌' },
        tips: 'たり = contoh kegiatan (dan lain-lain)',
        difficulty: 'Agak Sulit'
    }
};

const soal37 = {
    id: 37,
    category: 'vocabulary',
    categoryName: '📚 Kosakata',
    difficulty: 'Mudah',
    question: '「新しい」の反対語（反意語）はどれですか？',
    furigana: 'あたらしい',
    options: [
        { label: 'A', value: 'a', text: '古い' },
        { label: 'B', value: 'b', text: '高い' },
        { label: 'C', value: 'c', text: '安い' },
        { label: 'D', value: 'd', text: '広い' }
    ],
    answer: 'a',
    explanation: {
        correctAnswer: 'A',
        reading: { kanji: '古い', furigana: 'ふるい', romaji: 'furui' },
        translation: 'Lama/usang',
        perWordMeaning: [
            { word: '新しい', reading: 'あたらしい', romaji: 'atarashii', meaning: 'baru' },
            { word: '古い', reading: 'ふるい', romaji: 'furui', meaning: 'lama' }
        ],
        grammar: { pattern: 'Antonim', explanation: 'Lawan kata', usage: 'Baru ↔ Lama' },
        whyCorrect: 'Baru antonimnya Lama',
        whyWrong: { B: '高い = mahal', C: '安い = murah', D: '広い = luas' },
        tips: 'あたらしい ↔ ふるい',
        difficulty: 'Mudah'
    }
};

const soal38 = {
    id: 38,
    category: 'verb',
    categoryName: '⚡ Bentuk Kata Kerja',
    difficulty: 'Menengah',
    question: '「私は料理が＿＿＿。」「Saya bisa masak」になる正しい形は？',
    furigana: 'わたしはりょうりが＿＿＿。',
    options: [
        { label: 'A', value: 'a', text: 'します' },
        { label: 'B', value: 'b', text: 'できます' },
        { label: 'C', value: 'c', text: 'つくります' },
        { label: 'D', value: 'd', text: 'たべます' }
    ],
    answer: 'b',
    explanation: {
        correctAnswer: 'B',
        reading: { kanji: '料理ができます', furigana: 'りょうりができます', romaji: 'Ryouri ga dekimasu.' },
        translation: 'Bisa masak',
        perWordMeaning: [{ word: 'できる', reading: 'できる', romaji: 'dekiru', meaning: 'bisa' }],
        grammar: { pattern: '[Benda] + が + できる', explanation: 'Bisa melakukan', usage: 'Kemampuan' },
        whyCorrect: '料理ができる = bisa masak',
        whyWrong: { A: 'します = melakukan', C: 'つくります = membuat', D: 'たべます = makan' },
        tips: 'できる = bisa (pakai が)',
        difficulty: 'Menengah'
    }
};

const soal39 = {
    id: 39,
    category: 'particle',
    categoryName: '🔤 Partikel',
    difficulty: 'Agak Sulit',
    question: '「私はりんご＿＿＿食べません。」意味が「Saya hanya makan apel」になる正しい助詞は？',
    furigana: 'わたしはりんご＿＿＿たべません。',
    options: [
        { label: 'A', value: 'a', text: 'だけ' },
        { label: 'B', value: 'b', text: 'しか' },
        { label: 'C', value: 'c', text: 'も' },
        { label: 'D', value: 'd', text: 'が' }
    ],
    answer: 'b',
    explanation: {
        correctAnswer: 'B',
        reading: { kanji: 'りんごしか食べません', furigana: 'りんごしかたべません', romaji: 'Ringo shika tabemasen.' },
        translation: 'Hanya makan apel',
        perWordMeaning: [{ word: 'しか', reading: 'しか', romaji: 'shika', meaning: 'hanya (dengan negatif)' }],
        grammar: { pattern: '〜しか〜ない', explanation: 'Hanya (negatif)', usage: 'Tidak lebih dari' },
        whyCorrect: 'しか + negatif = hanya',
        whyWrong: { A: 'だけ (positif)', C: 'も = juga', D: 'が = subjek' },
        tips: 'しか〜ない = hanya (dengan kata negatif)',
        difficulty: 'Agak Sulit'
    }
};

const soal40 = {
    id: 40,
    category: 'listening',
    categoryName: '🎧 Listening',
    difficulty: 'Menengah',
    question: '[DUMMY LISTENING] 音声を聞いてください。「もしもし、田中です。明日の約束ですが、急用ができて、行けなくなりました。また今度お願いします。」\n\n田中さんはどうして明日行けなくなりましたか？',
    furigana: 'もしもし、たなかです。あしたのやくそくですが、きゅうようができて、いけなくなりました。',
    options: [
        { label: 'A', value: 'a', text: '病気だから' },
        { label: 'B', value: 'b', text: '急用ができたから' },
        { label: 'C', value: 'c', text: '約束を忘れたから' },
        { label: 'D', value: 'd', text: '旅行に行くから' }
    ],
    answer: 'b',
    explanation: {
        correctAnswer: 'B',
        reading: { kanji: '急用ができて', furigana: 'きゅうようができて', romaji: 'kyuuyou ga dekite' },
        translation: 'Ada urusan mendadak',
        perWordMeaning: [
            { word: '急用', reading: 'きゅうよう', romaji: 'kyuuyou', meaning: 'urusan mendadak' }
        ],
        grammar: { pattern: '〜ができて', explanation: 'Terjadi', usage: 'Karena ada ~' },
        whyCorrect: '急用ができて = karena ada urusan mendadak',
        whyWrong: { A: 'Sakit ❌', C: 'Lupa ❌', D: 'Traveling ❌' },
        tips: '急用 = urusan mendadak',
        difficulty: 'Menengah'
    }
};

// Gabungkan semua soal 16-40
const allQuestions16to40 = [
    soal16, soal17, soal18, soal19, soal20,
    soal21, soal22, soal23, soal24, soal25,
    soal26, soal27, soal28, soal29, soal30,
    soal31, soal32, soal33, soal34, soal35,
    soal36, soal37, soal38, soal39, soal40
];

// Gabungkan dengan soal 1-15 dari part sebelumnya
// Asumsikan window.questionsPart1to15 sudah ada dari PART 2
if (window.questionsPart1to15) {
    window.questionsPart1to25 = [...window.questionsPart1to15, ...allQuestions16to40];
} else {
    window.questionsPart1to25 = allQuestions16to40;
}

window.questionsPart16to40 = allQuestions16to40;

console.log(`✅ PART 3 loaded - ${allQuestions16to40.length} soal (16-40) ditambahkan`);
console.log(`📊 Total soal 1-40: ${window.questionsPart1to25?.length || allQuestions16to40.length} soal`);