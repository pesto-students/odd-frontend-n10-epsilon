import React, { useEffect } from "react";

import {
  useTable,
  useFilters,
  useGlobalFilter,
  useAsyncDebounce,
  useSortBy,
  usePagination,
} from "react-table";
import { Input, Label } from "../..";

import { SortIcon, SortUpIcon, SortDownIcon } from "./Icons";
import Pagination from "./Pagination";

// Define a default UI for filtering
function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}: any) {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = React.useState(globalFilter);
  const onChange = useAsyncDebounce((value: any) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <label className="flex gap-x-2 items-baseline">
      <Input
        placeholder="Search.."
        className="bg-white text-base text-gray"
        defaultValue={value}
        onChange={(newValue) => {
          setValue(newValue);
          onChange(newValue);
        }}
      />
    </label>
  );
}

interface IProps {
  columns: any;
  data: any;
  titleTemplate(totalItem: number): string;
}

const DataTable: React.FC<IProps> = (props: IProps & any) => {
  const { columns, data, titleTemplate } = props;
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state,
    preGlobalFilteredRows,
    setGlobalFilter,
  }: any = useTable(
    {
      columns,
      data,
    },
    useFilters, // useFilters!
    useGlobalFilter,
    useSortBy,
    usePagination // new,
  );

  useEffect(() => {
    setPageSize(6);
  }, []);

  // Render the UI for your table
  return (
    <div className="h-full">
      <div>
        {/* Title Nav bar */}
        <div className="flex justify-between items-center">
          <Label
            title={titleTemplate(data.length)}
            secondary
            regular
            style={{ fontSize: 16, color: "#A7A7A7" }}
          />
          <div className="sm:flex sm:gap-x-2">
            <GlobalFilter
              preGlobalFilteredRows={preGlobalFilteredRows}
              globalFilter={state.globalFilter}
              setGlobalFilter={setGlobalFilter}
            />
          </div>
        </div>
        {/* table */}
        <div className="mt-9 flex-1 flex-col ">
          <div className="-my-2 overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden rounded-2xl">
                <table
                  {...getTableProps()}
                  className="min-w-full divide-y divide-green"
                >
                  <thead className="bg-white h-16">
                    {headerGroups?.map((headerGroup: any) => (
                      <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers?.map((column: any) => (
                          // Add the sorting props to control sorting. For this example
                          // we can add them into the header props
                          <th
                            scope="col"
                            className="group px-6 py-3 text-center text-base font-medium uppercase tracking-wider"
                            {...column.getHeaderProps(
                              column.getSortByToggleProps()
                            )}
                          >
                            <div
                              className="flex items-center justify-between"
                              style={{ color: "#3F3D56" }}
                            >
                              {column.render("Header")}
                              {/* Add a sort direction indicator */}
                              <span>
                                {column.isSorted ? (
                                  column.isSortedDesc ? (
                                    <SortDownIcon className="w-4 h-4 text-gray-400" />
                                  ) : (
                                    <SortUpIcon className="w-4 h-4 text-gray-400" />
                                  )
                                ) : (
                                  <SortIcon className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100" />
                                )}
                              </span>
                            </div>
                          </th>
                        ))}
                      </tr>
                    ))}
                  </thead>
                  <tbody
                    {...getTableBodyProps()}
                    className="bg-white divide-y divide-green"
                  >
                    {page?.map((row: any, i: number) => {
                      // new
                      prepareRow(row);
                      return (
                        <tr {...row.getRowProps()}>
                          {row.cells?.map((cell: any) => {
                            return (
                              <td
                                {...cell.getCellProps()}
                                className="px-6 py-4 whitespace-nowrap"
                                role="cell"
                              >
                                {cell.column.Cell.name === "defaultRenderer" ? (
                                  <div className="text-sm text-gray-500">
                                    {cell.render("Cell")}
                                  </div>
                                ) : (
                                  cell.render("Cell")
                                )}
                              </td>
                            );
                          })}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Pagination */}
      <div className="bottom-0 right-0">
        <Pagination
          pageCount={pageCount}
          // setPageSize={setPageSize}
          canGoPrevious={canPreviousPage}
          canNextPage={canNextPage}
          onPageChange={(newPageIndex) => {
            gotoPage(newPageIndex);
          }}
          onPrevClick={() => {
            previousPage();
          }}
          onNextClick={() => {
            nextPage();
          }}
        />
      </div>
    </div>
  );
};

export default DataTable;
