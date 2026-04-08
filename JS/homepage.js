const GEMINI_API_KEY = "AIzaSyBzzBHfkF0zMUD8leIiLg-xgAxE7GcZSPA";



const robots = [
  {
    name: "Robotic Arm",
    art: [
      "                                                               @@@@                               ",
      "                                                              @@   @@@@@                          ",
      "                                                             @@         @@@                       ",
      "                                                             @   @@@@@@@@@@                       ",
      "                                                            @    @@                               ",
      "                                                           @@@@@@@@                               ",
      "                                                       @@@@@     @@                               ",
      "                                                       @          @                               ",
      "                                                   @@@@@@         @@         @@                   ",
      "                                             @@@@@@     @@         @@      @@@@@                  ",
      "                                        @@@@@            @@         @@@   @@ @@                   ",
      "                                  @@@@@                  @@     @@@@   @@@  @@                    ",
      "                      @@@@ @@@@@@                    @@@@ @@@@@@@@@        @@                     ",
      "                    @@         @@                @@@@              @@@    @@                      ",
      "                   @     @@     @@          @@@@                       @@@@                       ",
      "                  @@    @@ @@    @      @@@@                                                       ",
      "                  @@   @@   @    @@@@@@@                                                          ",
      "                  @@    @@@@@    @@@                                                              ",
      "                   @@           @@                                                               ",
      "                     @@       @@ @@                                                              ",
      "                        @@@@@      @                                                             ",
      "                           @        @@                                                           ",
      "                            @        @@                                                          ",
      "                            @@        @@@                                                        ",
      "                             @@        @@                                                        ",
      "                              @@         @@                                                      ",
      "                               @@         @@                                                     ",
      "                                @          @@                                                    ",
      "                                @@           @@                                                  ",
      "                                 @@          @@@                                                 ",
      "                                  @@    @@@@     @@@@                                            ",
      "                                   @@@@@            @@                                           ",
      "                                    @@@               @@                                         ",
      "                                    @@      @@@@       @                                         ",
      "                                    @      @    @@     @@                                        ",
      "                                    @     @@     @     @@                                        ",
      "                                    @      @@  @@      @@                                        ",
      "                                    @@                @@                                          ",
      "                                    @@@@             @@@                                          ",
      "                                    @  @@@         @@@ @                                          ",
      "                                   @@    @@@@@@@@@@     @                                         ",
      "                                   @                    @@                                        ",
      "                                  @@                     @                                        ",
      "                           @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                 ",
      "                          @@                                     @                                ",
      "                          @                                      @                                ",
      "                          @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                ",
      "                                                                                                 ",
      "                                                                                                 "
    ]
  },
  {
    name: "Rover",
    art: [
      "                                                                             @@@@@@@@@@@          ",
      "                                                                         @@@@@@@@@@@@@@@@@        ",
      "                                              @@@@@@                   @@@@@@@@@@@@@@@@@@@        ",
      "                                            @@@@@@@@@@                @@@@@@@                     ",
      "                                            @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                       ",
      "                                            @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                       ",
      "                                            @@@@@@@@@@                @@@@@@@                     ",
      "          @@@@@                               @@@@@@                   @@@@@@@@@@@@@@@@@@         ",
      "         @@@@@@@        @@@                   @@@@@@                     @@@@@@@@@@@@@@@@@        ",
      "         @@@@@@@@@     @@@@@                  @@@@@@                         @@@@@@@@@@@          ",
      "        @@@@@@@@@@@@@@@@@@@@                  @@@@@@                                               ",
      "        @@@@@@ @@@@@@@@@@@                    @@@@@@                                               ",
      "        @@@@@@   @@@@@@@@                     @@@@@@                                               ",
      "         @@@@@    @@@@@@@@                    @@@@@@                                               ",
      "          @@@@@@    @@@@@@@@                  @@@@@@                                               ",
      "           @@@@@@@    @@@@@@@@         @@@@@@@@@@@@@@@@@@@@                                        ",
      "            @@@@@@@@@@@@@@@@@@@       @@@@@@@@@@@@@@@@@@@@@@                                      ",
      "              @@@@@@@@@@@@@@@@@       @@@@@@          @@@@@@@                                     ",
      "              @@@@@@@@@@@@@@          @@@@@            @@@@@@                                     ",
      "              @@@@@                   @@@@@            @@@@@@                                     ",
      "              @@@@@                   @@@@@            @@@@@@                                     ",
      "              @@@@@                   @@@@@            @@@@@@                                     ",
      "              @@@@@                   @@@@@            @@@@@@                                     ",
      "              @@@@@                   @@@@@            @@@@@                                     ",
      "           @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@           ",
      "        @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@        ",
      "      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@      ",
      "      @@@@@@                                                                          @@@@@@@     ",
      "     @@@@@                                                                              @@@@@     ",
      "     @@@@@                                                                              @@@@@     ",
      "     @@@@@                                                                              @@@@@     ",
      "     @@@@@                                                                              @@@@@     ",
      "     @@@@@         @@@@@@@                    @@@@@@                    @@@@@@@         @@@@@     ",
      "     @@@@@      @@@@@@@@@@@@@             @@@@@@@@@@@@@@             @@@@@@@@@@@@@      @@@@@     ",
      "     @@@@@    @@@@@@@@@@@@@@@@@         @@@@@@@@@@@@@@@@@@         @@@@@@@@@@@@@@@@@    @@@@@     ",
      "     @@@@@  @@@@@@@       @@@@@@@      @@@@@@@      @@@@@@@      @@@@@@@       @@@@@@@  @@@@@     ",
      "     @@@@@@@@@@@@           @@@@@@    @@@@@@          @@@@@@     @@@@@           @@@@@@@@@@@@     ",
      "      @@@@@@@@@@@            @@@@@@@@@@@@@@            @@@@@@@@@@@@@@             @@@@@@@@@@      ",
      "        @@@@@@@@             @@@@@@@@@@@@@@            @@@@@@@@@@@@@@             @@@@@@@@        ",
      "          @@@@@@@            @@@@@@@@@@@@@@            @@@@@@@@@@@@@@            @@@@@@@          ",
      "            @@@@@@         @@@@@@     @@@@@@          @@@@@@     @@@@@@         @@@@@@            ",
      "             @@@@@@@     @@@@@@@@      @@@@@@@@    @@@@@@@@       @@@@@@@     @@@@@@@@            ",
      "              @@@@@@@@@@@@@@@@@          @@@@@@@@@@@@@@@@@         @@@@@@@@@@@@@@@@@              ",
      "                @@@@@@@@@@@@@              @@@@@@@@@@@@@             @@@@@@@@@@@@@                ",
      "                    @@@@@                      @@@@                      @@@@@                    ",
      "                                                                                                 ",
      "                                                                                                 ",
      "                                                                                                 ",
      "                                                                                                 "
    ]
  },
  {
    name: "Drone",
    art: [
      "                     @@                                                    @@                     ",
      " @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                          @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ ",
      "                    @@@                                                    @@@                    ",
      "                   @@@@@@                                                @@@@@@                   ",
      "                  @@@@@@@                                                @@@@@@@                  ",
      "                 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                 ",
      "                          @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                          ",
      "                  @@          @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@          @@                  ",
      "          @@@@@   @@@   @@        @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@        @@    @@   @@@@@          ",
      "                 @@@@@     @@@@@@@   @@@@@@@@@@@@@@@@@@@@@@@@   @@@@@@@      @@@@                 ",
      "                 @@@@@@@@@@@@@@@@@@  @@@@@@@@@@@@@@@@@@@@@@@@  @@@@@@@@@@@@@@@@@@                 ",
      "                @@@@@@            @ @@@@@@@@@@@@@@@@@@@@@@@@@@ @            @@@@@@                ",
      "                                   @@@@  @@@@@@@@@@@@@@@@  @@@@                                   ",
      "                                   @@@     @@@@@@@@@@@@      @@                                   ",
      "                                  @@      @@@@@@@@@@@@@@      @@                                  ",
      "                                 @@ @          @@@             @@                                 ",
      "                                @@ @            @@            @ @@                                ",
      "                                @  @        @@@@@@@           @  @                                ",
      "                                @  @   @@ @@@@@@@@@@@@@@         @                                ",
      "                               @@ @    @@@@@@@@    @@@@@       @ @                                ",
      "                               @  @    @@@@@@@@@   @@@@@       @ @@                               ",
      "                               @  @         @@@@@@@@@          @  @                               ",
      "                               @  @                            @  @                               ",
      "                               @@@@                            @@@@                               ",
      "                              @@                                  @                               "
    ]
  },
  {
    name: "AUV",
    art: [
      "                                    @@@@@@                  @@@@@@@                               ",
      "                                  @@      @@@@@@@@@@@@@@@@@@       @@                             ",
      "                                 @@        @@             @         @                             ",
      "                                 @@         @             @         @@                            ",
      "                                 @@        @@             @@       @@                             ",
      "                                 @@@@@@@@@@@  @@@@@@@@@@@  @@@@ @@@@ @@                           ",
      "                                @@      @@                    @@@      @@                         ",
      "                                @       @                       @@       @@@                      ",
      "                               @@      @@                         @@@      @@@                    ",
      "                               @       @                            @@@      @@@                  ",
      "                              @@      @@                               @@       @@                ",
      "                              @      @@                                  @@    @@@@@@@@           ",
      "                             @@      @                                     @@@@        @@@        ",
      "                            @@      @@                                    @@      @@     @@       ",
      "                            @       @                                    @@   @@@   @@@   @@      ",
      "                           @@      @@                                    @   @@       @@   @@     ",
      "                          @@       @                                    @@   @@        @   @@     ",
      "              @@@@@@@@@@@@@@      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@      @   @@        @@@@@@     ",
      "            @@           @@      @@                                @@    @@   @@                  ",
      "            @            @       @@                                 @@    @@@@                    ",
      "           @@           @@@@    @@             @@@@@@@@@@@@@@@@@     @@    @@                     ",
      "           @@        @@@@   @@@@@             @                @@     @@                          ",
      "           @@      @@@          @@@           @                @@      @@                         ",
      "         @@@      @@              @@          @                @@       @@                        ",
      "       @@@        @                @          @@@@@@@@@@@@@@@@@@         @@                       ",
      "     @@@         @@@@@@@@@@@@@@@@@@@                                      @@                      ",
      "      @@@                                                                  @@                     ",
      "         @@                                  @@@@@@@@@@@@@@@@@@@@@@@        @@                    ",
      "           @@                                                                @@                   ",
      "           @@                                                                 @                   ",
      "           @@                         @@@@@@@@@@@@@@@@@@@@@@@                  @@                 ",
      "           @@                                                                   @                 ",
      "            @@                                                                 @@                 ",
      "             @@@@@@@@@@@@  @@@@   @@@@  @@@@     @@@   @@@@   @@@   @@@@@@@@@@@@                  ",
      "                         @@    @@     @@    @@@@@   @@@     @@   @@@                              ",
      "                        @@    @@      @     @  @@    @@     @@     @                              ",
      "                        @     @      @     @@   @@    @@     @@    @@                             ",
      "                       @@    @@     @@    @@     @@    @@     @@    @@                            ",
      "                      @@    @@     @@    @@       @     @      @@    @                            ",
      "                     @@    @@     @@    @@        @@    @@      @    @@                           ",
      "                     @    @@      @     @          @@    @@     @@    @@                          ",
      "                    @@    @      @@    @@           @@    @@     @@    @@                         ",
      "                   @@@@@@@@     @@@@@@@@             @@@@@@@@     @@@@@@@@                        ",
      "                                                                                                 ",
      "                                                                                                 ",
      "                                                                                                 ",
      "                                                                                                 "
    ]
  }
];

let currentRobotIndex = 0;
let isAnimating = false;

function padLines(lines, targetLength) {
  const maxLen = Math.max(...lines.map(l => l.length), targetLength);
  return lines.map(l => l.padEnd(maxLen, ' '));
}

function normalizeRobots() {
  const maxLines = Math.max(...robots.map(r => r.art.length));
  const maxWidth = Math.max(...robots.flatMap(r => r.art.map(l => l.length)));

  robots.forEach(r => {
    while (r.art.length < maxLines) {
      r.art.push('');
    }
    r.art = padLines(r.art, maxWidth);
  });
}

normalizeRobots();

const asciiEl = document.getElementById("ascii-art");

function displayRobot(index) {
  asciiEl.textContent = robots[index].art.join('\n');
}

// Morph animation: progressively reveal next robot char by char
function morphTo(nextIndex, callback) {
  if (isAnimating) return;
  isAnimating = true;

  const current = robots[currentRobotIndex].art;
  const next = robots[nextIndex].art;
  const rows = current.length;
  const cols = current[0].length;
  const totalCells = rows * cols;

  const grid = current.map(row => row.split(''));
  const targetGrid = next.map(row => row.split(''));

  const indices = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      indices.push([r, c]);
    }
  }
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }

  const glitchChars = '░▒▓█▀▄─│┌┐└┘├┤┬┴┼╳○●';
  const stepsPerFrame = Math.ceil(totalCells / 18);
  let step = 0;

  function frame() {
    const end = Math.min(step + stepsPerFrame, totalCells);
    for (let i = step; i < end; i++) {
      const [r, c] = indices[i];
      if (targetGrid[r][c] === ' ' && grid[r][c] === ' ') {
        grid[r][c] = ' ';
      } else {
        grid[r][c] = glitchChars[Math.floor(Math.random() * glitchChars.length)];
      }
    }
    asciiEl.textContent = grid.map(row => row.join('')).join('\n');
    step = end;

    if (step < totalCells) {
      requestAnimationFrame(frame);
    } else {
      let resolveStep = 0;
      function resolveFrame() {
        const rEnd = Math.min(resolveStep + stepsPerFrame * 2, totalCells);
        for (let i = resolveStep; i < rEnd; i++) {
          const [r, c] = indices[i];
          grid[r][c] = targetGrid[r][c];
        }
        asciiEl.textContent = grid.map(row => row.join('')).join('\n');
        resolveStep = rEnd;

        if (resolveStep < totalCells) {
          requestAnimationFrame(resolveFrame);
        } else {
          currentRobotIndex = nextIndex;
          isAnimating = false;
          if (callback) callback();
        }
      }
      requestAnimationFrame(resolveFrame);
    }
  }

  requestAnimationFrame(frame);
}

// Initial display
displayRobot(0);

// Cycle every 5 seconds
setInterval(() => {
  const nextIndex = (currentRobotIndex + 1) % robots.length;
  morphTo(nextIndex);
}, 5000);


// ---------- CHATBOX PLACEHOLDER ANIMATION ----------

const placeholders = [
  "How can I help you?",
  "I can help you find components...",
  "Compare prices across sellers...",
  "Search for robotics parts...",
  "Build your next project..."
];

const chatInput = document.getElementById("chat-input");
const chatSend = document.getElementById("chat-send");
const chatMessages = document.getElementById("chat-messages");

let placeholderIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingTimeout = null;
let userFocused = false;

function typePlaceholder() {
  if (userFocused) {
    typingTimeout = setTimeout(typePlaceholder, 500);
    return;
  }

  const currentText = placeholders[placeholderIndex];

  if (!isDeleting) {
    chatInput.placeholder = currentText.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentText.length) {
      isDeleting = true;
      typingTimeout = setTimeout(typePlaceholder, 2000);
      return;
    }
    typingTimeout = setTimeout(typePlaceholder, 65);
  } else {
    chatInput.placeholder = currentText.substring(0, charIndex);
    charIndex--;

    if (charIndex < 0) {
      isDeleting = false;
      charIndex = 0;
      placeholderIndex = (placeholderIndex + 1) % placeholders.length;
      typingTimeout = setTimeout(typePlaceholder, 400);
      return;
    }
    typingTimeout = setTimeout(typePlaceholder, 35);
  }
}

typePlaceholder();

chatInput.addEventListener("focus", () => { userFocused = true; });
chatInput.addEventListener("blur", () => {
  if (!chatInput.value) {
    userFocused = false;
  }
});


// ---------- CHAT OVERLAY SYSTEM ----------

const overlayBackdrop = document.getElementById("chat-overlay-backdrop");
const overlay = document.getElementById("chat-overlay");
const overlayInput = document.getElementById("chat-overlay-input");
const overlaySend = document.getElementById("chat-overlay-send");
const overlayClose = document.getElementById("chat-overlay-close");

let overlayOpen = false;

function openChatOverlay() {
  if (overlayOpen) return;
  overlayOpen = true;
  overlayBackdrop.classList.add("active");
  overlay.classList.add("active");
  // Transfer text from bottom bar to overlay
  if (chatInput.value.trim()) {
    overlayInput.value = chatInput.value.trim();
    chatInput.value = "";
  }
  setTimeout(() => overlayInput.focus(), 300);
}

function closeChatOverlay() {
  if (!overlayOpen) return;
  overlayOpen = false;
  overlay.classList.add("closing");
  overlayBackdrop.classList.add("closing");

  setTimeout(() => {
    overlay.classList.remove("active", "closing");
    overlayBackdrop.classList.remove("active", "closing");
  }, 350);
}

// Open overlay on typing in bottom bar
chatInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && chatInput.value.trim()) {
    e.preventDefault();
    openChatOverlay();
    setTimeout(() => sendOverlayMessage(), 350);
  }
});

chatInput.addEventListener("input", () => {
  if (chatInput.value.trim().length > 0) {
    openChatOverlay();
  }
});

chatSend.addEventListener("click", () => {
  if (chatInput.value.trim()) {
    openChatOverlay();
    setTimeout(() => sendOverlayMessage(), 350);
  } else {
    openChatOverlay();
  }
});

// Close on backdrop click
overlayBackdrop.addEventListener("click", closeChatOverlay);
overlayClose.addEventListener("click", closeChatOverlay);

// Escape to close
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && overlayOpen) closeChatOverlay();
});

// Overlay send
overlaySend.addEventListener("click", sendOverlayMessage);
overlayInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") sendOverlayMessage();
});


// ---------- GEMINI API INTEGRATION ----------

let backendData = null;
let conversationHistory = [];

// Load all backend data for the system prompt
async function loadBackendData() {
  try {
    const [products, categories, prices, specs] = await Promise.all([
      fetch("../DATA/products.json").then(r => r.json()),
      fetch("../DATA/categories.json").then(r => r.json()),
      fetch("../DATA/prices.json").then(r => r.json()),
      fetch("../DATA/specs.json").then(r => r.json())
    ]);
    backendData = { products, categories, prices, specs };
  } catch (e) {
    console.error("Failed to load backend data:", e);
  }
}

loadBackendData();

function buildSystemPrompt() {
  if (!backendData) return "You are a helpful robotics assistant for ROBOTRONICS.";

  const productList = backendData.products.map(p =>
    `• ID:${p.id} "${p.name}" [${p.category}/${p.subcategory}] — ${p.description}`
  ).join("\n");

  const categoryList = backendData.categories.map(c =>
    `• "${c.name}" (id: ${c.id}) — ${c.description}. Parts: [${c.recommended_parts.join(", ")}]`
  ).join("\n");

  const priceInfo = {};
  backendData.prices.forEach(p => {
    const key = p.product_id;
    if (!priceInfo[key]) priceInfo[key] = [];
    const latest = p.prices[p.prices.length - 1];
    priceInfo[key].push(`${p.seller}: ₹${latest.price}`);
  });
  const priceList = Object.entries(priceInfo).map(([id, sellers]) => {
    const prod = backendData.products.find(p => p.id === parseInt(id));
    return `• ${prod ? prod.name : 'ID:' + id}: ${sellers.join(", ")}`;
  }).join("\n");

  const specCategories = Object.keys(backendData.specs).map(cat => {
    const items = backendData.specs[cat];
    const itemList = items.map(item => {
      const specEntries = Object.entries(item.specs).map(([k, v]) => `${k}: ${v.value}${v.unit}`).join(", ");
      return `  - ${item.name}: ${specEntries}`;
    }).join("\n");
    return `${cat}:\n${itemList}`;
  }).join("\n\n");

  return `You are the ROBOTRONICS AI Assistant — a knowledgeable robotics parts advisor embedded in the ROBOTRONICS website.

## About ROBOTRONICS
ROBOTRONICS is a robotics parts comparison and shopping platform. Users can:
- Browse parts by category (Just Browsing button → category.html)
- Explore Project Categories like Line Follower, Drone, Rover, etc. (Project Categories button → category.html?browse=categories)
- Compare prices from Indian sellers (Analyse & Compare button → product.html?id=X)
- Compare specs of parts side-by-side (Compare Parts → compare.html)
- Save parts to Wishlist (wishlist.html)
- Use Build Calculator to estimate costs (calculator.html)
- See Community Builds for project inspiration (builds.html)
- Add parts to cart and checkout

## Navigation Guide
- Home: index.html
- Project Categories: category.html?browse=categories
- Just Browsing (all parts): category.html
- Specific category: category.html?id=CATEGORY_ID
- Product details: product.html?id=PRODUCT_ID
- Compare Parts: compare.html
- Cart: cart.html
- Checkout: checkout.html
- Wishlist: wishlist.html
- Build Calculator: calculator.html
- Community Builds: builds.html

## Product Catalog (${backendData.products.length} products)
${productList}

## Project Categories (${backendData.categories.length} projects)
${categoryList}

## Latest Prices (from Indian sellers)
${priceList}

## Technical Specifications
${specCategories}

## Rules
- Be concise and helpful
- Use ₹ for prices (Indian Rupees)
- When recommending parts, mention exact product names
- Guide users on HOW to navigate (which button to click, which page to visit)
- If asked about a project, list the recommended parts with prices
- Format responses with markdown: **bold**, bullet points, etc.
- Stay friendly and knowledgeable about robotics`;
}

async function callGeminiAPI(userMessage) {
  if (GEMINI_API_KEY === "YOUR_API_KEY_HERE" || !GEMINI_API_KEY) {
    return getFallbackResponse(userMessage);
  }

  conversationHistory.push({ role: "user", parts: [{ text: userMessage }] });

  const systemInstruction = { parts: [{ text: buildSystemPrompt() }] };

  const body = {
    system_instruction: systemInstruction,
    contents: conversationHistory,
    generationConfig: {
      temperature: 0.7,
      maxOutputTokens: 1024,
    }
  };

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      }
    );

    if (!response.ok) {
      const err = await response.text();
      console.error("Gemini API error:", err);
      return "⚠️ API error. Please check your API key and try again.";
    }

    const data = await response.json();
    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || "I couldn't generate a response.";

    conversationHistory.push({ role: "model", parts: [{ text: reply }] });
    return reply;
  } catch (e) {
    console.error("Gemini fetch error:", e);
    return "⚠️ Network error. Please check your connection.";
  }
}

function getFallbackResponse(userMessage) {
  const msg = userMessage.toLowerCase();

  if (msg.includes("project") || msg.includes("categories") || msg.includes("category")) {
    const cats = backendData ? backendData.categories.map(c => `• **${c.name}** — ${c.description}`).join("\n") : "";
    return `Here are the project categories available on ROBOTRONICS:\n\n${cats}\n\nClick **Project Categories** on the homepage or navigate via the sidebar to explore them!`;
  }
  if (msg.includes("compare") || msg.includes("spec")) {
    return `You can compare parts using the **Compare Parts** feature!\n\nClick the ⚡ **Compare Parts** button on the homepage or find it in the sidebar menu. It lets you compare specs of motors, boards, drivers, sensors, and more with visual bar graphs.`;
  }
  if (msg.includes("motor")) {
    const motors = backendData ? backendData.products.filter(p => p.subcategory === "Motors").map(m => `• **${m.name}** — ${m.description}`).join("\n") : "";
    return `We have the following motors:\n\n${motors}\n\nUse **Compare Parts** to see detailed specs side-by-side!`;
  }
  if (msg.includes("board") || msg.includes("arduino") || msg.includes("esp32") || msg.includes("raspberry")) {
    const boards = backendData ? backendData.products.filter(p => p.subcategory === "Boards").map(b => `• **${b.name}** — ${b.description}`).join("\n") : "";
    return `Available controller boards:\n\n${boards}\n\nVisit any product page for price comparison across sellers.`;
  }
  if (msg.includes("cart") || msg.includes("buy") || msg.includes("checkout")) {
    return `To buy parts:\n1. Browse or search for a part\n2. On the product page, select a seller\n3. Click **Add to Cart**\n4. Click 🛒 to view your cart\n5. Click **Proceed to Checkout** to complete your order`;
  }
  if (msg.includes("price") || msg.includes("cheap") || msg.includes("cost")) {
    return `Every product on ROBOTRONICS shows prices from multiple Indian sellers (Robocraze, ThinkRobotics, RoboElements, Quartzcomponents).\n\nThe cheapest option is highlighted in **green**. You can also see price history on each product page!`;
  }
  if (msg.includes("hello") || msg.includes("hi") || msg.includes("hey")) {
    return `Hello! 👋 I'm the ROBOTRONICS AI Assistant.\n\nI can help you:\n• Find robotics parts\n• Compare prices and specs\n• Navigate the website\n• Suggest parts for your project\n\nWhat are you looking for?`;
  }

  return `I can help you with:\n• **Finding parts** — motors, boards, sensors, drivers\n• **Project suggestions** — line follower, drone, rover, etc.\n• **Price comparison** — across Indian sellers\n• **Website navigation** — how to use features\n\n💡 *Set your Gemini API key in homepage.js for full AI-powered responses!*`;
}

// Simple markdown rendering
function renderMarkdown(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/`(.*?)`/g, '<code>$1</code>')
    .replace(/^• (.+)$/gm, '<div class="md-bullet">• $1</div>')
    .replace(/^(\d+)\. (.+)$/gm, '<div class="md-bullet">$1. $2</div>')
    .replace(/\n/g, '<br>');
}

async function sendOverlayMessage() {
  const text = overlayInput.value.trim();
  if (!text) return;

  // User message
  const userMsg = document.createElement("div");
  userMsg.className = "chat-msg user";
  userMsg.textContent = text;
  chatMessages.appendChild(userMsg);
  overlayInput.value = "";
  chatMessages.scrollTop = chatMessages.scrollHeight;

  // Typing indicator
  const typingMsg = document.createElement("div");
  typingMsg.className = "chat-msg bot typing-indicator";
  typingMsg.innerHTML = '<span class="dot"></span><span class="dot"></span><span class="dot"></span>';
  chatMessages.appendChild(typingMsg);
  chatMessages.scrollTop = chatMessages.scrollHeight;

  // Get response
  const reply = await callGeminiAPI(text);

  // Remove typing indicator and show response
  typingMsg.remove();
  const botMsg = document.createElement("div");
  botMsg.className = "chat-msg bot";
  botMsg.innerHTML = renderMarkdown(reply);
  chatMessages.appendChild(botMsg);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}


// ---------- SIDEBAR TOGGLE ----------

function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("open");
  document.getElementById("sidebar-overlay").classList.toggle("active");
}
