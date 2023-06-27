import React, { useState } from 'react';
import { Card } from '../../components/UI/Card/Card';
import { HiOutlineDownload }  from 'react-icons/hi';

type Transaction = {
    type: 'deposit' | 'play';
    amount: number;
};

type User = {
    money: number;
};

export const DashboardAmout: React.FC = () => {
    const [user, setUser] = useState<User>({ money: 0 });

    const handleTransaction = (transaction: Transaction) => {
        if (transaction.type === 'deposit') {
            setUser((prevState) => ({ ...prevState, money: prevState.money + transaction.amount }));
        } else if (transaction.type === 'play') {
            setUser((prevState) => ({ ...prevState, money: prevState.money - transaction.amount }));
        }
    };

    return (
        <div className='p-4'>
            <Card className='bg-[#EEF0F2] text-black p-3'>
                <div className='text-center'>
                    <h2 className='font-bold text-xl'>${user.money}.00</h2>
                    <p className='text-[12px]'>Account balance</p>
                </div>
                <button onClick={() => handleTransaction({ type: 'deposit', amount: 50 })} className='bg-[#3F84E5] text-white p-2 rounded-full font-bold text-2xl'><HiOutlineDownload /></button>
                <button onClick={() => handleTransaction({ type: 'play', amount: 30 })}>Play Game (-$30)</button>
            </Card>
        </div>
    );
};
