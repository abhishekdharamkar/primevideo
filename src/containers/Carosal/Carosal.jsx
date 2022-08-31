import Carousel from 'react-bootstrap/Carousel';
function Carosals() {
    return(
        <div className="big-img ">
        <Carousel indicators={true} controls={true}>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TVOD_TopGunMaverick/2b8ef907-7906-4b01-b9a1-a658072d7b9a._UR3000,600_SX1500_FMwebp_.jpeg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_CROW_UN_Moonhaven_AP/a5dfe0c0-1458-4f4a-b277-b0cea9fe4f7d._UR3000,600_SX1500_FMwebp_.jpeg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TFMDubsLaunchv2/94fa4553-41c3-4b9f-833a-bbdd09b75236._UR3000,600_SX1500_FMwebp_.jpeg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_Renew1399_Stacking/555092ed-e070-4981-8f58-4cdca5281079._UR3000,600_SX1500_FMwebp_.jpeg"
            alt="Fourth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_AnanyaMarathi_Launch/125585c1-bb44-40a2-86ba-ccf873366645._UR3000,600_SX1500_FMwebp_.jpeg"
            alt="Fourth slide"
          />
        </Carousel.Item>
      </Carousel>
      </div>
    )
}export default Carosals;