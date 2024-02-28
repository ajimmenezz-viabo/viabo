import { useContext } from "preact/hooks"
import { AccordionContext } from "../Accordion"
import ChevronRight from "../icons/ChevronRight"
import Plus from "../icons/Plus"

const AccordionServiceDesktop = ({ service }) => {
	const { selected, setSelected } = useContext(AccordionContext)

	const handleClick = (newValue) => {
		setSelected(newValue)
	}
	const open = selected === service.value

	return (
		<li
			className={`border-b ${open ? "mt-5 pb-5" : ""} text-white transition-all transition-colors`}
		>
			<header
				role="button"
				onClick={() => handleClick(service.value)}
				className={`flex items-center justify-between p-4 text-3xl  ${open ? "bg-primary-dark font-medium text-white" : "font-light text-gray-300"} rounded-lg transition `}
			>
				{service.title}
				{open ? <ChevronRight className={" transition-transform"} size={16} /> : <Plus size={16} />}
			</header>
		</li>
	)
}

export default AccordionServiceDesktop
