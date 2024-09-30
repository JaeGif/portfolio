import React from 'react';
import { Svg, Text3D } from '@react-three/drei';

type TextTemplateProps = {
  align?: 'left' | 'right' | 'center';
  scale?: number;
  lineHeight?: number;
  maxWidth?: number;
  position?: [number, number, number];
  live?: string;
  source?: string;
};
function TextTemplate({
  scale = 2,
  lineHeight = 1,
  position = [0, 12, 0],
  live = '',
  source = '',
}: TextTemplateProps) {
  const onPointer = () => {
    if (document.body.style.cursor !== 'pointer')
      document.body.style.cursor = 'pointer';
  };
  const offPointer = () => {
    if (document.body.style.cursor === 'pointer')
      document.body.style.cursor = 'default';
  };

  return (
    <group onPointerEnter={onPointer} onPointerLeave={offPointer}>
      <Text3D
        onClick={() => window.open(live, '_blank')}
        font='/assets/fonts/pixeloidtf.json'
        scale={scale}
        lineHeight={lineHeight}
        position={position}
      >
        {live !== '' && 'Live ->'}
        <meshStandardMaterial toneMapped={false} />
      </Text3D>
      <Text3D
        onClick={() => window.open(source, '_blank')}
        font='/assets/fonts/pixeloidtf.json'
        scale={scale}
        lineHeight={lineHeight}
        position={[position[0], position[1] - 3, position[2]]}
      >
        {source !== '' && 'Code </>'}
        <meshStandardMaterial toneMapped={false} />
      </Text3D>
    </group>
  );
}

export default TextTemplate;
