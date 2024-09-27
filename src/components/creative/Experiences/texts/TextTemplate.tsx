import React from 'react';
import { Text3D } from '@react-three/drei';

type TextTemplateProps = {
  align?: 'left' | 'right' | 'center';
  scale?: number;
  lineHeight?: number;
  maxWidth?: number;
  position?: [number, number, number];
  children: React.ReactNode;
};
function TextTemplate({
  align = 'center',
  scale = 2,
  lineHeight = 1,
  maxWidth = 10,
  position = [0, 12, 0],
  children,
}: TextTemplateProps) {
  return (
    <Text3D
      castShadow
      font='/assets/fonts/pixeloidtf.json'
      scale={scale}
      //   maxWidth={maxWidth}
      lineHeight={lineHeight}
      //   textAlign={align}
      position={position}
    >
      {children}
      <meshBasicMaterial color={'black'} toneMapped={false} />
    </Text3D>
  );
}

export default TextTemplate;
