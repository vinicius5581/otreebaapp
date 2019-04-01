import React from "react";
import { connect } from "react-redux";
import { fetchStrains } from "../../store/actions/strains";
import StrainsList from "../presentational/StrainsList"

class Strains extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchStrains());
  }

  render() {
    const { error, loading, strains } = this.props;
    console.log('Strains')
    return (
        <StrainsList 
            error={error} 
            loading={loading} 
            strains={strains}
        />
    )    
  }
}

const mapStateToProps = state => ({
  strains: state.strains.items,
  loading: state.strains.loading,
  error: state.strains.error
});

export default connect(mapStateToProps)(Strains);