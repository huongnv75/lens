/**
 * Copyright (c) OpenLens Authors. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */
import { getInjectable } from "@ogre-tools/injectable";
import { Events } from "./events";
import { routeInjectionToken } from "../../routes/all-routes.injectable";

const eventsRouteInjectable = getInjectable({
  id: "events-route",

  instantiate: () => (  {
    path: "/events",
    Component: Events,
    clusterFrame: true,
  }),

  injectionToken: routeInjectionToken,
});

export default eventsRouteInjectable;
