import React from "react";

interface VulnerableProps {
  value: string;
}

const SlugHref: React.FC<VulnerableProps> = ({ value }) => {
  return (
    <div>
      <h2>
        &lt;a href=&#123;&#39;.../$&#123;payload&#125;/...&#39;&gt;&lt;/a&gt;
      </h2>
      <a href={`/${value}/vercel.svg`}>
        &lt;a href=&#123;&#39;/$&#123;{value}
        &#125;/vercel.svg&#39;&gt;VERCEL.SVG&lt;/a&gt;
      </a>
    </div>
  );
};

export default SlugHref;
