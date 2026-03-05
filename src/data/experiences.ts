// src/data/experiences.ts

export type Experience = {
  title: string; // poste
  slug: string;

  company: string;
  location?: string;

  // affichage
  period: string; // ex: "08-2022 → 08-2025"
  start?: string; // ISO-ish optionnel, utile si tu veux trier ensuite
  end?: string; // ISO-ish optionnel

  excerpt: string;
  tags?: string[];

  // contenu détaillé (page /experience ou section timeline)
  contexte?: string;

  // ✅ on les rend sûrs pour éviter les "possibly undefined"
  missions: string[];
  realisations?: string[];
  resultats?: string[];
  pointsCles?: string[];
};

export const experiences: Experience[] = [
  {
    title: "Reliability Maintenance Engineering Technician",
    slug: "amazon-reliability-maintenance-engineering-technician",
    company: "Amazon",
    location: "Belfort (Bourgogne-Franche-Comté)",
    period: "01-2026 → 02-2026",
    start: "2026-01",
    end: "2026-02",
    excerpt:
      "Maintenance corrective & préventive des installations logistiques, application stricte des procédures LOTO et reporting opérationnel.",
    tags: ["Maintenance", "Fiabilité", "LOTO", "APM", "Sécurité"],
    contexte:
      "Support terrain sur environnement intralogistique avec exigences élevées de sécurité, réactivité et traçabilité des interventions.",
    missions: [
      "Réalisation de maintenance corrective et préventive sur équipements logistiques.",
      "Application des procédures LOTO (consignation / déconsignation) et respect des standards sécurité.",
      "Reporting et suivi d’activité via APM.",
      "Coordination des entreprises extérieures lors d’interventions planifiées ou urgentes.",
    ],
    realisations: [
      "Standardisation des actions terrain via checklists / bonnes pratiques (sécurité + qualité).",
      "Amélioration de la qualité de passation d’informations (historique, symptômes, action, validation).",
    ],
    pointsCles: [
      "Sécurité / consignation",
      "Diagnostic terrain",
      "Traçabilité des actions",
      "Coordination sous-traitants",
    ],
  },

  {
    title: "Alternant Ingénieur Méthodes Maintenance",
    slug: "kiabi-alternant-ingenieur-methodes-maintenance",
    company: "Kiabi Logistique",
    location: "Lauwin-Planque",
    period: "08-2025 → 01-2026",
    start: "2025-08",
    end: "2026-01",
    excerpt:
      "Pilotage d’une mise en place progressive TPM, structuration de bases de données et déploiement d’indicateurs fiabilité en coordination Maintenance/Méthodes/IT.",
    tags: ["TPM", "Méthodes", "Data", "KPI", "Fiabilité", "Coordination IT"],
    contexte:
      "Mission orientée structuration et pilotage : fiabiliser la donnée, rendre les KPI actionnables, et initier une dynamique TPM sur le périmètre.",
    missions: [
      "Pilotage de la mise en place progressive de la TPM (cadre, priorités, routines).",
      "Développement de bases de données centralisées pour consolider les informations maintenance.",
      "Suivi budgétaire et contribution à l’arbitrage des actions (coût, impact, urgence).",
      "Création / suivi d’indicateurs de fiabilité (tendances, analyse, priorisation).",
      "Coordination Maintenance, Méthodes et IT pour les solutions de digitalisation.",
      "Management / pilotage des sous-traitants (planification, contrôle, réception).",
    ],
    realisations: [
      "Mise en cohérence des sources de données (terrain / GMAO / exports) afin de fiabiliser les KPI.",
      "Structuration d’une logique de pilotage : mesures → analyse → plan d’actions.",
    ],
    pointsCles: [
      "TPM progressive",
      "Pilotage transverse",
      "KPI fiabilité",
      "Data & standardisation",
      "Gestion sous-traitants",
    ],
  },

  {
    title: "Technicien Méthodes de Maintenance",
    slug: "kiabi-technicien-methodes-maintenance",
    company: "Kiabi Logistique",
    location: "Lauwin-Planque",
    period: "08-2022 → 08-2025",
    start: "2022-08",
    end: "2025-08",
    excerpt:
      "Interventions terrain (correctif/préventif), diagnostic & AMDEC, fiabilisation magasin pièces, digitalisation de la donnée et création d’indicateurs MTBF/MTTR/Disponibilité.",
    tags: [
      "Méthodes",
      "Fiabilité",
      "AMDEC",
      "MTBF",
      "MTTR",
      "Disponibilité",
      "Magasin",
      "Digitalisation",
    ],
    contexte:
      "Environnement intralogistique multi-constructeurs (trieurs, convoyeurs, cercleuses) avec enjeux forts de disponibilité et de standardisation.",
    missions: [
      "Maintenance corrective et préventive sur installations (trieurs DURKOPP, Savoye, TGW, Dematic).",
      "Diagnostic de pannes et analyse des causes (AMDEC / logique cause racine).",
      "Restructuration et fiabilisation des magasins de pièces de rechange (organisation, règles, fiabilité stock).",
      "Amélioration et création de gammes de maintenance (standard, fréquence, contrôles).",
      "Suivi budgétaire : visibilité, justification et priorisation des besoins.",
      "Suivi / coordination des intervenants extérieurs (qualité, délais, sécurité).",
      "Automatisation d’acquisition des données via pipelines pour basculer du “reporting” vers l’analyse et l’action.",
      "Création d’indicateurs MTBF, MTTR, Disponibilité sur cercleuses automatiques pour réduire les arrêts non programmés et optimiser les temps d’intervention.",
    ],
    realisations: [
      "Mise en place de KPI fiabilité (MTBF/MTTR/Dispo) et routines de suivi pour transformer les données en décisions.",
      "Structuration magasin : réduction des pertes de temps de recherche + amélioration de la disponibilité pièces.",
      "Standardisation gammes : meilleure reproductibilité des interventions préventives et qualité d’exécution.",
    ],
    resultats: [
      "Réduction des temps d’arrêts non-programmés sur cercleuses via pilotage MTBF/MTTR/Dispo.",
      "Données plus exploitables : analyses de tendance et priorisation des actions fiabilité.",
      "Magasin pièces plus fiable : moins de ruptures et interventions plus rapides.",
    ],
    pointsCles: [
      "Terrain + méthodes (double casquette)",
      "AMDEC / analyse causes",
      "KPI actionnables",
      "Structuration magasin pièces",
      "Digitalisation data maintenance",
    ],
  },

  {
    title: "Façadier",
    slug: "facadier-renovation-facades",
    company: "Rénovation façades",
    location: "Quiévrain",
    period: "04-2019 → 12-2020",
    start: "2019-04",
    end: "2020-12",
    excerpt:
      "Travaux de rénovation de façades : rejointoiement, sablage et traitement hydrofuge avec exigence de finition et sécurité chantier.",
    tags: ["BTP", "Rigueur", "Sécurité chantier", "Travail manuel"],
    missions: [
      "Rejointoiement et reprise de maçonnerie sur façades.",
      "Sablage et préparation des supports.",
      "Traitement hydrofuge et finitions.",
    ],
    pointsCles: ["Rigueur d’exécution", "Qualité finition", "Sécurité"],
  },

  {
    title: "Agent administratif",
    slug: "agent-administratif-commandement-forces-terrestres",
    company: "Commandement des forces terrestres",
    location: "Gué de Constantine",
    period: "03-2015 → 09-2018",
    start: "2015-03",
    end: "2018-09",
    excerpt:
      "Gestion administrative : traitement courrier, archivage, tenue de registres, communication interservices et management d’une petite équipe.",
    tags: ["Organisation", "Rigueur", "Communication", "Management"],
    missions: [
      "Traitement, gestion et distribution du courrier entrant et sortant.",
      "Archivage, tenue à jour de registres, gestion des appels téléphoniques.",
      "Communication avec les services et suivi administratif.",
      "Management d’une équipe de 3 personnes.",
    ],
    pointsCles: [
      "Organisation",
      "Fiabilité documentaire",
      "Management",
      "Communication",
    ],
  },
];