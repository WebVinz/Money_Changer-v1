// Full Frontend Money Changer - React + Tailwind

import React, { useState, useEffect } from "react";
import axios from "axios";
import Chart from "chart.js/auto";
import Footer from "./footer";

const MoneyChanger = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("IDR");
  const [exchangeRate, setExchangeRate] = useState(null);
  const [history, setHistory] = useState([]);
  const [liveRate, setLiveRate] = useState(null);

  const fetchExchangeRate = async () => {
    try {
      const res = await axios.get(
        `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
      );
      setExchangeRate(res.data.rates[toCurrency]);
    } catch (error) {
      console.error("Error fetching exchange rate", error);
    }
  };

  useEffect(() => {
    fetchExchangeRate();
    const interval = setInterval(fetchExchangeRate, 5000); // Update every 5 seconds
    return () => clearInterval(interval);
  }, [fromCurrency, toCurrency]);

  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem("transactionHistory"));
    if (savedHistory) setHistory(savedHistory);
  }, []);

  const handleConvert = () => {
    const convertedAmount = (amount * exchangeRate).toFixed(2);
    const transaction = {
      amount,
      fromCurrency,
      toCurrency,
      convertedAmount,
      date: new Date().toLocaleString(),
    };
    const updatedHistory = [transaction, ...history];
    setHistory(updatedHistory);
    localStorage.setItem("transactionHistory", JSON.stringify(updatedHistory));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">Money Changer</h1>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-2 rounded text-black"
          placeholder="Enter amount"
        />
        <div className="flex space-x-2 mt-2">
          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            className="w-1/2 p-2 rounded text-black"
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="IDR">IDR</option>
          </select>
          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            className="w-1/2 p-2 rounded text-black"
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="IDR">IDR</option>
          </select>
        </div>
        <button
          onClick={handleConvert}
          className="w-full mt-4 bg-blue-500 p-2 rounded hover:bg-blue-600"
        >
          Convert
        </button>
        {exchangeRate && (
          <p className="mt-4">1 {fromCurrency} = {exchangeRate} {toCurrency}</p>
        )}
        {liveRate && (
          <p className="mt-2 text-green-400">Live Rate: 1 {fromCurrency} = {liveRate} {toCurrency}</p>
        )}
      </div>
      <div className="mt-6 w-full max-w-md">
        <h2 className="text-xl font-bold">Transaction History</h2>
        <div className="bg-gray-800 p-4 rounded-lg">
          {history.length === 0 ? (
            <p className="text-gray-400">No transactions yet</p>
          ) : (
            history.map((tx, index) => (
              <div key={index} className="border-b border-gray-700 py-2">
                <p>
                  {tx.amount} {tx.fromCurrency} → {tx.convertedAmount} {tx.toCurrency}
                </p>
                <p className="text-sm text-gray-400">{tx.date}</p>
              </div>
            ))
          )}
          
        <Footer />
        </div>
      </div>
    </div>
  );
};

export default MoneyChanger;
