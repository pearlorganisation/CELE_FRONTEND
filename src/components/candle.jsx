import React, { useState } from "react";

const CandleSelector = () => {
  // Initialize an array representing 8 candles with image URLs
  const candles = [
    { id: 1, name: "Candle 1", candleimg: "https://cdn.tukioswebsites.com/obituary_post_candle/xs/97d78aa8-0d66-446f-96bd-b663d482441b" },
    { id: 2, name: "Candle 2", candleimg: "https://cdn.tukioswebsites.com/obituary_post_candle/xs/d72e2b65-d79d-497a-92a8-8922cb90b167" },
    { id: 3, name: "Candle 3", candleimg: "https://cdn.tukioswebsites.com/obituary_post_candle/xs/9f330259-65ef-477c-88ab-48de34fcd050" },
    { id: 4, name: "Candle 4", candleimg: "https://cdn.tukioswebsites.com/obituary_post_candle/xs/8c74879b-94c4-466d-9850-161140634b19" },
    { id: 5, name: "Candle 5", candleimg: "https://cdn.tukioswebsites.com/obituary_post_candle/xs/b9961846-ff7a-440a-abd2-26c3bc945be6" },
    { id: 6, name: "Candle 6", candleimg: "https://cdn.tukioswebsites.com/obituary_post_candle/xs/f226a2d0-a481-4216-a29a-4bcccfd99cdc" },
    { id: 7, name: "Candle 7", candleimg: "https://cdn.tukioswebsites.com/obituary_post_candle/xs/bfc0a8c4-fe9a-4e97-bacb-24507878958d" },
    { id: 8, name: "Candle 8", candleimg: "https://cdn.tukioswebsites.com/obituary_post_candle/xs/df1480ec-873c-4aaa-88b7-db1f2e14de84" },
  ];

  // State to store selected candle (only one at a time)
  const [selectedCandle, setSelectedCandle] = useState(null);

  // Handle selection of a candle by clicking on the image
  const handleSelectCandle = (id) => {
    setSelectedCandle(id); // Set the selected candle to the clicked one
  };

  // Function to handle sending the selected candle
  const handleSendSelectedCandle = () => {
    console.log("Sending selected candle:", selectedCandle);
    // Add your send logic here (API request, etc.)
  };

  return (
    <div>

      <div className="candle-list">
        {candles.map((candle) => (
          <div
            key={candle.id}
            className={`mx-auto ml-4 px-5 ${selectedCandle === candle.id ? 'selected' : ''}`}
            onClick={() => handleSelectCandle(candle.id)}
            style={{
              display: "inline-block",
              marginRight: "15px",
              cursor: "pointer",
     
          
              textAlign: 'center'
            }}
          >
            <img
              src={candle.candleimg}
              alt={candle.name}
              className={`${selectedCandle === candle.id ? 'border-4 border-blue-600  rounded-full' : ""} w-24 h-24 `}
             
            />
          </div>
        ))}
      </div>
      <button onClick={handleSendSelectedCandle}>Send Selected Candle</button>
    </div>
  );
};

export default CandleSelector;
