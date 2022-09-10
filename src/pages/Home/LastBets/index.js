import React from 'react'
import { useTable } from 'react-table';
import './styles.scss';

function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  })

  // Render the UI for your table
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

function App() {
  const columns = React.useMemo(
    () => 
        [
            {
              Header: 'Juego',
              accessor: 'game',
            },
            {
              Header: 'Jugador',
              accessor: 'player',
            },
            {
              Header: 'Cantidad de la apuesta',
              accessor: 'bet',
            },
            {
              Header: 'Multiplicador',
              accessor: 'multiplier',
            },
            {
              Header: 'Cantidad de ganancia',
              accessor: 'earned',
            },
        ],
        []
  )

const data = [0,0,0,];
data.fill(
  {
      game: <div className='table-item'><span className='table-icon'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png'/></span> Original</div>,
      player:'john',
      bet: <div className='table-item'>0.0000 <span className='table-icon'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png'/></span></div>,
      multiplier:'0.00x',
      earned: <div className='table-item' style={{color:'#f6921a'}}>0.0000 <span className='table-icon'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png'/></span></div>,
  });

    return (
        <div>
            <Table columns={columns} data={data} />
        </div>
    )
}

export default App
