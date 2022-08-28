import React from 'react';
import ReactDom from 'react-dom';
import Highcharts, { color } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

class WordCloud_Chart extends React.Component {
    render(){
        const {params} = this.props;
        const { text, title, type } = params;
        const lines = text.split(/[,\. ]+/g),
        data = lines.reduce((arr, word) => {
        let obj = Highcharts.find(arr, obj => obj.name === word);
        if (obj) {
        obj.weight += 1;
        } else {
        obj = {
        name: word,
        weight: 1
        };
      arr.push(obj);
    }
    return arr;
  }, []);
  console.log(data)
        const chartOptions = {
            series: [{
                type: 'type',
                data,
                name: 'Occurrences'
            }],
            title: {
                text: 'title'
            }
        }
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

export default WordCloud_Chart;