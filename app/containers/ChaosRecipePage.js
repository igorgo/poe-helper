import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ChaosRecipe from '../components/ChaosRecipe';
import * as ChaosRecipeActions from '../actions/chaosRecipe';
import type { appStateType } from '../reducers/types';

function mapStateToProps(state: appStateType) {
  return {
    counts: state.chaosRecipe
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ChaosRecipeActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChaosRecipe);
