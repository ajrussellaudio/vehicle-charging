import { connect } from "react-redux";
import LocationsList from "../components/LocationsList";

const mapStateToProps = (state, props) => {
  const { locations } = state;
  return { locations };
};

export default connect(mapStateToProps)(LocationsList);
