import styles from './chart.module.css'
import { Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
  } from 'chart.js';

  ChartJS.register(ArcElement, Tooltip, Legend);

function Chart(props) 
{
    // calculation of creating pie chart
  const totalLoanMonths = (props.loanTerm * 12).toFixed(2);
  
  const interestPerMonth = props.interestRate / 100 / 12;
  
  const monthlyPaymentValue =
    ((props.loanAmount *
      interestPerMonth *
      (1 + interestPerMonth) ** totalLoanMonths) /
    ((1 + interestPerMonth) ** totalLoanMonths - 1)).toFixed(2);
    
  const totalInterestGenerated = (monthlyPaymentValue * totalLoanMonths - props.loanAmount).toFixed(2);

 const pieChartData = {
    labels: ["Principle", "Interest"],
    datasets: [{
        label: "Ratio of Principle and Interest",
        data: [props.homeValue, totalInterestGenerated],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ['rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)'],
        borderWidth: [2],
    }]
 }


    return <>
    <div className={styles.chart_container}>
        <p className={styles.monthly_payment}>Monthly Payment - ${monthlyPaymentValue}</p>
        <Pie data={pieChartData}></Pie>
    </div>
    </>
}

export default Chart