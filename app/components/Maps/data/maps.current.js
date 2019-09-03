// @flow
/* eslint-disable prettier/prettier */
import type { MapsMetaData } from './types';

const mapsMetaData: MapsMetaData = {
  nodes: [
    { data: { label: 'Arcade', tier: 1, id: 'Arcade' } },
    { data: { label: 'Pier', tier: 1, id: 'Pier' } },
    { data: { label: 'Jungle Valley', tier: 1, id: 'JungleValley' } },
    { data: { label: 'Wharf', tier: 1, id: 'Wharf' } },

    { data: { label: 'Cage', tier: 2, id: 'Cage' } },
    { data: { label: 'Armoury', tier: 2, id: 'Armoury' } },
    { data: { label: 'Sulphur Vents', tier: 2, id: 'SulphurVents' } },
    { data: { label: 'Alleyways', tier: 2, id: 'Alleyways' } },
    { data: { label: 'Excavation', tier: 2, id: 'Excavation' } },
    { data: { label: 'Mesa', tier: 2, id: 'Mesa' } },

    { data: { label: 'Tropical Island', tier: 3, id: 'TropicalIsland' } },
    { data: { label: 'Ramparts', tier: 3, id: 'Ramparts' } },
    { data: { label: 'Fungal Hollow', tier: 3, id: 'FungalHollow' } },
    { data: { label: 'Desert', tier: 3, id: 'Desert' } },
    { data: { label: 'Ashen Wood', tier: 3, id: 'AshenWood' } },
    { data: { label: 'Spider Lair', tier: 3, id: 'SpiderLair' } },
    { data: { label: 'Ivory Temple', tier: 3, id: 'IvoryTemple' } },
    { data: { label: 'Strand', tier: 3, id: 'Strand' } },
    { data: { label: 'Mausoleum', tier: 3, id: 'Mausoleum' } },
    { data: { label: 'Pen', tier: 3, id: 'Pen' } },

    { data: { label: 'Leyline', tier: 4, id: 'Leyline' } },
    { data: { label: 'Channel', tier: 4, id: 'Channel' } },
    { data: { label: 'Crater', tier: 4, id: 'Crater' } },
    { data: { label: 'Burial Chambers', tier: 4, id: 'BurialChambers' } },
    { data: { label: 'Barrows', tier: 4, id: 'Barrows' } },
    { data: { label: 'Fields', tier: 4, id: 'Fields' } },
    { data: { label: 'Arid Lake', tier: 4, id: 'AridLake' } },
    { data: { label: 'Arachnid Tomb', tier: 4, id: 'ArachnidTomb' } },
    { data: { label: 'Flooded Mine', tier: 4, id: 'FloodedMine' } },
    { data: { label: 'Cursed Crypt', tier: 4, id: 'CursedCrypt' } },

    { data: { label: 'Beach', tier: 5, id: 'Beach' } },
    { data: { label: 'Marshes', tier: 5, id: 'Marshes' } },
    { data: { label: 'City Square', tier: 5, id: 'CitySquare' } },
    { data: { label: 'Lookout', tier: 5, id: 'Lookout' } },
    { data: { label: 'Haunted Mansion', tier: 5, id: 'HauntedMansion' } },
    { data: { label: 'Peninsula', tier: 5, id: 'Peninsula' } },
    { data: { label: 'Thicket', tier: 5, id: 'Thicket' } },
    { data: { label: 'Grotto', tier: 5, id: 'Grotto' } },
    { data: { label: 'Relic Chambers', tier: 5, id: 'RelicChambers' } },
    { data: { label: 'Glacier', tier: 5, id: 'Glacier' } },

    { data: { label: 'Racecourse', tier: 6, id: 'Racecourse' } },
    { data: { label: 'Lighthouse', tier: 6, id: 'Lighthouse' } },
    { data: { label: 'Bone Crypt', tier: 6, id: 'BoneCrypt' } },
    { data: { label: 'Estuary', tier: 6, id: 'Estuary' } },
    { data: { label: 'Geode', tier: 6, id: 'Geode' } },
    { data: { label: 'Overgrown Shrine', tier: 6, id: 'OvergrownShrine' } },
    { data: { label: 'Arsenal', tier: 6, id: 'Arsenal' } },
    { data: { label: 'Maze', tier: 6, id: 'Maze' } },
    { data: { label: 'Residence', tier: 6, id: 'Residence' } },
    { data: { label: 'Vault', tier: 6, id: 'Vault' } },
    { data: { label: 'Ghetto', tier: 6, id: 'Ghetto' } },

    { data: { label: 'Waste Pool', tier: 7, id: 'WastePool' } },
    { data: { label: 'Chateau', tier: 7, id: 'Chateau' } },
    { data: { label: 'Spider Forest', tier: 7, id: 'SpiderForest' } },
    { data: { label: 'Conservatory', tier: 7, id: 'Conservatory' } },
    { data: { label: 'Factory', tier: 7, id: 'Factory' } },
    { data: { label: 'Villa', tier: 7, id: 'Villa' } },
    { data: { label: 'Underground Sea', tier: 7, id: 'UndergroundSea' } },
    { data: { label: 'Port', tier: 7, id: 'Port' } },
    { data: { label: 'Necropolis', tier: 7, id: 'Necropolis' } },
    { data: { label: 'Bazaar', tier: 7, id: 'Bazaar' } },
    { data: { label: 'Ancient City', tier: 7, id: 'AncientCity' } },

    { data: { label: 'Phantasmagoria', tier: 8, id: 'Phantasmagoria' } },
    { data: { label: 'Cells', tier: 8, id: 'Cells' } },
    { data: { label: 'Graveyard', tier: 8, id: 'Graveyard' } },
    { data: { label: 'Sepulchre', tier: 8, id: 'Sepulchre' } },
    { data: { label: 'Atoll', tier: 8, id: 'Atoll' } },
    { data: { label: 'Pit', tier: 8, id: 'Pit' } },
    { data: { label: 'Temple', tier: 8, id: 'Temple' } },
    { data: { label: 'Volcano', tier: 8, id: 'Volcano' } },
    { data: { label: 'Arachnid Nest', tier: 8, id: 'ArachnidNest' } },
    { data: { label: 'Underground River', tier: 8, id: 'UndergroundRiver' } },
    { data: { label: 'Shore', tier: 8, id: 'Shore' } },

    { data: { label: 'Castle Ruins', tier: 9, id: 'CastleRuins' } },
    { data: { label: 'Courtyard', tier: 9, id: 'Courtyard' } },
    { data: { label: 'Laboratory', tier: 9, id: 'Laboratory' } },
    { data: { label: 'Mineral Pools', tier: 9, id: 'MineralPools' } },
    { data: { label: 'Mud Geyser', tier: 9, id: 'MudGeyser' } },
    { data: { label: 'Scriptorium', tier: 9, id: 'Scriptorium' } },
    { data: { label: 'Coral Ruins', tier: 9, id: 'CoralRuins' } },
    { data: { label: 'Arena', tier: 9, id: 'Arena' } },
    { data: { label: 'Waterways', tier: 9, id: 'Waterways' } },
    { data: { label: 'Promenade', tier: 9, id: 'Promenade' } },
    { data: { label: 'Dungeon', tier: 9, id: 'Dungeon' } },

    { data: { label: 'Overgrown Ruin', tier: 10, id: 'OvergrownRuin' } },
    { data: { label: 'Lava Chamber', tier: 10, id: 'LavaChamber' } },
    { data: { label: 'Moon Temple', tier: 10, id: 'MoonTemple' } },
    { data: { label: 'Toxic Sewer', tier: 10, id: 'ToxicSewer' } },
    { data: { label: 'Dunes', tier: 10, id: 'Dunes' } },
    { data: { label: 'Primordial Pool', tier: 10, id: 'PrimordialPool' } },
    { data: { label: 'Bog', tier: 10, id: 'Bog' } },
    { data: { label: 'Plateau', tier: 10, id: 'Plateau' } },
    { data: { label: 'Iceberg', tier: 10, id: 'Iceberg' } },
    { data: { label: 'Academy', tier: 10, id: 'Academy' } },

    { data: { label: 'Sunken City', tier: 11, id: 'SunkenCity' } },
    { data: { label: 'Gardens', tier: 11, id: 'Gardens' } },
    { data: { label: 'Vaal Pyramid', tier: 11, id: 'VaalPyramid' } },
    { data: { label: 'Tower', tier: 11, id: 'Tower' } },
    { data: { label: 'Palace', tier: 11, id: 'Palace' } },
    { data: { label: 'Reef', tier: 11, id: 'Reef' } },
    { data: { label: 'Lair', tier: 11, id: 'Lair' } },
    { data: { label: 'Caldera', tier: 11, id: 'Caldera' } },
    { data: { label: 'Shrine', tier: 11, id: 'Shrine' } },
    { data: { label: 'Park', tier: 11, id: 'Park' } },

    { data: { label: 'Malformation', tier: 12, id: 'Malformation' } },
    { data: { label: 'Plaza', tier: 12, id: 'Plaza' } },
    { data: { label: 'Belfry', tier: 12, id: 'Belfry' } },
    { data: { label: 'Cemetery', tier: 12, id: 'Cemetery' } },
    { data: { label: 'Desert Spring', tier: 12, id: 'DesertSpring' } },
    { data: { label: 'Shipyard', tier: 12, id: 'Shipyard' } },
    { data: { label: 'Crystal Ore', tier: 12, id: 'CrystalOre' } },
    { data: { label: 'Courthouse', tier: 12, id: 'Courthouse' } },
    { data: { label: 'Dig', tier: 12, id: 'Dig' } },

    { data: { label: 'Basilica', tier: 13, id: 'Basilica' } },
    { data: { label: 'Acid Caverns', tier: 13, id: 'AcidCaverns' } },
    { data: { label: 'Precinct', tier: 13, id: 'Precinct' } },
    { data: { label: 'Wasteland', tier: 13, id: 'Wasteland' } },
    { data: { label: 'Orchard', tier: 13, id: 'Orchard' } },
    { data: { label: 'Crimson Temple', tier: 13, id: 'CrimsonTemple' } },
    { data: { label: 'Carcass', tier: 13, id: 'Carcass' } },
    { data: { label: 'Infested Valley', tier: 13, id: 'InfestedValley' } },
    { data: { label: 'Museum', tier: 13, id: 'Museum' } },

    { data: { label: 'Summit', tier: 14, id: 'Summit' } },
    { data: { label: 'Colosseum', tier: 14, id: 'Colosseum' } },
    { data: { label: 'Defiled Cathedral', tier: 14, id: 'DefiledCathedral' } },
    { data: { label: 'Lava Lake', tier: 14, id: 'LavaLake' } },
    { data: { label: 'Core', tier: 14, id: 'Core' } },
    { data: { label: 'Primordial Blocks', tier: 14, id: 'PrimordialBlocks' } },
    { data: { label: 'Terrace', tier: 14, id: 'Terrace' } },

    { data: { label: 'Dark Forest', tier: 15, id: 'DarkForest' } },
    { data: { label: 'Siege', tier: 15, id: 'Siege' } },
    { data: { label: 'Canyon', tier: 15, id: 'Canyon' } },
    { data: { label: 'Coves', tier: 15, id: 'Coves' } },
    { data: { label: 'Colonnade', tier: 15, id: 'Colonnade' } },

    { data: { label: 'Phoenix', tier: 16, id: 'Phoenix' } },
    { data: { label: 'Hydra', tier: 16, id: 'Hydra' } },
    { data: { label: 'Minotaur', tier: 16, id: 'Minotaur' } },
    { data: { label: 'Chimera', tier: 16, id: 'Chimera' } }
    // { data: { label: 'Shaper', tier: 17, id: 'Shaper' } },
  ],
  edges: [
    { data: { source: 'Arcade', target: 'Cage' } },
    { data: { source: 'Pier', target: 'Armoury' } },
    { data: { source: 'Pier', target: 'SulphurVents' } },
    { data: { source: 'JungleValley', target: 'Alleyways' } },
    { data: { source: 'Wharf', target: 'Excavation' } },
    { data: { source: 'Wharf', target: 'Mesa' } },

    { data: { source: 'Cage', target: 'TropicalIsland' } },
    { data: { source: 'Cage', target: 'Ramparts' } },
    { data: { source: 'Cage', target: 'FungalHollow' } },
    { data: { source: 'Armoury', target: 'Desert' } },
    { data: { source: 'Armoury', target: 'AshenWood' } },
    { data: { source: 'SulphurVents', target: 'AshenWood' } },
    { data: { source: 'SulphurVents', target: 'SpiderLair' } },
    { data: { source: 'Alleyways', target: 'IvoryTemple' } },
    { data: { source: 'Alleyways', target: 'Strand' } },
    { data: { source: 'Excavation', target: 'Mausoleum' } },
    { data: { source: 'Mesa', target: 'Mausoleum' } },
    { data: { source: 'Mesa', target: 'Pen' } },

    { data: { source: 'TropicalIsland', target: 'Leyline' } },
    { data: { source: 'TropicalIsland', target: 'Channel' } },
    { data: { source: 'Ramparts', target: 'Channel' } },
    { data: { source: 'FungalHollow', target: 'Channel' } },
    { data: { source: 'Desert', target: 'Crater' } },
    { data: { source: 'AshenWood', target: 'Crater' } },
    { data: { source: 'AshenWood', target: 'BurialChambers' } },
    { data: { source: 'SpiderLair', target: 'BurialChambers' } },
    { data: { source: 'SpiderLair', target: 'Barrows' } },
    { data: { source: 'IvoryTemple', target: 'Fields' } },
    { data: { source: 'IvoryTemple', target: 'AridLake' } },
    { data: { source: 'Strand', target: 'AridLake' } },
    { data: { source: 'Mausoleum', target: 'ArachnidTomb' } },
    { data: { source: 'Mausoleum', target: 'FloodedMine' } },
    { data: { source: 'Mausoleum', target: 'CursedCrypt' } },
    { data: { source: 'Pen', target: 'CursedCrypt' } },

    { data: { source: 'Leyline', target: 'Beach' } },
    { data: { source: 'Leyline', target: 'Marshes' } },
    { data: { source: 'Channel', target: 'Marshes' } },
    { data: { source: 'Channel', target: 'CitySquare' } },
    { data: { source: 'Crater', target: 'Lookout' } },
    { data: { source: 'Crater', target: 'HauntedMansion' } },
    { data: { source: 'BurialChambers', target: 'HauntedMansion' } },
    { data: { source: 'BurialChambers', target: 'Peninsula' } },
    { data: { source: 'Barrows', target: 'Peninsula' } },
    { data: { source: 'Fields', target: 'Thicket' } },
    { data: { source: 'Fields', target: 'Grotto' } },
    { data: { source: 'AridLake', target: 'Grotto' } },
    { data: { source: 'ArachnidTomb', target: 'RelicChambers' } },
    { data: { source: 'FloodedMine', target: 'RelicChambers' } },
    { data: { source: 'CursedCrypt', target: 'Glacier' } },

    { data: { source: 'Beach', target: 'Racecourse' } },
    { data: { source: 'Beach', target: 'Lighthouse' } },
    { data: { source: 'Marshes', target: 'Lighthouse' } },
    { data: { source: 'CitySquare', target: 'Lighthouse' } },
    { data: { source: 'CitySquare', target: 'BoneCrypt' } },
    { data: { source: 'Lookout', target: 'Estuary' } },
    { data: { source: 'HauntedMansion', target: 'Estuary' } },
    { data: { source: 'HauntedMansion', target: 'Geode' } },
    { data: { source: 'Peninsula', target: 'Geode' } },
    { data: { source: 'Peninsula', target: 'OvergrownShrine' } },
    { data: { source: 'Thicket', target: 'Arsenal' } },
    { data: { source: 'Thicket', target: 'Maze' } },
    { data: { source: 'Thicket', target: 'Residence' } },
    { data: { source: 'Grotto', target: 'Residence' } },
    { data: { source: 'RelicChambers', target: 'Vault' } },
    { data: { source: 'Glacier', target: 'Vault' } },
    { data: { source: 'Glacier', target: 'Ghetto' } },

    { data: { source: 'Racecourse', target: 'WastePool' } },
    { data: { source: 'Lighthouse', target: 'WastePool' } },
    { data: { source: 'Lighthouse', target: 'Chateau' } },
    { data: { source: 'BoneCrypt', target: 'Chateau' } },
    { data: { source: 'BoneCrypt', target: 'SpiderForest' } },
    { data: { source: 'Estuary', target: 'Conservatory' } },
    { data: { source: 'Estuary', target: 'Factory' } },
    { data: { source: 'Geode', target: 'Factory' } },
    { data: { source: 'Geode', target: 'Villa' } },
    { data: { source: 'Geode', target: 'OvergrownShrine' } },
    { data: { source: 'Arsenal', target: 'UndergroundSea' } },
    { data: { source: 'Maze', target: 'UndergroundSea' } },
    { data: { source: 'Residence', target: 'Port' } },
    { data: { source: 'Residence', target: 'Necropolis' } },
    { data: { source: 'Vault', target: 'Bazaar' } },
    { data: { source: 'Vault', target: 'AncientCity' } },
    { data: { source: 'Ghetto', target: 'AncientCity' } },

    { data: { source: 'WastePool', target: 'Phantasmagoria' } },
    { data: { source: 'Chateau', target: 'Phantasmagoria' } },
    { data: { source: 'Chateau', target: 'Cells' } },
    { data: { source: 'SpiderForest', target: 'Cells' } },
    { data: { source: 'Conservatory', target: 'Graveyard' } },
    { data: { source: 'Conservatory', target: 'Sepulchre' } },
    { data: { source: 'Factory', target: 'Sepulchre' } },
    { data: { source: 'Factory', target: 'Atoll' } },
    { data: { source: 'Villa', target: 'Atoll' } },
    { data: { source: 'UndergroundSea', target: 'Pit' } },
    { data: { source: 'UndergroundSea', target: 'Temple' } },
    { data: { source: 'Port', target: 'Temple' } },
    { data: { source: 'Port', target: 'Volcano' } },
    { data: { source: 'Necropolis', target: 'Volcano' } },
    { data: { source: 'Bazaar', target: 'ArachnidNest' } },
    { data: { source: 'Bazaar', target: 'UndergroundRiver' } },
    { data: { source: 'Bazaar', target: 'Shore' } },
    { data: { source: 'AncientCity', target: 'Shore' } },

    { data: { source: 'Phantasmagoria', target: 'CastleRuins' } },
    { data: { source: 'Phantasmagoria', target: 'Courtyard' } },
    { data: { source: 'Cells', target: 'Laboratory' } },
    { data: { source: 'Graveyard', target: 'MineralPools' } },
    { data: { source: 'Graveyard', target: 'MudGeyser' } },
    { data: { source: 'Sepulchre', target: 'MudGeyser' } },
    { data: { source: 'Sepulchre', target: 'Scriptorium' } },
    { data: { source: 'Atoll', target: 'Scriptorium' } },
    { data: { source: 'Pit', target: 'CoralRuins' } },
    { data: { source: 'Temple', target: 'CoralRuins' } },
    { data: { source: 'Volcano', target: 'Arena' } },
    { data: { source: 'ArachnidNest', target: 'Waterways' } },
    { data: { source: 'ArachnidNest', target: 'Promenade' } },
    { data: { source: 'UndergroundRiver', target: 'Promenade' } },
    { data: { source: 'UndergroundRiver', target: 'Dungeon' } },
    { data: { source: 'Shore', target: 'Dungeon' } },

    { data: { source: 'CastleRuins', target: 'OvergrownRuin' } },
    { data: { source: 'CastleRuins', target: 'LavaChamber' } },
    { data: { source: 'Courtyard', target: 'LavaChamber' } },
    { data: { source: 'Laboratory', target: 'MoonTemple' } },
    { data: { source: 'MineralPools', target: 'ToxicSewer' } },
    { data: { source: 'MudGeyser', target: 'ToxicSewer' } },
    { data: { source: 'Scriptorium', target: 'ToxicSewer' } },
    { data: { source: 'Scriptorium', target: 'Dunes' } },
    { data: { source: 'Scriptorium', target: 'PrimordialPool' } },
    { data: { source: 'CoralRuins', target: 'Bog' } },
    { data: { source: 'CoralRuins', target: 'Plateau' } },
    { data: { source: 'Arena', target: 'Plateau' } },
    { data: { source: 'Waterways', target: 'Iceberg' } },
    { data: { source: 'Promenade', target: 'Iceberg' } },
    { data: { source: 'Promenade', target: 'Academy' } },
    { data: { source: 'Dungeon', target: 'Academy' } },

    { data: { source: 'OvergrownRuin', target: 'SunkenCity' } },
    { data: { source: 'LavaChamber', target: 'SunkenCity' } },
    { data: { source: 'LavaChamber', target: 'Gardens' } },
    { data: { source: 'MoonTemple', target: 'Gardens' } },
    { data: { source: 'MoonTemple', target: 'VaalPyramid' } },
    { data: { source: 'ToxicSewer', target: 'Tower' } },
    { data: { source: 'Dunes', target: 'Palace' } },
    { data: { source: 'PrimordialPool', target: 'Palace' } },
    { data: { source: 'Bog', target: 'Reef' } },
    { data: { source: 'Bog', target: 'Lair' } },
    { data: { source: 'Plateau', target: 'Lair' } },
    { data: { source: 'Plateau', target: 'Caldera' } },
    { data: { source: 'Iceberg', target: 'Shrine' } },
    { data: { source: 'Iceberg', target: 'Park' } },
    { data: { source: 'Academy', target: 'Park' } },

    { data: { source: 'SunkenCity', target: 'Malformation' } },
    { data: { source: 'Gardens', target: 'Malformation' } },
    { data: { source: 'Gardens', target: 'Plaza' } },
    { data: { source: 'VaalPyramid', target: 'Plaza' } },
    { data: { source: 'Tower', target: 'Belfry' } },
    { data: { source: 'Tower', target: 'Cemetery' } },
    { data: { source: 'Palace', target: 'Cemetery' } },
    { data: { source: 'Palace', target: 'DesertSpring' } },
    { data: { source: 'Reef', target: 'Shipyard' } },
    { data: { source: 'Lair', target: 'Shipyard' } },
    { data: { source: 'Lair', target: 'CrystalOre' } },
    { data: { source: 'Caldera', target: 'CrystalOre' } },
    { data: { source: 'Shrine', target: 'CrystalOre' } },
    { data: { source: 'Shrine', target: 'Courthouse' } },
    { data: { source: 'Park', target: 'Dig' } },

    { data: { source: 'Malformation', target: 'Basilica' } },
    { data: { source: 'Plaza', target: 'Basilica' } },
    { data: { source: 'Plaza', target: 'AcidCaverns' } },
    { data: { source: 'Plaza', target: 'Precinct' } },
    { data: { source: 'Belfry', target: 'Precinct' } },
    { data: { source: 'Belfry', target: 'Wasteland' } },
    { data: { source: 'Cemetery', target: 'Wasteland' } },
    { data: { source: 'Cemetery', target: 'Orchard' } },
    { data: { source: 'DesertSpring', target: 'Orchard' } },
    { data: { source: 'Shipyard', target: 'CrimsonTemple' } },
    { data: { source: 'CrystalOre', target: 'CrimsonTemple' } },
    { data: { source: 'CrystalOre', target: 'Carcass' } },
    { data: { source: 'Courthouse', target: 'InfestedValley' } },
    { data: { source: 'Dig', target: 'InfestedValley' } },
    { data: { source: 'Dig', target: 'Museum' } },

    { data: { source: 'Basilica', target: 'Summit' } },
    { data: { source: 'AcidCaverns', target: 'Summit' } },
    { data: { source: 'Precinct', target: 'Summit' } },
    { data: { source: 'Wasteland', target: 'Colosseum' } },
    { data: { source: 'Wasteland', target: 'DefiledCathedral' } },
    { data: { source: 'Orchard', target: 'DefiledCathedral' } },
    { data: { source: 'CrimsonTemple', target: 'LavaLake' } },
    { data: { source: 'CrimsonTemple', target: 'Core' } },
    { data: { source: 'Carcass', target: 'Core' } },
    { data: { source: 'InfestedValley', target: 'PrimordialBlocks' } },
    { data: { source: 'InfestedValley', target: 'Terrace' } },
    { data: { source: 'Museum', target: 'Terrace' } },

    { data: { source: 'Summit', target: 'DarkForest' } },
    { data: { source: 'Colosseum', target: 'Siege' } },
    { data: { source: 'DefiledCathedral', target: 'Siege' } },
    { data: { source: 'LavaLake', target: 'Canyon' } },
    { data: { source: 'Core', target: 'Canyon' } },
    { data: { source: 'PrimordialBlocks', target: 'Coves' } },
    { data: { source: 'Terrace', target: 'Coves' } },
    { data: { source: 'Terrace', target: 'Colonnade' } },

    { data: { source: 'DarkForest', target: 'Chimera' } },
    { data: { source: 'Siege', target: 'Minotaur' } },
    { data: { source: 'Canyon', target: 'Phoenix' } },
    { data: { source: 'Coves', target: 'Hydra' } },
    { data: { source: 'Colonnade', target: 'Hydra' } }

    // { data: { source: 'Ghetto', target: 'Racecourse', equal: true } },
    // { data: { source: 'Shore', target: 'Phantasmagoria', equal: true } },
    // { data: { source: 'Cells', target: 'Graveyard', equal: true } },
    // { data: { source: 'Atoll', target: 'Pit', equal: true } },
    // { data: { source: 'Volcano', target: 'ArachnidNest', equal: true } },
    // { data: { source: 'Dig', target: 'Malformation', equal: true } },
    // { data: { source: 'DesertSpring', target: 'Shipyard', equal: true } },

    // { data: { source: 'Phoenix', target: 'Shaper' } },
    // { data: { source: 'Hydra', target: 'Shaper' } },
    // { data: { source: 'Minotaur', target: 'Shaper' } },
    // { data: { source: 'Chimera', target: 'Shaper' } },
  ]
};

export default mapsMetaData;
