import transactions from "./transactions.json";
import TransactionHistory from "./TransactionHistory";

function App() {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <h2>Transaction History</h2>
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
