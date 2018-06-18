import { Reaction } from "/server/api";

Reaction.registerPackage({
  label: "Ryan's shop",
  name: "Ryan's shop",
  icon: "fa fa-bars",
  autoEnable: true,
  settings: {
    autoRefreshInterval: "1 hour"
  },
  registry: []
});
