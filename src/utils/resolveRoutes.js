const resolveRoutes = (route) => {
  console.log(`Value route:${route.length}`);
  if (route.length <= 7) {
    let validRoute = route === "/" ? route : "/:id";
    return validRoute;
  }
  return `/${route}`;
};

export default resolveRoutes;
