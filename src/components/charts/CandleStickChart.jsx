import Chart from 'react-apexcharts';

const options = {
    chart: {
      type: 'candlestick',
      height: 350,
      toolbar: {
          show: true,
          tools: {
              download: false,
              zoom: true,
              zoomin: true,
              zoomout: true,
              pan: true,
              reset: true
          }
      }
    },
    tooltip: {
      theme: 'dark'
    },
    xaxis: {
      type: 'datetime'
    },
    yaxis: {
      tooltip: {
        enabled: true,
      }
    }
};

export default function CandleStickChart({ title, series }) {
    return (
        <Chart
            options={options}
            series={series}
            type='candlestick'
        />
    )
}