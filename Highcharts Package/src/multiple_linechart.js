import React from 'react';
import ReactDom from 'react-dom';
import Highcharts, { color } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

class Multiple_LineChart extends React.Component {

    render() {
      const {params} = this.props;
      const { data, title, options, type } = params;
      const seriesData1 =  [];
      const seriesData2 =  [];
      const categories = [];
      for (let i in data.data) {
        categories.push(data.data[i][options.xname]);
      }
     for (let i in data.data) {
        seriesData1.push(data.data[i][options.yname1]);
     }
     for (let i in data.data) {
        seriesData2.push(data.data[i][options.yname2]);
      }
      const chartOptions = {
  chart: {
    type: type,
    align : 'center',
    backgroundColor: 'transparent'
  },
  title: {
    text: title,
    style: {
        color: '#efefef'
      }
  },
  yAxis: {
   categories: categories,
    labels: {
        style: {
          color: '#efefef'
        }
      },
    title: {
      text : "values",
      style: {
        color : '#efefef'
      }
    }
  },
  xAxis: {
    categories: categories,
    labels: {
        style: {
          color: '#efefef'
        }
      }
  },
  legend: {
    align: 'center'
  },
  series: [
    {
      data: seriesData1,
      color : '#84a98c'
    },
    {
      data: seriesData2,
      color : '#87986a'   
    }
  ]
};
//console.log(data);
    return (
      <div>
       <HighchartsReact
          highcharts={Highcharts} 
           options={chartOptions} 
            containerProps={{ style: { height : "400px", width : "600px" , align: "center"} }}/>
      </div>
    );
  }
}

export default Multiple_LineChart