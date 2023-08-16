import "rsuite/dist/rsuite.min.css";
import Styles from "./styles/MyActivity.module.css";

function MyActivity() {
  return (
    <div className={Styles.container}>
      <h3 style={{ marginTop: "4rem", marginBottom: "2rem" }}>My Activity</h3>
      <div
        style={{
          border: "1px solid rgb(209, 209, 209)",
          borderRadius: "2rem",
          backgroundColor: "white",
        }}
      >
        <div>
          <div style={{ margin: "1rem", marginLeft: "3rem" }}>
            <div>
              <h6 style={{ marginBottom: "1rem", fontSize: "1.1rem" }}>
                MONDAY
              </h6>
            </div>
            <div style={{ display: "flex" }}>
              <img
                src="https://www.nyip.edu/media/zoo/images/3-ways-to-become-a-better-photographer-1_19a9ab40eb62ec202806518ffdb67b08.jpg"
                alt="grgr"
                style={{ width: "6rem", borderRadius: "1rem" }}
              />
              <div style={{ marginLeft: "2rem" }}>
                <h5>Becoming a Photographer</h5>
                <h6>Clara Manning</h6>
              </div>
            </div>
          </div>
          <div style={{ marginLeft: "3rem" }}>
            <div style={{ display: "flex" }}>
              <img
                src="https://assets.api.uizard.io/api/cdn/stream/2c1a496b-9948-4cb1-b87e-dbd417261382.jpg"
                alt="grgr"
                style={{ width: "6rem", borderRadius: "1rem" }}
              />
              <div style={{ marginLeft: "2rem" }}>
                <h5>Design Thinking 2.0</h5>
                <h6>Chris Kinley</h6>
              </div>
            </div>
          </div>
        </div>
        <hr style={{ margin: "1rem" }} />
        <div>
          <div style={{ margin: "1rem", marginLeft: "3rem" }}>
            <div>
              <h6 style={{ marginBottom: "1rem", fontSize: "1.5rem" }}>
                10 DAYS AGO
              </h6>
            </div>
            <div style={{ display: "flex" }}>
              <img
                src="https://www.nyip.edu/media/zoo/images/3-ways-to-become-a-better-photographer-1_19a9ab40eb62ec202806518ffdb67b08.jpg"
                alt="grgr"
                style={{ width: "6rem", borderRadius: "1rem" }}
              />
              <div style={{ marginLeft: "2rem" }}>
                <h5>Product Photography</h5>
                <h6>Lena Gold</h6>
              </div>
            </div>
          </div>
        </div>
        <hr style={{ margin: "1rem" }} />
        <h5
          style={{
            margin: "1.5rem",
            marginLeft: "3rem",
            color: "rgb(46 141 255)",
          }}
        >
          VIEW ALL ACTIVITY
        </h5>
      </div>
    </div>
  );
}

export default MyActivity;
