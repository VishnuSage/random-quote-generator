import React from "react";
import { FaSyncAlt, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const QuoteCard = ({ quote, author, onRefresh, onTweet }) => {
  return (
    <div
      className="quote-card"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.7)", // White with reduced opacity
        padding: "20px",
        borderRadius: "10px",
        color: "black",
        maxWidth: "600px",
        margin: "auto",
        textAlign: "center",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Shadow for depth
        position: "relative",
      }}
    >
      {/* Add quote icons around the quote */}
      <h2 style={{ fontSize: "1.5em" }}>
        <FaQuoteLeft style={{ marginRight: "10px" }} />
        {quote}
        <FaQuoteRight style={{ marginLeft: "10px" }} />
      </h2>

      {/* Author aligned to the right */}
      <p style={{ textAlign: "right", fontStyle: "italic", marginTop: "10px" }}>
        - {author || "Unknown"}
      </p>

      {/* Buttons aligned left and right */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
        }}
      >
        <button
          onClick={onRefresh}
          style={{
            background: "transparent",
            border: "none",
            color: "black",
            fontSize: "1.5em",
            cursor: "pointer",
          }}
        >
          <FaSyncAlt />
        </button>

        <button
          onClick={onTweet}
          style={{
            background: "transparent",
            border: "none",
            color: "black",
            fontSize: "1.5em",
            cursor: "pointer",
          }}
        >
          <FaXTwitter />
        </button>
      </div>
    </div>
  );
};

export default QuoteCard;
