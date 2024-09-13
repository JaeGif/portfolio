import React from 'react';
import { Text } from '@react-three/drei';

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
    <Text
      font='/fonts/montserrat-alt.ttf'
      scale={scale}
      maxWidth={maxWidth}
      lineHeight={lineHeight}
      textAlign={align}
      position={position}
    >
      {children}
      <meshBasicMaterial color={'black'} toneMapped={false} />
    </Text>
  );
}

export default TextTemplate;
