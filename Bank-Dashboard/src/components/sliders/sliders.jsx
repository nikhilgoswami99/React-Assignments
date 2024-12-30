import styles from "./sliders.module.css";

function Data_Sliders(props) {
    
  return (
    <>
      <div className={styles.slider_container}>
        <div className={styles.slider_info}>
          <h4>Home Value</h4>
          <h5>${props.homeValue}</h5>
          <input
            className={styles.sliders}
            min={1000}
            max={10000}
            step={100}
            type="range"
            onChange={props.onChangeData}
          />
          <div className={styles.min_max_value}>
            <span>$1000</span>
            <span>$10000</span>
          </div>


          
        </div>

        <div className={styles.slider_info}>
          <h4>Down Payment</h4>
          <h5>${props.downPayment}</h5>
          <input
            className={styles.sliders}
            min={0}
            max={3000}
            step={100}
            type="range"
            onChange={props.onChangeData}
          />
          <div className={styles.min_max_value}>
            <span>$0</span>
            <span>$3000</span>
          </div>


          
        </div>

        <div className={styles.slider_info}>
          <h4>Loan Amount</h4>
          <h5>${props.loanAmount}</h5>
          <input
            className={styles.sliders}
            min={0}
            max={3000}
            step={100}
            type="range"
            onChange={props.onChangeData}
          />
          <div className={styles.min_max_value}>
            <span>$0</span>
            <span>$3000</span>
          </div>

        </div>

        <div className={styles.slider_info}>
          <h4>Interest Rate</h4>
          <h5>{props.interestRate}%</h5>
          <input
            className={styles.sliders}
            min={2}
            max={18}
            step={1}
            type="range"
            onChange={props.onChangeData}
          />
          <div className={styles.min_max_value}>
            <span>2%</span>
            <span>18%</span>
          </div>
          
        </div>

        <div onChange={props.onChangeData} className={styles.tenure_info}>
          <select className={styles.tenure} name="tenure" id="">
            <option value="5">5 years</option>
            <option value="10">10 years</option>
            <option value="15">15 years</option>
            <option value="20">20 years</option>
            <option value="25">25 years</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default Data_Sliders;
