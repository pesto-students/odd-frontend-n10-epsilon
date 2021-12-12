import GoogleMapReact from "google-map-react";



interface IProps {
  pickCood: number[];
  dropCood: number[];
}

const Map: React.FC<IProps> = ({ pickCood, dropCood }) => {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "AIzaSyBZmScOx6jJHhG9xg8pBcpC2-A7EFk1N2M",
        }}
        defaultCenter={{ lat: pickCood[0], lng: pickCood[1] }}
        center={{ lat: pickCood[0], lng: pickCood[1] }}
        defaultZoom={14}
      >
        
        <PickUpMarker lat={pickCood[0]} lng={pickCood[1]} />
        <DroppedOffMarker lat={dropCood[0]} lng={dropCood[1]} />
      </GoogleMapReact>
    </div>
  );
};

const PickUpMarker = (props: any) => {
  return <img src={require("./pick-up.svg").default} alt="pick" />;
};
const DroppedOffMarker = (props: any) => {
  return <img src={require("./drop-off.svg").default} alt="pick" />;
};

export default Map;
