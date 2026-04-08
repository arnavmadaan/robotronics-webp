// ============================
// ROBOTRONICS — builds.js
// Community builds showcase
// ============================

const builds = [
  {
    title: "PID Line Follower — Speed Demon",
    difficulty: "intermediate",
    description: "Competition-grade line follower achieving 2m/s on tight tracks. Uses 5-channel IR array with PID tuning via Bluetooth.",
    parts: ["Arduino Nano V3", "TCRT5000 5-Ch Array", "TT Gear Motor ×2", "TB6612FNG", "HC-05 Bluetooth"],
    cost: "₹1,200",
    author: "Arjun K.",
    likes: 142
  },
  {
    title: "Desktop Robotic Arm — PickBot",
    difficulty: "advanced",
    description: "5-DOF desktop arm controlled via Python GUI. Inverse kinematics for precise pick-and-place, 500g payload.",
    parts: ["Arduino UNO R3", "MG996R Servo ×5", "PCA9685 Driver", "3D Printed Links", "Servo Gripper Claw"],
    cost: "₹3,800",
    author: "Priya M.",
    likes: 238
  },
  {
    title: "WiFi Rover — ExploreBot",
    difficulty: "beginner",
    description: "ESP32-powered 4WD rover with live camera feed. Control from any browser on the same WiFi network.",
    parts: ["ESP32 DevKit", "Johnson DC Motor ×4", "L298N Driver", "4WD Chassis Kit", "LiPo 3S Battery"],
    cost: "₹2,950",
    author: "Rohan S.",
    likes: 186
  },
  {
    title: "Autonomous Maze Solver",
    difficulty: "intermediate",
    description: "Self-navigating robot that maps and solves mazes using flood fill algorithm. Wall detection via ultrasonic + IR.",
    parts: ["Arduino Nano V3", "HC-SR04 ×3", "FC-51 Sensor ×2", "N20 Gear Motor ×2", "DRV8825 Driver"],
    cost: "₹1,800",
    author: "Sneha R.",
    likes: 97
  },
  {
    title: "FPV Racing Drone — Blitz250",
    difficulty: "advanced",
    description: "250mm racing quadcopter with 4S power, capable of 120km/h. Betaflight tuned for freestyle and racing.",
    parts: ["SpeedyBee F405 FC", "A2212 1000KV ×4", "SimonK 30A ESC ×4", "1045 Props", "Tattu 3S LiPo"],
    cost: "₹8,500",
    author: "Vikram T.",
    likes: 312
  },
  {
    title: "Smart Plant Monitor",
    difficulty: "beginner",
    description: "IoT plant monitoring system with soil moisture, temperature, and light sensors. Sends alerts via Telegram bot.",
    parts: ["ESP32 DevKit", "BMP280 Sensor", "LM2596 Buck Converter", "Micro Relay Module", "TP4056 Charger"],
    cost: "₹680",
    author: "Ananya P.",
    likes: 165
  },
  {
    title: "LiDAR Mapping Robot",
    difficulty: "advanced",
    description: "ROS-based robot with RPLiDAR A1 for real-time SLAM mapping. Builds 2D occupancy grid of indoor environments.",
    parts: ["Jetson Nano 4GB", "RPLiDAR A1M8", "25GA-370 Motor ×2", "Cytron MDD10A", "MPU-6050 IMU"],
    cost: "₹22,400",
    author: "Dev K.",
    likes: 267
  },
  {
    title: "Swarm Micro-Bots — HiveMind",
    difficulty: "advanced",
    description: "3 tiny communicating robots with flocking and formation behaviors. Coordinate via nRF24L01+ radio at 2Mbps.",
    parts: ["Raspberry Pi Pico W ×3", "N20 Gear Motor ×6", "TB6612FNG ×3", "nRF24L01+ ×3", "18650 Battery ×3"],
    cost: "₹5,600",
    author: "Karthik V.",
    likes: 189
  },
  {
    title: "Gesture-Controlled Car",
    difficulty: "beginner",
    description: "Control a robot car with hand gestures using MPU-6050 accelerometer mounted on a glove. Fun weekend project!",
    parts: ["Arduino Nano V3 ×2", "MPU-6050 IMU", "nRF24L01+", "TT Gear Motor ×2", "L293D Shield"],
    cost: "₹1,100",
    author: "Ishaan D.",
    likes: 224
  }
];

const container = document.getElementById("builds-container");

builds.forEach((build, idx) => {
  const card = document.createElement("div");
  card.className = "build-card";
  card.style.animation = `fadeInUp 0.4s ease ${idx * 0.06}s forwards`;
  card.style.opacity = "0";

  const partsHTML = build.parts.map(p => `<span>${p}</span>`).join("");

  card.innerHTML = `
    <span class="build-tag ${build.difficulty}">${build.difficulty.toUpperCase()}</span>
    <h3>${build.title}</h3>
    <p class="build-desc">${build.description}</p>
    <div class="build-parts">${partsHTML}</div>
    <div class="build-meta">
      <span>by ${build.author} • ❤️ ${build.likes}</span>
      <span class="build-cost">${build.cost}</span>
    </div>
  `;

  container.appendChild(card);
});
