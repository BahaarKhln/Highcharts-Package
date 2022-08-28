import React from 'react';
import ReactDom from 'react-dom';
import Highcharts, { color } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import './index.css';

import { render } from '@testing-library/react';
import Chart from './single_linechart'
import Multiple_LineChart from './multiple_linechart';
import Column_Chart from './column_chart';
import Stacked_Bar from './stacked_bar';
import Stacked_Column from './stacked_column';
import StackedGrouped_Column from './grouped_stacked';
import Spiderweb_Chart from './spiderweb_chart';
//import WordCloud_Chart from './word_cloud_chart';
//import Bubble_Chart from './bubble_chart';

class Index extends React.Component {
  render() {
    const line_params = {
      title: 'Single Linechart',
      type: 'spline',
      data: {
        "data": [
            {"year": "1992", "count": 10},
            {"year": "1993", "count": 11},
            {"year": "1994", "count": 12},
            {"year": "1995", "count": 13},
            {"year": "1996", "count": 14},
            {"year": "1997", "count": 15}
        ]
      },
      options: {
        xname : "year",
        yname : "count"
      }
    };
    const multi_params = {
      title: 'Multiple Linechart',
      type: 'spline',
      data: {
        "data": [
            {"year": "1992", "count1": 10, "count2": 10},
            {"year": "1993", "count1": 11, "count2": 12},
            {"year": "1994", "count1": 12, "count2": 14},
            {"year": "1995", "count1": 13, "count2": 11},
            {"year": "1996", "count1": 14, "count2": 15},
            {"year": "1997", "count1": 15, "count2": 10}
        ]
      },
      options: {
        xname : "year",
        yname1 : "count1",
        yname2 : "count2"
      }
    };
    const column_params = {
      title: 'Column Chart',
      type: 'column',
      data: {
        "data": [
            {"year": "1992", "count": 10},
            {"year": "1993", "count": 11},
            {"year": "1994", "count": 12},
            {"year": "1995", "count": 13},
            {"year": "1997", "count": 15},
            {"year": "1996", "count": 14},
        ]
      },
      options: {
        xname : "year",
        yname : "count"
      }
    };
    const bar_params = {
      title: 'Stacked Bar Chart',
      type: 'bar',
      data: {
        "data": [
          {"name":"first trimester", "section 1":12, "section 2": 10},
          {"name":"second trimester", "section 1":11, "section 2": 11},
          {"name":"third trimester", "section 1":15, "section 2": 12},
          {"name":"fourth trimester", "section 1":10, "section 2": 13}
        ]
      },
      options: {
        xname : "name",
        yname1 : "section 1",
        yname2 : "section 2"
      }
    };
    const cloud_params = {
      title: 'Word Cloud Chart',
      type: 'wordcloud',
      text: 'this this bahar bahar bahar bahar amir amir amir no no no no no no hi'
    };
    const bubble_params = {
      title : 'Sample Bubble Chart',
      type : 'bubble',
      data : ''
    }
    const scolumn_params = {
      title: 'Stacked Column Chart',
      type: 'column',
      data: {
        "data": [
          {"name":"first trimester", "section 1":12, "section 2": 10},
          {"name":"second trimester", "section 1":11, "section 2": 11},
          {"name":"third trimester", "section 1":15, "section 2": 12},
          {"name":"fourth trimester", "section 1":10, "section 2": 13}
        ]
      },
      options: {
        xname : "name",
        yname1 : "section 1",
        yname2 : "section 2"
      }
    };
    const sg_column_params = {
      title: 'Stacked Column Chart',
      type: 'column',
      data: {
        "data": [
          {"name":"first trimester", "section 1":12, "section 2": 10, "section 3":10, "section 4": 13, "branch":"ESF"},
          {"name":"second trimester", "section 1":11, "section 2": 11,"section 3":15, "section 4": 11, "branch":"TEH"},
          {"name":"third trimester", "section 1":15, "section 2": 12,"section 3":11, "section 4": 16, "branch":"TEH"},
          {"name":"fourth trimester", "section 1":10, "section 2": 13, "section 3":12, "section 4": 10, "branch":"ESF"}
        ]
      },
      options: {
        xname : "name",
        yname1 : "section 1",
        yname2 : "section 2",
        yname3 : "section 3",
        yname4 : "section 4",
        stack : "branch"

      }
    };
    const spider_params ={
      title: 'Spiderweb Chart',
      type: 'line',
      data: {
        "data": [
          {"name":"ESF Branch", "sales":2000, "marketing":1000, "development":3000, "research":1000, "HR":1200, "IT":2000},
          {"name":"TEH Branch", "sales":3000, "marketing":1500, "development":2000, "research":1000, "HR":3500, "IT":1000}
        ]
      },
      options: {
        xname1 : "ESF Branch",
        xname2 : "TEH Branch",
        yname1 : "sales",
        yname2 : "marketing",
        yname3 : "development",
        yname4 : "research",
        yname5 : "HR",
        yname6 : "IT",
      }
    }
    return (
      <div>
        <Chart params={line_params}></Chart>
        <Multiple_LineChart params={multi_params}></Multiple_LineChart>
        <Column_Chart params={column_params}></Column_Chart>
        <Stacked_Column params={scolumn_params}></Stacked_Column>
        <StackedGrouped_Column params={sg_column_params}></StackedGrouped_Column>
        <Stacked_Bar params={bar_params}></Stacked_Bar>
        <Spiderweb_Chart params={spider_params}></Spiderweb_Chart>
        
      </div>
      
    );
  }
}


const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<Index />);