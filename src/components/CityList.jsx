import React from 'react'

const CityList = () => {
   
        
            
            
           const DATA = [
  { id: "ZWE", code: "ZW", name: "Zimbabwe", provinces: [] },
  { id: "ZMB", code: "ZM", name: "Zambia", provinces: [] },
  { id: "YUG", code: "YU", name: "Yugoslavia", provinces: [] },
  { id: "YEM", code: "YE", name: "Yemen", provinces: [] },
  { id: "ESH", code: "EH", name: "Western Sahara", provinces: [] },
  { id: "WLF", code: "WF", name: "Wallis And Futuna Islands", provinces: [] },
  {
    id: "WALS",
    code: "WLS",
    name: "Wales",
    provinces: [
      {
        id: "GB-AGSY",
        code: "AGSY",
        name: "Anglesey/Sir Fon",
        country_id: "WALS"
      },
      {
        id: "GB-BREK",
        code: "BREK",
        name: "Brecknockshire/Sir Frycheiniog",
        country_id: "WALS"
      },
      {
        id: "GB-CDGN",
        code: "CDGN",
        name: "Cardiganshire/Ceredigion",
        country_id: "WALS"
      },
      {
        id: "GB-CMRN",
        code: "CMRN",
        name: "Carmarthenshire/Sir Gaerfyrddin",
        country_id: "WALS"
      },
      {
        id: "GB-CNFN",
        code: "CNFN",
        name: "Caernarfonshire/Sir Gaernarfon",
        country_id: "WALS"
      },
      { id: "GB-CTHN", code: "CTHN", name: "Caithness", country_id: "WALS" },
      {
        id: "GB-DENB",
        code: "DENB",
        name: "Denbighshire/Sir Ddinbych",
        country_id: "WALS"
      },
      {
        id: "GB-FTSH",
        code: "FTSH",
        name: "Flintshire/Sir Fflint",
        country_id: "WALS"
      },
      {
        id: "GB-GLAM",
        code: "GLAM",
        name: "Glamorgan/Morgannwg",
        country_id: "WALS"
      },
      {
        id: "GB-MIENT",
        code: "MIENT",
        name: "Merioneth/Meirionnydd",
        country_id: "WALS"
      },
      {
        id: "GB-MMTH",
        code: "MMTH",
        name: "Monmouthshire/Sir Fynwy",
        country_id: "WALS"
      },
      {
        id: "GB-MNTGS",
        code: "MNTGS",
        name: "Montgomeryshire/Sir Drefaldwyn",
        country_id: "WALS"
      },
      {
        id: "GB-PMBRK",
        code: "PMBRK",
        name: "Pembrokeshire/Sir Benfro",
        country_id: "WALS"
      },
      {
        id: "GB-RNRS",
        code: "RNRS",
        name: "Radnorshire/Sir Faesyfed",
        country_id: "WALS"
      }
    ]
  },
  { id: "VIR", code: "VI", name: "Virgin Islands (u.s.)", provinces: [] },
  { id: "VGB", code: "VG", name: "Virgin Islands (british)", provinces: [] },
  { id: "VNM", code: "VN", name: "Viet Nam", provinces: [] },
  { id: "VEN", code: "VE", name: "Venezuela", provinces: [] },
  { id: "VUT", code: "VU", name: "Vanuatu", provinces: [] },
  { id: "UZB", code: "UZ", name: "Uzbekistan", provinces: [] },
  { id: "URY", code: "UY", name: "Uruguay", provinces: [] },
  {
    id: "UMI",
    code: "UM",
    name: "United States Minor Outlying Islands",
    provinces: []
  },
  {
    id: "USA",
    code: "US",
    name: "United States",
    provinces: [
      {
        id: "AA",
        code: "AA",
        name: "Armed Forces Americas",
        country_id: "USA"
      },
      { id: "AE", code: "AE", name: "Armed Forces Europe", country_id: "USA" },
      { id: "AK", code: "AK", name: "Alaska", country_id: "USA" },
      { id: "AL", code: "AL", name: "Alabama", country_id: "USA" },
      { id: "AP", code: "AP", name: "Armed Forces Pacific", country_id: "USA" },
      { id: "AR", code: "AR", name: "Arkansas", country_id: "USA" },
      { id: "AZ", code: "AZ", name: "Arizona", country_id: "USA" },
      { id: "CA", code: "CA", name: "California", country_id: "USA" },
      { id: "CO", code: "CO", name: "Colorado", country_id: "USA" },
      { id: "CT", code: "CT", name: "Connecticut", country_id: "USA" },
      { id: "DC", code: "DC", name: "District of Columbia", country_id: "USA" },
      { id: "DE", code: "DE", name: "Delaware", country_id: "USA" },
      { id: "FL", code: "FL", name: "Florida", country_id: "USA" },
      { id: "GA", code: "GA", name: "Georgia", country_id: "USA" },
      { id: "GU", code: "GU", name: "Guam", country_id: "USA" },
      { id: "HI", code: "HI", name: "Hawaii", country_id: "USA" },
      { id: "IA", code: "IA", name: "Iowa", country_id: "USA" },
      { id: "ID", code: "ID", name: "Idaho", country_id: "USA" },
      { id: "IL", code: "IL", name: "Illinois", country_id: "USA" },
      { id: "IN", code: "IN", name: "Indiana", country_id: "USA" },
      { id: "KS", code: "KS", name: "Kansas", country_id: "USA" },
      { id: "KY", code: "KY", name: "Kentucky", country_id: "USA" },
      { id: "LA", code: "LA", name: "Louisiana", country_id: "USA" },
      { id: "MA", code: "MA", name: "Massachusetts", country_id: "USA" },
      { id: "MD", code: "MD", name: "Maryland", country_id: "USA" },
      { id: "ME", code: "ME", name: "Maine", country_id: "USA" },
      { id: "MI", code: "MI", name: "Michigan", country_id: "USA" },
      { id: "MN", code: "MN", name: "Minnesota", country_id: "USA" },
      { id: "MO", code: "MO", name: "Missouri", country_id: "USA" },
      { id: "MS", code: "MS", name: "Mississippi", country_id: "USA" },
      { id: "MT", code: "MT", name: "Montana", country_id: "USA" },
      { id: "NC", code: "NC", name: "North Carolina", country_id: "USA" },
      { id: "ND", code: "ND", name: "North Dakota", country_id: "USA" },
      { id: "NE", code: "NE", name: "Nebraska", country_id: "USA" },
      { id: "NH", code: "NH", name: "New Hampshire", country_id: "USA" },
      { id: "NJ", code: "NJ", name: "New Jersey", country_id: "USA" },
      { id: "NM", code: "NM", name: "New Mexico", country_id: "USA" },
      { id: "NV", code: "NV", name: "Nevada", country_id: "USA" },
      { id: "NY", code: "NY", name: "New York", country_id: "USA" },
      { id: "OH", code: "OH", name: "Ohio", country_id: "USA" },
      { id: "OK", code: "OK", name: "Oklahoma", country_id: "USA" },
      { id: "OR", code: "OR", name: "Oregon", country_id: "USA" },
      { id: "PA", code: "PA", name: "Pennsylvania", country_id: "USA" },
      { id: "PR", code: "PR", name: "Puerto Rico", country_id: "USA" },
      { id: "RI", code: "RI", name: "Rhode Island", country_id: "USA" },
      { id: "SC", code: "SC", name: "South Carolina", country_id: "USA" },
      { id: "SD", code: "SD", name: "South Dakota", country_id: "USA" },
      { id: "TN", code: "TN", name: "Tennessee", country_id: "USA" },
      { id: "TX", code: "TX", name: "Texas", country_id: "USA" },
      { id: "UT", code: "UT", name: "Utah", country_id: "USA" },
      { id: "VA", code: "VA", name: "Virginia", country_id: "USA" },
      { id: "VI", code: "VI", name: "Virgin Islands", country_id: "USA" },
      { id: "VT", code: "VT", name: "Vermont", country_id: "USA" },
      { id: "WA", code: "WA", name: "Washington", country_id: "USA" },
      { id: "WI", code: "WI", name: "Wisconsin", country_id: "USA" },
      { id: "WV", code: "WV", name: "West Virginia", country_id: "USA" },
      { id: "WY", code: "WY", name: "Wyoming", country_id: "USA" }
    ]
  },
  {
    id: "GBR",
    code: "GB",
    name: "United Kingdom",
    provinces: [
      {
        id: "GB-ABDN",
        code: "ABDN",
        name: "Aberdeenshire",
        country_id: "SCOT"
      },
      {
        id: "GB-ANGS",
        code: "ANGS",
        name: "Angus/Forfarshire",
        country_id: "SCOT"
      },
      { id: "GB-ARGL", code: "ARGL", name: "Argyllshire", country_id: "SCOT" },
      { id: "GB-AYRS", code: "AYRS", name: "Ayrshire", country_id: "SCOT" },
      { id: "GB-BANF", code: "BANF", name: "Banffshire", country_id: "SCOT" },
      { id: "GB-BUTE", code: "BUTE", name: "Buteshire", country_id: "SCOT" },
      {
        id: "GB-CLAK",
        code: "CLAK",
        name: "Clackmannanshire",
        country_id: "SCOT"
      },
      {
        id: "GB-CMTY",
        code: "CMTY",
        name: "Cromartyshire",
        country_id: "SCOT"
      },
      {
        id: "GB-DMBR",
        code: "DMBR",
        name: "Dunbartonshire/Dumbartonshire",
        country_id: "SCOT"
      },
      {
        id: "GB-DMFS",
        code: "DMFS",
        name: "Dumfriesshire",
        country_id: "SCOT"
      },
      {
        id: "GB-ELOTH",
        code: "ELOTH",
        name: "East Lothian/Haddingtonshire",
        country_id: "SCOT"
      },
      { id: "GB-FIFE", code: "FIFE", name: "Fife", country_id: "SCOT" },
      {
        id: "GB-INVER",
        code: "INVER",
        name: "Inverness-shire",
        country_id: "SCOT"
      },
      {
        id: "GB-KNDN",
        code: "KNDN",
        name: "Kincardineshire",
        country_id: "SCOT"
      },
      {
        id: "GB-KRCUD",
        code: "KRCUD",
        name: "Kirkcudbrightshire",
        country_id: "SCOT"
      },
      {
        id: "GB-KRSS",
        code: "KRSS",
        name: "Kinross-shire",
        country_id: "SCOT"
      },
      { id: "GB-LRKS", code: "LRKS", name: "Lanarkshire", country_id: "SCOT" },
      {
        id: "GB-MLOTH",
        code: "MLOTH",
        name: "Midlothian/Edinburghshire",
        country_id: "SCOT"
      },
      { id: "GB-MORAY", code: "MORAY", name: "Morayshire", country_id: "SCOT" },
      { id: "GB-NAIRN", code: "NAIRN", name: "Nairnshire", country_id: "SCOT" },
      { id: "GB-ORK", code: "ORK", name: "Orkney", country_id: "SCOT" },
      {
        id: "GB-PEEBS",
        code: "PEEBS",
        name: "Peeblesshire",
        country_id: "SCOT"
      },
      { id: "GB-PERTH", code: "PERTH", name: "Perthshire", country_id: "SCOT" },
      { id: "GB-RNFR", code: "RNFR", name: "Renfrewshire", country_id: "SCOT" },
      { id: "GB-ROSS", code: "ROSS", name: "Ross-shire", country_id: "SCOT" },
      {
        id: "GB-ROXB",
        code: "ROXB",
        name: "Roxburghshire",
        country_id: "SCOT"
      },
      {
        id: "GB-SELKS",
        code: "SELKS",
        name: "Selkirkshire",
        country_id: "SCOT"
      },
      { id: "GB-SHET", code: "SHET", name: "Shetland", country_id: "SCOT" },
      {
        id: "GB-STLNG",
        code: "STLNG",
        name: "Stirlingshire",
        country_id: "SCOT"
      },
      { id: "GB-SUTH", code: "SUTH", name: "Sutherland", country_id: "SCOT" },
      {
        id: "GB-WGNSH",
        code: "WGNSH",
        name: "Wigtownshire",
        country_id: "SCOT"
      },
      {
        id: "GB-WLOTH",
        code: "WLOTH",
        name: "West Lothian/Linlithgowshire",
        country_id: "SCOT"
      },
      { id: "GB-BDFD", code: "BDFD", name: "Bedfordshire", country_id: "ENGL" },
      { id: "GB-BRKS", code: "BRKS", name: "Berkshire", country_id: "ENGL" },
      {
        id: "GB-BUCKS",
        code: "BUCKS",
        name: "Buckinghamshire",
        country_id: "ENGL"
      },
      { id: "GB-BWKS", code: "BWKS", name: "Berwickshire", country_id: "ENGL" },
      {
        id: "GB-CAMBS",
        code: "CAMBS",
        name: "Cambridgeshire",
        country_id: "ENGL"
      },
      { id: "GB-CHES", code: "CHES", name: "Cheshire", country_id: "ENGL" },
      { id: "GB-CNWL", code: "CNWL", name: "Cornwall", country_id: "ENGL" },
      { id: "GB-CUMB", code: "CUMB", name: "Cumberland", country_id: "ENGL" },
      { id: "GB-DEVON", code: "DEVON", name: "Devon", country_id: "ENGL" },
      { id: "GB-DRBYS", code: "DRBYS", name: "Derbyshire", country_id: "ENGL" },
      { id: "GB-DRHM", code: "DRHM", name: "Durham", country_id: "ENGL" },
      { id: "GB-DRST", code: "DRST", name: "Dorset", country_id: "ENGL" },
      { id: "GB-ESSX", code: "ESSX", name: "Essex", country_id: "ENGL" },
      {
        id: "GB-GLOU",
        code: "GLOU",
        name: "Gloucestershire",
        country_id: "ENGL"
      },
      { id: "GB-HAMPS", code: "HAMPS", name: "Hampshire", country_id: "ENGL" },
      {
        id: "GB-HERTS",
        code: "HERTS",
        name: "Hertfordshire",
        country_id: "ENGL"
      },
      {
        id: "GB-HRFDS",
        code: "HRFDS",
        name: "Herefordshire",
        country_id: "ENGL"
      },
      {
        id: "GB-HUNTS",
        code: "HUNTS",
        name: "Huntingdonshire",
        country_id: "ENGL"
      },
      { id: "GB-KENT", code: "KENT", name: "Kent", country_id: "ENGL" },
      { id: "GB-LANCS", code: "LANCS", name: "Lancashire", country_id: "ENGL" },
      {
        id: "GB-LIECS",
        code: "LIECS",
        name: "Leicestershire",
        country_id: "ENGL"
      },
      {
        id: "GB-LINCS",
        code: "LINCS",
        name: "Lincolnshire",
        country_id: "ENGL"
      },
      { id: "GB-MSEX", code: "MSEX", name: "Middlesex", country_id: "ENGL" },
      { id: "GB-NFLK", code: "NFLK", name: "Norfolk", country_id: "ENGL" },
      {
        id: "GB-NHANTS",
        code: "NHANTS",
        name: "Northamptonshire",
        country_id: "ENGL"
      },
      {
        id: "GB-NHUMB",
        code: "NHUMB",
        name: "Northumberland",
        country_id: "ENGL"
      },
      {
        id: "GB-NOTTS",
        code: "NOTTS",
        name: "Nottinghamshire",
        country_id: "ENGL"
      },
      { id: "GB-OXFD", code: "OXFD", name: "Oxfordshire", country_id: "ENGL" },
      { id: "GB-RUTL", code: "RUTL", name: "Rutland", country_id: "ENGL" },
      { id: "GB-SFFK", code: "SFFK", name: "Suffolk", country_id: "ENGL" },
      {
        id: "GB-SHROPS",
        code: "SHROPS",
        name: "Shropshire",
        country_id: "ENGL"
      },
      { id: "GB-SOMST", code: "SOMST", name: "Somerset", country_id: "ENGL" },
      {
        id: "GB-STAFFS",
        code: "STAFFS",
        name: "Staffordshire",
        country_id: "ENGL"
      },
      { id: "GB-SURR", code: "SURR", name: "Surrey", country_id: "ENGL" },
      { id: "GB-SUSX", code: "SUSX", name: "Sussex", country_id: "ENGL" },
      { id: "GB-WILTS", code: "WILTS", name: "Wiltshire", country_id: "ENGL" },
      { id: "GB-WMLD", code: "WMLD", name: "Westmorland", country_id: "ENGL" },
      {
        id: "GB-WORCS",
        code: "WORCS",
        name: "Worcestershire",
        country_id: "ENGL"
      },
      { id: "GB-WWKS", code: "WWKS", name: "Warwickshire", country_id: "ENGL" },
      { id: "GB-YORKS", code: "YORKS", name: "Yorkshire", country_id: "ENGL" },
      { id: "NIRL-ARMG", code: "ARMG", name: "Armagh", country_id: "NIRL" },
      { id: "NIRL-ATRM", code: "ATRM", name: "Antrim", country_id: "NIRL" },
      { id: "NIRL-DOWN", code: "DOWN", name: "Down", country_id: "NIRL" },
      { id: "NIRL-FMNH", code: "FMNH", name: "Fermanagh", country_id: "NIRL" },
      {
        id: "NIRL-LDRY",
        code: "LDRY",
        name: "Londonderry",
        country_id: "NIRL"
      },
      { id: "NIRL-TYR", code: "TYR", name: "Tyrone", country_id: "NIRL" },
      {
        id: "GB-AGSY",
        code: "AGSY",
        name: "Anglesey/Sir Fon",
        country_id: "WALS"
      },
      {
        id: "GB-BREK",
        code: "BREK",
        name: "Brecknockshire/Sir Frycheiniog",
        country_id: "WALS"
      },
      {
        id: "GB-CDGN",
        code: "CDGN",
        name: "Cardiganshire/Ceredigion",
        country_id: "WALS"
      },
      {
        id: "GB-CMRN",
        code: "CMRN",
        name: "Carmarthenshire/Sir Gaerfyrddin",
        country_id: "WALS"
      },
      {
        id: "GB-CNFN",
        code: "CNFN",
        name: "Caernarfonshire/Sir Gaernarfon",
        country_id: "WALS"
      },
      { id: "GB-CTHN", code: "CTHN", name: "Caithness", country_id: "WALS" },
      {
        id: "GB-DENB",
        code: "DENB",
        name: "Denbighshire/Sir Ddinbych",
        country_id: "WALS"
      },
      {
        id: "GB-FTSH",
        code: "FTSH",
        name: "Flintshire/Sir Fflint",
        country_id: "WALS"
      },
      {
        id: "GB-GLAM",
        code: "GLAM",
        name: "Glamorgan/Morgannwg",
        country_id: "WALS"
      },
      {
        id: "GB-MIENT",
        code: "MIENT",
        name: "Merioneth/Meirionnydd",
        country_id: "WALS"
      },
      {
        id: "GB-MMTH",
        code: "MMTH",
        name: "Monmouthshire/Sir Fynwy",
        country_id: "WALS"
      },
      {
        id: "GB-MNTGS",
        code: "MNTGS",
        name: "Montgomeryshire/Sir Drefaldwyn",
        country_id: "WALS"
      },
      {
        id: "GB-PMBRK",
        code: "PMBRK",
        name: "Pembrokeshire/Sir Benfro",
        country_id: "WALS"
      },
      {
        id: "GB-RNRS",
        code: "RNRS",
        name: "Radnorshire/Sir Faesyfed",
        country_id: "WALS"
      }
    ]
  },
  { id: "ARE", code: "AE", name: "United Arab Emirates", provinces: [] },
  { id: "UKR", code: "UA", name: "Ukraine", provinces: [] },
  { id: "UGA", code: "UG", name: "Uganda", provinces: [] },
  { id: "TUV", code: "TV", name: "Tuvalu", provinces: [] },
  { id: "TCA", code: "TC", name: "Turks And Caicos Islands", provinces: [] },
  { id: "TKM", code: "TM", name: "Turkmenistan", provinces: [] },
  { id: "TUR", code: "TR", name: "Turkey", provinces: [] },
  { id: "TUN", code: "TN", name: "Tunisia", provinces: [] },
  { id: "TTO", code: "TT", name: "Trinidad And Tobago", provinces: [] },
  { id: "TON", code: "TO", name: "Tonga", provinces: [] },
  { id: "TKL", code: "TK", name: "Tokelau", provinces: [] },
  { id: "TGO", code: "TG", name: "Togo", provinces: [] },
  {
    id: "THA",
    code: "TH",
    name: "Thailand",
    provinces: [
      { id: "TH-10", code: "10", name: "Bangkok", country_id: "THA" },
      { id: "TH-11", code: "11", name: "Samut Prakan", country_id: "THA" },
      { id: "TH-12", code: "12", name: "Nonthaburi", country_id: "THA" },
      { id: "TH-13", code: "13", name: "Pathum Thani", country_id: "THA" },
      {
        id: "TH-14",
        code: "14",
        name: "Phra Nakhon Si Ayutthaya",
        country_id: "THA"
      },
      { id: "TH-15", code: "15", name: "Ang Thong", country_id: "THA" },
      { id: "TH-16", code: "16", name: "Lopburi", country_id: "THA" },
      { id: "TH-17", code: "17", name: "Sing Buri", country_id: "THA" },
      { id: "TH-18", code: "18", name: "Chainat", country_id: "THA" },
      { id: "TH-19", code: "19", name: "Saraburi", country_id: "THA" },
      { id: "TH-20", code: "20", name: "Chonburi", country_id: "THA" },
      { id: "TH-21", code: "21", name: "Rayong", country_id: "THA" },
      { id: "TH-22", code: "22", name: "Chanthaburi", country_id: "THA" },
      { id: "TH-23", code: "23", name: "Trat", country_id: "THA" },
      { id: "TH-24", code: "24", name: "Chachoengsao", country_id: "THA" },
      { id: "TH-25", code: "25", name: "Prachinburi", country_id: "THA" },
      { id: "TH-26", code: "26", name: "Nakhon Nayok", country_id: "THA" },
      { id: "TH-27", code: "27", name: "Sa Kaeo", country_id: "THA" },
      { id: "TH-30", code: "30", name: "Nakhon Ratchasima", country_id: "THA" },
      { id: "TH-31", code: "31", name: "Buriram", country_id: "THA" },
      { id: "TH-32", code: "32", name: "Surin", country_id: "THA" },
      { id: "TH-33", code: "33", name: "Sisaket", country_id: "THA" },
      { id: "TH-34", code: "34", name: "Ubon Ratchathani", country_id: "THA" },
      { id: "TH-35", code: "35", name: "Yasothon", country_id: "THA" },
      { id: "TH-36", code: "36", name: "Chaiyaphum", country_id: "THA" },
      { id: "TH-37", code: "37", name: "Amnat Charoen", country_id: "THA" },
      { id: "TH-38", code: "38", name: "Bueng Kan", country_id: "THA" },
      { id: "TH-39", code: "39", name: "Nong Bua Lamphu", country_id: "THA" },
      { id: "TH-40", code: "40", name: "Khon Kaen", country_id: "THA" },
      { id: "TH-41", code: "41", name: "Udon Thani", country_id: "THA" },
      { id: "TH-42", code: "42", name: "Loei", country_id: "THA" },
      { id: "TH-43", code: "43", name: "Nong Khai", country_id: "THA" },
      { id: "TH-44", code: "44", name: "Maha Sarakham", country_id: "THA" },
      { id: "TH-45", code: "45", name: "Roi Et", country_id: "THA" },
      { id: "TH-46", code: "46", name: "Kalasin", country_id: "THA" },
      { id: "TH-47", code: "47", name: "Sakon Nakhon", country_id: "THA" },
      { id: "TH-48", code: "48", name: "Nakhon Phanom", country_id: "THA" },
      { id: "TH-49", code: "49", name: "Mukdahan", country_id: "THA" },
      { id: "TH-50", code: "50", name: "Chiang Mai", country_id: "THA" },
      { id: "TH-51", code: "51", name: "Lamphun", country_id: "THA" },
      { id: "TH-52", code: "52", name: "Lampang", country_id: "THA" },
      { id: "TH-53", code: "53", name: "Uttaradit", country_id: "THA" },
      { id: "TH-54", code: "54", name: "Phrae", country_id: "THA" },
      { id: "TH-55", code: "55", name: "Nan", country_id: "THA" },
      { id: "TH-56", code: "56", name: "Phayao", country_id: "THA" },
      { id: "TH-57", code: "57", name: "Chiang Rai", country_id: "THA" },
      { id: "TH-58", code: "58", name: "Mae Hong Son", country_id: "THA" },
      { id: "TH-60", code: "60", name: "Nakhon Sawan", country_id: "THA" },
      { id: "TH-61", code: "61", name: "Uthai Thani", country_id: "THA" },
      { id: "TH-62", code: "62", name: "Kamphaeng Phet", country_id: "THA" },
      { id: "TH-63", code: "63", name: "Tak", country_id: "THA" },
      { id: "TH-64", code: "64", name: "Sukhothai", country_id: "THA" },
      { id: "TH-65", code: "65", name: "Phitsanulok", country_id: "THA" },
      { id: "TH-66", code: "66", name: "Phichit", country_id: "THA" },
      { id: "TH-67", code: "67", name: "Phetchabun", country_id: "THA" },
      { id: "TH-70", code: "70", name: "Ratchaburi", country_id: "THA" },
      { id: "TH-71", code: "71", name: "Kanchanaburi", country_id: "THA" },
      { id: "TH-72", code: "72", name: "Suphan Buri", country_id: "THA" },
      { id: "TH-73", code: "73", name: "Nakhon Pathom", country_id: "THA" },
      { id: "TH-74", code: "74", name: "Samut Sakhon", country_id: "THA" },
      { id: "TH-75", code: "75", name: "Samut Songkhram", country_id: "THA" },
      { id: "TH-76", code: "76", name: "Phetchaburi", country_id: "THA" },
      {
        id: "TH-77",
        code: "77",
        name: "Prachuap Khiri Khan",
        country_id: "THA"
      },
      {
        id: "TH-80",
        code: "80",
        name: "Nakhon Si Thammarat",
        country_id: "THA"
      },
      { id: "TH-81", code: "81", name: "Krabi", country_id: "THA" },
      { id: "TH-82", code: "82", name: "Phang Nga", country_id: "THA" },
      { id: "TH-83", code: "83", name: "Phuket", country_id: "THA" },
      { id: "TH-84", code: "84", name: "Surat Thani", country_id: "THA" },
      { id: "TH-85", code: "85", name: "Ranong", country_id: "THA" },
      { id: "TH-86", code: "86", name: "Chumphon", country_id: "THA" },
      { id: "TH-90", code: "90", name: "Songkhla", country_id: "THA" },
      { id: "TH-91", code: "91", name: "Satun", country_id: "THA" },
      { id: "TH-92", code: "92", name: "Trang", country_id: "THA" },
      { id: "TH-93", code: "93", name: "Phatthalung", country_id: "THA" },
      { id: "TH-94", code: "94", name: "Pattani", country_id: "THA" },
      { id: "TH-95", code: "95", name: "Yala", country_id: "THA" },
      { id: "TH-96", code: "96", name: "Narathiwat", country_id: "THA" }
    ]
  },
  {
    id: "TZA",
    code: "TZ",
    name: "Tanzania, United Republic Of",
    provinces: []
  },
  { id: "TJK", code: "TJ", name: "Tajikistan", provinces: [] },
  { id: "TWN", code: "TW", name: "Taiwan", provinces: [] },
  { id: "SYR", code: "SY", name: "Syrian Arab Republic", provinces: [] },
  {
    id: "CHE",
    code: "CH",
    name: "Switzerland",
    provinces: [
      { id: "CH-AG", code: "AG", name: "Aargau", country_id: "CHE" },
      {
        id: "CH-AI",
        code: "AI",
        name: "Appenzell Innerrhoden",
        country_id: "CHE"
      },
      {
        id: "CH-AR",
        code: "AR",
        name: "Appenzell Ausserrhoden",
        country_id: "CHE"
      },
      { id: "CH-BE", code: "BE", name: "Bern", country_id: "CHE" },
      { id: "CH-BL", code: "BL", name: "Basel-Landschaft", country_id: "CHE" },
      { id: "CH-BS", code: "BS", name: "Basel-Stadt", country_id: "CHE" },
      { id: "CH-FR", code: "FR", name: "Fribourg", country_id: "CHE" },
      { id: "CH-GE", code: "GE", name: "Genève", country_id: "CHE" },
      { id: "CH-GL", code: "GL", name: "Glarus", country_id: "CHE" },
      { id: "CH-GR", code: "GR", name: "Graubünden", country_id: "CHE" },
      { id: "CH-JU", code: "JU", name: "Jura", country_id: "CHE" },
      { id: "CH-LU", code: "LU", name: "Luzern", country_id: "CHE" },
      { id: "CH-NE", code: "NE", name: "Neuchâtel", country_id: "CHE" },
      { id: "CH-NW", code: "NW", name: "Nidwalden", country_id: "CHE" },
      { id: "CH-OW", code: "OW", name: "Obwalden", country_id: "CHE" },
      { id: "CH-SG", code: "SG", name: "St. Gallen", country_id: "CHE" },
      { id: "CH-SH", code: "SH", name: "Schaffhausen", country_id: "CHE" },
      { id: "CH-SO", code: "SO", name: "Solothurn", country_id: "CHE" },
      { id: "CH-SZ", code: "SZ", name: "Schwyz", country_id: "CHE" },
      { id: "CH-TG", code: "TG", name: "Thurgau", country_id: "CHE" },
      { id: "CH-TI", code: "TI", name: "Ticino", country_id: "CHE" },
      { id: "CH-UR", code: "UR", name: "Uri", country_id: "CHE" },
      { id: "CH-VD", code: "VD", name: "Vaud", country_id: "CHE" },
      { id: "CH-VS", code: "VS", name: "Valais", country_id: "CHE" },
      { id: "CH-ZG", code: "ZG", name: "Zug", country_id: "CHE" },
      { id: "CH-ZH", code: "ZH", name: "Zürich", country_id: "CHE" }
    ]
  },
  { id: "SWE", code: "SE", name: "Sweden", provinces: [] },
  { id: "SWZ", code: "SZ", name: "Swaziland", provinces: [] },
  {
    id: "SJM",
    code: "SJ",
    name: "Svalbard And Jan Mayen Islands",
    provinces: []
  },
  { id: "SUR", code: "SR", name: "Suriname", provinces: [] },
  { id: "SDN", code: "SD", name: "Sudan", provinces: [] },
  { id: "SPM", code: "PM", name: "St. Pierre And Miquelon", provinces: [] },
  { id: "SHN", code: "SH", name: "St. Helena", provinces: [] },
  { id: "LKA", code: "LK", name: "Sri Lanka", provinces: [] },
  { id: "ESP", code: "ES", name: "Spain", provinces: [] },
  { id: "SSD", code: "SS", name: "South Sudan", provinces: [] },
  {
    id: "SGS",
    code: "GS",
    name: "South Georgia And The South Sandwich Islands",
    provinces: []
  },
  { id: "ZAF", code: "ZA", name: "South Africa", provinces: [] },
  { id: "SOM", code: "SO", name: "Somalia", provinces: [] },
  { id: "SLB", code: "SB", name: "Solomon Islands", provinces: [] },
  { id: "SVN", code: "SI", name: "Slovenia", provinces: [] },
  { id: "SVK", code: "SK", name: "Slovakia (slovak Republic)", provinces: [] },
  { id: "SXM", code: "SX", name: "Sint Maarten (Dutch part)", provinces: [] },
  { id: "SGP", code: "SG", name: "Singapore", provinces: [] },
  { id: "SLE", code: "SL", name: "Sierra Leone", provinces: [] },
  { id: "SYC", code: "SC", name: "Seychelles", provinces: [] },
  { id: "SRB", code: "RS", name: "Serbia", provinces: [] },
  { id: "SEN", code: "SN", name: "Senegal", provinces: [] },
  {
    id: "SCOT",
    code: "SCT",
    name: "Scotland",
    provinces: [
      {
        id: "GB-ABDN",
        code: "ABDN",
        name: "Aberdeenshire",
        country_id: "SCOT"
      },
      {
        id: "GB-ANGS",
        code: "ANGS",
        name: "Angus/Forfarshire",
        country_id: "SCOT"
      },
      { id: "GB-ARGL", code: "ARGL", name: "Argyllshire", country_id: "SCOT" },
      { id: "GB-AYRS", code: "AYRS", name: "Ayrshire", country_id: "SCOT" },
      { id: "GB-BANF", code: "BANF", name: "Banffshire", country_id: "SCOT" },
      { id: "GB-BUTE", code: "BUTE", name: "Buteshire", country_id: "SCOT" },
      {
        id: "GB-CLAK",
        code: "CLAK",
        name: "Clackmannanshire",
        country_id: "SCOT"
      },
      {
        id: "GB-CMTY",
        code: "CMTY",
        name: "Cromartyshire",
        country_id: "SCOT"
      },
      {
        id: "GB-DMBR",
        code: "DMBR",
        name: "Dunbartonshire/Dumbartonshire",
        country_id: "SCOT"
      },
      {
        id: "GB-DMFS",
        code: "DMFS",
        name: "Dumfriesshire",
        country_id: "SCOT"
      },
      {
        id: "GB-ELOTH",
        code: "ELOTH",
        name: "East Lothian/Haddingtonshire",
        country_id: "SCOT"
      },
      { id: "GB-FIFE", code: "FIFE", name: "Fife", country_id: "SCOT" },
      {
        id: "GB-INVER",
        code: "INVER",
        name: "Inverness-shire",
        country_id: "SCOT"
      },
      {
        id: "GB-KNDN",
        code: "KNDN",
        name: "Kincardineshire",
        country_id: "SCOT"
      },
      {
        id: "GB-KRCUD",
        code: "KRCUD",
        name: "Kirkcudbrightshire",
        country_id: "SCOT"
      },
      {
        id: "GB-KRSS",
        code: "KRSS",
        name: "Kinross-shire",
        country_id: "SCOT"
      },
      { id: "GB-LRKS", code: "LRKS", name: "Lanarkshire", country_id: "SCOT" },
      {
        id: "GB-MLOTH",
        code: "MLOTH",
        name: "Midlothian/Edinburghshire",
        country_id: "SCOT"
      },
      { id: "GB-MORAY", code: "MORAY", name: "Morayshire", country_id: "SCOT" },
      { id: "GB-NAIRN", code: "NAIRN", name: "Nairnshire", country_id: "SCOT" },
      { id: "GB-ORK", code: "ORK", name: "Orkney", country_id: "SCOT" },
      {
        id: "GB-PEEBS",
        code: "PEEBS",
        name: "Peeblesshire",
        country_id: "SCOT"
      },
      { id: "GB-PERTH", code: "PERTH", name: "Perthshire", country_id: "SCOT" },
      { id: "GB-RNFR", code: "RNFR", name: "Renfrewshire", country_id: "SCOT" },
      { id: "GB-ROSS", code: "ROSS", name: "Ross-shire", country_id: "SCOT" },
      {
        id: "GB-ROXB",
        code: "ROXB",
        name: "Roxburghshire",
        country_id: "SCOT"
      },
      {
        id: "GB-SELKS",
        code: "SELKS",
        name: "Selkirkshire",
        country_id: "SCOT"
      },
      { id: "GB-SHET", code: "SHET", name: "Shetland", country_id: "SCOT" },
      {
        id: "GB-STLNG",
        code: "STLNG",
        name: "Stirlingshire",
        country_id: "SCOT"
      },
      { id: "GB-SUTH", code: "SUTH", name: "Sutherland", country_id: "SCOT" },
      {
        id: "GB-WGNSH",
        code: "WGNSH",
        name: "Wigtownshire",
        country_id: "SCOT"
      },
      {
        id: "GB-WLOTH",
        code: "WLOTH",
        name: "West Lothian/Linlithgowshire",
        country_id: "SCOT"
      }
    ]
  },
  { id: "SAU", code: "SA", name: "Saudi Arabia", provinces: [] },
  { id: "STP", code: "ST", name: "Sao Tome And Principe", provinces: [] },
  { id: "SMR", code: "SM", name: "San Marino", provinces: [] },
  { id: "WSM", code: "WS", name: "Samoa", provinces: [] },
  {
    id: "VCT",
    code: "VC",
    name: "Saint Vincent And The Grenadines",
    provinces: []
  },
  { id: "MAF", code: "MF", name: "Saint Martin (French part)", provinces: [] },
  { id: "LCA", code: "LC", name: "Saint Lucia", provinces: [] },
  { id: "KNA", code: "KN", name: "Saint Kitts And Nevis", provinces: [] },
  { id: "BLM", code: "BL", name: "Saint Barthélemy", provinces: [] },
  { id: "RWA", code: "RW", name: "Rwanda", provinces: [] },
  { id: "RUS", code: "RU", name: "Russian Federation", provinces: [] },
  { id: "ROU", code: "RO", name: "Romania", provinces: [] },
  { id: "REU", code: "RE", name: "Reunion", provinces: [] },
  { id: "QAT", code: "QA", name: "Qatar", provinces: [] },
  { id: "PRI", code: "PR", name: "Puerto Rico", provinces: [] },
  { id: "PRT", code: "PT", name: "Portugal", provinces: [] },
  {
    id: "POL",
    code: "PL",
    name: "Poland",
    provinces: [
      { id: "PL-DŚ", code: "DŚ", name: "dolnośląskie", country_id: "POL" },
      {
        id: "PL-KP",
        code: "KP",
        name: "kujawsko-pomorskie",
        country_id: "POL"
      },
      { id: "PL-LB", code: "LB", name: "lubelskie", country_id: "POL" },
      { id: "PL-ŁD", code: "ŁD", name: "łódzkie", country_id: "POL" },
      { id: "PL-LS", code: "LS", name: "lubuskie", country_id: "POL" },
      { id: "PL-MP", code: "MP", name: "małopolskie", country_id: "POL" },
      { id: "PL-MZ", code: "MZ", name: "mazowieckie", country_id: "POL" },
      { id: "PL-OP", code: "OP", name: "opolskie", country_id: "POL" },
      { id: "PL-PK", code: "PK", name: "podkarpackie", country_id: "POL" },
      { id: "PL-PL", code: "PL", name: "podlaskie", country_id: "POL" },
      { id: "PL-PM", code: "PM", name: "pomorskie", country_id: "POL" },
      { id: "PL-ŚK", code: "ŚK", name: "świętokrzyskie", country_id: "POL" },
      { id: "PL-ŚL", code: "ŚL", name: "śląskie", country_id: "POL" },
      {
        id: "PL-WM",
        code: "WM",
        name: "warmińsko-mazurskie",
        country_id: "POL"
      },
      { id: "PL-WP", code: "WP", name: "wielkopolskie", country_id: "POL" },
      { id: "PL-ZP", code: "ZP", name: "zachodniopomorskie", country_id: "POL" }
    ]
  },
  { id: "PCN", code: "PN", name: "Pitcairn", provinces: [] },
  { id: "PHL", code: "PH", name: "Philippines", provinces: [] },
  { id: "PER", code: "PE", name: "Peru", provinces: [] },
  { id: "PRY", code: "PY", name: "Paraguay", provinces: [] },
  { id: "PNG", code: "PG", name: "Papua New Guinea", provinces: [] },
  { id: "PAN", code: "PA", name: "Panama", provinces: [] },
  {
    id: "PSE",
    code: "PS",
    name: "Palestinian Territory, Occupied",
    provinces: []
  },
  { id: "PLW", code: "PW", name: "Palau", provinces: [] },
  { id: "PAK", code: "PK", name: "Pakistan", provinces: [] },
  { id: "OMN", code: "OM", name: "Oman", provinces: [] },
  { id: "NOR", code: "NO", name: "Norway", provinces: [] },
  { id: "MNP", code: "MP", name: "Northern Mariana Islands", provinces: [] },
  { id: "NFK", code: "NF", name: "Norfolk Island", provinces: [] },
  { id: "NIU", code: "NU", name: "Niue", provinces: [] },
  {
    id: "NIRL",
    code: "NIR",
    name: "N.Ireland",
    provinces: [
      { id: "NIRL-ARMG", code: "ARMG", name: "Armagh", country_id: "NIRL" },
      { id: "NIRL-ATRM", code: "ATRM", name: "Antrim", country_id: "NIRL" },
      { id: "NIRL-DOWN", code: "DOWN", name: "Down", country_id: "NIRL" },
      { id: "NIRL-FMNH", code: "FMNH", name: "Fermanagh", country_id: "NIRL" },
      {
        id: "NIRL-LDRY",
        code: "LDRY",
        name: "Londonderry",
        country_id: "NIRL"
      },
      { id: "NIRL-TYR", code: "TYR", name: "Tyrone", country_id: "NIRL" }
    ]
  },
  { id: "NGA", code: "NG", name: "Nigeria", provinces: [] },
  { id: "NER", code: "NE", name: "Niger", provinces: [] },
  { id: "NIC", code: "NI", name: "Nicaragua", provinces: [] },
  { id: "NZL", code: "NZ", name: "New Zealand", provinces: [] },
  { id: "NCL", code: "NC", name: "New Caledonia", provinces: [] },
  { id: "ANT", code: "AN", name: "Netherlands Antilles", provinces: [] },
  {
    id: "NLD",
    code: "NL",
    name: "Netherlands",
    provinces: [
      { id: "NL-DR", code: "DR", name: "Drenthe", country_id: "NLD" },
      { id: "NL-FL", code: "FL", name: "Flevoland", country_id: "NLD" },
      { id: "NL-FR", code: "FR", name: "Friesland", country_id: "NLD" },
      { id: "NL-GL", code: "GL", name: "Gelderland", country_id: "NLD" },
      { id: "NL-GR", code: "GR", name: "Groningen", country_id: "NLD" },
      { id: "NL-LB", code: "LB", name: "Limburg", country_id: "NLD" },
      { id: "NL-NB", code: "NB", name: "Noord-Brabant", country_id: "NLD" },
      { id: "NL-NH", code: "NH", name: "Noord-Holland", country_id: "NLD" },
      { id: "NL-OV", code: "OV", name: "Overijssel", country_id: "NLD" },
      { id: "NL-UT", code: "UT", name: "Utrecht", country_id: "NLD" },
      { id: "NL-ZE", code: "ZE", name: "Zeeland", country_id: "NLD" },
      { id: "NL-ZH", code: "ZH", name: "Zuid-Holland", country_id: "NLD" },
      { id: "NL-ZL", code: "ZL", name: "Zeeland", country_id: "NLD" }
    ]
  },
  { id: "NPL", code: "NP", name: "Nepal", provinces: [] },
  { id: "NRU", code: "NR", name: "Nauru", provinces: [] },
  { id: "NAM", code: "NA", name: "Namibia", provinces: [] },
  { id: "MMR", code: "MM", name: "Myanmar", provinces: [] },
  { id: "MOZ", code: "MZ", name: "Mozambique", provinces: [] },
  { id: "MAR", code: "MA", name: "Morocco", provinces: [] },
  { id: "MSR", code: "MS", name: "Montserrat", provinces: [] },
  { id: "MNE", code: "ME", name: "Montenegro", provinces: [] },
  { id: "MNG", code: "MN", name: "Mongolia", provinces: [] },
  { id: "MCO", code: "MC", name: "Monaco", provinces: [] },
  { id: "MDA", code: "MD", name: "Moldova, Republic Of", provinces: [] },
  {
    id: "FSM",
    code: "FM",
    name: "Micronesia, Federated States Of",
    provinces: []
  },
  {
    id: "MEX",
    code: "MX",
    name: "Mexico",
    provinces: [
      { id: "MX-AG", code: "AGU", name: "Aguascalientes", country_id: "MEX" },
      { id: "MX-BN", code: "BCN", name: "Baja California", country_id: "MEX" },
      {
        id: "MX-BS",
        code: "BCS",
        name: "Baja California Sur",
        country_id: "MEX"
      },
      { id: "MX-CA", code: "COA", name: "Coahuila", country_id: "MEX" },
      { id: "MX-CH", code: "CHH", name: "Chihuahua", country_id: "MEX" },
      { id: "MX-CL", code: "COL", name: "Colima", country_id: "MEX" },
      { id: "MX-CM", code: "CAM", name: "Campeche", country_id: "MEX" },
      { id: "MX-CP", code: "CHP", name: "Chiapas", country_id: "MEX" },
      { id: "MX-DF", code: "DIF", name: "Distrito Federal", country_id: "MEX" },
      { id: "MX-DU", code: "DUR", name: "Durango", country_id: "MEX" },
      { id: "MX-GJ", code: "GUA", name: "Guanajuato", country_id: "MEX" },
      { id: "MX-GR", code: "GRO", name: "Guerrero", country_id: "MEX" },
      { id: "MX-HI", code: "HID", name: "Hidalgo", country_id: "MEX" },
      { id: "MX-JA", code: "JAL", name: "Jalisco", country_id: "MEX" },
      { id: "MX-MC", code: "MIC", name: "Michoacán", country_id: "MEX" },
      { id: "MX-MR", code: "MOR", name: "Morelos", country_id: "MEX" },
      { id: "MX-MX", code: "MEX", name: "México", country_id: "MEX" },
      { id: "MX-NA", code: "NAY", name: "Nayarit", country_id: "MEX" },
      { id: "MX-NL", code: "NLE", name: "Nuevo León", country_id: "MEX" },
      { id: "MX-OA", code: "OAX", name: "Oaxaca", country_id: "MEX" },
      { id: "MX-PU", code: "PUE", name: "Puebla", country_id: "MEX" },
      { id: "MX-QE", code: "QUE", name: "Querétaro", country_id: "MEX" },
      { id: "MX-QR", code: "ROO", name: "Quintana Roo", country_id: "MEX" },
      { id: "MX-SI", code: "SIN", name: "Sinaloa", country_id: "MEX" },
      { id: "MX-SL", code: "SLP", name: "San Luis Potosí", country_id: "MEX" },
      { id: "MX-SO", code: "SON", name: "Sonora", country_id: "MEX" },
      { id: "MX-TB", code: "TAB", name: "Tabasco", country_id: "MEX" },
      { id: "MX-TL", code: "TLA", name: "Tlaxcala", country_id: "MEX" },
      { id: "MX-TM", code: "TAM", name: "Tamaulipas", country_id: "MEX" },
      { id: "MX-VE", code: "VER", name: "Veracruz", country_id: "MEX" },
      { id: "MX-YU", code: "YUC", name: "Yucatán", country_id: "MEX" },
      { id: "MX-ZA", code: "ZAC", name: "Zacatecas", country_id: "MEX" }
    ]
  },
  { id: "MYT", code: "YT", name: "Mayotte", provinces: [] },
  { id: "MUS", code: "MU", name: "Mauritius", provinces: [] },
  { id: "MRT", code: "MR", name: "Mauritania", provinces: [] },
  { id: "MTQ", code: "MQ", name: "Martinique", provinces: [] },
  { id: "MHL", code: "MH", name: "Marshall Islands", provinces: [] },
  { id: "MLT", code: "MT", name: "Malta", provinces: [] },
  { id: "MLI", code: "ML", name: "Mali", provinces: [] },
  { id: "MDV", code: "MV", name: "Maldives", provinces: [] },
  {
    id: "MYS",
    code: "MY",
    name: "Malaysia",
    provinces: [
      { id: "MY-01", code: "01", name: "Johor", country_id: "MYS" },
      { id: "MY-02", code: "02", name: "Kedah", country_id: "MYS" },
      { id: "MY-03", code: "03", name: "Kelantan", country_id: "MYS" },
      { id: "MY-04", code: "04", name: "Malacca", country_id: "MYS" },
      { id: "MY-05", code: "05", name: "Negeri Sembilan", country_id: "MYS" },
      { id: "MY-06", code: "06", name: "Pahang", country_id: "MYS" },
      { id: "MY-07", code: "07", name: "Penang", country_id: "MYS" },
      { id: "MY-08", code: "08", name: "Perak", country_id: "MYS" },
      { id: "MY-09", code: "09", name: "Perlis", country_id: "MYS" },
      { id: "MY-10", code: "10", name: "Selangor", country_id: "MYS" },
      { id: "MY-11", code: "11", name: "Terengganu", country_id: "MYS" },
      { id: "MY-12", code: "12", name: "Sabah", country_id: "MYS" },
      { id: "MY-13", code: "13", name: "Sarawak", country_id: "MYS" },
      {
        id: "MY-14",
        code: "14",
        name: "Federal Territory of Kuala Lumpur",
        country_id: "MYS"
      },
      {
        id: "MY-15",
        code: "15",
        name: "Federal Territory of Labuan",
        country_id: "MYS"
      },
      {
        id: "MY-16",
        code: "16",
        name: "Federal Territory of Putrajaya",
        country_id: "MYS"
      }
    ]
  },
  { id: "MWI", code: "MW", name: "Malawi", provinces: [] },
  { id: "MDG", code: "MG", name: "Madagascar", provinces: [] },
  {
    id: "MKD",
    code: "MK",
    name: "Macedonia, The Former Yugoslav Republic Of",
    provinces: []
  },
  { id: "MAC", code: "MO", name: "Macau", provinces: [] },
  { id: "LUX", code: "LU", name: "Luxembourg", provinces: [] },
  { id: "LTU", code: "LT", name: "Lithuania", provinces: [] },
  { id: "LIE", code: "LI", name: "Liechtenstein", provinces: [] },
  { id: "LBY", code: "LY", name: "Libyan Arab Jamahiriya", provinces: [] },
  { id: "LBR", code: "LR", name: "Liberia", provinces: [] },
  { id: "LSO", code: "LS", name: "Lesotho", provinces: [] },
  { id: "LBN", code: "LB", name: "Lebanon", provinces: [] },
  { id: "LVA", code: "LV", name: "Latvia", provinces: [] },
  {
    id: "LAO",
    code: "LA",
    name: "Lao People's Democratic Republic",
    provinces: []
  },
  { id: "KGZ", code: "KG", name: "Kyrgyzstan", provinces: [] },
  { id: "KWT", code: "KW", name: "Kuwait", provinces: [] },
  { id: "KOR", code: "KR", name: "Korea, Republic Of", provinces: [] },
  {
    id: "PRK",
    code: "KP",
    name: "Korea, Democratic People's Republic Of",
    provinces: []
  },
  { id: "KIR", code: "KI", name: "Kiribati", provinces: [] },
  { id: "KEN", code: "KE", name: "Kenya", provinces: [] },
  { id: "KAZ", code: "KZ", name: "Kazakhstan", provinces: [] },
  { id: "JOR", code: "JO", name: "Jordan", provinces: [] },
  { id: "JEY", code: "JE", name: "Jersey", provinces: [] },
  { id: "JPN", code: "JP", name: "Japan", provinces: [] },
  { id: "JAM", code: "JM", name: "Jamaica", provinces: [] },
  {
    id: "ITA",
    code: "IT",
    name: "Italy",
    provinces: [
      { id: "IT-AG", code: "AG", name: "Agrigento", country_id: "ITA" },
      { id: "IT-AL", code: "AL", name: "Alessandria", country_id: "ITA" },
      { id: "IT-AN", code: "AN", name: "Ancona", country_id: "ITA" },
      { id: "IT-AO", code: "AO", name: "Aosta", country_id: "ITA" },
      { id: "IT-AP", code: "AP", name: "Ascoli Piceno", country_id: "ITA" },
      { id: "IT-AQ", code: "AQ", name: "L'Aquila", country_id: "ITA" },
      { id: "IT-AR", code: "AR", name: "Arezzo", country_id: "ITA" },
      { id: "IT-AT", code: "AT", name: "Asti", country_id: "ITA" },
      { id: "IT-AV", code: "AV", name: "Avellino", country_id: "ITA" },
      { id: "IT-BA", code: "BA", name: "Bari", country_id: "ITA" },
      { id: "IT-BG", code: "BG", name: "Bergamo", country_id: "ITA" },
      { id: "IT-BI", code: "BI", name: "Biella", country_id: "ITA" },
      { id: "IT-BL", code: "BL", name: "Belluno", country_id: "ITA" },
      { id: "IT-BN", code: "BN", name: "Benevento", country_id: "ITA" },
      { id: "IT-BO", code: "BO", name: "Bologna", country_id: "ITA" },
      { id: "IT-BR", code: "BR", name: "Brindisi", country_id: "ITA" },
      { id: "IT-BS", code: "BS", name: "Brescia", country_id: "ITA" },
      {
        id: "IT-BT",
        code: "BT",
        name: "Barletta-Andria-Trani",
        country_id: "ITA"
      },
      { id: "IT-BZ", code: "BZ", name: "Bolzano", country_id: "ITA" },
      { id: "IT-CA", code: "CA", name: "Cagliari", country_id: "ITA" },
      { id: "IT-CB", code: "CB", name: "Campobasso", country_id: "ITA" },
      { id: "IT-CE", code: "CE", name: "Caserta", country_id: "ITA" },
      { id: "IT-CH", code: "CH", name: "Chieti", country_id: "ITA" },
      { id: "IT-CI", code: "CI", name: "Carbonia-Iglesias", country_id: "ITA" },
      { id: "IT-CL", code: "CL", name: "Caltanissetta", country_id: "ITA" },
      { id: "IT-CN", code: "CN", name: "Cuneo", country_id: "ITA" },
      { id: "IT-CO", code: "CO", name: "Como", country_id: "ITA" },
      { id: "IT-CR", code: "CR", name: "Cremona", country_id: "ITA" },
      { id: "IT-CS", code: "CS", name: "Cosenza", country_id: "ITA" },
      { id: "IT-CT", code: "CT", name: "Catania", country_id: "ITA" },
      { id: "IT-CZ", code: "CZ", name: "Catanzaro", country_id: "ITA" },
      { id: "IT-EN", code: "EN", name: "Enna", country_id: "ITA" },
      { id: "IT-FC", code: "FC", name: "Forli'-Cesena", country_id: "ITA" },
      { id: "IT-FE", code: "FE", name: "Ferrara", country_id: "ITA" },
      { id: "IT-FG", code: "FG", name: "Foggia", country_id: "ITA" },
      { id: "IT-FI", code: "FI", name: "Firenze", country_id: "ITA" },
      { id: "IT-FM", code: "FM", name: "Fermo", country_id: "ITA" },
      { id: "IT-FR", code: "FR", name: "Frosinone", country_id: "ITA" },
      { id: "IT-GE", code: "GE", name: "Genova", country_id: "ITA" },
      { id: "IT-GO", code: "GO", name: "Gorizia", country_id: "ITA" },
      { id: "IT-GR", code: "GR", name: "Grosseto", country_id: "ITA" },
      { id: "IT-IM", code: "IM", name: "Imperia", country_id: "ITA" },
      { id: "IT-IS", code: "IS", name: "Isernia", country_id: "ITA" },
      { id: "IT-KR", code: "KR", name: "Crotone", country_id: "ITA" },
      { id: "IT-LC", code: "LC", name: "Lecco", country_id: "ITA" },
      { id: "IT-LE", code: "LE", name: "Lecce", country_id: "ITA" },
      { id: "IT-LI", code: "LI", name: "Livorno", country_id: "ITA" },
      { id: "IT-LO", code: "LO", name: "Lodi", country_id: "ITA" },
      { id: "IT-LT", code: "LT", name: "Latina", country_id: "ITA" },
      { id: "IT-LU", code: "LU", name: "Lucca", country_id: "ITA" },
      { id: "IT-MB", code: "MB", name: "Monza e Brianza", country_id: "ITA" },
      { id: "IT-MC", code: "MC", name: "Macerata", country_id: "ITA" },
      { id: "IT-ME", code: "ME", name: "Messina", country_id: "ITA" },
      { id: "IT-MI", code: "MI", name: "Milano", country_id: "ITA" },
      { id: "IT-MN", code: "MN", name: "Mantova", country_id: "ITA" },
      { id: "IT-MO", code: "MO", name: "Modena", country_id: "ITA" },
      { id: "IT-MS", code: "MS", name: "Massa-Carrara", country_id: "ITA" },
      { id: "IT-MT", code: "MT", name: "Matera", country_id: "ITA" },
      { id: "IT-NA", code: "NA", name: "Napoli", country_id: "ITA" },
      { id: "IT-NO", code: "NO", name: "Novara", country_id: "ITA" },
      { id: "IT-NU", code: "NU", name: "Nuoro", country_id: "ITA" },
      { id: "IT-OG", code: "OG", name: "Ogliastra", country_id: "ITA" },
      { id: "IT-OR", code: "OR", name: "Oristano", country_id: "ITA" },
      { id: "IT-OT", code: "OT", name: "Olbia-Tempio", country_id: "ITA" },
      { id: "IT-PA", code: "PA", name: "Palermo", country_id: "ITA" },
      { id: "IT-PC", code: "PC", name: "Piacenza", country_id: "ITA" },
      { id: "IT-PD", code: "PD", name: "Padova", country_id: "ITA" },
      { id: "IT-PE", code: "PE", name: "Pescara", country_id: "ITA" },
      { id: "IT-PG", code: "PG", name: "Perugia", country_id: "ITA" },
      { id: "IT-PI", code: "PI", name: "Pisa", country_id: "ITA" },
      { id: "IT-PN", code: "PN", name: "Pordenone", country_id: "ITA" },
      { id: "IT-PO", code: "PO", name: "Prato", country_id: "ITA" },
      { id: "IT-PR", code: "PR", name: "Parma", country_id: "ITA" },
      { id: "IT-PT", code: "PT", name: "Pistoia", country_id: "ITA" },
      { id: "IT-PU", code: "PU", name: "Pesaro e Urbino", country_id: "ITA" },
      { id: "IT-PV", code: "PV", name: "Pavia", country_id: "ITA" },
      { id: "IT-PZ", code: "PZ", name: "Potenza", country_id: "ITA" },
      { id: "IT-RA", code: "RA", name: "Ravenna", country_id: "ITA" },
      { id: "IT-RC", code: "RC", name: "Reggio Calabria", country_id: "ITA" },
      { id: "IT-RE", code: "RE", name: "Reggio Emilia", country_id: "ITA" },
      { id: "IT-RG", code: "RG", name: "Ragusa", country_id: "ITA" },
      { id: "IT-RI", code: "RI", name: "Rieti", country_id: "ITA" },
      { id: "IT-RM", code: "RM", name: "Roma", country_id: "ITA" },
      { id: "IT-RN", code: "RN", name: "Rimini", country_id: "ITA" },
      { id: "IT-RO", code: "RO", name: "Rovigo", country_id: "ITA" },
      { id: "IT-SA", code: "SA", name: "Salerno", country_id: "ITA" },
      { id: "IT-SI", code: "SI", name: "Siena", country_id: "ITA" },
      { id: "IT-SO", code: "SO", name: "Sondrio", country_id: "ITA" },
      { id: "IT-SP", code: "SP", name: "La Spezia", country_id: "ITA" },
      { id: "IT-SR", code: "SR", name: "Siracusa", country_id: "ITA" },
      { id: "IT-SS", code: "SS", name: "Sassari", country_id: "ITA" },
      { id: "IT-SV", code: "SV", name: "Savona", country_id: "ITA" },
      { id: "IT-TA", code: "TA", name: "Taranto", country_id: "ITA" },
      { id: "IT-TE", code: "TE", name: "Teramo", country_id: "ITA" },
      { id: "IT-TN", code: "TN", name: "Trento", country_id: "ITA" },
      { id: "IT-TO", code: "TO", name: "Torino", country_id: "ITA" },
      { id: "IT-TP", code: "TP", name: "Trapani", country_id: "ITA" },
      { id: "IT-TR", code: "TR", name: "Terni", country_id: "ITA" },
      { id: "IT-TS", code: "TS", name: "Trieste", country_id: "ITA" },
      { id: "IT-TV", code: "TV", name: "Treviso", country_id: "ITA" },
      { id: "IT-UD", code: "UD", name: "Udine", country_id: "ITA" },
      { id: "IT-VA", code: "VA", name: "Varese", country_id: "ITA" },
      { id: "IT-VC", code: "VC", name: "Vercelli", country_id: "ITA" },
      { id: "IT-VE", code: "VE", name: "Venezia", country_id: "ITA" },
      { id: "IT-VI", code: "VI", name: "Vicenza", country_id: "ITA" },
      { id: "IT-VR", code: "VR", name: "Verona", country_id: "ITA" },
      { id: "IT-VS", code: "VS", name: "Medio Campidano", country_id: "ITA" },
      { id: "IT-VT", code: "VT", name: "Viterbo", country_id: "ITA" },
      { id: "IT-VV", code: "VV", name: "Vibo Valentia", country_id: "ITA" }
    ]
  },
  {
    id: "ISR",
    code: "IL",
    name: "Israel",
    provinces: [
      { id: "IL-D", code: "D", name: "HaDarom", country_id: "ISR" },
      { id: "IL-HA", code: "HA", name: "Haifa", country_id: "ISR" },
      { id: "IL-JM", code: "JM", name: "Jerusalem", country_id: "ISR" },
      { id: "IL-M", code: "M", name: "HaMerkaz", country_id: "ISR" },
      { id: "IL-TA", code: "TA", name: "Tel Aviv", country_id: "ISR" },
      { id: "IL-Z", code: "Z", name: "HaZafon", country_id: "ISR" }
    ]
  },
  { id: "IMN", code: "IM", name: "Isle of Man", provinces: [] },
  { id: "IRL", code: "IE", name: "Ireland", provinces: [] },
  { id: "IRQ", code: "IQ", name: "Iraq", provinces: [] },
  { id: "IRN", code: "IR", name: "Iran (islamic Republic Of)", provinces: [] },
  { id: "IDN", code: "ID", name: "Indonesia", provinces: [] },
  {
    id: "IND",
    code: "IN",
    name: "India",
    provinces: [
      {
        id: "IN-AN",
        code: "AN",
        name: "ANDAMAN AND NICOBAR",
        country_id: "IND"
      },
      { id: "IN-AP", code: "AP", name: "ANDHRA PRADESH", country_id: "IND" },
      { id: "IN-AR", code: "AR", name: "ARUNACHAL PRADESH", country_id: "IND" },
      { id: "IN-AS", code: "AS", name: "ASSAM", country_id: "IND" },
      { id: "IN-BR", code: "BR", name: "BIHAR", country_id: "IND" },
      { id: "IN-CH", code: "CH", name: "CHANDIGARH", country_id: "IND" },
      { id: "IN-CT", code: "CT", name: "CHHATTISGARH", country_id: "IND" },
      { id: "IN-DD", code: "DD", name: "DAMAN AND DIU", country_id: "IND" },
      {
        id: "IN-DN",
        code: "DN",
        name: "DADRA AND NAGER HAVELI",
        country_id: "IND"
      },
      { id: "IN-GA", code: "GA", name: "GOA", country_id: "IND" },
      { id: "IN-GJ", code: "GJ", name: "GUJARAT", country_id: "IND" },
      { id: "IN-HP", code: "HP", name: "HIMACHAL PRADESH", country_id: "IND" },
      { id: "IN-HR", code: "HR", name: "HARYANA", country_id: "IND" },
      { id: "IN-JH", code: "JH", name: "JHARKHAND", country_id: "IND" },
      { id: "IN-JK", code: "JK", name: "JAMMU AND KASHMIR", country_id: "IND" },
      { id: "IN-KA", code: "KA", name: "KARNATAKA", country_id: "IND" },
      { id: "IN-KL", code: "KL", name: "KERALA", country_id: "IND" },
      { id: "IN-LD", code: "LD", name: "LAKSHADWEEP", country_id: "IND" },
      { id: "IN-MH", code: "MH", name: "MAHARASHTRA", country_id: "IND" },
      { id: "IN-ML", code: "ML", name: "MEGHALAYA", country_id: "IND" },
      { id: "IN-MN", code: "MN", name: "MANIPUR", country_id: "IND" },
      { id: "IN-MP", code: "MP", name: "MADHYA PRADESH", country_id: "IND" },
      { id: "IN-MZ", code: "MZ", name: "MIZORAM", country_id: "IND" },
      { id: "IN-ND", code: "ND", name: "NEW DELHI", country_id: "IND" },
      { id: "IN-NL", code: "NL", name: "NAGALAND", country_id: "IND" },
      { id: "IN-OR", code: "OR", name: "ORISSA", country_id: "IND" },
      { id: "IN-PB", code: "PB", name: "PUNJAB", country_id: "IND" },
      { id: "IN-PY", code: "PY", name: "PONDICHERRY", country_id: "IND" },
      { id: "IN-RJ", code: "RJ", name: "RAJASTHAN", country_id: "IND" },
      { id: "IN-SK", code: "SK", name: "SIKKIM", country_id: "IND" },
      { id: "IN-TN", code: "TN", name: "TAMILNADU", country_id: "IND" },
      { id: "IN-TR", code: "TR", name: "TRIPURA", country_id: "IND" },
      { id: "IN-UP", code: "UP", name: "UTTAR PRADESH", country_id: "IND" },
      { id: "IN-UT", code: "UT", name: "UTTARANCHAL", country_id: "IND" },
      { id: "IN-WB", code: "WB", name: "WEST BENGAL", country_id: "IND" }
    ]
  },
  { id: "ISL", code: "IS", name: "Iceland", provinces: [] },
  { id: "HUN", code: "HU", name: "Hungary", provinces: [] },
  { id: "HKG", code: "HK", name: "Hong Kong", provinces: [] },
  { id: "HND", code: "HN", name: "Honduras", provinces: [] },
  {
    id: "VAT",
    code: "VA",
    name: "Holy See (vatican City State)",
    provinces: []
  },
  { id: "HMD", code: "HM", name: "Heard And Mc Donald Islands", provinces: [] },
  { id: "HTI", code: "HT", name: "Haiti", provinces: [] },
  { id: "GUY", code: "GY", name: "Guyana", provinces: [] },
  { id: "GNB", code: "GW", name: "Guinea-bissau", provinces: [] },
  { id: "GIN", code: "GN", name: "Guinea", provinces: [] },
  { id: "GGY", code: "GG", name: "Guernsey", provinces: [] },
  { id: "GTM", code: "GT", name: "Guatemala", provinces: [] },
  { id: "GUM", code: "GU", name: "Guam", provinces: [] },
  { id: "GLP", code: "GP", name: "Guadeloupe", provinces: [] },
  { id: "GRD", code: "GD", name: "Grenada", provinces: [] },
  { id: "GRL", code: "GL", name: "Greenland", provinces: [] },
  { id: "GRC", code: "GR", name: "Greece", provinces: [] },
  { id: "GIB", code: "GI", name: "Gibraltar", provinces: [] },
  { id: "GHA", code: "GH", name: "Ghana", provinces: [] },
  {
    id: "DEU",
    code: "DE",
    name: "Germany",
    provinces: [
      { id: "DE-BE", code: "BE", name: "Berlin", country_id: "DEU" },
      { id: "DE-BR", code: "BR", name: "Brandenburg", country_id: "DEU" },
      { id: "DE-BW", code: "BW", name: "Baden-Württemberg", country_id: "DEU" },
      { id: "DE-BY", code: "BY", name: "Bayern", country_id: "DEU" },
      { id: "DE-HB", code: "HB", name: "Bremen", country_id: "DEU" },
      { id: "DE-HE", code: "HE", name: "Hessen", country_id: "DEU" },
      { id: "DE-HH", code: "HH", name: "Hamburg", country_id: "DEU" },
      {
        id: "DE-MV",
        code: "MV",
        name: "Mecklenburg-Vorpommern",
        country_id: "DEU"
      },
      { id: "DE-NI", code: "NI", name: "Niedersachsen", country_id: "DEU" },
      {
        id: "DE-NW",
        code: "NW",
        name: "Nordrhein-Westfalen",
        country_id: "DEU"
      },
      { id: "DE-RP", code: "RP", name: "Rheinland-Pfalz", country_id: "DEU" },
      { id: "DE-SA", code: "SA", name: "Sachsen-Anhalt", country_id: "DEU" },
      {
        id: "DE-SH",
        code: "SH",
        name: "Schleswig-Holstein",
        country_id: "DEU"
      },
      { id: "DE-SL", code: "SL", name: "Saarland", country_id: "DEU" },
      { id: "DE-SN", code: "SN", name: "Sachsen", country_id: "DEU" },
      { id: "DE-TH", code: "TH", name: "Thüringen", country_id: "DEU" }
    ]
  },
  { id: "GEO", code: "GE", name: "Georgia", provinces: [] },
  { id: "GMB", code: "GM", name: "Gambia", provinces: [] },
  { id: "GAB", code: "GA", name: "Gabon", provinces: [] },
  { id: "ATF", code: "TF", name: "French Southern Territories", provinces: [] },
  { id: "PYF", code: "PF", name: "French Polynesia", provinces: [] },
  { id: "GUF", code: "GF", name: "French Guiana", provinces: [] },
  { id: "FXX", code: "FX", name: "France, Metropolitan", provinces: [] },
  { id: "FRA", code: "FR", name: "France", provinces: [] },
  { id: "FIN", code: "FI", name: "Finland", provinces: [] },
  { id: "FJI", code: "FJ", name: "Fiji", provinces: [] },
  { id: "FRO", code: "FO", name: "Faroe Islands", provinces: [] },
  { id: "FLK", code: "FK", name: "Falkland Islands (malvinas)", provinces: [] },
  { id: "ETH", code: "ET", name: "Ethiopia", provinces: [] },
  { id: "EST", code: "EE", name: "Estonia", provinces: [] },
  { id: "ERI", code: "ER", name: "Eritrea", provinces: [] },
  { id: "GNQ", code: "GQ", name: "Equatorial Guinea", provinces: [] },
  {
    id: "ENGL",
    code: "ENG",
    name: "England",
    provinces: [
      { id: "GB-BDFD", code: "BDFD", name: "Bedfordshire", country_id: "ENGL" },
      { id: "GB-BRKS", code: "BRKS", name: "Berkshire", country_id: "ENGL" },
      {
        id: "GB-BUCKS",
        code: "BUCKS",
        name: "Buckinghamshire",
        country_id: "ENGL"
      },
      { id: "GB-BWKS", code: "BWKS", name: "Berwickshire", country_id: "ENGL" },
      {
        id: "GB-CAMBS",
        code: "CAMBS",
        name: "Cambridgeshire",
        country_id: "ENGL"
      },
      { id: "GB-CHES", code: "CHES", name: "Cheshire", country_id: "ENGL" },
      { id: "GB-CNWL", code: "CNWL", name: "Cornwall", country_id: "ENGL" },
      { id: "GB-CUMB", code: "CUMB", name: "Cumberland", country_id: "ENGL" },
      { id: "GB-DEVON", code: "DEVON", name: "Devon", country_id: "ENGL" },
      { id: "GB-DRBYS", code: "DRBYS", name: "Derbyshire", country_id: "ENGL" },
      { id: "GB-DRHM", code: "DRHM", name: "Durham", country_id: "ENGL" },
      { id: "GB-DRST", code: "DRST", name: "Dorset", country_id: "ENGL" },
      { id: "GB-ESSX", code: "ESSX", name: "Essex", country_id: "ENGL" },
      {
        id: "GB-GLOU",
        code: "GLOU",
        name: "Gloucestershire",
        country_id: "ENGL"
      },
      { id: "GB-HAMPS", code: "HAMPS", name: "Hampshire", country_id: "ENGL" },
      {
        id: "GB-HERTS",
        code: "HERTS",
        name: "Hertfordshire",
        country_id: "ENGL"
      },
      {
        id: "GB-HRFDS",
        code: "HRFDS",
        name: "Herefordshire",
        country_id: "ENGL"
      },
      {
        id: "GB-HUNTS",
        code: "HUNTS",
        name: "Huntingdonshire",
        country_id: "ENGL"
      },
      { id: "GB-KENT", code: "KENT", name: "Kent", country_id: "ENGL" },
      { id: "GB-LANCS", code: "LANCS", name: "Lancashire", country_id: "ENGL" },
      {
        id: "GB-LIECS",
        code: "LIECS",
        name: "Leicestershire",
        country_id: "ENGL"
      },
      {
        id: "GB-LINCS",
        code: "LINCS",
        name: "Lincolnshire",
        country_id: "ENGL"
      },
      { id: "GB-MSEX", code: "MSEX", name: "Middlesex", country_id: "ENGL" },
      { id: "GB-NFLK", code: "NFLK", name: "Norfolk", country_id: "ENGL" },
      {
        id: "GB-NHANTS",
        code: "NHANTS",
        name: "Northamptonshire",
        country_id: "ENGL"
      },
      {
        id: "GB-NHUMB",
        code: "NHUMB",
        name: "Northumberland",
        country_id: "ENGL"
      },
      {
        id: "GB-NOTTS",
        code: "NOTTS",
        name: "Nottinghamshire",
        country_id: "ENGL"
      },
      { id: "GB-OXFD", code: "OXFD", name: "Oxfordshire", country_id: "ENGL" },
      { id: "GB-RUTL", code: "RUTL", name: "Rutland", country_id: "ENGL" },
      { id: "GB-SFFK", code: "SFFK", name: "Suffolk", country_id: "ENGL" },
      {
        id: "GB-SHROPS",
        code: "SHROPS",
        name: "Shropshire",
        country_id: "ENGL"
      },
      { id: "GB-SOMST", code: "SOMST", name: "Somerset", country_id: "ENGL" },
      {
        id: "GB-STAFFS",
        code: "STAFFS",
        name: "Staffordshire",
        country_id: "ENGL"
      },
      { id: "GB-SURR", code: "SURR", name: "Surrey", country_id: "ENGL" },
      { id: "GB-SUSX", code: "SUSX", name: "Sussex", country_id: "ENGL" },
      { id: "GB-WILTS", code: "WILTS", name: "Wiltshire", country_id: "ENGL" },
      { id: "GB-WMLD", code: "WMLD", name: "Westmorland", country_id: "ENGL" },
      {
        id: "GB-WORCS",
        code: "WORCS",
        name: "Worcestershire",
        country_id: "ENGL"
      },
      { id: "GB-WWKS", code: "WWKS", name: "Warwickshire", country_id: "ENGL" },
      { id: "GB-YORKS", code: "YORKS", name: "Yorkshire", country_id: "ENGL" }
    ]
  },
  { id: "SLV", code: "SV", name: "El Salvador", provinces: [] },
  { id: "EGY", code: "EG", name: "Egypt", provinces: [] },
  { id: "ECU", code: "EC", name: "Ecuador", provinces: [] },
  { id: "TLS", code: "TL", name: "East Timor", provinces: [] },
  { id: "DOM", code: "DO", name: "Dominican Republic", provinces: [] },
  { id: "DMA", code: "DM", name: "Dominica", provinces: [] },
  { id: "DJI", code: "DJ", name: "Djibouti", provinces: [] },
  { id: "DNK", code: "DK", name: "Denmark", provinces: [] },
  { id: "CZE", code: "CZ", name: "Czech Republic", provinces: [] },
  { id: "CYP", code: "CY", name: "Cyprus", provinces: [] },
  { id: "CUW", code: "CW", name: "Curaçao", provinces: [] },
  { id: "CUB", code: "CU", name: "Cuba", provinces: [] },
  {
    id: "HRV",
    code: "HR",
    name: "Croatia (local Name: Hrvatska)",
    provinces: []
  },
  { id: "CIV", code: "CI", name: "Cote D'ivoire", provinces: [] },
  { id: "CRI", code: "CR", name: "Costa Rica", provinces: [] },
  { id: "COK", code: "CK", name: "Cook Islands", provinces: [] },
  {
    id: "COD",
    code: "CD",
    name: "Congo, The Democratic Republic Of The",
    provinces: []
  },
  { id: "COG", code: "CG", name: "Congo", provinces: [] },
  { id: "COM", code: "KM", name: "Comoros", provinces: [] },
  {
    id: "COL",
    code: "CO",
    name: "Colombia",
    provinces: [
      { id: "CO-AMA", code: "AMA", name: "Amazonas", country_id: "COL" },
      { id: "CO-ANT", code: "ANT", name: "Antioquia", country_id: "COL" },
      { id: "CO-ARA", code: "ARA", name: "Arauca", country_id: "COL" },
      { id: "CO-ATL", code: "ATL", name: "Atlántico", country_id: "COL" },
      { id: "CO-BOL", code: "BOL", name: "Bolívar", country_id: "COL" },
      { id: "CO-BOY", code: "BOY", name: "Boyacá", country_id: "COL" },
      { id: "CO-CAL", code: "CAL", name: "Caldas", country_id: "COL" },
      { id: "CO-CAQ", code: "CAQ", name: "Caquetá", country_id: "COL" },
      { id: "CO-CAS", code: "CAS", name: "Casanare", country_id: "COL" },
      { id: "CO-CAU", code: "CAU", name: "Cauca", country_id: "COL" },
      { id: "CO-CES", code: "CES", name: "Cesar", country_id: "COL" },
      { id: "CO-CHO", code: "CHO", name: "Chocó", country_id: "COL" },
      { id: "CO-COR", code: "COR", name: "Córdoba", country_id: "COL" },
      { id: "CO-CUN", code: "CUN", name: "Cundinamarca", country_id: "COL" },
      { id: "CO-DC", code: "DC", name: "Bogotá D.C.", country_id: "COL" },
      { id: "CO-GUA", code: "GUA", name: "Guainía", country_id: "COL" },
      { id: "CO-GUV", code: "GUV", name: "Guaviare", country_id: "COL" },
      { id: "CO-HUI", code: "HUI", name: "Huila", country_id: "COL" },
      { id: "CO-LAG", code: "LAG", name: "La Guajira", country_id: "COL" },
      { id: "CO-MAG", code: "MAG", name: "Magdalena", country_id: "COL" },
      { id: "CO-MET", code: "MET", name: "Meta", country_id: "COL" },
      { id: "CO-NAR", code: "NAR", name: "Nariño", country_id: "COL" },
      {
        id: "CO-NSA",
        code: "NSA",
        name: "Norte de Santander",
        country_id: "COL"
      },
      { id: "CO-PUT", code: "PUT", name: "Putumayo", country_id: "COL" },
      { id: "CO-QUI", code: "QUI", name: "Quindío", country_id: "COL" },
      { id: "CO-RIS", code: "RIS", name: "Risaralda", country_id: "COL" },
      { id: "CO-SAN", code: "SAN", name: "Santander", country_id: "COL" },
      {
        id: "CO-SAP",
        code: "SAP",
        name: "San Andrés y Providencia",
        country_id: "COL"
      },
      { id: "CO-SUC", code: "SUC", name: "Sucre", country_id: "COL" },
      { id: "CO-TOL", code: "TOL", name: "Tolima", country_id: "COL" },
      { id: "CO-VAC", code: "VAC", name: "Valle del Cauca", country_id: "COL" },
      { id: "CO-VAU", code: "VAU", name: "Vaupés", country_id: "COL" },
      { id: "CO-VID", code: "VID", name: "Vichada", country_id: "COL" }
    ]
  },
  { id: "CCK", code: "CC", name: "Cocos (keeling) Islands", provinces: [] },
  { id: "CXR", code: "CX", name: "Christmas Island", provinces: [] },
  {
    id: "CHN",
    code: "CN",
    name: "China",
    provinces: [
      { id: "CN-11", code: "11", name: "北京", country_id: "CHN" },
      { id: "CN-12", code: "12", name: "天津", country_id: "CHN" },
      { id: "CN-13", code: "13", name: "河北", country_id: "CHN" },
      { id: "CN-14", code: "14", name: "山西", country_id: "CHN" },
      { id: "CN-15", code: "15", name: "内蒙古", country_id: "CHN" },
      { id: "CN-21", code: "21", name: "辽宁", country_id: "CHN" },
      { id: "CN-22", code: "22", name: "吉林", country_id: "CHN" },
      { id: "CN-23", code: "23", name: "黑龙江", country_id: "CHN" },
      { id: "CN-31", code: "31", name: "上海", country_id: "CHN" },
      { id: "CN-32", code: "32", name: "江苏", country_id: "CHN" },
      { id: "CN-33", code: "33", name: "浙江", country_id: "CHN" },
      { id: "CN-34", code: "34", name: "安徽", country_id: "CHN" },
      { id: "CN-35", code: "35", name: "福建", country_id: "CHN" },
      { id: "CN-36", code: "36", name: "江西", country_id: "CHN" },
      { id: "CN-37", code: "37", name: "山东", country_id: "CHN" },
      { id: "CN-41", code: "41", name: "河南", country_id: "CHN" },
      { id: "CN-42", code: "42", name: "湖北", country_id: "CHN" },
      { id: "CN-43", code: "43", name: "湖南", country_id: "CHN" },
      { id: "CN-44", code: "44", name: "广东", country_id: "CHN" },
      { id: "CN-45", code: "45", name: "广西", country_id: "CHN" },
      { id: "CN-46", code: "46", name: "海南", country_id: "CHN" },
      { id: "CN-50", code: "50", name: "重庆", country_id: "CHN" },
      { id: "CN-51", code: "51", name: "四川", country_id: "CHN" },
      { id: "CN-52", code: "52", name: "贵州", country_id: "CHN" },
      { id: "CN-53", code: "53", name: "云南", country_id: "CHN" },
      { id: "CN-54", code: "54", name: "西藏", country_id: "CHN" },
      { id: "CN-61", code: "61", name: "陕西", country_id: "CHN" },
      { id: "CN-62", code: "62", name: "甘肃", country_id: "CHN" },
      { id: "CN-63", code: "63", name: "青海", country_id: "CHN" },
      { id: "CN-64", code: "64", name: "宁夏", country_id: "CHN" },
      { id: "CN-65", code: "65", name: "新疆", country_id: "CHN" },
      { id: "CN-71", code: "71", name: "台湾", country_id: "CHN" },
      { id: "CN-91", code: "91", name: "香港", country_id: "CHN" },
      { id: "CN-92", code: "92", name: "澳门", country_id: "CHN" }
    ]
  },
  { id: "CHL", code: "CL", name: "Chile", provinces: [] },
  { id: "TCD", code: "TD", name: "Chad", provinces: [] },
  { id: "CAF", code: "CF", name: "Central African Republic", provinces: [] },
  { id: "CYM", code: "KY", name: "Cayman Islands", provinces: [] },
  { id: "CPV", code: "CV", name: "Cape Verde", provinces: [] },
  {
    id: "CAN",
    code: "CA",
    name: "Canada",
    provinces: [
      { id: "AB", code: "AB", name: "Alberta", country_id: "CAN" },
      { id: "BC", code: "BC", name: "British Columbia", country_id: "CAN" },
      { id: "MB", code: "MB", name: "Manitoba", country_id: "CAN" },
      { id: "NB", code: "NB", name: "New Brunswick", country_id: "CAN" },
      {
        id: "NL",
        code: "NL",
        name: "Newfoundland and Labrador",
        country_id: "CAN"
      },
      { id: "NS", code: "NS", name: "Nova Scotia", country_id: "CAN" },
      {
        id: "NT",
        code: "NT",
        name: "Northwest Territories",
        country_id: "CAN"
      },
      { id: "NU", code: "NU", name: "Nunavut", country_id: "CAN" },
      { id: "ON", code: "ON", name: "Ontario", country_id: "CAN" },
      { id: "PE", code: "PE", name: "Prince Edward Island", country_id: "CAN" },
      { id: "QC", code: "QC", name: "Quebec", country_id: "CAN" },
      { id: "SK", code: "SK", name: "Saskatchewan", country_id: "CAN" },
      { id: "YT", code: "YT", name: "Yukon", country_id: "CAN" }
    ]
  },
  { id: "CMR", code: "CM", name: "Cameroon", provinces: [] },
  { id: "KHM", code: "KH", name: "Cambodia", provinces: [] },
  { id: "BDI", code: "BI", name: "Burundi", provinces: [] },
  { id: "BFA", code: "BF", name: "Burkina Faso", provinces: [] },
  {
    id: "BGR",
    code: "BG",
    name: "Bulgaria",
    provinces: [
      { id: "BG-01", code: "01", name: "Blagoevgrad", country_id: "BGR" },
      { id: "BG-02", code: "02", name: "Burgas", country_id: "BGR" },
      { id: "BG-03", code: "03", name: "Varna", country_id: "BGR" },
      { id: "BG-04", code: "04", name: "Veliko Tarnovo", country_id: "BGR" },
      { id: "BG-05", code: "05", name: "Vidin", country_id: "BGR" },
      { id: "BG-06", code: "06", name: "Vratsa", country_id: "BGR" },
      { id: "BG-07", code: "07", name: "Gabrovo", country_id: "BGR" },
      { id: "BG-08", code: "08", name: "Dobrich", country_id: "BGR" },
      { id: "BG-09", code: "09", name: "Kardzhali", country_id: "BGR" },
      { id: "BG-10", code: "10", name: "Kyustendil", country_id: "BGR" },
      { id: "BG-11", code: "11", name: "Lovech", country_id: "BGR" },
      { id: "BG-12", code: "12", name: "Montana", country_id: "BGR" },
      { id: "BG-13", code: "13", name: "Pazardzhik", country_id: "BGR" },
      { id: "BG-14", code: "14", name: "Pernik", country_id: "BGR" },
      { id: "BG-15", code: "15", name: "Pleven", country_id: "BGR" },
      { id: "BG-16", code: "16", name: "Plovdiv", country_id: "BGR" },
      { id: "BG-17", code: "17", name: "Razgrad", country_id: "BGR" },
      { id: "BG-18", code: "18", name: "Ruse", country_id: "BGR" },
      { id: "BG-19", code: "19", name: "Silistra", country_id: "BGR" },
      { id: "BG-20", code: "20", name: "Sliven", country_id: "BGR" },
      { id: "BG-21", code: "21", name: "Smolyan", country_id: "BGR" },
      { id: "BG-22", code: "22", name: "Sofia", country_id: "BGR" },
      { id: "BG-23", code: "23", name: "Sofia Province", country_id: "BGR" },
      { id: "BG-24", code: "24", name: "Stara Zagora", country_id: "BGR" },
      { id: "BG-25", code: "25", name: "Targovishte", country_id: "BGR" },
      { id: "BG-26", code: "26", name: "Haskovo", country_id: "BGR" },
      { id: "BG-27", code: "27", name: "Shumen", country_id: "BGR" },
      { id: "BG-28", code: "28", name: "Yambol", country_id: "BGR" }
    ]
  },
  { id: "BRN", code: "BN", name: "Brunei Darussalam", provinces: [] },
  {
    id: "IOT",
    code: "IO",
    name: "British Indian Ocean Territory",
    provinces: []
  },
  {
    id: "BRA",
    code: "BR",
    name: "Brazil",
    provinces: [
      { id: "BR-AL", code: "AL", name: "Alagoas", country_id: "BRA" },
      { id: "BR-AM", code: "AM", name: "Amazonas", country_id: "BRA" },
      { id: "BR-AP", code: "AP", name: "Amapá", country_id: "BRA" },
      { id: "BR-BA", code: "BA", name: "Bahia", country_id: "BRA" },
      { id: "BR-CE", code: "CE", name: "Ceará", country_id: "BRA" },
      { id: "BR-DF", code: "DF", name: "Distrito Federal", country_id: "BRA" },
      { id: "BR-ES", code: "ES", name: "Espírito Santo", country_id: "BRA" },
      { id: "BR-GO", code: "GO", name: "Goiás", country_id: "BRA" },
      { id: "BR-MA", code: "MA", name: "Maranhão", country_id: "BRA" },
      { id: "BR-MG", code: "MG", name: "Minas Gerais", country_id: "BRA" },
      {
        id: "BR-MS",
        code: "MS",
        name: "Mato Grosso do Sul",
        country_id: "BRA"
      },
      { id: "BR-MT", code: "MT", name: "Mato Grosso", country_id: "BRA" },
      { id: "BR-PA", code: "PA", name: "Pará", country_id: "BRA" },
      { id: "BR-PB", code: "PB", name: "Paraíba", country_id: "BRA" },
      { id: "BR-PE", code: "PE", name: "Pernambuco", country_id: "BRA" },
      { id: "BR-PI", code: "PI", name: "Piauí", country_id: "BRA" },
      { id: "BR-PR", code: "PR", name: "Paraná", country_id: "BRA" },
      { id: "BR-RJ", code: "RJ", name: "Rio de Janeiro", country_id: "BRA" },
      {
        id: "BR-RN",
        code: "RN",
        name: "Rio Grande do Norte",
        country_id: "BRA"
      },
      { id: "BR-RO", code: "RO", name: "Rondônia", country_id: "BRA" },
      { id: "BR-RR", code: "RR", name: "Roraima", country_id: "BRA" },
      { id: "BR-RS", code: "RS", name: "Rio Grande do Sul", country_id: "BRA" },
      { id: "BR-SC", code: "SC", name: "Santa Catarina", country_id: "BRA" },
      { id: "BR-SE", code: "SE", name: "Sergipe", country_id: "BRA" },
      { id: "BR-SP", code: "SP", name: "São Paulo", country_id: "BRA" },
      { id: "BR-TO", code: "TO", name: "Tocantins", country_id: "BRA" }
    ]
  },
  { id: "BVT", code: "BV", name: "Bouvet Island", provinces: [] },
  { id: "BWA", code: "BW", name: "Botswana", provinces: [] },
  { id: "BIH", code: "BA", name: "Bosnia And Herzegowina", provinces: [] },
  {
    id: "BES",
    code: "BQ",
    name: "Bonaire, Sint Eustatius and Saba",
    provinces: []
  },
  { id: "BOL", code: "BO", name: "Bolivia", provinces: [] },
  { id: "BTN", code: "BT", name: "Bhutan", provinces: [] },
  { id: "BMU", code: "BM", name: "Bermuda", provinces: [] },
  { id: "BEN", code: "BJ", name: "Benin", provinces: [] },
  { id: "BLZ", code: "BZ", name: "Belize", provinces: [] },
  { id: "BEL", code: "BE", name: "Belgium", provinces: [] },
  { id: "BLR", code: "BY", name: "Belarus", provinces: [] },
  { id: "BRB", code: "BB", name: "Barbados", provinces: [] },
  { id: "BGD", code: "BD", name: "Bangladesh", provinces: [] },
  { id: "BHR", code: "BH", name: "Bahrain", provinces: [] },
  { id: "BHS", code: "BS", name: "Bahamas", provinces: [] },
  { id: "AZE", code: "AZ", name: "Azerbaijan", provinces: [] },
  { id: "AUT", code: "AT", name: "Austria", provinces: [] },
  {
    id: "AUS",
    code: "AU",
    name: "Australia",
    provinces: [
      {
        id: "AU-ACT",
        code: "ACT",
        name: "Australian Capital Territory",
        country_id: "AUS"
      },
      { id: "AU-NSW", code: "NSW", name: "New South Wales", country_id: "AUS" },
      {
        id: "AU-NT",
        code: "NT",
        name: "Northern Territory",
        country_id: "AUS"
      },
      { id: "AU-QLD", code: "QLD", name: "Queensland", country_id: "AUS" },
      { id: "AU-SA", code: "SA", name: "South Australia", country_id: "AUS" },
      { id: "AU-TAS", code: "TAS", name: "Tasmania", country_id: "AUS" },
      { id: "AU-VIC", code: "VIC", name: "Victoria", country_id: "AUS" },
      { id: "AU-WA", code: "WA", name: "Western Australia", country_id: "AUS" }
    ]
  },
  { id: "ABW", code: "AW", name: "Aruba", provinces: [] },
  { id: "ARM", code: "AM", name: "Armenia", provinces: [] },
  { id: "ARG", code: "AR", name: "Argentina", provinces: [] },
  { id: "ATG", code: "AG", name: "Antigua And Barbuda", provinces: [] },
  { id: "ATA", code: "AQ", name: "Antarctica", provinces: [] },
  { id: "AIA", code: "AI", name: "Anguilla", provinces: [] },
  { id: "AGO", code: "AO", name: "Angola", provinces: [] },
  { id: "AND", code: "AD", name: "Andorra", provinces: [] },
  { id: "ASM", code: "AS", name: "American Samoa", provinces: [] },
  { id: "DZA", code: "DZ", name: "Algeria", provinces: [] },
  { id: "ALB", code: "AL", name: "Albania", provinces: [] },
  { id: "ALA", code: "AX", name: "Åland islands", provinces: [] },
  { id: "AFG", code: "AF", name: "Afghanistan", provinces: [] }
];
return (
    <div>

    </div>
    )
}

export default CityList ;



