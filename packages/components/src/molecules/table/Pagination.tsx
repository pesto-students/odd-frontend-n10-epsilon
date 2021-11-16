import classNames from "classnames";
import React from "react";

import ReactPaginate from "react-paginate";

import ChevronLeftIcon from "../../assets/svgs/icn-chevron-right.svg";
import ChevronRightIcon from "../../assets/svgs/icn-chevron-right.svg";

interface IProps {
  pageCount: number;
  canGoPrevious?: boolean;
  canNextPage?: boolean;
  onPrevClick?(): void;
  onNextClick?(): void;
  onPageChange?(index: number): void;
  onPageActive?(index: number): void;
}

const Pagination: React.FC<IProps> = (props: IProps & any) => {
  const { pageCount, onPageChange, onPageActive } = props;

  return (
    <div className="flex flex-row-reverse my-4">
      <ReactPaginate
        pageCount={pageCount}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        previousLabel={
          <ArrowContainer>
            <span className="sr-only">Next</span>
            <img
              src={ChevronLeftIcon}
              style={{ opacity: 0.6, transform: "rotate(180deg)" }}
            />
          </ArrowContainer>
        }
        nextLabel={
          <ArrowContainer>
            <span className="sr-only">Next</span>
            <img src={ChevronRightIcon} style={{ opacity: 0.6 }} />
          </ArrowContainer>
        }
        breakLabel={<DotItem />}
        breakClassName="null"
        breakLinkClassName="null"
        onPageChange={({ selected }) => {
          if (onPageChange) {
            onPageChange(selected);
          }
        }}
        onPageActive={({ selected }) => {
          if (onPageActive) {
            onPageActive(selected);
          }
        }}
        initialPage={0}
        disableInitialCallback={false}
        containerClassName="bg-white items-center justify-between sm:px-6 inline-flex rounded-md -space-x-px px-2 py-3 bg-white shadow"
        pageClassName="text-center items-center px-2 py-2 rounded h-9 w-10 font-medium text-base mx-auto my-auto bg-transparent text-gray"
        activeLinkClassName="text-center items-center px-2 py-2 rounded h-full w-full font-medium text-base mx-auto my-auto bg-green text-primary bg-opacity-20"
      />
    </div>
  );
};

const ArrowContainer = ({ children, href = "#", onClick }: any) => {
  return (
    <a
      href={href}
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}
      style={{
        color: "#A7A7A7",
        alignItems: "center",
      }}
      className="relative bg-transparent inline-flex items-center px-4 py-2"
    >
      {children}
    </a>
  );
};

const DotItem = () => {
  return (
    <span
      className="relative bg-white inline-flex items-center px-4 py-2"
      style={{
        color: "#A7A7A7",
        alignItems: "center",
      }}
    >
      ...
    </span>
  );
};

export default Pagination;
