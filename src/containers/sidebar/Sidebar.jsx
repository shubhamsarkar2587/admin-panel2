import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { svgAssets } from "../../assets/asset";
import { sidebarData } from "./sidebarData";

const Sidebar = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState({
    activeValue: 'dashboard',
    nestedActiveValue: ''
  });
  const [isApplicationOpen, setIsApplicationOpen] = useState(false);

  const handleMouseHover = () => {
    console.log('dfd')
  };

  const handleSidebar = ({ data, nestedData }) => {
    if (data.activeValue === 'application') {
      if (nestedData) {
        navigate(`${data.to}${nestedData.to}`)
      } else {
        setIsApplicationOpen(!isApplicationOpen)
        navigate(`${data.to}/all`)
      }
    } else {
      setIsApplicationOpen(false)
      navigate(data.to)
    }

    setActive({
      activeValue: data.activeValue,
      nestedActiveValue: nestedData?.nestedActiveValue
        ? nestedData.nestedActiveValue
        : data?.nestedRoutes ? data.nestedRoutes[0].nestedActiveValue : ''
    }) 
  };

  console.log(active)

  return (
    <div className="w-[300px] h-[calc(100vh-115px)] mt-[115px] px-[50px] py-5 fixed">
      <ul className="w-full grow">
        {
          sidebarData.map((data, index) => (
            <li key={`sidebar_${index}`} className="flex flex-col">
              <div
                className={`px-3 py-2.5 mb-2.5 flex items-center justify-between cursor-pointer rounded-[10px] duration-300
                  ${active.activeValue === data.activeValue ? 'bg-black text-white' : 'text-[#808080] hover:bg-black hover:text-white'}
                `}
                onMouseOver={() => handleMouseHover()}
                onMouseOut={() => handleMouseHover()}
                onClick={() => handleSidebar({ data })}
              >
                <div className="flex items-center justify-between">
                  <img
                    className="mr-2.5"
                    alt="kyc_image"
                    src={active.activeValue === data.activeValue ? data.selectedIcon : data.icon}
                  />
                  <span>{data.name}</span>
                </div>
                {
                  data?.nestedRoutes && (<img className="" alt="kyc_image" src={svgAssets.dashboard.rightArrow} />)
                }
              </div>
              {
                isApplicationOpen && data?.nestedRoutes ? (
                  <div className="px-3 mr-2.5 mb-2.5 flex justify-end ">
                    <ul>
                      {
                        data.nestedRoutes.map((nestedData, index) => (
                          <li
                            key={`sidebar_nested_route_${index}`}
                            className={`mb-2.5 cursor-pointer duration-300
                              ${active.nestedActiveValue === nestedData.nestedActiveValue ? 'text-[#5367FC]' : 'text-[#808080] hover:text-[#5367FC]'}
                            `}
                            onClick={() => handleSidebar({ data, nestedData })}
                          >
                            {nestedData.name}
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                ) : null}
            </li>
          ))}
      </ul>
    </div>
  )
};

export default Sidebar;
