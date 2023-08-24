//External Lib Import

const ApiLoad = () => {
  // const { isLoading } = useSelector((state) => state.settingReducer);

  return (
    <div className={"s" ? "LoadingOverlay" : "d-none"}>
      <div className="loading__overlay">
        <div className="indeterminate"></div>
      </div>
    </div>
  );
};

export default ApiLoad;
