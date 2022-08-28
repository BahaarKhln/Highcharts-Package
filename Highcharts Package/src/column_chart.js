import React from 'react';
import ReactDom from 'react-dom';
import Highcharts, { color } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

class Column_Chart extends React.Component {

    render() {
      const {params} = this.props;
      const { data, title, options, type } = params;
      const categories =[];
      const seriesData = [];
      for (let i in data.data) {
        categories.push(data.data[i][options.xname]);
      }
     for (let i in data.data) {
        seriesData.push(data.data[i][options.yname]);
     }
     //console.log(seriesData);
   // console.log(categories);

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
   categories: seriesData,
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
      data: seriesData,
      color : '#87986a'
    }
  ]
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

export default Column_Chart