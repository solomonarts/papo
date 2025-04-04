import React, { useMemo, useState } from "react";
import { FaCopy } from "react-icons/fa";
import { notification } from "antd"; // Ant Design Notification

const TokenAddress = () => {
  const textStyle = {
    fontSize: "3rem",
    fontWeight: "900",
    textShadow: "18px 22px 1px rgba(0, 0, 0, 0.2)",
    padding: "30px",
  };

  const Context = React.createContext({ name: "Default" });
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (placement) => {
    api.info({
      message: `Notification`,
      description: (
        <Context.Consumer>
          {({ name }) => `Address Coppied to Clipboard`}
        </Context.Consumer>
      ),
      placement,
    });
  };
  const contextValue = useMemo(() => ({ name: "Ant Design" }), []);

  // Replace with actual Solana token address
  const tokenAddress = "8GmEFUFqP1X2n7wCMj1cv6FzDAvoihjbe1fg3k3nckqV"; // Full address should be used

  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(tokenAddress);
    setCopied(true);
    openNotification("bottomLeft");
    // Show Ant Design Notification
  };
  return (
    <Context.Provider value={contextValue}>
      {contextHolder}
      <div className="token-address">
        <h2>Solana Token Address</h2>
        <div className="address-box">
          <span>8GmEFUFqP1X2n7wCMj1cv6FzDAvoihjbe1fg3k3nckqV</span>
          <FaCopy className="copy-icon" onClick={copyToClipboard} />
        </div>
      </div>
    </Context.Provider>
  );
};

export default TokenAddress;
