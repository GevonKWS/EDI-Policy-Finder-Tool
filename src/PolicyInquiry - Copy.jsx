import React, { useState } from "react";

const mockPolicies = [
    { policyNumber: "003388", holder: "Juan Jordan Sanchez", coverage: "Full", status: "Active", coolness: "Life of the Party!" },
    { policyNumber: "000199", holder: "Miku Yagami", coverage: "Partial", status: "Expired", coolness: "Gets a party invite." },
    { policyNumber: "003131", holder: "Kenny Smith", coverage: "Full", status: "Active", coolness: "A little shy." },
];

function PolicyInquiry() {
    const [policyNumber, setPolicyNumber] = useState("");
    const [agentName, setAgentName] = useState("");
    const [message, setMessage] = useState("");
    const [policy, setPolicy] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
        setMessage(`Searching for policy ${policyNumber}...`);
        const result = mockPolicies.find((p) => p.policyNumber === policyNumber);

        if (result) {
            setPolicy(result);
            setMessage("あった！ Policy found!");
        } else {
            setPolicy(null);
            setMessage("だめ！ Uh oh! Policy not found! Please verify the Policy number and try again.");
        }
    };

    return (
        <div>
            <h1>Policy Inquiry</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Policy Number"
                    value={policyNumber}
                    onChange={(e) => setPolicyNumber(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Agent Name"
                    value={agentName}
                    onChange={(e) => setAgentName(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
            <p>{message}</p>
            {policy && (
                <table>
                    <thead>
                        <tr>
                            <th>Policy Number</th>
                            <th>Holder</th>
                            <th>Coverage</th>
                            <th>Status</th>
                            <th>Coolness</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{policy.policyNumber}</td>
                            <td>{policy.holder}</td>
                            <td>{policy.coverage}</td>
                            <td>{policy.status}<
