import { Label } from "../..";

function NoDataFoundView() {
  return (
    <div className="flex h-96 max-h-screen w-full">
      <div className="flex justify-center items-center h-full w-full">
        <Label
          title="No data found"
          secondary
          className="text-4xl font-semibold"
        />
      </div>
    </div>
  );
}

export default NoDataFoundView;
