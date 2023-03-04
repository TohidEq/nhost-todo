import { NhostClient } from "@nhost/react";
// import { nhost as nHost } from "nhost-js-sdk";

const nhost = new NhostClient({
  subdomain: import.meta.env.VITE_NHOST_SUBDOMAIN,
  region: import.meta.env.VITE_NHOST_REGION,
});

// const config = {
//   base_url: "https://backend-RRRR.nhost.app",
// };
// nHost.initializeApp(config);
// const auth = nHost.auth();
// const storage = nHost.storage();

//export { nhost, auth, storage };
export { nhost };
