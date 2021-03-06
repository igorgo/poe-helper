// @flow
/* eslint-disable prettier/prettier */
import type { MapsMetaData } from './types';

const mapsMetaData: MapsMetaData = {
  nodes: [
    { data: { label: 'Desert', tier: 1, id: 'Desert' } },
    { data: { label: 'Haunted Mansion', tier: 1, id: 'HauntedMansion' } },
    { data: { label: 'Ivory Temple', tier: 1, id: 'IvoryTemple' } },
    { data: { label: 'Sulphur Vents', tier: 1, id: 'SulphurVents' } },
    { data: { label: 'Alleyways', tier: 2, id: 'Alleyways' } },
    { data: { label: 'Armoury', tier: 2, id: 'Armoury' } },
    { data: { label: 'Barrows', tier: 2, id: 'Barrows' } },
    { data: { label: 'Glacier', tier: 2, id: 'Glacier' } },
    { data: { label: 'Lookout', tier: 2, id: 'Lookout' } },
    { data: { label: 'Thicket', tier: 2, id: 'Thicket' } },
    { data: { label: 'Arachnid Tomb', tier: 3, id: 'ArachnidTomb' } },
    { data: { label: 'Arid Lake', tier: 3, id: 'AridLake' } },
    { data: { label: 'Ashen Wood', tier: 3, id: 'AshenWood' } },
    { data: { label: 'Flooded Mine', tier: 3, id: 'FloodedMine' } },
    { data: { label: 'Leyline', tier: 3, id: 'Leyline' } },
    { data: { label: 'Mausoleum', tier: 3, id: 'Mausoleum' } },
    { data: { label: 'Pen', tier: 3, id: 'Pen' } },
    { data: { label: 'Pier', tier: 3, id: 'Pier' } },
    { data: { label: 'Relic Chambers', tier: 3, id: 'RelicChambers' } },
    { data: { label: 'Wharf', tier: 3, id: 'Wharf' } },
    { data: { label: 'Beach', tier: 4, id: 'Beach' } },
    { data: { label: 'Cage', tier: 4, id: 'Cage' } },
    { data: { label: 'Channel', tier: 4, id: 'Channel' } },
    { data: { label: 'City Square', tier: 4, id: 'CitySquare' } },
    { data: { label: 'Crater', tier: 4, id: 'Crater' } },
    { data: { label: 'Cursed Crypt', tier: 4, id: 'CursedCrypt' } },
    { data: { label: 'Excavation', tier: 4, id: 'Excavation' } },
    { data: { label: 'Fields', tier: 4, id: 'Fields' } },
    { data: { label: 'Grotto', tier: 4, id: 'Grotto' } },
    { data: { label: 'Strand', tier: 4, id: 'Strand' } },
    { data: { label: 'Arcade', tier: 5, id: 'Arcade' } },
    { data: { label: 'Burial Chambers', tier: 5, id: 'BurialChambers' } },
    { data: { label: 'Fungal Hollow', tier: 5, id: 'FungalHollow' } },
    { data: { label: 'Jungle Valley', tier: 5, id: 'JungleValley' } },
    { data: { label: 'Marshes', tier: 5, id: 'Marshes' } },
    { data: { label: 'Mesa', tier: 5, id: 'Mesa' } },
    { data: { label: 'Peninsula', tier: 5, id: 'Peninsula' } },
    { data: { label: 'Ramparts', tier: 5, id: 'Ramparts' } },
    { data: { label: 'Spider Lair', tier: 5, id: 'SpiderLair' } },
    { data: { label: 'Tropical Island', tier: 5, id: 'TropicalIsland' } },
    { data: { label: 'Ancient City', tier: 6, id: 'AncientCity' } },
    { data: { label: 'Atoll', tier: 6, id: 'Atoll' } },
    { data: { label: 'Cells', tier: 6, id: 'Cells' } },
    { data: { label: 'Courtyard', tier: 6, id: 'Courtyard' } },
    { data: { label: 'Maze', tier: 6, id: 'Maze' } },
    { data: { label: 'Mud Geyser', tier: 6, id: 'MudGeyser' } },
    { data: { label: 'Overgrown Ruin', tier: 6, id: 'OvergrownRuin' } },
    { data: { label: 'Phantasmagoria', tier: 6, id: 'Phantasmagoria' } },
    { data: { label: 'Primordial Pool', tier: 6, id: 'PrimordialPool' } },
    { data: { label: 'Promenade', tier: 6, id: 'Promenade' } },
    { data: { label: 'Waste Pool', tier: 6, id: 'WastePool' } },
    { data: { label: 'Arena', tier: 7, id: 'Arena' } },
    { data: { label: 'Conservatory', tier: 7, id: 'Conservatory' } },
    { data: { label: 'Dungeon', tier: 7, id: 'Dungeon' } },
    { data: { label: 'Graveyard', tier: 7, id: 'Graveyard' } },
    { data: { label: 'Laboratory', tier: 7, id: 'Laboratory' } },
    { data: { label: 'Overgrown Shrine', tier: 7, id: 'OvergrownShrine' } },
    { data: { label: 'Racecourse', tier: 7, id: 'Racecourse' } },
    { data: { label: 'Residence', tier: 7, id: 'Residence' } },
    { data: { label: 'Spider Forest', tier: 7, id: 'SpiderForest' } },
    { data: { label: 'Vault', tier: 7, id: 'Vault' } },
    { data: { label: 'Waterways', tier: 7, id: 'Waterways' } },
    { data: { label: 'Bone Crypt', tier: 8, id: 'BoneCrypt' } },
    { data: { label: 'Chateau', tier: 8, id: 'Chateau' } },
    { data: { label: 'Dunes', tier: 8, id: 'Dunes' } },
    { data: { label: 'Estuary', tier: 8, id: 'Estuary' } },
    { data: { label: 'Factory', tier: 8, id: 'Factory' } },
    { data: { label: 'Ghetto', tier: 8, id: 'Ghetto' } },
    { data: { label: 'Iceberg', tier: 8, id: 'Iceberg' } },
    { data: { label: 'Necropolis', tier: 8, id: 'Necropolis' } },
    { data: { label: 'Pit', tier: 8, id: 'Pit' } },
    { data: { label: 'Scriptorium', tier: 8, id: 'Scriptorium' } },
    { data: { label: 'Toxic Sewer', tier: 8, id: 'ToxicSewer' } },
    { data: { label: 'Arachnid Nest', tier: 9, id: 'ArachnidNest' } },
    { data: { label: 'Arsenal', tier: 9, id: 'Arsenal' } },
    { data: { label: 'Castle Ruins', tier: 9, id: 'CastleRuins' } },
    { data: { label: 'Lighthouse', tier: 9, id: 'Lighthouse' } },
    { data: { label: 'Mineral Pools', tier: 9, id: 'MineralPools' } },
    { data: { label: 'Moon Temple', tier: 9, id: 'MoonTemple' } },
    { data: { label: 'Port', tier: 9, id: 'Port' } },
    { data: { label: 'Shore', tier: 9, id: 'Shore' } },
    { data: { label: 'Underground River', tier: 9, id: 'UndergroundRiver' } },
    { data: { label: 'Underground Sea', tier: 9, id: 'UndergroundSea' } },
    { data: { label: 'Villa', tier: 9, id: 'Villa' } },
    { data: { label: 'Academy', tier: 10, id: 'Academy' } },
    { data: { label: 'Bazaar', tier: 10, id: 'Bazaar' } },
    { data: { label: 'Bog', tier: 10, id: 'Bog' } },
    { data: { label: 'Coral Ruins', tier: 10, id: 'CoralRuins' } },
    { data: { label: 'Geode', tier: 10, id: 'Geode' } },
    { data: { label: 'Lava Chamber', tier: 10, id: 'LavaChamber' } },
    { data: { label: 'Plateau', tier: 10, id: 'Plateau' } },
    { data: { label: 'Sepulchre', tier: 10, id: 'Sepulchre' } },
    { data: { label: 'Temple', tier: 10, id: 'Temple' } },
    { data: { label: 'Volcano', tier: 10, id: 'Volcano' } },

    { data: { label: 'Colonnade', tier: 11, id: 'Colonnade' } },
    { data: { label: 'Crimson Temple', tier: 11, id: 'CrimsonTemple' } },
    { data: { label: 'Dig', tier: 11, id: 'Dig' } },
    { data: { label: 'Gardens', tier: 11, id: 'Gardens' } },
    { data: { label: 'Infested Valley', tier: 11, id: 'InfestedValley' } },
    { data: { label: 'Lair', tier: 11, id: 'Lair' } },
    { data: { label: 'Malformation', tier: 11, id: 'Malformation' } },
    { data: { label: 'Museum', tier: 11, id: 'Museum' } },
    { data: { label: 'Precinct', tier: 11, id: 'Precinct' } },
    { data: { label: 'Siege', tier: 11, id: 'Siege' } },

    { data: { label: 'Canyon', tier: 12, id: 'Canyon' } },
    { data: { label: 'Carcass', tier: 12, id: 'Carcass' } },
    { data: { label: 'Cemetery', tier: 12, id: 'Cemetery' } },
    { data: { label: 'Colosseum', tier: 12, id: 'Colosseum' } },
    { data: { label: 'Core', tier: 12, id: 'Core' } },
    { data: { label: 'Lava Lake', tier: 12, id: 'LavaLake' } },
    { data: { label: 'Park', tier: 12, id: 'Park' } },
    { data: { label: 'Shipyard', tier: 12, id: 'Shipyard' } },
    { data: { label: 'Vaal Pyramid', tier: 12, id: 'VaalPyramid' } },

    { data: { label: 'Belfry', tier: 13, id: 'Belfry' } },
    { data: { label: 'Coves', tier: 13, id: 'Coves' } },
    { data: { label: 'Defiled Cathedral', tier: 13, id: 'DefiledCathedral' } },
    { data: { label: 'Plaza', tier: 13, id: 'Plaza' } },
    { data: { label: 'Reef', tier: 13, id: 'Reef' } },
    { data: { label: 'Shrine', tier: 13, id: 'Shrine' } },
    { data: { label: 'Sunken City', tier: 13, id: 'SunkenCity' } },
    { data: { label: 'Terrace', tier: 13, id: 'Terrace' } },
    { data: { label: 'Tower', tier: 13, id: 'Tower' } },

    { data: { label: 'Basilica', tier: 14, id: 'Basilica' } },
    { data: { label: 'Courthouse', tier: 14, id: 'Courthouse' } },
    { data: { label: 'Crystal Ore', tier: 14, id: 'CrystalOre' } },
    { data: { label: 'Dark Forest', tier: 14, id: 'DarkForest' } },
    { data: { label: 'Orchard', tier: 14, id: 'Orchard' } },
    { data: { label: 'Primordial Blocks', tier: 14, id: 'PrimordialBlocks' } },
    { data: { label: 'Wasteland', tier: 14, id: 'Wasteland' } },

    { data: { label: 'Acid Caverns', tier: 15, id: 'AcidCaverns' } },
    { data: { label: 'Caldera', tier: 15, id: 'Caldera' } },
    { data: { label: 'Desert Spring', tier: 15, id: 'DesertSpring' } },
    { data: { label: 'Palace', tier: 15, id: 'Palace' } },
    { data: { label: 'Summit', tier: 15, id: 'Summit' } },

    { data: { label: 'Phoenix', tier: 16, id: 'Phoenix' } },
    { data: { label: 'Hydra', tier: 16, id: 'Hydra' } },
    { data: { label: 'Minotaur', tier: 16, id: 'Minotaur' } },
    { data: { label: 'Chimera', tier: 16, id: 'Chimera' } }
    // { data: { label: 'Shaper', tier: 17, id: 'Shaper' } },
  ],
  edges: [
    { data: { source: 'SulphurVents', target: 'Glacier' } },
    { data: { source: 'HauntedMansion', target: 'Thicket' } },
    { data: { source: 'HauntedMansion', target: 'Alleyways' } },
    { data: { source: 'IvoryTemple', target: 'Lookout' } },
    { data: { source: 'IvoryTemple', target: 'Barrows' } },
    { data: { source: 'Desert', target: 'Armoury' } },
    { data: { source: 'Alleyways', target: 'Pier' } },
    { data: { source: 'Armoury', target: 'FloodedMine' } },
    { data: { source: 'Armoury', target: 'Pen' } },
    { data: { source: 'Armoury', target: 'Wharf' } },
    { data: { source: 'Barrows', target: 'ArachnidTomb' } },
    { data: { source: 'Barrows', target: 'AridLake' } },
    { data: { source: 'Glacier', target: 'Leyline' } },
    { data: { source: 'Glacier', target: 'Mausoleum' } },
    { data: { source: 'Lookout', target: 'AridLake' } },
    { data: { source: 'Thicket', target: 'AshenWood' } },
    { data: { source: 'Thicket', target: 'Pier' } },
    { data: { source: 'Thicket', target: 'RelicChambers' } },
    { data: { source: 'ArachnidTomb', target: 'Beach' } },
    { data: { source: 'ArachnidTomb', target: 'Channel' } },
    { data: { source: 'AridLake', target: 'Channel' } },
    { data: { source: 'AridLake', target: 'Strand' } },
    { data: { source: 'AshenWood', target: 'Cage' } },
    { data: { source: 'AshenWood', target: 'Grotto' } },
    { data: { source: 'FloodedMine', target: 'Fields' } },
    { data: { source: 'Leyline', target: 'Crater' } },
    { data: { source: 'Leyline', target: 'Excavation' } },
    { data: { source: 'Mausoleum', target: 'Excavation' } },
    { data: { source: 'Pen', target: 'CitySquare' } },
    { data: { source: 'Pier', target: 'CursedCrypt' } },
    { data: { source: 'RelicChambers', target: 'CursedCrypt' } },
    { data: { source: 'RelicChambers', target: 'Grotto' } },
    { data: { source: 'Wharf', target: 'CitySquare' } },
    { data: { source: 'Wharf', target: 'Fields' } },
    { data: { source: 'Beach', target: 'JungleValley' } },
    { data: { source: 'Beach', target: 'Peninsula' } },
    { data: { source: 'Cage', target: 'FungalHollow' } },
    { data: { source: 'Channel', target: 'Peninsula' } },
    { data: { source: 'CitySquare', target: 'BurialChambers' } },
    { data: { source: 'CitySquare', target: 'Ramparts' } },
    { data: { source: 'Crater', target: 'SpiderLair' } },
    { data: { source: 'Crater', target: 'TropicalIsland' } },
    { data: { source: 'CursedCrypt', target: 'Arcade' } },
    { data: { source: 'CursedCrypt', target: 'FungalHollow' } },
    { data: { source: 'Excavation', target: 'Marshes' } },
    { data: { source: 'Excavation', target: 'SpiderLair' } },
    { data: { source: 'Fields', target: 'BurialChambers' } },
    { data: { source: 'Fields', target: 'Mesa' } },
    { data: { source: 'Grotto', target: 'FungalHollow' } },
    { data: { source: 'Strand', target: 'Peninsula' } },
    { data: { source: 'Arcade', target: 'OvergrownRuin' } },
    { data: { source: 'Arcade', target: 'PrimordialPool' } },
    { data: { source: 'BurialChambers', target: 'Maze' } },
    { data: { source: 'BurialChambers', target: 'Promenade' } },
    { data: { source: 'FungalHollow', target: 'AncientCity' } },
    { data: { source: 'FungalHollow', target: 'PrimordialPool' } },
    { data: { source: 'JungleValley', target: 'Cells' } },
    { data: { source: 'JungleValley', target: 'Phantasmagoria' } },
    { data: { source: 'Marshes', target: 'Courtyard' } },
    { data: { source: 'Marshes', target: 'MudGeyser' } },
    { data: { source: 'Mesa', target: 'Promenade' } },
    { data: { source: 'Peninsula', target: 'Phantasmagoria' } },
    { data: { source: 'Peninsula', target: 'WastePool' } },
    { data: { source: 'Ramparts', target: 'Atoll' } },
    { data: { source: 'Ramparts', target: 'Maze' } },
    { data: { source: 'SpiderLair', target: 'MudGeyser' } },
    { data: { source: 'TropicalIsland', target: 'MudGeyser' } },
    { data: { source: 'AncientCity', target: 'Arena' } },
    { data: { source: 'AncientCity', target: 'SpiderForest' } },
    { data: { source: 'Atoll', target: 'Vault' } },
    { data: { source: 'Atoll', target: 'Waterways' } },
    { data: { source: 'Cells', target: 'Conservatory' } },
    { data: { source: 'Courtyard', target: 'Dungeon' } },
    { data: { source: 'Maze', target: 'Waterways' } },
    { data: { source: 'MudGeyser', target: 'Dungeon' } },
    { data: { source: 'MudGeyser', target: 'Graveyard' } },
    { data: { source: 'MudGeyser', target: 'Racecourse' } },
    { data: { source: 'OvergrownRuin', target: 'Residence' } },
    { data: { source: 'Phantasmagoria', target: 'Conservatory' } },
    { data: { source: 'Phantasmagoria', target: 'Laboratory' } },
    { data: { source: 'PrimordialPool', target: 'Residence' } },
    { data: { source: 'PrimordialPool', target: 'SpiderForest' } },
    { data: { source: 'Promenade', target: 'Waterways' } },
    { data: { source: 'WastePool', target: 'Laboratory' } },
    { data: { source: 'WastePool', target: 'OvergrownShrine' } },
    { data: { source: 'Arena', target: 'Scriptorium' } },
    { data: { source: 'Conservatory', target: 'Pit' } },
    { data: { source: 'Dungeon', target: 'Dunes' } },
    { data: { source: 'Graveyard', target: 'Factory' } },
    { data: { source: 'Laboratory', target: 'Ghetto' } },
    { data: { source: 'Laboratory', target: 'Pit' } },
    { data: { source: 'OvergrownShrine', target: 'BoneCrypt' } },
    { data: { source: 'OvergrownShrine', target: 'Ghetto' } },
    { data: { source: 'Racecourse', target: 'Dunes' } },
    { data: { source: 'Racecourse', target: 'Factory' } },
    { data: { source: 'Residence', target: 'Chateau' } },
    { data: { source: 'Residence', target: 'ToxicSewer' } },
    { data: { source: 'SpiderForest', target: 'Scriptorium' } },
    { data: { source: 'SpiderForest', target: 'ToxicSewer' } },
    { data: { source: 'Vault', target: 'Estuary' } },
    { data: { source: 'Waterways', target: 'Iceberg' } },
    { data: { source: 'BoneCrypt', target: 'MoonTemple' } },
    { data: { source: 'Chateau', target: 'Shore' } },
    { data: { source: 'Dunes', target: 'MineralPools' } },
    { data: { source: 'Dunes', target: 'UndergroundRiver' } },
    { data: { source: 'Estuary', target: 'Port' } },
    { data: { source: 'Factory', target: 'Villa' } },
    { data: { source: 'Ghetto', target: 'Arsenal' } },
    { data: { source: 'Ghetto', target: 'MoonTemple' } },
    { data: { source: 'Iceberg', target: 'ArachnidNest' } },
    { data: { source: 'Necropolis', target: 'Villa' } },
    { data: { source: 'Pit', target: 'Lighthouse' } },
    { data: { source: 'Scriptorium', target: 'UndergroundSea' } },
    { data: { source: 'ToxicSewer', target: 'CastleRuins' } },
    { data: { source: 'ToxicSewer', target: 'UndergroundSea' } },
    { data: { source: 'ArachnidNest', target: 'Plateau' } },
    { data: { source: 'Arsenal', target: 'Geode' } },
    { data: { source: 'CastleRuins', target: 'CoralRuins' } },
    { data: { source: 'CastleRuins', target: 'Sepulchre' } },
    { data: { source: 'Lighthouse', target: 'Bog' } },
    { data: { source: 'Lighthouse', target: 'Geode' } },
    { data: { source: 'MineralPools', target: 'Temple' } },
    { data: { source: 'MoonTemple', target: 'Geode' } },
    { data: { source: 'MoonTemple', target: 'Volcano' } },
    { data: { source: 'Port', target: 'LavaChamber' } },
    { data: { source: 'Shore', target: 'CoralRuins' } },
    { data: { source: 'UndergroundRiver', target: 'Temple' } },
    { data: { source: 'UndergroundSea', target: 'Sepulchre' } },
    { data: { source: 'Villa', target: 'Academy' } },
    { data: { source: 'Villa', target: 'Bazaar' } },

    { data: { source: 'Academy', target: 'Dig' } },
    { data: { source: 'Academy', target: 'InfestedValley' } },
    { data: { source: 'Bazaar', target: 'Dig' } },
    { data: { source: 'Bazaar', target: 'Lair' } },
    { data: { source: 'Bog', target: 'CrimsonTemple' } },
    { data: { source: 'Bog', target: 'Gardens' } },
    { data: { source: 'CoralRuins', target: 'Colonnade' } },
    { data: { source: 'CoralRuins', target: 'Museum' } },
    { data: { source: 'Geode', target: 'CrimsonTemple' } },
    { data: { source: 'Geode', target: 'Precinct' } },
    { data: { source: 'LavaChamber', target: 'Malformation' } },
    { data: { source: 'Plateau', target: 'Malformation' } },
    { data: { source: 'Plateau', target: 'Siege' } },
    { data: { source: 'Sepulchre', target: 'Museum' } },
    { data: { source: 'Temple', target: 'InfestedValley' } },
    { data: { source: 'Volcano', target: 'Precinct' } },

    { data: { source: 'Colonnade', target: 'Carcass' } },
    { data: { source: 'Colonnade', target: 'Core' } },
    { data: { source: 'CrimsonTemple', target: 'Park' } },
    { data: { source: 'Dig', target: 'LavaLake' } },
    { data: { source: 'Gardens', target: 'Park' } },
    { data: { source: 'InfestedValley', target: 'Colosseum' } },
    { data: { source: 'InfestedValley', target: 'LavaLake' } },
    { data: { source: 'Lair', target: 'LavaLake' } },
    { data: { source: 'Malformation', target: 'Cemetery' } },
    { data: { source: 'Museum', target: 'Canyon' } },
    { data: { source: 'Museum', target: 'Carcass' } },
    { data: { source: 'Precinct', target: 'Shipyard' } },
    { data: { source: 'Siege', target: 'VaalPyramid' } },

    { data: { source: 'Canyon', target: 'Plaza' } },
    { data: { source: 'Carcass', target: 'Plaza' } },
    { data: { source: 'Carcass', target: 'Shrine' } },
    { data: { source: 'Cemetery', target: 'Tower' } },
    { data: { source: 'Colosseum', target: 'Terrace' } },
    { data: { source: 'Core', target: 'Shrine' } },
    { data: { source: 'LavaLake', target: 'Reef' } },
    { data: { source: 'Park', target: 'Belfry' } },
    { data: { source: 'Park', target: 'DefiledCathedral' } },
    { data: { source: 'Shipyard', target: 'Belfry' } },
    { data: { source: 'Shipyard', target: 'Coves' } },
    { data: { source: 'Shipyard', target: 'Shrine' } },
    { data: { source: 'VaalPyramid', target: 'SunkenCity' } },

    { data: { source: 'Belfry', target: 'Wasteland' } },
    { data: { source: 'Coves', target: 'Wasteland' } },
    { data: { source: 'DefiledCathedral', target: 'Wasteland' } },
    { data: { source: 'Plaza', target: 'Courthouse' } },
    { data: { source: 'Plaza', target: 'CrystalOre' } },
    { data: { source: 'Reef', target: 'Basilica' } },
    { data: { source: 'Reef', target: 'DarkForest' } },
    { data: { source: 'Shrine', target: 'CrystalOre' } },
    { data: { source: 'SunkenCity', target: 'Orchard' } },
    { data: { source: 'SunkenCity', target: 'PrimordialBlocks' } },
    { data: { source: 'Terrace', target: 'Basilica' } },
    { data: { source: 'Tower', target: 'PrimordialBlocks' } },

    { data: { source: 'Basilica', target: 'DesertSpring' } },
    { data: { source: 'Basilica', target: 'Palace' } },
    { data: { source: 'Courthouse', target: 'AcidCaverns' } },
    { data: { source: 'CrystalOre', target: 'AcidCaverns' } },
    { data: { source: 'DarkForest', target: 'Palace' } },
    { data: { source: 'Orchard', target: 'Summit' } },
    { data: { source: 'PrimordialBlocks', target: 'Summit' } },
    { data: { source: 'Wasteland', target: 'Caldera' } },

    { data: { source: 'AcidCaverns', target: 'Chimera' } },
    { data: { source: 'Caldera', target: 'Minotaur' } },
    { data: { source: 'DesertSpring', target: 'Hydra' } },
    { data: { source: 'Palace', target: 'Hydra' } },
    { data: { source: 'Summit', target: 'Phoenix' } }

    // { data: { source: 'Courtyard', target: 'AncientCity', equal: true } },
    // { data: { source: 'Cells', target: 'Promenade', equal: true  } },
    // { data: { source: 'Dunes', target: 'Scriptorium', equal: true  } },
    // { data: { source: 'Chateau', target: 'BoneCrypt', equal: true  } },
    // { data: { source: 'Pit', target: 'Iceberg', equal: true  } },
    // { data: { source: 'Estuary', target: 'Necropolis', equal: true  } },
    // { data: { source: 'Colosseum', target: 'Canyon', equal: true  } },
    // { data: { source: 'Cemetery', target: 'LavaLake', equal: true  } },
    //
    //
    // { data: { source: 'Phoenix', target: 'Shaper' } },
    // { data: { source: 'Hydra', target: 'Shaper' } },
    // { data: { source: 'Minotaur', target: 'Shaper' } },
    // { data: { source: 'Chimera', target: 'Shaper' } },
  ]
};

export default mapsMetaData;
