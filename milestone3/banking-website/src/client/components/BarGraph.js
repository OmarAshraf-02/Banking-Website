import { ResponsiveBar } from '@nivo/bar';

const BarGraph = ({ data }) => {
  return (
    <div style={{ height: '400px' }}>
      <ResponsiveBar
        data={data}
        keys={['creditScore']}
        indexBy="accountNumber"
        margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
        padding={0.3}
        colors={{ scheme: 'category10' }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          legend: 'Credit Score',
          legendPosition: 'middle',
          legendOffset: -40,
        }}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          legend: 'Account Number',
          legendPosition: 'middle',
          legendOffset: 40,
        }}
        enableLabel={false}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
      />
    </div>
  );
};

export default BarGraph;
