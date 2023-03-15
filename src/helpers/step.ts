const pages = [
  document.getElementById("step-1"),
  document.getElementById("step-2"),
  document.getElementById("step-3"),
  document.getElementById("dashboard"),
];

export let currentStep = 0;

export function step(step?: number) {
  if (currentStep === 3) {
    return;
  }

  pages[currentStep]?.classList.add("hide");

  step ? (currentStep = step) : currentStep++;

  pages[currentStep]?.classList.remove("hide");
}
