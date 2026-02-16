# Genesis Prime: Visual Design Reference

## Color Palette

### Atmospheric Colors
- **Primary Sky Color:** Orange-brown (#C97B3F) to rust red (#8B4513)
- **Dust Haze:** Burnt sienna (#E97451) with 60-80% opacity
- **Storm Clouds:** Dark rust (#5C4033) with occasional deep purple (#4B0082)
- **Lightning:** Crimson red (#DC143C) to electric orange (#FF6600)
- **Night Sky:** Never fully dark - dim orange glow (#8B4513 at 30% brightness)

### Terrain Colors
- **Volcanic Rock:** Charcoal black (#36454F) to dark gray (#696969)
- **Basalt Plains:** Dark brown (#654321) with cracks showing orange heat (#FF4500)
- **Sand/Dust:** Rust orange (#CC5500) to brown (#A0522D)
- **Crystal Formations:** Yellow sulfur (#FFFF00), white quartz (#F0F0F0), red iron oxide (#B7410E)
- **Lava:** Bright orange-red (#FF4500) with white-hot center (#FFFFFF)
- **Acid Pools:** Sickly yellow-green (#9ACD32) with vapor effects

### Built Structure Colors
- **Metal Structures:** Steel gray (#708090) with rust weathering (#B7410E)
- **Habitat Modules:** Clean white (#FFFFFF) when new, yellowed (#F5DEB3) with age
- **Solar Panels:** Dark blue-black (#191970) with dust coating (#CC5500)
- **Windows/Domes:** Tinted orange glass (#FFA500 at 40% opacity) - filtering radiation
- **Warning Markings:** Hazard yellow (#FFFF00) and black (#000000) stripes
- **Status Lights:** Green (operational), red (critical), amber (warning)

## Environmental Effects

### Atmosphere
- **Perpetual Haze:** Always present - reduces visibility to 50-500m depending on conditions
- **Heat Shimmer:** Visible distortion from ground heat during day
- **Dust Devils:** Small whirlwinds of orange dust constantly moving across plains
- **Acid Rain:** Translucent yellow-green droplets that smoke and hiss on contact
- **Aurora Effects:** Rare - greenish-purple auroras during solar storms (ionized sulfur compounds)

### Lighting
- **Daylight:** Harsh, orange-tinted light creating sharp shadows
- **Sun Appearance:** White-hot center with orange corona (through atmospheric filter)
- **Sunset/Sunrise:** Deep red to purple gradient, lasts only 15 minutes due to fast rotation
- **Night:** Never fully dark - dim orange ambient light from atmospheric scatter
- **Artificial Lighting:** Harsh white LEDs from structures contrast with orange environment
- **Lava Glow:** Red-orange light sources illuminating nearby terrain and atmosphere

### Weather Visuals
- **Dust Storms:** Complete whiteout/brownout conditions, zero visibility
  - Horizontal movement of dust at high speed
  - Occasional electrical discharges (red lightning)
  - Everything gets buried in orange-brown dust
  
- **Acid Rain:** 
  - Falling droplets with yellow-green tint
  - Steam/smoke effects where rain hits hot surfaces
  - Pooling in low areas with vapor rising
  
- **Volcanic Eruption:**
  - Ash column rising kilometers into sky
  - Pyroclastic flows - glowing orange-red avalanche of gas and rock
  - Lava fountains shooting hundreds of meters high
  - Dark ash falling like snow

## Structure Design Language

### Modular Habitat Philosophy
- **Cylindrical/Rectangular Modules:** Connected by enclosed corridors
- **Airlocks:** Every connection point - safety redundancy
- **Rounded Corners:** Easier to pressurize, more structural integrity
- **Thick Walls:** Visible insulation and radiation shielding
- **Few Windows:** Small, heavily reinforced viewports only
- **Antennas and Sensors:** Bristling from structures for communication and monitoring

### Construction Aesthetics
- **Utilitarian:** Function over form - this is survival equipment
- **Weathered:** Everything shows signs of acid damage and dust abrasion
- **Layered Protection:** Visible protective coatings, shields, covers
- **Exposed Piping:** Conduits and pipes visible on exteriors
- **Retrofitted:** Patches, additions, repairs visible - showing colony growth
- **Scale Reference:** Human-sized doors and ladders to show massive scale of equipment

### Industrial Equipment
- **Heavy Machinery:** Large, robust, over-engineered for harsh conditions
- **Dust Covers:** Everything has protective coverings when not in use
- **Warning Labels:** Hazard markings everywhere
- **Wear and Tear:** Nothing looks pristine - shows environmental damage
- **Maintenance Access:** Visible hatches, panels, service points
- **Lighting:** Bright work lights on all equipment

## UI/HUD Design

### Color Coding
- **Green:** Optimal/Safe
- **Yellow/Amber:** Warning/Caution
- **Red:** Critical/Danger
- **Blue:** Information/Selection
- **White:** Neutral text/labels

### Critical Readouts (Always Visible)
```
OXYGEN: 87% [████████░░] 435 kg | -12.5 kg/day
WATER:  42% [████░░░░░░] 840 L  | -18 L/day  ⚠️
FOOD:   91% [█████████░] 912 kg | -8 kg/day
POWER:  65% [██████░░░░] 1,625 kW / 2,500 kW

COLONISTS: 4 [All Healthy]
INTEGRITY: 94% [Minor Hull Damage - Bay 3]
SOL: Day 45 | 14:23 | Temp: 73°C

⚠️ ACID RAIN in 4.2 hours
```

### Environmental Warnings
- **Radiation Level:** Displayed with Geiger-style clicking intensity
- **Temperature:** Color-coded from blue (cold) to red (extreme heat)
- **Storm Proximity:** Countdown timer with severity indicator
- **Seismic Activity:** Real-time graph showing tremors

## Iconography

### Resource Icons
- **Oxygen:** O₂ molecule symbol in blue
- **Water:** Water droplet in blue
- **Food:** Wheat stalk or apple
- **Power:** Lightning bolt in yellow
- **Metal:** Gear or ingot
- **Silicon:** Microchip
- **Fuel:** Flame symbol

### Building Icons
- **Habitat:** House/dome shape
- **Power Plant:** Lightning bolt with building
- **Mining:** Pickaxe or drill
- **Research:** Flask or microscope
- **Agriculture:** Plant/leaf
- **Manufacturing:** Factory/assembly line
- **Storage:** Box or warehouse

### Status Icons
- **Operational:** Green checkmark
- **Warning:** Yellow exclamation triangle
- **Critical:** Red X or skull
- **Maintenance Needed:** Wrench
- **Research:** Microscope with progress bar
- **Construction:** Hammer and timer

## Character Design

### Colonist Appearance
- **Spacesuits (EVA):**
  - Bulky, armored design - protection from environment
  - Orange and white color scheme (high visibility in dust)
  - Large transparent helmet with heads-up display
  - Multiple layers visible - shows complexity
  - Backpack life support unit
  - Tool attachments on utility belt
  
- **Indoor Clothing:**
  - Practical jumpsuits in blue-gray
  - Name patches and colony insignia
  - Tool pockets and utility belts
  - Comfortable but functional
  - Personal touches (photos, patches) showing personality

### Colonist Specializations (Visual Distinctions)
- **Engineers:** Tool belt, tablet device, grease stains
- **Scientists:** Lab coat over jumpsuit, goggles, carrying samples
- **Medics:** Red cross insignia, medical scanner
- **Farmers:** Dirt stains, plant matter, pruning tools
- **Miners:** Heavy gloves, dust coverage, headlamp
- **Pilots:** Flight jacket, communication headset

## World Building Details

### Environmental Storytelling
- **Ancient Riverbeds:** Dry channels showing water once flowed
- **Impact Craters:** Various sizes showing asteroid bombardment history
- **Layered Rock Strata:** Visible geological history
- **Crystal Growth Patterns:** Showing chemical processes over time
- **Equipment Graveyard:** Failed previous missions or broken equipment
- **Survey Markers:** Probes and sensors left by earlier unmanned missions

### Progress Visualization
- **Early Game:** Tiny cluster of modules, small cleared area, everything temporary
- **Mid Game:** Growing complex, multiple buildings, roads/paths cleared, mining operations visible
- **Late Game:** Town-sized facility, industrial zones, early terraformed zones (small green domes)
- **End Game:** City with parkland domes, blue sky visible in sealed areas, transformation evident

### Dynamic Changes Over Time
- **Dust Accumulation:** Structures get dustier, requiring cleaning
- **Acid Damage:** Corrosion patterns spreading on exposed metal
- **Repairs:** Patches and replaced panels showing maintenance
- **Expansion:** New modules added, showing organic growth
- **Terraforming Progress:** 
  - Year 1: All orange-brown, 100% hostile
  - Year 10: Small sealed biodomes with green plants
  - Year 50: Large greenhouse domes, some surface plants (specialized)
  - Year 200+: Blue sky patches visible in distance, expanding green zones

## Audio Design Concepts

### Environmental Sounds
- **Wind:** Constant howling, changes intensity with storms
- **Dust Impact:** Pattering on metal structures, like sandblasting
- **Thunder:** Deep rumbling, crimson lightning cracks
- **Volcanic Rumble:** Low-frequency seismic vibration
- **Acid Rain Hiss:** Sizzling as acid contacts surfaces

### Mechanical Sounds
- **Life Support:** Rhythmic hum and air circulation whoosh
- **Doors/Airlocks:** Hydraulic hiss and mechanical clanks
- **Equipment:** Industrial machinery sounds - drills, smelters, pumps
- **Alarms:** Distinct tones for different emergency types
- **Rovers:** Electric whir mixed with dust grinding on wheels

### Habitat Ambience
- **Indoor:** Quiet hum, distant machinery, air circulation, footsteps on metal
- **Radio Chatter:** Colonists coordinating work
- **Computer Beeps:** Interface sounds, status updates
- **Human Activity:** Conversations, tool use, daily life sounds

## Cinematic Moments

### Key Visual Scenes
1. **Opening:** Colony ship approaching Genesis Prime - planet looks beautiful but deadly from orbit
2. **Landing:** Pod descent through orange atmosphere, violent shaking, dust kicked up on touchdown
3. **First EVA:** Colonist stepping onto surface, hostile environment overwhelming
4. **Dust Storm:** Wall of orange dust approaching, everything getting buried
5. **Volcanic Eruption:** Mount Prometheus erupting on horizon, pyroclastic flow visible
6. **First Harvest:** Colonist holding fresh tomato inside hydroponic module - emotion
7. **Expansion:** Time-lapse of colony growing from single module to complex
8. **Terraforming Success:** First breath of outdoor air without helmet (year 200+)

### Camera Perspectives
- **Ground Level:** Human perspective, shows scale and danger
- **Aerial/Drone:** Overview of colony and terrain
- **Interior:** Claustrophobic habitat spaces
- **Cockpit View:** From rover driving across terrain
- **Orbital:** Planet-scale view showing global changes over time

## Conclusion

Genesis Prime should feel **oppressive, hostile, and alien**, yet also **beautiful in its harshness**. The orange-brown atmosphere, the crimson lightning, the glowing lava - these create a unique and memorable world. The contrast between the hostile exterior and the safe, clean interiors of habitats emphasizes the constant battle for survival.

As terraforming progresses, players should feel genuine emotional impact watching small patches of green appear, seeing the sky slowly shift toward blue, and ultimately achieving the impossible: making Genesis Prime truly habitable.

**Every visual should reinforce the core theme: humanity's determination to create life in the most hostile environment imaginable.**
