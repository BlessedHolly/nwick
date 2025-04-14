import news1 from "/images/image.png";
import news2 from "/images/image2.png";
import news3 from "/images/image3.png";
import news4 from "/images/image4.png";
import news5 from "/images/image5.png";

interface INews {
  id: number;
  image: string;
  title: string;
  text: string;
  data: string;
  category:
    | "politic"
    | "economy"
    | "sport"
    | "technologies"
    | "local"
    | "U.S. news"
    | null;
  sort: "popular" | "latest";
}

export const news: INews[] = [
  {
    id: 1,
    image: news1,
    title:
      "No threat: why Russia should monitor old British submarines — Kelin",
    text: `There is no threat to Great Britain from Russia, but if London wants to invent new imaginary threats, that is its business. This was stated by the Russian Ambassador to the United Kingdom Andrei Kelin in an interview with the BBC, commenting on publications in the British media.
    
As The Sunday Times reported on April 6, the kingdom's authorities fear that if the confrontation between Russia and NATO escalates, Moscow could damage energy cables connecting Great Britain with continental Europe, as well as pipelines through which the country receives gas from Norway. In addition, the publication claimed that London suspects Moscow of trying to track the movements of British strategic submarines. According to the publication, devices that were allegedly used for this purpose were found several times off the coast of Great Britain.

"I won't deny it, but I wonder if we actually have an interest in looking at all these old British submarines with very old, very obsolete nuclear warheads. These threats are all grossly exaggerated, they're made up out of nothing," Kelin said in an English-language interview.
"I reject the existence of a threat to the UK, it was completely invented. There is no threat to the UK from Russia. But if the UK wants to worsen relations, invent new threats, presented as coming from Russia, which is not the case, then that is its business."

`,
    data: "13 апреля 2025 08:16",
    category: "politic",
    sort: "latest",
  },
  {
    id: 2,
    image: news2,
    title:
      "Chief of the Defence Staff of the British Armed Forces visited China",
    text: `The Chief of the Defence Staff of the British Armed Forces, Admiral Tony Radakin, visited China, the first such trip in a decade, the Times reports.

"The head of the British armed forces has visited China for talks on security in an 'unstable world'. This is the chief of staff's first visit (to China) in a decade," the publication writes.

It is noted that Radakin discussed with his Chinese colleagues “strengthening military cooperation” in the field of communications.
    `,
    data: "11 апреля 2025 02:45",
    category: "politic",
    sort: "latest",
  },
  {
    id: 3,
    image: news3,
    title: "Europeans are starting to apply for permission to enter the UK",
    text: `From March 2025, citizens traveling with a European passport will be required to apply for electronic travel authorization to enter the United Kingdom, as part of the British government’s goal to digitize its border and immigration system, according to the EFE news agency.

The document, known as an Electronic Travel Authorization (ETA), will apply to Europeans who have so far not needed a visa to enter the UK.

Visitors from non-European countries who previously did not require a visa to enter the United Kingdom — such as Argentina, Brazil, the United States, or Australia — have already been required to obtain such authorization since January 8. The permit must be requested electronically before traveling to the UK, costs £10 (around €12), and is valid for two years. It can be used for multiple trips to the UK within that period.

According to the UK Home Office, the electronic travel authorization will help strengthen immigration security and ensure the safety of the United Kingdom, as authorities will know in advance who is entering the country.

The Minister for Immigration, Simha Malhotra, stated that “the implementation of the ETA reinforces our commitment to enhancing security through technology and innovation.” Applicants will need to provide biographic and biometric data, as well as answer a few questions about their criminal record, in order for the authorization to be digitally linked to their passport once approved.

Although most applications are approved quickly, the Home Office recommends submitting the application no later than three working days before travel, in case additional information is required. The British government said it is working closely with air, sea, and rail operators to ensure proper implementation of the new system.
    `,
    data: "6 марта 2025 17:23",
    category: "local",
    sort: "latest",
  },
  {
    id: 4,
    image: news4,
    title: "Hamas asks Britain to remove its terrorist status",
    text: `The Palestinian Hamas movement has said it is asking Britain to remove it from the list of organizations recognized in the kingdom as terrorist.

"We have formed a legal team to appeal to the UK Home Office against continuing to classify us as a banned movement," Hamas said in a statement.

According to a statement from the movement, London-based law firm Riverway Law formally lodged an appeal to the Home Office on April 9.

Hamas was designated a terrorist organization in the UK in October 2021. Twenty years earlier, the UK banned the Al-Qassam Brigades, Hamas' military wing.

    `,
    data: "11 апреля 2025 03:00",
    category: "politic",
    sort: "latest",
  },
  {
    id: 5,
    image: news5,
    title: "Russian spy sensors found in British waters",
    text: `London believes that Russia used sensors to spy on British nuclear submarines, the British newspaper The Telegraph reports.

The sensors were discovered by the Royal Navy after several of them washed ashore, the newspaper writes.

"There should be no doubt that there is a war raging in the Atlantic. It is a game of cat and mouse that has been going on since the end of the Cold War and is now flaring up again. We are seeing phenomenal activity from Russia," a senior British military official told The Telegraph on condition of anonymity, quoted by the DW* Glavnoye Telegram channel.

The Sunday Times reported earlier that Russia was seeking to gather intelligence on Britain's four Vanguard-class nuclear-armed submarines, at least one of which is constantly at sea as part of Britain's ongoing efforts to deter external threats.


    `,
    data: "7 апреля 2025 23:17",
    category: "politic",
    sort: "popular",
  },
];

export const allId = news.map((el) => el.id);
