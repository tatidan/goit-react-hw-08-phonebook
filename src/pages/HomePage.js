import React from "react";
const styles = {
  container: {
    minHeight: "calc(100vh - 50px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: "center",
    color: "#915491",
  },
};

const HomePage = () => {
  return (
    <div style={styles.container}>
      <span>❤️</span>
      <h1 style={styles.title}>Home is where your heart is</h1>
      <span>❤️</span>
    </div>
  );
};

export default HomePage;
