open ReasonReact;
let mobilNav =
  Css.[
    media(
      "(max-width: 768px)",
      [display(`flex), justifyContent(`spaceBetween), alignItems(`center)],
    ),
  ];
let logoSM =
  Css.[
    media(
      "(max-width: 768px)",
      [fontSize(13.5->rem), Css.margin2(~v=0.0->rem, ~h=0.0->rem)],
    ),
  ];

let navSM =
  Css.style(
    Css.[
      display(`flex),
      justifyContent(`spaceEvenly),
      margin(0.0->rem),
      padding(1.0->rem),
    ],
  );
let finalLogo = [logoSM]->List.concat->Css.style;
let finalNav = [mobilNav]->List.concat->Css.style;
[@react.component]
let make = () => {
  let (isOpen, setIsOpen) = React.useState(() => false);
  <>
    <nav className="blue">
      <div className={"nav-wrapper container " ++ finalNav}>
        <a className={"brand-logo" ++ finalLogo}>
          {"Reasonml blog" |> string}
        </a>
        <ul className="right hide-on-med-and-down">
          <li> <a href="sass.html"> {"Sass" |> string} </a> </li>
          <li> <a href="badges.html"> {"Components" |> string} </a> </li>
          <li> <a href="collapsible.html"> {"JavaScript" |> string} </a> </li>
        </ul>
        <span
          className="hide-on-large-only" onClick={_ => setIsOpen(op => !op)}>
          <i className="material-icons">
            {(isOpen ? "arrow_drop_down" : "arrow_drop_up") |> string}
          </i>
        </span>
      </div>
    </nav>
    {isOpen
       ? <ul className={"hide-on-large-only blue " ++ navSM}>
           <li>
             <a href="sass.html" className="white-text">
               {"Sass" |> string}
             </a>
           </li>
           <li>
             <a href="badges.html" className="white-text">
               {"Components" |> string}
             </a>
           </li>
           <li>
             <a href="collapsible.html" className="white-text">
               {"JavaScript" |> string}
             </a>
           </li>
         </ul>
       : null}
  </>;
};