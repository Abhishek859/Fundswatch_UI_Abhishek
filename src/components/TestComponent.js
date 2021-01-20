// import TableView from 'react-table-view'
// // import ReactDOM from 'react-dom'
// import React, { Component } from 'react'
 
// export default class TestComponent extends Component {
//   render() {
//     /* must ensure all of your fields have values */
//     const DATA = [
//       { id: 0, make: 'Honda', model: 'NSX', year: '1997', make: 'Honda', model1: 'NSX', year1: '1997', make1: 'Honda', model2: 'NSX', year2: '1997',make11: 'Honda', model21: 'NSX', year21: '1997' },
//       { id: 1, make: 'Toyota', model: 'Supra', year: '1996',  make: 'Honda', model1: 'NSX', year1: '1997', make1: 'Honda', model2: 'NSX', year2: '1997',make11: 'Honda', model21: 'NSX', year21: '1997' },
//       { id: 2, make: 'Nissan', model: '300ZX', year: '1998',  make: 'Honda', model1: 'NSX', year1: '1997',  make1: 'Honda', model2: 'NSX', year2: '1997',make11: 'Honda', model21: 'NSX', year2: '1997' }
//     ]
//     /* define the look of each column, OPTIONAL */
//     let COLUMNS = {
//       make: function(data) {
//         return <span>What an awesome year: {data.year}</span>
//       },
//       model: function(data) {
//         return <a>{data.model}</a>
//       },
//       year: function(data) {
//         return (
//           <p style={{textAlign: 'left', margin: '0 4px'}}>
//             {`Id: ${data.id}`}
//             <br />
//             {`Year: ${data.year}`}
//           </p>
//         )
//       }
//     }
 
//     return (
//       <div>
//         <TableView data={DATA} columns={COLUMNS} />
//       </div>
//     )
//   }
// }
 
// // ReactDOM.render(<TestComponent />, document.getElementById('root'))



import React from 'react'
import styled from 'styled-components'
import { useTable, useSortBy } from 'react-table'

import TestComponentData from './TestComponentData'

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`

function Table({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy
  )

  // We don't want to render all 2000 rows for this example, so cap
  // it at 20 for this use case
  const firstPageRows = rows.slice(0, 20)

  return (
    <div className ="rendered__table"  style={{boxShadow:" inset 6px 6px 15px #c1c9d2, inset -9px -9px 14px #fff" , background : "var(--color-surface)",padding:"8px"}}>
      <table {...getTableProps()} style={{width:"100%"}}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                // Add the sorting props to control sorting. For this example
                // we can add them into the header props
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  {/* Add a sort direction indicator */}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {firstPageRows.map(
            (row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    )
                  })}
                </tr>
              )}
          )}
        </tbody>
      </table>
      <br />
      <div>Showing the first 20 results of {rows.length} rows</div>
    </div>
  )
}

function TestComponent() {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        columns: [
          {
            Header: 'First Name',
            accessor: 'firstName',
          },
          {
            Header: 'Last Name',
            accessor: 'lastName',
          },
        ],
      },
      {
        Header: 'Info',
        columns: [
          {
            Header: 'Age',
            accessor: 'age',
          },
          {
            Header: 'Visits',
            accessor: 'visits',
          },
          {
            Header: 'Status',
            accessor: 'status',
          },
          {
            Header: 'Profile Progress',
            accessor: 'progress',
          },
        ],
      },
    ],
    []
  )

  const data = React.useMemo(() => TestComponentData(2000), [])

  return (
    <Styles>
      <Table columns={columns} data={data} />
    </Styles>
  )
}

export default TestComponent
