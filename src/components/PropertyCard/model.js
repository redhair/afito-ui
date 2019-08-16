const tests = [
  {
    user_id: 50,
    email: 'thomasbonanni@afito.com',
    phone_number: '',
    profile_image: 'https://s3.us-east-2.amazonaws.com/afito-development-bucket/utilities/BlankUser.png',
    name: { first: 'Tom', last: 'Bonanni' },
    address: { line1: '3 Turtle Creek Drive', line2: '', city: 'Mullica Hill', state: 'NJ' },
    area_id: 1,
    lat: '39.7305232',
    lng: '-75.2051269',
    image_url: 'https://afito-production-bucket.s3.amazonaws.com/47/ab735050-c8bf-11e8-b39d-6d8f781deb5f.jpeg',
    description: 'n',
    beds: 1,
    baths: 0.5,
    parking: false,
    price: 3000,
    hometype: 'condo',
    images: '[]',
    max_occupancy: 1,
    square_footage: 1000,
    property_name: null,
    contacts: '0',
    area_description: 'Rutgers University New Brunswick the State University of New Jersey',
    area_name: 'Rutgers University',
    area_image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQitSc_So_fiflxnusMnLDQAjsBMNAg6vd7tRhsB8eylsiQ7GFdbw',
    area_location: { lat: 40.50016129999999, lng: -74.4492973 },
    floorplans: [],
    rank: '157'
  },
  {
    email: 'tombonanni@gmail.com',
    phone_number: '856-904-5488',
    profile_image: 'https://afito-development-bucket.s3.amazonaws.com/6/afc4e3c0-441c-11e9-b407-47a3cc37ad63.jpeg',
    name: { first: 'Tom', last: 'Bonanni' },
    address: { line1: '3 Turtle Creek Drive', line2: '', city: 'Mullica Hill', state: 'NJ' },
    area_id: 1,
    lat: '39.7305232',
    lng: '-75.2051269',
    image_url: 'https://afito-development-bucket.s3.amazonaws.com/18/4fec2ba0-b247-11e8-b4aa-2f79a4f8f838.jpeg',
    description: 'testc',
    beds: null,
    baths: null,
    parking: true,
    price: null,
    hometype: 'building',
    images: '[]',
    max_occupancy: null,
    square_footage: null,
    property_name: 'test',
    contacts: '0',
    area_description: 'Rutgers University New Brunswick the State University of New Jersey',
    area_name: 'Rutgers University',
    area_image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQitSc_So_fiflxnusMnLDQAjsBMNAg6vd7tRhsB8eylsiQ7GFdbw',
    area_location: { lat: 40.50016129999999, lng: -74.4492973 },
    floorplans: [
      {
        floorplan_id: 77,
        floorplanBaths: 1,
        floorplanBeds: 1,
        floorplanPrice: 1,
        floorplanName: '1',
        floorplanActive: true
      },
      {
        floorplan_id: 78,
        floorplanBaths: 1,
        floorplanBeds: 1,
        floorplanPrice: 1600,
        floorplanName: '1 Bedroom',
        floorplanSquareFootage: 3000,
        floorplanActive: true
      },
      {
        floorplan_id: 79,
        floorplanBaths: 1,
        floorplanBeds: 0,
        floorplanPrice: 1300,
        floorplanName: 'Studio',
        floorplanSquareFootage: 1000,
        floorplanActive: true
      }
    ],
    rank: '114'
  }
];

export default tests;
