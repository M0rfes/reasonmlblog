// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as Css from "../../node_modules/bs-css/src/Css.js";
import * as List from "../../node_modules/bs-platform/lib/es6/list.js";
import * as Curry from "../../node_modules/bs-platform/lib/es6/curry.js";
import * as React from "react";

var mobilNav_000 = Css.media("(max-width: 768px)", /* :: */[
      Css.display(/* flex */-1010954439),
      /* :: */[
        Css.justifyContent(/* spaceBetween */516682146),
        /* :: */[
          Css.alignItems(/* center */98248149),
          /* [] */0
        ]
      ]
    ]);

var mobilNav = /* :: */[
  mobilNav_000,
  /* [] */0
];

var logoSM_000 = Css.media("(max-width: 768px)", /* :: */[
      Css.fontSize(Css.rem(13.5)),
      /* :: */[
        Css.margin2(Css.rem(0.0), Css.rem(0.0)),
        /* [] */0
      ]
    ]);

var logoSM = /* :: */[
  logoSM_000,
  /* [] */0
];

var navSM = Css.style(/* :: */[
      Css.display(/* flex */-1010954439),
      /* :: */[
        Css.justifyContent(/* spaceEvenly */-1016061555),
        /* :: */[
          Css.margin(Css.rem(0.0)),
          /* :: */[
            Css.padding(Css.rem(1.0)),
            /* [] */0
          ]
        ]
      ]
    ]);

var finalLogo = Css.style(List.concat(/* :: */[
          logoSM,
          /* [] */0
        ]));

var finalNav = Css.style(List.concat(/* :: */[
          mobilNav,
          /* [] */0
        ]));

function Nav(Props) {
  var match = React.useState((function () {
          return false;
        }));
  var setIsOpen = match[1];
  var isOpen = match[0];
  return React.createElement(React.Fragment, undefined, React.createElement("nav", {
                  className: "blue"
                }, React.createElement("div", {
                      className: "nav-wrapper container " + finalNav
                    }, React.createElement("a", {
                          className: "brand-logo" + finalLogo
                        }, "Reasonml blog"), React.createElement("ul", {
                          className: "right hide-on-med-and-down"
                        }, React.createElement("li", undefined, React.createElement("a", {
                                  href: "sass.html"
                                }, "Sass")), React.createElement("li", undefined, React.createElement("a", {
                                  href: "badges.html"
                                }, "Components")), React.createElement("li", undefined, React.createElement("a", {
                                  href: "collapsible.html"
                                }, "JavaScript"))), React.createElement("span", {
                          className: "hide-on-large-only",
                          onClick: (function (param) {
                              return Curry._1(setIsOpen, (function (op) {
                                            return !op;
                                          }));
                            })
                        }, React.createElement("i", {
                              className: "material-icons"
                            }, isOpen ? "arrow_drop_down" : "arrow_drop_up")))), isOpen ? React.createElement("ul", {
                    className: "hide-on-large-only blue " + navSM
                  }, React.createElement("li", undefined, React.createElement("a", {
                            className: "white-text",
                            href: "sass.html"
                          }, "Sass")), React.createElement("li", undefined, React.createElement("a", {
                            className: "white-text",
                            href: "badges.html"
                          }, "Components")), React.createElement("li", undefined, React.createElement("a", {
                            className: "white-text",
                            href: "collapsible.html"
                          }, "JavaScript"))) : null);
}

var make = Nav;

export {
  mobilNav ,
  logoSM ,
  navSM ,
  finalLogo ,
  finalNav ,
  make ,
  
}
/* mobilNav Not a pure module */
