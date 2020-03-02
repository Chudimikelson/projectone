import React from 'react';
import PaypalBtn from 'react-paypal-checkout';
 
export default class PaypalButton extends React.Component {
    render() {		
        const onSuccess = (payment) => {
            // Congratulation, it came here means everything's fine!
            console.log("The payment was succeeded!", payment);
        }		
 
        const onCancel = (data) => {
            // User pressed "cancel" or close Paypal's popup!
            console.log('The payment was cancelled!', data);
        }	
 
        const onError = (err) => {
            // The main Paypal's script cannot be loaded or somethings block the loading of that script!
            console.log("Error!", err);		
        }			
 
        let env = 'sandbox'; // you can set here to 'production' for production
        let currency = 'USD'; // or you can set this value from your props or state  
        let total = this.props.amount;  // same as above, this is the total amount (based on currency) to be 
        let locale = 'en_US'; 
        // For Customize Style: https://developer.paypal.com/docs/checkout/how-to/customize-button/
        let style = {
            'label':'Donate', 
            'tagline': false, 
            'size':'medium', 
            'shape':'pill', 
            'color':'gold'
        };
 
        const client = {
          sandbox:    'AS4Dk3PhyiOYPKen9sJjkg6pE0K_U4J7NfQbhbGWHS2ojBi4JETKoOaXLBoh83OxbnxMxEsPDTsB1a70',
          production: 'AWnLIFX9ZCz8sz2aNyiNvP35g5cGH-wKfxs4vb3YkN_E22Eep-QbPp9r-eiv9VjfF6vbT7WxraEASN2v',
        }
        // In order to get production's app-ID, you will have to send your app to Paypal for approval first
        // For sandbox app-ID (after logging into your developer account, please locate the "REST API apps" section, click "Create App"): 
        //   => https://developer.paypal.com/docs/classic/lifecycle/sb_credentials/
        // For production app-ID:
        //   => https://developer.paypal.com/docs/classic/lifecycle/goingLive/		
 
        // NB. You can also have many Paypal express checkout buttons on page, just pass in the correct amount and they will work!		  
        return (
            <PaypalBtn 
                env={env} 
                client={client} 
                currency={currency} 
                total={total} 
                locale={locale} 
                style={style}
                onError={onError} 
                onSuccess={onSuccess} 
                onCancel={onCancel} />
        );
    }
}