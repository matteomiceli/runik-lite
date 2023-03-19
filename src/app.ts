import {
  Reader,
  readerAccess,
  getEpubMetaData,
} from "../modules/readerAccess/index";
import { step } from "./helpers/step";

const pluggedInBtn = document.getElementById("plugged-in");
const pickerBtn = document.getElementById("folder-picker");
const loadEpub = document.getElementById("load-epub");

let reader: Reader | null;
let loadedFiles: File[] = [];

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
    step(1);
  }
});

loadEpub?.addEventListener("input", async (e: Event) => {
  const files = (e.currentTarget as HTMLInputElement).files;
  if (!files) {
    return;
  }
  loadedFiles = [...loadedFiles, ...files];
  console.log(await getEpubMetaData(files[0]));
});
