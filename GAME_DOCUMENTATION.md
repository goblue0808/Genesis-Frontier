# Genesis Frontier - Multi-Stage Terraforming System

## Overview
Genesis Frontier is a browser-based multiplayer terraforming simulation game where players transform hostile alien worlds into habitable colonies through strategic resource management and environmental engineering.

## Game Mechanics

### Planet Types
The game features four distinct planet types, each with unique challenges:

1. **Frozen Tundra (❄️)**
   - Extremely cold (-80°C)
   - Most water is frozen in ice
   - Requires heating facilities to begin terraforming
   - Low oxygen levels

2. **Scorched Desert (🔥)**
   - Extremely hot (120°C)
   - Very low water availability
   - Requires cooling facilities to enable water retention
   - Minimal humidity

3. **Arid Wasteland (🏜️)**
   - Moderate temperature (45°C)
   - Low humidity
   - Requires humidification systems
   - Decent soil quality

4. **Barren Rock (🪨)**
   - Minimal atmosphere
   - Poor soil quality
   - Balanced starting point but requires all systems

### Terraforming Stages

The game features a multi-stage progression system:

#### Stage 0: Hostile World
- **Requirements:** None (starting stage)
- **Unlocks:** Heating Facilities, Cooling Facilities, Solar Arrays
- **Description:** Planet is completely inhospitable. Focus on basic infrastructure and temperature regulation.

#### Stage 1: Early Terraforming
- **Requirements:** Temperature ≥ -20°C
- **Unlocks:** Atmospheric Humidifiers, O2 Generators, Water Extraction Plants
- **Description:** Temperature is stabilizing. Begin atmospheric processing and water management.

#### Stage 2: Atmospheric Development
- **Requirements:** Temperature ≥ -10°C, Oxygen ≥ 20%, Water ≥ 25%
- **Unlocks:** CO2 Scrubbers, Soil Enrichment Stations
- **Description:** Breathable atmosphere is forming. Start soil enrichment for future agriculture.

#### Stage 3: Ecosystem Foundation
- **Requirements:** Temperature ≥ 0°C, Oxygen ≥ 35%, Water ≥ 40%, Soil ≥ 40%, CO2 ≤ 60%
- **Unlocks:** Pollution Filters, Agricultural Greenhouses
- **Description:** Basic ecosystem can be sustained. Agriculture becomes possible.

#### Stage 4: Habitable World
- **Requirements:** Temperature ≥ 5°C, Oxygen ≥ 50%, Water ≥ 50%, Soil ≥ 60%, Humidity ≥ 30%, CO2 ≤ 40%, Pollution ≤ 20%
- **Unlocks:** Habitat Domes
- **Description:** Planet is habitable! Begin colonization with habitat domes.

#### Stage 5: Thriving Colony (Victory!)
- **Requirements:** Temperature ≥ 15°C, Oxygen ≥ 70%, Water ≥ 70%, Soil ≥ 80%, Humidity ≥ 50%, Pollution ≤ 10%, Population ≥ 500
- **Description:** Self-sustaining ecosystem achieved. You win!

### Facilities & Buildings

#### Temperature Control

**Heating Facility (🔥)**
- **Cost:** 1000 Credits, 50 Energy
- **Energy Consumption:** 20/turn
- **Effects:** +5°C temperature, +3% water (melts ice), +2% pollution
- **Best for:** Cold planets
- **Purpose:** Increases planetary temperature and melts ice to create liquid water

**Cooling Facility (❄️)**
- **Cost:** 1200 Credits, 60 Energy
- **Energy Consumption:** 25/turn
- **Effects:** -5°C temperature, +2% water (condensation), +1% pollution
- **Best for:** Hot planets
- **Purpose:** Reduces temperature to allow water to exist in liquid form

#### Atmospheric Control

**Atmospheric Humidifier (💧)**
- **Cost:** 800 Credits, 40 Energy
- **Energy Consumption:** 15/turn
- **Effects:** +5% humidity, -2% water, -1°C temperature
- **Best for:** Desert and hot planets
- **Purpose:** Increases atmospheric humidity by releasing water vapor

**O2 Generator (🌱)**
- **Cost:** 1500 Credits, 70 Energy
- **Energy Consumption:** 30/turn
- **Effects:** +4% oxygen, -2% CO2, -1% water
- **Purpose:** Generates oxygen through electrolysis and biological processes

**CO2 Scrubber (🏭)**
- **Cost:** 1300 Credits, 55 Energy
- **Energy Consumption:** 22/turn
- **Effects:** -5% CO2, -3% pollution, -2°C temperature
- **Purpose:** Removes carbon dioxide, reducing greenhouse effect

**Pollution Filter Array (🌬️)**
- **Cost:** 1400 Credits, 60 Energy
- **Energy Consumption:** 25/turn
- **Effects:** -5% pollution, +1% oxygen
- **Purpose:** Filters atmospheric pollutants and particulates

#### Resource Management

**Water Extraction Plant (💦)**
- **Cost:** 1100 Credits, 50 Energy
- **Energy Consumption:** 20/turn
- **Effects:** +5% water, +2% humidity
- **Purpose:** Extracts water from underground sources and ice deposits

**Soil Enrichment Station (🌾)**
- **Cost:** 900 Credits, 45 Energy
- **Energy Consumption:** 18/turn
- **Effects:** +5% soil quality, -1% water, +1% oxygen
- **Purpose:** Enriches soil with nutrients for agriculture

#### Advanced Facilities

**Solar Power Array (☀️)**
- **Cost:** 2000 Credits
- **Energy Production:** +50/turn
- **Effects:** -1% pollution
- **Purpose:** Generates clean energy from solar radiation
- **Note:** Essential for maintaining energy balance

**Agricultural Greenhouse (🏡)**
- **Cost:** 1800 Credits, 40 Energy
- **Energy Consumption:** 15/turn
- **Requirements:** Soil ≥ 50%, Water ≥ 30%
- **Effects:** +3% oxygen, -3% CO2, -2% water, -1% soil
- **Purpose:** Produces food and oxygen while consuming CO2

**Habitat Dome (🏙️)**
- **Cost:** 3000 Credits, 100 Energy
- **Energy Consumption:** 30/turn
- **Requirements:** Oxygen ≥ 40%, Temperature ≥ 0°C, Water ≥ 40%
- **Effects:** +100 population, -3% water, -2% oxygen, +2% pollution
- **Purpose:** Houses colonists and provides living space

### Resources

#### Credits (💰)
- Primary currency for purchasing buildings
- Generated by population (0.5 credits per person per turn)
- Starting amount: 5000

#### Energy (⚡)
- Required to build and operate all facilities
- Base production: 100/turn
- Additional production from Solar Arrays
- Facilities consume energy each turn
- Running out of energy causes systems to malfunction

#### Population (👥)
- Housed in Habitat Domes
- Generates income
- Requires oxygen, water, and moderate temperatures
- Can die off if conditions become inhospitable

### Environmental Dynamics

#### Natural Changes
The planet undergoes natural changes each turn:

- **Temperature Regulation:** Naturally trends toward 15°C over time
- **Atmospheric Exchange:** Oxygen and CO2 naturally balance
- **Water Cycle:** Water evaporates in heat, freezes in cold
- **Soil Degradation:** Soil quality degrades without enrichment
- **Pollution Decay:** Pollution slowly decreases naturally

#### Environmental Collapse

The game includes failure states from environmental mismanagement:

1. **Extreme Cold** (< -50°C): Freezes all water systems
2. **Extreme Heat** (> 100°C): Evaporates all surface water
3. **Toxic Atmosphere** (CO2 > 95%): Poisons the atmosphere
4. **Oxygen Depletion** (< 5% with population): Makes planet unlivable
5. **Water Crisis** (< 5% with population > 50): Ends colonization
6. **Soil Depletion** (< 5% with greenhouses): Destroys agriculture
7. **Pollution Crisis** (> 90%): Makes planet toxic

### Resource Shortages

Warning systems alert you to dangerous conditions:

- **Energy Shortage** (< 50): Build more solar arrays
- **Critical Energy** (= 0): Facilities shut down, environmental degradation begins
- **Low Credits** (< 500): Need more population for income
- **Water Shortage** (< 20% with population): Population declines
- **Low Oxygen** (< 30% with large population): Population declines

## Strategy Guide

### Cold Planet Strategy
1. Build Heating Facilities immediately to melt ice
2. Ice melting creates water automatically
3. Once temperature reaches -20°C, add O2 Generators
4. Balance heating with CO2 scrubbers to prevent runaway greenhouse effect

### Hot Planet Strategy
1. Build Cooling Facilities to lower temperature
2. Add Water Extractors to compensate for evaporation
3. Use Humidifiers once water is stable
4. CO2 scrubbers help reduce temperature further

### Desert Planet Strategy
1. Start with Water Extractors
2. Add Humidifiers to increase atmospheric moisture
3. Focus on soil enrichment early
4. Temperature is already moderate, focus on atmosphere

### General Tips
- Always maintain positive energy balance with Solar Arrays
- Build multiple facilities of the same type for faster progress
- Watch for warning alerts and respond quickly
- Each stage unlocks crucial new buildings - plan ahead
- Population generates income but requires resources
- Balance is key - too much of one resource can cause problems elsewhere

## Technical Implementation

### Architecture
- **Frontend:** Pure HTML5, CSS3, and JavaScript (ES6+)
- **No Backend Required:** Fully client-side game
- **No Dependencies:** Runs in any modern browser
- **Responsive Design:** Works on desktop and mobile devices

### Game Loop
1. Player builds facilities (instant)
2. Player clicks "Next Turn"
3. Facilities apply their effects
4. Natural environmental changes occur
5. Resource generation/consumption calculated
6. Warnings and collapse conditions checked
7. Stage progression evaluated
8. UI updates with new values

### Save System
Currently runs in-memory only. Future versions could add:
- LocalStorage for save games
- Multiplayer server for shared planets
- Cloud saves for cross-device play

## Future Enhancements

Potential features for expansion:
- Multiplayer cooperation/competition
- Random events (meteor strikes, solar flares)
- Research tree for technology upgrades
- Multiple planets in a solar system
- Trade between colonies
- More planet types (toxic, volcanic, oceanic)
- Missions and objectives
- Achievements system
- Visual planet rendering with WebGL

## Credits

Genesis Frontier - A multi-stage terraforming simulation game
Created as a demonstration of complex game mechanics and environmental systems

## License

This is a demonstration project. Feel free to use, modify, and extend for educational or personal projects.
