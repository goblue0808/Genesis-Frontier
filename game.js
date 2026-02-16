// Genesis Frontier - Multi-Stage Terraforming Game

class TerraformingGame {
    constructor() {
        this.turn = 0;
        this.initializePlanetTypes();
        this.initializeFacilityTypes();
        this.initializeTerraformingStages();
        this.resetPlanet();
        this.setupEventListeners();
        this.updateUI();
    }

    initializePlanetTypes() {
        this.planetTypes = {
            cold: {
                name: "Frozen Tundra",
                icon: "❄️",
                initialStats: {
                    temperature: -80,
                    oxygen: 5,
                    co2: 95,
                    water: 10, // Frozen
                    humidity: 5,
                    soil: 20,
                    pollution: 0
                }
            },
            hot: {
                name: "Scorched Desert",
                icon: "🔥",
                initialStats: {
                    temperature: 120,
                    oxygen: 8,
                    co2: 90,
                    water: 5,
                    humidity: 2,
                    soil: 15,
                    pollution: 0
                }
            },
            desert: {
                name: "Arid Wasteland",
                icon: "🏜️",
                initialStats: {
                    temperature: 45,
                    oxygen: 12,
                    co2: 80,
                    water: 15,
                    humidity: 10,
                    soil: 30,
                    pollution: 0
                }
            },
            barren: {
                name: "Barren Rock",
                icon: "🪨",
                initialStats: {
                    temperature: 20,
                    oxygen: 3,
                    co2: 85,
                    water: 8,
                    humidity: 5,
                    soil: 10,
                    pollution: 0
                }
            }
        };
    }

    initializeFacilityTypes() {
        this.facilityTypes = {
            heatingFacility: {
                name: "Heating Facility",
                icon: "🔥",
                description: "Increases planetary temperature and melts ice to create water. Essential for cold planets.",
                cost: { credits: 1000, energy: 50 },
                energyConsumption: 20,
                unlockStage: 0,
                effects: {
                    temperature: 5,
                    water: 3, // Melted ice
                    pollution: 2
                },
                planetSuitability: ["cold"]
            },
            coolingFacility: {
                name: "Cooling Facility",
                icon: "❄️",
                description: "Reduces planetary temperature to allow water to exist in liquid form. Essential for hot planets.",
                cost: { credits: 1200, energy: 60 },
                energyConsumption: 25,
                unlockStage: 0,
                effects: {
                    temperature: -5,
                    water: 2, // Condensation
                    pollution: 1
                },
                planetSuitability: ["hot"]
            },
            humidifier: {
                name: "Atmospheric Humidifier",
                icon: "💧",
                description: "Increases atmospheric humidity by releasing water vapor. Essential for desert planets.",
                cost: { credits: 800, energy: 40 },
                energyConsumption: 15,
                unlockStage: 1,
                effects: {
                    humidity: 5,
                    water: -2, // Uses water
                    temperature: -1
                },
                planetSuitability: ["desert", "hot"]
            },
            oxygenFacility: {
                name: "O2 Generator",
                icon: "🌱",
                description: "Generates oxygen through electrolysis and biological processes.",
                cost: { credits: 1500, energy: 70 },
                energyConsumption: 30,
                unlockStage: 1,
                effects: {
                    oxygen: 4,
                    co2: -2,
                    water: -1
                },
                planetSuitability: ["all"]
            },
            co2Scrubber: {
                name: "CO2 Scrubber",
                icon: "🏭",
                description: "Removes carbon dioxide from the atmosphere, reducing greenhouse effect.",
                cost: { credits: 1300, energy: 55 },
                energyConsumption: 22,
                unlockStage: 2,
                effects: {
                    co2: -5,
                    pollution: -3,
                    temperature: -2
                },
                planetSuitability: ["all"]
            },
            soilEnricher: {
                name: "Soil Enrichment Station",
                icon: "🌾",
                description: "Enriches soil with nutrients and organic matter for agriculture.",
                cost: { credits: 900, energy: 45 },
                energyConsumption: 18,
                unlockStage: 2,
                effects: {
                    soil: 5,
                    water: -1,
                    oxygen: 1
                },
                planetSuitability: ["all"]
            },
            waterExtractor: {
                name: "Water Extraction Plant",
                icon: "💦",
                description: "Extracts water from underground sources and ice deposits.",
                cost: { credits: 1100, energy: 50 },
                energyConsumption: 20,
                unlockStage: 1,
                effects: {
                    water: 5,
                    humidity: 2
                },
                planetSuitability: ["all"]
            },
            pollutionFilter: {
                name: "Pollution Filter Array",
                icon: "🌬️",
                description: "Filters atmospheric pollutants and particulates.",
                cost: { credits: 1400, energy: 60 },
                energyConsumption: 25,
                unlockStage: 3,
                effects: {
                    pollution: -5,
                    oxygen: 1
                },
                planetSuitability: ["all"]
            },
            solarArray: {
                name: "Solar Power Array",
                icon: "☀️",
                description: "Generates clean energy from solar radiation.",
                cost: { credits: 2000, energy: 0 },
                energyConsumption: -50, // Produces energy
                unlockStage: 0,
                effects: {
                    pollution: -1
                },
                planetSuitability: ["all"]
            },
            greenhouse: {
                name: "Agricultural Greenhouse",
                icon: "🏡",
                description: "Produces food and oxygen while consuming CO2. Requires good soil and water.",
                cost: { credits: 1800, energy: 40 },
                energyConsumption: 15,
                unlockStage: 3,
                effects: {
                    oxygen: 3,
                    co2: -3,
                    water: -2,
                    soil: -1
                },
                requirements: { soil: 50, water: 30 },
                planetSuitability: ["all"]
            },
            habitatDome: {
                name: "Habitat Dome",
                icon: "🏙️",
                description: "Houses population and provides living space. Requires stable environment.",
                cost: { credits: 3000, energy: 100 },
                energyConsumption: 30,
                unlockStage: 4,
                effects: {
                    population: 100,
                    water: -3,
                    oxygen: -2,
                    pollution: 2
                },
                requirements: { oxygen: 40, temperature: 0, water: 40 },
                planetSuitability: ["all"]
            }
        };
    }

    initializeTerraformingStages() {
        this.stages = [
            {
                name: "Stage 0: Hostile World",
                description: "Planet is completely inhospitable. Basic infrastructure needed.",
                requirements: {},
                unlocksBuildings: ["heatingFacility", "coolingFacility", "solarArray"]
            },
            {
                name: "Stage 1: Early Terraforming",
                description: "Temperature stabilizing. Begin atmospheric processing.",
                requirements: { temperature: -20 },
                unlocksBuildings: ["humidifier", "oxygenFacility", "waterExtractor"]
            },
            {
                name: "Stage 2: Atmospheric Development",
                description: "Breathable atmosphere forming. Soil enrichment possible.",
                requirements: { temperature: -10, oxygen: 20, water: 25 },
                unlocksBuildings: ["co2Scrubber", "soilEnricher"]
            },
            {
                name: "Stage 3: Ecosystem Foundation",
                description: "Basic ecosystem can be sustained. Agriculture possible.",
                requirements: { temperature: 0, oxygen: 35, water: 40, soil: 40, co2: 60 },
                unlocksBuildings: ["pollutionFilter", "greenhouse"]
            },
            {
                name: "Stage 4: Habitable World",
                description: "Planet is habitable! Colonization can begin.",
                requirements: { temperature: 5, oxygen: 50, water: 50, soil: 60, humidity: 30, co2: 40, pollution: 20 },
                unlocksBuildings: ["habitatDome"]
            },
            {
                name: "Stage 5: Thriving Colony",
                description: "Self-sustaining ecosystem achieved. Victory!",
                requirements: { temperature: 15, oxygen: 70, water: 70, soil: 80, humidity: 50, pollution: 10, population: 500 }
            }
        ];
    }

    resetPlanet() {
        // Choose random planet type or cycle through them
        const planetTypeKeys = Object.keys(this.planetTypes);
        const randomType = this.currentPlanetType 
            ? planetTypeKeys[(planetTypeKeys.indexOf(this.currentPlanetType) + 1) % planetTypeKeys.length]
            : planetTypeKeys[Math.floor(Math.random() * planetTypeKeys.length)];
        
        this.currentPlanetType = randomType;
        const planetData = this.planetTypes[randomType];
        
        this.planet = {
            name: `${planetData.name} Prime`,
            type: randomType,
            ...JSON.parse(JSON.stringify(planetData.initialStats))
        };

        this.resources = {
            credits: 5000,
            energy: 200,
            population: 0
        };

        this.facilities = {};
        Object.keys(this.facilityTypes).forEach(key => {
            this.facilities[key] = 0;
        });

        this.turn = 0;
        this.currentStage = 0;
        this.alerts = [];
        this.collapsed = false;
    }

    changePlanetType() {
        this.resetPlanet();
        this.updateUI();
        this.addAlert(`New planet discovered: ${this.planet.name}!`, 'info');
    }

    setupEventListeners() {
        const nextTurnBtn = document.getElementById('next-turn');
        const resetBtn = document.getElementById('reset-planet');
        const changePlanetBtn = document.getElementById('change-planet');
        
        if (nextTurnBtn) {
            nextTurnBtn.addEventListener('click', () => this.nextTurn());
        }
        
        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                if (confirm('Are you sure you want to reset the planet? All progress will be lost.')) {
                    this.resetPlanet();
                    this.updateUI();
                    this.addAlert('Planet reset successfully.', 'info');
                }
            });
        }
        
        if (changePlanetBtn) {
            changePlanetBtn.addEventListener('click', () => {
                if (confirm('Change to a different planet type? Current progress will be reset.')) {
                    this.changePlanetType();
                }
            });
        }
    }

    getCurrentStage() {
        let stage = 0;
        for (let i = 0; i < this.stages.length; i++) {
            const reqs = this.stages[i].requirements;
            let meetsRequirements = true;
            
            for (const [stat, value] of Object.entries(reqs)) {
                if (stat === 'temperature') {
                    // Temperature needs to be at least this value
                    if (this.planet.temperature < value) {
                        meetsRequirements = false;
                        break;
                    }
                } else if (stat === 'co2' || stat === 'pollution') {
                    // CO2 and pollution need to be at most this value
                    if (this.planet[stat] > value) {
                        meetsRequirements = false;
                        break;
                    }
                } else {
                    // Other stats need to be at least this value
                    if (this.planet[stat] < value) {
                        meetsRequirements = false;
                        break;
                    }
                }
            }
            
            if (meetsRequirements) {
                stage = i;
            } else {
                break;
            }
        }
        return stage;
    }

    isBuildingUnlocked(facilityKey) {
        const facility = this.facilityTypes[facilityKey];
        const currentStage = this.getCurrentStage();
        
        // Check if stage is high enough
        if (currentStage < facility.unlockStage) {
            return false;
        }
        
        // Check if building is in the unlocked buildings list for any reached stage
        for (let i = 0; i <= currentStage; i++) {
            if (this.stages[i].unlocksBuildings && this.stages[i].unlocksBuildings.includes(facilityKey)) {
                return true;
            }
        }
        
        return false;
    }

    canAfford(facilityKey) {
        const facility = this.facilityTypes[facilityKey];
        return this.resources.credits >= facility.cost.credits &&
               this.resources.energy >= facility.cost.energy;
    }

    meetsRequirements(facilityKey) {
        const facility = this.facilityTypes[facilityKey];
        if (!facility.requirements) return true;
        
        for (const [stat, value] of Object.entries(facility.requirements)) {
            if (this.planet[stat] < value) {
                return false;
            }
        }
        return true;
    }

    isPlanetSuitable(facilityKey) {
        const facility = this.facilityTypes[facilityKey];
        if (!facility.planetSuitability) return true;
        
        return facility.planetSuitability.includes('all') || 
               facility.planetSuitability.includes(this.currentPlanetType);
    }

    buyFacility(facilityKey) {
        if (!this.canAfford(facilityKey)) {
            this.addAlert('Not enough resources to build this facility!', 'warning');
            return;
        }
        
        if (!this.meetsRequirements(facilityKey)) {
            this.addAlert('Planet conditions do not meet requirements for this facility!', 'warning');
            return;
        }

        const facility = this.facilityTypes[facilityKey];
        this.resources.credits -= facility.cost.credits;
        this.resources.energy -= facility.cost.energy;
        this.facilities[facilityKey]++;
        
        this.addAlert(`Built ${facility.name}!`, 'success');
        this.updateUI();
    }

    nextTurn() {
        if (this.collapsed) {
            this.addAlert('Planet has collapsed! Reset to continue.', 'danger');
            return;
        }

        this.turn++;
        this.alerts = []; // Clear alerts each turn

        // Calculate energy production and consumption
        let energyProduction = 100; // Base production
        let energyConsumption = 0;

        // Apply facility effects
        for (const [facilityKey, count] of Object.entries(this.facilities)) {
            if (count > 0) {
                const facility = this.facilityTypes[facilityKey];
                
                // Apply effects
                for (const [stat, value] of Object.entries(facility.effects)) {
                    if (this.planet.hasOwnProperty(stat)) {
                        this.planet[stat] += value * count;
                    } else if (stat === 'population') {
                        this.resources.population += value * count;
                    }
                }
                
                // Calculate energy
                if (facility.energyConsumption < 0) {
                    energyProduction += Math.abs(facility.energyConsumption) * count;
                } else {
                    energyConsumption += facility.energyConsumption * count;
                }
            }
        }

        // Apply energy balance
        const netEnergy = energyProduction - energyConsumption;
        this.resources.energy += netEnergy;

        // Natural environmental changes
        this.applyNaturalChanges();

        // Clamp values
        this.clampPlanetStats();

        // Check for resource shortages
        this.checkResourceShortages();

        // Check for environmental collapse
        this.checkEnvironmentalCollapse();

        // Generate income from population
        this.resources.credits += Math.floor(this.resources.population * 0.5);

        // Check for stage progression
        const newStage = this.getCurrentStage();
        if (newStage > this.currentStage) {
            this.currentStage = newStage;
            this.addAlert(`🎉 Advanced to ${this.stages[newStage].name}!`, 'success');
            
            // Check for victory
            if (newStage === this.stages.length - 1) {
                this.addAlert('🏆 VICTORY! You have created a thriving, self-sustaining colony!', 'success');
            }
        }

        this.updateUI();
    }

    applyNaturalChanges() {
        // Natural temperature regulation (moves toward average)
        if (this.planet.temperature > 20) {
            this.planet.temperature -= 0.5;
        } else if (this.planet.temperature < 10) {
            this.planet.temperature += 0.5;
        }

        // CO2/O2 natural exchange
        if (this.planet.oxygen > 20 && this.planet.co2 > 30) {
            this.planet.oxygen -= 0.2;
            this.planet.co2 += 0.2;
        }

        // Water evaporation/condensation
        if (this.planet.temperature > 30 && this.planet.water > 20) {
            this.planet.water -= 0.5;
            this.planet.humidity += 0.5;
        } else if (this.planet.temperature < 0 && this.planet.humidity > 10) {
            this.planet.humidity -= 0.5;
        }

        // Soil degradation without maintenance
        if (this.planet.soil > 30 && this.facilities.soilEnricher === 0) {
            this.planet.soil -= 0.3;
        }

        // Natural pollution reduction (very slow)
        if (this.planet.pollution > 0) {
            this.planet.pollution -= 0.1;
        }
    }

    clampPlanetStats() {
        // Temperature can go negative or very high
        this.planet.temperature = Math.max(-100, Math.min(150, this.planet.temperature));
        
        // Percentages: 0-100
        this.planet.oxygen = Math.max(0, Math.min(100, this.planet.oxygen));
        this.planet.co2 = Math.max(0, Math.min(100, this.planet.co2));
        this.planet.water = Math.max(0, Math.min(100, this.planet.water));
        this.planet.humidity = Math.max(0, Math.min(100, this.planet.humidity));
        this.planet.soil = Math.max(0, Math.min(100, this.planet.soil));
        this.planet.pollution = Math.max(0, Math.min(100, this.planet.pollution));
        
        // Resources
        this.resources.energy = Math.max(0, this.resources.energy);
        this.resources.credits = Math.max(0, this.resources.credits);
        this.resources.population = Math.max(0, this.resources.population);
    }

    checkResourceShortages() {
        if (this.resources.energy < 50) {
            this.addAlert('⚠️ Energy shortage! Build more solar arrays.', 'warning');
        }
        
        if (this.resources.energy <= 0) {
            this.addAlert('🚨 CRITICAL: No energy! Facilities shutting down!', 'danger');
            // Reduce effectiveness when out of energy
            this.planet.oxygen -= 1;
            this.planet.water -= 1;
        }

        if (this.resources.credits < 500) {
            this.addAlert('⚠️ Low on credits! Population generates income.', 'warning');
        }

        if (this.planet.water < 20 && this.resources.population > 0) {
            this.addAlert('⚠️ Water shortage affecting population!', 'warning');
            this.resources.population = Math.max(0, this.resources.population - 10);
        }

        if (this.planet.oxygen < 30 && this.resources.population > 100) {
            this.addAlert('⚠️ Oxygen levels too low for large population!', 'warning');
            this.resources.population = Math.max(0, this.resources.population - 5);
        }
    }

    checkEnvironmentalCollapse() {
        const collapseReasons = [];

        // Temperature extremes
        if (this.planet.temperature < -50) {
            collapseReasons.push('Extreme cold has frozen all water systems');
        }
        if (this.planet.temperature > 100) {
            collapseReasons.push('Extreme heat has evaporated all surface water');
        }

        // Atmospheric problems
        if (this.planet.co2 > 95) {
            collapseReasons.push('Toxic CO2 levels have poisoned the atmosphere');
        }
        if (this.planet.oxygen < 5 && this.resources.population > 0) {
            collapseReasons.push('Oxygen depletion has made the planet unlivable');
        }

        // Resource depletion
        if (this.planet.water < 5 && this.resources.population > 50) {
            collapseReasons.push('Complete water depletion has ended colonization');
        }
        if (this.planet.soil < 5 && this.facilities.greenhouse > 0) {
            collapseReasons.push('Soil depletion has destroyed all agriculture');
        }

        // Pollution crisis
        if (this.planet.pollution > 90) {
            collapseReasons.push('Extreme pollution has made the planet toxic');
        }

        if (collapseReasons.length > 0) {
            this.collapsed = true;
            this.addAlert('💀 ENVIRONMENTAL COLLAPSE!', 'danger');
            collapseReasons.forEach(reason => {
                this.addAlert(`- ${reason}`, 'danger');
            });
            this.addAlert('Reset the planet to try again.', 'danger');
        }
    }

    addAlert(message, type = 'info') {
        this.alerts.unshift({ message, type, turn: this.turn });
        if (this.alerts.length > 10) {
            this.alerts.pop();
        }
    }

    updateUI() {
        // Check if UI elements exist (for testing environments)
        if (!document.getElementById('planet-name')) {
            return; // Skip UI update if elements don't exist
        }
        
        // Update planet info
        document.getElementById('planet-name').textContent = `${this.planetTypes[this.currentPlanetType].icon} ${this.planet.name}`;
        document.getElementById('planet-type').textContent = this.planetTypes[this.currentPlanetType].name;
        
        const currentStage = this.getCurrentStage();
        document.getElementById('terraforming-stage').textContent = 
            `${this.stages[currentStage].name} (Turn ${this.turn})`;

        // Update stats
        this.updateStat('temperature', this.planet.temperature, '°C', -100, 150);
        this.updateStat('oxygen', this.planet.oxygen, '%', 0, 100);
        this.updateStat('co2', this.planet.co2, '%', 0, 100);
        this.updateStat('water', this.planet.water, '%', 0, 100);
        this.updateStat('humidity', this.planet.humidity, '%', 0, 100);
        this.updateStat('soil', this.planet.soil, '%', 0, 100);
        this.updateStat('pollution', this.planet.pollution, '%', 0, 100);

        // Update resources
        document.getElementById('energy').textContent = Math.floor(this.resources.energy);
        document.getElementById('credits').textContent = Math.floor(this.resources.credits);
        document.getElementById('population').textContent = Math.floor(this.resources.population);

        // Update energy balance
        let energyProduction = 100;
        let energyConsumption = 0;
        for (const [facilityKey, count] of Object.entries(this.facilities)) {
            if (count > 0) {
                const facility = this.facilityTypes[facilityKey];
                if (facility.energyConsumption < 0) {
                    energyProduction += Math.abs(facility.energyConsumption) * count;
                } else {
                    energyConsumption += facility.energyConsumption * count;
                }
            }
        }
        document.getElementById('energy-production').textContent = `+${energyProduction}`;
        document.getElementById('energy-consumption').textContent = `-${energyConsumption}`;
        const netEnergy = energyProduction - energyConsumption;
        const netElement = document.getElementById('energy-net');
        netElement.textContent = (netEnergy >= 0 ? '+' : '') + netEnergy;
        netElement.className = netEnergy >= 0 ? 'positive' : 'negative';

        // Update facilities list
        this.updateFacilitiesList();

        // Update buildings list
        this.updateBuildingsList();

        // Update alerts
        this.updateAlertsList();
    }

    updateStat(statName, value, unit, min, max) {
        const element = document.getElementById(statName);
        const barElement = document.getElementById(`${statName}-bar`);
        
        element.textContent = `${value.toFixed(1)}${unit}`;
        
        // Calculate percentage for progress bar
        let percentage;
        if (statName === 'temperature') {
            // Map temperature range to 0-100%
            percentage = ((value - min) / (max - min)) * 100;
        } else {
            percentage = value;
        }
        
        barElement.style.width = `${Math.max(0, Math.min(100, percentage))}%`;
    }

    updateFacilitiesList() {
        const container = document.getElementById('facilities-list');
        container.innerHTML = '';

        let hasAny = false;
        for (const [facilityKey, count] of Object.entries(this.facilities)) {
            if (count > 0) {
                hasAny = true;
                const facility = this.facilityTypes[facilityKey];
                const facilityDiv = document.createElement('div');
                facilityDiv.className = 'facility-item';
                
                const effectsText = Object.entries(facility.effects)
                    .map(([stat, value]) => {
                        const sign = value > 0 ? '+' : '';
                        const label = stat === 'population' ? 'Pop' : 
                                     stat.charAt(0).toUpperCase() + stat.slice(1);
                        return `${label}: ${sign}${value * count}/turn`;
                    })
                    .join(', ');

                facilityDiv.innerHTML = `
                    <div class="facility-header">
                        <span class="facility-name">${facility.icon} ${facility.name}</span>
                        <span class="facility-count">×${count}</span>
                    </div>
                    <div class="facility-info">${facility.description}</div>
                    <div class="facility-effects">${effectsText}</div>
                    <div class="facility-effects">Energy: ${facility.energyConsumption * count}/turn</div>
                `;
                
                container.appendChild(facilityDiv);
            }
        }

        if (!hasAny) {
            container.innerHTML = '<p style="opacity: 0.6;">No facilities built yet. Purchase buildings below to begin terraforming!</p>';
        }
    }

    updateBuildingsList() {
        const container = document.getElementById('buildings-list');
        container.innerHTML = '';

        for (const [facilityKey, facility] of Object.entries(this.facilityTypes)) {
            const buildingDiv = document.createElement('div');
            const isUnlocked = this.isBuildingUnlocked(facilityKey);
            const canAfford = this.canAfford(facilityKey);
            const meetsReqs = this.meetsRequirements(facilityKey);
            const isSuitable = this.isPlanetSuitable(facilityKey);
            
            buildingDiv.className = `building-item ${!isUnlocked ? 'locked' : ''}`;
            
            let unlockText = '';
            if (!isUnlocked) {
                unlockText = `<div class="building-unlock">🔒 Unlocks at ${this.stages[facility.unlockStage].name}</div>`;
            }

            let requirementsText = '';
            if (facility.requirements) {
                const reqList = Object.entries(facility.requirements)
                    .map(([stat, value]) => {
                        const current = this.planet[stat];
                        const met = current >= value;
                        return `${stat}: ${value}% ${met ? '✓' : '✗'}`;
                    })
                    .join(', ');
                requirementsText = `<div class="building-effects">Requirements: ${reqList}</div>`;
            }

            let suitabilityText = '';
            if (!isSuitable) {
                suitabilityText = `<div class="building-effects" style="color: #FF9800;">⚠️ Not ideal for ${this.planetTypes[this.currentPlanetType].name} planets</div>`;
            }

            const effectsText = Object.entries(facility.effects)
                .map(([stat, value]) => {
                    const sign = value > 0 ? '+' : '';
                    const label = stat === 'population' ? 'Pop' : 
                                 stat.charAt(0).toUpperCase() + stat.slice(1);
                    return `${label}: ${sign}${value}/turn`;
                })
                .join(', ');

            const canBuild = isUnlocked && canAfford && meetsReqs;

            buildingDiv.innerHTML = `
                <div class="building-header">
                    <span class="building-name">${facility.icon} ${facility.name}</span>
                </div>
                ${unlockText}
                <div class="building-description">${facility.description}</div>
                <div class="building-costs">
                    <span>💰 ${facility.cost.credits} Credits</span>
                    <span>⚡ ${facility.cost.energy} Energy</span>
                </div>
                <div class="building-effects">${effectsText}</div>
                <div class="building-effects">Energy consumption: ${facility.energyConsumption}/turn</div>
                ${requirementsText}
                ${suitabilityText}
                <div class="building-actions">
                    <button class="btn btn-buy" ${!canBuild ? 'disabled' : ''} 
                            onclick="game.buyFacility('${facilityKey}')">
                        ${!isUnlocked ? '🔒 Locked' : !canAfford ? '💰 Too Expensive' : !meetsReqs ? '⚠️ Requirements Not Met' : 'Build'}
                    </button>
                </div>
            `;
            
            container.appendChild(buildingDiv);
        }
    }

    updateAlertsList() {
        const container = document.getElementById('alerts-list');
        container.innerHTML = '';

        if (this.alerts.length === 0) {
            container.innerHTML = '<p style="opacity: 0.6;">No alerts. Everything is running smoothly!</p>';
            return;
        }

        this.alerts.forEach(alert => {
            const alertDiv = document.createElement('div');
            alertDiv.className = `alert-item ${alert.type}`;
            alertDiv.innerHTML = `<strong>[Turn ${alert.turn}]</strong> ${alert.message}`;
            container.appendChild(alertDiv);
        });
    }
}

// Initialize game when page loads
let game;
window.addEventListener('DOMContentLoaded', () => {
    game = new TerraformingGame();
});
