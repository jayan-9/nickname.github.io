let currentFilter = "love";
let suggestionsVisible = false;
let nameInputTimer = null;
let isDarkTheme = false;

// ==================== FLEXIBLE DATA STRUCTURES ====================

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
    "N Ξ X U 모"
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
  frames: [
    { symbol: "꧁", name: "Left Frame" },
    { symbol: "✦", name: "Black Star" },
    { symbol: "✧", name: "White Star" },
    { symbol: "✩", name: "Star" },
    { symbol: "⥊", name: "Left Harpoon" },
    { symbol: "⥋", name: "Right Harpoon" }
  ],
  tech: [
    { symbol: "░", name: "Light Shade" },
    { symbol: "▒", name: "Medium Shade" },
    { symbol: "▓", name: "Dark Shade" },
    { symbol: "♛", name: "Chess Queen" },
    { symbol: "♚", name: "Chess King" },
    { symbol: "✪", name: "Circled Star" }
  ],
  nature: [
    { symbol: "🌿", name: "Leaf" },
    { symbol: "🌻", name: "Sunflower" },
    { symbol: "🌴", name: "Palm Tree" },
    { symbol: "🍂", name: "Fallen Leaf" },
    { symbol: "🥀", name: "Wilted Flower" }
  ],
  vip: [
    { symbol: "̤̮", name: "Combining Breve" },
    { symbol: "⋆˚࿔⊹", name: "Star Ornaments" },
    { symbol: "𓍊", name: "Egyptian Reed" }
  ],
  gamer: [
    { symbol: "࿐", name: "Flower Swirl" },
    { symbol: "ズ", name: "Katakana Zu" }
  ],
  cute: [
    { symbol: "☺︎", name: "Smiley" },
    { symbol: "➶➶", name: "Double Feather" },
    { symbol: "°", name: "Degree" },
    { symbol: "☃︎", name: "Snowman" }
  ]
};

// ==================== EASY-TO-USE FUNCTIONS ====================

window.addStyle = function(category, styleName, prefix, suffix, charMap) {
  if (!stylesByCategory[category]) {
    stylesByCategory[category] = [];
  }
  
  const exists = stylesByCategory[category].find(s => s.name === styleName);
  if (exists) {
    showToast(`Style "${styleName}" already exists in ${category}`);
    return false;
  }
  
  const newStyle = {
    name: styleName,
    prefix: prefix || "",
    suffix: suffix || "",
    map: charMap
  };
  
  stylesByCategory[category].push(newStyle);
  showToast(`New style "${styleName}" added to ${category}`);
  
  if (currentFilter === category) {
    const name = document.getElementById('nameInput').value.trim();
    if (name) {
      generateStyles();
    }
  }
  
  return true;
};

window.addSuggestion = function(category, suggestionText) {
  if (!suggestionsData[category]) {
    suggestionsData[category] = [];
  }
  
  suggestionsData[category].push(suggestionText);
  showToast(`New suggestion added to ${category}`);
  
  if (suggestionsVisible && currentFilter === category) {
    loadSuggestions();
  }
  
  return true;
};

window.addSymbols = function(symbolCategory, symbol, name) {
  if (!symbolsData[symbolCategory]) {
    symbolsData[symbolCategory] = [];
  }
  
  symbolsData[symbolCategory].push({ symbol: symbol, name: name });
  showToast(`New symbol "${name}" added to ${symbolCategory}`);
  
  const modal = document.getElementById('symbolModal');
  if (modal && modal.classList.contains('show')) {
    loadModalTabs();
  }
  
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
      return map[lowerChar];
    }
    
    const upperChar = ch.toUpperCase();
    if (map[upperChar] !== undefined) {
      return map[upperChar];
    }
    
    return ch;
  }).join("");
}

function generateStyles() {
  const name = document.getElementById('nameInput').value.trim();
  const result = document.getElementById('result');
  const resultsCount = document.getElementById('resultsCount');
  
  result.innerHTML = "";
  
  if (!name) {
    result.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-magic"></i>
        <p>Enter your name to see magical styles!</p>
      </div>
    `;
    if (resultsCount) resultsCount.textContent = "0 styles";
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
    
    const div = document.createElement('div');
    div.className = `style-box ${currentFilter}`;
    div.innerHTML = `
      <span class="style-text">${styled}</span>
      <button class="copy-btn" onclick="copyText('${escapedStyled}', this)">
        <i class="fas fa-copy"></i> Copy
      </button>
    `;
    result.appendChild(div);
  });
  
  if (resultsCount) resultsCount.textContent = styles.length + " styles";
}

function selectCategory(type) {
  currentFilter = type;
  
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-tab') === type) {
      btn.classList.add('active');
    }
  });
  
  if (suggestionsVisible) {
    toggleSuggestions();
  }
  
  const name = document.getElementById('nameInput').value.trim();
  if (name) {
    generateStyles();
  } else {
    document.getElementById('result').innerHTML = `
      <div class="empty-state">
        <i class="fas fa-magic"></i>
        <p>Enter your name to see ${type} styles!</p>
      </div>
    `;
    const resultsCount = document.getElementById('resultsCount');
    if (resultsCount) resultsCount.textContent = "0 styles";
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
      <div class="container">
        <h3 class="suggestions-title"><i class="fas fa-lightbulb"></i> ${currentFilter.charAt(0).toUpperCase() + currentFilter.slice(1)} Name Suggestions</h3>
        <p class="no-suggestions">No suggestions available.</p>
      </div>
    `;
    return;
  }
  
  let html = `<div class="container">`;
  html += `<h3 class="suggestions-title"><i class="fas fa-lightbulb"></i> ${currentFilter.charAt(0).toUpperCase() + currentFilter.slice(1)} Name Suggestions</h3>`;
  html += `<div class="suggestions-grid">`;
  
  currentSuggestions.forEach(suggestion => {
    const escapedSuggestion = suggestion.replace(/'/g, "\\'").replace(/"/g, '&quot;');
    html += `
      <div class="suggestion-box ${currentFilter}">
        <span class="suggestion-text">${suggestion}</span>
        <button class="suggestion-copy-btn" onclick="copyText('${escapedSuggestion}', this)">
          <i class="fas fa-copy"></i> Copy
        </button>
      </div>
    `;
  });
  
  html += `</div></div>`;
  suggestionsSection.innerHTML = html;
}

function loadModalTabs() {
  const modalTabs = document.getElementById('modalTabs');
  let html = '';
  
  Object.keys(symbolsData).forEach((category, index) => {
    const activeClass = index === 0 ? 'active' : '';
    html += `<button class="modal-tab-btn ${activeClass}" onclick="openSymbolTab('${category}')">${category.charAt(0).toUpperCase() + category.slice(1)}</button>`;
  });
  
  modalTabs.innerHTML = html;
  
  const firstCategory = Object.keys(symbolsData)[0];
  if (firstCategory) {
    openSymbolTab(firstCategory);
  }
}

function openSymbolTab(category) {
  document.querySelectorAll('.modal-tab-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.textContent.toLowerCase().includes(category.toLowerCase())) {
      btn.classList.add('active');
    }
  });
  
  const symbolsGrid = document.getElementById('symbolsGrid');
  const symbols = symbolsData[category] || [];
  
  if (symbols.length === 0) {
    symbolsGrid.innerHTML = '<p class="no-symbols">No symbols available.</p>';
    return;
  }
  
  let html = '';
  symbols.forEach(symbol => {
    const escapedSymbol = symbol.symbol.replace(/'/g, "\\'").replace(/"/g, '&quot;');
    html += `
      <div class="symbol-item">
        <div class="symbol-display">${symbol.symbol}</div>
        <div class="symbol-name">${symbol.name}</div>
        <div class="symbol-actions">
          <button class="symbol-insert-btn" onclick="insertSymbol('${escapedSymbol}')">
            <i class="fas fa-plus"></i> Insert
          </button>
          <button class="symbol-copy-btn" onclick="copyText('${escapedSymbol}', this)">
            <i class="fas fa-copy"></i> Copy
          </button>
        </div>
      </div>
    `;
  });
  
  symbolsGrid.innerHTML = html;
}

function insertSymbol(symbol) {
  const nameInput = document.getElementById('nameInput');
  const currentValue = nameInput.value;
  const cursorPos = nameInput.selectionStart;
  
  nameInput.value = currentValue.substring(0, cursorPos) + symbol + currentValue.substring(cursorPos);
  nameInput.selectionStart = nameInput.selectionEnd = cursorPos + symbol.length;
  nameInput.focus();
  
  const inputEvent = new Event('input');
  nameInput.dispatchEvent(inputEvent);
  closeSymbolModal();
}

function copyText(text, buttonElement = null) {
  navigator.clipboard.writeText(text)
    .then(() => {
      if (buttonElement) {
        const originalText = buttonElement.innerHTML;
        const originalClass = buttonElement.className;
        
        buttonElement.innerHTML = '<i class="fas fa-check"></i> Copied!';
        buttonElement.classList.add('copied');
        
        setTimeout(() => {
          buttonElement.innerHTML = originalText;
          buttonElement.className = originalClass;
        }, 1500);
      } else {
        showToast('Text copied to clipboard!');
      }
    })
    .catch(err => {
      console.error('Failed to copy: ', err);
      showToast('Failed to copy text. Please try again.');
    });
}

function showToast(message) {
  const existingToast = document.querySelector('.toast-message');
  if (existingToast) {
    existingToast.remove();
  }
  
  const toast = document.createElement('div');
  toast.className = 'toast-message';
  toast.textContent = message;
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.style.animation = 'slideOut 0.3s ease';
    setTimeout(() => {
      if (toast.parentNode) {
        document.body.removeChild(toast);
      }
    }, 300);
  }, 3000);
}

function openSymbolModal() {
  const modal = document.getElementById('symbolModal');
  if (modal) {
    modal.classList.add('show');
    loadModalTabs();
  }
}

function closeSymbolModal() {
  const modal = document.getElementById('symbolModal');
  if (modal) {
    modal.classList.remove('show');
  }
}

// ==================== INITIALIZATION ====================

document.addEventListener('DOMContentLoaded', function() {
  // Auto-generate when typing
  const nameInput = document.getElementById('nameInput');
  if (nameInput) {
    nameInput.addEventListener('input', function() {
      clearTimeout(nameInputTimer);
      nameInputTimer = setTimeout(() => {
        if (this.value.trim().length > 0) {
          generateStyles();
        }
      }, 500);
    });
  }
  
  // Scroll to top button
  const scrollBtn = document.getElementById('scrollToTop');
  if (scrollBtn) {
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        scrollBtn.classList.add('visible');
      } else {
        scrollBtn.classList.remove('visible');
      }
    });
    
    scrollBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
  
  // Close modal when clicking outside
  const modal = document.getElementById('symbolModal');
  if (modal) {
    modal.addEventListener('click', function(e) {
      if (e.target === this) {
        closeSymbolModal();
      }
    });
  }
  
  // ============ INITIAL STYLES ADD KARO ============
  
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
  
  // Initial load for default category
  generateStyles();
});

// Clear input function
function clearInput() {
  const nameInput = document.getElementById('nameInput');
  if (nameInput) {
    nameInput.value = '';
    nameInput.focus();
    
    // Clear results
    const result = document.getElementById('result');
    if (result) {
      result.innerHTML = `
        <p class="info-text">
          Enter a name and choose a category to generate stylish names.
        </p>
      `;
    }
    
    showToast('Input cleared!');
  }
}
