// ==================== DATA SOAL 41-60 ====================
// File: js/questions-part-4.js
// Melanjutkan dari soal 41-60

// SOAL 41 - Kanji (八百円)
const soal41 = {
    id: 41,
    category: 'kanji',
    categoryName: '📖 Kanji',
    difficulty: 'Mudah',
    question: '「八百円」の正しい読み方はどれですか？',
    furigana: 'はっぴゃくえん',
    options: [
        { label: 'A', value: 'a', text: 'はっぴゃくえん' },
        { label: 'B', value: 'b', text: 'はちひゃくえん' },
        { label: 'C', value: 'c', text: 'やおえん' },
        { label: 'D', value: 'd', text: 'はちびゃくえん' }
    ],
    answer: 'a',
    explanation: {
        correctAnswer: 'A',
        reading: { kanji: '八百円', furigana: 'はっぴゃくえん', romaji: 'happyaku en' },
        translation: '800 Yen',
        perWordMeaning: [
            { word: '八', reading: 'はち', romaji: 'hachi', meaning: 'delapan' },
            { word: '百', reading: 'ひゃく', romaji: 'hyaku', meaning: 'ratus' },
            { word: '円', reading: 'えん', romaji: 'en', meaning: 'Yen' }
        ],
        grammar: { pattern: 'Perubahan bunyi', explanation: '800 = はっぴゃく', usage: 'はっぴゃくえん' },
        whyCorrect: '800 = はっぴゃく',
        whyWrong: { B: 'はちひゃく ❌', C: 'やおえん ❌', D: 'はちびゃく ❌' },
        tips: '800 = はっぴゃく, 600 = ろっぴゃく, 300 = さんびゃく',
        difficulty: 'Mudah'
    }
};

// SOAL 42 - Vocabulary (楽しい)
const soal42 = {
    id: 42,
    category: 'vocabulary',
    categoryName: '📚 Kosakata',
    difficulty: 'Mudah',
    question: '「楽しい」の意味として正しいものはどれですか？',
    furigana: 'たのしい',
    options: [
        { label: 'A', value: 'a', text: 'Sedih' },
        { label: 'B', value: 'b', text: 'Menyenangkan' },
        { label: 'C', value: 'c', text: 'Menakutkan' },
        { label: 'D', value: 'd', text: 'Membosankan' }
    ],
    answer: 'b',
    explanation: {
        correctAnswer: 'B',
        reading: { kanji: '楽しい', furigana: 'たのしい', romaji: 'tanoshii' },
        translation: 'Menyenangkan',
        perWordMeaning: [{ word: '楽しい', reading: 'たのしい', romaji: 'tanoshii', meaning: 'menyenangkan' }],
        grammar: { pattern: 'I-adjective', explanation: 'Kata sifat', usage: '楽しいパーティー' },
        whyCorrect: '楽しい = menyenangkan',
        whyWrong: { A: '悲しい', C: '怖い', D: 'つまらない' },
        tips: 'たのしい = TAsik + NO SHII → asyik',
        difficulty: 'Mudah'
    }
};

// SOAL 43 - Grammar (〜そう)
const soal43 = {
    id: 43,
    category: 'grammar',
    categoryName: '✍️ Grammar',
    difficulty: 'Agak Sulit',
    question: '「雨が降り＿＿＿です。」意味が「Kelihatannya akan hujan」になる正しい形は？',
    furigana: 'あめがふり＿＿＿です。',
    options: [
        { label: 'A', value: 'a', text: 'そう' },
        { label: 'B', value: 'b', text: 'たい' },
        { label: 'C', value: 'c', text: 'ながら' },
        { label: 'D', value: 'd', text: 'て' }
    ],
    answer: 'a',
    explanation: {
        correctAnswer: 'A',
        reading: { kanji: '雨が降りそうです', furigana: 'あめがふりそうです', romaji: 'Ame ga furi sou desu.' },
        translation: 'Kelihatannya akan hujan',
        perWordMeaning: [
            { word: '降り', reading: 'ふり', romaji: 'furi', meaning: 'turun (masu stem)' },
            { word: 'そう', reading: 'そう', romaji: 'sou', meaning: 'kelihatannya' }
        ],
        grammar: { pattern: '[Masu stem] + そう', explanation: 'Kelihatannya akan', usage: 'Berdasarkan kesan visual' },
        whyCorrect: '降り + そう = 降りそう',
        whyWrong: { B: 'たい = ingin', C: 'ながら = sambil', D: 'て = TE form' },
        tips: 'そう = kelihatannya (mau hujan nih)',
        difficulty: 'Agak Sulit'
    }
};

// SOAL 44 - Particle (を untuk tempat dilalui)
const soal44 = {
    id: 44,
    category: 'particle',
    categoryName: '🔤 Partikel',
    difficulty: 'Mudah',
    question: '「毎朝、公園＿＿＿散歩します。」正しい助詞は？',
    furigana: 'まいあさ、こうえん＿＿＿さんぽします。',
    options: [
        { label: 'A', value: 'a', text: 'に' },
        { label: 'B', value: 'b', text: 'で' },
        { label: 'C', value: 'c', text: 'を' },
        { label: 'D', value: 'd', text: 'が' }
    ],
    answer: 'c',
    explanation: {
        correctAnswer: 'C',
        reading: { kanji: '公園を散歩します', furigana: 'こうえんをさんぽします', romaji: 'Kouen o sanpo shimasu.' },
        translation: 'Berjalan-jalan di sekitar taman',
        perWordMeaning: [
            { word: '公園', reading: 'こうえん', romaji: 'kouen', meaning: 'taman' },
            { word: '散歩', reading: 'さんぽ', romaji: 'sanpo', meaning: 'jalan-jalan' }
        ],
        grammar: { pattern: '[Tempat] + を + [Verb of motion]', explanation: 'Tempat yang dilalui', usage: 'Untuk kata kerja gerak' },
        whyCorrect: '散歩する adalah verb of motion → pakai を',
        whyWrong: { A: 'に = tujuan', B: 'で = tempat aktivitas statis', D: 'が = subjek' },
        tips: 'を untuk kata kerja gerak: 歩く, 走る, 散歩する',
        difficulty: 'Mudah'
    }
};

// SOAL 45 - Reading (Email)
const soal45 = {
    id: 45,
    category: 'reading',
    categoryName: '📄 Membaca',
    difficulty: 'Agak Sulit',
    question: '次のメールを読んで答えなさい。\n\n「山田さん\nお世話になっております。先日お借りした本ですが、読み終わりましたので、明日お返しに行きます。午後2時ごろ伺ってもよろしいでしょうか。\n\n佐藤」\n\n佐藤さんは明日、何をしますか？',
    furigana: 'つぎのメールをよんでこたえなさい。',
    options: [
        { label: 'A', value: 'a', text: '本を借りに行く' },
        { label: 'B', value: 'b', text: '本を返しに行く' },
        { label: 'C', value: 'c', text: '本を買いに行く' },
        { label: 'D', value: 'd', text: '本を読みに行く' }
    ],
    answer: 'b',
    explanation: {
        correctAnswer: 'B',
        reading: { kanji: 'お返しに行きます', furigana: 'おかえしにいきます', romaji: 'Okaeshi ni ikimasu.' },
        translation: 'Pergi mengembalikan',
        perWordMeaning: [
            { word: 'お返し', reading: 'おかえし', romaji: 'okaeshi', meaning: 'pengembalian' },
            { word: '行きます', reading: 'いきます', romaji: 'ikimasu', meaning: 'pergi' }
        ],
        grammar: { pattern: '〜に行く', explanation: 'Pergi untuk melakukan', usage: '返しに行く' },
        whyCorrect: 'お返しに行きます = pergi mengembalikan',
        whyWrong: { A: '借りる = meminjam', C: '買う = membeli', D: '読む = membaca' },
        tips: '読み終わりました + お返しに行きます = mengembalikan',
        difficulty: 'Agak Sulit'
    }
};

// SOAL 46 - Grammar (〜やすい/〜にくい)
const soal46 = {
    id: 46,
    category: 'grammar',
    categoryName: '✍️ Grammar',
    difficulty: 'Agak Sulit',
    question: '「このペンはとても書き＿＿＿です。」意味が「Pulpen ini sangat mudah ditulis」になる正しい形は？',
    furigana: 'このペンはとてもかき＿＿＿です。',
    options: [
        { label: 'A', value: 'a', text: 'にくい' },
        { label: 'B', value: 'b', text: 'やすい' },
        { label: 'C', value: 'c', text: 'がたい' },
        { label: 'D', value: 'd', text: 'すぎる' }
    ],
    answer: 'b',
    explanation: {
        correctAnswer: 'B',
        reading: { kanji: '書きやすい', furigana: 'かきやすい', romaji: 'kakiyasui' },
        translation: 'Mudah ditulis',
        perWordMeaning: [
            { word: '書き', reading: 'かき', romaji: 'kaki', meaning: 'tulis (stem)' },
            { word: 'やすい', reading: 'やすい', romaji: 'yasui', meaning: 'mudah' }
        ],
        grammar: { pattern: '[Masu stem] + やすい', explanation: 'Mudah dilakukan', usage: '書きやすい, 読みやすい' },
        whyCorrect: '書き + やすい = mudah ditulis',
        whyWrong: { A: 'にくい = sulit', C: 'がたい = sulit (formal)', D: 'すぎる = terlalu' },
        tips: 'やすい = easy, にくい = difficult',
        difficulty: 'Agak Sulit'
    }
};

// SOAL 47 - Vocabulary (都合)
const soal47 = {
    id: 47,
    category: 'vocabulary',
    categoryName: '📚 Kosakata',
    difficulty: 'Mudah',
    question: '「都合」の意味として最も近いものはどれですか？',
    furigana: 'つごう',
    options: [
        { label: 'A', value: 'a', text: 'Keadaan / kesibukan' },
        { label: 'B', value: 'b', text: 'Kesenangan' },
        { label: 'C', value: 'c', text: 'Kemalasan' },
        { label: 'D', value: 'd', text: 'Kebahagiaan' }
    ],
    answer: 'a',
    explanation: {
        correctAnswer: 'A',
        reading: { kanji: '都合', furigana: 'つごう', romaji: 'tsugou' },
        translation: 'Keadaan / kesibukan',
        perWordMeaning: [{ word: '都合', reading: 'つごう', romaji: 'tsugou', meaning: 'keadaan/jadwal' }],
        grammar: { pattern: '都合がいい/悪い', explanation: 'Keadaan waktu', usage: '都合がいい = cocok' },
        whyCorrect: '都合 = keadaan/ketersediaan waktu',
        whyWrong: { B: '楽しみ', C: '怠け', D: '幸せ' },
        tips: 'つごう = bicara tentang jadwal',
        difficulty: 'Mudah'
    }
};

// SOAL 48 - Verb (〜ていく vs 〜てくる)
const soal48 = {
    id: 48,
    category: 'verb',
    categoryName: '⚡ Bentuk Kata Kerja',
    difficulty: 'Agak Sulit',
    question: '「日本語を勉強して＿＿＿。」意味が「Saya akan terus belajar bahasa Jepang dari sekarang ke masa depan」になる正しい形は？',
    furigana: 'にほんごをべんきょうして＿＿＿。',
    options: [
        { label: 'A', value: 'a', text: 'くる' },
        { label: 'B', value: 'b', text: 'いく' },
        { label: 'C', value: 'c', text: 'みる' },
        { label: 'D', value: 'd', text: 'しまう' }
    ],
    answer: 'b',
    explanation: {
        correctAnswer: 'B',
        reading: { kanji: '勉強していく', furigana: 'べんきょうしていく', romaji: 'benkyou shite iku' },
        translation: 'Akan terus belajar',
        perWordMeaning: [
            { word: '勉強して', reading: 'べんきょうして', romaji: 'benkyou shite', meaning: 'belajar (TE)' },
            { word: 'いく', reading: 'いく', romaji: 'iku', meaning: 'pergi/akan terus' }
        ],
        grammar: { pattern: '[TE] + いく', explanation: 'Dari sekarang ke masa depan', usage: 'これからも頑張っていく' },
        whyCorrect: '勉強していく = akan terus belajar ke depan',
        whyWrong: { A: 'くる = dari masa lalu ke sekarang', C: 'みる = coba', D: 'しまう = terlanjur' },
        tips: 'いく = GO ke depan (future), くる = COME dari masa lalu',
        difficulty: 'Agak Sulit'
    }
};

// SOAL 49 - Grammar (〜つもり)
const soal49 = {
    id: 49,
    category: 'grammar',
    categoryName: '✍️ Grammar',
    difficulty: 'Menengah',
    question: '「明日、友だちと映画を見る＿＿＿です。」意味が「Saya berencana menonton film dengan teman besok」になる正しい形は？',
    furigana: 'あした、ともだちとえいがをみる＿＿＿です。',
    options: [
        { label: 'A', value: 'a', text: 'ところ' },
        { label: 'B', value: 'b', text: 'つもり' },
        { label: 'C', value: 'c', text: 'はず' },
        { label: 'D', value: 'd', text: 'ため' }
    ],
    answer: 'b',
    explanation: {
        correctAnswer: 'B',
        reading: { kanji: '見るつもりです', furigana: 'みるつもりです', romaji: 'Miru tsumori desu.' },
        translation: 'Berencana menonton',
        perWordMeaning: [{ word: 'つもり', reading: 'つもり', romaji: 'tsumori', meaning: 'rencana/niat' }],
        grammar: { pattern: '[Verb kamus] + つもり', explanation: 'Berencana', usage: 'Menyatakan rencana' },
        whyCorrect: '見る + つもり = berencana menonton',
        whyWrong: { A: 'ところ = tepat akan', C: 'はず = seharusnya', D: 'ため = demi' },
        tips: 'つもり = rencana (niat)',
        difficulty: 'Menengah'
    }
};

// SOAL 50 - Listening (Restoran)
const soal50 = {
    id: 50,
    category: 'listening',
    categoryName: '🎧 Listening',
    difficulty: 'Menengah',
    question: '[DUMMY LISTENING] 音声を聞いてください。「いらっしゃいませ。お二人様ですか？お子様用の椅子もご用意できますが、いかがでしょうか？」\n\nこのお客さんは誰と来ていますか？',
    furigana: 'いらっしゃいませ。おふたりさまですか？おこさまようのいすもごよういできますが、いかがでしょうか？',
    options: [
        { label: 'A', value: 'a', text: '同僚' },
        { label: 'B', value: 'b', text: '子ども' },
        { label: 'C', value: 'c', text: '彼女' },
        { label: 'D', value: 'd', text: '一人' }
    ],
    answer: 'b',
    explanation: {
        correctAnswer: 'B',
        reading: { kanji: 'お子様用の椅子', furigana: 'おこさまようのいす', romaji: 'Okosama you no isu' },
        translation: 'Kursi untuk anak-anak',
        perWordMeaning: [
            { word: 'お子様用', reading: 'おこさまよう', romaji: 'okosama you', meaning: 'untuk anak' },
            { word: '椅子', reading: 'いす', romaji: 'isu', meaning: 'kursi' }
        ],
        grammar: { pattern: '〜用の', explanation: 'Untuk keperluan', usage: 'Anak-anak' },
        whyCorrect: 'お子様用の椅子 = kursi anak → ada ANAK',
        whyWrong: { A: 'Rekan kerja', C: 'Pacar', D: 'Sendiri' },
        tips: 'お子様 = anak (sopan)',
        difficulty: 'Menengah'
    }
};

// SOAL 51 - Grammar (〜たことがある)
const soal51 = {
    id: 51,
    category: 'grammar',
    categoryName: '✍️ Grammar',
    difficulty: 'Menengah',
    question: '「私は一度も海外＿＿＿ことがありません。」正しい形は？',
    furigana: 'わたしはいちどもかいがい＿＿＿ことがありません。',
    options: [
        { label: 'A', value: 'a', text: '行った' },
        { label: 'B', value: 'b', text: '行く' },
        { label: 'C', value: 'c', text: '行き' },
        { label: 'D', value: 'd', text: '行って' }
    ],
    answer: 'a',
    explanation: {
        correctAnswer: 'A',
        reading: { kanji: '行ったことがありません', furigana: 'いったことがありません', romaji: 'Itta koto ga arimasen.' },
        translation: 'Belum pernah pergi',
        perWordMeaning: [
            { word: '行った', reading: 'いった', romaji: 'itta', meaning: 'pergi (TA form)' },
            { word: 'ことがある', reading: 'ことがある', romaji: 'koto ga aru', meaning: 'pernah' }
        ],
        grammar: { pattern: '[TA] + ことがある', explanation: 'Pernah melakukan', usage: 'Pengalaman' },
        whyCorrect: '行った + ことがある = pernah pergi',
        whyWrong: { B: '行く ❌ – Kamus', C: '行き ❌ – Masu stem', D: '行って ❌ – TE' },
        tips: 'たことがある = pernah',
        difficulty: 'Menengah'
    }
};

// SOAL 52 - Vocabulary (給料日)
const soal52 = {
    id: 52,
    category: 'vocabulary',
    categoryName: '📚 Kosakata',
    difficulty: 'Menengah',
    question: '「給料日」の意味として最も近いものはどれですか？',
    furigana: 'きゅうりょうび',
    options: [
        { label: 'A', value: 'a', text: 'Hari libur' },
        { label: 'B', value: 'b', text: 'Hari gajian' },
        { label: 'C', value: 'c', text: 'Hari pertama kerja' },
        { label: 'D', value: 'd', text: 'Hari terakhir kerja' }
    ],
    answer: 'b',
    explanation: {
        correctAnswer: 'B',
        reading: { kanji: '給料日', furigana: 'きゅうりょうび', romaji: 'kyuuryoubi' },
        translation: 'Hari gajian',
        perWordMeaning: [
            { word: '給料', reading: 'きゅうりょう', romaji: 'kyuuryou', meaning: 'gaji' },
            { word: '日', reading: 'び', romaji: 'bi', meaning: 'hari' }
        ],
        grammar: { pattern: 'Kata majemuk', explanation: 'Gaji + hari', usage: 'Hari gajian' },
        whyCorrect: '給料 = gaji, 日 = hari',
        whyWrong: { A: '休日', C: '入社日', D: '退職日' },
        tips: 'きゅうりょうび = hari gajian!',
        difficulty: 'Menengah'
    }
};

// SOAL 53 - Particle (から untuk bahan)
const soal53 = {
    id: 53,
    category: 'particle',
    categoryName: '🔤 Partikel',
    difficulty: 'Menengah',
    question: '「このテーブルは木＿＿＿作られています。」正しい助詞は？',
    furigana: 'このテーブルはき＿＿＿つくられています。',
    options: [
        { label: 'A', value: 'a', text: 'に' },
        { label: 'B', value: 'b', text: 'で' },
        { label: 'C', value: 'c', text: 'から' },
        { label: 'D', value: 'd', text: 'が' }
    ],
    answer: 'c',
    explanation: {
        correctAnswer: 'C',
        reading: { kanji: '木から作られています', furigana: 'きからつくられています', romaji: 'Ki kara tsukurarete imasu.' },
        translation: 'Terbuat dari kayu',
        perWordMeaning: [
            { word: '木', reading: 'き', romaji: 'ki', meaning: 'kayu' },
            { word: 'から', reading: 'から', romaji: 'kara', meaning: 'dari (bahan baku)' }
        ],
        grammar: { pattern: '[Bahan] + から + 作る', explanation: 'Bahan baku', usage: 'Berubah bentuk' },
        whyCorrect: '木から = dari kayu (bahan baku yang berubah)',
        whyWrong: { A: 'に = tujuan', B: 'で = bahan (tidak berubah)', D: 'が = subjek' },
        tips: 'から = FROM (bahan asli)',
        difficulty: 'Menengah'
    }
};

// SOAL 54 - Reading (Rumah Sakit)
const soal54 = {
    id: 54,
    category: 'reading',
    categoryName: '📄 Membaca',
    difficulty: 'Agak Sulit',
    question: '次の病院の掲示を読んで答えなさい。\n\n「面会時間は午後2時から午後5時までです。それ以外の時間は、緊急の場合のみ許可されます。面会の際は、受付で名前を記入してください。」\n\nこのルールについて正しいものはどれですか？',
    furigana: 'つぎのびょういんのけいじをよんでこたえなさい。',
    options: [
        { label: 'A', value: 'a', text: 'いつでも面会できる' },
        { label: 'B', value: 'b', text: '午後2時から5時以外は誰も面会できない' },
        { label: 'C', value: 'c', text: '午後2時から5時以外でも緊急の場合は面会できる' },
        { label: 'D', value: 'd', text: '受付で名前を書かなくてもいい' }
    ],
    answer: 'c',
    explanation: {
        correctAnswer: 'C',
        reading: { kanji: '緊急の場合のみ許可されます', furigana: 'きんきゅうのばあいのみきょかされます', romaji: 'Kinkyuu no baai nomi kyoka saremasu.' },
        translation: 'Hanya dalam keadaan darurat diperbolehkan',
        perWordMeaning: [
            { word: '緊急', reading: 'きんきゅう', romaji: 'kinkyuu', meaning: 'darurat' },
            { word: '許可', reading: 'きょか', romaji: 'kyoka', meaning: 'izin' }
        ],
        grammar: { pattern: '〜の場合のみ', explanation: 'Hanya dalam kasus', usage: 'Pengecualian' },
        whyCorrect: '緊急の場合のみ = hanya darurat',
        whyWrong: { A: 'Kapan saja ❌', B: 'Tidak boleh ❌', D: 'Harus tulis nama ❌' },
        tips: '面会時間 = jam kunjungan, 緊急 = darurat',
        difficulty: 'Agak Sulit'
    }
};

// SOAL 55 - Grammar (〜ばかり)
const soal55 = {
    id: 55,
    category: 'grammar',
    categoryName: '✍️ Grammar',
    difficulty: 'Agak Sulit',
    question: '「食べた＿＿＿寝ると、太りますよ。」正しい形は？',
    furigana: 'たべた＿＿＿ねると、ふとりますよ。',
    options: [
        { label: 'A', value: 'a', text: 'から' },
        { label: 'B', value: 'b', text: 'ばかり' },
        { label: 'C', value: 'c', text: 'だけ' },
        { label: 'D', value: 'd', text: 'まで' }
    ],
    answer: 'b',
    explanation: {
        correctAnswer: 'B',
        reading: { kanji: '食べたばかり寝ると', furigana: 'たべたばかりねると', romaji: 'Tabeta bakari neru to' },
        translation: 'Baru saja makan lalu tidur',
        perWordMeaning: [{ word: 'ばかり', reading: 'ばかり', romaji: 'bakari', meaning: 'baru saja' }],
        grammar: { pattern: '[TA] + ばかり', explanation: 'Baru saja', usage: 'Kejadian baru selesai' },
        whyCorrect: '食べた + ばかり = baru saja makan',
        whyWrong: { A: 'から = karena', C: 'だけ = hanya', D: 'まで = sampai' },
        tips: 'たばかり = baru saja',
        difficulty: 'Agak Sulit'
    }
};

// SOAL 56 - Vocabulary (熱)
const soal56 = {
    id: 56,
    category: 'vocabulary',
    categoryName: '📚 Kosakata',
    difficulty: 'Menengah',
    question: '「熱がある」の意味として正しいものはどれですか？',
    furigana: 'ねつがある',
    options: [
        { label: 'A', value: 'a', text: 'Sakit kepala' },
        { label: 'B', value: 'b', text: 'Demam' },
        { label: 'C', value: 'c', text: 'Pusing' },
        { label: 'D', value: 'd', text: 'Mual' }
    ],
    answer: 'b',
    explanation: {
        correctAnswer: 'B',
        reading: { kanji: '熱がある', furigana: 'ねつがある', romaji: 'Netsu ga aru.' },
        translation: 'Demam',
        perWordMeaning: [
            { word: '熱', reading: 'ねつ', romaji: 'netsu', meaning: 'demam/panas' },
            { word: 'ある', reading: 'ある', romaji: 'aru', meaning: 'ada' }
        ],
        grammar: { pattern: '[Gejala] + がある', explanation: 'Menyatakan gejala', usage: 'Demam, sakit, dll' },
        whyCorrect: '熱がある = ada demam',
        whyWrong: { A: '頭痛', C: 'めまい', D: '吐き気' },
        tips: 'ねつがある = demam',
        difficulty: 'Menengah'
    }
};

// SOAL 57 - Particle (より)
const soal57 = {
    id: 57,
    category: 'particle',
    categoryName: '🔤 Partikel',
    difficulty: 'Menengah',
    question: '「昨日＿＿＿今日のほうが暑いです。」正しい助詞は？',
    furigana: 'きのう＿＿＿きょうのほうがあついです。',
    options: [
        { label: 'A', value: 'a', text: 'より' },
        { label: 'B', value: 'b', text: 'から' },
        { label: 'C', value: 'c', text: 'まで' },
        { label: 'D', value: 'd', text: 'が' }
    ],
    answer: 'a',
    explanation: {
        correctAnswer: 'A',
        reading: { kanji: '昨日より今日のほうが暑いです', furigana: 'きのうよりきょうのほうがあついです', romaji: 'Kinou yori kyou no hou ga atsui desu.' },
        translation: 'Hari ini lebih panas dari kemarin',
        perWordMeaning: [{ word: 'より', reading: 'より', romaji: 'yori', meaning: 'daripada' }],
        grammar: { pattern: 'A + より + B + のほうが', explanation: 'Perbandingan', usage: 'Lebih... daripada' },
        whyCorrect: '昨日より = daripada kemarin',
        whyWrong: { B: 'から = dari', C: 'まで = sampai', D: 'が = subjek' },
        tips: 'より = daripada',
        difficulty: 'Menengah'
    }
};

// SOAL 58 - Verb (〜てきた)
const soal58 = {
    id: 58,
    category: 'verb',
    categoryName: '⚡ Bentuk Kata Kerja',
    difficulty: 'Agak Sulit',
    question: '「日本語を3年間勉強して＿＿＿。」意味が「Saya sudah belajar bahasa Jepang selama 3 tahun (dari dulu sampai sekarang)」になる正しい形は？',
    furigana: 'にほんごをさんねんかんべんきょうして＿＿＿。',
    options: [
        { label: 'A', value: 'a', text: 'いた' },
        { label: 'B', value: 'b', text: 'いった' },
        { label: 'C', value: 'c', text: 'きた' },
        { label: 'D', value: 'd', text: 'いこう' }
    ],
    answer: 'c',
    explanation: {
        correctAnswer: 'C',
        reading: { kanji: '勉強してきた', furigana: 'べんきょうしてきた', romaji: 'Benkyou shite kita.' },
        translation: 'Telah belajar dari dulu',
        perWordMeaning: [
            { word: '勉強して', reading: 'べんきょうして', romaji: 'benkyou shite', meaning: 'belajar (TE)' },
            { word: 'きた', reading: 'きた', romaji: 'kita', meaning: 'datang/sudah (lampau くる)' }
        ],
        grammar: { pattern: '[TE] + くる (きた)', explanation: 'Dari masa lalu ke sekarang', usage: 'Pengalaman berkelanjutan' },
        whyCorrect: '勉強してきた = belajar dari dulu sampai sekarang',
        whyWrong: { A: 'いた = sedang', B: 'いった = pergi', D: 'いこう = ayo pergi' },
        tips: 'てきた = dari dulu sampai sekarang',
        difficulty: 'Agak Sulit'
    }
};

// SOAL 59 - Grammar (〜のに)
const soal59 = {
    id: 59,
    category: 'grammar',
    categoryName: '✍️ Grammar',
    difficulty: 'Agak Sulit',
    question: '「一生懸命勉強した＿＿＿、試験に合格できませんでした。」正しい形は？',
    furigana: 'いっしょうけんめいべんきょうした＿＿＿、しけんにごうかくできませんでした。',
    options: [
        { label: 'A', value: 'a', text: 'から' },
        { label: 'B', value: 'b', text: 'ので' },
        { label: 'C', value: 'c', text: 'のに' },
        { label: 'D', value: 'd', text: 'ながら' }
    ],
    answer: 'c',
    explanation: {
        correctAnswer: 'C',
        reading: { kanji: '勉強したのに', furigana: 'べんきょうしたのに', romaji: 'Benkyou shita noni.' },
        translation: 'Meskipun sudah belajar',
        perWordMeaning: [{ word: 'のに', reading: 'のに', romaji: 'noni', meaning: 'meskipun' }],
        grammar: { pattern: '[Kalimat] + のに', explanation: 'Meskipun (kontras)', usage: 'Kekecewaan' },
        whyCorrect: '勉強したのに = meskipun sudah belajar (tapi gagal)',
        whyWrong: { A: 'から = karena', B: 'ので = karena', D: 'ながら = sambil' },
        tips: 'のに = padahal / meskipun (kecewa)',
        difficulty: 'Agak Sulit'
    }
};

// SOAL 60 - Listening (Cuaca)
const soal60 = {
    id: 60,
    category: 'listening',
    categoryName: '🎧 Listening',
    difficulty: 'Menengah',
    question: '[DUMMY LISTENING] 音声を聞いてください。「明日の天気ですが、午前中は晴れますが、午後から雷雨になるでしょう。外出の際は傘をお忘れなく。」\n\n明日の午後、何を持って行けばいいですか？',
    furigana: 'あしたのてんきですが、ごぜんちゅうははれますが、ごごからかみなりあめになるでしょう。がいしゅつのさいはかさをおわすれなく。',
    options: [
        { label: 'A', value: 'a', text: '帽子' },
        { label: 'B', value: 'b', text: '傘' },
        { label: 'C', value: 'c', text: '日焼け止め' },
        { label: 'D', value: 'd', text: 'カメラ' }
    ],
    answer: 'b',
    explanation: {
        correctAnswer: 'B',
        reading: { kanji: '傘をお忘れなく', furigana: 'かさをおわすれなく', romaji: 'Kasa o owasurenaku.' },
        translation: 'Jangan lupa payung',
        perWordMeaning: [
            { word: '傘', reading: 'かさ', romaji: 'kasa', meaning: 'payung' },
            { word: 'お忘れなく', reading: 'おわすれなく', romaji: 'owasurenaku', meaning: 'jangan lupa' }
        ],
        grammar: { pattern: '〜をお忘れなく', explanation: 'Jangan lupa', usage: 'Peringatan' },
        whyCorrect: '傘をお忘れなく = jangan lupa payung',
        whyWrong: { A: 'Topi', C: 'Tabir surya', D: 'Kamera' },
        tips: '雷雨 = hujan badai → bawa PAYUNG',
        difficulty: 'Menengah'
    }
};

// Gabungkan semua soal 41-60
const allQuestions41to60 = [
    soal41, soal42, soal43, soal44, soal45,
    soal46, soal47, soal48, soal49, soal50,
    soal51, soal52, soal53, soal54, soal55,
    soal56, soal57, soal58, soal59, soal60
];

// Gabungkan dengan soal sebelumnya
if (window.questionsPart1to25) {
    window.questionsPart1to40 = [...window.questionsPart1to25, ...allQuestions41to60];
} else {
    window.questionsPart1to40 = allQuestions41to60;
}

window.questionsPart41to60 = allQuestions41to60;

console.log(`✅ PART 4 loaded - ${allQuestions41to60.length} soal (41-60) ditambahkan`);
console.log(`📊 Total soal 1-60: ${window.questionsPart1to40?.length || allQuestions41to60.length} soal`);