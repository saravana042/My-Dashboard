import React from 'react';
import PaymentOptionList from './PaymentOptionList';
import axios from 'axios';

class PaymentOption extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            paymentOption: []
        };
    }

    componentDidMount(){
        axios.get('data/paymentOption.json')
        .then((result) => {
            this.setState({
                paymentOption: result.data
             });
        }).catch(function (error) {
            console.log(error);
        });
    }

    render(){
        return(
            <div className="paymentOption">
               <div className="row">
                    <div className="col s12 m12 l12">
                        <div className="card">
                            <div className="card-content">
                            <h3>Payment option</h3>
                                
                                <PaymentOptionList paymentOptions ={this.state.paymentOption} />
                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default PaymentOption;