import { useState } from "react";
import Field from "../../components/form/Field.jsx";
import Form from "../../components/form/Form.jsx";

const BuyTab = () => {
    const handleBuy = data => {
        console.log(data.get('atPrice'));
    };

    return (
        <div>
            <Form onSubmit={handleBuy} className="form">
                <Field type='number' label="At Price" name='atPrice' />
                <Field type='number' label="Amount" name='amount' />
                <Field type='number' label="Total" name='total' />
                <button className="button is-success">BUY</button>
            </Form>
        </div>
    );
};

export default BuyTab;