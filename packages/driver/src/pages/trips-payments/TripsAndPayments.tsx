interface IProps {}

const TripsAndPayments: React.FC<IProps> = (props: IProps & any) => {
  return (
    <div className="relative m-auto md:w-7/12 xs:w-11/12 max-w-4xl">
      <div className="flex flex-row text-2xl font-semibold space-x-2">
        Trips &amp; Payment
      </div>
      <div className="rounded-2xl bg-white shadow-2xl py-6 px-16 mt-6"></div>
    </div>
  );
};

export default TripsAndPayments;
