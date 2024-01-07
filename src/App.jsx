import React, { useState } from "react";

const App = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [apiResponse, setApiResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://chimpu.xyz/api/post.php", {
        method: "POST",
        body: `phone=${phoneNumber}`,
      });

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const responseData = await response.text();

      setApiResponse(responseData);
    } catch (error) {
      console.error("Error sending data to the API:", error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Phone Number:
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <div>
        <h2>API Response:</h2>
        <p>{apiResponse}</p>
      </div>
    </div>
  );
};

export default App;
