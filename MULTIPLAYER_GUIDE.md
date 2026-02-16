# Genesis Frontier - Multiplayer & Starship Systems Guide

## Overview

Genesis Frontier now features a comprehensive multiplayer universe where players can build starships, explore the galaxy, colonize multiple planets, engage in diplomacy and trade, and compete for galactic dominance. The game features persistent gameplay that continues even when you're offline.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Starship Construction](#starship-construction)
3. [Galaxy Exploration](#galaxy-exploration)
4. [Colonization](#colonization)
5. [Multiplayer Diplomacy](#multiplayer-diplomacy)
6. [Trade System](#trade-system)
7. [Warfare & Invasion](#warfare--invasion)
8. [Mega-Projects](#mega-projects)
9. [Prestige & Rankings](#prestige--rankings)
10. [Offline Progression](#offline-progression)

---

## Getting Started

### Accessing Multiplayer Mode

1. Open `multiplayer.html` in your web browser
2. Your game state is automatically saved every 30 seconds
3. Progress continues while you're offline (up to 24 hours)

### Initial Setup

You start with:
- **1 Home Planet** (Sol Prime) - Your first colony
- **5,000 Credits** - Currency for construction and operations
- **200 Energy** - Power for facilities and ships
- **1,000 Metals** - Construction material
- **0 Prestige** - Your reputation score

---

## Starship Construction

### The Shipyard

Build starships to explore, colonize, trade, and conquer. Each ship type serves a different purpose:

### Ship Types

#### 1. Scout Ship 🛸
- **Purpose**: Fast exploration of unknown systems
- **Cost**: 5,000 credits, 2,000 metals, 500 energy
- **Build Time**: 5 turns
- **Stats**:
  - Speed: 10 sectors/turn
  - Cargo: 100 units
  - Combat Power: 2
- **Unlock**: 100 population
- **Special**: +30% exploration bonus for finding rare resources

#### 2. Colony Ship 🚀
- **Purpose**: Establish new colonies on discovered planets
- **Cost**: 15,000 credits, 5,000 metals, 1,500 energy
- **Build Time**: 10 turns
- **Stats**:
  - Speed: 5 sectors/turn
  - Cargo: 500 units
  - Combat Power: 1
  - Colonists: 100
- **Unlock**: 500 population
- **Special**: Consumed when establishing a new colony

#### 3. Freighter 📦
- **Purpose**: Transport resources between your planets
- **Cost**: 8,000 credits, 3,000 metals, 800 energy
- **Build Time**: 6 turns
- **Stats**:
  - Speed: 7 sectors/turn
  - Cargo: 1,000 units (largest capacity)
  - Combat Power: 1
- **Unlock**: 200 population
- **Special**: Can establish automatic trade routes

#### 4. Warship ⚔️
- **Purpose**: Military operations, defense, and invasion
- **Cost**: 20,000 credits, 8,000 metals, 2,500 energy
- **Build Time**: 15 turns
- **Stats**:
  - Speed: 8 sectors/turn
  - Cargo: 200 units
  - Combat Power: 10 (strongest)
- **Unlock**: 1,000 population + 2 colonized planets
- **Special**: Required for planetary invasions

### Construction Queue

- Ships are built one at a time in your home planet's shipyard
- Progress is tracked per turn
- Multiple ships can be queued for sequential construction
- Construction continues while you're offline

---

## Galaxy Exploration

### Galaxy Structure

The universe consists of:
- **50 Star Systems** arranged in a 10x10 grid
- **1-5 Planets** per system (randomly generated)
- **10 Rare Resource Zones** scattered throughout
- **Travel Routes** connecting systems

### Discovering New Systems

1. Build a **Scout Ship** (recommended) or any ship
2. Select the ship from the **Fleet** tab
3. Navigate to the **Galaxy Map**
4. Click on an undiscovered system (❓ icon)
5. Send your ship to explore (travel time based on distance)

### Travel Mechanics

**Travel Time Formula**: `Distance / (Ship Speed / 10)` turns

- Distance is calculated using Euclidean distance between systems
- Faster ships reach destinations quicker
- Ships cannot be used while traveling

### Exploration Events

While traveling, ships have a **10% chance** of encountering random events:

| Event | Effect | Probability |
|-------|--------|-------------|
| Asteroid Field | -15 HP | 20% |
| Ancient Ruins | +500 credits | 20% |
| Spatial Anomaly | +100 rare resources | 20% |
| Pirates | -25 HP | 20% |
| Resource Cache | +1,000 metals | 20% |

### Rewards for Discovery

- **First Discovery**: +100 Prestige per system
- **Rare Resources**: Some planets have valuable deposits
- **Strategic Positioning**: Control key sectors

---

## Colonization

### Requirements

1. **Colony Ship** at the target system
2. **Uncolonized Planet** in the system
3. Planet must be discovered (system explored)

### Colonization Process

1. Navigate to **Galaxy Map** tab
2. Find a discovered system with unclaimed planets
3. Send a Colony Ship to that system
4. Click **Colonize** button on desired planet
5. Colony Ship is consumed, new colony established

### New Colony Details

Each new colony starts with:
- **100 Population** (from colony ship)
- **1,000 Credits**
- **100 Energy**
- **500 Metals**
- **Empty facilities** (build as needed)

### Multi-Planet Management

- Each planet develops independently
- Build facilities on each planet separately
- Resources are tracked per-planet
- Population grows on each colony
- Trade routes can transfer resources between your planets

### Colonization Rewards

- **+500 Prestige** per colony established
- **+10 Prestige/turn** for each owned planet
- Unlocks invasion capability (at 2+ planets)

---

## Multiplayer Diplomacy

### Diplomatic Relations

#### Relationship Status Types

1. **Neutral** (Default)
   - No special bonuses or penalties
   - Can trade if agreement is made
   - Can declare war at any time

2. **Peace**
   - Formal peaceful relations
   - Required to end wars
   - Enables easier trade negotiations

3. **Allied**
   - Strong positive relationship
   - Mutual defense agreements
   - Research and resource sharing
   - Cannot invade each other

4. **War**
   - Active hostilities
   - Can invade planets
   - Trade blocked
   - Opinion penalty

### Opinion System

Opinion ranges from **-100 (Hostile) to +100 (Friendly)**

| Opinion | Emoji | Description |
|---------|-------|-------------|
| 50-100 | 😊 | Very Friendly |
| 0-50 | 🙂 | Friendly |
| -50-0 | 😐 | Neutral |
| -100--50 | 😠 | Hostile |

### Treaty Types

#### Trade Agreement 💱
- **Requirement**: Opinion ≥ 20
- **Effect**: Enables resource trading
- **Benefit**: Access to scarce resources

#### Non-Aggression Pact 🤝
- **Requirement**: Opinion ≥ 0
- **Effect**: Cannot invade each other
- **Benefit**: Secure borders, focus on expansion

#### Alliance 🛡️
- **Requirement**: Opinion ≥ 50
- **Effect**: Military and economic cooperation
- **Benefit**: Mutual defense, research sharing

#### Peace Treaty ☮️
- **Requirement**: Opinion ≥ -50
- **Effect**: Ends active war
- **Benefit**: Stop resource drain from conflict

### Espionage

**Spy Mission** 🕵️
- **Cost**: 5,000 credits
- **Success Rate**: 60%
- **On Success**: Reveal opponent's:
  - Number of planets
  - Military strength
  - Approximate resources
- **On Failure**: Detected, -20 opinion with target

---

## Trade System

### Trade Routes

Establish automated resource transfers between your planets:

1. Need **at least 2 planets**
2. Require an available **Freighter**
3. Select source and destination planets
4. Choose resource type and amount
5. Transfer occurs automatically each turn

### Trade Benefits

- Balance resource production across your empire
- Supply resource-poor colonies
- Consolidate resources for major projects
- Optimize planetary specialization

### Inter-Player Trading

*(With Trade Agreement)*
- Negotiate resource exchanges
- Establish pricing
- Build diplomatic relations
- Access to rare resources you don't control

---

## Warfare & Invasion

### Invasion Requirements

**Critical Rule**: Must own **at least 2 colonized planets** to invade others

This prevents immediate aggressive expansion and encourages building a stable empire first.

### Additional Requirements

1. **Warships**: At least 1 available warship
2. **Resources**: 
   - 10,000 credits
   - 5,000 metals
3. **Target**: Enemy-controlled planet in a discovered system

### Invasion Mechanics

#### Attack Power Calculation
- Total Combat Power = Sum of all warships
- Need **20% advantage** over defense to succeed
- Base defense = 10 + defense structures

#### Battle Resolution

**Successful Invasion**:
- Planet ownership transfers to you
- +1,000 Prestige
- **30% warship casualties**
- Resources on planet captured
- Triggers war with owner (if not already at war)

**Failed Invasion**:
- No territorial gain
- **50% warship casualties** (heavy losses)
- Resources spent are lost
- Significant diplomatic penalty

### Defensive Structures

Build defenses to protect your planets:

#### Shield Generator 🛡️
- **Cost**: 5,000 credits
- **Defense Bonus**: +10
- **Effect**: Energy-based protection

#### Plasma Cannon 💥
- **Cost**: 8,000 credits
- **Defense Bonus**: +15
- **Effect**: Active weapon system

#### Orbital Platform 🏰
- **Cost**: 15,000 credits
- **Defense Bonus**: +25
- **Effect**: Heavily fortified space station

### Strategic Considerations

- **Build defenses early** on vulnerable frontier worlds
- **Maintain fleet strength** as deterrent
- **Protect resource-rich planets** with extra defenses
- **Calculate risks** before invasion attempts
- **Consider diplomacy** as alternative to war

---

## Mega-Projects

Mega-Projects are monumental constructions that provide empire-wide benefits and massive prestige.

### Requirements

- **Technology**: Mega-Structures tech researched
- **Resources**: Enormous investment
- **Planets**: Multiple colonies required
- **Time**: 40-75 turns to complete

### Available Mega-Projects

#### 1. Dyson Sphere ☀️
- **Description**: Harness the power of an entire star
- **Cost**: 
  - 100,000 credits
  - 50,000 metals
  - 1,000 rare resources
- **Build Time**: 50 turns
- **Requirements**: 5 planets
- **Effect**: Unlimited energy production
- **Prestige**: +5,000 on completion

#### 2. Ring World 🌍
- **Description**: Artificial ring-shaped megastructure
- **Cost**:
  - 150,000 credits
  - 80,000 metals
  - 2,000 rare resources
- **Build Time**: 75 turns
- **Requirements**: 8 planets
- **Effect**: Massive population capacity increase
- **Prestige**: +5,000 on completion

#### 3. Wormhole Gate 🌀
- **Description**: Network of instant-travel portals
- **Cost**:
  - 80,000 credits
  - 40,000 metals
  - 1,500 rare resources
- **Build Time**: 40 turns
- **Requirements**: 4 planets, Warp Drive tech
- **Effect**: Instant travel between connected systems
- **Prestige**: +5,000 on completion

### Construction Process

1. Verify you meet all requirements
2. Accumulate necessary resources
3. Start construction from Mega-Projects tab
4. Wait for completion (progress tracked automatically)
5. Receive prestige bonus and effects

---

## Prestige & Rankings

### Prestige System

Prestige is your galactic reputation score, earned through achievements and expansion.

### Ways to Earn Prestige

| Action | Prestige Reward |
|--------|-----------------|
| Discover new system | +100 |
| Colonize planet | +500 |
| Own planets (per turn) | +10 per planet |
| Complete mega-project | +5,000 |
| Successful invasion | +1,000 |

### Ranking System

Your rank is determined by total prestige accumulated:

| Rank | Prestige Required | Title |
|------|------------------|-------|
| 1 | 0 | Explorer |
| 2 | 1,000 | Colonist |
| 3 | 5,000 | Commander |
| 4 | 15,000 | Admiral |
| 5 | 50,000 | Overlord |
| 6 | 100,000 | Emperor |
| 7 | 250,000+ | Galactic Legend |

### Rank Benefits

Higher ranks provide:
- Increased diplomatic influence
- Better trade terms
- Intimidation factor in warfare
- Bragging rights in multiplayer

---

## Offline Progression

### How It Works

Genesis Frontier features **true persistent gameplay**:

1. **Auto-Save**: Game saves every 30 seconds
2. **Time Tracking**: System tracks when you last played
3. **Idle Calculation**: When you return, progress is calculated
4. **Turn Processing**: Up to 1,440 turns (24 hours) processed
5. **Resource Generation**: All planets continue producing
6. **Construction**: Ships and facilities complete as scheduled

### What Progresses While Offline

✅ **Continues**:
- Resource production on all planets
- Terraforming on all planets
- Ship construction
- Ship travel to destinations
- Facility effects
- Population growth
- Mega-project construction

❌ **Does Not Continue**:
- Manual exploration decisions
- Diplomatic negotiations
- Invasion launches
- Building new facilities

### Maximizing Offline Gains

**Before Logging Off**:
1. Queue ship construction
2. Send ships to explore (they'll arrive while offline)
3. Ensure all planets have functional facilities
4. Check energy production is positive
5. Start mega-projects if resources available

**Upon Return**:
- Review alert log for events
- Check completed constructions
- Manage newly arrived ships
- Address any resource shortages

### Offline Limits

- **Maximum**: 24 hours of offline progression
- **Rate**: 1 turn per minute (real-time)
- **Protection**: Planets won't collapse while offline

---

## Strategic Tips

### Early Game (Turns 1-50)
1. Focus on home planet development
2. Build 2-3 Scout Ships for exploration
3. Discover nearby systems
4. Save resources for first Colony Ship
5. Establish second colony for invasion unlock

### Mid Game (Turns 51-200)
1. Manage 3-5 colonies
2. Build Freighters for resource distribution
3. Establish defensive structures
4. Begin diplomatic relations
5. Consider first military operations

### Late Game (Turns 201+)
1. Launch mega-projects
2. Maintain large fleet (10+ ships)
3. Control key resource zones
4. Form powerful alliances
5. Compete for highest prestige rank

### Resource Management
- **Credits**: Most flexible, needed for everything
- **Energy**: Critical, shortage stops facilities
- **Metals**: Required for ships and structures
- **Rare Resources**: Scarce, save for mega-projects

### Expansion Strategy
- **Steady Growth**: New colony every 20-30 turns
- **Quality > Quantity**: Developed colonies are stronger
- **Strategic Locations**: Control resource zones
- **Defense Depth**: Don't over-extend borders

---

## Technical Details

### Save System
- **Location**: Browser localStorage
- **Format**: JSON serialization
- **Size**: ~50KB per save
- **Auto-Save**: Every 30 seconds
- **Manual Save**: Available via Save button

### Browser Compatibility
- Chrome/Edge: Fully supported
- Firefox: Fully supported
- Safari: Fully supported
- Mobile browsers: Playable but optimized for desktop

### Performance
- Handles 50+ systems efficiently
- Smooth with 20+ ships
- Multiple planets managed simultaneously
- No lag during turn processing

---

## Troubleshooting

### Game Won't Load
1. Clear browser cache
2. Check localStorage isn't full
3. Try different browser
4. Reset game (last resort)

### Lost Progress
- Check if localStorage save exists
- Look for export/backup (if implemented)
- Check browser privacy settings

### Performance Issues
- Close other browser tabs
- Disable browser extensions
- Reduce graphics if options available
- Update browser to latest version

---

## Future Enhancements

Potential future features:
- True multiplayer with multiple human players
- Real-time chat and messaging
- More ship types and upgrades
- Additional mega-projects
- Enhanced diplomacy options
- More random events
- Achievement system
- Leaderboards
- Mobile app version

---

## Quick Reference

### Key Shortcuts
- Home Planet = Turn 0 starting location
- 2 Planets = Invasion unlock
- 5,000 credits = Spy mission cost
- 10% = Exploration event chance
- 24 hours = Maximum offline progression

### Important Formulas
- Travel Time = Distance / (Speed / 10)
- Invasion Success = Attack Power > Defense × 1.2
- Idle Turns = Minutes Offline (max 1,440)

---

**Ready to build your galactic empire? Open `multiplayer.html` and start your journey!**
