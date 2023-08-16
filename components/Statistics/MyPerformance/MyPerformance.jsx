import "rsuite/dist/rsuite.min.css";
import Styles from "./styles/MyPerformance.module.css";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import DoneAllOutlinedIcon from "@mui/icons-material/DoneAllOutlined";

function MyPerformance() {
  return (
    <div className={Styles.container}>
      <h3 style={{ marginTop: "3rem", marginBottom: "2rem" }}>
        My performance
      </h3>
      <div style={{ display: "flex" }}>
        <div className={Styles.streak}>
          <div
            style={{
              backgroundColor: "rgb(203 225 250)",
              color: "rgb(46 141 255)",
              borderRadius: "1rem",
              paddingTop: "1.5rem",
              paddingBottom: "1.5rem",
              fontWeight: "700",
              marginBottom: "1rem",
              fontWeight: "700",
            }}
          >
            <MenuBookIcon style={{ fontSize: "3rem" }} />
          </div>
          <h6
            style={{
              marginTop: "1rem",
              fontSize: "1.2rem",
            }}
          >
            TIME SPENT
          </h6>
          <div>
            <h6
              style={{
                fontSize: "1.5rem",
              }}
            >
              31.8 hours
            </h6>
          </div>
        </div>

        <div
          className={Styles.streak}
          style={{ marginLeft: "1rem", marginRight: "1rem" }}
        >
          <div
            style={{
              backgroundColor: "rgb(252 231 205)",
              color: "rgb(254 158 35)",
              borderRadius: "1rem",
              paddingTop: "1.5rem",
              paddingBottom: "1.5rem",
              fontWeight: "700",
              marginBottom: "1rem",
              fontWeight: "700",
            }}
          >
            <HourglassBottomIcon style={{ fontSize: "3rem" }} />
          </div>
          <h6
            style={{
              marginTop: "1rem",
              fontSize: "1.2rem",
            }}
          >
            TIME SPENT
          </h6>
          <div>
            <h6
              style={{
                fontSize: "1.5rem",
              }}
            >
              31.8 hours
            </h6>
          </div>
        </div>
        <div className={Styles.streak}>
          <div
            style={{
              backgroundColor: "rgb(227 240 211)",
              color: "rgb(159 203 102)",
              borderRadius: "1rem",
              paddingTop: "1.5rem",
              paddingBottom: "1.5rem",
              fontWeight: "700",
              marginBottom: "1rem",
              fontWeight: "700",
            }}
          >
            <DoneAllOutlinedIcon style={{ fontSize: "3rem" }} />
          </div>
          <h6
            style={{
              marginTop: "1rem",
              fontSize: "1.2rem",
            }}
          >
            TIME SPENT
          </h6>
          <div>
            <h6
              style={{
                fontSize: "1.5rem",
              }}
            >
              31.8 hours
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyPerformance;
