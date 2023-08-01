import { useContext } from "react";
import classes from "./DashboardFilters.module.css";
import { filterContext } from "../../contexts/Filters/FiltersContext";

export default function DashboardFilters() {
    const { filter, setFilter } = useContext(filterContext);

    function handleChangeFilter(event) {
        setFilter(event.target.value);
    }

    return (
        <div className={classes["filter-container"]}>
            <span>Filtrar por:</span>
            <select value={filter} onChange={handleChangeFilter} >
                <option value="all">Todos</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
            </select>
        </div>
    );
}
