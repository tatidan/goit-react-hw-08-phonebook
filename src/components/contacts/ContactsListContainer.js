import { connect } from "react-redux";
import ContactsList from "./ContactsList";
import { removeContact, onFilterRender } from "../../redux/contacts";

const mapStateToProps = (state) => ({
  contacts: onFilterRender(state),
});

const mapDispatchToProps = (dispatch) => ({
  removeContact: (id) => dispatch(removeContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
