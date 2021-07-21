const Route = (props) => {
  const { path, component, children } = props;
  const currentPath = window.location.pathname;

  return <>{path === currentPath && (children || component)}</>;
};

export { Route };
