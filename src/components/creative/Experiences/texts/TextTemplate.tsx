import React from 'react';
import { Text } from '@react-three/drei';

type TextTemplateProps = {
  align?: 'left' | 'right' | 'center';
  children: React.ReactNode;
};
function TextTemplate({ align = 'center', children }: TextTemplateProps) {
  return (
    <Text
      font='/fonts/montserrat-alt.ttf'
      scale={2}
      maxWidth={10}
      lineHeight={1}
      textAlign={align}
      position={[0, 12, 0]}
    >
      {children}
      <meshBasicMaterial color={'black'} toneMapped={false} />
    </Text>
  );
}

export default TextTemplate;
