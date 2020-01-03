import React from 'react';

const PriceCalc = (props) => {
    let products = {"number":[],"name": [],"price": [], "tax": [], "total": []}
    const {newDomain, checkBoxEmailSetup, domainName, customEmail, price} = props;
    if(newDomain){
        products["number"][0] = 0;
        products["name"][0] = "Registration "+ domainName +" yearly";
        products["price"][0] = price.registerDomain;
        products["tax"][0] = price.registerDomain*0.13;
        products["total"][0] = price.registerDomain * 0.13 + price.registerDomain;
    }else{
        products["number"][0] = 0;
        products["name"][0] = "No Domain name selected";
        products["price"][0] = 0;
        products["tax"][0] = 0;
        products["total"][0] = 0;
    }

    if(checkBoxEmailSetup){
        products["number"][1] = 1;
        products["name"][1] = "Email Setup & maintenance " + customEmail +"@"+ domainName + " yearly";
        products["price"][1] = price.yearlyPrice;
        products["tax"][1] = price.yearlyPrice * 0.13;
        products["total"][1] = price.yearlyPrice * 0.13 + price.yearlyPrice;
    }
    let totalPrice = 0;
    for (let i = 0; i < products["total"].length; i++) {
        totalPrice = totalPrice + products["total"][i];
    }
    return(
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
                            <th className="padding3px" key={num + "_th"} scope="row">{num + 1}</th>
                            <td key={num + "_name"}>{products['name'][num]}</td>
                            <td key={num + "_price"}>{products['price'][num].toFixed(2)}$</td>
                            <td key={num + "_tax"}>{products['tax'][num].toFixed(2)}$</td>
                            <td key={num + "_total"}>{products['total'][num].toFixed(2)}$</td>
                        </tr>
                        ))

                        }
                        <tr>
                            <th scope="row"></th>
                            <td className="col-1">Total price (USD) per year</td>
                            <td className="col"></td>
                            <td className="col"></td>
                            <td className="col">{totalPrice.toFixed(2)}$</td>
                        </tr>
                    </tbody>
                </table>
            </React.Fragment>
        )
}

 
export default PriceCalc;