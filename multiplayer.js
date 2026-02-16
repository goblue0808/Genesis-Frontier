// Genesis Frontier - Multiplayer & Starship Systems
// This file extends the base terraforming game with:
// - Starship construction and upgrades
// - Multi-planet exploration and colonization
// - Multiplayer interactions (diplomacy, trade, warfare)
// - Persistent offline progression
// - Long-term progression systems

class MultiplayerGame extends TerraformingGame {
    constructor() {
        super();
        this.initializeMultiplayerSystems();
        this.loadGameState();
        this.setupIdleProgression();
    }

    initializeMultiplayerSystems() {
        // Player identity
        this.playerId = this.generatePlayerId();
        this.playerName = "Commander";
        
        // Starship types
        this.starshipTypes = {
            scout: {
                name: "Scout Ship",
                icon: "🛸",
                description: "Fast exploration vessel for discovering new planets",
                cost: { credits: 5000, metals: 2000, energy: 500 },
                buildTime: 5, // turns
                speed: 10, // sectors per turn
                cargoCapacity: 100,
                combatPower: 2,
                explorationBonus: 0.3,
                unlockRequirements: { population: 100 }
            },
            colony: {
                name: "Colony Ship",
                icon: "🚀",
                description: "Large vessel capable of establishing new colonies",
                cost: { credits: 15000, metals: 5000, energy: 1500 },
                buildTime: 10,
                speed: 5,
                cargoCapacity: 500,
                combatPower: 1,
                colonists: 100,
                unlockRequirements: { population: 500 }
            },
            freighter: {
                name: "Freighter",
                icon: "📦",
                description: "Cargo hauler for resource transport between planets",
                cost: { credits: 8000, metals: 3000, energy: 800 },
                buildTime: 6,
                speed: 7,
                cargoCapacity: 1000,
                combatPower: 1,
                unlockRequirements: { population: 200 }
            },
            warship: {
                name: "Warship",
                icon: "⚔️",
                description: "Military vessel for defense and invasion",
                cost: { credits: 20000, metals: 8000, energy: 2500 },
                buildTime: 15,
                speed: 8,
                cargoCapacity: 200,
                combatPower: 10,
                unlockRequirements: { population: 1000, colonizedPlanets: 2 }
            }
        };

        // Extended resources
        this.resources.metals = 1000;
        this.resources.rareResources = 0;
        this.resources.prestige = 0;

        // Planets and exploration
        this.ownedPlanets = []; // Player's colonized planets
        this.exploredSystems = []; // Discovered star systems
        this.starships = []; // Player's fleet
        this.shipyardQueue = []; // Ships under construction
        
        // Galaxy structure
        this.galaxyMap = this.generateGalaxy();
        
        // Multiplayer state
        this.otherPlayers = []; // Other players in the universe
        this.diplomacy = {}; // Relationships with other players
        this.tradeRoutes = [];
        this.alliances = [];
        this.wars = [];
        
        // Long-term progression
        this.megaProjects = [];
        this.technologies = this.initializeTechTree();
        this.achievements = [];
        
        // Idle progression tracking
        this.lastUpdateTime = Date.now();
    }

    generatePlayerId() {
        return 'player_' + Math.random().toString(36).substr(2, 9);
    }

    generateGalaxy() {
        // Generate a procedural galaxy with star systems
        const galaxy = {
            systems: [],
            sectors: 100, // 10x10 grid
            rareResourceZones: []
        };

        // Generate 50 star systems
        for (let i = 0; i < 50; i++) {
            const system = {
                id: `system_${i}`,
                name: this.generateStarSystemName(),
                position: {
                    x: Math.floor(Math.random() * 10),
                    y: Math.floor(Math.random() * 10)
                },
                planets: this.generateSystemPlanets(),
                discovered: i === 0, // Start with home system discovered
                travelRoutes: []
            };
            galaxy.systems.push(system);
        }

        // Generate rare resource zones
        for (let i = 0; i < 10; i++) {
            galaxy.rareResourceZones.push({
                position: {
                    x: Math.floor(Math.random() * 10),
                    y: Math.floor(Math.random() * 10)
                },
                resourceType: this.getRandomRareResource(),
                productionRate: Math.floor(Math.random() * 50) + 10
            });
        }

        // Set starting planet
        const homeSystem = galaxy.systems[0];
        homeSystem.name = "Sol Prime";
        if (homeSystem.planets.length > 0) {
            const homePlanet = homeSystem.planets[0];
            homePlanet.colonized = true;
            homePlanet.owner = this.playerId;
            this.ownedPlanets.push({
                systemId: homeSystem.id,
                planetId: homePlanet.id,
                planetState: this.planet,
                facilities: this.facilities,
                resources: {...this.resources}
            });
        }

        return galaxy;
    }

    generateStarSystemName() {
        const prefixes = ['Alpha', 'Beta', 'Gamma', 'Delta', 'Epsilon', 'Zeta', 'Nova', 'Stellar', 'Prime', 'Nexus'];
        const suffixes = ['Centauri', 'Draconis', 'Phoenicis', 'Andromedae', 'Orionis', 'Majoris', 'Minoris', 'Prime', 'Station', 'Outpost'];
        return prefixes[Math.floor(Math.random() * prefixes.length)] + ' ' + 
               suffixes[Math.floor(Math.random() * suffixes.length)];
    }

    generateSystemPlanets() {
        const numPlanets = Math.floor(Math.random() * 5) + 1; // 1-5 planets
        const planets = [];
        
        for (let i = 0; i < numPlanets; i++) {
            const typeKeys = Object.keys(this.planetTypes);
            const randomType = typeKeys[Math.floor(Math.random() * typeKeys.length)];
            
            planets.push({
                id: `planet_${Math.random().toString(36).substr(2, 9)}`,
                name: `Planet ${String.fromCharCode(65 + i)}`,
                type: randomType,
                stats: {...this.planetTypes[randomType].initialStats},
                colonized: false,
                owner: null,
                hasRareResources: Math.random() > 0.7,
                rareResourceType: Math.random() > 0.5 ? 'exotic_matter' : 'dark_energy',
                defenseLevel: 0
            });
        }
        
        return planets;
    }

    getRandomRareResource() {
        const rareResources = ['exotic_matter', 'dark_energy', 'antimatter', 'quantum_crystals', 'neutronium'];
        return rareResources[Math.floor(Math.random() * rareResources.length)];
    }

    initializeTechTree() {
        return {
            // Exploration techs
            advancedSensors: { researched: false, cost: 10000, effect: "Increase exploration range" },
            warpDrive: { researched: false, cost: 25000, effect: "Double ship speed" },
            
            // Military techs
            shieldTech: { researched: false, cost: 15000, effect: "Increase defense by 50%" },
            weaponSystems: { researched: false, cost: 20000, effect: "Increase attack by 50%" },
            
            // Economic techs
            efficientExtraction: { researched: false, cost: 8000, effect: "Increase resource production by 25%" },
            megaStructures: { researched: false, cost: 50000, effect: "Unlock mega-projects" },
            
            // Colony techs
            rapidTerraforming: { researched: false, cost: 30000, effect: "Reduce terraforming time by 50%" },
            populationBoost: { researched: false, cost: 12000, effect: "Increase population growth by 100%" }
        };
    }

    // Shipyard and Construction
    canBuildShip(shipType) {
        const ship = this.starshipTypes[shipType];
        if (!ship) return false;

        // Check unlock requirements
        if (ship.unlockRequirements) {
            for (const [req, value] of Object.entries(ship.unlockRequirements)) {
                if (req === 'population' && this.resources.population < value) return false;
                if (req === 'colonizedPlanets' && this.ownedPlanets.length < value) return false;
            }
        }

        // Check resources
        if (this.resources.credits < ship.cost.credits) return false;
        if (this.resources.metals < ship.cost.metals) return false;
        if (this.resources.energy < ship.cost.energy) return false;

        return true;
    }

    buildShip(shipType) {
        if (!this.canBuildShip(shipType)) {
            this.addAlert('Cannot build ship: requirements not met', 'warning');
            return false;
        }

        const ship = this.starshipTypes[shipType];
        
        // Deduct resources
        this.resources.credits -= ship.cost.credits;
        this.resources.metals -= ship.cost.metals;
        this.resources.energy -= ship.cost.energy;

        // Add to construction queue
        this.shipyardQueue.push({
            type: shipType,
            completionTurn: this.turn + ship.buildTime,
            progress: 0
        });

        this.addAlert(`Started construction of ${ship.name}`, 'success');
        return true;
    }

    processShipyardQueue() {
        const completed = [];
        
        for (let i = this.shipyardQueue.length - 1; i >= 0; i--) {
            const construction = this.shipyardQueue[i];
            construction.progress++;
            
            if (this.turn >= construction.completionTurn) {
                // Ship completed!
                const shipType = this.starshipTypes[construction.type];
                const newShip = {
                    id: `ship_${Math.random().toString(36).substr(2, 9)}`,
                    type: construction.type,
                    ...shipType,
                    currentLocation: this.galaxyMap.systems[0].id, // Start at home system
                    destination: null,
                    traveling: false,
                    cargo: {},
                    health: 100,
                    level: 1
                };
                
                this.starships.push(newShip);
                completed.push(construction);
                this.shipyardQueue.splice(i, 1);
                this.addAlert(`${shipType.name} construction completed!`, 'success');
            }
        }
        
        return completed;
    }

    // Exploration System
    exploreSystem(shipId, systemId) {
        const ship = this.starships.find(s => s.id === shipId);
        const system = this.galaxyMap.systems.find(s => s.id === systemId);
        
        if (!ship || !system) {
            this.addAlert('Invalid ship or system', 'warning');
            return false;
        }

        if (ship.traveling) {
            this.addAlert('Ship is already traveling', 'warning');
            return false;
        }

        // Calculate travel time
        const currentSystem = this.galaxyMap.systems.find(s => s.id === ship.currentLocation);
        const distance = Math.sqrt(
            Math.pow(system.position.x - currentSystem.position.x, 2) +
            Math.pow(system.position.y - currentSystem.position.y, 2)
        );
        const travelTime = Math.ceil(distance / (ship.speed / 10));

        ship.destination = systemId;
        ship.traveling = true;
        ship.arrivalTurn = this.turn + travelTime;

        this.addAlert(`${ship.name} traveling to ${system.name} (${travelTime} turns)`, 'info');

        // Exploration risks
        if (Math.random() < 0.1) { // 10% chance of event
            this.triggerExplorationEvent(ship);
        }

        return true;
    }

    triggerExplorationEvent(ship) {
        const events = [
            { type: 'asteroid_field', message: 'Ship damaged by asteroid field', healthLoss: 15 },
            { type: 'alien_ruins', message: 'Ancient ruins discovered! +500 credits', creditsGain: 500 },
            { type: 'spatial_anomaly', message: 'Spatial anomaly detected! +100 rare resources', rareGain: 100 },
            { type: 'pirates', message: 'Pirate attack! Ship damaged', healthLoss: 25 },
            { type: 'resource_cache', message: 'Resource cache found! +1000 metals', metalsGain: 1000 }
        ];

        const event = events[Math.floor(Math.random() * events.length)];
        this.addAlert(`🌟 ${event.message}`, event.healthLoss ? 'warning' : 'success');

        if (event.healthLoss) ship.health = Math.max(0, ship.health - event.healthLoss);
        if (event.creditsGain) this.resources.credits += event.creditsGain;
        if (event.rareGain) this.resources.rareResources += event.rareGain;
        if (event.metalsGain) this.resources.metals += event.metalsGain;
    }

    processShipMovement() {
        for (const ship of this.starships) {
            if (ship.traveling && this.turn >= ship.arrivalTurn) {
                // Ship arrived
                ship.currentLocation = ship.destination;
                ship.traveling = false;
                ship.destination = null;

                const system = this.galaxyMap.systems.find(s => s.id === ship.currentLocation);
                
                if (!system.discovered) {
                    system.discovered = true;
                    this.exploredSystems.push(system.id);
                    this.resources.prestige += 100;
                    this.addAlert(`🎉 New system discovered: ${system.name}! +100 Prestige`, 'success');
                }
            }
        }
    }

    // Colonization System
    colonizePlanet(shipId, systemId, planetId) {
        const ship = this.starships.find(s => s.id === shipId);
        if (!ship || ship.type !== 'colony') {
            this.addAlert('Need a Colony Ship to colonize planets', 'warning');
            return false;
        }

        const system = this.galaxyMap.systems.find(s => s.id === systemId);
        if (!system || ship.currentLocation !== systemId) {
            this.addAlert('Ship must be at target system', 'warning');
            return false;
        }

        const planet = system.planets.find(p => p.id === planetId);
        if (!planet || planet.colonized) {
            this.addAlert('Planet is already colonized or does not exist', 'warning');
            return false;
        }

        // Colonize the planet
        planet.colonized = true;
        planet.owner = this.playerId;
        
        // Create new planet state
        const newPlanetState = {
            systemId: systemId,
            planetId: planetId,
            planetState: {...planet.stats},
            facilities: {},
            resources: {
                credits: 1000,
                energy: 100,
                population: ship.colonists || 100,
                metals: 500,
                rareResources: 0
            }
        };

        // Initialize empty facilities
        Object.keys(this.facilityTypes).forEach(key => {
            newPlanetState.facilities[key] = 0;
        });

        this.ownedPlanets.push(newPlanetState);
        
        // Remove colony ship
        const shipIndex = this.starships.findIndex(s => s.id === shipId);
        this.starships.splice(shipIndex, 1);

        this.resources.prestige += 500;
        this.addAlert(`🏆 Planet colonized: ${planet.name} in ${system.name}! +500 Prestige`, 'success');
        
        return true;
    }

    // Multiplayer Diplomacy System
    initializeDiplomacy(otherPlayerId) {
        if (!this.diplomacy[otherPlayerId]) {
            this.diplomacy[otherPlayerId] = {
                status: 'neutral', // neutral, peace, war, allied
                opinion: 0, // -100 to 100
                tradeAgreement: false,
                nonAggressionPact: false,
                researchSharing: false
            };
        }
    }

    proposeTreaty(otherPlayerId, treatyType) {
        this.initializeDiplomacy(otherPlayerId);
        
        const treaties = {
            peace: { opinionReq: -50, effect: 'End hostilities' },
            trade: { opinionReq: 20, effect: 'Enable resource trading' },
            alliance: { opinionReq: 50, effect: 'Military and economic alliance' },
            nonAggression: { opinionReq: 0, effect: 'Cannot attack each other' }
        };

        const treaty = treaties[treatyType];
        if (!treaty) return false;

        const relation = this.diplomacy[otherPlayerId];
        if (relation.opinion < treaty.opinionReq) {
            this.addAlert(`Insufficient diplomatic relations for ${treatyType}`, 'warning');
            return false;
        }

        // Simulate AI acceptance (in real multiplayer, this would be player-to-player)
        const accepted = Math.random() > 0.3;
        
        if (accepted) {
            if (treatyType === 'peace') {
                relation.status = 'peace';
                const warIndex = this.wars.findIndex(w => w.opponent === otherPlayerId);
                if (warIndex !== -1) this.wars.splice(warIndex, 1);
            } else if (treatyType === 'trade') {
                relation.tradeAgreement = true;
            } else if (treatyType === 'alliance') {
                relation.status = 'allied';
                this.alliances.push({ ally: otherPlayerId, formedTurn: this.turn });
            } else if (treatyType === 'nonAggression') {
                relation.nonAggressionPact = true;
            }
            
            this.addAlert(`${treatyType} treaty accepted!`, 'success');
            return true;
        } else {
            this.addAlert(`${treatyType} treaty rejected`, 'warning');
            return false;
        }
    }

    // Trade System
    createTradeRoute(fromPlanetIndex, toPlanetIndex, resource, amount) {
        if (fromPlanetIndex >= this.ownedPlanets.length || toPlanetIndex >= this.ownedPlanets.length) {
            this.addAlert('Invalid planet selection', 'warning');
            return false;
        }

        const fromPlanet = this.ownedPlanets[fromPlanetIndex];
        const toPlanet = this.ownedPlanets[toPlanetIndex];

        // Check if we have a freighter available
        const freighter = this.starships.find(s => s.type === 'freighter' && !s.traveling);
        if (!freighter) {
            this.addAlert('No available freighter for trade route', 'warning');
            return false;
        }

        this.tradeRoutes.push({
            from: fromPlanetIndex,
            to: toPlanetIndex,
            resource: resource,
            amount: amount,
            shipId: freighter.id
        });

        this.addAlert(`Trade route established: ${resource} transport`, 'success');
        return true;
    }

    processTradeRoutes() {
        for (const route of this.tradeRoutes) {
            const fromPlanet = this.ownedPlanets[route.from];
            const toPlanet = this.ownedPlanets[route.to];
            
            if (fromPlanet && toPlanet && fromPlanet.resources[route.resource] >= route.amount) {
                fromPlanet.resources[route.resource] -= route.amount;
                toPlanet.resources[route.resource] += route.amount;
            }
        }
    }

    // Espionage System
    sendSpy(targetPlayerId) {
        const spyCost = 5000;
        if (this.resources.credits < spyCost) {
            this.addAlert('Insufficient credits for espionage mission', 'warning');
            return false;
        }

        this.resources.credits -= spyCost;

        // Simulate espionage success (60% chance)
        const success = Math.random() > 0.4;
        
        if (success) {
            const intel = {
                planets: Math.floor(Math.random() * 10) + 1,
                military: Math.floor(Math.random() * 50) + 10,
                resources: Math.floor(Math.random() * 100000)
            };
            this.addAlert(`🕵️ Espionage successful! Target has ${intel.planets} planets, ${intel.military} warships`, 'success');
            return intel;
        } else {
            this.addAlert('🕵️ Espionage mission failed and was detected!', 'warning');
            // Worsen diplomatic relations
            this.initializeDiplomacy(targetPlayerId);
            this.diplomacy[targetPlayerId].opinion -= 20;
            return null;
        }
    }

    // Warfare and Invasion System
    canInvadePlanet(targetPlayerId) {
        // Must have at least 2 colonized planets to invade others
        return this.ownedPlanets.length >= 2;
    }

    launchInvasion(targetPlayerId, targetSystemId, targetPlanetId) {
        if (!this.canInvadePlanet(targetPlayerId)) {
            this.addAlert('⚠️ Must colonize at least 2 planets before invading others!', 'warning');
            return false;
        }

        // Check diplomatic status
        this.initializeDiplomacy(targetPlayerId);
        const relation = this.diplomacy[targetPlayerId];
        
        if (relation.nonAggressionPact) {
            this.addAlert('Cannot invade: Non-Aggression Pact is active', 'warning');
            return false;
        }

        // Count available warships
        const warships = this.starships.filter(s => s.type === 'warship' && !s.traveling);
        if (warships.length === 0) {
            this.addAlert('No warships available for invasion', 'warning');
            return false;
        }

        // Find target planet (simulated - in real game would check other players' planets)
        const targetSystem = this.galaxyMap.systems.find(s => s.id === targetSystemId);
        if (!targetSystem) return false;
        
        const targetPlanet = targetSystem.planets.find(p => p.id === targetPlanetId);
        if (!targetPlanet || !targetPlanet.colonized) {
            this.addAlert('Invalid invasion target', 'warning');
            return false;
        }

        // Calculate invasion strength
        const attackPower = warships.reduce((sum, ship) => sum + ship.combatPower, 0);
        const defensePower = targetPlanet.defenseLevel || 10;

        // Battle simulation
        const invasionCost = {
            credits: 10000,
            metals: 5000,
            warshipsLost: 0
        };

        this.resources.credits -= invasionCost.credits;
        this.resources.metals -= invasionCost.metals;

        const success = attackPower > defensePower * 1.2; // Need 20% advantage

        if (success) {
            // Calculate losses
            invasionCost.warshipsLost = Math.floor(warships.length * 0.3); // 30% casualties
            
            for (let i = 0; i < invasionCost.warshipsLost; i++) {
                const lostShipIndex = this.starships.findIndex(s => s.type === 'warship');
                if (lostShipIndex !== -1) {
                    this.starships.splice(lostShipIndex, 1);
                }
            }

            // Transfer planet ownership
            targetPlanet.owner = this.playerId;
            this.resources.prestige += 1000;
            
            this.addAlert(`🏆 INVASION SUCCESSFUL! ${targetPlanet.name} captured! Lost ${invasionCost.warshipsLost} warships`, 'success');
            
            // Start war if not already at war
            if (relation.status !== 'war') {
                relation.status = 'war';
                this.wars.push({ opponent: targetPlayerId, startTurn: this.turn });
            }
            
            return true;
        } else {
            // Invasion failed
            invasionCost.warshipsLost = Math.floor(warships.length * 0.5); // 50% casualties on failure
            
            for (let i = 0; i < invasionCost.warshipsLost; i++) {
                const lostShipIndex = this.starships.findIndex(s => s.type === 'warship');
                if (lostShipIndex !== -1) {
                    this.starships.splice(lostShipIndex, 1);
                }
            }

            this.addAlert(`💀 INVASION FAILED! Lost ${invasionCost.warshipsLost} warships`, 'danger');
            
            return false;
        }
    }

    buildDefense(planetIndex, defenseType) {
        if (planetIndex >= this.ownedPlanets.length) return false;

        const defenses = {
            shieldGenerator: { cost: 5000, defenseBonus: 10 },
            plasmaCannon: { cost: 8000, defenseBonus: 15 },
            orbitalPlatform: { cost: 15000, defenseBonus: 25 }
        };

        const defense = defenses[defenseType];
        if (!defense || this.resources.credits < defense.cost) {
            this.addAlert('Cannot build defense structure', 'warning');
            return false;
        }

        this.resources.credits -= defense.cost;
        const planet = this.ownedPlanets[planetIndex];
        planet.defenseLevel = (planet.defenseLevel || 0) + defense.defenseBonus;

        this.addAlert(`Defense structure built: +${defense.defenseBonus} defense`, 'success');
        return true;
    }

    // Mega-Projects System
    startMegaProject(projectType) {
        const megaProjects = {
            dysonSphere: {
                name: "Dyson Sphere",
                cost: { credits: 100000, metals: 50000, rareResources: 1000 },
                buildTime: 50,
                effect: "Unlimited energy production",
                requirements: { technologies: ['megaStructures'], planets: 5 }
            },
            ringWorld: {
                name: "Ring World",
                cost: { credits: 150000, metals: 80000, rareResources: 2000 },
                buildTime: 75,
                effect: "Massive population capacity",
                requirements: { technologies: ['megaStructures'], planets: 8 }
            },
            wormholeGate: {
                name: "Wormhole Gate",
                cost: { credits: 80000, metals: 40000, rareResources: 1500 },
                buildTime: 40,
                effect: "Instant travel between systems",
                requirements: { technologies: ['megaStructures', 'warpDrive'], planets: 4 }
            }
        };

        const project = megaProjects[projectType];
        if (!project) return false;

        // Check requirements
        if (this.ownedPlanets.length < project.requirements.planets) {
            this.addAlert(`Need ${project.requirements.planets} planets for this mega-project`, 'warning');
            return false;
        }

        // Check costs
        if (this.resources.credits < project.cost.credits ||
            this.resources.metals < project.cost.metals ||
            this.resources.rareResources < project.cost.rareResources) {
            this.addAlert('Insufficient resources for mega-project', 'warning');
            return false;
        }

        // Deduct resources
        this.resources.credits -= project.cost.credits;
        this.resources.metals -= project.cost.metals;
        this.resources.rareResources -= project.cost.rareResources;

        // Add to construction
        this.megaProjects.push({
            type: projectType,
            ...project,
            completionTurn: this.turn + project.buildTime,
            progress: 0
        });

        this.addAlert(`🏗️ Mega-project started: ${project.name}!`, 'success');
        return true;
    }

    processMegaProjects() {
        for (let i = this.megaProjects.length - 1; i >= 0; i--) {
            const project = this.megaProjects[i];
            project.progress++;

            if (this.turn >= project.completionTurn) {
                // Project completed!
                this.addAlert(`🎉 MEGA-PROJECT COMPLETED: ${project.name}!`, 'success');
                this.resources.prestige += 5000;
                
                // Apply effects (would be implemented based on project type)
                // For now, just remove from active projects
                this.megaProjects.splice(i, 1);
            }
        }
    }

    // Idle/Offline Progression System
    setupIdleProgression() {
        // Calculate and apply offline progress when player returns
        this.calculateIdleProgress();
        
        // Set up periodic auto-save
        setInterval(() => this.saveGameState(), 30000); // Save every 30 seconds
    }

    calculateIdleProgress() {
        const now = Date.now();
        const timePassed = now - this.lastUpdateTime;
        const turnsPassed = Math.floor(timePassed / (60 * 1000)); // 1 turn per minute when offline

        if (turnsPassed > 0 && turnsPassed <= 1440) { // Max 24 hours of idle progress
            this.addAlert(`⏰ Processed ${turnsPassed} turns while you were away`, 'info');
            
            // Process each planet's production
            for (let i = 0; i < turnsPassed; i++) {
                this.processAllPlanets();
                this.processShipyardQueue();
                this.processShipMovement();
                this.processTradeRoutes();
                this.processMegaProjects();
            }
        }

        this.lastUpdateTime = now;
    }

    processAllPlanets() {
        // Process each colonized planet
        for (const planetData of this.ownedPlanets) {
            // Apply facility effects
            for (const [facilityKey, count] of Object.entries(planetData.facilities)) {
                if (count > 0) {
                    const facility = this.facilityTypes[facilityKey];
                    
                    // Apply effects to planet stats
                    for (const [stat, value] of Object.entries(facility.effects)) {
                        if (Object.prototype.hasOwnProperty.call(planetData.planetState, stat)) {
                            planetData.planetState[stat] += value * count;
                        } else if (stat === 'population') {
                            planetData.resources.population += value * count;
                        }
                    }
                }
            }

            // Clamp values
            planetData.planetState.temperature = Math.max(-100, Math.min(150, planetData.planetState.temperature));
            planetData.planetState.oxygen = Math.max(0, Math.min(100, planetData.planetState.oxygen));
            planetData.planetState.co2 = Math.max(0, Math.min(100, planetData.planetState.co2));
            planetData.planetState.water = Math.max(0, Math.min(100, planetData.planetState.water));
            
            // Generate income
            planetData.resources.credits += Math.floor(planetData.resources.population * 0.5);
            planetData.resources.metals += Math.floor(planetData.resources.population * 0.1);
        }
    }

    // Prestige and Ranking System
    calculatePrestigeRank() {
        const ranks = [
            { name: "Explorer", prestige: 0 },
            { name: "Colonist", prestige: 1000 },
            { name: "Commander", prestige: 5000 },
            { name: "Admiral", prestige: 15000 },
            { name: "Overlord", prestige: 50000 },
            { name: "Emperor", prestige: 100000 },
            { name: "Galactic Legend", prestige: 250000 }
        ];

        for (let i = ranks.length - 1; i >= 0; i--) {
            if (this.resources.prestige >= ranks[i].prestige) {
                return ranks[i].name;
            }
        }
        return ranks[0].name;
    }

    // Save/Load System
    saveGameState() {
        const saveData = {
            playerId: this.playerId,
            playerName: this.playerName,
            turn: this.turn,
            resources: this.resources,
            ownedPlanets: this.ownedPlanets,
            exploredSystems: this.exploredSystems,
            starships: this.starships,
            shipyardQueue: this.shipyardQueue,
            diplomacy: this.diplomacy,
            tradeRoutes: this.tradeRoutes,
            alliances: this.alliances,
            wars: this.wars,
            megaProjects: this.megaProjects,
            technologies: this.technologies,
            achievements: this.achievements,
            lastUpdateTime: this.lastUpdateTime,
            galaxyMap: this.galaxyMap
        };

        localStorage.setItem('genesisFrontierSave', JSON.stringify(saveData));
    }

    loadGameState() {
        const savedData = localStorage.getItem('genesisFrontierSave');
        
        if (savedData) {
            try {
                const data = JSON.parse(savedData);
                
                // Restore state
                this.playerId = data.playerId || this.playerId;
                this.playerName = data.playerName || this.playerName;
                this.turn = data.turn || 0;
                this.resources = data.resources || this.resources;
                this.ownedPlanets = data.ownedPlanets || [];
                this.exploredSystems = data.exploredSystems || [];
                this.starships = data.starships || [];
                this.shipyardQueue = data.shipyardQueue || [];
                this.diplomacy = data.diplomacy || {};
                this.tradeRoutes = data.tradeRoutes || [];
                this.alliances = data.alliances || [];
                this.wars = data.wars || [];
                this.megaProjects = data.megaProjects || [];
                this.technologies = data.technologies || this.technologies;
                this.achievements = data.achievements || [];
                this.lastUpdateTime = data.lastUpdateTime || Date.now();
                
                if (data.galaxyMap) {
                    this.galaxyMap = data.galaxyMap;
                }

                this.addAlert('Game loaded successfully!', 'success');
            } catch (e) {
                console.error('Error loading saved game:', e);
            }
        }
    }

    // Override nextTurn to include multiplayer features
    nextTurn() {
        super.nextTurn(); // Call base terraforming game turn
        
        // Process multiplayer systems
        this.processShipyardQueue();
        this.processShipMovement();
        this.processAllPlanets();
        this.processTradeRoutes();
        this.processMegaProjects();
        
        // Update metals production
        this.resources.metals += Math.floor(this.resources.population * 0.1);
        
        // Update prestige
        this.resources.prestige += this.ownedPlanets.length * 10;
        
        // Update last update time
        this.lastUpdateTime = Date.now();
        
        // Save game
        this.saveGameState();
    }
}

// Export for use in HTML
if (typeof window !== 'undefined') {
    window.MultiplayerGame = MultiplayerGame;
}
