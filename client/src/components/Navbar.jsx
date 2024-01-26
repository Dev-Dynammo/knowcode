import { useSDK } from "@metamask/sdk-react";
import React, { useEffect, useState } from "react";

const Navbar = ({ btnClick, connected, account }) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>Logo</div>
        <div>
          <ul>
            <li></li>
          </ul>
        </div>
        <button onClick={btnClick}>
          {connected ? (
            <div>
              <>
                {/* {chainId && `Connected chain: ${chainId}`} */}
                {account && `${account.slice(0, 10)}...`}
              </>
            </div>
          ) : (
            "Connect"
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
