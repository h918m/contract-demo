let accounts = require("fs").readFileSync("./accounts.jsonl", "utf-8").split("\n").filter(Boolean).map(JSON.parse);

export function getTestAccount(id: number) {
  let a = accounts[id];
  return a;
}
