import classes from "./DashboardFilters.module.css"

export default function DashboardFilters() {

  return (
    <div className={classes["filter-container"]}>
        <span>Filtrar por:</span>
        <select>
            <option value="all">Todos</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
        </select>
    </div>
  )
}
