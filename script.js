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
    { symbol: "⭐", name: "Star" }
 ],
  decor: [
    { symbol: "✦", name: "Black Star" },
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
