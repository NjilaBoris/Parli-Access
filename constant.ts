// Data source: National Assembly MP directory (all 10 regions).
// NOTE: the source table had some column overlap (MP name / committee / party
// text running together). Names and party codes were recovered reliably; a
// handful of committee labels were truncated in the source (e.g. "(Membe") and
// were completed against the small fixed set of committee roles (Member,
// President, Vice-President, Secretary, Rapporteur General). Worth spot-checking
// unusual names (hyphenated surnames, "epse"/"ep." married names) against the
// official source.

export type MP = {
  id: string;
  name: string;
  committee?: string;
  party?: string;
};

export type Constituency = {
  id: string;
  name: string;
  seats: number;
  subDivisions?: string;
  councils?: number;
  mps: MP[];
};

export type Division = {
  id: string;
  name: string;
  seats: number;
  constituencies: Constituency[];
};

export type Region = {
  id: string;
  name: string;
  divisions: Division[];
};

export const REGIONS: Region[] = [
  {
    id: "adamaoua",
    name: "Adamaoua",
    divisions: [
      {
        id: "djerem",
        name: "Djerem",
        seats: 1,
        constituencies: [
          {
            id: "djerem",
            name: "Djerem",
            seats: 1,
            subDivisions: "2 (Ngaoundal, Tibati)",
            councils: 2,
            mps: [{ id: "djerem-ali-salihou", name: "ALI SALIHOU", committee: "Committee on National Defence and Security (President)", party: "RDPC" }],
          },
        ],
      },
      {
        id: "faro-et-deo",
        name: "Faro et Deo",
        seats: 1,
        constituencies: [
          {
            id: "faro-et-deo",
            name: "Faro et Deo",
            seats: 1,
            subDivisions: "4 (Galim-Tignère, Kontcha, Mayo-Baléo, Tignère)",
            councils: 4,
            mps: [{ id: "faro-et-deo-ibrahima-bobbo-bello", name: "IBRAHIMA BOBBO BELLO", committee: "Foreign Affairs Committee (Secretary)", party: "UNDP" }],
          },
        ],
      },
      {
        id: "mayo-banyo",
        name: "Mayo-Banyo",
        seats: 2,
        constituencies: [
          {
            id: "mayo-banyo",
            name: "Mayo-Banyo",
            seats: 2,
            subDivisions: "3 (Bankim, Banyo, Mayo-Darlé)",
            councils: 3,
            mps: [{ id: "mayo-banyo-mohamadou-mahdi", name: "MOHAMADOU MAHDI", committee: "Committee on Finance and the Budget (Member)", party: "RDPC" }, { id: "mayo-banyo-memouna-mahamat", name: "MEMOUNA MAHAMAT", party: "RDPC" }],
          },
        ],
      },
      {
        id: "mbere",
        name: "Mbere",
        seats: 3,
        constituencies: [
          {
            id: "mbere",
            name: "Mbere",
            seats: 3,
            subDivisions: "4 (Dir, Djohong, Meiganga, Ngaoui)",
            councils: 4,
            mps: [
              { id: "mbere-baoro-theophile", name: "BAORO Theophile", committee: "Committee on Resolutions and Petitions (Member)", party: "RDPC" },
              { id: "mbere-halia-moussa-moufta", name: "HALIA MOUSSA MOUFTA", committee: "Committee on National Defence and Security (Member)", party: "RDPC" },
              { id: "mbere-yaya-doumba-marius", name: "YAYA DOUMBA Marius", committee: "Foreign Affairs Committee (Member)", party: "RDPC" },
            ],
          },
        ],
      },
      {
        id: "vina",
        name: "Vina",
        seats: 3,
        constituencies: [
          {
            id: "vina",
            name: "Vina",
            seats: 3,
            subDivisions: "8 Belel, Martap, Mbe, Ngan-Ha, Ngaoundere I, Ngaoundere II, N 8",
            mps: [
              { id: "vina-abba-alim", name: "ABBA ALIM", committee: "Committee on Resolutions and Petitions (Member)", party: "UNDP" },
              { id: "vina-aminatou-abbo", name: "AMINATOU ABBO", committee: "Committee on Economic Affairs, Planning and Re", party: "UNDP" },
              { id: "vina-yaouba-alhadji", name: "YAOUBA ALHADJI", party: "UNDP" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "centre",
    name: "Centre",
    divisions: [
      {
        id: "haute-sanaga",
        name: "Haute-Sanaga",
        seats: 2,
        constituencies: [
          {
            id: "haute-sanaga",
            name: "Haute-Sanaga",
            seats: 2,
            subDivisions: "7 (Bibey, Lembe-Yezoum, Mbandjock, Minta, Nanga-Eboko, Nkot 7",
            mps: [{ id: "haute-sanaga-etong-hilarion", name: "ETONG Hilarion", committee: "Committee on Constitutional Laws, Human Rights", party: "RDPC" }, { id: "haute-sanaga-abomo-fama-marguerite-celestine", name: "ABOMO FAMA Marguerite Celestine", party: "RDPC" }],
          },
        ],
      },
      {
        id: "lekie",
        name: "Lekie",
        seats: 5,
        constituencies: [
          {
            id: "lekie-est",
            name: "Lekie-Est",
            seats: 3,
            subDivisions: "5 (Batchenga, Ebebda, Elig-Mfomo, Obala, Sa'a)",
            councils: 5,
            mps: [
              { id: "lekie-est-ndongo-essomba-jean-bernard", name: "NDONGO ESSOMBA Jean-Bernard", party: "RDPC" },
              { id: "lekie-est-ndongo-eteme-edgard", name: "NDONGO ETEME Edgard", committee: "Committee on Finance and the Budget (Rapporteur General)", party: "RDPC" },
              { id: "lekie-est-ngaba-zogo-salome", name: "NGABA ZOGO Salome", party: "RDPC" },
            ],
          },
          {
            id: "lekie-ouest",
            name: "Lekie-Ouest",
            seats: 2,
            subDivisions: "4 Evodoula, Lobo, Monatélé, Okola",
            mps: [{ id: "lekie-ouest-koa-songo-gabriel", name: "KOA SONGO Gabriel", committee: "Foreign Affairs Committee (Member)", party: "RDPC" }, { id: "lekie-ouest-tassi-evelyne-chantale-denise-ep", name: "TASSI Evelyne Chantale Denise ep", committee: "Committee on Economic Affairs, Planning and Re", party: "RDPC" }],
          },
        ],
      },
      {
        id: "mbam-et-inoubou",
        name: "Mbam-et-Inoubou",
        seats: 3,
        constituencies: [
          {
            id: "mbam-et-inoubou",
            name: "Mbam-et-Inoubou",
            seats: 3,
            subDivisions: "9 (Bafia, Bokito, Deuk, Kiiki, Kon-Yambetta, Makénéné, Ndikinimé 9",
            mps: [
              { id: "mbam-et-inoubou-n-nolo-marie-suzanne-ep-onob", name: "N'NOLO Marie Suzanne ep. ONOB", committee: "Foreign Affairs Committee (Member)", party: "RDPC" },
              { id: "mbam-et-inoubou-mandio-william-peter", name: "MANDIO William Peter", committee: "Committee on Cultural, Social and Family Affairs", party: "RDPC" },
              { id: "mbam-et-inoubou-mpon-francois-xavier", name: "MPON Francois-Xavier", committee: "Committee on Economic Affairs, Planning and Re", party: "RDPC" },
            ],
          },
        ],
      },
      {
        id: "mbam-et-kim",
        name: "Mbam-et-Kim",
        seats: 1,
        constituencies: [
          {
            id: "mbam-et-kim",
            name: "Mbam-et-Kim",
            seats: 1,
            subDivisions: "5 (Mbangassina, Ngambè-Tikar, Ngoro, Ntui, Yoko)",
            councils: 5,
            mps: [{ id: "mbam-et-kim-saya-kaigama", name: "SAYA KAIGAMA", committee: "Committee on Constitutional Laws, Human Rights", party: "RDPC" }],
          },
        ],
      },
      {
        id: "mefou-et-afamba",
        name: "Mefou-et-Afamba",
        seats: 2,
        constituencies: [
          {
            id: "mefou-et-afamba",
            name: "Mefou-et-Afamba",
            seats: 2,
            subDivisions: "8 (Afanloum, Awaé, Edzendouan, Esse, Mfou, Nkolafamba, Olan 8",
            mps: [{ id: "mefou-et-afamba-melingui-roger", name: "MELINGUI Roger", committee: "Committee on Economic Affairs, Planning and Re", party: "RDPC" }, { id: "mefou-et-afamba-koa-mfegue-laurentine-ep-mbede", name: "KOA MFEGUE Laurentine ep. MBEDE", party: "RDPC" }],
          },
        ],
      },
      {
        id: "mefou-et-akono",
        name: "Mefou-et-Akono",
        seats: 1,
        constituencies: [
          {
            id: "mefou-et-akono",
            name: "Mefou-et-Akono",
            seats: 1,
            subDivisions: "4 (Akono, Bikok, Mbankomo, Ngoumou)",
            councils: 4,
            mps: [{ id: "mefou-et-akono-essomba-bengono-engelbert-a", name: "ESSOMBA BENGONO Engelbert A", committee: "Committee on Cultural, Social and Family Affairs", party: "RDPC" }],
          },
        ],
      },
      {
        id: "mfoundi",
        name: "Mfoundi",
        seats: 7,
        constituencies: [
          {
            id: "mfoundi",
            name: "Mfoundi",
            seats: 7,
            subDivisions: "7 (Yaoundé I, Yaoundé II, Yaoundé III, Yaoundé IV, Yaoundé V, Y 7",
            mps: [
              { id: "mfoundi-djomgoue-paul-eric", name: "DJOMGOUE Paul Eric", committee: "Committee on Constitutional Laws, Human Rights", party: "RDPC" },
              { id: "mfoundi-emah-etoundi-vincent-de-paul", name: "EMAH ETOUNDI Vincent de Paul", committee: "Committee on Constitutional Laws, Human Rights", party: "RDPC" },
              { id: "mfoundi-essama-nkoudou-christophe", name: "ESSAMA NKOUDOU Christophe", committee: "Committee on Economic Affairs, Planning and Re", party: "RDPC" },
              { id: "mfoundi-essono-francis-lin-mathieu", name: "ESSONO Francis Lin Mathieu", committee: "Committee on Cultural, Social and Family Affairs", party: "RDPC" },
              { id: "mfoundi-menana-nee-nanga-marthe-geo", name: "MENANA nee NANGA Marthe Geo", committee: "Committee on Finance and the Budget (Member)", party: "RDPC" },
              { id: "mfoundi-ndzie-frank-eric", name: "NDZIE Frank Eric", committee: "Foreign Affairs Committee (Member)", party: "RDPC" },
              { id: "mfoundi-yebga-judith-sama-ep-mouoku", name: "YEBGA Judith SAMA ep. MOUOKU", committee: "Committee on Cultural, Social and Family Affairs", party: "RDPC" },
            ],
          },
        ],
      },
      {
        id: "nyong-et-kelle",
        name: "Nyong-et-Kelle",
        seats: 3,
        constituencies: [
          {
            id: "nyong-et-kelle",
            name: "Nyong-et-Kelle",
            seats: 3,
            subDivisions: "10 (Biyouha, Bondjock, Bot-Makak, Dibang, Éséka, Makak, Mato 10",
            mps: [
              { id: "nyong-et-kelle-libii-li-ngue-ngue-cabral", name: "LIBII LI NGUE NGUE Cabral", committee: "Committee on Constitutional Laws, Human Rights", party: "PCRN" },
              { id: "nyong-et-kelle-ngo-issi-rolande-adele", name: "NGO ISSI Rolande Adele", committee: "Committee on Cultural, Social and Family Affairs", party: "PCRN" },
              { id: "nyong-et-kelle-ndjip-bienvenu", name: "NDJIP Bienvenu", committee: "Committee on Resolutions and Petitions (Member)", party: "PCRN" },
            ],
          },
        ],
      },
      {
        id: "nyong-et-mfoumou",
        name: "Nyong-et-Mfoumou",
        seats: 2,
        constituencies: [
          {
            id: "nyong-et-mfoumou",
            name: "Nyong-et-Mfoumou",
            seats: 2,
            subDivisions: "5 (Akonolinga, Ayos, Endom, Kobdombo, Mengang)",
            councils: 5,
            mps: [{ id: "nyong-et-mfoumou-nkodo-dang-roger", name: "NKODO DANG Roger", committee: "Committee on National Defence and Security (Member)", party: "RDPC" }, { id: "nyong-et-mfoumou-mballa-ngobo-catherine-ep-mf", name: "MBALLA NGOBO Catherine ep. MF", committee: "Committee on Production and Trade (Member)", party: "RDPC" }],
          },
        ],
      },
      {
        id: "nyong-et-so-o",
        name: "Nyong-et-So'o",
        seats: 2,
        constituencies: [
          {
            id: "nyong-et-so-o",
            name: "Nyong-et-So'o",
            seats: 2,
            subDivisions: "6 (Akoeman, Dzeng, Mbalmayo, Mengueme, Ngomedzap, Nkolm 6",
            mps: [{ id: "nyong-et-so-o-mbarga-assembe-luc-roger", name: "MBARGA ASSEMBE Luc Roger", committee: "Committee on Production and Trade (Member)", party: "RDPC" }, { id: "nyong-et-so-o-mekongo-helene-ep-atangana", name: "MEKONGO Helene ep. ATANGANA", committee: "Committee on Finance and the Budget (Member)", party: "RDPC" }],
          },
        ],
      },
    ],
  },
  {
    id: "east",
    name: "East",
    divisions: [
      {
        id: "boumba-et-ngoko",
        name: "Boumba-et-Ngoko",
        seats: 2,
        constituencies: [
          {
            id: "boumba-et-ngoko",
            name: "Boumba-et-Ngoko",
            seats: 2,
            subDivisions: "4 (Gari-Gombo, Moloundou, Salapoumbé, Yokadouma)",
            councils: 4,
            mps: [{ id: "boumba-et-ngoko-mikody-ange-gilbert", name: "MIKODY Ange Gilbert", party: "RDPC" }, { id: "boumba-et-ngoko-djabou-marie-solange", name: "DJABOU Marie Solange", committee: "Committee on Economic Affairs, Planning and Re", party: "RDPC" }],
          },
        ],
      },
      {
        id: "haut-nyong",
        name: "Haut-Nyong",
        seats: 3,
        constituencies: [
          {
            id: "haut-nyong",
            name: "Haut-Nyong",
            seats: 3,
            subDivisions: "14 (Abong-Mbang, Angossas, Atok, Dimako, Doumaintang, Doum 14",
            mps: [
              { id: "haut-nyong-nanga-mefant-berthe-ep-owo", name: "NANGA MEFANT Berthe ep. OWO", committee: "Foreign Affairs Committee (Member)", party: "RDPC" },
              { id: "haut-nyong-mbede-pierre-petrus", name: "MBEDE Pierre Petrus", committee: "Committee on Cultural, Social and Family Affairs", party: "RDPC" },
              { id: "haut-nyong-agbwah-ntiba-eric", name: "AGBWAH NTIBA Eric", committee: "Committee on Production and Trade (Member)", party: "RDPC" },
            ],
          },
        ],
      },
      {
        id: "kadey",
        name: "Kadey",
        seats: 3,
        constituencies: [
          {
            id: "kadey",
            name: "Kadey",
            seats: 3,
            subDivisions: "7 (Batouri, Kentzou, Kette, Mbang, Ndelele, Nguelebok, Ouli)",
            councils: 7,
            mps: [
              { id: "kadey-dimbele-boui", name: "DIMBELE BOUI", committee: "Committee on Constitutional Laws, Human Rights", party: "RDPC" },
              { id: "kadey-man-jacqueline-christiane", name: "MAN Jacqueline Christiane", committee: "Committee on Resolutions and Petitions (President)", party: "RDPC" },
              { id: "kadey-tekoura-paul-blaise", name: "TEKOURA Paul Blaise", committee: "Committee on Finance and the Budget (Member)", party: "RDPC" },
            ],
          },
        ],
      },
      {
        id: "lom-et-djerem",
        name: "Lom-et-Djerem",
        seats: 3,
        constituencies: [
          {
            id: "lom-et-djerem",
            name: "Lom-et-Djerem",
            seats: 3,
            subDivisions: "8 (Bélabo, Bertoua 1, Bertoua 2, Bétaré-Oya, Diang, Garoua-Bo 8",
            mps: [
              { id: "lom-et-djerem-kombo-gberi", name: "KOMBO GBERI", committee: "Committee on Resolutions and Petitions (Member)", party: "RDPC" },
              { id: "lom-et-djerem-tak-bienvenu", name: "TAK Bienvenu", party: "RDPC" },
              { id: "lom-et-djerem-ngbannbaye-antoinette-ep-narke", name: "NGBANNBAYE Antoinette ep. NARKE", party: "RDPC" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "far-north",
    name: "Far North",
    divisions: [
      {
        id: "diamare",
        name: "Diamare",
        seats: 5,
        constituencies: [
          {
            id: "diamare-centre",
            name: "Diamare-Centre",
            seats: 2,
            subDivisions: "4 Dargala, Maroua 1, Maroua 2, Maroua 3 4",
            mps: [{ id: "diamare-centre-salamana-amadou-ali-ii", name: "SALAMANA AMADOU ALI II", committee: "Committee on Finance and the Budget (Vice-President)", party: "FSNC" }, { id: "diamare-centre-damdam-marie", name: "DAMDAM Marie", committee: "Committee on Constitutional Laws, Human Rights", party: "RDPC" }],
          },
          {
            id: "diamare-nord",
            name: "Diamare-Nord",
            seats: 1,
            subDivisions: "2 (Bogo Petté)",
            councils: 2,
            mps: [{ id: "diamare-nord-hamadou-sali", name: "HAMADOU SALI", committee: "Committee on Production and Trade (Vice-President)", party: "RDPC" }],
          },
          {
            id: "diamare-ouest",
            name: "Diamare-Ouest",
            seats: 1,
            subDivisions: "1 ( Meri)",
            councils: 1,
            mps: [{ id: "diamare-ouest-zondol-hersesse", name: "ZONDOL HERSESSE", committee: "Committee on Constitutional Laws, Human Rights", party: "RDPC" }],
          },
          {
            id: "diamare-sud",
            name: "Diamare-Sud",
            seats: 1,
            subDivisions: "2 ( Gawaza, Ndoukoula )",
            councils: 2,
            mps: [{ id: "diamare-sud-sambo-galdima", name: "SAMBO GALDIMA", committee: "Committee on Education, Vocational Training and", party: "RDPC" }],
          },
        ],
      },
      {
        id: "logone-et-chari",
        name: "Logone-et-Chari",
        seats: 4,
        constituencies: [
          {
            id: "logone-et-chari",
            name: "Logone-et-Chari",
            seats: 4,
            subDivisions: "9 (Blangoua, Fotokol, Goulfey, Hile-Alifa, Kousséri, Logone-Birni, 9",
            mps: [
              { id: "logone-et-chari-ali-adjit", name: "ALI ADJIT", committee: "Committee on Finance and the Budget (Member)", party: "RDPC" },
              { id: "logone-et-chari-kamssouloum-abba-kabir", name: "KAMSSOULOUM ABBA KABIR", committee: "Committee on Economic Affairs, Planning and Re", party: "RDPC" },
              { id: "logone-et-chari-margaza-alaou-abel-maggi", name: "MARGAZA ALAOU Abel Maggi", committee: "Foreign Affairs Committee (Member)", party: "RDPC" },
              { id: "logone-et-chari-mariam-goni", name: "MARIAM GONI", committee: "Committee on Constitutional Laws, Human Rights", party: "RDPC" },
            ],
          },
        ],
      },
      {
        id: "mayo-danai",
        name: "Mayo-Danai",
        seats: 5,
        constituencies: [
          {
            id: "mayo-danai-est",
            name: "Mayo-Danai-Est",
            seats: 3,
            subDivisions: "5 ( Gobo, Gueme-velle, Guere,Wina, Yagoua)",
            councils: 5,
            mps: [
              { id: "mayo-danai-est-manamourou-ep-silikam-isabelle", name: "MANAMOUROU ep. SILIKAM Isabelle", party: "RDPC" },
              { id: "mayo-danai-est-nikina-pierre", name: "NIKINA Pierre", committee: "Committee on Constitutional Laws, Human Rights", party: "RDPC" },
              { id: "mayo-danai-est-moussous-lississou", name: "MOUSSOUS LISSISSOU", committee: "Committee on Education, Vocational Training and", party: "RDPC" },
            ],
          },
          {
            id: "mayo-danai-nord",
            name: "Mayo-Danai-Nord",
            seats: 1,
            subDivisions: "2( Kai-Kai, Maga)",
            councils: 2,
            mps: [{ id: "mayo-danai-nord-bara-julien", name: "BARA Julien", committee: "Committee on Production and Trade (Member)", party: "RDPC" }],
          },
          {
            id: "mayo-danai-sud",
            name: "Mayo-Danai-Sud",
            seats: 1,
            subDivisions: "4 (Datcheka, Kar-Hay, Kalfou,Tchati-Bali)",
            councils: 4,
            mps: [{ id: "mayo-danai-sud-tabouli-celestin", name: "TABOULI Celestin", committee: "Committee on Production and Trade (Member)", party: "RDPC" }],
          },
        ],
      },
      {
        id: "mayo-kani",
        name: "Mayo-Kani",
        seats: 5,
        constituencies: [
          {
            id: "mayo-kani-nord",
            name: "Mayo-Kani-Nord",
            seats: 3,
            subDivisions: "3 ( Kaélé, Mindif, Moutourwa)",
            councils: 3,
            mps: [
              { id: "mayo-kani-nord-haman-tchiouto", name: "HAMAN TCHIOUTO", committee: "Foreign Affairs Committee (Secretary); Committee", party: "RDPC" },
              { id: "mayo-kani-nord-magouo-salome", name: "MAGOUO Salome", committee: "Committee on Production and Trade (Member)", party: "RDPC" },
              { id: "mayo-kani-nord-saraou-gnazoumka-bernadette", name: "SARAOU GNAZOUMKA Bernadette", party: "RDPC" },
            ],
          },
          {
            id: "mayo-kani-sud",
            name: "Mayo-Kani-Sud",
            seats: 2,
            subDivisions: "4 (Dziguilao, Guidiguis, Moulvoudaye, Touloum)",
            councils: 4,
            mps: [{ id: "mayo-kani-sud-guiswe-badoma", name: "GUISWE BADOMA", committee: "Committee on Economic Affairs, Planning and Re", party: "MDR" }, { id: "mayo-kani-sud-dague-aicha-blanche-jacqueline", name: "DAGUE AICHA Blanche Jacqueline", committee: "Committee on National Defence and Security (Member)", party: "MDR" }],
          },
        ],
      },
      {
        id: "mayo-sava",
        name: "Mayo-Sava",
        seats: 4,
        constituencies: [
          {
            id: "mayo-sava",
            name: "Mayo-Sava",
            seats: 4,
            subDivisions: "3 (Kolofata, Mora, Tokombéré)",
            councils: 3,
            mps: [
              { id: "mayo-sava-cavaye-yeguie-djibril", name: "CAVAYE YEGUIE DJIBRIL", committee: "Committee on Resolutions and Petitions (Member)", party: "RDPC" },
              { id: "mayo-sava-adama-epse-djibrine", name: "ADAMA epse DJIBRINE", committee: "Foreign Affairs Committee (Member); Committee", party: "RDPC" },
              { id: "mayo-sava-yacouba-yaya", name: "YACOUBA YAYA", party: "RDPC" },
              { id: "mayo-sava-salomon-douvogo", name: "SALOMON DOUVOGO", committee: "Committee on Production and Trade (Member)", party: "RDPC" },
            ],
          },
        ],
      },
      {
        id: "mayo-tsanaga",
        name: "Mayo-Tsanaga",
        seats: 6,
        constituencies: [
          {
            id: "mayo-tsanaga-est",
            name: "Mayo-Tsanaga-Est",
            seats: 1,
            subDivisions: "1( Hina)",
            councils: 1,
            mps: [{ id: "mayo-tsanaga-est-moumini-oumarou", name: "MOUMINI OUMAROU", committee: "Foreign Affairs Committee (Member)", party: "UNDP" }],
          },
          {
            id: "mayo-tsanaga-nord",
            name: "Mayo-Tsanaga-Nord",
            seats: 4,
            subDivisions: "5 (Koza, Modzogo, Mogode, Mokolo, Roua)",
            councils: 5,
            mps: [
              { id: "mayo-tsanaga-nord-gonondo-jean", name: "GONONDO Jean", committee: "Committee on Finance and the Budget (Member)", party: "RDPC" },
              { id: "mayo-tsanaga-nord-kwarmba-solange", name: "KWARMBA Solange", committee: "Committee on Economic Affairs, Planning and Re", party: "RDPC" },
              { id: "mayo-tsanaga-nord-tchende-mahama", name: "TCHENDE MAHAMA", committee: "Committee on Production and Trade (Member)", party: "RDPC" },
              { id: "mayo-tsanaga-nord-ousmanou-dawai", name: "OUSMANOU DAWAI", committee: "Committee on Cultural, Social and Family Affairs", party: "RDPC" },
            ],
          },
          {
            id: "mayo-tsanaga-sud",
            name: "Mayo-Tsanaga-Sud",
            seats: 1,
            subDivisions: "1 (Bourrha)",
            councils: 1,
            mps: [{ id: "mayo-tsanaga-sud-djibrilla-kaou", name: "DJIBRILLA KAOU", party: "RDPC" }],
          },
        ],
      },
    ],
  },
  {
    id: "littoral",
    name: "Littoral",
    divisions: [
      {
        id: "moungo",
        name: "Moungo",
        seats: 6,
        constituencies: [
          {
            id: "moungo-nord",
            name: "Moungo-Nord",
            seats: 3,
            subDivisions: "8 (Baré - Bakem, Ebone, Loum, Manjo, Melong, Nkonsamba 1,N 8",
            mps: [
              { id: "moungo-nord-sime-pierre", name: "SIME Pierre", committee: "Foreign Affairs Committee (Member)", party: "RDPC" },
              { id: "moungo-nord-eyoum-minono-ep-epoube-ly", name: "EYOUM MINONO ep. EPOUBE Ly", committee: "Committee on Economic Affairs, Planning and Re", party: "RDPC" },
              { id: "moungo-nord-ngantcha-louis-henri", name: "NGANTCHA Louis Henri", committee: "Foreign Affairs Committee (Member)", party: "RDPC" },
            ],
          },
          {
            id: "moungo-sud",
            name: "Moungo-Sud",
            seats: 3,
            subDivisions: "5 (Dibombari, Bonlea, Manjo, Mombo,Njombe- Penja)",
            councils: 5,
            mps: [
              { id: "moungo-sud-mbapte-jean-baptiste", name: "MBAPTE Jean Baptiste", committee: "Committee on National Defence and Security (Member)", party: "RDPC" },
              { id: "moungo-sud-dissake-nee-ekoka-marguerite-h", name: "DISSAKE nee EKOKA Marguerite H", committee: "Committee on Constitutional Laws, Human Rights", party: "RDPC" },
              { id: "moungo-sud-djeumeni-benilde", name: "DJEUMENI Benilde", committee: "Committee on Finance and the Budget (Member)", party: "SDF" },
            ],
          },
        ],
      },
      {
        id: "nkam",
        name: "Nkam",
        seats: 1,
        constituencies: [
          {
            id: "nkam",
            name: "Nkam",
            seats: 1,
            subDivisions: "4 (Ndobian, Nkondjock, Yabassi, Yingui)",
            councils: 4,
            mps: [{ id: "nkam-moth-samuel-dieudonne", name: "MOTH Samuel Dieudonne", committee: "Committee on Finance and the Budget (Member)", party: "RDPC" }],
          },
        ],
      },
      {
        id: "sanaga-maritime",
        name: "Sanaga-Maritime",
        seats: 3,
        constituencies: [
          {
            id: "sanaga-maritime",
            name: "Sanaga-Maritime",
            seats: 3,
            subDivisions: "11 (Dibamba, Dizangué, Édéa 1, Édéa 2,Massock, Mouanko, Nd 11",
            mps: [
              { id: "sanaga-maritime-biba-francois-prostin", name: "BIBA Francois Prostin", committee: "Committee on Education, Vocational Training and", party: "PCRN" },
              { id: "sanaga-maritime-moutymbo-rosette-julienne-ep", name: "MOUTYMBO Rosette Julienne ep.", committee: "Committee on Finance and the Budget (President)", party: "RDPC" },
              { id: "sanaga-maritime-ngo-yetna-marinette-ep-mbeleg", name: "NGO YETNA Marinette ep. MBELEG", party: "RDPC" },
            ],
          },
        ],
      },
      {
        id: "wouri",
        name: "Wouri",
        seats: 9,
        constituencies: [
          {
            id: "wouri-centre",
            name: "Wouri-Centre",
            seats: 3,
            subDivisions: "2 (Douala I, Douala VI )",
            councils: 2,
            mps: [
              { id: "wouri-centre-dooh-collins-albert-kouoh", name: "DOOH-COLLINS Albert Kouoh", committee: "Committee on Finance and the Budget (Member)", party: "RDPC" },
              { id: "wouri-centre-soppo-toute-marlyse", name: "SOPPO TOUTE Marlyse", committee: "Committee on National Defence and Security (Member)", party: "RDPC" },
              { id: "wouri-centre-osih-joshua", name: "OSIH Joshua", committee: "Foreign Affairs Committee (Member)", party: "SDF" },
            ],
          },
          {
            id: "wouri-est",
            name: "Wouri-Est",
            seats: 4,
            subDivisions: "2 ( Douala III, Douala V)",
            councils: 2,
            mps: [
              { id: "wouri-est-ngahane", name: "NGAHANE", party: "RDPC" },
              { id: "wouri-est-ndongo-moutome-elise-ep-po", name: "NDONGO MOUTOME Elise ep. PO", committee: "Committee on Cultural, Social and Family Affairs", party: "RDPC" },
              { id: "wouri-est-nintcheu-jean-michel", name: "NINTCHEU Jean Michel", committee: "Committee on Economic Affairs, Planning and Re", party: "SDF" },
              { id: "wouri-est-moluh-nourane-hassana", name: "MOLUH NOURANE HASSANA", committee: "Committee on Production and Trade (Secretary)", party: "PCRN" },
            ],
          },
          {
            id: "wouri-ouest",
            name: "Wouri-Ouest",
            seats: 1,
            subDivisions: "1 Douala IV)",
            councils: 1,
            mps: [{ id: "wouri-ouest-fandja-gabriel", name: "FANDJA Gabriel", committee: "Committee on Education, Vocational Training and", party: "RDPC" }],
          },
          {
            id: "wouri-sud",
            name: "Wouri-Sud",
            seats: 1,
            subDivisions: "1 (Douala I, Douala II)",
            councils: 1,
            mps: [{ id: "wouri-sud-pongoh-emmanuel", name: "PONGOH Emmanuel", committee: "Committee on Production and Trade (Member)", party: "RDPC" }],
          },
        ],
      },
    ],
  },
  {
    id: "north",
    name: "North",
    divisions: [
      {
        id: "benoue",
        name: "Benoue",
        seats: 4,
        constituencies: [
          {
            id: "benoue-est",
            name: "Benoue-Est",
            seats: 2,
            subDivisions: "3 ( Lagdo, Bibemi Pitoa)",
            councils: 13,
            mps: [{ id: "benoue-est-aliyoum-fadil", name: "ALIYOUM FADIL", committee: "Committee on Finance and the Budget (Member)", party: "RDPC" }, { id: "benoue-est-ousmanou-aman-sa-aly", name: "OUSMANOU AMAN SA'ALY", party: "FSNC" }],
          },
          {
            id: "benoue-ouest",
            name: "Benoue-Ouest",
            seats: 2,
            subDivisions: "8 (Barndaké, Bashéo, Dembo, Garoua 1, Garoua 2, Garoua 3Ga 8",
            mps: [{ id: "benoue-ouest-ali-mamoudou", name: "ALI MAMOUDOU", party: "RDPC" }, { id: "benoue-ouest-oumoul-koultchoumi-epse-m", name: "OUMOUL KOULTCHOUMI Epse M", committee: "Committee on Finance and the Budget (Secretary)", party: "UNDP" }],
          },
        ],
      },
      {
        id: "faro",
        name: "Faro",
        seats: 1,
        constituencies: [
          {
            id: "faro",
            name: "Faro",
            seats: 1,
            subDivisions: "2 (Beka, Poli)",
            councils: 2,
            mps: [{ id: "faro-bithbini-rosaline", name: "BITHBINI Rosaline", committee: "Committee on Cultural, Social and Family Affairs", party: "RDPC" }],
          },
        ],
      },
      {
        id: "mayo-louti",
        name: "Mayo-Louti",
        seats: 4,
        constituencies: [
          {
            id: "mayo-louti",
            name: "Mayo-Louti",
            seats: 4,
            subDivisions: "3 (Figuil, Guider, Mayo-Oulo)",
            councils: 3,
            mps: [
              { id: "mayo-louti-harouna-abdoulaye", name: "HAROUNA ABDOULAYE", party: "RDPC" },
              { id: "mayo-louti-nafissatou-alim", name: "NAFISSATOU ALIM", committee: "Committee on Constitutional Laws, Human Rights", party: "RDPC" },
              { id: "mayo-louti-boubakari-djidda", name: "BOUBAKARI DJIDDA", party: "FSNC" },
              { id: "mayo-louti-douvaouissa-aissa-hamadi", name: "DOUVAOUISSA AISSA HAMADI", committee: "Committee on Cultural, Social and Family Affairs", party: "UNDP" },
            ],
          },
        ],
      },
      {
        id: "mayo-rey",
        name: "Mayo-Rey",
        seats: 3,
        constituencies: [
          {
            id: "mayo-rey",
            name: "Mayo-Rey",
            seats: 3,
            subDivisions: "4 (Mandingring, Tcholliré, Touboro,Rey Bouba)",
            councils: 4,
            mps: [
              { id: "mayo-rey-bello-limane", name: "BELLO LIMANE", committee: "Committee on Cultural, Social and Family Affairs", party: "RDPC" },
              { id: "mayo-rey-fadimatou-sambo", name: "FADIMATOU SAMBO", party: "RDPC" },
              { id: "mayo-rey-bouba-moussa", name: "BOUBA MOUSSA", committee: "Committee on Education, Vocational Training and", party: "RDPC" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "north-west",
    name: "North-West",
    divisions: [
      {
        id: "boyo",
        name: "Boyo",
        seats: 2,
        constituencies: [
          {
            id: "boyo",
            name: "Boyo",
            seats: 2,
            subDivisions: "4 (Belo, Fonfuka, Fundong, Njinikom)",
            councils: 4,
            mps: [{ id: "boyo-njong-evaristus", name: "NJONG Evaristus", committee: "Committee on Resolutions and Petitions (Member)", party: "SDF" }, { id: "boyo-wainachi-honourine", name: "WAINACHI Honourine", committee: "Committee on Education, Vocational Training and", party: "SDF" }],
          },
        ],
      },
      {
        id: "bui",
        name: "Bui",
        seats: 4,
        constituencies: [
          {
            id: "bui-centre",
            name: "Bui-Centre",
            seats: 2,
            subDivisions: "3 (Kumbo,Mbiame,Nkum,)",
            councils: 3,
            mps: [{ id: "bui-centre-ngah-estella-shala", name: "NGAH Estella SHALA", committee: "Committee on Resolutions and Petitions (Member)", party: "RDPC" }, { id: "bui-centre-mbuwir-tobias", name: "MBUWIR Tobias", committee: "Committee on Cultural, Social and Family Affairs", party: "RDPC" }],
          },
          {
            id: "bui-ouest",
            name: "Bui-Ouest",
            seats: 1,
            subDivisions: "2 ( Elak,Nkor)",
            councils: 2,
            mps: [{ id: "bui-ouest-kwei-andrew-mngo", name: "KWEI Andrew MNGO", committee: "Committee on Finance and the Budget (Member)", party: "RDPC" }],
          },
          {
            id: "bui-sud",
            name: "Bui-Sud",
            seats: 1,
            subDivisions: "1 (Jakiri)",
            councils: 1,
            mps: [{ id: "bui-sud-lukong-fostine-fomuy", name: "LUKONG Fostine FOMUY", committee: "Committee on National Defence and Security (Member)", party: "RDPC" }],
          },
        ],
      },
      {
        id: "donga-mantung",
        name: "Donga-Mantung",
        seats: 4,
        constituencies: [
          {
            id: "donga-mantung-centre",
            name: "Donga-Mantung-Centre",
            seats: 2,
            subDivisions: "2(Ndu, Nkambé)",
            councils: 2,
            mps: [{ id: "donga-mantung-centre-mbongyor-naomi-ngando", name: "MBONGYOR NAOMI NGANDO", committee: "Committee on Education, Vocational Training and", party: "RDPC" }, { id: "donga-mantung-centre-ngala-gerard-ndombang", name: "NGALA GERARD NDOMBANG", committee: "Committee on Constitutional Laws, Human Rights", party: "RDPC" }],
          },
          {
            id: "donga-mantung-est",
            name: "Donga-Mantung-Est",
            seats: 1,
            subDivisions: "1 ( Nwa)",
            councils: 1,
            mps: [{ id: "donga-mantung-est-adamu-edward-lambe", name: "ADAMU Edward LAMBE", committee: "Committee on Economic Affairs, Planning and Re", party: "RDPC" }],
          },
          {
            id: "donga-mantung-ouest",
            name: "Donga-Mantung-Ouest",
            seats: 1,
            subDivisions: "2 (Ako, Misaje)",
            councils: 2,
            mps: [{ id: "donga-mantung-ouest-abe-michael-ndra", name: "ABE Michael NDRA", party: "RDPC" }],
          },
        ],
      },
      {
        id: "menchum",
        name: "Menchum",
        seats: 2,
        constituencies: [
          {
            id: "menchum-nord",
            name: "Menchum-Nord",
            seats: 1,
            subDivisions: "2 (Furu-Awa,Zhoa)",
            councils: 2,
            mps: [{ id: "menchum-nord-kum-john-nji", name: "KUM JOHN NJI", committee: "Committee on Cultural, Social and Family Affairs", party: "RDPC" }],
          },
          {
            id: "menchum-sud",
            name: "Menchum-Sud",
            seats: 1,
            subDivisions: "2(Benakuma,Wum)",
            councils: 2,
            mps: [{ id: "menchum-sud-wallang-richard", name: "WALLANG Richard", committee: "Committee on National Defence and Security (Secretary)", party: "RDPC" }],
          },
        ],
      },
      {
        id: "mezam",
        name: "Mezam",
        seats: 3,
        constituencies: [
          {
            id: "mezam-centre",
            name: "Mezam-Centre",
            seats: 1,
            subDivisions: "4 (Bamenda I, Bamenda II, Bamenda III, Bali)",
            councils: 4,
            mps: [{ id: "mezam-centre-manju-nestus-fru", name: "MANJU Nestus FRU", committee: "Foreign Affairs Committee (Member); Committee", party: "RDPC" }],
          },
          {
            id: "mezam-nord",
            name: "Mezam-Nord",
            seats: 1,
            subDivisions: "2 (Bafut, Tubah)",
            councils: 2,
            mps: [{ id: "mezam-nord-agho-oliver-bamenju", name: "AGHO Oliver BAMENJU", committee: "Committee on Economic Affairs, Planning and Re", party: "RDPC" }],
          },
          {
            id: "mezam-sud",
            name: "Mezam-Sud",
            seats: 1,
            subDivisions: "1 (Santa, )",
            councils: 1,
            mps: [{ id: "mezam-sud-kumase-simon-powoh", name: "KUMASE Simon POWOH", committee: "Committee on National Defence and Security (Member)", party: "RDPC" }],
          },
        ],
      },
      {
        id: "ngoketunjia",
        name: "Ngoketunjia",
        seats: 2,
        constituencies: [
          {
            id: "ngoketunjia-nord",
            name: "Ngoketunjia-Nord",
            seats: 1,
            subDivisions: "2 (Babessi,Ndop)",
            councils: 2,
            mps: [{ id: "ngoketunjia-nord-njingum-musa-mbutoh", name: "NJINGUM MUSA MBUTOH", committee: "Committee on Resolutions and Petitions (Member)", party: "RDPC" }],
          },
          {
            id: "ngoketunjia-sud",
            name: "Ngoketunjia-Sud",
            seats: 1,
            subDivisions: "1 ( Balikumbat)",
            councils: 1,
            mps: [{ id: "ngoketunjia-sud-banmi-emmanuel-dingha", name: "BANMI Emmanuel DINGHA", committee: "Foreign Affairs Committee (President)", party: "RDPC" }],
          },
        ],
      },
      {
        id: "momo",
        name: "Momo",
        seats: 3,
        constituencies: [
          {
            id: "momo-est",
            name: "Momo-Est",
            seats: 2,
            subDivisions: "2 (Batibo, Mbengwi)",
            councils: 2,
            mps: [{ id: "momo-est-injoh-fo-o-ngang-prudencia", name: "INJOH FO'O NGANG Prudencia", committee: "Committee on Education, Vocational Training and", party: "RDPC" }, { id: "momo-est-anyere-charles", name: "ANYERE Charles", committee: "Committee on National Defence and Security (Member)", party: "RDPC" }],
          },
          {
            id: "momo-ouest",
            name: "Momo-Ouest",
            seats: 1,
            subDivisions: "3 (Andek,Njikwa, Widikum-Boffe)",
            councils: 3,
            mps: [{ id: "momo-ouest-awutah-philip-atubah", name: "AWUTAH Philip ATUBAH", committee: "Committee on Resolutions and Petitions (Member)", party: "RDPC" }],
          },
        ],
      },
    ],
  },
  {
    id: "west",
    name: "West",
    divisions: [
      {
        id: "bamboutos",
        name: "Bamboutos",
        seats: 4,
        constituencies: [
          {
            id: "bamboutos",
            name: "Bamboutos",
            seats: 4,
            subDivisions: "4 (Babadjou, Batcham, Galim, Mbouda)",
            councils: 4,
            mps: [
              { id: "bamboutos-ghimbop-josephine-ep-simo", name: "GHIMBOP Josephine ep. SIMO", committee: "Committee on Constitutional Laws, Human Rights", party: "RDPC" },
              { id: "bamboutos-manfouo-david", name: "MANFOUO David", committee: "Committee on National Defence and Security (Member)", party: "RDPC" },
              { id: "bamboutos-tanefo-jean-marie", name: "TANEFO Jean-Marie", committee: "Committee on Constitutional Laws, Human Rights", party: "RDPC" },
              { id: "bamboutos-wa-mathurin", name: "WA Mathurin", committee: "Committee on National Defence and Security (Member)", party: "RDPC" },
            ],
          },
        ],
      },
      {
        id: "haut-nkam",
        name: "Haut-Nkam",
        seats: 3,
        constituencies: [
          {
            id: "haut-nkam",
            name: "Haut-Nkam",
            seats: 3,
            subDivisions: "7 (Babouantou, Bafang, Bafou, Bana, Bandja, Banka, Kékem)",
            councils: 7,
            mps: [
              { id: "haut-nkam-juimo-siewe-monthe-claude", name: "JUIMO SIEWE MONTHE Claude", committee: "Committee on Economic Affairs, Planning and Re", party: "RDPC" },
              { id: "haut-nkam-kwemo-pierre", name: "KWEMO Pierre", committee: "Committee on Finance and the Budget (Member)", party: "UMS" },
              { id: "haut-nkam-nguenkam-epse-tchouaga-ma", name: "NGUENKAM epse TCHOUAGA Ma", committee: "Committee on National Defence and Security (Secretary)", party: "UMS" },
            ],
          },
        ],
      },
      {
        id: "hauts-plateaux",
        name: "Hauts-Plateaux",
        seats: 2,
        constituencies: [
          {
            id: "hauts-plateaux",
            name: "Hauts-Plateaux",
            seats: 2,
            subDivisions: "4 (Baham, Bamendjou, Bangou, Batié)",
            councils: 4,
            mps: [{ id: "hauts-plateaux-datouo-theodore", name: "DATOUO Theodore", party: "RDPC" }, { id: "hauts-plateaux-ngoko-mambe-marie-louise", name: "NGOKO MAMBE Marie Louise", committee: "Committee on National Defence and Security (Member)", party: "RDPC" }],
          },
        ],
      },
      {
        id: "koung-khi",
        name: "Koung-Khi",
        seats: 2,
        constituencies: [
          {
            id: "koung-khi",
            name: "Koung-Khi",
            seats: 2,
            subDivisions: "3 (Pete Bandjoun, Depending, Bayangam, )",
            councils: 3,
            mps: [{ id: "koung-khi-kouinche-albert", name: "KOUINCHE Albert", committee: "Committee on Resolutions and Petitions (Member)", party: "RDPC" }, { id: "koung-khi-kam-colette-ep-sohaing", name: "KAM Colette ep. SOHAING", committee: "Committee on Economic Affairs, Planning and Re", party: "RDPC" }],
          },
        ],
      },
      {
        id: "menoua",
        name: "Menoua",
        seats: 5,
        constituencies: [
          {
            id: "menoua",
            name: "Menoua",
            seats: 5,
            subDivisions: "6 (Dschang, Fokoué, Fongo-Tongo, Nkong-Zem, Penka-Michel, S 6",
            mps: [
              { id: "menoua-mbakam-chouga-guillaume", name: "MBAKAM CHOUGA Guillaume", committee: "Committee on Production and Trade (President)", party: "RDPC" },
              { id: "menoua-ndongho-clement", name: "NDONGHO Clement", committee: "Foreign Affairs Committee (Member)", party: "RDPC" },
              { id: "menoua-kenfack-sonna-ngneguim-an", name: "KENFACK SONNA NGNEGUIM An", committee: "Committee on Production and Trade (Member)", party: "RDPC" },
              { id: "menoua-emabot-brigitte", name: "EMABOT Brigitte", committee: "Committee on Education, Vocational Training and", party: "RDPC" },
              { id: "menoua-tikobau-pierre-marie", name: "TIKOBAU Pierre Marie", committee: "Committee on Constitutional Laws, Human Rights", party: "RDPC" },
            ],
          },
        ],
      },
      {
        id: "mifi",
        name: "Mifi",
        seats: 2,
        constituencies: [
          {
            id: "mifi",
            name: "Mifi",
            seats: 2,
            subDivisions: "3 (Bafoussam I, Bafoussam II, Bafoussam III)",
            councils: 3,
            mps: [{ id: "mifi-toukam-angele-tela", name: "TOUKAM Angele Tela", committee: "Committee on Education, Vocational Training and", party: "RDPC" }, { id: "mifi-tsingang-flobert", name: "TSINGANG Flobert", committee: "Committee on National Defence and Security (Member)", party: "RDPC" }],
          },
        ],
      },
      {
        id: "nde",
        name: "Nde",
        seats: 2,
        constituencies: [
          {
            id: "nde",
            name: "Nde",
            seats: 2,
            subDivisions: "4 (Bangangté, Bassamba, Bazou, Tonga)",
            councils: 4,
            mps: [{ id: "nde-feutheu-jean-claude", name: "FEUTHEU Jean-Claude", committee: "Committee on Finance and the Budget (Secretary)", party: "RDPC" }, { id: "nde-tchagna-jaqueline-reve-angelin", name: "TCHAGNA Jaqueline Reve Angelin", committee: "Committee on Education, Vocational Training and", party: "RDPC" }],
          },
        ],
      },
      {
        id: "noun",
        name: "Noun",
        seats: 5,
        constituencies: [
          {
            id: "noun-centre-jiha-tankoua-epouse-peyou-odile-clarisse",
            name: "Noun-Centre Jiha Tankoua épouse Peyou Odile Clarisse",
            seats: 1,
            subDivisions: "8 (Bangourain, Foumban, Foumbot, Kouoptamo, Koutaba, Malen 8",
            mps: [{ id: "noun-centre-jiha-tankoua-epouse-peyou-odile-clarisse", name: "", party: "UDC" }],
          },
          {
            id: "noun-centre",
            name: "Noun-Centre",
            seats: 3,
            subDivisions: "8 (Bangourain, Foumban, Foumbot, Kouoptamo, Koutaba, Malentouen, Massangam, Njimom)",
            mps: [
              { id: "noun-centre-mbouangouere-rainatou-ep-m", name: "MBOUANGOUERE Rainatou ep. M", committee: "Committee on Cultural, Social and Family Affairs", party: "UDC" },
              { id: "noun-centre-ndam", name: "NDAM", committee: "Committee on Resolutions and Petitions (Secretary)", party: "UDC" },
              { id: "noun-centre-youmo-koupit-adamou", name: "YOUMO KOUPIT ADAMOU", committee: "Committee on Constitutional Laws, Human Rights", party: "UDC" },
            ],
          },
          {
            id: "noun-nord",
            name: "Noun-Nord",
            seats: 1,
            subDivisions: "1 (Magba)",
            councils: 1,
            mps: [{ id: "noun-nord-ngnegue-simon", name: "NGNEGUE Simon", committee: "Committee on Education, Vocational Training and", party: "RDPC" }],
          },
        ],
      },
    ],
  },
  {
    id: "south",
    name: "South",
    divisions: [
      {
        id: "dja-et-lobo",
        name: "Dja-et-Lobo",
        seats: 5,
        constituencies: [
          {
            id: "dja-et-lobo",
            name: "Dja-et-Lobo",
            seats: 5,
            subDivisions: "5 (BENGBIS, DJOUM, MEYOMESSALA,MEYOMESSI, MINTOM 5",
            mps: [
              { id: "dja-et-lobo-mvondo-assam-bonaventure", name: "MVONDO ASSAM Bonaventure", committee: "Committee on National Defence and Security (Vice-President)", party: "RDPC" },
              { id: "dja-et-lobo-ndoumou-nee-bekono-pauline", name: "NDOUMOU nee BEKONO Pauline", committee: "Committee on Cultural, Social and Family Affairs", party: "RDPC" },
              { id: "dja-et-lobo-mbe-assae-mendomo-theodore", name: "MBE ASSAE MENDOMO Theodore", committee: "Committee on Economic Affairs, Planning and Re", party: "RDPC" },
              { id: "dja-et-lobo-evina-ovambe-bernadette-ep-ab", name: "EVINA OVAMBE Bernadette ep. AB", committee: "Committee on Education, Vocational Training and", party: "RDPC" },
              { id: "dja-et-lobo-bindoua-mathurin-germain", name: "BINDOUA Mathurin Germain", committee: "Committee on Finance and the Budget (Member)", party: "RDPC" },
            ],
          },
        ],
      },
      {
        id: "mvila",
        name: "Mvila",
        seats: 3,
        constituencies: [
          {
            id: "mvila",
            name: "Mvila",
            seats: 3,
            subDivisions: "8 (Biwong-Bane, Biwong-Bulu, Ebolowa 1,Ebolowa 2, Efoulan, M 8",
            mps: [
              { id: "mvila-mendoua-nee-atangana-celine", name: "MENDOUA nee ATANGANA Celine", committee: "Committee on Production and Trade (Member)", party: "RDPC" },
              { id: "mvila-zam-jean-jacques-noel", name: "ZAM Jean Jacques Noel", committee: "Committee on Finance and the Budget (Member)", party: "RDPC" },
              { id: "mvila-mbeyo-o-josue", name: "MBEYO'O Josue", committee: "Foreign Affairs Committee (Member)", party: "RDPC" },
            ],
          },
        ],
      },
      {
        id: "ocean",
        name: "Ocean",
        seats: 2,
        constituencies: [
          {
            id: "ocean",
            name: "Ocean",
            seats: 2,
            subDivisions: "9 (Akom II, Bipindi, Campo, Kribi 1, Kribi 2,Lokoundje, Lolodorf, M 9",
            mps: [{ id: "ocean-biloa-tsila-zitha", name: "BILOA TSILA Zitha", committee: "Committee on Cultural, Social and Family Affairs", party: "RDPC" }, { id: "ocean-benae-serge-gabriel", name: "BENAE Serge Gabriel", committee: "Committee on Production and Trade (Secretary)", party: "RDPC" }],
          },
        ],
      },
      {
        id: "vallee-du-ntem",
        name: "Vallee-du-Ntem",
        seats: 1,
        constituencies: [
          {
            id: "vallee-du-ntem",
            name: "Vallee-du-Ntem",
            seats: 1,
            subDivisions: "4 (Ambam, Ma'an, Olamze, Kye -Ossi)",
            councils: 4,
            mps: [{ id: "vallee-du-ntem-mengue-mezui-germain-durand", name: "MENGUE MEZUI Germain Durand", committee: "Committee on Constitutional Laws, Human Rights", party: "RDPC" }],
          },
        ],
      },
    ],
  },
  {
    id: "south-west",
    name: "South-West",
    divisions: [
      {
        id: "fako",
        name: "Fako",
        seats: 4,
        constituencies: [
          {
            id: "buea-centre-urbain",
            name: "Buea Centre Urbain",
            seats: 1,
            subDivisions: "1 (Buea)",
            councils: 1,
            mps: [{ id: "buea-centre-urbain-donald-malomba-esembe", name: "DONALD MALOMBA ESEMBE", committee: "Committee on Constitutional Laws, Human Rights", party: "RDPC" }],
          },
          {
            id: "fako-est",
            name: "Fako-Est",
            seats: 2,
            subDivisions: "5 ( Limbe I, Limbe II, Limbe III, Muyuka, Tiko, )",
            councils: 5,
            mps: [{ id: "fako-est-etombi-ikome-gladys", name: "ETOMBI IKOME Gladys", committee: "Foreign Affairs Committee (Member)", party: "RDPC" }, { id: "fako-est-findi-stanley-mokondo", name: "FINDI STANLEY MOKONDO", committee: "Committee on Production and Trade (Member)", party: "RDPC" }],
          },
          {
            id: "fako-ouest",
            name: "Fako-Ouest",
            seats: 1,
            subDivisions: "1 ( Idenau )",
            councils: 1,
            mps: [{ id: "fako-ouest-monjowa-lifaka-emilia", name: "MONJOWA LIFAKA Emilia", party: "RDPC" }],
          },
        ],
      },
      {
        id: "meme",
        name: "Meme",
        seats: 2,
        constituencies: [
          {
            id: "kumba-centre-urbain",
            name: "Kumba Centre Urbain",
            seats: 1,
            subDivisions: "3 (Kumba I, Kumba II, Kumba III, )",
            councils: 3,
            mps: [{ id: "kumba-centre-urbain-lawson-tabot-bakia", name: "LAWSON TABOT BAKIA", committee: "Committee on Cultural, Social and Family Affairs", party: "RDPC" }],
          },
          {
            id: "meme-ouest",
            name: "Meme-Ouest",
            seats: 1,
            subDivisions: "2 ( Konye, Mbonge)",
            councils: 2,
            mps: [{ id: "meme-ouest-ekolle-peters", name: "EKOLLE Peters", committee: "Committee on National Defence and Security (Member)", party: "RDPC" }],
          },
        ],
      },
      {
        id: "kupe-manenguba",
        name: "Kupe-Manenguba",
        seats: 2,
        constituencies: [
          {
            id: "kupe-manenguba",
            name: "Kupe-Manenguba",
            seats: 2,
            subDivisions: "3 (Bangem, Tombel,Nguti)",
            councils: 3,
            mps: [{ id: "kupe-manenguba-fonge-fongouck-julius", name: "FONGE FONGOUCK Julius", committee: "Committee on Finance and the Budget (Member)", party: "RDPC" }, { id: "kupe-manenguba-cecilia-dione-epie-njumbe", name: "Cecilia DIONE EPIE NJUMBE", committee: "Committee on Economic Affairs, Planning and Re", party: "RDPC" }],
          },
        ],
      },
      {
        id: "lebialem",
        name: "Lebialem",
        seats: 1,
        constituencies: [
          {
            id: "lebialem",
            name: "Lebialem",
            seats: 1,
            subDivisions: "3 (Alou, Menji, Wabane)",
            councils: 3,
            mps: [{ id: "lebialem-ateawung-foju-bernard", name: "ATEAWUNG FOJU Bernard", committee: "Committee on Education, Vocational Training and", party: "RDPC" }],
          },
        ],
      },
      {
        id: "manyu",
        name: "Manyu",
        seats: 3,
        constituencies: [
          {
            id: "manyu",
            name: "Manyu",
            seats: 3,
            subDivisions: "4 (Akwaya, Eyumodjock, Mamfé, Tinto)",
            councils: 4,
            mps: [
              { id: "manyu-ebangha-epse-agborntui-joh", name: "EBANGHA epse AGBORNTUI Joh", committee: "Committee on Economic Affairs, Planning and Re", party: "RDPC" },
              { id: "manyu-teku-tanyi-teku", name: "TEKU TANYI TEKU", committee: "Foreign Affairs Committee (Member)", party: "RDPC" },
              { id: "manyu-aka-martin-tyoga", name: "AKA Martin TYOGA", committee: "Committee on National Defence and Security (Member)", party: "RDPC" },
            ],
          },
        ],
      },
      {
        id: "ndian",
        name: "Ndian",
        seats: 3,
        constituencies: [
          {
            id: "ndian",
            name: "Ndian",
            seats: 3,
            subDivisions: "9 (Bamuso, Dikome-Balue, Ekondo-Titi, Idabato, Isanguele, Kom 9",
            mps: [
              { id: "ndian-muyali-boya-mary-ep-meboka", name: "MUYALI BOYA Mary ep. MEBOKA", committee: "Committee on National Defence and Security (Member)", party: "RDPC" },
              { id: "ndian-njume-peter-ambang", name: "NJUME Peter AMBANG", committee: "Committee on Education, Vocational Training and", party: "RDPC" },
              { id: "ndian-ngalle-daniel-etongo", name: "NGALLE Daniel ETONGO", committee: "Committee on Economic Affairs, Planning and Re", party: "RDPC" },
            ],
          },
        ],
      },
    ],
  },
];