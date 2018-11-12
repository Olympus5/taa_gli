import { Address } from './address';

export const ADDRESSES: Address[] = [
	{
		id: 1,
		label: 'Building 1',
		street: 'Rue Saint-André',
		streetNumber: 1,
		zipCode: '35000',
		city: 'Rennes',
		country: 'France',
		formattedAddress: '',
		location: "foo",
		url: "http://foo.com",
		placeId: "foo",
		attachments: ["foo"]
	},
	{
		id: 2,
		label: 'Building 2',
		street: 'Place Saint-Michel',
		streetNumber: 4,
		zipCode: '35000',
		city: 'Rennes',
		country: 'France',
		formattedAddress: '',
		location: "foo",
		url: "http://foo.com",
		placeId: "foo",
		attachments: ["foo"]
	},
	{
		id: 3,
		label: 'Building 3',
		street: 'Rue de la Fonderie',
		streetNumber: 13,
		zipCode: '35000',
		city: 'Rennes',
		country: 'France',
		formattedAddress: '',
		location: "foo",
		url: "http://foo.com",
		placeId: "foo",
		attachments: ["foo"]
	}
];
