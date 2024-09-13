import React from 'react';

function StaticLights() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight castShadow position={[5, 7.5, 5]} intensity={1} />
    </>
  );
}

export default StaticLights;
