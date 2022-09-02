import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

function Tables({
  OrderNo,
  ID,
  status,status2,
  date,
  amount,
  table1,
  table2,
  heading1,
  heading2,
  heading3,
  heading4,
  heading5,
  td1,
  td2,
  td3,
  td4,
  td5,
  td6th,
  td6,
  td7,
  td8,
  td9,
  td10,
  td11,
  td12,
  td13,
  td14,
  td15,
  td16,
  td17,
  td18,
  td19,
  td20,
  td21,
  td22,
  td23,
  td24,
  bluebtn1,
  heading6,
  bluebutton,
  redButton,
  redButton1,
  color,
  color1,
  fontweight ,
  tda, tdb, tdc,
}) {
  return (
    <>
      {table1 && (
        <div className="table col-12 ">
          <Table responsive="sm">
            <thead>
              <tr style={{}}>
                <th style={{ textAlign: "", padding: 15 }}>{heading1}</th>
                <th style={{ textAlign: "center", padding: 15 }}>{heading2}</th>
                <th style={{ textAlign: "center", padding: 15 }}>{heading3}</th>
                <th style={{ textAlign: "center", padding: 15 }}>{heading4}</th>
                <th style={{ textAlign: "center", padding: 15 }}>{heading5}</th>
                <th style={{ textAlign: "center", padding: 15 }}>{heading6}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ textAlign: "", padding: 15 }}>  {td1}  {OrderNo}{" "}</td>
                <td style={{ textAlign: "center", padding: 15 }}>  {td2}  {ID} </td>
                <td style={{ textAlign: "center", padding: 15 }}> {td3}  {date}</td>
                <td style={{ textAlign: "center", padding: 15, color:color1,fontWeight:fontweight }}> {td4} {status2}</td>
                <td style={{ textAlign: "center", padding: 15 }}>{tda}{amount}</td>
                {redButton && (
                  <td style={{ textAlign: "center", padding: 15 }}>
                    {" "}
             <Button variant="danger">{redButton1}</Button> </td>
                )}
                {bluebutton && (
                  <td style={{ textAlign: "center", padding: 15, }}>
                    {" "}
                    <Button variant="outline-primary" style={{paddingLeft:25, paddingRight:25}}>{bluebtn1}</Button>
                  </td>
                )}
              </tr>
              <tr>
                <td style={{ textAlign: "", padding: 15 }}>{td5}{OrderNo}
                </td>
                <td style={{ textAlign: "center", padding: 15 }}>{td6}{ID}
                </td>
                <td style={{ textAlign: "center", padding: 15 }}>{td7}{date}
                </td>
                <td style={{ textAlign: "center", padding: 15, color:color ,fontWeight:fontweight  }}> {td8}{status}
                </td>
                <td style={{ textAlign: "center", padding: 15 }}>  {td6th}{amount}{tdb}
                </td>
                {redButton && (
                  <td style={{ textAlign: "center", padding: 15 }}>
                    {" "}
                    <Button variant="danger">{redButton1}</Button>
                  </td>
                )}
                {bluebutton && (
                  <td style={{ textAlign: "center", padding: 15 }}>
                    {" "}
                    <Button variant="outline-primary" style={{paddingLeft:25, paddingRight:25}}>{bluebtn1}</Button>
                  </td>
                )}
              </tr>
              <tr>
                <td style={{ textAlign: "", padding: 15 }}>
                  {td9}
                  {OrderNo}
                </td>
                <td style={{ textAlign: "center", padding: 15 }}>
                  {td10}
                  {ID}
                </td>
                <td style={{ textAlign: "center", padding: 15 }}>
                  {td11}
                  {date}
                </td>
                <td style={{ textAlign: "center", padding: 15, color: color ,fontWeight:fontweight }}>
                  {td12}
                  {status}
                </td>
                <td style={{ textAlign: "center", padding: 15 }}>
                  {td6th} {amount} {tdc}
                </td>
                {redButton && (
                  <td style={{ textAlign: "center", padding: 15 }}>
                    {" "}
                    <Button variant="danger">{redButton1}</Button>
                  </td>
                )}
                {bluebutton && (
                  <td style={{ textAlign: "center", padding: 15 }}>
                    {" "}
                    <Button variant="outline-primary" style={{paddingLeft:25, paddingRight:25}}>{bluebtn1}</Button>
                  </td>
                )}
              </tr>
              <tr>
                <td style={{ textAlign: "", padding: 15 }}>
                  {td13}
                  {OrderNo}{" "}
                </td>
                <td style={{ textAlign: "center", padding: 15 }}>
                  {td14}
                  {ID}
                </td>
                <td style={{ textAlign: "center", padding: 15 }}>
                  {td15}
                  {date}
                </td>
                <td style={{ textAlign: "center", padding: 15, color: color,fontWeight:fontweight  }}>
                  {td16}
                  {status}
                </td>
                <td style={{ textAlign: "center", padding: 15 }}>
                  {td6th}{tda}
                  {amount}
                </td>

                {redButton && (
                  <td style={{ textAlign: "center", padding: 15 }}>
                    {" "}
                    <Button variant="danger">{redButton1}</Button>
                  </td>
                )}
                {bluebutton && (
                  <td style={{ textAlign: "center", padding: 15 }}>
                    {" "}
                    <Button variant="outline-primary" style={{paddingLeft:25, paddingRight:25}}>{bluebtn1}</Button>
                  </td>
                )}
              </tr>
              <tr>
                <td style={{ textAlign: "", padding: 15 }}>
                  {td17}
                  {OrderNo}
                </td>
                <td style={{ textAlign: "center ", padding: 15 }}>
                  {td18}
                  {ID}
                </td>
                <td style={{ textAlign: "center", padding: 15 }}>
                  {td19}
                  {date}
                </td>
                <td style={{ textAlign: "center", padding: 15, color: color,fontWeight:fontweight }}>
                  {td20}
                  {status}
                </td>
                <td style={{ textAlign: "center", padding: 15 }}>
                  {td6th}
                  {amount}{tdb}
                </td>
                {redButton && (
                  <td style={{ textAlign: "center", padding: 15 }}>
                    {" "}
                    <Button variant="danger">{redButton1}</Button>
                  </td>
                )}
                {bluebutton && (
                  <td style={{ textAlign: "center", padding: 15 }}>
                    {" "}
                    <Button variant="outline-primary" style={{paddingLeft:25, paddingRight:25}}>{bluebtn1}</Button>
                  </td>
                )}
              </tr>
              <tr>
                <td style={{ textAlign: "", padding: 15 }}>
                  {td21}
                  {OrderNo}
                </td>
                <td style={{ textAlign: "center", padding: 15 }}>
                  {td22}
                  {ID}
                </td>
                <td style={{ textAlign: "center", padding: 15 }}>
                  {td23}
                  {date}
                </td>
                <td style={{ textAlign: "center", padding: 15, color: color,fontWeight:fontweight }}>
                  {td24}
                  {status}
                </td>
                <td style={{ textAlign: "center", padding: 15 }}>
                  {td6th}
                  {amount}{tdc}
                </td>
                {redButton && (
                  <td style={{ textAlign: "center", padding: 15 }}>
                    <Button variant="danger">{redButton1}</Button>
                  </td>
                )}

                {bluebutton && (
                  <td style={{ textAlign: "center", padding: 15 }}>
                    <Button variant="outline-primary" style={{paddingLeft:25, paddingRight:25}}>{bluebtn1}</Button>
                  </td>
                )}
              </tr>
            </tbody>
          </Table>
        </div>
      )}

      {table2 && (
        <div className=" table2_box mt-4 mx-5">
          <Table responsive="sm mx-4" style={{}}>
            <thead>
              <tr style={{}}>
                <th style={{ padding: 15 }}>{heading1}</th>
                <td style={{ textAlign: "end", padding: 15 }}>{td1}</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th style={{ padding: 15 }}>{heading2}</th>

                <td style={{ textAlign: "end", padding: 15 }}>{td2}</td>
                <td style={{ textAlign: "end", padding: 15 }}>{td2}</td>
              </tr>
              <tr>
                <th style={{ padding: 15 }}>{heading3}</th>
                <td style={{ textAlign: "end", padding: 15 }}>{td3}</td>
              </tr>
              <tr>
                <th style={{ padding: 15 }}>{heading4}</th>
                <td style={{ textAlign: "end", padding: 15 }}>{td4}</td>
              </tr>
              <tr>
                <th style={{ padding: 15 }}>{heading5}</th>
                <td style={{ textAlign: "end", padding: 15 }}>{td5}</td>
              </tr>
              <th style={{ padding: 15 }}>{heading6}</th>
              <td style={{ textAlign: "end", padding: 15 }}>{td6}</td>
            </tbody>
          </Table>
        </div>
      )}
     

    </>
  );
}

export default Tables;
