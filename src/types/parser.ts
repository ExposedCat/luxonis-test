interface Apartment {
	title: string
	images: string[]
}

type DataHandler = (apartments: Apartment[]) => void

export { Apartment, DataHandler }
