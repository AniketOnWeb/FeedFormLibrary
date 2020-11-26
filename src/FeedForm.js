import React, { useEffect } from "react";

const FeedForm = ({ props }) => {
  const fn = (e, t, p) => {
    e.helppieData = e.helppieData || [];
    e.helppie = function () {
      e.helppieData.push(arguments);
    };
    const n = t.createElement("script"),
      c = t.getElementsByTagName("script")[0];
    n.type = "application/javascript";
    n.src = `https://helppie.me/widget.js?id=${p.widgetId}`;
    // console.log(e,t,p)
    n.async = !0;
    c.parentNode.insertBefore(n, c);
  };

  useEffect(() => {
    fn(window, document, props);
  }, []);

  return (
    <span className={props.className} open-helppie-widget="true">
      {props.children}
    </span>
  );
};

export default FeedForm;
