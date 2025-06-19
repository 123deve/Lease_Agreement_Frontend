import { useState } from "react";
import LeaseRentForm from "./LeaseRentForm";
import GeneratedRentLease from "./GeneratedRentLease";

function App() {
  const [rentleaseText, setGeneratedRentLease] = useState("");

  return (
    <div>
      {!rentleaseText ? (
        <LeaseRentForm setGeneratedRentLease={setGeneratedRentLease} />
      ) : (
        <GeneratedRentLease rentleaseText={rentleaseText} />
      )}
    </div>
  );
}

export default App;
