import { Divider } from "@material-ui/core";
import React, { useEffect, useMemo, useRef, forwardRef } from "react";
import { useTable, usePagination, useRowSelect, useSortBy } from "react-table";
import "./newtable.css";
export default function NewTable({ columns, data }) {
  const IndeterminateCheckbox = forwardRef(
    ({ indeterminate, ...rest }, ref) => {
      const defaultRef = useRef();
      const resolvedRef = ref || defaultRef;

      useEffect(() => {
        resolvedRef.current.indeterminate = indeterminate;
      }, [resolvedRef, indeterminate]);

      return (
        <div>
          <input
            id="tablecheckbox"
            type="checkbox"
            ref={resolvedRef}
            {...rest}
          />
        </div>
      );
    }
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    selectedFlatRows,
    state: { pageIndex, pageSize, selectedRowIds },
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        {
          id: "selection",
          Header: ({ getToggleAllPageRowsSelectedProps }) => (
            <div>
              <IndeterminateCheckbox {...getToggleAllPageRowsSelectedProps()} />
            </div>
          ),

          Cell: ({ row }) => (
            <div>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
            </div>
          ),
        },
        ...columns,
      ]);
    }
  );

  return (
    <div  style={{ overflowX: "scroll" }}>
      {console.log(
        pageIndex,
        pageSize,
        pageCount,
        canNextPage,
        canPreviousPage
      )}
      <table {...getTableProps()}  style={{ overflowX: "scroll" }}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  className="tablehead"
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                >
                  {column.render("Header")}
                  <span style={{}}>
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <i
                          class="fa fa-arrow-up"
                          aria-hidden="true"
                          id="sorticon"
                        ></i>
                      ) : (
                        <i
                          class="fa fa-arrow-down"
                          aria-hidden="true"
                          id="sorticon"
                        ></i>
                      )
                    ) : (
                      ""
                    )}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="pagination col-12">
        <div className="col-lg-4" id="tableprop">
          <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            &laquo;
          </button>
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            <i class="fa fa-angle-left"></i>
          </button>
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            <i class="fa fa-angle-right"></i>
          </button>
          <button
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            &raquo;
          </button>
        </div>
        <div className="col-2" id="tableprop">
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </div>
        <div className="col-3" id="tableprop">
          <span>
            Go to:
            <input
              id="gotopage"
              type="number"
              defaultValue={pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                gotoPage(page);
              }}
              style={{ width: "100px" }}
            />
          </span>
        </div>
        <div className="col-3" id="tableprop">
          Rows:
          <select
            id="rowselect"
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
          >
            {[5, 10, 15, 20].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>
          {console.log(selectedRowIds)}
          {console.log(selectedFlatRows.map((d) => d.original))}
        </div>
      </div>
    </div>
  );
}
