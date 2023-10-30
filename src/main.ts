import { ParallelHook } from "./hook";

const hook = new ParallelHook(2);

hook.tap("plugin1", () => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      console.log("plugin1");
      resolve();
    }, 2000);
  });
});
hook.tap("plugin2", () => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      console.log("plugin2");
      resolve();
    }, 2000);
  });
});
hook.tap("plugin3", () => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      console.log("plugin3");
      resolve();
    }, 2000);
  });
});
hook.tap("plugin4", () => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      console.log("plugin4");
      resolve();
    }, 2000);
  });
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
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      console.log("plugin6");
      resolve();
    }, 2000);
  });
});

hook.call("name", () => {
  console.log("done");
});
