const particlesLayer = document.getElementById("particlesLayer");
const flowersLayer = document.getElementById("flowersLayer");
const touchLight = document.getElementById("touchLight");

const menuPanel = document.getElementById("menuPanel");
const worldScreen = document.getElementById("worldScreen");
const lettersScreen = document.getElementById("lettersScreen");
const memoriesScreen = document.getElementById("memoriesScreen");
const playlistScreen = document.getElementById("playlistScreen");

const enterBtn = document.getElementById("enterBtn");
const backBtn = document.getElementById("backBtn");
const lettersBackBtn = document.getElementById("lettersBackBtn");
const memoriesBackBtn = document.getElementById("memoriesBackBtn");
const playlistBackBtn = document.getElementById("playlistBackBtn");

const menuButtons = document.querySelectorAll(".menu-btn");
const worldCards = document.querySelectorAll(".world-card");

const typingText = document.getElementById("typingText");
const systemToast = document.getElementById("systemToast");
const toastText = document.getElementById("toastText");

const transitionScreen = document.getElementById("transitionScreen");
const transitionText = document.getElementById("transitionText");

const slashTransition = document.getElementById("slashTransition");
const slashText = document.getElementById("slashText");

const uiClock = document.getElementById("uiClock");

const soundToggle = document.getElementById("soundToggle");
const soundText = document.getElementById("soundText");
const bgMusic = document.getElementById("bgMusic");

const detailPanel = document.getElementById("detailPanel");
const detailClose = document.getElementById("detailClose");
const detailLabel = document.getElementById("detailLabel");
const detailTitle = document.getElementById("detailTitle");
const detailContent = document.getElementById("detailContent");

const surpriseCard = document.getElementById("surpriseCard");
const surpriseText = document.getElementById("surpriseText");

const lettersGrid = document.getElementById("lettersGrid");
const memoriesGardenGrid = document.getElementById("memoriesGardenGrid");

const trackList = document.getElementById("trackList");
const vinylDisc = document.getElementById("vinylDisc");
const nowPlayingTitle = document.getElementById("nowPlayingTitle");
const nowPlayingDesc = document.getElementById("nowPlayingDesc");

const prevTrackBtn = document.getElementById("prevTrackBtn");
const nextTrackBtn = document.getElementById("nextTrackBtn");
const modeToggleBtn = document.getElementById("modeToggleBtn");
const modeLabel = document.getElementById("modeLabel");
const modeHint = document.getElementById("modeHint");

let audioCtx;
let masterGain;
let sfxGain;
let soundEnabled = false;
let isMusicFading = false;
let currentTrackSrc = "audio/musica.mp3";
let currentTrackIndex = 0;
let playlistMode = "order";

const MUSIC_VOLUME = 0.45;
const visitedSections = new Set();

const flowerConfigs = [
  { left: "2%", bottom: "-10px", size: 150, rotate: -10, floatTime: 6.4 },
  { left: "12%", bottom: "8px", size: 110, rotate: 8, floatTime: 5.5 },
  { left: "22%", bottom: "-12px", size: 145, rotate: -6, floatTime: 6.8 },
  { left: "34%", bottom: "6px", size: 120, rotate: 10, floatTime: 5.8 },
  { left: "49%", bottom: "-16px", size: 160, rotate: -4, floatTime: 7.1 },
  { left: "62%", bottom: "3px", size: 122, rotate: 7, floatTime: 6.1 },
  { left: "74%", bottom: "-12px", size: 142, rotate: -8, floatTime: 6.7 },
  { left: "86%", bottom: "6px", size: 110, rotate: 9, floatTime: 5.6 },
  { left: "94%", bottom: "-8px", size: 138, rotate: -12, floatTime: 6.3 }
];

const sectionData = {
  motivos: {
    label: "motivos",
    title: "Motivos que amo você",
    html: `
      <div class="reason-grid">
        <div class="reason-card">
          <span>01</span>
          <p>Porque você deixa meus dias mais bonitos.</p>
        </div>

        <div class="reason-card">
          <span>02</span>
          <p>Porque seu jeito me faz sorrir sem perceber.</p>
        </div>

        <div class="reason-card">
          <span>03</span>
          <p>Porque até de longe você consegue ser presença.</p>
        </div>

        <div class="reason-card">
          <span>04</span>
          <p>Porque amar você parece uma parte boa da minha vida.</p>
        </div>
      </div>
    `
  },

  surpresa: {
    label: "surpresa final",
    title: "Só pra você, Milena",
    html: `
      <div class="final-message">
        <div class="heart">💙</div>
        <p>
          Milena, esse site é só um pedacinho do que eu queria te entregar.
          Fiz cada detalhe pensando em você: o azul, as flores, a música, as mensagens
          e esse mundinho nosso.
        </p>
        <br>
        <p>
          Eu te amo. E enquanto esse site existir, ele vai ser uma lembrança pequena,
          mas sincera, de que você é muito especial pra mim.
        </p>
      </div>
    `
  }
};

const lettersData = [
{
  number: "01",
  title: "Minha carta para você",
  preview: "um vídeo e uma carta feita com todo meu carinho",
  video: "videos/carta-milena.mov",
  text: `
Milena,

Entre tantas pessoas no mundo, foi em você que o meu coração encontrou um lugar verdadeiro para ficar.

Mesmo sendo mais velho, mesmo tendo vivido mais coisas, foi contigo que eu aprendi um jeito novo de amar. Um amor mais leve, mais sincero, mais cheio de cuidado. Um amor que não se mede por idade, mas pela intensidade do que a gente sente.

A distância entre nós, entre estados, entre cidades, nunca foi suficiente para diminuir o que existe aqui dentro. Pelo contrário, ela só me fez perceber o quanto você é importante pra mim. Porque mesmo longe, você está presente em tudo: nos meus pensamentos, nos meus dias, nas minhas vontades.

Tem dias em que a saudade aperta, em que eu queria só poder te abraçar, te olhar de perto, dividir o mesmo espaço. Mas ao mesmo tempo, essa distância também me faz sonhar ainda mais com o nosso futuro.

Um futuro onde não vamos mais precisar contar quilômetros, nem esperar mensagens para matar a saudade. Um futuro onde vamos acordar juntos, dividir a rotina, rir das coisas simples e construir, lado a lado, a nossa própria história.

Você se tornou alguém essencial pra mim. Não só pelo que você é, mas pelo que a gente é junto. Pelo cuidado, pelas conversas, pelos momentos que a gente cria mesmo estando longe.

E é por isso que, entre tantas possibilidades, eu escolho você todos os dias.

Escolho enfrentar a distância.

Escolho acreditar no nosso futuro.

Escolho amar você, do jeito mais verdadeiro que eu sei.

Porque, no fim, não importa a idade, não importa a distância.

O que importa é que é você.

E sempre vai ser você.

  `
},
  {
    number: "02",
    title: "Pra quando estiver triste",
    preview: "uma mensagem pra ela ler nos dias difíceis",
    text: `
Milena,

Escreve aqui uma carta pra ela ler quando estiver triste.

Pode ser algo carinhoso, leve e sincero.
    `
  },
  {
    number: "03",
    title: "Coisas que amo em você",
    preview: "pequenos detalhes dela que fazem diferença",
    text: `
Milena,

Escreve aqui uma cartinha falando das coisas que você ama nela.
    `
  },
  {
    number: "04",
    title: "Uma promessa minha",
    preview: "uma promessa bonita pra guardar nesse cantinho",
    text: `
Milena,

Escreve aqui uma promessa sua.
    `
  }
];

const memoriesData = [
  {
    number: "01",
    icon: "🌹",
    title: "Nosso começo",
    preview: "a primeira flor desse jardim",
    image: "images/memoria-1.jpg",
    text: `
Milena,

Aqui você escreve sobre o começo de vocês.
Pode ser como tudo começou, quando ela te marcou pela primeira vez
ou o momento em que você percebeu que ela era especial.
    `
  },
  {
    number: "02",
    icon: "❤️",
    title: "Um dia especial",
    preview: "uma lembrança que ficou no coração",
    image: "images/memoria-2.jpg",
    text: `
Milena,

Aqui você escreve sobre um momento especial que vocês viveram.
Uma conversa, uma call, um presente, uma madrugada, qualquer coisa que virou memória bonita.
    `
  },
  {
    number: "03",
    icon: "🌺",
    title: "Uma conversa inesquecível",
    preview: "uma memória que floresceu em silêncio",
    image: "images/memoria-3.jpg",
    text: `
Milena,

Aqui você escreve sobre uma conversa que te marcou muito.
Pode ser algo simples, mas que ficou guardado como uma flor rara.
    `
  },
  {
    number: "04",
    icon: "🥀",
    title: "Saudade bonita",
    preview: "quando a saudade também vira memória",
    text: `
Milena,

Aqui você escreve sobre uma saudade que também é bonita,
porque mostra o quanto ela é importante pra você.
    `
  }
];

const playlistData = [
  {
    number: "01",
    title: "Música principal",
    desc: "a música que toca quando o site começa",
    src: "audio/musica.mp3"
  },
  {
    number: "02",
    title: "Nossa música",
    desc: "coloque aqui uma música especial pra vocês",
    src: "audio/musica-1.mp3"
  },
  {
    number: "03",
    title: "Pra lembrar de você",
    desc: "uma música com clima mais calmo",
    src: "audio/musica-2.mp3"
  },
  {
    number: "04",
    title: "Noite azul",
    desc: "uma música que combina com a tela inicial",
    src: "audio/musica-3.mp3"
  },
  {
    number: "05",
    title: "Finalzinho bonito",
    desc: "uma música pra deixar tocando enquanto ela lê",
    src: "audio/musica-4.mp3"
  }
];

bgMusic.loop = false;

function setupAudio() {
  if (audioCtx) return;

  audioCtx = new (window.AudioContext || window.webkitAudioContext)();

  masterGain = audioCtx.createGain();
  sfxGain = audioCtx.createGain();

  masterGain.gain.value = 0;
  sfxGain.gain.value = 0.35;

  sfxGain.connect(masterGain);
  masterGain.connect(audioCtx.destination);
}

function enableSound() {
  setupAudio();

  if (audioCtx.state === "suspended") {
    audioCtx.resume();
  }

  soundEnabled = true;
  soundToggle.classList.add("active");
  soundText.textContent = "som on";

  masterGain.gain.cancelScheduledValues(audioCtx.currentTime);
  masterGain.gain.setTargetAtTime(0.85, audioCtx.currentTime, 0.08);

  bgMusic.play().then(() => {
    fadeMusicIn();
    vinylDisc.classList.add("playing");
  }).catch(() => {
    showToast("Toque de novo para ativar a música 💙");
  });
}

function disableSound() {
  if (!audioCtx) return;

  soundEnabled = false;
  soundToggle.classList.remove("active");
  soundText.textContent = "som off";

  masterGain.gain.cancelScheduledValues(audioCtx.currentTime);
  masterGain.gain.setTargetAtTime(0, audioCtx.currentTime, 0.08);

  vinylDisc.classList.remove("playing");
  fadeMusicOut();
}

function toggleSound() {
  if (soundEnabled) {
    disableSound();
  } else {
    enableSound();
    playClickSound();
  }
}

function fadeMusicIn() {
  if (isMusicFading) return;

  isMusicFading = true;
  bgMusic.volume = 0;

  const fade = setInterval(() => {
    if (!soundEnabled) {
      clearInterval(fade);
      isMusicFading = false;
      return;
    }

    if (bgMusic.volume < MUSIC_VOLUME) {
      bgMusic.volume = Math.min(bgMusic.volume + 0.03, MUSIC_VOLUME);
    } else {
      clearInterval(fade);
      isMusicFading = false;
    }
  }, 120);
}

function fadeMusicOut() {
  const fade = setInterval(() => {
    if (bgMusic.volume > 0.03) {
      bgMusic.volume = Math.max(bgMusic.volume - 0.04, 0);
    } else {
      bgMusic.volume = 0;
      bgMusic.pause();
      clearInterval(fade);
    }
  }, 80);
}

function playClickSound() {
  if (!audioCtx || !soundEnabled) return;

  const now = audioCtx.currentTime;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  osc.type = "triangle";
  osc.frequency.setValueAtTime(720, now);
  osc.frequency.exponentialRampToValueAtTime(280, now + 0.12);

  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.22, now + 0.015);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.16);

  osc.connect(gain);
  gain.connect(sfxGain);

  osc.start(now);
  osc.stop(now + 0.18);
}

function playHoverSound() {
  if (!audioCtx || !soundEnabled) return;

  const now = audioCtx.currentTime;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  osc.type = "sine";
  osc.frequency.setValueAtTime(980, now);
  osc.frequency.exponentialRampToValueAtTime(1240, now + 0.08);

  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.08, now + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.1);

  osc.connect(gain);
  gain.connect(sfxGain);

  osc.start(now);
  osc.stop(now + 0.12);
}

function playFlowerSound() {
  if (!audioCtx || !soundEnabled) return;

  const now = audioCtx.currentTime;

  playSoftSfxBell(880, now, 0.45, 0.14);
  playSoftSfxBell(1320, now + 0.07, 0.5, 0.09);
}

function playSoftSfxBell(freq, startTime, duration, volume) {
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  osc.type = "sine";
  osc.frequency.setValueAtTime(freq, startTime);
  osc.frequency.exponentialRampToValueAtTime(freq * 0.72, startTime + duration);

  gain.gain.setValueAtTime(0.0001, startTime);
  gain.gain.exponentialRampToValueAtTime(volume, startTime + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

  osc.connect(gain);
  gain.connect(sfxGain);

  osc.start(startTime);
  osc.stop(startTime + duration + 0.05);
}

function playTransitionSound() {
  if (!audioCtx || !soundEnabled) return;

  const now = audioCtx.currentTime;
  const duration = 1.2;
  const bufferSize = audioCtx.sampleRate * duration;
  const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
  const data = buffer.getChannelData(0);

  for (let i = 0; i < bufferSize; i++) {
    data[i] = (Math.random() * 2 - 1) * (1 - i / bufferSize);
  }

  const noise = audioCtx.createBufferSource();
  const filter = audioCtx.createBiquadFilter();
  const gain = audioCtx.createGain();

  noise.buffer = buffer;

  filter.type = "bandpass";
  filter.frequency.setValueAtTime(300, now);
  filter.frequency.exponentialRampToValueAtTime(2600, now + duration);

  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.22, now + 0.12);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

  noise.connect(filter);
  filter.connect(gain);
  gain.connect(sfxGain);

  noise.start(now);
  noise.stop(now + duration);
}

function createSpiderLilySVG() {
  const rotations = [0, 45, 90, 135, 180, 225, 270, 315];

  const petals = rotations.map((rotation) => `
    <g transform="rotate(${rotation})">
      <path class="lily-petal" d="M0 0 C-4 -18, -6 -42, 2 -72 C8 -88, 22 -96, 18 -76 C14 -55, 10 -27, 2 0"></path>
      <path class="lily-petal-soft" d="M0 0 C0 -16, 2 -35, 10 -60"></path>
    </g>
  `).join("");

  return `
    <svg viewBox="0 0 180 180" aria-hidden="true">
      <g>
        <path class="lily-stem" d="M90 104 C90 124, 90 142, 90 176"></path>
        <circle class="lily-core-glow" cx="90" cy="88" r="18"></circle>

        <g transform="translate(90 88)">
          ${petals}

          <path class="lily-stamen" d="M0 0 C12 -10, 28 -18, 52 -20"></path>
          <circle class="lily-dot" cx="52" cy="-20" r="2.2"></circle>

          <path class="lily-stamen" d="M0 0 C10 -16, 16 -32, 20 -52"></path>
          <circle class="lily-dot" cx="20" cy="-52" r="2.2"></circle>

          <path class="lily-stamen" d="M0 0 C-10 -16, -16 -32, -20 -52"></path>
          <circle class="lily-dot" cx="-20" cy="-52" r="2.2"></circle>

          <path class="lily-stamen" d="M0 0 C-14 -10, -30 -18, -52 -18"></path>
          <circle class="lily-dot" cx="-52" cy="-18" r="2.2"></circle>

          <path class="lily-stamen" d="M0 0 C-10 12, -18 26, -26 44"></path>
          <circle class="lily-dot" cx="-26" cy="44" r="2.2"></circle>

          <path class="lily-stamen" d="M0 0 C12 10, 22 24, 30 40"></path>
          <circle class="lily-dot" cx="30" cy="40" r="2.2"></circle>
        </g>

        <circle class="lily-core" cx="90" cy="88" r="5.5"></circle>
        <circle class="lily-sparkle" cx="34" cy="34" r="2"></circle>
        <circle class="lily-sparkle" cx="145" cy="42" r="2.1"></circle>
        <circle class="lily-sparkle" cx="28" cy="112" r="1.7"></circle>
        <circle class="lily-sparkle" cx="154" cy="115" r="1.7"></circle>
      </g>
    </svg>
  `;
}

function createFlowers() {
  flowerConfigs.forEach((config, index) => {
    const flower = document.createElement("div");
    flower.className = "spider-lily";
    flower.innerHTML = createSpiderLilySVG();

    flower.style.left = config.left;
    flower.style.bottom = config.bottom;
    flower.style.setProperty("--size", `${config.size}px`);
    flower.style.setProperty("--floatTime", `${config.floatTime}s`);
    flower.dataset.baseRotate = config.rotate;
    flower.dataset.index = index;

    flower.addEventListener("pointerdown", () => {
      enableSound();
      playFlowerSound();

      flower.classList.add("active");

      clearTimeout(flower._timer);
      flower._timer = setTimeout(() => {
        flower.classList.remove("active");
      }, 500);
    });

    flowersLayer.appendChild(flower);
  });
}

function createParticles() {
  const total = 42;

  for (let i = 0; i < total; i++) {
    const particle = document.createElement("span");
    particle.className = "particle";

    const size = Math.random() * 8 + 4;
    const left = Math.random() * 100;
    const delay = Math.random() * 8;
    const duration = Math.random() * 7 + 7;
    const blur = Math.random() * 1.8;

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${left}%`;
    particle.style.animationDelay = `${delay}s`;
    particle.style.animationDuration = `${duration}s`;
    particle.style.filter = `
      blur(${blur}px)
      drop-shadow(0 0 8px rgba(124, 202, 255, 0.45))
    `;

    particlesLayer.appendChild(particle);
  }
}

function moveLight(x, y) {
  touchLight.style.left = `${x}px`;
  touchLight.style.top = `${y}px`;
  touchLight.style.opacity = "1";
}

function updateFlowersFollow(x, y) {
  const flowers = document.querySelectorAll(".spider-lily");

  flowers.forEach((flower) => {
    const rect = flower.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const dx = x - centerX;
    const dy = y - centerY;
    const distance = Math.hypot(dx, dy);

    const maxDistance = 260;
    const influence = Math.max(0, 1 - distance / maxDistance);

    const moveX = (dx / maxDistance) * 12 * influence;
    const moveY = (dy / maxDistance) * 8 * influence;
    const rotate = Number(flower.dataset.baseRotate) + (dx / maxDistance) * 10 * influence;
    const scale = 1 + influence * 0.05;
    const opacity = 0.74 + influence * 0.26;

    flower.style.setProperty("--moveX", `${moveX}px`);
    flower.style.setProperty("--moveY", `${moveY}px`);
    flower.style.setProperty("--followRotate", `${rotate}deg`);
    flower.style.setProperty("--scale", scale.toFixed(3));
    flower.style.opacity = opacity.toFixed(3);
  });
}

function updatePanelTilt(x, y) {
  if (menuPanel.classList.contains("hidden")) return;

  const rect = menuPanel.getBoundingClientRect();

  const panelCenterX = rect.left + rect.width / 2;
  const panelCenterY = rect.top + rect.height / 2;

  const dx = (x - panelCenterX) / rect.width;
  const dy = (y - panelCenterY) / rect.height;

  const tiltY = dx * 7;
  const tiltX = dy * -7;

  menuPanel.style.setProperty("--tiltX", `${tiltX}deg`);
  menuPanel.style.setProperty("--tiltY", `${tiltY}deg`);
}

function resetFlowers() {
  const flowers = document.querySelectorAll(".spider-lily");

  flowers.forEach((flower) => {
    flower.style.setProperty("--moveX", `0px`);
    flower.style.setProperty("--moveY", `0px`);
    flower.style.setProperty("--followRotate", `${flower.dataset.baseRotate}deg`);
    flower.style.setProperty("--scale", `1`);
    flower.style.opacity = `0.82`;
  });

  touchLight.style.opacity = "0";
}

function resetPanelTilt() {
  menuPanel.style.setProperty("--tiltX", "0deg");
  menuPanel.style.setProperty("--tiltY", "0deg");
}

function typeIntroText() {
  const text = typingText.dataset.text;
  let index = 0;

  typingText.textContent = "";

  const interval = setInterval(() => {
    typingText.textContent += text[index];
    index++;

    if (index >= text.length) {
      clearInterval(interval);
      typingText.classList.add("finished");
    }
  }, 24);
}

function createRipple(button, event) {
  const ripple = document.createElement("span");
  ripple.className = "ripple";

  const rect = button.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = event.clientX - rect.left - size / 2;
  const y = event.clientY - rect.top - size / 2;

  ripple.style.width = `${size}px`;
  ripple.style.height = `${size}px`;
  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;

  button.appendChild(ripple);

  setTimeout(() => {
    ripple.remove();
  }, 600);
}

function showToast(message) {
  toastText.textContent = message;
  systemToast.classList.add("show");

  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => {
    systemToast.classList.remove("show");
  }, 2300);
}

function startTransition(text, callback) {
  transitionText.textContent = text;
  transitionScreen.classList.add("active");
  playTransitionSound();

  setTimeout(() => {
    callback();
  }, 900);

  setTimeout(() => {
    transitionScreen.classList.remove("active");
  }, 1500);
}

function playSlashTransition(text, callback) {
  slashText.textContent = text;
  slashTransition.classList.add("active");
  playTransitionSound();

  setTimeout(() => {
    callback();
  }, 430);

  setTimeout(() => {
    slashTransition.classList.remove("active");
  }, 900);
}

function hideAllScreens() {
  menuPanel.classList.add("hidden");
  worldScreen.classList.add("hidden");
  lettersScreen.classList.add("hidden");
  memoriesScreen.classList.add("hidden");
  playlistScreen.classList.add("hidden");
  detailPanel.classList.add("hidden");
}

function openWorld() {
  enableSound();

  startTransition("abrindo o mundo da Milena...", () => {
    hideAllScreens();
    worldScreen.classList.remove("hidden");
  });
}

function backToStart() {
  startTransition("voltando para a tela inicial...", () => {
    hideAllScreens();
    menuPanel.classList.remove("hidden");
  });
}

function openSection(sectionName) {
  if (sectionName === "cartinhas") {
    openLettersScreen();
    return;
  }

  if (sectionName === "memorias") {
    openMemoriesScreen();
    return;
  }

  if (sectionName === "playlist") {
    openPlaylistScreen();
    return;
  }

  if (sectionName === "surpresa" && !isSurpriseUnlocked()) {
    showToast("Abra Cartinhas, Memórias, Playlist e Motivos primeiro 💙");
    return;
  }

  const data = sectionData[sectionName];

  detailLabel.textContent = data.label;
  detailTitle.textContent = data.title;
  detailContent.innerHTML = data.html;

  detailPanel.classList.remove("hidden");

  if (sectionName !== "surpresa") {
    visitedSections.add(sectionName);
    markVisited(sectionName);
    updateSurpriseState();
  }

  if (sectionName === "surpresa") {
    showToast("Surpresa desbloqueada 💙");
  }
}

function openLettersScreen() {
  enableSound();

  playSlashTransition("CARTINHAS", () => {
    hideAllScreens();
    lettersScreen.classList.remove("hidden");

    visitedSections.add("cartinhas");
    markVisited("cartinhas");
    updateSurpriseState();
  });
}

function closeLettersScreen() {
  playSlashTransition("VOLTAR", () => {
    hideAllScreens();
    worldScreen.classList.remove("hidden");
  });
}

function renderLetters() {
  lettersGrid.innerHTML = "";

  lettersData.forEach((letter) => {
    const card = document.createElement("button");
    card.className = "letter-card";

    card.innerHTML = `
      <span>${letter.number}</span>
      <strong>${letter.title}</strong>
      <p>${letter.preview}</p>
    `;

    card.addEventListener("pointerenter", () => {
      playHoverSound();
    });

    card.addEventListener("click", (event) => {
      enableSound();
      playClickSound();
      createRipple(card, event);
      openLetter(letter);
    });

    lettersGrid.appendChild(card);
  });
}

function openLetter(letter) {
  detailLabel.textContent = `cartinha ${letter.number}`;
  detailTitle.textContent = letter.title;

  const videoHTML = letter.video
    ? `
      <div class="letter-video-frame">
        <video controls playsinline preload="metadata">
          <source src="${letter.video}" type="video/mov">
          Seu navegador não conseguiu abrir esse vídeo.
        </video>
      </div>
    `
    : "";

  detailContent.innerHTML = `
    ${videoHTML}

    <div class="letter-written-card">
      <div class="letter-written-top">
        <span>✦ carta escrita</span>
      </div>

      <p>${letter.text.trim().replace(/\n/g, "<br>")}</p>
    </div>
  `;

  detailPanel.classList.remove("hidden");
}
function openMemoriesScreen() {
  enableSound();

  playSlashTransition("MEMÓRIAS", () => {
    hideAllScreens();
    memoriesScreen.classList.remove("hidden");

    visitedSections.add("memorias");
    markVisited("memorias");
    updateSurpriseState();
  });
}

function closeMemoriesScreen() {
  playSlashTransition("VOLTAR", () => {
    hideAllScreens();
    worldScreen.classList.remove("hidden");
  });
}

function renderMemories() {
  memoriesGardenGrid.innerHTML = "";

  memoriesData.forEach((memory) => {
    const card = document.createElement("button");
    card.className = "memory-flower-card";

    card.innerHTML = `
      <span class="memory-flower-number">${memory.number}</span>
      <span class="memory-flower-icon">${memory.icon}</span>
      <strong>${memory.title}</strong>
      <p>${memory.preview}</p>

      <div class="memory-bloom-flower">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    `;

    card.addEventListener("pointerenter", () => {
      playHoverSound();
    });

    card.addEventListener("click", (event) => {
      enableSound();
      playClickSound();
      createRipple(card, event);

      card.classList.add("blooming");

      setTimeout(() => {
        openMemory(memory);
        card.classList.remove("blooming");
      }, 320);
    });

    memoriesGardenGrid.appendChild(card);
  });
}

function openMemory(memory) {
  detailLabel.textContent = `memória ${memory.number}`;
  detailTitle.textContent = memory.title;

  const photoHTML = memory.image
    ? `
      <div class="memory-photo-frame">
        <img src="${memory.image}" alt="${memory.title}">
      </div>
    `
    : `
      <div class="memory-photo-frame">
        <div class="memory-photo-placeholder">
          Coloque uma foto dessa memória adicionando o caminho no script.js
        </div>
      </div>
    `;

  detailContent.innerHTML = `
    ${photoHTML}

    <div class="info-card">
      <p>${memory.text.trim().replace(/\n/g, "<br>")}</p>
    </div>
  `;

  detailPanel.classList.remove("hidden");
}

function createTouchPetals(x, y) {
  if (memoriesScreen.classList.contains("hidden")) return;

  for (let i = 0; i < 8; i++) {
    const petal = document.createElement("span");
    petal.className = "touch-petal";

    const angle = Math.random() * Math.PI * 2;
    const distance = 45 + Math.random() * 70;

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    petal.style.left = `${x}px`;
    petal.style.top = `${y}px`;
    petal.style.setProperty("--x", `${moveX}px`);
    petal.style.setProperty("--y", `${moveY}px`);

    document.body.appendChild(petal);

    setTimeout(() => {
      petal.remove();
    }, 900);
  }
}

function openPlaylistScreen() {
  enableSound();

  playSlashTransition("PLAYLIST", () => {
    hideAllScreens();
    playlistScreen.classList.remove("hidden");

    visitedSections.add("playlist");
    markVisited("playlist");
    updateSurpriseState();
  });
}

function closePlaylistScreen() {
  playSlashTransition("VOLTAR", () => {
    hideAllScreens();
    worldScreen.classList.remove("hidden");
  });
}

function renderPlaylist() {
  trackList.innerHTML = "";

  playlistData.forEach((track, index) => {
    const button = document.createElement("button");
    button.className = "track-item";
    button.dataset.src = track.src;
    button.dataset.index = index;

    if (index === currentTrackIndex) {
      button.classList.add("active");
      nowPlayingTitle.textContent = track.title;
      nowPlayingDesc.textContent = track.desc;
    }

    button.innerHTML = `
      <span class="track-number">${track.number}</span>

      <span class="track-info">
        <strong>${track.title}</strong>
        <span>${track.desc}</span>
      </span>

      <span class="track-play">▶</span>
    `;

    button.addEventListener("pointerenter", () => {
      playHoverSound();
    });

    button.addEventListener("click", (event) => {
      createRipple(button, event);
      playClickSound();
      playPlaylistTrack(index);
    });

    trackList.appendChild(button);
  });

  updatePlaylistModeUI();
}

function playPlaylistTrack(trackIndex) {
  const track = playlistData[trackIndex];

  if (!track) return;

  setupAudio();

  if (audioCtx.state === "suspended") {
    audioCtx.resume();
  }

  soundEnabled = true;
  soundToggle.classList.add("active");
  soundText.textContent = "som on";

  masterGain.gain.cancelScheduledValues(audioCtx.currentTime);
  masterGain.gain.setTargetAtTime(0.85, audioCtx.currentTime, 0.08);

  currentTrackIndex = trackIndex;
  currentTrackSrc = track.src;

  bgMusic.pause();

  if (bgMusic.getAttribute("src") !== track.src) {
    bgMusic.setAttribute("src", track.src);
    bgMusic.load();
  }

  bgMusic.currentTime = 0;
  bgMusic.volume = 0;

  bgMusic.play().then(() => {
    fadeMusicIn();

    nowPlayingTitle.textContent = track.title;
    nowPlayingDesc.textContent = track.desc;
    vinylDisc.classList.add("playing");

    updateActiveTrack();
    showToast(`Tocando: ${track.title} 💙`);
  }).catch(() => {
    showToast("Não consegui tocar essa música. Confere o nome do arquivo.");
  });
}

function updateActiveTrack() {
  document.querySelectorAll(".track-item").forEach((item) => {
    item.classList.toggle(
      "active",
      Number(item.dataset.index) === currentTrackIndex
    );
  });
}

function playNextTrack() {
  if (playlistData.length === 0) return;

  let nextIndex;

  if (playlistMode === "random") {
    nextIndex = Math.floor(Math.random() * playlistData.length);

    if (playlistData.length > 1 && nextIndex === currentTrackIndex) {
      nextIndex = (nextIndex + 1) % playlistData.length;
    }
  } else {
    nextIndex = (currentTrackIndex + 1) % playlistData.length;
  }

  playPlaylistTrack(nextIndex);
}

function playPreviousTrack() {
  if (playlistData.length === 0) return;

  const previousIndex =
    (currentTrackIndex - 1 + playlistData.length) % playlistData.length;

  playPlaylistTrack(previousIndex);
}

function togglePlaylistMode() {
  playlistMode = playlistMode === "order" ? "random" : "order";
  updatePlaylistModeUI();

  if (playlistMode === "random") {
    showToast("Modo aleatório ativado 🎲");
  } else {
    showToast("Modo em ordem ativado 🎵");
  }
}

function updatePlaylistModeUI() {
  if (!modeLabel || !modeHint || !modeToggleBtn) return;

  if (playlistMode === "random") {
    modeLabel.textContent = "aleatório";
    modeHint.textContent = "quando uma música acabar, a próxima será sorteada.";
    modeToggleBtn.classList.add("random");
  } else {
    modeLabel.textContent = "ordem";
    modeHint.textContent = "quando uma música acabar, a próxima vem em ordem.";
    modeToggleBtn.classList.remove("random");
  }
}

function closeDetail() {
  detailPanel.classList.add("hidden");
}

function markVisited(sectionName) {
  const card = document.querySelector(`.world-card[data-section="${sectionName}"]`);

  if (card) {
    card.classList.add("visited");
  }
}

function isSurpriseUnlocked() {
  return (
    visitedSections.has("cartinhas") &&
    visitedSections.has("memorias") &&
    visitedSections.has("playlist") &&
    visitedSections.has("motivos")
  );
}

function updateSurpriseState() {
  if (isSurpriseUnlocked()) {
    surpriseCard.classList.remove("locked");
    surpriseText.textContent = "toque para abrir sua surpresa";
  }
}

function updateClock() {
  const now = new Date();

  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");

  uiClock.textContent = `${hours}:${minutes}`;
}

document.addEventListener("pointermove", (event) => {
  moveLight(event.clientX, event.clientY);
  updateFlowersFollow(event.clientX, event.clientY);
  updatePanelTilt(event.clientX, event.clientY);
});

document.addEventListener("pointerdown", (event) => {
  moveLight(event.clientX, event.clientY);
  updateFlowersFollow(event.clientX, event.clientY);
  updatePanelTilt(event.clientX, event.clientY);
  createTouchPetals(event.clientX, event.clientY);
});

document.addEventListener("pointerup", () => {
  setTimeout(() => {
    resetFlowers();
    resetPanelTilt();
  }, 80);
});

document.addEventListener("mouseleave", () => {
  resetFlowers();
  resetPanelTilt();
});

menuButtons.forEach((button) => {
  button.addEventListener("pointerenter", () => {
    playHoverSound();
  });

  button.addEventListener("click", (event) => {
    enableSound();
    playClickSound();
    createRipple(button, event);

    if (button === enterBtn) {
      openWorld();
      return;
    }

    const shortcut = button.dataset.sectionShortcut;

    if (shortcut) {
      openWorld();

      setTimeout(() => {
        openSection(shortcut);
      }, 1200);
    }
  });
});

worldCards.forEach((card) => {
  card.addEventListener("pointerenter", () => {
    playHoverSound();
  });

  card.addEventListener("click", (event) => {
    enableSound();
    playClickSound();
    createRipple(card, event);
    openSection(card.dataset.section);
  });
});

backBtn.addEventListener("click", (event) => {
  createRipple(backBtn, event);
  playClickSound();
  backToStart();
});

lettersBackBtn.addEventListener("click", (event) => {
  createRipple(lettersBackBtn, event);
  playClickSound();
  closeLettersScreen();
});

memoriesBackBtn.addEventListener("click", (event) => {
  createRipple(memoriesBackBtn, event);
  playClickSound();
  closeMemoriesScreen();
});

playlistBackBtn.addEventListener("click", (event) => {
  createRipple(playlistBackBtn, event);
  playClickSound();
  closePlaylistScreen();
});

prevTrackBtn.addEventListener("click", (event) => {
  createRipple(prevTrackBtn, event);
  playClickSound();
  playPreviousTrack();
});

nextTrackBtn.addEventListener("click", (event) => {
  createRipple(nextTrackBtn, event);
  playClickSound();
  playNextTrack();
});

modeToggleBtn.addEventListener("click", (event) => {
  createRipple(modeToggleBtn, event);
  playClickSound();
  togglePlaylistMode();
});

bgMusic.addEventListener("ended", () => {
  playNextTrack();
});

detailClose.addEventListener("click", () => {
  playClickSound();
  closeDetail();
});

soundToggle.addEventListener("click", (event) => {
  event.stopPropagation();
  toggleSound();
});

createParticles();
createFlowers();
renderLetters();
renderMemories();
renderPlaylist();
resetFlowers();
resetPanelTilt();
typeIntroText();
updateClock();
updateSurpriseState();

setInterval(updateClock, 1000);
