import { Steps } from 'antd';

const items = [
  {
    title: 'Step 1',
  },
  {
    title: 'Step 2',
  },
  {
    title: 'Step 3',
  },
  {
    title: 'Step 4',
  },
  {
    title: 'Step 5',
  },
  {
    title: 'Step 6',
  },
];


const customDot = (dot, { status, index }) => (
  <div className="w-[30px] h-[30px] rounded-full bg-[#5367FC]">
    1
  </div>
);

const ProgressStep = () => {

  return (
    <>
      <Steps
        current={1}
        size="small"
        labelPlacement="vertical"
        items={items}
        // progressDot={customDot}
      />
    </>
  )
}

export default ProgressStep