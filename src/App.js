import React from "react";
import Router from "./routes";
import ThemeProvider from './theme';
import ThemeSettings from './components/settings';
import Toggle from "./Toggle";

function App() {
  const [toggled, setToggled] = React.useState(false);

  return (
    <>
      <div className="App">
        <Toggle />
      </div>
      <ThemeProvider>
        <ThemeSettings>
          <Router />
        </ThemeSettings>
      </ThemeProvider>
    </>
  );
}

export default App;
