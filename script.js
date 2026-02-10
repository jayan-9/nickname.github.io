// Global Variables
let currentFilter = "love";
let suggestionsVisible = false;
let isDarkTheme = false;
let nameInputTimer = null;

// Data Structures
let suggestionsData = {
  love: [
    "⋆𐙚:͢I:͢L:͢♡:͢V:͢E:͢y:͢o:͢u𓏧𓅚",
    "►►❇︎˖°M̶o̶m̶-D̶a̶d̶°˖☂ ‹𝟹",
    "𓆩♡𓆪𝐁𝐚𝐛𝐲𝐠𝐢𝐫𝐥𓆩♡𓆪",
    "☆꧁☾𝒞𝒽𝑒𝓇𝒾𝓈𝒽𝑒𝒹☽꧂☆",
    "𝐃𝐚𝐫𝐥𖧷𝐢𝐧𝐠 ☂",
    "C̶u̶t̶i̶e̶ P̶i̶e̶ 💕⃝🕊️",
    "𐙚 ʝααи ♡ ⊹˚₊🐼",
    "☁️𝒮𝓌𝑒𝑒𝓉 𝒞𝓁☁️𝓊𝒹☁️"
  ],
  gamer: [
    "𝚾-Ꮮᴏʀᴅ 亗",
    "N Ξ X U 모",
    "⚡𝓟𝓡𝓞 𝓖𝓐𝓜𝓔𝓡⚡",
    "† 𝓓𝓐𝓡𝓚 𝓛𝓞𝓡𝓓 †"
  ],
  fancy: [
    "ꫝ𝛈𝛋𝛖sʜ ??",
    "𝙲𝚁𝙰𝚉𝚈 βσყ ×͜×",
    "°❈° ≫ 卄卂尺ᗪ 山〇尺Ҝ ≪ °❈°",
    "ᛖᚱ Vιяυѕ ⚠"
  ],
  font: [
    "ᴅ ɪ ᴍ ⌔ ɴ ᴅ",
    "𝐶 🂱 𝑅 𝐷",
    "C̶A̶N̶C̶E̶L̶",
    "Infi∞nity",
    "ꫝυяα"
  ]
};

let stylesByCategory = {
  love: [
    {
      name: "love_panda_style",
      prefix: "˗ˏˋ🐼ﮩ٨ـ",
      suffix: "ـﮩ٨ـ🐼ˎˊ˗",
      map: {
        a: "ᗩ", b: "ᗷ", c: "ᑕ", d: "ᗪ", e: "ᗴ", f: "ᖴ", g: "Ꮐ", h: "ᕼ", i: "Ꭵ", j: "ᒍ",
        k: "Ꮶ", l: "Ꮮ", m: "ᗰ", n: "ᑎ", o: "ᗝ", p: "ᑭ", q: "ᑫ", r: "ᖇ", s: "ᔕ", t: "ᖶ",
        u: "ᑌ", v: "ᐯ", w: "ᗯ", x: "᙭", y: "Ꭹ", z: "ᘔ",
        A: "ᗩ", B: "ᗷ", C: "ᑕ", D: "ᗪ", E: "ᗴ", F: "ᖴ", G: "Ꮐ", H: "ᕼ", I: "Ꭵ", J: "ᒍ",
        K: "Ꮶ", L: "Ꮮ", M: "ᗰ", N: "ᑎ", O: "ᗝ", P: "ᑭ", Q: "ᑫ", R: "ᖇ", S: "ᔕ", T: "ᖶ",
        U: "ᑌ", V: "ᐯ", W: "ᗯ", X: "᙭", Y: "Ꭹ", Z: "ᘔ"
      }
    },
    {
      name: "love_sparkle_style",
      prefix: "𐙚✨˚",
      suffix: "˚✨𐙚 ツ",
      map: {
        a: "a̷", b: "b̷", c: "c̷", d: "d̷", e: "e̷", f: "f̷", g: "g̷", h: "h̷", i: "i̷", j: "j̷",
        k: "k̷", l: "l̷", m: "m̷", n: "n̷", o: "o̷", p: "p̷", q: "q̷", r: "r̷", s: "s̷", t: "t̷",
        u: "u̷", v: "v̷", w: "w̷", x: "x̷", y: "y̷", z: "z̷",
        A: "A̷", B: "B̷", C: "C̷", D: "D̷", E: "E̷", F: "F̷", G: "G̷", H: "H̷", I: "I̷", J: "J̷",
        K: "K̷", L: "L̷", M: "M̷", N: "N̷", O: "O̷", P: "P̷", Q: "Q̷", R: "R̷", S: "S̷", T: "T̷",
        U: "U̷", V: "V̷", W: "W̷", X: "X̷", Y: "Y̷", Z: "Z̷"
      }
    }
  ],
  gamer: [],
  fancy: [],
  font: []
};

let symbolsData = {
  all: [
    { symbol: "❤️", name: "Red Heart" },
    { symbol: "⭐", name: "Star" },
    { symbol: "✨", name: "Sparkles" },
    { symbol: "🔥", name: "Fire" },
    { symbol: "⚡", name: "High Voltage" },
    { symbol: "☀️", name: "Sun" },
    { symbol: "☁️", name: "Cloud" },
    { symbol: "☕", name: "Hot Beverage" },
    { symbol: "☘️", name: "Shamrock" },
    { symbol: "☢️", name: "Radioactive" },
    { symbol: "☣️", name: "Biohazard" },
    { symbol: "☯️", name: "Yin Yang" },
    { symbol: "☮️", name: "Peace Symbol" },
    { symbol: "☪️", name: "Star and Crescent" },
    { symbol: "☸️", name: "Wheel of Dharma" },
    { symbol: "♈", name: "Aries" },
    { symbol: "♉", name: "Taurus" },
    { symbol: "♊", name: "Gemini" },
    { symbol: "♋", name: "Cancer" },
    { symbol: "♌", name: "Leo" },
    { symbol: "♍", name: "Virgo" },
    { symbol: "♎", name: "Libra" },
    { symbol: "♏", name: "Scorpio" },
    { symbol: "♐", name: "Sagittarius" },
    { symbol: "♑", name: "Capricorn" },
    { symbol: "♒", name: "Aquarius" },
    { symbol: "♓", name: "Pisces" },
    { symbol: "♠️", name: "Spade Suit" },
    { symbol: "♥️", name: "Heart Suit" },
    { symbol: "♦️", name: "Diamond Suit" },
    { symbol: "♣️", name: "Club Suit" },
    { symbol: "♨️", name: "Hot Springs" },
    { symbol: "♻️", name: "Recycling Symbol" },
    { symbol: "⚓", name: "Anchor" },
    { symbol: "⚔️", name: "Crossed Swords" },
    { symbol: "⚒️", name: "Hammer and Pick" },
    { symbol: "⚠️", name: "Warning" },
    { symbol: "⚜️", name: "Fleur-de-lis" },
    { symbol: "⚛️", name: "Atom Symbol" },
    { symbol: "⚗️", name: "Alembic" },
    { symbol: "⚙️", name: "Gear" },
    { symbol: "⚖️", name: "Balance Scale" },
    { symbol: "⚕️", name: "Medical Symbol" },
    { symbol: "⚔️", name: "Crossed Swords" },
    { symbol: "⚰️", name: "Coffin" },
    { symbol: "⚱️", name: "Funeral Urn" },
    { symbol: "⚪", name: "White Circle" },
    { symbol: "⚫", name: "Black Circle" },
    { symbol: "🔴", name: "Red Circle" },
    { symbol: "🔵", name: "Blue Circle" },
    { symbol: "🟢", name: "Green Circle" },
    { symbol: "🟡", name: "Yellow Circle" },
    { symbol: "🟣", name: "Purple Circle" },
    { symbol: "🟤", name: "Brown Circle" },
    { symbol: "⚽", name: "Soccer Ball" },
    { symbol: "⚾", name: "Baseball" },
    { symbol: "🥎", name: "Softball" },
    { symbol: "🏀", name: "Basketball" },
    { symbol: "🏐", name: "Volleyball" },
    { symbol: "🏈", name: "American Football" },
    { symbol: "🏉", name: "Rugby Football" },
    { symbol: "🎾", name: "Tennis" },
    { symbol: "🥏", name: "Flying Disc" },
    { symbol: "🎳", name: "Bowling" },
    { symbol: "🏏", name: "Cricket Game" },
    { symbol: "🏑", name: "Field Hockey" },
    { symbol: "🏒", name: "Ice Hockey" },
    { symbol: "🥍", name: "Lacrosse" },
    { symbol: "🏓", name: "Ping Pong" },
    { symbol: "🏸", name: "Badminton" },
    { symbol: "🥊", name: "Boxing Glove" },
    { symbol: "🥋", name: "Martial Arts Uniform" },
    { symbol: "🥅", name: "Goal Net" },
    { symbol: "⛳", name: "Flag in Hole" },
    { symbol: "⛸️", name: "Ice Skate" },
    { symbol: "🎣", name: "Fishing Pole" },
    { symbol: "🎽", name: "Running Shirt" },
    { symbol: "🎿", name: "Skis" },
    { symbol: "🛷", name: "Sled" },
    { symbol: "🥌", name: "Curling Stone" }
  ],
  emoji: [
    { symbol: "😀", name: "Grinning Face" },
    { symbol: "😂", name: "Face with Tears of Joy" },
    { symbol: "🥰", name: "Smiling Face with Hearts" },
    { symbol: "😎", name: "Smiling Face with Sunglasses" },
    { symbol: "🤩", name: "Star-Struck" },
    { symbol: "😜", name: "Winking Face with Tongue" },
    { symbol: "🤪", name: "Zany Face" },
    { symbol: "😇", name: "Smiling Face with Halo" },
    { symbol: "🥳", name: "Partying Face" },
    { symbol: "😍", name: "Smiling Face with Heart-Eyes" },
    { symbol: "🤗", name: "Hugging Face" },
    { symbol: "🤔", name: "Thinking Face" },
    { symbol: "🤫", name: "Shushing Face" },
    { symbol: "🥺", name: "Pleading Face" },
    { symbol: "😭", name: "Loudly Crying Face" },
    { symbol: "😤", name: "Face with Steam From Nose" },
    { symbol: "😡", name: "Pouting Face" },
    { symbol: "🤬", name: "Face with Symbols on Mouth" },
    { symbol: "👻", name: "Ghost" },
    { symbol: "💀", name: "Skull" },
    { symbol: "👽", name: "Alien" },
    { symbol: "🤖", name: "Robot" },
    { symbol: "🎃", name: "Jack-O-Lantern" },
    { symbol: "🦄", name: "Unicorn" },
    { symbol: "🐶", name: "Dog Face" },
    { symbol: "🐱", name: "Cat Face" },
    { symbol: "🐭", name: "Mouse Face" },
    { symbol: "🐰", name: "Rabbit Face" },
    { symbol: "🦊", name: "Fox" },
    { symbol: "🐻", name: "Bear" },
    { symbol: "🐼", name: "Panda" },
    { symbol: "🐨", name: "Koala" },
    { symbol: "🐯", name: "Tiger Face" },
    { symbol: "🦁", name: "Lion" },
    { symbol: "🐮", name: "Cow Face" },
    { symbol: "🐷", name: "Pig Face" },
    { symbol: "🐸", name: "Frog" },
    { symbol: "🐵", name: "Monkey Face" },
    { symbol: "🐔", name: "Chicken" },
    { symbol: "🐧", name: "Penguin" },
    { symbol: "🦅", name: "Eagle" },
    { symbol: "🦉", name: "Owl" },
    { symbol: "🦇", name: "Bat" },
    { symbol: "🦋", name: "Butterfly" },
    { symbol: "🐌", name: "Snail" },
    { symbol: "🐞", name: "Lady Beetle" },
    { symbol: "🦂", name: "Scorpion" },
    { symbol: "🦀", name: "Crab" },
    { symbol: "🐙", name: "Octopus" },
    { symbol: "🐬", name: "Dolphin" },
    { symbol: "🦈", name: "Shark" },
    { symbol: "🐳", name: "Spouting Whale" },
    { symbol: "🐋", name: "Whale" },
    { symbol: "🐊", name: "Crocodile" },
    { symbol: "🦖", name: "T-Rex" },
    { symbol: "🦕", name: "Sauropod" }
  ],
  decor: [
    { symbol: "✦", name: "Black Star" },
    { symbol: "✧", name: "White Star" },
    { symbol: "✩", name: "Star" },
    { symbol: "✪", name: "Circled Star" },
    { symbol: "✫", name: "Open Center Star" },
    { symbol: "✬", name: "Black Center Star" },
    { symbol: "✭", name: "Outlined Black Star" },
    { symbol: "✮", name: "Heavy Outlined Star" },
    { symbol: "✯", name: "Pinwheel Star" },
    { symbol: "✰", name: "Shadowed White Star" },
    { symbol: "★", name: "Black Star" },
    { symbol: "☆", name: "White Star" },
    { symbol: "☾", name: "Last Quarter Moon" },
    { symbol: "☽", name: "First Quarter Moon" },
    { symbol: "☀", name: "Sun" },
    { symbol: "☁", name: "Cloud" },
    { symbol: "☂", name: "Umbrella" },
    { symbol: "☃", name: "Snowman" },
    { symbol: "☄", name: "Comet" },
    { symbol: "☇", name: "Lightning" },
    { symbol: "☈", name: "Thunderstorm" },
    { symbol: "☉", name: "Sun" },
    { symbol: "☊", name: "Ascending Node" },
    { symbol: "☋", name: "Descending Node" },
    { symbol: "☌", name: "Conjunction" },
    { symbol: "☍", name: "Opposition" },
    { symbol: "☎", name: "Telephone" },
    { symbol: "☏", name: "White Telephone" },
    { symbol: "☐", name: "Ballot Box" },
    { symbol: "☑", name: "Ballot Box with Check" },
    { symbol: "☒", name: "Ballot Box with X" },
    { symbol: "☓", name: "Saltire" },
    { symbol: "☔", name: "Umbrella with Rain Drops" },
    { symbol: "☕", name: "Hot Beverage" },
    { symbol: "☖", name: "White Shogi Piece" },
    { symbol: "☗", name: "Black Shogi Piece" },
    { symbol: "☘", name: "Shamrock" },
    { symbol: "☙", name: "Reversed Rotated Floral Heart Bullet" },
    { symbol: "☚", name: "Black Left Pointing Index" },
    { symbol: "☛", name: "Black Right Pointing Index" },
    { symbol: "☜", name: "White Left Pointing Index" },
    { symbol: "☝", name: "White Up Pointing Index" },
    { symbol: "☞", name: "White Right Pointing Index" },
    { symbol: "☟", name: "White Down Pointing Index" },
    { symbol: "☠", name: "Skull and Crossbones" },
    { symbol: "☡", name: "Caution Sign" },
    { symbol: "☢", name: "Radioactive Sign" },
    { symbol: "☣", name: "Biohazard Sign" },
    { symbol: "☤", name: "Caduceus" },
    { symbol: "☥", name: "Ankh" },
    { symbol: "☦", name: "Orthodox Cross" },
    { symbol: "☧", name: "Chi Rho" },
    { symbol: "☨", name: "Cross of Lorraine" },
    { symbol: "☩", name: "Cross of Jerusalem" },
    { symbol: "☪", name: "Star and Crescent" },
    { symbol: "☫", name: "Farsi Symbol" },
    { symbol: "☬", name: "Adi Shakti" },
    { symbol: "☭", name: "Hammer and Sickle" },
    { symbol: "☮", name: "Peace Symbol" },
    { symbol: "☯", name: "Yin Yang" },
    { symbol: "☰", name: "Trigram for Heaven" },
    { symbol: "☱", name: "Trigram for Lake" },
    { symbol: "☲", name: "Trigram for Fire" },
    { symbol: "☳", name: "Trigram for Thunder" },
    { symbol: "☴", name: "Trigram for Wind" },
    { symbol: "☵", name: "Trigram for Water" },
    { symbol: "☶", name: "Trigram for Mountain" },
    { symbol: "☷", name: "Trigram for Earth" }
  ],
  gaming: [
    { symbol: "⚔️", name: "Crossed Swords" },
    { symbol: "🛡️", name: "Shield" },
    { symbol: "🎮", name: "Video Game" },
    { symbol: "👾", name: "Alien Monster" },
    { symbol: "🕹️", name: "Joystick" },
    { symbol: "🎲", name: "Game Die" },
    { symbol: "♟️", name: "Chess Pawn" },
    { symbol: "🎯", name: "Bullseye" },
    { symbol: "🎳", name: "Bowling" },
    { symbol: "🏹", name: "Bow and Arrow" },
    { symbol: "🔫", name: "Pistol" },
    { symbol: "💣", name: "Bomb" },
    { symbol: "🧨", name: "Firecracker" },
    { symbol: "🔪", name: "Kitchen Knife" },
    { symbol: "🗡️", name: "Dagger" },
    { symbol: "🏆", name: "Trophy" },
    { symbol: "🥇", name: "1st Place Medal" },
    { symbol: "🥈", name: "2nd Place Medal" },
    { symbol: "🥉", name: "3rd Place Medal" },
    { symbol: "🎖️", name: "Military Medal" },
    { symbol: "🏅", name: "Sports Medal" },
    { symbol: "🎗️", name: "Reminder Ribbon" },
    { symbol: "🎪", name: "Circus Tent" },
    { symbol: "🎭", name: "Performing Arts" },
    { symbol: "🎨", name: "Artist Palette" },
    { symbol: "🎬", name: "Clapper Board" },
    { symbol: "🎤", name: "Microphone" },
    { symbol: "🎧", name: "Headphone" },
    { symbol: "🎼", name: "Musical Score" },
    { symbol: "🎹", name: "Musical Keyboard" },
    { symbol: "🥁", name: "Drum" },
    { symbol: "🎷", name: "Saxophone" },
    { symbol: "🎺", name: "Trumpet" },
    { symbol: "🎸", name: "Guitar" },
    { symbol: "🪕", name: "Banjo" },
    { symbol: "🎻", name: "Violin" },
    { symbol: "🎲", name: "Game Die" },
    { symbol: "♠️", name: "Spade Suit" },
    { symbol: "♥️", name: "Heart Suit" },
    { symbol: "♦️", name: "Diamond Suit" },
    { symbol: "♣️", name: "Club Suit" },
    { symbol: "🃏", name: "Joker" },
    { symbol: "🎴", name: "Flower Playing Cards" },
    { symbol: "🀄", name: "Mahjong Red Dragon" },
    { symbol: "🕐", name: "One O'Clock" },
    { symbol: "🕑", name: "Two O'Clock" },
    { symbol: "🕒", name: "Three O'Clock" },
    { symbol: "🕓", name: "Four O'Clock" },
    { symbol: "🕔", name: "Five O'Clock" },
    { symbol: "🕕", name: "Six O'Clock" },
    { symbol: "🕖", name: "Seven O'Clock" },
    { symbol: "🕗", name: "Eight O'Clock" },
    { symbol: "🕘", name: "Nine O'Clock" },
    { symbol: "🕙", name: "Ten O'Clock" },
    { symbol: "🕚", name: "Eleven O'Clock" },
    { symbol: "🕛", name: "Twelve O'Clock" },
    { symbol: "🕜", name: "One-Thirty" },
    { symbol: "🕝", name: "Two-Thirty" },
    { symbol: "🕞", name: "Three-Thirty" },
    { symbol: "🕟", name: "Four-Thirty" },
    { symbol: "🕠", name: "Five-Thirty" },
    { symbol: "🕡", name: "Six-Thirty" },
    { symbol: "🕢", name: "Seven-Thirty" },
    { symbol: "🕣", name: "Eight-Thirty" },
    { symbol: "🕤", name: "Nine-Thirty" },
    { symbol: "🕥", name: "Ten-Thirty" },
    { symbol: "🕦", name: "Eleven-Thirty" },
    { symbol: "🕧", name: "Twelve-Thirty" }
  ],
  love: [
    { symbol: "❤️", name: "Red Heart" },
    { symbol: "🧡", name: "Orange Heart" },
    { symbol: "💛", name: "Yellow Heart" },
    { symbol: "💚", name: "Green Heart" },
    { symbol: "💙", name: "Blue Heart" },
    { symbol: "💜", name: "Purple Heart" },
    { symbol: "🖤", name: "Black Heart" },
    { symbol: "🤍", name: "White Heart" },
    { symbol: "🤎", name: "Brown Heart" },
    { symbol: "💔", name: "Broken Heart" },
    { symbol: "❣️", name: "Heart Exclamation" },
    { symbol: "💕", name: "Two Hearts" },
    { symbol: "💞", name: "Revolving Hearts" },
    { symbol: "💓", name: "Beating Heart" },
    { symbol: "💗", name: "Growing Heart" },
    { symbol: "💖", name: "Sparkling Heart" },
    { symbol: "💘", name: "Heart with Arrow" },
    { symbol: "💝", name: "Heart with Ribbon" },
    { symbol: "💟", name: "Heart Decoration" },
    { symbol: "☮️", name: "Peace Symbol" },
    { symbol: "✝️", name: "Latin Cross" },
    { symbol: "☪️", name: "Star and Crescent" },
    { symbol: "🕉️", name: "Om" },
    { symbol: "☸️", name: "Wheel of Dharma" },
    { symbol: "✡️", name: "Star of David" },
    { symbol: "🔯", name: "Six Pointed Star with Dot" },
    { symbol: "🕎", name: "Menorah" },
    { symbol: "☯️", name: "Yin Yang" },
    { symbol: "☦️", name: "Orthodox Cross" },
    { symbol: "🛐", name: "Place of Worship" },
    { symbol: "⛎", name: "Ophiuchus" },
    { symbol: "♈", name: "Aries" },
    { symbol: "♉", name: "Taurus" },
    { symbol: "♊", name: "Gemini" },
    { symbol: "♋", name: "Cancer" },
    { symbol: "♌", name: "Leo" },
    { symbol: "♍", name: "Virgo" },
    { symbol: "♎", name: "Libra" },
    { symbol: "♏", name: "Scorpio" },
    { symbol: "♐", name: "Sagittarius" },
    { symbol: "♑", name: "Capricorn" },
    { symbol: "♒", name: "Aquarius" },
    { symbol: "♓", name: "Pisces" },
    { symbol: "🆔", name: "ID Button" },
    { symbol: "⚛️", name: "Atom Symbol" },
    { symbol: "🉑", name: "Acceptable Character" },
    { symbol: "☢️", name: "Radioactive" },
    { symbol: "☣️", name: "Biohazard" },
    { symbol: "📴", name: "Mobile Phone Off" },
    { symbol: "📳", name: "Vibration Mode" },
    { symbol: "🈶", name: "Japanese "Not Free of Charge" Button" },
    { symbol: "🈚", name: "Japanese "Free of Charge" Button" },
    { symbol: "🈸", name: "Japanese "Application" Button" },
    { symbol: "🈺", name: "Japanese "Open for Business" Button" },
    { symbol: "🈷️", name: "Japanese "Monthly Amount" Button" },
    { symbol: "✴️", name: "Eight-Pointed Star" },
    { symbol: "🆚", name: "VS Button" },
    { symbol: "💮", name: "White Flower" },
    { symbol: "🉐", name: "Japanese "Bargain" Button" },
    { symbol: "㊙️", name: "Japanese "Secret" Button" },
    { symbol: "㊗️", name: "Japanese "Congratulations" Button" },
    { symbol: "🈴", name: "Japanese "Passing Grade" Button" },
    { symbol: "🈵", name: "Japanese "No Vacancy" Button" },
    { symbol: "🈹", name: "Japanese "Discount" Button" },
    { symbol: "🈲", name: "Japanese "Prohibited" Button" },
    { symbol: "🅰️", name: "A Button (Blood Type)" },
    { symbol: "🅱️", name: "B Button (Blood Type)" },
    { symbol: "🆎", name: "AB Button (Blood Type)" },
    { symbol: "🆑", name: "CL Button" },
    { symbol: "🅾️", name: "O Button (Blood Type)" },
    { symbol: "🆘", name: "SOS Button" },
    { symbol: "❌", name: "Cross Mark" },
    { symbol: "⭕", name: "Heavy Large Circle" },
    { symbol: "🛑", name: "Stop Sign" },
    { symbol: "⛔", name: "No Entry" },
    { symbol: "📛", name: "Name Badge" },
    { symbol: "🚫", name: "Prohibited" },
    { symbol: "💯", name: "Hundred Points" },
    { symbol: "💢", name: "Anger Symbol" },
    { symbol: "♨️", name: "Hot Springs" },
    { symbol: "🚷", name: "No Pedestrians" },
    { symbol: "🚯", name: "No Littering" },
    { symbol: "🚳", name: "No Bicycles" },
    { symbol: "🚱", name: "Non-Potable Water" },
    { symbol: "🔞", name: "No One Under Eighteen" },
    { symbol: "📵", name: "No Mobile Phones" },
    { symbol: "🚭", name: "No Smoking" },
    { symbol: "❗", name: "Exclamation Mark" },
    { symbol: "❕", name: "White Exclamation Mark" },
    { symbol: "❓", name: "Question Mark" },
    { symbol: "❔", name: "White Question Mark" },
    { symbol: "‼️", name: "Double Exclamation Mark" },
    { symbol: "⁉️", name: "Exclamation Question Mark" },
    { symbol: "🔅", name: "Dim Button" },
    { symbol: "🔆", name: "Bright Button" },
    { symbol: "〽️", name: "Part Alternation Mark" },
    { symbol: "⚠️", name: "Warning" },
    { symbol: "🚸", name: "Children Crossing" },
    { symbol: "🔱", name: "Trident Emblem" },
    { symbol: "⚜️", name: "Fleur-de-lis" },
    { symbol: "🔰", name: "Japanese Symbol for Beginner" },
    { symbol: "♻️", name: "Recycling Symbol" },
    { symbol: "✅", name: "Check Mark Button" },
    { symbol: "🈯", name: "Japanese "Reserved" Button" },
    { symbol: "💹", name: "Chart Increasing with Yen" },
    { symbol: "❇️", name: "Sparkle" },
    { symbol: "✳️", name: "Eight-Spoked Asterisk" },
    { symbol: "❎", name: "Cross Mark Button" },
    { symbol: "🌐", name: "Globe with Meridians" },
    { symbol: "💠", name: "Diamond with a Dot" },
    { symbol: "Ⓜ️", name: "Circled M" },
    { symbol: "🌀", name: "Cyclone" },
    { symbol: "💤", name: "Zzz" },
    { symbol: "🏧", name: "ATM Sign" },
    { symbol: "🚾", name: "Water Closet" },
    { symbol: "♿", name: "Wheelchair Symbol" },
    { symbol: "🅿️", name: "P Button" },
    { symbol: "🈳", name: "Japanese "Vacancy" Button" },
    { symbol: "🈂️", name: "Japanese "Service Charge" Button" },
    { symbol: "🛂", name: "Passport Control" },
    { symbol: "🛃", name: "Customs" },
    { symbol: "🛄", name: "Baggage Claim" },
    { symbol: "🛅", name: "Left Luggage" },
    { symbol: "🚹", name: "Men's Room" },
    { symbol: "🚺", name: "Women's Room" },
    { symbol: "🚼", name: "Baby Symbol" },
    { symbol: "🚻", name: "Restroom" },
    { symbol: "🚮", name: "Litter in Bin Sign" },
    { symbol: "🎦", name: "Cinema" },
    { symbol: "📶", name: "Antenna Bars" },
    { symbol: "🈁", name: "Japanese "Here" Button" },
      
  return true;
};

// ==================== CORE FUNCTIONS ====================

function convert(name, map) {
  return name.split("").map(ch => {
    if (map[ch] !== undefined) {
      return map[ch];
    }
    
    const lowerChar = ch.toLowerCase();
    if (map[lowerChar] !== undefined) {
      return map[lowerChar]{ symbol: "🚾", name: "Water Closet" },
    { symbol: "♿", name: "Wheelchair Symbol" },
    { symbol: "🅿️", name: "P Button" },
    { symbol: "🈳", name: "Japanese "Vacancy" Button" },
    { symbol: "🈂️", name: "Japanese "Service Charge" Button" },
    { symbol: "🛂", name: "Passport Control" },
    { symbol: "🛃", name: "Customs" },
    { symbol: "🛄", name: "Baggage Claim" },
    { symbol: "🛅", name: "Left Luggage" },
    { symbol: "🚹", name: "Men's Room" },
    { symbol: "🚺", name: "Women's Room" },
    { symbol: "🚼", name: "Baby Symbol" },
    { symbol: "🚻", name: "Restroom" },
    { symbol: "🚮", name: "Litter in Bin Sign" },
    { symbol: "🎦", name: "Cinema" },
    { symbol: "📶", name: "Antenna Bars" },
    { symbol: "🈁", name: "Japanese "Here" Button" },
    { symbol: "🔣", name: "Input Symbols" },
    { symbol: "ℹ️", name: "Information" },
    { symbol: "🔤", name: "Input Latin Letters" },
    { symbol: "🔡", name: "Input Latin Lowercase" },
    { symbol: "🔠", name: "Input Latin Uppercase" },
    { symbol: "🆖", name: "NG Button" },
    { symbol: "🆗", name: "OK Button" },
    { symbol: "🆙", name: "UP! Button" },
    { symbol: "🆒", name: "COOL Button" },
    { symbol: "🆕", name: "NEW Button" },
    { symbol: "🆓", name: "FREE Button" },
    { symbol: "0️⃣", name: "Keycap 0" },
    { symbol: "1️⃣", name: "Keycap 1" },
    { symbol: "2️⃣", name: "Keycap 2" },
    { symbol: "3️⃣", name: "Keycap 3" },
    { symbol: "4️⃣", name: "Keycap 4" },
    { symbol: "5️⃣", name: "Keycap 5" },
    { symbol: "6️⃣", name: "Keycap 6" },
    { symbol: "7️⃣", name: "Keycap 7" },
    { symbol: "8️⃣", name: "Keycap 8" },
    { symbol: "9️⃣", name: "Keycap 9" },
    { symbol: "🔟", name: "Keycap 10" },
    { symbol: "*️⃣", name: "Keycap Asterisk" },
    { symbol: "#️⃣", name: "Keycap Number Sign" },
    { symbol: "⏏️", name: "Eject Button" },
    { symbol: "▶️", name: "Play Button" },
    { symbol: "⏸️", name: "Pause Button" },
    { symbol: "⏯️", name: "Play or Pause Button" },
    { symbol: "⏹️", name: "Stop Button" },
    { symbol: "⏺️", name: "Record Button" },
    { symbol: "⏭️", name: "Next Track Button" },
    { symbol: "⏮️", name: "Last Track Button" },
    { symbol: "⏩", name: "Fast-Forward Button" },
    { symbol: "⏪", name: "Fast Reverse Button" },
    { symbol: "⏫", name: "Fast Up Button" },
    { symbol: "⏬", name: "Fast Down Button" },
    { symbol: "◀️", name: "Reverse Button" },
    { symbol: "🔼", name: "Upwards Button" },
    { symbol: "🔽", name: "Downwards Button" },
    { symbol: "➡️", name: "Right Arrow" },
    { symbol: "⬅️", name: "Left Arrow" },
    { symbol: "⬆️", name: "Up Arrow" },
    { symbol: "⬇️", name: "Down Arrow" },
    { symbol: "↗️", name: "Up-Right Arrow" },
    { symbol: "↘️", name: "Down-Right Arrow" },
    { symbol: "↙️", name: "Down-Left Arrow" },
    { symbol: "↖️", name: "Up-Left Arrow" },
    { symbol: "↕️", name: "Up-Down Arrow" },
    { symbol: "↔️", name: "Left-Right Arrow" },
    { symbol: "↪️", name: "Right Arrow Curving Left" },
    { symbol: "↩️", name: "Left Arrow Curving Right" },
    { symbol: "⤴️", name: "Right Arrow Curving Up" },
    { symbol: "⤵️", name: "Right Arrow Curving Down" },
    { symbol: "🔀", name: "Shuffle Tracks Button" },
    { symbol: "🔁", name: "Repeat Button" },
    { symbol: "🔂", name: "Repeat Single Button" },
    { symbol: "🔄", name: "Counterclockwise Arrows Button" },
    { symbol: "🔃", name: "Clockwise Vertical Arrows" },
    { symbol: "🎵", name: "Musical Note" },
    { symbol: "🎶", name: "Musical Notes" },
    { symbol: "➕", name: "Plus Sign" },
    { symbol: "➖", name: "Minus Sign" },
    { symbol: "➗", name: "Division Sign" },
    { symbol: "✖️", name: "Multiplication Sign" },
    { symbol: "💲", name: "Heavy Dollar Sign" },
    { symbol: "💱", name: "Currency Exchange" },
    { symbol: "™️", name: "Trade Mark" },
    { symbol: "©️", name: "Copyright" },
    { symbol: "®️", name: "Registered" },
    { symbol: "〰️", name: "Wavy Dash" },
    { symbol: "➰", name: "Curly Loop" },
    { symbol: "➿", name: "Double Curly Loop" },
    { symbol: "🔚", name: "END Arrow" },
    { symbol: "🔙", name: "BACK Arrow" },
    { symbol: "🔛", name: "ON! Arrow" },
    { symbol: "🔝", name: "TOP Arrow" },
    { symbol: "🔜", name: "SOON Arrow" },
    { symbol: "✔️", name: "Check Mark" },
    { symbol: "☑️", name: "Check Box with Check" },
    { symbol: "🔘", name: "Radio Button" },
    { symbol: "⚪", name: "White Circle" },
    { symbol: "⚫", name: "Black Circle" },
    { symbol: "🔴", name: "Red Circle" },
    { symbol: "🔵", name: "Blue Circle" },
    { symbol: "🔺", name: "Red Triangle Pointed Up" },
    { symbol: "🔻", name: "Red Triangle Pointed Down" },
    { symbol: "🔸", name: "Small Orange Diamond" },
    { symbol: "🔹", name: "Small Blue Diamond" },
    { symbol: "🔶", name: "Large Orange Diamond" },
    { symbol: "🔷", name: "Large Blue Diamond" },
    { symbol: "🔳", name: "White Square Button" },
    { symbol: "🔲", name: "Black Square Button" },
    { symbol: "▪️", name: "Black Small Square" },
    { symbol: "▫️", name: "White Small Square" },
    { symbol: "◾", name: "Black Medium Small Square" },
    { symbol: "◽", name: "White Medium Small Square" },
    { symbol: "◼️", name: "Black Medium Square" },
    { symbol: "◻️", name: "White Medium Square" },
    { symbol: "⬛", name: "Black Large Square" },
    { symbol: "⬜", name: "White Large Square" },
    { symbol: "🔈", name: "Speaker Low Volume" },
    { symbol: "🔇", name: "Muted Speaker" },
    { symbol: "🔉", name: "Speaker Medium Volume" },
    { symbol: "🔊", name: "Speaker High Volume" },
    { symbol: "🔔", name: "Bell" },
    { symbol: "🔕", name: "Bell with Slash" },
    { symbol: "📣", name: "Megaphone" },
    { symbol: "📢", name: "Loudspeaker" },
    { symbol: "👁‍🗨", name: "Eye in Speech Bubble" },
    { symbol: "💬", name: "Speech Balloon" },
    { symbol: "💭", name: "Thought Balloon" },
    { symbol: "🗯️", name: "Right Anger Bubble" },
    { symbol: "🗨️", name: "Left Speech Bubble" },
    { symbol: "🕐", name: "One O'Clock" },
    { symbol: "🕑", name: "Two O'Clock" },
    { symbol: "🕒", name: "Three O'Clock" },
    { symbol: "🕓", name: "Four O'Clock" },
    { symbol: "🕔", name: "Five O'Clock" },
    { symbol: "🕕", name: "Six O'Clock" },
    { symbol: "🕖", name: "Seven O'Clock" },
    { symbol: "🕗", name: "Eight O'Clock" },
    { symbol: "🕘", name: "Nine O'Clock" },
    { symbol: "🕙", name: "Ten O'Clock" },
    { symbol: "🕚", name: "Eleven O'Clock" },
    { symbol: "🕛", name: "Twelve O'Clock" },
    { symbol: "🕜", name: "One-Thirty" },
    { symbol: "🕝", name: "Two-Thirty" },
    { symbol: "🕞", name: "Three-Thirty" },
    { symbol: "🕟", name: "Four-Thirty" },
    { symbol: "🕠", name: "Five-Thirty" },
    { symbol: "🕡", name: "Six-Thirty" },
    { symbol: "🕢", name: "Seven-Thirty" },
    { symbol: "🕣", name: "Eight-Thirty" },
    { symbol: "🕤", name: "Nine-Thirty" },
    { symbol: "🕥", name: "Ten-Thirty" },
    { symbol: "🕦", name: "Eleven-Thirty" },
    { symbol: "🕧", name: "Twelve-Thirty" },
    { symbol: "⌛", name: "Hourglass Done" },
    { symbol: "⏳", name: "Hourglass Not Done" },
    { symbol: "⌚", name: "Watch" },
    { symbol: "⏰", name: "Alarm Clock" },
    { symbol: "⏱️", name: "Stopwatch" },
    { symbol: "⏲️", name: "Timer Clock" },
    { symbol: "🕰️", name: "Mantelpiece Clock" },
    { symbol: "🌡️", name: "Thermometer" },
    { symbol: "🌧️", name: "Cloud with Rain" },
    { symbol: "🌨️", name: "Cloud with Snow" },
    { symbol: "🌩️", name: "Cloud with Lightning" },
    { symbol: "🌪️", name: "Tornado" },
    { symbol: "🌫️", name: "Fog" },
    { symbol: "🌬️", name: "Wind Face" },
    { symbol: "🌀", name: "Cyclone" },
    { symbol: "🌈", name: "Rainbow" },
    { symbol: "🌂", name: "Closed Umbrella" },
    { symbol: "☂️", name: "Umbrella" },
    { symbol: "☔", name: "Umbrella with Rain Drops" },
    { symbol: "⛱️", name: "Umbrella on Ground" },
    { symbol: "⚡", name: "High Voltage" },
    { symbol: "❄️", name: "Snowflake" },
    { symbol: "☃️", name: "Snowman" },
    { symbol: "⛄", name: "Snowman Without Snow" },
    { symbol: "☄️", name: "Comet" },
    { symbol: "🔥", name: "Fire" },
    { symbol: "💧", name: "Droplet" },
    { symbol: "🌊", name: "Water Wave" },
    { symbol: "🎃", name: "Jack-O-Lantern" },
    { symbol: "🎄", name: "Christmas Tree" },
    { symbol: "🎆", name: "Fireworks" },
    { symbol: "🎇", name: "Sparkler" },
    { symbol: "✨", name: "Sparkles" },
    { symbol: "🎈", name: "Balloon" },
    { symbol: "🎉", name: "Party Popper" },
    { symbol: "🎊", name: "Confetti Ball" },
    { symbol: "🎋", name: "Tanabata Tree" },
    { symbol: "🎍", name: "Pine Decoration" },
    { symbol: "🎎", name: "Japanese Dolls" },
    { symbol: "🎏", name: "Carp Streamer" },
    { symbol: "🎐", name: "Wind Chime" },
    { symbol: "🎑", name: "Moon Viewing Ceremony" },
    { symbol: "🧧", name: "Red Envelope" },
    { symbol: "🎀", name: "Ribbon" },
    { symbol: "🎁", name: "Wrapped Gift" },
    { symbol: "🎗️", name: "Reminder Ribbon" },
    { symbol: "🎟️", name: "Admission Tickets" },
    { symbol: "🎫", name: "Ticket" },
    { symbol: "🎖️", name: "Military Medal" },
    { symbol: "🏆", name: "Trophy" },
    { symbol: "🏅", name: "Sports Medal" },
    { symbol: "🥇", name: "1st Place Medal" },
    { symbol: "🥈", name: "2nd Place Medal" },
    { symbol: "🥉", name: "3rd Place Medal" },
    { symbol: "⚽", name: "Soccer Ball" },
    { symbol: "⚾", name: "Baseball" },
    { symbol: "🥎", name: "Softball" },
    { symbol: "🏀", name: "Basketball" },
    { symbol: "🏐", name: "Volleyball" },
    { symbol: "🏈", name: "American Football" },
    { symbol: "🏉", name: "Rugby Football" },
    { symbol: "🎾", name: "Tennis" },
    { symbol: "🥏", name: "Flying Disc" },
    { symbol: "🎳", name: "Bowling" },
    { symbol: "🏏", name: "Cricket Game" },
    { symbol: "🏑", name: "Field Hockey" },
    { symbol: "🏒", name: "Ice Hockey" },
    { symbol: "🥍", name: "Lacrosse" },
    { symbol: "🏓", name: "Ping Pong" },
    { symbol: "🏸", name: "Badminton" },
    { symbol: "🥊", name: "Boxing Glove" },
    { symbol: "🥋", name: "Martial Arts Uniform" },
    { symbol: "🥅", name: "Goal Net" },
    { symbol: "⛳", name: "Flag in Hole" },
    { symbol: "⛸️", name: "Ice Skate" },
    { symbol: "🎣", name: "Fishing Pole" },
    { symbol: "🤿", name: "Diving Mask" },
    { symbol: "🎽", name: "Running Shirt" },
    { symbol: "🎿", name: "Skis" },
    { symbol: "🛷", name: "Sled" },
    { symbol: "🥌", name: "Curling Stone" },
    { symbol: "🎯", name: "Bullseye" },
    { symbol: "🪀", name: "Yo-Yo" },
    { symbol: "🪁", name: "Kite" },
    { symbol: "🔫", name: "Pistol" },
    { symbol: "🎱", name: "Pool 8 Ball" },
    { symbol: "🔮", name: "Crystal Ball" },
    { symbol: "🪄", name: "Magic Wand" },
    { symbol: "🎮", name: "Video Game" },
    { symbol: "🕹️", name: "Joystick" },
    { symbol: "🎰", name: "Slot Machine" },
    { symbol: "🎲", name: "Game Die" },
    { symbol: "🧩", name: "Puzzle Piece" },
    { symbol: "🧸", name: "Teddy Bear" },
    { symbol: "♠️", name: "Spade Suit" },
    { symbol: "♥️", name: "Heart Suit" },
    { symbol: "♦️", name: "Diamond Suit" },
    { symbol: "♣️", name: "Club Suit" },
    { symbol: "♟️", name: "Chess Pawn" },
    { symbol: "🃏", name: "Joker" },
    { symbol: "🀄", name: "Mahjong Red Dragon" },
    { symbol: "🎴", name: "Flower Playing Cards" },
    { symbol: "🎭", name: "Performing Arts" },
    { symbol: "🖼️", name: "Framed Picture" },
    { symbol: "🎨", name: "Artist Palette" },
    { symbol: "🧵", name: "Thread" },
    { symbol: "🧶", name: "Yarn" },
    { symbol: "👓", name: "Glasses" },
    { symbol: "🕶️", name: "Sunglasses" },
    { symbol: "🥽", name: "Goggles" },
    { symbol: "🥼", name: "Lab Coat" },
    { symbol: "🦺", name: "Safety Vest" },
    { symbol: "👔", name: "Necktie" },
    { symbol: "👕", name: "T-Shirt" },
    { symbol: "👖", name: "Jeans" },
    { symbol: "🧣", name: "Scarf" },
    { symbol: "🧤", name: "Gloves" },
    { symbol: "🧥", name: "Coat" },
    { symbol: "🧦", name: "Socks" },
    { symbol: "👗", name: "Dress" },
    { symbol: "👘", name: "Kimono" },
    { symbol: "🥻", name: "Sari" },
    { symbol: "🩱", name: "One-Piece Swimsuit" },
    { symbol: "🩲", name: "Briefs" },
    { symbol: "🩳", name: "Shorts" },
    { symbol: "👙", name: "Bikini" },
    { symbol: "👚", name: "Woman's Clothes" },
    { symbol: "👛", name: "Purse" },
    { symbol: "👜", name: "Handbag" },
    { symbol: "👝", name: "Clutch Bag" },
    { symbol: "🎒", name: "Backpack" },
    { symbol: "👞", name: "Man's Shoe" },
    { symbol: "👟", name: "Running Shoe" },
    { symbol: "🥾", name: "Hiking Boot" },
    { symbol: "🥿", name: "Flat Shoe" },
    { symbol: "👠", name: "High-Heeled Shoe" },
    { symbol: "👡", name: "Woman's Sandal" },
    { symbol: "🩰", name: "Ballet Shoes" },
    { symbol: "👢", name: "Woman's Boot" },
    { symbol: "👑", name: "Crown" },
    { symbol: "👒", name: "Woman's Hat" },
    { symbol: "🎩", name: "Top Hat" },
    { symbol: "🎓", name: "Graduation Cap" },
    { symbol: "🧢", name: "Billed Cap" },
    { symbol: "⛑️", name: "Rescue Worker's Helmet" },
    { symbol: "📿", name: "Prayer Beads" },
    { symbol: "💄", name: "Lipstick" },
    { symbol: "💍", name: "Ring" },
    { symbol: "💎", name: "Gem Stone" },
    { symbol: "🔇", name: "Muted Speaker" },
    { symbol: "🔈", name: "Speaker Low Volume" },
    { symbol: "🔉", name: "Speaker Medium Volume" },
    { symbol: "🔊", name: "Speaker High Volume" },
    { symbol: "📢", name: "Loudspeaker" },
    { symbol: "📣", name: "Megaphone" },
    { symbol: "📯", name: "Postal Horn" },
    { symbol: "🔔", name: "Bell" },
    { symbol: "🔕", name: "Bell with Slash" },
    { symbol: "🎼", name: "Musical Score" },
    { symbol: "🎵", name: "Musical Note" },
    { symbol: "🎶", name: "Musical Notes" },
    { symbol: "🎙️", name: "Studio Microphone" },
    { symbol: "🎚️", name: "Level Slider" },
    { symbol: "🎛️", name: "Control Knobs" },
    { symbol: "🎤", name: "Microphone" },
    { symbol: "🎧", name: "Headphone" },
    { symbol: "📻", name: "Radio" },
    { symbol: "🎷", name: "Saxophone" },
    { symbol: "🎸", name: "Guitar" },
    { symbol: "🎹", name: "Musical Keyboard" },
    { symbol: "🎺", name: "Trumpet" },
    { symbol: "🎻", name: "Violin" },
    { symbol: "🪕", name: "Banjo" },
    { symbol: "🥁", name: "Drum" },
    { symbol: "📱", name: "Mobile Phone" },
    { symbol: "📲", name: "Mobile Phone with Arrow" },
    { symbol: "☎️", name: "Telephone" },
    { symbol: "📞", name: "Telephone Receiver" },
    { symbol: "📟", name: "Pager" },
    { symbol: "📠", name: "Fax Machine" },
    { symbol: "🔋", name: "Battery" },
    { symbol: "🔌", name: "Electric Plug" },
    { symbol: "💻", name: "Laptop" },
    { symbol: "🖥️", name: "Desktop Computer" },
    { symbol: "🖨️", name: "Printer" },
    { symbol: "⌨️", name: "Keyboard" },
    { symbol: "🖱️", name: "Computer Mouse" },
    { symbol: "🖲️", name: "Trackball" },
    { symbol: "💽", name: "Computer Disk" },
    { symbol: "💾", name: "Floppy Disk" },
    { symbol: "💿", name: "Optical Disk" },
    { symbol: "📀", name: "DVD" },
    { symbol: "🧮", name: "Abacus" },
    { symbol: "🎥", name: "Movie Camera" },
    { symbol: "🎞️", name: "Film Frames" },
    { symbol: "📽️", name: "Film Projector" },
    { symbol: "🎬", name: "Clapper Board" },
    { symbol: "📺", name: "Television" },
    { symbol: "📷", name: "Camera" },
    { symbol: "📸", name: "Camera with Flash" },
    { symbol: "📹", name: "Video Camera" },
    { symbol: "📼", name: "Videocassette" },
    { symbol: "🔍", name: "Magnifying Glass Tilted Left" },
    { symbol: "🔎", name: "Magnifying Glass Tilted Right" },
    { symbol: "🕯️", name: "Candle" },
    { symbol: "💡", name: "Light Bulb" },
    { symbol: "🔦", name: "Flashlight" },
    { symbol: "🏮", name: "Red Paper Lantern" },
    { symbol: "🪔", name: "Diya Lamp" },
    { symbol: "📔", name: "Notebook with Decorative Cover" },
    { symbol: "📕", name: "Closed Book" },
    { symbol: "📖", name: "Open Book" },
    { symbol: "📗", name: "Green Book" },
    { symbol: "📘", name: "Blue Book" },
    { symbol: "📙", name: "Orange Book" },
    { symbol: "📚", name: "Books" },
    { symbol: "📓", name: "Notebook" },
    { symbol: "📒", name: "Ledger" },
    { symbol: "📃", name: "Page with Curl" },
    { symbol: "📜", name: "Scroll" },
    { symbol: "📄", name: "Page Facing Up" },
    { symbol: "📰", name: "Newspaper" },
    { symbol: "🗞️", name: "Rolled-Up Newspaper" },
    { symbol: "📑", name: "Bookmark Tabs" },
    { symbol: "🔖", name: "Bookmark" },
    { symbol: "🏷️", name: "Label" },
    { symbol: "💰", name: "Money Bag" },
    { symbol: "🪙", name: "Coin" },
    { symbol: "💴", name: "Yen Banknote" },
    { symbol: "💵", name: "Dollar Banknote" },
    { symbol: "💶", name: "Euro Banknote" },
    { symbol: "💷", name: "Pound Banknote" },
    { symbol: "💸", name: "Money with Wings" },
    { symbol: "💳", name: "Credit Card" },
    { symbol: "🧾", name: "Receipt" },
    { symbol: "💹", name: "Chart Increasing with Yen" },
    { symbol: "✉️", name: "Envelope" },
    { symbol: "📧", name: "E-Mail" },
    { symbol: "📨", name: "Incoming Envelope" },
    { symbol: "📩", name: "Envelope with Arrow" },
    { symbol: "📤", name: "Outbox Tray" },
    { symbol: "📥", name: "Inbox Tray" },
    { symbol: "📦", name: "Package" },
    { symbol: "📫", name: "Closed Mailbox with Raised Flag" },
    { symbol: "📪", name: "Closed Mailbox with Lowered Flag" },
    { symbol: "📬", name: "Open Mailbox with Raised Flag" },
    { symbol: "📭", name: "Open Mailbox with Lowered Flag" },
    { symbol: "📮", name: "Postbox" },
    { symbol: "🗳️", name: "Ballot Box with Ballot" },
    { symbol: "✏️", name: "Pencil" },
    { symbol: "✒️", name: "Black Nib" },
    { symbol: "🖋️", name: "Fountain Pen" },
    { symbol: "🖊️", name: "Pen" },
    { symbol: "🖌️", name: "Paintbrush" },
    { symbol: "🖍️", name: "Crayon" },
    { symbol: "📝", name: "Memo" },
    { symbol: "💼", name: "Briefcase" },
    { symbol: "📁", name: "File Folder" },
    { symbol: "📂", name: "Open File Folder" },
    { symbol: "🗂️", name: "Card Index Dividers" },
    { symbol: "📅", name: "Calendar" },
    { symbol: "📆", name: "Tear-Off Calendar" },
    { symbol: "🗒️", name: "Spiral Notepad" },
    { symbol: "🗓️", name: "Spiral Calendar" },
    { symbol: "📇", name: "Card Index" },
    { symbol: "📈", name: "Chart Increasing" },
    { symbol: "📉", name: "Chart Decreasing" },
    { symbol: "📊", name: "Bar Chart" },
    { symbol: "📋", name: "Clipboard" },
    { symbol: "📌", name: "Pushpin" },
    { symbol: "📍", name: "Round Pushpin" },
    { symbol: "📎", name: "Paperclip" },
    { symbol: "🖇️", name: "Linked Paperclips" },
    { symbol: "📏", name: "Straight Ruler" },
    { symbol: "📐", name: "Triangular Ruler" },
    { symbol: "✂️", name: "Scissors" },
    { symbol: "🗃️", name: "Card File Box" },
    { symbol: "🗄️", name: "File Cabinet" },
    { symbol: "🗑️", name: "Wastebasket" },
    { symbol: "🔒", name: "Locked" },
    { symbol: "🔓", name: "Unlocked" },
    { symbol: "🔏", name: "Locked with Pen" },
    { symbol: "🔐", name: "Locked with Key" },
    { symbol: "🔑", name: "Key" },
    { symbol: "🗝️", name: "Old Key" },
    { symbol: "🔨", name: "Hammer" },
    { symbol: "🪓", name: "Axe" },
    { symbol: "⛏️", name: "Pick" },
    { symbol: "⚒️", name: "Hammer and Pick" },
    { symbol: "🛠️", name: "Hammer and Wrench" },
    { symbol: "🗡️", name: "Dagger" },
    { symbol: "⚔️", name: "Crossed Swords" },
    { symbol: "🔫", name: "Pistol" },
    { symbol: "🪃", name: "Boomerang" },
    { symbol: "🏹", name: "Bow and Arrow" },
    { symbol: "🛡️", name: "Shield" },
    { symbol: "🪚", name: "Carpentry Saw" },
        return;
  }
  
  const styles = stylesByCategory[currentFilter] || [];
  
  if (styles.length === 0) {
    result.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-exclamation-circle"></i>
        <p>No styles available for this category.</p>
      </div>
    `;
    if (resultsCount) resultsCount.textContent = "0 styles";
    return;
  }
  
  styles.forEach(style => {
    const styled = style.prefix + convert(name, style.map) + style.suffix;
    const escapedStyled = styled.replace(/'/g, "\\'").replace(/"/g, '&quot;');
    
    const div = document.createElement('d{ symbol: "🖼️", name: "Framed Picture" },
    { symbol: "🎨", name: "Artist Palette" },
    { symbol: "🧵", name: "Thread" },
    { symbol: "🧶", name: "Yarn" }
  ]
};

// Utility Functions
function convert(name, map) {
  return name.split("").map(ch => {
    if (map[ch] !== undefined) return map[ch];
    const lowerChar = ch.toLowerCase();
    if (map[lowerChar] !== undefined) return map[lowerChar];
    const upperChar = ch.toUpperCase();
    if (map[upperChar] !== undefined) return map[upperChar];
    return ch;
  }).join("");
}

// Core Functions
function generateStyles() {
  const name = document.getElementById('nameInput').value.trim();
  const result = document.getElementById('result');
  const resultsCount = document.getElementById('resultsCount');
  
  result.innerHTML = "";
  
  if (!name) {
    result.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-magic"></i>
        <h3>Ready to Create Magic?</h3>
        <p>Enter your name above and select a category to see amazing style transformations!</p>
      </div>
    `;
    resultsCount.textContent = "0";
    return;
  }
  
  const styles = stylesByCategory[currentFilter] || [];
  
  if (styles.length === 0) {
    result.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-exclamation-circle"></i>
        <h3>No Styles Available</h3>
        <p>We're working on adding more styles for this category. Try another category!</p>
      </div>
    `;
    resultsCount.textContent = "0";
    return;
  }
  
  // Randomize the order of styles
  const shuffled = [...styles].sort(() => Math.random() - 0.5);
  
  shuffled.forEach(style => {
    const styled = style.prefix + convert(name, style.map) + style.suffix;
    const escapedStyled = styled.replace(/'/g, "\\'").replace(/"/g, '&quot;');
    
    const div = document.createElement('div');
    div.className = 'style-card';
    div.innerHTML = `
      <div class="style-text">${styled}</div>
      <button class="copy-btn" onclick="copyText('${escapedStyled}', this)">
        <i class="fas fa-copy"></i> Copy Style
      </button>
    `;
    result.appendChild(div);
  });
  
  resultsCount.textContent = styles.length;
}

function selectCategory(category) {
  currentFilter = category;
  
  // Update category cards
  document.querySelectorAll('.category-card').forEach(card => {
    card.classList.remove('active');
    if (card.dataset.category === category) {
      card.classList.add('active');
    }
  });
  
  // Hide suggestions if visible
  if (suggestionsVisible) {
    toggleSuggestions();
  }
  
  // Generate styles if there's input
  const name = document.getElementById('nameInput').value.trim();
  if (name) {
    generateStyles();
  } else {
    const result = document.getElementById('result');
    result.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-magic"></i>
        <h3>Ready to Create ${category.charAt(0).toUpperCase() + category.slice(1)} Styles?</h3>
        <p>Enter your name above to see amazing ${category} style transformations!</p>
      </div>
    `;
    document.getElementById('resultsCount').textContent = "0";
  }
}

function toggleSuggestions() {
  const suggestionsSection = document.getElementById('suggestionsSection');
  
  if (!suggestionsVisible) {
    suggestionsSection.classList.add('show');
    loadSuggestions();
    suggestionsVisible = true;
  } else {
    suggestionsSection.classList.remove('show');
    suggestionsVisible = false;
  }
}

function loadSuggestions() {
  const suggestionsSection = document.getElementById('suggestionsSection');
  const currentSuggestions = suggestionsData[currentFilter] || [];
  
  if (currentSuggestions.length === 0) {
    suggestionsSection.innerHTML = `
      <h3><i class="fas fa-lightbulb"></i> ${currentFilter.charAt(0).toUpperCase() + currentFilter.slice(1)} Name Suggestions</h3>
      <p class="no-suggestions">No suggestions available for this category.</p>
    `;
    return;
  }
  
  let html = `<h3><i class="fas fa-lightbulb"></i> ${currentFilter.charAt(0).toUpperCase() + currentFilter.slice(1)} Name Suggestions</h3>`;
  html += `<div class="suggestions-grid">`;
  
  currentSuggestions.forEach(suggestion => {
    const escapedSuggestion = suggestion.replace(/'/g, "\\'").replace(/"/g, '&quot;');
    html += `
      <div class="suggestion-item">
        <div class="suggestion-text">${suggestion}</div>
        <button class="copy-btn" onclick="copyText('${escapedSuggestion}', this)">
          <i class="fas fa-copy"></i> Copy
        </button>
      </div>
    `;
  });
  
  html += `</div>`;
  suggestionsSection.innerHTML = html;
}

function loadSymbols(category = 'all') {
  const symbolsGrid = document.querySelector('.symbols-grid');
  const symbols = symbolsData[category] || symbolsData.all;
  
  symbolsGrid.innerHTML = '';
  
  symbols.slice(0, 100).forEach(symbol => { // Limit to 100 symbols for performance
    const escapedSymbol = symbol.symbol.replace(/'/g, "\\'").replace(/"/g, '&quot;');
    const div = document.createElement('div');
    div.className = 'symbol-item';
    div.innerHTML = symbol.symbol;
    div.title = symbol.name;
    div.onclick = () => insertSymbol(symbol.symbol);
    symbolsGrid.appendChild(div);
  });
}

function insertSymbol(symbol) {
  const nameInput = document.getElementById('nameInput');
  const currentValue = nameInput.value;
  const cursorPos = nameInput.selectionStart;
  
  nameInput.value = currentValue.substring(0, cursorPos) + symbol + currentValue.substring(cursorPos);
  nameInput.selectionStart = nameInput.selectionEnd = cursorPos + symbol.length;
  nameInput.focus();
  
  closeSymbolModal();
}

function openSymbolModal() {
  const modal = document.getElementById('symbolModal');
  modal.classList.add('show');
  loadSymbols('all');
  
  // Add category button listeners
  document.querySelectorAll('.sym-cat-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.sym-cat-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      loadSymbols(this.dataset.cat);
    });
  });
}

function closeSymbolModal() {
  const modal = document.getElementById('symbolModal');
  modal.classList.remove('show');
}

function copyText(text, buttonElement = null) {
  navigator.clipboard.writeText(text)
    .then(() => {
      if (buttonElement) {
        const originalText = buttonElement.innerHTML;
        buttonElement.innerHTML = '<i class="fas fa-check"></i> Copied!';
        buttonElement.classList.add('copied');
        
        setTimeout(() => {
          buttonElement.innerHTML = originalText;
          buttonElement.classList.remove('copied');
        }, 1500);
      }
      showToast('Text copied to clipboard!');
    })
    .catch(err => {
      console.error('Failed to copy: ', err);
      showToast('Failed to copy text. Please try again.');
    });
}

function showToast(message) {
  const existingToast = document.querySelector('.toast');
  if (existingToast) existingToast.remove();
  
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 300);
  }, 2000);
}

function toggleMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('show');
}

function toggleTheme() {
  isDarkTheme = !isDarkTheme;
  document.body.classList.toggle('dark-theme');
  
  // Save preference
  localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
  toggleMobileMenu();
  
  showToast(isDarkTheme ? 'Dark mode enabled' : 'Light mode enabled');
}

function showAllSymbols() {
  openSymbolModal();
  toggleMobileMenu();
}

function showFontGallery() {
  showToast('Font gallery coming soon!');
  toggleMobileMenu();
}

// Add initial styles
function addInitialStyles() {
  // Font Style 1
  addStyle('font', 'font_combining_ring', '', '', {
    a: "a͢", b: "b͢", c: "c͢", d: "d͢", e: "e͢", f: "f͢", g: "g͢", h: "h͢", i: "i͢", j: "j͢",
    k: "k͢", l: "l͢", m: "m͢", n: "n͢", o: "o͢", p: "p͢", q: "q͢", r: "r͢", s: "s͢", t: "t͢",
    u: "u͢", v: "v͢", w: "w͢", x: "x͢", y: "y͢", z: "z͢",
    A: "A͢", B: "B͢", C: "C͢", D: "D͢", E: "E͢", F: "F͢", G: "G͢", H: "H͢", I: "I͢", J: "J͢",
    K: "K͢", L: "L͢", M: "M͢", N: "N͢", O: "O͢", P: "P͢", Q: "Q͢", R: "R͢", S: "S͢", T: "T͢",
    U: "U͢", V: "V͢", W: "W͢", X: "X͢", Y: "Y͢", Z: "Z͢"
  });
  
  // Gamer Style 1
  addStyle('gamer', 'gamer_bold_sans_serif', '', '', {
    a: "𝙖", b: "𝙗", c: "𝙘", d: "𝙙", e: "𝙚", f: "𝙛", g: "𝙜", h: "𝙝", i: "𝙞", j: "𝙟",
    k: "𝙠", l: "𝙡", m: "𝙢", n: "𝙣", o: "𝙤", p: "𝙥", q: "𝙦", r: "𝙧", s: "𝙨", t: "𝙩",
    u: "𝙪", v: "𝙫", w: "𝙬", x: "𝙭", y: "𝙮", z: "𝙯",
    A: "𝗔", B: "𝗕", C: "𝗖", D: "𝗗", E: "𝗘", F: "𝗙", G: "𝗚", H: "𝗛", I: "𝗜", J: "𝗝",
    K: "𝗞", L: "𝗟", M: "𝗠", N: "𝗡", O: "𝗢", P: "𝗣", Q: "𝗤", R: "𝗥", S: "𝗦", T: "𝗧",
    U: "𝗨", V: "𝗩", W: "𝗪", X: "𝗫", Y: "𝗬", Z: "𝗭"
  });
  
  // Gamer Style 2
  addStyle('gamer', 'gamer_Lord_star', 'ℓ♔ʀᴅ ⋆˙𓍊₊', '₊˙𓍊⋆ 々࿐', {
    a: "α", b: "в", c: "ċ", d: "ɗ", e: "ᥱ", f: "ƒ", g: "ĝ", h: "ħ", i: "ï", j: "ʝ",
    k: "ᴋ", l: "ι", m: "ᴍ", n: "ռ", o: "ᦞ", p: "թ", q: "զ", r: "ř", s: "s̶", t: "τ",
    u: "𝛖", v: "𝛎", w: "w̶", x: "ẋ", y: "ʏ", z: "ƶ",
    A: "ᴀ", B: "ʙ", C: "ᴄ", D: "ᴅ", E: "ᴇ", F: "Ғ", G: "ɢ", H: "ʜ", I: "ɪ", J: "נ",
    K: "ƙ", L: "ʟ", M: "ᴍ", N: "ɴ", O: "ᴏ", P: "ᴘ", Q: "ᦙ", R: "ᚱ", S: "ꜱ", T: "τ",
    U: "ᴜ", V: "ᴠ", W: "ᴡ", X: "᥊", Y: "γ", Z: "ᴢ"
  });
  
  // Gamer Style 3
  addStyle('gamer', 'gamer_Thai_prefix', '.', ' 𖧷 Ɠмʀ', {
    a: "α", b: "b", c: "ċ", d: "d", e: "ᥱ", f: "ƒ", g: "g", h: "h̶", i: "!", j: "נ",
    k: "k", l: "ℓ", m: "m", n: "ᥒ", o: "𖹭", p: "p", q: "q", r: "r", s: "s", t: "t",
    u: "ᴜ", v: "v", w: "w", x: "ꪎ", y: "ʏ", z: "ƶ",
    A: "๖ۣۜA", B: "๖ۣۜB", C: "๖ۣۜC", D: "๖ۣۜD", E: "๖ۣۜE", F: "๖ۣۜF", G: "๖ۣۜG", H: "๖ۣۜH", I: "๖ۣۜI", J: "๖ۣۜJ",
    K: "๖ۣۜK", L: "๖ۣۜL", M: "๖ۣۜM", N: "๖ۣۜN", O: "๖ۣۜO", P: "๖ۣۜP", Q: "๖ۣۜQ", R: "๖ۣۜR", S: "๖ۣۜS", T: "๖ۣۜT",
    U: "๖ۣۜU", V: "๖ۣۜV", W: "๖ۣۜW", X: "๖ۣۜX", Y: "๖ۣۜY", Z: "๖ۣۜZ"
  });
}

// Public API functions
window.addStyle = function(category, styleName, prefix, suffix, charMap) {
  if (!stylesByCategory[category]) stylesByCategory[category] = [];
  
  const exists = stylesByCategory[category].find(s => s.name === styleName);
  if (exists) {
    showToast(`Style "${styleName}" already exists in ${category}`);
    return false;
  }
  
  stylesByCategory[category].push({ name: styleName, prefix, suffix, map: charMap });
  showToast(`New style "${styleName}" added to ${category}`);
  
  if (currentFilter === category) {
    const name = document.getElementById('nameInput').value.trim();
    if (name) generateStyles();
  }
  
  return true;
};

window.addSuggestion = function(category, suggestionText) {
  if (!suggestionsData[category]) suggestionsData[category] = [];
  suggestionsData[category].push(suggestionText);
  showToast(`New suggestion added to ${category}`);
  
  if (suggestionsVisible && currentFilter === category) loadSuggestions();
  return true;
};

window.addSymbols = function(symbolCategory, symbol, name) {
  if (!symbolsData[symbolCategory]) symbolsData[symbolCategory] = [];
  symbolsData[symbolCategory].push({ symbol, name });
  showToast(`New symbol "${name}" added to ${symbolCategory}`);
  return true;
};

// Initialize
document.addEventListener('DOMContentLoaded', function() {
  // Load theme preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    isDarkTheme = true;
    document.body.classList.add('dark-theme');
  }
  
  // Auto-generate on typing
  document.getElementById('nameInput').addEventListener('input', function() {
    clearTimeout(nameInputTimer);
    nameInputTimer = setTimeout(() => {
      if (this.value.trim().length > 0) generateStyles();
    }, 500);
  });
  
  // Enter key support
  document.getElementById('nameInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') generateStyles();
  });
  
  // Close modal when clicking outside
  document.getElementById('symbolModal').addEventListener('click', function(e) {
    if (e.target === this) closeSymbolModal();
  });
  
  // Add initial styles
  addInitialStyles();
  
  // Initial generation for default category
  generateStyles();
  });
