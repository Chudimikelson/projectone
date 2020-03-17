import React, {Component} from 'react';
import Paypal from './PaypalButton';
class Donate extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      checked: false,
      fee: 0,
      amount: 0 ,
      otherAmount: '',
      total: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleOtherAmount = this.handleOtherAmount.bind(this);
    this.handleChecked = this.handleChecked.bind(this);
  }

  handleChange = (event) => {
    const target = event.target;
    let value = parseInt(target.value);
    const name = target.name;
    this.setState({[name]: value}); 
  }
  
  handleChecked = () => {
    this.setState({checked: !this.state.checked});
  } 
  handleOtherAmount = (event) => {
    this.setState({otherAmount: event.target.value});
  }
 update () {
   this.setState({total: this.state.amount});
 }
  render () {
    
  return (
    <React.Fragment>
      <div className="container">
        <div className="section-heading text-center">
          <h2>Donate </h2>
          <p className="lead text-secondary">Ensure that all children have the opportunity to realize their fullest potential.</p>
        </div>        
        <div className="gap-y row">
          <div className="col-md-4">
            <div className="shadow-box shadow-hover border-0 card">
              <div className="card-body text-center">
                <input onChange={this.handleChange} type="radio" name="amount" value="100"/>
                <p className="mb-0">$100</p>
                <p className="mb-0">fund a high schooler's SAT prep materials</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="shadow-box shadow-hover border-0 card">
              <div className="card-body text-center">
                <input onChange={this.handleChange} type="radio" name="amount" value="250"/>
                <p className="mb-0">$250</p>
                <p className="mb-0">fund science needs for an early childhood class</p> 
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="shadow-box shadow-hover border-0 card">
              <div className="card-body text-center">
                <input onChange={this.handleChange} type="radio" name="amount" value="500"/>
                <p className="mb-0">$500</p>
                <p className="mb-0">fund a classroom's annual vision screening</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="shadow-box shadow-hover border-0 card">
              <div className="card-body text-center">
                <input onChange={this.handleChange} type="radio" name="amount" value="1000"/>
                <p className="mb-o">$1000</p>
                <p className="mb-o">fund a child's week at Wagon Road Camp</p>               
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="shadow-box shadow-hover border-0 card">
              <div className="card-body text-center">
                <input onChange={this.handleChange} type="radio" name="amount" value="2500"/>
                <p className="mb-o">$2500</p>
                <p className="mb-o">fund a career training for a teen in foster care</p>  
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="shadow-box shadow-hover border-0 card">
              <div className="card-body text-center">
              <input onChange={this.handleChange} type="radio" name="amount" value={this.state.otherAmount}/>
            <p className="mb-o">
              $<input 
                name="amount"
                value= {this.state.otherAmount} 
                onChange =  { this.handleOtherAmount} 
                onBlur={this.handleChange}
                placeholder="25 minimum"               
              />              
            </p><p className="mb-o">Other Amount </p>
              </div>
            </div>            
          </div>
          <div className="col-md-6">
          
            <div className="text-center">
              <p>Donate ${this.state.amount}<a className="btn btn-rounded btn-success ml-3 px-3" ><span className=" bold">PAYPAL</span></a></p>
              <Paypal/>
              <p>Children's Aid is exempt from federal income tax under section 501(c)(3) of the Internal Revenue Code, and contributions are tax-deductable to the extent allowed by law. Our Federal Identification Number is 13-5562191
              </p>
            </div>
          </div>
          <div className="col-md-6">
              <p><input        
              type="checkbox"
              onChange={this.handleChecked}/>$3.00</p>
            <p>I'd like to cover the transaction fee so 100% of my gift goes to Children's Aid</p>
          </div>
          <div className="more-ways col-md-6">More ways to give</div>
        </div>  
      </div>
    </React.Fragment>
  );

  }
}

export default Donate;
