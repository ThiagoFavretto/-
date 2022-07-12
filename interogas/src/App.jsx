import { useState,useEffect } from 'react'

import { ButtonContainer, Container,Clock,Square,WrapH1,WrapH2,WrapM1,WrapM2,Button } from "./scss";

function App() {
  const [h1, setH1] = useState([]);
  const [h2, setH2] = useState([]);
  const [m1, setM1] = useState([]);
  const [m2, setM2] = useState([]);

  const [theme, setTheme] = useState();

  const [gambia, setGambia] = useState();

  function prencherArray(tempo, array) {
    for(let i = 0; i <= parseInt(tempo) - 1; i++) {
      array[i] = true;
    }

    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array
  }

  function shuffleArray() {
    let date = new Date;
    let horaString = date.getHours().toString();
    if(horaString.length === 1) {
      horaString = `0${horaString}`;
    }
    let [hora1, hora2] = horaString.split('');
    let arrayHora1 = [false, false, false];
    let arrayHora2 = [false, false, false, false, false, false, false, false, false];

    arrayHora1 = prencherArray(hora1, arrayHora1);
    arrayHora2 = prencherArray(hora2, arrayHora2);

    let minutoString = date.getMinutes().toString();
    if(minutoString.length === 1) {
      minutoString = `0${minutoString}`
    }
    let [minuto1, minuto2] = minutoString.split('');
    let arrayMinuto1 = [false, false, false, false, false, false];
    let arrayMinuto2 = [false, false, false, false, false, false, false, false, false];

    arrayMinuto1 = prencherArray(minuto1, arrayMinuto1);
    arrayMinuto2 = prencherArray(minuto2, arrayMinuto2);

    setH1(arrayHora1);
    setH2(arrayHora2);
    setM1(arrayMinuto1);
    setM2(arrayMinuto2);

}

function changeTheme() {
  if(theme === 1) {
    setTheme(2)
    localStorage.setItem("theme", 2);
  } else {
    setTheme(1)
    localStorage.setItem("theme", 1);
  }
  
}

useEffect(() => {
  let t = localStorage.getItem("theme");
  if(t) {
    setTheme(parseInt(t));
  }
  console.log(theme, 'thema')
  console.log(t, '4949')
  shuffleArray();
  setInterval(() => {
    shuffleArray();
  }, 5000);

}, [gambia]);

  return (
    <Container>
      <Clock>
      <WrapH1>
        {h1.map((i) => (
        <Square param={{
          i,
          cor: '#d81717',
          theme
        }}></Square>
      ))}
      </WrapH1>
      <WrapH2>
        {h2.map((i) => (
        <Square param={{
          i,
          cor: '#2fbd3f',
          theme
        }}></Square>
      ))}
      </WrapH2>
      <WrapM1>
        {m1.map((i) => (
        <Square param={{
          i,
          cor: '#1d57dd',
          theme
        }}></Square>
      ))}
      </WrapM1>
      <WrapM2>
        {m2.map((i) => (
        <Square param={{
          i,
          cor: '#da710c',
          theme
        }}></Square>
      ))}
      </WrapM2>
      </Clock>

<ButtonContainer>
      <Button onClick={() => changeTheme()}>Theme</Button>
</ButtonContainer>
    </Container>
  )
}

export default App
