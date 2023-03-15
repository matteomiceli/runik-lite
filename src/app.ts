import { Reader, readerAccess } from "../modules/readerAccess/index";
import { step } from "./helpers/step";

const pluggedInBtn = document.getElementById("plugged-in");
const pickerBtn = document.getElementById("folder-picker");

let reader: Reader | null;

pluggedInBtn?.addEventListener("click", () => {
  step();
});

pickerBtn?.addEventListener("click", async () => {
  step();
  try {
    reader = await readerAccess();
    step();
  } catch (e) {
    console.error(e);
  }
});
