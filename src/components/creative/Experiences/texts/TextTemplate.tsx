import React from 'react';
import { Text3D } from '@react-three/drei';

type TextTemplateProps = {
  scale?: number;
  lineHeight?: number;
  position?: [number, number, number];
  children: React.ReactNode;
};
function TextTemplate({
  scale = 2,
  lineHeight = 1,
  position = [0, 12, 0],
  children,
}: TextTemplateProps) {
  return (
    <Text3D
      castShadow
      font='/assets/fonts/pixeloidtf.json'
      scale={scale}
      lineHeight={lineHeight}
      position={position}
    >
      {children}
      <meshBasicMaterial color={'black'} toneMapped={false} />
    </Text3D>
  );
}

export default TextTemplate;
