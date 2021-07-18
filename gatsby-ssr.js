// ugly workaround, since new analytics plugin doesn't work with old gatsby version...
import React from "react";
export function onRenderBody(
  { setHeadComponents }
) {
 setHeadComponents([
  <script async
    src="https://www.googletagmanager.com/gtag/js?id=G-13S48FE4TJ"
  />,
  <script
  dangerouslySetInnerHTML={{
    __html: `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
  
    gtag('config', 'G-13S48FE4TJ');
  `,
  }}
  />
  ]);
}
