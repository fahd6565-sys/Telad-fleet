"use client";

import { useEffect, useState } from "react";

export default function Dashboard() {

  const [data, setData] = useState({});

  useEffect(() => {
    fetch("http://localhost:5000/api/dashboard")
      .then(res => res.json())
      .then(setData);
  }, []);

  return (
    <div style={{padding:20}}>
      <h1>🚀 Telad Fleet Dashboard</h1>

      <div style={{display:"flex", gap:20}}>
        <div>🚗 المركبات: {data.vehicles}</div>
        <div>👷 الموظفين: {data.users}</div>
        <div>🚨 التنبيهات: {data.alerts}</div>
      </div>
    </div>
  );
}