let eventsTemplate = document.getElementById("eventsTemplate");

let days = [
  ['Splošni program', ''],
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
    ['Hvalnice:', 'Vsak dan ob 7.30 med ponedeljkom in petkom, v Mekinjski cerkvi'],
    ['Spoved:', 'Pol ure pred in po vsaki maši v Mekinjah in na Gozdu'],
    ['Srečanje <br> veroučencev:', '1. – 5. razred: PETEK, 17. 5. ob 15h <br> 6. – 8. razred: SREDA, 15. 5. ob 16h'],
  ],
  [
    ['19.00', `
      <b>ZAČETEK MISIJONA</b> s sv. mašo in misijonskim nagovorom
      <br><br><audio controls preload="none" style="width: 100%">
        <source src="static/audio/petek-10-5-2024.mp3" type="audio/mpeg">
        <i>Posnetka žal ni mogoče predvajati</i>
      </audio>
    `]
  ],
  [
    ['8.00', 'Sv. maša na Gozdu, po maši srečanje z veroučenci in njihovimi starši'],
    ['14.00 – 17.00', '<b>Igrivo športno popoldne</b> za družine v Mekinjah'],
    ['18.00', `
      Sv. maša v Mekinjah z misijonskim nagovorom
      <br><br><audio controls preload="none" style="width: 100%">
        <source src="static/audio/sobota-11-5-2024.mp3" type="audio/mpeg">
        <i>Posnetka žal ni mogoče predvajati</i>
      </audio>
    `],
    ['19.00', '<b>Srečanje z zakoncema kastelic</b><br><i>Mekinjska cerkev</i><br><b>*Drugače kot na zgibanki!</b>'],
  ],
  [
    ['7.00 in 10.00', `
      Sv. maša v Mekinjah z misijonskim nagovorom
      <br><br><audio controls preload="none" style="width: 100%">
        <source src="static/audio/nedelja-12-5-2024.mp3" type="audio/mpeg">
        <i>Posnetka žal ni mogoče predvajati</i>
      </audio>
    `],
    ['8.30', 'Sv. maša na Gozdu z misijonskim nagovorom'],
    ['15.00', '<b>Srečanje župnij Mekinje in Gozd na Kališu</b><br><i>Zbor: na avtobusni postaji, »pr&#39; pipci«, prevoz organiziran</i>'],
    ['15.30', 'Šmarnice, pete litanije in druženje na Kališu'],
  ],
  [
    ['14.30', 'Srečanje vaščanov na Brezjah nad Kamnikom'],
    ['18.00', `
      Sv. maša v Mekinjah z misijonskim nagovorom
      <br><br><audio controls preload="none" style="width: 100%">
        <source src="static/audio/ponedeljek-13-5-2024.mp3" type="audio/mpeg">
        <i>Posnetka žal ni mogoče predvajati</i>
      </audio>
    `],
    ['19.00', '<b>BITI ZRAVEN!</b><br> Večer z zgodovinarjem, raziskovalcem, publicistom, TV novinarjem in urednikom dr. Jožetom Možina<br><i>Mekinjska cerkev</i>'],
  ],
  [
    ['18.00', `
      Sv. maša v Mekinjah in v Godiču z misijonskim nagovorom
      <br><br><audio controls preload="none" style="width: 100%">
        <source src="static/audio/torek-14-5-2024.mp3" type="audio/mpeg">
        <i>Posnetka žal ni mogoče predvajati</i>
      </audio>
      <i>Mekinjski nagovor</i>
    `],
    ['Po maši', '<b>Verena Perko</b> o znanih Mekinjčanih ob spremljavi Tomaža Plahutnika na citrah<br><i>Krajevni dom Godič</i><br><b>*Drugače kot na zgibanki!</b>'],
  ],
  [
    ['9.00', 'Sv. maša v Rebolovi kapeli z misijonskim nagovorom'],
    ['18.00', `
      Sv. maša v Mekinjah z misijonskim nagovorom
      <br><br><audio controls preload="none" style="width: 100%">
        <source src="static/audio/sreda-15-5-2024.mp3" type="audio/mpeg">
        <i>Posnetka žal ni mogoče predvajati</i>
      </audio>
    `],
    ['Po maši', '<b>Adoracija s petjem in možnostjo za spoved</b><br><i>Mekinjska cerkev</i>'],
  ],
  [
    ['18.00', 'Sv. maša v Mekinjah z misijonskim nagovorom<br><i>Posnetek ni na voljo</i>'],
    ['Po maši', '<b>Blagoslov grobov z molitvijo za rajne na pokopališču</b><br><i>Mekinje</i>'],
  ],
  [
    ['18.00', `
      Sv. maša v Mekinjah z misijonskim nagovorom
      <br><br><audio controls preload="none" style="width: 100%">
        <source src="static/audio/petek-17-5-2024.mp3" type="audio/mpeg">
        <i>Posnetka žal ni mogoče predvajati</i>
      </audio>
    `],
    ['Po maši', '<b>Srečanje z mladimi v veroučni učilnici</b><br><i>Mekinje</i>']
  ],
  [
    ['8.00', 'Sv. maša na Gozdu z misijonskim nagovorom'],
    ['14.00 – 17.00', '<b>Oratorijske urice</b> za vso družino v župnišču Mekinje'],
    ['18.00', `
      Sv. maša v Mekinjah z misijonskim nagovorom in <b>obnovitvijo zakonskih zaobljub</b>
      <br><br><audio controls preload="none" style="width: 100%">
        <source src="static/audio/sobota-18-5-2024.mp3" type="audio/mpeg">
        <i>Posnetka žal ni mogoče predvajati</i>
      </audio>
    `],
    ['Po maši', '<b>Srečanje z zakoncema Čušin</b><br><i>Mekinjska cerkev</i>'],
  ],
  [
    ['8.30', 'Sv. maša in <b>ZAKLJUČEK MISIJONA NA GOZDU</b>'],
    ['10.00', `
      <b>SKLEP MISIJONA S PROTIPOTRESNO PROCESIJO v Mekinjah</b><br><i>vabljene narodne noše</i>
      <br><br><audio controls preload="none" style="width: 100%">
        <source src="static/audio/nedelja-19-5-2024.mp3" type="audio/mpeg">
        <i>Posnetka žal ni mogoče predvajati</i>
      </audio>
    `],
    ['Po maši', 'Druženje z okrepčilom'],
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