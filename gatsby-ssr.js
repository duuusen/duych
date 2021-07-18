// ugly workaround, since new analytics plugin doesn't work with old gatsby version...
import React from "react";
export function onRenderBody(
  { setHeadComponents }
) {
 setHeadComponents([
  <script async
    async src="https://www.googletagmanager.com/gtag/js?id=G-5VVPBDFZBB"
  />,
  <script
  dangerouslySetInnerHTML={{
    __html: `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
  
    gtag('config', 'G-5VVPBDFZBB');
  `,
  }}
  />
  ]);
}