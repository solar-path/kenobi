let companyData = [
  {
    legalentity: 'KZ101 - Kazakhstan Aluminium Smelter KZT',
    code: 'KAS',
  },
  {
    legalentity: 'KZ102 - Aluminium of Kazakhstan KZT',
    code: 'AOK',
    address:
      'Казахстан, Павлодарская Область, Павлодар, пр. шленная Зона Восточная, 65',
    bin: '940140000325',
  },
  {
    legalentity: 'AOK - ПАВЛОДАРСКИЙ АЛЮМИНИЕВЫЙ ЗАВОД',
    code: 'AOK-ПАЗ',
  },
  {
    legalentity: 'AOK - ТЭЦ-1',
    code: 'AOK-ТЭЦ',
  },
  {
    legalentity: 'AOK - КБРУ',
    code: 'AOK-КБРУ',
  },
  {
    legalentity: 'AOK - ТБРУ',
    code: 'AOK-ТБРУ',
  },
  {
    legalentity: 'KZ104 - TNC Kazchrome JSC KZT',
    code: 'Kazchrome',
  },
  {
    legalentity: 'Kazchrome АКТЮБИНСКИЙ ЗАВОД ФЕРРОСПЛАВОВ',
    code: 'Kazchrome - АктЗФ',
  },
  {
    legalentity: 'Kazchrome АКСУСКИЙ ЗАВОД ФЕРРОСПЛАВОВ',
    code: 'Kazchrome - АкСЗФ',
  },
  {
    legalentity: 'Kazchrome - ДГОК',
    code: 'Kazchrome - ДГОК',
  },
  {
    legalentity: 'Kazchrome - РУКМ',
    code: 'Kazchrome - РУКМ',
  },
  {
    legalentity: 'KZ104A - Akzhar Chrome LLP KZT',
    code: 'KZ104A',
  },
  { legalentity: 'KZ104B - Lotos Aktobe LLP KZT', code: 'KZ104B' },
  {
    legalentity: 'KZ104C - Chromtau Brick Plant LLP KZT',
    code: 'KZ104C',
  },
  {
    legalentity: 'KZ104D - Donskaya Neftebaza JSC KZT',
    code: 'KZ104D',
  },
  {
    legalentity: 'KZ104E - Molservice LLP KZT',
    code: 'KZ104E',
  },
  {
    legalentity: 'KZ105 - SSGPO JSC KZT',
    code: 'KZ105',
  },
  {
    legalentity: 'KZ105A - Recreation and Health centre Rassvet LLP KZT',
    code: 'KZ105A',
  },
  {
    legalentity: 'KZ105B - Multipurpose Restaurant centre Gornyak LLP KZT',
    code: 'KZ105B',
  },
  {
    legalentity: 'KZ105C - TransRudnyAuto LLP KZT',
    code: 'KZ105C',
  },
  {
    legalentity: 'KZ105D - Rudnenskaya Heating System LLP KZT',
    code: 'KZ105D',
  },
  {
    legalentity: 'KZ105E - Energo-2007 LLP KZT',
    code: 'KZ105E',
  },
  {
    legalentity: 'KZ105F - Fortis LLP KZT',
    code: 'KZ105F',
  },
  {
    legalentity: 'KZ105G - Servis LLP KZT',
    code: 'KZ105G',
  },
  {
    legalentity: 'KZ105H - Kachary Ruda JSC',
    code: 'KZ105H',
  },
  {
    legalentity: 'KZ107 - Eurasian Energy Corporation KZT',
    code: 'KZ107',
  },
  {
    legalentity: 'KZ108 - Shubarkol Komir JSC KZT',
    code: 'KZ108',
  },
  {
    legalentity: 'KZ109 - 3-Energoortalyk JSC KZT',
    code: 'KZ109',
  },
  {
    legalentity: 'KZ115 - ERG Sales Kazakhstan LLP KZT',
    code: 'KZ115',
  },
  {
    legalentity: 'KZ116 - Trans Rem Wagon LLP KZT',
    code: 'KZ116',
  },
  {
    legalentity: 'KZ122 - Transcom LLP KZT',
    code: 'KZ122',
  },
  {
    legalentity: 'KZ134 - Bereke 2004 LLP KZT',
    code: 'KZ134',
  },
  {
    legalentity: 'KZ136 - AktobeProm Trans LLP KZT',
    code: 'KZ136',
  },
  {
    legalentity: 'KZ137 - ENRC Logistics LLP KZT',
    code: 'KZ137',
  },
  {
    legalentity: 'KZ138 - Eurasian Credit Partnership KZT',
    code: 'KZ138',
  },
  {
    legalentity: 'KZ139 - EKT Holding LLP KZT',
    code: 'KZ139',
  },
  {
    legalentity: 'KZ149 - Metallurg LLP KZT',
    code: 'KZ149',
  },
  {
    legalentity: 'KZ200 - ERG Komek (Corporate fund) KZT',
    code: 'KZ200',
  },
  {
    legalentity: 'KZ202 - Kazsoda_in liquidation KZT',
    code: 'KZ202',
  },
  {
    legalentity: 'KZ210 - Business and Technology Services LLP KZT',
    code: 'KZ210',
  },
  {
    legalentity: 'KZ211 - BTS Digital LLP KZT',
    code: 'KZ211',
  },
  {
    legalentity: 'KZ212 - Salem social media KZT',
    code: 'KZ212',
  },
  {
    legalentity: 'KZ213 - Aitu - Dala LLP KZT',
    code: 'KZ213',
  },
  {
    legalentity: 'KZ214 - Aitu - Payment Solutions LLP KZT',
    code: 'KZ214',
  },
  {
    legalentity: 'KZ215 - Holiday Invest Group LLP KZT',
    code: 'KZ215',
  },
  {
    legalentity: 'KZ216 - Smart cities LLP KZT',
    code: 'KZ216',
  },
  {
    legalentity: 'KZ217 - ERG Recycling LLP KZT',
    code: 'KZ217',
  },
  {
    legalentity: 'KZ219 - Eurasian Digital Ventures Limited Partnership',
    code: 'KZ219',
  },
  {
    legalentity: 'KZ220 - BTS Digital Ventures LTD',
    code: 'KZ220',
  },
  {
    legalentity: 'KZ221 - Credit Partnership of Group KASSA 24 LLP',
    code: 'KZ221',
  },
  {
    legalentity: 'KZ223 - Diler Kassa 24-7 LLP',
    code: 'KZ223',
  },
  {
    legalentity: 'KZ224 - Kassa 24-7 LLP',
    code: 'KZ224',
  },
  {
    legalentity: 'KZ225 - Lichnaya Pochta LLP',
    code: 'KZ225',
  },
  {
    legalentity: 'KZ226 - Lichnaya Kassa LLP',
    code: 'KZ226',
  },
  {
    legalentity: 'KZ230 - Astana-Plat LLP',
    code: 'KZ230',
  },
  {
    legalentity: 'KZ231 - Finnovate LLP',
    code: 'KZ231',
  },
  {
    legalentity: 'KZ232 - Aitu-Sauda',
    code: 'KZ232',
  },
  {
    legalentity: 'KZ233 - BTS Impact LAB',
    code: 'KZ233',
  },
  {
    legalentity: 'KZ234 - BTS Education',
    code: 'KZ234',
  },
  {
    legalentity: 'KZ235 - DigitalID-KZ LLP',
    code: 'KZ235',
  },
  {
    legalentity: 'KZ267 - LLP Yuzhenergoprom',
    code: 'KZ267',
  },
  {
    legalentity: 'KZ272 - ERG Service JSC',
    code: 'KZ272',
  },
  {
    legalentity: 'KZ273 - Service center ERG LLP KZT',
    code: 'KZ273',
  },
  {
    legalentity: 'KZ299 - Eurasian Group LLP KZT',
    code: 'EG',
  },
  {
    legalentity: 'KZ310 - ERG Capital Projects LLP KZT',
    code: 'ERG CP',
  },
  {
    legalentity: 'KZ314 - Scienific-Research and Engineering Centre of ERG',
    code: 'НИИЦ',
  },
  {
    legalentity: 'KZ400 - ERG Commercial Center LLP KZT',
    code: 'СС',
  },
  {
    legalentity: 'KZ401 - Sokolovka LLP KZT',
    code: 'Sokolovka',
  },
  {
    legalentity: 'KZ401A - Eltai-4 LLP KZT',
    code: 'KZ401A',
  },
  {
    legalentity: 'KZ401B - Nadezhdinskoye LLP KZT',
    code: 'KZ401B',
  },
  {
    legalentity: 'KZ401C - Dzharkulskoye LLP KZT',
    code: 'KZ401C',
  },
  {
    legalentity: 'KZ401D - Aleshinskoye LLP KZT',
    code: 'KZ401D',
  },
  {
    legalentity: 'KZ402 - ERG Reporting Services  LLP KZT',
    code: 'KZ402',
  },
  {
    legalentity: 'KZ403 - ALE Association of Friends of Tel - Aviv University',
    code: 'KZ403',
  },
  {
    legalentity: 'KZ404 - Eurasia Medical Centre LLP',
    code: 'KZ404',
  },
  {
    legalentity: 'KZ239 - COMRUN LLP',
    code: 'KZ239',
  },
];

module.exports = companyData;
