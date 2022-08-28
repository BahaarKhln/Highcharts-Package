import React from 'react';
import ReactDom from 'react-dom';
import Highcharts, { color } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

class Spiderweb_Chart extends React.Component {

    render() {
      const {params} = this.props;
      const { data, title, options, type } = params;
      const categories =[];
      const seriesData1 = [];
      const seriesData2 = [];
        categories.push(options.yname1);
        categories.push(options.yname2);
        categories.push(options.yname3);
        categories.push(options.yname4);
        categories.push(options.yname5);
        categories.push(options.yname6);

        seriesData1.push(data.data[0][options.yname1]);
        seriesData1.push(data.data[0][options.yname2]);
        seriesData1.push(data.data[0][options.yname3]);
        seriesData1.push(data.data[0][options.yname4]);
        seriesData1.push(data.data[0][options.yname5]);
        seriesData1.push(data.data[0][options.yname6]);

        seriesData2.push(data.data[1][options.yname1]);
        seriesData2.push(data.data[1][options.yname2]);
        seriesData2.push(data.data[1][options.yname3]);
        seriesData2.push(data.data[1][options.yname4]);
        seriesData2.push(data.data[1][options.yname5]);
        seriesData2.push(data.data[1][options.yname6]);
console.log(seriesData1);
console.log(seriesData2);
//console.log(categories);


      const chartOptions = {
    chart: {
    polar: true,
    type: type,
    align : 'center',
    backgroundColor: 'transparent'
  },
  tooltip: {
    shared: true,
    headerFormat: '<span style="font-size: 12px">{point.key}:</span>&nbsp;&nbsp;<b>{point.y:,.2f}</b>',
    pointFormat: '',
    useHTML: true
  },
  pane: {
    size: '80%'
  },
  title: {
    text: title,
    align : 'center',
    style: {
        color: '#efefef'
      },
    x: -80
  },
  xAxis: {
    tickmarkPlacement: 'on',
    lineWidth: 0,
    categories: categories,
    labels: {
        style: {
          align: 'center',
          color: '#efefef'
        }
      }
  },
  yAxis: {
    min: 0,
    gridLineInterpolation: 'polygon',
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
  
  
  series: [{
    name: options.xname1,
    data: seriesData1,
    color :'#84A98C',
    pointPlacement: 'on'
  }, {
    name: options.xname2,
    data: seriesData2,
    color :'#87986a',
    pointPlacement: 'on'
  }],
  responsive: {
    rules: [{
      condition: {
        maxWidth: 500
      },
      chartOptions: {
        legend: {
          align: 'center',
          verticalAlign: 'bottom',
          layout: 'horizontal'
        },
        pane: {
          size: '70%'
        }
      }
    }]
  }
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

export default Spiderweb_Chart