const config = {
  bookingUrl: "mailto:thildebrand@melbournesportsscience.com.au?subject=MSS%20Coaching%20Plan",,
  bookingLabel: "Claim My Plan",
  prices: {
    coachingWeekly: 50,
    nutritionWeekly: 15,
    inPersonSession: 85,
    programOnly: 120,
    teamLow: 25000,
    teamHigh: 40000
  }
};

const questions = [
  {
    title: "Who is this plan for?",
    key: "prospectType",
    type: "single",
    options: [
      {
        label: "Me",
        detail: "I want coaching or a training plan for myself.",
        signals: { online: 2, strength: 1 }
      },
      {
        label: "My child",
        detail: "They play sport or need more structure with training.",
        signals: { online: 2, hybrid: 1, strength: 1 }
      },
      {
        label: "A team or club",
        detail: "We want a better system across a squad.",
        signals: { team: 10 },
        route: "team"
      },
      {
        label: "I am a coach or decision-maker",
        detail: "I am looking at support for players or a program.",
        signals: { team: 10 },
        route: "team"
      }
    ]
  },
  {
    title: "What are your main goals?",
    key: "goals",
    type: "multi",
    helper: "Select everything that matters.",
    options: [
      {
        label: "Improve sport performance",
        detail: "Get stronger, fitter, faster, or better prepared for sport.",
        signals: { performance: 4, strength: 2, conditioning: 2, online: 2 }
      },
      {
        label: "Get stronger or build muscle",
        detail: "Follow a progressive strength plan instead of random sessions.",
        signals: { strength: 5, online: 2 }
      },
      {
        label: "Improve running or conditioning",
        detail: "Build fitness with a clear running or conditioning structure.",
        signals: { running: 5, conditioning: 4, online: 2 }
      },
      {
        label: "Lose weight or reduce body fat",
        detail: "Combine training structure with simple nutrition habits.",
        signals: { fatLoss: 6, nutrition: 4, accountability: 2, online: 2 }
      },
      {
        label: "Get consistent again",
        detail: "Make training easier to follow week to week.",
        signals: { accountability: 5, online: 3 }
      },
      {
        label: "Reduce injury risk or stay available",
        detail: "Improve physical preparation and build a more resilient routine.",
        signals: { performance: 2, strength: 3, hybrid: 2, online: 2 }
      }
    ]
  },
  {
    title: "What is stopping progress right now?",
    key: "bottlenecks",
    type: "multi",
    helper: "Pick all that feel true.",
    options: [
      {
        label: "I do not know what to do",
        detail: "You need a clear plan and less guesswork.",
        signals: { program: 3, online: 3, strength: 1 }
      },
      {
        label: "I struggle to stay consistent",
        detail: "You need accountability and a plan that fits your week.",
        signals: { accountability: 5, online: 3, hybrid: 1 }
      },
      {
        label: "I need help with technique",
        detail: "You would benefit from in-person review or coaching.",
        signals: { inPerson: 5, hybrid: 4 }
      },
      {
        label: "My training does not match my sport",
        detail: "You need sport-specific structure around your season and schedule.",
        signals: { performance: 4, strength: 2, online: 3, hybrid: 1 }
      },
      {
        label: "My food habits are holding me back",
        detail: "You need simple nutrition support alongside training.",
        signals: { nutrition: 6, fatLoss: 2 }
      },
      {
        label: "I am short on time",
        detail: "You need a plan that is realistic, not overwhelming.",
        signals: { online: 3, program: 2, accountability: 1 }
      }
    ]
  },
  {
    title: "What would you like included in your plan?",
    key: "inclusions",
    type: "multi",
    helper: "This helps build your package.",
    options: [
      {
        label: "Strength training plan",
        detail: "Gym-based programming with progression.",
        signals: { strength: 6, online: 2 }
      },
      {
        label: "Running or conditioning plan",
        detail: "Fitness work built around your current level and goal.",
        signals: { running: 6, conditioning: 4, online: 2 }
      },
      {
        label: "Nutrition support",
        detail: "Simple guidance for habits, fuelling, recovery, or fat loss.",
        signals: { nutrition: 8 }
      },
      {
        label: "Accountability and check-ins",
        detail: "Support to stay consistent and adjust when life gets busy.",
        signals: { accountability: 7, online: 3 }
      },
      {
        label: "In-person technique review",
        detail: "Hands-on feedback to build confidence and clean up execution.",
        signals: { hybrid: 6, inPerson: 4 }
      },
      {
        label: "Just a 6-week program",
        detail: "A lower-commitment plan if you feel confident training alone.",
        signals: { program: 8 },
        preference: "programOnly"
      }
    ]
  },
  {
    title: "How much support would feel right?",
    key: "supportLevel",
    type: "single",
    options: [
      {
        label: "Essential",
        detail: "I mainly want the plan and enough structure to get moving.",
        signals: { program: 4, online: 1 },
        level: "essential"
      },
      {
        label: "Coached",
        detail: "I want a plan, check-ins, and someone keeping me accountable.",
        signals: { online: 5, accountability: 4 },
        level: "coached"
      },
      {
        label: "Premium",
        detail: "I want the plan, accountability, and in-person review where useful.",
        signals: { hybrid: 6, inPerson: 2, accountability: 3 },
        level: "premium"
      },
      {
        label: "Not sure",
        detail: "Show me the most practical option based on my answers.",
        signals: { online: 3, hybrid: 2 },
        level: "recommended"
      }
    ]
  },
  {
    title: "What is your current training experience?",
    key: "experience",
    type: "single",
    options: [
      {
        label: "Beginner or not confident in the gym",
        detail: "You may need extra guidance and technique support.",
        signals: { inPerson: 4, hybrid: 4, accountability: 2 }
      },
      {
        label: "Some experience, but inconsistent",
        detail: "You likely need structure and accountability.",
        signals: { online: 4, accountability: 4, hybrid: 1 }
      },
      {
        label: "Experienced, but I need better structure",
        detail: "You can probably follow a clear plan well.",
        signals: { online: 3, program: 3, strength: 1 }
      },
      {
        label: "Athlete currently playing sport",
        detail: "Your plan should fit around training, games, and recovery.",
        signals: { performance: 4, online: 4, hybrid: 2, strength: 2 }
      }
    ]
  },
  {
    title: "When do you want to start?",
    key: "urgency",
    type: "single",
    options: [
      {
        label: "This week",
        detail: "Ready to move now.",
        signals: { urgency: 5, online: 1, accountability: 1 }
      },
      {
        label: "In the next 2-4 weeks",
        detail: "Good timing to set up properly.",
        signals: { urgency: 4, online: 1 }
      },
      {
        label: "Before a season, trial, or event",
        detail: "The timeline matters, so the plan should work backwards from that date.",
        signals: { urgency: 4, performance: 3, online: 2 }
      },
      {
        label: "I am just looking at options",
        detail: "A simple plan or consult may be the best first step.",
        signals: { urgency: 1, program: 2 }
      }
    ]
  },
  {
    title: "What would make this feel easy to start?",
    key: "confidence",
    type: "multi",
    helper: "Select anything that would help.",
    options: [
      {
        label: "Knowing exactly what to do each week",
        detail: "Clear sessions, sets, reps, and progressions.",
        signals: { online: 3, program: 2, strength: 1 }
      },
      {
        label: "Knowing it fits my sport or schedule",
        detail: "Training that works with your real week.",
        signals: { performance: 3, online: 3, hybrid: 1 }
      },
      {
        label: "Having someone check in with me",
        detail: "Accountability so you keep showing up.",
        signals: { accountability: 5, online: 3 }
      },
      {
        label: "Getting technique feedback",
        detail: "Confidence that you are doing the work properly.",
        signals: { inPerson: 4, hybrid: 4 }
      },
      {
        label: "Keeping the first step affordable",
        detail: "Start smaller and upgrade if you want more support.",
        signals: { program: 5 }
      }
    ]
  }
];

const state = {
  step: 0,
  answers: {}
};

const stage = document.getElementById("question-stage");
const questionTitle = document.getElementById("question-title");
const stepKicker = document.getElementById("step-kicker");
const progressFill = document.getElementById("progress-fill");
const backButton = document.getElementById("back-button");
const nextButton = document.getElementById("next-button");
const form = document.getElementById("qualifier-form");
const results = document.getElementById("results");

function renderQuestion() {
  const question = questions[state.step];
  questionTitle.textContent = question.title;
  stepKicker.textContent = `Question ${state.step + 1} of ${questions.length}`;
  progressFill.style.width = `${(state.step / questions.length) * 100}%`;
  backButton.disabled = state.step === 0;
  nextButton.textContent = state.step === questions.length - 1 ? "Build my plan" : "Next";

  stage.innerHTML = "";

  if (question.helper) {
    const helper = document.createElement("p");
    helper.className = "question-helper";
    helper.textContent = question.helper;
    stage.append(helper);
  }

  question.options.forEach((option, index) => {
    const optionId = `${question.key}-${index}`;
    const label = document.createElement("label");
    label.className = "option-card";
    label.htmlFor = optionId;

    const input = document.createElement("input");
    input.type = question.type === "multi" ? "checkbox" : "radio";
    input.id = optionId;
    input.name = question.key;
    input.value = index;
    input.checked = isOptionSelected(question, index);

    const textWrap = document.createElement("span");
    const title = document.createElement("span");
    const detail = document.createElement("span");
    title.className = "option-title";
    detail.className = "option-detail";
    title.textContent = option.label;
    detail.textContent = option.detail;

    textWrap.append(title, detail);
    label.append(input, textWrap);
    stage.append(label);
  });
}

function isOptionSelected(question, index) {
  const savedAnswer = state.answers[question.key];
  if (question.type === "multi") {
    return Array.isArray(savedAnswer) && savedAnswer.includes(index);
  }
  return savedAnswer === index;
}

function saveCurrentAnswer() {
  const question = questions[state.step];
  const selected = Array.from(document.querySelectorAll(`input[name="${question.key}"]:checked`)).map((input) => Number(input.value));
  if (!selected.length) {
    return false;
  }

  state.answers[question.key] = question.type === "multi" ? selected : selected[0];
  return true;
}

function getSelectedOptions(question) {
  const answer = state.answers[question.key];
  const indexes = question.type === "multi" ? answer : [answer];
  return indexes.map((index) => question.options[index]);
}

function buildPlan() {
  const signals = {};
  const selectedLabels = {};
  let route = "individual";
  let supportLevel = "recommended";
  let wantsProgramOnly = false;

  questions.forEach((question) => {
    const selectedOptions = getSelectedOptions(question);
    selectedLabels[question.key] = selectedOptions.map((option) => option.label);

    selectedOptions.forEach((option) => {
      Object.entries(option.signals || {}).forEach(([signal, value]) => {
        signals[signal] = (signals[signal] || 0) + value;
      });
      if (option.route) route = option.route;
      if (option.level) supportLevel = option.level;
      if (option.preference === "programOnly") wantsProgramOnly = true;
    });
  });

  if (route === "team" || (signals.team || 0) >= 10) {
    return buildTeamPlan(signals, selectedLabels);
  }

  return buildIndividualPlan(signals, selectedLabels, supportLevel, wantsProgramOnly);
}

function buildIndividualPlan(signals, selectedLabels, supportLevel, wantsProgramOnly) {
  const includes = [];
  let weeklyPrice = 0;
  let oneOffPrice = 0;
  let planType = "MSS Online Coaching";
  let levelName = "Coached";
  let ctaLabel = "Book Free Consult";

  const needsAccountability = (signals.accountability || 0) >= 8 || supportLevel === "coached" || supportLevel === "premium";
  const needsInPerson = (signals.inPerson || 0) >= 7 || (signals.hybrid || 0) >= 10 || supportLevel === "premium";
  const needsNutrition = (signals.nutrition || 0) >= 8 || (signals.fatLoss || 0) >= 6;
  const needsRunning = (signals.running || 0) >= 5;
  const needsStrength = (signals.strength || 0) >= 5 || !needsRunning;

  if ((wantsProgramOnly || supportLevel === "essential") && !needsAccountability && !needsInPerson && !needsNutrition) {
    planType = "6-Week Program";
    levelName = "Essential";
    oneOffPrice = config.prices.programOnly;
    ctaLabel = "Get My 6-Week Program";
    includes.push("A clear 6-week program to follow independently");
  } else {
    weeklyPrice = config.prices.coachingWeekly;
    includes.push("Online coaching with weekly structure and progress tracking");

    if (needsInPerson) {
      planType = "MSS Hybrid Coaching";
      levelName = "Premium";
      includes.push("One included in-person review each month");
      includes.push(`Optional extra in-person sessions at ${formatCurrency(config.prices.inPersonSession)} per 45 minutes`);
      ctaLabel = "Find My Best Coaching Option";
    }

    if (needsAccountability) {
      includes.push("Accountability check-ins to keep training consistent");
    }
  }

  if (needsStrength) {
    includes.push("Strength training built around your current level");
  }

  if (needsRunning) {
    includes.push("Running or conditioning structure matched to your goal");
  }

  if (needsNutrition) {
    weeklyPrice += config.prices.nutritionWeekly;
    includes.push(`Nutrition support add-on for ${formatCurrency(config.prices.nutritionWeekly)}/week`);
  }

  const goals = selectedLabels.goals || [];
  const bottlenecks = selectedLabels.bottlenecks || [];
  const confidence = selectedLabels.confidence || [];

  const summary = createSummary(planType, goals, needsNutrition, needsRunning, needsStrength, needsInPerson);
  const nextSteps = [
    "Confirm your weekly schedule, training location, and current ability.",
    "Set the first 6-12 week target so the plan has a clear direction.",
    needsInPerson ? "Use the first review to check technique and make the plan feel easier to follow." : "Start with a simple coaching consult so the plan fits your real week."
  ];

  return {
    title: `Your custom plan: ${planType}`,
    levelName,
    summary,
    priceLine: formatPriceLine(weeklyPrice, oneOffPrice),
    includes: unique(includes),
    nextSteps,
    offerTitle: createOfferTitle(levelName, planType),
    offerCopy: createOfferCopy(planType, weeklyPrice, oneOffPrice, needsNutrition),
    ctaLabel,
    fitPercent: scorePercent(signals.online + signals.hybrid + signals.inPerson + signals.program, 45),
    urgencyPercent: scorePercent(signals.urgency || 2, 5),
    readinessPercent: scorePercent((signals.accountability || 0) + (signals.program || 0) + (signals.online || 0), 36),
    answers: { goals, bottlenecks, confidence }
  };
}

function buildTeamPlan(signals, selectedLabels) {
  return {
    title: "Your custom plan: Team Strength & Conditioning",
    levelName: "Team",
    summary: "Your team or club would be best suited to a structured S&C system focused on better physical preparation, clearer standards, and supporting player availability.",
    priceLine: `${formatCurrency(config.prices.teamLow)}-${formatCurrency(config.prices.teamHigh)}/year per team, depending on scope`,
    includes: [
      "Team-level strength and conditioning system",
      "Player availability and injury-risk review",
      "Training structure that coaches and players can actually follow",
      "Scope confirmation before any annual proposal"
    ],
    nextSteps: [
      "Confirm team size, season timeline, and current training setup.",
      "Review how injury-related missed days are currently tracked.",
      "Book a discovery call before building the proposal."
    ],
    offerTitle: "Book a Team S&C Discovery Call",
    offerCopy: "Start with a discovery call so MSS can understand the squad, injury history, season timeline, and current setup before recommending a proposal.",
    ctaLabel: "Book Team S&C Call",
    fitPercent: scorePercent(signals.team || 10, 18),
    urgencyPercent: scorePercent((signals.urgency || 2) + (signals.team || 0) / 4, 9),
    readinessPercent: scorePercent(signals.team || 10, 18),
    answers: selectedLabels
  };
}

function createSummary(planType, goals, needsNutrition, needsRunning, needsStrength, needsInPerson) {
  const goalText = goals.length ? goals.join(", ").toLowerCase() : "your goal";
  const planPieces = [];

  if (needsStrength) planPieces.push("strength work");
  if (needsRunning) planPieces.push("running or conditioning");
  if (needsNutrition) planPieces.push("nutrition support");
  if (needsInPerson) planPieces.push("in-person review");

  if (planType === "6-Week Program") {
    return `You mainly need a clear plan for ${goalText}. The 6-week option gives you structure without ongoing coaching, with the option to upgrade if you want more accountability later.`;
  }

  return `Based on your answers, ${planType} gives you ${joinNatural(planPieces)} in a plan built around your week, current level, and goals.`;
}

function createOfferTitle(levelName, planType) {
  if (planType === "6-Week Program") return "Start with a 6-week plan";
  if (levelName === "Premium") return "Start with coaching plus an in-person review";
  return "Start with a free coaching consult";
}

function createOfferCopy(planType, weeklyPrice, oneOffPrice, needsNutrition) {
  if (planType === "6-Week Program") {
    return `Get a structured 6-week plan for ${formatCurrency(oneOffPrice)}. If you want more support later, you can move into coaching.`;
  }

  const nutritionText = needsNutrition ? " This includes the nutrition add-on so training and food habits support the same goal." : "";
  return `Start with a consult, then move into a plan from ${formatCurrency(weeklyPrice)}/week based on the support you selected.${nutritionText}`;
}

function formatPriceLine(weeklyPrice, oneOffPrice) {
  if (oneOffPrice && !weeklyPrice) {
    return `${formatCurrency(oneOffPrice)} one-off`;
  }
  return `${formatCurrency(weeklyPrice)}/week`;
}

function formatCurrency(value) {
  return new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
    maximumFractionDigits: 0
  }).format(value);
}

function scorePercent(value, max) {
  return Math.max(8, Math.min(100, Math.round((value / max) * 100)));
}

function unique(items) {
  return [...new Set(items)];
}

function joinNatural(items) {
  if (!items.length) return "a clear training structure";
  if (items.length === 1) return items[0];
  if (items.length === 2) return `${items[0]} and ${items[1]}`;
  return `${items.slice(0, -1).join(", ")}, and ${items[items.length - 1]}`;
}

function fillList(elementId, items) {
  const list = document.getElementById(elementId);
  list.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    list.append(li);
  });
}

function showResults() {
  const plan = buildPlan();
  form.hidden = true;
  results.hidden = false;
  questionTitle.textContent = "Your custom MSS plan";
  stepKicker.textContent = "Plan built";
  progressFill.style.width = "100%";

  document.getElementById("plan-title").textContent = plan.title;
  document.getElementById("plan-summary").textContent = plan.summary;
  document.getElementById("price-line").textContent = plan.priceLine;
  document.getElementById("fit-score").textContent = `${plan.fitPercent}%`;
  document.getElementById("urgency-score").textContent = `${plan.urgencyPercent}%`;
  document.getElementById("budget-score").textContent = `${plan.readinessPercent}%`;
  document.getElementById("offer-title").textContent = plan.offerTitle;
  document.getElementById("offer-copy").textContent = plan.offerCopy;
  fillList("needs-list", plan.includes);
  fillList("talk-track", plan.nextSteps);

  const bookingLink = document.getElementById("booking-link");
  bookingLink.href = config.bookingUrl;
  bookingLink.textContent = plan.ctaLabel || config.bookingLabel;
}

function copySummary() {
  const plan = buildPlan();
  const selectedAnswers = questions
    .map((question) => {
      const labels = getSelectedOptions(question).map((option) => option.label).join(", ");
      return `${question.title}\nAnswer: ${labels}`;
    })
    .join("\n\n");

  const summary = [
    plan.title,
    `Estimated price: ${plan.priceLine}`,
    plan.summary,
    "",
    "Included:",
    ...plan.includes.map((item) => `- ${item}`),
    "",
    "Next steps:",
    ...plan.nextSteps.map((item) => `- ${item}`),
    "",
    "Offer:",
    `${plan.offerTitle}: ${plan.offerCopy}`,
    "",
    "Answers:",
    selectedAnswers
  ].join("\n");

  copyText(summary);
}

function copyText(text) {
  const markCopied = () => {
    const originalText = copyButton.textContent;
    copyButton.textContent = "Copied";
    setTimeout(() => {
      copyButton.textContent = originalText;
    }, 1400);
  };

  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(markCopied).catch(() => fallbackCopy(text, markCopied));
    return;
  }

  fallbackCopy(text, markCopied);
}

function fallbackCopy(text, onSuccess) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.top = "-999px";
  document.body.append(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  onSuccess();
}

nextButton.addEventListener("click", () => {
  if (!saveCurrentAnswer()) {
    stage.classList.add("needs-answer");
    return;
  }

  stage.classList.remove("needs-answer");

  if (state.step === questions.length - 1) {
    showResults();
    return;
  }

  state.step += 1;
  renderQuestion();
});

backButton.addEventListener("click", () => {
  if (state.step > 0) {
    state.step -= 1;
    renderQuestion();
  }
});

document.getElementById("restart-button").addEventListener("click", () => {
  state.step = 0;
  state.answers = {};
  form.hidden = false;
  results.hidden = true;
  renderQuestion();
});

const copyButton = document.getElementById("copy-button");
copyButton.addEventListener("click", copySummary);

const bookingLink = document.getElementById("booking-link");
bookingLink.href = config.bookingUrl;
bookingLink.textContent = config.bookingLabel;

renderQuestion();
