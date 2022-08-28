import React from 'react';
import ReactDom from 'react-dom';
import Highcharts, { color } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

class Stacked_Bar extends React.Component {

    render() {
      const {params} = this.props;
      const { data, title, options, type } = params;
      const categories =[];
      const seriesData1 = [];
      const seriesData2 = [];
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
  xAxis: {
    categories: categories,
    labels: {
        style: {
          color: '#efefef'
        }
      }
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Total Sales',
      style: {
        color : '#efefef'
      }
    },
    labels: {
        style: {
          color: '#efefef'
        }
      }
  },
  legend: {
    reversed: true
  },
  plotOptions: {
    series: {
      stacking: 'normal'
    }
  },
  series: [{
    name: data.data[0].yname,
    data: seriesData1,
    color :'#84A98C'
  }, {
    name: data.data[1].yname2,
    data: seriesData2,
    color :'#52796F'
  }]
};
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

export default Stacked_Bar