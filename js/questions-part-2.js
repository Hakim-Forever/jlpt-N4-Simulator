// ==================== DATA SOAL 1-25 (LENGKAP) ====================
// File: js/questions-part-2.js
// Melanjutkan dari soal 1-25

// SOAL 1
const soal1 = {
    id: 1,
    category: 'kanji',
    categoryName: '📖 Kanji',
    difficulty: 'Mudah',
    question: '「電車」の正しい読み方はどれですか？',
    furigana: 'でんしゃ',
    options: [
        { label: 'A', value: 'a', text: 'でんしゃ' },
        { label: 'B', value: 'b', text: 'でんちゃ' },
        { label: 'C', value: 'c', text: 'でんじゃ' },
        { label: 'D', value: 'd', text: 'でんしや' }
    ],
    answer: 'a',
    explanation: {
        correctAnswer: 'A',
        reading: { kanji: '電車', furigana: 'でんしゃ', romaji: 'densha' },
        translation: 'Kereta listrik',
        perWordMeaning: [
            { word: '電', reading: 'でん', romaji: 'den', meaning: 'listrik' },
            { word: '車', reading: 'しゃ', romaji: 'sha', meaning: 'kendaraan' }
        ],
        grammar: { pattern: 'Kanji majemuk', explanation: 'Listrik + kendaraan = kereta listrik', usage: 'Kereta listrik di Jepang.' },
        whyCorrect: 'Cara baca benar でんしゃ (densha).',
        whyWrong: { B: 'でんちゃ ❌', C: 'でんじゃ ❌', D: 'でんしや ❌' },
        tips: 'Ingat 車 bisa dibaca くるま atau しゃ',
        difficulty: 'Mudah'
    }
};

// SOAL 2
const soal2 = {
    id: 2,
    category: 'kanji',
    categoryName: '📖 Kanji',
    difficulty: 'Mudah',
    question: '「毎日」の正しい読み方はどれですか？',
    furigana: 'まいにち',
    options: [
        { label: 'A', value: 'a', text: 'まいにち' },
        { label: 'B', value: 'b', text: 'まえにち' },
        { label: 'C', value: 'c', text: 'まいひ' },
        { label: 'D', value: 'd', text: 'まいにち' }
    ],
    answer: 'a',
    explanation: {
        correctAnswer: 'A',
        reading: { kanji: '毎日', furigana: 'まいにち', romaji: 'mainichi' },
        translation: 'Setiap hari',
        perWordMeaning: [
            { word: '毎', reading: 'まい', romaji: 'mai', meaning: 'setiap' },
            { word: '日', reading: 'にち', romaji: 'nichi', meaning: 'hari' }
        ],
        grammar: { pattern: '毎 + 日', explanation: '毎 = setiap, 日 = hari', usage: 'Untuk aktivitas rutin harian.' },
        whyCorrect: '毎日 dibaca まいにち (mainichi).',
        whyWrong: { B: 'まえにち ❌', C: 'まいひ ❌' },
        tips: 'Hafalkan: 毎週, 毎年, 毎朝',
        difficulty: 'Mudah'
    }
};

// SOAL 3
const soal3 = {
    id: 3,
    category: 'vocabulary',
    categoryName: '📚 Kosakata',
    difficulty: 'Mudah',
    question: '「あした」の意味は？',
    furigana: 'あした',
    options: [
        { label: 'A', value: 'a', text: 'Kemarin' },
        { label: 'B', value: 'b', text: 'Hari ini' },
        { label: 'C', value: 'c', text: 'Besok' },
        { label: 'D', value: 'd', text: 'Lusa' }
    ],
    answer: 'c',
    explanation: {
        correctAnswer: 'C',
        reading: { kanji: '明日', furigana: 'あした', romaji: 'ashita' },
        translation: 'Besok',
        perWordMeaning: [{ word: '明日', reading: 'あした', romaji: 'ashita', meaning: 'besok' }],
        grammar: { pattern: 'Kata keterangan waktu', explanation: 'あした = besok', usage: 'Letakkan di awal kalimat.' },
        whyCorrect: 'あした adalah kata Jepang untuk BESOK.',
        whyWrong: { A: 'Kemarin = 昨日', B: 'Hari ini = 今日', D: 'Lusa = 明後日' },
        tips: 'Ingat tiga waktu: 昨日, 今日, 明日',
        difficulty: 'Mudah'
    }
};

// SOAL 4
const soal4 = {
    id: 4,
    category: 'particle',
    categoryName: '🔤 Partikel',
    difficulty: 'Menengah',
    question: '「私は毎朝６時＿＿＿起きます。」正しい助詞は？',
    furigana: 'わたしはまいあさろくじ＿＿＿おきます。',
    options: [
        { label: 'A', value: 'a', text: 'が' },
        { label: 'B', value: 'b', text: 'を' },
        { label: 'C', value: 'c', text: 'に' },
        { label: 'D', value: 'd', text: 'で' }
    ],
    answer: 'c',
    explanation: {
        correctAnswer: 'C',
        reading: { kanji: '私は毎朝６時に起きます。', furigana: 'わたしはまいあさろくじにおきます。', romaji: 'Watashi wa maiasa rokuji ni okimasu.' },
        translation: 'Saya bangun jam 6 setiap pagi.',
        perWordMeaning: [
            { word: '私', reading: 'わたし', romaji: 'watashi', meaning: 'saya' },
            { word: '毎朝', reading: 'まいあさ', romaji: 'maiasa', meaning: 'setiap pagi' },
            { word: '６時', reading: 'ろくじ', romaji: 'rokuji', meaning: 'jam 6' },
            { word: '起きます', reading: 'おきます', romaji: 'okimasu', meaning: 'bangun' }
        ],
        grammar: { pattern: '[Waktu] + に + [Kegiatan]', explanation: 'Partikel に menunjukkan waktu spesifik', usage: 'Gunakan に setelah angka jam, hari, tanggal.' },
        whyCorrect: '6時 adalah angka waktu spesifik → pakai に.',
        whyWrong: { A: 'が ❌', B: 'を ❌', D: 'で ❌' },
        tips: 'Ingat: に = "pada jam/hari/tanggal tertentu"',
        difficulty: 'Menengah'
    }
};

// SOAL 5
const soal5 = {
    id: 5,
    category: 'verb',
    categoryName: '⚡ Bentuk Kata Kerja',
    difficulty: 'Menengah',
    question: '「食べる」の「て形」はどれですか？',
    furigana: 'たべる',
    options: [
        { label: 'A', value: 'a', text: '食べって' },
        { label: 'B', value: 'b', text: '食べて' },
        { label: 'C', value: 'c', text: '食べんで' },
        { label: 'D', value: 'd', text: '食べりて' }
    ],
    answer: 'b',
    explanation: {
        correctAnswer: 'B',
        reading: { kanji: '食べる → 食べて', furigana: 'たべる → たべて', romaji: 'taberu → tabete' },
        translation: 'Makan (bentuk TE)',
        perWordMeaning: [
            { word: '食べる', reading: 'たべる', romaji: 'taberu', meaning: 'makan (bentuk biasa)' },
            { word: '食べて', reading: 'たべて', romaji: 'tabete', meaning: 'makan (bentuk TE)' }
        ],
        grammar: { pattern: 'Group 2 (Ichidan): る → て', explanation: 'Ichidan verb: hapus る, tambah て', usage: 'Bentuk TE untuk: permintaan, menghubungkan kata kerja, sedang melakukan.' },
        whyCorrect: '食べる → る dihapus → tambah て → 食べて',
        whyWrong: { A: '食べって ❌', C: '食べんで ❌', D: '食べりて ❌' },
        tips: 'Ciri ichidan: sebelum る ada i/e. Contoh: 見る, 開ける',
        difficulty: 'Menengah'
    }
};

// SOAL 6
const soal6 = {
    id: 6,
    category: 'reading',
    categoryName: '📄 Membaca',
    difficulty: 'Mudah',
    question: '次の文を読んで答えなさい：「私は毎日図書館で勉強します。図書館は静かで、集中できます。」\n\nこの人が勉強する場所はどこですか？',
    furigana: 'つぎのぶんをよんでこたえなさい',
    options: [
        { label: 'A', value: 'a', text: 'カフェ' },
        { label: 'B', value: 'b', text: '家' },
        { label: 'C', value: 'c', text: '図書館' },
        { label: 'D', value: 'd', text: '学校' }
    ],
    answer: 'c',
    explanation: {
        correctAnswer: 'C',
        reading: { kanji: '私は毎日図書館で勉強します。', furigana: 'わたしはまいにちとしょかんでべんきょうします。', romaji: 'Watashi wa mainichi toshokan de benkyou shimasu.' },
        translation: 'Saya belajar di perpustakaan setiap hari.',
        perWordMeaning: [
            { word: '毎日', reading: 'まいにち', romaji: 'mainichi', meaning: 'setiap hari' },
            { word: '図書館', reading: 'としょかん', romaji: 'toshokan', meaning: 'perpustakaan' },
            { word: '勉強します', reading: 'べんきょうします', romaji: 'benkyou shimasu', meaning: 'belajar' }
        ],
        grammar: { pattern: '～で勉強します', explanation: 'Partikel で menunjukkan TEMPAT aktivitas.', usage: '[Tempat] + で + [Aktivitas]' },
        whyCorrect: 'Kalimat pertama: 図書館で勉強します',
        whyWrong: { A: 'カフェ ❌', B: '家 ❌', D: '学校 ❌' },
        tips: 'Cari kata kunci: tempat + で + aktivitas',
        difficulty: 'Mudah'
    }
};

// SOAL 7
const soal7 = {
    id: 7,
    category: 'verb',
    categoryName: '⚡ Bentuk Kata Kerja',
    difficulty: 'Menengah',
    question: '「書く」の「ない形」はどれですか？',
    furigana: 'かく',
    options: [
        { label: 'A', value: 'a', text: '書かない' },
        { label: 'B', value: 'b', text: '書かないい' },
        { label: 'C', value: 'c', text: '書かあない' },
        { label: 'D', value: 'd', text: '書きない' }
    ],
    answer: 'a',
    explanation: {
        correctAnswer: 'A',
        reading: { kanji: '書く → 書かない', furigana: 'かく → かかない', romaji: 'kaku → kakanai' },
        translation: 'Menulis → tidak menulis',
        perWordMeaning: [
            { word: '書く', reading: 'かく', romaji: 'kaku', meaning: 'menulis' },
            { word: '書かない', reading: 'かかない', romaji: 'kakanai', meaning: 'tidak menulis' }
        ],
        grammar: { pattern: 'Godan verb: ubah akhiran ke あ + ない', explanation: '書く (kaku) → く → か + ない = 書かない', usage: 'ない形 untuk kalimat negatif biasa.' },
        whyCorrect: '書く adalah godan verb (akhiran く) → か + ない.',
        whyWrong: { B: '書かないい ❌', C: '書かあない ❌', D: '書きない ❌' },
        tips: 'Ingat: nai form = akhiran ke baris あ + ない. Kecuali う jadi わ',
        difficulty: 'Menengah'
    }
};

// SOAL 8
const soal8 = {
    id: 8,
    category: 'grammar',
    categoryName: '✍️ Grammar',
    difficulty: 'Menengah',
    question: '「わたしはすし＿＿＿たべたいです。」正しい助詞は？',
    furigana: 'わたしはすし＿＿＿たべたいです。',
    options: [
        { label: 'A', value: 'a', text: 'は' },
        { label: 'B', value: 'b', text: 'が' },
        { label: 'C', value: 'c', text: 'を' },
        { label: 'D', value: 'd', text: 'に' }
    ],
    answer: 'b',
    explanation: {
        correctAnswer: 'B',
        reading: { kanji: '私は寿司が食べたいです。', furigana: 'わたしはすしがたべたいです。', romaji: 'Watashi wa sushi ga tabetai desu.' },
        translation: 'Saya ingin makan sushi.',
        perWordMeaning: [
            { word: '私', reading: 'わたし', romaji: 'watashi', meaning: 'saya' },
            { word: '寿司', reading: 'すし', romaji: 'sushi', meaning: 'sushi' },
            { word: '食べたい', reading: 'たべたい', romaji: 'tabetai', meaning: 'ingin makan' }
        ],
        grammar: { pattern: '[Benda] + が + [Kata Kerja bentuk たい]', explanation: '～たい = ingin melakukan. Objek yang diinginkan pakai が.', usage: 'Gunakan untuk menyatakan keinginan.' },
        whyCorrect: 'Objek yang diinginkan (sushi) pakai が',
        whyWrong: { A: 'は ❌', C: 'を ❌', D: 'に ❌' },
        tips: 'Ingat: たい = ingin. Objeknya pakai が',
        difficulty: 'Menengah'
    }
};

// SOAL 9
const soal9 = {
    id: 9,
    category: 'listening',
    categoryName: '🎧 Listening',
    difficulty: 'Mudah',
    question: '[DUMMY LISTENING] 音声: 「明日は雨が降るそうです。」\n\n天気はどうなりそうですか？',
    furigana: 'あしたはあめがふるそうです。',
    options: [
        { label: 'A', value: 'a', text: '晴れ' },
        { label: 'B', value: 'b', text: '雨' },
        { label: 'C', value: 'c', text: '曇り' },
        { label: 'D', value: 'd', text: '雪' }
    ],
    answer: 'b',
    explanation: {
        correctAnswer: 'B',
        reading: { kanji: '明日は雨が降るそうです。', furigana: 'あしたはあめがふるそうです。', romaji: 'Ashita wa ame ga furu sou desu.' },
        translation: '"Kata orang besok akan hujan." → Cuaca bagaimana?',
        perWordMeaning: [
            { word: '明日', reading: 'あした', romaji: 'ashita', meaning: 'besok' },
            { word: '雨', reading: 'あめ', romaji: 'ame', meaning: 'hujan' },
            { word: '降る', reading: 'ふる', romaji: 'furu', meaning: 'turun' }
        ],
        grammar: { pattern: '[Kalimat biasa] + そうです', explanation: '～そうです = "saya dengar / kata orang"', usage: 'Menyampaikan informasi dari orang lain.' },
        whyCorrect: 'Kalimat mengatakan 雨が降るそうです → jawaban 雨',
        whyWrong: { A: '晴れ ❌', C: '曇り ❌', D: '雪 ❌' },
        tips: 'Perhatikan kata そうです',
        difficulty: 'Mudah'
    }
};

// SOAL 10
const soal10 = {
    id: 10,
    category: 'grammar',
    categoryName: '✍️ Grammar',
    difficulty: 'Sulit',
    question: '「宿題を忘れてしまいました。」の意味は？',
    furigana: 'しゅくだいをわすれてしまいました。',
    options: [
        { label: 'A', value: 'a', text: 'Saya lupa pekerjaan rumah' },
        { label: 'B', value: 'b', text: 'Saya sengaja melupakan PR' },
        { label: 'C', value: 'c', text: 'Saya tidak sengaja lupa PR (menyesal)' },
        { label: 'D', value: 'd', text: 'Saya akan lupa PR' }
    ],
    answer: 'c',
    explanation: {
        correctAnswer: 'C',
        reading: { kanji: '宿題を忘れてしまいました。', furigana: 'しゅくだいをわすれてしまいました。', romaji: 'Shukudai o wasurete shimaimashita.' },
        translation: 'Saya (tidak sengaja) lupa PR (dan menyesal).',
        perWordMeaning: [
            { word: '宿題', reading: 'しゅくだい', romaji: 'shukudai', meaning: 'pekerjaan rumah' },
            { word: '忘れて', reading: 'わすれて', romaji: 'wasurete', meaning: 'lupa (bentuk TE)' },
            { word: 'しまいました', reading: 'しまいました', romaji: 'shimaimashita', meaning: 'telah selesai dengan penyesalan' }
        ],
        grammar: { pattern: '[Bentuk te] + しまう', explanation: 'Bentuk TE + しまう = (1) menyelesaikan, (2) tidak sengaja, (3) penyesalan.', usage: 'Bentuk sopan lampau: てしまいました.' },
        whyCorrect: 'Dalam konteks lupa PR, てしまう menunjukkan penyesalan',
        whyWrong: { A: '❌', B: '❌', D: '❌' },
        tips: 'Kalau lihat てしまった = tidak sengaja dan menyesal',
        difficulty: 'Sulit'
    }
};

// SOAL 11-15 (disingkat untuk efisiensi, tetap lengkap di file asli)
const soal11 = { id: 11, category: 'kanji', categoryName: '📖 Kanji', difficulty: 'Menengah', question: '「人」の音読みとして正しいものはどれですか？', furigana: 'ひと', options: [{ label: 'A', value: 'a', text: 'ひと' }, { label: 'B', value: 'b', text: 'じん' }, { label: 'C', value: 'c', text: 'にん' }, { label: 'D', value: 'd', text: 'と' }], answer: 'b', explanation: { correctAnswer: 'B', reading: { kanji: '人', furigana: 'じん', romaji: 'jin' }, translation: 'Orang', perWordMeaning: [{ word: '人', reading: 'じん', romaji: 'jin', meaning: 'orang' }], grammar: { pattern: '音読み', explanation: 'Bacaan Cina', usage: 'Kata majemuk' }, whyCorrect: '音読みで最も一般的なのは「じん」', whyWrong: { A: 'ひと ❌', C: 'にん ❌', D: 'と ❌' }, tips: 'Ingat: 日本人 (Nihonjin)', difficulty: 'Menengah' } };
const soal12 = { id: 12, category: 'vocabulary', categoryName: '📚 Kosakata', difficulty: 'Mudah', question: '「ひま」の意味として正しいものはどれですか？', furigana: 'ひま', options: [{ label: 'A', value: 'a', text: 'Sibuk' }, { label: 'B', value: 'b', text: 'Luar biasa' }, { label: 'C', value: 'c', text: 'Lapar' }, { label: 'D', value: 'd', text: 'Waktu luang' }], answer: 'd', explanation: { correctAnswer: 'D', reading: { kanji: '暇', furigana: 'ひま', romaji: 'hima' }, translation: 'Waktu luang', perWordMeaning: [{ word: '暇', reading: 'ひま', romaji: 'hima', meaning: 'waktu luang' }], grammar: { pattern: 'Na-adjective', explanation: '暇な時間', usage: 'ひまがある' }, whyCorrect: 'ひま = waktu luang', whyWrong: { A: '忙しい', B: 'すごい', C: 'おなかすいた' }, tips: 'ひま = waktu santai', difficulty: 'Mudah' } };
const soal13 = { id: 13, category: 'grammar', categoryName: '✍️ Grammar', difficulty: 'Menengah', question: '「このりょうりはから＿＿＿すぎます。」正しい形は？', furigana: 'このりょうりはから＿＿＿すぎます。', options: [{ label: 'A', value: 'a', text: 'い' }, { label: 'B', value: 'b', text: 'く' }, { label: 'C', value: 'c', text: 'かった' }, { label: 'D', value: 'd', text: 'いかった' }], answer: 'b', explanation: { correctAnswer: 'B', reading: { kanji: '辛すぎます', furigana: 'からすぎます', romaji: 'karasugimasu' }, translation: 'Terlalu pedas', perWordMeaning: [{ word: '辛い', reading: 'からい', romaji: 'karai', meaning: 'pedas' }], grammar: { pattern: 'い形容詞 + すぎる', explanation: 'Hapus い, tambah すぎる', usage: '辛い → 辛すぎる' }, whyCorrect: '辛い → 辛 + すぎる', whyWrong: { A: 'い ❌', C: 'かった ❌', D: 'いかった ❌' }, tips: 'I-adjective: いを取って「すぎる」', difficulty: 'Menengah' } };
const soal14 = { id: 14, category: 'particle', categoryName: '🔤 Partikel', difficulty: 'Menengah', question: '「駅＿＿＿友だちに会いました。」正しい助詞は？', furigana: 'えき＿＿＿ともだちにあいました。', options: [{ label: 'A', value: 'a', text: 'に' }, { label: 'B', value: 'b', text: 'で' }, { label: 'C', value: 'c', text: 'を' }, { label: 'D', value: 'd', text: 'へ' }], answer: 'b', explanation: { correctAnswer: 'B', reading: { kanji: '駅で会いました', furigana: 'えきでありました', romaji: 'Eki de aimashita' }, translation: 'Bertemu di stasiun', perWordMeaning: [{ word: '会う', reading: 'あう', romaji: 'au', meaning: 'bertemu' }], grammar: { pattern: '[Tempat] + で + [Aktivitas]', explanation: 'Partikel で untuk tempat aktivitas', usage: '駅で会う' }, whyCorrect: '会う adalah aktivitas → tempat pakai で', whyWrong: { A: 'に ❌', C: 'を ❌', D: 'へ ❌' }, tips: 'Aktivitas pakai で, keberadaan pakai に', difficulty: 'Menengah' } };
const soal15 = { id: 15, category: 'verb', categoryName: '⚡ Bentuk Kata Kerja', difficulty: 'Agak Sulit', question: '「私は友だちに日本語を教えて＿＿＿。」正しい形は？', furigana: 'わたしはともだちににほんごをおしえて＿＿＿。', options: [{ label: 'A', value: 'a', text: 'あげました' }, { label: 'B', value: 'b', text: 'もらいました' }, { label: 'C', value: 'c', text: 'くれました' }, { label: 'D', value: 'd', text: 'やりました' }], answer: 'a', explanation: { correctAnswer: 'A', reading: { kanji: '教えてあげました', furigana: 'おしえてあげました', romaji: 'oshiete agemashita' }, translation: 'Saya mengajari', perWordMeaning: [{ word: 'あげる', reading: 'あげる', romaji: 'ageru', meaning: 'memberi' }], grammar: { pattern: '〜てあげる', explanation: 'Melakukan untuk orang lain', usage: 'Saya → orang lain' }, whyCorrect: 'Subjek saya, penerima teman → あげる', whyWrong: { B: 'もらう ❌', C: 'くれる ❌', D: 'やる ❌' }, tips: 'あげる = give (saya → orang lain)', difficulty: 'Agak Sulit' } };

// SOAL 16-25 (DITAMBAHKAN - INI YANG SEBELUMNYA MISSING)
const soal16 = {
    id: 16, category: 'reading', categoryName: '📄 Membaca', difficulty: 'Menengah',
    question: '次のメールを読んで答えなさい。\n\n「田中さん、今週の土曜日にパーティーをします。もし時間があったら、ぜひ来てください。場所は私の家です。何か飲み物を持ってきてください。」\n\nこのメールで、読む人がしなければならないことは何ですか？',
    furigana: 'つぎのメールをよんでこたえなさい',
    options: [{ label: 'A', value: 'a', text: '食べ物を持って行く' }, { label: 'B', value: 'b', text: '飲み物を持って行く' }, { label: 'C', value: 'c', text: 'お金を持って行く' }, { label: 'D', value: 'd', text: '何も持って行かない' }],
    answer: 'b',
    explanation: { correctAnswer: 'B', reading: { kanji: '飲み物を持ってきてください', furigana: 'のみものをもってきてください', romaji: 'nomimono o motte kite kudasai' }, translation: 'Tolong bawa minuman', perWordMeaning: [{ word: '飲み物', reading: 'のみもの', romaji: 'nomimono', meaning: 'minuman' }], grammar: { pattern: '〜てきてください', explanation: 'Bawa ke sini', usage: 'Tolong bawa' }, whyCorrect: 'Email mengatakan: 飲み物を持ってきてください', whyWrong: { A: 'Makanan tidak disebut', C: 'Uang tidak disebut', D: 'Justru diminta bawa minuman' }, tips: 'Kata kunci: 飲み物', difficulty: 'Menengah' }
};

const soal17 = { id: 17, category: 'grammar', categoryName: '✍️ Grammar', difficulty: 'Menengah', question: '「音楽を＿＿＿ながら勉強します。」正しい形は？', furigana: 'おんがくを＿＿＿ながらべんきょうします。', options: [{ label: 'A', value: 'a', text: '聞く' }, { label: 'B', value: 'b', text: '聞いて' }, { label: 'C', value: 'c', text: '聞き' }, { label: 'D', value: 'd', text: '聞いた' }], answer: 'c', explanation: { correctAnswer: 'C', reading: { kanji: '聞きながら', furigana: 'ききながら', romaji: 'kikinagara' }, translation: 'Sambil mendengar', perWordMeaning: [{ word: '聞き', reading: 'きき', romaji: 'kiki', meaning: 'dengar (stem)' }], grammar: { pattern: '[Stem] + ながら', explanation: 'Sambil', usage: 'Dua aktivitas bersamaan' }, whyCorrect: '聞く → 聞き → 聞きながら', whyWrong: { A: '聞く ❌', B: '聞いて ❌', D: '聞いた ❌' }, tips: 'ます形の「ます」を取って「ながら」', difficulty: 'Menengah' } };
const soal18 = { id: 18, category: 'vocabulary', categoryName: '📚 Kosakata', difficulty: 'Mudah', question: '「再来週」の正しい読み方はどれですか？', furigana: 'さらいしゅう', options: [{ label: 'A', value: 'a', text: 'こんしゅう' }, { label: 'B', value: 'b', text: 'らいしゅう' }, { label: 'C', value: 'c', text: 'さらいしゅう' }, { label: 'D', value: 'd', text: 'せんしゅう' }], answer: 'c', explanation: { correctAnswer: 'C', reading: { kanji: '再来週', furigana: 'さらいしゅう', romaji: 'saraishuu' }, translation: 'Dua minggu lagi', perWordMeaning: [{ word: '再来週', reading: 'さらいしゅう', romaji: 'saraishuu', meaning: 'dua minggu lagi' }], grammar: { pattern: '再来〜', explanation: 'Dua periode ke depan', usage: '再来週, 再来月' }, whyCorrect: '再来週 = saraishuu', whyWrong: { A: '今週', B: '来週', D: '先週' }, tips: '来週 = minggu depan, 再来週 = minggu depan lagi', difficulty: 'Mudah' } };
const soal19 = { id: 19, category: 'particle', categoryName: '🔤 Partikel', difficulty: 'Menengah', question: '「テストは９時＿＿＿12時です。」正しい助詞は？', furigana: 'テストはくじ＿＿＿じゅうにじです。', options: [{ label: 'A', value: 'a', text: 'に' }, { label: 'B', value: 'b', text: 'が' }, { label: 'C', value: 'c', text: 'まで' }, { label: 'D', value: 'd', text: 'の' }], answer: 'c', explanation: { correctAnswer: 'C', reading: { kanji: '9時から12時', furigana: 'くじからじゅうにじ', romaji: 'kuji kara juuniji' }, translation: 'Dari jam 9 sampai jam 12', perWordMeaning: [{ word: 'まで', reading: 'まで', romaji: 'made', meaning: 'sampai' }], grammar: { pattern: '〜から〜まで', explanation: 'Rentang', usage: 'Dari titik awal ke titik akhir' }, whyCorrect: 'Rentang waktu sampai jam 12', whyWrong: { A: 'に ❌', B: 'が ❌', D: 'の ❌' }, tips: 'から = mulai, まで = sampai', difficulty: 'Menengah' } };
const soal20 = { id: 20, category: 'verb', categoryName: '⚡ Bentuk Kata Kerja', difficulty: 'Agak Sulit', question: '「私は日本語が＿＿＿。」意味が「Saya bisa bahasa Jepang」になる正しい形は？', furigana: 'わたしはにほんごが＿＿＿。', options: [{ label: 'A', value: 'a', text: '話します' }, { label: 'B', value: 'b', text: '話せます' }, { label: 'C', value: 'c', text: '話します' }, { label: 'D', value: 'd', text: '話しましょう' }], answer: 'b', explanation: { correctAnswer: 'B', reading: { kanji: '話せます', furigana: 'はなせます', romaji: 'hanasemasu' }, translation: 'Bisa bicara', perWordMeaning: [{ word: '話す', reading: 'はなす', romaji: 'hanasu', meaning: 'bicara' }], grammar: { pattern: 'Godan: う→える', explanation: 'Bentuk potensial', usage: 'Kemampuan' }, whyCorrect: '話す → 話せる', whyWrong: { A: '話します ❌', C: 'Sama', D: '話しましょう ❌' }, tips: 'Group 1: う→える', difficulty: 'Agak Sulit' } };
const soal21 = { id: 21, category: 'kanji', categoryName: '📖 Kanji', difficulty: 'Menengah', question: '「２１日」の正しい読み方はどれですか？', furigana: 'にじゅういちにち', options: [{ label: 'A', value: 'a', text: 'にじゅういちにち' }, { label: 'B', value: 'b', text: 'にじゅういちか' }, { label: 'C', value: 'c', text: 'はつか' }, { label: 'D', value: 'd', text: 'にじゅういちひ' }], answer: 'a', explanation: { correctAnswer: 'A', reading: { kanji: '２１日', furigana: 'にじゅういちにち', romaji: 'nijuuichinichi' }, translation: 'Tanggal 21', perWordMeaning: [{ word: '日', reading: 'にち', romaji: 'nichi', meaning: 'tanggal' }], grammar: { pattern: '[Angka] + 日', explanation: 'Untuk tanggal', usage: '11-31 pakai にち' }, whyCorrect: '21 = にじゅういち + にち', whyWrong: { B: 'か ❌', C: 'はつか ❌', D: 'ひ ❌' }, tips: '11日以降は「にち」', difficulty: 'Menengah' } };
const soal22 = { id: 22, category: 'vocabulary', categoryName: '📚 Kosakata', difficulty: 'Menengah', question: '「急ぎます」の意味として最も近いものはどれですか？', furigana: 'いそぎます', options: [{ label: 'A', value: 'a', text: 'Berjalan perlahan' }, { label: 'B', value: 'b', text: 'Bergegas' }, { label: 'C', value: 'c', text: 'Berhenti' }, { label: 'D', value: 'd', text: 'Menunggu' }], answer: 'b', explanation: { correctAnswer: 'B', reading: { kanji: '急ぎます', furigana: 'いそぎます', romaji: 'isogimasu' }, translation: 'Bergegas', perWordMeaning: [{ word: '急ぐ', reading: 'いそぐ', romaji: 'isogu', meaning: 'bergegas' }], grammar: { pattern: 'Kata kerja', explanation: 'Bentuk sopan', usage: '急いでください' }, whyCorrect: '急ぐ = bergegas', whyWrong: { A: 'ゆっくり歩く', C: '止まる', D: '待つ' }, tips: 'いそぐ = bergegas', difficulty: 'Menengah' } };
const soal23 = { id: 23, category: 'grammar', categoryName: '✍️ Grammar', difficulty: 'Agak Sulit', question: '「毎日漢字を勉強＿＿＿。」意味が「Saya harus belajar kanji setiap hari」になる正しい形は？', furigana: 'まいにちかんじをべんきょう＿＿＿。', options: [{ label: 'A', value: 'a', text: 'しなければなりません' }, { label: 'B', value: 'b', text: 'しないでもいいです' }, { label: 'C', value: 'c', text: 'してみたいです' }, { label: 'D', value: 'd', text: 'しそうです' }], answer: 'a', explanation: { correctAnswer: 'A', reading: { kanji: 'しなければなりません', furigana: 'しなければなりません', romaji: 'shinakereba narimasen' }, translation: 'Harus', perWordMeaning: [{ word: 'しなければ', reading: 'しなければ', romaji: 'shinakereba', meaning: 'jika tidak' }], grammar: { pattern: '〜なければなりません', explanation: 'Kewajiban', usage: 'Harus melakukan' }, whyCorrect: 'しなければなりません = harus', whyWrong: { B: 'Tidak apa-apa', C: 'Ingin mencoba', D: 'Sepertinya akan' }, tips: 'なければなりません = HARUS', difficulty: 'Agak Sulit' } };
const soal24 = { id: 24, category: 'particle', categoryName: '🔤 Partikel', difficulty: 'Mudah', question: '「明日、京都＿＿＿行きます。」正しい助詞は両方正しい。どちらも正しい選択肢は？', furigana: 'あした、きょうと＿＿＿いきます。', options: [{ label: 'A', value: 'a', text: 'に' }, { label: 'B', value: 'b', text: 'で' }, { label: 'C', value: 'c', text: 'へ' }, { label: 'D', value: 'd', text: 'を' }], answer: 'c', explanation: { correctAnswer: 'C', reading: { kanji: '京都へ行きます', furigana: 'きょうとへいきます', romaji: 'Kyouto e ikimasu' }, translation: 'Pergi ke Kyoto', perWordMeaning: [{ word: 'へ', reading: 'へ', romaji: 'e', meaning: 'ke (arah)' }], grammar: { pattern: '[Tujuan] + へ/に', explanation: 'Arah/tujuan', usage: 'に dan へ sama-sama bisa' }, whyCorrect: 'へ = arah tujuan', whyWrong: { A: 'に juga benar', B: 'で ❌', D: 'を ❌' }, tips: 'に = titik tujuan, へ = arah', difficulty: 'Mudah' } };
const soal25 = { id: 25, category: 'reading', categoryName: '📄 Membaca', difficulty: 'Agak Sulit', question: '次の電車のアナウンスを読んで答えなさい。\n\n「ただいま、新宿駅で事故がありました。そのため、山手線は運転を見合わせています。回復まで約１時間かかる見込みです。」\n\nこのアナウンスで、山手線はどうなりますか？', furigana: 'つぎのでんしゃのアナウンス', options: [{ label: 'A', value: 'a', text: '正常に動いています' }, { label: 'B', value: 'b', text: '遅れていますが動いています' }, { label: 'C', value: 'c', text: '止まっています' }, { label: 'D', value: 'd', text: '速く動いています' }], answer: 'c', explanation: { correctAnswer: 'C', reading: { kanji: '運転を見合わせています', furigana: 'うんてんをみあわせています', romaji: 'unten o miawasete imasu' }, translation: 'Menghentikan operasi', perWordMeaning: [{ word: '運転', reading: 'うんてん', romaji: 'unten', meaning: 'operasi' }], grammar: { pattern: '〜を見合わせる', explanation: 'Menghentikan sementara', usage: '運転を見合わせる' }, whyCorrect: '運転を見合わせています = berhenti', whyWrong: { A: 'Normal ❌', B: 'Lambat ❌', D: 'Cepat ❌' }, tips: '事故 + 運転を見合わせる = BERHENTI', difficulty: 'Agak Sulit' } };

// Penggabungan FINAL untuk PART 2
const soal1to15 = [soal1, soal2, soal3, soal4, soal5, soal6, soal7, soal8, soal9, soal10, soal11, soal12, soal13, soal14, soal15];
const soal16to25 = [soal16, soal17, soal18, soal19, soal20, soal21, soal22, soal23, soal24, soal25];
const allQuestions1to25 = [...soal1to15, ...soal16to25];

window.questionsPart1to25 = allQuestions1to25;

console.log(`✅ PART 2 FIXED - ${allQuestions1to25.length} soal (1-25)`);
console.log("IDs:", allQuestions1to25.map(q => q.id).join(", "));