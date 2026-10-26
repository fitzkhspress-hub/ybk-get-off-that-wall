(function () {
  "use strict";

  var TITLE = "Get Off That Wall: Interview Portraits & Posing";
  var STORE = "yb-portraits-activity-v1";

  // Each question: tip from the guides, a newsroom scenario, choices with feedback.
  var QUESTIONS = [
    {
      tag: "IP · Who takes it",
      tip: "Every interview gets a photo. The spread team decides who takes it: the interviewer or the photographer. That photo runs next to the person's quote.",
      scenario: "You just finished interviewing a junior for your spread. Your photographer is shooting a game across campus.",
      q: "Who decides whether you shoot the portrait or the photographer does?",
      choices: [
        { t: "Always the interviewer, because you're already with the subject.", fb: "Being there is convenient, but it isn't automatic. The guide says the spread team makes this call." },
        { t: "The spread team.", fb: "" },
        { t: "Only the photographer. Interviewers don't take portraits.", fb: "Interviewers can take the portrait. The guide says it can be the interviewer or the photographer." },
        { t: "The subject picks who they want.", fb: "The subject doesn't make this call. Check the first line of the Interview Portrait Guide." }
      ],
      answer: 1,
      explain: "The spread team decides who takes it: the interviewer or the photographer. Either way, every interview gets a photo."
    },
    {
      tag: "IP · Wall vs. world",
      tip: "A person standing flat against a wall looks like a school ID. Show the reader who this person is. Ask yourself: Where does this person belong? Take them there.",
      scenario: "Maya plays trumpet. Your first shot: she stands flat against the hallway wall, body straight on, arms hanging down, fake smile.",
      q: "Which reshoot turns this into a world shot?",
      choices: [
        { t: "Same wall, but ask her to smile bigger.", fb: "A bigger fake smile is still a wall shot. The problem is the place, the pose and the expression." },
        { t: "Zoom in to a headshot so the wall doesn't show.", fb: "Hiding the wall doesn't show who Maya is. Ask where she belongs and take her there." },
        { t: "In the band hall, sitting backward on a chair, arms on the chair back, trumpet in hand, laughing at your question.", fb: "" },
        { t: "Have her step one small step away from the wall and keep shooting.", fb: "Closer, but still in the hallway with no story. Take her where she belongs." }
      ],
      answer: 2,
      explain: "That's the guide's strong world shot: the right place, body turned, hands with a job and a real laugh."
    },
    {
      tag: "IP · Step 1: Pick the place",
      tip: "Go where they belong: gym, art room, band hall, library. Move them 3 big steps off the wall.",
      scenario: "Your subject is a library aide. The library is packed, so you'll shoot by the shelves near the wall.",
      q: "How far should you move them off the wall?",
      choices: [
        { t: "3 big steps.", fb: "" },
        { t: "One step is enough.", fb: "Not quite. The guide gives a specific distance, and it's more than one step." },
        { t: "No need to move. Leaning on the wall looks casual.", fb: "Leaning flat on a wall reads like a school ID. The guide says to move them off it." },
        { t: "As far as possible, even if that means leaving the library.", fb: "The library is where they belong, so stay there. You just need distance from the wall." }
      ],
      answer: 0,
      explain: "Move them 3 big steps off the wall, in a place that shows who they are."
    },
    {
      tag: "IP · Step 2: Check the light",
      tip: "Turn their face toward a window or open door. No bright window behind them. Zoom in on your screen: are the eyes lit?",
      scenario: "Jordan sits in front of a big, bright window. On your screen, his face is dark.",
      q: "What's the best fix?",
      choices: [
        { t: "Keep him there and brighten the photo later.", fb: "Fix it while you're shooting. The guide's quick fix is about where the person sits." },
        { t: "Walk around so you're shooting from a different spot, but leave Jordan where he is.", fb: "The quick fix says: move the person, not you." },
        { t: "Move Jordan so his face turns toward the window, then zoom in to check that his eyes are lit.", fb: "" },
        { t: "Ask him to look down so the glare isn't in his eyes.", fb: "Looking down hides his face. Turn his face toward the light instead." }
      ],
      answer: 2,
      explain: "Move the person, not you. Face them toward the light, then zoom in on your screen to make sure the eyes are lit."
    },
    {
      tag: "IP · Step 3: Pose the body",
      tip: "Turn the body to the side. Bring the face back to you. Weight on the back foot. Give the hands a job.",
      scenario: "Your subject stands square to the camera with weight on both feet. They look stiff.",
      q: "Which direction fixes both problems?",
      choices: [
        { t: "“Face me straight on and stand up really tall.”", fb: "Straight on is the problem. The body should turn to the side." },
        { t: "“Turn your shoulders to the side, then look back at me. Put your weight on your back foot.”", fb: "" },
        { t: "“Put your weight on both feet evenly so you're balanced.”", fb: "Weight on both feet is what makes them look stiff." },
        { t: "“Turn all the way to the side and look away from me.”", fb: "Turn the body, yes, but bring the face back to the camera." }
      ],
      answer: 1,
      explain: "Body turned to the side, face back to you, weight on the back foot. Bend the front knee a little."
    },
    {
      tag: "IP · Quick fixes",
      tip: "Arms hang down? Give the hands a job: pocket, prop, chair back, fix a sleeve.",
      scenario: "Your subject's pose looks good, but their arms are hanging straight down at their sides.",
      q: "What should you say?",
      choices: [
        { t: "“Just let your arms relax.”", fb: "Relaxed, hanging arms are the problem. Give them something to do." },
        { t: "“Cross your arms tight and don't move.”", fb: "That makes people look closed off and stiff. The guide's list is pocket, prop, chair back or fixing a sleeve." },
        { t: "“Can you hold your sketchbook like you're using it?”", fb: "" },
        { t: "Crop at the elbows so the arms don't show.", fb: "Never crop at a joint, and elbows are a joint. Fix the hands instead." }
      ],
      answer: 2,
      explain: "Give the hands a job. Holding their gear “like you're using it” is straight from the Say It script."
    },
    {
      tag: "IP · Step 4: Get them talking",
      tip: "Nervous subject? Start with a silly pose. Show them a good shot.",
      scenario: "Ethan Vu (9) plays trumpet. He's shy and nervous about photos and keeps looking at the floor.",
      q: "What should you do first?",
      choices: [
        { t: "Tell him to hold still and get it over with quickly.", fb: "Rushing makes nervous people stiffer. The guide gives two moves that help them relax." },
        { t: "Start with a silly pose, then show him a good shot on your screen.", fb: "" },
        { t: "Skip the portrait. Shy people don't need one.", fb: "Every interview gets a photo. Help him relax instead." },
        { t: "Shoot only from far away so he doesn't notice.", fb: "That avoids the problem instead of fixing it. Help him relax first." }
      ],
      answer: 1,
      explain: "A silly pose first helps nervous people relax. Showing a good shot builds confidence. Then try Band Practice: hold the instrument and sit up tall."
    },
    {
      tag: "IP · Quick fixes",
      tip: "Fake smile? Ask a question. Shoot when they laugh.",
      scenario: "Your subject gives you the same stiff “say cheese” smile in every frame.",
      q: "What gets a real expression?",
      choices: [
        { t: "Count down from three so they know when to smile.", fb: "A countdown usually gets the same posed smile. The fix is a conversation." },
        { t: "Tell them to stop smiling.", fb: "You want a real expression, not no expression. Ask them something." },
        { t: "Shoot more frames until one looks natural.", fb: "More of the same fake smile won't help. Change what's happening in front of the camera." },
        { t: "“Tell me about your best day on the team.” Then shoot while they talk and laugh.", fb: "" }
      ],
      answer: 3,
      explain: "Ask a fun question and shoot while they answer and laugh. That's the Relax Them line: “Tell me about ___.”"
    },
    {
      tag: "IP · Match the pose to the person",
      tip: "ATHLETE: Gym Ready. Sit on the bleachers. Elbows on knees. Hold the ball or gear naturally.",
      scenario: "Sofia Ramirez (12) is the volleyball captain. You interview her after a home match.",
      q: "Which place and pose fit her best?",
      choices: [
        { t: "Gym, Gym Ready: on the bleachers, elbows on knees, holding the volleyball.", fb: "" },
        { t: "Library, Library Lean: on a bookshelf, book at chest level.", fb: "Library Lean is for readers and clubs. Where does Sofia belong?" },
        { t: "Hallway wall, Natural Stance.", fb: "A hallway wall is where you start a wall shot. Take her where she belongs." },
        { t: "Classroom, Teacher at Desk: hands folded on the desk.", fb: "Teacher at Desk is for teachers and staff." }
      ],
      answer: 0,
      explain: "Gym Ready is for athletes. She belongs in the gym, and the ball gives her hands a job. (Bleacher Thinker, for athletes and captains, also works.)"
    },
    {
      tag: "PG · Match the mood",
      tip: "How should the reader see this person? Thoughtful: Side Seat · Window Watcher · Bleacher Thinker.",
      scenario: "Your feature is about a student poet. The editor wants readers to see her as thoughtful.",
      q: "Which pose fits?",
      choices: [
        { t: "Jump: “On three, jump as high as you can.”", fb: "Jump shows joy and energy, not thoughtful." },
        { t: "Power Stance: “Hands on your hips. Stand tall.”", fb: "Power Stance reads as strong and confident." },
        { t: "Window Watcher: sit by the window and look outside.", fb: "" },
        { t: "Peer Chat: turn toward a friend and talk for real.", fb: "Peer Chat is on the Friendly list and is for friends and pairs." }
      ],
      answer: 2,
      explain: "Window Watcher is on the Thoughtful list and is meant for writers and creatives. Bonus: a window helps light her face."
    },
    {
      tag: "PG · Make your own",
      tip: "Ask: “Where do you spend the most time?” Take them there. Give them their gear. Then pick a pose from this guide.",
      scenario: "Your subject runs the school's garden club. No school pose in the guide matches the garden club.",
      q: "What's your first move?",
      choices: [
        { t: "Use the hallway wall, since no pose fits.", fb: "No exact match doesn't mean back to the wall. The guide shows how to make your own." },
        { t: "Ask, “Where do you spend the most time?”", fb: "" },
        { t: "Pick the closest pose name and shoot it in the classroom.", fb: "Place comes first. Find out where they spend their time." },
        { t: "Have them do an Action Pose wherever you are.", fb: "Picking a pose is the last step, not the first." }
      ],
      answer: 1,
      explain: "Ask where they spend the most time, take them there (the garden), give them their gear, then pick a pose from the guide."
    },
    {
      tag: "PG · Chair safety",
      tip: "Keep all four chair legs on the floor. No tipping back. Sit backward only on a sturdy chair with no wheels.",
      scenario: "You want a Reverse Chair pose. The only chair in the room is a rolling office chair.",
      q: "What should you do?",
      choices: [
        { t: "Use it. Just hold it still while they sit backward.", fb: "Holding it doesn't make it safe. Wheeled chairs aren't allowed for sitting backward." },
        { t: "Have them tip back on two legs for a casual look.", fb: "No tipping back. All four chair legs stay on the floor." },
        { t: "Skip sitting backward on it. Use a sturdy chair with no wheels, or pick a pose that doesn't need one.", fb: "" },
        { t: "Have them stand on the chair for a higher angle.", fb: "That isn't a pose in the guide, and it's unsafe." }
      ],
      answer: 2,
      explain: "Sit backward only on a sturdy chair with no wheels. A Perched Edge or a standing pose works too."
    },
    {
      tag: "IP · Pick the crop",
      tip: "Headshot: quote modules and photo idents. Waist up (start here): most interview portraits. Three-quarters: showing a prop, uniform or instrument. Full length: cutouts, walking and jump shots. Environmental: profiles and features.",
      scenario: "Leo Kim (11) is on the robotics team. He's holding the robot's control board that he built.",
      q: "Which crop is made for showing what he's holding?",
      choices: [
        { t: "Headshot: top of the head to the shoulders.", fb: "A headshot cuts out the control board. Headshots are for quote modules and photo idents." },
        { t: "Full length: head to feet.", fb: "Full length is for cutouts, walking and jump shots. The board would be small in the frame." },
        { t: "Waist up: head to the belt.", fb: "Waist up is where you start for most portraits, but one crop is specifically for props." },
        { t: "Three-quarters: head to just above the knees.", fb: "" }
      ],
      answer: 3,
      explain: "Three-quarters is for showing a prop, uniform or instrument. Shooting him in the robotics lab would make it environmental too."
    },
    {
      tag: "IP · Never crop at a joint",
      tip: "Never crop at a joint: neck, elbows, wrists, knees or ankles. Crop between joints.",
      scenario: "You're cropping a portrait for the spread and deciding where the bottom edge falls.",
      q: "Which crop line is OK?",
      choices: [
        { t: "Right at the knees.", fb: "Knees are a joint. Move the line above or below them." },
        { t: "Partway up the thigh, between the hip and the knee.", fb: "" },
        { t: "Right at the wrists.", fb: "Wrists are a joint. Crop between joints." },
        { t: "Right at the elbows.", fb: "Elbows are a joint. Crop between joints." }
      ],
      answer: 1,
      explain: "Between joints is safe. Neck, elbows, wrists, knees and ankles are off limits."
    },
    {
      tag: "IP · Step 5: Frame and shoot",
      tip: "Shoot vertical and horizontal. Shoot them looking left and right, so they can face the gutter. Full length? Don't cut off the feet.",
      scenario: "The full-length photo of Kai cuts off at his ankles. You only shot horizontal photos.",
      q: "What should you do on the reshoot?",
      choices: [
        { t: "Shoot full length with space under his feet, vertical and horizontal, with Kai looking left and right.", fb: "" },
        { t: "Crop it tighter at the knees so the feet don't matter.", fb: "Knees are a joint too, and the designer still has only horizontal shots." },
        { t: "Shoot more horizontal photos, just wider.", fb: "That fixes the feet but still leaves out vertical shots and left/right looks." },
        { t: "Shoot vertical only, since the horizontals didn't work.", fb: "The guide says vertical and horizontal, not one or the other." }
      ],
      answer: 0,
      explain: "Space under the feet fixes the ankle crop. Shooting both orientations and both directions lets the designer face him toward the gutter."
    },
    {
      tag: "IP · Step 6: Get the name",
      tip: "First and last name and grade. Ask them to spell it. Check it in Skyward later.",
      scenario: "You finish the shoot. The subject says, “I'm Kai,” and starts walking away.",
      q: "What do you need before they leave?",
      choices: [
        { t: "Nothing. “Kai” is enough for the caption.", fb: "The guide needs first and last name and grade." },
        { t: "Their first and last name and grade, spelled out. Then check it in Skyward later.", fb: "" },
        { t: "Their last name only. You'll guess the spelling from the roster.", fb: "Don't guess. Ask them to spell it, and check it in Skyward later." },
        { t: "Their grade. You'll ask a friend for the rest.", fb: "Get it from the subject directly: full name and grade, spelled out." }
      ],
      answer: 1,
      explain: "“Thank you! How do you spell your first and last name?” Get the grade too, then check it in Skyward later."
    },
    {
      tag: "IP · Check before you upload",
      tip: "Portraits count toward the 6 photos on the spread. Upload them with the spread's other photos before the photo deadline.",
      scenario: "You've passed the upload checklist for your interview portrait.",
      q: "Which statement about uploading it is correct?",
      choices: [
        { t: "Portraits don't count toward the spread's photos, so upload them whenever.", fb: "They do count. Portraits count toward the 6 photos on the spread." },
        { t: "Upload portraits after the photo deadline, once the other photos are placed.", fb: "Portraits go in before the photo deadline, not after." },
        { t: "Portraits count toward the 6 photos on the spread. Upload them with the spread's other photos before the photo deadline.", fb: "" },
        { t: "Send portraits only to the interviewer, not with the spread's photos.", fb: "Upload them with the spread's other photos." }
      ],
      answer: 2,
      explain: "Portraits count toward the spread's 6 photos and go up with the rest before the photo deadline."
    }
  ];

  var N = QUESTIONS.length;
  var CRITERIA = "Answered all " + N + " portrait and posing scenarios correctly";

  var app = document.getElementById("app");
  var resetBtn = document.getElementById("resetBtn");
  var progressWrap = document.getElementById("progressWrap");
  var progressLabel = document.getElementById("progressLabel");
  var progressBar = document.getElementById("progressBar");
  var progressFill = document.getElementById("progressFill");
  var confirmBox = document.getElementById("confirm");

  // page: -1 = intro, 0..N-1 = questions, N = certificate
  var state = load();
  var certUrl = null;
  var lastFocus = null;

  function fresh() { return { page: -1, solved: {}, name: "", completedOn: "" }; }

  function load() {
    try {
      var s = JSON.parse(localStorage.getItem(STORE));
      if (s && typeof s.page === "number" && s.solved) return s;
    } catch (e) {}
    return fresh();
  }
  function save() {
    try { localStorage.setItem(STORE, JSON.stringify(state)); } catch (e) {}
  }
  function solvedCount() {
    var c = 0;
    for (var i = 0; i < N; i++) if (state.solved[i]) c++;
    return c;
  }
  function firstUnsolved() {
    for (var i = 0; i < N; i++) if (!state.solved[i]) return i;
    return N;
  }
  // Never allow a page past the first unsolved question.
  function clampPage() {
    if (state.page > firstUnsolved()) state.page = firstUnsolved();
    if (state.page < -1) state.page = -1;
  }

  function el(tag, attrs, kids) {
    var e = document.createElement(tag);
    if (attrs) for (var k in attrs) {
      if (k === "text") e.textContent = attrs[k];
      else if (k === "class") e.className = attrs[k];
      else if (k.indexOf("on") === 0) e.addEventListener(k.slice(2), attrs[k]);
      else e.setAttribute(k, attrs[k]);
    }
    (kids || []).forEach(function (c) { if (c) e.appendChild(typeof c === "string" ? document.createTextNode(c) : c); });
    return e;
  }

  function go(page) {
    state.page = page;
    clampPage();
    save();
    render(true);
  }

  function render(moveFocus) {
    clampPage();
    app.innerHTML = "";
    var started = state.page >= 0;
    resetBtn.hidden = !started;
    progressWrap.hidden = !started;
    if (started) {
      var done = solvedCount();
      progressLabel.textContent = state.page < N
        ? "Question " + (state.page + 1) + " of " + N
        : "Complete: " + N + " of " + N;
      progressBar.setAttribute("aria-valuemax", N);
      progressBar.setAttribute("aria-valuenow", done);
      progressFill.style.width = (done / N * 100) + "%";
    }
    if (state.page === -1) renderIntro();
    else if (state.page < N) renderQuestion(state.page);
    else renderCert();
    if (moveFocus) {
      var h = app.querySelector("h1, h2");
      if (h) { h.setAttribute("tabindex", "-1"); h.focus(); }
    }
  }

  function renderIntro() {
    var resume = solvedCount() > 0;
    app.appendChild(el("h1", { text: "Get Off That Wall" }));
    app.appendChild(el("p", { text: "Every interview gets a photo, and that photo runs next to the person's quote. In this activity you'll make the calls a portrait shooter makes on assignment: where to go, how to light, pose and crop, and what to collect before you upload." }));
    app.appendChild(el("ul", null, [
      el("li", { text: N + " scenarios based on the Interview Portrait Guide (IP) and the Pose Guide (PG)." }),
      el("li", { text: "Answer each one correctly to continue. You can retry as many times as you need." }),
      el("li", { text: "Finish all " + N + " to unlock your completion certificate." }),
      el("li", { text: "Your progress saves in this browser only." })
    ]));
    app.appendChild(el("div", { class: "nav" }, [
      el("span"),
      el("button", { type: "button", class: "btn big", text: resume ? "Resume" : "Start", onclick: function () { go(resume ? firstUnsolved() : 0); } })
    ]));
  }

  function renderQuestion(i) {
    var Q = QUESTIONS[i];
    var solved = !!state.solved[i];
    app.appendChild(el("div", { class: "tip" }, [
      el("span", { class: "tag", text: Q.tag }),
      el("p", { text: Q.tip })
    ]));
    app.appendChild(el("h2", { text: "Scenario " + (i + 1) }));
    app.appendChild(el("p", { class: "scenario", text: Q.scenario }));
    app.appendChild(el("p", { class: "question", id: "q" + i, text: Q.q }));

    var list = el("ul", { class: "choices", role: "list", "aria-labelledby": "q" + i });
    var fb = el("div", { class: "feedback", role: "status", "aria-live": "polite" });
    var next = el("button", { type: "button", class: "btn", text: i === N - 1 ? "Finish" : "Continue", onclick: function () { if (state.solved[i]) go(i + 1); } });
    var buttons = [];

    Q.choices.forEach(function (c, j) {
      var b = el("button", { type: "button", class: "choice" }, [
        el("span", { class: "letter", "aria-hidden": "true", text: "ABCD"[j] }),
        el("span", { text: c.t })
      ]);
      b.addEventListener("click", function () { pick(j); });
      buttons.push(b);
      list.appendChild(el("li", null, [b]));
    });

    function showCorrect() {
      buttons.forEach(function (b, j) {
        b.disabled = true;
        b.classList.toggle("right", j === Q.answer);
        b.classList.remove("wrong");
        if (j === Q.answer) b.setAttribute("aria-label", "Correct answer: " + Q.choices[j].t);
      });
      fb.className = "feedback good";
      fb.innerHTML = "";
      fb.appendChild(el("strong", { text: "Correct." }));
      fb.appendChild(document.createTextNode(Q.explain));
      next.disabled = false;
    }

    function pick(j) {
      if (j === Q.answer) {
        state.solved[i] = true;
        save();
        showCorrect();
        render(false);
        var n = app.querySelector(".nav .btn:last-child");
        if (n) n.focus();
        return;
      }
      buttons[j].classList.add("wrong");
      buttons[j].disabled = true;
      fb.className = "feedback bad";
      fb.innerHTML = "";
      fb.appendChild(el("strong", { text: "Not quite. Try again." }));
      fb.appendChild(document.createTextNode(Q.choices[j].fb));
    }

    app.appendChild(list);
    app.appendChild(fb);
    next.disabled = !solved;
    app.appendChild(el("div", { class: "nav" }, [
      el("button", { type: "button", class: "btn ghost", text: "Back", onclick: function () { go(i - 1); } }),
      next
    ]));
    if (solved) showCorrect();
  }

  function renderCert() {
    if (!state.completedOn) { state.completedOn = new Date().toISOString(); save(); }
    app.appendChild(el("h1", { text: "You finished!" }));
    app.appendChild(el("p", { text: "You got all " + N + " scenarios right. Enter your name to create your certificate." }));

    var input = el("input", { type: "text", id: "studentName", maxlength: "80", autocomplete: "name", value: state.name });
    var hint = el("p", { class: "hint", id: "nameHint", text: "Use the name your teacher knows you by. It stays in this browser." });
    input.setAttribute("aria-describedby", "nameHint");
    var area = el("div", { "aria-live": "polite" });

    app.appendChild(el("label", { for: "studentName", text: "Your name" }));
    app.appendChild(input);
    app.appendChild(hint);
    var makeBtn = el("button", { type: "button", class: "btn", text: "Create certificate" });
    app.appendChild(el("div", { class: "row", style: "margin-top:12px" }, [makeBtn]));
    app.appendChild(area);
    app.appendChild(el("div", { class: "nav" }, [
      el("button", { type: "button", class: "btn ghost", text: "Back", onclick: function () { go(N - 1); } }),
      el("span")
    ]));

    function clearCert() {
      if (certUrl) { URL.revokeObjectURL(certUrl); certUrl = null; }
      area.innerHTML = "";
    }
    function build(announce) {
      var name = input.value.trim().replace(/\s+/g, " ");
      clearCert();
      if (!name) {
        area.appendChild(el("p", { class: "feedback bad", text: "Type your name first." }));
        return;
      }
      state.name = name; save();
      makeCertificate(name, new Date(state.completedOn), function (blob) {
        if (!blob) { area.appendChild(el("p", { class: "feedback bad", text: "Your browser couldn't create the image. Try another browser." })); return; }
        certUrl = URL.createObjectURL(blob);
        var file = "certificate-" + name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") + ".png";
        area.appendChild(el("div", { class: "cert-preview" }, [el("img", { src: certUrl, alt: "Completion certificate for " + name })]));
        area.appendChild(el("div", { class: "row" }, [
          el("a", { class: "btn", href: certUrl, download: file, id: "downloadBtn", text: "Download certificate (PNG)" }),
          el("a", { class: "save-link", href: certUrl, download: file, text: "Save image" })
        ]));
        if (announce) { var d = document.getElementById("downloadBtn"); if (d) d.focus(); }
      });
    }
    makeBtn.addEventListener("click", function () { build(true); });
    input.addEventListener("keydown", function (e) { if (e.key === "Enter") build(true); });
    // Any name change makes the old certificate outdated.
    input.addEventListener("input", function () {
      clearCert();
      state.name = input.value; save();
    });
    if (state.name.trim()) build(false);
  }

  function makeCertificate(name, date, cb) {
    var W = 1600, H = 1130;
    var c = document.createElement("canvas");
    c.width = W; c.height = H;
    var x = c.getContext("2d");
    var font = 'system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif';

    x.fillStyle = "#f5f2ec"; x.fillRect(0, 0, W, H);
    x.fillStyle = "#ffffff"; x.fillRect(50, 50, W - 100, H - 100);
    x.strokeStyle = "#0b5f5a"; x.lineWidth = 10; x.strokeRect(50, 50, W - 100, H - 100);
    x.lineWidth = 2; x.strokeRect(78, 78, W - 156, H - 156);
    x.fillStyle = "#0b5f5a"; x.fillRect(78, 78, W - 156, 18);

    x.textAlign = "center"; x.textBaseline = "alphabetic";
    x.fillStyle = "#4d5866";
    x.font = "600 30px " + font;
    x.fillText("2027 YEARBOOK · IN THE SPOTLIGHT", W / 2, 200);

    x.fillStyle = "#1b2430";
    x.font = "800 76px " + font;
    x.fillText("Certificate of Completion", W / 2, 300);

    x.fillStyle = "#4d5866";
    x.font = "400 34px " + font;
    x.fillText("This certifies that", W / 2, 400);

    // Shrink the name until it fits.
    var size = 96, maxW = W - 300;
    do { x.font = "800 " + size + "px " + font; size -= 2; } while (x.measureText(name).width > maxW && size > 28);
    x.fillStyle = "#0b5f5a";
    x.fillText(name, W / 2, 530);
    x.strokeStyle = "#d9d3c7"; x.lineWidth = 3;
    x.beginPath(); x.moveTo(300, 565); x.lineTo(W - 300, 565); x.stroke();

    x.fillStyle = "#4d5866";
    x.font = "400 34px " + font;
    x.fillText("has completed", W / 2, 640);
    x.fillStyle = "#1b2430";
    var ts = 52;
    do { x.font = "700 " + ts + "px " + font; ts -= 2; } while (x.measureText(TITLE).width > maxW && ts > 24);
    x.fillText(TITLE, W / 2, 715);

    x.fillStyle = "#4d5866";
    x.font = "400 30px " + font;
    x.fillText(CRITERIA + ".", W / 2, 790);

    var ds = date.toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
    x.fillStyle = "#1b2430";
    x.font = "600 32px " + font;
    x.fillText("Completed " + ds, W / 2, 900);

    x.fillStyle = "#4d5866";
    x.font = "400 24px " + font;
    x.fillText("Based on the Interview Portrait Guide (IP) and Pose Guide (PG)", W / 2, 990);

    if (c.toBlob) c.toBlob(cb, "image/png");
    else cb(null);
  }

  // Start over with in-page confirmation.
  function openConfirm() {
    lastFocus = document.activeElement;
    confirmBox.hidden = false;
    document.getElementById("confirmNo").focus();
  }
  function closeConfirm() {
    confirmBox.hidden = true;
    if (lastFocus && document.body.contains(lastFocus)) lastFocus.focus();
  }
  resetBtn.addEventListener("click", openConfirm);
  document.getElementById("confirmNo").addEventListener("click", closeConfirm);
  document.getElementById("confirmYes").addEventListener("click", function () {
    if (certUrl) { URL.revokeObjectURL(certUrl); certUrl = null; }
    try { localStorage.removeItem(STORE); } catch (e) {}
    state = fresh();
    confirmBox.hidden = true;
    render(true);
  });
  confirmBox.addEventListener("keydown", function (e) {
    if (e.key === "Escape") { closeConfirm(); return; }
    if (e.key === "Tab") {
      var f = confirmBox.querySelectorAll("button");
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  render(false);
})();
