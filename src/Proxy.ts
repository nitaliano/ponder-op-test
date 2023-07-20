import { ponder } from "@/generated";

ponder.on("Proxy:Approval", async ({ event, context }) => {
  console.log(event.params);
});

ponder.on("Proxy:ApprovalForAll", async ({ event, context }) => {
  console.log(event.params);
});
