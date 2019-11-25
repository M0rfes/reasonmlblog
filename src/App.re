open ReasonReact;
[@react.component]
let make = () => {
  let url = ReasonReactRouter.useUrl();
  <>
    <Nav />
    {switch (url.path) {
     | ["blog"] => <BlocgList />
     | _ => <div> {"404" |> string} </div>
     }}
  </>;
};