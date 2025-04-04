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
        <Context.Consumer>{({ name }) => `Coming Soon...`}</Context.Consumer>
      ),
      placement,
    });
  };
  const contextValue = useMemo(() => ({ name: "Ant Design" }), []);

  // Replace with actual Solana token address
  const tokenAddress = "Coming Soon..."; // Full address should be used

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
          <span>Coming Soon..</span>
          <FaCopy className="copy-icon" onClick={copyToClipboard} />
        </div>
      </div>
    </Context.Provider>
  );
};

export default TokenAddress;
