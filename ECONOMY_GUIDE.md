# Genesis Frontier - Resource Economy Guide

## Overview

Genesis Frontier features a complex resource economy system designed for a planetary management MMO. Players must carefully balance production, consumption, and expansion while maintaining planet stability.

## Core Resources

### 1. Food
- **Purpose**: Sustains population
- **Consumption**: 0.5 units per person per turn
- **Critical Resource**: Running out causes immediate stability drops
- **Production Buildings**: Farm, Hydroponics Bay

### 2. Metals
- **Purpose**: Construction material and factory input
- **Consumption**: Used in most building construction
- **Production Buildings**: Mine, Automated Mine

### 3. Rare Minerals
- **Purpose**: Advanced technology and high-tier buildings
- **Value**: High value, limited availability
- **Risk**: Deep Core Extractors offer high yields but high risk
- **Production Buildings**: Quarry, Deep Core Extractor

### 4. Energy
- **Purpose**: Powers all buildings and infrastructure
- **Consumption**: 10 units per building + special requirements
- **Production Buildings**: Power Plant, Fusion Reactor

### 5. Manufactured Goods
- **Purpose**: Required for construction and advanced production
- **Production**: Requires metals and energy as inputs
- **Production Buildings**: Factory, Advanced Factory

## Production Buildings

### Basic Tier

#### Farm
- **Construction Cost**: 100 Metals, 50 Manufactured Goods
- **Production**: 50 Food/turn
- **Upkeep**: 5 Energy/turn
- **Stability Cost**: 1.0
- **Risk Factor**: 1% failure chance
- **Best For**: Early game food production

#### Mine
- **Construction Cost**: 150 Metals, 100 Manufactured Goods
- **Production**: 40 Metals/turn
- **Upkeep**: 10 Energy, 5 Food/turn
- **Stability Cost**: 2.0
- **Risk Factor**: 3% failure chance
- **Best For**: Establishing metal production chain

#### Power Plant
- **Construction Cost**: 250 Metals, 200 Manufactured Goods
- **Production**: 100 Energy/turn
- **Upkeep**: 5 Metals/turn
- **Stability Cost**: 2.5
- **Risk Factor**: 4% failure chance
- **Best For**: Early to mid-game energy needs

#### Factory
- **Construction Cost**: 300 Metals, 100 Manufactured Goods
- **Production**: 30 Manufactured Goods/turn
- **Upkeep**: 20 Energy, 10 Metals, 5 Food/turn
- **Stability Cost**: 3.0
- **Risk Factor**: 4% failure chance
- **Best For**: Establishing manufacturing capability

#### Quarry
- **Construction Cost**: 200 Metals, 150 Manufactured Goods
- **Production**: 15 Rare Minerals/turn
- **Upkeep**: 15 Energy, 8 Food/turn
- **Stability Cost**: 3.0
- **Risk Factor**: 5% failure chance
- **Best For**: Early rare mineral extraction

### Advanced Tier

#### Hydroponics Bay
- **Construction Cost**: 300 Metals, 50 Rare Minerals, 150 Manufactured Goods
- **Production**: 150 Food/turn (3x Farm)
- **Upkeep**: 20 Energy, 2 Rare Minerals/turn
- **Stability Cost**: 2.5
- **Risk Factor**: 5% failure chance
- **Best For**: Efficient late-game food production
- **Considerations**: High upkeep, requires rare minerals

#### Automated Mine
- **Construction Cost**: 400 Metals, 100 Rare Minerals, 300 Manufactured Goods
- **Production**: 120 Metals/turn (3x Mine)
- **Upkeep**: 30 Energy, 5 Manufactured Goods/turn
- **Stability Cost**: 4.0
- **Risk Factor**: 8% failure chance
- **Best For**: Large-scale metal production
- **Considerations**: High stability cost, significant failure risk

#### Deep Core Extractor
- **Construction Cost**: 500 Metals, 150 Rare Minerals, 400 Manufactured Goods
- **Production**: 60 Rare Minerals/turn (4x Quarry)
- **Upkeep**: 40 Energy, 10 Manufactured Goods/turn
- **Stability Cost**: 8.0 (highest!)
- **Risk Factor**: 15% failure chance (highest!)
- **Best For**: High-risk, high-reward late game
- **Considerations**: VERY destabilizing, high failure rate

#### Fusion Reactor
- **Construction Cost**: 600 Metals, 200 Rare Minerals, 500 Manufactured Goods
- **Production**: 400 Energy/turn (4x Power Plant)
- **Upkeep**: 5 Rare Minerals/turn
- **Stability Cost**: 6.0
- **Risk Factor**: 12% failure chance
- **Best For**: Late-game energy production
- **Considerations**: Very expensive but efficient long-term

#### Advanced Factory
- **Construction Cost**: 700 Metals, 150 Rare Minerals, 300 Manufactured Goods
- **Production**: 100 Manufactured Goods/turn (3.3x Factory)
- **Upkeep**: 50 Energy, 25 Metals, 5 Rare Minerals/turn
- **Stability Cost**: 5.0
- **Risk Factor**: 8% failure chance
- **Best For**: Large-scale manufacturing
- **Considerations**: Heavy upkeep requirements

## Planet Stability System

### Stability Range
- **100-90**: Optimal - Buildings get +10% production efficiency
- **90-70**: Stable - Normal production (100% efficiency)
- **70-50**: Unstable - Minor production drops (90% efficiency)
- **50-30**: Critical - Significant production drops (75% efficiency)
- **Below 30**: Collapse - Severe production drops (50% efficiency)

### Stability Factors

#### Building Strain
- Each building adds a stability cost
- Advanced buildings have higher stability costs
- Total strain directly reduces stability

#### Resource Shortages
- Negative resources (deficit) severely impact stability
- Each negative resource unit: -0.1 stability
- Running out of food is particularly critical

#### Debt Impact
- Debt reduces stability at 0.01 per unit
- Maximum debt penalty: 30 stability points
- Avoid accumulating debt when possible

#### Rapid Expansion
- Building more than 5 buildings recently increases instability
- Expansion penalty: (expansion_rate - 5) × 2
- Expansion rate decays by 20% each turn

#### Population Pressure
- Food per capita below 1.0 causes instability
- Penalty: (1.0 - food_per_capita) × 20
- Ensure adequate food production for population

## Risk-Reward Mechanics

### Building Failure Risk
- Each building has a failure chance per turn
- Failed buildings operate at 50% efficiency that turn
- Higher-tier buildings have higher failure rates
- Consider reliability vs. output when planning

### Expansion Timing
- Rapid expansion destabilizes the planet
- Build gradually to maintain stability
- Use construction simulation to assess impact
- Wait for stability to recover between major projects

### Resource Balancing
- Shortages cascade: no energy → no production
- Maintain buffer reserves (20-30% of consumption)
- Plan production chains carefully
- Diversify resource sources

### Advanced vs. Basic Buildings
- Advanced buildings: Higher output, higher cost, higher risk
- Basic buildings: Lower output, more stable, safer
- Mixed strategies often work best
- Upgrade gradually as economy stabilizes

## Strategic Considerations

### Early Game (Turns 1-20)
1. Build 1-2 Farms for food security
2. Build 1-2 Power Plants for energy
3. Build 1 Mine for metal production
4. Build 1 Factory to produce goods
5. Maintain stability above 70

### Mid Game (Turns 20-50)
1. Upgrade to Hydroponics Bay if stable
2. Add more Power Plants or prepare for Fusion Reactor
3. Expand mining operations
4. Build Quarry for rare minerals
5. Focus on efficiency and upkeep balance

### Late Game (Turns 50+)
1. Transition to advanced buildings
2. Build Deep Core Extractor only if stable (>70)
3. Optimize production chains
4. Plan upgrades carefully
5. Monitor stability constantly

### Warning Signs
- **Stability below 50**: Stop expansion immediately
- **Negative resources**: Emergency - sell buildings or take debt
- **High expansion rate**: Slow down construction
- **Multiple building failures**: Economy is overextended

## Upgrade System

Buildings can be upgraded to level 5:
- **Production**: +25% per level
- **Upkeep**: +20% per level  
- **Stability Cost**: +15% per level
- **Net Effect**: Positive, but increases resource pressure

Upgrade when:
- You have excess resources
- Stability is high (>70)
- Alternative to building new structures

## Economic Planning Tools

### Construction Simulation
```python
manager.simulate_construction(BuildingType.FARM)
```
Returns:
- Can afford check
- Projected stability
- Net production impact
- Payback period analysis
- Risk assessment
- Recommendation

### Optimal Build Order
```python
manager.get_optimal_build_order(turns=10)
```
Suggests best building sequence considering:
- Resource availability
- Stability impact
- Return on investment
- Risk factors

### Economic Report
```python
planet.get_economic_report()
```
Shows:
- Current turn and stability
- Resource stockpiles
- Building count
- Net production rates
- Economic health metrics

## Victory Conditions & Failure States

### Thriving Planet
- Stability > 80
- All resources positive
- Growing population
- Balanced production

### Struggling Planet  
- Stability 30-50
- Resource shortages
- Frequent building failures
- Declining efficiency

### Collapsed Planet
- Stability < 30
- Severe production penalties
- Cannot construct new buildings
- Requires bailout/restart

## Advanced Strategies

### The Conservative Approach
- Build only basic tier buildings
- Maintain high stability (>80)
- Slow but steady growth
- Lower risk, lower reward

### The Aggressive Expansion
- Build advanced buildings early
- Accept moderate instability (50-70)
- High risk, high reward
- Requires careful management

### The Balanced Portfolio
- Mix of basic and advanced buildings
- Monitor stability carefully
- Calculated risks
- Optimal for most players

### The Specialist Economy
- Focus on one or two resource types
- Trade or convert resources
- Deep specialization
- Requires market system (future feature)

## Tips for Success

1. **Always check stability before building**
2. **Maintain food buffer for population**
3. **Energy is the lifeblood - never shortage**
4. **Start with basic buildings, upgrade later**
5. **Use construction simulation religiously**
6. **Don't build Deep Core Extractors unless stable**
7. **Spread out construction over multiple turns**
8. **Monitor net production each turn**
9. **React to warning signs immediately**
10. **Plan for the long term - payback matters**

## Conclusion

The Genesis Frontier economy rewards careful planning and punishes reckless expansion. Success requires balancing immediate needs with long-term stability, understanding risk-reward tradeoffs, and adapting strategies as your planet develops. 

Remember: A collapsed planet benefits no one. Build smart, build safe, and prosper!
