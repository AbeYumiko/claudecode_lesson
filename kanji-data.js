// ========================================
// かんじだいすき - Kanji Data (80 first-grade kanji)
// Each kanji has: character, stroke paths (SVG), readings, examples, category
// Stroke paths use a 0-100 coordinate system
// ========================================

const STICKERS = [
  { id: 'unicorn', emoji: '\u{1F984}', name: 'ユニコーン', cssClass: 'sticker-unicorn' },
  { id: 'icecream', emoji: '\u{1F366}', name: 'アイス', cssClass: 'sticker-icecream' },
  { id: 'rainbow', emoji: '\u{1F308}', name: 'にじ', cssClass: 'sticker-rainbow' },
  { id: 'star', emoji: '\u{2B50}', name: 'おほし', cssClass: 'sticker-star' },
  { id: 'ribbon', emoji: '\u{1F380}', name: 'リボン', cssClass: 'sticker-ribbon' },
  { id: 'flower', emoji: '\u{1F338}', name: 'おはな', cssClass: 'sticker-flower' },
  { id: 'cat', emoji: '\u{1F431}', name: 'ねこ', cssClass: 'sticker-cat' },
  { id: 'cake', emoji: '\u{1F370}', name: 'ケーキ', cssClass: 'sticker-cake' }
];

const KANJI_DATA = [
  // ===== すうじ (Numbers) =====
  {
    char: '一', category: 'numbers',
    strokeCount: 1,
    strokes: ['M 12,50 L 88,50'],
    onYomi: ['イチ', 'イツ'], kunYomi: ['ひと', 'ひと-つ'],
    examples: [
      { word: '一つ', reading: 'ひとつ', meaning: 'ひとつ' },
      { word: '一人', reading: 'ひとり', meaning: 'ひとり' },
      { word: '一日', reading: 'いちにち', meaning: 'いちにち' }
    ]
  },
  {
    char: '二', category: 'numbers',
    strokeCount: 2,
    strokes: ['M 25,35 L 75,35', 'M 15,65 L 85,65'],
    onYomi: ['ニ'], kunYomi: ['ふた', 'ふた-つ'],
    examples: [
      { word: '二つ', reading: 'ふたつ', meaning: 'ふたつ' },
      { word: '二人', reading: 'ふたり', meaning: 'ふたり' },
      { word: '二月', reading: 'にがつ', meaning: 'にがつ' }
    ]
  },
  {
    char: '三', category: 'numbers',
    strokeCount: 3,
    strokes: ['M 28,24 L 72,24', 'M 22,50 L 78,50', 'M 15,76 L 85,76'],
    onYomi: ['サン'], kunYomi: ['み', 'み-つ', 'みっ-つ'],
    examples: [
      { word: '三つ', reading: 'みっつ', meaning: 'みっつ' },
      { word: '三人', reading: 'さんにん', meaning: 'さんにん' },
      { word: '三月', reading: 'さんがつ', meaning: 'さんがつ' }
    ]
  },
  {
    char: '四', category: 'numbers',
    strokeCount: 5,
    strokes: [
      'M 20,15 L 20,85',
      'M 20,15 L 80,15 L 80,85',
      'M 42,22 L 30,60',
      'M 52,22 Q 62,48 50,62',
      'M 20,85 L 80,85'
    ],
    onYomi: ['シ'], kunYomi: ['よ', 'よ-つ', 'よっ-つ', 'よん'],
    examples: [
      { word: '四つ', reading: 'よっつ', meaning: 'よっつ' },
      { word: '四人', reading: 'よにん', meaning: 'よにん' },
      { word: '四月', reading: 'しがつ', meaning: 'しがつ' }
    ]
  },
  {
    char: '五', category: 'numbers',
    strokeCount: 4,
    strokes: [
      'M 20,18 L 80,18',
      'M 55,18 L 30,50 L 75,50',
      'M 50,50 L 50,82',
      'M 20,82 L 80,82'
    ],
    onYomi: ['ゴ'], kunYomi: ['いつ', 'いつ-つ'],
    examples: [
      { word: '五つ', reading: 'いつつ', meaning: 'いつつ' },
      { word: '五人', reading: 'ごにん', meaning: 'ごにん' },
      { word: '五月', reading: 'ごがつ', meaning: 'ごがつ' }
    ]
  },
  {
    char: '六', category: 'numbers',
    strokeCount: 4,
    strokes: [
      'M 48,15 L 52,22',
      'M 18,38 L 82,38',
      'M 42,42 Q 30,62 18,80',
      'M 58,42 Q 70,62 82,78'
    ],
    onYomi: ['ロク'], kunYomi: ['む', 'む-つ', 'むっ-つ'],
    examples: [
      { word: '六つ', reading: 'むっつ', meaning: 'むっつ' },
      { word: '六月', reading: 'ろくがつ', meaning: 'ろくがつ' }
    ]
  },
  {
    char: '七', category: 'numbers',
    strokeCount: 2,
    strokes: [
      'M 18,35 L 78,30 Q 72,58 48,65',
      'M 52,15 L 48,85'
    ],
    onYomi: ['シチ'], kunYomi: ['なな', 'なな-つ', 'なの'],
    examples: [
      { word: '七つ', reading: 'ななつ', meaning: 'ななつ' },
      { word: '七月', reading: 'しちがつ', meaning: 'しちがつ' },
      { word: '七日', reading: 'なのか', meaning: 'なのか' }
    ]
  },
  {
    char: '八', category: 'numbers',
    strokeCount: 2,
    strokes: [
      'M 42,20 Q 35,50 18,80',
      'M 58,20 Q 65,50 82,80'
    ],
    onYomi: ['ハチ'], kunYomi: ['や', 'や-つ', 'やっ-つ', 'よう'],
    examples: [
      { word: '八つ', reading: 'やっつ', meaning: 'やっつ' },
      { word: '八月', reading: 'はちがつ', meaning: 'はちがつ' },
      { word: '八日', reading: 'ようか', meaning: 'ようか' }
    ]
  },
  {
    char: '九', category: 'numbers',
    strokeCount: 2,
    strokes: [
      'M 72,18 Q 40,50 18,78',
      'M 50,45 L 78,45 Q 82,60 78,82'
    ],
    onYomi: ['キュウ', 'ク'], kunYomi: ['ここの', 'ここの-つ'],
    examples: [
      { word: '九つ', reading: 'ここのつ', meaning: 'ここのつ' },
      { word: '九月', reading: 'くがつ', meaning: 'くがつ' }
    ]
  },
  {
    char: '十', category: 'numbers',
    strokeCount: 2,
    strokes: [
      'M 15,45 L 85,45',
      'M 50,12 L 50,88'
    ],
    onYomi: ['ジュウ', 'ジッ'], kunYomi: ['とお', 'と'],
    examples: [
      { word: '十', reading: 'じゅう', meaning: 'じゅう' },
      { word: '十日', reading: 'とおか', meaning: 'とおか' }
    ]
  },
  {
    char: '百', category: 'numbers',
    strokeCount: 6,
    strokes: [
      'M 15,15 L 85,15',
      'M 25,28 L 25,88',
      'M 25,28 L 75,28 L 75,88',
      'M 30,50 L 70,50',
      'M 30,68 L 70,68',
      'M 25,88 L 75,88'
    ],
    onYomi: ['ヒャク'], kunYomi: ['もも'],
    examples: [
      { word: '百', reading: 'ひゃく', meaning: 'ひゃく' },
      { word: '三百', reading: 'さんびゃく', meaning: 'さんびゃく' }
    ]
  },
  {
    char: '千', category: 'numbers',
    strokeCount: 3,
    strokes: [
      'M 55,12 Q 42,28 30,38',
      'M 15,40 L 85,40',
      'M 50,15 L 50,90'
    ],
    onYomi: ['セン'], kunYomi: ['ち'],
    examples: [
      { word: '千', reading: 'せん', meaning: 'せん' },
      { word: '千円', reading: 'せんえん', meaning: 'せんえん' }
    ]
  },

  // ===== しぜん (Nature) =====
  {
    char: '上', category: 'nature',
    strokeCount: 3,
    strokes: [
      'M 50,15 L 50,85',
      'M 30,50 L 70,50',
      'M 18,85 L 82,85'
    ],
    onYomi: ['ジョウ', 'ショウ'], kunYomi: ['うえ', 'うわ', 'あ-げる', 'のぼ-る'],
    examples: [
      { word: '上', reading: 'うえ', meaning: 'うえ' },
      { word: '上げる', reading: 'あげる', meaning: 'あげる' }
    ]
  },
  {
    char: '下', category: 'nature',
    strokeCount: 3,
    strokes: [
      'M 15,18 L 85,18',
      'M 50,18 L 50,85',
      'M 50,50 L 30,70'
    ],
    onYomi: ['カ', 'ゲ'], kunYomi: ['した', 'しも', 'さ-げる', 'くだ-る'],
    examples: [
      { word: '下', reading: 'した', meaning: 'した' },
      { word: '下げる', reading: 'さげる', meaning: 'さげる' }
    ]
  },
  {
    char: '左', category: 'nature',
    strokeCount: 5,
    strokes: [
      'M 25,18 L 75,18',
      'M 50,18 Q 35,42 18,58',
      'M 30,45 L 80,45',
      'M 55,45 L 55,78',
      'M 35,78 L 75,78'
    ],
    onYomi: ['サ'], kunYomi: ['ひだり'],
    examples: [
      { word: '左', reading: 'ひだり', meaning: 'ひだり' },
      { word: '左右', reading: 'さゆう', meaning: 'さゆう' }
    ]
  },
  {
    char: '右', category: 'nature',
    strokeCount: 5,
    strokes: [
      'M 55,18 Q 40,35 25,48',
      'M 25,35 L 80,35',
      'M 35,35 L 35,80',
      'M 35,55 L 75,55',
      'M 35,80 L 75,80 L 75,35'
    ],
    onYomi: ['ウ', 'ユウ'], kunYomi: ['みぎ'],
    examples: [
      { word: '右', reading: 'みぎ', meaning: 'みぎ' },
      { word: '右手', reading: 'みぎて', meaning: 'みぎて' }
    ]
  },
  {
    char: '大', category: 'nature',
    strokeCount: 3,
    strokes: [
      'M 15,35 L 85,35',
      'M 50,10 L 50,80',
      'M 50,35 Q 72,58 85,78'
    ],
    onYomi: ['ダイ', 'タイ'], kunYomi: ['おお', 'おお-きい', 'おお-いに'],
    examples: [
      { word: '大きい', reading: 'おおきい', meaning: 'おおきい' },
      { word: '大人', reading: 'おとな', meaning: 'おとな' }
    ]
  },
  {
    char: '中', category: 'nature',
    strokeCount: 4,
    strokes: [
      'M 25,18 L 25,82',
      'M 25,18 L 75,18 L 75,82',
      'M 25,82 L 75,82',
      'M 50,10 L 50,92'
    ],
    onYomi: ['チュウ'], kunYomi: ['なか'],
    examples: [
      { word: '中', reading: 'なか', meaning: 'なか' },
      { word: '中学', reading: 'ちゅうがく', meaning: 'ちゅうがく' }
    ]
  },
  {
    char: '小', category: 'nature',
    strokeCount: 3,
    strokes: [
      'M 50,12 L 50,88',
      'M 48,45 Q 30,60 20,78',
      'M 52,45 Q 70,60 80,78'
    ],
    onYomi: ['ショウ'], kunYomi: ['ちい-さい', 'こ', 'お'],
    examples: [
      { word: '小さい', reading: 'ちいさい', meaning: 'ちいさい' },
      { word: '小学校', reading: 'しょうがっこう', meaning: 'しょうがっこう' }
    ]
  },
  {
    char: '月', category: 'nature',
    strokeCount: 4,
    strokes: [
      'M 28,12 Q 22,50 25,88',
      'M 28,12 L 72,12 L 72,88',
      'M 30,42 L 70,42',
      'M 30,65 L 70,65'
    ],
    onYomi: ['ゲツ', 'ガツ'], kunYomi: ['つき'],
    examples: [
      { word: '月', reading: 'つき', meaning: 'つき' },
      { word: '一月', reading: 'いちがつ', meaning: 'いちがつ' }
    ]
  },
  {
    char: '日', category: 'nature',
    strokeCount: 4,
    strokes: [
      'M 25,12 L 25,88',
      'M 25,12 L 75,12 L 75,88',
      'M 28,50 L 72,50',
      'M 25,88 L 75,88'
    ],
    onYomi: ['ニチ', 'ジツ'], kunYomi: ['ひ', 'か'],
    examples: [
      { word: '日', reading: 'ひ', meaning: 'ひ' },
      { word: '日曜日', reading: 'にちようび', meaning: 'にちようび' }
    ]
  },
  {
    char: '年', category: 'nature',
    strokeCount: 6,
    strokes: [
      'M 55,8 Q 40,18 28,28',
      'M 20,28 L 80,28',
      'M 20,48 L 80,48',
      'M 50,28 L 50,92',
      'M 30,65 L 70,65',
      'M 18,82 L 82,82'
    ],
    onYomi: ['ネン'], kunYomi: ['とし'],
    examples: [
      { word: '一年', reading: 'いちねん', meaning: 'いちねん' },
      { word: '今年', reading: 'ことし', meaning: 'ことし' }
    ]
  },
  {
    char: '早', category: 'nature',
    strokeCount: 6,
    strokes: [
      'M 25,10 L 25,50',
      'M 25,10 L 75,10 L 75,50',
      'M 28,30 L 72,30',
      'M 25,50 L 75,50',
      'M 50,50 L 50,90',
      'M 20,90 L 80,90'
    ],
    onYomi: ['ソウ', 'サッ'], kunYomi: ['はや-い', 'はや-まる'],
    examples: [
      { word: '早い', reading: 'はやい', meaning: 'はやい' },
      { word: '早く', reading: 'はやく', meaning: 'はやく' }
    ]
  },
  {
    char: '木', category: 'nature',
    strokeCount: 4,
    strokes: [
      'M 15,35 L 85,35',
      'M 50,10 L 50,90',
      'M 50,40 Q 30,62 15,82',
      'M 50,40 Q 70,62 85,82'
    ],
    onYomi: ['ボク', 'モク'], kunYomi: ['き', 'こ'],
    examples: [
      { word: '木', reading: 'き', meaning: 'き' },
      { word: '木曜日', reading: 'もくようび', meaning: 'もくようび' }
    ]
  },
  {
    char: '林', category: 'nature',
    strokeCount: 8,
    strokes: [
      'M 8,35 L 45,35',
      'M 28,10 L 28,88',
      'M 28,40 Q 18,58 8,75',
      'M 28,40 Q 38,58 45,72',
      'M 55,35 L 92,35',
      'M 72,10 L 72,88',
      'M 72,40 Q 60,58 52,75',
      'M 72,40 Q 82,58 92,72'
    ],
    onYomi: ['リン'], kunYomi: ['はやし'],
    examples: [
      { word: '林', reading: 'はやし', meaning: 'はやし' },
      { word: '山林', reading: 'さんりん', meaning: 'さんりん' }
    ]
  },
  {
    char: '森', category: 'nature',
    strokeCount: 12,
    strokes: [
      'M 30,30 L 70,30',
      'M 50,8 L 50,55',
      'M 50,32 Q 38,42 28,52',
      'M 50,32 Q 62,42 72,52',
      'M 8,68 L 35,68',
      'M 22,55 L 22,92',
      'M 22,70 Q 15,78 8,86',
      'M 22,70 Q 30,78 38,85',
      'M 62,68 L 92,68',
      'M 78,55 L 78,92',
      'M 78,70 Q 68,78 60,86',
      'M 78,70 Q 85,78 92,85'
    ],
    onYomi: ['シン'], kunYomi: ['もり'],
    examples: [
      { word: '森', reading: 'もり', meaning: 'もり' },
      { word: '森林', reading: 'しんりん', meaning: 'しんりん' }
    ]
  },
  {
    char: '山', category: 'nature',
    strokeCount: 3,
    strokes: [
      'M 50,10 L 50,88',
      'M 20,40 L 20,88',
      'M 20,88 L 80,88 L 80,40'
    ],
    onYomi: ['サン', 'ザン'], kunYomi: ['やま'],
    examples: [
      { word: '山', reading: 'やま', meaning: 'やま' },
      { word: '火山', reading: 'かざん', meaning: 'かざん' }
    ]
  },
  {
    char: '川', category: 'nature',
    strokeCount: 3,
    strokes: [
      'M 25,15 Q 22,50 25,88',
      'M 50,25 L 50,88',
      'M 75,12 L 75,88'
    ],
    onYomi: ['セン'], kunYomi: ['かわ'],
    examples: [
      { word: '川', reading: 'かわ', meaning: 'かわ' },
      { word: '小川', reading: 'おがわ', meaning: 'おがわ' }
    ]
  },
  {
    char: '土', category: 'nature',
    strokeCount: 3,
    strokes: [
      'M 15,35 L 85,35',
      'M 50,10 L 50,85',
      'M 10,85 L 90,85'
    ],
    onYomi: ['ド', 'ト'], kunYomi: ['つち'],
    examples: [
      { word: '土', reading: 'つち', meaning: 'つち' },
      { word: '土曜日', reading: 'どようび', meaning: 'どようび' }
    ]
  },
  {
    char: '空', category: 'nature',
    strokeCount: 8,
    strokes: [
      'M 20,10 L 50,10',
      'M 35,10 L 35,32',
      'M 50,10 L 80,10 L 80,32',
      'M 20,32 L 85,32',
      'M 52,32 Q 42,42 28,50',
      'M 15,55 L 85,55',
      'M 50,55 L 50,92',
      'M 50,72 Q 70,80 85,88'
    ],
    onYomi: ['クウ'], kunYomi: ['そら', 'あ-く', 'から'],
    examples: [
      { word: '空', reading: 'そら', meaning: 'そら' },
      { word: '空気', reading: 'くうき', meaning: 'くうき' }
    ]
  },
  {
    char: '天', category: 'nature',
    strokeCount: 4,
    strokes: [
      'M 15,20 L 85,20',
      'M 20,48 L 80,48',
      'M 50,20 L 50,88',
      'M 50,50 Q 72,68 88,82'
    ],
    onYomi: ['テン'], kunYomi: ['あめ', 'あま'],
    examples: [
      { word: '天気', reading: 'てんき', meaning: 'てんき' },
      { word: '天', reading: 'てん', meaning: 'てん' }
    ]
  },
  {
    char: '気', category: 'nature',
    strokeCount: 6,
    strokes: [
      'M 20,18 L 75,18',
      'M 20,18 Q 18,50 22,88',
      'M 22,42 L 70,42',
      'M 22,65 L 70,65',
      'M 48,42 L 48,65',
      'M 70,50 Q 80,72 88,82'
    ],
    onYomi: ['キ', 'ケ'], kunYomi: ['いき'],
    examples: [
      { word: '天気', reading: 'てんき', meaning: 'てんき' },
      { word: '元気', reading: 'げんき', meaning: 'げんき' }
    ]
  },
  {
    char: '田', category: 'nature',
    strokeCount: 5,
    strokes: [
      'M 20,15 L 20,85',
      'M 20,15 L 80,15 L 80,85',
      'M 20,50 L 80,50',
      'M 50,15 L 50,85',
      'M 20,85 L 80,85'
    ],
    onYomi: ['デン'], kunYomi: ['た'],
    examples: [
      { word: '田んぼ', reading: 'たんぼ', meaning: 'たんぼ' },
      { word: '水田', reading: 'すいでん', meaning: 'すいでん' }
    ]
  },
  {
    char: '雨', category: 'nature',
    strokeCount: 8,
    strokes: [
      'M 15,18 L 85,18',
      'M 50,8 L 50,18',
      'M 20,18 L 20,88',
      'M 20,18 L 80,18 L 80,88',
      'M 35,40 L 35,48',
      'M 65,40 L 65,48',
      'M 35,62 L 35,70',
      'M 65,62 L 65,70'
    ],
    onYomi: ['ウ'], kunYomi: ['あめ', 'あま'],
    examples: [
      { word: '雨', reading: 'あめ', meaning: 'あめ' },
      { word: '大雨', reading: 'おおあめ', meaning: 'おおあめ' }
    ]
  },
  {
    char: '花', category: 'nature',
    strokeCount: 7,
    strokes: [
      'M 18,15 L 18,35',
      'M 15,30 L 85,30',
      'M 82,15 L 82,35',
      'M 50,30 Q 35,48 20,58',
      'M 25,55 L 80,55',
      'M 52,55 L 52,88',
      'M 52,65 Q 68,78 82,85'
    ],
    onYomi: ['カ'], kunYomi: ['はな'],
    examples: [
      { word: '花', reading: 'はな', meaning: 'はな' },
      { word: '花火', reading: 'はなび', meaning: 'はなび' }
    ]
  },
  {
    char: '草', category: 'nature',
    strokeCount: 9,
    strokes: [
      'M 18,12 L 18,28',
      'M 15,25 L 85,25',
      'M 82,12 L 82,28',
      'M 20,38 L 80,38',
      'M 25,38 L 25,70',
      'M 25,38 L 75,38 L 75,70',
      'M 25,52 L 75,52',
      'M 25,70 L 75,70',
      'M 50,70 L 50,92'
    ],
    onYomi: ['ソウ'], kunYomi: ['くさ'],
    examples: [
      { word: '草', reading: 'くさ', meaning: 'くさ' },
      { word: '草花', reading: 'くさばな', meaning: 'くさばな' }
    ]
  },
  {
    char: '虫', category: 'nature',
    strokeCount: 6,
    strokes: [
      'M 25,10 L 25,65',
      'M 25,10 L 75,10 L 75,65',
      'M 50,10 L 50,65',
      'M 25,38 L 75,38',
      'M 25,65 L 75,65',
      'M 50,65 L 50,72 Q 52,78 60,82 L 70,85'
    ],
    onYomi: ['チュウ'], kunYomi: ['むし'],
    examples: [
      { word: '虫', reading: 'むし', meaning: 'むし' },
      { word: '虫かご', reading: 'むしかご', meaning: 'むしかご' }
    ]
  },
  {
    char: '犬', category: 'nature',
    strokeCount: 4,
    strokes: [
      'M 15,38 L 85,38',
      'M 50,10 L 50,82',
      'M 50,42 Q 30,62 12,82',
      'M 68,20 L 72,28'
    ],
    onYomi: ['ケン'], kunYomi: ['いぬ'],
    examples: [
      { word: '犬', reading: 'いぬ', meaning: 'いぬ' },
      { word: '子犬', reading: 'こいぬ', meaning: 'こいぬ' }
    ]
  },

  // ===== ひと (People) =====
  {
    char: '人', category: 'people',
    strokeCount: 2,
    strokes: [
      'M 50,12 Q 35,50 15,85',
      'M 45,45 Q 62,65 85,82'
    ],
    onYomi: ['ジン', 'ニン'], kunYomi: ['ひと'],
    examples: [
      { word: '人', reading: 'ひと', meaning: 'ひと' },
      { word: '大人', reading: 'おとな', meaning: 'おとな' }
    ]
  },
  {
    char: '名', category: 'people',
    strokeCount: 6,
    strokes: [
      'M 28,15 Q 20,35 15,50',
      'M 28,15 L 55,15 Q 52,32 48,50',
      'M 15,50 L 48,50',
      'M 35,50 L 35,88',
      'M 35,50 L 80,50 L 80,88',
      'M 35,88 L 80,88'
    ],
    onYomi: ['メイ', 'ミョウ'], kunYomi: ['な'],
    examples: [
      { word: '名前', reading: 'なまえ', meaning: 'なまえ' },
      { word: '名人', reading: 'めいじん', meaning: 'めいじん' }
    ]
  },
  {
    char: '女', category: 'people',
    strokeCount: 3,
    strokes: [
      'M 62,12 Q 35,45 18,65',
      'M 15,42 L 85,42',
      'M 50,42 Q 55,65 80,85'
    ],
    onYomi: ['ジョ', 'ニョ'], kunYomi: ['おんな', 'め'],
    examples: [
      { word: '女の子', reading: 'おんなのこ', meaning: 'おんなのこ' },
      { word: '女子', reading: 'じょし', meaning: 'じょし' }
    ]
  },
  {
    char: '男', category: 'people',
    strokeCount: 7,
    strokes: [
      'M 20,10 L 80,10',
      'M 50,10 L 50,50',
      'M 20,10 L 20,50',
      'M 20,50 L 80,50 L 80,10',
      'M 25,58 L 75,58',
      'M 50,58 L 50,90',
      'M 50,75 Q 65,82 80,88'
    ],
    onYomi: ['ダン', 'ナン'], kunYomi: ['おとこ'],
    examples: [
      { word: '男の子', reading: 'おとこのこ', meaning: 'おとこのこ' },
      { word: '男子', reading: 'だんし', meaning: 'だんし' }
    ]
  },
  {
    char: '子', category: 'people',
    strokeCount: 3,
    strokes: [
      'M 18,22 L 78,22 Q 72,42 50,50',
      'M 50,12 L 50,88',
      'M 20,88 L 80,88'
    ],
    onYomi: ['シ', 'ス'], kunYomi: ['こ'],
    examples: [
      { word: '子ども', reading: 'こども', meaning: 'こども' },
      { word: '女子', reading: 'じょし', meaning: 'じょし' }
    ]
  },

  // ===== からだ (Body) =====
  {
    char: '目', category: 'body',
    strokeCount: 5,
    strokes: [
      'M 25,12 L 25,88',
      'M 25,12 L 75,12 L 75,88',
      'M 28,38 L 72,38',
      'M 28,62 L 72,62',
      'M 25,88 L 75,88'
    ],
    onYomi: ['モク', 'ボク'], kunYomi: ['め', 'ま'],
    examples: [
      { word: '目', reading: 'め', meaning: 'め' },
      { word: '目玉', reading: 'めだま', meaning: 'めだま' }
    ]
  },
  {
    char: '耳', category: 'body',
    strokeCount: 6,
    strokes: [
      'M 25,15 L 75,15',
      'M 25,15 L 25,85',
      'M 28,38 L 72,38',
      'M 28,60 L 72,60',
      'M 25,85 L 75,85',
      'M 75,25 L 75,78'
    ],
    onYomi: ['ジ'], kunYomi: ['みみ'],
    examples: [
      { word: '耳', reading: 'みみ', meaning: 'みみ' },
      { word: '耳鼻科', reading: 'じびか', meaning: 'じびか' }
    ]
  },
  {
    char: '口', category: 'body',
    strokeCount: 3,
    strokes: [
      'M 25,18 L 25,82',
      'M 25,18 L 75,18 L 75,82',
      'M 25,82 L 75,82'
    ],
    onYomi: ['コウ', 'ク'], kunYomi: ['くち'],
    examples: [
      { word: '口', reading: 'くち', meaning: 'くち' },
      { word: '入口', reading: 'いりぐち', meaning: 'いりぐち' }
    ]
  },
  {
    char: '手', category: 'body',
    strokeCount: 4,
    strokes: [
      'M 20,22 L 80,22',
      'M 20,48 L 80,48',
      'M 15,75 L 85,75',
      'M 50,10 L 50,90'
    ],
    onYomi: ['シュ'], kunYomi: ['て', 'た'],
    examples: [
      { word: '手', reading: 'て', meaning: 'て' },
      { word: '右手', reading: 'みぎて', meaning: 'みぎて' }
    ]
  },
  {
    char: '足', category: 'body',
    strokeCount: 7,
    strokes: [
      'M 25,10 L 25,45',
      'M 25,10 L 75,10 L 75,45',
      'M 28,28 L 72,28',
      'M 25,45 L 75,45',
      'M 50,45 L 50,80',
      'M 50,65 Q 30,75 15,85',
      'M 50,80 L 85,80'
    ],
    onYomi: ['ソク'], kunYomi: ['あし', 'た-りる'],
    examples: [
      { word: '足', reading: 'あし', meaning: 'あし' },
      { word: '足りる', reading: 'たりる', meaning: 'たりる' }
    ]
  },

  // ===== そのた (Other) =====
  {
    char: '力', category: 'other',
    strokeCount: 2,
    strokes: [
      'M 55,12 L 25,60 L 55,60',
      'M 55,12 L 55,88'
    ],
    onYomi: ['リョク', 'リキ'], kunYomi: ['ちから'],
    examples: [
      { word: '力', reading: 'ちから', meaning: 'ちから' },
      { word: '力もち', reading: 'ちからもち', meaning: 'ちからもち' }
    ]
  },
  {
    char: '王', category: 'other',
    strokeCount: 4,
    strokes: [
      'M 15,18 L 85,18',
      'M 50,18 L 50,82',
      'M 25,50 L 75,50',
      'M 10,82 L 90,82'
    ],
    onYomi: ['オウ'], kunYomi: [],
    examples: [
      { word: '王さま', reading: 'おうさま', meaning: 'おうさま' },
      { word: '王子', reading: 'おうじ', meaning: 'おうじ' }
    ]
  },
  {
    char: '玉', category: 'other',
    strokeCount: 5,
    strokes: [
      'M 15,18 L 85,18',
      'M 50,18 L 50,82',
      'M 25,42 L 75,42',
      'M 10,82 L 90,82',
      'M 72,65 L 78,72'
    ],
    onYomi: ['ギョク'], kunYomi: ['たま'],
    examples: [
      { word: '玉', reading: 'たま', meaning: 'たま' },
      { word: '目玉', reading: 'めだま', meaning: 'めだま' }
    ]
  },
  {
    char: '石', category: 'other',
    strokeCount: 5,
    strokes: [
      'M 18,20 L 80,20',
      'M 55,8 Q 40,18 25,30',
      'M 25,35 L 25,85',
      'M 25,35 L 78,35 L 78,85',
      'M 25,85 L 78,85'
    ],
    onYomi: ['セキ', 'シャク'], kunYomi: ['いし'],
    examples: [
      { word: '石', reading: 'いし', meaning: 'いし' },
      { word: '石ころ', reading: 'いしころ', meaning: 'いしころ' }
    ]
  },
  {
    char: '金', category: 'other',
    strokeCount: 8,
    strokes: [
      'M 50,8 Q 35,22 20,35',
      'M 50,8 Q 65,22 80,35',
      'M 20,35 L 80,35',
      'M 50,35 L 50,55',
      'M 35,45 L 35,52',
      'M 65,45 L 65,52',
      'M 15,55 L 85,55',
      'M 50,55 L 50,92'
    ],
    onYomi: ['キン', 'コン'], kunYomi: ['かね', 'かな'],
    examples: [
      { word: 'お金', reading: 'おかね', meaning: 'おかね' },
      { word: '金曜日', reading: 'きんようび', meaning: 'きんようび' }
    ]
  },
  {
    char: '糸', category: 'other',
    strokeCount: 6,
    strokes: [
      'M 48,8 Q 30,22 22,35',
      'M 48,8 Q 62,22 55,35',
      'M 22,35 Q 38,42 55,35',
      'M 35,48 Q 25,60 18,72',
      'M 35,48 Q 50,60 58,68',
      'M 30,80 L 70,80 L 50,92'
    ],
    onYomi: ['シ'], kunYomi: ['いと'],
    examples: [
      { word: '糸', reading: 'いと', meaning: 'いと' },
      { word: '毛糸', reading: 'けいと', meaning: 'けいと' }
    ]
  },
  {
    char: '貝', category: 'other',
    strokeCount: 7,
    strokes: [
      'M 22,12 L 22,72',
      'M 22,12 L 78,12 L 78,72',
      'M 25,32 L 75,32',
      'M 25,52 L 75,52',
      'M 22,72 L 78,72',
      'M 42,72 Q 28,82 18,90',
      'M 58,72 Q 72,82 82,90'
    ],
    onYomi: ['バイ'], kunYomi: ['かい'],
    examples: [
      { word: '貝', reading: 'かい', meaning: 'かい' },
      { word: '貝がら', reading: 'かいがら', meaning: 'かいがら' }
    ]
  },
  {
    char: '車', category: 'other',
    strokeCount: 7,
    strokes: [
      'M 15,15 L 85,15',
      'M 25,15 L 25,70',
      'M 25,15 L 75,15 L 75,70',
      'M 28,42 L 72,42',
      'M 25,70 L 75,70',
      'M 50,8 L 50,92',
      'M 10,88 L 90,88'
    ],
    onYomi: ['シャ'], kunYomi: ['くるま'],
    examples: [
      { word: '車', reading: 'くるま', meaning: 'くるま' },
      { word: '電車', reading: 'でんしゃ', meaning: 'でんしゃ' }
    ]
  },
  {
    char: '音', category: 'other',
    strokeCount: 9,
    strokes: [
      'M 20,10 L 80,10',
      'M 50,10 L 50,42',
      'M 20,42 L 80,42',
      'M 25,50 L 25,90',
      'M 25,50 L 75,50 L 75,90',
      'M 28,60 L 72,60',
      'M 28,72 L 72,72',
      'M 28,82 L 72,82',
      'M 25,90 L 75,90'
    ],
    onYomi: ['オン', 'イン'], kunYomi: ['おと', 'ね'],
    examples: [
      { word: '音', reading: 'おと', meaning: 'おと' },
      { word: '音楽', reading: 'おんがく', meaning: 'おんがく' }
    ]
  },
  {
    char: '先', category: 'other',
    strokeCount: 6,
    strokes: [
      'M 30,15 L 30,50',
      'M 20,15 L 80,15',
      'M 70,15 L 70,50',
      'M 15,50 L 85,50',
      'M 50,50 Q 35,68 20,85',
      'M 50,50 L 50,72 Q 55,82 78,88'
    ],
    onYomi: ['セン'], kunYomi: ['さき'],
    examples: [
      { word: '先生', reading: 'せんせい', meaning: 'せんせい' },
      { word: '先に', reading: 'さきに', meaning: 'さきに' }
    ]
  },
  {
    char: '生', category: 'other',
    strokeCount: 5,
    strokes: [
      'M 55,8 Q 38,22 22,35',
      'M 15,35 L 85,35',
      'M 50,35 L 50,90',
      'M 25,58 L 75,58',
      'M 10,88 L 90,88'
    ],
    onYomi: ['セイ', 'ショウ'], kunYomi: ['い-きる', 'う-まれる', 'なま'],
    examples: [
      { word: '先生', reading: 'せんせい', meaning: 'せんせい' },
      { word: '生まれる', reading: 'うまれる', meaning: 'うまれる' }
    ]
  },
  {
    char: '正', category: 'other',
    strokeCount: 5,
    strokes: [
      'M 15,18 L 85,18',
      'M 50,18 L 50,88',
      'M 30,42 L 70,42',
      'M 30,65 L 70,65',
      'M 15,88 L 85,88'
    ],
    onYomi: ['セイ', 'ショウ'], kunYomi: ['ただ-しい', 'まさ'],
    examples: [
      { word: '正しい', reading: 'ただしい', meaning: 'ただしい' },
      { word: '正月', reading: 'しょうがつ', meaning: 'しょうがつ' }
    ]
  },
  {
    char: '文', category: 'other',
    strokeCount: 4,
    strokes: [
      'M 48,10 L 52,18',
      'M 15,35 L 85,35',
      'M 50,35 Q 30,58 12,82',
      'M 50,35 Q 68,58 85,78'
    ],
    onYomi: ['ブン', 'モン'], kunYomi: ['ふみ'],
    examples: [
      { word: '文字', reading: 'もじ', meaning: 'もじ' },
      { word: '作文', reading: 'さくぶん', meaning: 'さくぶん' }
    ]
  },
  {
    char: '字', category: 'other',
    strokeCount: 6,
    strokes: [
      'M 20,10 L 50,10',
      'M 50,10 L 80,10 L 80,35',
      'M 20,35 L 80,35',
      'M 50,42 Q 35,55 18,65',
      'M 50,42 L 50,78 Q 55,85 68,88',
      'M 20,90 L 80,90'
    ],
    onYomi: ['ジ'], kunYomi: ['あざ'],
    examples: [
      { word: '文字', reading: 'もじ', meaning: 'もじ' },
      { word: '漢字', reading: 'かんじ', meaning: 'かんじ' }
    ]
  },
  {
    char: '学', category: 'other',
    strokeCount: 8,
    strokes: [
      'M 30,10 L 42,18',
      'M 70,10 L 58,18',
      'M 20,22 L 50,22',
      'M 50,22 L 80,22 L 80,42',
      'M 20,42 L 80,42',
      'M 50,42 Q 40,55 25,65',
      'M 50,42 L 50,72',
      'M 18,88 L 82,88'
    ],
    onYomi: ['ガク'], kunYomi: ['まな-ぶ'],
    examples: [
      { word: '学校', reading: 'がっこう', meaning: 'がっこう' },
      { word: '学ぶ', reading: 'まなぶ', meaning: 'まなぶ' }
    ]
  },
  {
    char: '校', category: 'other',
    strokeCount: 10,
    strokes: [
      'M 15,15 L 85,15',
      'M 28,8 L 28,92',
      'M 28,40 Q 18,60 10,78',
      'M 28,40 Q 38,60 45,72',
      'M 50,25 L 50,48',
      'M 50,25 L 88,25',
      'M 55,25 Q 48,38 42,48',
      'M 55,48 L 88,48',
      'M 68,48 Q 55,68 42,82',
      'M 68,48 Q 78,68 88,82'
    ],
    onYomi: ['コウ'], kunYomi: [],
    examples: [
      { word: '学校', reading: 'がっこう', meaning: 'がっこう' },
      { word: '校長', reading: 'こうちょう', meaning: 'こうちょう' }
    ]
  },
  {
    char: '村', category: 'other',
    strokeCount: 7,
    strokes: [
      'M 10,30 L 40,30',
      'M 25,10 L 25,90',
      'M 25,35 Q 15,55 8,72',
      'M 25,35 Q 35,55 42,68',
      'M 55,18 L 55,85',
      'M 55,18 L 90,18',
      'M 55,50 L 90,50'
    ],
    onYomi: ['ソン'], kunYomi: ['むら'],
    examples: [
      { word: '村', reading: 'むら', meaning: 'むら' },
      { word: '村人', reading: 'むらびと', meaning: 'むらびと' }
    ]
  },
  {
    char: '町', category: 'other',
    strokeCount: 7,
    strokes: [
      'M 15,10 L 15,90',
      'M 15,10 L 38,10 L 38,90',
      'M 18,50 L 35,50',
      'M 15,90 L 38,90',
      'M 50,18 L 88,18',
      'M 50,18 L 50,88',
      'M 50,88 L 88,88 L 88,18'
    ],
    onYomi: ['チョウ'], kunYomi: ['まち'],
    examples: [
      { word: '町', reading: 'まち', meaning: 'まち' },
      { word: '町長', reading: 'ちょうちょう', meaning: 'ちょうちょう' }
    ]
  },
  {
    char: '円', category: 'other',
    strokeCount: 4,
    strokes: [
      'M 20,12 L 20,88',
      'M 20,12 L 80,12 L 80,88',
      'M 40,12 L 40,82',
      'M 60,12 L 60,82'
    ],
    onYomi: ['エン'], kunYomi: ['まる'],
    examples: [
      { word: '百円', reading: 'ひゃくえん', meaning: 'ひゃくえん' },
      { word: '千円', reading: 'せんえん', meaning: 'せんえん' }
    ]
  },
  {
    char: '入', category: 'other',
    strokeCount: 2,
    strokes: [
      'M 55,12 Q 38,50 20,85',
      'M 50,30 Q 65,58 82,82'
    ],
    onYomi: ['ニュウ'], kunYomi: ['い-る', 'い-れる', 'はい-る'],
    examples: [
      { word: '入る', reading: 'はいる', meaning: 'はいる' },
      { word: '入口', reading: 'いりぐち', meaning: 'いりぐち' }
    ]
  },
  {
    char: '出', category: 'other',
    strokeCount: 5,
    strokes: [
      'M 50,5 L 50,55',
      'M 28,25 L 28,55',
      'M 28,55 L 72,55 L 72,25',
      'M 22,55 L 22,90',
      'M 22,90 L 78,90 L 78,55'
    ],
    onYomi: ['シュツ', 'スイ'], kunYomi: ['で-る', 'だ-す'],
    examples: [
      { word: '出る', reading: 'でる', meaning: 'でる' },
      { word: '出口', reading: 'でぐち', meaning: 'でぐち' }
    ]
  },
  {
    char: '立', category: 'other',
    strokeCount: 5,
    strokes: [
      'M 48,10 L 52,18',
      'M 15,32 L 85,32',
      'M 35,32 L 35,68',
      'M 65,32 L 65,68',
      'M 10,88 L 90,88'
    ],
    onYomi: ['リツ', 'リュウ'], kunYomi: ['た-つ', 'た-てる'],
    examples: [
      { word: '立つ', reading: 'たつ', meaning: 'たつ' },
      { word: '立てる', reading: 'たてる', meaning: 'たてる' }
    ]
  },
  {
    char: '休', category: 'other',
    strokeCount: 6,
    strokes: [
      'M 28,10 Q 22,50 25,90',
      'M 28,28 L 15,55',
      'M 50,10 L 50,88',
      'M 50,28 L 88,28',
      'M 50,55 L 88,55',
      'M 68,28 L 68,88'
    ],
    onYomi: ['キュウ'], kunYomi: ['やす-む', 'やす-み'],
    examples: [
      { word: '休む', reading: 'やすむ', meaning: 'やすむ' },
      { word: '休み', reading: 'やすみ', meaning: 'やすみ' }
    ]
  },
  {
    char: '見', category: 'other',
    strokeCount: 7,
    strokes: [
      'M 22,10 L 22,60',
      'M 22,10 L 78,10 L 78,60',
      'M 25,28 L 75,28',
      'M 25,45 L 75,45',
      'M 22,60 L 78,60',
      'M 42,60 Q 28,75 15,88',
      'M 58,60 Q 72,75 85,88'
    ],
    onYomi: ['ケン'], kunYomi: ['み-る', 'み-せる'],
    examples: [
      { word: '見る', reading: 'みる', meaning: 'みる' },
      { word: '見せる', reading: 'みせる', meaning: 'みせる' }
    ]
  },
  {
    char: '水', category: 'other',
    strokeCount: 4,
    strokes: [
      'M 50,10 L 50,90',
      'M 48,40 Q 30,55 12,68',
      'M 50,35 Q 20,70 15,85',
      'M 50,40 Q 70,62 88,78'
    ],
    onYomi: ['スイ'], kunYomi: ['みず'],
    examples: [
      { word: '水', reading: 'みず', meaning: 'みず' },
      { word: '水曜日', reading: 'すいようび', meaning: 'すいようび' }
    ]
  },
  {
    char: '火', category: 'other',
    strokeCount: 4,
    strokes: [
      'M 38,30 L 32,42',
      'M 62,30 L 68,42',
      'M 50,10 Q 35,50 18,85',
      'M 50,28 Q 68,58 85,82'
    ],
    onYomi: ['カ'], kunYomi: ['ひ', 'ほ'],
    examples: [
      { word: '火', reading: 'ひ', meaning: 'ひ' },
      { word: '火曜日', reading: 'かようび', meaning: 'かようび' }
    ]
  },
  {
    char: '本', category: 'other',
    strokeCount: 5,
    strokes: [
      'M 15,32 L 85,32',
      'M 50,8 L 50,92',
      'M 50,38 Q 30,58 12,78',
      'M 50,38 Q 70,58 88,78',
      'M 38,50 L 42,60'
    ],
    onYomi: ['ホン'], kunYomi: ['もと'],
    examples: [
      { word: '本', reading: 'ほん', meaning: 'ほん' },
      { word: '日本', reading: 'にほん', meaning: 'にほん' }
    ]
  },
  {
    char: '白', category: 'other',
    strokeCount: 5,
    strokes: [
      'M 55,8 Q 42,15 32,22',
      'M 25,22 L 25,88',
      'M 25,22 L 78,22 L 78,88',
      'M 28,55 L 75,55',
      'M 25,88 L 78,88'
    ],
    onYomi: ['ハク', 'ビャク'], kunYomi: ['しろ', 'しろ-い', 'しら'],
    examples: [
      { word: '白い', reading: 'しろい', meaning: 'しろい' },
      { word: '白', reading: 'しろ', meaning: 'しろ' }
    ]
  },
  {
    char: '赤', category: 'other',
    strokeCount: 7,
    strokes: [
      'M 15,18 L 85,18',
      'M 50,8 L 50,50',
      'M 25,35 L 75,35',
      'M 15,50 L 85,50',
      'M 50,50 L 50,70',
      'M 50,60 Q 30,75 15,88',
      'M 50,60 Q 70,75 85,88'
    ],
    onYomi: ['セキ', 'シャク'], kunYomi: ['あか', 'あか-い'],
    examples: [
      { word: '赤い', reading: 'あかい', meaning: 'あかい' },
      { word: '赤ちゃん', reading: 'あかちゃん', meaning: 'あかちゃん' }
    ]
  },
  {
    char: '青', category: 'other',
    strokeCount: 8,
    strokes: [
      'M 15,15 L 85,15',
      'M 15,35 L 85,35',
      'M 50,8 L 50,35',
      'M 25,45 L 25,90',
      'M 25,45 L 78,45 L 78,90',
      'M 28,58 L 75,58',
      'M 28,72 L 75,72',
      'M 25,90 L 78,90'
    ],
    onYomi: ['セイ', 'ショウ'], kunYomi: ['あお', 'あお-い'],
    examples: [
      { word: '青い', reading: 'あおい', meaning: 'あおい' },
      { word: '青空', reading: 'あおぞら', meaning: 'あおぞら' }
    ]
  },
  {
    char: '竹', category: 'other',
    strokeCount: 6,
    strokes: [
      'M 30,10 Q 18,30 12,48',
      'M 18,28 L 45,28',
      'M 30,28 L 30,90',
      'M 75,10 Q 60,30 55,48',
      'M 58,28 L 88,28',
      'M 72,28 L 72,90'
    ],
    onYomi: ['チク'], kunYomi: ['たけ'],
    examples: [
      { word: '竹', reading: 'たけ', meaning: 'たけ' },
      { word: '竹の子', reading: 'たけのこ', meaning: 'たけのこ' }
    ]
  },
  {
    char: '夕', category: 'other',
    strokeCount: 3,
    strokes: [
      'M 62,12 Q 35,40 25,58',
      'M 25,38 L 75,38',
      'M 68,38 Q 55,58 42,75'
    ],
    onYomi: ['セキ'], kunYomi: ['ゆう'],
    examples: [
      { word: '夕方', reading: 'ゆうがた', meaning: 'ゆうがた' },
      { word: '夕日', reading: 'ゆうひ', meaning: 'ゆうひ' }
    ]
  }
];
