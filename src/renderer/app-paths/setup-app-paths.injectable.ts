/**
 * Copyright (c) OpenLens Authors. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */
import { getInjectable } from "@ogre-tools/injectable";
import getValueFromChannelInjectable from "../channel/get-value-from-channel.injectable";
import appPathsStateInjectable from "../../common/app-paths/app-paths-state.injectable";
import { beforeFrameStartsInjectionToken } from "../before-frame-starts/before-frame-starts-injection-token";
import appPathsChannelInjectable from "../../common/app-paths/app-paths-channel.injectable";

const setupAppPathsInjectable = getInjectable({
  id: "setup-app-paths",

  instantiate: (di) => {
    const getValueFromChannel = di.inject(getValueFromChannelInjectable);
    const appPathsChannel = di.inject(appPathsChannelInjectable);
    const appPathsState = di.inject(appPathsStateInjectable);

    return {
      run: async () => {
        const appPaths = await getValueFromChannel(
          appPathsChannel,
        );

        appPathsState.set(appPaths);
      },
    };
  },

  injectionToken: beforeFrameStartsInjectionToken,
});

export default setupAppPathsInjectable;
