import React from 'react';
import TextTemplate from './texts/TextTemplate';
import LinksTemplate from './texts/LinksTemplate';

type ProjectDescriptionProps = {
  title: string;
  headline: string;
  children: React.ReactNode;
  live?: string;
  source?: string;
};
function ProjectDescription({
  title,
  headline,
  children,
  live = '',
  source = '',
}: ProjectDescriptionProps) {
  return (
    <>
      <TextTemplate scale={1} position={[-15, 10, 0]}>
        {title}
      </TextTemplate>
      <TextTemplate position={[-15, 8, 0]} scale={0.75}>
        {headline}
      </TextTemplate>
      <TextTemplate scale={0.75} position={[-15, 6, 0]}>
        {children}
      </TextTemplate>
      <LinksTemplate
        scale={1.5}
        position={[5, 7.5, 0]}
        live={live}
        source={source}
      />
    </>
  );
}

export default ProjectDescription;
