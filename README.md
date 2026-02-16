# Genesis Frontier - Planetary Management MMO Economy System

## Overview

Genesis Frontier is a comprehensive resource economy system designed for a planetary management MMO. Players must carefully balance production, consumption, and expansion while maintaining planet stability through strategic decision-making and risk management.

## Features

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

```bash
# Clone the repository
git clone https://github.com/goblue0808/Genesis-Frontier.git
cd Genesis-Frontier

# Run the examples
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

## Future Enhancements

Potential additions to the system:
- Trading system between planets
- Technology research tree
- Random events and disasters
- Citizen happiness and morale
- Military units and defenses
- Multiplayer economy interactions
- Seasonal effects on production
- Environmental hazards

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