# Genesis Frontier - Multiplayer Space Exploration & Terraforming MMO

## Overview

Genesis Frontier is a comprehensive browser-based MMO where players build galactic empires through planetary terraforming, starship construction, exploration, diplomacy, trade, and warfare. The game features persistent gameplay that continues even when you're offline, allowing your colonies to grow and develop while you're away.

### Game Modes

1. **Single-Player Terraforming** (`index.html`) - Focus on transforming a single hostile planet into a thriving colony
2. **Multiplayer Universe** (`multiplayer.html`) - Build a galactic empire with multiple planets, starships, and player interactions
3. **Modern Sci-Fi UI Concept** (`scifi-ui.html`) - ⭐ **NEW!** Experience a futuristic interface with 3D planet visualization, holographic effects, and advanced controls

## Multiplayer Features 🌌

### Starship Construction & Fleet Management
- **4 Ship Types**: Scout Ships, Colony Ships, Freighters, and Warships
- **Construction Queue**: Build ships over time with automatic completion
- **Fleet Commands**: Send ships to explore, colonize, trade, or invade
- **Ship Upgrades**: Improve speed, cargo capacity, and combat power

### Galaxy Exploration
- **50 Star Systems** in a procedurally generated galaxy
- **1-5 Planets** per system with unique characteristics
- **Discovery Rewards**: +100 Prestige for each new system
- **Random Events**: Encounter pirates, ancient ruins, and spatial anomalies
- **Rare Resource Zones**: 10 special sectors with valuable materials

### Multi-Planet Colonization
- **Unlimited Colonies**: Expand across the galaxy
- **Colony Ships**: Transport 100 colonists to new worlds
- **Independent Management**: Each planet develops separately
- **Resource Tracking**: Credits, energy, metals, and population per planet
- **Terraforming**: Transform each colony's environment

### Multiplayer Diplomacy
- **Treaty System**: Trade agreements, non-aggression pacts, and alliances
- **Opinion Mechanics**: Relationship scores from -100 to +100
- **Espionage**: Spy missions to reveal opponent intelligence
- **AI Players**: Compete against computer-controlled empires

### Trade & Economy
- **Inter-Planet Trade**: Freighters transport resources between your colonies
- **Trade Routes**: Automated resource transfers
- **Resource Diversity**: Credits, energy, metals, and rare resources
- **Economic Strategy**: Specialize planets for efficient production

### Warfare & Invasion
- **Invasion Requirement**: Must own 2+ planets to attack others
- **Battle System**: Combat power vs. defense calculations
- **Casualties**: 30% ship losses on success, 50% on failure
- **Defensive Structures**: Shield generators, plasma cannons, orbital platforms
- **War Consequences**: Diplomatic penalties and ongoing conflicts

### Long-Term Progression
- **Mega-Projects**: Dyson Sphere, Ring World, Wormhole Gate
- **Prestige System**: Galactic reputation from 0 to 250,000+
- **7 Rank Tiers**: From Explorer to Galactic Legend
- **Technology Tree**: 8 research options for empire bonuses
- **Victory Conditions**: Multiple paths to dominance

### Persistent Offline Play
- **Auto-Save**: Every 30 seconds to browser storage
- **Idle Progression**: Up to 24 hours of automatic development
- **Continuous Building**: Construction continues while offline
- **Resource Generation**: All planets produce resources passively
- **Ship Travel**: Exploration continues in your absence

---

## Single-Player Features

### 🌾 Five Core Resource Types
- **Food**: Sustains population, critical for survival
- **Metals**: Essential construction material
- **Rare Minerals**: High-value resources for advanced technology
- **Energy**: Powers all infrastructure
- **Manufactured Goods**: Complex products requiring multiple inputs

### 🏗️ Production Buildings
- **Basic Tier**: Farm, Mine, Power Plant, Factory, Quarry
- **Advanced Tier**: Hydroponics Bay, Automated Mine, Deep Core Extractor, Fusion Reactor, Advanced Factory
- Each building has construction costs, production outputs, and upkeep requirements
- Buildings can be upgraded up to level 5 for increased efficiency

### ⚖️ Planet Stability System
- Stability ranges from 0 (collapsed) to 100 (optimal)
- Buildings strain planetary systems
- Resource shortages and debt reduce stability
- Rapid expansion causes instability
- Low stability reduces production efficiency

### 🎲 Risk-Reward Mechanics
- Advanced buildings offer higher outputs but higher risks
- Building failure chances create uncertainty
- Overspending can destabilize your planet
- Rapid expansion penalties encourage careful planning
- Different strategies: conservative, aggressive, or balanced

### 📊 Economic Planning Tools
- **Construction Simulation**: Preview impact before building
- **Optimal Build Order**: AI-suggested construction sequence
- **Economic Reports**: Comprehensive status tracking
- **Trend Analysis**: Monitor economic health over time

## Installation

### Requirements
- Python 3.7 or higher
- No external dependencies required (uses only Python standard library)

### Quick Start

### Play Multiplayer Universe (Recommended)

```bash
# Clone the repository
git clone https://github.com/goblue0808/Genesis-Frontier.git
cd Genesis-Frontier

# Open in browser
open multiplayer.html   # macOS
# or
start multiplayer.html  # Windows
# or
xdg-open multiplayer.html  # Linux
```

### Play Single-Player Terraforming

```bash
# Open the single-player version
open index.html
```

### Experience the Modern Sci-Fi UI Concept ⭐ NEW

```bash
# Open the futuristic UI prototype
open scifi-ui.html
```

Features include:
- **3D Rotating Planet**: Interactive planet with mouse controls
- **Holographic Effects**: Neon accents and modern styling
- **Facility Management**: Toggle and slider controls for buildings
- **Terraforming Dashboard**: Real-time circular gauges
- **Galaxy Map**: Explore star systems with zoom controls
- **Planet Switcher**: Preview orbs for quick planet switching

See [SCIFI_UI_GUIDE.md](SCIFI_UI_GUIDE.md) for complete documentation.

### Run Economy Examples

```bash
# Run Python economy simulations
python3 examples.py
```

## Usage

### Basic Example

```python
from resource_economy import *

# Create a new planet
planet = PlanetState(name="New Hope")
manager = EconomyManager(planet)

# Check initial status
report = planet.get_economic_report()
print(f"Stability: {report['stability']}")

# Simulate building a farm
simulation = manager.simulate_construction(BuildingType.FARM)
print(f"Recommendation: {simulation['recommendation']}")

# Build if safe
if simulation['can_afford'] and simulation['projected_stability'] > 50:
    farm = create_building(BuildingType.FARM)
    success, message = planet.construct_building(farm)
    print(message)

# Process a turn
planet.process_turn()

# Get updated status
report = planet.get_economic_report()
print(f"Net Production: {report['net_production']}")
```

### Running Example Scenarios

```bash
python3 examples.py
```

Interactive scenarios included:
1. **Tutorial**: Basic colony setup
2. **Rapid Expansion**: Learn the dangers of building too fast
3. **Risk vs. Reward**: High-risk, high-reward building analysis
4. **Stability Collapse**: What happens when a planet fails
5. **Optimal Strategy**: Follow best practices for success

## Documentation

- **[MULTIPLAYER_GUIDE.md](MULTIPLAYER_GUIDE.md)**: ⭐ **Complete guide to multiplayer systems**
  - Starship construction and fleet management
  - Galaxy exploration and colonization
  - Diplomacy, trade, and warfare
  - Mega-projects and prestige rankings
  - Offline progression mechanics
  - Strategic tips and troubleshooting

- **[ECONOMY_GUIDE.md](ECONOMY_GUIDE.md)**: Complete guide to the economy system
  - Detailed building statistics
  - Stability mechanics explained
  - Strategic considerations for each game phase
  - Risk-reward analysis
  - Victory conditions and failure states
  - Advanced strategies

- **[resource_economy.py](resource_economy.py)**: Core system implementation
  - All classes and enums
  - Building templates
  - Economic calculations
  - Fully documented code

- **[examples.py](examples.py)**: Interactive examples and scenarios

## Game Mechanics

### Construction
```python
# Always simulate first
simulation = manager.simulate_construction(BuildingType.POWER_PLANT)

# Check recommendation
if "RECOMMENDED" in simulation['recommendation']:
    building = create_building(BuildingType.POWER_PLANT)
    planet.construct_building(building)
```

### Turn Processing
```python
# Process one game turn
planet.process_turn()

# Buildings produce resources (affected by efficiency)
# Population consumes food
# Energy is consumed
# Stability is recalculated
# Random events can cause building failures
```

### Stability Management
- Keep stability above 70 for optimal production
- Below 50 = production penalties
- Below 30 = severe production drops, cannot build
- Factors affecting stability:
  - Building strain
  - Resource shortages
  - Debt
  - Rapid expansion
  - Population pressure

### Upgrade System
```python
# Upgrade buildings for better efficiency
building.upgrade()
# +25% production per level
# +20% upkeep per level
# +15% stability cost per level
```

## Strategic Tips

1. **Start Small**: Begin with basic buildings (Farm, Power Plant, Mine)
2. **Monitor Stability**: Check before every construction
3. **Use Simulation**: Always simulate construction first
4. **Maintain Buffers**: Keep 20-30% resource reserves
5. **Avoid Debt**: Debt severely impacts stability
6. **Expand Gradually**: No more than 5 buildings quickly
7. **Balance Risk**: Mix basic and advanced buildings
8. **Plan Ahead**: Consider payback periods
9. **React Fast**: Address warning signs immediately
10. **Upgrade Strategically**: Better than always building new

## Building Comparison

| Building | Output | Stability Cost | Risk | Best Use |
|----------|--------|----------------|------|----------|
| Farm | 50 Food | 1.0 | 1% | Early game |
| Hydroponics Bay | 150 Food | 2.5 | 5% | Late game efficiency |
| Mine | 40 Metals | 2.0 | 3% | Basic production |
| Automated Mine | 120 Metals | 4.0 | 8% | High-scale production |
| Deep Core Extractor | 60 Rare Minerals | 8.0 | 15% | High risk/reward |

See [ECONOMY_GUIDE.md](ECONOMY_GUIDE.md) for complete building stats.

## API Reference

### Core Classes

- `ResourceType`: Enum of available resources
- `BuildingType`: Enum of building types
- `Resource`: Represents a resource quantity
- `ProductionBuilding`: Building with costs, production, and upkeep
- `PlanetState`: Current state of a planet's economy
- `EconomyManager`: Helper methods for economic management

### Key Methods

```python
# Planet operations
planet.construct_building(building) -> (bool, str)
planet.process_turn() -> None
planet.get_economic_report() -> Dict

# Manager operations
manager.simulate_construction(building_type) -> Dict
manager.get_optimal_build_order(turns) -> List[BuildingType]
manager.get_economic_trends(turns) -> Dict

# Building operations
building.get_net_production() -> Dict[ResourceType, float]
building.upgrade() -> bool
```

## Design Philosophy

The Genesis Frontier economy system is designed with these principles:

1. **Risk-Reward Balance**: Higher outputs come with higher risks
2. **Careful Planning**: Rushing leads to disaster
3. **Multiple Strategies**: Conservative, aggressive, and balanced approaches all viable
4. **Clear Feedback**: Players get actionable information
5. **Emergent Complexity**: Simple rules create complex decisions
6. **Meaningful Choices**: Every decision has tradeoffs

## Completed Enhancements ✅

The following features have been implemented:
- ✅ Trading system between planets
- ✅ Technology research tree
- ✅ Random exploration events
- ✅ Military units and defenses
- ✅ Multiplayer economy interactions
- ✅ Diplomacy and warfare systems
- ✅ Persistent offline progression

## Future Enhancements

Potential additions to the system:
- True multiplayer with multiple human players
- Real-time chat and messaging system
- Mobile app version
- More ship types and customization
- Enhanced AI for computer opponents
- Seasonal effects on production
- Additional mega-projects
- Achievement and quest system

## Contributing

Contributions are welcome! Areas for improvement:
- Additional building types
- New resource types
- Alternative economic models
- Balancing adjustments
- UI/visualization tools
- Performance optimizations

## License

This project is available for educational and personal use.

## Credits

Created for the Genesis Frontier planetary management MMO project.

---

**Ready to build your empire? Start with `python3 examples.py` to see the system in action!**
# Genesis Frontier 🌍

A browser-based multi-stage terraforming simulation game where you transform hostile alien worlds into thriving colonies.

## Features

- **Multi-Stage Progression System**: Transform planets through 6 distinct stages from hostile world to thriving colony
- **Multiple Planet Types**: Cold, Hot, Desert, and Barren planets, each with unique challenges
- **Comprehensive Terraforming Facilities**:
  - 🔥 Heating Facilities (melt ice on cold planets)
  - ❄️ Cooling Facilities (lower temperature on hot planets)
  - 💧 Humidifiers (increase atmospheric humidity)
  - 🌱 O2 Generators (increase oxygen levels)
  - 🏭 CO2 Scrubbers (reduce carbon dioxide)
  - 🌾 Soil Enrichment Stations
  - 💦 Water Extraction Plants
  - 🌬️ Pollution Filters
  - ☀️ Solar Power Arrays
  - 🏡 Agricultural Greenhouses
  - 🏙️ Habitat Domes
- **Dynamic Environmental System**: Natural changes, resource cycles, and environmental interactions
- **Environmental Collapse Mechanics**: Mismanagement leads to planetary collapse
- **Resource Management**: Balance energy, credits, and population
- **Stage-Based Building Unlocks**: Progress unlocks new technologies
- **Alert System**: Warnings for resource shortages and environmental dangers

## Quick Start

1. Open `index.html` in a modern web browser
2. Choose your planet type (or get a random one)
3. Build facilities to terraform the planet
4. Click "Next Turn" to progress
5. Reach Stage 5 to win!

## How to Play

1. **Analyze Your Planet**: Each planet type has different starting conditions
2. **Build Appropriate Facilities**: Cold planets need heating, hot planets need cooling
3. **Manage Resources**: Watch your energy and credits carefully
4. **Progress Through Stages**: Meet requirements to unlock new buildings
5. **Avoid Collapse**: Keep all environmental factors in safe ranges
6. **Win the Game**: Create a self-sustaining colony with 500+ population

## Documentation

See [GAME_DOCUMENTATION.md](GAME_DOCUMENTATION.md) for comprehensive game mechanics, strategy guides, and technical details.

## Technology

- Pure HTML5, CSS3, and JavaScript (ES6+)
- No dependencies or build process required
- Responsive design for desktop and mobile
- Fully client-side game logic

## Game Mechanics Highlights

### Atmospheric Control
- O2 and CO2 management with natural exchanges
- Temperature affects water states (ice, liquid, vapor)
- Pollution from industrial facilities

### Water Management
- Water extraction from underground sources
- Ice melting on cold planets through heating
- Condensation on hot planets through cooling
- Humidity control for desert environments

### Soil Enrichment
- Soil quality affects agriculture
- Natural degradation without maintenance
- Required for greenhouse operation

### Energy Requirements
- All facilities consume energy
- Solar arrays produce clean energy
- Energy shortages cause system failures

### Multi-Stage Unlocks
- Stage 0: Basic temperature control
- Stage 1: Atmospheric processing begins
- Stage 2: Environmental refinement
- Stage 3: Agriculture and ecosystems
- Stage 4: Colonization with habitats
- Stage 5: Self-sustaining colony (Victory!)

### Environmental Consequences
- Temperature extremes cause collapse
- Toxic atmospheres prevent life
- Resource depletion ends colonization
- Pollution crises require immediate action

## Future Plans

- Multiplayer features
- Random events system
- Research technology tree
- Multiple planets management
- Visual planet rendering
- Achievement system

## License

Free to use and modify for educational and personal projects.
# Genesis Frontier

A sci-fi strategy game about colonizing and terraforming a hostile, uninhabitable planet.

## Overview

Genesis Frontier is a deep, challenging simulation where players must establish humanity's first colony on Genesis Prime - a toxic, scorching, and completely hostile world. Starting with just a small survival pod and limited resources, players must overcome extreme environmental hazards, establish critical life support systems, build an industrial base, and ultimately begin the centuries-long process of terraforming the planet into a second home for humanity.

## Game Concept

The game challenges players to transform the most inhospitable environment imaginable into a thriving human settlement. Every decision matters, from choosing which critical system to build first, to managing scarce resources, to responding to environmental disasters. The progression spans from desperate day-to-day survival to multi-generational planetary engineering.

## Documentation

### 📄 [Planet Concept](PLANET_CONCEPT.md)
Detailed concept for Genesis Prime, including:
- Atmospheric composition and toxicity
- Temperature extremes and environmental hazards  
- Terrain features and geography
- Resource availability and scarcity
- Why humans cannot survive without technology
- Early structures and technologies needed for survival
- Terraforming progression over centuries

### 🎮 [Game Mechanics](GAME_MECHANICS.md)
Technical specifications and gameplay systems:
- Resource management and production chains
- Building catalog with stats and costs
- Technology research tree
- Hazard and disaster systems
- Colony management and colonist needs
- Mission milestones and victory conditions
- Difficulty settings

## Core Gameplay Features

- **Hostile Environment:** Every aspect of Genesis Prime is designed to kill you - toxic atmosphere, extreme heat, acid rain, dust storms, volcanic eruptions, and radiation
- **Survival Pressure:** Limited starting resources create time pressure to establish water, oxygen, and food production before supplies run out
- **Resource Management:** Complex production chains where every resource matters - water feeds electrolysis for oxygen, which supports colonists who operate machinery
- **Technology Progression:** Research tree spanning from basic survival tech to advanced terraforming megastructures
- **Dynamic Events:** Environmental disasters, equipment failures, and random events keep players adapting
- **Long-Term Vision:** The ultimate goal of transforming the planet takes centuries of in-game time, creating a true legacy experience

## The Challenge

Can you guide humanity through its most ambitious undertaking? Will your colony survive the first 90 days? Can you establish a self-sustaining industrial base? Will future generations see breathable air and blue skies?

**Genesis Prime shows no mercy. Every victory is earned.**

## Development Status

This project is currently in the concept and design phase. The detailed planet concept and game mechanics documentation establish the foundation for a unique and challenging strategy game experience.

## License

To be determined.
