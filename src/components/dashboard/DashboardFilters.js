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
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
                <option value="2029">2029</option>
                <option value="2030">2030</option>
            </select>
        </div>
    );
}
