import React from 'react';

function StaticLights() {
  return (
    <>
      <ambientLight intensity={0.35} />
      <directionalLight castShadow position={[-5, 5, 5]} intensity={3} />
    </>
  );
}

export default StaticLights;
