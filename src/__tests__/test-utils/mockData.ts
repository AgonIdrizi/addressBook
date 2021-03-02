import {IHttpUsersResponse, IUser} from '../../types/user.types';
export const userMockData: IUser = {
  "gender": "male",
  "name": {
    "title": "Mr",
    "first": "Amândio",
    "last": "da Cunha"
  },
  "location": {
    "street": {
      "number": 8013,
      "name": "Rua Castro Alves "
    },
    "city": "Juiz de Fora",
    "state": "Distrito Federal",
    "country": "Brazil",
    "postcode": 28213,
    "coordinates": {
      "latitude": "-78.3276",
      "longitude": "-39.5628"
    },
    "timezone": {
      "offset": "-8:00",
      "description": "Pacific Time (US & Canada)"
    }
  },
  "email": "amandio.dacunha@example.com",
  "login": {
    "uuid": "132c3743-a8a0-41c6-9010-69f7e18b86ab",
    "username": "beautifulbear443",
    "password": "a1b2c3d4",
    "salt": "NINceUxw",
    "md5": "fa192b101d1d3bcc808267d5de327525",
    "sha1": "bb328a7ed08efaa4055f5bf1726baaaaca2d7e89",
    "sha256": "327f74f2b34ec687381754be85a672befb6acf9c98c659596a35c1f2aefba858"
  },
  "dob": {
    "date": "1976-05-29T08:11:43.223Z",
    "age": 45
  },
  "registered": {
    "date": "2018-12-31T07:45:52.581Z",
    "age": 3
  },
  "phone": "(81) 5753-6791",
  "cell": "(37) 7740-7554",
  "id": {
    "name": "",
    "value": null
  },
  "picture": {
    "large": "https://randomuser.me/api/portraits/men/46.jpg",
    "medium": "https://randomuser.me/api/portraits/med/men/46.jpg",
    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/46.jpg"
  },
  "nat": "BR"
}

export const usersMockData: IHttpUsersResponse = {
  results: [
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Magnus",
        "last": "Herz"
      },
      "location": {
        "street": {
          "number": 1004,
          "name": "Mozartstraße"
        },
        "city": "Malchin",
        "state": "Baden-Württemberg",
        "country": "Germany",
        "postcode": 99232,
        "coordinates": {
          "latitude": "-39.5839",
          "longitude": "-113.1336"
        },
        "timezone": {
          "offset": "+3:00",
          "description": "Baghdad, Riyadh, Moscow, St. Petersburg"
        }
      },
      "email": "magnus.herz@example.com",
      "login": {
        "uuid": "a581a80f-f3c5-4316-ae51-f968cbf39799",
        "username": "greenbutterfly977",
        "password": "tobias",
        "salt": "8oWwleBN",
        "md5": "89e8c1b5c89710dce6d9fb3b416db03b",
        "sha1": "fdf3ef4a78be214459739fbd4fc1a9f99961850e",
        "sha256": "7b9045d4acd364f666f1d9b04b932377e63f8d9af49ecea2abb64f7d17ee90d9"
      },
      "dob": {
        "date": "1976-08-27T16:43:43.632Z",
        "age": 45
      },
      "registered": {
        "date": "2009-07-09T12:02:48.939Z",
        "age": 12
      },
      "phone": "0869-2546519",
      "cell": "0176-6490713",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/56.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/56.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/56.jpg"
      },
      "nat": "DE"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Elijah",
        "last": "Watts"
      },
      "location": {
        "street": {
          "number": 276,
          "name": "Lakeview St"
        },
        "city": "Bathurst",
        "state": "Australian Capital Territory",
        "country": "Australia",
        "postcode": 509,
        "coordinates": {
          "latitude": "-61.8244",
          "longitude": "173.4839"
        },
        "timezone": {
          "offset": "-10:00",
          "description": "Hawaii"
        }
      },
      "email": "elijah.watts@example.com",
      "login": {
        "uuid": "ba6f1c35-044f-4107-9024-74d7beceec62",
        "username": "tinyrabbit479",
        "password": "thumb",
        "salt": "tEs1DU6X",
        "md5": "49a16d7c9fdfce72f13514876e785a29",
        "sha1": "7000d3617a3eed5b8d85838e48cef1770b1f0956",
        "sha256": "4e1be6b35d44032693de5811723fff8385dce25162c2f17fecb4dec9949e87b3"
      },
      "dob": {
        "date": "1953-10-03T20:30:46.615Z",
        "age": 68
      },
      "registered": {
        "date": "2016-08-11T04:31:04.753Z",
        "age": 5
      },
      "phone": "05-7772-4109",
      "cell": "0455-734-860",
      "id": {
        "name": "TFN",
        "value": "343762544"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/55.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/55.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/55.jpg"
      },
      "nat": "AU"
    },
    {
      "gender": "female",
      "name": {
        "title": "Ms",
        "first": "Lindsey",
        "last": "Van de Veerdonk"
      },
      "location": {
        "street": {
          "number": 40,
          "name": "Bremere"
        },
        "city": "Lellens",
        "state": "Utrecht",
        "country": "Netherlands",
        "postcode": 37794,
        "coordinates": {
          "latitude": "57.9053",
          "longitude": "20.7018"
        },
        "timezone": {
          "offset": "+4:00",
          "description": "Abu Dhabi, Muscat, Baku, Tbilisi"
        }
      },
      "email": "lindsey.vandeveerdonk@example.com",
      "login": {
        "uuid": "9cbc4620-e89b-467d-a057-6ca48770cb8c",
        "username": "brownfrog779",
        "password": "1957",
        "salt": "OWcfxBIn",
        "md5": "24d208998a6d4b126b89b6abb04c53b6",
        "sha1": "64a3d7c3be0b464fcccfed30cbc7dc33620e1b8e",
        "sha256": "edc2bd963f7476b9e0a8fa9f70f5bdac401fcd92b78ac1fed881f3d8f7ecbf74"
      },
      "dob": {
        "date": "1952-08-10T05:21:54.045Z",
        "age": 69
      },
      "registered": {
        "date": "2003-07-27T18:47:32.791Z",
        "age": 18
      },
      "phone": "(174)-420-5607",
      "cell": "(519)-468-8503",
      "id": {
        "name": "BSN",
        "value": "48765927"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/29.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/29.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/29.jpg"
      },
      "nat": "NL"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Elliot",
        "last": "Chan"
      },
      "location": {
        "street": {
          "number": 3609,
          "name": "Cedar St"
        },
        "city": "Winfield",
        "state": "Manitoba",
        "country": "Canada",
        "postcode": "D8S 8S0",
        "coordinates": {
          "latitude": "58.3244",
          "longitude": "46.1944"
        },
        "timezone": {
          "offset": "+3:30",
          "description": "Tehran"
        }
      },
      "email": "elliot.chan@example.com",
      "login": {
        "uuid": "037c4ac0-1578-4303-9c21-42b66309a0c8",
        "username": "tinyladybug515",
        "password": "enters",
        "salt": "eC6q22Wf",
        "md5": "1778629ee0099a3a2097cd2392fc7ef9",
        "sha1": "a2901125831d0d92c9a868e6ad7ea35278aae5db",
        "sha256": "1cac1cb8bd034f1e35558ad7644a64bd9a031aa93d34620f0431679dbdc5419f"
      },
      "dob": {
        "date": "1983-06-16T03:01:32.704Z",
        "age": 38
      },
      "registered": {
        "date": "2002-04-08T17:51:28.193Z",
        "age": 19
      },
      "phone": "970-766-0114",
      "cell": "913-190-1040",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/77.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/77.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/77.jpg"
      },
      "nat": "CA"
    },
    {
      "gender": "female",
      "name": {
        "title": "Mademoiselle",
        "first": "Christine",
        "last": "Gerard"
      },
      "location": {
        "street": {
          "number": 1336,
          "name": "Rue de Bonnel"
        },
        "city": "Buttwil",
        "state": "Jura",
        "country": "Switzerland",
        "postcode": 5250,
        "coordinates": {
          "latitude": "-57.4627",
          "longitude": "155.4924"
        },
        "timezone": {
          "offset": "-11:00",
          "description": "Midway Island, Samoa"
        }
      },
      "email": "christine.gerard@example.com",
      "login": {
        "uuid": "7add8066-dca9-4e4c-a142-953f3617e4dd",
        "username": "brownpeacock562",
        "password": "casper",
        "salt": "aqEgeBQr",
        "md5": "9abec56d2d80a2f706962557d574d216",
        "sha1": "33251ef350ba49724a075ad3ece257cff65b332e",
        "sha256": "d285a04dab296162139672e6a3b9a06bfa8939243f5189db06a8fa0115685a04"
      },
      "dob": {
        "date": "1967-05-30T06:09:36.497Z",
        "age": 54
      },
      "registered": {
        "date": "2007-11-13T05:55:12.330Z",
        "age": 14
      },
      "phone": "075 247 63 60",
      "cell": "075 617 88 16",
      "id": {
        "name": "AVS",
        "value": "756.5175.1375.69"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/39.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/39.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/39.jpg"
      },
      "nat": "CH"
    },
    {
      "gender": "female",
      "name": {
        "title": "Miss",
        "first": "Etiene",
        "last": "Oliveira"
      },
      "location": {
        "street": {
          "number": 644,
          "name": "Rua Paraná "
        },
        "city": "Manaus",
        "state": "Espírito Santo",
        "country": "Brazil",
        "postcode": 75860,
        "coordinates": {
          "latitude": "51.1621",
          "longitude": "-149.4165"
        },
        "timezone": {
          "offset": "-3:00",
          "description": "Brazil, Buenos Aires, Georgetown"
        }
      },
      "email": "etiene.oliveira@example.com",
      "login": {
        "uuid": "5e77b0cf-b0b9-4a01-97f2-52f031712dbd",
        "username": "blackelephant124",
        "password": "antonio",
        "salt": "Bc7KNc8f",
        "md5": "ace8f3396f7d3ccaf5c79b83b46206d4",
        "sha1": "e8a615b44f169ebc39b192a205b802d8df6d358e",
        "sha256": "7a12eb37bf7b4f777b0d766fc4310ffbc8f15a2265b50fd2824e73cb13f013d5"
      },
      "dob": {
        "date": "1976-09-11T06:37:31.429Z",
        "age": 45
      },
      "registered": {
        "date": "2011-05-11T09:46:16.883Z",
        "age": 10
      },
      "phone": "(18) 4045-5724",
      "cell": "(73) 2306-2711",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/35.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/35.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/35.jpg"
      },
      "nat": "BR"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Eetu",
        "last": "Harju"
      },
      "location": {
        "street": {
          "number": 5005,
          "name": "Suvantokatu"
        },
        "city": "Turku",
        "state": "Tavastia Proper",
        "country": "Finland",
        "postcode": 64580,
        "coordinates": {
          "latitude": "38.6940",
          "longitude": "-160.1108"
        },
        "timezone": {
          "offset": "+3:30",
          "description": "Tehran"
        }
      },
      "email": "eetu.harju@example.com",
      "login": {
        "uuid": "38362027-26e0-4471-97b4-33c865627137",
        "username": "crazylion972",
        "password": "phish1",
        "salt": "DoRBvoaa",
        "md5": "db111b9165ca11cf51ccb59a4fa0a4f4",
        "sha1": "7e28f03cbb5a31e81b983f67bb7774879ab45311",
        "sha256": "2e09fbb9b724df0c1152a9c45171068b0dcf956cb1878cbcc686b823c2d11997"
      },
      "dob": {
        "date": "1980-04-30T10:57:06.637Z",
        "age": 41
      },
      "registered": {
        "date": "2009-08-19T02:25:48.418Z",
        "age": 12
      },
      "phone": "05-123-931",
      "cell": "040-693-66-82",
      "id": {
        "name": "HETU",
        "value": "NaNNA145undefined"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/5.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/5.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/5.jpg"
      },
      "nat": "FI"
    },
    {
      "gender": "female",
      "name": {
        "title": "Miss",
        "first": "Gerlind",
        "last": "Heise"
      },
      "location": {
        "street": {
          "number": 5837,
          "name": "Am Bahnhof"
        },
        "city": "Meschede",
        "state": "Saarland",
        "country": "Germany",
        "postcode": 64829,
        "coordinates": {
          "latitude": "43.9629",
          "longitude": "38.1037"
        },
        "timezone": {
          "offset": "-5:00",
          "description": "Eastern Time (US & Canada), Bogota, Lima"
        }
      },
      "email": "gerlind.heise@example.com",
      "login": {
        "uuid": "6911a2cd-d198-42c9-a5b8-af185b351784",
        "username": "heavydog793",
        "password": "sanford",
        "salt": "3SWdHa8n",
        "md5": "b44b365ddccb6858017a585a4387eb11",
        "sha1": "127cd9216715285f1e42babe80c40e204b370709",
        "sha256": "bdebf4e122ba42e5c88e780d0aa64ccfd225ad0c44c8ee1fb05c11c49e81b55b"
      },
      "dob": {
        "date": "1949-03-17T15:30:02.759Z",
        "age": 72
      },
      "registered": {
        "date": "2012-04-20T00:57:31.230Z",
        "age": 9
      },
      "phone": "0434-1425950",
      "cell": "0170-4603187",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/12.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/12.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/12.jpg"
      },
      "nat": "DE"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "سهیل",
        "last": "علیزاده"
      },
      "location": {
        "street": {
          "number": 7457,
          "name": "حجاب"
        },
        "city": "گلستان",
        "state": "کهگیلویه و بویراحمد",
        "country": "Iran",
        "postcode": 91724,
        "coordinates": {
          "latitude": "41.7202",
          "longitude": "-22.9924"
        },
        "timezone": {
          "offset": "-3:00",
          "description": "Brazil, Buenos Aires, Georgetown"
        }
      },
      "email": "shyl.aalyzdh@example.com",
      "login": {
        "uuid": "0f9a0f11-2309-4851-9607-98c46b545093",
        "username": "organicostrich325",
        "password": "sheriff",
        "salt": "6d4aoihg",
        "md5": "4f9e8fa41d1fe4ee1c0a1e2d2936a2fa",
        "sha1": "8fe43bf96ed2b9bdab11682ad9737d47a241c33a",
        "sha256": "d0ad1512ba86cf241a0dd7e8fd555eabbf0cb5faa7e8786b9c238897d907e803"
      },
      "dob": {
        "date": "1945-10-11T23:07:00.778Z",
        "age": 76
      },
      "registered": {
        "date": "2012-09-25T15:32:22.314Z",
        "age": 9
      },
      "phone": "077-69075389",
      "cell": "0953-711-3227",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/56.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/56.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/56.jpg"
      },
      "nat": "IR"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Bernward",
        "last": "Funke"
      },
      "location": {
        "street": {
          "number": 917,
          "name": "Jahnstraße"
        },
        "city": "Falkensee",
        "state": "Sachsen-Anhalt",
        "country": "Germany",
        "postcode": 44211,
        "coordinates": {
          "latitude": "48.5543",
          "longitude": "-128.4152"
        },
        "timezone": {
          "offset": "-2:00",
          "description": "Mid-Atlantic"
        }
      },
      "email": "bernward.funke@example.com",
      "login": {
        "uuid": "2643298d-ee97-43b7-9300-b48fa607145f",
        "username": "organicmouse488",
        "password": "lauren",
        "salt": "jD4upfkd",
        "md5": "4abdf4be3a330e1805dc6f5ab1c3e2ac",
        "sha1": "5ecdcafb9084a404967021ea38d95a07bc1ba459",
        "sha256": "7505f9a3d44ada43a2bef72eeabbb25e2302c80565ddaa10124c105050b17298"
      },
      "dob": {
        "date": "1989-03-09T04:06:08.222Z",
        "age": 32
      },
      "registered": {
        "date": "2015-01-26T09:42:19.878Z",
        "age": 6
      },
      "phone": "0512-8342081",
      "cell": "0175-4881050",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/61.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/61.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/61.jpg"
      },
      "nat": "DE"
    }
  ],
  "info": {
    "seed": "4d3c8445da01f1b8",
    "results": 10,
    "page": 3,
    "version": "1.3"
  }
}