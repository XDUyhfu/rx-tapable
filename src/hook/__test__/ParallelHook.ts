import { ParallelHook } from "../ParallelHook";

const hook = new ParallelHook(2);

hook.tap("plugin1", () => {
  console.log("plugin1");
});
hook.tap("plugin2", () => {
  console.log("plugin2");
});
hook.tap("plugin3", () => {
  console.log("plugin3");
});
hook.tap("plugin4", () => {
  setTimeout(() => {
    console.log("plugin4");
  }, 1000);
});
hook.tap("plugin5", () => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      console.log("plugin5");
      resolve();
    }, 2000);
  });
});
hook.tap("plugin6", () => {
  setTimeout(() => {
    console.log("plugin6");
  }, 1000);
});

hook.call("name", () => {
  console.log("done");
});
