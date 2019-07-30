export default [
	{
		id: 0,
		title: 'MolochDAO',
		subtitle: 'A community DAO focused on funding Ethereum dev',
		status: 'active',
		tags: ['Funding', 'ETH 2.0'],
		team: [
			{
				name: 'Ameen Soleimani',
				twitter: 'ameensol'
			},
			{
				name: 'James Young',
				twitter: 'jamesyoung'
			},
			{
				name: 'Rahul Sethuram',
				twitter: 'RHLSTHRM'
			},
			{
				name: 'Layne Haber',
				twitter: 'LayneHaber'
			},
			{
				name: 'Arjun Bhuptani',
				twitter: 'Arjun_Bhuptani'
			}
		],
		assetsGoverned: 'The community decides that members to accept, in what proposals to work on and how to spend the crypto funds controlled by the DAO.',
		decentralizationLevel: 'Fully Decentralized',
		centralizationPoints: 'None',
		image: 'moloch.png',
		description: 'A community DAO focused on funding Ethereum development, in the name of Moloch the God of Coordination Failure.',
		website: `https://molochdao.com/`,
		blockchain: 'Ethereum',
		framework: 'Custom',
		contractProof: `https://twitter.com/MolochDAO/status/1121203264316268544`,
		contracts: [
			{
				name: 'Moloch',
				address: `0x1fd169a4f5c59acf79d0fd5d91d1201ef1bce9f1`,
				description: 'The main contract for the DAO'
			},
			{
				name: 'GuildBank',
				address: `0x211a94468ba1e379236b45ca42dc63ee93139c7e`,
				description: 'Contains all the funds for the DAO'
			}
		],
		audits: [
			{
				auditor: 'Nomic Labs',
				auditorWebsite: 'https://nomiclabs.io/',
				auditUrl: 'https://medium.com/nomic-labs-blog/moloch-dao-audit-report-f31505e85c70',
				auditDate: "14/02/2019"
			}
		],
		social: {
			github: 'https://github.com/MolochVentures',
			twitter: 'MolochDAO',
			medium: 'https://medium.com/molochdao',
			telegram: '',
			reddit: '',
			youtube: '',
			discord: '',
		},
		documents: [
			{
				title: "Whitepaper",
				url: 'https://github.com/MolochVentures/Whitepaper/blob/master/Whitepaper.pdf'
			}
		],
		articles: [
			{
				title: 'The Moloch DAO: Collapsing The Firm.',
				url: 'https://medium.com/@simondlr/the-moloch-dao-collapsing-the-firm-2a800b3aa2e7',
				date: '16/01/2019'
			}
		],
		podcasts: [
			{
				title: 'MolochDAO: Could This Decentralized Autonomous Organization Help Ethereum Scale Faster?',
				url: 'https://unchainedpodcast.com/molochdao-could-this-decentralized-autonomous-organization-help-ethereum-scale-faster/',
				date: '19/03/2019'
			},
			{
				title: 'MolochDAO and Ethereum Clients',
				url: 'https://www.stitcher.com/podcast/anchor-podcasts/membranlabs/e/58553712',
				date: '03/02/2019'
			},
			{
				title: 'Ameen Soleimani: Moloch DAO – A Simple Yet Unforgiving DAO to Fund Ethereum Development (#297)',
				url: 'https://www.youtube.com/watch?v=YgEXImQLoq4',
				date: '24/07/2019'
			}
		]
	},
	{
		id: 1,
		podcasts: [
			{
				title: 'Episode 9: Humanity DAO with Rich McAteer',
				url: 'https://anchor.fm/wizardofdapps/episodes/Episode-9-Humanity-DAO-with-Rich-McAteer-e4gdhe',
				date: '04/07/2019'
			}
		],
		title: 'HumanityDAO',
		subtitle: 'Humanity is a global identity network.',
		tags: ['TCR'],
		status: 'active',
		image: 'humanity.png',
		blockchain: 'Ethereum',
		framework: 'Custom',
		audits: [],
		articles: [
			{
				title: 'Introducing Humanity DAO',
				url: 'https://medium.com/marbleorg/introducing-humanity-90ddf9ead235',
				date: '09/05/2019'
			}
		],
		description: 'HumanityDAO is a standard for unique identity on Ethereum. The Humanity registry can serve as the foundation for Sybil-resistant protocols including Universal Basic Income, credit, democratic voting, and more.',
		website: `https://humanitydao.org/`,
		contractProof: `https://github.com/marbleprotocol/humanity`,
		documents: [],
		team: [],
		contracts: [
			{
				name: 'Humanity (ERC20)',
				address: `0xbbd1706d16418bb136e1497a73d3af4164586da0`,
				description: 'Token contract'
			},
			{
				name: 'HumanityGovernance',
				address: `0xdd806c4fdad2949a97fda79036cfbb8750181b37`,
				description: 'Deals with governance'
			},
			{
				name: 'HumanityRegistry',
				address: `0x4ee46dc4962c2c2f6bcd4c098a0e2b28f66a5e90`,
				description: 'Keeps track of all members.'
			},
			{
				name: 'Faucet',
				address: `0x2fe5e394a312acf9d18e8836f04ba92af29ad6d4`,
				description: 'Gives away free money'
			},
			{
				name: 'TwitterHumanityApplicant',
				address: `0x9d661f7773be14439b4223f5b516bc7ef67b0369`,
				description: 'Apply to the registry using Twitter as proof of identity'
			},
			{
				name: 'UniversalBasicIncome',
				address: `0x762d141b8d9600bde64138762e6fb38efc56dcba`,
				description: 'Manage claimable DAI by members of the registry'
			}
		],
		social: {
			github: 'https://github.com/marbleprotocol/humanity',
			twitter: 'HumanityDAO',
			medium: 'https://medium.com/marbleorg',
			telegram: '',
			reddit: 'HumanityDAO',
			discord: 'yvUqPUn',
		}
	},
	{
		id: 2,
		title: 'MakerDAO',
		subtitle: 'Transparent and sustainable finance',
		status: 'active',
		tags: ['Stablecoin'],
		image: 'maker.jpg',
		podcasts: [
			{
				title: 'POV Crypto Ep. 58-The Frontier of Dai, With Mariano Conti',
				url: 'https://medium.com/@TrustlessState/58-the-frontier-of-dai-with-mariano-conti-8e532cdc48a4',
				date: '17/06/2019'
			},
			{
				title: 'Hashing It Out #47: MakerDAO – Nik Kunkel',
				url: 'https://thebitcoinpodcast.com/hashing-it-out-47/',
				date: '31/05/2019'
			},
			{
				title: 'Software Engineering Daily: Stablecoins with Rune Christensen',
				url: 'https://softwareengineeringdaily.com/2019/04/03/stablecoins-with-rune-christensen/',
				date: '03/04/2019'
			},
			{
				title: 'ZeroKnowledgefm: Digging into DAI with Rune Christensen from Maker',
				url: 'https://www.zeroknowledge.fm/70',
				date: '27/03/2019'
			},
			{
				title: 'POV Crypto Podcast Episode 40 — Bitcoin Vs MakerDAO II',
				url: 'https://medium.com/@TrustlessState/pov-crypto-episode-40-bitcoin-vs-makerdao-ii-d71cce4f19b8',
				date: '26/03/2019'
			},
			{
				title: 'Stablecoins and What’s next for MakerDAO with Ashleigh Schap',
				url: 'https://limechain.tech/stable-coins-and-whats-next-for-makerdao/?',
				date: '21/03/2019'
			},
			{
				title: "How Maker Became Ethereum's Biggest Project - Rune Christensen (Founder, MakerDao)",
				url: 'https://blockcrunch.libsyn.com/how-maker-became-ethereums-biggest-project-rune-christensen-founder-makerdao',
				date: '11/02/2019'
			},
			{
				title: 'Unchained: Rune Christensen of MakerDAO Part 2: How Dai Stayed at $1 While ETH Crashed From $1,400 to $85 - Ep.105',
				url: 'https://overcast.fm/+LNqexSQnI',
				date: '05/02/2019'
			},
			{
				title: 'Unchained: Rune Christensen of MakerDAO Part 1: How to Keep a Crypto-Collateralized Stablecoin Afloat - Ep.104',
				url: 'https://overcast.fm/+LNqfe3mfk',
				date: '29/01/2019'
			}
		],
		team: [],
		audits: [
			{
				auditor: "Trail of Bits",
				auditorWebsite: "https://www.trailofbits.com/",
				auditUrl: "https://github.com/makerdao/audits/blob/master/mcd/trail-of-bits.pdf",
				auditDate: "23/03/2018"
			},
			{
				auditor: "WhiteHat Group",
				auditorWebsite: "https://addreth.space/address/whitehats.eth",
				auditUrl: "https://github.com/makerdao/audits/blob/master/scd/white-hat-group.pdf",
				auditDate: "15/12/2017"
			},
			{
				auditor: "Trail of Bits",
				auditorWebsite: "https://www.trailofbits.com/",
				auditUrl: "https://github.com/makerdao/audits/blob/master/scd/trail-of-bits.pdf",
				auditDate: "24/10/2017"
			},
			{
				auditor: "Bok Consulting",
				auditorWebsite: "https://www.bokconsulting.com.au/",
				auditUrl: "https://github.com/bokkypoobah/MakerDAOSaiContractAudit/tree/8dbefb06826c01082ff2fb9c368d30c0336733a1",
				auditDate: "21/06/2018"
			},
			{
				auditor: "Trail of Bits",
				auditorWebsite: "https://www.trailofbits.com/",
				auditUrl: "https://github.com/makerdao/audits/blob/master/dappsys/trail-of-bits.pdf",
				auditDate: "08/12/2017"
			}
		],
		description: 'Maker is a Decentralized Autonomous Organization that creates and insures the dai stablecoin on the Ethereum blockchain',
		website: `https://makerdao.com/`,
		contractProof: `https://github.com/makerdao/awesome-makerdao`,
		blockchain: 'Ethereum',
		framework: 'Custom',
		contracts: [
			{
				name: 'Maker',
				address: `0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2`,
				description: 'MKR token contract'
			}
		],
		social: {
			github: 'https://github.com/makerdao',
			twitter: 'MakerDAO',
			medium: 'https://medium.com/makerdao',
			telegram: 'https://t.me/makerdaoofficial',
			reddit: 'MakerDAO',
			rocketchat: 'https://chat.makerdao.com/home',
			discord: '',
		},
		articles: [],
		documents: [
			{
				title: "Whitepaper",
				url: 'https://makerdao.com/whitepaper/'
			}
		]
	},
	{
		id: 3,
		podcasts: [
			{
				title: 'Ep.43 – ‘Mutualisation’ of insurance through blockchain – insights from Nexus Mutual',
				url: 'https://www.insureblocks.com/ep-43-mutualisation-of-insurance-through-blockchain-insights-from-nexus-mutual/',
				date: '27/01/2019'
			},
			{
				title: 'An introduction to Blockchain and Nexus Mutual',
				url: 'https://www.listennotes.com/podcasts/network-of/an-introduction-to-GXWnhv0qU8H/',
				date: '19/10/2018'
			},
			{
				title: 'Base Layer Episode 050 - Hugh Karp (Nexus Mutual)',
				url: 'https://www.stitcher.com/podcast/david-nage/base-layer/e/62573603',
				date: '15/07/2019'
			}
		],
		title: 'NexusMutual',
		subtitle: 'A people-powered alternative to insurance',
		status: 'active',
		audits: [
			{
				auditor: 'Solidified',
				auditorWebsite: 'https://solidified.io/',
				auditUrl: 'https://www.scribd.com/document/411077416/Solidified-Audit-Report-Nexus-Mutual-20-05-2019',
				auditDate: "20/05/2019"
			}
		],
		team: [],
		image: 'nexus_mutual.jpg',
		blockchain: 'Ethereum',
		framework: 'Custom',
		description: 'Nexus Mutual is building a decentralised alternative to insurance. We’re using blockchain technology to build a mutual (a risk sharing pool) to return the power of insurance to the people. The platform will be built on the Ethereum public chain. It will allow anyone to become a member and buy cover. It replaces the idea of a traditional insurance company, because it is wholly owned by the members. The model encourages engagement as members will get economic incentives for participating in Risk Assessment, Claims Assessment and Governance.',
		website: `https://nexusmutual.gitbook.io/docs/`,
		contractProof: `https://nexusmutual.gitbook.io/docs/docs#deployed-contract-information-deployed-23-may-2019`,
		contracts: [
			{
				name: 'claimData',
				address: `0xdc2d359f59f6a26162972c3bd0cfbfd8c9ef43af`,
				description: ''
			},
			{
				name: 'claim1',
				address: `0x58676340f458b36997608672be6548c92ce50714`,
				description: ''
			},
			{
				name: 'claimsReward',
				address: `0xebdd9752be578c03491ff1083c0f738aa8687d48`,
				description: ''
			},
			{
				name: 'dai',
				address: `0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359`,
				description: ''
			},
			{
				name: 'Governance',
				address: `0x4A5C681dDC32acC6ccA51ac17e9d461e6be87900`,
				description: ''
			},
			{
				name: 'mcr',
				address: `0xccb40a11aa8c5dfafaa9de9311fe7bd47d0bade7`,
				description: ''
			},
			{
				name: 'memberRoles',
				address: `0x055CC48f7968FD8640EF140610dd4038e1b03926`,
				description: ''
			},
			{
				name: 'NXMaster',
				address: `0x08c3a887865684f30351a0ba6d683aa9b539829a`,
				description: ''
			},
			{
				name: 'NXMtoken',
				address: `0xd7c49cee7e9188cca6ad8ff264c1da2e69d4cf3b`,
				description: ''
			},
			{
				name: 'pool1',
				address: `0xfd61352232157815cf7b71045557192bf0ce1884`,
				description: ''
			},
			{
				name: 'pool2',
				address: `0x7cbe5682be6b648cc1100c76d4f6c96997f753d6`,
				description: ''
			},
			{
				name: 'ProposalCategory',
				address: `0x888eA6Ab349c854936b98586CE6a17E98BF254b2`,
				description: ''
			},
			{
				name: 'poolData',
				address: `0x25916c331797ba10601e1f05a1da0b425302f5a2`,
				description: ''
			},
			{
				name: 'quotationData',
				address: `0x1776651f58a17a50098d31ba3c3cd259c1903f7a`,
				description: ''
			},
			{
				name: 'quotation',
				address: `0x9dae0663f252d05314b7352403fa9c16f16f25ee`,
				description: ''
			},
			{
				name: 'tokenController',
				address: `0x5407381b6c251cFd498ccD4A1d877739CB7960B8`,
				description: ''
			},
			{
				name: 'tokenData',
				address: `0xe20b3ae826cdb43676e418f7c3b84b75b5697a40`,
				description: ''
			},
			{
				name: 'tokenFunction',
				address: `0xdf50a17bf58dea5039b73683a51c4026f3c7224e`,
				description: ''
			},
		],
		social: {
			github: 'https://github.com/somish/NexusMutual',
			twitter: 'nexusmutual',
			medium: 'https://medium.com/nexus-mutual',
			telegram: '',
			reddit: '',
			discord: 'DwtQuSD',
			email: 'info@nexusmutual.io'
		},
		articles: [],
		documents: [
			{
				title: "Whitepaper",
				url: 'https://www.nexusmutual.io/assets/docs/nmx_white_paperv2_3.pdf'
			}
		],
		tags: []
	},
	{
		id: 4,
		podcasts: [
			{
				title: 'Dispute Resolution - William George of Kleros.io',
				url: 'https://www.youtube.com/watch?v=_Rf-KWJwzS8',
				date: '07/01/2019'
			},
			{
				title: 'Kleros, Decentralized Arbitration Dispute Resolution via Smart Contracts',
				url: 'https://player.fm/series/david-bovills-listen-later/guest-kleros-decentralized-arbitration-dispute-resolution-via-smart-contracts',
				date: '11/04/2018'
			}
		],
		title: 'Kleros',
		subtitle: 'The Blockchain Dispute Resolution Layer',
		status: 'active',
		audits: [],
		image: 'kleros.jpg',
		blockchain: 'Ethereum',
		framework: 'Custom',
		description: 'A decentralized autonomous organization that delivers fast, affordable and transparent justice for all.',
		website: `https://kleros.io/`,
		contractProof: ``,
		team: [],
		contracts: [
			{
				name: 'Kleros',
				address: `0x211f01e59b425253c0a0e9a7bf612605b42ce82c`,
				description: ''
			},
			{
				name: 'Kleros Liquid',
				address: `0x988b3a538b618c7a603e1c11ab82cd16dbe28069`,
				description: ''
			},
			{
				name: 'Kleros Liquid Extra Views',
				address: `0xda47f3252bb03c5c7950d7bb2fd32637fc5ad943`,
				description: ''
			},
			{
				name: 'Pinakion Address',
				address: `0x93ed3fbe21207ec2e8f2d3c3de6e058cb73bc04d`,
				description: ''
			},
			{
				name: 'Policy Exchange',
				address: `0x03a9458d77dd705829fa758c64dbe770385295cc`,
				description: ''
			},
			{
				name: 'Uniswap Exchange',
				address: `0xF506828B166de88cA2EDb2A98D960aBba0D2402A`,
				description: ''
			}
		],
		social: {
			github: 'https://github.com/kleros',
			twitter: 'Kleros_io',
			medium: 'https://medium.com/kleros',
			telegram: 'https://t.me/kleros',
			reddit: 'Kleros',
			discord: '',
			blog: `https://blog.kleros.io/`,
			discourse: "https://forum.kleros.io/"
		},
		articles: [],
		documents: [
			{
				title: "Whitepaper",
				url: `https://kleros.io/assets/whitepaper.pdf`
			}
		],
		tags: []
	},
	{
		id: 5,
		podcasts: [],
		title: 'Metacartel',
		subtitle: 'Ethereum’s grassroot dapp alliance',
		status: 'active',
		audits: [],
		image: 'metacartel.png',
		blockchain: 'Ethereum',
		framework: 'Moloch Fork',
		description: 'MetaCartel DAO is a not for profit grants DAO that aims to fund and support projects that are looking to advance usability, UX or further experiment with new Web 3.0 use cases.',
		website: `https://www.metacartel.org/`,
		contractProof: `https://twitter.com/meta_cartel/status/1151137914950017024`,
		team: [],
		contracts: [
			{
				name: 'DAO contract',
				address: `0x0372f3696fa7dc99801f435fd6737e57818239f2`,
				description: 'The main contract for the DAO'
			},
			{
				name: 'DAO Bank contract',
				address: `0x93d2a6369d57fdf8d1c3db22a5eb4623e26a24ae`,
				description: `Contains the DAO's funds.`
			}
		],
		social: {
			github: 'https://github.com/metacartel',
			twitter: 'meta_cartel',
			medium: 'https://medium.com/metacartel',
			telegram: 'https://t.me/metacartel',
			reddit: 'MetaCartel',
			discord: '',
			discourse: 'https://forum.metacartel.org/'
		},
		articles: [],
		documents: [],
		tags: []
	},
	{
		id: 6,
		podcasts: [],
		title: 'YangDAO',
		subtitle: `DAO to help Andrew Yang's 2020 election campaign`,
		status: 'active',
		audits: [],
		image: 'yangdao.jpg',
		blockchain: 'Ethereum',
		framework: 'Moloch Fork',
		description: `A place where members secure the collective bag 💰 to fund initiatives to foster Andrew Yang's presidential campaign.`,
		website: `https://www.yangdao.org/`,
		team: [],
		contractProof: `https://twitter.com/YangDAOofficial/status/1154047687588581378`,
		contracts: [
			{
				name: 'DAO contract',
				address: `0xB3C02F093E6140Ed2ad91Be66B302F938cd8434f`,
				description: 'The main contract for the DAO'
			},
			{
				name: 'DAO Bank',
				address: `0x75227641D30Dd5134088746ED785A998Cf43B36b`,
				description: 'Holds the DAO funds'
			}
		],
		social: {
			github: '',
			twitter: 'yangdaoofficial',
			medium: 'https://medium.com/yangdao',
			telegram: '',
			reddit: '',
			discord: '',
		},
		articles: [],
		documents: [],
		tags: []
	},
	{
		id: 7,
		podcasts: [
			{
				title: '#271 Martin Köppelmann & Matan Field: How the dxDAO could become the world’s largest organization',
				url: 'https://castro.fm/episode/GXbCid',
				date: '24/01/2019'
			}
		],
		title: 'dxDAO',
		subtitle: 'Managing DutchX exchange protocol',
		status: 'active',
		team: [],
		audits: [
			{
				auditor: 'Solidified',
				auditorWebsite: 'https://solidified.io/',
				auditUrl: 'https://dutchx.readthedocs.io/en/latest/_static/docs/DutchX_1.0_Audit%20Report.pdf',
				auditDate: '29/03/2018'
			},
			{
				auditor: 'Solidified',
				auditorWebsite: 'https://solidified.io/',
				auditUrl: 'https://dutchx.readthedocs.io/en/latest/_static/docs/DutchX_2.0_Audit%20Report.pdf',
				auditDate: '04/02/2019'
			},
			{
				auditor: 'Solidified',
				auditorWebsite: 'https://solidified.io/',
				auditUrl: 'https://github.com/gnosis/dx-price-oracle/blob/develop/docs/audit_report/Solidified_Audit_Report.pdf',
				auditDate: '04/02/2019'
			}
		],
		image: 'dxdao.png',
		blockchain: 'Ethereum',
		framework: 'DAOStack',
		description: 'The dxDAO is a next-generation decentralized autonomous organization (DAO) for community governance of software protocols. Its specific usecase is managing the DutchX decentralized exchange protocol.',
		website: `https://dxdao.daostack.io/`,
		contractProof: `https://github.com/gnosis/dx-daostack`,
		contracts: [
			{
				name: 'Avatar',
				address: `0x519b70055af55A007110B4Ff99b0eA33071c720a`,
				description: 'Main address for the DAO. Ethereum identity'
			},
			{
				name: 'Token',
				address: `0x643b14F6EA235668278DA5974930105852F2B7C4`,
				description: `dxDAO's own token`
			},
			{
				name: 'Reputation',
				address: `0x7a927A93F221976AAE26d5D077477307170f0b7c`,
				description: 'Voting power for dxDAO proposals	'
			},
			{
				name: 'Controller',
				address: `0x9f828AC3baA9003e8a4e0b24bcaE7b027B6740b0`,
				description: 'dxDAO controller	'
			},
			{
				name: 'Genesis Protocol',
				address: `0x332B8C9734b4097dE50f302F7D9F273FFdB45B84`,
				description: 'Holographic Consensus voting machine for voting on proposals'
			}
		],
		social: {
			github: '',
			twitter: '',
			medium: '',
			telegram: 'https://t.me/dxDAO',
			reddit: '',
			discord: '',
			daotalk: "https://daotalk.org/c/daos/dx-dao"
		},
		articles: [],
		documents: [
			{
				title: "Whitepaper",
				url: "https://github.com/gnosis/dx-daostack/blob/master/dxdao_whitepaper_v1.pdf"
			},
			{
				title: "Genesis Protocol",
				url: "https://docs.google.com/document/d/1b3UXvIDjxTVjS1nZNAn0umSY4DT5Y1yJeNHg07ny_5k/edit#"
			},
			{
				title: "DxDAO Resources",
				url: "https://docs.google.com/document/d/1PIgWibaN1n1UF3oMx-Ca-ebFK8tHmT2JVQbOC_xSQSg/edit"
			}
		],
		tags: []
	},
	{
		id: 8,
		podcasts: [
			{
				title: '#237 Matan Field: DAOstack – An Operating System for Collective Intelligence',
				url: 'https://www.youtube.com/watch?v=zbn_W9b24SM',
				date: '31/05/2018'
			}
		],
		title: 'GenesisDAO',
		subtitle: `DAOstack's native DAO`,
		status: 'active',
		audits: [],
		image: 'genesis.jpg',
		blockchain: 'Ethereum',
		framework: 'DAOStack',
		description: `Genesis is an independent, global community of people working together to build and promote Decentralized Autonomous Organizations (DAOs). It is the first of a growing number of DAOs built on the DAO stack.`,
		website: `https://daostack.io/genesis`,
		contractProof: ``,
		contracts: [
			{
				name: 'Genesis DAO Avatar',
				address: `0x294f999356ed03347c7a23bcbcf8d33fa41dc830`,
				description: `Genesis DAO's main contract`
			},
			{
				name: 'Token',
				address: `0x543ff227f64aa17ea132bf9886cab5db55dcaddf`,
				description: `Genesis DAO's own token`
			},
			{
				name: 'GenesisProtocol',
				address: `0x374026A48D777CB0FFdCCdB9a919c0Aa7cE8a0fc`,
				description: `Genesis DAO's own token`
			}
		],
		social: {
			github: '',
			twitter: '',
			medium: '',
			telegram: '',
			reddit: '',
			daotalk: 'https://daotalk.org/c/daos/genesis',
			discord: '',
		},
		articles: [],
		documents: [
			{
				title: "Whitepaper",
				url: 'https://daostack.io/wp/DAOstack-White-Paper-en.pdf'
			},
			{
				title: "Genesis Protocol",
				url: "https://docs.google.com/document/d/1b3UXvIDjxTVjS1nZNAn0umSY4DT5Y1yJeNHg07ny_5k/edit#"
			}
		],
		team: [],
		tags: []
	},
	{
		id: 9,
		podcasts: [],
		title: 'PolkaDAO',
		subtitle: 'Funding community projects in Polkadot',
		status: 'active',
		audits: [],
		image: 'polkadot.jpg',
		blockchain: 'Ethereum',
		framework: 'DAOStack',
		description: ' PolkaDAO is a user-led platform for the Polkadot community, offering funding for projects and ideas that would otherwise not get built.',
		website: `https://alchemy.daostack.io/dao/0x440583455bcd85ab2bd429c015d3aabcae135f0a`,
		contractProof: ``,
		contracts: [
			{
				name: 'Avatar',
				address: `0x440583455bcd85ab2bd429c015d3aabcae135f0a`,
				description: `The main PolkaDAO contract.`
			}
		],
		social: {
			github: '',
			twitter: '',
			medium: '',
			telegram: '',
			reddit: '',
			daotalk: "https://daotalk.org/c/daos/polkadao",
			discord: 'EuqreF4',
		},
		articles: [
			{
				title: `Announcing PolkaDAO: Fund Your Project!`,
				url: `https://polkadot.network/announcing-polkadao-fund-your-project/`,
				date: '16/05/2019'
			}
		],
		documents: [,
			{
				title: "Genesis Protocol",
				url: "https://docs.google.com/document/d/1b3UXvIDjxTVjS1nZNAn0umSY4DT5Y1yJeNHg07ny_5k/edit#"
			}
		],
		team: [],
		tags: []
	},
	{
		id: 10,
		podcasts: [],
		title: 'CuraDAO',
		subtitle: 'Community DAO in Curaçao.',
		status: 'active',
		audits: [],
		image: 'curadao.png',
		blockchain: 'Ethereum',
		framework: 'DAOStack',
		description: 'Introducing, CuraDAO, the first ever DAO in the Caribbean. Cura referring to the beautiful island of Curaçao and DAO stands for, Decentralized Autonomous Organization. The project will be run as a pilot for the duration of 6 months, mainly to test out what this new form of organization could mean for Curaçao.',
		website: `https://alchemy.daostack.io/dao/0x0b93ba560283350d4216f29dc57e15df38d0eace`,
		contractProof: ``,
		contracts: [
			{
				name: 'Avatar',
				address: `0x0b93ba560283350d4216f29dc57e15df38d0eace`,
				description: `The main CuraDAO contract`
			}
		],
		social: {
			github: '',
			twitter: 'Cura_DAO',
			medium: 'https://medium.com/caribbean-blockchain-network',
			telegram: '',
			reddit: '',
			daotalk: 'https://daotalk.org/c/daos/curacao',
			discord: '',
			youtube: 'https://www.youtube.com/channel/UCAx2VzjvbTffPrH2RvlDqNg'
		},
		articles: [],
		documents: [
			{
				title: "Genesis Protocol",
				url: "https://docs.google.com/document/d/1b3UXvIDjxTVjS1nZNAn0umSY4DT5Y1yJeNHg07ny_5k/edit#"
			}
		],
		team: [],
		tags: []
	},
	{
		id: 11,
		podcasts: [],
		title: 'efxDAO',
		subtitle: 'Meritocratic funding for Ethfinex community',
		status: 'active',
		audits: [],
		image: 'ethfinex.jpg',
		blockchain: 'Ethereum',
		framework: 'DAOStack',
		description: 'A collaboration between Ethfinex and DAOstack to create an experimental funding DAO. Using the Alchemy interface and governance protocol, the efxDAO has been allocated a trial budget of $5,000 and initially tasked with making meritocratic funding decisions for Ethfinex Trustless and Nectar initiatives.',
		website: `https://alchemy.daostack.io/dao/0x3324b516df92e78463d8b0616dd146cf6c58b0b9`,
		contractProof: ``,
		contracts: [
			{
				name: 'Avatar',
				address: `0x3324b516df92e78463d8b0616dd146cf6c58b0b9`,
				description: `The main efxDAO contract`
			}
		],
		social: {
			github: '',
			twitter: '',
			medium: '',
			telegram: '',
			reddit: '',
			discord: '',
		},
		articles: [
			{
				title: `Ethfinex Launches Funding DAO`,
				url: `https://blog.ethfinex.com/ethfinex-launches-funding-dao/`,
				date: '01/06/2019'
			}
		],
		documents: [
			{
				title: "Genesis Protocol",
				url: "https://docs.google.com/document/d/1b3UXvIDjxTVjS1nZNAn0umSY4DT5Y1yJeNHg07ny_5k/edit#"
			}
		],
		team: [],
		tags: []
	},
	{
		id: 12,
		podcasts: [
			{
				title: 'FTP051: Vít Jedlička - Liberland: Prototype For a Decentralized State',
				url: 'https://www.listennotes.com/podcasts/future-thinkers/ftp051-v%C3%ADt-jedli%C4%8Dka-ZF89OvmuIMA/',
				date: '07/04/2018'
			}
		],
		title: 'Liberland DAO',
		subtitle: 'Decentralized Autonomous Government',
		status: 'active',
		audits: [],
		image: 'liberland.jpg',
		blockchain: 'Ethereum',
		framework: 'DAOStack',
		description: '',
		website: `https://liberland.org/en/`,
		contractProof: ``,
		contracts: [
			{
				name: 'Avatar',
				address: `0x5c309e9b2134d931b7337abcfbe2a50ff31292f7`,
				description: `Main Liberland DAO contract`
			}
		],
		social: {
			github: 'https://github.com/liberland/liberland',
			twitter: 'Liberland_org',
			medium: '',
			telegram: 'https://t.me/liberlanders',
			reddit: 'Liberland',
			discord: '2tKVhss',
		},
		articles: [],
		documents: [
			{
				title: "Genesis Protocol",
				url: "https://docs.google.com/document/d/1b3UXvIDjxTVjS1nZNAn0umSY4DT5Y1yJeNHg07ny_5k/edit#"
			}
		],
		team: [],
		tags: []
	},
	{
		id: 13,
		podcasts: [],
		title: 'Prague DAO',
		subtitle: 'The first incubator governed by the community',
		status: 'active',
		audits: [],
		image: 'praguedao.jpg',
		blockchain: 'Ethereum',
		framework: 'DAOStack',
		description: 'The PragueDAO is the first example of a DAO powered by DAOstack used to govern a physical space, and aspires to be the incubator of choice for decentralized tech startups in Prague.',
		website: `https://praguedao.com/`,
		contractProof: ``,
		contracts: [],
		social: {
			github: '',
			twitter: 'praguedao',
			medium: '',
			telegram: 'https://t.me/DisruptDigital',
			reddit: '',
			daotalk: 'https://daotalk.org/c/daos/prague',
			discord: 'qXCxwSH',
		},
		articles: [
			{
				title: `Indroducing The PragueDAO`,
				url: `https://medium.com/daostack/introducing-the-praguedao-9930e6b3801`,
				date: '24/06/2019'
			}
		],
		documents: [
			{
				title: "Genesis Protocol",
				url: "https://docs.google.com/document/d/1b3UXvIDjxTVjS1nZNAn0umSY4DT5Y1yJeNHg07ny_5k/edit#"
			}
		],
		team: [],
		tags: []
	},
	{
		id: 14,
		podcasts: [],
		title: 'Quest Society',
		subtitle: 'Creating the mutual benefit societies of the future',
		status: 'active',
		audits: [],
		image: 'socialevolution.jpg',
		blockchain: 'Ethereum',
		framework: 'DAOStack',
		description: 'Social Evolution’s Quest Society is a self-governing benefit society for leaders in the decentralist movement.',
		website: `http://socialevolution.io/`,
		contractProof: ``,
		contracts: [],
		social: {
			github: '',
			twitter: 'socialevol',
			medium: 'https://medium.com/social-evolution',
			telegram: '',
			reddit: '',
			discord: '',
			email: 'hello@social-evolution.com'
		},
		articles: [],
		documents: [
			{
				title: "Whitepaper",
				url: 'https://drive.google.com/file/d/1u9gogbXcnAtivST_y7qhJFTL3cd1ZfOf/view?source=post_page---------------------------'
			},
			{
				title: "Genesis Protocol",
				url: "https://docs.google.com/document/d/1b3UXvIDjxTVjS1nZNAn0umSY4DT5Y1yJeNHg07ny_5k/edit#"
			}
		],
		team: [],
		tags: []
	},
	{
		id: 15,
		podcasts: [],
		title: 'KyberDAO Exp #2',
		subtitle: 'Kyber Protocol DAO',
		status: 'active',
		audits: [],
		image: 'kybernetwork.jpg',
		blockchain: 'Ethereum',
		framework: 'DAOStack',
		description: 'The second experiment from Kyber Network to run a DAO to help manage the protocol. It runs using Blockstack.',
		website: `https://alchemy.daostack.io/dao/0x6bee9b81e434f7afce72a43a4016719315069539`,
		contractProof: `https://twitter.com/KyberNetwork/status/1142068655758270465`,
		contracts: [
			{
				name: 'Avatar',
				address: `0x6bee9b81e434f7afce72a43a4016719315069539`,
				description: `Main KyberDAO contract`
			}
		],
		social: {
			github: 'https://github.com/kybernetwork',
			twitter: 'KyberNetwork',
			medium: 'https://blog.kyber.network/',
			telegram: 'https://t.me/joinchat/GS0ljBLOtCv_FlzFHYuPHg',
			reddit: 'kybernetwork',
			discord: '',
		},
		articles: [],
		documents: [
			{
				title: "Genesis Protocol",
				url: "https://docs.google.com/document/d/1b3UXvIDjxTVjS1nZNAn0umSY4DT5Y1yJeNHg07ny_5k/edit#"
			}
		],
		team: [],
		tags: []
	},
	{
		id: 16,
		podcasts: [],
		title: 'dHack',
		subtitle: 'Decentralized Hackathon',
		status: 'active',
		audits: [],
		image: 'dhack.jpg',
		blockchain: 'Ethereum',
		framework: 'DAOStack',
		description: 'dHack is a new type of hackathon: one that honors the values of decentralization, boosts the collective engagement of all stakeholders, and leverages the wisdom of the crowd. This decentralized hackathon (dHack) —is focused on funding continuity, allowing participating teams to continue work on their hackathon projects. The decision-making process will be stakeholder driven, incorporating sponsors, participants, worldwide spectators and community members to reach consensus as to which projects should receive such funding in continuity.',
		website: `https://www.dhack.io/`,
		contractProof: ``,
		contracts: [],
		articles: [
			{
				title: `Introducing dHack — A Decentralized Hackathon.`,
				url: `https://medium.com/daostack/introducing-dhack-a-decentralized-hackathon-e013f76821ca`,
				date: '05/06/2019'
			}
		],
		social: {
			github: '',
			twitter: 'dHack0',
			medium: '',
			telegram: 'https://t.me/dHack0',
			reddit: '',
			discord: '',
		},
		documents: [
			{
				title: "Genesis Protocol",
				url: "https://docs.google.com/document/d/1b3UXvIDjxTVjS1nZNAn0umSY4DT5Y1yJeNHg07ny_5k/edit#"
			}
		],
		team: [],
		tags: []
	},
	{
		id: 17,
		podcasts: [],
		title: 'Psychedelic Society DAO',
		subtitle: 'Creating a more joyful world through psychedelics',
		status: 'active',
		audits: [],
		image: 'psychedelic_society.png',
		blockchain: 'Ethereum',
		framework: 'DAOStack',
		description: 'A DAO to manage part of the membership donations of the Psychedelic Society.',
		website: `https://psychedelicsociety.org.uk/`,
		contractProof: ``,
		contracts: [
			{
				name: 'Avatar',
				address: `0x70c36947837b43665ed5ea85c112aa0f72cf9fb3`,
				description: `The main Psychedelic Society DAO contract`
			}
		],
		social: {
			github: '',
			twitter: 'PsychedelicsUK',
			medium: '',
			telegram: '',
			reddit: '',
			discord: '',
		},
		articles: [],
		documents: [
			{
				title: "Genesis Protocol",
				url: "https://docs.google.com/document/d/1b3UXvIDjxTVjS1nZNAn0umSY4DT5Y1yJeNHg07ny_5k/edit#"
			}
		],
		team: [],
		tags: []
	},
	{
		id: 18,
		podcasts: [],
		title: 'CementDAO',
		subtitle: 'Stablecoin Registry',
		status: 'active',
		audits: [],
		image: 'cement.jpg',
		blockchain: 'Ethereum',
		framework: 'DAOStack',
		description: 'CementDAO brings together the stablecoin community to create one unified stablecoin ecosystem. Stable cryptocurrencies are needed for mass adoption. There are over 150+ different stablecoins, each with their own user base, leading to a fragmented ecosystem. CementDAO unifies the ecosystem by bringing these users together.',
		website: `https://www.cementdao.com/`,
		contractProof: ``,
		contracts: [
			{
				name: 'Avatar',
				address: `0x33658686cbefe289b55814d0b3f3d45de6c50fd9`,
				description: `The main CementDAO contract`
			}
		],
		social: {
			github: '',
			twitter: 'CementDAO',
			medium: 'https://medium.com/cementdao',
			telegram: 'https://t.me/cementdao',
			reddit: '',
			discord: '',
		},
		articles: [],
		documents: [
			{
				title: "Genesis Protocol",
				url: "https://docs.google.com/document/d/1b3UXvIDjxTVjS1nZNAn0umSY4DT5Y1yJeNHg07ny_5k/edit#"
			}
		],
		team: [],
		tags: []
	},
	{
		id: 19,
		podcasts: [],
		title: 'dOrg',
		subtitle: 'Enabling Decentralized Organizations',
		status: 'active',
		audits: [],
		image: 'dorg.jpg',
		blockchain: 'Ethereum',
		framework: 'DAOStack',
		description: 'dOrg is a cooperative of freelancers building tools for distributed organizations',
		website: ``,
		contractProof: ``,
		contracts: [
			{
				name: 'Avatar',
				address: `0xbe1a98d3452f6da6e0984589e545d4fc25af7526`,
				description: `The main contract for dOrg DAO.`
			}
		],
		social: {
			github: 'https://github.com/dOrgTech',
			twitter: 'dOrg_tech',
			medium: '',
			telegram: '',
			reddit: '',
			discord: 'Z5R4CcS',
		},
		articles: [
			{
				title: `dOrg Founders Have Created the First Limited Liability DAO`,
				url: `https://www.coindesk.com/dorg-founders-have-created-the-first-limited-liability-dao`,
				date: '11/06/2019'
			}
		],
		documents: [
			{
				title: "Genesis Protocol",
				url: "https://docs.google.com/document/d/1b3UXvIDjxTVjS1nZNAn0umSY4DT5Y1yJeNHg07ny_5k/edit#"
			}
		],
		team: [],
		tags: []
	},
	{
		id: 20,
		podcasts: [
			{
				title: 'Interview with Shaun, Co-Founder of DigixDAO',
				url: 'https://www.listennotes.com/podcasts/nuggets-news/interview-with-shaun-co-b2Z1HqYXNEn/',
				date: '02/07/2018'
			},
			{
				title: 'Stablecoin Using Gold_ - What is DigixDAO',
				url: 'https://www.listennotes.com/podcasts/decentralized/stablecoin-using-gold_-what-m4qWidleUpa/',
				date: '28/05/2018'
			},
			{
				title: '5 Shaun Djie (Digix Co-Founder) - Tokenizing Gold on the Ethereum Blockchain, DigixDAO and DGX',
				url: 'https://www.listennotes.com/podcasts/silver-bullion-tv/5-shaun-djie-digix-co-NeswHpuUo3m/',
				date: '25/04/2018'
			}
		],
		title: 'DigixDAO',
		subtitle: 'The Digix Decentralized Autonomous Organization',
		audits: [
			{
				auditor: 'Chainsecurity',
				auditorWebsite: 'https://chainsecurity.com/',
				auditUrl: 'https://medium.com/chainsecurity/digix-audit-completed-f03c116daac1',
				auditDate: "18/12/2018"
			}
		],
		status: 'active',
		image: 'digixdao.png',
		description: 'DigixDAO aims to be a self-organising community on the Ethereum blockchain that actively involves its token holders in decision making and shaping the direction of the asset tokenisation business.',
		website: `https://digix.global/dgd/`,
		contractProof: ``,
		blockchain: 'Ethereum',
		framework: 'Custom',
		contracts: [
			{
				name: 'Token',
				address: `0xe0b7927c4af23765cb51314a0e0521a9645f0e2a`,
				description: `The DGD token`
			}
		],
		social: {
			github: 'https://github.com/digixglobal',
			twitter: 'DigixDAO',
			medium: 'https://medium.com/digix',
			telegram: 'https://t.me/digixofficial',
			reddit: 'digix',
			youtube: 'https://www.youtube.com/digixglobal',
			discord: 'CCDBJJC',
		},
		articles: [],
		documents: [
			{
				title: "Whitepaper",
				url: 'http://cryptochainuni.com/wp-content/uploads/Overview-of-DigixGlobal-DigixDAO.pdf'
			},
			{
				title: "Messari Report",
				url: "https://messari.github.io/research/profiles/DigixDAO(DGD).pdf"
			}
		],
		team: [],
		tags: []
	},
	{
		id: 21,
		podcasts: [],
		title: 'RECDAO',
		subtitle: 'Reddit Ethereum Community DAO',
		status: 'inactive',
		audits: [],
		image: 'placeholder.jpg',
		description: `RECDAO is an effort to develop Ethereum based tools for improving how we use Reddit. One of those tools, the RECDAO Curator, has been in experimental operation on r/ethtrader for the past few weeks. It's purpose is to explore the use of prediction markets to curate content.`,
		website: `http://curator.recdao.org/`,
		contractProof: ``,
		blockchain: 'Ethereum',
		framework: 'Custom',
		contracts: [],
		social: {
			github: 'https://github.com/recdao',
			twitter: '',
			medium: '',
			telegram: '',
			reddit: 'recdao',
			discord: '',
		},
		articles: [
			{
				title: `RECDAO Curator explained`,
				url: `https://www.reddit.com/r/ethtrader/comments/89o4ju/recdao_curator_explained/`,
				date: '01/04/2018'
			},
			{
				title: `RecDAO: When decentralisation isn't the answer`,
				url: `https://flatoutcrypto.com/home/recdao`,
				date: '05/04/2018'
			},
			{
				title: `Prediction markets for content curation DAOs`,
				url: `https://ethresear.ch/t/prediction-markets-for-content-curation-daos/1312`,
				date: '01/03/2018'
			}
		],
		documents: [],
		team: [],
		tags: []
	},
	{
		id: 22,
		podcasts: [],
		title: 'KittyDAO',
		subtitle: 'Decentralized Cat Governance',
		audits: [],
		status: 'active',
		image: 'cryptokitties.jpg',
		description: '',
		website: ``,
		contractProof: `https://twitter.com/pet3rpan_/status/1149073342852243456`,
		blockchain: 'Ethereum',
		framework: 'Moloch Fork',
		contracts: [
			{
				name: 'KittyDAO',
				address: `0x669286d447e3c18c9d1ec2cc24bdebda381b95ff`,
				description: `Main KittyDAO contract`
			}
		],
		social: {
			github: '',
			twitter: '',
			medium: '',
			telegram: '',
			reddit: '',
			discord: '',
		},
		articles: [],
		documents: [],
		team: [],
		tags: []
	},
	{
		id: 23,
		podcasts: [],
		title: 'KyodoDAO',
		subtitle: '',
		audits: [],
		status: 'prelaunch',
		image: 'decent_fund.jpg',
		description: `Kyodo is Ethereum blockchain based web app, the cross-platform incentive tool for building the crypto economy for DAO based on Impression revenue model. We build Kyodo to run Decent.Fund. As an organizational structure, it's defined as Adhocracy. As governance, it has two models Democracy and Meritocracy.`,
		website: `http://decent.fund/`,
		contractProof: ``,
		blockchain: 'Ethereum',
		framework: 'Colony',
		contracts: [],
		social: {
			github: '',
			twitter: '',
			medium: 'https://medium.com/decentfund',
			telegram: '',
			reddit: '',
			discord: '',
		},
		articles: [
			{
				title: `Kyodo — “You decide your own level of involvement”`,
				url: `https://medium.com/decentfund/kyodo-you-decide-your-own-level-of-involvement-385515ef03a7`,
				date: '29/06/2018'
			}
		],
		documents: [],
		team: [],
		tags: []
	},
	{
		id: 24,
		podcasts: [
			{
				title: 'Luis Cuende: Aragon – Decentralized Governance and the Fight for Freedom',
				url: 'https://www.listennotes.com/podcasts/epicenter-learn/luis-cuende-aragon-xMThUBvrnoK/',
				date: '24/05/2018'
			},
			{
				title: 'How Aragon Manages DAOs with Luis Cuende',
				url: 'https://www.listennotes.com/podcasts/software/how-aragon-manages-daos-with-TSxo8iO6eL3/',
				date: '08/03/2018'
			},
			{
				title: 'The Blockcrunch - Can Crypto Change How We Run Organizations? - Luis Cuende (Aragon)',
				url: 'https://www.listennotes.com/podcasts/the-lets-talk/the-blockcrunch-can-crypto-45n-m28ip7U/',
				date: '20/05/2019'
			}
		],
		title: 'Aragon Network',
		subtitle: 'Freedom to organize',
		mailingList: 'https://one.us15.list-manage.com/subscribe?u=a590aa3843a54b079d48e6e18&id=e81a44c4bd',
		status: 'active',
		audits: [
			{
				auditor: 'WhiteHat Group',
				auditorWebsite: 'https://addreth.space/address/whitehats.eth',
				auditUrl: 'https://wiki.aragon.org/documentation/audits/audit_whg01_report/',
				auditDate: "22/06/2018"
			},
			{
				auditor: 'Adam Dossa',
				auditorWebsite: 'https://github.com/adamdossa',
				auditUrl: 'https://wiki.aragon.org/documentation/audits/audit01_report_dossa/',
				auditDate: "2017"
			}
		],
		image: 'aragon.jpg',
		description: 'Aragon empowers you to freely organize and collaborate without borders or intermediaries. Create global, bureaucracy-free organizations, companies, and communities.',
		website: `https://aragon.org/network`,
		contractProof: ``,
		blockchain: 'Ethereum',
		framework: 'Custom',
		contracts: [],
		social: {
			github: 'https://github.com/aragon/',
			twitter: 'AragonProject',
			medium: 'https://medium.com/aragondec',
			telegram: '',
			reddit: 'aragonproject',
			rocketchat: 'https://aragon.chat/home',
			discord: '',
		},
		articles: [],
		documents: [
			{
				title: 'Whitepaper',
				url: 'https://github.com/aragon/whitepaper'
			},
			{
				title: 'Aragon Manifesto',
				url: 'https://blog.aragon.org/the-aragon-manifesto-4a21212eac03/'
			}
		],
		team: [],
		tags: []
	},
	{
		id: 25,
		podcasts: [],
		title: 'Nest DAO',
		subtitle: 'DAO to manage the Aragon Nest grants',
		status: 'prelaunch',
		audits: [],
		image: 'aragon.jpg',
		description: 'The Nest DAO is an initiative by the Aragon Association to give the community more power to manage the Nest grant program. Nest grants are distributed to people and projects working on improving the Aragon ecosystem.',
		website: `https://aragon.org/project/grants`,
		contractProof: ``,
		blockchain: 'Ethereum',
		framework: 'Custom',
		contracts: [],
		social: {
			github: '',
			twitter: '',
			medium: '',
			telegram: '',
			reddit: '',
			discord: '',
			youtube: 'https://www.youtube.com/channel/UCODiU_-FWhr4SVOoBlm-qaQ',
			discourse: 'https://forum.aragon.org/'
		},
		articles: [],
		documents: [
			{
				title: "Whitepaper",
				url: 'https://github.com/aragon/nest/blob/master/Nest%20DAO%20Governance/Nest%20DAO%20specification%20at%202019-11-07.md#membership-for-the-nest-dao'
			}
		],
		team: [],
		tags: []
	},
	{
		id: 26,
		podcasts: [],
		title: 'RewardDAC',
		subtitle: '',
		status: '-',
		image: 'giveth.png',
		description: '',
		website: ``,
		contractProof: ``,
		blockchain: 'Offchain',
		framework: 'Custom',
		contracts: [],
		audits: [],
		social: {
			github: '',
			twitter: '',
			medium: '',
			telegram: '',
			reddit: '',
			discord: '',
		},
		articles: [
			{
				title: `How RewardDAO Works`,
				url: `https://medium.com/giveth/how-rewarddao-works-aka-what-are-points-7388f70269a`,
				date: '01/02/2018'
			}
		],
		documents: [],
		team: [],
		tags: []
	},
	{
		id: 27,
		podcasts: [],
		title: 'Unicorn DAO',
		subtitle: '',
		status: '-',
		image: 'giveth.png',
		description: '',
		website: ``,
		contractProof: ``,
		blockchain: 'Offchain',
		framework: 'Custom',
		contracts: [],
		audits: [],
		social: {
			github: '',
			twitter: '',
			medium: '',
			telegram: '',
			reddit: '',
			discord: '',
		},
		articles: [
			{
				title: `The Unicorn DAC, a non-hierarchical decentralized governance experiment`,
				url: `https://medium.com/giveth/the-unicorndac-a-non-hierarchical-decentralized-governance-experiment-8dfbe6e98d19`,
				date: '30/11/2018'
			}
		],
		documents: [],
		team: [],
		tags: []
	},
	{
		id: 28,
		podcasts: [
			{
				title: 'Web3 Summit Decentralize NOW! #1 - Griff Green of Giveth.io - Decentralizing Charity',
				url: 'https://www.listennotes.com/podcasts/decentralize-all/web3-summit-decentralize-now-U3xsf9_KjMR/',
				date: '26/11/2018'
			}
		],
		title: 'Giveth DAC',
		subtitle: '',
		status: '-',
		image: 'giveth.png',
		description: '',
		website: ``,
		contractProof: ``,
		blockchain: 'Offchain',
		framework: 'Custom',
		contracts: [],
		audits: [],
		social: {
			github: '',
			twitter: '',
			medium: '',
			telegram: '',
			reddit: '',
			discord: '',
		},
		articles: [],
		documents: [],
		team: [],
		tags: []
	},
	{
		id: 29,
		podcasts: [],
		title: 'DAO Incubator',
		subtitle: 'Engineer. Design. Incubate. The future of human governance',
		status: 'active',
		image: 'daoincubator.jpg',
		description: 'The DAOincubator is a group of builders, researchers, designers and specialists dedicated to making today’s DAOs more functional and deploying these entities in the service of previously unexplored use cases. ',
		website: `http://daoincubator.org/`,
		contractProof: ``,
		blockchain: 'Offchain',
		framework: 'Custom',
		contracts: [],
		audits: [],
		social: {
			github: '',
			twitter: 'DAOincubator',
			medium: 'https://medium.com/dao-incubator',
			telegram: 'https://t.me/DAOincubator',
			reddit: '',
			discord: '',
		},
		articles: [],
		documents: [],
		team: [],
		tags: []
	},
	{
		id: 30,
		podcasts: [],
		title: 'Trojan DAO',
		subtitle: '',
		status: 'research',
		image: 'trojandao.png',
		description: `A network of artists & developers, co-creating a new cultural economy through blockchain from the ground-up. Starting from Athens, Greece. The TrojanDAO will manage a Community Fund. Trojan Foundation members can vote on how to spend this money: issuing of bounties and, mostly, grants to support art projects. Smart contracts will enable participating projects to manage funding, income distribution, and project governance rights. The goal is to use art value chains to feed a self-sustaining, democratically governed ecosystem for the remuneration of creative labor as a commons.‌`,
		website: `http://c-a-s-athens.squarespace.com/`,
		contractProof: `https://twitter.com/TrojanDAO/status/1153420222348562433`,
		blockchain: 'Ethereum',
		framework: 'Moloch Fork',
		contracts: [
			{
				name: 'TrojanDAO',
				address: `0x5bf9553c1d797b41f05a4b6b423c7fb1ec9f820f`,
				description: `Main DAO contract`
			},
			{
				name: 'TrojanBank',
				address: `0xc416810990007a8cbaa9570661a860a909ea1dd7`,
				description: 'Holds funds'
			}
		],
		audits: [],
		social: {
			github: '',
			twitter: 'TrojanDAO',
			medium: '',
			telegram: '',
			reddit: '',
			discord: '',
		},
		articles: [],
		documents: [],
		team: [],
		tags: []
	},
	{
		id: 31,
		podcasts: [],
		title: 'TheTradingHall',
		subtitle: 'Portfolio Management',
		status: 'research',
		image: 'placeholder.jpg',
		description: '‌Asset allocation by community voting‌',
		website: ``,
		contractProof: ``,
		team: ['https://www.linkedin.com/in/agaboury'],
		blockchain: 'Ethereum',
		framework: 'Aragon OS',
		contracts: [
			{
				name: 'Org Address',
				address: `0x0ee165029b09d91a54687041Adbc705F6376C67F`,
				description: `Identifies the organization`
			}
		],
		audits: [],
		social: {
			github: '',
			twitter: '',
			medium: '',
			telegram: '',
			reddit: '',
			discord: '',
		},
		articles: [],
		documents: [],
		tags: []
	},
	{
		id: 32,
		podcasts: [],
		title: 'Video DAO',
		subtitle: 'Manage Transcoder Livepeer Node',
		status: '-',
		image: 'placeholder.jpg',
		description: 'To manage the Staking and running of a Transcoder on the Livepeer network‌',
		website: `https://mainnet.aragon.org/#/video/`,
		contractProof: ``,
		blockchain: 'Ethereum',
		framework: 'Aragon OS',
		contracts: [],
		audits: [],
		social: {
			github: '',
			twitter: '',
			medium: '',
			telegram: '',
			reddit: '',
			discord: '',
		},
		articles: [],
		documents: [],
		team: [],
		tags: []
	},
	{
		id: 33,
		podcasts: [],
		title: 'NowHerePlastik',
		subtitle: '',
		status: 'PoC',
		image: 'nowhereplastik.jpg',
		description: 'Converting plastic into resource through a circular economy model and increase crypto adoption‌',
		website: ``,
		contractProof: ``,
		blockchain: '-',
		framework: '-',
		contracts: [],
		audits: [],
		social: {
			github: '',
			twitter: '',
			medium: '',
			telegram: '',
			reddit: '',
			discord: '',
		},
		articles: [],
		documents: [],
		team: [],
		tags: []
	},
	{
		id: 34,
		podcasts: [],
		title: 'Bundlesblock DAO',
		subtitle: 'Representing the German blockchain industry',
		status: 'research',
		image: 'placeholder.jpg',
		description: `Representing the German blockchain industry, Bundesblock educates decision-makers in politics, industry and the general public. Its 24 working groups cover topics such as 'legal', 'sandboxing', 'governance' as well as a variety of use cases, such as 'finance', 'insurance' and 'energy'. Bundesblock seeks a tool allow its 20+ working groups to elect a speaker, vote in/out members and vote on positions.‌`,
		website: ``,
		contractProof: ``,
		blockchain: 'Offchain',
		framework: 'None',
		contracts: [],
		audits: [],
		social: {
			github: '',
			twitter: '',
			medium: '',
			telegram: '',
			reddit: '',
			discord: '',
		},
		articles: [],
		documents: [],
		team: [],
		tags: []
	},
	{
		id: 35,
		podcasts: [],
		title: 'SmartMachine',
		subtitle: 'An open smart contracts market owned by the community.‌',
		status: 'active',
		image: 'placeholder.jpg',
		description: 'All system will be governed by the DAO, including the code and the git repo. Acceptance of smart modules to be sold on the market by external devs and companies is dependent on DAO voting. All % and everything else is dependent on DAO voting. The election/firing of the board of admins too.Fund distribution by community voting etc. etc.‌',
		website: ``,
		contractProof: ``,
		blockchain: 'Ethereum',
		framework: 'Custom',
		contracts: [],
		audits: [],
		social: {
			github: '',
			twitter: '',
			medium: '',
			telegram: '',
			reddit: '',
			discord: '',
		},
		articles: [],
		documents: [],
		team: [],
		tags: []
	},
	{
		id: 36,
		podcasts: [],
		title: 'Betoken',
		subtitle: 'Crowd-powered crypto assets management protocol',
		status: '-',
		image: 'betoken.png',
		description: 'Making optimal investment decisions for a decentralized hedge fund. Investment decisions are made by a community of managers, each of whom owns Kairo tokens (non-transferrable) denominating the percentage of total funds they can manage. Making profits increases one’s Kairo balance, and making losses decreases it, resulting in a meritocratic Kairo distribution over time. Managers receive a monthly commission based on their Kairo balance, so they’re incentivized to make better investments. Managers may initiate a protocol upgrade via voting with Kairo, and at the same time electing the dev team responsible for protocol maintenance & development. The dev team receives monthly funding from the hedge fund’s AUM.',
		website: `https://betoken.fund/`,
		contractProof: ``,
		blockchain: 'Ethereum',
		framework: 'Custom',
		contracts: [],
		audits: [],
		social: {
			github: 'https://github.com/Betoken/',
			twitter: 'betokenfund',
			medium: 'https://medium.com/betoken',
			telegram: 'https://t.me/betokenfund',
			reddit: '',
			discord: '',
		},
		articles: [],
		documents: [
			{
				title: "Whitepaper",
				url: "https://github.com/Betoken/Whitepaper/blob/master/BetokenWhitepaper.pdf"
			},
			{
				title: "Pitch Deck",
				url: "https://docs.google.com/presentation/d/1CvVZRCSsal1SJyb4IT3slR4D52A94G35xcDZSSrtFa8/edit#slide=id.p"
			}
		],
		team: [],
		tags: []
	},
	{
		id: 37,
		podcasts: [],
		title: 'Personal Tokens',
		subtitle: 'Tokenize all people',
		status: 'active',
		image: 'personaltokens.jpg',
		description: 'A network of artists & developers, co-creating a new cultural economy through blockchain from the ground-up. Starting from Athens, Greece',
		website: `https://www.personaltokens.io/`,
		contractProof: ``,
		blockchain: 'Ethereum',
		framework: '-',
		contracts: [],
		audits: [],
		social: {
			github: '',
			twitter: 'PersonalTokens',
			medium: '',
			steemit: 'https://steemit.com/@personaltokens',
			telegram: 'https://web.telegram.org/#/im?p=@personaltokens',
			reddit: '',
			discord: '',
		},
		articles: [],
		documents: [],
		team: [],
		tags: []
	},
	{
		id: 38,
		podcasts: [],
		title: 'Audacity',
		subtitle: 'Democratise founding',
		status: 'PoC',
		image: 'audacity.png',
		description: 'Audacity makes it easy to operate a decentralized company, manage resources, allocate equity and raise capital.',
		website: `https://audacity.id/`,
		contractProof: ``,
		blockchain: 'Offchain',
		framework: 'Custom',
		contracts: [],
		audits: [],
		social: {
			github: '',
			twitter: '',
			medium: '',
			telegram: '',
			reddit: '',
			discord: '',
		},
		articles: [],
		documents: [],
		team: [],
		tags: []
	},
	{
		id: 39,
		podcasts: [],
		title: 'bkDAO',
		subtitle: '',
		status: '-',
		image: 'bkdao.png',
		description: '',
		website: ``,
		contractProof: ``,
		blockchain: '-',
		framework: '-',
		contracts: [],
		audits: [],
		social: {
			github: '',
			twitter: '',
			medium: '',
			telegram: '',
			reddit: '',
			discord: '',
		},
		articles: [
			{
				title: `bkDAO: Self-Funding Brooklyn’s Civic Orgs`,
				url: `https://medium.com/@orishim/bkdao-self-funding-brooklyns-civic-orgs-7d57a164254f`,
				date: '07/04/2019'
			}
		],
		documents: [],
		team: [],
		tags: []
	},
	{
		id: 40,
		podcasts: [],
		title: 'Blockdam',
		subtitle: '',
		status: '-',
		image: 'blockdam.jpg',
		description: '',
		website: `https://alchemy.daostack.io/dao/0x0004a4c02f97a2cdab3628ac4b834ce4c14f5cf7`,
		contractProof: `https://twitter.com/MatanField/status/1132536859349921792`,
		blockchain: '-',
		framework: '-',
		contracts: [],
		audits: [],
		social: {
			github: '',
			twitter: '',
			medium: '',
			telegram: '',
			reddit: '',
			discord: '',
		},
		articles: [],
		documents: [
			{
				title: 'How to MemeDAO',
				url: 'https://docs.google.com/document/d/1iJZfjmOK1eZHq-flmVF_44dZWNsN-Z2KAeLqW3pLQo8/edit'
			}
		],
		team: [],
		tags: []
	},
	{
		id: 41,
		podcasts: [],
		title: 'memeDAO',
		subtitle: '',
		status: '-',
		image: 'placeholder.jpg',
		description: '',
		website: ``,
		contractProof: ``,
		blockchain: '-',
		framework: '-',
		contracts: [],
		audits: [],
		social: {
			github: '',
			twitter: '',
			medium: '',
			telegram: '',
			reddit: '',
			discord: '',
		},
		articles: [],
		documents: [],
		team: [],
		tags: []
	},
	{
		id: 42,
		podcasts: [],
		title: 'bitfwd Blockathon',
		subtitle: 'Accelerating Cryptopreneurs to the next level ',
		status: '-',
		image: 'bitfwd.jpg',
		description: '',
		website: `https://www.bitfwd.com/`,
		contractProof: ``,
		blockchain: '-',
		framework: '-',
		contracts: [],
		audits: [],
		social: {
			github: 'https://github.com/bitfwdcommunity/Blockathon-DAO',
			twitter: 'bitfwdxyz',
			medium: '',
			telegram: 'https://t.me/bitfwd',
			reddit: '',
			discord: '',
		},
		articles: [
			{
				title: `bitfwd and DAOstack partnership announcement!`,
				url: `https://medium.com/bitfwd/bitfwd-and-daostack-partnership-announcement-b5d605ba314e`,
				date: '02/06/2019'
			}
		],
		documents: [],
		team: [],
		tags: []
	},
	{
		id: 43,
		podcasts: [],
		title: 'The DMO',
		subtitle: 'Decentralized Marketing Organization',
		status: '-',
		image: 'placeholder.jpg',
		description: '',
		website: ``,
		contractProof: ``,
		blockchain: '-',
		framework: '-',
		contracts: [],
		audits: [],
		social: {
			github: '',
			twitter: '',
			medium: '',
			telegram: '',
			reddit: '',
			discord: '',
		},
		articles: [],
		documents: [],
		team: [],
		tags: []
	},
	{
		id: 44,
		podcasts: [],
		title: 'General Store DAO',
		subtitle: '',
		status: '-',
		image: 'placeholder.jpg',
		description: '',
		website: `https://www.thegeneralstore.me/`,
		contractProof: ``,
		blockchain: 'Ethereum',
		framework: 'DAOStack',
		contracts: [],
		audits: [],
		social: {
			github: '',
			twitter: '',
			medium: '',
			telegram: '',
			reddit: '',
			discord: '',
		},
		articles: [],
		documents: [],
		team: [],
		tags: []
	},
	{
		id: 45,
		podcasts: [],
		title: 'Research DAO',
		subtitle: '',
		status: '-',
		image: 'placeholder.jpg',
		description: '',
		website: ``,
		contractProof: ``,
		blockchain: '-',
		framework: '-',
		contracts: [],
		audits: [],
		social: {
			github: '',
			twitter: '',
			medium: '',
			telegram: '',
			reddit: '',
			discord: '',
		},
		articles: [],
		documents: [],
		team: [],
		tags: []
	},
	{
		id: 46,
		podcasts: [],
		title: 'GrammarDAO',
		subtitle: '',
		status: '-',
		image: 'placeholder.jpg',
		description: '',
		website: ``,
		contractProof: ``,
		blockchain: 'Ethereum',
		framework: 'DAOStack',
		contracts: [],
		audits: [],
		social: {
			github: '',
			twitter: '',
			medium: '',
			telegram: '',
			reddit: '',
			discord: '',
		},
		articles: [],
		documents: [],
		team: [],
		tags: []
	},
	{
		id: 47,
		podcasts: [],
		title: 'WorkersDAO',
		subtitle: '',
		status: '-',
		image: 'workers_dao.png',
		description: '',
		website: `https://sites.google.com/view/workers-dao/idea`,
		contractProof: ``,
		blockchain: '-',
		framework: '-',
		contracts: [],
		audits: [],
		social: {
			github: '',
			twitter: '',
			medium: '',
			telegram: '',
			reddit: '',
			discord: '',
		},
		articles: [],
		documents: [],
		team: [],
		tags: []
	},
	{
		id: 48,
		podcasts: [],
		title: 'Greta DAO',
		subtitle: '',
		status: '-',
		image: 'placeholder.jpg',
		description: '',
		website: ``,
		contractProof: ``,
		blockchain: '-',
		framework: '-',
		contracts: [],
		audits: [],
		social: {
			github: '',
			twitter: '',
			medium: '',
			telegram: '',
			reddit: '',
			discord: '',
		},
		articles: [
			{
				title: `Aragon Greta DAO`,
				url: `https://forum.aragon.org/t/aragon-greta-dao/613/9`,
				date: '24/02/2019'
			}
		],
		documents: [],
		team: [],
		tags: []
	},
	{
		id: 49,
		podcasts: [],
		title: 'Because of the Internet DAO',
		subtitle: '',
		status: '-',
		image: 'rude_world.jpg',
		description: '',
		website: `https://www.rude.world/boti-dao`,
		dapp: 'https://mainnet.aragon.org/#/botidao/0x697a9f521536258fe255eb780bddda1e225b5177',
		contractProof: ``,
		blockchain: 'Ethereum',
		framework: 'Aragon',
		contracts: [
			{
				name: 'BODI Token',
				address: `0xd9a94ae88eed1683347f85fc90770354d7ec7867`,
				description: `Token for the DAO`
			},
			{

			}
		],
		audits: [],
		social: {
			github: '',
			twitter: 'RUDE_content',
			medium: 'https://medium.com/rudimental',
			telegram: '',
			reddit: '',
			discord: '',
		},
		articles: [],
		documents: [],
		team: [],
		tags: []
	},
	{
		id: 50,
		title: 'District0x Network',
		subtitle: 'A network of decentralized marketplaces and communities',
		status: 'active',
		image: 'district0x.jpg',
		description: 'A cooperative of decentralized marketplaces and communities. Powered by Ethereum, Aragon, and IPFS.',
		website: `https://district0x.io/`,
		contractProof: ``,
		assetsGoverned: "What marketplaces to accept or reject as part of the community. You have to stake crypto to propose one, and get penalized if it's rejected at any point.",
		decentralizationLevel: 'Fully Decentralized',
		centralizationPoints: 'None',
		blockchain: 'Ethereum',
		framework: 'd0xINFRA',
		contracts: [
			{
				name: 'district0x Network Token',
				address: `0x0abdace70d3790235af448c88547603b945604ea`,
				description: `ERC20 Token for district0x`
			},
			{
				name: 'MiniMeTokenFactory',
				address: `0xa7dd95d9978dde794eae5233889f1ffebcdc9914`,
				description: ``
			},
			{
				name: 'ENS',
				address: `0x314159265dd8dbb310642f98f50c066173c1259b`,
				description: ``
			},
			{
				name: 'DAOFactory',
				address: `0x595b34c93aa2c2ba0a38daeede629a0dfbdcc559`,
				description: ``
			},
			{
				name: 'FIFSResolvingRegistrar',
				address: `0x546aa2eae2514494eeadb7bbb35243348983c59d`,
				description: ``
			},
			{
				name: 'District0xEmails',
				address: `0x5065ef0724b76421aeaafa87ba752d6c5d5499b5`,
				description: ``
			}
		],
		audits: [
			{
				auditor: 'Adam Dossa',
				auditorWebsite: 'https://github.com/adamdossa',
				auditUrl: 'https://github.com/district0x/district0x-network-token/issues/4',
				auditDate: '28/06/2017'
			}
		],
		social: {
			github: 'https://github.com/district0x',
			twitter: 'district0x',
			medium: 'https://blog.district0x.io/',
			telegram: 'https://t.me/district0x',
			reddit: 'district0x',
			discord: '',
			youtube: 'https://www.youtube.com/channel/UCQq0INymkcGDYYXeFZgYk4g'
		},
		podcasts: [
			{
				title: 'BlockChannel Episode 25: Building Digital Communities, with District0x',
				url: 'https://thebitcoinpodcast.com/bc25/',
				date: '14/07/2017'
			},
			{
				title: 'Crypto - District0x Founder, Joe Urgo on building a network of decentralized markets and communities.mp3',
				url: 'https://www.listennotes.com/podcasts/the-global-startup/crypto-district0x-founder-39zRoLys7Hw/',
				date: '13/02/2018'
			},
			{
				title: 'P.J. Leimgruber of District0x',
				url: 'https://www.listennotes.com/podcasts/talking/pj-leimgruber-of-district0x-9UpGtlZKyWD/',
				date: '19/08/2018'
			}
		],
		mailingList: 'https://sourcerers.us14.list-manage.com/subscribe?u=6531cd004e712d76e07f04ca9&id=104ce689d2',
		articles: [],
		documents: [
			{
				title: 'Whitepaper',
				url: 'https://district0x.io/docs/district0x-whitepaper.pdf'
			}
		],
		team: [],
		tags: []
	},
	{
		id: 51,
		podcasts: [],
		title: 'Meme Factory',
		tags: ['TCR', 'ERC721', 'Marketplace'],
		subtitle: 'Create and trade provably rare digital assets',
		status: 'active',
		image: 'memefactory.jpg',
		description: 'Meme Factory users submit original memes to a community run list generally known as a token curated registry, and specifically known as the Dank Registry. Token holders of a newly minted token, the DANK token, then decide which memes are added to the registry through an economically incentivized voting game. Although DANK is an ERC20 token standard and therefore interchangeable, the actual memes themselves are ERC721 standard, more commonly referred to as Non-Fungible tokens (NFTs). This allows for unique identification, ownership, and provable rarity for every meme created on the Meme Factory platform.',
		website: `https://memefactory.io/`,
		assetsGoverned: 'Registry content and the registry itself',
		centralizationPoints: 'None',
		decentralizationLevel: 'Fully Decentralized',
		contractProof: ``,
		blockchain: 'Ethereum',
		framework: 'd0xINFRA',
		contracts: [
			{
				name: 'DANK Token',
				address: `0x0cb8d0b37c7487b11d57f1f33defa2b1d3cfccfe`,
				description: `The contract for the DANK token.`
			},
			{
				name: 'MEME Token',
				address: `0xd23043ce917ac39309f49dba82f264994d3ade76`,
				description: `ERC721 token storing memes`
			},
			{
				name: 'MemeFactory',
				address: `0x01cb025ec5d7907e33b357bccae6260e9adbd32a`,
				description: 'Main contract to manage the registry'
			},
			{
				name: 'ParamChange Factory',
				address: `0x179921d3a4b673581c68b21631aa7573b651d4e5`,
				description: 'Meta contract, manages the registry params'
			},
			{
				name: 'District Config',
				address: `0xc3f953d1d9c0117f0988a16f2eda8641467e0b6d`,
				description: '-'
			}
		],
		audits: [],
		social: {
			github: 'https://github.com/district0x/memefactory',
			twitter: 'MemeFactory0x',
			medium: '',
			telegram: 'district0x',
			reddit: 'meme_factory',
			discord: 'rJvBEyV',
		},
		articles: [
			{
				title: `Introducing Meme Factory`,
				url: `https://blog.district0x.io/introducing-meme-factory-4aba7925dcdd`,
				date: '17/05/2019'
			}
		],
		faucets: [
			'https://memefactory.io/get-dank'
		],
		documents: [
				{
					title: 'district0x Whitepaper',
					url: 'https://district0x.io/docs/district0x-whitepaper.pdf'
				}
		],
		team: []
	},
	{
		id: 52,
		podcasts: [],
		title: 'Name Bazaar',
		subtitle: 'P2P marketplace to exchange names registered via ENS',
		status: 'active',
		image: 'namebazaar.jpg',
		description: 'A peer-to-peer marketplace for the exchange of names registered via the Ethereum Name Service',
		website: `https://namebazaar.io/`,
		contractProof: ``,
		blockchain: 'Ethereum',
		framework: 'd0xINFRA',
		contracts: [
			{
				name: 'AuctionOffer',
				address: `0x3a11344d66a72784dd440820ba6422a534a4206e`,
				description: ``
			},
			{
				name: 'BuyNowOfferingFactory',
				address: `0x575262e80edf7d4b39d95422f86195eb4c21bb52`,
				description: ''
			},
			{
				name: 'Registrar',
				address: `0x6090A6e47849629b7245Dfa1Ca21D94cd15878Ef`,
				description: ''
			},
			{
				name: 'ReverseRegistrar',
				address: `0x9062C0A6Dbd6108336BcBe4593a3D1cE05512069`,
				description: ''
			},
			{
				name: 'BuyNowOffering',
				address: `0x7f5dbcab54cb17cd494477d4f11a2b7ba470fb3a`,
				description: ''
			},
			{
				name: 'ENS',
				address: `0x314159265dD8dbb310642f98f50C066173C1259b`,
				description: ''
			},
			{
				name: 'PublicResolver',
				address: `0x5FfC014343cd971B7eb70732021E26C35B744cc4`,
				description: ''
			},
			{
				name: 'OfferingRegistry',
				address: `0x34e400a8b4da8a23b5eaf81b46d3a887669a45b9`,
				description: ''
			},
			{
				name: 'District0xEmails',
				address: `0x5065ef0724b76421aeaafa87ba752d6c5d5499b5`,
				description: ''
			},
			{
				name: 'OfferingRequests',
				address: `0x016bdfcf49ecdd9592e493cd4a75048ce09d6d75`,
				description: ''
			},
			{
				name: 'AuctionOffering',
				address: `0x6676f9a4be165daa756816f3234d5e019032728e`,
				description: ''
			}
		],
		audits: [],
		social: {
			github: 'https://github.com/district0x/name-bazaar',
			twitter: 'NameBazaar0x',
			medium: 'https://blog.district0x.io/',
			telegram: '',
			reddit: '',
			discord: 'Gjvw7qU',
		},
		articles: [
			{
				title: `Name Bazaar - What is it?`,
				url: `https://steemit.com/namebazaar/@mojorisin/name-bazaar-what-is-it`,
				date: '27/07/2017'
			}
		],
		documents: [
			{
				title: 'district0x Whitepaper',
				url: 'https://district0x.io/docs/district0x-whitepaper.pdf'
			}
		],
		team: [],
		tags: []
	},
	{
		id: 53,
		podcasts: [],
		title: 'Kipos',
		subtitle: 'Cooperative Housing Tool Box',
		status: '-',
		image: 'placeholder.jpg',
		description: '',
		website: ``,
		contractProof: ``,
		blockchain: '-',
		framework: '-',
		contracts: [],
		audits: [],
		social: {
			github: '',
			twitter: '',
			medium: '',
			telegram: '',
			reddit: '',
			discord: '',
		},
		articles: [],
		documents: [
			{
				title: 'Aragon Nest Proposal: Kipos',
				url: 'https://github.com/aragon/nest/issues/155'
			}
		],
		team: [],
		tags: []
	},
	{
		id: 54,
		podcasts: [],
		title: '1Hive',
		subtitle: 'Helping Open Source Communities Thrive',
		status: '-',
		image: '1hive.png',
		description: '',
		website: `https://1hive.org/`,
		contractProof: ``,
		blockchain: '-',
		framework: '-',
		contracts: [],
		audits: [],
		social: {
			github: '',
			twitter: '1HiveOrg',
			medium: '',
			telegram: '',
			reddit: '',
			discord: '',
		},
		articles: [
			{
				title: ``,
				url: ``
			}
		],
		documents: [],
		team: [],
		tags: []
	},
	{
		id: 55,
		podcasts: [],
		title: 'blankdao',
		subtitle: '',
		status: '-',
		image: 'blank_dao.png',
		description: 'Aragon One is a Swiss company formed by the founders of the Aragon Project',
		website: `https://blankdao.org/`,
		contractProof: ``,
		blockchain: '-',
		framework: '-',
		contracts: [],
		audits: [],
		social: {
			github: 'https://github.com/BlankDAO',
			twitter: 'blankdao_org',
			medium: 'https://medium.com/blankdao',
			telegram: '',
			reddit: '',
			discord: '',
			bitcointalk: 'https://bitcointalk.org/index.php?topic=5111294',
			riot: 'https://riot.im/app/#/room/#BlankDAO:matrix.org'
		},
		articles: [],
		documents: [
			{
				title: "Whitepaper",
				url: 'https://docs.google.com/document/d/1cErxBj73-D3v5aYB5J-qc13nQ03XEfcuFAIl_N9_76I/edit'
			}
		],
		team: [],
		tags: []
	},
	{
		id: 56,
		podcasts: [],
		title: 'Aragon One',
		subtitle: '',
		status: '-',
		image: 'aragonone.jpg',
		description: '',
		website: ``,
		contractProof: ``,
		blockchain: '-',
		framework: '-',
		contracts: [],
		audits: [],
		social: {
			github: '',
			twitter: 'AragonOneTeam',
			medium: '',
			telegram: '',
			reddit: '',
			discord: '',
		},
		articles: [],
		documents: [],
		team: [],
		tags: []
	},
	{
		id: 57,
		podcasts: [],
		title: 'Aragon DAC',
		subtitle: '',
		status: '-',
		image: 'aragon_dac.jpg',
		description: 'Aragon DAC is the 2nd team working on the Aragon Project. Empowering Freedom. Building Human Collaboration, focusing on devX. ',
		website: `http://aragondac.org/`,
		contractProof: ``,
		blockchain: '-',
		framework: '-',
		contracts: [],
		audits: [],
		social: {
			github: '',
			twitter: '',
			medium: '',
			telegram: '',
			reddit: '',
			discord: '',
		},
		articles: [],
		documents: [],
		team: [],
		tags: []
	},
	{
		id: 58,
		podcasts: [
			{
				title: '032: Ocean Protocol – The Future of Data, AI and Blockchain with Trent McConaghy',
				url: 'https://www.listennotes.com/podcasts/blockchain/032-ocean-protocol-the-nVhWbpyF637/',
				date: '20/06/2018'
			},
			{
				title: 'Ep. 67 – The Data Economy – Insights from Ocean Protocol',
				url: 'https://www.listennotes.com/podcasts/insureblocks/ep-67-the-data-economy-DIxK4m9h16q/',
				date: '22/07/2019'
			},
			{
				title: 'Ocean Protocol - AI Data and Services on the Blockchain',
				url: 'https://www.listennotes.com/podcasts/ost-live/ocean-protocol-ai-data-and-WzEbYqgBFtI/',
				date: '17/10/2018'
			}
		],
		title: 'Ocean Protocol',
		subtitle: '',
		status: '-',
		image: 'ocean_protocol.jpg',
		description: '',
		website: `https://oceanprotocol.com/`,
		contractProof: ``,
		blockchain: '-',
		framework: '-',
		contracts: [],
		audits: [],
		team: [],
		social: {
			github: '',
			twitter: 'oceanprotocol',
			medium: '',
			telegram: '',
			reddit: '',
			discord: '',
		},
		articles: [],
		documents: [],
		tags: []
	},
	{
		id: 59,
		podcasts: [
			{
				title: 'Bloque 32 – LegalBlock, con Albi Rodríguez Jaramillo',
				url: 'https://www.listennotes.com/podcasts/descentralizados/bloque-32-legalblock-con-5cHNqk2eOog/',
				date: '29/01/2019'
			},
			{
				title: 'Los Abogados Adoptando el Blockchain',
				url: 'https://www.listennotes.com/podcasts/cryptogal-gu%C3%ADa/los-abogados-adoptando-el-s02zMvVwfyX/',
				date: '05/10/2018'
			}
		],
		title: 'LegalBlock',
		subtitle: 'A Decentralized-driven Legal Community',
		assetsGoverned: '',
		tags: ['Legal'],
		decentralizationLevel: '',
		centralizationPoints: '',
		status: 'active',
		image: 'legal_block.jpg',
		description: 'A blockchain legal community promoting collective wisdom. A coordinated community of Legal professionals, acting under the umbrella of collective wisdom. Not another isolated community.',
		website: `https://legalblock.co/`,
		contractProof: ``,
		blockchain: 'Ethereum',
		framework: 'Aragon OS',
		contracts: [],
		audits: [],
		team: [
				{
					name: 'Maria T Vidal',
					twitter: 'mariatvidal'
				},
				{
					name: 'Albi Rodriguez J',
					twitter: 'albirodriguez'
				},
				{
					name: 'Malthus John',
					twitter: 'MalthusJohn'
				}
		],
		email: 'contact@legalblock.co',
		social: {
			github: '',
			twitter: 'legal_block',
			medium: 'https://medium.com/legal-block',
			telegram: 'https://t.me/LegalBlockCommunity',
			reddit: 'Legalblock',
			discord: '',
			youtube: 'https://www.youtube.com/channel/UCdl3X6gkco4-qr7lALMsctA'
		},
		articles: [
			{
				title: 'Introducing LegalBlock',
				url: 'https://medium.com/legal-block/introducing-legalblock-1eb78b00ea5e',
				date: '15/12/2017'
			},
			{
				title: 'Why LegalBlock needs Accredited Lawyers',
				url: 'https://medium.com/legal-block/why-legablock-needs-accredited-lawyers-89810fa8ed9c',
				date: '17/09/2018'
			}
		],
		documents: [
			{
				title: 'LegalBlock Paper I',
				url: 'http://legalblock.co/documents/LegalBlock%20Paper%20I%20.pdf'
			}
		]
	},
	{
		id: 60,
		podcasts: [],
		title: 'Ethlance',
		tags: ['IPFS'],
		subtitle: 'First job market built entirely on Ethereum',
		status: 'active',
		image: 'ethlance.jpg',
		description: 'Ethlance is a freelancing marketplace that allows users to create an employer/employee profile, list and apply for open positions, rank and provide feedback for employers/employees, and to send/receive invoices. Ethlance is decentralized and does not charge any service fees, and users pay only the necessary cost of gas to broadcast their profiles, posts, messages, feedback, and invoices to the Ethereum network. Ethlance is part of the district0x network and is the first district (marketplace) to be deployed. It was the initial inspiration for the overall network of community marketplaces.',
		website: `https://ethlance.com/`,
		contractProof: ``,
		blockchain: 'Ethereum',
		framework: 'd0xINFRA',
		contracts: [],
		audits: [],
		social: {
			github: 'https://github.com/district0x/ethlance',
			twitter: 'ethlance',
			medium: 'https://blog.ethlance.com/',
			telegram: 'https://t.me/district0x',
			reddit: 'district0x',
			discord: '',
		},
		articles: [],
		documents: [
				{
					title: 'district0x Whitepaper',
					url: 'https://district0x.io/docs/district0x-whitepaper.pdf'
				}
		],
		team: []
	},
	{
		id: 61,
		podcasts: [],
		title: 'Status',
		subtitle: '',
		status: '-',
		image: 'status.jpg',
		description: 'Building an open source, secure & private messenger, crypto wallet, and web3 browser.',
		website: ``,
		contractProof: ``,
		blockchain: '-',
		framework: '-',
		contracts: [],
		audits: [],
		social: {
			github: '',
			twitter: 'ethstatus',
			medium: '',
			telegram: '',
			reddit: '',
			discord: '',
		},
		articles: [],
		documents: [],
		team: [],
		tags: []
	},
	{
		id: 62,
		podcasts: [],
		title: 'Space Decentral',
		subtitle: '',
		status: '-',
		image: 'space_decentral.jpg',
		description: '',
		website: ``,
		contractProof: ``,
		blockchain: '-',
		framework: '-',
		contracts: [],
		audits: [],
		social: {
			github: '',
			twitter: 'SpaceDecentral',
			medium: '',
			telegram: '',
			reddit: '',
			discord: '',
		},
		articles: [],
		documents: [],
		team: [],
		tags: []
	},
	{
		id: 63,
		podcasts: [
			{
				title: 'How Melon Could Make Asset Management Easier',
				url: 'https://unchainedpodcast.com/how-melon-could-make-asset-management-easier/',
				date: '05/03/2019'
			},
			{
				title: 'Unleashing Melon into the wild with Jenna Zenk',
				url: 'https://www.zeroknowledge.fm/64',
				date: '13/02/2019'
			}
		],
		title: 'Melon',
		subtitle: '',
		status: '-',
		image: 'melon.png',
		description: '',
		website: ``,
		contractProof: ``,
		blockchain: '-',
		framework: '-',
		contracts: [],
		audits: [],
		social: {
			github: 'https://github.com/melonproject/protocol',
			twitter: 'melonprotocol',
			medium: '',
			telegram: '',
			reddit: '',
			discord: '',
		},
		articles: [
			{
				title: `Melon will run its decentralized governance on Aragon`,
				url: `https://medium.com/melonprotocol/melon-will-run-its-decentralized-governance-on-aragon-9f7935693720`,
				date: '08/02/2019'
			}
		],
		documents: [],
		team: [],
		tags: []
	},
	{
		id: 64,
		podcasts: [],
		title: 'Althea.org DAOs',
		subtitle: '',
		status: '-',
		image: 'placeholder.jpg',
		description: '',
		website: ``,
		contractProof: ``,
		blockchain: '-',
		framework: '-',
		contracts: [],
		audits: [],
		social: {
			github: '',
			twitter: '',
			medium: '',
			telegram: '',
			reddit: '',
			discord: '',
		},
		articles: [],
		documents: [],
		team: [],
		tags: []
	},
	{
		id: 65,
		podcasts: [],
		title: 'Open ESQ',
		subtitle: 'Enabling The Next Generation of Legal Services',
		status: '-',
		image: 'open_esq.png',
		description: '',
		website: `https://openesq.tech/`,
		contractProof: ``,
		blockchain: '-',
		framework: '-',
		dapp: 'https://mainnet.aragon.org/#/openesq/',
		contracts: [],
		audits: [],
		social: {
			github: '',
			twitter: 'OpenESQ',
			medium: '',
			telegram: 'https://t.me/OpenEsquire/',
			reddit: '',
			discord: '',
		},
		articles: [],
		documents: [],
		email: 'info@openesq.tech',
		team: [
			{
				name: 'Ross Campbell',
				twitter: 'r_ross_campbell'
			},
			{
				name: 'Robert Leonhard',
				twitter: 'RobLionhart'
			},
			{
				name: 'Josh Ma',
				twitter: 'Joshma91'
			}
		],
		tags: []
	},
	{
		id: 66,
		podcasts: [],
		title: 'Pool Together',
		subtitle: 'PoolTogether is a no loss lottery built on Ethereum.',
		status: '-',
		image: 'pool_together.png',
		description: '',
		website: `https://www.pooltogether.us`,
		contractProof: ``,
		blockchain: 'Ethereum',
		framework: '-',
		contracts: [],
		audits: [],
		social: {
			github: '',
			twitter: 'PoolTogether_',
			medium: '',
			telegram: '',
			reddit: '',
			discord: '',
		},
		articles: [],
		documents: [],
		team: [],
		tags: []
	},
	{
		id: 67,
		podcasts: [],
		title: 'Request Network',
		subtitle: 'The Open Network for Transaction Requests',
		status: '-',
		image: 'request_network.png',
		description: '',
		website: `https://request.network/en/`,
		contractProof: ``,
		blockchain: 'Ethereum',
		framework: '-',
		contracts: [],
		audits: [],
		social: {
			github: '',
			twitter: '',
			medium: 'https://blog.request.network/',
			telegram: '',
			reddit: '',
			discord: '6aGhs6v',
		},
		articles: [],
		documents: [],
		team: [],
		tags: []
	},
	{
		id: 68,
		podcasts: [],
		title: 'Decentraland',
		subtitle: '',
		status: '-',
		image: 'decentraland.jpg',
		description: '',
		website: ``,
		contractProof: ``,
		blockchain: '-',
		framework: '-',
		contracts: [],
		audits: [
			{
				auditor: '',
				auditorWebsite: '',
				auditUrl: '',
				auditDate: ""
			}
		],
		social: {
			github: '',
			twitter: '',
			medium: '',
			telegram: '',
			reddit: '',
			discord: '',
		},
		articles: [],
		documents: [],
		team: [],
		tags: []
	},
	{
		id: 69,
		podcasts: [],
		title: 'Red Light District',
		subtitle: '',
		status: '-',
		image: 'red_light_district.jpg',
		description: '',
		website: ``,
		contractProof: ``,
		blockchain: '-',
		framework: '-',
		contracts: [],
		audits: [],
		social: {
			github: '',
			twitter: '',
			medium: '',
			telegram: '',
			reddit: '',
			discord: '',
		},
		articles: [],
		documents: [],
		team: [],
		tags: []
	},
	{
		id: 70,
		podcasts: [],
		title: 'Autark',
		subtitle: '',
		status: '-',
		image: 'autark.jpg',
		description: 'We are interested in advancing civilization, with a special focus on DAOs, Aragon, worker-autonomy, and tools to enable open source development of mega-projects',
		website: `https://www.autark.xyz/`,
		contractProof: ``,
		blockchain: '-',
		framework: '-',
		contracts: [],
		audits: [],
		social: {
			github: '',
			twitter: 'autarklabs',
			medium: '',
			telegram: '',
			reddit: '',
			discord: '',
		},
		articles: [],
		documents: [],
		team: [],
		tags: []
	},
	{
		id: 71,
		podcasts: [],
		title: 'Aragon Black',
		subtitle: '',
		status: 'active',
		image: 'aragonblack.png',
		description: 'Aragon Black is the third full-team of the Aragon project taking part in its fight for freedom and full decentralization.',
		website: `https://www.aragon.black/`,
		contractProof: ``,
		blockchain: '-',
		framework: '-',
		contracts: [],
		audits: [],
		social: {
			github: '',
			twitter: 'AragonBlackTeam',
			medium: '',
			telegram: '',
			reddit: '',
			discord: '',
		},
		articles: [],
		documents: [],
		team: [],
		tags: []
	},

	{
		id: 72,
		podcasts: [
			{
				title: '#22 – AdChain',
				url: 'https://podtail.com/en/podcast/bitcoin-blockchain-and-crypto-podcast/-22-adchain/',
				date: '16/02/2018'
			},
			{
				title: '#18 Mike Goldin, AdChain: Token-Curated Registries, An Emerging Cryptoeconomic Primitive (S1 Ep5)',
				url: 'https://player.fm/series/grey-mirror-mit-media-labs-digital-currency-initiative-on-technology-society-and-ethics/18-mike-goldin-adchain-token-curated-registries-an-emerging-cryptoeconomic-primitive',
				date: '27/07/2017'
			}
		],
		title: 'Adchain',
		subtitle: '',
		tags: ['TCR'],
		status: '-',
		image: 'adchain.png',
		description: '',
		website: ``,
		contractProof: ``,
		blockchain: 'Ethereum',
		framework: 'Custom',
		contracts: [],
		audits: [],
		social: {
			github: '',
			twitter: 'ad_chain',
			medium: '',
			telegram: '',
			reddit: '',
			discord: '',
		},
		articles: [],
		documents: [],
		team: []
	},
	{
		id: 73,
		podcasts: [],
		title: 'KoalaDAO',
		subtitle: 'Continuous Online Blockathon',
		status: 'prelaunch',
		image: 'bitfwd.jpg',
		description: "The KoalaDAO #Blockathon mission is to run a continuous online Blockchain hackathon that is geared toward inclusive participation and supports the growth of leading crypto projects in that are matching the following verticals: Social, Mobile and Consumer Market. The aim is to serve as testbed for a decentralized ecosystem accelerator community. At the initial stage, the majority of the reputation will be held with the eucalyptus tree committee as described in the governance section below. The reputation will be dynamically adjusted using DAOstack's Alchemy platform. Stakeholders of #KoalaDAO #Blockathon are diverse and come from different organizations or are independent contributors and others.",
		website: `https://www.bitfwd.com/`,
		assetsGoverned: '',
		decentralizationLevel: 'Fully Decentralized with Centralized Seed',
		centralizationPoints: 'During the first 3 months a special group of members called the gardeners will hold the majority of reputation. They will be in charge of steering the DAO and seeding reputation.',
		contractProof: ``,
		blockchain: 'Ethereum',
		framework: 'DAOStack',
		contracts: [],
		audits: [],
		social: {
			github: 'https://github.com/bitfwdcommunity/KoalaDAO',
			twitter: '',
			medium: '',
			telegram: 'https://t.me/bitfwd',
			reddit: '',
			discord: '4xkwkdt',
		},
		articles: [],
		documents: [
			{
				title: 'Governance Structure',
				url: 'https://github.com/bitfwdcommunity/KoalaDAO/blob/master/Governance.MD'
			}
		],
		team: [],
		tags: []
	},
	{
		id: 74,
		podcasts: [],
		title: 'Consoc.io',
		subtitle: 'Union of Societies for Peace and Solidarity',
		status: '-',
		image: 'consocio.jpg',
		description: '',
		website: `https://consoc.io/`,
		contractProof: ``,
		blockchain: '-',
		framework: '-',
		mail: 'info@consoc.io',
		contracts: [],
		audits: [],
		social: {
			github: '',
			twitter: '',
			medium: '',
			telegram: '',
			reddit: '',
			discord: '',
		},
		articles: [],
		documents: [],
		team: [],
		tags: []
	},
]

/*
	{
		id: 0,
		podcasts: [
			{
				title: '',
				url: '',
				date: ''
			}
		],
		title: '',
		subtitle: '',
		status: '-',
		image: '',
		description: '',
		website: ``,
		contractProof: ``,
		blockchain: '-',
		framework: '-',
		contracts: [
			{
				name: '',
				address: ``,
				description: ``
			}
		],
		audits: [
			{
				auditor: '',
				auditorWebsite: '',
				auditUrl: '',
				auditDate: ""
			}
		],
		social: {
			github: '',
			twitter: '',
			medium: '',
			telegram: '',
			reddit: '',
			youtube: '',
			discord: '',
			discourse: '',
			daotalk: ''
		},
		articles: [
			{
				title: ``,
				url: ``
			}
		],
		documents: [
			{
				title: '',
				url: ''
			}
		],
		team: [
			{
				name: '',
				twitter: ''
			}
		],
		tags: [],
		mailingList: ''
	},
*/
