const data=[
    {country:"Ghana",confirmCases:23432,activeCases:5432,recoveredCases:3456},
    {country:"togo",confirmCases:5432,activeCases:4332,recoveredCases:356},
    {country:"nigeria",confirmCases:23432,activeCases:1232,recoveredCases:346},
    {country:"benin",confirmCases:23732,activeCases:7232,recoveredCases:345},
    {country:"kenya",confirmCases:2332,activeCases:5432,recoveredCases:456},
];


const TableRow = ({row}) => (
    <tr>
      <td key={row.country}>{row.country}</td>
      <td key={row.confirmCases}>{row.confirmCases}</td>
      <td key={row.activeCases}>{row.activeCases}</td>
      <td key={row.recoveredCases}>{row.recoveredCases}</td>

    </tr>
  )
  const Table = ({data}) = ( <table> {data.map(row => { <TableRow row={row} />
      })}
    </table>
  )
  ReactDOM.render( <Table data={data} />, 

    document.getElementById("root")
  );