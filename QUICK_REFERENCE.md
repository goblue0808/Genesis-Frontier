# Genesis Frontier: Quick Reference Guide

## Planet: Genesis Prime (GP-2847)

### Key Facts at a Glance

| Category | Details |
|----------|---------|
| **Classification** | Class-E Extreme World |
| **Atmosphere** | 78% CO₂, 12% SO₂, toxic and corrosive |
| **Pressure** | 2.3 atmospheres |
| **Temperature** | Day: 60-80°C, Night: 20-40°C (mid-latitudes) |
| **Survival Time (unprotected)** | 2-5 minutes (toxic atmosphere + heat) |
| **Day Length** | 31.4 hours |
| **Gravity** | 1.15 Earth standard |

### Why Humans Cannot Survive

1. **Toxic Atmosphere** - CO₂ and SO₂ cause respiratory failure in minutes
2. **Extreme Heat** - Surface temperatures deadly to unprotected humans
3. **Acid Rain** - pH 0.5-1.5 sulfuric acid corrodes everything
4. **Radiation** - 200% cosmic rays, 140% solar radiation (no magnetic field)
5. **No Resources** - Zero oxygen, extremely scarce water, no food
6. **Environmental Hazards** - Dust storms, volcanic eruptions, earthquakes

### Starting Situation

**Day 1:** 4 colonists in small survival pod with:
- 90 days oxygen supply
- 45 days water supply  
- 90 days food rations
- 250 kW nuclear reactor
- Basic construction equipment

**Primary Objective:** Establish water, oxygen, and food production before supplies run out

### Critical First 90 Days

#### Must Build (in order):
1. **Ice Mining Drill (Days 1-20)** - 500-1000 L water/day
2. **Electrolysis Plant (Days 10-30)** - 50 kg oxygen/day from water
3. **Hydroponic Module (Days 20-60)** - Food production (60-day growth cycle)
4. **Geothermal Plant (Days 40-75)** - 1-2 MW reliable power
5. **Habitat Expansion (Days 30-60)** - More living/working space

**Success = Self-sufficient in water, oxygen, and food by Day 90**  
**Failure = Colony dies - no rescue possible**

### Major Hazards

| Hazard | Frequency | Effects | Mitigation |
|--------|-----------|---------|------------|
| Dust Storms | Monthly | Solar power drops to 10%, zero visibility, equipment wear | Weather monitoring, retract panels, shelter |
| Acid Rain | Weekly | Corrosion, -5% structure integrity/hour | Acid-resistant coatings, covered storage |
| Volcanic Eruptions | Weekly (minor) | Lava flows, ash clouds, seismic damage | Build outside hazard zones, reinforcement |
| Solar Flares | Every 3-6 months | 500% radiation, electronics failures | Shielding, shelter protocols |
| Earthquakes | Every 2-3 days | Structure damage, pipeline ruptures | Seismic reinforcement, flexible joints |

### Resource Production Chains

```
ICE MINING → Water Storage → [Colonists, Hydroponics, Electrolysis]
                              ↓
                         Electrolysis → Oxygen Storage → [Colonists, Industry]
                                      ↘ Hydrogen → Fuel

HYDROPONICS → Food Storage → Colonists
  ↓
Requires: Water (20 L/day), Power (60 kW), LED lights

GEOTHERMAL DRILLING → Heat Exchanger → Steam Turbine → Power Grid
  ↓                                                       ↓
Continuous 1-2 MW                              All Colony Systems
```

### Technology Progression

**Tier 1 (Days 1-90): Survival**
- Water Extraction, Oxygen Production, Sealed Agriculture
- Geothermal Energy, Basic Automation

**Tier 2 (Year 1): Industrial Foundation**  
- Advanced Metallurgy, Industrial Chemistry, Robotics
- Automated Mining, Manufacturing, Atmospheric Processing

**Tier 3 (Year 2+): Terraforming**
- Atmospheric Engineering, Biotechnology, Ecosystem Design
- Mega Scrubbers, Biological Reactors, Orbital Sun Shades

### Terraforming Timeline

| Stage | Years | Milestone |
|-------|-------|-----------|
| Survival | 0-1 | Colony established, self-sufficient |
| Industrial | 1-10 | Mining, manufacturing, early terraforming research |
| Atmospheric Conversion | 10-100 | Reduce CO₂/SO₂, bacterial processors |
| Temperature Reduction | 100-200 | Cool planet via reduced greenhouse effect |
| Biosphere Creation | 200-300 | Forests, oxygen production, soil development |
| Full Terraforming | 300-500 | 21% oxygen, comfortable temps, breathable air |

### Key Terrain Features

- **Crimson Scar** - 400km canyon, landing site, protected from worst conditions
- **Mount Prometheus** - 12.4km active volcano, rich in metals, extremely dangerous
- **Glass Desert** - Obsidian plain from ancient impact, deadly radiation reflection
- **Volcanic Highlands** - 25% of surface, geothermal resources, unstable
- **Scorched Plains** - 40% of surface, cracked basalt, accessible but exposed

### Victory Conditions

- **Survival Victory** - Maintain colony 50 years
- **Industrial Victory** - 1,000 tons processed materials/year
- **Terraforming Victory** - Achieve 1% atmospheric oxygen
- **Ultimate Victory** - Breathable atmosphere (15%+ oxygen, ~300+ years)

### Difficulty Levels

| Mode | Starting Resources | Disasters | Research Speed | Supply Ships |
|------|-------------------|-----------|----------------|--------------|
| Easy | 150% | 50% frequency | 150% | Every year |
| Normal | 100% | 100% | 100% | Every 2 years |
| Hard | 75% | 150% | 75% | Every 3 years |
| Extreme | 50% | 200% | 50% | Every 5 years |

## Design Philosophy

**Core Theme:** Humanity's determination to create life in the most hostile environment imaginable

**Player Experience:**
- Early game: Desperate survival, constant threat of death
- Mid game: Industrial buildup, establishing security  
- Late game: Planetary transformation, witnessing change
- Endgame: Ultimate triumph - first breath of transformed air

**Every decision matters. Every resource counts. Every disaster must be overcome.**

## Visual Identity

### Colors
- **Sky:** Orange-brown (#C97B3F) to rust red (#8B4513)
- **Terrain:** Charcoal black (#36454F), rust orange (#CC5500), burnt sienna (#E97451)
- **Lava:** Bright orange-red (#FF4500) with white-hot centers
- **Structures:** Steel gray (#708090) with rust weathering
- **UI Status:** Green (safe), Yellow (warning), Red (critical)

### Atmosphere
- Perpetual orange haze reducing visibility
- Harsh shadows from intense sunlight
- Red lightning during storms
- Heat shimmer from surface
- Never-ending hostile environment

### Design Language
- Utilitarian structures focused on function over form
- Weathered, damaged equipment showing environmental toll
- Modular construction with visible connections
- Heavy protective coatings and shielding
- Human scale references to show machinery size

## Documentation Structure

1. **[README.md](README.md)** - Project overview and introduction
2. **[PLANET_CONCEPT.md](PLANET_CONCEPT.md)** - Complete planet design (27KB, 647 lines)
   - Atmosphere, temperature, hazards, terrain
   - Why humans can't survive
   - Early structures and technologies
   - Terraforming progression
   
3. **[GAME_MECHANICS.md](GAME_MECHANICS.md)** - Technical specifications (18KB, 468 lines)
   - Resource management systems
   - Building catalog with stats
   - Technology tree
   - Hazard mechanics
   - Victory conditions
   
4. **[VISUAL_DESIGN.md](VISUAL_DESIGN.md)** - Visual reference (11KB, 245 lines)
   - Color palettes
   - Environmental effects
   - Structure design
   - UI/HUD design
   - Character design
   
5. **[QUICK_REFERENCE.md](QUICK_REFERENCE.md)** - This document

## Next Steps for Development

1. **Game Engine Selection** - Choose appropriate engine (Unity, Unreal, custom)
2. **Prototype Core Systems** - Resource management, building, time progression
3. **Art Direction** - Create visual assets based on design documents
4. **Balance Testing** - Tune difficulty curves and resource consumption rates
5. **Narrative Development** - Write colonist stories and event descriptions
6. **UI/UX Design** - Implement information-dense but clear interface
7. **Playtesting** - Iterate based on player feedback

## Contact & Contribution

This is a comprehensive game design document ready for implementation. All core systems, mechanics, and visual direction have been specified in detail.

**The hostile environment isn't just a backdrop - it's the core challenge that makes every achievement meaningful.**

---
*Genesis Frontier - Where hope meets the harshest reality in the universe.*
