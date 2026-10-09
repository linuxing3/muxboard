const traces = {
  claude: [
    ["plan", "Split the task: schema change, migration, tests. Budget $4."],
    ["review", "Reject the edit that rewrites unrelated files."],
    ["ledger", "Claude share this run: 18% of tokens, 61% of cost."]
  ],
  codex: [
    ["handoff", "Memory pack moved. Same goal, same fail rule."],
    ["review", "Diff matches the plan. No extra files."]
  ],
  cheap: [
    ["edit", "Apply the three planned hunks only."],
    ["stop", "Escalate if tests fail twice. Do not replan."]
  ]
};

const bars = [
  ["Plan · Claude", 61],
  ["Edits · cheap", 27],
  ["Review · Claude", 12]
];

const trace = document.querySelector("#trace");
const buttons = document.querySelectorAll(".harness");

function render(name) {
  trace.innerHTML = traces[name].map(([k, v]) => `<div class="step"><b>${k}</b><div>${v}</div></div>`).join("");
  buttons.forEach((b) => b.classList.toggle("on", b.dataset.harness === name));
}

buttons.forEach((b) => b.addEventListener("click", () => render(b.dataset.harness)));
render("claude");

document.querySelector("#bars").innerHTML = bars.map(([name, n]) =>
  `<div class="bar"><span>${name}</span><i style="width:${n}%"></i><span>${n}%</span></div>`
).join("");
