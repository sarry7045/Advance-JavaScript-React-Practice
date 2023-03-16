import { useContext } from "react";
import CardContext from "./CardContext";

function useCustomHoopk() {
  return useContext(CardContext);
}
export default useCustomHoopk;
