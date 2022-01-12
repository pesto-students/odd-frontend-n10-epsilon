interface IProps {}

const Skeleton: React.FC<IProps> = (props: IProps & any) => {
  const style = {
    backgroundColor: "#ECECEC",
  };

  return (
    <div className="flex flex-row animate-pulse h-full space-x-4 w-full p-3 items-center">
      <div className="flex flex-col space-y-2 w-full">
        <div className="h-4" style={style} />
        <div className="h-4" style={style} />
        <div className="h-4" style={style} />
      </div>
      <div className="w-16 h-16 rounded-full" style={style} />
    </div>
  );
};

export default Skeleton;
