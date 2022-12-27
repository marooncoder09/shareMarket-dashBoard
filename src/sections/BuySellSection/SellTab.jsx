import { useState } from "react";
import Field from "../../components/form/Field.jsx";
import Form from "../../components/form/Form.jsx";

const SellTab = () => {
    const handleSell = () => {

    };

    return (
        <div>
            <Form onSubmit={handleSell} className="form">
                <Field type='number' label="At Price" name='atPrice' />
                <Field type='number' label="Amount" name='amount' />
                <Field type='number' label="Total" name='total' />
                <button className="button is-danger">SELL</button>
            </Form>
        </div>
    );
};

export default SellTab;