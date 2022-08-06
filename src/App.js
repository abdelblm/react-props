import "./App.css";
import Profile from "./profile/Profil";
import Image from "./profile/Image.png";

function App() {
  const alertMyInput =fullName=>alert(fullName)
  return (
    <div className="App">
      <Profile fullName="FullName" alertMyInput={alertMyInput} bio="Bio" profession="Profession">
        <img  src={Image} alt="" width={100} height={100}/>
      </Profile>
    </div>
  );
}

export default App;
