import { GroupsContextProps } from "@app/types";
import { useContext } from "alem";

const useGroups = () => useContext<GroupsContextProps>("groups-context");
export default useGroups;
