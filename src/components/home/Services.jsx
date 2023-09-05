import { useEffect } from "react";
import getServiceInfo from "../../RestApi/getServiceInfo";
import { useSelector } from "react-redux";

const Services = () => {
  const {serviceFeature} = useSelector((state) => state);
  const {data, apiResponse} = serviceFeature;
  // console.log(data)
  
  useEffect(()=>{
    getServiceInfo()
  },[])

  if(apiResponse.isSuccess){
    return (
      <div>
        <div id="service" className="best-service section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-sm-6 col-xs-12">
                <div className="service-title">
                  <h4>Our Services</h4>
                  <h1>We Provide Software Solution and Improve Business Criteria!</h1>
                </div>
              </div>
              <div className="col-lg-6 col-sm-6 col-xs-12">
                <div className="service-content">
                  <p>We have successfully established a strong presence by Providing services to 1000+ clients.</p>
                </div>
              </div>
            </div>
            <div className="row">
              {data?.map((singleData, index) => (
                <div key={index} className="col-lg-4 col-sm-6 col-xs-12">
                  {/* {console.log(singleData)} */}
                  <div className="single_service ss_five h-full">
                    <img src={singleData?.avatar} alt="" />
                    <h3>{singleData?.name}</h3>
                    <p>{singleData?.review}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }else if (apiResponse.isLoading) {
    return "Loading Data Astece";
  } else if (apiResponse.isError) {
    return "Error Astece";
  }
};

export default Services;