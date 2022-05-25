/**
 * Copyright (c) OpenLens Authors. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */
import { getInjectionToken } from "@ogre-tools/injectable";
import type { RequestChannel } from "./request-channel-injection-token";

export type RequestFromChannel = <
  TChannel extends RequestChannel<unknown>,
>(
  channel: TChannel,
  request?: TChannel["_requestSignature"]
) => Promise<TChannel["_responseSignature"]>;

export const requestFromChannelInjectionToken =
  getInjectionToken<RequestFromChannel>({
    id: "request-from-request-channel",
  });
