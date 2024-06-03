import "./index.css"

const FilterButtons = props => {
    const{buttonDetails, onFilterByFirstChar} = props
    const{value} = buttonDetails

    const onCharFilter = event => onFilterByFirstChar(event.target.value);

    return (
        <>
            <button type="button" className="filter-button" value={value} onClick={onCharFilter}>{value}</button><span className="symbole">/</span>
        </>
    )
}

export default FilterButtons