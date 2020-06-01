import React from 'react';

const PaymentOptionList = props => {

    const content = props.paymentOptions.map( paymentoption => {
        return (
            
                <div key={paymentoption.id} className="col s12 m6 l6">
                    <div className={`card tiles ${paymentoption.color}`}>
                        <a title={paymentoption.title} href="#">
                            <div className="card-content white-text center-align">
                                <div className="cardbox-icon">
                                    <i className="material-icons">{paymentoption.icon}</i>
                                </div>
                                <div className="card-details">
                                    <h4>{paymentoption.title}</h4>
                                    <span><i className="material-icons">{paymentoption.IconForDesign}</i></span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
           
        )
    });

    return (
        <div className="row">{content}</div>
      );
};

export default PaymentOptionList;