import { WaterfallHook } from "../WaterfallHook";

const hook = new WaterfallHook();
hook.tap("plugin1", async (name) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${name}`,
  );
  return await response.json();
});

hook.tap("plugin2", () => {
  return 2;
});

hook.tap("plugin3", () => {
  return 3;
});
hook.call(0, (result: any) => {
  console.log(result);
});
