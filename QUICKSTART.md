# Genesis Frontier - Quick Start Guide

## Getting Started in 30 Seconds

1. **Open the game**: Double-click `index.html` or open it in your web browser
2. **Understand your planet**: Look at the Planet Status panel to see what you're working with
3. **Build your first facility**: 
   - Cold planet (❄️)? Build **Heating Facilities**
   - Hot planet (🔥)? Build **Cooling Facilities**
   - Any planet? Build **Solar Power Arrays** for energy
4. **Click "Next Turn"** to see the effects
5. **Repeat** until you reach Stage 5 and win!

## Your First 10 Turns

### Cold Planet Strategy
1. **Turn 0**: Build 2 Heating Facilities + 1 Solar Array
2. **Turn 0-5**: Keep building Heating Facilities to reach -20°C
3. **Stage 1 reached!** Now you can build O2 Generators and Water Extractors
4. **Turn 6-10**: Add O2 Generators to boost oxygen
5. Continue progressing through stages

### Hot Planet Strategy
1. **Turn 0**: Build 2 Cooling Facilities + 1 Solar Array
2. **Turn 0-5**: Keep cooling the planet
3. **Stage 1 reached!** Build Water Extractors (water evaporates on hot planets)
4. **Turn 6-10**: Add O2 Generators and more cooling
5. Continue progressing through stages

## Understanding the UI

### Planet Status Panel (Top Left)
- Shows current stage and turn number
- All stats have progress bars:
  - **Temperature**: Goal is 15°C for victory
  - **Oxygen**: Need 70%+ for victory
  - **CO2**: Need to reduce below 40%
  - **Water**: Need 70%+ for victory
  - **Humidity**: Need 50%+ for victory
  - **Soil**: Need 80%+ for victory
  - **Pollution**: Keep below 10% for victory

### Resources Panel (Top Middle)
- **Energy**: Used to build facilities, consumed each turn
- **Credits**: Used to purchase buildings
- **Population**: Generates income, requires oxygen and water

### Energy Balance
- **Production**: Base 100 + Solar Arrays
- **Consumption**: Sum of all facility costs
- **Net**: Must stay positive or systems fail!

### Terraforming Facilities (Middle Left)
- Shows what you've built
- Displays cumulative effects per turn

### Available Buildings (Bottom Left)
- 🔒 = Locked (need higher stage)
- 💰 = Too expensive
- ⚠️ = Requirements not met
- Green "Build" button = Ready to purchase

### Alerts & Warnings (Bottom Right)
- 🎉 Green = Good news (stage progression, success)
- ⚠️ Orange = Warning (low resources)
- 🚨 Red = Danger (environmental problems)
- 💀 Red = Collapse (game over, must reset)

## Key Tips

### Energy Management
- **Always maintain positive energy balance**
- Build Solar Arrays early and often
- Each Solar Array produces +50 energy/turn
- If energy hits 0, your planet starts degrading

### Stage Progression
- Each stage unlocks new buildings
- Can't skip stages - must meet all requirements
- Check stage requirements in documentation
- Temperature is often the first bottleneck

### Avoiding Collapse
Watch out for these critical thresholds:
- Temperature < -50°C or > 100°C
- CO2 > 95%
- Pollution > 90%
- Oxygen < 5% (with population)
- Water < 5% (with population)

### Planet-Specific Facilities
- **Heating** works best on cold planets
- **Cooling** works best on hot planets  
- **Humidifiers** work best on desert/hot planets
- Other facilities work on all planets

### Resource Generation
- **Credits**: Come from population (0.5 per person per turn)
- **Energy**: Base 100/turn + Solar Arrays
- **Population**: Lives in Habitat Domes (unlocked at Stage 4)

## Common Mistakes

1. **Not building enough Solar Arrays** → Energy crisis
2. **Building too fast** → Running out of credits
3. **Ignoring pollution** → Environmental collapse
4. **Not balancing CO2/O2** → Toxic atmosphere
5. **Building greenhouses too early** → Not enough soil/water

## Victory Conditions

To win (reach Stage 5: Thriving Colony), you need:
- Temperature: 15°C or higher
- Oxygen: 70% or higher
- Water: 70% or higher
- Soil: 80% or higher
- Humidity: 50% or higher
- CO2: 40% or lower
- Pollution: 10% or lower
- Population: 500 or more

## Advanced Strategies

### Efficient Progression
- Focus on one stat at a time
- Temperature first (unlocks Stage 1)
- Then oxygen + water (unlocks Stage 2)
- Then soil quality (unlocks Stage 3)
- Finally balance everything (Stage 4+)

### Economic Engine
1. Reach Stage 4 as quickly as possible
2. Build multiple Habitat Domes
3. Population generates steady income
4. Use income to build more facilities

### Environmental Balance
- CO2 Scrubbers reduce temperature AND CO2
- Greenhouses convert CO2 to O2
- Pollution Filters clean air
- Balance is key - don't overdo any one thing

## Testing Your Skills

Want to test the game mechanics? Open `test.html` to run:
- 51 automated tests
- Validates all game systems
- Useful for understanding how things work

## Need Help?

- **Full documentation**: Read `GAME_DOCUMENTATION.md`
- **Game mechanics**: See detailed facility descriptions
- **Strategy guide**: Tips for each planet type
- **Technical details**: Architecture and implementation notes

## Have Fun!

Remember: Terraforming is hard! Environmental collapse is part of learning. Don't be afraid to reset and try different strategies!

Good luck, and may your colonies thrive! 🌍🚀
