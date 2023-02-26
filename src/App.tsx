import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import NewComponent, {FilterType} from "./NewComponent";

// function App() {
//   let [a, setA] = useState(1)
//   const onClickHandler = () => {
//     setA(++a)
//     console.log(a)
//   }
//   const buttonZeroHandler = () => {
//       setA(0)
//   }
//   return (
//     <div className="App">
//       <h1>{a}</h1>
//       <button onClick={onClickHandler}>number</button>
//         <button onClick={buttonZeroHandler}>0</button>
//     </div>
//   );
// }
//
// export default App;


const App = () => {



    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])


    const [filter, setFilter] = useState<FilterType>('all')

    let currentMoney = money;

    if(filter === 'dollar'){
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'Dollars')
    }
    if(filter === 'ruble'){
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'RUBLS')
    }

    const onClickFilterHandler = (nameButton: FilterType) => {
        setFilter(nameButton)
    }

    return (
        <NewComponent currentMoney = {currentMoney} onClickFilterHandler={onClickFilterHandler}/>
    );
};

export default App;
