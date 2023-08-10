import "rsuite/dist/rsuite.min.css";
import Styles from "./styles/LastYear.module.css";
import { Progress } from "rsuite";
function valuetext(value = 50) {
  return `${value}°C`;
}
function LastYear() {
  return (
    <div className={Styles.container}>
      <h3 style={{ marginTop: "0rem", marginBottom: "3rem" }}>
        Last Year Camprsion
      </h3>
      <div
        style={{
          border: "1px solid rgb(209, 209, 209)",
          borderRadius: "2rem",
          backgroundColor: "white",
        }}
      >
        <div
          style={{ display: "flex", textAlign: "center", marginTop: "3rem" }}
        >
          <div style={{ margin: "1rem", marginLeft: "1rem" }}>
            <div style={{ display: "flex" }}>
              <div style={{ marginLeft: "2rem" }}>
                <h6>STUDY TIME</h6>
              </div>
            </div>
          </div>

          <Progress.Line
            percent={69}
            status="active"
            strokeWidth={15}
            style={{ marginLeft: "3rem" }}
          />
        </div>
        <hr style={{ margin: "2rem" }} />
        <div style={{ display: "flex", textAlign: "center" }}>
          <div style={{ margin: "1rem", marginLeft: "1rem" }}>
            <div style={{ display: "flex" }}>
              <div>
                <h6>HOURS LEARNED</h6>
              </div>
            </div>
          </div>
          <Progress.Line
            percent={55}
            status="active"
            strokeWidth={15}
            style={{ marginLeft: "2rem" }}
          />
        </div>
        <hr style={{ margin: "2rem" }} />
        <div
          style={{ display: "flex", textAlign: "center", marginBottom: "3rem" }}
        >
          <div style={{ margin: "1rem", marginLeft: "1rem" }}>
            <div style={{ display: "flex" }}>
              <div>
                <h6>FINISHED COURESES</h6>
              </div>
            </div>
          </div>

          <Progress.Line percent={80} status="active" strokeWidth={15} />
        </div>
      </div>
    </div>
  );
}

export default LastYear;
