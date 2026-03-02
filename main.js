import './style.css'

let eventsList = [
  // Technical
  { id: 1, name: 'Paper Presentation', desc: 'Showcase your research and innovation.', type: 'Technical', img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=400&q=80' },
  { id: 2, name: 'Coding Contest', desc: 'Test your algorithmic skills and speed.', type: 'Technical', img: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=400&q=80' },
  { id: 3, name: 'Technical Quiz', desc: 'Prove your expertise in latest tech trends.', type: 'Technical', img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80' },
  { id: 4, name: 'Web Designing', desc: 'Create stunning and functional web interfaces.', type: 'Technical', img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80' },
  // Workshops
  { id: 8, name: 'AI & Robotics', desc: 'Hands-on workshop on future of automation.', type: 'Workshop', img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=400&q=80' },
  { id: 9, name: 'Cloud Security', desc: 'Learn to protect enterprise infrastructure.', type: 'Workshop', img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=400&q=80' },
  // Non-Technical
  { id: 5, name: 'Photography', desc: 'Capture the best moments of Mahendra IT.', type: 'Non-Technical', img: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=400&q=80' },
  { id: 6, name: 'Gaming (Valorant)', desc: 'Elite combat strategy tournament.', type: 'Non-Technical', img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=400&q=80' },
  { id: 7, name: 'IPL Auction', desc: 'Strategize and build your dream team.', type: 'Non-Technical', img: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=400&q=80' },
  { id: 10, name: 'Short Film', desc: 'Cinematic storytelling competition.', type: 'Non-Technical', img: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=400&q=80' }
];

let editId = null;
let isAdminAuthenticated = false;
const ADMIN_CREDENTIALS = { user: 'admin@mit', pass: 'mitadminpass' };

// Configuration for Apps (Icons and Labels)
let appConfig = [
  { id: 'events', label: 'Events', icon: '📅', bgClass: 'events-bg' },
  { id: 'rules', label: 'Rules', icon: '📜', bgClass: 'rules-bg' },
  { id: 'contact', label: 'Contact', icon: '📞', bgClass: 'contact-bg' },
  { id: 'transport', label: 'Transport', icon: '🚌', bgClass: 'transport-bg' },
  { id: 'register', label: 'Register', icon: '👤', bgClass: 'register-bg' },
  { id: 'gallery', label: 'Gallery', icon: '🖼️', bgClass: 'gallery-bg' },
  { id: 'about', label: 'Mahendra IT', icon: 'ℹ️', bgClass: 'about-bg' },
  { id: 'terminal', label: 'Dev Log', icon: '⌨️', bgClass: 'terminal-bg' },
  { id: 'admin', label: 'Admin', icon: '🔐', bgClass: 'admin-bg' }
];

// Content for Apps
const appData = {
  events: { title: 'Events', content: '' },
  admin: { title: 'Admin Control Panel', content: '' },
  register: {
    title: 'Secure Registration',
    content: `
      <div id="reg-form-container">
        <h2 style="color:var(--accent-green)">👤 AUTHENTICATE_USER</h2>
        <div class="phone-form">
          <input type="text" placeholder="Full Name">
          <input type="email" placeholder="Email Address">
          <input type="text" placeholder="College / Dept">
          <p style="font-size:10px; color:var(--accent-green); margin-top:10px;">TARGET_EVENTS_SELECTION</p>
          <div id="reg-event-list" style="display:grid; grid-template-columns:1fr; gap:5px; max-height:150px; overflow-y:auto; border:1px solid var(--accent-dim); padding:10px; background:rgba(0,255,65,0.05);"></div>
          <button class="phone-btn primary" id="submit-reg">INITIATE_ENROLLMENT →</button>
        </div>
      </div>
      <style>
        .phone-form { display:flex; flex-direction:column; gap:16px; margin-top:20px; }
        .phone-form input { padding: 12px; border: 1px solid var(--accent-dim); background: #000; color: var(--accent-green); font-family: 'Courier New', monospace; font-size: 14px; }
        .event-check { display:flex; gap:10px; align-items:center; font-size:12px; }
        .phone-btn.primary { background: var(--accent-green); color: black; border-radius: 4px; box-shadow: 0 0 10px var(--accent-green); }
      </style>
    `
  },
  rules: {
    title: 'Rules & Guidelines',
    content: `
      <h2>General Rules</h2>
      <ol>
        <li>Participants must carry a valid College Identity Card.</li>
        <li>Formal dress code is highly encouraged.</li>
        <li>The decisions of judges and coordinators are final.</li>
      </ol>
      <div style="background:rgba(0, 255, 65, 0.05); padding:20px; border-radius:16px; border:1px solid rgba(0, 255, 65, 0.2); margin-top:20px;">
        <p style="color:var(--accent-green); font-weight:700; margin-bottom:10px;">IMPORTANT DATES</p>
        <p><b>Registration Closes:</b> Mar 3, 2026</p>
        <p><b>Event Date:</b> Mar 6, 2026</p>
      </div>
    `
  },
  contact: {
    title: 'Contact Us',
    content: `
      <h2>Organizing Team</h2>
      <div class="contact-card"><b>Secretary:</b> John Doe <br> <span style="color:var(--accent-green)">📞 98765 43210</span></div>
      <div class="contact-card"><b>Registrar:</b> Jane Smith <br> <span style="color:var(--accent-green)">📞 87654 32109</span></div>
      <style>.contact-card { background:#111; padding:16px; border-radius:12px; margin-bottom:12px; border:1px solid #222; }</style>
    `
  },
  transport: {
    title: 'Travel Guide',
    content: `
      <h2>Reach Mahendra IT</h2>
      <p><b>By Bus:</b> Frequent buses from Salem and Namakkal toward Mallasamudram.</p>
      <p><b>By Train:</b> Salem Junction is the nearest major station (25km).</p>
      <p>Location: Mallasamudram, Namakkal DT</p>
    `
  },
  gallery: {
    title: 'Gallery',
    content: `
      <div class="photo-grid">
        <img src="https://images.unsplash.com/photo-1540575861501-7ad0586b283a?auto=format&fit=crop&w=400">
        <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=400">
      </div>
      <style>.photo-grid { display:grid; grid-template-columns:1fr 1fr; gap:10px; } .photo-grid img { width:100%; border-radius:12px; }</style>
    `
  },
  about: {
    title: 'About Mahendra IT',
    content: `<h2>IT Department</h2><p>The Department of IT at Mahendra IT is dedicated to excellence and innovation.</p>`
  },
  terminal: {
    title: 'Developer Console',
    content: `<div class="term-log" style="font-family:monospace; line-height:1.4;">
      <p style="color:var(--accent-red)">[!] SYSTEM_BREACH_DETECTED_v9.2</p>
      <p>> BYPASSING_LOCAL_SECURITY... [SUCCESS]</p>
      <p>> FETCHING_ADMIN_CREDENTIALS...</p>
      <p>> USER: admin@mit</p>
      <p>> PASS: mitadminpass</p>
      <p style="color:var(--accent-green)">> INITIALIZING_MIT_OS_ROOT_SHELL...</p>
      <p style="color:var(--accent-cyan)">> WELCOME_BACK_ROOT_USER</p>
    </div>`
  }
};

const adminPanelHTML = `
  <div id="admin-panel">
    <h2 style="color:var(--accent-red)">SECURE SYSTEM ACCESS</h2>
    <div class="admin-tabs">
      <button class="tab-btn active" data-tab="events">EVENTS</button>
      <button class="tab-btn" data-tab="content">CONTENT</button>
      <button class="tab-btn" data-tab="icons">ICONS</button>
    </div>
    <div id="tab-events" class="tab-content active">
      <div class="admin-form">
        <input type="text" id="event-name" placeholder="Event Name">
        <textarea id="event-desc" placeholder="Event Description"></textarea>
        <select id="event-type"><option value="Technical">Technical</option><option value="Workshop">Workshop</option><option value="Non-Technical">Non-Technical</option></select>
        <button id="add-event-btn" class="phone-btn primary">SAVE EVENT</button>
        <button id="cancel-edit-btn" class="phone-btn" style="display:none; color:var(--accent-red); margin-top:5px; border:1px solid var(--accent-red)">CANCEL EDIT</button>
      </div>
      <div id="admin-event-list" class="admin-list"></div>
    </div>
    <div id="tab-content" class="tab-content">
      <div class="admin-form">
        <select id="app-content-selector"></select>
        <input type="text" id="app-title-input" placeholder="Window Title">
        <textarea id="app-content-input" placeholder="HTML Content" style="height:200px"></textarea>
        <button id="save-content-btn" class="phone-btn primary">UPDATE CONTENT</button>
      </div>
    </div>
    <div id="tab-icons" class="tab-content">
      <div class="admin-form">
        <input type="hidden" id="icon-idx-hidden">
        <input type="text" id="icon-label-input" placeholder="Label">
        <input type="text" id="icon-emoji-input" placeholder="Emoji">
        <button id="save-icon-btn" class="phone-btn primary">UPDATE ICON</button>
      </div>
      <div id="admin-icon-list" class="admin-list"></div>
    </div>
    <button id="logout-btn" class="phone-btn" style="margin-top:20px; border:1px solid var(--accent-red); font-size:12px;">TERMINATE SESSION</button>
  </div>
`;

const adminLoginHTML = `
  <div id="admin-login" style="padding: 20px; text-align: center;">
    <h2 style="color:var(--accent-green); margin-bottom:30px;">AUTHORIZATION REQUIRED</h2>
    <div class="terminal-login">
      <input type="text" id="admin-user" placeholder="USERNAME" style="background:transparent; border-bottom:1px solid var(--accent-green); color:var(--accent-green); margin-bottom:10px; width:100%;">
      <input type="password" id="admin-pass" placeholder="PASSWORD" style="background:transparent; border-bottom:1px solid var(--accent-green); color:var(--accent-green); margin-bottom:10px; width:100%;">
      <button id="login-exec-btn" class="phone-btn primary">EXECUTE_AUTH</button>
      <p id="login-error" style="color:var(--accent-red); display:none; margin-top:10px;">DENIED</p>
    </div>
  </div>
`;

const commonAdminStyles = `
  <style>
    .admin-tabs { display: flex; gap: 5px; margin-bottom: 20px; }
    .tab-btn { background: transparent; border: 1px solid var(--accent-dim); color: var(--accent-green); padding: 8px; flex: 1; font-size: 10px; }
    .tab-btn.active { background: var(--accent-dim); border-color: var(--accent-green); }
    .tab-content { display: none; }
    .tab-content.active { display: block; }
    .admin-form { display: flex; flex-direction: column; gap: 10px; }
    .admin-form input, .admin-form textarea, .admin-form select { background: #000; border: 1px solid var(--accent-green); color: var(--accent-green); padding: 10px; font-family: inherit; }
    .admin-item { background: rgba(0, 255, 65, 0.05); padding: 10px; border-left: 2px solid var(--accent-green); margin-bottom: 10px; font-size: 12px; }
    .admin-item-actions { display: flex; gap: 10px; margin-top: 10px; }
    .action-btn { background: transparent; border: 1px solid currentColor; padding: 4px; font-size: 10px; cursor: pointer; }
    .edit-btn { color: var(--accent-cyan); }
    .del-btn { color: var(--accent-red); }
  </style>
`;

const appContainer = document.getElementById('app-container');
const homeScreen = document.getElementById('home-screen');
const bootScreen = document.getElementById('boot-screen');
const phoneUI = document.getElementById('phone-ui');
const bootBtn = document.getElementById('boot-btn');
const statusTime = document.getElementById('status-time');
const widgetTimer = document.getElementById('widget-timer');
const matrixCanvas = document.getElementById('matrix-canvas');
const bootTerminal = document.getElementById('boot-terminal');
const progressFill = document.getElementById('progress-fill');
const progressPercent = document.getElementById('progress-percent');

document.addEventListener('DOMContentLoaded', () => {
  renderIcons();
  refreshEventsContent();
  initClock();
  initCountdown();
  initMatrix();
  initPreloader();
});

function initPreloader() {
  const preloader = document.getElementById('system-preloader');
  const percent = document.getElementById('preloader-percent');
  const text = document.getElementById('preloader-text');
  const streams = document.getElementById('preloader-streams');

  // High-speed data streams
  const chars = "0123456789ABCDEF!@#$%^&*()_+-=[]{}|;:,.<>?";
  const genStream = () => {
    let s = "";
    for (let i = 0; i < 1000; i++) s += chars[Math.floor(Math.random() * chars.length)] + (Math.random() > 0.9 ? "\n" : "");
    streams.textContent = s;
  };
  const sInt = setInterval(genStream, 50);

  const messages = [
    "DECRYPTING_NEURAL_LINK...",
    "BYPASSING_SYMPOSIUM_GATE...",
    "LOCALIZING_MIT_NODES...",
    "ENABLING_HACK_PROTOCOL...",
    "READY_FOR_BREACH"
  ];

  let p = 0;
  const interval = setInterval(() => {
    p += Math.random() * 8;
    if (p >= 100) {
      p = 100;
      clearInterval(interval);
      clearInterval(sInt);
      setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => {
          preloader.remove();
          startHackingBoot();
        }, 800);
      }, 500);
    }
    percent.textContent = Math.floor(p) + "%";
    text.textContent = messages[Math.floor((p / 101) * messages.length)];
  }, 100);
}

function renderIcons() {
  const grid = document.getElementById('app-grid');
  if (!grid) return;
  grid.innerHTML = appConfig.map(app => `
    <div class="app-icon" data-app="${app.id}">
      <div class="icon-shape ${app.bgClass}">${app.icon}</div>
      <span class="app-label">${app.label}</span>
    </div>
  `).join('');
  document.querySelectorAll('.app-icon').forEach(el => {
    el.onclick = () => launchApp(el.getAttribute('data-app'));
  });
}

function launchApp(id) {
  const app = appData[id];
  if (!app) return;

  // Hacker Transition Loader
  const trans = document.createElement('div');
  trans.className = 'app-transition-loader';
  trans.innerHTML = `
    <div class="trans-content">
      <div class="glitch-text" style="font-size:12px;">LOADING_NODE_${id.toUpperCase()}</div>
      <div class="trans-log">0x${Math.floor(Math.random() * 16777215).toString(16).toUpperCase()}..0x${Math.floor(Math.random() * 16777215).toString(16).toUpperCase()} [DECODING]</div>
    </div>
  `;
  document.body.appendChild(trans);

  setTimeout(() => {
    trans.style.opacity = '0';
    setTimeout(() => trans.remove(), 400);

    let content = app.content;
    if (id === 'admin') content = isAdminAuthenticated ? (adminPanelHTML + commonAdminStyles) : (adminLoginHTML + commonAdminStyles);

    const view = document.createElement('div');
    view.className = 'phone-app-view';
    view.id = `view-${id}`;
    view.innerHTML = `
      <div class="app-header">
        <button class="back-btn">⟨ Home</button>
        <div class="app-title">${app.title}</div>
        <div style="width:50px"></div>
      </div>
      <div class="app-body">${content}</div>
    `;
    view.querySelector('.back-btn').onclick = () => {
      view.style.animation = 'appClose 0.3s forwards';
      setTimeout(() => view.remove(), 300);
    };
    appContainer.appendChild(view);

    if (id === 'events') refreshEventsContent();
    if (id === 'admin') isAdminAuthenticated ? initAdminPanel() : initAdminLogin(view);
    if (id === 'register') initRegistration(view);
  }, 800);
}

function initRegistration(view) {
  const list = view.querySelector('#reg-event-list');
  if (list) {
    list.innerHTML = eventsList.map(e => `
      <label class="event-check" style="display:flex; align-items:center; gap:8px; margin-bottom:5px;">
        <input type="checkbox" style="width:auto"> 
        <span style="font-size:11px;">[${e.type}] ${e.name}</span>
      </label>
    `).join('');
  }
}

function initAdminLogin(view) {
  view.querySelector('#login-exec-btn').onclick = () => {
    const u = view.querySelector('#admin-user').value;
    const p = view.querySelector('#admin-pass').value;
    if (u === ADMIN_CREDENTIALS.user && p === ADMIN_CREDENTIALS.pass) {
      isAdminAuthenticated = true;
      view.remove();
      launchApp('admin');
    } else {
      view.querySelector('#login-error').style.display = 'block';
    }
  };
}

function initAdminPanel() {
  const panel = document.getElementById('admin-panel');
  panel.querySelectorAll('.tab-btn').forEach(btn => {
    btn.onclick = () => {
      panel.querySelectorAll('.tab-btn, .tab-content').forEach(el => el.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(`tab-${btn.getAttribute('data-tab')}`).classList.add('active');
      if (btn.getAttribute('data-tab') === 'content') renderAppContentAdmin();
      if (btn.getAttribute('data-tab') === 'icons') renderIconAdminList();
    };
  });
  renderAdminList();
  document.getElementById('add-event-btn').onclick = saveEvent;
  document.getElementById('save-content-btn').onclick = saveAppContent;
  document.getElementById('save-icon-btn').onclick = saveAppIcon;
  document.getElementById('logout-btn').onclick = () => { isAdminAuthenticated = false; document.getElementById('view-admin').remove(); launchApp('admin'); };
}

function renderAppContentAdmin() {
  const sel = document.getElementById('app-content-selector');
  sel.innerHTML = Object.keys(appData).map(k => `<option value="${k}">${appData[k].title}</option>`).join('');
  sel.onchange = () => {
    const k = sel.value;
    document.getElementById('app-title-input').value = appData[k].title;
    document.getElementById('app-content-input').value = appData[k].content;
  };
  sel.dispatchEvent(new Event('change'));
}

function saveAppContent() {
  const k = document.getElementById('app-content-selector').value;
  appData[k].title = document.getElementById('app-title-input').value;
  appData[k].content = document.getElementById('app-content-input').value;
  alert('SAVED');
}

function renderIconAdminList() {
  document.getElementById('admin-icon-list').innerHTML = appConfig.map((a, i) => `
    <div class="admin-item"><b>${a.label} ${a.icon}</b> <button class="action-btn edit-btn" onclick="startEditIcon(${i})">EDIT</button></div>
  `).join('');
}

window.startEditIcon = (i) => {
  const a = appConfig[i];
  document.getElementById('icon-idx-hidden').value = i;
  document.getElementById('icon-label-input').value = a.label;
  document.getElementById('icon-emoji-input').value = a.icon;
};

function saveAppIcon() {
  const i = document.getElementById('icon-idx-hidden').value;
  if (i === "") return;
  appConfig[i].label = document.getElementById('icon-label-input').value;
  appConfig[i].icon = document.getElementById('icon-emoji-input').value;
  renderIcons(); renderIconAdminList(); alert('SAVED');
}

function refreshEventsContent() {
  const renderCard = (e) => `
    <div class="event-card" style="border:1px solid var(--accent-dim); padding:15px; margin-bottom:10px; background:rgba(0,255,65,0.05); border-radius:8px;">
      <h3 style="color:var(--accent-cyan); margin-bottom:5px;">${e.name}</h3>
      <p style="font-size:12px; margin-bottom:10px;">${e.desc}</p>
      <button class="phone-btn" data-trigger="register" style="width:100%; font-size:10px; padding:8px;">SECURE_REGISTRATION</button>
    </div>
  `;
  appData.events.content = `<div class="gallery-grid">${eventsList.map(renderCard).join('')}</div>`;
  const ev = document.querySelector('#view-events .app-body');
  if (ev) ev.innerHTML = appData.events.content;
}

function renderAdminList() {
  document.getElementById('admin-event-list').innerHTML = eventsList.map(e => `
    <div class="admin-item"><b>${e.name}</b> <div class="admin-item-actions"><button class="action-btn edit-btn" onclick="startEdit(${e.id})">EDIT</button><button class="action-btn del-btn" onclick="deleteEvent(${e.id})">DEL</button></div></div>
  `).join('');
}

window.deleteEvent = (id) => { eventsList = eventsList.filter(e => e.id !== id); renderAdminList(); refreshEventsContent(); };
window.startEdit = (id) => {
  const e = eventsList.find(x => x.id === id);
  editId = id;
  document.getElementById('event-name').value = e.name;
  document.getElementById('event-desc').value = e.desc;
  document.getElementById('add-event-btn').innerText = 'UPDATE';
};

function saveEvent() {
  const n = document.getElementById('event-name').value;
  const d = document.getElementById('event-desc').value;
  if (!n || !d) return;
  if (editId) {
    const i = eventsList.findIndex(x => x.id === editId);
    eventsList[i] = { ...eventsList[i], name: n, desc: d };
    editId = null;
    document.getElementById('add-event-btn').innerText = 'SAVE';
  } else {
    eventsList.push({ id: Date.now(), name: n, desc: d, type: 'Technical' });
  }
  document.getElementById('event-name').value = '';
  document.getElementById('event-desc').value = '';
  renderAdminList(); refreshEventsContent();
}

function initClock() {
  const u = () => { const n = new Date(); statusTime.textContent = n.getHours().toString().padStart(2, '0') + ':' + n.getMinutes().toString().padStart(2, '0'); };
  u(); setInterval(u, 1000);
}

function initCountdown() {
  const target = new Date('March 6, 2026 09:00:00').getTime();
  const u = () => {
    const diff = target - Date.now();
    if (diff < 0) { widgetTimer.innerText = "STARTED!"; return; }
    widgetTimer.innerText = Math.floor(diff / 86400000) + 'D ' + Math.floor((diff % 86400000) / 3600000) + 'H';
  };
  u(); setInterval(u, 3600000);
}

function initMatrix() {
  const ctx = matrixCanvas.getContext('2d');
  let w, h, drops = [];
  const resize = () => {
    w = matrixCanvas.width = phoneUI.offsetWidth;
    h = matrixCanvas.height = phoneUI.offsetHeight;
    drops = Array(Math.floor(w / 10)).fill(0).map(() => ({ x: Math.random() * w, y: Math.random() * h, speed: 2 + Math.random() * 3 }));
  };
  resize();
  window.onresize = resize;
  function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'; ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#0f0'; ctx.font = '15px monospace';
    drops.forEach(d => {
      ctx.fillText(Math.random() > 0.5 ? '0' : '1', d.x, d.y);
      d.y += d.speed;
      if (d.y > h) d.y = -20;
    });
  }
  if (window.mInt) clearInterval(window.mInt);
  window.mInt = setInterval(draw, 50);
}

function startHackingBoot() {
  const logs = [
    "SYMPOSIUM_OS_v2.6_LOADED",
    "BYPASSING_SEC_ARRAY...",
    "ACCESSING_MAHENDRA_DATABASE...",
    "DECRYPTING_EVENT_MANIFEST...",
    "NEURAL_LINK_STABLE",
    "SYSTEM_READY_FOR_SYMPOSIUM",
    "MAHENDRA_IT_OS_ONLINE"
  ];
  const term = document.getElementById('boot-terminal');
  let logIdx = 0;

  const logInterval = setInterval(() => {
    if (logIdx < logs.length) {
      const line = document.createElement('div');
      line.className = 'line';
      line.textContent = `> ${logs[logIdx]}`;
      term.appendChild(line);
      logIdx++;
    } else {
      clearInterval(logInterval);
    }
  }, 600);

  let p = 0;
  const i = setInterval(() => {
    p += Math.random() * 5;
    if (p >= 100) { p = 100; clearInterval(i); bootBtn.classList.remove('hidden'); }
    progressFill.style.width = p + '%';
    progressPercent.innerText = Math.floor(p) + '%';
  }, 100);
}

bootBtn.onclick = () => {
  bootScreen.style.opacity = '0';
  setTimeout(() => { bootScreen.classList.add('hidden'); phoneUI.classList.remove('hidden'); initMatrix(); }, 500);
};

function startPaymentBypass() {
  const overlay = document.createElement('div');
  overlay.className = 'hacker-loader-overlay';
  overlay.innerHTML = `
    <div class="loader-scanline"></div>
    <div class="loader-content">
      <div class="loader-title">INJECTING_PAYMENT_GATEWAY_v3.2</div>
      <div class="loader-logs" id="payment-logs"></div>
      <div class="glitch-box">
        <div class="glitch-bar" id="payment-progress"></div>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);

  const logs = [
    { text: "ESTABLISHING_ENCRYPTED_TUNNEL...", status: "OK" },
    { text: "BYPASSING_PAYMENT_FIREWALL_v4...", status: "WAIT" },
    { text: "INJECTING_USER_METADATA_ARRAY...", status: "OK" },
    { text: "GATEWAY_HANDSHAKE_INITIALIZED...", status: "DONE" },
    { text: "AUTHORIZING_REMOTE_TRANSACTION...", status: "OK" },
    { text: "BYPASS_SUCCESSFUL_REDIRECTING", status: "SUCCESS" }
  ];

  let logIdx = 0;
  const logContainer = document.getElementById('payment-logs');
  const progressBar = document.getElementById('payment-progress');

  const interval = setInterval(() => {
    if (logIdx < logs.length) {
      const line = document.createElement('div');
      line.className = `loader-log-line ${logs[logIdx].status === 'SUCCESS' ? 'success' : ''}`;
      line.innerHTML = `<span>[${new Date().toLocaleTimeString('en-GB', { hour12: false }).split(' ')[0]}]</span> <span>${logs[logIdx].text}</span> <span class="status">[${logs[logIdx].status}]</span>`;
      logContainer.appendChild(line);

      const progress = ((logIdx + 1) / logs.length) * 100;
      progressBar.style.width = `${progress}%`;

      logIdx++;
    } else {
      clearInterval(interval);
      setTimeout(() => {
        window.open('https://razorpay.me/@gusto26', '_blank');
        overlay.remove();
      }, 1000);
    }
  }, 700);
}

window.closeApp = (id) => {
  const v = document.getElementById(`view-${id}`);
  if (v) { v.style.animation = 'appClose 0.3s forwards'; setTimeout(() => v.remove(), 300); }
};

document.addEventListener('click', (e) => {
  const trigger = e.target.closest('[data-trigger]');
  if (trigger) {
    const appId = trigger.getAttribute('data-trigger');
    launchApp(appId);
  }

  if (e.target.id === 'submit-reg') {
    startPaymentBypass();
  }
});
