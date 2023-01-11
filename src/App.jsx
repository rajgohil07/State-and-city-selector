import { ParentComponent } from "./component/ParentComponent/ParentComponent";

const App = () => (
  <div
    style={{
      width: "50%",
      // margin: "20px auto",
      backgroundColor: "lightgreen",
      padding: "20px 10px",
      borderRadius: "30px",
      // minHeight: '100vh'
      position: "absolute",
      left: "50%",
      top: "50%",
      webkitTransform: "translate(-50%, -50%)",
      transform: "translate(-50%, -50%)",
      border: "1px black solid",
    }}
  >
    <ParentComponent />
  </div>
);

export { App };
