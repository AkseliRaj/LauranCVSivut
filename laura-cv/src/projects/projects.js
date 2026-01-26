import HTSADITW from "../assets/webp/projectImages/HTSADITW.webp";
import Sielunmessu from "../assets/webp/projectImages/SaatanallinenSielunmessu.webp";
import pakastaaEjPakasta from "../assets/webp/projectImages/pakastaaEjPakasta.webp";
import poly from "../assets/webp/projectImages/poly.webp";
import cresc from "../assets/webp/projectImages/cresc.webp";
import sisarta from "../assets/webp/projectImages/3sisarta.webp";
import tämäPöytäOnTehtyMaailmanPuusta from "../assets/webp/projectImages/tämäPöytäOnTehtyMaailmanPuusta.webp";
import hellinta1 from "../assets/webp/projectImages/Hellintä.webp";
import hellinta2 from "../assets/webp/projectImages/Hellintä2.webp";
import PSH1 from "../assets/webp/projectImages/PSH.webp";
import PSH2 from "../assets/webp/projectImages/PSH2.webp";
import PSH3 from "../assets/webp/projectImages/PSH3.webp";
import Eksyneet from "../assets/webp/projectImages/eksyneet.webp";

export const projects = [
  {
    id: 1,
    slug: "how-to-synchronize-and-decompose-in-this-world",
    title: "how to synchronize and decompose in this world",
    titleGrid: "How to synchronize and decompose in this world",
    thumbnail: HTSADITW,
    date: "21.10.2021 - 30.10.2021",
    images: [
      HTSADITW
    ],
    photographers: ["Valokuva: Ville-Matti Tenovirta"],
    description: [
      "voisimmeko antaa nautinnollisen lahoamisen tuoda valon elämäämme? kuinka vahvistaa omaa valoamme, kuitenkin yhdessä, päästää irti odotuksista, oletuksista ja lokeroista? HTSADITW tutkii katsetta, ymmärtämistä ja auttamista. miltä kosketus oikeasti tuntuu, miltä toisen sielu todella silmissä näyttää? voimme hengittää ja tanssia samassa rytmissä, jokainen tavallaan. tyhjentää mielemme antautuen hetkelle ja värähdellä korkeilla jaetuilla rakkauden taajuuksilla. teos vakuuttaa, että yhteys ympäristöömme ja toisiimme on mahdollista ja helppo luoda.",
      "HTSADITW on prosessissa työstetty nykyteatteriesitys. teos lähti liikkeelle käsitteistä synteettinen/orgaaninen, joita työryhmä on kollektiivisesti tutkinut.",
    ],
    credits: [
      { label: "Näyttelijät", names: "Heidi Finnberg, Artturi Frisk, Veera Heikkinen, Janette Hirvonen, Aapeli Hämäläinen, Joona Luoto, Anni Porspakka, Tommi Rikkilä & Wilma Suuronen" },
      { label: "Ohjaus", names: "Eric Barco & Sara Paasikoski" },
      { label: "Näytelmäkirjailija", names: "Olga Rantalaiho" },
      { label: "Valosuunnittelija", names: "Laura Walden" },
      { label: "Äänisuunnittelu", names: "Bruno Baer, Veera Isotalo & Jekaterina Viltšenko" },
      { label: "Lavastus", names: "Aleksi Elo" },
      { label: "Pukusuunnittelu", names: "Eric Barco & Sara Paasikoski" },
      { label: "Meikkaus", names: "Halti I" },
      { label: "Graafinen suunnittelu", names: "Ville-Matti Tenovirta" },
      { label: "Valokuvaus", names: "Ville-Matti Tenovirta" },
      { label: "Tuotanto", names: "Laura Niemelä" },
    ],
    links: [
      { url: "https://www.kellariteatteri.fi/#!ohjelmisto/141", label: "https://www.kellariteatteri.fi/#!ohjelmisto/141" },
    ],
  },
  {
    id: 2,
    slug: "Saatanallinen-Sielunmessu",
    title: "Etna Ensemblen iltamat: Saatanallinen Sielunmessu",
    titleGrid: "Etna Ensemblen iltamat: Saatanallinen Sielunmessu",
    thumbnail: Sielunmessu,
    date: "14.10.2025",
    images: [
      Sielunmessu,
    ],
    photographers: ["Stiina Viitajylhä Photography"],
    description: [
      "Valta kiehtoo.",
      "Valta pelottaa.",
      "Valta raivostuttaa.",
      "Valta voidaan valjastaa niin hyvän kuin pahankin ratsuksi.",
      "Saatanallinen Sielunmessu on runollinen liturgia, esityksellinen tutkielma vallankäytön eri muodoista, siihen liittyvistä ja siitä syntyvistä ilmiöistä.",
      "Teos on inspiroitunut Katariina Sourin Jumalasta seuraava -romaanista (2006). Esitykselliset iltamat huipentuvat paneelikeskusteluun illan teemoista.",

    ],
    credits: [
      { label: "Ohjaus ja dramaturgia", names: "Sanna Paula Mäkelä" },
      { label: "Musiikin sävellys ja sello", names: "Otto Nuoranne" },
      { label: "Esityksen tekstit", names: "Sanna Paula Mäkelä & Katariina Souri" },
      { label: "Näyttämöllä", names: "Linda-Maria Raininen, Otto Nuoranne & Kimmo Alakunnas" },
      { label: "Näyttämöllä äänenä", names: "Kalle Taivainen" },
      { label: "Videokuva", names: "Kimmo Alakunnas" },
      { label: "Äänisuunnittelu", names: "Otto Nuoranne & Kalle Taivainen" },
      { label: "Valosuunnittelija", names: "Laura Walden" },
      { label: "Tuotanto", names: "Liisa Pylkkänen" },
      { label: "Valokuvat", names: "Stiina Viitajylhä Photography" },
    ],
    links: [
      { url: "https://en.kokoteatteri.fi/esitysarkisto/etna-ensemblen-iltamat%3A-saatanallinen-sielunmessu-", label: "https://en.kokoteatteri.fi/esitysarkisto/etna-ensemblen-iltamat%3A-saatanallinen-sielunmessu-" },
    ],
  },
  {
    id: 3,
    slug: "Pakastaa-ej-pakasta",
    title: "Pakastaa, ej pakasta",
    titleGrid: "Pakastaa, ej pakasta",
    thumbnail: [pakastaaEjPakasta],
    date: "28.11.2024 - 2.12.2024",
    images: [pakastaaEjPakasta],
    photographers: ["Ian Laitinen"],
    description: [
      "Onko pakastin syytä sulattaa? Voiko jään sulamista nopeuttaa? Mitä tehdä ulos valuvalle vedelle? Mitä tehdä pakastetuille elintarvikkeille, jotta ne säilyisivät hyvinä? Entä se kaikki muu, mitä jään sisästä paljastuu?",
      "Jos kaikesta huolimatta päätät sulattaa pakastimesi, vältä nämä virheet:"
    ],
    credits: [
      { label: "Ohjaus", names: "Nadja Uusiperhe" },
      { label: "Esitysdramaturgia", names: "Pauliina Kietäväinen" },
      { label: "Lavastus", names: "Ian Laitinen" },
      { label: "Valosuunnittelu", names: "Laura Walden" },
      { label: "Äänisuunnittelu", names: "Laura Walden" },
      { label: "Pukusuunnittelu", names: "Li Krook" },
      { label: "Esiintyjät", names: "Joel Häggblom, Li Krook & Dominique Pashley" },
    ],
    links: [
      { url: "https://www.uniarts.fi/tapahtumat/pakastaa-ej-pakasta/", label: "https://www.uniarts.fi/tapahtumat/pakastaa-ej-pakasta/" },
    ],
  },
  {
    id: 4,
    slug: "poly",
    title: "Pöly",
    titleGrid: "Pöly",
    thumbnail: poly,
    date: "07.06.2023 - 10.06.2023",
    images: [
      poly,
    ],
    photographers: [""],
    description: [
      "“Päivä viisikymmentäyhdeksän, kello yksitoista yli kaksitoista. Ulkona on harmaata, ei sadetta. Tänään kuulemme toivekappaleita, joista ensimmäinen on kohinaa.”",
      "Pöly on näytelmä pysähtyneisyydestä, pelastus yrityksistä ja pölyksi muuttumisesta.",
      "Esitys leikittelee hitaudella, paikalleen pysähtymisellä ja arkisuudella.",
    ],
    credits: [
      { label: "Ohjaus ja käsikirjoitus", names: "Katariina Kannisto" },
      { label: "Näyttelijät", names: "Miriam Mekhane, Olga Rantalaiho, Sanna Väisänen & Myrsky Ylänen" },
      { label: "Valosuunnittelu", names: "Laura Walden" },
      { label: "Lavastus", names: "Aleksi Elo" },
      { label: "Äänisuunnittelu", names: "Katariina Kannisto" },
      { label: "Puvustus", names: "työryhmä" },
    ],
    links: [
      { url: "https://vapaantaiteentila.fi/en/events/poly/", label: "https://vapaantaiteentila.fi/en/events/poly/" },
    ],
  },
  {
    id: 5,
    slug: "cresc",
    title: "cresc.<",
    titleGrid: "cresc.<",
    thumbnail: cresc,
    date: "10.3.2023 - 18.3.2023",
    images: [
      cresc,
    ],
    photographers: ["Graafikko: Freddie Sukura Valokuvat: Samuli Hannula"],
    description: [
      "ital. crescendo, cresc. = kasvu, kasvattaen",
      "cresc.< on musiikillinen performanssi kasvusta, vuorovaikutuksesta ja yhteen tulemisen voimasta. Esityksessä sukelletaan ihmisen ja äänen juurille. Puhutun tai lauletun tekstin sijasta kerronnan työkaluna käytetään musiikkia, ääntä ja liikettä. Lavalla nähdään viisi Kellariteatterilaista instrumentalistinäyttelijää, jotka soittavat livenä kaiken esityksessä kuultavan musiikin. Ryhmälähtöisyyteen nojaavan prosessin aikana työryhmä on tutkinut musiikin kollektiivisen luomisen rajoja ja soivan äänen mahdollisuuksia teatterilavalle tuotuna.",
      "Tee aloite, kuuntele, kopioi, tue, muokkaa, riko, pienennä, kokoa, yllätä, kasvata!",
    ],
    credits: [
      { label: "Lavalla", names: "Anna Kirvesniemi - viulu, haitari, perkussiot, syntetisaattori, piano, laulu Ilmari Järvenpää - kitara, lyömäsoittimet, poikkihuilu, piano, laulu Jekaterina Viltšenko - viulu, ableton, perkussiot, piano, laulu Markus Misukka - lyömäsoittimet, kitara, piano, syntetisaattori, piano & laulu Ville Soikkeli - kitara, laulu, lyömäsoittimet " },
      { label: "Ohjaus ja konsepti", names: "Johannes Haahti" },
      { label: "Musiikin sävellys", names: "Esiintyjät" },
      { label: "cresc.< pääteema", names: "Johannes Haahti" },
      { label: "Lavastus ja puvustus", names: "Työryhmä" },
      { label: "Tuottaja", names: "Joonatan Pekola" },
      { label: "Valosuunnittelu", names: "Laura Walden" },
      { label: "Valojen ajo", names: "Laura Walden & Tuisku Hillilä" },
      { label: "Graafikko", names: "Freddie Sukura" },
      { label: "Valokuvat", names: "Samuli Hannula" },
      { label: "Produktiokummit", names: "Miriam Mekhane & Ada Heikkilä" },
    ],
    links: [
      { url: "https://www.kellariteatteri.fi/#!ohjelmisto/158", label: "https://www.kellariteatteri.fi/#!ohjelmisto/158" },
    ],
  },
  {
    id: 6,
    slug: "3-sisarta",
    title: "3_sisarta",
    titleGrid: "3_sisarta",
    thumbnail: sisarta,
    date: "9.12.2022 - 30.1.2023",
    images: [
      sisarta,
    ],
    photographers: ["Heidi Bergström"],
    description: [
      "Vuosi on 2022. Näyttämö on väsynyt, ohueksi venytetty.",
      "Ja siellä ovat Olga, Maša ja Irina, muun muassa. Ja heitä vaivaa melankuolio. He haikailevat pois ahtaasta ja paikallaan pyörivästä elämänpiiristään.",
      "Kohti suurempia ja loistokkaampia näyttämöitä.",
      "Moskovaan! Moskovaan!",
      "Ja sinne päästäkseen on tehtävä työtä, pyristeltävä. Pelastus tulee niille, jotka jaksavat pisimpään. Jotka ovat omin neuvoin räpiköineet tiensä huipulle.",
      "Sillä hyvä elämä ei tule koskaan annettuna. Se tulee ansaita.",
      "Ja kaiken tämän keskellä täytyy elää, kasvaa yli rajojensa, tehdä työtä (usein ilmaiseksi), jotta pitkän aikaa haaveiltu paratiisi aukeaa loistokkaana silmien edessä. Hyvä elämä, palkinto pitkästä kiipeämisestä, pyhä Moskova kultajalustalla.",
      "Ja elämä voi vihdoin alkaa.",
      "3_sisarta on esitys suoritusyhteiskunnan luotsaamasta pelistä, jonka pelaajia me kaikki olemme. Anton Tšehovin klassikkonäytelmästä inspiroitunut teos loihtii Helsingin Kellariteatterin näyttämölle täysin uudenlaisen maailman, jossa pelot ja haaveet sekä rakkaus räiskyvät armottomassa ristitulessa.",
      "Esitys on Eero Leichnerin sekä Kellariteatterin vuoden 2022 uusien jäsenten kanssa yhteistyössä tehty produktio. Taiteellisina suunnittelijoina nähdään lisäksi taitava joukko Kellariteatterin vanhempia jäseniä!",
    ],
    credits: [
      { label: "Näyttämöllä", names: "Riikka Alanne, Jan Haapanen, Ada Heikkilä, Nikolas Ilola, Mari Lakeus, Siiri Lamminsivu, Markus Misukka, Joonatan Pekola, Krista Raitalahti, Valtteri Rossi, Vilma Tarkiainen, Virpi Valkeinen, Onni Vesikallio & Fanni Vihersaari" },
      { label: "Esitysteksti ja esityskonsepti", names: "Eero Leichner" },
      { label: "Ohjaus ja dramaturgia", names: "Amanda Beckley ja Eero Leichner" },
      { label: "Valosuunnittelu", names: "Iia Walavaara ja Laura Walden" },
      { label: "Äänisuunnittelu", names: "Ilmari Järvenpää ja Elisa Mattila" },
      { label: "Lavastus", names: "Aleksi Elo ja Ella Toivonen" },
      { label: "Ennakkokuvat ja juliste", names: "Heidi Bergström" },
      { label: "Tuotanto", names: "Eero Leichner ja työryhmä" },
    ],
    links: [
      { url: "https://www.kellariteatteri.fi/#!ohjelmisto/155", label: "https://www.kellariteatteri.fi/#!ohjelmisto/155" },
    ],
  },
  {
    id: 7,
    slug: "tämä-pöytä-on-tehty-maailmanpuusta",
    title: "tämä pöytä on tehty maailmanpuusta",
    titleGrid: "tämä pöytä on tehty maailmanpuusta",
    thumbnail: tämäPöytäOnTehtyMaailmanPuusta,
    date: "29.7.2022 - 12.8.2022",
    images: [
      tämäPöytäOnTehtyMaailmanPuusta,
    ],
    photographers: ["Bruno Baer"],
    description: [
      "Yhden illan kaari hienossa helsinkiläisessä ravintolassa.",
      "Yksi kuolevainen ja kolme kuolematonta yhteisen pöydän ääressä, huutamassa tyhjiöön äänillä, joita kukaan ei kuule.",
      "Vuoret seisovat yksin, hyttysillä on toisensa.",
      "Jos saisit mahdollisuuden olla ikuinen, luopuisitko siitä, mikä on sinussa kauneinta?",
    ],
    credits: [
      { label: "Ohjaus ja käsikirjoitus", names: "Onerva Järvenpää" },
      { label: "Dramaturgia", names: "Aleksi Aaro Olavi Elo" },
      { label: "Lavastus", names: "Iida Jauho" },
      { label: "Äänisuunnittelu", names: "Jekaterina Viltšenko" },
      { label: "Valosuunnittelu", names: "Laura Walden" },
      { label: "Puku- ja maskisuunnittelu", names: "Ville Soikkeli" },
      { label: "Tuotanto", names: "Virpi Valkeinen" },
      { label: "Valokuvat", names: "Bruno Baer" },
      { label: "Näyttämöllä", names: "Veera Heikkinen, Olga Rantalaiho, Freddie Sukura & Wilma Suuronen" },
    ],
    links: [
      { url: "https://www.kellariteatteri.fi/#!ohjelmisto/152", label: "https://www.kellariteatteri.fi/#!ohjelmisto/152" },
    ],
  },
    {
    id: 8,
    slug: "hellinta",
    title: "Hellintä",
    titleGrid: "Hellintä",
    thumbnail: hellinta1,
    date: "15.6.2022 - 23.6.2022",
    images: [
      hellinta1,
      hellinta2
    ],
    photographers: ["Valokuvat: Virpi Valkeinen & juliste: Minja Puisto"],
    description: [
      "“Luisui vauhdistaan:",
      "tippui",
      "tipahti",
      "putosi",
      "lankesi.",
      "Rikkoi veden pinnan:",
      "vajosi",
      "upposi",
      "hukkui.“",
      " ",
      "Hellintä on runoelmaa, tanssillista ilmaisua ja nykyteatteria yhdistelevä ensemble-esitys, joka kysyy: ”miksi uuvumme?”",
      "Missä ovat uupumuksemme juuret, entä kuinka syvälle ne tunkeutuvat?",
      "Hellintä tutkii puhkipalaneen mielen liikkeitä, kimpoilee aikatasojen välillä, pakenee itselleen asettamiaan ääriviivoja.",
      "Esitys on aihetta tutkineen, työryhmälähtöisen harjoituskauden lopputulos.",
    ],
    credits: [
      { label: "Näyttämöllä", names: "Samuel Glassar, Inari Lahti, Miriam Mekhane & Vilma Tuomi" },
      { label: "Ohjaus & dramaturgia", names: "Olga Rantalaiho" },
      { label: "Skenografia", names: "Aleksi Elo" },
      { label: "Valosuunnittelu ja -ajo", names: "Laura Walden" },
      { label: "Valosuunnittelu", names: "Laura Walden" },
      { label: "Äänisuunnittelu ja -ajo", names: "Jekaterina Viltšenko" },
      { label: "Puvustus", names: "Katariina Kannisto & Anni Porspakka" },
      { label: "Maskeeraus", names: "Katariina Kannisto" },
      { label: "Esityksen tuotanto & valokuvat:", names: "Virpi Valkeinen" },
      { label: "Juliste", names: "Minja Puisto" },
    ],
    links: [
      { url: "https://www.kellariteatteri.fi/#!ohjelmisto/148", label: "https://www.kellariteatteri.fi/#!ohjelmisto/148" },
    ],
  },
    {
    id: 9,
    slug: "Perhosen-Siipien-Havina",
    title: "PERHOSEN SIIPIEN HAVINA",
    titleGrid: "PERHOSEN SIIPIEN HAVINA",
    thumbnail: [PSH1],
    date: "25.3.2022 - 20.4.2022",
    images: [
      PSH1,
      PSH2,
      PSH3
    ],
    photographers: ["Ville-Matti Tenovirta"],
    description: [
      "Perhosen siipien havina on unohtuneen sielun laulu maailmalle, joka ei osannut kuunnella",
      "Esitys kertoo ihmisyyden pienuudesta kaikkeuden suuruuden alla. Jäljistä, joita elämä jättää maailman multaan. Vuosisatojen lävitse kulkevista kaiuista. Se on satu kaiken kierrosta, ikiliikkuvasta ketjureaktiosta ja kaikkeuden kattavasta yhtenevyydestä.",
      "Perhosen siipien havina on Ajan verkkoon maalattu maisema – kuva, jossa unohtunutta ei ainoastaan muisteta, vaan sitä myös juhlitaan. Nostamme maljan menneille – heille, joiden olemassaolot tekivät todellisuutemme, mutta joiden nimiä emme tule koskaan tietämään. Joiden nauruja ei kukaan enää tunnista.",
      "Maailma on herkkä. Pieni voi saada aikaan suurta. Perhonen, tai ihminen.",
    ],
    credits: [
      { label: "Ohjaus", names: "Onerva Järvenpää" },
      { label: "Käsikirjoitus ja dramaturgia", names: "Onerva Järvenpää & Anna Kirvesniemi" },
      { label: "Valosuunnittelu", names: "Pietari Salmi & Laura Walden" },
      { label: "Videosuunnittelu", names: "Donna Uuttu" },
      { label: "Äänisuunnittelu", names: "Jekaterina Viltšenko" },
      { label: "Musiikkikonsultointi", names: "Johannes Haahti" },
      { label: "Pukusuunnittelu", names: "Havina Jäntti" },
      { label: "Lavastus", names: "Aleksi Aaro Olavi Elo" },
      { label: "Koreografia", names: "Eemi Snicker & Onerva Järvenpää" },
      { label: "Graafinen suunnittelu ja valokuvat", names: "Ville-Matti Tenovirta" },
      { label: "Tuotanto", names: "Ville-Matti Tenovirta, Ella Toivonen & Emmi Virtanen" },
      { label: "Näyttämöllä", names: "Tuura Aikio, Janette Hirvonen, Elisa Mattila, Martti Nikamaa, Milla Palin, Freddie Sukura & Myrsky Ylänen" },
    ],
    links: [
      { url: "https://www.kellariteatteri.fi/#!ohjelmisto/147", label: "https://www.kellariteatteri.fi/#!ohjelmisto/147" },
    ],
  },
      {
    id: 10,
    slug: "Eksyneet",
    title: "Eksyneet",
    titleGrid: "Eksyneet",
    thumbnail: [Eksyneet],
    date: "11.12.2021 - 17.12.2021",
    images: [
      Eksyneet
    ],
    photographers: ["Ville-Matti Tenovirta"],
    description: [
      "Piilosilla juokset seljan tuoksu vaatteissa ja katveen sylist' löydät piilopaikan parhaimman.",
      "Vaan etpä tiedä, kulta kun oot ylittänyt rajan kun jalka kohtaa metsämaan ei sieltä koskaan palaa.",
      "Ei auta huutaa äitiä tai suunnanvaihto toiseen. Mättäät muuttaa muotoaan ja polut katkee kesken.",
      "Kun suljet silmäs lepohon ain' saman unen näät mis' juokset kantapääsi rikki silti, nalkkiin jäät.",
      "Tämä ei ole lastennäytelmä."
    ],
    credits: [
      { label: "Näyttämöllä", names: "Heidi Finnberg, Artturi Frisk, Veera Heikkinen, Janette Hirvonen, Anni Porspakka, Tommi Rikkilä & Wilma Suuronen" },
      { label: "Ohjaus", names: "Olga Rantalaiho" },
      { label: "Käsikirjoitus", names: "Aleksi Elo & Olga Rantalaiho" },
      { label: "Dramaturgia", names: "Työryhmä" },
      { label: "Valosuunnittelu", names: "Laura Walden" },
      { label: "Äänisuunnittelu", names: "Jekaterina Viltšenko" },
      { label: "Musiikki", names: "Bruno Baer, Veera Isotalo & Jekaterina Viltšenko" },
      { label: "Lavastus", names: "Aleksi Elo" },
      { label: "Pukusuunnittelu", names: "Aleksi Elo & Olga Rantalaihto" },
      { label: "Graafinen suunnittelu", names: "Ville-Matti Tenovirta & Olga Rantalaiho" },
      { label: "Valokuvat", names: "Ville-Matti Tenovirta" },
      { label: "Tuotanto", names: "Laura Niemelä" },
    ],
    links: [
      { url: "https://www.kellariteatteri.fi/#!ohjelmisto/146", label: "https://www.kellariteatteri.fi/#!ohjelmisto/146" },
    ],
  },
];

/**
 * @param {string} slug
 * @returns {typeof projects[0] | null}
 */
export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug) ?? null;
}