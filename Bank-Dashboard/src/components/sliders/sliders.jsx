import styles from "./sliders.module.css";

function Data_Sliders(props) {
    // console.log(props);
    
  return (
    <>
      <div className={styles.slider_container}>
        <div className={styles.slider_info}>
          <h4 className={styles.slider_name}>Home Value</h4>
          <h5 className={styles.slider_value}>${props.homeValue}</h5>
          <input
            className={styles.sliders}
            min={1000}
            max={10000}
            step={100}
            type="range"
            onChange={props.onChangeData}
            name="home"
            value={props.homeValue}
          />
          <div className={styles.min_max_value}>
            <span>$1000</span>
            <span>$10000</span>
          </div>


          
        </div>

        <div className={styles.slider_info}>
          <h4 className={styles.slider_name}>Down Payment</h4>
          <h5 className={styles.slider_value}>${props.downPayment}</h5>
          <input
            className={styles.sliders}
            min={0}
            max={props.homeValue}
            step={100}
            type="range"
            onChange={props.onChangeData}
            name="down"
            value={props.downPayment}
          />
          <div className={styles.min_max_value}>
            <span>$0</span>
            <span>${props.homeValue}</span>
          </div>


          
        </div>

        <div className={styles.slider_info}>
          <h4 className={styles.slider_name}>Loan Amount</h4>
          <h5 className={styles.slider_value}>${props.loanAmount}</h5>
          <input
            className={styles.sliders}
            min={0}
            max={props.homeValue}
            step={100}
            type="range"
            onChange={props.onChangeData}
            name="loan"
            value={props.loanAmount}
          />
          <div className={styles.min_max_value}>
            <span>$0</span>
            <span>${props.homeValue}</span>
          </div>

        </div>

        <div className={styles.slider_info}>
          <h4 className={styles.slider_name}>Interest Rate</h4>
          <h5 className={styles.slider_value}>{props.interestRate}%</h5>
          <input
            className={styles.sliders}
            min={2}
            max={18}
            step={1}
            type="range"
            onChange={props.onChangeData}
            name="interest"
            value={props.interestRate}
          />
          <div className={styles.min_max_value}>
            <span>2%</span>
            <span>18%</span>
          </div>
          
        </div>

        <fieldset onChange={props.onChangeData} className={styles.tenure_info}>
          <legend className={styles.slider_name}>Tenure</legend>
          <select className={styles.tenure} name="tenure" id="tenure">
            <option value="5">5 years</option>
            <option value="10">10 years</option>
            <option value="15">15 years</option>
            <option value="20">20 years</option>
            <option value="25">25 years</option>
          </select>
        </fieldset>
      </div>
    </>
  );
}

export default Data_Sliders;
