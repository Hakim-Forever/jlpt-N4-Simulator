// ==================== DATA SOAL 61-80 ====================
// File: js/questions-part-5.js
// Melanjutkan dari soal 61-80

// SOAL 61 - Grammar (〜ていく)
const soal61 = {
    id: 61,
    category: 'grammar',
    categoryName: '✍️ Grammar',
    difficulty: 'Agak Sulit',
    question: '「これからも日本語の勉強を続けて＿＿＿つもりです。」正しい形は？',
    furigana: 'これからもにほんごのべんきょうをつづけて＿＿＿つもりです。',
    options: [
        { label: 'A', value: 'a', text: 'いきます' },
        { label: 'B', value: 'b', text: 'きました' },
        { label: 'C', value: 'c', text: 'いった' },
        { label: 'D', value: 'd', text: 'くる' }
    ],
    answer: 'a',
    explanation: {
        correctAnswer: 'A',
        reading: { kanji: '続けていく', furigana: 'つづけていく', romaji: 'tsuzukete iku' },
        translation: 'Akan terus melanjutkan',
        perWordMeaning: [
            { word: '続けて', reading: 'つづけて', romaji: 'tsuzukete', meaning: 'melanjutkan (TE)' },
            { word: 'いく', reading: 'いく', romaji: 'iku', meaning: 'pergi / akan terus' }
        ],
        grammar: { pattern: '[TE] + いく', explanation: 'Perubahan ke masa depan', usage: 'Dari sekarang ke depan' },
        whyCorrect: '続けていく = akan terus melanjutkan ke depan',
        whyWrong: { B: 'きました = dari masa lalu', C: 'いった = pergi (lampau)', D: 'くる = datang' },
        tips: 'いく = GO ke depan (future)',
        difficulty: 'Agak Sulit'
    }
};

// SOAL 62 - Vocabulary (割引)
const soal62 = {
    id: 62,
    category: 'vocabulary',
    categoryName: '📚 Kosakata',
    difficulty: 'Menengah',
    question: '「割引」の意味として正しいものはどれですか？',
    furigana: 'わりびき',
    options: [
        { label: 'A', value: 'a', text: 'Harga normal' },
        { label: 'B', value: 'b', text: 'Diskon / potongan harga' },
        { label: 'C', value: 'c', text: 'Pajak' },
        { label: 'D', value: 'd', text: 'Ongkos kirim' }
    ],
    answer: 'b',
    explanation: {
        correctAnswer: 'B',
        reading: { kanji: '割引', furigana: 'わりびき', romaji: 'waribiki' },
        translation: 'Diskon',
        perWordMeaning: [
            { word: '割', reading: 'わり', romaji: 'wari', meaning: 'potongan' },
            { word: '引', reading: 'びき', romaji: 'biki', meaning: 'mengurangi' }
        ],
        grammar: { pattern: '[Angka] + 割引', explanation: 'Diskon persen', usage: '2割引 = diskon 20%' },
        whyCorrect: '割引 = potongan harga',
        whyWrong: { A: '定価', C: '税金', D: '送料' },
        tips: '割引 = diskon',
        difficulty: 'Menengah'
    }
};

// SOAL 63 - Particle (や)
const soal63 = {
    id: 63,
    category: 'particle',
    categoryName: '🔤 Partikel',
    difficulty: 'Menengah',
    question: '「日曜日は、買い物＿＿＿掃除などをします。」正しい助詞は？',
    furigana: 'にちようびは、かいもの＿＿＿そうじなどをします。',
    options: [
        { label: 'A', value: 'a', text: 'と' },
        { label: 'B', value: 'b', text: 'や' },
        { label: 'C', value: 'c', text: 'も' },
        { label: 'D', value: 'd', text: 'に' }
    ],
    answer: 'b',
    explanation: {
        correctAnswer: 'B',
        reading: { kanji: '買い物や掃除', furigana: 'かいものやそうじ', romaji: 'kaimono ya souji' },
        translation: 'Belanja, bersih-bersih, dll',
        perWordMeaning: [{ word: 'や', reading: 'や', romaji: 'ya', meaning: 'dan (contoh)' }],
        grammar: { pattern: 'A + や + B + など', explanation: 'Contoh (tidak lengkap)', usage: 'Dan lain-lain' },
        whyCorrect: 'や = contoh (masih ada yang lain)',
        whyWrong: { A: 'と = lengkap', C: 'も = juga', D: 'に = tujuan' },
        tips: 'や = dan lain-lain (contoh)',
        difficulty: 'Menengah'
    }
};

// SOAL 64 - Reading (Brosur Wisata)
const soal64 = {
    id: 64,
    category: 'reading',
    categoryName: '📄 Membaca',
    difficulty: 'Agak Sulit',
    question: '次の旅行のパンフレットを読んで答えなさい。\n\n「【北海道3日間の旅】\n1日目: 札幌到着、市内観光\n2日目: 小樽へ。運河やガラス工芸を楽しむ\n3日目: 旭山動物園。ペンギンの散歩が有名\n※2日目の夜は自由行動です。」\n\n2日目の夜、何をしますか？',
    furigana: 'つぎのりょこうのパンフレットをよんでこたえなさい。',
    options: [
        { label: 'A', value: 'a', text: '小樽の運河を見る' },
        { label: 'B', value: 'b', text: '旭山動物園に行く' },
        { label: 'C', value: 'c', text: '自由に過ごす' },
        { label: 'D', value: 'd', text: '札幌で観光する' }
    ],
    answer: 'c',
    explanation: {
        correctAnswer: 'C',
        reading: { kanji: '自由行動', furigana: 'じゆうこうどう', romaji: 'jiyuu koudou' },
        translation: 'Aktivitas bebas',
        perWordMeaning: [
            { word: '自由', reading: 'じゆう', romaji: 'jiyuu', meaning: 'bebas' },
            { word: '行動', reading: 'こうどう', romaji: 'koudou', meaning: 'aktivitas' }
        ],
        grammar: { pattern: '〜は自由行動です', explanation: 'Waktu bebas', usage: 'Tidak ada kegiatan terjadwal' },
        whyCorrect: '2日目の夜は自由行動 = bebas',
        whyWrong: { A: 'Kegiatan siang', B: 'Hari ke-3', D: 'Hari ke-1' },
        tips: '自由行動 = waktu bebas',
        difficulty: 'Agak Sulit'
    }
};

// SOAL 65 - Grammar (〜させられる)
const soal65 = {
    id: 65,
    category: 'grammar',
    categoryName: '✍️ Grammar',
    difficulty: 'Sulit',
    question: '「子供の時、毎日ピアノの練習を＿＿＿ました。」意味が「Waktu kecil, saya dipaksa latihan piano setiap hari」になる正しい形は？',
    furigana: 'こどものとき、まいにちピアノのれんしゅうを＿＿＿ました。',
    options: [
        { label: 'A', value: 'a', text: 'させられ' },
        { label: 'B', value: 'b', text: 'させ' },
        { label: 'C', value: 'c', text: 'され' },
        { label: 'D', value: 'd', text: 'でき' }
    ],
    answer: 'a',
    explanation: {
        correctAnswer: 'A',
        reading: { kanji: 'させられました', furigana: 'させられました', romaji: 'saseraremashita' },
        translation: 'Dipaksa',
        perWordMeaning: [{ word: 'させられる', reading: 'させられる', romaji: 'saserareru', meaning: 'dipaksa' }],
        grammar: { pattern: 'Kausatif pasif', explanation: 'Dipaksa melakukan', usage: 'Tidak mau tapi terpaksa' },
        whyCorrect: '練習させられる = dipaksa latihan',
        whyWrong: { B: 'させる = menyuruh', C: 'される = pasif biasa', D: 'できる = bisa' },
        tips: 'させられる = dipaksa',
        difficulty: 'Sulit'
    }
};

// SOAL 66 - Vocabulary (予約)
const soal66 = {
    id: 66,
    category: 'vocabulary',
    categoryName: '📚 Kosakata',
    difficulty: 'Mudah',
    question: '「予約」の意味として正しいものはどれですか？',
    furigana: 'よやく',
    options: [
        { label: 'A', value: 'a', text: 'Pembatalan' },
        { label: 'B', value: 'b', text: 'Reservasi / pesan' },
        { label: 'C', value: 'c', text: 'Tiket' },
        { label: 'D', value: 'd', text: 'Antrian' }
    ],
    answer: 'b',
    explanation: {
        correctAnswer: 'B',
        reading: { kanji: '予約', furigana: 'よやく', romaji: 'yoyaku' },
        translation: 'Reservasi',
        perWordMeaning: [
            { word: '予', reading: 'よ', romaji: 'yo', meaning: 'sebelumnya' },
            { word: '約', reading: 'やく', romaji: 'yaku', meaning: 'janji' }
        ],
        grammar: { pattern: '〜を予約する', explanation: 'Melakukan reservasi', usage: 'Hotel, restoran, tiket' },
        whyCorrect: '予約 = reservasi',
        whyWrong: { A: 'キャンセル', C: 'チケット', D: '列' },
        tips: 'よやく = reservasi',
        difficulty: 'Mudah'
    }
};

// SOAL 67 - Grammar (〜たまま)
const soal67 = {
    id: 67,
    category: 'grammar',
    categoryName: '✍️ Grammar',
    difficulty: 'Agak Sulit',
    question: '「テレビをつけた＿＿＿、寝てしまいました。」正しい形は？',
    furigana: 'テレビをつけた＿＿＿、ねてしまいました。',
    options: [
        { label: 'A', value: 'a', text: 'から' },
        { label: 'B', value: 'b', text: 'まま' },
        { label: 'C', value: 'c', text: 'ながら' },
        { label: 'D', value: 'd', text: 'ところ' }
    ],
    answer: 'b',
    explanation: {
        correctAnswer: 'B',
        reading: { kanji: 'つけたまま', furigana: 'つけたまま', romaji: 'tsuketa mama' },
        translation: 'Dalam keadaan menyala',
        perWordMeaning: [{ word: 'まま', reading: 'まま', romaji: 'mama', meaning: 'dalam keadaan tetap' }],
        grammar: { pattern: '[TA] + まま', explanation: 'Keadaan tetap', usage: 'Tanpa mengubah kondisi' },
        whyCorrect: 'つけたまま = dalam keadaan tetap menyala',
        whyWrong: { A: 'から = karena', C: 'ながら = sambil', D: 'ところ = tepat akan' },
        tips: 'まま = keadaan tetap (tidak berubah)',
        difficulty: 'Agak Sulit'
    }
};

// SOAL 68 - Vocabulary (兄)
const soal68 = {
    id: 68,
    category: 'vocabulary',
    categoryName: '📚 Kosakata',
    difficulty: 'Mudah',
    question: '「兄」の正しい読み方はどれですか？',
    furigana: 'あに',
    options: [
        { label: 'A', value: 'a', text: 'あに' },
        { label: 'B', value: 'b', text: 'おとうと' },
        { label: 'C', value: 'c', text: 'あね' },
        { label: 'D', value: 'd', text: 'いもうと' }
    ],
    answer: 'a',
    explanation: {
        correctAnswer: 'A',
        reading: { kanji: '兄', furigana: 'あに', romaji: 'ani' },
        translation: 'Kakak laki-laki (saya)',
        perWordMeaning: [{ word: '兄', reading: 'あに', romaji: 'ani', meaning: 'kakak laki-laki saya' }],
        grammar: { pattern: 'Panggilan keluarga', explanation: 'Untuk keluarga sendiri', usage: '兄 = kakak saya, お兄さん = kakak orang lain' },
        whyCorrect: '兄 = あに',
        whyWrong: { B: '弟 = adik laki', C: '姉 = kakak perempuan', D: '妹 = adik perempuan' },
        tips: '兄 = ani (kakak laki saya)',
        difficulty: 'Mudah'
    }
};

// SOAL 69 - Particle (とか)
const soal69 = {
    id: 69,
    category: 'particle',
    categoryName: '🔤 Partikel',
    difficulty: 'Menengah',
    question: '「休みの日は、コーヒー＿＿＿紅茶を飲みます。」正しい助詞は？',
    furigana: 'やすみのひは、コーヒー＿＿＿こうちゃをのみます。',
    options: [
        { label: 'A', value: 'a', text: 'とか' },
        { label: 'B', value: 'b', text: 'より' },
        { label: 'C', value: 'c', text: 'まで' },
        { label: 'D', value: 'd', text: 'だけ' }
    ],
    answer: 'a',
    explanation: {
        correctAnswer: 'A',
        reading: { kanji: 'コーヒーとか紅茶', furigana: 'コーヒーとかこうちゃ', romaji: 'koohii toka koucha' },
        translation: 'Kopi atau teh (dan sebagainya)',
        perWordMeaning: [{ word: 'とか', reading: 'とか', romaji: 'toka', meaning: 'seperti / atau (contoh kasual)' }],
        grammar: { pattern: 'A + とか + B', explanation: 'Contoh (kasual)', usage: 'Percakapan sehari-hari' },
        whyCorrect: 'とか = contoh kasual',
        whyWrong: { B: 'より = daripada', C: 'まで = sampai', D: 'だけ = hanya' },
        tips: 'とか = kasual dari や',
        difficulty: 'Menengah'
    }
};

// SOAL 70 - Listening (Telepon Bisnis)
const soal70 = {
    id: 70,
    category: 'listening',
    categoryName: '🎧 Listening',
    difficulty: 'Agak Sulit',
    question: '[DUMMY LISTENING] 音声を聞いてください。「もしもし、山田ですが。すみません、今日の会議ですが、急遽、部長が出席できなくなりました。代わりに私が出席します。資料はもう用意できています。」\n\n誰が会議に出席しますか？',
    furigana: 'もしもし、やまだですが。すみません、きょうのかいぎですが、きゅうきょ、ぶちょうがしゅっせきできなくなりました。かわりにわたしがしゅっせきします。',
    options: [
        { label: 'A', value: 'a', text: '部長' },
        { label: 'B', value: 'b', text: '山田さん' },
        { label: 'C', value: 'c', text: '社長' },
        { label: 'D', value: 'd', text: '誰も出席しない' }
    ],
    answer: 'b',
    explanation: {
        correctAnswer: 'B',
        reading: { kanji: '代わりに私が出席します', furigana: 'かわりにわたしがしゅっせきします', romaji: 'Kawari ni watashi ga shusseki shimasu.' },
        translation: 'Saya akan hadir sebagai gantinya',
        perWordMeaning: [
            { word: '代わりに', reading: 'かわりに', romaji: 'kawari ni', meaning: 'sebagai gantian' },
            { word: '出席', reading: 'しゅっせき', romaji: 'shusseki', meaning: 'hadir' }
        ],
        grammar: { pattern: '〜代わりに〜', explanation: 'Sebagai gantian', usage: 'Menggantikan' },
        whyCorrect: '代わりに私が出席 = saya (Yamada) yang hadir',
        whyWrong: { A: '部長 tidak bisa hadir', C: '社長 tidak disebut', D: 'Yamada hadir' },
        tips: '代わりに = sebagai gantian',
        difficulty: 'Agak Sulit'
    }
};

// SOAL 71 - Kanji (方)
const soal71 = {
    id: 71,
    category: 'kanji',
    categoryName: '📖 Kanji',
    difficulty: 'Menengah',
    question: '「この漢字の読み方」の「方」の意味として正しいものはどれですか？',
    furigana: 'このかんじのよみかた',
    options: [
        { label: 'A', value: 'a', text: 'Arah / cara' },
        { label: 'B', value: 'b', text: 'Orang' },
        { label: 'C', value: 'c', text: 'Tempat' },
        { label: 'D', value: 'd', text: 'Waktu' }
    ],
    answer: 'a',
    explanation: {
        correctAnswer: 'A',
        reading: { kanji: '方', furigana: 'かた', romaji: 'kata' },
        translation: 'Cara',
        perWordMeaning: [{ word: '方', reading: 'かた', romaji: 'kata', meaning: 'cara' }],
        grammar: { pattern: '[Masu stem] + 方', explanation: 'Cara melakukan', usage: '読み方, 書き方, 使い方' },
        whyCorrect: '方 = cara (setelah kata kerja)',
        whyWrong: { B: '人 (sopan)', C: '場所', D: '時間' },
        tips: '方 = cara',
        difficulty: 'Menengah'
    }
};

// SOAL 72 - Vocabulary (電源)
const soal72 = {
    id: 72,
    category: 'vocabulary',
    categoryName: '📚 Kosakata',
    difficulty: 'Mudah',
    question: '「電源を入れる」の意味として正しいものはどれですか？',
    furigana: 'でんげんをいれる',
    options: [
        { label: 'A', value: 'a', text: 'Mematikan listrik' },
        { label: 'B', value: 'b', text: 'Menyalakan listrik' },
        { label: 'C', value: 'c', text: 'Mencabut listrik' },
        { label: 'D', value: 'd', text: 'Menghubungkan listrik' }
    ],
    answer: 'b',
    explanation: {
        correctAnswer: 'B',
        reading: { kanji: '電源を入れる', furigana: 'でんげんをいれる', romaji: 'dengen o ireru' },
        translation: 'Menyalakan listrik',
        perWordMeaning: [
            { word: '電源', reading: 'でんげん', romaji: 'dengen', meaning: 'sumber listrik' },
            { word: '入れる', reading: 'いれる', romaji: 'ireru', meaning: 'memasukkan' }
        ],
        grammar: { pattern: '電源を入れる/切る', explanation: 'Menyalakan/mematikan', usage: 'Power on/off' },
        whyCorrect: '電源を入れる = menyalakan',
        whyWrong: { A: '電源を切る', C: 'コンセントを抜く', D: '接続する' },
        tips: '入れる = ON, 切る = OFF',
        difficulty: 'Mudah'
    }
};

// SOAL 73 - Grammar (〜ば)
const soal73 = {
    id: 73,
    category: 'grammar',
    categoryName: '✍️ Grammar',
    difficulty: 'Agak Sulit',
    question: '「時間があれ＿＿＿、旅行に行きます。」正しい形は？',
    furigana: 'じかんがあれ＿＿＿、りょこうにいきます。',
    options: [
        { label: 'A', value: 'a', text: 'ば' },
        { label: 'B', value: 'b', text: 'たら' },
        { label: 'C', value: 'c', text: 'なら' },
        { label: 'D', value: 'd', text: 'ても' }
    ],
    answer: 'a',
    explanation: {
        correctAnswer: 'A',
        reading: { kanji: 'あれば', furigana: 'あれば', romaji: 'areba' },
        translation: 'Jika ada',
        perWordMeaning: [{ word: 'ば', reading: 'ば', romaji: 'ba', meaning: 'jika (pengandaian)' }],
        grammar: { pattern: '[Bentuk BA] + 〜', explanation: 'Jika (realistis)', usage: 'Pengandaian' },
        whyCorrect: 'ある → あれば = jika ada',
        whyWrong: { B: 'たら juga bisa tapi bentuk BA', C: 'なら = topik', D: 'ても = meskipun' },
        tips: 'ば = IF (realistis)',
        difficulty: 'Agak Sulit'
    }
};

// SOAL 74 - Reading (Pengumuman Stasiun)
const soal74 = {
    id: 74,
    category: 'reading',
    categoryName: '📄 Membaca',
    difficulty: 'Agak Sulit',
    question: '次の駅のアナウンスを読んで答えなさい。\n\n「ただいま、新宿駅で人身事故が発生したため、山手線は運転を見合わせています。復旧の見込みは午後3時ごろです。」\n\n山手線はいつ復旧しますか？',
    furigana: 'つぎのえきのアナウンスをよんでこたえなさい。',
    options: [
        { label: 'A', value: 'a', text: '午後2時ごろ' },
        { label: 'B', value: 'b', text: '午後3時ごろ' },
        { label: 'C', value: 'c', text: '午後4時ごろ' },
        { label: 'D', value: 'd', text: '今日は復旧しない' }
    ],
    answer: 'b',
    explanation: {
        correctAnswer: 'B',
        reading: { kanji: '復旧の見込みは午後3時ごろ', furigana: 'ふっきゅうのみこみはごごさんじごろ', romaji: 'Fukkyuu no mikomi wa gogo sanji goro' },
        translation: 'Perkiraan pemulihan sekitar jam 3 sore',
        perWordMeaning: [
            { word: '復旧', reading: 'ふっきゅう', romaji: 'fukkyuu', meaning: 'pemulihan' },
            { word: '見込み', reading: 'みこみ', romaji: 'mikomi', meaning: 'perkiraan' }
        ],
        grammar: { pattern: '〜の見込みです', explanation: 'Perkiraan', usage: 'Prediksi' },
        whyCorrect: '復旧の見込み = jam 3 sore',
        whyWrong: { A: 'Jam 2 ❌', C: 'Jam 4 ❌', D: 'Tidak pulih ❌' },
        tips: '見込み = perkiraan',
        difficulty: 'Agak Sulit'
    }
};

// SOAL 75 - Grammar (〜てもらう)
const soal75 = {
    id: 75,
    category: 'grammar',
    categoryName: '✍️ Grammar',
    difficulty: 'Agak Sulit',
    question: '「友だちに宿題を手伝って＿＿＿。」意味が「Saya minta teman membantu PR」になる正しい形は？',
    furigana: 'ともだちにしゅくだいをてつだって＿＿＿。',
    options: [
        { label: 'A', value: 'a', text: 'あげました' },
        { label: 'B', value: 'b', text: 'くれました' },
        { label: 'C', value: 'c', text: 'もらいました' },
        { label: 'D', value: 'd', text: 'やりました' }
    ],
    answer: 'c',
    explanation: {
        correctAnswer: 'C',
        reading: { kanji: '手伝ってもらいました', furigana: 'てつだってもらいました', romaji: 'Tetsudatte moraimashita.' },
        translation: 'Menerima bantuan',
        perWordMeaning: [{ word: 'もらう', reading: 'もらう', romaji: 'morau', meaning: 'menerima' }],
        grammar: { pattern: '[TE] + もらう', explanation: 'Menerima kebaikan', usage: 'Saya ← orang lain' },
        whyCorrect: '手伝ってもらう = saya menerima bantuan',
        whyWrong: { A: 'あげる = saya ke orang lain', B: 'くれる = orang lain ke saya (subjek orang lain)', D: 'やる = kasual' },
        tips: 'もらう = menerima',
        difficulty: 'Agak Sulit'
    }
};

// SOAL 76 - Vocabulary (救急車)
const soal76 = {
    id: 76,
    category: 'vocabulary',
    categoryName: '📚 Kosakata',
    difficulty: 'Menengah',
    question: '「救急車」の意味として正しいものはどれですか？',
    furigana: 'きゅうきゅうしゃ',
    options: [
        { label: 'A', value: 'a', text: 'Mobil pemadam kebakaran' },
        { label: 'B', value: 'b', text: 'Mobil polisi' },
        { label: 'C', value: 'c', text: 'Ambulans' },
        { label: 'D', value: 'd', text: 'Mobil jenazah' }
    ],
    answer: 'c',
    explanation: {
        correctAnswer: 'C',
        reading: { kanji: '救急車', furigana: 'きゅうきゅうしゃ', romaji: 'kyuukyuusha' },
        translation: 'Ambulans',
        perWordMeaning: [
            { word: '救急', reading: 'きゅうきゅう', romaji: 'kyuukyuu', meaning: 'darurat medis' },
            { word: '車', reading: 'しゃ', romaji: 'sha', meaning: 'kendaraan' }
        ],
        grammar: { pattern: 'Kata majemuk', explanation: 'Darurat + kendaraan', usage: 'Panggil ambulans' },
        whyCorrect: '救急車 = ambulans',
        whyWrong: { A: '消防車', B: 'パトカー', D: '霊柩車' },
        tips: '119 untuk ambulans',
        difficulty: 'Menengah'
    }
};

// SOAL 77 - Particle (の untuk penjelasan)
const soal77 = {
    id: 77,
    category: 'particle',
    categoryName: '🔤 Partikel',
    difficulty: 'Menengah',
    question: '「昨日、雨が降った＿＿＿ですか。」意味が「Apakah kemarin hujan? (minta penjelasan)」になる正しい形は？',
    furigana: 'きのう、あめがふった＿＿＿ですか。',
    options: [
        { label: 'A', value: 'a', text: 'の' },
        { label: 'B', value: 'b', text: 'か' },
        { label: 'C', value: 'c', text: 'ね' },
        { label: 'D', value: 'd', text: 'よ' }
    ],
    answer: 'a',
    explanation: {
        correctAnswer: 'A',
        reading: { kanji: '降ったのですか', furigana: 'ふったのですか', romaji: 'Futta no desu ka.' },
        translation: 'Apakah (minta penjelasan)',
        perWordMeaning: [{ word: 'の', reading: 'の', romaji: 'no', meaning: 'penjelasan' }],
        grammar: { pattern: '[Kata sifat/verb] + のですか', explanation: 'Minta penjelasan', usage: 'Lebih halus' },
        whyCorrect: '降ったのですか = minta penjelasan tentang hujan',
        whyWrong: { B: 'か saja = pertanyaan biasa', C: 'ね = ya kan?', D: 'よ = informasi baru' },
        tips: '〜のですか = minta penjelasan',
        difficulty: 'Menengah'
    }
};

// SOAL 78 - Reading (Label Obat)
const soal78 = {
    id: 78,
    category: 'reading',
    categoryName: '📄 Membaca',
    difficulty: 'Agak Sulit',
    question: '次の薬の説明を読んで答えなさい。\n\n「【使用上の注意】\n・1日3回、食後に服用してください。\n・眠気を催すことがありますので、車の運転は避けてください。」\n\nこの薬を飲んだ後、してはいけないことは何ですか？',
    furigana: 'つぎのくすりのせつめいをよんでこたえなさい。',
    options: [
        { label: 'A', value: 'a', text: '食事をする' },
        { label: 'B', value: 'b', text: '車を運転する' },
        { label: 'C', value: 'c', text: '寝る' },
        { label: 'D', value: 'd', text: '運動する' }
    ],
    answer: 'b',
    explanation: {
        correctAnswer: 'B',
        reading: { kanji: '運転は避けてください', furigana: 'うんてんはさけてください', romaji: 'Unten wa sakete kudasai.' },
        translation: 'Hindari mengemudi',
        perWordMeaning: [
            { word: '避けて', reading: 'さけて', romaji: 'sakete', meaning: 'hindari' },
            { word: 'ください', reading: 'ください', romaji: 'kudasai', meaning: 'tolong' }
        ],
        grammar: { pattern: '〜は避けてください', explanation: 'Tolong hindari', usage: 'Larangan sopan' },
        whyCorrect: '運転は避けてください = jangan mengemudi',
        whyWrong: { A: 'Harus setelah makan', C: 'Boleh tidur', D: 'Tidak disebut' },
        tips: '避ける = hindari',
        difficulty: 'Agak Sulit'
    }
};

// SOAL 79 - Grammar (〜さ)
const soal79 = {
    id: 79,
    category: 'grammar',
    categoryName: '✍️ Grammar',
    difficulty: 'Sulit',
    question: '「この仕事の大変＿＿＿がわかりました。」正しい形は？',
    furigana: 'このしごとのたいへん＿＿＿がわかりました。',
    options: [
        { label: 'A', value: 'a', text: 'さ' },
        { label: 'B', value: 'b', text: 'み' },
        { label: 'C', value: 'c', text: 'い' },
        { label: 'D', value: 'd', text: 'く' }
    ],
    answer: 'a',
    explanation: {
        correctAnswer: 'A',
        reading: { kanji: '大変さ', furigana: 'たいへんさ', romaji: 'taihensa' },
        translation: 'Tingkat kesulitan',
        perWordMeaning: [{ word: 'さ', reading: 'さ', romaji: 'sa', meaning: 'tingkat/kadar' }],
        grammar: { pattern: '[Adj] + さ', explanation: 'Tingkat/kadar', usage: 'Mengubah sifat jadi benda' },
        whyCorrect: '大変 + さ = tingkat kesulitan',
        whyWrong: { B: 'み = kesan subjektif', C: 'い = akhiran i-adjective', D: 'く = adverb' },
        tips: 'さ = tingkat (ukuran)',
        difficulty: 'Sulit'
    }
};

// SOAL 80 - Listening (Topan)
const soal80 = {
    id: 80,
    category: 'listening',
    categoryName: '🎧 Listening',
    difficulty: 'Agak Sulit',
    question: '[DUMMY LISTENING] 音声を聞いてください。「台風10号の影響で、明日の午前中は電車が大幅に遅れる見込みです。特に、東海道線は終日運休の可能性があります。」\n\n明日の東海道線はどうなりますか？',
    furigana: 'たいふうじゅうごうのえいきょうで、あしたのごぜんちゅうはでんしゃがおおはばにおくれるみこみです。',
    options: [
        { label: 'A', value: 'a', text: '正常に動く' },
        { label: 'B', value: 'b', text: '遅れるだけ' },
        { label: 'C', value: 'c', text: '運休の可能性がある' },
        { label: 'D', value: 'd', text: '早く動く' }
    ],
    answer: 'c',
    explanation: {
        correctAnswer: 'C',
        reading: { kanji: '運休の可能性があります', furigana: 'うんきゅうのかのうせいがあります', romaji: 'Unkyuu no kanousei ga arimasu.' },
        translation: 'Ada kemungkinan berhenti operasi',
        perWordMeaning: [
            { word: '運休', reading: 'うんきゅう', romaji: 'unkyuu', meaning: 'berhenti operasi' },
            { word: '可能性', reading: 'かのうせい', romaji: 'kanousei', meaning: 'kemungkinan' }
        ],
        grammar: { pattern: '〜可能性があります', explanation: 'Ada kemungkinan', usage: 'Prediksi tidak pasti' },
        whyCorrect: '運休の可能性 = mungkin berhenti',
        whyWrong: { A: 'Normal ❌', B: 'Cuma terlambat ❌', D: 'Lebih cepat ❌' },
        tips: '可能性 = kemungkinan',
        difficulty: 'Agak Sulit'
    }
};

// Gabungkan semua soal 61-80
const allQuestions61to80 = [
    soal61, soal62, soal63, soal64, soal65,
    soal66, soal67, soal68, soal69, soal70,
    soal71, soal72, soal73, soal74, soal75,
    soal76, soal77, soal78, soal79, soal80
];

// Gabungkan dengan soal sebelumnya
if (window.questionsPart1to40) {
    window.questionsPart1to60 = [...window.questionsPart1to40, ...allQuestions61to80];
} else {
    window.questionsPart1to60 = allQuestions61to80;
}

window.questionsPart61to80 = allQuestions61to80;

console.log(`✅ PART 5 loaded - ${allQuestions61to80.length} soal (61-80) ditambahkan`);
console.log(`📊 Total soal 1-80: ${window.questionsPart1to60?.length || allQuestions61to80.length} soal`);