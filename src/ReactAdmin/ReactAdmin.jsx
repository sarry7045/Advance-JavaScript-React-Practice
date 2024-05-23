import { Admin, ListGuesser, Resource } from "react-admin";
// import jsonServerProvider from "ra-data-json-server";
// import accounts from "../../db.json"

// const dataProvider = jsonServerProvider(
//     accounts
// );

const ReactAdmin = () => {
  return (
    <Admin
    // dataProvider={dataProvider}
    >
      {/* <Resource name="posters" list={ListGuesser} />     */}
    </Admin>
  );
};

export default ReactAdmin;
