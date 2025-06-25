import React from "react";
import { Skeleton } from "@mantine/core";

function Demo() {
  return (
    <div style={{ padding: "20px", maxWidth: "400px" }}>
      <Skeleton height={30} width="70%" mb="md" />

      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <Skeleton circle height={60} width={60} />
        <div style={{ flex: 1 }}>
          <Skeleton height={12} mb={6} />
          <Skeleton height={8} width="60%" />
        </div>
      </div>

      <Skeleton height={8} mt="lg" mb={6} />
      <Skeleton height={8} mb={6} />
      <Skeleton height={8} width="80%" />
    </div>
  );
}

export default Demo;
