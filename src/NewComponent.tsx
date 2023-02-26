import React from 'react';

type PropsType = {
    currentMoney:Array<MoneyType>
    onClickFilterHandler:(nameButton:FilterType)=> void
}
type MoneyType = {
    banknots: string
    value: number
    number: string
}
export type FilterType = 'all'|'ruble'|'dollar'

const NewComponent = (props:PropsType) => {
    return (
        <div>
            <>
                <ul>
                    {props.currentMoney.map((objectFromMoneyArray, index) => {
                        return (
                            <li key={index}>
                                <span>{objectFromMoneyArray.banknots}</span>
                                <span> {objectFromMoneyArray.value}</span>
                                <span>{objectFromMoneyArray.number}</span>
                            </li>
                        )
                    })}
                </ul>
                <div style={{marginLeft: '35px'}}>
                    <button onClick={()=>props.onClickFilterHandler('all')}>all</button>
                    <button onClick={()=>props.onClickFilterHandler('ruble')}>ruble</button>
                    <button onClick={()=>props.onClickFilterHandler('dollar')}>dollar</button>
                </div>
            </>
        </div>
    );
};

export default NewComponent;