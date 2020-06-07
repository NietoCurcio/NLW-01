import React from 'react';
import './App.css';
// import Header from './Header';

// JSX: Sintaxe de XML dentro do Javascript

// import React from 'react';

// interface HeaderProps { // way to define the type of a object, or any type
//     title?: string //? nao obrigatoria, sem é obrigatoria
// } 

// const Header: React.FC<HeaderProps> = (props) => { // Gerenic is a type of typescript, that can receive a param
//     return (
//         <header>
//             <h1>{props.title}</h1>
//         </header>
//     );
// }

// export default Header;

import Routes from './routes'

function App() {

  // em vez de alterar o valor que ja existe no estado, 
  // criar um novo valor pra esse estado com as modicifações - imutabilidade
  // const [counter, setCounter] = useState(0); // [state value, function to update value]
  // nao eh alteradao o valor do counter, eh atribuido um novo valor pelo setCounter, imutabilidade

  return (
    <Routes />
  );
}

export default App;
