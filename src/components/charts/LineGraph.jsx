import Chart from 'react-apexcharts';

const options = {
    chart: {
      type: 'line',
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

export default function LineChart({ series }) {
    return (
        <Chart
            options={options}
            series={series}
            type="line"
        />
    )
}