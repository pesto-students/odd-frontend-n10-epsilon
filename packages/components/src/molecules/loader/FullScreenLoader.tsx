import { Label } from "../..";

function FullScreenLoader() {
  return (
    <div className="flex h-96 max-h-screen w-full">
      <div className="flex justify-center items-center h-full w-full">
        <Label
          title="Loading..."
          secondary
          className="text-4xl font-semibold"
        />
      </div>
    </div>
  );
}

export default FullScreenLoader;
