import React, { Component } from 'react';

class MapProductData extends Component {

    render() { 
        let products = {"number":[],"name": [],"price": [], "tax": [], "total": []}
        const {/*domainName, domainRegistration, emailAddress,*/ totalPrice} = this.props.productData;
        for (let i = 0; i < totalPrice["number"].length; i++) {
            products["number"][i]   = i;
            products["name"][i]     = totalPrice.name[i];
            products["price"][i]    = totalPrice.price[i];
            products["tax"][i]      = totalPrice.tax[i];
            products["total"][i]    = totalPrice.total[i];         
        }

        let allCombinedPrice = 0;
        for (let i = 0; i < products["total"].length; i++) {
            allCombinedPrice = allCombinedPrice + products["total"][i];
        }
        return (             
            <React.Fragment>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Product</th>
                            <th scope="col">Price</th>
                            <th scope="col">Tax</th>
                            <th scope="col">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products['number'].map(num => (
                        <tr key={num + "_tr"}>
                            <th key={num + "_th"} scope="row">{num + 1}</th>
                            <td key={num + "_name"}>{products['name'][num]}</td>
                            <td key={num + "_price"}>{products['price'][num].toFixed(2)}$</td>
                            <td key={num + "_tax"}>{products['tax'][num].toFixed(2)}$</td>
                            <td key={num + "_total"}>{products['total'][num].toFixed(2)}$</td>
                        </tr>
                        ))

                        }
                        <tr>
                            <th scope="row"></th>
                            <td>Total USD per year : </td>
                            <td></td>
                            <td></td>
                            <td>{allCombinedPrice.toFixed(2)}$</td>
                        </tr>
                    </tbody>
                </table>
            </React.Fragment>)
    }
}
 

export default MapProductData;