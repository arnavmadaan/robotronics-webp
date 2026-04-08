// ============================
// ROBOTRONICS — compare.js
// Parts comparison with visual spec bars
// ============================

let specsData = null;
let productsData = null;

const container = document.getElementById("compare-container");
const categorySelect = document.getElementById("category-select");

async function loadData() {
  const [specs, products] = await Promise.all([
    fetch("./DATA/specs.json").then(r => r.json()),
    fetch("./DATA/products.json").then(r => r.json())
  ]);
  specsData = specs;
  productsData = products;
}

loadData();

categorySelect.addEventListener("change", () => {
  const cat = categorySelect.value;
  if (!cat || !specsData) {
    container.innerHTML = "";
    return;
  }
  renderCategory(cat);
});

function getBarClass(pct) {
  if (pct >= 70) return "high";
  if (pct >= 35) return "medium";
  return "low";
}

const specLabels = {
  rpm: "RPM",
  voltage: "Voltage",
  torque: "Torque",
  weight: "Weight",
  current: "Current",
  clock_speed: "Clock Speed",
  flash: "Flash",
  ram: "RAM",
  gpio: "GPIO Pins",
  channels: "Channels",
  current_per_ch: "Current/Ch",
  voltage_range: "Max Voltage",
  efficiency: "Efficiency",
  microstepping: "Microstep",
  range: "Range",
  response_time: "Response",
  output_type: "Output",
  wavelength: "Wavelength",
  force: "Force",
  stroke: "Stroke",
  speed: "Speed",
  resolution: "Resolution",
  accuracy: "Accuracy",
  update_rate: "Update Rate",
  interface: "Interface"
};

function renderCategory(category) {
  const items = specsData[category];
  if (!items || items.length === 0) {
    container.innerHTML = '<div class="feature-empty"><div class="empty-icon">📦</div><p>No items in this category yet.</p></div>';
    return;
  }

  container.innerHTML = "";

  items.forEach((item, idx) => {
    const product = productsData.find(p => p.id === item.product_id);
    const card = document.createElement("div");
    card.className = "compare-card";
    card.style.animationDelay = `${idx * 0.05}s`;
    card.style.animation = "fadeInUp 0.4s ease forwards";
    card.style.opacity = "0";

    let specsHTML = "";
    for (const [key, spec] of Object.entries(item.specs)) {
      const pct = Math.min((spec.value / spec.max) * 100, 100);
      const barClass = getBarClass(pct);
      const label = specLabels[key] || key;
      const displayValue = `${spec.value} ${spec.unit}`;

      if (pct > 25) {
        specsHTML += `
          <div class="spec-row">
            <span class="spec-label">${label}</span>
            <div class="spec-bar-container">
              <div class="spec-bar ${barClass}" style="width: ${pct}%">
                <span class="spec-value">${displayValue}</span>
              </div>
            </div>
          </div>`;
      } else {
        specsHTML += `
          <div class="spec-row">
            <span class="spec-label">${label}</span>
            <div class="spec-bar-container">
              <div class="spec-bar ${barClass}" style="width: ${Math.max(pct, 3)}%"></div>
            </div>
            <span class="spec-value-outside">${displayValue}</span>
          </div>`;
      }
    }

    card.innerHTML = `
      <div class="compare-card-header">
        <h3>${item.name}</h3>
        <p>${product ? product.description : ''}</p>
      </div>
      ${specsHTML}
    `;

    card.style.cursor = "pointer";
    card.addEventListener("click", () => {
      if (product) window.location.href = `product.html?id=${product.id}`;
    });

    container.appendChild(card);
  });
}
