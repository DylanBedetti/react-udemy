import React from "react";

const Link = ({ className, href, children }) => {
  const onClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();
    window.history.pushState({}, "", href);

    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  const classNameActive =
    window.location.pathname === href ? className + " active" : className;

  return (
    <a onClick={onClick} className={classNameActive} href={href}>
      {children}
    </a>
  );
};

export default Link;
