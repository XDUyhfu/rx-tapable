import { SeriesHook } from "../SeriesHook";

const hook = new SeriesHook();
hook.tap("plugin1", (name) => {
  console.log("plugin1 --", name);
});

hook.tap("plugin2", (name) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("plugin2 --", name);
      resolve("plugin2");
    }, 1000);
  });
});

hook.tap("plugin3", (name) => {
  console.log("plugin3 ", name);
});

hook.call("yhfu");
