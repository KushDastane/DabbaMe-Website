/**
 * kitchenLocations.js
 *
 * Dedicated, editable static data repository for DabbaMe's kitchen partner locations.
 * Source of truth for public-facing network stats, state accordions, cities, and localities.
 *
 * MAINTENANCE WORKFLOW:
 * When adding a new kitchen:
 * 1. Locate or add the corresponding State object in `kitchenLocations`.
 * 2. Locate or add the City object within `cities`.
 * 3. Append the new locality/neighbourhood to the `localities` array.
 * 4. Update the display `networkStats` headline numbers below if milestone thresholds are crossed.
 * 5. Commit and redeploy.
 *
 * NOTE: Private test kitchens, internal database IDs, and sensitive phone numbers
 * must never be included in this file.
 */

export const networkStats = {
  kitchenPartners: '40+',
  statesAndTerritories: '12',
  citiesAndLocalities: '25+',
};

export const networkStatsList = [
  {
    id: 'partners',
    value: networkStats.kitchenPartners,
    label: 'Home Kitchen Partners',
    shortLabel: 'Home Kitchens',
  },
  {
    id: 'states',
    value: networkStats.statesAndTerritories,
    label: 'States / Territories',
    shortLabel: 'States / UTs',
  },
  {
    id: 'cities',
    value: networkStats.citiesAndLocalities,
    label: 'Cities & Localities',
    shortLabel: 'Localities',
  },
];

export const stateNamesList = [
  'Maharashtra',
  'Gujarat',
  'Delhi',
  'Uttar Pradesh',
  'Punjab',
  'Bihar',
  'West Bengal',
  'Odisha',
  'Haryana',
  'Karnataka',
  'Madhya Pradesh',
  'Rajasthan',
];

export const kitchenLocations = [
  {
    id: 'maharashtra',
    name: 'Maharashtra',
    illustration: 'gateway-of-india',
    landmarkName: 'Gateway of India',
    cities: [
      {
        name: 'Akola',
        kitchenCount: 1,
        localities: ['Kaulkhed'],
      },
      {
        name: 'Kadamwak Wasti',
        kitchenCount: 1,
        localities: ['Riddhi Park Lane 2'],
      },
      {
        name: 'Kalyan',
        kitchenCount: 2,
        localities: ['Dombivli East', 'DB Chowk, Kalyan West'],
      },
      {
        name: 'Khoni Pagadyacha Pada',
        kitchenCount: 1,
        localities: ['Khoni Gaon Bus Stop Road'],
      },
      {
        name: 'Loni Kalbhor',
        kitchenCount: 2,
        localities: [
          'Opp. Yamunai Hospital',
          'Rahinji Nagar, near MIT ADT',
        ],
      },
      {
        name: 'Majgaon',
        kitchenCount: 1,
        localities: ['Near Gram Panchayat, Majgav Sawantwadi'],
      },
      {
        name: 'Mumbai',
        kitchenCount: 4,
        localities: [
          'Powai, Chandivali, Sangharsh Nagar',
          'Andheri West',
          'Byculla',
          'Dahisar East',
        ],
      },
      {
        name: 'Navi Mumbai',
        kitchenCount: 3,
        localities: ['Vashi', 'Ghansoli', 'Seawoods'],
      },
      {
        name: 'New Khasala',
        kitchenCount: 1,
        localities: ['Kamptee Road'],
      },
      {
        name: 'Pimpri-Chinchwad',
        kitchenCount: 1,
        localities: ['Moshi'],
      },
      {
        name: 'Thane',
        kitchenCount: 1,
        localities: ['Mumbra'],
      },
      {
        name: 'Ulhasnagar',
        kitchenCount: 1,
        localities: ['Ulhasnagar 4'],
      },
    ],
  },
  {
    id: 'gujarat',
    name: 'Gujarat',
    illustration: 'adalaj-stepwell',
    landmarkName: 'Adalaj Stepwell',
    cities: [
      {
        name: 'Ahmedabad',
        kitchenCount: 3,
        localities: [
          'Shilaj, near Vraj Residency',
          'Bapunagar',
          'Vejalpur',
        ],
      },
      {
        name: 'Mehsana',
        kitchenCount: 1,
        localities: ['Ram Lakhan Society'],
      },
    ],
  },
  {
    id: 'delhi',
    name: 'Delhi',
    illustration: 'india-gate',
    landmarkName: 'India Gate',
    cities: [
      {
        name: 'Delhi',
        kitchenCount: 1,
        localities: ['Kadipur'],
      },
      {
        name: 'New Delhi',
        kitchenCount: 1,
        localities: ['Lajwanti Garden'],
      },
    ],
  },
  {
    id: 'uttar-pradesh',
    name: 'Uttar Pradesh',
    illustration: 'taj-mahal',
    landmarkName: 'Taj Mahal',
    cities: [
      {
        name: 'Ghaziabad',
        kitchenCount: 1,
        localities: ['Sahibabad'],
      },
      {
        name: 'Kanpur',
        kitchenCount: 1,
        localities: ['Bingawan'],
      },
      {
        name: 'Lucknow',
        kitchenCount: 1,
        localities: ['Chinhat'],
      },
    ],
  },
  {
    id: 'punjab',
    name: 'Punjab',
    illustration: 'golden-temple',
    landmarkName: 'Golden Temple',
    cities: [
      {
        name: 'Ludhiana',
        kitchenCount: 1,
        localities: ['Mundian'],
      },
    ],
  },
  {
    id: 'bihar',
    name: 'Bihar',
    illustration: 'mahabodhi-temple',
    landmarkName: 'Mahabodhi Temple',
    cities: [
      {
        name: 'Patna',
        kitchenCount: 1,
        localities: ['Kankarbagh, East Indira Nagar'],
      },
    ],
  },
  {
    id: 'west-bengal',
    name: 'West Bengal',
    illustration: 'howrah-bridge',
    landmarkName: 'Howrah Bridge',
    cities: [
      {
        name: 'Kolkata',
        kitchenCount: 2,
        localities: ['Ward Number 59', 'Kasba'],
      },
      {
        name: 'South Dumdum',
        kitchenCount: 1,
        localities: ['Patipukur'],
      },
    ],
  },
  {
    id: 'odisha',
    name: 'Odisha',
    illustration: 'konark-sun-temple',
    landmarkName: 'Konark Sun Temple',
    cities: [
      {
        name: 'Raj Berhampur',
        kitchenCount: 1,
        localities: ['Dharampur'],
      },
    ],
  },
  {
    id: 'haryana',
    name: 'Haryana',
    illustration: 'brahma-sarovar-chariot',
    landmarkName: 'Kurukshetra Chariot & Brahma Sarovar',
    cities: [
      {
        name: 'Manesar',
        kitchenCount: 1,
        localities: ['Sector 76'],
      },
      {
        name: 'Panipat',
        kitchenCount: 1,
        localities: ['Vikas Nagar'],
      },
    ],
  },
  {
    id: 'karnataka',
    name: 'Karnataka',
    illustration: 'mysore-palace',
    landmarkName: 'Mysore Palace',
    cities: [
      {
        name: 'Hosapete',
        kitchenCount: 1,
        localities: ['Jambunatha Road'],
      },
    ],
  },
  {
    id: 'madhya-pradesh',
    name: 'Madhya Pradesh',
    illustration: 'sanchi-stupa',
    landmarkName: 'Sanchi Stupa',
    cities: [
      {
        name: 'Indore',
        kitchenCount: 1,
        localities: ['Patni Pura'],
      },
    ],
  },
  {
    id: 'rajasthan',
    name: 'Rajasthan',
    illustration: 'hawa-mahal',
    landmarkName: 'Hawa Mahal',
    cities: [
      {
        name: 'Jaipur',
        kitchenCount: 1,
        localities: ['Sunder Nagar'],
      },
      {
        name: 'Rawatsar',
        kitchenCount: 1,
        localities: ['Rawasar'],
      },
    ],
  },
];

/**
 * Calculates the number of public kitchen partners for a given state.
 * Derives count from city `kitchenCount` or number of localities where configured.
 */
export function getStatePartnerCount(state) {
  if (!state || !state.cities) return 0;
  return state.cities.reduce((sum, city) => {
    if (typeof city.kitchenCount === 'number') {
      return sum + city.kitchenCount;
    }
    return sum + (city.localities && city.localities.length ? city.localities.length : 1);
  }, 0);
}

/**
 * Calculates the total number of public kitchen partners across all states.
 */
export function getTotalPartnerCount(locations = kitchenLocations) {
  return locations.reduce((sum, state) => sum + getStatePartnerCount(state), 0);
}

/**
 * Formats partner count with proper singular/plural grammar.
 */
export function formatPartnerCount(count) {
  return `${count} Kitchen Partner${count === 1 ? '' : 's'}`;
}
