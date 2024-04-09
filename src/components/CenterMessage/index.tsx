type Props = {
  message: string;
};

const CenterMessage = ({ message }: Props) => (
  <div style={{ margin: "auto", paddingTop: "236px", width: "100%" }}>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p className="loading-message">{message}</p>
    </div>
  </div>
);

export default CenterMessage;
