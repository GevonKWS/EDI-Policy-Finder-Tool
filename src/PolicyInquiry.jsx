import { useState } from "react";
import './styles.css'; // Import the CSS file for styling

const PolicyInquiry = () => {
    const [policy, setPolicy] = useState(null);
    const [message, setMessage] = useState("");
    const [policyNumber, setPolicyNumber] = useState("");
    const [agentName, setAgentName] = useState("");

    // Sample data for policies
    const policies = [
        { policyNumber: "003388", holder: "CME Corp", coverage: "Full", status: "Active", coolness: "Life of the Party!", agent: "Juan Novoa III" },
        { policyNumber: "000199", holder: "Ten-chan LLC.", coverage: "Partial", status: "Expired", coolness: "Gets a party invite.", agent: "Miku Yagami" },
        { policyNumber: "003131", holder: "Mr Morale", coverage: "Full", status: "Active", coolness: "A little shy.", agent: "Kenny Smith" },
    ];

    const handleSubmit = () => {
        // Find policy based on policy number and agent name
        const result = policies.find(
            (policy) =>
                policy.policyNumber === policyNumber && policy.agent.toLowerCase() === agentName.toLowerCase()
        );

        if (result) {
            setPolicy(result);
            setMessage("簡単でした！ Policy found!");
        } else {
            setPolicy(null);
            setMessage("だめ！ Uh oh! Policy not found! Please verify the Policy information and try again.");
        }
    };

    return (
        <div className="container">
            <h1>CME Corp Policy Inquiry Tool</h1>
            <h1 className="push-right">This 1000% percent awesome policy tool was brought to you by Juan and Gevon!</h1>

            <div className="form-section">
                <label htmlFor="policyNumber">Enter Policy Number:</label>
                <input
                    type="text"
                    id="policyNumber"
                    value={policyNumber}
                    onChange={(e) => setPolicyNumber(e.target.value)}
                    placeholder="Policy Number"
                />

                <label htmlFor="agentName">Enter Agent Name:</label>
                <input
                    type="text"
                    id="agentName"
                    value={agentName}
                    onChange={(e) => setAgentName(e.target.value)}
                    placeholder="Agent Name"
                />

                <button onClick={handleSubmit}>Search</button>
            </div>

            {message && <div className="message">{message}</div>}

            {policy && (
                <div className="policy-info">
                    <h2>Policy Details</h2>
                    <table>
                        <tbody>
                            <tr>
                                <td>Policy Number:</td>
                                <td>{policy.policyNumber}</td>
                            </tr>
                            <tr>
                                <td>Holder:</td>
                                <td>{policy.holder}</td>
                            </tr>
                            <tr>
                                <td>Coverage:</td>
                                <td>{policy.coverage}</td>
                            </tr>
                            <tr>
                                <td>Status:</td>
                                <td>{policy.status}</td>
                            </tr>
                            <tr>
                                <td>Coolness:</td>
                                <td>{policy.coolness}</td>
                            </tr>
                            <tr>
                                <td>Agent:</td>
                                <td>{policy.agent}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default PolicyInquiry;
