const statusParameter = {
  active: {
    bgColor: '#fff',
    borderColor: '#5367FC',
    size: '30px'
  },
  inactive: {
    bgColor: '#fff',
    borderColor: '#B4BABD',
    size: '20px'
  },
  success: {
    bgColor: '#5367FC',
    borderColor: '#5367FC',
    size: '20px'
  },
  fail: {
    bgColor: '#F30000',
    borderColor: '#F30000',
    size: '20px'
  },
  activeFail: {
    bgColor: '#F30000',
    borderColor: '#F30000',
    size: '30px'
  }
}

const StepProgressBar = ({ selectedStep, steps }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className={`w-3/4 grid grid-cols-8 items-center mb-5`}>
        {
          steps.map((step, index) => (
            <div key={`step_${index}`} className="w-full flex items-center">
              <div className="w-full flex items-center">
                <div className={`w-full h-[5px] items-center ${index !== 0 ? selectedStep >= index ? 'bg-[#5367FC]' : 'bg-[#B4BABD]' : ''}`}>
                  <div width={50} className={`w-1/2 h-[5px] leading-none ${index !== 0 ? selectedStep >= index ? 'bg-[#5367FC]' : 'bg-[#B4BABD]' : ''}`}></div>
                </div>
              </div>
              <div
                className={`h-full rounded-full`}
                style={{
                  minWidth: statusParameter[step.status].size,
                  width: statusParameter[step.status].size,
                  height: statusParameter[step.status].size,
                  border: `2px solid ${statusParameter[step.status].borderColor}`,
                  backgroundColor: statusParameter[step.status].bgColor
                }}
              >
              </div>
              <div className="w-full flex items-center">
                <div className={`w-full h-[5px] items-center ${index !== steps.length - 1 ? selectedStep > index ? 'bg-[#5367FC]' : 'bg-[#B4BABD]' : ''}`}>
                  <div width={50} className={`w-1/2 h-[5px] leading-none ${index !== steps.length - 1 ? selectedStep > index ? 'bg-[#5367FC]' : 'bg-[#B4BABD]' : ''}`}></div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
      <div className="w-3/4 grid grid-cols-8 items-center justify-items-center">
        {
          steps.map((step, index) => (
            <div key={`step_label_${index}`}>{step.label}</div>
          ))
        }
      </div>
    </div>
  )
};

export default StepProgressBar;
