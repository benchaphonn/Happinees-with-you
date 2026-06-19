const cards = [
    { id:1, img:"assets/cards/card01.png", title:"คนคิดถึง 💌", desc:"มีคนคิดถึงคุณอยู่เงียบ ๆ บ่อยกว่าคนที่คุณคิด บางครั้งเขาก็หยิบมือถือขึ้นมาเพราะอยากทักแต่ก็ไม่รู้จะเริ่มยังไง ความคิดถึงของเขาเหมือนเพลงโปรดที่เปิดวนซ้ำทุกวัน" },
    { id:2, img:"assets/cards/card02.png", title:"แอบมอง 👀", desc:"มีคนกำลังส่องคุณอยู่ไม่ว่าจะเป็นสตอรี่ โพสต์หรือรูปโปรไฟล์ใหม่เขาสนใจคุณมากกว่าที่แสดงออก" },
    { id:3, img:"assets/cards/card03.png", title:"รอเวลา ⏳", desc:"ความรักครั้งนี้ต้องใช้เวลาเหมือนเค้กที่อบจนสุก อย่ารีบร้อนเกินไปเพราะสิ่งดี ๆ กำลังค่อย ๆ เกิดขึ้น" },
    { id:4, img:"assets/cards/card04.png", title:"จตรงกัน 💞", desc:"คุณคิดถึงเขา เขาก็คิดถึงคุณ ต่างฝ่ายต่างคิดถึงกันอยู่เสมอ" },
    { id:5, img:"assets/cards/card05.png", title:"เสน่ห์แรง ✨", desc:"ช่วงนี้คุณมีเสน่ห์แรงมาก มีคนแอบมองคุณมากกว่าหนึ่งคนแน่นอนไพ่ใบนี้เป็นพลังของความน่ารักแบบไม่ต้องพยายาม" },
    { id:6, img:"assets/cards/card06.png", title:"ข่าวดี 📩", desc:"มีโอกาสได้รับข่าวดี ใครพูดดีด้วยนิดเดียวก็ทำให้คุณคิดไปไกลถึงงานแต่งได้ ไพ่ใบนี้บอกว่าคุณกำลังอยู่ในช่วงเปิดรับความรัก และพลังงานความรักรอบตัวกำลังดี แต่ต้องใจเย็น อย่าเพิ่งรีบตั้งชื่อลูกตั้งแต่เขาเพิ่งถามว่ากินข้าวหรือยัง" },
    { id:7, img:"assets/cards/card07.png", title:"ไพ่ก้าวหน้า 💯", desc:"ความสัมพันธ์กำลังค่อยๆดีขึ้น แม้จะข้าแต่มั่นคง" },
    { id:8, img:"assets/cards/card08.png", title:"ใจเย็น 💧", desc:"อย่าพึ่งคิดมากกับการตอบช้า บางทีเขาแค่ยุ่งจริง ๆนะ" },
    { id:9, img:"assets/cards/card09.png", title:"ดาวนำทาง 🌟", desc:"ช่วงนี้หัวใจกำลังได้รับสัญญาณดี ๆ จากจักรวาล บางอย่างที่เคยไม่ชัดกำลังค่อยๆชัดขึ้น เหมือนเดินทางกลางคืนแล้วเจอดาวดวงหนึ่งคอยนำทาง คุณอาจได้รู้คำตอบของเรื่องที่สงสัย หรือค้นพบว่ามีใครบางคนให้ความสำคัญกับคุณมากกว่าที่คิด" },
    { id:10, img:"assets/cards/card10.png", title:"รอยยิ้มสะกดใจ 😊", desc:"รอยยิ้มของคุณกำลังทำให้ใครบางคนละลาย รอยยิ้มหวาน ๆ" },
    { id:11, img:"assets/cards/card11.png", title:"คนแอบหวง 🫂", desc:"มีคนหวงคุณอยู่ แม้เขาจะไม่ยอมรับก็ตามชอบปากกึกมากจริง ๆ ทั้งคู่เลยหล่ะ ยอมแล้วลูก" },
    { id:12, img:"assets/cards/card12.png", title:"จังหวะที่ใช่ 🕰️", desc:"ความรักกำลังเดินมาในเวลาที่เหมาะสม การพบเจอกัน" },
    { id:13, img:"assets/cards/card13.png", title:"ผีเสื้อแห่งความสุข 🦋", desc:"ความรักกำลังนำพาความสดใสเข้ามาในชีวิตคุณ ไม่จำเป็นต้องมีสถานะก็มีความสุขได้ ไพ่ใบนี้หมายถึงการพบเจอโมเม้นเล็กๆ ที่ทำให้หัวใจเต้นแรง ไม่ว่าจะเป็นรอยยิ้ม คำทักทาย หรือการได้ใช้เวลากับคนพิเศษ" },
    { id:14, img:"assets/cards/card14.png", title:"หัวใจสดใส 🌈", desc:"ช่วงนี้หัวใจสดใส มีเรื่องให้ยิ้มบ่อยขึ้น ความใส่ใจ หรือโมเมนต์โรแมนติก" },
    { id:15, img:"assets/cards/card15.png", title:"รอเข้าหา 🌹", desc:"อีกฝ่ายกำลังรวบรวมความกล้าเพื่อเข้าหาคุณ" },
    { id:16, img:"assets/cards/card16.png", title:"เข้าใจผิด 😡💢", desc:"ระวังการคิดแทนอีกฝ่าย เพราะอาจจะให้พลาดความจริง อาจมีงอน มีเถียง หรือมีช่วงที่ไม่เข้าใจกันบ้าง" },
    { id:17, img:"assets/cards/card17.png", title:"ชื่นชมจากไกล 🔭", desc:"มีคนกำลังชื่นชมคุณอยู่ห่าง ๆ อย่างห่วง ๆ" },
    { id:18, img:"assets/cards/card18.png", title:"รักเติบโต 👬🏻", desc:"ความสัมพันธ์มีโอกาสเติบโตไปได้อีกมาก ถ้าทั้งสองคนคุยกันตรง ๆ และให้พื้นที่กันอย่างพอดี" },
    { id:19, img:"assets/cards/card19.png", title:"สายสืบหัวใจ 🔍", desc:"มีคนติดตามคุณทุกความเคลื่อนไหวเลยแต่ไม่รู้ว่าใครเหมือนกัน อิอิ" },
    { id:20, img:"assets/cards/card20.png", title:"เริ่มต้นใหม่ 🎉🔜", desc:"กำลังจะมีบทใหม่ของความรักเกิดขึ้น แต่เราจะเริ่มใหม่กับคนเดิมเพราะรักเขานี่น่า" },
    { id:21, img:"assets/cards/card21.png", title:"เปิดใจ 🔐❤️", desc:"หัวใจของคุณพร้อมจะรับความรักมากขึ้นแล้ว ได้โปรดเปย์ความรัก เปย์หัวใจมาได้เลย" },
    { id:22, img:"assets/cards/card22.png", title:"เซอร์ไพรส์ 🎁", desc:"มีเรื่องให้เซอร์ไพรส์เกี่ยวกับความรักรออยู่ หรือว่าจะเป็นเรื่องนั้นกันนะ 🤓💍" },
    { id:23, img:"assets/cards/card23.png", title:"คำอธิษฐาน 🌠", desc:"สิ่งที่คุณหวังเกี่ยวกับความรักกำลังค่อยๆ เดินทางเข้ามา แม้อาจจะยังไม่ถึงวันนี้ แต่ทุกอย่างกำลังเป็นไปในทิศทางที่ดี ไพ่ใบนี้เตือนว่าอย่าหมดหวัง เพราะบางครั้งเรื่องราวที่สวยงามที่สุดมักมาถึงช้ากว่าที่เราคาดไว้เล็กน้อย" },
    { id:24, img:"assets/cards/card24.png", title:"รักหวานละมุน 🍰", desc:"ความรักช่วงนี้หวานละมุนเหมือนเค้กสตอว์เบอรี่ หวาน 500% คิคิ" },
    { id:25, img:"assets/cards/card25.png", title:"ส่งใจถึงกัน 🐶💖🐰", desc:"แม้จะไม่ได้คุยกันตลอด แต่ความคิดถึง ความเป็นห่วงยังส่งถึงกันเสมอ" },
    { id:26, img:"assets/cards/card26.png", title:"ใบพิเศษ 🎊", desc:"ปลดล็อกความลับของหัวใจสำเร็จแล้ว การชอบใครสักคนหนึ่งจนได้มีคนนี้มาอยู่ข้าง ๆ มันดีที่สุดแล้ว " }
  ];
  
  const startScreen = document.getElementById("startScreen");
  const pickScreen = document.getElementById("pickScreen");
  const shuffleScreen = document.getElementById("shuffleScreen");
  const loadingScreen = document.getElementById("loadingScreen");
  const resultScreen = document.getElementById("resultScreen");
  const deckArea = document.getElementById("deckArea");
  const shuffleBtn = document.getElementById("shuffleBtn");
  const resetBtn = document.getElementById("resetBtn");
  const readBtn = document.getElementById("readBtn");
  const againBtn = document.getElementById("againBtn");
  const pickText = document.getElementById("pickText");
  const resultList = document.getElementById("resultList");
  
  let shuffledCards = [];
  let selectedCards = [];
  
  function showScreen(screen){
    [startScreen,shuffleScreen,pickScreen,loadingScreen,resultScreen].forEach(s=>s.classList.remove("active"));
    screen.classList.add("active");
  
    if(screen === resultScreen){
      document.body.classList.add("result-mode");
    }else{
      document.body.classList.remove("result-mode");
    }
  
    if(screen === loadingScreen){
      document.body.classList.add("loading-mode");
    }else{
      document.body.classList.remove("loading-mode");
    }
  }
  
  function shuffleCards(){
    return [...cards].sort(()=>Math.random()-0.5);
  }
  
  function getDeckScale(){
    const baseW = 920;
    const availableW = window.innerWidth * 0.54;
    // ขนาดตาม Figma: กองไพ่พอดี ไม่ใหญ่จนทับข้อความด้านล่าง
    return Math.max(0.56, Math.min(0.72, availableW / baseW));
  }
  
  function applySelectedPosition(btn, order){
    const s = Number(deckArea.dataset.scale || 1);
    const selectedMap = {
      1:{ x:320, y:12, r:0, z:1000 },
      2:{ x:80, y:115, r:-1, z:980 },
      3:{ x:560, y:115, r:1, z:980 }
    };
    const pos = selectedMap[order];
    btn.style.left = (pos.x * s) + "px";
    btn.style.top = (pos.y * s) + "px";
    btn.style.zIndex = String(pos.z);
    btn.style.transform = `rotate(${pos.r}deg) scale(1.05)`;
  }
  
  function spreadDeck(){
    deckArea.innerHTML = "";
    selectedCards = [];
    readBtn.classList.add("hidden");
    pickText.textContent = "เลือกไพ่ 3 ใบ";
    shuffledCards = shuffleCards();
  
    /* Responsive scale: ไม่ล็อกขนาดจอ ย่อแล้วไม่ทับหัวข้อ */
    const s = getDeckScale();
    deckArea.dataset.scale = String(s);
    deckArea.style.width = (920 * s) + "px";
    // 475 = y แถวล่าง 115 + ความสูงไพ่ 360 เพื่อให้กล่องครอบไพ่พอดี ไม่ให้ทับข้อความ
    deckArea.style.height = (475 * s) + "px";
    deckArea.style.setProperty("--card-w", (240 * s) + "px");
    deckArea.style.setProperty("--card-h", (360 * s) + "px");
  
    /* ตำแหน่งไพ่แบบ Figma: 26 ใบ แบ่ง 2 แถว ซ้อนทับเท่ากัน */
    const positions = [];
  
    const gap = 48;
    const startX = 56;
  
    // แถวบน 13 ใบ
    for(let i=0;i<13;i++){
      positions.push({
        x:startX + i*gap,
        y:30,
        r:-0.4 + i*0.06,
        z:10+i
      });
    }
  
    // แถวล่าง 13 ใบ
    for(let i=0;i<13;i++){
      positions.push({
        x:startX + i*gap,
        y:115,
        r:-0.35 + i*0.05,
        z:60+i
      });
    }
  
    shuffledCards.forEach((card, index)=>{
      const btn = document.createElement("button");
      btn.className = "tarot-card deal-in";
      btn.innerHTML = `<img src="assets/cards/back.png" alt="card back">`;
  
      const pos = positions[index];
  
      btn.style.left = (pos.x * s) + "px";
      btn.style.top = (pos.y * s) + "px";
      btn.style.zIndex = String(pos.z);
      btn.style.setProperty("--rot", `${pos.r}deg`);
      btn.style.setProperty("--delay", `${index * 14}ms`);
      btn.style.transform = `rotate(${pos.r}deg)`;
  
      btn.addEventListener("click",()=>selectCard(btn, card));
      deckArea.appendChild(btn);
    });
  }
  function selectCard(btn, card){
    if(btn.classList.contains("selected")) return;
    if(selectedCards.length >= 3) return;
  
    selectedCards.push(card);
    const order = selectedCards.length;
    btn.classList.add("selected", `selected-${order}`);
    applySelectedPosition(btn, order);
  
    pickText.textContent = selectedCards.length < 3 ? `เลือกแล้ว ${selectedCards.length}/3` : "เลือกไพ่ครบแล้ว";
  
    if(selectedCards.length === 3){
      readBtn.classList.remove("hidden");
    }
  }
  
  function showLoading(){
    showScreen(loadingScreen);
    setTimeout(showResult, 1300);
  }
  
  
  function getAdvice(id){
    const advice = {
      1:"🎁 ภารกิจ : ส่งสติ๊กเกอร์น่ารักให้คนที่คิดถึง",
      2:"🎁 ภารกิจ : ลงรูปเซลฟี่ 1 รูปหรือ 10 รูปก็ได้ค้าบ",
      3:"🎁 ภารกิจ : อดส่องแอคเขา 1 วันแต่ส่องอีกก็ได้อิอิ",
      4:"🎁 ภารกิจ : ถามกันอะยางน้าเป็นไงบ้างวันนี้",
      5:"🎁 ภารกิจ : ยิ้มให้แฟนรักแฟนหลงสัก 3 ที",
      6:"🎁 ภารกิจ : ส่ง 💖 ในแฟนสักดวง",
      7:"🎁 ภารกิจ : อันไหนดีแล้วก็ทำต่อไปนะลูก",
      8:"🎁 ภารกิจ : อย่าคิดมากเลย ถ้ามีเรื่องมาก็อย่าคิดมาก",
      9:"🎁 ภารกิจ : ยิ้มให้ตัวเองว่าวันนี้เก่งมากแล้ว",
      10:"🎁 ภารกิจ : ถ่ายรูปรอยยิ้มกันไว้น้าตอนยิ้มมันดีกว่าตอนไม่มี",
      11:"🎁 ภารกิจ : ลองลองลงสตอรี่ดูหรือลงทวิตดูจิใครจะกดใจให้คนแรกน้า",
      12:"🎁 ภารกิจ : ลองฟังเพลงรักให้กันสัก 1 เพลง",
      13:"🎁 ภารกิจ : อะไรที่น่ารัก ๆ ส่งให้แฟนได้นะจะได้เติมหวาน อิอิ",
      14:"🎁 ภารกิจ : 3 สิ่งที่ทำให้มีความสุข",
      15:"🎁 ภารกิจ : อาจจะต้องตอบแชทให้เร็วกว่าปกติอิอิ",
      16:"🎁 ภารกิจ : ถามตรง ๆ เลยน้าจะได้ไม่คาดเดาผิด ปุปุนะคับ",
      17:"🎁 ภารกิจ : ใครกันนะที่ชื่นชมหรือจะใกล้ตัวแกล้ง ๆ ถามก็ได้ คิคิ",
      18:"🎁 ภารกิจ : อาจจะต้องคุยเรื่องอนาคตกันนะ 🤓",
      19:"🎁 ภารกิจ : ลงรูปหรือถ่ายรูป 1 รูป",
      20:"🎁 ภารกิจ : เปิดรับสิ่งใหม่ๆ แต่เป็นคนเดิมคนนี้ เพราะรักเขา",
      21:"🎁 ภารกิจ : บอกรักให้ชื่นใจกันเลย",
      22:"🎁 ภารกิจ : เปิดเพลงที่สุ่มได้เพลงแรก เพลงรักนะ55555",
      23:"🎁 ภารกิจ : อธิฐานความรัก 1 ข้อแต่เก็บไว้เป็นความลับนะ 🤔",
      24:"🎁 ภารกิจ : กินของหวานที่ชอบหรืออาจพเป็นคนข้าง ๆ กันนะ",
      25:"🎁 ภารกิจ : คิดถึงแฟน 5 นาทีพอ หรือจะคิดถึงทั้งวันก็ได้เข้าใจอยู่",
      26:"🎁 ภารกิจ : ดดวงมากี่ที่กี่หนสุดท้ายก็รักเธออยู่ดี"
    };
    return advice[id] || "🎁 : ShankSlow Forever";
  }
  
  function showResult(){
    resultList.innerHTML = "";
  
    selectedCards.forEach(card=>{
      const item = document.createElement("div");
      item.className = "result-item";
      item.innerHTML = `
        <img class="result-card-img" src="${card.img}" alt="${card.title}">
        <div class="result-content">
          <div class="result-title">${String(card.id).padStart(2,"0")} ${card.title}</div>
          <div class="result-desc">${card.desc}</div>
          <div class="result-foot">${getAdvice(card.id)}</div>
        </div>
      `;
      resultList.appendChild(item);
    });
  
    showScreen(resultScreen);
  }
  
  shuffleBtn.addEventListener("click",()=>{
    shuffleBtn.classList.add("is-clicked");
    showScreen(shuffleScreen);
  
    setTimeout(()=>{
      spreadDeck();
      showScreen(pickScreen);
      shuffleBtn.classList.remove("is-clicked");
    }, 1150);
  });
  
  resetBtn.addEventListener("click",()=>{
    resetBtn.classList.add("is-clicked");
    showScreen(shuffleScreen);
    setTimeout(()=>{
      spreadDeck();
      showScreen(pickScreen);
      resetBtn.classList.remove("is-clicked");
    }, 1050);
  });
  readBtn.addEventListener("click",showLoading);
  againBtn.addEventListener("click",()=>{
    showScreen(startScreen);
  });
  
  
  let resizeTimer;
  window.addEventListener("resize",()=>{
    if(!pickScreen.classList.contains("active")) return;
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(()=>{
      spreadDeck();
      // resize แล้วให้เริ่มเลือกใหม่ เพื่อไม่ให้ตำแหน่งเพี้ยน
      selectedCards = [];
      pickText.textContent = "เลือกไพ่ 3 ใบ";
      readBtn.classList.add("hidden");
    },120);
  });
 