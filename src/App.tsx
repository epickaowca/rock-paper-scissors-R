import { FC } from "react";
import Typo from "./components/atoms/typography/Typography";

const App: FC = () => {
  return (
    <div>
      <Typo content="Bla Bla" htmlTag="p" />
    </div>
  );
};

export default App;
