/**
 * Copyright (c) OpenLens Authors. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */
import { getInjectable } from "@ogre-tools/injectable";
import type { AppPaths } from "./app-path-injection-token";
import type { RequestChannel } from "../channel/request-channel-injection-token";
import { messageChannelInjectionToken } from "../channel/message-channel-injection-token";

export type AppPathsChannel = RequestChannel<AppPaths, AppPaths>;

const appPathsChannelInjectable = getInjectable({
  id: "app-paths-channel",

  instantiate: (): AppPathsChannel => ({
    id: "app-paths",
  }),

  injectionToken: messageChannelInjectionToken,
});

export default appPathsChannelInjectable;
