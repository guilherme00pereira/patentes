

const presentationTemplate = (class, value) => {
    return (
        <div className={`badge-table ${class}`}><span>{value}</span></div>
    )
}

const situationTemplate = (class, value) => {
    return (
        <div className={`badge-table ${class}`}><span>{value}</span></div>
    )
}

const types = [
    { "Nominativa": () => presentationTemplate({class: "nominativa", value: "N"}) },
    { "Figurativa": () => presentationTemplate({class: "figurativa", value: "F"}) },
    { "Mista": () => presentationTemplate({class: "mista", value: "M"}) },
    { "Registered": () => situationTemplate({class: "", value: "Registrado"}) },
]

const TableBadges = ({value}: {value: string}) => {
    return <div>{value}</div>
};

export default TableBadges;