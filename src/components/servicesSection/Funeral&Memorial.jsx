import HeaderComp from "./HeaderComp";
import ImgCard from "./ImgCard";

function FuneralMemorial() {
  return (

    <div>
      <HeaderComp />
      <ImgCard
      h1="Funeral & Memorial Services"
      p="Whether you choose burial or cremation, a funeral service is an important part of honoring your loved one and starting the healing process. We offer service options that are meaningful and healing."
        image="https://irp.cdn-website.com/5d83079e/dms3rep/multi/Cemetery+Plots+and+property+in+New+Orleans+and+the+surrounding+areas+offered+by+Mothe+Funeral+Home+1920.webp"
        title="Funeral Services"
        description="This time is set aside for family and friends to gather together to say goodbye, while being in the comfort of those closest to them. We can personalize the visitation to be as unique as your loved one with a tribute video, items or displays that were important to your loved one, or simply pictures displayed. We will work with your family to design the perfect gathering experience."
      />
          <ImgCard
  
        image="https://lirp.cdn-website.com/5d83079e/dms3rep/multi/opt/Funeral+-+Memorial+Services+offered+at+Mothe+Funeral+Home+in+Louisiana+in+New+Orleans+and+the+surrounding+cities+PNG-1920w.png"
        title="Burial Services"
        description="A graveside or committal service is typically held immediately following the funeral service and can also be a small intimate gathering of those closest to you. We work with families to design a service that honors their loved one."
      />
    </div>
  );
}
export default FuneralMemorial;
