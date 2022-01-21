import { Label } from "../..";

function FullScreenLoader() {
  return (
    <div className="flex max-h-screen w-full z-10">
      <div className="flex justify-center items-center h-full w-full">
        <Label
          title="Loading..."
          secondary
          className="text-base md:text-3xl font-semibold"
        />
      </div>
    </div>
  );
}

export default FullScreenLoader;
