interface Apartment {
	title: string
	address: string
	images: string[]
}

type DataHandler = (apartments: Apartment[]) => void

export { Apartment, DataHandler }
