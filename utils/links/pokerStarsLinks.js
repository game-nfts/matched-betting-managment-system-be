const competitionIds = [
  {
    competitionId: '10680392',
    nation: 'Italia',
    tournament: 'Serie A'
  }
  //   {
  //     competitionId: '10680121',
  //     nation: 'Italia',
  //     tournament: 'Serie B'
  //   },
  //   {
  //     competitionId: '12982440',
  //     nation: 'Italia',
  //     tournament: 'Serie C,  Girone A'
  //   },
  //   {
  //     competitionId: '13934474',
  //     nation: 'Italia',
  //     tournament: 'Serie C, Girone B'
  //   },
  //   {
  //     competitionId: '13986647',
  //     nation: 'Italia',
  //     tournament: "'Serie C, Girone C"
  //   },
  //   {
  //     competitionId: '10680537',
  //     nation: 'Argentina',
  //     tournament: 'Primera B National'
  //   },
  //   {
  //     competitionId: '11523237',
  //     nation: 'Australia',
  //     tournament: 'A-League'
  //   },
  //   {
  //     competitionId: '10680021',
  //     nation: 'Cile',
  //     tournament: 'Primera Division'
  //   },
  //   {
  //     competitionId: '15751013',
  //     nation: 'Colombia',
  //     tournament: 'Primera A'
  //   },
  //   {
  //     competitionId: '10680006',
  //     nation: 'Colombia',
  //     tournament: 'Primera B'
  //   },
  //   {
  //     competitionId: '13315771',
  //     nation: 'Corea del Sud',
  //     tournament: 'k-League 2'
  //   },
  //   {
  //     competitionId: '12735553',
  //     nation: 'Francia',
  //     tournament: 'Ligue 1'
  //   },
  //   {
  //     competitionId: '10679909',
  //     nation: 'Germania',
  //     tournament: 'Bundesliga'
  //   },
  //   {
  //     competitionId: '12735501',
  //     nation: 'Inghilterra',
  //     tournament: 'Premier Ligue'
  //   },
  //   {
  //     competitionId: '10679903',
  //     nation: 'Inghilterra',
  //     tournament: 'League One'
  //   },
  //   {
  //     competitionId: '10679933',
  //     nation: 'Inghilterra',
  //     tournament: 'League Two'
  //   },
  //   {
  //     competitionId: '15342603',
  //     nation: 'Irlanda del Nord',
  //     tournament: 'Premiership'
  //   },
  //   {
  //     competitionId: '11523272',
  //     nation: 'Olanda',
  //     tournament: 'Eredivisie'
  //   },
  //   {
  //     competitionId: '10680049',
  //     nation: 'Olanda',
  //     tournament: 'Eerste Divisie'
  //   },
  //   {
  //     competitionId: '10680192',
  //     nation: 'Paraguay',
  //     tournament: 'Primera Division'
  //   },
  //   {
  //     competitionId: '11526480',
  //     nation: 'Portogallo',
  //     tournament: 'Primeira Liga'
  //   },
  //   {
  //     competitionId: '11021740',
  //     nation: 'Scozia',
  //     tournament: 'Championship'
  //   },
  //   {
  //     competitionId: '11021702',
  //     nation: 'Scozia',
  //     tournament: 'League One'
  //   },
  //   {
  //     competitionId: '10975703',
  //     nation: 'Scozia',
  //     tournament: 'League Two'
  //   },
  //   {
  //     competitionId: '10679937',
  //     nation: 'Spagna',
  //     tournament: 'La Liga'
  //   },
  //   {
  //     competitionId: '11523240',
  //     nation: 'Spagna',
  //     tournament: 'Segunda Division'
  //   },
  //   {
  //     competitionId: '10680135',
  //     nation: 'Turchia',
  //     tournament: 'Super Lig'
  //   },
  //   {
  //     competitionId: '10679978',
  //     nation: 'USA',
  //     tournament: 'MLS'
  //   }
]

const marketCodes = [
  // 1X2
  '3AAXB%2CMRES',
  // U/O
  '3AOU%2COVUN',
  // GG/NG
  '3ABTS%2CBTSC',
  // DC
  '3ADC%2CDBLC'
]

const marketNames = {
  'Under 0.5': 'U0.5',
  'Under 1.5': 'U1.5',
  'Under 2.5': 'U2.5',
  'Under 3.5': 'U3.5',
  'Under 4.5': 'U4.5',
  'Under 5.5': 'U5.5',
  'Under 6.5': 'U6.5',
  'Under 7.5': 'U7.5',
  'Under 8.5': 'U8.5',
  'Over 0.5': 'O0.5',
  'Over 1.5': 'O1.5',
  'Over 2.5': 'O2.5',
  'Over 3.5': 'O3.5',
  'Over 4.5': 'O4.5',
  'Over 5.5': 'O5.5',
  'Over 6.5': 'O6.5',
  'Over 7.5': 'O7.5',
  'Over 8.5': 'O8.5',
  Si: 'GG',
  No: 'NG'
}

const baseUrl = [
  'https://sports.pokerstarssports.it/sportsbook/v1/api/getCompetitionEvents?competitionId=',
  '&marketTypes=SOCCER%3AFT%',
  '&includeOutrights=false&channelId=3&locale=it-it&siteId=16'
]

module.exports = { competitionIds, marketCodes, baseUrl, marketNames }
