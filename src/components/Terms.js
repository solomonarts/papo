import React, { useState } from "react";
import { MdOutlineClose } from "react-icons/md";

const TermsDock = ({ openDock, setOpenDock }) => {
  const toggleDock = () => {
    setOpenDock(false);
  };

  return (
    <div>
      {/* Button to open Privacy Policy */}
      {/* <button onClick={toggleDock} className="privacy-policy-button">
        Privacy Policy
      </button> */}

      {/* Overlay and Dock */}
      {openDock && (
        <div className="privacy-policy-overlay">
          <div
            className="privacy-policy-dock"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the dock
          >
            <button className="close-button" onClick={toggleDock}>
              <MdOutlineClose />
            </button>
            <h2>Terms and Conditions for $PAPO Project.</h2>
            {/* <p>Last Modified: 20th Jan 2025</p> */}

            <h3>Website Ownership: </h3>
            <p>
              This website, located www.papoproject.com (the “Website”), is a
              $PAPO project website designed to provide information about the
              Papo project and all other project information about projects
              supported under the Papo project ecosystem.
            </p>

            <h3>Acceptance of Terms: </h3>
            <p>
              By accessing and using the Website, you agree to be bound by these
              Terms and Conditions. If you do not agree, you are not authorized
              to use the Website or any services provided through it.
            </p>

            <h3>Services Description: </h3>
            <p>
              The Website serves as an access point for the $PAPO, a Solana
              blockchain-based asset symbolizing support for the ideals
              represented by the Papo project. This coin is intended for
              community engagement, support of startups, and is not an
              investment or financial instrument.
            </p>

            <h3>Legal Compliance: </h3>
            <p>
              You are responsible for ensuring that your interaction with the
              Website and any transactions related to the $Papo coin comply with
              applicable laws in your jurisdiction. The $Papo coin is not
              intended for use in jurisdictions where its use or distribution is
              restricted.
            </p>
            {/* <ul>
              <li>
                <strong>Public Ledger:</strong> All transactions are recorded on
                the Solana blockchain, which is public and transparent.
                Information stored on the blockchain is not controlled by any
                single entity and is accessible to anyone.
              </li>
              <li>
                <strong>Personal Responsibility:</strong> Users are responsible
                for managing their own private keys and wallet information. The
                loss or disclosure of this information can lead to irreversible
                access to the user’s blockchain assets.
              </li>
            </ul>

            <h3>Personal Information</h3>
            <ul>
              <li>
                <strong>Collection:</strong> The only personal information that
                might be indirectly collected is what users voluntarily share on
                the blockchain, such as during transactions or interactions.
              </li>
              <li>
                <strong>Usage:</strong> Any personal information disclosed in
                blockchain transactions is used strictly for those transactions
                and is governed by the blockchain technology, not by the
                Website.
              </li>
            </ul> */}

            <h3>Eligibility: </h3>
            <p>
              The Website is available only to individuals who can form legally
              binding contracts under applicable law. Minors and individuals who
              cannot form legally binding contracts are not permitted to use the
              Website.
            </p>

            <h3>Prohibited Use: </h3>
            <p>
              You may not use the Website if you are subject to international
              sanctions or located in any country that prohibits participation
              in cryptocurrency services.
            </p>

            <h3>Assumption of Risk: </h3>
            <p>
              Using blockchain technology involves various risks. You accept all
              risks associated with using an Internet-based currency, including
              the potential loss of data or funds due to technical failures.
            </p>

            <h3>Transactions</h3>
            <p>
              All transactions involving $Papo are final and non-refundable. The
              value of these coins can be highly volatile.
            </p>

            <h3>Content and Proprietary Rights: </h3>
            <p>
              Papo project owns all content on the Website. You may not
              reproduce, redistribute, or create derivative works from any
              content without explicit community permission.
            </p>
            <h3>Disclaimer of Warranties:</h3>
            <p>
              The Website and its associated services are provided on an “as is”
              basis without any warranties, either express or implied. No
              warranty is made regarding the website's continuous,
              uninterrupted, or error-free operation.
            </p>

            <h3>Limitation of Liability: </h3>
            <p>
              Papo project will not be liable for any damages that arise from
              your use of the Website or your inability to use it. This
              includes, but is not limited to, data loss or lost profits.
            </p>
            <h3>Dispute Resolution: </h3>
            <p>
              Disputes arising under these Terms and Conditions will be resolved
              through decentralized arbitration, using a blockchain-based
              platform that ensures impartiality and fairness. The specific
              platform and procedures will be determined by community consensus
              and published on the Website.
            </p>
            <h3>Miscellaneous: </h3>
            <p>
              If any part of these Terms and Conditions is deemed unenforceable,
              the remaining sections will continue in effect. These Terms and
              Conditions constitute the entire agreement between the parties
              regarding the use of the Website.
            </p>
            <h3>Contact Us:</h3>
            <p>
              Contact Us: For questions or concerns about these Terms and
              Conditions, please contact community support at{" "}
              <strong>info@papoproject.com</strong>
            </p>
          </div>
          {/* Click outside the dock to close */}
          <div className="privacy-policy-background" onClick={toggleDock} />
        </div>
      )}
    </div>
  );
};

export default TermsDock;
