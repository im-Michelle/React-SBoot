import { useEffect } from "react";
import { useState } from "react";

export const FormItemsView = ({handler}) => {

    const [formItemsState, setFormItemsState] = useState({
        product: '',
        price: '',
        quantity: ''
    });

    const { product, price, quantity } = formItemsState;

    useEffect(() => {
        // console.log('El precio cambió!')
    }, [price]);

    useEffect(() => {
        // console.log('El formItemsState cambió!')
    }, [formItemsState]);

    const onInputChange = ({ target: { name, value } }) => {
        // console.log(name);
        // console.log(value);
        setFormItemsState({
            ...formItemsState,
            [name]: value
        });
    };

    const onInvoiceItemsSubmit = (event) => {
        event.preventDefault();
        if (product.trim().length <= 1) return;
        if (price.trim().length <= 1) return;
        if (isNaN(price.trim())) {
            alert('Error el precio no es un número');
            return;
        }
        if (quantity.trim().length < 1) return;
        if (isNaN(quantity.trim())) return;

        handler(formItemsState);

        setFormItemsState({
            product: '',
            price: '',
            quantity: ''
        });


    };

    return (
        <>


            <form className="w-50" onSubmit={onInvoiceItemsSubmit}>
                <input
                    type="text"
                    name="product"
                    value={product}
                    placeholder="Product" className="form-control m-3"
                    onChange={onInputChange} />
                <input
                    type="text"
                    name="price"
                    value={price}
                    placeholder="Price" className="form-control m-3"
                    onChange={
                        onInputChange
                    } />
                <input
                    type="text"
                    name="quantity"
                    value={quantity}
                    placeholder="Quantity" className="form-control m-3"
                    onChange={
                        onInputChange
                    } />
                <button
                    type="submit"
                    className="btn btn-primary m-3">
                    Create Item</button>
            </form>
        </>
    )
}