import { Axon } from "@axonlabs/core";
import { HotReload } from "../../src";

const core = Axon();

core.loadPlugin(new HotReload("./routes"));

core.listen();