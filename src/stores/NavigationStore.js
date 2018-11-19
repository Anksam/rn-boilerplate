import { observable, action } from "mobx";

export default class NavigationStore {
  @observable headerTitle = "Index"
  @observable.ref navigationState = {
    index: 0,
    routes: [
      { key: "SplashScreen", routeName: "SplashScreen" },
    ],
  }

  // NOTE: the second param, is to avoid stacking and reset the nav state
  @action dispatch = (action, stackNavState = true) => {
    const previousNavState = stackNavState ? this.navigationState : null;
    return this.navigationState = AppContainer
        .router
        .getStateForAction(action, previousNavState);
  }
}
