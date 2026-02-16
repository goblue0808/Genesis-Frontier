# Genesis Prime: Game Mechanics & Technical Specifications

## Resource Management System

### Resource Types and Storage

#### Life Support Resources
| Resource | Unit | Storage Capacity | Consumption Rate | Production Methods |
|----------|------|------------------|------------------|-------------------|
| Oxygen | kg | 500 kg | 12.5 kg/day (4 colonists) | Electrolysis, Oxide Reduction |
| Water | liters | 2,000 L | 200 L/day (recycled at 90%) | Ice Mining, Atmospheric Collection |
| Food | kg | 1,000 kg | 8 kg/day (4 colonists) | Hydroponics, Algae Culture |
| Power | kW | Battery: 1,000 kWh | 270 kW average | Nuclear, Geothermal, Solar |

#### Construction Materials
| Material | Source | Processing Required | Uses |
|----------|--------|---------------------|------|
| Regolith | Surface | Sintering/Melting | Construction blocks, radiation shielding |
| Iron | Ore deposits | Smelting | Structural frames, machinery |
| Aluminum | Bauxite | Electrolysis (high energy) | Light structures, solar panels |
| Silicon | Silicate rock | Refining | Electronics, solar cells, glass |
| Copper | Ore veins | Smelting | Wiring, electronics |
| Titanium | Volcanic deposits | Complex refining | High-strength components |
| Rare Earths | Crystal wastes | Chemical extraction | Advanced electronics |

#### Chemical Resources
| Chemical | Atmospheric Source | Uses | Collection Rate |
|----------|-------------------|------|-----------------|
| CO₂ | 78% of atmosphere | Carbon feedstock, fuel synthesis | Unlimited |
| SO₂ | 12% of atmosphere | Sulfuric acid, industrial processes | Unlimited |
| N₂ | 7% of atmosphere | Fertilizer, inert gas | Unlimited |
| CH₄ | 2% of atmosphere | Fuel, chemical feedstock | 100 kg/day per harvester |

### Resource Flow Mechanics

#### Water Cycle
```
Ice Mining (500 L/day) → Storage Tank (2000 L) → Distribution:
  ├─ Colonist Needs (20 L/day per person)
  ├─ Hydroponics (20 L/day)
  ├─ Industrial Processes (50 L/day)
  └─ Electrolysis → O₂ + H₂

Recycling: 90% efficient → Return 162 L/day to storage
Net Consumption: 18 L/day + losses
```

#### Oxygen Cycle
```
Electrolysis (50 kg O₂/day) → Storage (500 kg) → Distribution:
  ├─ Life Support (10 kg/day per person)
  ├─ Industrial oxidation (5 kg/day)
  └─ Reserve buffer (25 kg/day)

Recycling: 95% efficient from CO₂ scrubbers
Net Consumption: 0.5 kg/day per person after recycling
```

#### Power Grid
```
Generation:
  ├─ Nuclear Reactor (250 kW baseline)
  ├─ Geothermal (1-2 MW after Day 60)
  └─ Solar Arrays (150 kW day, 0 kW night, variable)

Consumption:
  ├─ Life Support (60 kW)
  ├─ Water Processing (50 kW)
  ├─ Electrolysis (80 kW)
  ├─ Manufacturing (100 kW)
  ├─ Hydroponics (60 kW)
  └─ Research/Misc (50 kW)

Total: ~400 kW average demand
```

## Building Catalog

### Tier 1: Survival Structures (Days 1-90)

#### Central Hub
- **Size:** 50m² interior space
- **Capacity:** 4 colonists
- **Power:** 60 kW
- **Build Time:** Pre-fabricated (starts built)
- **Maintenance:** 5 units spare parts per 30 days
- **Durability:** 95% integrity after 1 year
- **Features:** Life support, sleeping quarters, basic lab

#### Atmospheric Water Harvester
- **Size:** 10m² footprint, 8m tall
- **Output:** 25-35 L/day (humidity dependent)
- **Power:** 50 kW
- **Build Cost:** 2,000 metal, 500 composites
- **Build Time:** 4 days
- **Maintenance:** Chemical filters every 60 days
- **Efficiency:** Drops to 60% during dust storms

#### Ice Mining Drill
- **Size:** 20m² footprint, drilling depth 50-150m
- **Output:** 500-1,000 L/day
- **Power:** 30 kW continuous while drilling
- **Build Cost:** 5,000 metal, 1,000 electronics
- **Build Time:** 10 days (includes drilling)
- **Maintenance:** Drill bit replacement every 90 days
- **Risk:** 15% chance of hitting dry hole (wasted effort)

#### Electrolysis Plant
- **Size:** 15m² footprint
- **Input:** 100 L water/day
- **Output:** 50 kg O₂/day, 6 kg H₂/day
- **Power:** 80 kW
- **Build Cost:** 3,000 metal, 1,500 electronics
- **Build Time:** 6 days
- **Maintenance:** Electrode replacement every 180 days
- **Efficiency:** 75% (improves to 85% with upgrades)

#### Hydroponic Module
- **Size:** 100m² growing area
- **Output:** 15-20 kg food/day (after 60-day growth)
- **Power:** 60 kW (LED lighting)
- **Water:** 20 L/day
- **Build Cost:** 8,000 metal, 2,000 transparent materials, 3,000 biological
- **Build Time:** 15 days to construct + 60 days to first harvest
- **Crop Rotation:** 30-day cycles after initial establishment
- **Risk:** 10% crop failure chance from disease or system failure

#### Small Solar Array
- **Size:** 50m² of panels
- **Output:** 20 kW peak (daytime only)
- **Build Cost:** 1,500 silicon, 800 metal, 400 electronics
- **Build Time:** 3 days
- **Maintenance:** Daily cleaning (automated system), panel replacement every 365 days
- **Degradation:** -2% efficiency per month from dust/acid damage

### Tier 2: Industrial Structures (Days 91-365)

#### Geothermal Power Plant
- **Size:** 40m² surface facility, 200-500m deep well
- **Output:** 1-2 MW continuous
- **Build Cost:** 15,000 metal, 5,000 specialized components
- **Build Time:** 20 days (includes drilling)
- **Location Requirement:** Within 5km of volcanic activity
- **Maintenance:** Descaling every 90 days
- **Lifespan:** 20 years before well needs re-drilling

#### Automated Mining Complex
- **Size:** 200m² facility + 1km² mining area
- **Output:** 10 tons raw ore/day
- **Processed:** 5 tons refined metal/day
- **Power:** 500 kW
- **Build Cost:** 25,000 metal, 8,000 electronics, 5,000 robotics
- **Build Time:** 30 days
- **Crew:** 2 operators + 12 automated drones
- **Maintenance:** High - drones need frequent repair

#### Advanced Manufacturing Center
- **Size:** 300m² facility
- **Capabilities:** Fabricate 90% of components locally
- **Power:** 200 kW
- **Build Cost:** 30,000 metal, 15,000 electronics, 10,000 precision tools
- **Build Time:** 35 days
- **Staff:** 4 engineers
- **Specializations:** Metallurgy, electronics, chemical processing, robotics

#### Atmospheric Processing Plant
- **Size:** 80m² facility with 200m² collection fields
- **Throughput:** 1,000 m³ atmosphere/hour
- **Products:** CO₂ (captured), SO₂ (captured), N₂ (separated), trace gases
- **Power:** 150 kW
- **Build Cost:** 20,000 metal, 12,000 chemical processing equipment
- **Build Time:** 25 days
- **Output Rate:** 500 kg CO₂, 150 kg SO₂, 90 kg N₂ per day

#### Expanded Habitat Complex
- **Size:** 1,000m² total interior space
- **Capacity:** 20-30 colonists
- **Modules:** Living quarters, medical bay, rec room, laboratories, workshops
- **Power:** 300 kW
- **Build Cost:** 50,000 regolith concrete, 20,000 metal, 8,000 life support
- **Build Time:** 45 days (modular construction)
- **Pressurization:** 1.0 atmosphere Earth-normal
- **Safety:** Triple-redundant life support

### Tier 3: Terraforming Infrastructure (Year 2+)

#### Mega Atmospheric Scrubber
- **Size:** 500m² facility with 2km² collection area
- **Throughput:** 100,000 m³ atmosphere/hour
- **Function:** Remove CO₂ and SO₂, convert to solid carbonates and sulfates
- **Power:** 5 MW
- **Build Cost:** 200,000 metal, 50,000 advanced materials, 30,000 chemical systems
- **Build Time:** 180 days
- **Impact:** Reduces local atmospheric CO₂ by 0.1% over 10 years
- **Required:** 1,000+ units for planetary effect

#### Biological Reactor Dome
- **Size:** 1 hectare sealed dome
- **Function:** Cultivate CO₂-consuming, O₂-producing microorganisms
- **Output:** 1 ton O₂ per year, 10 tons biomass
- **Power:** 800 kW (lighting, temperature, circulation)
- **Build Cost:** 100,000 metal, 50,000 transparent materials, 40,000 biological
- **Build Time:** 120 days
- **Maintenance:** Continuous biological monitoring
- **Scale Needed:** 10,000+ domes for planetary oxygen

#### Orbital Sun Shade
- **Size:** 100km² reflective surface (in orbit)
- **Function:** Reduce solar heating by reflecting sunlight
- **Cooling Effect:** -0.5°C per shade globally
- **Build Cost:** 500,000 advanced materials, orbital construction facility
- **Build Time:** 365 days per unit
- **Maintenance:** Orbital drones for position-keeping
- **Required:** 100+ units for significant cooling

## Technology Tree

### Research System
- **Research Points (RP):** Generated by laboratories and scientist colonists
- **Base Rate:** 10 RP/day with basic lab
- **Enhanced Rate:** 50 RP/day with advanced lab + 5 scientists
- **Research Time:** Measured in days (100 RP = 10 days at base rate)

### Tier 1 Technologies (Days 1-90)

| Technology | Cost (RP) | Unlocks | Prerequisites |
|------------|-----------|---------|---------------|
| Water Extraction | 100 | Ice Mining Drill | None |
| Oxygen Production | 150 | Electrolysis Plant | Water Extraction |
| Sealed Agriculture | 200 | Hydroponic Module | Oxygen Production |
| Geothermal Energy | 250 | Geothermal Plant | None |
| Basic Automation | 180 | Mining Drones | None |

### Tier 2 Technologies (Days 91-365)

| Technology | Cost (RP) | Unlocks | Prerequisites |
|------------|-----------|---------|---------------|
| Advanced Metallurgy | 400 | Alloy Production, Titanium Refining | Basic Automation |
| Industrial Chemistry | 500 | Atmospheric Processing, Plastics | Oxygen Production |
| Robotics | 600 | Automated Mining Complex | Basic Automation |
| Power Storage | 450 | Large Battery Banks | Geothermal Energy |
| Genetic Engineering | 800 | Enhanced Crops, Microorganism Design | Sealed Agriculture |

### Tier 3 Technologies (Year 2+)

| Technology | Cost (RP) | Unlocks | Prerequisites |
|------------|-----------|---------|---------------|
| Atmospheric Engineering | 2,000 | Mega Scrubbers | Industrial Chemistry |
| Biotechnology | 2,500 | Biological Reactors | Genetic Engineering |
| Planetary Climate Control | 3,000 | Global Monitoring Network | Atmospheric Engineering |
| Orbital Construction | 3,500 | Sun Shades, Space Elevator | Advanced Metallurgy |
| Ecosystem Design | 4,000 | Engineered Biosphere | Biotechnology |

## Hazard System

### Environmental Disasters

#### Dust Storm
- **Frequency:** Every 30-90 days
- **Duration:** 3-14 days
- **Effects:**
  - Solar power reduced to 10%
  - Visibility: 0 (no outdoor operations)
  - Equipment wear: +200%
  - Hull integrity: -1% per storm day
- **Warning:** 24-hour advance notice from weather monitoring
- **Mitigation:** Retract solar panels, seal all airlocks, activate emergency power

#### Acid Rain
- **Frequency:** Every 5-10 days in equatorial zones, less common elsewhere
- **Duration:** 2-12 hours
- **Effects:**
  - External equipment corrosion: -2% per hour exposed
  - Unsealed structures: -5% integrity per hour
  - Rover travel: Impossible (acid damages seals)
- **pH Level:** 0.5-1.5
- **Mitigation:** Acid-resistant coatings (expensive), covered storage, weather monitoring

#### Volcanic Eruption
- **Frequency:** Minor every 7 days somewhere on planet, Major every 180 days
- **Range:** Affects 50km radius (minor), 500km radius (major)
- **Effects:**
  - Lava flows: Destroy anything in path
  - Ash cloud: Blocks solar for 7-30 days
  - Seismic activity: -10% structural integrity
  - Pyroclastic surge: Instant destruction within 10km
- **Warning:** 6-48 hours from seismic monitoring
- **Mitigation:** Build outside volcanic hazard zones, seismic reinforcement

#### Solar Flare
- **Frequency:** Every 90-180 days
- **Duration:** 12-48 hours elevated radiation
- **Effects:**
  - Radiation: 500% normal levels
  - Electronics: 20% failure chance
  - Colonists outdoors: Dead within 30 minutes
  - Power grid: Possible transformer failures
- **Warning:** 8-hour advance notice from orbital sensors
- **Mitigation:** Radiation shielding, colonists shelter in central areas, electronics surge protection

#### Earthquake
- **Frequency:** Magnitude 3-5 every 2-3 days, Magnitude 6+ every 60 days
- **Effects:**
  - Structure damage: -5% to -30% integrity depending on magnitude
  - Pipeline ruptures: Possible
  - Equipment misalignment: Repairs needed
  - Colonist injury: Possible during major quakes
- **Warning:** None (random events)
- **Mitigation:** Seismic reinforcement, flexible pipeline joints, emergency response protocols

### Equipment Failures

#### Life Support Malfunction
- **Probability:** 2% per month per module
- **Effects:**
  - CO₂ scrubbers fail → toxic buildup → death in 4 hours
  - O₂ circulation fails → suffocation risk
  - Temperature control fails → hypothermia or hyperthermia
- **Detection:** Automated alarms
- **Response Time:** Critical - must repair within 2 hours
- **Repair Cost:** 500 spare parts + 2 hours engineer time

#### Power System Failure
- **Probability:** 5% per month for solar, 1% per month for reactor/geothermal
- **Effects:**
  - Emergency battery lasts 24 hours
  - Life support priority mode (other systems shut down)
  - Food production stops (crop die-off risk after 48 hours)
- **Causes:** Dust buildup (solar), turbine failure (geothermal), reactor maintenance
- **Repair Cost:** 1,000-5,000 parts depending on system
- **Prevention:** Regular maintenance schedule

#### Water System Contamination
- **Probability:** 3% per month
- **Effects:**
  - Entire water supply unusable
  - Emergency rations only (dehydration risk after 48 hours)
  - System purge and sterilization required
- **Causes:** Bacterial growth, chemical contamination, filter failure
- **Response:** 24-72 hours for purification
- **Prevention:** UV sterilization, redundant filtration

## Colony Management

### Population Dynamics

#### Colonist Stats
Each colonist has:
- **Health:** 0-100% (affected by conditions, injuries, stress)
- **Morale:** 0-100% (affected by living conditions, success, disasters)
- **Skill:** Specialization (engineer, scientist, medic, farmer, miner, pilot)
- **Experience:** Improves efficiency over time

#### Morale Factors
**Positive:**
- Successful milestone achieved: +10%
- Adequate food variety: +5%
- Recreation facilities: +5%
- New colonists arrive: +8%
- First outdoor walk (after terraforming): +50%

**Negative:**
- Disaster survival: -15%
- Colonist death: -30%
- Prolonged equipment failures: -10%
- Food rationing: -20%
- Overcrowding: -5% per person over capacity

#### Health Management
- **Medical Bay Required:** For treating injuries and illness
- **Injuries:** From accidents during hazardous operations
- **Radiation Sickness:** From inadequate shielding or solar flares
- **Psychological Issues:** From isolation, stress, trauma
- **Treatment Time:** 1-30 days depending on severity

### Colonist Needs

| Need | Consumption | Effect if Unmet |
|------|-------------|-----------------|
| Oxygen | 2.5 kg/day | Death in 5 minutes |
| Water | 5 L/day | Death in 3 days |
| Food | 2 kg/day | Death in 30 days, performance degraded after 7 days |
| Sleep | 8 hours/day | Performance -25% if inadequate |
| Recreation | 2 hours/day | Morale -10% per week if neglected |
| Social | Varied | Morale -5% per week if isolated |

## Mission Milestones

### First Year Achievements

| Milestone | Day | Reward |
|-----------|-----|--------|
| First Water Production | 15-25 | +5,000 bonus research points |
| Oxygen Independence | 30-40 | +10,000 bonus research points |
| First Harvest | 75-90 | +15,000 bonus research points |
| Geothermal Online | 60-80 | +20,000 bonus research points |
| Survive First Year | 365 | +50,000 bonus research points, supply ship arrives |

### Long-Term Goals

| Goal | Timeline | Victory Points |
|------|----------|----------------|
| Population: 50 colonists | Year 3 | 100,000 |
| Industrial output: 100 tons/day | Year 5 | 250,000 |
| Atmospheric O₂: 0.1% | Year 10 | 500,000 |
| First outdoor biodome | Year 15 | 1,000,000 |
| Atmospheric O₂: 1% | Year 50 | 5,000,000 |
| Breathable atmosphere: 15% O₂ | Year 200+ | ULTIMATE VICTORY |

## Difficulty Settings

### Easy Mode: "Research Mission"
- Starting resources: 150% normal
- Disaster frequency: 50% normal
- Research speed: 150%
- Supply ships: Every year
- Best for learning mechanics

### Normal Mode: "Colonization"
- Starting resources: 100%
- Disaster frequency: 100%
- Research speed: 100%
- Supply ships: Every 2 years
- Balanced challenge

### Hard Mode: "Survival"
- Starting resources: 75%
- Disaster frequency: 150%
- Research speed: 75%
- Supply ships: Every 3 years
- For experienced players

### Extreme Mode: "Against All Odds"
- Starting resources: 50%
- Disaster frequency: 200%
- Research speed: 50%
- Supply ships: Every 5 years
- Permadeath: One colony failure ends game
- Ultimate challenge

## Save System & Progression

### Autosave
- Every 30 minutes of play time
- Before major events (storms, eruptions)
- After completing research or construction
- Maximum 5 autosaves retained

### Manual Save
- Unlimited manual saves
- Recommended before risky decisions
- Can load any previous save

### Progression Unlocks
Completing colonies unlocks:
- **First Survival:** Unlock Normal Mode
- **Normal Victory:** Unlock Hard Mode
- **Hard Victory:** Unlock Extreme Mode
- **Extreme Victory:** Unlock Sandbox Mode (no restrictions)
- **Achievements:** Special buildings, paint schemes, colonist names

## Conclusion

These mechanics create a deep, challenging simulation of hostile planet colonization. Every decision matters, every resource counts, and every disaster must be overcome. The progression from desperate survival to planetary transformation provides hundreds of hours of strategic gameplay.

The balance between immediate survival needs and long-term terraforming goals creates meaningful strategic choices. Players must constantly decide: invest in survival, or push toward the ultimate goal of making Genesis Prime truly habitable.

**The hostile environment isn't just a backdrop - it's the core challenge that makes every achievement meaningful.**
