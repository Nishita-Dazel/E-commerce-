import React from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

const { CanvasJSChart } = CanvasJSReact;

const Charts7 = () => {
  
  const options = {
    animationEnabled: true,
    theme: "light2",
    title: {
      text: "Monthly Sales Data"
    },
    axisX: {
      valueFormatString: "MMM"
    },
    axisY: {
      prefix: "$",
      labelFormatter: addSymbols
    },
    toolTip: {
      shared: true
    },
    legend: {
      cursor: "pointer",
      itemclick: toggleDataSeries
    },
    data: [
      {
        type: "column",
        name: "Actual Sales",
        showInLegend: true,
        xValueFormatString: "MMMM YYYY",
        yValueFormatString: "$#,##0",
        dataPoints: [
          { x: new Date(2016, 0), y: 20000 },
          { x: new Date(2016, 1), y: 30000 },
          { x: new Date(2016, 2), y: 25000 },
          { x: new Date(2016, 3), y: 70000, indexLabel: "High Renewals" },
          { x: new Date(2016, 4), y: 50000 },
          { x: new Date(2016, 5), y: 35000 },
          { x: new Date(2016, 6), y: 30000 },
          { x: new Date(2016, 7), y: 43000 },
          { x: new Date(2016, 8), y: 35000 },
          { x: new Date(2016, 9), y: 30000 },
          { x: new Date(2016, 10), y: 40000 },
          { x: new Date(2016, 11), y: 50000 }
        ]
      },
      {
        type: "line",
        name: "Expected Sales",
        showInLegend: true,
        yValueFormatString: "$#,##0",
        dataPoints: [
          { x: new Date(2016, 0), y: 40000 },
          { x: new Date(2016, 1), y: 42000 },
          { x: new Date(2016, 2), y: 45000 },
          { x: new Date(2016, 3), y: 45000 },
          { x: new Date(2016, 4), y: 47000 },
          { x: new Date(2016, 5), y: 43000 },
          { x: new Date(2016, 6), y: 42000 },
          { x: new Date(2016, 7), y: 43000 },
          { x: new Date(2016, 8), y: 41000 },
          { x: new Date(2016, 9), y: 45000 },
          { x: new Date(2016, 10), y: 42000 },
          { x: new Date(2016, 11), y: 50000 }
        ]
      },
      {
        type: "area",
        name: "Profit",
        markerBorderColor: "white",
        markerBorderThickness: 2,
        showInLegend: true,
        yValueFormatString: "$#,##0",
        dataPoints: [
          { x: new Date(2016, 0), y: 5000 },
          { x: new Date(2016, 1), y: 7000 },
          { x: new Date(2016, 2), y: 6000 },
          { x: new Date(2016, 3), y: 30000 },
          { x: new Date(2016, 4), y: 20000 },
          { x: new Date(2016, 5), y: 15000 },
          { x: new Date(2016, 6), y: 13000 },
          { x: new Date(2016, 7), y: 20000 },
          { x: new Date(2016, 8), y: 15000 },
          { x: new Date(2016, 9), y: 10000 },
          { x: new Date(2016, 10), y: 19000 },
          { x: new Date(2016, 11), y: 22000 }
        ]
      }
    ]
  };

  function addSymbols(e) {
    const suffixes = ["", "K", "M", "B"];
    const order = Math.max(Math.floor(Math.log(Math.abs(e.value)) / Math.log(1000)), 0);
    const suffix = suffixes[Math.min(order, suffixes.length - 1)];
    return CanvasJSReact.CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
  }

  function toggleDataSeries(e) {
    if (typeof e.dataSeries.visible === "undefined" || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    } else {
      e.dataSeries.visible = true;
    }
    e.chart.render();
  }

  return (
    <div>
      <CanvasJSChart options={options} />
    </div>
  );
};

export default Charts7;
