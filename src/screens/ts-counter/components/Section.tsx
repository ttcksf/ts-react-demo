import React, { ReactNode } from "react";

type SectionProps = {
  title?: string;
  // ReactNodeはインポートが必要なのが注意点
  children: ReactNode;
};
const Section = ({ children, title = "My Subheading" }: SectionProps) => {
  return (
    <section>
      <h1>{title}</h1>
      <p>{children}</p>
    </section>
  );
};

export default Section;
