import React from "react";
import TopBarProgress from "react-topbar-progress-indicator";
TopBarProgress.config({
  barColors: {
    0: "#EF4444",
    0.5: "#dda4a4",
    1: "#FEE2E2",
  },
  shadowBlur: 20,
});

const FullScreenLoader = () => {
  return (
    <div style={{ display: !false ? "none" : "block" }}>
      <TopBarProgress />
    </div>
  );
};

export default FullScreenLoader;
