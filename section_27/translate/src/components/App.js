import React, { useState } from "react";
import UserCreate from "./UserCreate";

class App extends React.Component {
  state = { language: "english" };

  onLanguageChange = (language) => {
    this.setState({ language });
  };

  render() {
    return (
      <div className="ui container">
        <div>Select a language</div>
        <i
          className="flag us"
          onClick={() => this.onLanguageChange("english")}
        ></i>
        <i
          className="flag nl"
          onClick={() => this.onLanguageChange("dutch")}
        ></i>
        <UserCreate />
      </div>
    );
  }
}

// const App = () => {
//   const [language, setLanguage] = useState('english')

//   const onLanguageChange = (language) => {
//     setLanguage(language)
//   }

//   return (
//       <div className="ui container">
//         <div>Select a language</div>
//         <i
//           className="flag us"
//           onClick={() => onLanguageChange("english")}
//         ></i>
//         <i
//           className="flag nl"
//           onClick={() => onLanguageChange("dutch")}
//         ></i>
//         <UserCreate/>
//       </div>
//     );
// };

export default App;
