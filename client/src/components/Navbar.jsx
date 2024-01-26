import { useSDK } from "@metamask/sdk-react";
import React, { useEffect, useState } from "react";

const Navbar = ({ btnClick, connected, account }) => {
  return (
    <div className="p-4 px-6">
      <div className="flex items-center justify-between">
        <div>Logo</div>

        <div>
          <ul className="flex gap-5">
            <li>Home</li>
            <li>Tracker</li>
            <li>Appointment</li>
            <li>
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
            </li>
          </ul>
        </div>

        <div>
          <img
            src="https://github.com/shadcn.png"
            className="w-10 rounded-full"
            alt="@shadcn"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
