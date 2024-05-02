let eventsTemplate = document.getElementById("eventsTemplate");

let days = [
  ['Dnevni program', ''],
  ['Kr\' korajžno, pridi in spoznaj!', 'Petek, 10. 5. 2024'],
  ['Kr\' korajžno, odpri svoje srce!', 'Sobota, 11. 5. 2024'],
  ['Kr\' korajžno na pot! ', 'Nedelja, 12. 5. 2024'],
  ['Kr\' korajžno, odpri oči in prisluhni!', 'Ponedeljek, 13. 5. 2024'],
  ['Kr\' korajžno, poslušaj in bodi seme!', 'Torek, 14. 5. 2024'],
  ['Kr\' korajžno, trkaj in čakaj!', 'Sreda, 15. 5. 2024'],
  ['Kr\' korajžno, Gospod je blizu!', 'Četrtek, 16. 5. 2024'],
  ['Kr\' korajžno, išči in oznanjaj naprej!', 'Petek, 17. 5. 2024'],
  ['Kr\' korajžno, Bog je ljubezen!', 'Sobota, 18. 5. 2024'],
  ['Kr\' korajžno, pri Njem ni nič nemogoče!', 'Nedelja, 19. 5. 2024'],
]

let daysEvents = [
  [
    ['Hvalnice:', 'Vsak delovnik ob 7.30 (Mekinje)'],
    ['Spoved:', 'Pol ure pred in po vsaki maši v Mekinjah in Gozdu'],
    ['Srečanje <br> veroučencev:', '1. – 5. razred PETEK, 17. 5. ob 15h <br> 6. – 8. razred SREDA, 15. 5. ob 16h'],
  ],
  [
    ['19.00', 'ZAČETEK MISIJONA s sv. mašo in misijonskim nagovorom']
  ],
  [
    ['8.00', 'Sv. maša na Gozdu, po maši z veroučenci in njihovimi starši'],
    ['14.00 – 17.00', 'IGRIVO ŠPORTNO POPOLDNE za družine (Mekinje)'],
    ['18.00', 'Sv. maša z misijonskim nagovorom'],
    ['Po maši:', 'Verena Perko o znanih Mekinjčanih ob spremljavi Tomaža Plahutnika na citrah (Mekinje)'],
  ],
  [
    ['7.00 in 10.00', 'Sv. maša z misijonskim nagovorom (Mekinje)'],
    ['8.30', 'Sv. maša z misijonskim nagovorom (Gozd)'],
    ['15.00', 'SREČANJE ŽUPNIJ MEKINJE IN GOZD na Kališu (Zbor: na avtobusni postaji, »pr&#39; pipci«, prevoz organiziran)'],
    ['15.30', 'Šmarnice, pete litanije in druženje na Kališu'],
  ],
  [
    ['14.30', 'Srečanje vaščanov na Brezjah nad Kamnikom'],
    ['18.00', 'Sv. maša z misijonskim nagovorom'],
    ['19.00', 'BITI ZRAVEN! Večer z zgodovinarjem, raziskovalcem, publicistom, TV novinarjem in urednikom dr. Jožetom Možina'],
  ],
  [
    ['18.00', 'Sv. maša z misijonskim nagovorom (Mekinje in Godič)'],
    ['19.00', 'SREČANJE Z ZAKONCEMA KASTELIC v Domu krajevne skupnosti Godič'],
  ],
  [
    ['9.00', 'Sv. maša z misijonskim nagovorom (Rebolova kapela)'],
    ['18.00', 'Sv. maša z misijonskim nagovorom'],
    ['Po maši:', 'ADORACIJA S PETJEM IN MOŽNOSTJO ZA SPOVED'],
  ],
  [
    ['18.00', 'Sv. maša z misijonskim nagovorom'],
    ['Po maši:', 'BLAGOSLOV GROBOV Z MOLITVIJO ZA RAJNE (pokopališče)'],
  ],
  [
    ['18.00', 'Sv. maša z misijonskim nagovorom'],
    ['Po maši:', 'SREČANJE Z MLADIMI (veroučna učilnica)'],
  ],
  [
    ['8.00', 'Sv. maša z misijonskim nagovorom'],
    ['14.00 – 17.00', 'ORATORIJSKE URICE za vso družino (župnišče Mekinje)'],
    ['18.00', 'Sv. maša z misijonskim nagovorom in OBNOVITVIJO ZAKONSKIH OBLJUB'],
    ['Po maši:', 'SREČANJE Z ZAKONCEMA ČUŠIN (cerkev Mekinje)'],
  ],
  [
    ['8.30', 'Sv. maša in ZAKLJUČEK MISIJONA NA GOZDU'],
    ['10.00', 'SKLEP MISIJONA S PROTIPOTRESNO PROCESIJO, vabljene narodne noše'],
    ['Po maši:', 'Druženje z okrepčilom'],
  ],
]

for (let i = 0; i < days.length; i++) {
  eventsTemplate.innerHTML += `
  <div class="lg:w-1/2 my-6 mx-6 lg:mx-auto p-4 lg:p-8 border border-[#939598] bg-[#F2ECE9] dark:border-white dark:bg-[#00273F]">
    <div tabindex="0" id="${i}" class="collapsible flex justify-between rounded-t-sm px-2 py-1 border-[#939598] dark:border-white uppercase">
      <div>
        <div class="font-bold text-[#00273F] dark:text-white">${days[i][0]}</div>
        <div class="text-[#00273F] dark:text-white">${days[i][1]}</div>
      </div>
      <div class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="stroke-[#00273F] dark:stroke-white collapsible-icon w-6 h-6 lg:w-9 lg:h-9">
          <title>preklopi</title>
          <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
    </div>
    <table class="hidden-content hidden">
      <tbody>
        ${day(i)}
      </tbody>
    </table>
  </div>
  `
}

function day(i) {
  events = ''

  for (let j = 0; j < daysEvents[i].length; j++) {
    events += `
      <tr>
        <td class="w-1/3 lg:w-1/4 border-none border-[#939598] px-2 py-4">
         ${daysEvents[i][j][0]}
        </td>
        <td class="border-none border-[#939598] px-2 py-4">
          ${daysEvents[i][j][1]}
        </td>
      </tr>
    `
  }

  return events
}


let collapsibles = document.getElementsByClassName("collapsible");
let collapsiblesIcons = document.getElementsByClassName("collapsible-icon");
let hiddenContent = document.getElementsByClassName("hidden-content")

for (let i = 0; i < collapsibles.length; i++) {
  collapsibles[i].addEventListener("click", function() {
    styleCollapsible(collapsiblesIcons[i], hiddenContent[i])
  });
  collapsibles[i].addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
      styleCollapsible(collapsiblesIcons[i], hiddenContent[i]) 
    }
  });
}

function styleCollapsible(collapsibleIcon, content) {
  if (content.classList.contains('hidden')) {
    content.classList.replace('hidden', 'table-fixed');
  } else {
    content.classList.replace('table-fixed', 'hidden');
  }

  if (collapsibleIcon.classList.contains('rotate-180')) {
    collapsibleIcon.classList.remove('rotate-180');
  } else {
    collapsibleIcon.classList.add('rotate-180');
  }
}