

import { useSignOut, useUserData } from "@nhost/react";

import { Outlet, Link } from "react-router-dom";
import Home from "./Home";

const Layout = () => {
  const user = useUserData();

  const { signOut } = useSignOut();

  console.log(user);

  return (
    <div>
      <header>
        <div>
          <div>
            name:
            {user?.displayName}
            <br />
            email:
            {user?.email}
          </div>

          <button onClick={signOut}>signout</button>

          <hr />
        </div>
      </header>
      hiiiii
      <main>
        <div>
          {/* idk wtf is this outlet doing */}
          {/* <Outlet context={{ user }} /> */}
          <hr />
          Home:
          <Home />
        </div>
      </main>
    </div>
  );
};

export default Layout;
