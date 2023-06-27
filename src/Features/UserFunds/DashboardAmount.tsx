import React, { useState } from 'react';

type Transaction = {
    type: 'deposit' | 'play';
    amount: number;
};

type User = {
    money: number;
};

export const DashboardAmout: React.FC = () => {
    const [user, setUser] = useState<User>({ money: 100 });

    const handleTransaction = (transaction: Transaction) => {
        if (transaction.type === 'deposit') {
            setUser((prevState) => ({ ...prevState, money: prevState.money + transaction.amount }));
        } else if (transaction.type === 'play') {
            setUser((prevState) => ({ ...prevState, money: prevState.money - transaction.amount }));
        }
    };

    return (
        <div>
            <h1>Dashboard</h1>
            <p>Money: ${user.money}</p>
            <button onClick={() => handleTransaction({ type: 'deposit', amount: 50 })}>Deposit $50</button>
            <button onClick={() => handleTransaction({ type: 'play', amount: 30 })}>Play Game (-$30)</button>
        </div>
    );
};
